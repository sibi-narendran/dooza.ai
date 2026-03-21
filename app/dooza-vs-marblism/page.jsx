import { SITE_URL } from '../../lib/site';
import DoozaVsMarblismContent from './DoozaVsMarblismContent';

export const metadata = {
    title: 'Dooza vs Marblism — We Build It For You | 2026 Comparison',
    description: 'Dooza vs Marblism compared head-to-head. Personal founder setup call vs self-serve, $29/mo flat vs $44/mo + per-seat fees, 17 direct integrations vs undocumented. See why businesses choose Dooza.',
    keywords: [
        'Dooza vs Marblism', 'Marblism alternative', 'Marblism comparison',
        'AI employees comparison', 'Marblism review', 'Marblism pricing',
        'best AI employee platform', 'Marblism vs Dooza', 'AI automation platform',
        'Marblism limitations', 'Marblism integrations', 'AI business assistant',
    ],
    alternates: { canonical: `${SITE_URL}/dooza-vs-marblism` },
    openGraph: {
        title: 'Dooza vs Marblism — We Build It For You',
        description: 'Head-to-head comparison: Dooza offers a free personal setup call with the founder and $29/mo flat pricing. Marblism charges $44/mo + per-seat fees. See the full breakdown.',
        url: `${SITE_URL}/dooza-vs-marblism`,
        siteName: 'Dooza',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza vs Marblism — 2026 Comparison',
        description: 'Personal founder setup vs DIY. Flat pricing vs per-seat fees. See why businesses choose Dooza over Marblism.',
    },
};

const faqData = [
    {
        question: 'Is Dooza better than Marblism for AI employees?',
        answer: 'For businesses that want a hands-off experience, yes. Dooza provides a free personal setup call with the founder who configures everything for you. Marblism is entirely self-serve — you set up and manage agents yourself. Dooza has 17 direct integrations via Composio, while Marblism\'s integration ecosystem is limited and undocumented.',
    },
    {
        question: 'How are Dooza and Marblism different?',
        answer: 'Dooza was built as a purpose-built AI employee platform from day one with 7 specialized agents (Maily, Somi, Linky, Tweety, Utumy, Ranky, Lex). Marblism pivoted from being an app code generator to AI employees in 2025-2026 and offers 6 agents. The biggest differences are in pricing (flat vs per-seat), onboarding (personal founder call vs self-serve), and integrations (17 documented vs undocumented).',
    },
    {
        question: 'Does Marblism charge per seat?',
        answer: 'Yes. Marblism charges $44/month for the first user on the monthly plan, then $29/month for each additional seat. On the annual plan it is $24/month + $14/seat. Dooza charges a flat $29/month with no per-seat fees — your entire team can access all 7 AI employees.',
    },
    {
        question: 'Which has better integrations — Dooza or Marblism?',
        answer: 'Dooza connects to 17 tools directly via Composio, including Gmail, LinkedIn, Slack, WordPress, Shopify, and YouTube. Marblism\'s integration options are limited and not well-documented — users report difficulty connecting to tools like Notion and other common platforms.',
    },
    {
        question: 'How do I switch from Marblism to Dooza?',
        answer: 'You can start with Dooza\'s free tier (10 prompts/month) to test the platform. When ready, book a free 20-minute setup call with the founder, who will walk you through configuration and connect your tools.',
    },
    {
        question: 'What AI employees does Dooza offer?',
        answer: 'Dooza has 7 specialized AI employees: Maily (email), Somi (social media), Linky (LinkedIn), Tweety (Twitter/X), Utumy (YouTube), Ranky (SEO), and Lex (legal documents). Each is purpose-built for its domain.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Dooza vs Marblism Comparison',
        description: metadata.description,
        url: `${SITE_URL}/dooza-vs-marblism`,
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
            { '@type': 'ListItem', position: 3, name: 'Dooza vs Marblism', item: `${SITE_URL}/dooza-vs-marblism` },
        ],
    },
];

export default function DoozaVsMarblismPage() {
    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <DoozaVsMarblismContent faqData={faqData} />
        </>
    );
}
