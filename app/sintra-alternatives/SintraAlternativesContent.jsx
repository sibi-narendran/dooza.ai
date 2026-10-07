'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    CheckCircle2, XCircle, ArrowRight, Sparkles, Star,
    CreditCard, Shield, Users
} from 'lucide-react';
import SignupButton from '@/components/buttons/SignupButton';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import BookingModalProvider from '@/components/BookingModalProvider';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trackFBViewContent } from '@/lib/analytics';

const sintraPainPoints = [
    { icon: CreditCard, title: '250 Credits a Month', desc: 'Every Sintra plan includes 250 credits per month, shared by all helpers and reset monthly. Advanced actions use credits; when they run out, you buy top-ups or wait for the reset.' },
    { icon: Users, title: 'Best Price Needs a Year Up Front', desc: 'Listed at $97/mo, sold at $48.50/mo month to month. The $15.60/mo rate means paying $187.20 for 12 months up front (checked October 7, 2026).' },
    { icon: Shield, title: 'You Run It Yourself', desc: 'Sintra is an app you operate. It offers a call with a specialist and two weeks of hands-on help; after that, using and tuning the helpers is up to you. Some teams would rather have the AI built and run for them.' },
];

const alternatives = [
    {
        rank: 1,
        name: 'Dooza',
        tagline: 'Best overall Sintra alternative for SMBs',
        bestFor: 'Small businesses that want AI employees or custom agents built and tuned for them',
        price: 'Refundable pilot (see /pricing)',
        trial: 'Refundable pilot — 100% refund within 14 days',
        agents: 'Maily (email), Somi (social media), Ranky (SEO & AI visibility), Stan (lead generation), Linda (legal documents), Rachel (phone calls)',
        integrations: '1,000+ app integrations',
        creditSystem: false,
        namedAgents: true,
        highlight: true,
        pros: [
            'Refundable pilot — 100% refund within 14 days if it is not the right fit',
            'A Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes AI employees or custom agents with you',
            'No credit system and no per-seat fees',
            '1,000+ app integrations',
        ],
        cons: [
            'Fewer named AI employees than Sintra\'s 12+ helpers',
            'Newer platform with a smaller user base',
            'No free tier — the pilot is paid, with a 100% refund within 14 days',
            'Not the lowest-priced option: self-serve apps like Sintra cost less if you are happy to run the AI yourself',
        ],
    },
    {
        rank: 2,
        name: 'Marblism',
        tagline: 'Low-cost named-agent platform',
        bestFor: 'Budget-conscious solopreneurs who want an affordable AI team',
        price: 'From $24/mo (yearly) or $44/mo (monthly)',
        trial: 'No free trial mentioned on its pricing page (checked Oct 7, 2026)',
        agents: '7 named AI employees — Eva (assistant), Sonny (social), Penny (SEO), Stan (leads), Rachel (receptionist), Walter (websites), Linda (legal)',
        integrations: 'See marblism.com for supported tools',
        creditSystem: false,
        namedAgents: true,
        highlight: false,
        pros: [
            'Low starting price at $24/mo yearly',
            '7 named agents including a phone receptionist (Rachel)',
            'Unlimited team members on every plan',
            'No credit system — all features included in every plan',
        ],
        cons: [
            'No free trial mentioned on its pricing page',
            '50 hours of work included in every plan',
        ],
    },
    {
        rank: 3,
        name: 'Motion',
        tagline: 'Project management and calendar suite with AI built in',
        bestFor: 'Teams already using Motion for PM/calendar who want AI features',
        price: 'Pro AI from $19/seat/mo (yearly) or $29/seat/mo (monthly) (checked October 7, 2026)',
        trial: 'Free trial (length not stated on its pricing page)',
        agents: 'AI Workflows for repeatable projects and SOPs, plus AI Project Manager and AI Calendar',
        integrations: 'Google, Outlook and iCloud calendars, Outlook 365 email forwarding, and more',
        creditSystem: true,
        namedAgents: false,
        highlight: false,
        pros: [
            'Raised $60M across Series B, C and C2 ($75M total), per Motion\'s blog',
            'AI Workflows for repeatable projects and SOPs',
            'Strong project management and calendar foundation',
            'Free trial, cancel anytime',
        ],
        cons: [
            'Credit-based AI usage (7,500 credits/seat/month on Pro AI, 15,000 on Business AI)',
            'Per-seat pricing adds up for larger teams',
            'Built around project management and calendar — the AI works inside that tool',
        ],
    },
    {
        rank: 4,
        name: 'NoimosAI',
        tagline: 'Marketing-focused AI agent (deep but narrow)',
        bestFor: 'Marketing teams and agencies wanting specialized marketing automation',
        price: 'From $99/user/mo (Pro), $249/user/mo (Team) or $499/user/mo (Advanced) (checked October 7, 2026)',
        trial: 'No free plan; free trial available',
        agents: 'One AI agent with 11 marketing capabilities — Growth Metrics, Competitor Strategy, Social Listening, SEO, GEO, CVR Optimization, and more',
        integrations: 'Marketing-focused — social platforms, analytics tools',
        creditSystem: true,
        namedAgents: false,
        highlight: false,
        pros: [
            'Deep marketing coverage — 11 capabilities listed on its pricing page',
            'GEO capability for AI search visibility',
            'Social Listening finds high-intent conversations online',
            'Clear credit allowances (30,000/mo on Pro) with $3 per 1,000 extra',
        ],
        cons: [
            'Marketing-focused — no legal, receptionist, or general business agents',
            'Higher starting point at $99 per user per month',
            'Credit system with daily limits (100 per day on Pro)',
        ],
    },
    {
        rank: 5,
        name: 'Lindy AI',
        tagline: 'Self-serve AI teammate with a large integration library',
        bestFor: 'Teams who want a self-serve AI teammate in Slack and are happy to configure it themselves',
        price: 'From $29.99/user/mo for 3,000 credits; 15,000 credits for $99.99, 35,000 for $199.99, plus Enterprise (checked October 7, 2026)',
        trial: '$50 in free credits, valid for 7 days',
        agents: '40+ skills, plus create your own; ready-made templates',
        integrations: '1,500+ (pricing page); 1,000+ (integrations page)',
        creditSystem: true,
        namedAgents: false,
        highlight: false,
        pros: [
            '1,000+ integrations (1,500+ on its pricing page)',
            'Setup in about 2 minutes, per Lindy',
            'SOC 2 and GDPR; Enterprise adds SSO, audit logs and HIPAA with a signed BAA',
            '$50 in free credits to try it for 7 days',
        ],
        cons: [
            'Credit-based: when credits run out, Lindy pauses until they reset or you top up ($10 per 1,000 credits)',
            'Per-user pricing adds up for larger teams',
            'Self-serve: you configure the skills yourself (Lindy offers live onboarding sessions)',
        ],
    },
    {
        rank: 6,
        name: 'Relevance AI',
        tagline: 'Enterprise-grade AI workforce platform',
        bestFor: 'Mid-market and enterprise GTM teams (Canva and Autodesk case studies on its site)',
        price: 'Enterprise plan only, through sales (checked October 7, 2026)',
        trial: 'No self-serve plan listed — talk to sales',
        agents: 'Custom agent builder — design your own AI workforce',
        integrations: '2,000+ integrations, including CRM and sales tools',
        creditSystem: true,
        namedAgents: false,
        highlight: false,
        pros: [
            'Case studies with Canva and Autodesk on its site',
            '$24M Series B led by Bessemer, per its blog',
            'Multi-agent orchestration ("Unlimited Workforces")',
            '2,000+ integrations',
        ],
        cons: [
            'Two usage meters to track (actions and LLM vendor credits)',
            'Enterprise-focused — pricing only through sales',
        ],
    },
    {
        rank: 7,
        name: 'Cubeo AI',
        tagline: 'No-code AI agent and chatbot builder',
        bestFor: 'Businesses wanting simple AI chatbots on their website',
        price: 'From \u20ac17/mo (\u20ac14.17/mo billed yearly) — pricing in euros',
        trial: 'Free plan with 100 credits',
        agents: 'No-code builder — create AI assistants and chatbots, with agent triggers',
        integrations: 'HubSpot, plus Zapier and Make webhooks',
        creditSystem: true,
        namedAgents: false,
        highlight: false,
        pros: [
            'Very affordable entry point (\u20ac17/mo, or \u20ac14.17/mo yearly)',
            'No-code builder — easy for non-technical users',
            'Free plan available with no credit card required',
            'GPT-4 and Claude models under the hood',
        ],
        cons: [
            'You build and configure the agents yourself',
            'Credit-based system (1,200 credits on Starter) limits heavy usage',
            'Pricing in euros',
        ],
    },
];

