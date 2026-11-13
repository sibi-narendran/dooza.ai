// /takeoff form (Sibi 2026-11-13 13:07 via Apollo; offer = Odysseus OFFERS.md T1). Plan upload -> Close lead + note + file.
// Odysseus works these leads (odysseus@dooza.org). GA4 event takeoff_form_submit fires client side.
import { closeFetch, STATUS_POTENTIAL, clean } from '../../../lib/agentHire';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const HIDDEN = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const TRADES = ['drywall', 'roofing', 'other'];
const MAX = 25 * 1024 * 1024;
const json = (d, s = 200) => new Response(JSON.stringify(d), { status: s, headers: { 'Content-Type': 'application/json' } });

async function attach(apiKey, file) {
    const slot = await closeFetch(apiKey, '/files/upload/', { method: 'POST', body: JSON.stringify({ filename: file.name || 'plan.pdf', content_type: file.type || 'application/pdf' }) });
    const fd = new FormData();
    Object.entries(slot.upload.fields || {}).forEach(([k, v]) => fd.append(k, v));
    fd.append('file', file, file.name || 'plan.pdf');
    const r = await fetch(slot.upload.url, { method: 'POST', body: fd });
    if (!r.ok && r.status !== 204) throw new Error(`upload ${r.status}`);
    return { url: slot.download.url, filename: file.name || 'plan.pdf', content_type: file.type || 'application/pdf' };
}

export async function POST(request) {
    let f;
    try { f = await request.formData(); } catch { return json({ ok: false, error: 'Invalid request.' }, 400); }
    const g = (k, n) => clean(String(f.get(k) || ''), n);
    if (g('website', 200)) return json({ ok: true }); // honeypot
    const email = g('email', 160).toLowerCase();
    const name = g('name', 120);
    const company = g('company', 160);
    const phone = g('phone', 40);
    const message = g('message', 2000);
    const trade = TRADES.includes(g('trade', 20)) ? g('trade', 20) : 'other';
    const link = g('link', 500);
    const file = f.get('file');
    const hasFile = file && typeof file === 'object' && file.size > 0;
    if (hasFile && file.size > MAX) return json({ ok: false, error: 'That file is over 25 MB. Paste a download link instead.' }, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, error: 'Please check your email.' }, 400);
    if (!hasFile && !link && !message) return json({ ok: false, error: 'Upload the plan PDF, paste a link to it, or tell us about the job.' }, 400);
    const apiKey = process.env.CLOSE_API_KEY;
    if (!apiKey) return json({ ok: false, error: 'Could not save right now. Please try again in a minute.' }, 503);
    const tracking = HIDDEN.map((k) => `${k}: ${g(k, 200) || '-'}`);
    try {
        let att = null, attErr = '';
        if (hasFile) { try { att = await attach(apiKey, file); } catch (e) { attErr = e.message; console.error('takeoff-lead attach', e.message); } }
        const fileLine = hasFile ? `File: ${att ? `${att.filename} (attached)` : `${file.name} (UPLOAD FAILED: ${attErr}; ask them to email it)`}` : 'File: none';
        const lead = await closeFetch(apiKey, '/lead/', {
            method: 'POST',
            body: JSON.stringify({
                name: `Takeoff (${trade}): ${company || name || email}`,
                status_id: STATUS_POTENTIAL,
                description: `Free first takeoff request via dooza.ai/takeoff (${trade}). Owner: Odysseus.`,
                contacts: [{ name: name || email, emails: [{ email, type: 'office' }], ...(phone ? { phones: [{ phone, type: 'mobile' }] } : {}) }],
            }),
        });
        const note = ['Free first takeoff request via dooza.ai/takeoff', `Trade: ${trade}`, `Name: ${name || '-'}`, `Company: ${company || '-'}`, `Email: ${email}`, `Phone: ${phone || '-'}`, `Plan link: ${link || '-'}`, `Message: ${message || '-'}`, fileLine, `Page: ${g('page', 200) || '-'}`, ...tracking, `Submitted: ${new Date().toISOString()}`].join('\n');
        await closeFetch(apiKey, '/activity/note/', { method: 'POST', body: JSON.stringify({ lead_id: lead.id, note, ...(att ? { attachments: [att] } : {}) }) });
    } catch (e) {
        console.error('takeoff-lead', e.message);
        return json({ ok: false, error: 'Could not save right now. Please try again in a minute.' }, 502);
    }
    return json({ ok: true });
}
