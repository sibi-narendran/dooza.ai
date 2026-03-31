'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    CheckCircle2, XCircle, ArrowRight, Sparkles, TrendingUp,
    Mail, Share2, Search, Headphones, Target, Scale, Calculator,
    Users, Kanban, Megaphone, Palette, Code, DollarSign, Clock,
    AlertTriangle, BarChart3, Building2, Lightbulb, Layers
} from 'lucide-react';
import SignupButton from '@/components/buttons/SignupButton';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import BookingModalProvider from '@/components/BookingModalProvider';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trackFBViewContent } from '@/lib/analytics';

/* ── Inline Data ── */

const keyStats = [
    { value: '88%', label: 'of organizations have adopted AI', source: 'McKinsey 2025' },
    { value: '5.8×', label: 'average ROI within 14 months', source: 'McKinsey' },
    { value: '25%', label: 'faster task completion with AI', source: 'Harvard Business School' },
    { value: '15–20 hrs', label: 'saved per week by active AI users', source: 'National Bureau of Economic Research' },
];

const categories = [
    {
        icon: Mail,
        name: 'AI Email Management',
        id: 'ai-email-management',
        desc: 'Automate drafting, sending, sorting, and replying to emails. AI reads context, applies brand voice, and handles routine threads without supervision.',
        topTools: [
            { name: 'Mailchimp', price: '$20–350/mo' },
            { name: 'Klaviyo', price: '$20–200/mo' },
            { name: 'Superhuman', price: '$30/mo' },
        ],
        doozaAgent: 'Maily',
        doozaNote: 'Handles email campaigns, replies, and inbox management as part of every Dooza plan.',
    },
    {
        icon: Share2,
        name: 'AI Social Media Management',
        id: 'ai-social-media',
        desc: 'Schedule posts, generate captions, analyze engagement, and post across platforms. AI maintains your brand voice while posting on autopilot.',
        topTools: [
            { name: 'Hootsuite', price: '$99–249/mo' },
            { name: 'Buffer', price: '$6–120/mo' },
            { name: 'Sprout Social', price: '$249–499/mo' },
        ],
        doozaAgent: 'Somi',
        doozaNote: 'Writes, schedules, and posts across Instagram, Facebook, X, and LinkedIn automatically.',
    },
    {
        icon: Search,
        name: 'AI SEO & Content',
        id: 'ai-seo-content',
        desc: 'Research keywords, write optimized content, track rankings, and build topical authority. AI creates content that ranks without manual research.',
        topTools: [
            { name: 'Semrush', price: '$139–499/mo' },
            { name: 'Surfer SEO', price: '$89–219/mo' },
            { name: 'Jasper AI', price: '$49–125/mo' },
        ],
        doozaAgent: 'Ranky',
        doozaNote: 'Researches keywords, writes SEO-optimized blog posts, and tracks rankings weekly.',
    },
    {
        icon: Headphones,
        name: 'AI Customer Support',
        id: 'ai-customer-support',
        desc: 'Answer customer queries 24/7 via chat, email, and phone. AI resolves common tickets instantly and escalates complex issues to humans.',
        topTools: [
            { name: 'Intercom', price: '$74–289/mo' },
            { name: 'Zendesk', price: '$55–115/agent/mo' },
            { name: 'Freshdesk', price: '$15–79/agent/mo' },
        ],
        doozaAgent: 'Stan',
        doozaNote: 'Handles customer tickets, live chat, and support emails around the clock.',
    },
    {
        icon: Target,
        name: 'AI Sales & Lead Generation',
        id: 'ai-lead-generation',
        desc: 'Find prospects, enrich contact data, send outreach sequences, and qualify leads. AI targets the right people with personalized messages at scale.',
        topTools: [
            { name: 'Apollo.io', price: '$49–119/mo' },
            { name: 'Instantly', price: '$37–97/mo' },
            { name: 'HubSpot Sales', price: '$50–150/mo' },
        ],
        doozaAgent: 'Linda',
        doozaNote: 'Finds leads, sends outreach emails, and qualifies prospects automatically.',
    },
    {
        icon: Scale,
        name: 'AI Legal & Compliance',
        id: 'ai-legal',
        desc: 'Review contracts, flag risks, ensure regulatory compliance, and draft legal documents. AI scans thousands of pages in minutes.',
        topTools: [
            { name: 'Harvey AI', price: 'Enterprise pricing' },
            { name: 'Ironclad', price: 'From $50/user/mo' },
            { name: 'ContractPodAi', price: 'Enterprise pricing' },
        ],
        doozaAgent: null,
        doozaNote: null,
    },
    {
        icon: Calculator,
        name: 'AI Accounting & Finance',
        id: 'ai-accounting',
        desc: 'Automate bookkeeping, invoicing, expense tracking, and financial reporting. AI categorizes transactions and catches errors humans miss.',
        topTools: [
            { name: 'QuickBooks AI', price: '$30–200/mo' },
            { name: 'Xero', price: '$15–78/mo' },
            { name: 'Bench', price: '$299–499/mo' },
        ],
        doozaAgent: null,
        doozaNote: null,
    },
    {
        icon: Users,
        name: 'AI HR & Recruiting',
        id: 'ai-hr-recruiting',
        desc: 'Screen resumes, schedule interviews, onboard new hires, and manage payroll. AI shortlists top candidates from hundreds of applications.',
        topTools: [
            { name: 'Workable', price: '$149–299/mo' },
            { name: 'Lever', price: 'From $60/user/mo' },
            { name: 'Paradox (Olivia)', price: 'Enterprise pricing' },
        ],
        doozaAgent: null,
        doozaNote: null,
    },
    {
        icon: Kanban,
        name: 'AI Project Management',
        id: 'ai-project-management',
        desc: 'Plan projects, assign tasks, predict bottlenecks, and automate status updates. AI keeps your team aligned without constant check-ins.',
        topTools: [
            { name: 'ClickUp AI', price: '$7–12/user/mo' },
            { name: 'Monday.com', price: '$9–19/seat/mo' },
            { name: 'Asana Intelligence', price: '$10.99–24.99/user/mo' },
        ],
        doozaAgent: null,
        doozaNote: null,
    },
    {
        icon: Megaphone,
        name: 'AI Marketing Automation',
        id: 'ai-marketing-automation',
        desc: 'Run omnichannel campaigns, A/B test messaging, personalize content, and optimize ad spend. AI makes real-time adjustments based on performance data.',
        topTools: [
            { name: 'HubSpot Marketing', price: '$50–3,600/mo' },
            { name: 'ActiveCampaign', price: '$29–149/mo' },
            { name: 'Marketo', price: 'Enterprise pricing' },
        ],
        doozaAgent: null,
        doozaNote: null,
    },
    {
        icon: Palette,
        name: 'AI Design & Visual Content',
        id: 'ai-design',
        desc: 'Generate social graphics, product mockups, brand assets, and video thumbnails. AI creates on-brand visuals in seconds, not hours.',
        topTools: [
            { name: 'Canva AI', price: '$13–30/mo' },
            { name: 'Adobe Firefly', price: '$10–55/mo' },
            { name: 'Midjourney', price: '$10–60/mo' },
        ],
        doozaAgent: null,
        doozaNote: null,
    },
    {
        icon: Code,
        name: 'AI Coding & Development',
        id: 'ai-coding',
        desc: 'Generate code, debug issues, write tests, and build prototypes. AI accelerates development cycles and reduces technical debt.',
        topTools: [
            { name: 'GitHub Copilot', price: '$10–39/user/mo' },
            { name: 'Cursor', price: '$20–40/mo' },
            { name: 'Replit AI', price: '$25–100/mo' },
        ],
        doozaAgent: null,
        doozaNote: null,
    },
];

