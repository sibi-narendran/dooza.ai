'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    CheckCircle2, XCircle, ArrowRight, Sparkles, Star,
    DollarSign, Puzzle, Shield, Users, Bot, AlertTriangle, Clock
} from 'lucide-react';
import SignupButton from '@/components/buttons/SignupButton';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import BookingModalProvider from '@/components/BookingModalProvider';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trackFBViewContent } from '@/lib/analytics';

const marblismPainPoints = [
    { icon: Users, title: 'Self-Serve Setup', desc: 'Marblism is self-serve: you set up and manage the AI employees yourself. If you would rather have someone build and tune them with you, a done-for-you option fits better.' },
    { icon: Bot, title: 'Need Custom Agents', desc: 'Every Marblism plan includes the same 7 AI employees (Eva, Sonny, Stan, Penny, Rachel, Walter, Linda). If your workflow needs an agent outside that roster, look at platforms that build custom agents.' },
    { icon: Puzzle, title: 'Specific Integrations', desc: 'If you depend on a particular tool, check Marblism\'s site for the tools it connects to before you commit, and compare it with the alternatives below.' },
    { icon: Shield, title: 'How You Evaluate It', desc: 'Marblism\'s pricing page (checked October 7, 2026) does not mention a free trial but offers a 7-day money-back guarantee. Some alternatives offer free trials, free tiers, or refundable pilots.' },
    { icon: DollarSign, title: 'Hours Included', desc: 'Every Marblism plan includes 50 hours of work. If you expect heavier use, compare how each alternative meters work.' },
    { icon: Clock, title: 'Time to Set It Up', desc: 'A low price is good value only if you have time to set up and tune the AI employees. If you do not, weigh that time against a done-for-you option.' },
];

