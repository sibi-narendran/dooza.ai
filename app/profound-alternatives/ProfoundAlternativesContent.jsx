'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    CheckCircle2, XCircle, ArrowRight, Sparkles, Star,
    CreditCard, Building2, BarChart3, Wrench, Users, Quote, Target,
} from 'lucide-react';
import SignupButton from '@/components/buttons/SignupButton';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import BookingModalProvider from '@/components/BookingModalProvider';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trackFBViewContent } from '@/lib/analytics';

const quickAnswer = [
    { pick: 'Dooza', why: 'Best overall for teams that need GEO done, not just measured — Ranky does the work from $49/mo, engineers set it up free.' },
    { pick: 'Otterly.ai', why: 'Best budget AI visibility tracker — third-party reviews report plans from about $29/mo.' },
    { pick: 'Peec AI', why: 'Best mid-priced AI search analytics for marketing teams.' },
    { pick: 'Semrush / Ahrefs', why: 'Best if you already pay for one and want AI visibility next to your SEO data.' },
];

const profoundPainPoints = [
    { icon: CreditCard, title: 'Custom pricing, demo required', desc: 'Profound\'s pricing page lists a 7-day free Trial and a custom-priced Enterprise plan. To see a number, you book a demo.' },
    { icon: Building2, title: 'Built for enterprise', desc: 'SSO/SAML, SOC 2, API, 9 answer engines, and Slack support are great for large brands — and more than most small teams will use.' },
    { icon: BarChart3, title: 'Dashboards don\'t do the work', desc: 'Share of voice, citations, and Prompt Volumes tell you where you are invisible. Someone still has to write, optimize, and publish.' },
    { icon: Target, title: 'The trial is narrow', desc: 'The Trial covers 50 prompts for 7 days across 3 answer engines, with limited AI Marketer credits and no API or support.' },
];