const fragmentationComparison = [
    { function: 'Email marketing', tool: 'Mailchimp', cost: '$45/mo' },
    { function: 'Social media', tool: 'Hootsuite', cost: '$99/mo' },
    { function: 'SEO & content', tool: 'Semrush', cost: '$139/mo' },
    { function: 'Customer support', tool: 'Intercom', cost: '$74/mo' },
    { function: 'Lead generation', tool: 'Apollo.io', cost: '$49/mo' },
];

const budgetTiers = [
    {
        tier: '$0–50/mo',
        label: 'Just Getting Started',
        color: 'primary',
        recommendation: 'Start with an all-in-one AI employee platform that covers email, social, SEO, support, and leads in one subscription.',
        bestPick: 'Dooza Starter — $49/mo ($39/mo yearly). 5 AI employees, 1,000+ integrations, free concierge onboarding. $1 trial to start.',
        tools: ['Dooza ($49/mo — 5 AI employees)', 'Buffer ($6/mo — social only)', 'Canva Free (design only)'],
    },
    {
        tier: '$50–200/mo',
        label: 'Growing Business',
        color: 'teal',
        recommendation: 'Combine an all-in-one platform with 1-2 specialized tools for your biggest gaps. This covers 80% of needs without the tool sprawl.',
        bestPick: 'Dooza Growth ($69/mo) + 1 specialized tool. 2× usage for scaling businesses.',
        tools: ['Dooza Growth ($69/mo — 2× usage)', 'Semrush ($139/mo — if SEO is critical)', 'ClickUp ($7/user/mo — project management)'],
    },
    {
        tier: '$200–500/mo',
        label: 'Scaling Operations',
        color: 'slate',
        recommendation: 'Run an AI employee platform at the core with enterprise-grade specialized tools for your most impactful functions.',
        bestPick: 'Dooza Pro ($119/mo) + 2-3 specialized tools. 10× usage for high-volume operations.',
        tools: ['Dooza Pro ($119/mo — 10× usage)', 'HubSpot ($50/mo — CRM + marketing)', 'Intercom ($74/mo — advanced support)'],
    },
];

