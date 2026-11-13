// /tc form v2 (Sibi 2026-11-12 19:32 via Apollo): multipart. phone + email + message and/or contract file.
// Close lead + note (file attached via Close files API) + task to Sibi. tools/tc_leads.py alerts @hercules + @apollo.
import { closeFetch, STATUS_POTENTIAL, clean } from '../../../lib/agentHire';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SIBI_CLOSE_USER = 'user_tMVvbOIMZDjMMSJNQmHNFhaGTjplpDvQZk9ZAsIGkst';
const HIDDEN = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const MAX = 10 * 1024 * 1024;
const json = (d, s = 200) => new Response(JSON.stringify(d), { status: s, headers: { 'Content-Type': 'application/json' } });

async function attach(apiKey, file) {
    // Close files: request an upload slot, POST the file to it, then reference download.url in a note.
    const slot = await closeFetch(apiKey, '/files/upload/', { method: 'POST', body: JSON.stringify({ filename: file.name || 'contract', content_type: file.type || 'application/octet-stream' }) });
    const fd = new FormData();
    Object.entries(slot.upload.fields || {}).forEach(([k, v]) => fd.append(k, v));
    fd.append('file', file, file.name || 'contract');
    const r = await fetch(slot.upload.url, { method: 'POST', body: fd });
    if (!r.ok && r.status !== 204) throw new Error(`upload ${r.status}`);
    return { url: slot.download.url, filename: file.name || 'contract', content_type: file.type || 'application/octet-stream' };
}

export async function POST(request) {
    let f;
    try { f = await request.formData(); } catch { return json({ ok: false, error: 'Invalid request.' }, 400); }
    const g = (k, n) => clean(String(f.get(k) || ''), n);
    if (g('website', 200)) return json({ ok: true }); // honeypot
    const email = g('email', 160).toLowerCase();
    const phone = g('phone', 40);
    const name = g('name', 120);
    const closing = g('closing', 20);
    const message = g('message', 2000);
    const file = f.get('file');
    const hasFile = file && typeof file === 'object' && file.size > 0;
    if (hasFile && file.size > MAX) return json({ ok: false, error: 'That file is over 10 MB.' }, 400);
    const missing = [];
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) missing.push('email');
    if (phone && phone.replace(/\D/g, '').length < 10) missing.push('mobile');
    if (g('followup', 2) !== '1' && !name) missing.push('name');
    if (g('followup', 2) !== '1' && !closing) missing.push('closing date');
    if (missing.length) return json({ ok: false, error: `Please check: ${missing.join(', ')}.` }, 400);
    const apiKey = process.env.CLOSE_API_KEY;
    if (!apiKey) return json({ ok: false, error: 'Could not save right now. Please try again in a minute.' }, 503);
    const tracking = HIDDEN.map((k) => `${k}: ${g(k, 200) || '-'}`);
    try {
        let att = null, attErr = '';
        if (hasFile) { try { att = await attach(apiKey, file); } catch (e) { attErr = e.message; console.error('tc-lead attach', e.message); } }
        const fileLine = hasFile ? `File: ${att ? `${att.filename} (attached)` : `${file.name} (UPLOAD FAILED: ${attErr}; ask them to email it)`}` : 'File: none';
        if (g('followup', 2) === '1') {
            // Contract dropped after submit: find their lead by email, add a note.
            const found = await closeFetch(apiKey, `/lead/?query=${encodeURIComponent(`email:${email}`)}&_fields=id&_limit=1`);
            const id = found?.data?.[0]?.id;
            if (id) await closeFetch(apiKey, '/activity/note/', { method: 'POST', body: JSON.stringify({ lead_id: id, note: `TC contract follow-up upload via dooza.ai/tc\n${fileLine}`, ...(att ? { attachments: [att] } : {}) }) });
            return json({ ok: true });
        }
        const lead = await closeFetch(apiKey, '/lead/', {
            method: 'POST',
            body: JSON.stringify({
                name: `TC free file: ${name || email}`,
                status_id: STATUS_POTENTIAL,
                description: 'Transaction coordinator free file via dooza.ai/tc (v3: name, email, closing date; contract optional)',
                contacts: [{ name: name || email, emails: [{ email, type: 'office' }], ...(phone ? { phones: [{ phone, type: 'mobile' }] } : {}) }],
            }),
        });
        const note = ['TC free file request via dooza.ai/tc', `Name: ${name || '-'}`, `Email: ${email}`, `Expected closing: ${closing || '-'}`, `Mobile: ${phone || '- (email only)'}`, `Message: ${message || '-'}`, fileLine, 'SMS consent: shown under phone field', ...tracking, `Submitted: ${new Date().toISOString()}`].join('\n');
        await closeFetch(apiKey, '/activity/note/', { method: 'POST', body: JSON.stringify({ lead_id: lead.id, note, ...(att ? { attachments: [att] } : {}) }) });
        await closeFetch(apiKey, '/task/', { method: 'POST', body: JSON.stringify({ lead_id: lead.id, assigned_to: SIBI_CLOSE_USER, text: `TC free file: ${hasFile ? 'contract attached' : 'no contract yet'} · closing ${closing} · ${phone ? 'text + email' : 'email'} now.`, date: new Date().toISOString().slice(0, 10), is_complete: false }) });
    } catch (e) {
        console.error('tc-lead', e.message);
        return json({ ok: false, error: 'Could not save right now. Please try again in a minute.' }, 502);
    }
    return json({ ok: true });
}
