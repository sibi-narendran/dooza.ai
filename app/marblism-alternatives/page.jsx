import { SITE_URL } from '../../lib/site';
import MarblismAlternativesContent from './MarblismAlternativesContent';

export const metadata = {
    title: '7 Best Marblism Alternatives [2026] — No Per-Seat Fees',
    description: 'We compared 7 Marblism alternatives on real pricing, integrations, and setup. Our #1 pick has no per-seat fees and starts with a refundable pilot.',
    keywords: [
        'Marblism alternatives', 'Marblism alternative', 'Marblism AI alternative',
        'Marblism AI alternatives', 'best Marblism alternative 2026',
        'platforms like Marblism', 'Marblism competitors', 'Marblism alternative no per seat',
        'AI employee platform', 'AI employees for business', 'Marblism vs Dooza',
        'Marblism vs Sintra', 'best AI agents for small business', 'Marblism replacement',
    ],
    alternates: { canonical: `${SITE_URL}/marblism-alternatives` },
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
        title: '7 Best Marblism Alternatives [2026] — No Per-Seat Fees',
        description: 'Per-seat pricing adding up? We compared 7 Marblism alternatives with real pricing — the #1 pick includes engineer-led setup and a refundable pilot.',
        url: `${SITE_URL}/marblism-alternatives`,
        siteName: 'Dooza',
        type: 'article',
        modifiedTime: '2026-03-30T00:00:00.000Z',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Marblism Alternatives — Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: '7 Best Marblism Alternatives [2026] — No Per-Seat Fees',
        description: 'Per-seat fees, limited integrations, no free trial — 7 alternatives compared. The #1 pick starts with a refundable pilot.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqData = [
    {
        question: 'What are the best Marblism alternatives in 2026?',
        answer: 'The top Marblism alternatives in 2026 are Dooza (best overall — no per-seat fees, personal onboarding, 1,000+ integrations), Sintra AI (largest agent roster with 12+ helpers), Motion (PM + AI employees), NoimosAI (deepest marketing agents), Lindy AI (5,000+ integrations), Relevance AI (enterprise scale), and Cubeo AI (cheapest entry point). The best choice depends on whether you prioritize pricing, integrations, or agent variety.',
    },
    {
        question: 'Is Dooza better than Marblism?',
        answer: 'Dooza and Marblism both offer named AI employees, but they differ in key areas. Dooza has no per-seat fees, offers 1,000+ app integrations, a free 30-minute call with a Dooza engineer to scope your pilot, and a refundable pilot (100% refund within 14 days). Marblism starts at $24/mo yearly but charges $14-29 per additional seat, has limited integrations (Gmail, Instagram, Facebook, WordPress, Wix), no free trial, and self-serve onboarding only.',
    },
    {
        question: 'Why are people switching from Marblism?',
        answer: 'Common reasons include: per-seat pricing that gets expensive for teams ($44/mo + $29/seat), limited integrations (no Slack, Shopify, Notion, or TikTok), no free trial (only a 7-day money-back guarantee), self-serve onboarding with no human guidance, agents that sometimes ignore instructions or rewrite requests, and a daily check-in model that prevents real-time task adjustments.',
    },
    {
        question: 'Does Marblism charge per seat?',
        answer: 'Yes. Marblism charges $44/mo for one user on the monthly plan, plus $29/mo for each additional team member. On the yearly plan, the base drops to $24/mo with extra seats at $14/mo each. A 5-person team on the monthly plan pays $160/mo. Alternatives like Dooza have no per-seat fees, so adding a teammate does not change the bill.',
    },
    {
        question: 'Which Marblism alternative has the most integrations?',
        answer: 'Lindy AI leads with 5,000+ integrations via Pipedream, but it requires technical knowledge to build agents and has a 2.0/5 Trustpilot rating. Dooza offers 1,000+ app integrations with a plug-and-play setup. Marblism itself only supports Gmail, Instagram, Facebook, WordPress, and Wix.',
    },
    {
        question: 'Is there a free alternative to Marblism?',
        answer: 'Relevance AI offers a free tier with 200 actions/month, but it is designed for enterprise users and requires technical setup. Cubeo AI has a free plan with 100 credits. Dooza is not free: every Dooza product starts with a paid, refundable pilot — 100% refund if you ask within 14 days.',
    },
    {
        question: 'Can Marblism agents work fully autonomously?',
        answer: 'Not entirely. Marblism agents check in once daily at a designated time for approval and feedback. You cannot instruct them to handle urgent tasks or adjust priorities throughout the day. Platforms like Dooza and Sintra AI offer 24/7 autonomous operation where agents execute tasks continuously without waiting for daily check-ins.',
    },
    {
        question: 'What is the cheapest Marblism alternative?',
        answer: 'Cubeo AI starts at approximately €17/mo, making it the cheapest option — but it offers chatbots, not autonomous AI employees. For named AI employees, Marblism\'s yearly plan ($24/mo) is the cheapest single-user option. For teams, per-seat fees are the bigger cost driver: Dooza has no per-seat fees and no credits, and its pricing is listed at dooza.ai/pricing.',
    },
    {
        question: 'Does Marblism have a free trial?',
        answer: 'No. Marblism does not offer a free trial or a free plan. They provide a 7-day money-back guarantee, meaning you pay upfront ($44/mo monthly) and can request a refund within 7 days. Alternatives like Dooza (a refundable pilot — 100% refund within 14 days), Motion (7-day free trial), and Lindy AI (7-day free trial) offer different ways to evaluate the platform.',
    },
    {
        question: 'Which AI employee platform has the best onboarding?',
        answer: 'Dooza does — a Dooza engineer scopes your pilot on a free 30-minute call and sets up your AI employees with you. All other platforms (Marblism, Sintra AI, Motion, Lindy AI) use self-serve onboarding where you configure everything yourself.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: metadata.title,
        description: metadata.description,
        url: `${SITE_URL}/marblism-alternatives`,
        dateModified: '2026-03-30',
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
            { '@type': 'ListItem', position: 3, name: 'Marblism Alternatives', item: `${SITE_URL}/marblism-alternatives` },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '7 Best Marblism Alternatives in 2026',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Dooza', url: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Sintra AI', url: 'https://sintra.ai' },
            { '@type': 'ListItem', position: 3, name: 'Motion', url: 'https://usemotion.com' },
            { '@type': 'ListItem', position: 4, name: 'NoimosAI', url: 'https://noimosai.com' },
            { '@type': 'ListItem', position: 5, name: 'Lindy AI', url: 'https://lindy.ai' },
            { '@type': 'ListItem', position: 6, name: 'Relevance AI', url: 'https://relevanceai.com' },
            { '@type': 'ListItem', position: 7, name: 'Cubeo AI', url: 'https://cubeo.ai' },
        ],
    },
];

export default function MarblismAlternativesPage() {
    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <MarblismAlternativesContent faqData={faqData} />
        </>
    );
}
