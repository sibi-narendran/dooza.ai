import { SITE_URL } from '../../lib/site';
import DoozaVsSintraContent from './DoozaVsSintraContent';

export const metadata = {
    title: 'Dooza vs Sintra AI — Unlimited Tasks, No Credit Caps | 2026 Comparison',
    description: 'Dooza vs Sintra AI compared head-to-head. Unlimited tasks vs 250 monthly credits, personal founder setup call vs self-serve, $29/mo flat vs confusing tiers. See why businesses switch to Dooza.',
    keywords: [
        'Dooza vs Sintra AI', 'Sintra AI alternative', 'Sintra AI comparison',
        'AI employees comparison', 'Sintra AI review', 'Sintra AI pricing',
        'best AI employee platform', 'Sintra AI vs Dooza', 'AI automation platform',
        'Sintra AI credit limit', 'Sintra AI limitations', 'AI business assistant',
    ],
    alternates: { canonical: `${SITE_URL}/dooza-vs-sintra` },
    openGraph: {
        title: 'Dooza vs Sintra AI — Unlimited Tasks, No Credit Caps',
        description: 'Head-to-head comparison: Dooza offers unlimited tasks at $29/mo flat. Sintra AI caps you at 250 credits. See the full breakdown.',
        url: `${SITE_URL}/dooza-vs-sintra`,
        siteName: 'Dooza',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza vs Sintra AI — 2026 Comparison',
        description: 'Unlimited tasks vs 250 credits. Free onboarding vs self-serve. See why businesses choose Dooza over Sintra AI.',
    },
};

const faqData = [
    {
        question: 'Is Dooza really better than Sintra AI?',
        answer: 'It depends on your needs. Dooza offers unlimited tasks with no credit caps, a personal setup call with the founder, and a flat $29/month price with 7 AI employees. Sintra AI offers more helpers (12+) but limits you to 250 credits per month and has no human onboarding support. If you need unlimited usage and guided setup, Dooza is the stronger choice.',
    },
    {
        question: 'Does Sintra AI have a credit limit?',
        answer: 'Yes. All Sintra AI plans include 250 monthly credits. Advanced AI actions consume credits, and when they run out, you need to purchase top-ups. Dooza has no credit limits — every task and conversation is unlimited.',
    },
    {
        question: 'Can Sintra AI helpers talk to each other?',
        answer: 'No. Sintra AI helpers do not share context. If you need information from one helper passed to another, you must manually copy and paste it. This slows down multi-step workflows significantly.',
    },
    {
        question: 'What AI employees does Dooza offer?',
        answer: 'Dooza has 7 specialized AI employees: Maily (email), Somi (social media), Linky (LinkedIn), Tweety (Twitter/X), Utumy (YouTube), Ranky (SEO), and Lex (legal documents). Each is purpose-built for its domain.',
    },
    {
        question: 'How do I switch from Sintra AI to Dooza?',
        answer: 'You can start with Dooza\'s free tier (10 prompts/month) to test the platform. When ready, book a free 20-minute setup call with the founder, who will walk you through configuration. You can run both platforms side by side during the transition.',
    },
    {
        question: 'Which is cheaper — Dooza or Sintra AI?',
        answer: 'Dooza is $29/month flat with everything included and no credit limits. Sintra AI starts at $48.50/month (monthly) or $15.60/month on an annual commitment — but all plans are capped at 250 credits. Sintra is cheaper annually; Dooza is cheaper monthly and has no usage caps.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Dooza vs Sintra AI Comparison',
        description: metadata.description,
        url: `${SITE_URL}/dooza-vs-sintra`,
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
            { '@type': 'ListItem', position: 3, name: 'Dooza vs Sintra AI', item: `${SITE_URL}/dooza-vs-sintra` },
        ],
    },
];

export default function DoozaVsSintraPage() {
    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <DoozaVsSintraContent faqData={faqData} />
        </>
    );
}
