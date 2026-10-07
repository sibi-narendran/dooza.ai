import { SITE_URL } from '../../lib/site';
import DoozaVsMarblismContent from './DoozaVsMarblismContent';

export const metadata = {
    title: 'Dooza vs Marblism (2026): Done-for-You vs Self-Serve AI Employees',
    description: 'Dooza vs Marblism compared: Marblism pricing (checked October 7, 2026), setup, AI employees, and when a done-for-you option fits better than self-serve.',
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
        description: 'Head-to-head comparison: a Dooza engineer scopes your refundable pilot on a free 30-minute call (100% refund within 14 days). Marblism is self-serve, from $24/mo billed yearly or $44/mo monthly with all 7 AI employees. See the full breakdown.',
        url: `${SITE_URL}/dooza-vs-marblism`,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza vs Marblism comparison' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza vs Marblism — 2026 Comparison',
        description: 'Done-for-you vs self-serve AI employees. Engineer-led setup and a refundable pilot vs the lowest-cost DIY option. See the full comparison.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqData = [
    {
        question: 'Is Dooza better than Marblism for AI employees?',
        answer: 'For businesses that want a hands-off experience, yes. A Dooza engineer scopes your pilot on a free 30-minute call and configures everything with you. Marblism is self-serve: you set up and manage the AI employees yourself. If you want the lowest-cost self-serve option, Marblism is the better pick; if you want it built and tuned for you, Dooza fits better.',
    },
    {
        question: 'How are Dooza and Marblism different?',
        answer: 'Dooza is an AI-native company that builds AI products and services for small businesses. Its AI employees each have one job (Maily, Somi, Ranky, Stan, Linda, and Rachel). Marblism offers 7 AI employees (Eva, Sonny, Stan, Penny, Rachel, Walter, and Linda) in every plan. The biggest difference is setup: Dooza is done for you (a Dooza engineer scopes, builds, and tunes your AI employees or custom agents with you), while Marblism is self-serve and costs less for a self-serve user.',
    },
    {
        question: 'How much does Marblism cost?',
        answer: 'According to Marblism\'s pricing page (checked October 7, 2026), plans start at $24/month billed yearly or $44/month billed monthly. Every plan includes all 7 AI employees, 50 hours of work, unlimited team members, and unlimited businesses. The pricing page does not mention a free trial. Dooza pricing depends on the product, and every Dooza product starts with a refundable pilot (100% refund within 14 days) — see dooza.ai/pricing.',
    },
    {
        question: 'Which has better integrations — Dooza or Marblism?',
        answer: 'Dooza offers 1,000+ app integrations, including Gmail, LinkedIn, Slack, WordPress, Shopify, and YouTube. For the tools Marblism connects to, check Marblism\'s own site.',
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
