// /listing form (Apollo listing coordinator test, Sibi OK 2026-11-11 19:20). Clone of /api/tc-lead.
// DRAFT 2026-11-11: saves a Close lead + note (all fields incl. gclid/utm) + a same-day task (= the alert). No ads until Sibi yes.
import { closeFetch, STATUS_POTENTIAL, clean } from '../../../lib/agentHire';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Delivery owner = Sibi (Apollo 18:46, Odysseus 81d7iz1n).
const SIBI_CLOSE_USER = 'user_tMVvbOIMZDjMMSJNQmHNFhaGTjplpDvQZk9ZAsIGkst';
const HIDDEN = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const json = (d, s = 200) => new Response(JSON.stringify(d), { status: s, headers: { 'Content-Type': 'application/json' } });

export async function POST(request) {
    let b;
    try { b = await request.json(); } catch { return json({ ok: false, error: 'Invalid request.' }, 400); }
    if (b.website) return json({ ok: true }); // honeypot
    const name = clean(b.name, 120);
    const email = clean(b.email, 160).toLowerCase();
    const phone = clean(b.phone, 40);
    const closing = clean(b.listing_date, 20);
    const state = clean(b.state, 2).toUpperCase();
    const missing = [];
    if (!name) missing.push('name');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) missing.push('email');
    if (phone.replace(/\D/g, '').length < 10) missing.push('mobile');
    if (!/^[A-Z]{2}$/.test(state)) missing.push('state');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(closing)) missing.push('listing date');
    if (missing.length) return json({ ok: false, error: `Please check: ${missing.join(', ')}.` }, 400);
    const apiKey = process.env.CLOSE_API_KEY;
    if (!apiKey) return json({ ok: false, error: 'Could not save right now. Please try again in a minute.' }, 503);
    const tracking = HIDDEN.map((k) => `${k}: ${clean(b[k], 200) || '-'}`);
    try {
        const lead = await closeFetch(apiKey, '/lead/', {
            method: 'POST',
            body: JSON.stringify({
                name: `Listing: ${name} (${state})`,
                status_id: STATUS_POTENTIAL,
                description: 'Listing coordinator free listing via dooza.ai/listing',
                contacts: [{ name, emails: [{ email, type: 'office' }], phones: [{ phone, type: 'mobile' }] }],
            }),
        });
        const note = ['Listing coordinator request via dooza.ai/listing', `Name: ${name}`, `Email: ${email}`, `Mobile: ${phone}`, `State: ${state}`, `Listing date: ${closing}`, ...tracking, `Submitted: ${new Date().toISOString()}`].join('\n');
        await closeFetch(apiKey, '/activity/note/', { method: 'POST', body: JSON.stringify({ lead_id: lead.id, note }) });
        await closeFetch(apiKey, '/task/', { method: 'POST', body: JSON.stringify({ lead_id: lead.id, assigned_to: SIBI_CLOSE_USER, text: `Listing free: listing date ${closing}. Email + call.`, date: new Date().toISOString().slice(0, 10), is_complete: false }) });
    } catch (e) {
        console.error('listing-lead', e.message);
        return json({ ok: false, error: 'Could not save right now. Please try again in a minute.' }, 502);
    }
    return json({ ok: true });
}
