import { CORS, HIRE_SCHEMA, NEXT_STEPS, CALENDLY_URL, HUMAN_PAGE, validateHire, createHireLead } from '../../../lib/agentHire';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function json(data, status = 200) {
    return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json', ...CORS } });
}

export async function OPTIONS() {
    return new Response(null, { status: 204, headers: CORS });
}

export async function GET() {
    return json({
        endpoint: 'https://www.dooza.ai/api/hire',
        method: 'POST',
        content_type: 'application/json',
        description: 'Hire Dooza as an AI agent: creates a lead for the Dooza team to email and call. To book a meeting instead, use book_meeting_url.',
        schema: HIRE_SCHEMA,
        book_meeting_url: CALENDLY_URL,
        human_page: HUMAN_PAGE,
    });
}

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return json({ ok: false, error: 'Invalid JSON body.', schema: HIRE_SCHEMA }, 400);
    }
    const res = validateHire(body);
    if (!res.ok) return json({ ok: false, error: 'Missing or invalid fields.', missing_fields: res.missing, details: res.errors, schema: HIRE_SCHEMA }, 400);
    try {
        await createHireLead(res.values, request.headers.get('user-agent') || '', 'api/hire');
    } catch (e) {
        return json({ ok: false, error: e.message, book_meeting_url: CALENDLY_URL, human_page: HUMAN_PAGE }, e.status || 502);
    }
    return json({ ok: true, next_steps: NEXT_STEPS, book_meeting_url: CALENDLY_URL, human_page: HUMAN_PAGE });
}
