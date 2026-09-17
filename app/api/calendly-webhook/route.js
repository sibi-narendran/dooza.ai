import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { sendScheduleEvent } from '../../../lib/metaCapi';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Calendly webhook for AI receptionist pilot bookings.
// invitee.created  -> lead in Close with ad attribution, a prep task, a note,
//                     a confirmation text from the Close number, Meta CAPI.
// invitee.canceled -> note on the lead.
// Register with: node scripts/calendly-webhook-register.mjs register
// Only bookings whose Calendly UTM medium is "ai-receptionist" are handled,
// unless CALENDLY_SYNC_ALL_BOOKINGS=1.

const CLOSE_BASE = 'https://api.close.com/api/v1';
const CALLBACK_NUMBER = '+17373901099';
const STATUS_POTENTIAL = 'stat_nkpN4inzaYIfOaao3HfnSSCbl5hfQL7CjwR9KhzKFZ2';
const PILOT_TAG = 'ai-receptionist-pilot';
const RECEPTIONIST_MEDIUM = 'ai-receptionist';
const SIGNATURE_TOLERANCE_SECONDS = 5 * 60;

const VARIANT_INDUSTRY = {
    default: 'Trades',
    hvac: 'HVAC',
    plumbing: 'Plumbing',
    electrical: 'Electrical',
    roofing: 'Roofing',
    contractors: 'General contractor',
    'answering-service': 'Trades',
};

function clean(value, max = 200) {
    if (value === undefined || value === null) return '';
    return String(value).replace(/\p{Cc}/gu, ' ').trim().slice(0, max);
}

function normalizePhone(raw) {
    const digits = String(raw || '').replace(/\D/g, '');
    if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
    if (digits.length === 10) return `+1${digits}`;
    if (digits.length > 10 && String(raw).trim().startsWith('+')) return `+${digits}`;
    return null;
}

function verifySignature(rawBody, header, signingKey) {
    if (!header || !signingKey) return false;
    const parts = Object.fromEntries(
        header.split(',').map((part) => {
            const index = part.indexOf('=');
            return [part.slice(0, index).trim(), part.slice(index + 1).trim()];
        }),
    );
    const timestamp = Number(parts.t);
    const signature = parts.v1;
    if (!timestamp || !signature) return false;
    if (Math.abs(Date.now() / 1000 - timestamp) > SIGNATURE_TOLERANCE_SECONDS) return false;
    const expected = crypto.createHmac('sha256', signingKey).update(`${parts.t}.${rawBody}`).digest('hex');
    const a = Buffer.from(expected);
    const b = Buffer.from(signature);
    if (a.length !== b.length) return false;
    try {
        return crypto.timingSafeEqual(a, b);
    } catch {
        return false;
    }
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

function phoneSearch(phone) {
    return {
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
        _limit: 5,
        _fields: { lead: ['id', 'display_name', 'contacts', 'custom'] },
    };
}

async function findLead(apiKey, { phone, email }) {
    if (phone) {
        try {
            const result = await closeFetch(apiKey, '/data/search/', { method: 'POST', body: JSON.stringify(phoneSearch(phone)) });
            const match = (result?.data || []).find((lead) => lead && lead.id);
            if (match) return match;
        } catch (error) {
            console.error('calendly-webhook: phone search failed', error.body || error.message);
        }
    }
    if (email) {
        try {
            const result = await closeFetch(apiKey, `/lead/?query=${encodeURIComponent(email)}&_limit=10&_fields=id,display_name,contacts,custom`);
            for (const lead of result?.data || []) {
                for (const contact of lead.contacts || []) {
                    for (const entry of contact.emails || []) {
                        if (String(entry.email || '').toLowerCase() === email.toLowerCase()) return lead;
                    }
                }
            }
        } catch (error) {
            console.error('calendly-webhook: email search failed', error.body || error.message);
        }
    }
    return null;
}

function answerMatching(questions, pattern) {
    const hit = (questions || []).find((entry) => pattern.test(String(entry.question || '')));
    return hit ? clean(hit.answer, 200) : '';
}

function parseTracking(tracking = {}) {
    const content = clean(tracking.utm_content, 250);
    const parsed = {};
    content.split('|').forEach((pair) => {
        const index = pair.indexOf(':');
        if (index > 0) parsed[pair.slice(0, index)] = pair.slice(index + 1);
    });
    const source = clean(tracking.utm_source, 60);
    return {
        source,
        medium: clean(tracking.utm_medium, 60),
        campaign: clean(tracking.utm_campaign, 120),
        keyword: clean(tracking.utm_term, 120),
        gclid: clean(parsed.gclid, 200),
        adgroup: clean(parsed.adgroup, 120),
        variant: clean(parsed.variant, 40),
        leadSource: source === 'google-ads' ? 'google-ads' : source ? `${source}-ai-receptionist` : 'website-ai-receptionist',
    };
}

function formatWhen(isoTime, timezone) {
    try {
        return new Intl.DateTimeFormat('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            timeZone: timezone || 'America/Chicago',
            timeZoneName: 'short',
        }).format(new Date(isoTime));
    } catch {
        return isoTime;
    }
}

