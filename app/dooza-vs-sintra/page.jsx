import { SITE_URL } from '../../lib/site';
import DoozaVsSintraContent from './DoozaVsSintraContent';

export const metadata = {
    title: 'Sintra AI Alternative — Dooza vs Sintra Compared [2026]',
    description: 'Looking for a Sintra AI alternative? Compare Dooza vs Sintra AI — unlimited tasks, flat $49/mo, free founder setup vs Sintra\'s 250 credit cap and self-serve-only model.',
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
        description: 'The #1 Sintra AI alternative. Unlimited tasks at $49/mo flat, free founder setup call — no 250 credit caps, no DIY setup.',
        url: `${SITE_URL}/dooza-vs-sintra`,
        siteName: 'Dooza',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sintra AI Alternative — Dooza vs Sintra [2026]',
        description: 'Looking for a Sintra AI alternative? Dooza gives you unlimited AI employees, flat pricing, and free founder onboarding.',
    },
};

const faqData = [
    {
        question: 'Is Dooza really better than Sintra AI?',
        answer: 'It depends on your needs. Dooza offers unlimited tasks with no credit caps, a personal setup call with the founder, and a flat $49/month price with AI employees. Sintra AI offers more helpers (12+) but limits you to 250 credits per month and has no human onboarding support. If you need unlimited usage and guided setup, Dooza is the stronger choice.',
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
        answer: 'Dooza has 7 specialized AI employees. Maily writes, personalizes, and sends email campaigns through your Gmail or Outlook. Somi creates and schedules posts across Facebook, Instagram, and other social platforms. Linky handles LinkedIn outreach — connection requests, messages, and content publishing. Tweety manages your Twitter/X presence with tweets, threads, and engagement. Utumy helps with YouTube — scripts, titles, descriptions, and SEO for your videos. Ranky is your SEO specialist — keyword research, site audits, content briefs, and blog writing to get you ranking. Lex drafts legal documents like NDAs, contracts, and terms of service. Each agent connects directly to your tools and works autonomously.',
    },
    {
        question: 'How do I switch from Sintra AI to Dooza?',
        answer: 'You can start with Dooza\'s free plan to test the platform. When ready, book a free 20-minute setup call with the founder, who will walk you through configuration. You can run both platforms side by side during the transition.',
    },
    {
        question: 'Which is cheaper — Dooza or Sintra AI?',
        answer: 'Dooza is $49/month flat with everything included and no credit limits. Sintra AI starts at $48.50/month (monthly) or $15.60/month on an annual commitment — but all plans are capped at 250 credits. Sintra is cheaper annually; Dooza is cheaper monthly and has no usage caps.',
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
        answer: 'Dooza connects to your tools via Composio with OAuth-based authentication — your credentials are never stored directly. All data is encrypted in transit and at rest. You control which integrations are active and can revoke access at any time.',
    },
    {
        question: 'How long does it take to see results with AI employees?',
        answer: 'Most Dooza users see their first automated outputs within the first day. The founder personally walks you through setup in a 20-minute call, and your brand info is auto-extracted from your website. SEO results build over weeks, but email, social media, and content tasks start producing immediately.',
    },
    {
        question: 'Do I need to be technical to use AI employees?',
        answer: 'Not at all. Dooza is designed for non-technical business owners and small teams. The founder personally sets up your workspace, connects your tools, and shows you how everything works. If you can send an email, you can use Dooza.',
    },
    {
        question: 'What happens if I run out of Sintra AI credits?',
        answer: 'When your 250 monthly credits on Sintra AI run out, you either wait until next month or purchase credit top-ups at additional cost. This can be frustrating if you rely on your AI helpers daily. Dooza has no credit system — usage is unlimited on all plans.',
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
