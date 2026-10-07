import { SITE_URL } from '../../lib/site';
import ProfoundAlternativesContent from './ProfoundAlternativesContent';

const PAGE_URL = `${SITE_URL}/profound-alternatives`;

export const metadata = {
    title: '7 Best Profound Alternatives (2026): GEO Tools Compared',
    description: 'Looking for a Profound AI alternative? 7 AI visibility and GEO options compared on pricing, fit, pros, and cons — the #1 pick is done for you by Ranky and Dooza engineers.',
    keywords: [
        'profound alternatives', 'profound alternative', 'profound ai alternatives',
        'tryprofound alternatives', 'profound ai competitors', 'cheaper than profound',
        'profound pricing', 'AI visibility tool', 'AI visibility tools', 'GEO tools',
        'best GEO tools', 'AEO tools', 'generative engine optimization tools',
        'otterly vs profound', 'peec ai vs profound', 'ai brand monitoring',
    ],
    alternates: { canonical: PAGE_URL },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
        },
    },
    openGraph: {
        title: '7 Best Profound Alternatives in 2026 (AI Visibility & GEO Tools)',
        description: 'Honest comparison of 7 Profound alternatives — Dooza, Otterly.ai, Peec AI, Scrunch AI, Semrush, Ahrefs Brand Radar, and GEO agencies.',
        url: PAGE_URL,
        siteName: 'Dooza',
        type: 'article',
        modifiedTime: '2026-10-07T00:00:00.000Z',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Profound AI alternatives — Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: '7 Best Profound Alternatives [2026] — AI Visibility & GEO',
        description: 'Profound is an AI visibility platform with analytics and agents. 7 alternatives compared — the #1 pick is done for you and starts with a refundable pilot.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqData = [
    {
        question: 'What is the best Profound alternative?',
        answer: 'For small businesses that want GEO done for them rather than another platform to run, Dooza is the best Profound alternative: Ranky, Dooza\'s AI SEO & Visibility Employee, and Dooza engineers research, write, optimize, and publish GEO-ready content with your approval, and it starts with a refundable pilot (100% refund within 14 days). If you only want lower-cost monitoring, Otterly.ai and Peec AI are common picks. Larger teams that want a platform with analytics and agents may be better served by Profound itself.',
    },
    {
        question: 'Why do people look for Profound alternatives?',
        answer: 'The most common reasons are fit and who does the work. Profound is a platform: it has analytics and Profound Agents that research, write, and publish content, but your team runs it, reviews each Agent run, and ships the work. Its Enterprise plan is custom-priced and requires a demo. Small businesses without a marketing team often want the work done for them instead.',
    },
    {
        question: 'How much does Profound cost?',
        answer: 'Profound\'s pricing page (checked October 7, 2026) lists a free 7-day Trial (50 prompts, 3 answer engines), a self-serve Agency Growth plan at $99/month with full client workspaces as an add-on for $399/month, and Enterprise with custom pricing and custom AI Marketer credits.',
    },
    {
        question: 'What is the cheapest Profound alternative?',
        answer: 'Among dedicated AI visibility trackers, Otterly.ai lists its Lite plan at $29/month (checked October 7, 2026). Dooza is not a cheapest-tracker play: pricing depends on the product (see dooza.ai/pricing), it starts with a refundable pilot, and Ranky and Dooza engineers do the execution work — content, schema, and citations — for you. Check each vendor\'s site for current pricing.',
    },
    {
        question: 'Is there a free Profound alternative?',
        answer: 'Profound itself offers a free 7-day trial. Most alternatives offer trials or entry plans rather than permanent free tiers; check each vendor\'s site. Dooza does not offer a free trial; every Dooza product starts with a paid, refundable pilot — 100% refund within 14 days.',
    },
    {
        question: 'What is the difference between an AI visibility tool and a GEO service?',
        answer: 'An AI visibility platform (Profound, Otterly.ai, Peec AI, Scrunch AI) is software your team operates: it measures how answer engines mention and cite your brand, and several (Profound, Peec AI, Scrunch AI) now add recommendations, agents, or content features. A done-for-you service (Dooza, a GEO agency) has someone else do the work that changes those answers: publishing citable content, adding schema, and building presence on sources answer engines cite.',
    },
    {
        question: 'Is Dooza a monitoring tool like Profound?',
        answer: 'Partly. Ranky tracks your core prompt set across ChatGPT, Perplexity, Gemini, Claude, Copilot, and Google AI Overviews, with share of voice and citation maps, and then Ranky and Dooza engineers do the fixes for you, with your approval. It does not replicate Profound\'s platform scale: no 9-engine, multi-region coverage and no prompt-volume data.',
    },
    {
        question: 'Should I use Semrush or Ahrefs instead of Profound?',
        answer: 'If you already pay for Semrush or Ahrefs, their AI visibility features (Semrush AI Visibility Toolkit, Ahrefs Brand Radar) are a sensible first step because they sit next to your existing SEO data. Your team still operates them and decides what to change on your site.',
    },
    {
        question: 'Should I hire a GEO agency instead of buying a tool?',
        answer: 'A GEO agency makes sense if you want a fully managed service and have agency-level budget. Dooza sits between a tool and an agency: engineers set up your AI employee with you, Ranky does the ongoing SEO and GEO work with no contracts, and it starts with a refundable pilot — 100% refund within 14 days.',
    },
    {
        question: 'Can any tool guarantee I get cited in ChatGPT or Perplexity?',
        answer: 'No. No tool or agency can guarantee citations. Research such as the Princeton GEO study found that adding citations, quotations, and statistics can boost visibility in generative engine responses by up to roughly 40%, which is why execution — not just tracking — matters.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '7 Best Profound Alternatives in 2026',
        description: metadata.description,
        url: PAGE_URL,
        dateModified: '2026-10-07',
        publisher: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
        })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Alternatives', item: `${SITE_URL}/alternatives` },
            { '@type': 'ListItem', position: 3, name: 'Profound Alternatives', item: PAGE_URL },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '7 Best Profound Alternatives',
        itemListOrder: 'https://schema.org/ItemListOrderAscending',
        numberOfItems: 7,
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Dooza (Ranky + Dooza engineers)', url: `${SITE_URL}/agents/ranky` },
            { '@type': 'ListItem', position: 2, name: 'Otterly.ai', url: 'https://otterly.ai' },
            { '@type': 'ListItem', position: 3, name: 'Peec AI', url: 'https://peec.ai' },
            { '@type': 'ListItem', position: 4, name: 'Scrunch AI' },
            { '@type': 'ListItem', position: 5, name: 'Semrush AI Visibility Toolkit', url: 'https://www.semrush.com' },
            { '@type': 'ListItem', position: 6, name: 'Ahrefs Brand Radar', url: 'https://ahrefs.com' },
            { '@type': 'ListItem', position: 7, name: 'A GEO agency' },
        ],
    },
];

export default function ProfoundAlternativesPage() {
    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <ProfoundAlternativesContent faqData={faqData} />
        </>
    );
}