async function alreadyTexted(apiKey, leadId, marker) {
    try {
        const result = await closeFetch(apiKey, `/activity/sms/?lead_id=${leadId}&_limit=50`);
        return (result?.data || []).some((sms) => sms.direction === 'outbound' && String(sms.text || '').includes(marker));
    } catch {
        return false;
    }
}

async function sendConfirmationSms(apiKey, leadId, phone, firstName, when) {
    if (process.env.AI_RECEPTIONIST_CONFIRM_SMS === '0') return false;
    const marker = `booked for ${when}`;
    if (await alreadyTexted(apiKey, leadId, marker)) return false;
    const text = `Hi ${firstName}, Sibi from Dooza. You're ${marker}. Your AI receptionist goes live within 48 hours of the call. Reply here with any questions.`;
    await closeFetch(apiKey, '/activity/sms/', {
        method: 'POST',
        body: JSON.stringify({
            lead_id: leadId,
            local_phone: CALLBACK_NUMBER,
            remote_phone: phone,
            text,
            status: 'outbox',
            send_in: 20,
        }),
    });
    return true;
}

async function handleCreated(apiKey, payload) {
    const email = clean(payload.email, 120).toLowerCase();
    const name = clean(payload.name, 120) || [clean(payload.first_name, 60), clean(payload.last_name, 60)].filter(Boolean).join(' ');
    const firstName = clean(payload.first_name, 60) || name.split(/\s+/)[0] || 'there';
    const questions = payload.questions_and_answers || [];
    const phone = normalizePhone(payload.text_reminder_number || answerMatching(questions, /phone|mobile|cell|number/i));
    const business = answerMatching(questions, /business|company|firm|agency/i);
    const industryAnswer = answerMatching(questions, /industry|trade|type of business/i);
    const tracking = parseTracking(payload.tracking);
    const industry = industryAnswer || VARIANT_INDUSTRY[tracking.variant] || VARIANT_INDUSTRY.default;
    const event = payload.scheduled_event || {};
    const when = formatWhen(event.start_time, payload.timezone);

    const custom = { 'Lead Source': tracking.leadSource };
    if (tracking.gclid) custom['Google Click ID'] = tracking.gclid;
    if (tracking.campaign) custom['Ad Campaign'] = tracking.campaign;
    if (tracking.adgroup) custom['Ad Group'] = tracking.adgroup;
    if (tracking.keyword) custom['Ad Keyword'] = tracking.keyword;
    if (industry) custom.Industry = industry;
    custom['Landing Page'] = tracking.variant ? `/ai-receptionist?v=${tracking.variant}` : '/ai-receptionist';

    const existing = await findLead(apiKey, { phone, email });
    let leadId;

    if (existing) {
        leadId = existing.id;
        const currentCustom = existing.custom && typeof existing.custom === 'object' ? existing.custom : {};
        const tags = Array.isArray(currentCustom.Tags) ? currentCustom.Tags : [];
        const fillOnly = {};
        Object.entries(custom).forEach(([field, value]) => {
            if (!currentCustom[field]) fillOnly[field] = value;
        });
        try {
            await closeFetch(apiKey, `/lead/${leadId}/`, {
                method: 'PUT',
                body: JSON.stringify({ custom: { ...fillOnly, Tags: tags.includes(PILOT_TAG) ? tags : [...tags, PILOT_TAG] } }),
            });
        } catch (error) {
            console.error('calendly-webhook: lead update failed', error.body || error.message);
        }
    } else {
        const contact = { name };
        if (email) contact.emails = [{ email, type: 'office' }];
        if (phone) contact.phones = [{ phone, type: 'mobile' }];
        const lead = {
            name: business || name,
            status_id: STATUS_POTENTIAL,
            description: `AI receptionist pilot meeting booked via Calendly${industry ? ` (${industry})` : ''}`,
            contacts: [contact],
            custom: { ...custom, Tags: [PILOT_TAG] },
        };
        let created;
        try {
            created = await closeFetch(apiKey, '/lead/', { method: 'POST', body: JSON.stringify(lead) });
        } catch (error) {
            if (error.status !== 400) throw error;
            console.error('calendly-webhook: create with custom fields failed, retrying without', error.body);
            delete lead.custom;
            created = await closeFetch(apiKey, '/lead/', { method: 'POST', body: JSON.stringify(lead) });
        }
        leadId = created.id;
    }

    const noteLines = [
        `${existing ? 'REPEAT: ' : ''}Pilot meeting booked via Calendly`,
        `When: ${when} (invitee timezone ${payload.timezone || 'unknown'})`,
        `Event: ${event.name || ''}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Mobile: ${phone || 'not provided'}`,
        `Business: ${business || 'not asked'}`,
        `Industry: ${industry || ''}`,
        `Lead source: ${tracking.leadSource}`,
        `gclid: ${tracking.gclid}`,
        `Campaign: ${tracking.campaign}`,
        `Ad group: ${tracking.adgroup}`,
        `Keyword: ${tracking.keyword}`,
        `Page variant: ${tracking.variant || 'default'}`,
        `Reschedule: ${payload.reschedule_url || ''}`,
        `Cancel: ${payload.cancel_url || ''}`,
        ...questions.map((entry) => `Q: ${clean(entry.question, 120)} A: ${clean(entry.answer, 300)}`),
    ];
    await closeFetch(apiKey, '/activity/note/', {
        method: 'POST',
        body: JSON.stringify({ lead_id: leadId, note: noteLines.join('\n') }),
    });

    if (event.start_time) {
        try {
            await closeFetch(apiKey, '/task/', {
                method: 'POST',
                body: JSON.stringify({
                    lead_id: leadId,
                    text: `AI receptionist pilot setup call with ${name}${business ? ` (${business})` : ''}. Collect questions, hours, calendar. Live within 48 hours.`,
                    date: event.start_time,
                    is_complete: false,
                }),
            });
        } catch (error) {
            console.error('calendly-webhook: task create failed', error.body || error.message);
        }
    }

    let smsSent = false;
    if (phone) {
        try {
            smsSent = await sendConfirmationSms(apiKey, leadId, phone, firstName, when);
        } catch (error) {
            console.error('calendly-webhook: confirmation SMS failed', error.body || error.message);
        }
    }

    let capi = null;
    try {
        capi = await sendScheduleEvent({
            email,
            phone: phone || undefined,
            firstName: clean(payload.first_name, 60) || undefined,
            lastName: clean(payload.last_name, 60) || undefined,
            eventId: payload.uri,
            eventSourceUrl: 'https://www.dooza.ai/ai-receptionist/book',
            contentName: 'ai_receptionist_pilot_call',
        });
    } catch (error) {
        console.error('calendly-webhook: Meta CAPI failed', error.message);
    }

    return { leadId, existing: Boolean(existing), smsSent, capi: capi?.ok ?? null };
}