const alternatives = [
    {
        rank: 1,
        name: 'Dooza',
        tagline: 'Best overall for teams that need GEO done, not just measured',
        bestFor: 'Small and mid-sized businesses, founders, local businesses, lean marketing teams, and agencies that need outcomes, not dashboards',
        price: 'Ranky from $49/mo (Growth $79/mo); first AI employee setup free',
        trial: '7-day money-back guarantee',
        type: 'Execution (AI employee + engineers)',
        doesWork: true,
        highlight: true,
        what: 'Dooza is a Forward Deployed Engineer company. Its AI Visibility & Growth Employee, Ranky, combines Google SEO and generative engine optimization in one: topic research with real search data, on-page SEO and schema, GEO-ready content built to be cited by ChatGPT, Perplexity, Claude, and Gemini, and live monitoring of who is mentioning you.',
        pros: [
            'Does the work: researches, writes, optimizes, and publishes to Shopify, WordPress, Wix, or custom sites',
            'GEO method built in: citable claims, third-party citations, schema, Reddit and Quora presence, consistent NAP',
            'Social listening and brand-voice comments on LinkedIn, YouTube, and Reddit (approve or auto-send)',
            'Engineers set up your first AI employee free — live in days, no contracts',
            'Published price: $49/mo with a 7-day money-back guarantee',
        ],
        cons: [
            'Not an enterprise analytics suite — no 9-engine tracking or prompt-volume data',
            'Not positioned for SOC 2 procurement requirements',
            'Teams that want deep dashboards should pair Ranky with a tracker',
        ],
    },
    {
        rank: 2,
        name: 'Otterly.ai',
        tagline: 'Budget-friendly AI search monitoring',
        bestFor: 'Small teams and solo marketers who want to start tracking AI visibility cheaply',
        price: 'From ~$29/mo (Lite), per third-party reviews — check otterly.ai',
        trial: 'Check vendor site',
        type: 'Monitoring',
        doesWork: false,
        highlight: false,
        what: 'Otterly.ai tracks how your brand appears in AI search answers. It is one of the lowest-cost ways to get a baseline of your AI visibility.',
        pros: [
            'Low entry price compared with Profound',
            'Simple way to benchmark brand mentions in AI answers',
            'Good fit for small teams starting GEO measurement',
        ],
        cons: [
            'Monitoring tool — you still need someone to act on the data',
            'Lighter than Profound for enterprise needs; confirm engine coverage on the vendor site',
        ],
    },
    {
        rank: 3,
        name: 'Peec AI',
        tagline: 'Mid-priced AI search analytics',
        bestFor: 'Marketing teams that want AI search analytics without enterprise pricing',
        price: '~$89–95/mo entry, per third-party reviews — check peec.ai',
        trial: 'Check vendor site',
        type: 'Monitoring',
        doesWork: false,
        highlight: false,
        what: 'Peec AI is an AI search analytics platform that tracks how brands show up in answer engines.',
        pros: [
            'Reported entry price well below reported Profound enterprise costs',
            'Focused on AI search visibility for marketing teams',
            'Suits in-house marketing teams that will act on the data',
        ],
        cons: [
            'Monitoring tool — content, schema, and citations are still on you',
            'Costs more than entry-level trackers like Otterly.ai',
        ],
    },
    {
        rank: 4,
        name: 'Scrunch AI',
        tagline: 'AI visibility platform for brands',
        bestFor: 'Brands that want a dedicated AI visibility platform at a lower price point than Profound Enterprise',
        price: '~$300/mo, per third-party reviews — check vendor site',
        trial: 'Check vendor site',
        type: 'Monitoring',
        doesWork: false,
        highlight: false,
        what: 'Scrunch AI helps brands monitor and understand how they appear in AI-generated answers.',
        pros: [
            'Dedicated AI visibility focus',
            'Positioned closer to Profound for brands that want depth',
        ],
        cons: [
            'Higher price than Otterly.ai or Peec AI',
            'Measurement-focused — execution still needs a team or AI employee',
        ],
    },
    {
        rank: 5,
        name: 'Semrush AI Toolkit',
        tagline: 'AI visibility inside the Semrush suite',
        bestFor: 'Teams already paying for Semrush that want AI visibility next to their SEO data',
        price: 'Add-on to Semrush — check semrush.com for current pricing',
        trial: 'Check vendor site',
        type: 'Monitoring (part of SEO suite)',
        doesWork: false,
        highlight: false,
        what: 'Semrush\'s AI Toolkit adds AI search visibility insights to the Semrush SEO platform.',
        pros: [
            'One login for SEO and AI visibility',
            'Sensible first step if Semrush is already your SEO tool',
        ],
        cons: [
            'Adds cost on top of a Semrush subscription',
            'Still reporting — someone has to implement the recommendations',
        ],
    },
    {
        rank: 6,
        name: 'Ahrefs Brand Radar',
        tagline: 'Brand mentions in AI answers from Ahrefs',
        bestFor: 'Ahrefs users who want to see how their brand shows up in AI answers alongside backlink data',
        price: 'Part of Ahrefs — check ahrefs.com for current pricing',
        trial: 'Check vendor site',
        type: 'Monitoring (part of SEO suite)',
        doesWork: false,
        highlight: false,
        what: 'Ahrefs Brand Radar tracks brand mentions and visibility in AI answers, alongside Ahrefs\' SEO and backlink data.',
        pros: [
            'Pairs AI visibility with Ahrefs\' backlink and search data',
            'No new vendor if your team already uses Ahrefs',
        ],
        cons: [
            'Requires an Ahrefs subscription',
            'Measurement only — no content publishing or schema fixes',
        ],
    },
    {
        rank: 7,
        name: 'A GEO agency',
        tagline: 'Fully managed generative engine optimization',
        bestFor: 'Companies with agency budget that want GEO fully outsourced',
        price: 'Varies widely by agency and scope — usually retainer-based',
        trial: 'Varies',
        type: 'Service',
        doesWork: true,
        highlight: false,
        what: 'A GEO agency plans and executes generative engine optimization for you — content, technical fixes, and off-site presence — usually on a monthly retainer.',
        pros: [
            'Hands-off: the agency does the work',
            'Strategy and execution in one relationship',
        ],
        cons: [
            'Retainers typically cost far more than software',
            'Quality varies — GEO is a young discipline, so vet case studies',
            'Often locked into multi-month contracts',
        ],
    },
];

