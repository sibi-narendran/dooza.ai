import { SITE_URL } from '../../lib/site';
import DoozaVsSintraContent from './DoozaVsSintraContent';

export const metadata = {
    title: 'Sintra AI Alternative — Dooza vs Sintra Compared [2026]',
    description: 'Compare Dooza vs Sintra AI on tasks, pricing, credits, setup, onboarding, and AI employees before choosing a Sintra alternative.',
    keywords: [
        'Sintra AI alternative', 'Dooza vs Sintra AI', 'Sintra AI review',
        'Sintra AI comparison', 'best Sintra AI alternative', 'Sintra AI vs Dooza',
        'AI employees comparison', 'Sintra AI pricing', 'Sintra AI credit limit',
        'Sintra AI limitations', 'best AI employee platform', 'AI automation platform',
        'AI business assistant', 'AI employees for small business', 'AI automation tools 2026',
    ],
    alternates: { canonical: `${SITE_URL}/dooza-vs-sintra` },
    openGraph: {
        title: 'Sintra AI Alternative — Dooza vs Sintra Compared [2026]',
        description: 'A Sintra AI alternative with no credits and no 250-credit cap. A Dooza engineer scopes your refundable pilot on a free 30-minute call — 100% refund within 14 days.',
        url: `${SITE_URL}/dooza-vs-sintra`,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza vs Sintra AI comparison' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sintra AI Alternative — Dooza vs Sintra [2026]',
        description: 'Looking for a Sintra AI alternative? Dooza gives you AI employees with no credits, set up with a Dooza engineer, and a refundable pilot.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqData = [
    {
        question: 'Is Dooza really better than Sintra AI?',
        answer: 'It depends on your needs. Dooza has no credits, a free 30-minute call with a Dooza engineer to scope your pilot, and every product starts with a refundable pilot (100% refund within 14 days). Sintra AI offers more helpers (12+) but limits you to 250 credits per month and has no human onboarding support. If you want no credit meters and guided setup, Dooza is the stronger choice.',
    },
    {
        question: 'Does Sintra AI have a credit limit?',
        answer: 'Yes. All Sintra AI plans include 250 monthly credits. Advanced AI actions consume credits, and when they run out, you need to purchase top-ups. Dooza has no credits — you are never blocked mid-month by a credit balance.',
    },
    {
        question: 'Can Sintra AI helpers talk to each other?',
        answer: 'No. Sintra AI helpers do not share context. If you need information from one helper passed to another, you must manually copy and paste it. This slows down multi-step workflows significantly.',
    },
    {
        question: 'What AI employees does Dooza offer?',
        answer: 'Dooza\'s AI employees each own one job. Maily handles email through your Gmail or Outlook. Somi creates and schedules social media posts across Facebook, Instagram, and LinkedIn. Ranky handles SEO and AI visibility: keyword research, blog writing, and getting you cited by ChatGPT and Google. Stan finds and follows up with leads. Linda drafts legal documents like NDAs and contracts. Rachel (Voice Pro) answers calls and books appointments. Each one connects to your tools and works 24/7, with your approval on anything sensitive.',
    },
    {
        question: 'How do I switch from Sintra AI to Dooza?',
        answer: 'Book a free 30-minute call and a Dooza engineer scopes your pilot with you. Every Dooza product starts with a refundable pilot — 100% refund within 14 days. You can run both platforms side by side during the transition. See /pricing for current plans.',
    },
    {
        question: 'How does Dooza pricing compare to Sintra AI?',
        answer: 'Sintra AI starts at $48.50/month (monthly) or $15.60/month on an annual commitment — but all plans are capped at 250 credits. Dooza has no credits and no per-seat fees, and every Dooza product starts with a refundable pilot (100% refund within 14 days). Pricing depends on the product; current plans are listed at dooza.ai/pricing.',
    },
    {
        question: 'What is an AI employee and how does it work?',
        answer: 'An AI employee is a specialized AI agent that handles a specific business function — like writing emails, managing social media, or optimizing SEO. Unlike generic chatbots, AI employees connect to your real tools (Gmail, Slack, LinkedIn), learn your brand voice, and execute tasks end-to-end without constant supervision.',
    },
    {
        question: 'Can AI employees really automate my marketing?',
        answer: 'Yes. AI employees can draft and send email campaigns, write and schedule social media posts, create SEO-optimized blog content, manage LinkedIn outreach, and more. They handle the repetitive execution work so your team can focus on strategy and creative direction.',
    },
    {
        question: 'Is my business data safe with AI employee platforms?',
        answer: 'Dooza connects to your tools with OAuth-based authentication — your credentials are never stored directly. All data is encrypted in transit and at rest. You control which integrations are active and can revoke access at any time.',
    },
    {
        question: 'How long does it take to see results with AI employees?',
        answer: 'Workforce employees can start working the same day. A Dooza engineer scopes your pilot on a free 30-minute call, and your brand info is auto-extracted from your website. SEO results build over weeks, but email, social media, and content tasks start producing immediately.',
    },
    {
        question: 'Do I need to be technical to use AI employees?',
        answer: 'Not at all. Dooza is designed for non-technical business owners and small teams. A Dooza engineer sets up your workspace, connects your tools, and shows you how everything works. If you can send an email, you can use Dooza.',
    },
    {
        question: 'What happens if I run out of Sintra AI credits?',
        answer: 'When your 250 monthly credits on Sintra AI run out, you either wait until next month or purchase credit top-ups at additional cost. This can be frustrating if you rely on your AI helpers daily. Dooza has no credit system, so you are never locked out mid-month.',
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
