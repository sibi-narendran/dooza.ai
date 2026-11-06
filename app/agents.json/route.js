import { CORS, OFFERS, HIRE_SCHEMA, CALENDLY_URL, HUMAN_PAGE } from '../../lib/agentHire';

export const dynamic = 'force-static';

export async function GET() {
    const data = {
        name: 'Dooza',
        description: 'Dooza builds and runs AI agents for small businesses, checked by a person. AI agents can hire Dooza and book a meeting without a human UI.',
        url: 'https://www.dooza.ai',
        offers: OFFERS.map((o) => ({ id: o.id, name: o.name, what: o.what, price: o.price, how_to_start: o.how_to_start })),
        hire: { endpoint: 'https://www.dooza.ai/api/hire', method: 'POST', content_type: 'application/json', schema: HIRE_SCHEMA },
        book_meeting: { calendly_url: CALENDLY_URL, human_url: HUMAN_PAGE },
        mcp: { endpoint: 'https://www.dooza.ai/api/mcp', transport: 'streamable-http', tools: ['get_dooza_offers', 'hire_dooza', 'book_meeting'] },
        contact: { website: 'https://www.dooza.ai', email: 'sibi@dooza.ai', book: HUMAN_PAGE },
        llms_txt: 'https://www.dooza.ai/llms.txt',
    };
    return new Response(JSON.stringify(data, null, 2), {
        headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600, s-maxage=3600', ...CORS },
    });
}
