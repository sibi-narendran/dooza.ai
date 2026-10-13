import { NextResponse } from 'next/server';
import stateCounts from '@/lib/truckingStateCounts.json';
import { CLAIMED_STATES } from '@/lib/truckingClaimedStates';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// "Get 5 free rows for your state" (/trucking-insurance-leads). Sibi OK'd free
// samples without a call first (2026-10-13). Each request becomes a Close lead
// (Orion works it) and, when SAMPLE_HOOK_URL is set, a post in #asks so
// Hercules builds the sample the same day.

const CLOSE_BASE = 'https://api.close.com/api/v1';
const STATUS_POTENTIAL = 'stat_nkpN4inzaYIfOaao3HfnSSCbl5hfQL7CjwR9KhzKFZ2';
const STATES = Object.fromEntries(stateCounts.states.map((s) => [s.code, s.name]));
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value, max = 200) {
    if (value === undefined || value === null) return '';
    return String(value).replace(/\p{Cc}/gu, ' ').trim().slice(0, max);
}

async function closeFetch(apiKey, path, init = {}) {
    const response = await fetch(`${CLOSE_BASE}${path}`, {
        ...init,
        headers: {
            Authorization: `Basic ${Buffer.from(`${apiKey}:`).toString('base64')}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });
    const data = await response.json().catch(() => null);
    if (!response.ok) {
        const error = new Error(`Close ${init.method || 'GET'} ${path} failed: ${response.status}`);
        error.body = data;
        throw error;
    }
    return data;
}

function readAttribution(raw = {}) {
    const out = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref'].forEach((key) => {
        const value = clean(raw[key], 250);
        if (value) out[key] = value;
    });
    return out;
}

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }

    // Honeypot: bots fill every field.
    if (clean(body.website)) return NextResponse.json({ ok: true });

    const name = clean(body.name, 120);
    const email = clean(body.email, 200).toLowerCase();
    const agency = clean(body.agency, 160);
    const phone = clean(body.phone, 40);
    const state = clean(body.state, 2).toUpperCase();
    if (!EMAIL_RE.test(email)) return NextResponse.json({ error: 'Please enter a valid work email.' }, { status: 400 });
    if (!STATES[state]) return NextResponse.json({ error: 'Please pick your state.' }, { status: 400 });
    if (!agency) return NextResponse.json({ error: 'Please enter your agency name.' }, { status: 400 });

    const attribution = readAttribution(body.attribution);
    const lines = [
        `FREE 5-ROW SAMPLE REQUEST (dooza.ai/trucking-insurance-leads form)`,
        `State: ${STATES[state]} (${state})${CLAIMED_STATES.includes(state) ? ' · CLAIMED: told them waitlist, no rows' : ''}`,
        `Agency: ${agency}`,
        `Name: ${name || '-'}`,
        `Email: ${email}`,
        `Phone: ${phone || '-'}`,
        CLAIMED_STATES.includes(state) ? 'Promised: email if the state opens up or a neighbouring state.' : `Promised: 5 rows from this week's ${state} list by email within 1 working day.`,
        Object.keys(attribution).length ? `Attribution: ${JSON.stringify(attribution)}` : '',
    ].filter(Boolean);

    let crm = null;
    const apiKey = process.env.CLOSE_API_KEY;
    if (apiKey) {
        try {
            const lead = await closeFetch(apiKey, '/lead/', {
                method: 'POST',
                body: JSON.stringify({
                    name: agency,
                    status_id: STATUS_POTENTIAL,
                    description: `Trucking sample request · ${state}`,
                    contacts: [{
                        name,
                        emails: [{ email, type: 'office' }],
                        ...(phone ? { phones: [{ phone, type: 'office' }] } : {}),
                    }],
                }),
            });
            crm = lead?.id || null;
            await closeFetch(apiKey, '/activity/note/', {
                method: 'POST',
                body: JSON.stringify({ lead_id: crm, note: lines.join('\n') }),
            });
        } catch (error) {
            console.error('trucking-sample: Close failed', error.body || error.message);
        }
    } else {
        console.error('trucking-sample: CLOSE_API_KEY not set');
    }

    const hook = process.env.SAMPLE_HOOK_URL;
    if (hook) {
        try {
            await fetch(hook, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: `@hercules @orion New free-sample request from dooza.ai: ${agency} (${STATES[state]}), ${email}${phone ? `, ${phone}` : ''}. Close lead ${crm || 'NOT CREATED'}. ${CLAIMED_STATES.includes(state) ? 'CLAIMED state: page told them waitlist, no rows.' : 'Promised 5 rows by email within 1 working day.'}`,
                }),
            });
        } catch (error) {
            console.error('trucking-sample: hook failed', error.message);
        }
    }

    if (!crm && !hook) return NextResponse.json({ error: 'Something went wrong. Please book a call instead.' }, { status: 502 });
    return NextResponse.json({ ok: true });
}
