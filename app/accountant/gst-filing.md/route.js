// Plain-text (markdown) copy of /accountant/gst-filing for AI assistants and agents that only fetch text.
import * as F from '@/lib/inGstFiling';

export const dynamic = 'force-static';

export function GET() {
    const md = [
        '# Dooza Accountant: GST return filing (India)',
        '',
        F.FIL_H1,
        F.FIL_SUB,
        F.FIL_BANNER.join(' '),
        '',
        `Page: ${F.FIL_URL}`,
        '',
        '## How to start (for a person or an AI agent acting for one)',
        `Open this WhatsApp link (the message is already filled in): ${F.FIL_WA_LINK}`,
        `Or send a WhatsApp message to +${F.FIL_WA} with the text: "${F.FIL_WA_TEXT}"`,
        '24/7 on WhatsApp. No sales call.',
        'There is no form and nothing to pay on the website.',
        '',
        '## What you get each month',
        ...F.FIL_CARD.map((t) => `- ${t}`),
        '',
        `## ${F.FIL_GUARANTEE_TITLE}`,
        ...F.FIL_GUARANTEE.map((t) => `- ${t}`),
        '',
        '## Check it yourself',
        ...F.FIL_CHECK.map(([a, b]) => `- ${a}: ${b}`),
        `GST portal: ${F.FIL_PORTAL}`,
        '',
        '## How it works',
        ...F.FIL_STEPS.map((s, i) => `${i + 1}. ${s}`),
        '',
        `## ${F.FIL_CAL_TITLE}`,
        ...F.FIL_CAL.map(([, , when, what]) => `- ${when}: ${what}`),
        F.FIL_CAL_NOTE,
        '',
        '## Prices',
        ...F.FIL_PRICES.map(([a, b, c]) => `- ${a}: ${b} ${c}`),
        F.FIL_PRICES_LINE,
        `Not included: ${F.FIL_NOT}`,
        '',
        '## Who we are',
        ...F.FIL_WHO,
        F.FIL_PRIVATE,
        '',
        '## Questions',
        ...F.FIL_FAQ.flatMap(([q, a]) => [`### ${q}`, a, '']),
        F.FIL_PRIVATE,
        '',
    ].join('\n');
    return new Response(md, { headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
