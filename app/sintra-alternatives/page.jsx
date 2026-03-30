import { SITE_URL } from '../../lib/site';
import SintraAlternativesContent from './SintraAlternativesContent';

export const metadata = {
    title: '7 Best Sintra AI Alternatives in 2026 (Honest Comparison)',
    description: 'Looking for Sintra AI alternatives? We compared 7 platforms — pricing, features, pros, cons, and credit systems. Find the best AI employee platform for your business.',
    keywords: [
        'sintra ai alternatives', 'best sintra alternative 2026', 'sintra ai competitors',
        'sintra alternative', 'sintra ai replacement', 'AI employee platforms',
        'sintra ai review', 'sintra ai pricing', 'AI agents for business',
        'AI automation tools 2026', 'best AI employees', 'sintra ai vs dooza',
        'sintra ai vs marblism', 'sintra ai vs lindy',
    ],
    alternates: { canonical: `${SITE_URL}/sintra-alternatives` },
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
        title: '7 Best Sintra AI Alternatives in 2026',
        description: 'Honest comparison of 7 Sintra AI alternatives — pricing, features, pros, cons. No fluff, just facts.',
        url: `${SITE_URL}/sintra-alternatives`,
        siteName: 'Dooza',
        type: 'article',
        modifiedTime: '2026-03-30T00:00:00.000Z',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Sintra AI Alternatives — Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: '7 Best Sintra AI Alternatives in 2026',
        description: 'Credit limits, rigid helpers, no workflows. Here are 7 alternatives to Sintra AI, compared honestly.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqData = [
    {
        question: 'What is the best alternative to Sintra AI?',
        answer: 'It depends on your needs. Dooza is the best all-around alternative for SMBs — it offers named AI employees, a $1 trial, personal founder onboarding, and no credit system. Marblism is the cheapest at $24/mo. Lindy AI has the most integrations (5,000+) but has a 2.0/5 Trustpilot rating.',
    },
    {
        question: 'Why are people leaving Sintra AI?',
        answer: 'The most common complaints are the 250-credit monthly cap that depletes fast, helpers that cannot share context with each other, self-serve-only onboarding with no human guidance, rigid helper structure with no custom workflows, and pricing that jumps with credit top-ups.',
    },
    {
        question: 'Does Sintra AI have a credit limit?',
        answer: 'Yes. All Sintra AI plans include 250 monthly credits. Advanced AI actions consume credits faster. When they run out, you either purchase top-ups or wait until next month.',
    },
    {
        question: 'How much does Sintra AI cost?',
        answer: 'Sintra AI lists Sintra X at $97/mo (often discounted 50% to ~$48.50/mo) or ~$15.60/mo on an annual plan. All plans are capped at 250 credits. Alternatives like Dooza start at $49/mo monthly ($39/mo yearly) with usage-based tiers and no credit system.',
    },
    {
        question: 'Can Sintra AI helpers talk to each other?',
        answer: 'No. Sintra AI helpers work in complete isolation. They do not share context, memory, or data. Multi-step workflows require you to manually copy information between helper chats.',
    },
    {
        question: 'What is an AI employee platform?',
        answer: 'An AI employee platform provides specialized AI agents for specific business functions — email management, social media, SEO, lead generation, legal review. Unlike chatbots, AI employees connect to your real tools (Gmail, Instagram, WordPress) and execute tasks autonomously.',
    },
    {
        question: 'Is Dooza better than Sintra AI?',
        answer: 'For businesses wanting personal founder onboarding, no credit caps, and usage-based pricing without a confusing credit system — yes. Sintra offers more helpers (12+) but caps usage at 250 credits. Dooza has 5 named AI employees with 1,000+ integrations and a $1 trial.',
    },
    {
        question: 'What is the cheapest Sintra AI alternative?',
        answer: 'Cubeo AI starts at approximately \u20ac17/month, and Marblism starts at $24/month on a yearly plan. Dooza starts at $39/month yearly with a $1 seven-day full-access trial.',
    },
    {
        question: 'Do any Sintra alternatives offer a free trial?',
        answer: 'Dooza offers a $1 seven-day full-access trial. Relevance AI and Cubeo AI have free tiers with limited usage. Motion offers a seven-day free trial. Marblism has a 7-day money-back guarantee.',
    },
    {
        question: 'How do I switch from Sintra AI to another platform?',
        answer: 'Most alternatives let you run both platforms side by side during the transition. Dooza offers a free concierge onboarding call where the founder personally walks you through setup and configuration.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: '7 Best Sintra AI Alternatives in 2026',
        description: metadata.description,
        url: `${SITE_URL}/sintra-alternatives`,
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
            { '@type': 'ListItem', position: 3, name: 'Sintra AI Alternatives', item: `${SITE_URL}/sintra-alternatives` },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '7 Best Sintra AI Alternatives',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Dooza', url: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Marblism', url: 'https://marblism.com' },
            { '@type': 'ListItem', position: 3, name: 'Motion', url: 'https://usemotion.com' },
            { '@type': 'ListItem', position: 4, name: 'NoimosAI', url: 'https://noimosai.com' },
            { '@type': 'ListItem', position: 5, name: 'Lindy AI', url: 'https://lindy.ai' },
            { '@type': 'ListItem', position: 6, name: 'Relevance AI', url: 'https://relevanceai.com' },
            { '@type': 'ListItem', position: 7, name: 'Cubeo AI', url: 'https://cubeo.ai' },
        ],
    },
];

export default function SintraAlternativesPage() {
    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <SintraAlternativesContent faqData={faqData} />
        </>
    );
}
