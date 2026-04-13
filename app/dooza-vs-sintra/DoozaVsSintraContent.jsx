'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    CheckCircle2, XCircle, ArrowRight, Calendar, Clock,
    Sparkles, MessageSquare, TrendingUp, Zap, Shield, Puzzle, Infinity
} from 'lucide-react';
import SignupButton from '@/components/buttons/SignupButton';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import BookingModalProvider from '@/components/BookingModalProvider';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trackFBViewContent } from '@/lib/analytics';

const comparisonRows = [
    { feature: 'Monthly Price', dooza: '$49/mo flat', competitor: '$48.50/mo (discounted from $97)', doozaWins: true },
    { feature: 'Annual Price', dooza: '$39/mo — no lock-in required', competitor: '$15.60/mo — 12-month commitment', doozaWins: false },
    { feature: 'Task / Usage Limits', dooza: 'Unlimited', competitor: '250 credits per month', doozaWins: true },
    { feature: 'Number of AI Agents', dooza: '7 specialized employees', competitor: '12+ helpers', doozaWins: false },
    { feature: 'Onboarding', dooza: 'Personal setup call with founder', competitor: 'Self-serve only', doozaWins: true },
    { feature: 'Integrations', dooza: '17 direct (Gmail, Slack, LinkedIn, Shopify…)', competitor: '15+ direct integrations', doozaWins: false },
    { feature: 'Setup Time', dooza: '~20 min (guided)', competitor: 'Hours to days (DIY)', doozaWins: true },
    { feature: 'Money-Back Guarantee', dooza: '3 days', competitor: '14 days', doozaWins: false },
    { feature: 'Brand Personalization', dooza: 'Auto-extracted from your site', competitor: 'Brain AI knowledge base', doozaWins: false },
    { feature: 'Free Plan', dooza: 'Yes — free to start', competitor: 'No free tier', doozaWins: true },
];

const doozaAdvantages = [
    { icon: Infinity, title: 'No Credit Caps', desc: 'Dooza has no 250-credit ceiling. Use your AI employees as much as you need without rationing.' },
    { icon: Zap, title: 'Personal Setup Call', desc: 'A free 20-minute call with the founder to configure your workspace together. Not a chatbot — a real person.' },
    { icon: Shield, title: 'Flat $49/mo Pricing', desc: 'No "original price" vs "discounted" confusion. One price, everything included, cancel anytime.' },
    { icon: Puzzle, title: 'Free Plan Available', desc: 'Try Dooza before committing. No credit card required to get started.' },
];

const userQuotes = [
    { quote: 'The idea generation is decent, but the actual work output is not usable without significant editing.', source: 'CyberNews Review', sentiment: 'negative' },
    { quote: 'You are given a LOGIN and left to figure it out. There is no onboarding support or human guidance.', source: 'Independent Reviewer', sentiment: 'negative' },
    { quote: 'The 250 credit limit runs out fast if you are using multiple helpers. Then you are stuck waiting or paying for top-ups.', source: 'Salesforge Analysis', sentiment: 'negative' },
    { quote: 'Helpers do NOT share context. If I need data from Dexter passed to Emmie, I have to copy and paste it myself.', source: 'User Review — Efficient App', sentiment: 'negative' },
    { quote: 'Brain AI is a good concept — storing brand voice and business details makes the outputs more relevant.', source: 'CoolTechZone Review', sentiment: 'positive' },
];

const switchReasons = [
    { title: 'The credit cap creates anxiety', desc: 'When every AI action burns a credit, you start rationing usage instead of letting agents work freely. Dooza removes that mental overhead entirely.' },
    { title: 'Setup took too long without help', desc: 'Sintra\'s self-serve approach means hours configuring agents. With Dooza, the founder walks you through setup in a free 20-minute call.' },
    { title: 'Copy-pasting between helpers was exhausting', desc: 'Because Sintra helpers don\'t share context, multi-step workflows require manually moving data between agents.' },
    { title: 'The free plan removed the risk', desc: 'Dooza offers a free plan so you can evaluate the platform before committing. Sintra has no free tier.' },
];

