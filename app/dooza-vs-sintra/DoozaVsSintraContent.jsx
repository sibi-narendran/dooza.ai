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
    { feature: 'Price', dooza: 'Refundable pilot (see /pricing)', competitor: '$48.50/mo (discounted from $97); $15.60/mo on a 12-month commitment (checked October 7, 2026)', doozaWins: false },
    { feature: 'Task / Usage Limits', dooza: 'No credits', competitor: '250 credits per month, plus paid top-ups', doozaWins: true },
    { feature: 'Number of AI Agents', dooza: 'Maily, Somi, Ranky, Stan, Linda, Rachel', competitor: '12+ helpers that call on each other automatically', doozaWins: false },
    { feature: 'Onboarding', dooza: 'Dooza engineer scopes your pilot on a free 30-min call', competitor: 'Call with a Sintra specialist, plus two weeks of hands-on help', doozaWins: false },
    { feature: 'Who Builds It', dooza: 'Dooza engineers build and tune your AI employees or custom agents with you', competitor: 'You run it yourself in the app (Sintra: "Zero technical setup. Simply chat and ask.")', doozaWins: true },
    { feature: 'Custom Agents', dooza: 'Custom agents built and maintained by Dooza engineers', competitor: 'Helper Builder: create your own custom helper', doozaWins: false },
    { feature: 'Integrations', dooza: '1,000+ app integrations', competitor: '15+ direct integrations', doozaWins: false },
    { feature: 'Refund Window', dooza: 'Refundable pilot — 100% refund within 14 days', competitor: '14-day money-back guarantee', doozaWins: false },
    { feature: 'Brand Personalization', dooza: 'Auto-extracted from your site', competitor: 'Brain AI knowledge base shared by all helpers', doozaWins: false },
];

const doozaAdvantages = [
    { icon: Infinity, title: 'Done for You', desc: 'Sintra is a self-serve app you run yourself. Dooza engineers build and tune your AI employees, and build and maintain custom agents, so you are not configuring it alone.' },
    { icon: Zap, title: 'A Real Engineer', desc: 'A Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes AI employees or custom agents with you. Not a chatbot — a real person.' },
    { icon: Shield, title: 'No Credits, No Per-Seat Fees', desc: 'No "original price" vs "discounted" confusion and no credit meter. Pricing depends on the product — see /pricing.' },
    { icon: Puzzle, title: 'Refundable Pilot', desc: 'Every Dooza product starts with a refundable pilot. If it is not right for you, ask within 14 days for a 100% refund.' },
];

// Quoted from Sintra's own pages, checked October 7, 2026.
const userQuotes = [
    { quote: 'AI employee collaboration: They call on each other automatically… AI employees will divide the work themselves.', source: 'help.sintra.ai — Sintra AI employees explained', sentiment: 'positive' },
    { quote: 'Hop on a call with one of our specialists… your specialist stays your direct contact for two weeks of hands-on help.', source: 'sintra.ai/book-a-demo', sentiment: 'positive' },
    { quote: 'Every plan starts with 250 monthly credits that reset each month.', source: 'sintra.ai/pricing', sentiment: 'negative' },
    { quote: 'If a workspace runs out of credits, AI employees will stop working.', source: 'help.sintra.ai — Workspace credits', sentiment: 'negative' },
    { quote: 'The Helper Builder lets you create your own custom Helper beyond the 12 pre-built ones.', source: 'help.sintra.ai — Helper Builder', sentiment: 'positive' },
    { quote: 'A knowledge base that all our AI Helpers can access.', source: 'sintra.ai/features/brain-ai', sentiment: 'positive' },
];

