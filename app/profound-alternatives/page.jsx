import { SITE_URL } from '../../lib/site';
import ProfoundAlternativesContent from './ProfoundAlternativesContent';

const PAGE_URL = `${SITE_URL}/profound-alternatives`;

export const metadata = {
    title: '7 Best Profound Alternatives (2026): Cheaper GEO Tools',
    description: 'Looking for a Profound AI alternative? 7 cheaper AI visibility and GEO tools compared on pricing, fit, pros, and cons — the #1 pick does the GEO work, not just the tracking.',
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
        title: '7 Best Profound Alternatives in 2026 (Cheaper AI Visibility & GEO Tools)',
        description: 'Honest comparison of 7 Profound alternatives — Dooza, Otterly.ai, Peec AI, Scrunch AI, Semrush, Ahrefs Brand Radar, and GEO agencies.',
        url: PAGE_URL,
        siteName: 'Dooza',
        type: 'article',
        modifiedTime: '2026-09-25T00:00:00.000Z',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Profound AI alternatives — Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: '7 Best Profound Alternatives [2026] — Cheaper AI Visibility & GEO',
        description: 'Profound is custom-priced and built for enterprise. 7 alternatives compared — the #1 pick does the GEO work from $49/mo.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqData = [
    {
        question: 'What is the best Profound alternative?',
        answer: 'For small and mid-sized businesses that need GEO done, not just measured, Dooza is the best Profound alternative: Ranky, Dooza\'s AI Visibility & Growth Employee, researches, writes, optimizes, and publishes GEO-ready content from $49/mo, and Dooza engineers set up your first AI employee free. If you only want cheaper monitoring, Otterly.ai and Peec AI are the most common picks.',
    },
    {
        question: 'Why do people look for Profound alternatives?',
        answer: 'The most common reasons are price and fit. Profound\'s pricing page lists only a 7-day trial and custom-priced Enterprise that requires a demo, and it is built for large brands with analytics teams. Many smaller teams also find that a monitoring dashboard does not change their AI visibility on its own — someone still has to do the work.',
    },
    {
        question: 'How much does Profound cost?',
        answer: 'As of September 2026, Profound lists a free 7-day Trial (50 prompts, 3 answer engines) and Enterprise with custom pricing. Third-party reviews from early-to-mid 2026 reported earlier tiers of about $99/mo and $399/mo, and enterprise deployments of roughly $2,000 to $5,000+ per month.',
    },
    {
        question: 'What is the cheapest Profound alternative?',
        answer: 'Among dedicated AI visibility trackers, third-party reviews report Otterly.ai starting around $29/mo (Lite). Dooza starts at $49/mo but includes the execution work — content, schema, and citations — that trackers leave to you. Check each vendor\'s site for current pricing.',
    },
    {
        question: 'Is there a free Profound alternative?',
        answer: 'Profound itself offers a free 7-day trial. Most alternatives offer trials or entry plans rather than permanent free tiers; check each vendor\'s site. Dooza sets up your first AI employee free through its engineers and offers a 7-day money-back guarantee on Workforce plans.',
    },
    {
        question: 'What is the difference between an AI visibility tool and a GEO service?',
        answer: 'An AI visibility tool (Profound, Otterly.ai, Peec AI, Scrunch AI) measures how answer engines mention and cite your brand. A GEO service or AI employee (Dooza, a GEO agency) does the work that changes those answers: publishing citable content, adding schema, and building presence on sources answer engines cite.',
    },
    {
        question: 'Is Dooza a monitoring tool like Profound?',
        answer: 'No. Dooza is an execution alternative. Ranky monitors who is mentioning you and where, but it does not replicate Profound-scale dashboards, 9-engine tracking, or prompt-volume data. Teams that want deep dashboards can pair Ranky with a tracker like Otterly.ai or Peec AI.',
    },
    {
        question: 'Should I use Semrush or Ahrefs instead of Profound?',
        answer: 'If you already pay for Semrush or Ahrefs, their AI visibility features (Semrush AI Toolkit, Ahrefs Brand Radar) are a sensible first step because they sit next to your existing SEO data. They are still measurement tools, so you need a person or AI employee to act on what they show.',
    },
    {
        question: 'Should I hire a GEO agency instead of buying a tool?',
        answer: 'A GEO agency makes sense if you want a fully managed service and have agency-level budget. Dooza sits between a tool and an agency: engineers set up your AI employee free, and Ranky does the ongoing SEO and GEO work from $49/mo, with no contracts.',
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
        dateModified: '2026-09-25',
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
            { '@type': 'ListItem', position: 1, name: 'Dooza (Ranky + Forward Deployed Engineers)', url: `${SITE_URL}/agents/ranky` },
            { '@type': 'ListItem', position: 2, name: 'Otterly.ai', url: 'https://otterly.ai' },
            { '@type': 'ListItem', position: 3, name: 'Peec AI', url: 'https://peec.ai' },
            { '@type': 'ListItem', position: 4, name: 'Scrunch AI' },
            { '@type': 'ListItem', position: 5, name: 'Semrush AI Toolkit', url: 'https://www.semrush.com' },
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
