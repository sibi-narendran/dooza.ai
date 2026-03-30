'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    CheckCircle2, XCircle, ArrowRight, Sparkles, Star,
    CreditCard, Puzzle, Shield, Users, Bot, AlertTriangle
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
    { icon: CreditCard, title: '250 Credit Cap', desc: 'Every Sintra plan caps you at 250 credits per month. Advanced actions burn credits fast, forcing you to buy top-ups or wait.' },
    { icon: Puzzle, title: 'No Inter-Helper Communication', desc: 'Sintra helpers cannot share context. Multi-step workflows require manually copying data between helper chats.' },
    { icon: Shield, title: 'Self-Serve Onboarding Only', desc: 'No human guidance during setup. You get a login and are left to figure out 90+ Power-Ups on your own.' },
    { icon: AlertTriangle, title: 'Rigid Helper Structure', desc: 'Pre-built helpers with fixed capabilities. No way to create custom agents, modify prompts, or chain actions between helpers.' },
    { icon: Users, title: 'Confusing Pricing Tiers', desc: 'Listed at $97/mo with a perpetual 50% discount. Credit top-ups add hidden costs. Annual lock-in required for the best rate.' },
    { icon: Bot, title: 'Output Quality Concerns', desc: 'Multiple independent reviews note that AI outputs require significant editing before they are usable for real business tasks.' },
];

