'use client';

import { useState } from 'react';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import {
    Wrench,
    Hammer,
    Timer,
    Moon,
    CheckCircle2,
    PhoneCall,
    AlertTriangle,
    Shield,
    FileText,
    ArrowRight,
    Flame,
    Droplets,
    Lightbulb,
    Home,
    TreePine,
    HardHat,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

export default function ContractorsContent({ page }) {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
            if (e) e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const problemCards = [
        {
            icon: Hammer,
            title: 'Hands on tools — can\'t answer the phone',
            description: 'You\'re on a ladder, under a sink, or inside a wall. Your phone rings. By the time you can grab it, the caller is gone — and so is the job.'
        },
        {
            icon: Timer,
            title: 'Competitor answers first — wins the job',
            description: 'Homeowners call 2-3 contractors. The first one to pick up gets the job 78% of the time. If you\'re on-site, you lose before you even knew you were competing.'
        },
        {
            icon: Moon,
            title: 'After-hours emergencies go to voicemail',
            description: 'Burst pipes, power outages, roof leaks — they don\'t wait for business hours. If your phone doesn\'t answer at 10 PM, the homeowner calls the next guy.'
        }
    ];

    const solutionBullets = [
        'Answers calls 24/7, even while you\'re on-site',
        'Captures lead details and job scope automatically',
        'Provides estimates from your pricing guide',
        'Dispatches emergencies with smart urgency detection',
        'Texts you a summary after every call'
    ];

    const benefitCards = [
        {
            icon: PhoneCall,
            title: 'Never lose a job to voicemail',
            description: 'Every call is answered on the first ring — whether you\'re on a roof, in a crawlspace, or driving between jobs. No more "Sorry I missed your call" callbacks.'
        },
        {
            icon: AlertTriangle,
            title: 'Capture after-hours emergencies',
            description: 'Emergency calls at 2 AM get answered immediately. The AI detects urgency, collects details, and texts you directly — so you can dispatch or schedule as needed.'
        },
        {
            icon: Shield,
            title: 'Professional image, always',
            description: 'Callers hear a polished, knowledgeable agent — not a voicemail box or a distracted contractor yelling over a table saw. Your brand sounds like a serious operation.'
        },
        {
            icon: FileText,
            title: 'Every lead logged automatically',
            description: 'Name, number, address, job description, urgency level — all captured and texted to you in a clean summary. No more scribbled notes on drywall scraps.'
        }
    ];

    const steps = [
        {
            number: '1',
            title: 'Connect your business number',
            description: 'Forward your existing business line to Dooza in under 5 minutes. Works with any phone provider — landline, cell, or VoIP. No new number needed.'
        },
        {
            number: '2',
            title: 'Set your service areas & pricing',
            description: 'Tell the AI what services you offer, your service area, your pricing ranges, and your availability. It learns your business inside and out.'
        },
        {
            number: '3',
            title: 'Go live — start capturing leads',
            description: 'From the moment you flip the switch, every call is answered professionally. You\'ll get text summaries of each call so you can follow up from the job site.'
        }
    ];

    const pricingComparison = [
        {
            title: 'Full-Time Secretary',
            price: '$3,000',
            period: '/mo',
            features: [
                'Available 9-5 only',
                'Sick days & vacation',
                'Training required',
                'One person, one phone'
            ],
            tint: 'red',
            highlight: false
        },
        {
            title: 'Call Center',
            price: '$500',
            period: '/mo',
            features: [
                'Generic scripts',
                'No trade knowledge',
                'Per-minute charges add up',
                'Takes messages only'
            ],
            tint: 'amber',
            highlight: false
        },
        {
            title: 'Dooza AI',
            price: '$29',
            period: '/mo',
            features: [
                '24/7/365 availability',
                'Knows your trade & pricing',
                'Unlimited calls included',
                'Captures leads & dispatches'
            ],
            tint: 'green',
            highlight: true
        }
    ];

    const trades = [
        { name: 'HVAC', icon: Flame, color: 'bg-red-100 text-red-700 border-red-200' },
        { name: 'Plumbing', icon: Droplets, color: 'bg-blue-100 text-blue-700 border-blue-200' },
        { name: 'Electrical', icon: Lightbulb, color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
        { name: 'Roofing', icon: Home, color: 'bg-amber-100 text-amber-700 border-amber-200' },
        { name: 'Landscaping', icon: TreePine, color: 'bg-green-100 text-green-700 border-green-200' },
        { name: 'General Contracting', icon: HardHat, color: 'bg-slate-100 text-slate-700 border-slate-200' }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar />

            {/* =============================== */}
            {/* 1. HERO SECTION                 */}
            {/* =============================== */}
            <section className="bg-gradient-to-br from-amber-50 via-white to-primary-50 pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Industries', href: '/industries' },
                        { label: 'Contractors' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
                            <Wrench size={16} />
                            <span>AI for Contractors</span>
                        </div>

                        <p className="text-lg md:text-xl text-amber-700 font-medium mb-4">
                            You&apos;re on a roof. Your phone is buzzing. That call is worth $400.
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            AI Answering Service for <span className="text-primary-600">Contractors</span>: Capture Every Lead, Even on the Job Site
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
                            {page.metaDescription}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1"
                            >
                                Get Started Free — $29/mo
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleAction}
                                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                            >
                                Book a Demo
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 2. PROBLEM SECTION              */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            The Problem Every Contractor Knows
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            You didn&apos;t get into contracting to answer phones. But every missed call is a missed job.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {problemCards.map((card, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-red-200 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-4">
                                    <card.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 3. SOLUTION SECTION             */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                                What Dooza AI Does for You
                            </h2>
                            <p className="text-lg text-slate-600">
                                An AI agent that answers like your best office manager — but works 24/7 and costs less than a pizza night.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-8">
                            <div className="space-y-5">
                                {solutionBullets.map((bullet, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                            <CheckCircle2 size={18} className="text-green-600" />
                                        </div>
                                        <p className="text-lg text-slate-700 font-medium">
                                            {bullet}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 4. BENEFITS SECTION             */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            Why Contractors Choose Dooza
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Stop losing revenue to missed calls. Start closing more jobs without leaving the job site.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {benefitCards.map((card, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary-200 hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                                    <card.icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    {card.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 5. HOW IT WORKS SECTION         */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            How It Works
                        </h2>
                        <p className="text-lg text-slate-600">
                            Live in under 10 minutes. No contracts. No tech skills needed.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex gap-5 items-start bg-white border border-slate-200 rounded-2xl p-6 hover:border-primary-200 transition-all">
                                <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                                    {step.number}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 6. PRICING COMPARISON SECTION   */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            The Cost of Answering Your Phone
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            See how Dooza AI stacks up against the alternatives.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {pricingComparison.map((plan, idx) => {
                            const tintMap = {
                                red: {
                                    border: 'border-red-200',
                                    bg: 'bg-red-50',
                                    price: 'text-red-600',
                                    badge: 'bg-red-100 text-red-700'
                                },
                                amber: {
                                    border: 'border-amber-200',
                                    bg: 'bg-amber-50',
                                    price: 'text-amber-600',
                                    badge: 'bg-amber-100 text-amber-700'
                                },
                                green: {
                                    border: 'border-green-300',
                                    bg: 'bg-green-50',
                                    price: 'text-green-700',
                                    badge: 'bg-green-100 text-green-700'
                                }
                            };
                            const colors = tintMap[plan.tint];

                            return (
                                <div
                                    key={idx}
                                    className={`rounded-2xl border-2 p-6 ${colors.border} ${colors.bg} ${plan.highlight ? 'ring-2 ring-green-400 ring-offset-2 relative' : ''}`}
                                >
                                    {plan.highlight && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                BEST VALUE
                                            </span>
                                        </div>
                                    )}
                                    <div className="text-center mb-6">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{plan.title}</h3>
                                        <div className="flex items-baseline justify-center gap-1">
                                            <span className={`text-4xl font-bold ${colors.price}`}>{plan.price}</span>
                                            <span className="text-slate-500 text-sm">{plan.period}</span>
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-700">
                                                {plan.highlight ? (
                                                    <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                                                ) : (
                                                    <span className="w-4 h-4 rounded-full bg-slate-300 shrink-0 mt-0.5 flex items-center justify-center text-white text-xs">-</span>
                                                )}
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    {plan.highlight && (
                                        <div className="mt-6">
                                            <a
                                                href={getProductSignupUrl('workforce')}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-green-700 transition-all"
                                            >
                                                Start Free <ArrowRight size={16} />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 7. TRADES SERVED SECTION        */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            Built for Every Trade
                        </h2>
                        <p className="text-lg text-slate-600">
                            Dooza AI works for contractors across all home service trades.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {trades.map((trade, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center gap-3 px-5 py-4 rounded-xl border ${trade.color} font-medium text-sm`}
                            >
                                <trade.icon size={20} />
                                <span>{trade.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 8. CTA SECTION                  */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Stop Losing Jobs to Voicemail
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        Every missed call is a job your competitor wins. Dooza AI answers every call, captures every lead, and costs less than your morning coffee run.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={getProductSignupUrl('workforce')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1"
                        >
                            Get Started Free — $29/mo
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href={CAL_BOOKING_URL}
                            onClick={handleAction}
                            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                        >
                            Book a Demo
                        </a>
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 9. FAQ SECTION                  */}
            {/* =============================== */}
            {page.faqData && page.faqData.length > 0 && (
                <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
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
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                                    >
                                        <h3 className="font-bold text-slate-900 text-lg pr-4">
                                            {faq.question}
                                        </h3>
                                        {openFaq === idx ? (
                                            <ChevronUp size={20} className="text-slate-400 shrink-0" />
                                        ) : (
                                            <ChevronDown size={20} className="text-slate-400 shrink-0" />
                                        )}
                                    </button>
                                    {openFaq === idx && (
                                        <div className="px-6 pb-5">
                                            <p className="text-slate-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* =============================== */}
            {/* BOTTOM CTA + FOOTER + MODAL     */}
            {/* =============================== */}
            <BottomCTA openModal={handleAction} />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
