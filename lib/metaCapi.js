import crypto from 'crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
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

export async function sendScheduleEvent({
    email,
    phone,
    firstName,
    lastName,
    eventId,
    eventSourceUrl = 'https://dooza.ai/booking-confirmed',
    clientIp,
    userAgent,
    testEventCode,
    contentName = 'founder_setup_call',
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

    const event = {
        event_name: 'Schedule',
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: eventSourceUrl,
        user_data: userData,
        custom_data: { content_name: contentName },
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
