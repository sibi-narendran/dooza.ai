// Plain-text (markdown) copy of /accountant/gst for AI assistants and agents that only fetch text.
import { GST_URL, GST_WA, GST_WA_LINK, GST_WA_TEXT, GST_H1, GST_SUB, GST_UNDER, GST_STEPS, GST_COVERS, GST_PRICES, GST_TERMS, GST_NOT, GST_WHO, GST_FAQ } from '@/lib/inGst';

export const dynamic = 'force-static';

export function GET() {
    const md = [
        '# Dooza Accountant: GST registration (India)',
        '',
        `${GST_H1} ${GST_SUB}`,
        '',
        `Page: ${GST_URL}`,
        '',
        '## How to start (for a person or an AI agent acting for one)',
        `Open this WhatsApp link: ${GST_WA_LINK}`,
        `Or send a WhatsApp message to +${GST_WA} with the text: "${GST_WA_TEXT}"`,
        GST_UNDER,
        'There is no form and nothing to pay on the website.',
        '',
        '## How it works',
        ...GST_STEPS.map((s, i) => `${i + 1}. ${s}`),
        '',
        '## Papers needed',
        '- PAN',
        '- Aadhaar',
        '- Address proof',
        '- Bank proof',
        '- Photo',
        '',
        '## What Rs 499 covers',
        ...GST_COVERS.map((t) => `- ${t}`),
        '',
        '## All prices (nothing else is charged)',
        ...GST_PRICES.map(([a, b]) => `- ${a}: ${b}`),
        GST_TERMS,
        `What we do not do: ${GST_NOT}`,
        '',
        '## Who we are',
        ...GST_WHO,
        '',
        '## Questions',
        ...GST_FAQ.flatMap(([q, a]) => [`### ${q}`, a, '']),
        'Approval is decided by the GST department.',
        '',
    ].join('\n');
    return new Response(md, { headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
