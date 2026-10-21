import Link from 'next/link';
import {
    CheckCircle2, XCircle, Sparkles, Star,
    DollarSign, Puzzle, Shield, Users, Bot, Clock
} from 'lucide-react';
import SignupButton from '@/components/buttons/SignupButton';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import BookingModalProvider from '@/components/BookingModalProvider';
import FAQAccordion from '@/components/FAQAccordion';
import { MANAGED_PAY_URL, tagPay } from '@/lib/offers';
import { recepPayUrl } from '@/lib/aiReceptionistData';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site';

const PATH = '/relevance-ai-alternatives';
const CHECKED = 'October 21, 2026';
const TITLE = 'Relevance AI Alternatives: 9 Options, 2026 Prices';
const DESCRIPTION = 'Relevance AI shows no public price, only an Enterprise plan via sales (checked Oct 21, 2026). Compare 9 alternatives at listed prices, Lindy to n8n.';

export const metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    keywords: [
        'Relevance AI alternatives', 'Relevance AI alternative', 'Relevance AI pricing', 'Relevance AI free',
        'Relevance AI competitors', 'Marblism vs Relevance AI', 'Relevance AI vs Lindy', 'Relevance AI vs Gumloop',
        'AI workforce platform', 'AI agent builder for small business', 'done-for-you AI agents',
    ],
    alternates: { canonical: `${SITE_URL}${PATH}` },
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
        title: TITLE,
        description: DESCRIPTION,
        url: `${SITE_URL}${PATH}`,
        siteName: 'Dooza',
        type: 'article',
        modifiedTime: '2026-10-21T00:00:00.000Z',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Relevance AI Alternatives — Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: TITLE,
        description: DESCRIPTION,
        images: [`${SITE_URL}/logo.png`],
    },
};

// Every vendor price below was read on the vendor's own pricing page on 2026-10-21
// (exact strings and raw files in content/drafts/relevance-ai-alternatives/README.md and raw/).
// Dooza wording is copied from app/marblism-alternatives (no new Dooza claims).