const implementationSteps = [
    {
        step: 1,
        title: 'Audit Your Workflows',
        time: 'Day 1',
        desc: 'List every task you or your team does weekly. Identify which tasks are repetitive, time-consuming, and follow predictable patterns. These are your AI candidates.',
        actionItems: ['Track time spent on email, social, content, and support', 'Identify the top 3 time sinks', 'Calculate the monthly cost of those tasks (hours × hourly rate)'],
    },
    {
        step: 2,
        title: 'Trial One AI Tool',
        time: 'Week 1',
        desc: 'Start with a single AI solution for your biggest time sink. Use free trials or low-cost entry points. Do not try to automate everything at once — that is the #1 cause of AI failure.',
        actionItems: ['Pick one function (email, social, or SEO)', 'Sign up for a trial (Dooza offers $1 for 7 days)', 'Set up the AI with your brand voice and guidelines'],
    },
    {
        step: 3,
        title: 'Implement and Integrate',
        time: 'Weeks 2–3',
        desc: 'Connect the AI to your real tools. Set up automations, review initial outputs, and refine configurations. Keep a human in the loop for the first two weeks.',
        actionItems: ['Connect Gmail, Instagram, WordPress, or whatever you use', 'Review AI outputs daily for the first week', 'Adjust tone, frequency, and targeting based on results'],
    },
    {
        step: 4,
        title: 'Measure and Expand',
        time: 'Week 4+',
        desc: 'Track time saved, cost reduction, and output quality. Once validated, expand AI to the next business function. Most businesses see measurable results within 2-4 weeks.',
        actionItems: ['Compare hours spent before vs. after AI', 'Calculate cost savings (tools replaced, time reclaimed)', 'Expand to the next highest-impact area'],
    },
];

const failureReasons = [
    { stat: '87%', label: 'of AI projects never reach production', source: 'VentureBeat', reason: 'Trying to automate everything at once instead of starting with one high-impact function.' },
    { stat: '57%', label: 'of SMBs report no value from AI', source: 'Business.com 2026', reason: 'Using generic chatbots instead of purpose-built AI employees designed for specific tasks.' },
    { stat: '42%', label: 'cite implementation difficulty', source: 'McKinsey', reason: 'Self-serve-only platforms with no onboarding support. Guided setup eliminates this entirely.' },
    { stat: '38%', label: 'stop using AI within 3 months', source: 'Gartner', reason: 'Tool fatigue from managing 5-7 separate AI subscriptions instead of one integrated platform.' },
];

const industries = [
    { name: 'Salons & Spas', slug: 'salons', desc: 'AI receptionist for bookings, reminders, and client management' },
    { name: 'Contractors & Home Services', slug: 'contractors', desc: 'Never miss a lead while on the job site' },
    { name: 'Real Estate', slug: 'real-estate', desc: 'AI follow-up on every lead, 24/7 qualification' },
];

