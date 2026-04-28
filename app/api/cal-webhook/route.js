import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { sendScheduleEvent } from '../../../lib/metaCapi';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function verifySignature(rawBody, signatureHeader) {
    const secret = process.env.CAL_WEBHOOK_SECRET;
    if (!secret || !signatureHeader) return false;
    const expected = crypto.createHmac('sha256', secret).update(rawBody).digest('hex');
    const a = Buffer.from(expected);
    const b = Buffer.from(signatureHeader);
    if (a.length !== b.length) return false;
    try {
        return crypto.timingSafeEqual(a, b);
    } catch {
        return false;
    }
}

function splitName(fullName) {
    if (!fullName) return { firstName: undefined, lastName: undefined };
    const parts = String(fullName).trim().split(/\s+/);
    if (parts.length === 1) return { firstName: parts[0], lastName: undefined };
    return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}

export async function POST(request) {
    const rawBody = await request.text();
    const signature = request.headers.get('x-cal-signature-256');

    if (!verifySignature(rawBody, signature)) {
        return NextResponse.json({ error: 'invalid_signature' }, { status: 401 });
    }

    let body;
    try {
        body = JSON.parse(rawBody);
    } catch {
        return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
    }

    if (body.triggerEvent !== 'BOOKING_CREATED') {
        return NextResponse.json({ ok: true, skipped: body.triggerEvent || 'unknown' });
    }

    const booking = body.payload || {};
    const attendee = Array.isArray(booking.attendees) && booking.attendees.length > 0 ? booking.attendees[0] : {};
    const { firstName, lastName } = splitName(attendee.name || booking.responses?.name);

    const url = new URL(request.url);
    const testEventCode = url.searchParams.get('test_event_code') || undefined;

    const capiResult = await sendScheduleEvent({
        email: attendee.email || booking.responses?.email,
        phone: attendee.phoneNumber || booking.responses?.phone || booking.responses?.smsReminderNumber,
        firstName,
        lastName,
        eventId: booking.uid,
        userAgent: request.headers.get('user-agent') || undefined,
        clientIp: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || undefined,
        testEventCode,
    });

    if (!capiResult.ok) {
        return NextResponse.json({ ok: false, capi: capiResult }, { status: 502 });
    }

    return NextResponse.json({ ok: true, capi: capiResult });
}
