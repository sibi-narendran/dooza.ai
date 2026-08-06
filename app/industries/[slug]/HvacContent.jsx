'use client';

import { useState } from 'react';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import {
    Flame,
    Snowflake,
    Wind,
    Building2,
    ThermometerSun,
    Wrench,
    Timer,
    Moon,
    CheckCircle2,
    PhoneCall,
    AlertTriangle,
    Shield,
    FileText,
    CalendarCheck,
    ArrowRight,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

export default function HvacContent({ page }) {
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
            icon: PhoneCall,
            title: 'Emergency jobs go to whoever answers first',
            description: 'A homeowner with no heat in January or no AC in a heat wave calls 3 HVAC companies and books the first one that picks up. Miss the call and the $400 repair — or the $8,000 replacement — is gone.'
        },
        {
            icon: Timer,
            title: 'Your techs are on rooftops, not on phones',
            description: 'Your crew is in an attic, on a ladder, or elbow-deep in a compressor. The office line rings, nobody picks up, and the caller dials your competitor within 30 seconds.'
        },
        {
            icon: Moon,
            title: 'Breakdowns don\'t wait for business hours',
            description: 'Furnaces die at midnight. AC quits on Sunday. Callers either get your voicemail and lose trust, or you burn out answering the phone all night yourself.'
        }
    ];

    const solutionBullets = [
        'Answers every call 24/7: emergencies, estimates, and service requests',
        'Detects urgent situations and escalates to your on-call tech instantly',
        'Books service calls and estimates straight into your calendar',
        'Captures system type, issue details, and address on every call',
        'Texts you a clean summary after every call'
    ];

    const benefitCards = [
        {
            icon: AlertTriangle,
            title: 'Emergencies reach your tech, routine calls don\'t',
            description: 'No heat, no cooling, gas smells — detected and escalated to your on-call phone immediately. Filter changes, maintenance questions, and pricing inquiries get handled without interrupting a job.'
        },
        {
            icon: CalendarCheck,
            title: 'Estimates and service calls booked for you',
            description: 'The AI checks your availability and books the slot on the spot — system type, issue description, and address captured so your tech shows up prepared, not guessing.'
        },
        {
            icon: Shield,
            title: 'Sound like a big operation, even with a small crew',
            description: 'Every caller hears a polished, professional answer on the first ring. Homeowners trust companies that pick up — and that trust wins the install jobs.'
        },
        {
            icon: FileText,
            title: 'Every call logged automatically',
            description: 'Caller name, address, equipment, and problem captured and texted to you in a clean summary. No scribbled notes on the dashboard, no forgotten callbacks.'
        }
    ];

    const steps = [
        {
            number: '1',
            title: 'Connect your business number',
            description: 'Forward your existing line to Dooza in under 5 minutes. Works with any phone provider: cell, landline, or VoIP. No new number needed.'
        },
        {
            number: '2',
            title: 'Set your services, rates & escalation rules',
            description: 'Tell the AI what you service, your diagnostic fee, your service area, and what counts as an emergency. It learns your operation inside and out.'
        },
        {
            number: '3',
            title: 'Go live and every call gets answered',
            description: 'From the moment you flip the switch, every emergency, estimate, and service call is answered professionally. You get text summaries so you stay in control.'
        }
    ];

    const segments = [
        { name: 'Residential Heating & Cooling', icon: Flame, color: 'bg-red-100 text-red-700 border-red-200' },
        { name: 'Commercial HVAC', icon: Building2, color: 'bg-blue-100 text-blue-700 border-blue-200' },
        { name: 'Refrigeration', icon: Snowflake, color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
        { name: 'Heat Pumps', icon: ThermometerSun, color: 'bg-amber-100 text-amber-700 border-amber-200' },
        { name: 'Furnace & AC Install', icon: Wrench, color: 'bg-green-100 text-green-700 border-green-200' },
        { name: 'Indoor Air Quality', icon: Wind, color: 'bg-purple-100 text-purple-700 border-purple-200' }
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
                        { label: 'HVAC' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                            <Flame size={16} />
                            <span>AI for HVAC Companies</span>
                        </div>

                        <p className="text-lg md:text-xl text-blue-700 font-medium mb-4">
                            Someone&apos;s furnace just died. They&apos;re calling you and two competitors right now.
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            AI Answering Service for <span className="text-primary-600">HVAC Companies</span>: Every Emergency, Estimate &amp; Service Call Answered 24/7
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
                                Get Started Free
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
                            The Problem Every HVAC Owner Knows
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            You didn&apos;t start an HVAC company to sit by a phone. But every missed call is a job your competitor books.
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
                                An AI agent that answers like your best dispatcher, works 24/7, and never takes a day off.
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
                            Why HVAC Companies Choose Dooza
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Stop losing jobs to missed calls. Book more work without hiring office staff.
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
            {/* 7. SEGMENTS SERVED SECTION      */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            Built for Every Kind of HVAC Work
                        </h2>
                        <p className="text-lg text-slate-600">
                            Dooza AI works for residential and commercial HVAC operations of every size.
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

            {/* =============================== */}
            {/* 8. CTA SECTION                  */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Stop Losing Jobs to a Missed Call
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        Every unanswered call is a repair, a maintenance plan, or a full system replacement your competitor books. Dooza AI answers every call and captures every detail.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={getProductSignupUrl('workforce')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1"
                        >
                            Get Started Free
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
