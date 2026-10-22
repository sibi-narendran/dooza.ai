// /lindy-alternatives: Lindy pricing + 8 alternatives (DIY agent builders vs done-for-you).
// Structure, classes, CTAs and Dooza wording copied from app/marblism-alternatives (page.jsx + MarblismAlternativesContent.jsx),
// merged into one server component (no 'use client'; the FB view-content effect is dropped).
// Every vendor price was read on the vendor's own pricing page on 2026-10-21 (exact strings in the draft README, raw copies in raw/).
import Link from 'next/link';
import {
    CheckCircle2, XCircle, Sparkles, Star,
    DollarSign, Puzzle, Users, Bot, Clock, Wrench
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

const PATH = '/lindy-alternatives';
const CHECKED = 'October 21, 2026';
const TITLE = 'Lindy Alternatives: 8 Options Compared (2026 Prices)';
const DESCRIPTION = 'Lindy is from $29.99 or $49.99/mo per active user (its pricing page showed both on Oct 22, 2026). Compare 8 Lindy alternatives, from DIY builders to done-for-you.';

export const metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    keywords: [
        'Lindy alternatives', 'Lindy alternative', 'Lindy AI alternatives', 'Lindy AI alternative',
        'Lindy pricing', 'Lindy AI pricing', 'Lindy credits', 'Lindy competitors', 'apps like Lindy',
        'Lindy vs Dooza', 'Lindy vs Gumloop', 'Lindy vs Zapier Agents', 'Lindy vs n8n', 'Lindy vs Relevance AI',
        'done-for-you AI agents', 'AI employees for small business',
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
        description: 'Lindy pricing checked October 21, 2026, plus 8 alternatives compared — including a done-for-you option with Dooza Managed: 7 days free, then $200/month.',
        url: `${SITE_URL}${PATH}`,
        siteName: 'Dooza',
        type: 'article',
        modifiedTime: '2026-10-21T00:00:00.000Z',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Lindy Alternatives — Dooza' }],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@sibinarendran',
        creator: '@sibinarendran',
        title: TITLE,
        description: 'Lindy pricing (checked October 21, 2026) and 8 alternatives compared, from DIY agent builders to done-for-you.',
        images: [`${SITE_URL}/logo.png`],
    },
};

