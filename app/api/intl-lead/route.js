// /za-tax + /ie-accounts staging forms (Apollo 2026-11-12). Close lead + note + task to Sibi; tools/tc_leads.py alerts @apollo.
import { closeFetch, STATUS_POTENTIAL, clean } from '../../../lib/agentHire';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
const SIBI_CLOSE_USER = 'user_tMVvbOIMZDjMMSJNQmHNFhaGTjplpDvQZk9ZAsIGkst';
const HIDDEN = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const PAGES = { 'za-tax': 'ZA tax', 'ie-accounts': 'IE accounts' };
const json = (d, s = 200) => new Response(JSON.stringify(d), { status: s, headers: { 'Content-Type': 'application/json' } });

export async function POST(request) {
    let b;
    try { b = await request.json(); } catch { return json({ ok: false, error: 'Invalid request.' }, 400); }
    if (b.website) return json({ ok: true });
    const slug = clean(b.page_slug, 20);
    if (!PAGES[slug]) return json({ ok: false, error: 'Invalid request.' }, 400);
    const name = clean(b.name, 120), contact = clean(b.contact, 160), company = clean(b.company, 160);
    if (!name || !company || !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) || contact.replace(/\D/g, '').length >= 9)) return json({ ok: false, error: 'Please fill all three fields.' }, 400);
    const apiKey = process.env.CLOSE_API_KEY;
    if (!apiKey) return json({ ok: false, error: 'Could not save right now. Please try again in a minute.' }, 503);
    const isEmail = /@/.test(contact);
    try {
        const lead = await closeFetch(apiKey, '/lead/', { method: 'POST', body: JSON.stringify({
            name: `${PAGES[slug]}: ${company} (${name})`, status_id: STATUS_POTENTIAL, description: `Staging lead via dooza.ai/${slug}`,
            contacts: [{ name, ...(isEmail ? { emails: [{ email: contact.toLowerCase(), type: 'office' }] } : { phones: [{ phone: contact, type: 'mobile' }] }) }],
        }) });
        const note = [`${PAGES[slug]} request via dooza.ai/${slug}`, `Name: ${name}`, `Contact: ${contact}`, `Company: ${company}`, ...HIDDEN.map((k) => `${k}: ${clean(b[k], 200) || '-'}`), `Submitted: ${new Date().toISOString()}`].join('\n');
        await closeFetch(apiKey, '/activity/note/', { method: 'POST', body: JSON.stringify({ lead_id: lead.id, note }) });
        await closeFetch(apiKey, '/task/', { method: 'POST', body: JSON.stringify({ lead_id: lead.id, assigned_to: SIBI_CLOSE_USER, text: `${PAGES[slug]}: ${company}. Contact ${contact}.`, date: new Date().toISOString().slice(0, 10), is_complete: false }) });
    } catch (e) { console.error('intl-lead', e.message); return json({ ok: false, error: 'Could not save right now. Please try again in a minute.' }, 502); }
    return json({ ok: true });
}
