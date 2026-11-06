// Shared logic for AI-agent hiring: /api/hire and /api/mcp. Lead storage copied from app/api/software-leads/route.js (Close).
export const CALENDLY_URL = 'https://calendly.com/sibi-dooza/book-a-meeting-and-walk-away-with-clarity';
export const HUMAN_PAGE = 'https://www.dooza.ai/book';
export const NEXT_STEPS = 'Our team will email and call you.';
export const OFFER_IDS = ['crew', 'managed', 'software_factory', 'custom_agent'];

export const OFFERS = [
    {
        id: 'crew',
        name: 'Dooza Crew',
        what: 'A self-serve team of AI agents you chat with on web or phone. Agents ask you to approve before they send or pay for anything. Phone calls are included.',
        price: 'Free to use.',
        how_to_start: 'Install the app and start: https://crew.dooza.ai (iOS: https://apps.apple.com/app/id6826755309).',
    },
    {
        id: 'managed',
        name: 'Dooza Managed',
        what: 'An AI admin assistant whose work is checked by a real person: email drafts, documents and forms, spreadsheets, research.',
        price: '$200/month, first 7 days free, start by card. See https://www.dooza.ai/pricing.',
        how_to_start: 'Start at https://www.dooza.ai/pricing, or call hire_dooza / POST https://www.dooza.ai/api/hire with offer "managed".',
    },
    {
        id: 'software_factory',
        name: 'Dooza Software Factory',
        what: 'Custom software built with AI agents and a human engineer in the loop, highly customised to how the business works and maintained by Dooza.',
        price: 'No fixed price listed. You get a free working demo of your app before you pay.',
        how_to_start: 'See https://www.dooza.ai/software-factory, or POST https://www.dooza.ai/api/hire with offer "software_factory".',
    },
    {
        id: 'custom_agent',
        name: 'Dooza Custom AI Agents',
        what: 'Custom AI agents built and maintained by Dooza engineers.',
        price: 'Scoped by a Dooza engineer on a free 30-minute call. Starts as a paid, refundable pilot: 100% refund within 14 days.',
        how_to_start: 'Book the free call or POST https://www.dooza.ai/api/hire with offer "custom_agent".',
    },
];

export const HIRE_SCHEMA = {
    type: 'object',
    properties: {
        offer: { type: 'string', enum: OFFER_IDS, description: 'Which Dooza offer.' },
        job: { type: 'string', maxLength: 2000, description: 'What you want done.' },
        email: { type: 'string', format: 'email', description: 'Contact email for the business or person.' },
        phone: { type: 'string', description: 'Contact phone with country code, e.g. +14155550123.' },
        purpose: { type: 'string', description: 'One line: why this is needed.' },
        company: { type: 'string' },
        agent_name: { type: 'string', description: 'Which AI agent is calling.' },
        on_behalf_of: { type: 'string', description: 'Who the agent acts for.' },
    },
    required: ['offer', 'job', 'email', 'phone', 'purpose'],
};

export function offersText() {
    return [
        'Dooza offers',
        ...OFFERS.map((o) => `\n${o.name} (offer: ${o.id})\n- What: ${o.what}\n- Price: ${o.price}\n- How to start: ${o.how_to_start}`),
        `\nHire: POST https://www.dooza.ai/api/hire (or the hire_dooza tool). Book a meeting: ${CALENDLY_URL}`,
    ].join('\n');
}

export function bookUrl(name, email) {
    const p = new URLSearchParams();
    if (name) p.set('name', name);
    if (email) p.set('email', email);
    const q = p.toString();
    return q ? `${CALENDLY_URL}?${q}` : CALENDLY_URL;
}

const CLOSE_BASE = 'https://api.close.com/api/v1';
const STATUS_POTENTIAL = 'stat_nkpN4inzaYIfOaao3HfnSSCbl5hfQL7CjwR9KhzKFZ2';

export function clean(value, max = 200) {
    if (value === undefined || value === null) return '';
    return String(value).replace(/\p{Cc}/gu, ' ').trim().slice(0, max);
}

function normalizePhone(raw) {
    const trimmed = String(raw || '').trim();
    const digits = trimmed.replace(/\D/g, '');
    if (trimmed.startsWith('+') && digits.length >= 8 && digits.length <= 15) return `+${digits}`;
    if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
    if (digits.length === 10) return `+1${digits}`;
    return null;
}