const faqItems = [
    {
        question: 'What are the best Lindy alternatives in 2026?',
        answer: 'The top Lindy alternatives in 2026 are Dooza (best done-for-you option — engineer-led setup, custom agents, 1,000+ integrations), Sintra AI (12 pre-built helpers), Marblism (7 AI employees from $24/mo billed yearly), Gumloop (agent builder with unlimited seats), Zapier Agents (free plan with 400 activities a month), n8n (workflow builder you can self-host), Relevance AI (enterprise, pricing through sales) and Cubeo AI (no-code builder with a free plan). Prices checked October 21, 2026. The best choice depends on whether you want to build agents yourself or have them built for you.',
    },
    {
        question: 'Is Dooza better than Lindy?',
        answer: 'It depends on how you want to work. Dooza is done for you: a Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes your AI employees or custom agents with you, with 1,000+ app integrations. Dooza Managed is free for the first 7 days, then $200/month; custom agents start with a refundable pilot (100% refund within 14 days). Lindy is self-serve and starts lower: from $49.99 a month per user for 5,000 credits, with $50 in free credits to start (checked October 21, 2026). If you want to build and configure your own agents, Lindy is the better pick.',
    },
    {
        question: 'How much does Lindy cost?',
        answer: 'According to Lindy\'s pricing page (checked October 21, 2026), the Free plan is $0 with $50 in credits that last 7 days. The Team plan starts at $49.99/mo for 5,000 credits; more credits cost more (for example 15,000 for $99.99 and 35,000 for $199.99), and you can top up at $10 per 1,000 credits. Every active user in your workspace is billed, from $49.99 a month for 5,000 credits each. Enterprise is custom. See lindy.ai/pricing for current prices.',
    },
    {
        question: 'Does Lindy have a free plan or free trial?',
        answer: 'Lindy gives $50 in free credits with no credit card required, and the free credits last 7 days (checked October 21, 2026). Among the alternatives, Zapier Agents and Cubeo AI have free plans, Gumloop offers a 14-day free trial, n8n offers a free trial and a self-hosted Community Edition, and Dooza Managed is free for the first 7 days, then $200/month.',
    },
    {
        question: 'What happens when Lindy credits run out?',
        answer: 'Per Lindy\'s pricing page (checked October 21, 2026), Lindy pauses credit-using actions until your credits reset at the start of your next cycle. Admins can top up at $10 per 1,000 credits or move to more monthly credits. Monthly credits do not roll over; top-up credits stay until you use them.',
    },
    {
        question: 'What is the cheapest Lindy alternative?',
        answer: 'Zapier Agents has a free plan with 400 activities a month, Cubeo AI has a free plan with 100 credits a month, and n8n offers a self-hosted Community Edition. Among paid plans, Sintra AI\'s 12-month plan is $15.60/mo, Cubeo AI starts at €17/mo and n8n Starter is 20€/mo billed annually (checked October 21, 2026). Dooza is not the lowest-priced option; it is done for you, and its pricing is listed at dooza.ai/pricing.',
    },
    {
        question: 'Which Lindy alternative is best if I do not want to build agents myself?',
        answer: 'Most Lindy alternatives (Gumloop, Zapier Agents, n8n, Relevance AI, Cubeo AI) are builders: you design and maintain the agents. If you would rather have it done for you, Dooza Managed is an AI admin assistant checked by a real person: first 7 days free, then $200/month. A Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes your AI employees or custom agents with you.',
    },
    {
        question: 'Which Lindy alternative has the most integrations?',
        answer: 'Zapier\'s pricing page cites 9,000+ apps, Relevance AI lists 2,000+ integrations, and Lindy lists 1,500+ integrations plus MCP support (checked October 21, 2026). Dooza offers 1,000+ app integrations, connected for you during setup.',
    },
    {
        question: 'Who should stay with Lindy?',
        answer: 'Stay with Lindy if you want a Slack-native AI teammate and are happy to configure it yourself: its pricing page lists 40+ skills plus create your own, approvals built in, model selection, 1,500+ integrations and live onboarding on the Team plan (checked October 21, 2026). Look at alternatives if you want it done for you, need unlimited seats, want to self-host, or want a free plan instead of a 7-day credit trial.',
    },
];

const lindyPainPoints = [
    { icon: Wrench, title: 'You Build It Yourself', desc: 'Lindy is a self-serve teammate: you set up its skills, routines and approvals yourself (Lindy offers live onboarding on Team). If you would rather have someone build and tune it with you, a done-for-you option fits better.' },
    { icon: DollarSign, title: 'Credits Per Seat', desc: 'Every active user in your workspace is billed, from $49.99 a month for 5,000 credits each (checked October 21, 2026). Bigger jobs use more credits, so heavy use means a bigger credit tier or top-ups at $10 per 1,000 credits.' },
    { icon: Clock, title: 'Pauses When Credits Run Out', desc: 'If the pool runs low, Lindy pauses credit-using actions until credits reset or an admin tops up. Monthly credits do not roll over.' },
    { icon: Users, title: 'Short Free Window', desc: 'The free plan is $50 in credits that last 7 days. Some alternatives have free-forever plans, a 14-day trial, or a self-hosted edition.' },
    { icon: Bot, title: 'No Named AI Employees', desc: 'Lindy gives you one teammate with 40+ skills that you configure. If you want pre-built, named AI employees, look at Sintra AI or Marblism.' },
    { icon: Puzzle, title: 'Specific Integrations', desc: 'Lindy lists 1,500+ integrations and MCP support. If you depend on a particular tool, check it on each vendor\'s integrations page before you commit.' },
];

