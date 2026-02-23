'use client';

import { useState } from 'react';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import {
    PhoneOff,
    CalendarX,
    Moon,
    CheckCircle2,
    Clock,
    Zap,
    CalendarCheck,
    DollarSign,
    ChevronDown,
    ArrowRight,
    Sparkles
} from 'lucide-react';

export default function SalonsContent({ page }) {
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
            icon: PhoneOff,
            title: 'Missed bookings = lost revenue',
            description: 'Every unanswered call is a client who books somewhere else. At $85 average ticket, 5 missed calls a day costs you $12,750/month.'
        },
        {
            icon: CalendarX,
            title: 'Double-bookings = angry clients',
            description: 'Manual scheduling leads to overlaps, frustrated stylists, and awkward apologies that damage your reputation.'
        },
        {
            icon: Moon,
            title: 'After-hours calls = gone forever',
            description: '40% of salon calls come outside business hours. No voicemail box in the world converts like a live answer.'
        }
    ];

    const solutions = [
        'Answers every call, instantly — no hold music, no voicemail',
        'Books appointments by stylist availability and specialty',
        'Confirms and reschedules automatically via SMS',
        'Handles pricing and service FAQs with zero training time',
        'Sends SMS appointment reminders to cut no-shows'
    ];

    const benefits = [
        {
            icon: Clock,
            title: '24/7 Booking',
            description: 'Clients book at midnight, on weekends, and during holidays. You never miss a slot.'
        },
        {
            icon: Zap,
            title: 'No Hold Times',
            description: 'Instant pickup on every call. No "please hold" — ever. Clients love it.'
        },
        {
            icon: CalendarCheck,
            title: 'Fewer No-Shows',
            description: 'Automated SMS reminders reduce no-shows by up to 40%. Your chairs stay full.'
        },
        {
            icon: DollarSign,
            title: 'More Revenue Per Chair',
            description: 'Fill cancellation gaps instantly. Maximize every stylist hour, every single day.'
        }
    ];

    const steps = [
        {
            number: '1',
            title: 'Connect your phone number',
            description: 'Forward your salon line or get a new number. Takes 2 minutes.'
        },
        {
            number: '2',
            title: 'Train on your services & stylists',
            description: 'Add your service menu, stylist schedules, pricing, and policies. AI learns it all.'
        },
        {
            number: '3',
            title: 'Go live in 30 minutes',
            description: 'Start answering calls, booking appointments, and capturing revenue immediately.'
        }
    ];

    const pricing = [
        {
            name: 'Human Receptionist',
            price: '$2,500',
            period: '/mo',
            tint: 'bg-red-50 border-red-200',
            priceColor: 'text-red-600 line-through',
            features: ['Limited to business hours', 'Calls in sick', 'Training overhead', 'Only handles 1 call at a time'],
            crossed: true
        },
        {
            name: 'Answering Service',
            price: '$300',
            period: '/mo',
            tint: 'bg-amber-50 border-amber-200',
            priceColor: 'text-amber-600',
            features: ['Generic scripts', 'No real-time booking', 'Per-minute charges add up', 'No salon-specific knowledge'],
            crossed: false
        },
        {
            name: 'Dooza AI',
            price: '$29',
            period: '/mo',
            tint: 'bg-green-50 border-green-300 ring-2 ring-green-200',
            priceColor: 'text-green-600',
            features: ['24/7 unlimited calls', 'Books by stylist & service', 'SMS reminders included', 'Salon-trained from day one'],
            crossed: false,
            highlight: true
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar />

            {/* ===== HERO ===== */}
            <section className="bg-gradient-to-br from-pink-50 via-white to-primary-50 pt-24 pb-16 md:pt-32 md:pb-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Industries', href: '/industries' },
                        { label: 'Salons' }
                    ]} />

                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI for Salons</span>
                        </div>

                        <p className="text-lg md:text-xl text-slate-500 italic mb-4">
                            Your chairs are full. Your phone is ringing. Nobody&apos;s picking up.
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                            AI Receptionist for Salons:{' '}
                            <span className="text-primary-600">Never Miss a Booking Again</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
                            {page.metaDescription}
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1"
                            >
                                Get Started Free — $29/mo
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleAction}
                                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                            >
                                Book a Demo
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PROBLEM ===== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            The Missed-Call Problem Is Costing You Thousands
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            While your stylists are creating masterpieces, your phone is sending clients to the competition.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {problems.map((problem, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 mb-4">
                                    <problem.icon size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{problem.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{problem.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SOLUTION ===== */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            What Dooza AI Does for Your Salon
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            An AI receptionist built specifically for salons. Not a generic chatbot.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10">
                        <ul className="space-y-5">
                            {solutions.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-0.5 shrink-0" />
                                    <span className="text-lg text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ===== BENEFITS ===== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Why Salons Switch to Dooza
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-4">
                                    <benefit.icon size={28} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HOW IT WORKS ===== */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Live in 30 Minutes. Seriously.
                        </h2>
                        <p className="text-lg text-slate-600">
                            No IT team needed. No complicated setup. Just results.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {steps.map((step, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex items-start gap-6">
                                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                                    {step.number}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h3>
                                    <p className="text-slate-600">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRICING COMPARISON ===== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Stop Overpaying for Phone Coverage
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            See how Dooza compares to traditional options.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {pricing.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`rounded-2xl border p-6 md:p-8 ${plan.tint} ${plan.highlight ? 'relative' : ''}`}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                                        Best Value
                                    </div>
                                )}
                                <h3 className="text-lg font-bold text-slate-900 mb-4">{plan.name}</h3>
                                <div className="mb-6">
                                    <span className={`text-4xl font-bold ${plan.priceColor}`}>{plan.price}</span>
                                    <span className="text-slate-500 text-sm">{plan.period}</span>
                                </div>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, fidx) => (
                                        <li key={fidx} className="flex items-start gap-2 text-sm text-slate-700">
                                            {plan.highlight ? (
                                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                            ) : (
                                                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 shrink-0" />
                                            )}
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-primary-50 via-white to-pink-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Ready to Stop Missing Bookings?
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                        Join hundreds of salons already using Dooza AI to fill every chair, every day.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href={getProductSignupUrl('workforce')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1 inline-flex items-center justify-center gap-2"
                        >
                            Get Started Free
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href={CAL_BOOKING_URL}
                            onClick={handleAction}
                            className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                        >
                            Book a Demo
                        </a>
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            {page.faqData && page.faqData.length > 0 && (
                <section className="py-16 md:py-24 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Frequently Asked Questions
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {page.faqData.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-slate-200 rounded-xl overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <span className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {openFaq === idx && (
                                        <div className="px-5 pb-5">
                                            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ===== BOTTOM CTA + FOOTER ===== */}
            <BottomCTA openModal={handleAction} />
            <Footer />

            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
            />
        </div>
    );
}