const alternatives = [
    {
        rank: 1,
        name: 'Dooza',
        tagline: 'Best overall Sintra alternative for SMBs',
        bestFor: 'Small businesses wanting hands-off AI employees with personal onboarding',
        price: 'From $39/mo (yearly) or $49/mo (monthly)',
        trial: '$1 for 7-day full access',
        agents: '5 named AI employees — Maily (email), Somi (social media), Ranky (SEO), Stan (customer support), Linda (lead generation)',
        integrations: '1,000+ via Composio',
        creditSystem: false,
        namedAgents: true,
        highlight: true,
        pros: [
            '5 named AI employees included in every plan',
            '$1 trial with full 7-day access — lowest risk entry',
            'Free concierge onboarding — founder personally sets up your workspace',
            'No credit system — usage-based tiers instead of confusing credits',
            '1,000+ app integrations via Composio',
        ],
        cons: [
            'Fewer named agents than Sintra (5 vs 12+)',
            'Newer platform with a smaller user base',
            'No free plan — $1 trial is the entry point',
        ],
    },
    {
        rank: 2,
        name: 'Marblism',
        tagline: 'Cheapest named-agent platform',
        bestFor: 'Budget-conscious solopreneurs who want an affordable AI team',
        price: 'From $24/mo (yearly) or $44/mo (monthly)',
        trial: '7-day money-back guarantee (no free trial)',
        agents: '6 named AI employees — Eva (assistant), Sonny (social), Penny (SEO), Stan (leads), Rachel (receptionist), Linda (legal)',
        integrations: 'Limited — Gmail, Instagram, Facebook, WordPress, Wix',
        creditSystem: false,
        namedAgents: true,
        highlight: false,
        pros: [
            'Cheapest starting price at $24/mo yearly',
            '4.7/5 on Trustpilot from 765+ reviews',
            '6 named agents including a phone receptionist (Rachel)',
            'No credit system — all features included in every plan',
        ],
        cons: [
            'Limited integrations compared to competitors',
            'No free trial — relies on 7-day refund guarantee',
            'Some users report agents occasionally ignore prompts',
            'Per-seat pricing ($14-29/mo) adds up for teams',
        ],
    },
    {
        rank: 3,
        name: 'Motion',
        tagline: 'Project management tool with AI employees bolted on',
        bestFor: 'Teams already using Motion for PM/calendar who want AI features',
        price: 'From $19/seat/mo (yearly) or $29/seat/mo (monthly)',
        trial: '7-day free trial',
        agents: '5+ named agents (Alfred, Chip, Clide, Millie, Suki) + custom builder',
        integrations: 'Moderate — Gmail-dependent, limited Outlook support',
        creditSystem: true,
        namedAgents: true,
        highlight: false,
        pros: [
            '$60M funded (Series C) — well-resourced and actively developing',
            'Custom agent builder for tailored workflows',
            'Strong project management and calendar foundation',
            '7-day free trial with no commitment',
        ],
        cons: [
            'Credit-based AI usage (7,500-15,000 credits/seat) limits actual output',
            'Per-seat pricing gets expensive fast for teams',
            'AI employees are secondary to the core PM product — not purpose-built',
            'Gmail dependency — Outlook users get degraded functionality',
        ],
    },
    {
        rank: 4,
        name: 'NoimosAI',
        tagline: 'Marketing-only AI agents (deep but narrow)',
        bestFor: 'Marketing teams and agencies wanting specialized marketing automation',
        price: 'From ~$79/mo (Pro) or ~$174/mo annually (Team)',
        trial: 'Free to start with limited features',
        agents: '11 marketing agents — SEO, Social, Competitor, GEO, Social Listening, CVR, Ads, and more',
        integrations: 'Marketing-focused — social platforms, analytics tools',
        creditSystem: true,
        namedAgents: true,
        highlight: false,
        pros: [
            'Deepest marketing agent roster — 11 specialized agents',
            'Unique GEO agent for AI search engine optimization',
            'Social Listening agent tracks brand mentions across the web',
            'No credit system on base features',
        ],
        cons: [
            'Marketing-only — no email management, legal, receptionist, or general business agents',
            'Expensive starting point at ~$79/mo',
            'Smaller company with limited public reviews',
            'Credit system applies to advanced features',
        ],
    },
    {
        rank: 5,
        name: 'Lindy AI',
        tagline: 'Custom agent builder with massive integrations',
        bestFor: 'Technical users who want to build their own AI agents from scratch',
        price: 'From $49.99/mo (Plus) or $59.99/mo (Pro)',
        trial: '7-day free trial',
        agents: 'No pre-built agents — build your own custom "Lindies" from 50+ templates',
        integrations: '5,000+ via Pipedream',
        creditSystem: true,
        namedAgents: false,
        highlight: false,
        pros: [
            '5,000+ integrations — the largest library in this category',
            'Voice agent capabilities (inbound and outbound calling)',
            'Enterprise-grade security (HIPAA, SOC 2, GDPR)',
            '7-day free trial with full access',
        ],
        cons: [
            '2.0/5 on Trustpilot — major complaints about billing and unauthorized charges',
            'Requires technical knowledge to build agents — not plug-and-play',
            'Credit-based system plus per-minute voice charges add up',
            'No pre-built named agents — you build and configure everything yourself',
        ],
    },
    {
        rank: 6,
        name: 'Relevance AI',
        tagline: 'Enterprise-grade AI workforce platform',
        bestFor: 'Mid-market companies and GTM teams (Canva, KPMG use it)',
        price: 'Free tier, then $19/mo (Pro) up to $234/mo (Team)',
        trial: 'Free plan with 200 actions/month',
        agents: 'Custom agent builder — design your own AI workforce',
        integrations: 'Enterprise integrations with CRM and sales tools',
        creditSystem: true,
        namedAgents: false,
        highlight: false,
        pros: [
            'Used by Canva, KPMG, Autodesk — proven at enterprise scale',
            'Free tier with 200 actions/month to test',
            '$37M in VC funding — strong long-term viability',
            'Multi-agent orchestration where agents actually collaborate',
        ],
        cons: [
            'Dual credit system (actions + LLM vendor credits) is confusing',
            'Not designed for SMBs — pricing and complexity target enterprise',
            'Requires days or weeks of setup — not plug-and-play',
            'Limited organic reviews suggest low SMB adoption',
        ],
    },
    {
        rank: 7,
        name: 'Cubeo AI',
        tagline: 'No-code chatbot builder (not autonomous agents)',
        bestFor: 'Businesses wanting simple AI chatbots on their website',
        price: 'From ~\u20ac17/mo (Starter) — pricing in euros',
        trial: 'Free plan with 100 credits',
        agents: 'No-code builder — create chatbots and AI assistants (not autonomous employees)',
        integrations: 'Basic — Salesforce, HubSpot, Slack, Zapier, Make',
        creditSystem: true,
        namedAgents: false,
        highlight: false,
        pros: [
            'Very affordable entry point (~\u20ac17/mo)',
            'No-code builder — easy for non-technical users',
            'Free plan available with no credit card required',
            'GPT-4 and Claude models under the hood',
        ],
        cons: [
            'Chatbot builder, not autonomous AI employees — agents wait for prompts',
            'Cannot execute tasks like sending emails or posting to social media',
            'Credit-based system (1,200 credits on Starter) limits heavy usage',
            'Very limited public reviews — hard to verify reliability at scale',
        ],
    },
];