const alternatives = [
    {
        rank: 1,
        name: 'Dooza',
        tagline: 'Best done-for-you option — engineer-led setup, custom agents, 1,000+ integrations',
        bestFor: 'SMBs and teams that want AI employees built and tuned for them instead of DIY setup',
        price: 'Managed: 7 days free, then $200/mo; custom agents: refundable pilot',
        trial: 'Managed: first 7 days free; custom agents: refundable pilot',
        agents: 'Maily (email), Somi (social media), Ranky (SEO & AI visibility), Stan (lead generation), Linda (legal documents)',
        integrations: '1,000+ app integrations',
        metered: false,
        namedAgents: true,
        highlight: true,
        pros: [
            'Done for you: a Dooza engineer builds and tunes your AI employees with you',
            'Dooza Managed: first 7 days free, then $200/month, checked by a real person',
            'A Dooza engineer scopes your pilot on a free 30-minute call and sets it up with you',
            '1,000+ app integrations',
            'Custom agents built and maintained by Dooza engineers (Dooza Agents)',
        ],
        cons: [
            'Fewer named AI employees than Sintra\'s 12 helpers',
            'Costs more than Lindy for a self-serve user',
            'Newer platform with a smaller user base',
            'No free tier after the 7-day Managed trial; custom agents are a paid, refundable pilot',
        ],
    },
    {
        rank: 2,
        name: 'Sintra AI',
        tagline: '12 pre-built AI helpers in one subscription',
        bestFor: 'Users who want ready-made, named AI helpers instead of building their own',
        price: '$48.50/mo on the 1-month plan (shown as 50% off $97) or $15.60/mo on the 12-month plan (checked October 21, 2026)',
        trial: '14-day money-back guarantee',
        agents: 'All 12 helpers on every plan — e.g. Soshie (social media), Cassie (customer support), Dexter (data analytics)',
        integrations: '15+ integrations',
        metered: true,
        namedAgents: true,
        highlight: false,
        pros: [
            'All 12 helpers on every plan',
            'Lowest listed rate here for named AI helpers ($15.60/mo on the 12-month plan)',
            '14-day money-back guarantee',
            '24/7 support',
        ],
        cons: [
            '250 monthly credits on every plan',
            'The lowest rate needs the 12-month plan',
            'Self-serve: you direct the helpers yourself',
        ],
    },
    {
        rank: 3,
        name: 'Marblism',
        tagline: '7 named AI employees at a low flat price',
        bestFor: 'Small businesses that want pre-built AI employees cheaply and will run them themselves',
        price: '$24/mo billed yearly or $44/mo monthly (checked October 21, 2026)',
        trial: 'No free trial mentioned on its pricing page; 7-day money back guarantee',
        agents: 'All 7 AI Employees (Eva, Sonny, Stan, Penny, Rachel, Walter, Linda)',
        integrations: 'See marblism.com for the tools it connects to',
        metered: true,
        namedAgents: true,
        highlight: false,
        pros: [
            'Every plan includes all 7 AI Employees',
            '50 hours of work, unlimited team members and unlimited businesses',
            '7-day money back guarantee',
        ],
        cons: [
            'Same 7 AI employees on every plan — no custom agents',
            'Work included is 50 hours on every plan',
            'Self-serve: you set up and manage the AI employees yourself',
        ],
    },
    {
        rank: 4,
        name: 'Gumloop',
        tagline: 'AI agent builder with unlimited seats',
        bestFor: 'Teams that want to build many agents and share them across unlimited seats',
        price: 'Pro starts at $37/month; Enterprise custom (checked October 21, 2026)',
        trial: '14-day free trial',
        agents: 'Unlimited agents you build yourself; 35+ models, bring your own API keys',
        integrations: 'Connectors listed on gumloop.com',
        metered: true,
        namedAgents: false,
        highlight: false,
        pros: [
            'Unlimited agents, seats and teams',
            '20k credits per month included on Pro',
            'Bring your own API keys',
            '14-day free trial',
        ],
        cons: [
            'You build and maintain the agents yourself',
            'Credit-based usage (20k credits a month on Pro)',
            'Enterprise pricing through sales',
        ],
    },
    {
        rank: 5,
        name: 'Zapier Agents',
        tagline: 'AI agents on top of Zapier, with a free plan',
        bestFor: 'Teams already on Zapier who want to add AI agents to existing automations',
        price: 'Free (400 activities/month); Pro $33.33/month billed annually ($400) for 1,500 activities (checked October 21, 2026)',
        trial: 'Free plan',
        agents: 'Create your own AI-powered teammates; web browsing and live data sources',
        integrations: '9,000+ apps (Zapier pricing page)',
        metered: true,
        namedAgents: false,
        highlight: false,
        pros: [
            'Free plan with 400 activities per month',
            'Web browsing and live data sources on Free and Pro',
            'Interact with your agents in the Chrome extension',
            'Large app ecosystem (9,000+ apps)',
        ],
        cons: [
            'Metered by activities (actions, web browsing, knowledge lookups)',
            'The listed Pro price is billed annually',
            'You build and tune the agents yourself',
        ],
    },
    {
        rank: 6,
        name: 'n8n',
        tagline: 'Workflow and agent builder you can self-host',
        bestFor: 'Technical teams that want full control, including self-hosting',
        price: 'Starter 20€/mo billed annually (2.5K executions); Pro 50€/mo billed annually (10K executions) (checked October 21, 2026)',
        trial: 'Free trial, no credit card required; self-hosted Community Edition',
        agents: 'Build your own workflows and agents',
        integrations: 'See n8n.io for integrations',
        metered: true,
        namedAgents: false,
        highlight: false,
        pros: [
            'Self-hosted Community Edition available on GitHub',
            'Workflow executions with unlimited steps',
            'Start-up Plan: 50% off Business for companies under 20 employees',
        ],
        cons: [
            'You build, host and maintain the workflows yourself',
            'Metered by workflow executions',
            'Priced in euros; listed prices are billed annually',
        ],
    },
    {
        rank: 7,
        name: 'Relevance AI',
        tagline: 'Enterprise AI workforce platform',
        bestFor: 'Companies building an AI workforce with a dedicated account manager',
        price: 'Enterprise plan only, through sales (checked October 21, 2026)',
        trial: 'No self-serve plan listed — talk to sales',
        agents: 'Build your own — Unlimited Agents & Tools, Unlimited Workforces',
        integrations: '2,000+ integrations',
        metered: true,
        namedAgents: false,
        highlight: false,
        pros: [
            '2,000+ integrations',
            'Unlimited agents, tools, users and projects',
            'Calling & meeting agents',
            'SSO, RBAC & audit logs; dedicated account manager',
        ],
        cons: [
            'No public prices — talk to sales',
            'Custom actions and vendor credits to track',
            'Positioned for companies scaling an AI workforce',
        ],
    },
    {
        rank: 8,
        name: 'Cubeo AI',
        tagline: 'No-code AI assistant builder with a free plan',
        bestFor: 'Businesses wanting simple AI assistants on their website',
        price: 'From €17/mo (Starter); Plus €47/mo; Premium €97/mo — pricing in euros (checked October 21, 2026)',
        trial: 'Free forever plan with 100 credits a month',
        agents: 'No-code builder — create AI assistants (3 on Free, unlimited on paid plans)',
        integrations: 'See cubeo.ai for integrations',
        metered: true,
        namedAgents: false,
        highlight: false,
        pros: [
            'Free forever plan, no credit card required',
            'Unlimited team members',
            'Embed on unlimited websites',
        ],
        cons: [
            'You build and configure the assistants yourself',
            'Credit-based (1,200 credits a month on Starter)',
            'Pricing in euros',
        ],
    },
];

