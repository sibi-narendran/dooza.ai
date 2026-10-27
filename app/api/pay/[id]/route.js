import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Every visit to a Stripe payment link opens a Checkout Session, so crawlers and link checkers that follow
// raw buy.stripe.com hrefs made bursts of open $0 sessions (Napoleon 2026-10-27: 34 in 2 bursts, all Managed).
// Pay buttons point here instead (/api/ is disallowed in robots.txt). A real click sends Sec-Fetch-User: ?1 and goes
// straight to Stripe; anything else gets a one-button page (POST), so no session opens without a person.
const LINKS = new Set([
    'eVq14n94vbAx95abff3AY0s', // Managed $200, 7 days free
    'dRm3cv3Kb5c94OUerr3AY16', // ICP1 plan A
    'cNi4gz3KbeMJ5SY6YZ3AY0p', // trucker feed
    '4gM00j0xZbAx4OUcjj3AY0M', // notary renewal
    'bJebJ11C3eMJ1CIerr3AY10', // CT new business
    '5kQbJ16Wn0VT3KQ5UV3AY11', // CA WARN
    'cNi8wPa8zgUR95adnn3AY0Y', // certificate pack
    'aFafZh6WnbAxftygzz3AY1b', // Dooza Support
    '4gM8wP80rdIFa9e1EF3AY12', // TX new business
]);
const KEEP = ['client_reference_id', 'prefilled_email', 'prefilled_promo_code', 'locale'];

function stripeUrl(id, searchParams) {
    const u = new URL(`https://buy.stripe.com/${id}`);
    for (const k of KEEP) {
        const v = searchParams.get(k);
        if (v) u.searchParams.set(k, v.slice(0, 200));
    }
    return u.toString();
}

const HEADERS = { 'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'no-store' };

export async function GET(request, { params }) {
    const { id } = await params;
    if (!LINKS.has(id)) return new NextResponse('Not found', { status: 404, headers: HEADERS });
    const url = new URL(request.url);
    if (request.headers.get('sec-fetch-user') === '?1') {
        return NextResponse.redirect(stripeUrl(id, url.searchParams), { status: 302, headers: HEADERS });
    }
    const action = `${url.pathname}${url.search}`.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Continue to checkout | Dooza</title></head><body style="font-family:system-ui,sans-serif;max-width:28rem;margin:4rem auto;padding:0 1rem;text-align:center"><h1 style="font-size:1.25rem">Continue to secure checkout</h1><p>Payment is handled by Stripe.</p><form method="post" action="${action}"><button type="submit" style="font-size:1rem;padding:.75rem 1.5rem;border-radius:.75rem;border:0;background:#4f46e5;color:#fff;cursor:pointer">Continue to checkout</button></form><p><a href="/">Back to Dooza</a></p></body></html>`;
    return new NextResponse(html, { status: 200, headers: { ...HEADERS, 'Content-Type': 'text/html; charset=utf-8' } });
}

export async function POST(request, { params }) {
    const { id } = await params;
    if (!LINKS.has(id)) return new NextResponse('Not found', { status: 404, headers: HEADERS });
    return NextResponse.redirect(stripeUrl(id, new URL(request.url).searchParams), { status: 303, headers: HEADERS });
}
