import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { sendMetaEvent } from '../../../lib/metaCapi';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Lead funnel for the "AI can cut your costs" Facebook ads (/cut-costs).
// step "phone"   -> create (or find) the lead in Close with ad attribution.
//                   Saved before any qualifying question, so drop-offs still
//                   land in the CRM.
// step "qualify" -> score the two answers on the server, note them on the
//                   lead, and send a Meta CAPI Lead event only when the lead
//                   qualifies. The page fires the matching pixel Lead with the
//                   same event_id so Meta dedupes to one conversion.

const CLOSE_BASE = 'https://api.close.com/api/v1';
const STATUS_POTENTIAL = 'stat_nkpN4inzaYIfOaao3HfnSSCbl5hfQL7CjwR9KhzKFZ2';
const FUNNEL_TAG = 'fb-cut-costs';
const QUALIFIED_TAG = 'fb-cut-costs-qualified';
const PAGE_URL = 'https://www.dooza.ai/cut-costs';

const ROLE_OPTIONS = {
    owner: 'Owner / founder',
    decider: 'Helps make the call',
    other: 'Just exploring',
};

const BUDGET_OPTIONS = {
    under100: 'Under $100/mo',
    '100to1k': '$100–$1,000/mo',
    '1kplus': '$1,000+/mo',
};

// Qualified = decides on spend AND has a budget of $100 a month or more.
function isQualified({ role, budget }) {
    return ['owner', 'decider'].includes(role) && budget in BUDGET_OPTIONS && budget !== 'under100';
}

function clean(value, max = 200) {
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

// The lead id goes back to the browser for step 2. Signing it stops anyone
// from posting notes onto arbitrary Close leads.
function sign(leadId) {
    const secret = process.env.CLOSE_API_KEY || '';
    return crypto.createHmac('sha256', secret).update(`cut-costs:${leadId}`).digest('hex').slice(0, 32);
}

function validToken(leadId, token) {
    if (!leadId || !token) return false;
    const a = Buffer.from(sign(leadId));
    const b = Buffer.from(String(token));
    return a.length === b.length && crypto.timingSafeEqual(a, b);
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
    const text = await response.text();
    let data = null;
    try {
        data = text ? JSON.parse(text) : null;
    } catch {
        data = { raw: text };
    }
    if (!response.ok) {
        const error = new Error(`Close ${init.method || 'GET'} ${path} failed: ${response.status}`);
        error.status = response.status;
        error.body = data;
        throw error;
    }
    return data;
}

async function findLeadByPhone(apiKey, phone) {
    const query = {
        query: {
            type: 'and',
            queries: [
                { type: 'object_type', object_type: 'lead' },
                {
                    type: 'has_related',
                    this_object_type: 'lead',
                    related_object_type: 'contact',
                    related_query: {
                        type: 'has_related',
                        this_object_type: 'contact',
                        related_object_type: 'contact_phone',
                        related_query: {
                            type: 'field_condition',
                            field: { type: 'regular_field', object_type: 'contact_phone', field_name: 'phone' },
                            condition: { type: 'text', mode: 'phrase', value: phone },
                        },
                    },
                },
            ],
        },
        _limit: 1,
        _fields: { lead: ['id', 'custom'] },
    };
    try {
        const result = await closeFetch(apiKey, '/data/search/', { method: 'POST', body: JSON.stringify(query) });
        return result?.data?.[0] || null;
    } catch (error) {
        console.error('cost-leads: phone search failed', error.body || error.message);
        return null;
    }
}

async function addTag(apiKey, lead, tag) {
    const custom = lead?.custom && typeof lead.custom === 'object' ? lead.custom : {};
    const tags = Array.isArray(custom.Tags) ? custom.Tags : [];
    if (tags.includes(tag)) return;
    try {
        await closeFetch(apiKey, `/lead/${lead.id}/`, {
            method: 'PUT',
            body: JSON.stringify({ custom: { Tags: [...tags, tag] } }),
        });
    } catch (error) {
        console.error('cost-leads: tag update failed', error.body || error.message);
    }
}

function readAttribution(raw = {}) {
    const out = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'ad_id', 'adset_id'].forEach((key) => {
        const value = clean(raw[key], 250);
        if (value) out[key] = value;
    });
    return out;
}