async function closeFetch(apiKey, path, init = {}) {
    const response = await fetch(`${CLOSE_BASE}${path}`, {
        ...init,
        headers: {
            Authorization: `Basic ${btoa(`${apiKey}:`)}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    });
    const text = await response.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch { data = { raw: text }; }
    if (!response.ok) {
        const error = new Error(`Close ${init.method || 'GET'} ${path} failed: ${response.status}`);
        error.status = response.status;
        error.body = data;
        throw error;
    }
    return data;
}

// Returns {ok:true,values} or {ok:false,missing:[...],errors:{field:msg}}
export function validateHire(body) {
    const errors = {};
    if (!body || typeof body !== 'object') return { ok: false, missing: OFFER_IDS.length ? HIRE_SCHEMA.required : [], errors: { body: 'Send a JSON object.' } };
    const offer = clean(body.offer, 40);
    const job = clean(body.job, 2000);
    const email = clean(body.email, 200);
    const purpose = clean(body.purpose, 300);
    const phone = normalizePhone(body.phone);
    if (!OFFER_IDS.includes(offer)) errors.offer = `Must be one of: ${OFFER_IDS.join(', ')}.`;
    if (job.length < 3) errors.job = 'Describe the job (required, max 2000 chars).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = 'A valid email is required.';
    if (!phone) errors.phone = 'A valid phone number is required (use +countrycode).';
    if (purpose.length < 3) errors.purpose = 'A one-line purpose is required.';
    const missing = Object.keys(errors);
    if (missing.length) return { ok: false, missing, errors };
    return {
        ok: true,
        values: {
            offer, job, email, phone, purpose,
            company: clean(body.company, 200),
            agent_name: clean(body.agent_name, 200),
            on_behalf_of: clean(body.on_behalf_of, 200),
        },
    };
}

// Throws on failure; error.status is the HTTP status to return.
export async function createHireLead(v, userAgent = '', via = 'api/hire') {
    const apiKey = process.env.CLOSE_API_KEY;
    if (!apiKey) {
        console.error('hire: CLOSE_API_KEY not set');
        const e = new Error('Could not save right now. Please book a meeting instead.');
        e.status = 503;
        throw e;
    }
    try {
        const lead = await closeFetch(apiKey, '/lead/', {
            method: 'POST',
            body: JSON.stringify({
                name: `AI agent hire (${v.offer}) ${v.company || v.email}`,
                status_id: STATUS_POTENTIAL,
                description: `Dooza hire request from an AI agent via ${via}`,
                contacts: [{ name: '', emails: [{ email: v.email, type: 'office' }], phones: [{ phone: v.phone, type: 'mobile' }] }],
            }),
        });
        const note = [
            `AI-agent hire request via ${via}`,
            `Offer: ${v.offer}`,
            `Job: ${v.job}`,
            `Purpose: ${v.purpose}`,
            `Company: ${v.company || '-'}`,
            `Agent name: ${v.agent_name || '-'}`,
            `On behalf of: ${v.on_behalf_of || '-'}`,
            `Email: ${v.email}`,
            `Phone: ${v.phone}`,
            `Submitted: ${new Date().toISOString()}`,
            `User agent: ${clean(userAgent, 250)}`,
        ].join('\n');
        try {
            await closeFetch(apiKey, '/activity/note/', { method: 'POST', body: JSON.stringify({ lead_id: lead.id, note }) });
            await closeFetch(apiKey, '/task/', {
                method: 'POST',
                body: JSON.stringify({
                    lead_id: lead.id,
                    text: `AI-agent hire request (${v.offer}). Email and call.`,
                    date: new Date().toISOString().slice(0, 10),
                    is_complete: false,
                }),
            });
        } catch (error) {
            console.error('hire: note/task failed', error.body || error.message);
        }
    } catch (error) {
        console.error('hire: failed', error.body || error.message);
        if (error.status === 503) throw error;
        const e = new Error('Could not save right now. Please book a meeting instead.');
        e.status = 502;
        throw e;
    }
}

export const CORS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept, Authorization, Mcp-Session-Id, Mcp-Protocol-Version',
    'Access-Control-Max-Age': '86400',
};
