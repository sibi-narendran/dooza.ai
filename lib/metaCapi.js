import crypto from 'crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '777622852092389';
const ACCESS_TOKEN = process.env.FB_CAPI_ACCESS_TOKEN;
const API_VERSION = 'v19.0';

const hash = (value) => {
    if (!value) return undefined;
    return crypto.createHash('sha256').update(String(value).toLowerCase().trim()).digest('hex');
};

const normalizePhone = (phone) => {
    if (!phone) return undefined;
    const digits = String(phone).replace(/\D/g, '');
    return digits || undefined;
};

export async function sendMetaEvent({
    eventName,
    email,
    phone,
    firstName,
    lastName,
    eventId,
    eventSourceUrl,
    clientIp,
    userAgent,
    fbp,
    fbc,
    testEventCode,
    customData = {},
}) {
    if (!PIXEL_ID || !ACCESS_TOKEN) {
        return { ok: false, reason: 'missing_env', detail: 'NEXT_PUBLIC_FB_PIXEL_ID or FB_CAPI_ACCESS_TOKEN not set' };
    }

    const userData = {};
    const emailHash = hash(email);
    const phoneHash = hash(normalizePhone(phone));
    const fnHash = hash(firstName);
    const lnHash = hash(lastName);
    if (emailHash) userData.em = [emailHash];
    if (phoneHash) userData.ph = [phoneHash];
    if (fnHash) userData.fn = [fnHash];
    if (lnHash) userData.ln = [lnHash];
    if (clientIp) userData.client_ip_address = clientIp;
    if (userAgent) userData.client_user_agent = userAgent;
    if (fbp) userData.fbp = fbp;
    if (fbc) userData.fbc = fbc;

    const event = {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: eventSourceUrl,
        user_data: userData,
        custom_data: customData,
    };
    if (eventId) event.event_id = eventId;

    const payload = { data: [event] };
    if (testEventCode) payload.test_event_code = testEventCode;

    const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(ACCESS_TOKEN)}`;

    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    const result = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, result };
}

export function sendScheduleEvent({
    eventSourceUrl = 'https://dooza.ai/booking-confirmed',
    contentName = 'founder_setup_call',
    ...rest
}) {
    return sendMetaEvent({
        ...rest,
        eventName: 'Schedule',
        eventSourceUrl,
        customData: { content_name: contentName },
    });
}
