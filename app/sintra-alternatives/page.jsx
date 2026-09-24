import { SITE_URL } from '../../lib/site';
import SintraAlternativesContent from './SintraAlternativesContent';

export const metadata = {
    title: '7 Best Sintra AI Alternatives [2026] — #1 Sets Up Free',
    description: 'No credits, no lock-in. 7 Sintra AI alternatives compared on pricing, features, and limits — the #1 pick includes free engineer setup.',
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
        title: '7 Best Sintra AI Alternatives [2026] — #1 Sets Up Free',
        description: 'Honest comparison of 7 Sintra AI alternatives — pricing, features, pros, cons. The #1 pick sets up your AI free.',
        url: `${SITE_URL}/sintra-alternatives`,
        siteName: 'Dooza',
        type: 'article',
        modifiedTime: '2026-09-24T00:00:00.000Z',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Sintra AI Alternatives — Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: '7 Best Sintra AI Alternatives [2026] — #1 Sets Up Free',
        description: 'Credit limits, rigid helpers, no workflows. 7 Sintra AI alternatives compared — the #1 pick sets up your AI free.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqData = [
    {
        question: 'What is the best alternative to Sintra AI?',
        answer: 'It depends on your needs. Dooza is the best all-around alternative for SMBs — it offers named AI employees from $49/mo with a 7-day money-back guarantee, personal founder onboarding, and no credit system. Marblism is the cheapest at $24/mo. Lindy AI has the most integrations (5,000+) but has a 2.0/5 Trustpilot rating.',
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
        answer: 'Sintra X has a $97/mo list price but sells at $48.50/mo month to month, $23.60/mo on a 3-month plan ($70.80 up front), or $15.60/mo on a 12-month plan ($187.20 up front). Every plan includes 250 credits a month, with paid top-ups for advanced actions. Single helpers cost $39/mo each. Dooza starts at $49/mo month to month with no credit system. Prices checked September 2026.',
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
        answer: 'For businesses wanting personal founder onboarding, no credit caps, and usage-based pricing without a confusing credit system — yes. Sintra offers more helpers (12+) but caps usage at 250 credits. Dooza has 5 named AI employees with 1,000+ integrations, starting at $49/mo with a 7-day money-back guarantee.',
    },
    {
        question: 'What is the cheapest Sintra AI alternative?',
        answer: 'Cubeo AI starts at \u20ac17/month (\u20ac14.17/month billed yearly), and Marblism starts at $24/month on a yearly plan. Sintra itself drops to $15.60/month if you pay $187.20 for a year up front. Dooza starts at $49/month, month to month, and is backed by a 7-day money-back guarantee.',
    },
    {
        question: 'Do any Sintra alternatives offer a free trial?',
        answer: 'Dooza starts at $49/month with a 7-day money-back guarantee — pay full price and get a refund within 7 days if it is not the right fit. Relevance AI and Cubeo AI have free tiers with limited usage. Motion offers a 7-day free trial, and Lindy offers one when you sign up through Slack. Marblism has a 7-day money-back guarantee, and Sintra has a 14-day one.',
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
        dateModified: '2026-09-24',
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
