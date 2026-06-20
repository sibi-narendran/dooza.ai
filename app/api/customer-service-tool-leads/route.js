import { NextResponse } from 'next/server';

function getAccountsLeadApiUrl(request) {
    const host = request.headers.get('host') || '';
    const isLocal = host.startsWith('localhost') || host.startsWith('127.0.0.1');

    return isLocal
        ? 'http://localhost:3001/api/tool-leads'
        : 'https://accounts.dooza.co/api/tool-leads';
}

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
    }

    try {
        const response = await fetch(getAccountsLeadApiUrl(request), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Dooza-Source': 'public-tool',
                'User-Agent': request.headers.get('user-agent') || 'dooza.ai lead form',
                'X-Forwarded-For':
                    request.headers.get('x-forwarded-for') ||
                    request.headers.get('x-real-ip') ||
                    '',
            },
            body: JSON.stringify(body),
        });

        const result = await response.json().catch(() => ({
            error: 'Could not save the report request.',
        }));

        return NextResponse.json(result, { status: response.status });
    } catch (error) {
        console.error('customer-service-tool-leads proxy failed:', error);

        return NextResponse.json(
            { error: 'Lead capture is temporarily unavailable.' },
            { status: 503 },
        );
    }
}
