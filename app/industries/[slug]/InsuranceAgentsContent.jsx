'use client';

import { useState } from 'react';
import { CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import {
    Shield,
    Umbrella,
    Car,
    Home,
    Briefcase,
    Timer,
    Moon,
    CheckCircle2,
    PhoneCall,
    AlertTriangle,
    FileText,
    CalendarCheck,
    ArrowRight,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

export default function InsuranceAgentsContent({ page }) {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && /calendly\.com|cal\.com|\/book(\/|\?|$)/.test(url)) {
            if (e) e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const problemCards = [
        {
            icon: PhoneCall,
            title: 'Quote shoppers call around',
            description: 'Someone shopping for auto or home insurance may call more than one agency. If yours doesn\'t pick up, the next one may get the quote, and you may never know the call came in.'
        },
        {
            icon: Timer,
            title: 'You\'re with a client while the phone rings',
            description: 'You\'re reviewing a renewal, on hold with a carrier, or in a client meeting — and new prospects go straight to voicemail. Some won\'t call back.'
        },
        {
            icon: Moon,
            title: 'Claims and emergencies don\'t wait for business hours',
            description: 'Accidents at midnight, storm damage on a Sunday, certificate requests before 8 AM. Policyholders want their agent to answer.'
        }
    ];

    const solutionBullets = [
        'Answers calls when you can\'t: after hours, at lunch, while you\'re with a client',
        'Captures quote requests with line of business, current carrier, and renewal date',
        'Answers routine agency questions (hours, address, how to send a document) from your agency\'s info; coverage questions go to a licensed agent',
        'Flags urgent claims in the message it takes for you',
        'Takes a clean message for you on every call'
    ];

    const benefitCards = [
        {
            icon: Umbrella,
            title: 'Quote requests captured, ready to close',
            description: 'Name, contact details, line of business, current carrier, and renewal date — collected on the first call, so your callback is a quote, not an interview.'
        },
        {
            icon: AlertTriangle,
            title: 'Urgent claims reach you, routine calls don\'t',
            description: 'Accidents and property damage are flagged as urgent in the message it takes for you. Billing questions and ID-card or certificate requests are taken as a message for your CSR, without interrupting you.'
        },
        {
            icon: Shield,
            title: 'Sound like a big agency, even if it\'s just you',
            description: 'Callers hear a professional answer instead of voicemail.'
        },
        {
            icon: FileText,
            title: 'A clear message for every call',
            description: 'Caller details, reason for the call and callback requests go to your team as a message. No sticky notes.'
        }
    ];

    const steps = [
        {
            number: '1',
            title: 'Connect your agency number',
            description: 'We set up call forwarding from your agency line with you.'
        },
        {
            number: '2',
            title: 'Set your lines, carriers & urgent-call rules',
            description: 'Tell us which lines of business you write, your appointment availability, and what counts as urgent.'
        },
        {
            number: '3',
            title: 'Go live and every call gets answered',
            description: 'From the moment you flip the switch, every quote request, service request and claim call gets a professional answer and a clean message for your team.'
        }
    ];

    const segments = [
        { name: 'Auto & Home', icon: Car, color: 'bg-blue-100 text-blue-700 border-blue-200' },
        { name: 'Commercial Lines', icon: Briefcase, color: 'bg-amber-100 text-amber-700 border-amber-200' },
        { name: 'P&C Agencies', icon: Home, color: 'bg-purple-100 text-purple-700 border-purple-200' },
        { name: 'Independent Brokerages', icon: CalendarCheck, color: 'bg-slate-100 text-slate-700 border-slate-200' }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar />

            {/* =============================== */}
            {/* 1. HERO SECTION                 */}
            {/* =============================== */}
            <section className="bg-gradient-to-br from-blue-50 via-white to-primary-50 pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Industries', href: '/industries' },
                        { label: 'Insurance Agents' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                            <Shield size={16} />
                            <span>AI for Insurance Agents</span>
                        </div>

                        <p className="text-lg md:text-xl text-blue-700 font-medium mb-4">
                            You&apos;re on hold with a carrier. A prospect is calling. That call is a bound policy.
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            AI Answering Service for <span className="text-primary-600">Independent Insurance Agencies</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10">
                            {page.metaDescription}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleAction}
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1"
                            >
                                Start your pilot
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleAction}
                                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                            >
                                Book a free pilot call
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Answer-first block for AI engines and searchers: the sub-question, answered in one paragraph. */}
            <section data-answer-block className="bg-white px-4 py-10 sm:px-6">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">What does an AI answering service for an insurance agency do?</h2>
                    <p className="mt-3 text-lg leading-relaxed text-slate-700">An AI answering service for an independent insurance agency picks up the calls your team can’t: quote shoppers, policyholders reporting a claim, and service requests after hours or while you’re with a client. It takes down what you need to call back ready (name, line of business, current carrier, renewal date; for claims, policy number, date of loss and whether anyone is hurt), flags urgent claims in the message it takes for you, and leaves every coverage question to your licensed staff. It does not quote, bind or interpret coverage, the same line most states draw for unlicensed agency staff. Dooza sets it up for you on your existing number during a refundable pilot: 100% refund within 14 days. It answers in English only today.</p>
                    <p className="mt-3 text-sm text-slate-500">Comparing options? See what your call volume would cost in our <a href="/ai-receptionist-cost-calculator" className="font-medium text-primary-700 underline">AI receptionist cost calculator</a>.</p>
                </div>
            </section>

            {/* =============================== */}
            {/* 2. PROBLEM SECTION              */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            The Problem Every Independent Agent Knows
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            You didn&apos;t get your license to be chained to a phone. But a missed call can be a quote your competitor writes.
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
                                An AI agent that answers like your best front-office hire and leaves every coverage question to your licensed staff.
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
                            Why Independent Agents Choose Dooza
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Stop losing policies to missed calls. Run a bigger book of business without hiring.
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
                            A Dooza engineer scopes your pilot on a free call. Start with a refundable pilot — 100% refund within 14 days.
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
            {/* 7. SEGMENTS SERVED SECTION      */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            Built for Every Line of Business
                        </h2>
                        <p className="text-lg text-slate-600">
                            Dooza AI works for independent agents and brokerages across personal and commercial lines.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                        {segments.map((segment, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center gap-3 px-5 py-4 rounded-xl border ${segment.color} font-medium text-sm`}
                            >
                                <segment.icon size={20} />
                                <span>{segment.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Licensing: what an unlicensed answerer may and may not do (citable block, sourced). */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight text-center">
                        What an Answering Service May Say for a Licensed Agency
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10 text-center">
                        An AI agent, like an unlicensed CSR, is not a licensed producer. Dooza scripts it to stay on the right side of that line.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border border-green-200 bg-green-50 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Can do</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li>Take quote details (line, carrier, renewal date)</li>
                                <li>Take first notice of a claim and pass it to you</li>
                                <li>Take change requests for a producer to review</li>
                                <li>Take a callback request with the best time</li>
                            </ul>
                        </div>
                        <div className="border border-amber-200 bg-amber-50 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-3">Leaves to your licensed staff</h3>
                            <ul className="space-y-2 text-slate-700">
                                <li>Quoting a premium</li>
                                <li>Comparing carriers or products</li>
                                <li>Advising on limits or coverage needs</li>
                                <li>Interpreting a policy or saying whether a loss is covered</li>
                                <li>Binding coverage</li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-6 text-sm text-slate-500">
                        Sources: <a href="https://risk.uticanational.com/eo/loss-control-articles/eo-tip-know-what-activities-an-unlicensed-csr-can-perform" className="underline" rel="noopener" target="_blank">Utica National E&amp;O tip on unlicensed CSRs</a> and <a href="https://www.law.cornell.edu/regulations/florida/Fla-Admin-Code-Ann-R-69B-222-060" className="underline" rel="noopener" target="_blank">Florida Admin. Code 69B-222.060</a> (checked Oct 9, 2026). Rules vary by state; check yours. This is not legal advice.
                    </p>
                </div>
            </section>

            {/* =============================== */}
            {/* 8. CTA SECTION                  */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Stop Losing Policies to a Busy Line
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        A missed call can be a quote your competitor writes. Dooza AI picks up when you can't and captures the details, so your callback is ready to quote.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={CAL_BOOKING_URL}
                            onClick={handleAction}
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1"
                        >
                            Start your pilot
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href={CAL_BOOKING_URL}
                            onClick={handleAction}
                            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                        >
                            Book a free pilot call
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
