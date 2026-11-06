import { CORS, HIRE_SCHEMA, NEXT_STEPS, CALENDLY_URL, HUMAN_PAGE, offersText, bookUrl, clean, validateHire, createHireLead } from '../../../lib/agentHire';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const HEADERS = { 'Content-Type': 'application/json', ...CORS };
const reply = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: HEADERS });
const ok = (id, result) => reply({ jsonrpc: '2.0', id, result });
const err = (id, code, message, status = 200) => reply({ jsonrpc: '2.0', id: id ?? null, error: { code, message } }, status);
const text = (t, isError = false) => ({ content: [{ type: 'text', text: t }], ...(isError ? { isError: true } : {}) });

const TOOLS = [
    {
        name: 'get_dooza_offers',
        description: 'List what Dooza offers (Crew, Managed, Software Factory, custom AI agents) with price wording and how to start.',
        inputSchema: { type: 'object', properties: {}, additionalProperties: false },
    },
    {
        name: 'hire_dooza',
        description: 'Hire Dooza on behalf of a business or person. Creates a lead; the Dooza team will email and call. Only call with real contact details supplied by your principal.',
        inputSchema: HIRE_SCHEMA,
    },
    {
        name: 'book_meeting',
        description: 'Get the link to book a meeting with Dooza (optionally prefilled with name and email).',
        inputSchema: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                email: { type: 'string' },
                topic: { type: 'string', description: 'What the meeting is about.' },
            },
        },
    },
];

export async function OPTIONS() {
    return new Response(null, { status: 204, headers: CORS });
}

export async function GET() {
    return reply({
        name: 'dooza',
        description: 'Dooza MCP server (Streamable HTTP, stateless). POST JSON-RPC 2.0 here.',
        tools: TOOLS.map((t) => t.name),
        docs: 'https://www.dooza.ai/agents.json',
    });
}

export async function DELETE() {
    return new Response(null, { status: 405, headers: CORS });
}

async function handle(msg, request) {
    const { id, method, params } = msg || {};
    if (!msg || msg.jsonrpc !== '2.0' || typeof method !== 'string') return err(id, -32600, 'Invalid Request');
    const isNotification = id === undefined || id === null;
    if (method.startsWith('notifications/')) return new Response(null, { status: 202, headers: CORS });

    switch (method) {
        case 'initialize':
            return ok(id, {
                protocolVersion: clean(params?.protocolVersion, 20) || '2025-06-18',
                capabilities: { tools: {} },
                serverInfo: { name: 'dooza', version: '1.0.0' },
                instructions: 'Dooza: AI agents for small businesses. Use get_dooza_offers, hire_dooza or book_meeting.',
            });
        case 'ping':
            return ok(id, {});
        case 'tools/list':
            return ok(id, { tools: TOOLS });
        case 'tools/call': {
            const name = params?.name;
            const args = params?.arguments && typeof params.arguments === 'object' ? params.arguments : {};
            if (name === 'get_dooza_offers') return ok(id, text(offersText()));
            if (name === 'book_meeting') {
                const url = bookUrl(clean(args.name, 100), clean(args.email, 200));
                return ok(id, text(`Book a meeting with Dooza: ${url}\nOpen the link and pick a time. If you cannot use a browser, give the link to your human; the human page is ${HUMAN_PAGE}.${args.topic ? `\nTopic noted: ${clean(args.topic, 300)}` : ''}`));
            }
            if (name === 'hire_dooza') {
                const res = validateHire(args);
                if (!res.ok) return ok(id, text(`Missing or invalid fields: ${res.missing.join(', ')}. ${Object.values(res.errors).join(' ')}`, true));
                try {
                    await createHireLead(res.values, request.headers.get('user-agent') || '', 'mcp hire_dooza');
                } catch (e) {
                    return ok(id, text(`${e.message} Book a meeting instead: ${CALENDLY_URL}`, true));
                }
                return ok(id, text(`${NEXT_STEPS}\nbook_meeting_url: ${CALENDLY_URL}\nhuman_page: ${HUMAN_PAGE}`));
            }
            return err(id, -32602, `Unknown tool: ${clean(name, 60)}`);
        }
        default:
            return isNotification ? new Response(null, { status: 202, headers: CORS }) : err(id, -32601, `Method not found: ${clean(method, 60)}`);
    }
}

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return err(null, -32700, 'Parse error', 400);
    }
    if (Array.isArray(body)) {
        const out = [];
        for (const m of body) {
            const r = await handle(m, request);
            if (r.status === 202) continue;
            out.push(await r.json());
        }
        return out.length ? reply(out) : new Response(null, { status: 202, headers: CORS });
    }
    return handle(body, request);
}