// Sintra X pricing checked on sintra.ai/pricing, October 7, 2026. Sintra no longer sells single-helper plans.
const sintraCostRows = [
    { plan: 'Sintra X, 1-month plan', shown: '$48.50/mo (list $97)', upfront: '$48.50', credits: '250 per month' },
    { plan: 'Sintra X, 3-month plan', shown: '$23.60/mo', upfront: '$70.80', credits: '250 per month' },
    { plan: 'Sintra X, 12-month plan', shown: '$15.60/mo', upfront: '$187.20', credits: '250 per month' },
    { plan: 'Dooza', shown: 'Refundable pilot (see /pricing)', upfront: 'Pilot, 100% refundable within 14 days', credits: 'No credits', dooza: true },
];

const decisionGuide = [
    { need: 'Done for you', pick: 'Dooza', reason: 'A Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes AI employees or custom agents with you; refundable pilot; 1,000+ integrations' },
    { need: 'Lowest price, self-serve', pick: 'Sintra (12-month) or Cubeo AI', reason: 'Sintra is $15.60/mo if you pay $187.20 for a year; Cubeo starts at \u20ac14.17/mo yearly and has a free plan (checked October 7, 2026)' },
    { need: 'Low-cost named agents', pick: 'Marblism', reason: 'Starts at $24/mo yearly with 7 named agents, unlimited team members, and no credit system' },
    { need: 'AI teammate in Slack', pick: 'Lindy AI', reason: '1,000+ integrations (1,500+ on its pricing page), 40+ skills, setup in about 2 minutes, per Lindy' },
    { need: 'Enterprise scale', pick: 'Relevance AI', reason: 'Canva and Autodesk case studies, multi-agent workforces, 2,000+ integrations' },
    { need: 'Marketing only', pick: 'NoimosAI', reason: '11 marketing capabilities including GEO and Social Listening' },
    { need: 'PM + AI in one tool', pick: 'Motion', reason: 'Calendar, task management, and AI Workflows in a single platform' },
];