const decisionGuide = [
    { need: 'Done for you', pick: 'Dooza', reason: 'A Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes AI employees or custom agents with you' },
    { need: 'An AI teammate in Slack you configure yourself', pick: 'Lindy', reason: 'Slack-native teammate, 40+ skills plus create your own, 1,500+ integrations, approvals built in. From $49.99/mo per active user for 5,000 credits' },
    { need: 'Pre-built, named AI employees', pick: 'Sintra AI or Marblism', reason: 'Sintra: all 12 helpers, $15.60/mo on the 12-month plan. Marblism: all 7 AI Employees, $24/mo billed yearly' },
    { need: 'Many builders, one bill', pick: 'Gumloop', reason: 'Unlimited seats and agents; Pro starts at $37/month with 20k credits a month' },
    { need: 'Free agent plan', pick: 'Zapier Agents or Cubeo AI', reason: 'Zapier Agents: 400 activities a month free. Cubeo AI: free forever plan with 100 credits a month' },
    { need: 'Self-hosting and full control', pick: 'n8n', reason: 'Self-hosted Community Edition on GitHub; cloud Starter 20€/mo billed annually' },
    { need: 'Enterprise scale', pick: 'Relevance AI', reason: '2,000+ integrations, unlimited agents and users, dedicated account manager. Pricing through sales' },
    { need: 'Missed calls answered', pick: 'Dooza AI answering service', reason: '$149/month for up to 500 minutes' },
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
        mainEntity: faqItems.map(faq => ({
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
            { '@type': 'ListItem', position: 3, name: 'Lindy Alternatives', item: `${SITE_URL}${PATH}` },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: '8 Lindy Alternatives in 2026',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Dooza', url: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Sintra AI', url: 'https://sintra.ai' },
            { '@type': 'ListItem', position: 3, name: 'Marblism', url: 'https://www.marblism.com' },
            { '@type': 'ListItem', position: 4, name: 'Gumloop', url: 'https://www.gumloop.com' },
            { '@type': 'ListItem', position: 5, name: 'Zapier Agents', url: 'https://zapier.com/agents' },
            { '@type': 'ListItem', position: 6, name: 'n8n', url: 'https://n8n.io' },
            { '@type': 'ListItem', position: 7, name: 'Relevance AI', url: 'https://relevanceai.com' },
            { '@type': 'ListItem', position: 8, name: 'Cubeo AI', url: 'https://cubeo.ai' },
        ],
    },
];

