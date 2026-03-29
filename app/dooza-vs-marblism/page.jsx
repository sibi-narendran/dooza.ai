import { SITE_URL } from '../../lib/site';
import DoozaVsMarblismContent from './DoozaVsMarblismContent';

export const metadata = {
    title: 'Dooza vs Marblism — $29 Flat vs Per-Seat Fees [2026]',
    description: 'Dooza vs Marblism compared: $29/mo flat vs $44/mo + per-seat fees, free founder setup vs self-serve, 17 integrations vs undocumented. See the honest breakdown.',
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
        answer: 'Dooza was built as a purpose-built AI employee platform from day one with specialized agents (Maily, Somi, Linky, Tweety, Utumy, Ranky, Lex). Marblism pivoted from being an app code generator to AI employees in 2025-2026 and offers 6 agents. The biggest differences are in pricing (flat vs per-seat), onboarding (personal founder call vs self-serve), and integrations (17 documented vs undocumented).',
    },
    {
        question: 'Does Marblism charge per seat?',
        answer: 'Yes. Marblism charges $44/month for the first user on the monthly plan, then $29/month for each additional seat. On the annual plan it is $24/month + $14/seat. Dooza charges a flat $29/month with no per-seat fees — your entire team can access all AI employees.',
    },
    {
        question: 'Which has better integrations — Dooza or Marblism?',
        answer: 'Dooza connects to 17 tools directly via Composio, including Gmail, LinkedIn, Slack, WordPress, Shopify, and YouTube. Marblism\'s integration options are limited and not well-documented — users report difficulty connecting to tools like Notion and other common platforms.',
    },
    {
        question: 'How do I switch from Marblism to Dooza?',
        answer: 'You can start with Dooza\'s free plan to test the platform. When ready, book a free 20-minute setup call with the founder, who will walk you through configuration and connect your tools.',
    },
    {
        question: 'What AI employees does Dooza offer?',
        answer: 'Dooza has 7 specialized AI employees. Maily writes, personalizes, and sends email campaigns through your Gmail or Outlook. Somi creates and schedules posts across Facebook, Instagram, and other social platforms. Linky handles LinkedIn outreach — connection requests, messages, and content publishing. Tweety manages your Twitter/X presence with tweets, threads, and engagement. Utumy helps with YouTube — scripts, titles, descriptions, and SEO for your videos. Ranky is your SEO specialist — keyword research, site audits, content briefs, and blog writing to get you ranking. Lex drafts legal documents like NDAs, contracts, and terms of service. Each agent connects directly to your tools and works autonomously.',
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
        answer: 'Yes. Dooza connects to your tools via Composio with OAuth-based authentication. Your credentials are never stored directly. All data is encrypted in transit and at rest. You control which integrations are active and can disconnect them at any time.',
    },
    {
        question: 'How long does it take to set up Dooza?',
        answer: 'Most businesses are fully set up in about 20 minutes. You book a free call with the founder, who walks you through configuration, connects your tools, and makes sure everything is running. Your brand info is auto-extracted from your website to personalize outputs from day one.',
    },
    {
        question: 'What makes AI employees different from ChatGPT or other AI chatbots?',
        answer: 'AI chatbots are general-purpose conversation tools. AI employees are specialized agents built for specific business functions — they connect to your tools (Gmail, Slack, LinkedIn), understand your brand voice, and execute tasks end-to-end. They don\'t just generate text — they publish posts, send emails, and optimize your SEO automatically.',
    },
    {
        question: 'Do I need technical skills to use Dooza?',
        answer: 'No. Dooza is designed for non-technical business owners. The founder personally walks you through setup in a free call, and the platform auto-extracts your brand info from your website. If you can use email, you can use Dooza.',
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
