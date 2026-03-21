'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    CheckCircle2, XCircle, ArrowRight, ChevronDown, Calendar, Clock,
    Sparkles, MessageSquare, TrendingUp
} from 'lucide-react';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../lib/links';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BookingModal from '../../components/BookingModal';

export default function DoozaVsMarblismContent({ faqData }) {
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
                        <span className="text-slate-700">Dooza vs Marblism</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-100">
                        <Sparkles size={14} />
                        <span>Comparison — Updated March 2026</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Dooza vs Marblism: Two AI Employee Platforms, Very Different Experiences
                    </h1>

                    <p className="text-lg text-slate-600 leading-relaxed mb-6 max-w-3xl">
                        Dooza offers 7 AI employees. Marblism offers 6. Both promise to automate your business operations. But the approach — how you get started, what you pay, and how supported you are — could not be more different. Here is the full breakdown.
                    </p>

                    <div className="flex items-center gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>11 min read</span>
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
                            Marblism and Dooza both offer AI employees for business automation — Marblism has 6, Dooza has 7, with similar roles like email, SEO, and lead generation. The differences are in the details: Marblism charges <strong>$44/month + $29 per additional seat</strong>, offers no human onboarding, and has an <strong>undocumented integration ecosystem</strong>.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            Dooza charges a <strong>flat $29/month</strong> for your whole team (no per-seat fees), offers a <strong>personal setup call with the founder</strong>, and connects to <strong>17 integrations</strong> directly including Gmail, Slack, LinkedIn, and Shopify. It also has a free tier (10 prompts/month). For businesses that want guided setup and flat pricing, the difference is significant.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── What is Marblism ── */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">What is Marblism?</h2>
                    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                        <p>
                            <a href="https://www.marblism.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Marblism</a> started as an AI-powered app code generator — you describe an app, and it generates the codebase. In 2025-2026, the company fully pivoted to offering AI employees for business automation, joining platforms like Sintra AI and Dooza in the space.
                        </p>
                        <p>
                            The pivot means Marblism now offers a team of 6 AI employees: Eva (Executive Assistant), Sonny (Community Manager), Penny (SEO Blog Writer), Rachel (Receptionist), Linda (Legal Assistant), and Stan (Lead Generation). Dooza offers 7: Maily (email), Somi (social media), Linky (LinkedIn), Tweety (Twitter/X), Utumy (YouTube), Ranky (SEO), and Lex (legal documents).
                        </p>
                        <p>
                            Marblism claims 22,200+ customers and a 4.7/5 star rating. They added inter-agent communication in their 2026 update, meaning their agents can now see what other agents are doing.
                        </p>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Marblism's AI Employees</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            'Eva — Executive Assistant', 'Sonny — Community Manager', 'Penny — SEO Blog Writer',
                            'Rachel — Receptionist', 'Linda — Legal Assistant', 'Stan — Lead Generation',
                        ].map((helper, i) => (
                            <div key={i} className="text-sm text-slate-600 bg-slate-50 border border-slate-100 rounded-lg px-3 py-2">
                                {helper}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Platform Origins ── */}
            <section className="py-16 lg:py-20 bg-primary-50/30 border-y border-primary-100/50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Different Starting Points</h2>
                    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                        <p>
                            Dooza was built as a <strong>purpose-built AI employee platform from day one</strong>, with each agent designed around a specific business function — email, social media, SEO, legal, and more.
                        </p>
                        <p>
                            Marblism started as an AI-powered app code generator and <strong>pivoted to AI employees in 2025-2026</strong>. Both platforms now cover similar roles, but the design philosophy and onboarding experience reflect their different origins. What matters most is what each platform actually delivers — which is what the rest of this comparison covers.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── What Users Are Saying ── */}
            <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">What Users Are Saying About Marblism</h2>
                    <p className="text-slate-600 mb-8">
                        Based on reviews from The Tranquil Mind, Zen Aegis, Spruce & Signal, and independent user blogs.
                    </p>

                    <div className="space-y-4">
                        {[
                            {
                                quote: 'The blogs are decent but emails need a lot of workflow to maybe work a little bit fine.',
                                source: 'Zen Aegis — Honest Review',
                                sentiment: 'negative',
                            },
                            {
                                quote: 'Requests for deep integrations like Notion remain unfulfilled. The integration ecosystem is limited.',
                                source: 'The Tranquil Mind Review',
                                sentiment: 'negative',
                            },
                            {
                                quote: 'Each AI employee checks in once daily for approval. It cannot run completely hands-off.',
                                source: 'Spruce & Signal Review',
                                sentiment: 'neutral',
                            },
                            {
                                quote: 'Inter-agent communication is a game changer — agents can now see what other agents are doing.',
                                source: 'The Tranquil Mind — 2026 Update',
                                sentiment: 'positive',
                            },
                            {
                                quote: 'The legacy app builder branding creates confusion. I had to dig to find the AI employees product.',
                                source: 'Independent Reviewer',
                                sentiment: 'negative',
                            },
                        ].map((item, i) => (
                            <div key={i} className={`border rounded-xl p-5 ${
                                item.sentiment === 'positive' ? 'bg-primary-50/50 border-primary-100' :
                                item.sentiment === 'neutral' ? 'bg-amber-50/50 border-amber-100' :
                                'bg-white border-slate-200'
                            }`}>
                                <div className="flex items-start gap-3">
                                    <MessageSquare size={18} className={`shrink-0 mt-1 ${
                                        item.sentiment === 'positive' ? 'text-primary-500' :
                                        item.sentiment === 'neutral' ? 'text-amber-500' :
                                        'text-slate-400'
                                    }`} />
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
                            The most fundamental difference is the onboarding model. Marblism is entirely self-serve — you sign up, you configure, you troubleshoot. Dooza offers a <strong>personal setup call with the founder</strong> — a free 20-minute session where your workspace is configured together. Your brand info is auto-extracted from your website during signup.
                        </p>
                        <p>
                            The second difference is pricing structure. Dooza charges <strong>$29/month flat</strong> with no per-seat fees. Marblism charges $44/month for the first user, then <strong>$29/month for each additional seat</strong>. For a 3-person team, that is $102/month on Marblism versus $29/month on Dooza. Dooza also offers a free tier with 10 prompts/month.
                        </p>
                        <p>
                            Dooza connects to <strong>17 integrations</strong> directly via Composio — including Gmail, Google Calendar, Slack, LinkedIn, Twitter/X, Facebook, Instagram, YouTube, Shopify, Notion, and more. Marblism's integration ecosystem is not well-documented — users report difficulty connecting to common tools.
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
                                        <th className="p-4 md:p-5 border-b font-bold text-slate-600 w-[32.5%]">Marblism</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-slate-600">
                                    {[
                                        { feature: 'Monthly Price', dooza: '$29/mo flat', marblism: '$44/mo + $29/seat', doozaWins: true },
                                        { feature: 'Annual Price', dooza: '$29/mo — no lock-in', marblism: '$24/mo + $14/seat', doozaWins: true },
                                        { feature: 'Per-Seat Fees', dooza: 'None — whole team included', marblism: '$29/seat (monthly)', doozaWins: true },
                                        { feature: 'Number of AI Agents', dooza: '7 specialized employees', marblism: '6 agents', doozaWins: true },
                                        { feature: 'Onboarding Experience', dooza: 'Personal setup call with founder', marblism: 'Self-serve — you configure it', doozaWins: true },
                                        { feature: 'Integrations', dooza: '17 direct (Gmail, Slack, LinkedIn, Shopify, etc.)', marblism: 'Limited / undocumented', doozaWins: true },
                                        { feature: 'Inter-Agent Communication', dooza: 'Not yet available', marblism: 'Yes (2026 update)', doozaWins: false },
                                        { feature: 'Free Tier', dooza: '10 prompts/month free', marblism: 'No free tier', doozaWins: true },
                                        { feature: 'Setup Time', dooza: '~20 minutes (guided by founder)', marblism: 'Hours (you do it yourself)', doozaWins: true },
                                        { feature: 'Brand Personalization', dooza: 'Auto-extracted from your website', marblism: 'Manual configuration', doozaWins: true },
                                        { feature: 'Platform Origin', dooza: 'Built for AI employees from day one', marblism: 'Pivoted from app code generator', doozaWins: true },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-slate-100 last:border-0">
                                            <td className="p-4 md:p-5 font-medium text-slate-900">{row.feature}</td>
                                            <td className={`p-4 md:p-5 ${row.doozaWins ? 'bg-primary-50/30 text-primary-800 font-medium' : ''}`}>
                                                {row.dooza}
                                            </td>
                                            <td className={`p-4 md:p-5 ${!row.doozaWins ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>
                                                {row.marblism}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <p className="text-sm text-slate-500 mt-4 italic">
                        Pricing and features as of March 2026. Marblism pricing from their public pricing page.
                    </p>
                </div>
            </section>

            {/* ── Pricing Deep Dive ── */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Pricing: The Per-Seat Problem</h2>

                    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4 mb-10">
                        <p>
                            Marblism's pricing looks competitive at first glance: $44/month on the monthly plan, $33/month quarterly, or $24/month annually. But every plan charges for additional seats — $29/seat on monthly, $19/seat on quarterly, $14/seat on annual.
                        </p>
                        <p>
                            For a solo user, this is fine. But the moment your team needs access, costs multiply. A 3-person team on the monthly plan pays $44 + $29 + $29 = $102/month. The same team on Dooza pays $29/month total.
                        </p>
                    </div>

                    {/* Cost calculator callout */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10">
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Real Cost by Team Size (Monthly Plans)</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200">
                                        <th className="text-left py-3 pr-4 font-bold text-slate-900">Team Size</th>
                                        <th className="text-left py-3 px-4 font-bold text-primary-700">Dooza</th>
                                        <th className="text-left py-3 px-4 font-bold text-slate-600">Marblism</th>
                                        <th className="text-left py-3 pl-4 font-bold text-slate-600">You Save</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-600">
                                    {[
                                        ['1 person', '$29/mo', '$44/mo', '$15/mo'],
                                        ['2 people', '$29/mo', '$73/mo', '$44/mo'],
                                        ['3 people', '$29/mo', '$102/mo', '$73/mo'],
                                        ['5 people', '$29/mo', '$160/mo', '$131/mo'],
                                    ].map(([team, dooza, marblism, save], i) => (
                                        <tr key={i} className="border-b border-slate-100 last:border-0">
                                            <td className="py-3 pr-4 font-medium text-slate-900">{team}</td>
                                            <td className="py-3 px-4 text-primary-700 font-semibold">{dooza}</td>
                                            <td className="py-3 px-4">{marblism}</td>
                                            <td className="py-3 pl-4 text-primary-600 font-semibold">{save}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border-2 border-primary-200 bg-primary-50/30 rounded-2xl p-6">
                            <p className="text-primary-700 font-bold text-sm uppercase tracking-wider mb-2">Dooza</p>
                            <div className="text-4xl font-bold text-slate-900 mb-1">$29<span className="text-base font-normal text-slate-500">/month</span></div>
                            <p className="text-sm text-slate-500 mb-5">Entire team. No per-seat fees.</p>
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
                            <p className="text-slate-500 font-bold text-sm uppercase tracking-wider mb-2">Marblism</p>
                            <div className="text-4xl font-bold text-slate-900 mb-1">$44<span className="text-base font-normal text-slate-500">/month</span></div>
                            <p className="text-sm text-slate-500 mb-5">Per user. +$29/seat for team members.</p>
                            <ul className="space-y-2.5 text-sm">
                                {[
                                    { text: '6 AI employees', neg: false },
                                    { text: 'Unlimited chat interactions', neg: false },
                                    { text: 'Limited integrations', neg: true },
                                    { text: 'Self-serve setup', neg: true },
                                    { text: '+$29/month per extra seat', neg: true },
                                    { text: '24-48hr support', neg: true },
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
                            <h3 className="text-lg font-bold text-slate-900 mb-4">Marblism might be a fit if you:</h3>
                            <ul className="space-y-3 text-slate-600 text-sm">
                                {[
                                    'Are a solo user on the annual plan ($24/mo is competitive)',
                                    'Want inter-agent communication (their 2026 update)',
                                    'Are comfortable setting up and managing agents yourself',
                                    'Previously used Marblism\'s app builder and want continuity',
                                    'Don\'t need extensive third-party integrations',
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
                                    'Have a team that needs access (no per-seat fees)',
                                    'Want a personal setup call instead of figuring it out alone',
                                    'Need integrations with Gmail, Slack, LinkedIn, Shopify, Notion',
                                    'Want to try free before committing (10 prompts/month)',
                                    'Want a platform purpose-built for AI employees',
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
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">Why Users Are Moving to Dooza</h2>
                    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                        <p>
                            The most common reasons cited by users who switched from Marblism to Dooza:
                        </p>
                    </div>

                    <div className="mt-6 space-y-4">
                        {[
                            {
                                title: 'Per-seat pricing was adding up',
                                desc: 'Solo founders didn\'t feel the pain, but the moment a VA, marketing lead, or co-founder needed access, costs doubled or tripled. Dooza\'s flat rate removed that friction entirely.',
                            },
                            {
                                title: 'Setting up agents without help was frustrating',
                                desc: 'Marblism offers no onboarding call or human support during setup. Users who aren\'t technical spent hours configuring agents. Dooza offers a personal setup call with the founder to get everything configured together.',
                            },
                            {
                                title: 'Integrations were better documented',
                                desc: 'Businesses that rely on Slack, Google Calendar, or Notion found Marblism\'s integration options undocumented. Dooza connects to 17 platforms directly via Composio with clear setup flows.',
                            },
                            {
                                title: 'The free tier removed the risk',
                                desc: 'Dooza offers 10 free prompts per month — enough to evaluate the platform without paying. Marblism has no free tier, only a 7-day money-back guarantee after you commit.',
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
                        <Link href="/dooza-vs-sintra" className="text-sm text-primary-600 hover:text-primary-700 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:border-primary-200 transition-colors">
                            Dooza vs Sintra AI →
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