export default function DoozaVsSintraContent({ faqData }) {
    const [jsLoaded, setJsLoaded] = useState(false);

    useEffect(() => {
        setJsLoaded(true);
        trackFBViewContent('dooza_vs_sintra', 'comparison_page');
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
                                    Comparison — Updated March 2026
                                </div>
                            </div>

                            <h1 className="hero-entrance hero-delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Dooza vs <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent animate-gradient">Sintra AI</span>
                            </h1>

                            <p className="hero-entrance hero-delay-3 text-xl sm:text-2xl text-slate-500 font-serif italic mb-4">
                                Unlimited tasks vs 250 credits. Which actually delivers?
                            </p>

                            <p className="hero-entrance hero-delay-3 text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                                Sintra AI offers 12+ helpers capped at 250 credits/month. Dooza offers 7 purpose-built agents with unlimited tasks and a personal founder setup call. Here is the full breakdown.
                            </p>

                            <div className="hero-entrance hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="sintra_hero">Try Dooza Free</SignupButton>
                                <BookDemoButton source="sintra_hero" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Video ── */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/irKKggby-MA?si=2s4Z6mA9Hv6rEjh8"
                                    title="Dooza vs Sintra AI"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Quick Verdict ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="bg-gradient-to-br from-primary-50 to-teal-50 border border-primary-100 rounded-3xl p-8 md:p-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                                        <TrendingUp className="w-5 h-5 text-primary-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold">Quick Verdict</h2>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                    Sintra AI offers more helpers (12+), but caps every plan at <strong>250 credits per month</strong>. Once those credits run out, you pay for top-ups or wait. Helpers also <strong>cannot share context</strong> — you copy-paste between them manually.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Dooza takes the opposite approach: 7 purpose-built agents, <strong>unlimited tasks</strong>, a <strong>personal setup call with the founder</strong>, and a <strong>flat $49/month</strong> with no credit meters. It also offers a free plan to get started.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Why Dooza — Feature Cards ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Why Dooza</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">Where Dooza Takes a Different Approach</h2>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8">
                            {doozaAdvantages.map((item, i) => (
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
                    </div>
                </section>

                {/* ── Full Comparison Table ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">Head-to-Head</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">Full Feature Comparison</h2>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="overflow-x-auto -mx-4 px-4">
                                <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white min-w-[640px] card-shadow">
                                    <table className="w-full border-collapse text-left">
                                        <thead>
                                            <tr className="bg-slate-50">
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-900 w-[35%]">Feature</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-primary-700 bg-primary-50/50 w-[32.5%]">Dooza</th>
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[32.5%]">Sintra AI</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm text-slate-600">
                                            {comparisonRows.map((row, i) => (
                                                <tr key={i} className="border-b border-slate-100 last:border-0">
                                                    <td className="p-4 md:p-5 font-medium text-slate-900">{row.feature}</td>
                                                    <td className={`p-4 md:p-5 ${row.doozaWins ? 'bg-primary-50/30 text-primary-800 font-medium' : ''}`}>
                                                        <div className="flex items-center gap-2">
                                                            {row.doozaWins && <CheckCircle2 size={16} className="text-primary-500 shrink-0" />}
                                                            {row.dooza}
                                                        </div>
                                                    </td>
                                                    <td className={`p-4 md:p-5 ${!row.doozaWins ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>
                                                        {row.competitor}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 mt-4 italic text-center">
                                Pricing and features as of March 2026. Sintra AI pricing reflects their displayed discounted rates.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Pricing Breakdown ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 overflow-hidden relative">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

                    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Pricing Breakdown</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">What You Actually Pay</h2>
                                <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
                                    Sintra lists $97/mo crossed out with a "50% discount" to $48.50. Every plan is capped at 250 credits.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-primary-500/10 backdrop-blur-sm border border-primary-400/20 rounded-2xl p-8">
                                    <p className="text-primary-300 font-bold text-sm uppercase tracking-wider mb-2">Dooza</p>
                                    <div className="text-4xl font-bold text-white mb-1">$49<span className="text-base font-normal text-slate-400">/month</span></div>
                                    <p className="text-sm text-slate-400 mb-5">No contracts. Cancel anytime.</p>
                                    <ul className="space-y-2.5 text-sm">
                                        {['All AI employees', 'Unlimited tasks', '17 direct integrations', 'Personal setup call with founder', 'Free plan available', '3-day money-back guarantee'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2.5 text-slate-300">
                                                <CheckCircle2 size={16} className="text-primary-400 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-slate-400 font-bold text-sm uppercase tracking-wider mb-2">Sintra AI</p>
                                    <div className="text-4xl font-bold text-white mb-1">$48.50<span className="text-base font-normal text-slate-400">/month</span></div>
                                    <p className="text-sm text-slate-500 mb-5">1-month plan. Annual from $15.60/mo.</p>
                                    <ul className="space-y-2.5 text-sm">
                                        {[
                                            { text: '12+ AI helpers', neg: false },
                                            { text: '250 credits/month (then pay more)', neg: true },
                                            { text: '15+ integrations', neg: false },
                                            { text: 'Self-serve setup only', neg: true },
                                            { text: 'No free tier', neg: true },
                                            { text: '14-day money-back guarantee', neg: false },
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2.5 text-slate-400">
                                                {item.neg
                                                    ? <XCircle size={16} className="text-red-400/60 shrink-0" />
                                                    : <CheckCircle2 size={16} className="text-slate-500 shrink-0" />
                                                }
                                                {item.text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── What Users Say About Sintra ── */}
                <section className="py-20 lg:py-28 bg-slate-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">Real Reviews</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">What Users Say About Sintra AI</h2>
                                <p className="text-lg text-slate-500 mt-4">Based on reviews from CyberNews, Efficient App, Salesforge, CoolTechZone, and independent user blogs.</p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-2 gap-4">
                            {userQuotes.map((item, i) => (
                                <StaggerItem key={i}>
                                    <div className={`border rounded-2xl p-6 h-full ${
                                        item.sentiment === 'positive' ? 'bg-primary-50/50 border-primary-100' :
                                        'bg-white border-slate-200'
                                    }`}>
                                        <MessageSquare size={18} className={`mb-3 ${
                                            item.sentiment === 'positive' ? 'text-primary-500' : 'text-slate-400'
                                        }`} />
                                        <p className="text-slate-700 italic leading-relaxed mb-3">"{item.quote}"</p>
                                        <p className="text-sm text-slate-500">— {item.source}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* ── Why Users Are Switching ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">The Switch</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">Why Users Are Moving to Dooza</h2>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid md:grid-cols-2 gap-6">
                            {switchReasons.map((item, i) => (
                                <StaggerItem key={i}>
                                    <div className="card-shadow bg-white rounded-2xl border border-slate-100 p-8 h-full">
                                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                                            <span className="text-primary-600 font-bold text-sm">{i + 1}</span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">Frequently Asked Questions</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">Got Questions?</h2>
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
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Ready to Switch?</h2>
                            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                                Book a free 20-minute call with the founder. No sales pitch — we will walk through your needs and show you exactly what Dooza would handle.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="sintra_cta">Try Dooza Free</SignupButton>
                                <BookDemoButton source="sintra_cta" />
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
                            <Link href="/blog/better-than-motion" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Dooza vs Motion →
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