/* ── Component ── */

export default function AISolutionsContent({ faqData }) {
    const [jsLoaded, setJsLoaded] = useState(false);

    useEffect(() => {
        setJsLoaded(true);
        trackFBViewContent('ai_solutions_for_business', 'guide_page');
    }, []);

    const totalFragmented = fragmentationComparison.reduce(
        (sum, item) => sum + parseInt(item.cost.replace(/[^0-9]/g, '')),
        0
    );

    return (
        <BookingModalProvider>
            <Navbar />

            <main className={jsLoaded ? 'js-loaded' : ''}>
                {/* ── 1. Hero ── */}
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
                                    Complete Guide — Updated March 2026
                                </div>
                            </div>

                            <h1 className="hero-entrance hero-delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                AI Solutions for <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent animate-gradient">Business</span> in 2026
                            </h1>

                            <p className="hero-entrance hero-delay-3 text-xl sm:text-2xl text-slate-500 font-serif italic mb-4">
                                12 categories. Real pricing. Actual ROI data. No fluff.
                            </p>

                            <p className="hero-entrance hero-delay-3 text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                                88% of organizations now use AI. But buying 5-7 separate tools costs $200-450/month and creates tool fatigue. This guide shows you exactly which AI solutions exist, what they cost, and how to implement them without wasting money.
                            </p>

                            <div className="hero-entrance hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="ai_solutions_hero">Try Dooza for $1</SignupButton>
                                <BookDemoButton source="ai_solutions_hero" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 2. What Are AI Solutions ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">The Basics</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">What Are AI Solutions for Business?</h2>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="bg-gradient-to-br from-primary-50 to-teal-50 border border-primary-100 rounded-3xl p-8 md:p-12">
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    AI solutions for business are software tools and platforms that use artificial intelligence to automate specific business functions — email management, social media posting, SEO content, customer support, lead generation, accounting, HR, and more.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    They range from <strong>single-function tools</strong> (Mailchimp for email, Semrush for SEO) to <strong>all-in-one AI employee platforms</strong> (Dooza, Sintra AI, Marblism) that cover multiple functions in one subscription.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-white/70 rounded-xl p-5 border border-primary-100/50">
                                        <h3 className="font-bold text-slate-900 mb-2">AI Tools</h3>
                                        <p className="text-sm text-slate-600">You prompt them each time. They respond, then wait. Requires constant input.</p>
                                    </div>
                                    <div className="bg-white/70 rounded-xl p-5 border border-primary-100/50">
                                        <h3 className="font-bold text-slate-900 mb-2">AI Employees</h3>
                                        <p className="text-sm text-slate-600">Work autonomously around the clock — posting, emailing, writing, supporting — without constant supervision.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── 3. Key Stats ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">The Data</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">AI Adoption by the Numbers</h2>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {keyStats.map((stat, i) => (
                                <StaggerItem key={i}>
                                    <div className="card-shadow bg-white rounded-2xl border border-slate-100 p-8 text-center h-full">
                                        <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 to-teal-500 bg-clip-text text-transparent mb-3">{stat.value}</p>
                                        <p className="text-slate-700 font-medium mb-2">{stat.label}</p>
                                        <p className="text-xs text-slate-400">{stat.source}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* ── 4. 12 Categories of AI Solutions ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">The Categories</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">12 Categories of AI Solutions for Business</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    Every AI tool falls into one of these 12 categories. We include top tools and real pricing for each.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            {categories.map((cat, i) => (
                                <ScrollReveal key={i}>
                                    <div id={cat.id} className="card-shadow bg-white rounded-2xl border border-slate-100 p-8 h-full hover:border-primary-200 transition-colors">
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                                                <cat.icon className="w-6 h-6 text-primary-600" />
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Category {i + 1}</span>
                                                <h3 className="text-lg font-bold text-slate-900">{cat.name}</h3>
                                            </div>
                                        </div>

                                        <p className="text-slate-600 text-sm leading-relaxed mb-5">{cat.desc}</p>

                                        <div className="mb-4">
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">Top Tools & Pricing</p>
                                            <div className="space-y-1.5">
                                                {cat.topTools.map((tool, j) => (
                                                    <div key={j} className="flex items-center justify-between text-sm">
                                                        <span className="text-slate-700">{tool.name}</span>
                                                        <span className="text-slate-500 font-medium">{tool.price}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {cat.doozaAgent && (
                                            <div className="bg-primary-50/50 border border-primary-100 rounded-xl p-4 mt-auto">
                                                <p className="text-sm">
                                                    <span className="font-bold text-primary-700">Dooza — {cat.doozaAgent}:</span>{' '}
                                                    <span className="text-slate-600">{cat.doozaNote}</span>
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 5. Cost of Fragmentation ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 overflow-hidden relative">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

                    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">The Real Cost</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">The Cost of Fragmentation</h2>
                                <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
                                    Most businesses buy AI tools one at a time. The total cost adds up fast — and managing 5+ subscriptions creates its own overhead.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Fragmented stack */}
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-slate-400 font-bold text-sm uppercase tracking-wider mb-2">Buying Separately</p>
                                    <div className="space-y-3 mb-6">
                                        {fragmentationComparison.map((item, i) => (
                                            <div key={i} className="flex items-center justify-between text-sm">
                                                <div>
                                                    <span className="text-white font-medium">{item.tool}</span>
                                                    <span className="text-slate-500 ml-2">— {item.function}</span>
                                                </div>
                                                <span className="text-slate-400 font-medium">{item.cost}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                                        <span className="text-slate-400 font-bold">Monthly total</span>
                                        <span className="text-2xl font-bold text-red-400">${totalFragmented}/mo</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-2">Plus 5 separate logins, 5 billing cycles, and no shared context between tools.</p>
                                </div>

                                {/* Dooza all-in-one */}
                                <div className="bg-primary-500/10 backdrop-blur-sm border border-primary-400/20 rounded-2xl p-8">
                                    <p className="text-primary-300 font-bold text-sm uppercase tracking-wider mb-2">Dooza All-in-One</p>
                                    <div className="space-y-3 mb-6">
                                        {['Maily — Email management', 'Somi — Social media', 'Ranky — SEO & content', 'Stan — Customer support', 'Linda — Lead generation'].map((agent, i) => (
                                            <div key={i} className="flex items-center gap-2.5 text-sm text-slate-300">
                                                <CheckCircle2 size={16} className="text-primary-400 shrink-0" />
                                                {agent}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="border-t border-primary-400/20 pt-4 flex items-center justify-between">
                                        <span className="text-primary-300 font-bold">Monthly total</span>
                                        <span className="text-2xl font-bold text-white">$49/mo</span>
                                    </div>
                                    <p className="text-xs text-slate-400 mt-2">One login, one billing cycle, shared context across all employees. $39/mo on yearly plan.</p>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-slate-300 text-lg">
                                    That is <strong className="text-white">${totalFragmented - 49}/month saved</strong> — and you get AI employees that work autonomously, not just tools that wait for prompts.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── 6. Budget Tiers ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Budget Guide</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">AI Stack by Budget</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    Not every business needs a $500/month AI stack. Here is what to buy at every price point.
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            {budgetTiers.map((tier, i) => (
                                <StaggerItem key={i}>
                                    <div className="card-shadow bg-white rounded-2xl border border-slate-100 p-8 h-full flex flex-col">
                                        <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-bold w-fit mb-4">
                                            <DollarSign className="w-4 h-4" />
                                            {tier.tier}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-3">{tier.label}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-5">{tier.recommendation}</p>

                                        <div className="bg-primary-50/50 border border-primary-100 rounded-xl p-4 mb-5">
                                            <p className="text-xs text-primary-600 font-bold uppercase tracking-wider mb-1">Best Pick</p>
                                            <p className="text-sm text-slate-700">{tier.bestPick}</p>
                                        </div>

                                        <div className="mt-auto">
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2">Suggested Stack</p>
                                            <ul className="space-y-1.5">
                                                {tier.tools.map((tool, j) => (
                                                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                                        <CheckCircle2 size={14} className="text-primary-500 shrink-0 mt-0.5" />
                                                        {tool}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* ── 7. Implementation Steps ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Implementation</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">How to Implement AI in Your Business</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    A 4-step framework used by businesses that actually see ROI from AI. Most see results within 2-4 weeks.
                                </p>
                            </div>
                        </ScrollReveal>

                        {implementationSteps.map((item) => (
                            <ScrollReveal key={item.step}>
                                <div className="card-shadow bg-white rounded-2xl border border-slate-100 p-8 md:p-10 mb-6">
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center shrink-0">
                                            <span className="text-white font-bold text-sm">{item.step}</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-3 flex-wrap">
                                                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                                                <span className="text-xs bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full font-medium">
                                                    <Clock size={12} className="inline mr-1" />
                                                    {item.time}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed mb-5">{item.desc}</p>

                                    <div className="bg-slate-50 rounded-xl p-5">
                                        <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-3">Action Items</p>
                                        <ul className="space-y-2">
                                            {item.actionItems.map((action, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <CheckCircle2 size={14} className="text-primary-500 shrink-0 mt-0.5" />
                                                    {action}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}

                        <ScrollReveal>
                            <div className="bg-primary-50 border border-primary-100 rounded-2xl p-8 text-center mt-8">
                                <p className="text-slate-700 mb-4">
                                    <strong>Skip the setup complexity.</strong> Dooza offers free concierge onboarding — the founder personally configures your AI employees in a 20-minute call.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                    <SignupButton source="ai_solutions_implementation">Try Dooza for $1</SignupButton>
                                    <BookDemoButton source="ai_solutions_implementation" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── 8. Why AI Fails ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">The Pitfalls</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why Most Businesses Fail with AI</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    AI works. But poor implementation kills results. Here are the four most common failure patterns — and how to avoid each one.
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                            {failureReasons.map((item, i) => (
                                <StaggerItem key={i}>
                                    <div className="card-shadow bg-white rounded-2xl border border-slate-100 p-8 h-full hover:border-red-200 transition-colors">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                                                <AlertTriangle className="w-6 h-6 text-red-500" />
                                            </div>
                                            <div>
                                                <p className="text-3xl font-bold text-red-600">{item.stat}</p>
                                                <p className="text-sm text-slate-500">{item.label}</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-2">
                                            <strong className="text-slate-900">Why it happens:</strong> {item.reason}
                                        </p>
                                        <p className="text-xs text-slate-400 italic">Source: {item.source}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* ── 9. Industry Solutions ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">By Industry</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">AI Solutions by Industry</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    See how specific industries are using AI employees to automate their operations.
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-3 gap-6">
                            {industries.map((industry, i) => (
                                <StaggerItem key={i}>
                                    <Link href={`/industries/${industry.slug}`} className="card-shadow bg-white rounded-2xl border border-slate-100 p-8 h-full flex flex-col hover:border-primary-200 transition-colors group block">
                                        <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                                            <Building2 className="w-5 h-5 text-primary-600" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">{industry.name}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{industry.desc}</p>
                                        <span className="inline-flex items-center gap-1 text-sm text-primary-600 font-semibold group-hover:gap-2 transition-all">
                                            Learn more <ArrowRight size={14} />
                                        </span>
                                    </Link>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* ── 10. FAQ ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
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

                {/* ── 11. CTA Banner ── */}
                <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-teal-50 to-primary-50 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <div className="cta-blob-1 absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-200/20 blur-3xl" />
                        <div className="cta-blob-2 absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-teal-200/20 blur-3xl" />
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <ScrollReveal>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Ready to Bring AI into Your Business?</h2>
                            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                                Stop paying $200-450/month for 5 separate tools. Get 5 AI employees for $49/month — or try everything for $1 for 7 days.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="ai_solutions_cta">Try Dooza for $1</SignupButton>
                                <BookDemoButton source="ai_solutions_cta" />
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── 12. Related Links ── */}
                <section className="py-12 bg-white border-t border-slate-100">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="font-bold text-slate-900 mb-4">Related Guides</h3>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/sintra-alternatives" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Sintra AI Alternatives →
                            </Link>
                            <Link href="/marblism-alternatives" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Marblism Alternatives →
                            </Link>
                            <Link href="/dooza-vs-sintra" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Dooza vs Sintra AI →
                            </Link>
                            <Link href="/dooza-vs-marblism" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Dooza vs Marblism →
                            </Link>
                            <Link href="/alternatives" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                All Comparisons →
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