const faqData = [
    {
        question: 'How much does Relevance AI cost?',
        answer: 'Relevance AI has no public price on its pricing page (checked October 21, 2026). The page lists one plan, Enterprise, with "Custom Actions" and "Custom Vendor Credits", and the only way to get a price is "Talk to sales". If you need a listed price, Lindy starts at $49.99/month per user for 5,000 credits, Gumloop starts at $37/month, and Zapier Agents Pro is $33.33/month billed annually ($400 a year) (all checked October 21, 2026).',
    },
    {
        question: 'Is Relevance AI free?',
        answer: 'No free plan is listed. Relevance AI\'s pricing page shows only an Enterprise plan through sales (checked October 21, 2026). Free options among the alternatives: Zapier Agents has a free plan with 400 activities per month, CrewAI\'s Basic plan is free with 50 workflow executions a month, Cubeo AI has a free plan with 100 credits a month, and Lindy gives $50 in free credits that last 7 days. Dooza Managed is free for the first 7 days, then $200/month; custom agents start with a refundable pilot (100% refund within 14 days).',
    },
    {
        question: 'What are the best Relevance AI alternatives in 2026?',
        answer: 'For a small business that wants it done for you: Dooza. For building your own agents with listed prices: Lindy (from $49.99/month per user), Gumloop (from $37/month), Zapier Agents (free, or $33.33/month billed annually), n8n (from 20€/month billed annually) and CrewAI (free Basic plan). For ready-made AI employees you run yourself: Sintra AI (from $15.60/month on a 12-month plan) and Marblism ($24/month billed yearly). Cubeo AI is a no-code chatbot and agent builder with a free plan. Prices checked October 21, 2026.',
    },
    {
        question: 'Is Dooza better than Relevance AI?',
        answer: 'It depends on who builds the agents. Relevance AI is the better fit if your company wants to design and run its own AI workforce at scale: its Enterprise plan lists unlimited agents, users and workforces, 2,000+ integrations, SSO, RBAC and audit logs, and a dedicated account manager (checked October 21, 2026). Dooza is done for you: a Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes your AI employees or custom agents with you, with 1,000+ app integrations. Dooza Managed is free for the first 7 days, then $200/month; custom agents start with a refundable pilot (100% refund within 14 days).',
    },
    {
        question: 'Marblism vs Relevance AI: which is better for a solo founder?',
        answer: 'For a solo founder, Marblism is the simpler fit: it is self-serve, with all 7 AI employees for $24/month billed yearly or $44/month billed monthly, 50 hours of work, and a 7-day money-back guarantee (checked October 21, 2026). Relevance AI\'s pricing page lists only an Enterprise plan through sales. If you would rather not run the AI yourself, Dooza Managed is an AI admin assistant checked by a real person: first 7 days free, then $200/month. See our Marblism alternatives page for the full Marblism comparison.',
    },
    {
        question: 'What is the cheapest Relevance AI alternative?',
        answer: 'Among paid plans, Sintra AI\'s 12-month plan is $15.60/month, Cubeo AI\'s Starter is 17€ a month, n8n Starter is 20€/month billed annually, and Zapier Agents Pro is $33.33/month billed annually (checked October 21, 2026). Zapier Agents, CrewAI Basic and Cubeo AI also have free plans. Dooza is not the lowest-priced option; it is done for you, and its pricing is listed at dooza.ai/pricing.',
    },
    {
        question: 'Is there an open-source alternative to Relevance AI?',
        answer: 'Yes. n8n says a standard, self-hosted version of n8n, the Community Edition, is available on GitHub, and CrewAI publishes an open-source project alongside its free Basic cloud plan (checked October 21, 2026). Both expect you or a developer to build and host the agents.',
    },
    {
        question: 'Which Relevance AI alternative has the most integrations?',
        answer: 'Relevance AI itself lists 2,000+ integrations on its Enterprise plan, and Lindy lists 1,500+ integrations plus MCP on its pricing page (checked October 21, 2026). n8n says every plan includes every integration. Dooza offers 1,000+ app integrations, connected for you during setup.',
    },
    {
        question: 'Who is Relevance AI a better fit for than Dooza?',
        answer: 'Relevance AI fits companies building their own agent workforce: its pricing page is written "for companies looking to decouple growth from headcount via an AI Workforce" and lists enterprise controls such as SSO, RBAC and audit logs, agent evaluations, and A/B testing and analytics (checked October 21, 2026). If you have a team that will design, test and run many agents, that is a strong fit. Dooza fits SMBs and teams that want AI employees built and tuned for them instead of DIY setup.',
    },
];

const painPoints = [
    { icon: DollarSign, title: 'No Public Price', desc: 'Relevance AI\'s pricing page (checked October 21, 2026) lists one plan, Enterprise, and the only price option is "Talk to sales". If you want to know the cost before a call, compare plans with listed prices.' },
    { icon: Users, title: 'Built for Larger Teams', desc: 'The Enterprise plan lists unlimited users and projects, SSO, RBAC and audit logs, and a dedicated account manager. A small business may not need, or want to pay for, that much control.' },
    { icon: Bot, title: 'You Build the Workforce', desc: 'Relevance AI is a platform for designing your own AI workforce. If you would rather have someone build and tune the agents with you, a done-for-you option fits better.' },
    { icon: Puzzle, title: 'Two Usage Meters', desc: 'The Enterprise plan lists "Custom Actions" and "Custom Vendor Credits". Check how each alternative meters work: credits, activities, workflow executions or a flat monthly plan.' },
    { icon: Shield, title: 'How You Evaluate It', desc: 'There is no free plan or self-serve trial on Relevance AI\'s pricing page. Some alternatives offer free plans, free credits, free trials or refundable pilots.' },
    { icon: Clock, title: 'Time to Set It Up', desc: 'Every builder on this list, Relevance AI included, needs someone to design, test and maintain the agents. Weigh that time against a done-for-you option.' },
];

