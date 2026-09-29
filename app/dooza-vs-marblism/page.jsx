import { SITE_URL } from '../../lib/site';
import DoozaVsMarblismContent from './DoozaVsMarblismContent';

export const metadata = {
    title: 'Dooza vs Marblism — No Per-Seat Fees vs Per-Seat Pricing [2026]',
    description: 'Compare Dooza vs Marblism on pricing, seats, setup, integrations, and AI employee workflows before choosing an automation platform.',
    keywords: [
        'Dooza vs Marblism', 'Marblism alternative', 'Marblism comparison',
        'AI employees comparison', 'Marblism review', 'Marblism pricing',
        'best AI employee platform', 'Marblism vs Dooza', 'AI automation platform',
        'Marblism limitations', 'Marblism integrations', 'AI business assistant',
        'AI employees for small business', 'AI automation tools 2026',
    ],
    alternates: { canonical: `${SITE_URL}/dooza-vs-marblism` },
    openGraph: {
        title: 'Dooza vs Marblism — We Build It For You',
        description: 'Head-to-head comparison: a Dooza engineer scopes your refundable pilot on a free 30-minute call, with no per-seat fees and a 100% refund within 14 days. Marblism charges $44/mo + per-seat fees. See the full breakdown.',
        url: `${SITE_URL}/dooza-vs-marblism`,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza vs Marblism comparison' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza vs Marblism — 2026 Comparison',
        description: 'Engineer-led setup vs DIY. No per-seat fees vs per-seat pricing. A refundable pilot vs self-serve. See the full comparison.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqData = [
    {
        question: 'Is Dooza better than Marblism for AI employees?',
        answer: 'For businesses that want a hands-off experience, yes. A Dooza engineer scopes your pilot on a free 30-minute call and configures everything with you. Marblism is entirely self-serve — you set up and manage agents yourself. Dooza offers 1,000+ app integrations, while Marblism\'s integration ecosystem is limited and undocumented.',
    },
    {
        question: 'How are Dooza and Marblism different?',
        answer: 'Dooza is an AI-native company that builds AI products and services for small businesses. Its AI employees each have one job (Maily, Somi, Ranky, Stan, Linda, and Rachel). Marblism pivoted from being an app code generator to AI employees in 2025-2026 and offers 6 agents. The biggest differences are in pricing (flat vs per-seat), onboarding (engineer-led setup vs self-serve), and integrations (1,000+ vs undocumented).',
    },
    {
        question: 'Does Marblism charge per seat?',
        answer: 'Yes. Marblism charges $44/month for the first user on the monthly plan, then $29/month for each additional seat. On the annual plan it is $24/month + $14/seat. Dooza has no per-seat fees and no credits, so adding a teammate does not change your bill; every Dooza product starts with a refundable pilot (100% refund within 14 days). Pricing depends on the product — see dooza.ai/pricing.',
    },
    {
        question: 'Which has better integrations — Dooza or Marblism?',
        answer: 'Dooza offers 1,000+ app integrations, including Gmail, LinkedIn, Slack, WordPress, Shopify, and YouTube. Marblism\'s integration options are limited and not well-documented — users report difficulty connecting to tools like Notion and other common platforms.',
    },
    {
        question: 'How do I switch from Marblism to Dooza?',
        answer: 'Book a free 30-minute call and a Dooza engineer will scope your pilot, configure your AI employees, and connect your tools. Every Dooza product starts with a refundable pilot — 100% refund within 14 days. See /pricing for current plans.',
    },
    {
        question: 'What AI employees does Dooza offer?',
        answer: 'Dooza\'s AI employees each own one job. Maily handles email through your Gmail or Outlook. Somi creates and schedules social media posts across Facebook, Instagram, and LinkedIn. Ranky handles SEO and AI visibility: keyword research, blog writing, and getting you cited by ChatGPT and Google. Stan finds and follows up with leads. Linda drafts legal documents like NDAs and contracts. Rachel (Voice Pro) answers calls and books appointments. Each one connects to your tools and works 24/7, with your approval on anything sensitive.',
    },
    {
        question: 'Can AI employees really replace human workers?',
        answer: 'AI employees handle repetitive, time-consuming tasks like writing emails, scheduling social media posts, optimizing SEO, and drafting legal documents. They work 24/7, never take sick days, and cost a fraction of hiring. They don\'t fully replace humans for complex strategy work, but they free up your team to focus on what matters most.',
    },
    {
        question: 'What is an AI employee platform?',
        answer: 'An AI employee platform provides specialized AI agents that handle specific business functions — like email marketing, social media, SEO, and customer outreach. Unlike generic AI chatbots, AI employees are trained for specific roles, connect to your business tools, and execute tasks autonomously.',
    },
    {
        question: 'Is Dooza safe to use with my business data?',
        answer: 'Yes. Dooza connects to your tools with OAuth-based authentication. Your credentials are never stored directly. All data is encrypted in transit and at rest. You control which integrations are active and can disconnect them at any time.',
    },
    {
        question: 'How long does it take to set up Dooza?',
        answer: 'A Dooza engineer scopes your pilot on a free 30-minute call, then walks you through configuration, connects your tools, and makes sure everything is running. Your brand info is auto-extracted from your website to personalize outputs from day one.',
    },
    {
        question: 'What makes AI employees different from ChatGPT or other AI chatbots?',
        answer: 'AI chatbots are general-purpose conversation tools. AI employees are specialized agents built for specific business functions — they connect to your tools (Gmail, Slack, LinkedIn), understand your brand voice, and execute tasks end-to-end. They don\'t just generate text — they publish posts, send emails, and optimize your SEO automatically.',
    },
    {
        question: 'Do I need technical skills to use Dooza?',
        answer: 'No. Dooza is designed for non-technical business owners. A Dooza engineer scopes your pilot on a free call and sets it up with you, and the platform auto-extracts your brand info from your website. If you can use email, you can use Dooza.',
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