const decisionGuide = [
    { need: 'GEO work actually done', pick: 'Dooza', reason: 'Ranky researches, writes, optimizes, and publishes; engineers set it up free. From $49/mo.' },
    { need: 'Cheapest AI visibility tracking', pick: 'Otterly.ai', reason: 'Lowest reported entry price among dedicated trackers (~$29/mo, third-party reported).' },
    { need: 'Mid-market AI search analytics', pick: 'Peec AI', reason: 'Mid-priced AI search analytics (~$89–95/mo, third-party reported).' },
    { need: 'AI visibility inside your SEO suite', pick: 'Semrush or Ahrefs', reason: 'Semrush AI Toolkit or Ahrefs Brand Radar next to the SEO data you already use.' },
    { need: 'Enterprise coverage and SOC 2', pick: 'Stay on Profound', reason: '9 answer engines, Prompt Volumes, Agent Analytics, SSO/SAML, and SOC 2 on Enterprise.' },
    { need: 'Fully outsourced GEO', pick: 'A GEO agency', reason: 'Managed service on a retainer — vet case studies carefully.' },
    { need: 'Tracking + execution', pick: 'Tracker + Dooza', reason: 'Use any tracker to find gaps and Ranky to close them.' },
];

const howToChoose = [
    { step: 'Decide if you need data or outcomes', desc: 'If you have writers and SEO staff waiting on insights, buy a tracker. If nobody has time to act on insights, buy execution first.' },
    { step: 'Check which answer engines matter', desc: 'ChatGPT, Perplexity, Gemini, Claude, Copilot, and Google AI Overviews behave differently. Confirm current engine coverage on each vendor\'s site.' },
    { step: 'Compare real prices, not "from" prices', desc: 'Profound Enterprise is custom-priced. Ask every vendor for prompt limits, engines included, and what counts as overage.' },
    { step: 'Ask who does the work', desc: 'Someone has to publish citable content, add schema, and show up on Reddit and Quora. Make that owner explicit before you buy.' },
    { step: 'Start small, measure, expand', desc: 'Pick a short list of priority topics, ship content for them, and check whether mentions and citations move before scaling up.' },
];

const whyDooza = [
    { icon: Wrench, title: 'Execution, not just insight', desc: 'Every other tool on this list tells you what to fix. Ranky fixes it: content, on-page SEO, schema, internal links, and off-site presence.' },
    { icon: Users, title: 'Humans set it up', desc: 'A Dooza engineer maps your workflow on Day 1, builds on Day 2, and your AI employee is live by Day 4. Your first AI employee is free.' },
    { icon: Quote, title: 'Built for how AI cites', desc: 'Specific citable claims, third-party citations, schema, Reddit and Quora presence, and consistent NAP — the inputs answer engines use.' },
    { icon: CreditCard, title: 'Priced for SMBs', desc: 'Ranky starts at $49/mo on Dooza Workforce with a 7-day money-back guarantee and no contracts. No demo required to see a price.' },
];