const alternatives = [
    {
        rank: 1,
        name: 'Dooza',
        tagline: 'Best done-for-you option — engineer-led setup, custom agents, 1,000+ integrations',
        bestFor: 'SMBs and teams that want AI employees built and tuned for them instead of DIY setup',
        price: 'Refundable pilot (see /pricing)',
        trial: 'Refundable pilot — 100% refund within 14 days',
        agents: 'Maily (email), Somi (social media), Ranky (SEO & AI visibility), Stan (lead generation), Linda (legal documents), Rachel (phone calls)',
        integrations: '1,000+ app integrations',
        creditSystem: false,
        namedAgents: true,
        highlight: true,
        pros: [
            'Done for you: a Dooza engineer builds and tunes your AI employees with you',
            'Refundable pilot — 100% refund within 14 days if it is not the right fit',
            'A Dooza engineer scopes your pilot on a free 30-minute call and sets it up with you',
            '1,000+ app integrations',
            'Custom agents built and maintained by Dooza engineers (Dooza Agents)',
        ],
        cons: [
            'Fewer named AI employees than Sintra\'s 12+ helpers',
            'Costs more than Marblism for a self-serve user',
            'Newer platform with a smaller user base',
            'No free tier — the pilot is paid, with a 100% refund within 14 days',
        ],
    },
    {
        rank: 2,
        name: 'Sintra AI',
        tagline: 'Largest named agent roster with 12+ helpers',
        bestFor: 'Users who want the widest variety of pre-built AI helpers',
        price: '~$48.50/mo (50% discount from $97) or $15.60/mo yearly (checked October 7, 2026)',
        trial: '14-day money-back guarantee',
        agents: '12+ named helpers — Vizzy, Milli, Soshie, Seomi, Penn, Emmie, and more',
        integrations: '15+ direct integrations',
        creditSystem: true,
        namedAgents: true,
        highlight: false,
        pros: [
            'Largest roster — 12+ named AI helpers that call on each other automatically',
            'Brain AI knowledge base personalizes all helpers to your brand',
            'Helper Builder for creating your own custom helpers',
            '14-day money-back guarantee',
        ],
        cons: [
            '250 credits a month on every plan, with paid top-ups when you run out',
            'The lowest rate ($15.60/mo) needs a year paid up front',
            'Self-serve app: after a specialist call and two weeks of hands-on help, you run it yourself',
        ],
    },
    {
        rank: 3,
        name: 'Motion',
        tagline: 'Project management and calendar suite with AI built in',
        bestFor: 'Teams already using Motion for PM/calendar who want AI features added',
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
            'Strong project management and calendar as a foundation',
            'Free trial, cancel anytime',
        ],
        cons: [
            'Credit-based AI usage (7,500 credits/seat/month on Pro AI, 15,000 on Business AI)',
            'Per-seat pricing — cost scales with team size',
            'Built around project management and calendar — the AI works inside that tool',
        ],
    },
    {
        rank: 4,
        name: 'NoimosAI',
        tagline: 'Marketing-focused AI agent (deep but narrow)',
        bestFor: 'Marketing teams and agencies who only need marketing automation',
        price: 'From $99/user/mo (Pro), $249/user/mo (Team) or $499/user/mo (Advanced) (checked October 7, 2026)',
        trial: 'No free plan; free trial available',
        agents: 'One AI agent with marketing capabilities — Growth Metrics, Competitor Strategy, Social Listening, SEO, GEO, CVR Optimization, and more',
        integrations: 'Marketing-focused — social platforms, analytics tools',
        creditSystem: true,
        namedAgents: false,
        highlight: false,
        pros: [
            'Deep marketing coverage — growth, competitors, SEO, GEO, outreach and CVR',
            'GEO capability for AI search visibility',
            'Social Listening finds high-intent conversations online',
            'Free trial to test it',
        ],
        cons: [
            'Marketing-focused — no email management, legal, receptionist, or general business agents',
            'Higher starting point at $99 per user per month',
            'Credits are used for AI features like chat, document processing and automation tasks',
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
            'No named AI employees — you configure the skills yourself (Lindy offers live onboarding sessions)',
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
        tagline: 'No-code AI agent and chatbot builder with a free plan',
        bestFor: 'Businesses wanting simple AI chatbots on their website',
        price: 'From €17/mo (€14.17/mo billed yearly) — pricing in euros (checked October 7, 2026)',
        trial: 'Free plan with 100 credits',
        agents: 'No-code builder — create AI assistants and chatbots, with agent triggers',
        integrations: 'Zapier and Make webhooks, CRM connections (see cubeo.ai)',
        creditSystem: true,
        namedAgents: false,
        highlight: false,
        pros: [
            'Affordable entry point (€17/mo, or €14.17/mo yearly)',
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

const decisionGuide = [
    { need: 'Best overall alternative', pick: 'Dooza', reason: 'Done for you: engineer-led setup, custom agents, refundable pilot, 1,000+ integrations' },
    { need: 'Most AI agents', pick: 'Sintra AI', reason: '12+ named helpers that work together; 250 credits a month on every plan, with paid top-ups' },
    { need: 'AI teammate in Slack', pick: 'Lindy AI', reason: '1,000+ integrations (1,500+ on its pricing page), 40+ skills, setup in about 2 minutes, per Lindy' },
    { need: 'Enterprise scale', pick: 'Relevance AI', reason: 'Canva and Autodesk case studies, multi-agent workforces, 2,000+ integrations. Pricing through sales' },
    { need: 'Marketing only', pick: 'NoimosAI', reason: 'Marketing-focused AI agent with GEO and Social Listening' },
    { need: 'PM + AI in one tool', pick: 'Motion', reason: 'Calendar, tasks, and AI Workflows in one platform. Per-seat pricing' },
    { need: 'Lowest-cost self-serve AI employees', pick: 'Marblism ($24/mo yearly)', reason: 'All 7 AI employees, 50 hours of work, unlimited team members — if you are happy to set it up yourself' },
    { need: 'Done for you', pick: 'Dooza', reason: 'A Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes AI employees or custom agents with you' },
];

export default function MarblismAlternativesContent({ faqData }) {
    const [jsLoaded, setJsLoaded] = useState(false);

    useEffect(() => {
        setJsLoaded(true);
        trackFBViewContent('marblism_alternatives', 'alternatives_page');
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
                                7 Best <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent animate-gradient">Marblism Alternatives</span> [2026]
                            </h1>

                            <p className="hero-entrance hero-delay-3 text-xl sm:text-2xl text-slate-500 font-serif italic mb-4">
                                Want it done for you, or need agents Marblism does not offer? Here are your options.
                            </p>

                            <p className="hero-entrance hero-delay-3 text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                                Marblism is a low-cost, self-serve AI employee platform: $24/mo billed yearly or $44/mo monthly for all 7 AI employees (pricing checked October 7, 2026). We compared 7 alternatives on pricing, integrations, setup, pros, and cons — so you do not have to.
                            </p>

                            <div className="hero-entrance hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="marblism_alt_hero">Start your pilot</SignupButton>
                                <BookDemoButton source="marblism_alt_hero">Book a free pilot call</BookDemoButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Why People Look for Marblism Alternatives ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">The Problem</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why People Look for Marblism Alternatives</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    Marblism is a popular, low-cost option, but it is not the right fit for everyone. These are the common reasons people compare alternatives.
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {marblismPainPoints.map((item, i) => (
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
                                Prices checked October 7, 2026 on each platform&apos;s pricing page. Visit each platform for current rates. Green check = no credit system / has named agents. Red X = uses credits / no named agents.
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
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">7 Best Marblism Alternatives — In Detail</h2>
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
                                            <SignupButton source="marblism_alt_dooza_card">Start your pilot</SignupButton>
                                            <BookDemoButton source="marblism_alt_dooza_card">Book a free pilot call</BookDemoButton>
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* ── Marblism Pricing (Dark) ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 overflow-hidden relative">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

                    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Pricing</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Marblism Pricing (Checked October 7, 2026)</h2>
                                <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
                                    From Marblism&apos;s own <a href="https://www.marblism.com/pricing" target="_blank" rel="noopener noreferrer" className="underline text-primary-300">pricing page</a>.
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
                                                <th className="p-4 md:p-5 border-b border-white/10 font-bold text-slate-400">Marblism</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            {[
                                                { item: 'Price (billed yearly)', value: '$24/mo' },
                                                { item: 'Price (billed monthly)', value: '$44/mo' },
                                                { item: 'AI employees', value: 'All 7 (Eva, Sonny, Stan, Penny, Rachel, Walter, Linda)' },
                                                { item: 'Work included', value: '50 hours' },
                                                { item: 'Team members', value: 'Unlimited' },
                                                { item: 'Businesses', value: 'Unlimited' },
                                                { item: 'Free trial', value: 'Not mentioned on the pricing page' },
                                                { item: 'Guarantee', value: '7-day money-back guarantee' },
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
                                For a self-serve user who wants many AI employees at a low price, Marblism is good value. Dooza fits when you would rather not set it up yourself: a Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes your AI employees or custom agents (Dooza Agents) with you, with your approval on anything sensitive. Every Dooza product starts with a refundable pilot — 100% refund within 14 days. Pricing depends on the product; see <Link href="/pricing" className="underline text-primary-300">/pricing</Link>.
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
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Ready to Try the Best Marblism Alternative?</h2>
                            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                                Start with a refundable pilot — 100% refund within 14 days. Book a free 30-minute call with a Dooza engineer to scope it.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="marblism_alt_cta">Start your pilot</SignupButton>
                                <BookDemoButton source="marblism_alt_cta">Book a free pilot call</BookDemoButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Related Comparisons ── */}
                <section className="py-12 bg-white border-t border-slate-100">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="font-bold text-slate-900 mb-4">Related Comparisons</h3>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/dooza-vs-marblism" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Dooza vs Marblism →
                            </Link>
                            <Link href="/sintra-alternatives" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Sintra AI Alternatives →
                            </Link>
                            <Link href="/dooza-vs-sintra" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Dooza vs Sintra AI →
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
