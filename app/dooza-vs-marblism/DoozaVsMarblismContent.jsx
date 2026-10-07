'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
    CheckCircle2, XCircle, ArrowRight, Calendar, Clock,
    Sparkles, MessageSquare, TrendingUp, Users, Zap, Shield, Puzzle
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
    { feature: 'Price', dooza: 'Refundable pilot (see /pricing)', competitor: '$24/mo billed yearly or $44/mo billed monthly', doozaWins: false },
    { feature: 'Team Members', dooza: 'Scoped on your pilot call', competitor: 'Unlimited team members and businesses', doozaWins: false },
    { feature: 'AI Employees', dooza: 'Maily, Somi, Ranky, Stan, Linda, Rachel + custom agents via Dooza Agents', competitor: '7 AI employees (Eva, Sonny, Stan, Penny, Rachel, Walter, Linda)', doozaWins: false },
    { feature: 'Included Work', dooza: 'Scoped on your pilot call', competitor: '50 hours of work per plan', doozaWins: false },
    { feature: 'Setup', dooza: 'Done for you: a Dooza engineer scopes your pilot on a free 30-min call, then builds and tunes it with you', competitor: 'Self-serve (you set it up and manage it)', doozaWins: true },
    { feature: 'Custom Agents', dooza: 'Built and maintained by Dooza engineers (Dooza Agents)', competitor: 'Fixed roster of 7 AI employees', doozaWins: true },
    { feature: 'Integrations', dooza: '1,000+ app integrations', competitor: 'See marblism.com for supported tools', doozaWins: true },
    { feature: 'Try Before Committing', dooza: 'Refundable pilot — 100% refund within 14 days', competitor: '7-day money-back guarantee (no free trial mentioned on its pricing page)', doozaWins: true },
    { feature: 'Best For', dooza: 'Owners who want it done for them', competitor: 'Lowest-cost self-serve option', doozaWins: false },
];

const doozaAdvantages = [
    { icon: Users, title: 'Done For You', desc: 'You do not set it up alone. A Dooza engineer builds and tunes your AI employees with you, with your approval on anything sensitive.' },
    { icon: Zap, title: 'A Real Engineer', desc: 'A Dooza engineer scopes your pilot on a free 30-minute call and configures your AI employees with you. Not a chatbot — a real person.' },
    { icon: Puzzle, title: '1,000+ App Integrations', desc: 'Gmail, Slack, LinkedIn, Shopify, Notion, YouTube and more, connected for you during setup.' },
    { icon: Shield, title: 'Refundable Pilot', desc: 'Every Dooza product starts with a refundable pilot. If it is not right for you, ask within 14 days for a 100% refund.' },
];