const relatedLinks = [
    { href: '/marblism-alternatives', label: 'Marblism Alternatives' },
    { href: '/sintra-alternatives', label: 'Sintra AI Alternatives' },
    { href: '/blog/lindy-ai-alternative', label: 'Lindy AI Alternative (blog)' },
    { href: '/blog/dooza-vs-lindy-ai', label: 'Dooza vs Lindy AI' },
    { href: '/done-for-you-ai-agents', label: 'Done-for-you AI Agents' },
    { href: '/alternatives', label: 'All Comparisons' },
];

export default function LindyAlternativesPage() {
    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <BookingModalProvider>
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
                                    <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent animate-gradient">Lindy Alternatives</span> (2026 Prices)
                                </h1>

                                <p id="short-answer" className="hero-entrance hero-delay-3 text-base text-slate-700 mb-6 max-w-2xl mx-auto text-left sm:text-center">
                                    <strong>Short answer:</strong> keep Lindy if you want to build and configure your own AI agents and will run them yourself. If you would rather have it done for you, <a href={tagPay(MANAGED_PAY_URL, 'lindy_alt_short')} data-offer="managed" className="font-semibold text-primary-700 underline">Dooza Managed</a> is an AI admin assistant checked by a real person: first 7 days free, then $200/month. It is for SMBs and teams that want AI employees built and tuned for them instead of DIY setup. If you mainly need missed calls answered, Dooza&rsquo;s <a href={recepPayUrl('lindy-alternatives')} data-offer="receptionist" className="font-semibold text-primary-700 underline">AI answering service</a> is $149/month for up to 500 minutes.
                                </p>

                                <p className="hero-entrance hero-delay-3 text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                                    Lindy is a self-serve AI teammate billed in credits: from $29.99/mo for 3,000 credits or $49.99/mo for 5,000 per active user (the pricing page showed both on Oct 22, 2026), with $50 in free credits that last 7 days (pricing checked {CHECKED}). We compared 8 alternatives on pricing, how they meter usage, setup, pros, and cons — so you do not have to.
                                </p>

                                <div className="hero-entrance hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
                                    <SignupButton source="lindy_alt_hero">Start your pilot</SignupButton>
                                    <BookDemoButton source="lindy_alt_hero">Book a free 30-min call</BookDemoButton>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ── Why People Look for Lindy Alternatives ── */}
                    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <ScrollReveal>
                                <div className="text-center mb-16">
                                    <p className="section-label mb-3">The Problem</p>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why People Look for Lindy Alternatives</h2>
                                    <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                        Lindy is a strong pick for people who like to build their own agents, but it is not the right fit for everyone. These are the common reasons people compare alternatives.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {lindyPainPoints.map((item, i) => (
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
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Quick Comparison — All 8 Alternatives</h2>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div className="overflow-x-auto -mx-4 px-4">
                                    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white min-w-[780px] card-shadow">
                                        <table className="w-full border-collapse text-left">
                                            <thead>
                                                <tr className="bg-slate-50">
                                                    <th className="p-4 md:p-5 border-b font-bold text-slate-900 w-[18%]">Platform</th>
                                                    <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[28%]">Best For</th>
                                                    <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[22%]">Starting Price</th>
                                                    <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[16%] text-center">Usage-metered?</th>
                                                    <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[16%] text-center">Named Agents?</th>
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
                                                        <td className="p-4 md:p-5 text-center">
                                                            {alt.metered
                                                                ? <XCircle size={18} className="text-red-400 mx-auto" />
                                                                : <CheckCircle2 size={18} className="text-green-500 mx-auto" />
                                                            }
                                                        </td>
                                                        <td className="p-4 md:p-5 text-center">
                                                            {alt.namedAgents
                                                                ? <CheckCircle2 size={18} className="text-green-500 mx-auto" />
                                                                : <XCircle size={18} className="text-red-400 mx-auto" />
                                                            }
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 mt-4 italic text-center">
                                    Prices checked {CHECKED} on each platform&apos;s pricing page. Visit each platform for current rates. Green check = flat plan / has named agents. Red X = metered by credits, activities, executions or hours / no named agents.
                                </p>
                                <p className="text-sm text-slate-500 mt-2 text-center">
                                    We sell one of the services on this page (Dooza). Honest pros and cons for each platform. Yes, including ours.
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
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">8 Lindy Alternatives — In Detail</h2>
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

                                        <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg text-sm text-slate-600 mb-6">
                                            <Star size={14} className="text-yellow-500" />
                                            <span><strong>Best for:</strong> {alt.bestFor}</span>
                                        </div>

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

                                        <div className="mb-6 space-y-1.5">
                                            <p className="text-sm text-slate-600"><strong className="text-slate-900">AI Agents:</strong> {alt.agents}</p>
                                            <p className="text-sm text-slate-600"><strong className="text-slate-900">Integrations:</strong> {alt.integrations}</p>
                                        </div>

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

                                        {alt.highlight && (
                                            <div className="flex flex-col sm:flex-row gap-3 pt-6 mt-6 border-t border-slate-100">
                                                <SignupButton source="lindy_alt_dooza_card">Start your pilot</SignupButton>
                                                <BookDemoButton source="lindy_alt_dooza_card">Book a free 30-min call</BookDemoButton>
                                            </div>
                                        )}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </section>

                    {/* ── Lindy Pricing (Dark) ── */}
                    <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 overflow-hidden relative">
                        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

                        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <ScrollReveal>
                                <div className="text-center mb-16">
                                    <p className="section-label mb-3">Pricing</p>
                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Lindy Pricing (Checked {CHECKED})</h2>
                                    <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
                                        From Lindy&apos;s own <a href="https://www.lindy.ai/pricing" target="_blank" rel="noopener noreferrer" className="underline text-primary-300">pricing page</a>.
                                    </p>
                                </div>
                            </ScrollReveal>

                            <ScrollReveal>
                                <div className="overflow-x-auto -mx-4 px-4">
                                    <div className="border border-white/10 rounded-2xl overflow-hidden min-w-[500px]">
                                        <table className="w-full border-collapse text-left">
                                            <thead>
                                                <tr className="bg-white/5">
                                                    <th className="p-4 md:p-5 border-b border-white/10 font-bold text-white">What you get</th>
                                                    <th className="p-4 md:p-5 border-b border-white/10 font-bold text-slate-400">Lindy</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-sm">
                                                {[
                                                    { item: 'Free', value: '$0 — $50 in credits; free credits last 7 days; no credit card required' },
                                                    { item: 'Team (starting price)', value: '$49.99/mo for 5,000 credits a month' },
                                                    { item: 'Two prices on Oct 22, 2026', value: 'Lindy\'s pricing page showed two cards that day: from $29.99 a month for 3,000 credits, and from $49.99 a month for 5,000 credits. Check lindy.ai/pricing before you buy.' },
                                                    { item: 'More monthly credits', value: '5,000 credits $49.99; 15,000 credits $99.99; 35,000 credits $199.99 (up to 1,750,000 credits $9,999.50)' },
                                                    { item: 'Who is billed', value: 'Every active user in your workspace, from $49.99 a month for 5,000 credits each; credits pooled across the team' },
                                                    { item: 'Top-ups', value: '$10 per 1,000 credits' },
                                                    { item: 'When credits run out', value: 'Lindy pauses credit-using actions until credits reset' },
                                                    { item: 'Included on Team', value: 'Live onboarding, computer use, choose your model for each task' },
                                                    { item: 'Integrations', value: '1,500+ integrations, MCP support' },
                                                    { item: 'Enterprise', value: 'Custom; HIPAA compliance & signed BAA, SSO & SCIM, audit logs' },
                                                ].map((row, i) => (
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
                                    For a builder who wants to configure their own AI teammate, Lindy is good value. Dooza fits when you would rather not set it up yourself: a Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes your AI employees or custom agents (Dooza Agents) with you, with your approval on anything sensitive. Dooza Managed is free for the first 7 days, then $200/month; custom agents start with a refundable pilot. Pricing depends on the product; see <Link href="/pricing" className="underline text-primary-300">/pricing</Link>.
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
                                        Match your needs to the right platform. No one tool fits everyone — and for some people, Lindy is the right answer.
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
                                <FAQAccordion items={faqItems} />
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
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Rather Not Build It Yourself?</h2>
                                <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                                    Try Dooza Managed free for 7 days, then $200/month, or book a free 30-minute call with a Dooza engineer to scope it.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <SignupButton source="lindy_alt_cta">Start your pilot</SignupButton>
                                    <BookDemoButton source="lindy_alt_cta">Book a free 30-min call</BookDemoButton>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>

                    {/* ── Related Comparisons ── */}
                    <section className="py-12 bg-white border-t border-slate-100">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h3 className="font-bold text-slate-900 mb-4">Related Comparisons</h3>
                            <div className="flex flex-wrap gap-3">
                                {relatedLinks.map((l) => (
                                    <Link key={l.href} href={l.href} className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                        {l.label} →
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </BookingModalProvider>
        </>
    );
}