const alternatives = [
    {
        rank: 1,
        name: 'Dooza',
        url: SITE_URL,
        tagline: 'Best done-for-you option — engineer-led setup, custom agents, 1,000+ integrations',
        bestFor: 'SMBs and teams that want AI employees built and tuned for them instead of DIY setup',
        price: 'Managed: 7 days free, then $200/mo; custom agents: refundable pilot',
        trial: 'Managed: first 7 days free; custom agents: refundable pilot',
        builder: 'Dooza engineers, with you',
        agents: 'Maily (email), Somi (social media), Ranky (SEO & AI visibility), Stan (lead generation), Linda (legal documents)',
        integrations: '1,000+ app integrations',
        highlight: true,
        pros: [
            'Done for you: a Dooza engineer builds and tunes your AI employees with you',
            'Dooza Managed: first 7 days free, then $200/month, checked by a real person',
            'A Dooza engineer scopes your pilot on a free 30-minute call and sets it up with you',
            '1,000+ app integrations',
            'Custom agents built and maintained by Dooza engineers (Dooza Agents)',
        ],
        cons: [
            'Fewer integrations than Relevance AI\'s listed 2,000+',
            'Costs more to start than self-serve builders like Zapier Agents, Gumloop or n8n',
            'Newer platform with a smaller user base',
            'No free tier after the 7-day Managed trial; custom agents are a paid, refundable pilot',
        ],
    },
    {
        rank: 2,
        name: 'Lindy AI',
        url: 'https://www.lindy.ai/pricing',
        tagline: 'Self-serve AI teammate with a large integration library',
        bestFor: 'Teams who want a self-serve AI teammate in Slack and are happy to configure it themselves',
        price: 'From $49.99/mo per active user for 5,000 credits; 15,000 credits for $99.99 (checked October 21, 2026)',
        trial: '$50 in free credits, valid for 7 days, no credit card required',
        builder: 'You (Lindy offers live onboarding on Team)',
        agents: '40+ skills, plus create your own; scheduled routines',
        integrations: '1,500+ integrations + MCP (pricing page)',
        highlight: false,
        pros: [
            'Listed price: from $49.99/month per user for 5,000 credits, with bigger credit packs on the same page',
            '1,500+ integrations plus MCP support',
            'SOC 2 and GDPR; Enterprise adds SSO, audit logs and HIPAA with a signed BAA',
            '$50 in free credits to try it for 7 days',
        ],
        cons: [
            'Credit-based: when credits run low, Lindy pauses until they reset or you top up ($10 per 1,000 credits)',
            'Every active user in the workspace is billed, so cost grows with team size',
            'You configure the skills and routines yourself',
        ],
    },
    {
        rank: 3,
        name: 'Gumloop',
        url: 'https://www.gumloop.com/pricing',
        tagline: 'Agent and workflow builder with a listed Pro price',
        bestFor: 'Teams that want to build agents themselves without a sales call',
        price: 'Pro starts at $37/month; Enterprise custom (checked October 21, 2026)',
        trial: '14-day free trial on Pro',
        builder: 'You',
        agents: 'Unlimited agents on Pro; 35+ models and bring-your-own API keys',
        integrations: 'Connectors library (see gumloop.com)',
        highlight: false,
        pros: [
            'Self-serve with a listed price: Pro starts at $37/month',
            'Unlimited agents, seats and teams on Pro',
            '20k credits a month included on Pro',
            '14-day free trial',
        ],
        cons: [
            'Credit-based, with an 8% orchestration fee listed on Pro',
            'You design and maintain the agents yourself',
        ],
    },
    {
        rank: 4,
        name: 'Zapier Agents',
        url: 'https://zapier.com/pricing',
        tagline: 'AI agents inside the Zapier automation platform',
        bestFor: 'Teams already using Zapier who want agents next to their Zaps',
        price: 'Free (400 activities/month) or Pro $33.33/month billed annually, $400/year (checked October 21, 2026)',
        trial: 'Free plan',
        builder: 'You',
        agents: 'Agents that run automated behaviors, with live data sources and web browsing',
        integrations: 'Zapier\'s app library (see zapier.com)',
        highlight: false,
        pros: [
            'Free plan: up to 400 activities per month',
            'Pro: 1,500 activities per month for $33.33/month billed annually',
            'Live data sources and web browsing included',
        ],
        cons: [
            'Agent plans are listed separately from Zapier\'s automation plans',
            'Activity caps: heavy use needs a bigger plan',
            'You build and maintain the agents yourself',
        ],
    },
    {
        rank: 5,
        name: 'n8n',
        url: 'https://n8n.io/pricing',
        tagline: 'Workflow automation with agents, cloud or self-hosted',
        bestFor: 'Technical teams that want to self-host or pay per workflow execution',
        price: 'Starter 20€/mo, Pro 50€/mo (billed annually); Enterprise via sales (checked October 21, 2026)',
        trial: 'Free trial, no credit card required',
        builder: 'You (or a developer)',
        agents: 'Agents, MCP and AI nodes on every plan',
        integrations: 'Every integration on every plan, per n8n',
        highlight: false,
        pros: [
            'Priced per workflow execution: 2.5K executions on Starter, 10K on Pro',
            'Unlimited users and workflows on all plans',
            'Self-hosted Community Edition available on GitHub',
        ],
        cons: [
            'Prices in euros',
            'More technical than the AI employee apps on this list',
            'You build, host (if self-hosted) and maintain the workflows yourself',
        ],
    },
    {
        rank: 6,
        name: 'CrewAI',
        url: 'https://www.crewai.com/pricing',
        tagline: 'Multi-agent platform with a free plan and an enterprise tier',
        bestFor: 'Developers and enterprise teams building multi-agent workflows',
        price: 'Basic free (50 workflow executions/month); Enterprise custom (checked October 21, 2026)',
        trial: 'Free Basic plan; Enterprise trial on request',
        builder: 'You (or a developer)',
        agents: 'Visual editor and AI copilot for agentic workflows; open-source project on GitHub',
        integrations: 'Standard tools and triggers; enterprise connectors on Enterprise',
        highlight: false,
        pros: [
            'Free Basic plan with a visual editor and AI copilot',
            'Enterprise can deploy on CrewAI cloud, your own VPC or your own infrastructure',
            'Enterprise includes a 45-day onboarding',
        ],
        cons: [
            'Free plan is small: 50 workflow executions a month',
            'Enterprise pricing is custom, through sales',
            'Built for developers and enterprise teams more than small business owners',
        ],
    },
    {
        rank: 7,
        name: 'Sintra AI',
        url: 'https://sintra.ai/pricing',
        tagline: 'Largest named agent roster with 12+ helpers',
        bestFor: 'Users who want the widest variety of pre-built AI helpers',
        price: '$48.50/mo month to month or $15.60/mo on a 12-month plan (checked October 21, 2026)',
        trial: '14-day money-back guarantee',
        builder: 'Ready-made helpers; you run them',
        agents: 'All 12 helpers: Soshie, Cassie, Dexter, Buddy, Emmie, Penn, Seomi, Vizzy and more',
        integrations: '15+ integrations on every plan',
        highlight: false,
        pros: [
            'Ready-made helpers instead of building agents from scratch',
            'Low price: $15.60/mo on a 12-month plan',
            '14-day money-back guarantee',
        ],
        cons: [
            '250 monthly credits on every plan, with paid top-ups when you run out',
            'The lowest rate needs a 12-month plan',
            'Self-serve: you run the helpers yourself',
        ],
    },
    {
        rank: 8,
        name: 'Marblism',
        url: 'https://www.marblism.com/pricing',
        tagline: 'Low-cost, self-serve AI employees',
        bestFor: 'Solo founders who want 7 ready-made AI employees for a low monthly price',
        price: '$24/mo billed yearly or $44/mo monthly (checked October 21, 2026)',
        trial: '7-day money-back guarantee',
        builder: 'Ready-made AI employees; you run them',
        agents: 'All 7: Eva, Sonny, Stan, Walter, Penny, Rachel, Linda',
        integrations: 'See marblism.com',
        highlight: false,
        pros: [
            'All 7 AI employees, 50 hours of work and unlimited team members on one plan',
            'Low price: $24/mo billed yearly',
            '7-day money-back guarantee',
        ],
        cons: [
            'Fixed roster of 7 AI employees',
            '50 hours of work included',
            'Self-serve: you set up and run the AI employees yourself',
        ],
    },
    {
        rank: 9,
        name: 'Cubeo AI',
        url: 'https://cubeo.ai/pricing',
        tagline: 'No-code AI agent and chatbot builder with a free plan',
        bestFor: 'Businesses wanting simple AI chatbots on their website',
        price: 'Free plan; Starter 17€/month for 1,200 credits (checked October 21, 2026)',
        trial: 'Free plan with 100 credits a month, no credit card required',
        builder: 'You',
        agents: 'No-code builder for AI assistants and chatbots',
        integrations: 'See cubeo.ai',
        highlight: false,
        pros: [
            'Free forever plan with 100 credits a month',
            'Low entry price: 17€/month on Starter',
            'Unlimited team members on every plan',
        ],
        cons: [
            'Credit-based',
            'Prices in euros',
            'You build and configure the agents yourself',
        ],
    },
];

