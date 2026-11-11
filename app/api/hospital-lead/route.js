// /hospital form (Apollo's India hospital software test, 2026-11-11). DRAFT: saves a Close lead + note (all fields
// incl. gclid/utm). tools/tc_leads.py posts it to @apollo. Close task to Sibi.
import { closeFetch, STATUS_POTENTIAL, clean } from '../../../lib/agentHire';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Leads go to Sibi (Sibi voice 19:30 via Apollo).
const SIBI_CLOSE_USER = 'user_tMVvbOIMZDjMMSJNQmHNFhaGTjplpDvQZk9ZAsIGkst';
const HIDDEN = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const json = (d, s = 200) => new Response(JSON.stringify(d), { status: s, headers: { 'Content-Type': 'application/json' } });

export async function POST(request) {
    let b;
    try { b = await request.json(); } catch { return json({ ok: false, error: 'Invalid request.' }, 400); }
    if (b.website) return json({ ok: true }); // honeypot
    const name = clean(b.name, 120);
    const hospital = clean(b.hospital, 160);
    const city = clean(b.city, 80);
    const phone = clean(b.phone, 40);
    const missing = [];
    if (!name) missing.push('name');
    if (!hospital) missing.push('hospital / clinic name');
    if (!city) missing.push('city');
    if (phone.replace(/\D/g, '').length < 10) missing.push('mobile');
    if (missing.length) return json({ ok: false, error: `Please check: ${missing.join(', ')}.` }, 400);
    const apiKey = process.env.CLOSE_API_KEY;
    if (!apiKey) return json({ ok: false, error: 'Could not save right now. Please try again in a minute.' }, 503);
    const tracking = HIDDEN.map((k) => `${k}: ${clean(b[k], 200) || '-'}`);
    try {
        const lead = await closeFetch(apiKey, '/lead/', {
            method: 'POST',
            body: JSON.stringify({
                name: `Hospital demo: ${hospital}`,
                status_id: STATUS_POTENTIAL,
                description: 'Hospital software demo request via dooza.ai/hospital',
                contacts: [{ name, phones: [{ phone, type: 'mobile' }] }],
            }),
        });
        const note = ['Hospital demo request via dooza.ai/hospital', `Name: ${name}`, `Hospital: ${hospital}`, `City: ${city}`, `Mobile: ${phone}`, ...tracking, `Submitted: ${new Date().toISOString()}`].join('\n');
        await closeFetch(apiKey, '/activity/note/', { method: 'POST', body: JSON.stringify({ lead_id: lead.id, note }) });
        await closeFetch(apiKey, '/task/', { method: 'POST', body: JSON.stringify({ lead_id: lead.id, assigned_to: SIBI_CLOSE_USER, text: `Hospital demo: ${hospital}, ${city}. Call/WhatsApp ${phone}.`, date: new Date().toISOString().slice(0, 10), is_complete: false }) });
    } catch (e) {
        console.error('hospital-lead', e.message);
        return json({ ok: false, error: 'Could not save right now. Please try again in a minute.' }, 502);
    }
    return json({ ok: true });
}