const switchReasons = [
    { title: 'You do not want to ration credits', desc: 'Sintra includes 250 credits a month on every plan; when they run out, helpers stop until you buy a top-up or the month resets. Dooza has no credit meter.' },
    { title: 'You want it built for you', desc: 'Sintra gives you a specialist call and two weeks of hands-on help, then you run the helpers yourself. A Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes AI employees or custom agents with you.' },
    { title: 'Sintra is the better pick on price', desc: 'If you are happy to run the AI yourself, Sintra is hard to beat: $15.60/mo on a 12-month plan ($187.20 up front), with 12+ helpers that work together (checked October 7, 2026).' },
    { title: 'The refundable pilot removes the risk', desc: 'Every Dooza product starts with a refundable pilot — 100% refund within 14 days — and a Dooza engineer scopes it with you on a free 30-minute call.' },
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
                                    Comparison — Updated October 7, 2026
                                </div>
                            </div>

                            <h1 className="hero-entrance hero-delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Dooza vs <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent animate-gradient">Sintra AI</span>
                            </h1>

                            <p className="hero-entrance hero-delay-3 text-xl sm:text-2xl text-slate-500 font-serif italic mb-4">
                                A done-for-you alternative to Sintra AI.
                            </p>

                            <p className="hero-entrance hero-delay-3 text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                                Looking for a Sintra AI alternative? Sintra AI is a low-cost self-serve app with 12+ helpers and 250 credits a month on every plan. Dooza is done for you: a Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes AI employees or custom agents with you, with no credit meter and a refundable pilot — 100% refund within 14 days. Here is the full breakdown.
                            </p>

                            <div className="hero-entrance hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="sintra_hero">Start your pilot</SignupButton>
                                <BookDemoButton source="sintra_hero">Book a free pilot call</BookDemoButton>
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
                                    Sintra AI offers more helpers (12+) that call on each other automatically, a specialist call with two weeks of hands-on help, and a low price if you pay for a year up front. Every plan includes <strong>250 credits per month</strong>; once they run out, you buy top-ups or wait. After onboarding, <strong>you run the helpers yourself</strong>.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Dooza is <strong>done for you</strong>: a <strong>free 30-minute call with a Dooza engineer</strong> to scope your pilot, then the engineer builds and tunes AI employees or custom agents with you. <strong>No credits</strong>, and a <strong>refundable pilot</strong> — 100% refund within 14 days. If you only want the cheapest self-serve app, Sintra is the better pick.
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
                                Sintra pricing and features checked October 7, 2026 on sintra.ai and help.sintra.ai. Sintra AI pricing reflects their displayed discounted rates.
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
                                    Sintra lists $97/mo crossed out with a "50% discount" to $48.50 (checked October 7, 2026). Every plan includes 250 credits a month, with paid top-ups.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-primary-500/10 backdrop-blur-sm border border-primary-400/20 rounded-2xl p-8">
                                    <p className="text-primary-300 font-bold text-sm uppercase tracking-wider mb-2">Dooza</p>
                                    <div className="text-3xl font-bold text-white mb-1">Refundable pilot</div>
                                    <p className="text-sm text-slate-400 mb-5">100% refund within 14 days. Pricing depends on the product — <Link href="/pricing" className="underline text-primary-300">see /pricing</Link>.</p>
                                    <ul className="space-y-2.5 text-sm">
                                        {['AI employees with one job each', 'No credits', 'No per-seat fees', '1,000+ app integrations', 'Free 30-minute call to scope your pilot', '100% refund within 14 days'].map((item, i) => (
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
                                            { text: '250 credits/month (top-ups extra)', neg: true },
                                            { text: '15+ integrations', neg: false },
                                            { text: 'Specialist call + 2 weeks of hands-on help', neg: false },
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
                                <p className="section-label mb-3">In Sintra&apos;s Words</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">What Sintra AI Says About Itself</h2>
                                <p className="text-lg text-slate-500 mt-4">Quoted from sintra.ai and help.sintra.ai, checked October 7, 2026.</p>
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
                                <p className="section-label mb-3">The Fit</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">When Dooza Fits Better (and When Sintra Does)</h2>
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
                                Book a free 30-minute call with a Dooza engineer to scope your refundable pilot. No sales pitch — we will walk through your needs and show you exactly what Dooza would handle.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="sintra_cta">Start your pilot</SignupButton>
                                <BookDemoButton source="sintra_cta">Book a free pilot call</BookDemoButton>
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
                            <Link href="/marblism-alternatives" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Marblism Alternatives →
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