const decisionGuide = [
    { need: 'Done for you (small business)', pick: 'Dooza', reason: 'A Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes AI employees or custom agents with you' },
    { need: 'Enterprise AI workforce you build and govern', pick: 'Relevance AI or CrewAI Enterprise', reason: 'Relevance AI lists unlimited agents, users and workforces, 2,000+ integrations, SSO, RBAC and audit logs. CrewAI Enterprise can deploy in your own VPC. Both price through sales' },
    { need: 'Self-serve AI teammate in Slack', pick: 'Lindy AI', reason: 'From $49.99/month for 5,000 credits, 1,500+ integrations, $50 in free credits for 7 days' },
    { need: 'Build agents with a listed price', pick: 'Gumloop', reason: 'Pro starts at $37/month with unlimited agents and seats, 14-day free trial' },
    { need: 'Already on Zapier', pick: 'Zapier Agents', reason: 'Free for 400 activities a month; Pro $33.33/month billed annually for 1,500' },
    { need: 'Self-host or pay per execution', pick: 'n8n', reason: 'Starter 20€/month billed annually for 2.5K executions; Community Edition self-hosted from GitHub' },
    { need: 'Ready-made AI employees, lowest price', pick: 'Sintra AI or Marblism', reason: 'Sintra $15.60/mo on a 12-month plan; Marblism $24/mo billed yearly for all 7 AI employees' },
    { need: 'Website chatbot on a free plan', pick: 'Cubeo AI', reason: 'Free plan with 100 credits a month; Starter 17€/month' },
];