const decisionGuide = [
    { need: 'Best overall alternative', pick: 'Dooza', reason: 'Named AI employees, $1 trial, personal founder onboarding, no credit system, 1,000+ integrations' },
    { need: 'Lowest price', pick: 'Marblism', reason: 'Starts at $24/mo yearly with 6 named agents and no credit system' },
    { need: 'Most integrations', pick: 'Lindy AI', reason: '5,000+ integrations — but beware of the 2.0/5 Trustpilot rating and credit system' },
    { need: 'Enterprise scale', pick: 'Relevance AI', reason: 'Used by Canva and KPMG, multi-agent orchestration, $37M funded' },
    { need: 'Marketing only', pick: 'NoimosAI', reason: '11 specialized marketing agents including unique GEO and Social Listening agents' },
    { need: 'PM + AI in one tool', pick: 'Motion', reason: 'Calendar, task management, and AI employees in a single platform' },
    { need: 'Best user reviews', pick: 'Marblism', reason: '4.7/5 on Trustpilot from 765+ reviews — highest rated in this list' },
    { need: 'Personal onboarding', pick: 'Dooza', reason: 'The only platform offering a free founder setup call with concierge onboarding' },
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
                                    Updated March 2026
                                </div>
                            </div>

                            <h1 className="hero-entrance hero-delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                7 Best <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent animate-gradient">Sintra AI Alternatives</span> [2026]
                            </h1>

                            <p className="hero-entrance hero-delay-3 text-xl sm:text-2xl text-slate-500 font-serif italic mb-4">
                                Credits running out? Helpers not talking to each other? You are not alone.
                            </p>

                            <p className="hero-entrance hero-delay-3 text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                                Sintra AI caps every plan at 250 credits and their helpers cannot share context. We tested 7 alternatives and compared pricing, features, pros, and cons — so you do not have to.
                            </p>

                            <div className="hero-entrance hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="sintra_alt_hero">Try Dooza for $1</SignupButton>
                                <BookDemoButton source="sintra_alt_hero" />
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
                                    Sintra AI has 40,000+ users and a 4.5/5 Trustpilot rating. But recurring complaints push many to explore other options.
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
                                Pricing as of March 2026. Visit each platform for current rates. Green check = no credit system / has named agents. Red X = uses credits / no named agents.
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
                                            <SignupButton source="sintra_alt_dooza_card">Try Dooza for $1</SignupButton>
                                            <BookDemoButton source="sintra_alt_dooza_card" />
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>
                        ))}
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
                                Start with a $1 trial — full access for 7 days. Or book a free setup call with the founder. No sales pitch, just a walkthrough of what Dooza handles for your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="sintra_alt_cta">Try Dooza for $1</SignupButton>
                                <BookDemoButton source="sintra_alt_cta" />
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