async function handlePhone(apiKey, body, request) {
    const phone = normalizePhone(body.phone);
    if (!phone) {
        return NextResponse.json({ error: 'Enter a valid mobile number.' }, { status: 400 });
    }
    const attribution = readAttribution(body.attribution);

    const existing = await findLeadByPhone(apiKey, phone);
    let leadId;

    if (existing) {
        leadId = existing.id;
        await addTag(apiKey, existing, FUNNEL_TAG);
    } else {
        const custom = {
            'Lead Source': attribution.utm_source ? `${attribution.utm_source}-cut-costs` : 'facebook-cut-costs',
            'Landing Page': '/cut-costs',
            Tags: [FUNNEL_TAG],
        };
        if (attribution.utm_campaign) custom['Ad Campaign'] = attribution.utm_campaign;
        if (attribution.utm_content) custom['Ad Group'] = attribution.utm_content;

        const lead = {
            name: `Cut-costs lead ${phone}`,
            status_id: STATUS_POTENTIAL,
            description: 'Facebook ad: AI can cut your costs (/cut-costs)',
            contacts: [{ name: '', phones: [{ phone, type: 'mobile' }] }],
            custom,
        };
        let created;
        try {
            created = await closeFetch(apiKey, '/lead/', { method: 'POST', body: JSON.stringify(lead) });
        } catch (error) {
            if (error.status !== 400) throw error;
            console.error('cost-leads: create with custom fields failed, retrying without', error.body);
            delete lead.custom;
            created = await closeFetch(apiKey, '/lead/', { method: 'POST', body: JSON.stringify(lead) });
        }
        leadId = created.id;
    }

    const noteLines = [
        `${existing ? 'REPEAT: ' : ''}Mobile captured on /cut-costs (step 1 of 3)`,
        `Mobile: ${phone}`,
        ...Object.entries(attribution).map(([key, value]) => `${key}: ${value}`),
        `User agent: ${clean(request.headers.get('user-agent'), 250)}`,
    ];
    try {
        await closeFetch(apiKey, '/activity/note/', {
            method: 'POST',
            body: JSON.stringify({ lead_id: leadId, note: noteLines.join('\n') }),
        });
    } catch (error) {
        console.error('cost-leads: note failed', error.body || error.message);
    }

    return NextResponse.json({ leadId, token: sign(leadId) });
}

async function handleQualify(apiKey, body, request) {
    const leadId = clean(body.leadId, 80);
    const role = clean(body.role, 20);
    const budget = clean(body.budget, 20);
    const phone = normalizePhone(body.phone);
    const qualified = isQualified({ role, budget });
    const eventId = clean(body.eventId, 80) || crypto.randomUUID();

    if (leadId && validToken(leadId, body.token)) {
        const note = [
            `Qualifying answers on /cut-costs: ${qualified ? 'QUALIFIED' : 'not qualified'}`,
            `Role: ${ROLE_OPTIONS[role] || role}`,
            `Monthly budget: ${BUDGET_OPTIONS[budget] || budget}`,
        ].join('\n');
        try {
            await closeFetch(apiKey, '/activity/note/', {
                method: 'POST',
                body: JSON.stringify({ lead_id: leadId, note }),
            });
            if (qualified) {
                const lead = await closeFetch(apiKey, `/lead/${leadId}/?_fields=id,custom`);
                await addTag(apiKey, lead, QUALIFIED_TAG);
                await closeFetch(apiKey, '/task/', {
                    method: 'POST',
                    body: JSON.stringify({
                        lead_id: leadId,
                        text: `Qualified cut-costs lead (${ROLE_OPTIONS[role]}, ${BUDGET_OPTIONS[budget]}). Call or text within 5 minutes.`,
                        date: new Date().toISOString().slice(0, 10),
                        is_complete: false,
                    }),
                });
            }
        } catch (error) {
            console.error('cost-leads: qualify update failed', error.body || error.message);
        }
    }

    let capi = null;
    if (qualified) {
        try {
            const result = await sendMetaEvent({
                eventName: 'Lead',
                eventId,
                phone: phone || undefined,
                eventSourceUrl: clean(body.pageUrl, 500) || PAGE_URL,
                clientIp: (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || undefined,
                userAgent: request.headers.get('user-agent') || undefined,
                fbp: clean(body.fbp, 200) || undefined,
                fbc: clean(body.fbc, 300) || undefined,
                testEventCode: process.env.FB_CAPI_TEST_EVENT_CODE || undefined,
                customData: { content_name: 'cut_costs_qualified', lead_type: role, budget },
            });
            capi = result.ok;
            if (!result.ok) console.error('cost-leads: Meta CAPI not ok', result);
        } catch (error) {
            console.error('cost-leads: Meta CAPI failed', error.message);
        }
    }

    return NextResponse.json({ qualified, eventId, capi });
}

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const apiKey = process.env.CLOSE_API_KEY;
    if (!apiKey) {
        console.error('cost-leads: CLOSE_API_KEY not set');
        if (body.step === 'phone') return NextResponse.json({ leadId: null, token: null });
    }

    try {
        if (body.step === 'phone') return await handlePhone(apiKey, body, request);
        if (body.step === 'qualify') return await handleQualify(apiKey, body, request);
        return NextResponse.json({ error: 'Unknown step.' }, { status: 400 });
    } catch (error) {
        console.error('cost-leads: failed', error.body || error.message);
        // Never block the visitor on a CRM outage.
        if (body.step === 'phone') return NextResponse.json({ leadId: null, token: null });
        return NextResponse.json({ qualified: isQualified(body), eventId: body.eventId || null, capi: null });
    }
}
