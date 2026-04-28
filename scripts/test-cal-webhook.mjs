#!/usr/bin/env node
import crypto from 'node:crypto';

const BASE = process.env.TEST_URL || 'http://localhost:3000';
const SECRET = process.env.CAL_WEBHOOK_SECRET || 'test-secret-local';

const makeBooking = (trigger = 'BOOKING_CREATED') => ({
    triggerEvent: trigger,
    createdAt: new Date().toISOString(),
    payload: {
        type: 'demo',
        title: 'Dooza Free Setup with Founder',
        startTime: '2026-04-22T14:00:00.000Z',
        endTime: '2026-04-22T14:30:00.000Z',
        uid: `uid_${Date.now()}`,
        attendees: [
            {
                name: 'Jane Doe',
                email: 'jane.doe+test@example.com',
                phoneNumber: '+15551234567',
                timeZone: 'America/Los_Angeles',
            },
        ],
        responses: { name: 'Jane Doe', email: 'jane.doe+test@example.com' },
    },
});

const sign = (body) => crypto.createHmac('sha256', SECRET).update(body).digest('hex');

async function post({ body, signature, label, expectStatus, query = '' }) {
    const res = await fetch(`${BASE}/api/cal-webhook${query}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(signature !== null ? { 'x-cal-signature-256': signature } : {}),
        },
        body,
    });
    const text = await res.text();
    let json;
    try { json = JSON.parse(text); } catch { json = text; }
    const pass = res.status === expectStatus;
    console.log(`[${pass ? 'PASS' : 'FAIL'}] ${label}`);
    console.log(`       status=${res.status} (expected ${expectStatus})`);
    console.log(`       body=${JSON.stringify(json)}`);
    return pass;
}

async function main() {
    console.log(`Testing webhook at ${BASE}/api/cal-webhook`);
    console.log(`Using secret: ${SECRET.slice(0, 4)}... (length ${SECRET.length})`);
    console.log('');

    const results = [];

    // Test 1: valid signature, BOOKING_CREATED → 200 or 502 (502 if FB env not set)
    {
        const body = JSON.stringify(makeBooking());
        const res = await fetch(`${BASE}/api/cal-webhook`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-cal-signature-256': sign(body) },
            body,
        });
        const json = await res.json().catch(() => ({}));
        const ok = res.status === 200 || (res.status === 502 && json?.capi?.reason === 'missing_env');
        console.log(`[${ok ? 'PASS' : 'FAIL'}] valid sig + BOOKING_CREATED`);
        console.log(`       status=${res.status} body=${JSON.stringify(json)}`);
        if (res.status === 502) console.log('       (502 expected locally — FB_CAPI_ACCESS_TOKEN not set; sig verify + parse path proven)');
        results.push(ok);
    }

    // Test 2: invalid signature → 401
    {
        const body = JSON.stringify(makeBooking());
        results.push(await post({
            body,
            signature: 'deadbeef'.repeat(8),
            label: 'invalid sig → 401',
            expectStatus: 401,
        }));
    }

    // Test 3: missing signature → 401
    {
        const body = JSON.stringify(makeBooking());
        results.push(await post({
            body,
            signature: null,
            label: 'missing sig → 401',
            expectStatus: 401,
        }));
    }

    // Test 4: wrong trigger event → 200 with skipped
    {
        const body = JSON.stringify(makeBooking('BOOKING_CANCELLED'));
        const res = await fetch(`${BASE}/api/cal-webhook`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-cal-signature-256': sign(body) },
            body,
        });
        const json = await res.json().catch(() => ({}));
        const ok = res.status === 200 && json.skipped === 'BOOKING_CANCELLED';
        console.log(`[${ok ? 'PASS' : 'FAIL'}] non-BOOKING_CREATED → skipped`);
        console.log(`       status=${res.status} body=${JSON.stringify(json)}`);
        results.push(ok);
    }

    // Test 5: malformed JSON with valid signature → 400
    {
        const body = 'not-json{{{';
        results.push(await post({
            body,
            signature: sign(body),
            label: 'malformed JSON → 400',
            expectStatus: 400,
        }));
    }

    console.log('');
    const passed = results.filter(Boolean).length;
    console.log(`${passed}/${results.length} tests passed`);
    process.exit(passed === results.length ? 0 : 1);
}

main().catch((e) => { console.error(e); process.exit(1); });
