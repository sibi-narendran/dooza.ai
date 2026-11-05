import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Dooza Software Factory leads (/done-for-you-ai-agents). Same storage as
// cost-leads: a lead in Close (CLOSE_API_KEY) with a note and a call task.

const CLOSE_BASE = 'https://api.close.com/api/v1';
const STATUS_POTENTIAL = 'stat_nkpN4inzaYIfOaao3HfnSSCbl5hfQL7CjwR9KhzKFZ2';

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

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }
    if (!body || typeof body !== 'object') {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    const idea = clean(body.idea, 2000);
    const email = clean(body.email, 200);
    const purpose = clean(body.purpose, 300);
    const phone = normalizePhone(body.phone);
    if (idea.length < 3) return NextResponse.json({ error: 'Describe the app you want.' }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return NextResponse.json({ error: 'Enter a valid email.' }, { status: 400 });
    if (!phone) return NextResponse.json({ error: 'Enter a valid phone number.' }, { status: 400 });
    if (purpose.length < 3) return NextResponse.json({ error: 'Add a one-line purpose.' }, { status: 400 });

    const page = clean(body.page, 200) || '/done-for-you-ai-agents';
    const apiKey = process.env.CLOSE_API_KEY;
    if (!apiKey) {
        console.error('software-leads: CLOSE_API_KEY not set');
        return NextResponse.json({ error: 'Could not save right now. Please book a call instead.' }, { status: 503 });
    }

    try {
        const lead = await closeFetch(apiKey, '/lead/', {
            method: 'POST',
            body: JSON.stringify({
                name: `Software Factory lead ${email}`,
                status_id: STATUS_POTENTIAL,
                description: 'Dooza Software Factory (/done-for-you-ai-agents)',
                contacts: [{ name: '', emails: [{ email, type: 'office' }], phones: [{ phone, type: 'mobile' }] }],
            }),
        });
        const note = [
            `Software Factory request from ${page}`,
            `Idea: ${idea}`,
            `Purpose: ${purpose}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Submitted: ${clean(body.ts, 40) || new Date().toISOString()}`,
            `User agent: ${clean(request.headers.get('user-agent'), 250)}`,
        ].join('\n');
        try {
            await closeFetch(apiKey, '/activity/note/', { method: 'POST', body: JSON.stringify({ lead_id: lead.id, note }) });
            await closeFetch(apiKey, '/task/', {
                method: 'POST',
                body: JSON.stringify({
                    lead_id: lead.id,
                    text: 'Software Factory lead. Email and call shortly; offer the free working demo.',
                    date: new Date().toISOString().slice(0, 10),
                    is_complete: false,
                }),
            });
        } catch (error) {
            console.error('software-leads: note/task failed', error.body || error.message);
        }
        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error('software-leads: failed', error.body || error.message);
        return NextResponse.json({ error: 'Could not save right now. Please book a call instead.' }, { status: 502 });
    }
}
