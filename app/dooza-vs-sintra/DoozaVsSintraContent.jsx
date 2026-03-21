'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    CheckCircle2, XCircle, ArrowRight, ChevronDown, Calendar, Clock,
    Sparkles, Users, Star, MessageSquare, TrendingUp
} from 'lucide-react';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../lib/links';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BookingModal from '../../components/BookingModal';

export default function DoozaVsSintraContent({ faqData }) {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleBookDemo = (e) => {
        if (e) e.preventDefault();
        setIsBookingModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar />

            {/* ── Hero — editorial style ── */}
            <section className="bg-gradient-to-b from-primary-50 via-white to-white pt-28 pb-12 lg:pt-36 lg:pb-16 border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-6">
                        <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/alternatives" className="hover:text-primary-600 transition-colors">Alternatives</Link>
                        <span>/</span>
                        <span className="text-slate-700">Dooza vs Sintra AI</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-100">
                        <Sparkles size={14} />
                        <span>Comparison — Updated March 2026</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Dooza vs Sintra AI: Which AI Employee Platform Actually Delivers?
                    </h1>

                    <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-3xl">
                        Both platforms promise a team of AI employees that handle your business operations. But after digging into real user reviews, pricing structures, and feature sets — the differences are hard to ignore. Here is what we found.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>12 min read</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>March 21, 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Quick Verdict ── */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
                        <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <TrendingUp size={20} className="text-primary-600" />
                            Quick Verdict
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            Sintra AI offers more AI helpers (12+), but caps every plan at <strong>250 credits per month</strong>. Once those credits run out, you pay for top-ups or wait until next month. Helpers also <strong>cannot share context</strong> with each other — you copy-paste between them manually.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Dooza takes the opposite approach: 7 purpose-built agents, <strong>unlimited tasks</strong>, a <strong>personal setup call with the founder</strong>, and a <strong>flat $29/month</strong> with no credit meters. It also offers a free tier (10 prompts/month) so you can try before committing.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── What is Sintra AI ── */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">What is Sintra AI?</h2>
                    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                        <p>
                            <a href="https://sintra.ai" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Sintra AI</a> is an AI employee platform offering 12+ specialized helpers — covering social media, email marketing, copywriting, SEO, data analysis, eCommerce, recruiting, and more. They also offer "Brain AI," a shared knowledge base that stores your brand voice and business details.
                        </p>
                        <p>
                            The platform launched with a strong content marketing push and has built a presence in the solopreneur and small business space. Their pricing uses heavy "original vs discounted" framing — $97/month marked down to $48.50 on the monthly plan.
                        </p>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Sintra AI's 12+ Helpers</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            'Soshie — Social Media', 'Cassie — Customer Support', 'Dexter — Data Analyst',
                            'Buddy — Business Dev', 'Emmie — Email Marketing', 'Gigi — Personal Coach',
                            'Penn — Copywriter', 'Scouty — Recruiter', 'Seomi — SEO',
                            'Commet — eCommerce', 'Milli — Sales', 'Vizzy — Virtual Assistant',
                        ].map((helper, i) => (
                            <div key={i} className="text-sm text-slate-600 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                                {helper}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── What Users Are Saying ── */}
            <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">What Users Are Saying About Sintra AI</h2>
                    <p className="text-slate-600 mb-8">
                        Based on reviews from CyberNews, Efficient App, Salesforge, CoolTechZone, and independent user blogs — here are the recurring themes.
                    </p>

                    <div className="space-y-4">
                        {[
                            {
                                quote: 'The idea generation is decent, but the actual work output is not usable without significant editing.',
                                source: 'CyberNews Review',
                                sentiment: 'negative',
                            },
                            {
                                quote: 'You are given a LOGIN and left to figure it out. There is no onboarding support or human guidance.',
                                source: 'Independent Reviewer',
                                sentiment: 'negative',
                            },
                            {
                                quote: 'The 250 credit limit runs out fast if you are using multiple helpers. Then you are stuck waiting or paying for top-ups.',
                                source: 'Salesforge Analysis',
                                sentiment: 'negative',
                            },
                            {
                                quote: 'Helpers do NOT share context. If I need data from Dexter passed to Emmie, I have to copy and paste it myself.',
                                source: 'User Review — Efficient App',
                                sentiment: 'negative',
                            },
                            {
                                quote: 'Brain AI is a good concept — storing brand voice and business details makes the outputs more relevant.',
                                source: 'CoolTechZone Review',
                                sentiment: 'positive',
                            },
                        ].map((item, i) => (
                            <div key={i} className={`border rounded-xl p-5 ${item.sentiment === 'positive' ? 'bg-primary-50/50 border-primary-100' : 'bg-white border-slate-200'}`}>
                                <div className="flex items-start gap-3">
                                    <MessageSquare size={18} className={`shrink-0 mt-1 ${item.sentiment === 'positive' ? 'text-primary-500' : 'text-slate-400'}`} />
                                    <div>
                                        <p className="text-slate-700 italic leading-relaxed">"{item.quote}"</p>
                                        <p className="text-sm text-slate-500 mt-2">— {item.source}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Where Dooza Differs ── */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Where Dooza Takes a Different Approach</h2>
                    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                        <p>
                            Dooza does not try to offer the most agents. Instead, it focuses on 7 specialized AI employees — covering email (Maily), social media (Somi), LinkedIn (Linky), Twitter/X (Tweety), YouTube (Utumy), SEO (Ranky), and legal documents (Lex) — with <strong>no usage limits</strong> and a fundamentally different onboarding experience.
                        </p>
                        <p>
                            The biggest differentiator is the <strong>personal setup call</strong>. When you sign up for Dooza, you can book a free 20-minute call with the founder, who walks you through the setup and configures everything together with you. This is the opposite of Sintra's self-serve model.
                        </p>
                        <p>
                            Dooza connects to <strong>17 integrations</strong> directly — including Gmail, Google Calendar, Slack, LinkedIn, Twitter/X, Facebook, Instagram, YouTube, Shopify, Notion, and more via Composio. Sintra AI offers around 15 integrations as well, so the integration story is comparable.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Detailed Comparison Table ── */}
            <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Full Feature Comparison</h2>

                    <div className="overflow-x-auto -mx-4 px-4">
                        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white min-w-[640px]">
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr className="bg-slate-50">
                                        <th className="p-4 md:p-5 border-b font-bold text-slate-900 w-[35%]">Feature</th>
                                        <th className="p-4 md:p-5 border-b font-bold text-primary-700 bg-primary-50/50 w-[32.5%]">Dooza</th>
                                        <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[32.5%]">Sintra AI</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-slate-600">
                                    {[
                                        { feature: 'Monthly Price', dooza: '$29/mo flat', sintra: '$48.50/mo (discounted from $97)', doozaWins: true },
                                        { feature: 'Annual Price', dooza: '$29/mo — no lock-in required', sintra: '$15.60/mo — 12-month commitment', doozaWins: false },
                                        { feature: 'Task / Usage Limits', dooza: 'Unlimited', sintra: '250 credits per month', doozaWins: true },
                                        { feature: 'Number of AI Agents', dooza: '7 specialized employees', sintra: '12+ helpers', doozaWins: false },
                                        { feature: 'Onboarding Experience', dooza: 'Personal setup call with founder', sintra: 'Self-serve — login and configure yourself', doozaWins: true },
                                        { feature: 'Integrations', dooza: '17 direct (Gmail, Slack, LinkedIn, Shopify, etc.)', sintra: '15+ direct integrations', doozaWins: false },
                                        { feature: 'Setup Time', dooza: '~20 minutes (guided by founder)', sintra: 'Hours to days (DIY)', doozaWins: true },
                                        { feature: 'Money-Back Guarantee', dooza: '7 days', sintra: '14 days', doozaWins: false },
                                        { feature: 'Brand Personalization', dooza: 'Auto-extracted from your website', sintra: 'Brain AI knowledge base', doozaWins: false },
                                        { feature: 'Free Tier', dooza: '10 prompts/month free', sintra: 'No free tier', doozaWins: true },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-slate-100 last:border-0">
                                            <td className="p-4 md:p-5 font-medium text-slate-900">{row.feature}</td>
                                            <td className={`p-4 md:p-5 ${row.doozaWins ? 'bg-primary-50/30 text-primary-800 font-medium' : ''}`}>
                                                {row.dooza}
                                            </td>
                                            <td className={`p-4 md:p-5 ${!row.doozaWins && row.dooza !== row.sintra ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>
                                                {row.sintra}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="text-sm text-slate-500 mt-4 italic">
                        Pricing and features as of March 2026. Sintra AI pricing reflects their displayed discounted rates.
                    </p>
                </div>
            </section>

            {/* ── Pricing Breakdown ── */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Pricing: What You Actually Pay</h2>

                    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 mb-10">
                        <p>
                            Sintra AI lists their 1-month plan at $97/month, then shows it crossed out with a "50% discount" bringing it to $48.50. The 3-month plan is $59 → $23.60/month, and the 12-month plan is $52 → $15.60/month. Every plan includes 250 monthly credits.
                        </p>
                        <p>
                            The credit system is the critical detail. Credits are consumed by AI actions — and 250 doesn't last long if you're using multiple helpers daily. When credits run out, you either wait or pay for top-ups.
                        </p>
                        <p>
                            Dooza uses a flat $29/month model. No credits, no tiers, no annual lock-in discounts. All 7 AI employees, unlimited tasks, 17 integrations, and a personal setup call are included. There is also a free tier with 10 prompts per month to try the platform before paying.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border-2 border-primary-200 bg-primary-50/30 rounded-2xl p-6">
                            <p className="text-primary-700 font-bold text-sm uppercase tracking-wider mb-2">Dooza</p>
                            <div className="text-4xl font-bold text-slate-900 mb-1">$29<span className="text-base font-normal text-slate-500">/month</span></div>
                            <p className="text-sm text-slate-500 mb-5">No contracts. Cancel anytime.</p>
                            <ul className="space-y-2.5 text-sm">
                                {['All 7 AI employees', 'Unlimited tasks', '17 direct integrations', 'Personal setup call with founder', 'Free tier (10 prompts/mo)', '7-day money-back guarantee'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2.5 text-slate-700">
                                        <CheckCircle2 size={16} className="text-primary-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="border border-slate-200 bg-slate-50 rounded-2xl p-6">
                            <p className="text-slate-500 font-bold text-sm uppercase tracking-wider mb-2">Sintra AI</p>
                            <div className="text-4xl font-bold text-slate-900 mb-1">$48.50<span className="text-base font-normal text-slate-500">/month</span></div>
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
                                    <li key={i} className="flex items-center gap-2.5 text-slate-600">
                                        {item.neg
                                            ? <XCircle size={16} className="text-red-400 shrink-0" />
                                            : <CheckCircle2 size={16} className="text-slate-400 shrink-0" />
                                        }
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Who Should Choose Which ── */}
            <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Who is Each Platform Best For?</h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white border border-slate-200 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Sintra AI might be a fit if you:</h3>
                            <ul className="space-y-3 text-slate-600 text-sm">
                                {[
                                    'Want the cheapest possible annual rate ($15.60/mo)',
                                    'Need niche roles like recruiting or personal coaching',
                                    'Are comfortable with self-serve setup and configuration',
                                    'Don\'t mind the 250 credit cap for your usage level',
                                    'Prefer a longer 14-day money-back window',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <span className="text-slate-400 mt-0.5">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white border border-primary-200 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Dooza might be a fit if you:</h3>
                            <ul className="space-y-3 text-slate-600 text-sm">
                                {[
                                    'Want a personal setup call instead of figuring it out alone',
                                    'Need unlimited daily usage without counting credits',
                                    'Want to try free before committing (10 prompts/month)',
                                    'Need social media, SEO, and email automation in one platform',
                                    'Prefer a single flat price with no surprises',
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <span className="text-primary-500 mt-0.5">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Why People Are Switching ── */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Why Users Are Switching to Dooza</h2>
                    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                        <p>
                            The most common reasons cited by users who have moved from Sintra AI to Dooza:
                        </p>
                    </div>

                    <div className="mt-6 space-y-4">
                        {[
                            {
                                title: 'The credit cap creates anxiety',
                                desc: 'When every AI action burns a credit, you start rationing usage instead of letting agents work freely. Businesses that switched to Dooza say removing that mental overhead was the single biggest improvement.',
                            },
                            {
                                title: 'Setup took too long without help',
                                desc: 'Sintra\'s self-serve approach means you spend hours configuring agents. With Dooza, the founder walks you through setup in a free 20-minute call — most users are live on the same day.',
                            },
                            {
                                title: 'Copy-pasting between helpers was exhausting',
                                desc: 'Because Sintra helpers don\'t share context, multi-step workflows require manually moving data between agents. This defeats the purpose of having an AI team.',
                            },
                            {
                                title: 'The free tier let them test without risk',
                                desc: 'Dooza offers 10 free prompts per month — enough to evaluate the platform before committing. Sintra has no free tier, only a 14-day money-back guarantee after paying.',
                            },
                        ].map((item, i) => (
                            <div key={i} className="border border-slate-200 rounded-xl p-5 bg-white">
                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>

                    <div className="space-y-3">
                        {faqData.map((item, i) => (
                            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <span className="font-bold text-slate-900 pr-4 text-sm md:text-base">{item.question}</span>
                                    <ChevronDown size={20} className={`text-slate-400 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`faq-content ${openFaq === i ? 'open' : ''}`}>
                                    <div>
                                        <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed">{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA — subtle ── */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-primary-50 to-teal-50 border border-primary-100 rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                            Want to see how Dooza compares for your specific use case?
                        </h2>
                        <p className="text-slate-600 max-w-xl mx-auto mb-8">
                            Book a free 20-minute call with the founder. No sales pitch — we will walk through your needs and show you exactly what Dooza would handle.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-bold transition-all"
                            >
                                Try Dooza Free <ArrowRight size={18} />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleBookDemo}
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-700 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all"
                            >
                                <Calendar size={18} /> Book a Demo
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Related Comparisons ── */}
            <section className="py-12 bg-slate-50 border-t border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="font-bold text-slate-900 mb-4">Related Comparisons</h3>
                    <div className="flex flex-wrap gap-3">
                        <Link href="/dooza-vs-marblism" className="text-sm text-primary-600 hover:text-primary-700 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                            Dooza vs Marblism →
                        </Link>
                        <Link href="/blog/better-than-motion" className="text-sm text-primary-600 hover:text-primary-700 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                            Dooza vs Motion →
                        </Link>
                        <Link href="/alternatives" className="text-sm text-primary-600 hover:text-primary-700 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                            All Comparisons →
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