const relevanceRows = [
    { item: 'Plans listed', value: 'One: Enterprise' },
    { item: 'Price', value: 'No public price on its pricing page (checked October 21, 2026): "Talk to sales"' },
    { item: 'Usage', value: 'Custom Actions; Custom Vendor Credits' },
    { item: 'Agents and users', value: 'Unlimited Agents & Tools; Unlimited Users & Projects; Unlimited Workforces' },
    { item: 'Integrations', value: '2,000+ Integrations' },
    { item: 'Also listed', value: 'Calling & Meeting Agents; Enterprise Triggers; Agent Evaluations; A/B Testing & Analytics' },
    { item: 'Admin and support', value: 'SSO, RBAC & Audit Logs; Dedicated Account Manager' },
    { item: 'Free plan or trial', value: 'None listed on the pricing page' },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: TITLE,
        description: DESCRIPTION,
        url: `${SITE_URL}${PATH}`,
        dateModified: '2026-10-21',
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
            { '@type': 'ListItem', position: 3, name: 'Relevance AI Alternatives', item: `${SITE_URL}${PATH}` },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '9 Relevance AI Alternatives in 2026',
        itemListElement: alternatives.map((alt) => ({
            '@type': 'ListItem', position: alt.rank, name: alt.name, url: alt.url,
        })),
    },
];