async function handleCanceled(apiKey, payload) {
    const email = clean(payload.email, 120).toLowerCase();
    const phone = normalizePhone(payload.text_reminder_number);
    const lead = await findLead(apiKey, { phone, email });
    if (!lead) return { leadId: null };
    const event = payload.scheduled_event || {};
    await closeFetch(apiKey, '/activity/note/', {
        method: 'POST',
        body: JSON.stringify({
            lead_id: lead.id,
            note: `Pilot meeting CANCELED via Calendly. Was: ${formatWhen(event.start_time, payload.timezone)}. Reason: ${clean(payload.cancellation?.reason, 300) || 'none given'}. Follow up to rebook.`,
        }),
    });
    return { leadId: lead.id };
}

export async function POST(request) {
    const signingKey = process.env.CALENDLY_WEBHOOK_SIGNING_KEY;
    if (!signingKey) {
        return NextResponse.json({ ok: false, error: 'CALENDLY_WEBHOOK_SIGNING_KEY is not set' }, { status: 503 });
    }

    const rawBody = await request.text();
    if (!verifySignature(rawBody, request.headers.get('calendly-webhook-signature'), signingKey)) {
        return NextResponse.json({ ok: false, error: 'invalid_signature' }, { status: 401 });
    }

    let body;
    try {
        body = JSON.parse(rawBody);
    } catch {
        return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
    }

    const payload = body.payload || {};
    const medium = clean(payload.tracking?.utm_medium, 60);
    if (medium !== RECEPTIONIST_MEDIUM && process.env.CALENDLY_SYNC_ALL_BOOKINGS !== '1') {
        return NextResponse.json({ ok: true, skipped: 'not-ai-receptionist' });
    }

    const apiKey = process.env.CLOSE_API_KEY;
    if (!apiKey) {
        console.error('calendly-webhook: CLOSE_API_KEY is not set');
        return NextResponse.json({ ok: false, error: 'Close is not configured' }, { status: 503 });
    }

    try {
        if (body.event === 'invitee.created') {
            const result = await handleCreated(apiKey, payload);
            return NextResponse.json({ ok: true, event: body.event, ...result });
        }
        if (body.event === 'invitee.canceled') {
            const result = await handleCanceled(apiKey, payload);
            return NextResponse.json({ ok: true, event: body.event, ...result });
        }
        return NextResponse.json({ ok: true, skipped: body.event || 'unknown' });
    } catch (error) {
        console.error('calendly-webhook: failed', error.status, error.body || error.message);
        return NextResponse.json({ ok: false, error: 'processing_failed' }, { status: 500 });
    }
}