export default function SintraAlternativesContent({ faqData }) {
    const [jsLoaded, setJsLoaded] = useState(false);

    useEffect(() => {
        setJsLoaded(true);
        trackFBViewContent('sintra_alternatives', 'alternatives_page');
    }, []);

    return (
        <BookingModalProvider>
            <Navbar />

            <main className={jsLoaded ? 'js-loaded' : ''}>
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
                                    Updated October 7, 2026
                                </div>
                            </div>

                            <h1 className="hero-entrance hero-delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                7 Best <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent animate-gradient">Sintra AI Alternatives</span> [2026]
                            </h1>

                            <p className="hero-entrance hero-delay-3 text-xl sm:text-2xl text-slate-500 font-serif italic mb-4">
                                Credits running out? Want someone to build and run the AI for you? Here are your options.
                            </p>

                            <p className="hero-entrance hero-delay-3 text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                                Sintra AI is a low-cost self-serve app: every plan includes 250 credits a month, and you run the helpers yourself. We compared 7 alternatives on pricing, features, pros, and cons (checked October 7, 2026), so you do not have to.
                            </p>

                            <div className="hero-entrance hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="sintra_alt_hero">Start your pilot</SignupButton>
                                <BookDemoButton source="sintra_alt_hero">Book a free pilot call</BookDemoButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Why People Look for Sintra Alternatives ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">The Problem</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why People Look for Sintra Alternatives</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    Sintra AI says it is trusted by 40,000+ entrepreneurs, and its helpers now work together and share one knowledge base. Cost and fit are the usual reasons people look elsewhere.
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sintraPainPoints.map((item, i) => (
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
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Quick Comparison — All 7 Alternatives</h2>
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
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[16%] text-center">Credits?</th>
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
                                                        {alt.creditSystem
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
                                Prices checked October 7, 2026 on each platform’s pricing page. Visit each platform for current rates. Green check = no credit system / has named agents. Red X = uses credits / no named agents.
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
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">7 Best Sintra AI Alternatives — In Detail</h2>
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
                                            <SignupButton source="sintra_alt_dooza_card">Start your pilot</SignupButton>
                                            <BookDemoButton source="sintra_alt_dooza_card">Book a free pilot call</BookDemoButton>
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* ── Sintra Cost Breakdown ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">The Math</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">What Sintra AI Actually Costs</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    Sintra X lists at $97/mo. What you pay depends on how long you commit up front, and every plan shares the same 250 monthly credits.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="overflow-x-auto -mx-4 px-4">
                                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white min-w-[620px] card-shadow">
                                    <table className="w-full border-collapse text-left">
                                        <thead>
                                            <tr className="bg-slate-50">
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-900">Plan</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600">Monthly price</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600">Paid up front</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600">Usage limit</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm text-slate-600">
                                            {sintraCostRows.map((row) => (
                                                <tr key={row.plan} className={`border-b border-slate-100 last:border-0 ${row.dooza ? 'bg-primary-50/30' : ''}`}>
                                                    <td className="p-4 md:p-5 font-bold text-slate-900">{row.plan}</td>
                                                    <td className="p-4 md:p-5">{row.shown}</td>
                                                    <td className="p-4 md:p-5 font-medium text-slate-800">{row.upfront}</td>
                                                    <td className="p-4 md:p-5">{row.credits}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="grid md:grid-cols-3 gap-6 mt-10">
                                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">The cheap rate needs a year</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">$15.60/mo only applies if you pay $187.20 for 12 months at once. Month to month, Sintra X is $48.50.</p>
                                </div>
                                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Credits are shared</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">All 12+ helpers draw from the same 250 credits a month. Advanced actions use more, and top-ups are extra.</p>
                                </div>
                                <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                                    <h3 className="font-bold text-slate-900 mb-2">Refund windows differ</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">Sintra offers a 14-day money-back guarantee. Dooza has no credits, and every Dooza product starts with a refundable pilot — 100% refund within 14 days.</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 mt-6 italic text-center">
                                Sintra prices checked October 7, 2026 on sintra.ai/pricing. On a 12-month plan Sintra is one of the lowest-cost options here; the trade-off is the up-front payment and the 250 monthly credits (top-ups cost extra). Dooza pricing is listed on /pricing.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Decision Guide (Dark) ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 overflow-hidden relative">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

                    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Decision Guide</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Which Alternative Is Right for You?</h2>
                                <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
                                    Match your needs to the right platform. No one tool fits everyone.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="grid gap-4">
                                {decisionGuide.map((item, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-white/10 transition-colors">
                                        <div className="sm:w-1/4">
                                            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">If you need</p>
                                            <p className="font-bold text-white">{item.need}</p>
                                        </div>
                                        <div className="sm:w-1/4">
                                            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Choose</p>
                                            <p className="font-bold text-primary-300">{item.pick}</p>
                                        </div>
                                        <div className="sm:w-1/2">
                                            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Why</p>
                                            <p className="text-slate-300 text-sm">{item.reason}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── FAQ ── */}
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

                {/* ── CTA Banner ── */}
                <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-teal-50 to-primary-50 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <div className="cta-blob-1 absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary-200/20 blur-3xl" />
                        <div className="cta-blob-2 absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-teal-200/20 blur-3xl" />
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <ScrollReveal>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Ready to Try the Best Sintra Alternative?</h2>
                            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                                Start with a refundable pilot — 100% refund within 14 days. Book a free 30-minute call with a Dooza engineer to scope it. No sales pitch, just a walkthrough of what Dooza handles for your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="sintra_alt_cta">Start your pilot</SignupButton>
                                <BookDemoButton source="sintra_alt_cta">Book a free pilot call</BookDemoButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Related Comparisons ── */}
                <section className="py-12 bg-white border-t border-slate-100">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="font-bold text-slate-900 mb-4">Related Comparisons</h3>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/dooza-vs-sintra" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Dooza vs Sintra AI →
                            </Link>
                            <Link href="/dooza-vs-marblism" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Dooza vs Marblism →
                            </Link>
                            <Link href="/marblism-alternatives" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Marblism Alternatives →
                            </Link>
                            <Link href="/ai-solutions-for-business" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                AI Solutions for Business →
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
