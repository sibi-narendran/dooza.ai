'use client';

import { useState } from 'react';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import {
    Home,
    Clock,
    Users,
    Moon,
    CheckCircle2,
    Zap,
    Repeat,
    TrendingUp,
    ChevronDown,
    ArrowRight,
} from 'lucide-react';

export default function RealEstateContent({ page }) {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
            if (e) e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    const problems = [
        {
            icon: Clock,
            title: 'Leads go cold in 5 minutes',
            description:
                'The average online inquiry expects a reply in under 5 minutes. After that, your odds of connecting drop by 80%.',
        },
        {
            icon: Users,
            title: 'Juggling 50+ leads manually',
            description:
                'Spreadsheets, sticky notes, and CRM reminders — things slip through the cracks when you scale.',
        },
        {
            icon: Moon,
            title: 'Nights & weekends = peak inquiry time',
            description:
                'Buyers browse Zillow at 10 PM. If nobody answers until Monday, that lead is gone.',
        },
    ];

    const solutions = [
        'Instant lead response in under 60 seconds',
        'Qualification questions — budget, timeline, location',
        'Property matching based on criteria',
        'Appointment scheduling for showings',
        'Automated drip follow-up sequences',
    ];

    const benefits = [
        {
            icon: Zap,
            title: 'Respond in under 60 seconds',
            description:
                'Every inquiry gets an instant, personalized reply — day or night. No lead left waiting.',
        },
        {
            icon: Clock,
            title: 'Nurture leads 24/7',
            description:
                'Automated follow-ups keep prospects warm until they are ready to tour or make an offer.',
        },
        {
            icon: Repeat,
            title: 'Never forget a follow-up',
            description:
                'Drip sequences, anniversary check-ins, and re-engagement campaigns run on autopilot.',
        },
        {
            icon: TrendingUp,
            title: 'Close more deals',
            description:
                'Agents using AI follow-up report 2-3x more closings from the same lead volume.',
        },
    ];

    const steps = [
        {
            number: '1',
            title: 'Connect your CRM',
            description:
                'Link your existing CRM or lead source — Zillow, Realtor.com, your website, or any other platform.',
        },
        {
            number: '2',
            title: 'Set qualification criteria',
            description:
                'Tell the AI what to ask: budget range, location preferences, timeline, property type, and pre-approval status.',
        },
        {
            number: '3',
            title: 'Go live — leads get instant response',
            description:
                'Flip the switch. Every new lead gets a reply in under 60 seconds, qualified and routed to your calendar.',
        },
    ];

    const pricingPlans = [
        {
            name: 'In-house ISA',
            price: '$4,000+',
            period: '/mo',
            description: 'Full-time inside sales agent',
            features: [
                'Works 40 hrs/week',
                'Needs training & management',
                'PTO, sick days, turnover risk',
                'Handles ~20 leads/day',
            ],
            tint: 'red',
            highlight: false,
        },
        {
            name: 'Virtual assistant',
            price: '$1,500',
            period: '/mo',
            description: 'Outsourced lead handler',
            features: [
                'Limited hours coverage',
                'Variable quality',
                'Language barriers possible',
                'Handles ~30 leads/day',
            ],
            tint: 'amber',
            highlight: false,
        },
        {
            name: 'Dooza AI',
            price: '$29',
            period: '/mo',
            description: 'AI sales agent that never sleeps',
            features: [
                'Works 24/7/365',
                'Zero training required',
                'Unlimited parallel conversations',
                'Responds in under 60 seconds',
            ],
            tint: 'green',
            highlight: true,
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar />

            {/* ── Hero ── */}
            <section className="relative bg-gradient-to-b from-blue-50 via-white to-primary-50 pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs
                        items={[
                            { label: 'Industries', href: '/industries' },
                            { label: 'Real Estate' },
                        ]}
                    />

                    {/* Badge */}
                    <div className="flex justify-center mb-6">
                        <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-sm font-semibold px-4 py-1.5 rounded-full border border-primary-100">
                            <Home className="w-4 h-4" />
                            AI for Real Estate
                        </span>
                    </div>

                    {/* Hook line */}
                    <p className="text-center text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-4">
                        78% of deals go to the agent who responds first. Are you first?
                    </p>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 text-center tracking-tight leading-tight mb-6">
                        AI Sales Agent for Real Estate:{' '}
                        <span className="text-primary-600">Follow Up on Every Lead, 24/7</span>
                    </h1>

                    {/* Subtitle / meta description */}
                    <p className="text-center text-slate-600 text-lg md:text-xl max-w-3xl mx-auto mb-10">
                        {page.metaDescription}
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href={getProductSignupUrl('workforce')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1"
                        >
                            Get Started Free — $29/mo
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href={CAL_BOOKING_URL}
                            onClick={handleAction}
                            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                        >
                            Book a Demo
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Problem ── */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center tracking-tight mb-4">
                        The leads are there. The follow-up isn&apos;t.
                    </h2>
                    <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto mb-12">
                        Most real estate teams lose deals not because of bad marketing — but because of slow response times.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {problems.map((problem, i) => (
                            <div
                                key={i}
                                className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="w-14 h-14 mx-auto mb-5 bg-red-50 rounded-xl flex items-center justify-center">
                                    <problem.icon className="w-7 h-7 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {problem.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {problem.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Solution ── */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center tracking-tight mb-4">
                        What Dooza does for your real estate business
                    </h2>
                    <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto mb-12">
                        An AI sales agent that handles the top of your funnel so you can focus on closings.
                    </p>

                    <div className="max-w-2xl mx-auto space-y-5">
                        {solutions.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-4 bg-white border border-slate-200 rounded-xl p-5"
                            >
                                <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700 text-lg font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Benefits ── */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center tracking-tight mb-4">
                        Why top-producing agents choose Dooza
                    </h2>
                    <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto mb-12">
                        Speed, consistency, and scale — without adding headcount.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, i) => (
                            <div
                                key={i}
                                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 mb-5 bg-primary-50 rounded-xl flex items-center justify-center">
                                    <benefit.icon className="w-6 h-6 text-primary-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── How It Works ── */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center tracking-tight mb-4">
                        Live in 3 simple steps
                    </h2>
                    <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto mb-12">
                        No code. No consultants. Just connect and go.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="relative text-center">
                                <div className="w-16 h-16 mx-auto mb-5 bg-primary-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-primary-500/20">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Pricing Comparison ── */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center tracking-tight mb-4">
                        How Dooza compares
                    </h2>
                    <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto mb-12">
                        The same job. A fraction of the cost. Better results.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, i) => {
                            const tintMap = {
                                red: {
                                    border: 'border-red-200',
                                    bg: 'bg-red-50',
                                    price: 'text-red-600',
                                    badge: 'bg-red-100 text-red-700',
                                },
                                amber: {
                                    border: 'border-amber-200',
                                    bg: 'bg-amber-50',
                                    price: 'text-amber-600',
                                    badge: 'bg-amber-100 text-amber-700',
                                },
                                green: {
                                    border: 'border-primary-200',
                                    bg: 'bg-primary-50',
                                    price: 'text-primary-600',
                                    badge: 'bg-primary-100 text-primary-700',
                                },
                            };
                            const t = tintMap[plan.tint];

                            return (
                                <div
                                    key={i}
                                    className={`relative rounded-2xl border-2 p-8 ${t.border} ${
                                        plan.highlight
                                            ? 'ring-2 ring-primary-600 shadow-xl scale-[1.02]'
                                            : ''
                                    }`}
                                >
                                    {plan.highlight && (
                                        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                                            Best Value
                                        </span>
                                    )}
                                    <div className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${t.badge}`}>
                                        {plan.name}
                                    </div>
                                    <div className="mb-1">
                                        <span className={`text-4xl font-bold ${t.price}`}>
                                            {plan.price}
                                        </span>
                                        <span className="text-slate-500 text-lg">{plan.period}</span>
                                    </div>
                                    <p className="text-slate-600 text-sm mb-6">{plan.description}</p>
                                    <ul className="space-y-3">
                                        {plan.features.map((feat, j) => (
                                            <li key={j} className="flex items-start gap-2 text-slate-700">
                                                <CheckCircle2
                                                    className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                                        plan.highlight ? 'text-primary-600' : 'text-slate-400'
                                                    }`}
                                                />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
                        Stop losing leads. Start closing more deals.
                    </h2>
                    <p className="text-slate-600 text-lg mb-8 max-w-xl mx-auto">
                        Set up takes 30 minutes. Your first qualified lead could come tonight.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href={getProductSignupUrl('workforce')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1"
                        >
                            Get Started Free — $29/mo
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href={CAL_BOOKING_URL}
                            onClick={handleAction}
                            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                        >
                            Book a Demo
                        </a>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            {page.faqData && page.faqData.length > 0 && (
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center tracking-tight mb-4">
                            Frequently asked questions
                        </h2>
                        <p className="text-center text-slate-600 text-lg max-w-xl mx-auto mb-12">
                            Everything you need to know about Dooza for real estate.
                        </p>

                        <div className="space-y-4">
                            {page.faqData.map((faq, i) => (
                                <div
                                    key={i}
                                    className="border border-slate-200 rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="text-slate-900 font-semibold text-lg">
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                                                openFaq === i ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>
                                    {openFaq === i && (
                                        <div className="px-5 pb-5 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Bottom CTA + Footer ── */}
            <BottomCTA openModal={handleAction} />
            <Footer />

            {/* ── Booking Modal ── */}
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
            />
        </div>
    );
}