export default function ProfoundAlternativesContent({ faqData }) {
    const [jsLoaded, setJsLoaded] = useState(false);

    useEffect(() => {
        setJsLoaded(true);
        trackFBViewContent('profound_alternatives', 'alternatives_page');
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
                                    Updated September 2026
                                </div>
                            </div>

                            <h1 className="hero-entrance hero-delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                7 Best <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent animate-gradient">Profound Alternatives</span> in 2026
                            </h1>

                            <p className="hero-entrance hero-delay-3 text-xl sm:text-2xl text-slate-500 font-serif italic mb-4">
                                Cheaper AI visibility and GEO tools — and one that does the work.
                            </p>

                            <p className="hero-entrance hero-delay-3 text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                                Profound (tryprofound.com) is an enterprise AI visibility platform with custom pricing. The best Profound alternative for most small and mid-sized teams is Dooza: Ranky does the generative engine optimization work from $49/mo, and Dooza engineers set up your first AI employee free. For cheaper monitoring only, look at Otterly.ai or Peec AI.
                            </p>

                            <div className="hero-entrance hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
                                <BookDemoButton source="profound_alt_hero" variant="primary">Get Your First AI Employee Free</BookDemoButton>
                                <SignupButton source="profound_alt_hero" variant="inverse">Hire Ranky — $49/mo</SignupButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Quick Answer ── */}
                <section className="py-20 lg:py-24 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="bg-gradient-to-br from-primary-50 to-teal-50 border border-primary-100 rounded-3xl p-8 md:p-12">
                                <h2 className="text-2xl font-bold mb-6">The Short Answer</h2>
                                <ul className="space-y-4">
                                    {quickAnswer.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-700">
                                            <CheckCircle2 size={18} className="text-primary-500 shrink-0 mt-1" />
                                            <span><strong className="text-slate-900">{item.pick}:</strong> {item.why}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-slate-600 mt-6 leading-relaxed">
                                    The key split: Profound, Otterly.ai, Peec AI, Scrunch AI, Semrush, and Ahrefs <strong>measure</strong> AI visibility. Dooza and GEO agencies <strong>do the work</strong> that changes it.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Why People Look for Profound Alternatives ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">The Problem</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why People Look for Profound Alternatives</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    Profound is a strong enterprise platform. These are the reasons smaller teams shop around.
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {profoundPainPoints.map((item, i) => (
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
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Profound Alternatives Compared</h2>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="overflow-x-auto -mx-4 px-4">
                                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white min-w-[820px] card-shadow">
                                    <table className="w-full border-collapse text-left">
                                        <thead>
                                            <tr className="bg-slate-50">
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-900 w-[16%]">Option</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[30%]">Best For</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[24%]">Starting Price</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[16%]">Type</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[14%] text-center">Does the GEO work?</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm text-slate-600">
                                            {alternatives.map((alt) => (
                                                <tr key={alt.rank} className={`border-b border-slate-100 last:border-0 ${alt.highlight ? 'bg-primary-50/30' : ''}`}>
                                                    <td className="p-4 md:p-5 font-bold text-slate-900">
                                                        <div className="flex items-center gap-2">
                                                            {alt.highlight && <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-bold">#1</span>}
                                                            {alt.name}
                                                        </div>
                                                    </td>
                                                    <td className="p-4 md:p-5">{alt.bestFor}</td>
                                                    <td className="p-4 md:p-5 font-medium text-slate-800">{alt.price}</td>
                                                    <td className="p-4 md:p-5">{alt.type}</td>
                                                    <td className="p-4 md:p-5 text-center">
                                                        {alt.doesWork
                                                            ? <CheckCircle2 size={18} className="text-green-500 mx-auto" aria-label="Yes" />
                                                            : <XCircle size={18} className="text-red-400 mx-auto" aria-label="No" />
                                                        }
                                                    </td>
                                                </tr>
                                            ))}
                                            <tr className="bg-slate-50/60">
                                                <td className="p-4 md:p-5 font-bold text-slate-500">Profound (for reference)</td>
                                                <td className="p-4 md:p-5 text-slate-500">Large brands and agencies with analytics teams</td>
                                                <td className="p-4 md:p-5 text-slate-500">7-day free trial; Enterprise custom</td>
                                                <td className="p-4 md:p-5 text-slate-500">Monitoring</td>
                                                <td className="p-4 md:p-5 text-center"><XCircle size={18} className="text-red-400 mx-auto" aria-label="No" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 mt-4 italic text-center">
                                Competitor prices are third-party reported (early-to-mid 2026) and may have changed — check each vendor&apos;s site. Profound pricing from{' '}
                                <a href="https://www.tryprofound.com/pricing" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-600">tryprofound.com/pricing</a>, checked September 25, 2026.
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
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">The 7 Best Profound Alternatives — In Detail</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    Honest pros and cons for each option. Yes, including ours.
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
                                            <h3 id={alt.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="text-2xl font-bold text-slate-900">{alt.name}</h3>
                                            <p className="text-slate-500">{alt.tagline}</p>
                                        </div>
                                        {alt.highlight && (
                                            <span className="bg-primary-100 text-primary-700 text-xs font-bold px-3 py-1 rounded-full shrink-0">
                                                OUR PICK
                                            </span>
                                        )}
                                    </div>

                                    <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg text-sm text-slate-600 mb-6">
                                        <Star size={14} className="text-yellow-500 shrink-0" />
                                        <span><strong>Best for:</strong> {alt.bestFor}</span>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed mb-6">{alt.what}</p>

                                    <div className="grid sm:grid-cols-3 gap-4 mb-6">
                                        <div className="bg-slate-50 rounded-xl p-4">
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Pricing</p>
                                            <p className="font-bold text-slate-900 text-sm">{alt.price}</p>
                                        </div>
                                        <div className="bg-slate-50 rounded-xl p-4">
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Trial / Guarantee</p>
                                            <p className="font-bold text-slate-900 text-sm">{alt.trial}</p>
                                        </div>
                                        <div className="bg-slate-50 rounded-xl p-4">
                                            <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">Type</p>
                                            <p className="font-bold text-slate-900 text-sm">{alt.type}</p>
                                        </div>
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
                                            <BookDemoButton source="profound_alt_dooza_card" variant="primary">Get Your First AI Employee Free</BookDemoButton>
                                            <SignupButton source="profound_alt_dooza_card" variant="inverse">Hire Ranky — $49/mo</SignupButton>
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* ── Why Dooza Is the Best Profound Alternative ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Why Dooza</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Why Dooza Is the Best Profound Alternative</h2>
                                <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                                    Profound shows you where you&apos;re invisible in AI answers. Dooza fixes it.
                                </p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            {whyDooza.map((item, i) => (
                                <StaggerItem key={i}>
                                    <div className="card-shadow bg-white rounded-2xl border border-slate-100 p-8 h-full hover:border-primary-200 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-5">
                                            <item.icon className="w-6 h-6 text-primary-600" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <ScrollReveal>
                            <p className="text-sm text-slate-500 mt-10 text-center max-w-3xl mx-auto">
                                Why execution matters: the{' '}
                                <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-600">Princeton GEO study</a>{' '}
                                found adding citations, quotations, and statistics can boost visibility in generative engine responses by up to roughly 40%. No tool can guarantee a citation. See the full{' '}
                                <Link href="/dooza-vs-profound" className="underline hover:text-primary-600">Dooza vs Profound comparison</Link>.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── How to Choose ── */}
                <section className="py-20 lg:py-28 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">Buyer&apos;s Guide</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">How to Choose a Profound Alternative</h2>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <ol className="space-y-4">
                                {howToChoose.map((item, i) => (
                                    <li key={i} className="card-shadow bg-white rounded-2xl border border-slate-100 p-6 flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center shrink-0">
                                            <span className="text-primary-600 font-bold text-sm">{i + 1}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-1">{item.step}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
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
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Which Profound Alternative Is Right for You?</h2>
                                <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
                                    Match your need to the right option. Sometimes the answer is to stay on Profound.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="grid gap-4">
                                {decisionGuide.map((item, i) => (
                                    <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-white/10 transition-colors">
                                        <div className="sm:w-1/3">
                                            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">If you need</p>
                                            <p className="font-bold text-white">{item.need}</p>
                                        </div>
                                        <div className="sm:w-1/4">
                                            <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Choose</p>
                                            <p className="font-bold text-primary-300">{item.pick}</p>
                                        </div>
                                        <div className="sm:flex-1">
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
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Profound Alternatives FAQ</h2>
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
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Get GEO Done, Not Just Measured</h2>
                            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                                Book a call and a Dooza engineer will set up your first AI employee free — live in days, no contracts. Or hire Ranky self-serve for $49/mo with a 7-day money-back guarantee.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <BookDemoButton source="profound_alt_cta" variant="primary">Get Your First AI Employee Free</BookDemoButton>
                                <SignupButton source="profound_alt_cta" variant="inverse">Hire Ranky — $49/mo</SignupButton>
                            </div>
                            <p className="text-sm text-slate-500 mt-6">
                                <Link href="/agents/ranky" className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-medium">
                                    See everything Ranky does <ArrowRight size={14} />
                                </Link>
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Related ── */}
                <section className="py-12 bg-white border-t border-slate-100">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="font-bold text-slate-900 mb-4">Related Guides &amp; Comparisons</h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { href: '/dooza-vs-profound', label: 'Dooza vs Profound' },
                                { href: '/generative-engine-optimization', label: 'Generative Engine Optimization Services' },
                                { href: '/agents/ranky', label: 'Meet Ranky' },
                                { href: '/blog/profound-ai-pricing', label: 'Profound AI Pricing 2026' },
                                { href: '/blog/best-geo-tools', label: 'Best GEO Tools' },
                                { href: '/blog/geo-vs-seo', label: 'GEO vs SEO' },
                                { href: '/blog/how-to-rank-in-chatgpt', label: 'How to Rank in ChatGPT' },
                                { href: '/alternatives', label: 'All Comparisons' },
                            ].map((link) => (
                                <Link key={link.href} href={link.href} className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                    {link.label} →
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