export default function DoozaVsMarblismContent({ faqData }) {
    const [jsLoaded, setJsLoaded] = useState(false);

    useEffect(() => {
        setJsLoaded(true);
        trackFBViewContent('dooza_vs_marblism', 'comparison_page');
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
                                Dooza vs <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent animate-gradient">Marblism</span>
                            </h1>

                            <p className="hero-entrance hero-delay-3 text-xl sm:text-2xl text-slate-500 font-serif italic mb-4">
                                Two AI employee platforms. Very different experiences.
                            </p>

                            <p className="hero-entrance hero-delay-3 text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                                Dooza is done for you: a Dooza engineer scopes your pilot on a free 30-minute call, then builds and tunes your AI employees with you, with a 100% refund within 14 days. Marblism is self-serve: 7 AI employees from $24/mo billed yearly. Here is the full breakdown.
                            </p>

                            <div className="hero-entrance hero-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="marblism_hero">Start your pilot</SignupButton>
                                <BookDemoButton source="marblism_hero">Book a free pilot call</BookDemoButton>
                            </div>
                        </div>
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
                                    Marblism costs <strong>$24/month billed yearly or $44/month billed monthly</strong>, with all 7 AI employees, 50 hours of work, and unlimited team members. It is self-serve: you set up and manage the AI employees yourself. If you want the lowest-cost self-serve option, Marblism is the better pick.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Dooza is <strong>done for you</strong>: a Dooza engineer scopes your <strong>refundable pilot</strong> (100% refund within 14 days) on a free 30-minute call, builds and tunes your AI employees or custom agents with you, and connects them to <strong>1,000+ apps</strong>. If you do not have time to set up and tune AI employees yourself, Dooza fits better.
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
                                                <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[32.5%]">Marblism</th>
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
                                Marblism pricing checked October 7, 2026 on <a href="https://www.marblism.com/pricing" target="_blank" rel="noopener noreferrer" className="underline">marblism.com/pricing</a>.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Pricing ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-primary-900 overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

                    <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Pricing Breakdown</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">Marblism Pricing (Checked October 7, 2026)</h2>
                                <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
                                    Marblism plans start at $24/month billed yearly, or $44/month billed monthly. Every plan includes all 7 AI employees, 50 hours of work, unlimited team members, and unlimited businesses. Its pricing page does not mention a free trial but offers a 7-day money-back guarantee. Source: <a href="https://www.marblism.com/pricing" target="_blank" rel="noopener noreferrer" className="underline text-primary-300">marblism.com/pricing</a>.
                                </p>
                                <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
                                    For a self-serve user, Marblism is the cheaper option. Dooza fits when you want it done for you: a Dooza engineer scopes your pilot on a free 30-minute call, builds and tunes your AI employees or custom agents with you, and every product starts with a refundable pilot (100% refund within 14 days). Dooza pricing depends on the product; see <Link href="/pricing" className="underline text-primary-300">/pricing</Link>.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="grid md:grid-cols-2 gap-6 mt-12">
                                <div className="bg-primary-500/10 backdrop-blur-sm border border-primary-400/20 rounded-2xl p-8">
                                    <p className="text-primary-300 font-bold text-sm uppercase tracking-wider mb-2">Dooza</p>
                                    <div className="text-3xl font-bold text-white mb-1">Refundable pilot</div>
                                    <p className="text-sm text-slate-400 mb-5">Done for you. 100% refund within 14 days. Pricing depends on the product — <Link href="/pricing" className="underline text-primary-300">see /pricing</Link>.</p>
                                    <ul className="space-y-2.5 text-sm">
                                        {['AI employees with one job each', 'Custom agents via Dooza Agents', 'Built and tuned with you by a Dooza engineer', '1,000+ app integrations', 'Free 30-minute call to scope your pilot', '100% refund within 14 days'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2.5 text-slate-300">
                                                <CheckCircle2 size={16} className="text-primary-400 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                                    <p className="text-slate-400 font-bold text-sm uppercase tracking-wider mb-2">Marblism</p>
                                    <div className="text-4xl font-bold text-white mb-1">$24<span className="text-base font-normal text-slate-400">/month</span></div>
                                    <p className="text-sm text-slate-500 mb-5">Billed yearly ($44/month billed monthly). Checked October 7, 2026.</p>
                                    <ul className="space-y-2.5 text-sm">
                                        {[
                                            { text: 'All 7 AI employees', neg: false },
                                            { text: '50 hours of work', neg: false },
                                            { text: 'Unlimited team members', neg: false },
                                            { text: 'Unlimited businesses', neg: false },
                                            { text: 'Self-serve setup (you set it up yourself)', neg: true },
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
                                <SignupButton source="marblism_cta">Start your pilot</SignupButton>
                                <BookDemoButton source="marblism_cta">Book a free pilot call</BookDemoButton>
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
                            <Link href="/blog/better-than-motion" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Dooza vs Motion →
                            </Link>
                            <Link href="/marblism-alternatives" className="text-sm text-primary-600 hover:text-primary-700 bg-primary-50 border border-primary-100 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                                Marblism Alternatives →
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
