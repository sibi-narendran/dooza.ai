// Dooza Compliance India lead form (Sibi 2026-11-13 22:00 via Apollo). -> Close lead + note + email odysseus@ (like /takeoff).
import { closeFetch, STATUS_POTENTIAL, clean } from '../../../lib/agentHire';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const HIDDEN = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const SVC = { general: 'General', epr: 'EPR', fcra: 'FCRA', bis: 'BIS', gst: 'GST' };
const json = (d, s = 200) => new Response(JSON.stringify(d), { status: s, headers: { 'Content-Type': 'application/json' } });

// Email copy to Odysseus (asked 11-13 14:12): mail wakes him, a Close lead doesn't. Zoho AgentInbox, Worker secret ZOHO_AGENTINBOX_KEY.
async function mailOdysseus(subject, content) {
    const key = process.env.ZOHO_AGENTINBOX_KEY;
    if (!key) { console.error('in-lead mail: no key'); return; }
    try {
        const r = await fetch('https://api.zohoagentinbox.in/api/v0.9/agents/Achilles/messages', {
            method: 'POST',
            headers: { Authorization: `Zoho-zapikey ${key}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ fromAddress: 'achilles@dooza.org', toAddress: 'odysseus@dooza.org', subject, content, mailFormat: 'plaintext' }),
        });
        if (!r.ok) console.error('in-lead mail', r.status);
    } catch (e) { console.error('in-lead mail', e.message); }
}

export async function POST(request) {
    let f;
    try { f = await request.formData(); } catch { return json({ ok: false, error: 'Invalid request.' }, 400); }
    const g = (k, n) => clean(String(f.get(k) || ''), n);
    if (g('website', 200)) return json({ ok: true }); // honeypot
    const email = g('email', 160).toLowerCase();
    const name = g('name', 120);
    const company = g('company', 160);
    const wa = g('whatsapp', 40);
    const message = g('message', 2000);
    const svc = SVC[g('service', 20)] ? g('service', 20) : 'general';
    if (!name) return json({ ok: false, error: 'Please add your name.' }, 400);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, error: 'Please check your email.' }, 400);
    if ((wa.match(/\d/g) || []).length < 10) return json({ ok: false, error: 'Please check your WhatsApp number.' }, 400);
    const apiKey = process.env.CLOSE_API_KEY;
    if (!apiKey) return json({ ok: false, error: 'Could not save right now. Please try again in a minute.' }, 503);
    const source = `Google Ads India ${SVC[svc]}`;
    const tracking = HIDDEN.map((k) => `${k}: ${g(k, 200) || '-'}`);
    let leadId;
    try {
        const lead = await closeFetch(apiKey, '/lead/', {
            method: 'POST',
            body: JSON.stringify({
                name: `India ${SVC[svc]}: ${company || name}`,
                status_id: STATUS_POTENTIAL,
                description: `Lead source: ${source}. Dooza Compliance India via dooza.ai/in. WhatsApp within 15 min (9am-9pm IST). Owner: Odysseus.`,
                contacts: [{ name, emails: [{ email, type: 'office' }], phones: [{ phone: wa, type: 'mobile' }] }],
            }),
        });
        leadId = lead.id;
        const note = [`Dooza Compliance India request (${source})`, `Service: ${SVC[svc]}`, `Name: ${name}`, `Company / NGO: ${company || '-'}`, `WhatsApp: ${wa}`, `Email: ${email}`, `Message: ${message || '-'}`, `Page: ${g('page', 200) || '-'}`, ...tracking, `Submitted: ${new Date().toISOString()}`].join('\n');
        await closeFetch(apiKey, '/activity/note/', { method: 'POST', body: JSON.stringify({ lead_id: lead.id, note }) });
        await mailOdysseus(`India ${SVC[svc]} lead: ${company || name} (WhatsApp within 15 min)`, `${note}\n\nClose lead: https://app.close.com/lead/${lead.id}/`);
    } catch (e) {
        console.error('in-lead', e.message);
        return json({ ok: false, error: 'Could not save right now. Please try again in a minute.' }, 502);
    }
    return json({ ok: true, id: leadId });
}