const chip = 'text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors';

export default function RelevanceAiAlternativesPage() {
    return (
        <BookingModalProvider>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <Navbar />

            <main>
                {/* ── Hero ── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-teal-50 pt-36 pb-24 lg:pt-48 lg:pb-36">
                    <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true" />
                    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-200/30 blur-3xl animate-blob" />
                        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl animate-blob animation-delay-2000" />
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="hero-entrance hero-delay-1">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-6">
                                    <Sparkles className="w-4 h-4" />
                                    Updated {CHECKED}
                                </div>
                            </div>

                            <h1 className="hero-entrance hero-delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent animate-gradient">Relevance AI Alternatives</span> (2026 Prices)
                            </h1>

                            <p id="short-answer" className="hero-entrance hero-delay-3 text-base text-slate-700 mb-8 max-w-2xl mx-auto text-left sm:text-center">
                                <strong>Short answer:</strong> Relevance AI fits companies that want to build and govern their own AI workforce, and it has no public price on its pricing page (checked {CHECKED}): one Enterprise plan, &ldquo;Talk to sales&rdquo;. If you are a small business and would rather have it done for you, <a href={tagPay(MANAGED_PAY_URL, 'relevance_ai_alt_short')} data-offer="managed" className="font-semibold text-primary-700 underline">Dooza Managed</a> is an AI admin assistant checked by a real person: first 7 days free, then $200/month. If you mainly need missed calls answered, Dooza&rsquo;s <a href={recepPayUrl('relevance-ai-alternatives')} data-offer="receptionist" className="font-semibold text-primary-700 underline">AI answering service</a> is $149/month for up to 500 minutes. If you want to build agents yourself at a listed price, start with Lindy, Gumloop, Zapier Agents or n8n below.
                            </p>

                            <p className="hero-entrance hero-delay-3 text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                                We compared 9 alternatives on listed price, who builds the agents, trial, pros, and cons. Every price was read on the vendor&apos;s own pricing page on {CHECKED}.
                            </p>

                            <div className="hero-entrance hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="relevance_ai_alt_hero">Start your pilot</SignupButton>
                                <BookDemoButton source="relevance_ai_alt_hero">Book a 15-min call</BookDemoButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Why People Look for Relevance AI Alternatives ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">The Problem</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why People Look for Relevance AI Alternatives</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    Relevance AI is built for companies running an AI workforce at scale. These are the common reasons smaller teams compare alternatives.
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {painPoints.map((item, i) => (
                                <StaggerItem key={i}>
                                    <div className="card-shadow bg-white rounded-2xl border border-slate-100 p-8 h-full hover:border-red-200 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                                            <item.icon className="w-6 h-6 text-red-500" />
                                        </div>
                                        <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* ── Quick Comparison Table ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">At a Glance</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Quick Comparison — All 9 Alternatives</h2>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="overflow-x-auto -mx-4 px-4">
                                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white min-w-[780px] card-shadow">
                                    <table className="w-full border-collapse text-left">
                                        <thead>
                                            <tr className="bg-slate-50">
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-900 w-[16%]">Platform</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[26%]">Best For</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[24%]">Listed Price</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[16%]">Who Builds the Agents</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[18%]">Trial / Free Option</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm text-slate-600">
                                            {alternatives.map((alt, i) => (
                                                <tr key={i} className={`border-b border-slate-100 last:border-0 ${alt.highlight ? 'bg-primary-50/30' : ''}`}>
                                                    <td className="p-4 md:p-5 font-bold text-slate-900">
                                                        <div className="flex items-center gap-2">
                                                            {alt.highlight && <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-bold">#1</span>}
                                                            {alt.name}
                                                        </div>
                                                    </td>
                                                    <td className="p-4 md:p-5">{alt.bestFor}</td>
                                                    <td className="p-4 md:p-5 font-medium text-slate-800">{alt.price}</td>
                                                    <td className="p-4 md:p-5">{alt.builder}</td>
                                                    <td className="p-4 md:p-5">{alt.trial}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 mt-4 italic text-center">
                                Prices checked {CHECKED} on each platform&apos;s pricing page. Visit each platform for current rates. Relevance AI itself is not in the table because it lists no price.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Detailed Alternative Cards ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Detailed Breakdown</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">9 Relevance AI Alternatives — In Detail</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    Honest pros and cons for each platform. Yes, including ours.
                                </p>
                            </div>
                        </ScrollReveal>

                        {alternatives.map((alt) => (
                            <ScrollReveal key={alt.rank}>
                                <div className={`card-shadow bg-white rounded-2xl border p-8 md:p-10 mb-8 ${
                                    alt.highlight
                                        ? 'ring-2 ring-primary-200 border-primary-200'
                                        : 'border-slate-100'
                                }`}>
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                                            alt.highlight ? 'bg-primary-600' : 'bg-slate-100'
                                        }`}>
                                            <span className={`font-bold text-sm ${alt.highlight ? 'text-white' : 'text-slate-600'}`}>{alt.rank}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 id={alt.name.toLowerCase().replace(/\s+/g, '-')} className="text-2xl font-bold text-slate-900">{alt.name}</h3>
                                            <p className="text-slate-500">{alt.tagline}</p>
                                        </div>
                                        {alt.highlight && (
                                            <span className="bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                                                OUR PICK
                                            </span>
                                        )}
                                    </div>

                                    {/* Best For */}
                                    <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg text-sm text-slate-600 mb-6">
                                        <Star size={14} className="text-yellow-500" />
                                        <span><strong>Best for:</strong> {alt.bestFor}</span>
                                    </div>

                                    {/* Price + Trial */}
                                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                        <div className="bg-slate-50 rounded-xl p-4">
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Pricing</p>
                                            <p className="font-bold text-slate-900 text-sm">{alt.price}</p>
                                        </div>
                                        <div className="bg-slate-50 rounded-xl p-4">
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Trial</p>
                                            <p className="font-bold text-slate-900 text-sm">{alt.trial}</p>
                                        </div>
                                    </div>

                                    {/* Agents + Integrations */}
                                    <div className="mb-6 space-y-1.5">
                                        <p className="text-sm text-slate-600"><strong className="text-slate-900">AI Agents:</strong> {alt.agents}</p>
                                        <p className="text-sm text-slate-600"><strong className="text-slate-900">Integrations:</strong> {alt.integrations}</p>
                                        {!alt.highlight && (
                                            <p className="text-sm text-slate-600"><strong className="text-slate-900">Pricing page:</strong> <a href={alt.url} target="_blank" rel="noopener noreferrer" className="underline text-primary-700">{alt.url.replace('https://', '')}</a></p>
                                        )}
                                    </div>

                                    {/* Pros and Cons */}
                                    <div className="grid md:grid-cols-2 gap-6 mb-2">
                                        <div>
                                            <h4 className="font-bold text-green-700 text-sm uppercase tracking-wider mb-3">Pros</h4>
                                            <ul className="space-y-2.5">
                                                {alt.pros.map((pro, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
                                                        {pro}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-red-600 text-sm uppercase tracking-wider mb-3">Cons</h4>
                                            <ul className="space-y-2.5">
                                                {alt.cons.map((con, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                                                        {con}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* CTA for Dooza only */}
                                    {alt.highlight && (
                                        <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-slate-100">
                                            <SignupButton source="relevance_ai_alt_dooza_card">Start your pilot</SignupButton>
                                            <BookDemoButton source="relevance_ai_alt_dooza_card">Book a 15-min call</BookDemoButton>
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* ── Relevance AI Pricing (Dark) ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 overflow-hidden relative">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

                    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Pricing</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Relevance AI Pricing (Checked {CHECKED})</h2>
                                <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
                                    From Relevance AI&apos;s own <a href="https://relevanceai.com/pricing" target="_blank" rel="noopener noreferrer" className="underline text-primary-300">pricing page</a>, quoted as written.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="overflow-x-auto -mx-4 px-4">
                                <div className="border border-white/10 rounded-2xl overflow-hidden min-w-[500px]">
                                    <table className="w-full border-collapse text-left">
                                        <thead>
                                            <tr className="bg-white/5">
                                                <th className="p-4 md:p-5 border-b border-white/10 font-bold text-white">What it lists</th>
                                                <th className="p-4 md:p-5 border-b border-white/10 font-bold text-slate-400">Relevance AI</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            {relevanceRows.map((row, i) => (
                                                <tr key={i} className="border-b border-white/5 last:border-0">
                                                    <td className="p-4 md:p-5 text-white font-medium">{row.item}</td>
                                                    <td className="p-4 md:p-5 text-slate-300">{row.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <p className="text-base text-slate-400 mt-8 max-w-3xl mx-auto text-center leading-relaxed">
                                If your company has a team that will design, test and run many agents, with SSO and audit logs, Relevance AI is built for that. Dooza fits when you would rather not set it up yourself: a Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes your AI employees or custom agents (Dooza Agents) with you, with your approval on anything sensitive. Dooza Managed is free for the first 7 days, then $200/month; custom agents start with a refundable pilot. Pricing depends on the product; see <Link href="/pricing" className="underline text-primary-300">/pricing</Link>.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Marblism vs Relevance AI ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <p className="section-label mb-3 text-center">Common Comparison</p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Marblism vs Relevance AI</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                These two are often compared, but they solve different problems. Marblism is self-serve and ready-made: all 7 AI employees for $24/mo billed yearly or $44/mo monthly, with 50 hours of work and a 7-day money-back guarantee (checked {CHECKED}). Relevance AI is a platform for building your own AI workforce, sold as one Enterprise plan through sales. For a solo founder, Marblism is usually the simpler start; for a company with a team to build and govern agents, Relevance AI fits better. For the full Marblism comparison, see our <Link href="/marblism-alternatives" className="font-semibold text-primary-700 underline">Marblism alternatives</Link>.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Decision Guide ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Decision Guide</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Which Alternative Is Right for You?</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    Match your needs to the right platform. No one tool fits everyone.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="grid gap-4">
                                {decisionGuide.map((item, i) => (
                                    <div key={i} className="card-shadow bg-white rounded-xl border border-slate-100 p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-primary-200 transition-colors">
                                        <div className="sm:w-1/4">
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">If you need</p>
                                            <p className="font-bold text-slate-900">{item.need}</p>
                                        </div>
                                        <div className="sm:w-1/4">
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Choose</p>
                                            <p className="font-bold text-primary-600">{item.pick}</p>
                                        </div>
                                        <div className="sm:w-1/2">
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Why</p>
                                            <p className="text-slate-600 text-sm">{item.reason}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">Frequently Asked Questions</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Got Questions?</h2>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <FAQAccordion items={faqData} />
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── CTA Banner ── */}
                <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-teal-50 to-primary-50 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <div className="cta-blob-1 absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-200/20 blur-3xl" />
                        <div className="cta-blob-2 absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-teal-200/20 blur-3xl" />
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <ScrollReveal>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Want It Done for You Instead?</h2>
                            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                                Try Dooza Managed free for 7 days, then $200/month, or book a free 30-minute call with a Dooza engineer to scope it.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="relevance_ai_alt_cta">Start your pilot</SignupButton>
                                <BookDemoButton source="relevance_ai_alt_cta">Book a 15-min call</BookDemoButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Related Comparisons ── */}
                <section className="py-12 bg-white border-t border-slate-100">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="font-bold text-slate-900 mb-4">Related Comparisons</h3>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/marblism-alternatives" className={chip}>Marblism Alternatives →</Link>
                            <Link href="/sintra-alternatives" className={chip}>Sintra AI Alternatives →</Link>
                            <Link href="/dooza-vs-marblism" className={chip}>Dooza vs Marblism →</Link>
                            <Link href="/ai-solutions-for-business" className={chip}>AI Solutions for Business →</Link>
                            <Link href="/alternatives" className={chip}>All Comparisons →</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
