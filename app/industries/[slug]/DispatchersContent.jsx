'use client';

import { useState } from 'react';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import {
    Radio,
    Truck,
    Timer,
    Moon,
    CheckCircle2,
    PhoneCall,
    AlertTriangle,
    Shield,
    FileText,
    ArrowRight,
    Package,
    MapPin,
    Wrench,
    Building2,
    Car,
    HeartPulse,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

export default function DispatchersContent({ page }) {
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
            title: 'Three lines ring while you close one deal',
            description: 'You\'re negotiating a rate with a broker and your phone won\'t stop: drivers checking in, carriers asking about lanes, customers wanting ETAs. Every unanswered call is money walking away.'
        },
        {
            icon: Timer,
            title: 'Slow answers lose carriers and clients',
            description: 'Owner-operators and shippers call 2-3 dispatch services. The one who picks up first usually gets the business. If you\'re busy on another line, you never knew you lost.'
        },
        {
            icon: Moon,
            title: 'Freight doesn\'t sleep, but you have to',
            description: 'Breakdowns at 2 AM, missed pickups, delivery delays. Drivers call all night. Either you burn out answering, or the calls go to voicemail and clients lose trust.'
        }
    ];

    const solutionBullets = [
        'Answers every call 24/7: drivers, brokers, and customers',
        'Handles driver check calls: location, ETA, and status updates',
        'Captures new carrier and owner-operator leads automatically',
        'Detects emergencies and escalates to you instantly',
        'Texts you a clean summary after every call'
    ];

    const benefitCards = [
        {
            icon: Truck,
            title: 'Driver check calls handled for you',
            description: 'Drivers call in with location, status, and ETA. The AI logs it, updates your records, and can answer shipper ETA requests, all without you touching the phone.'
        },
        {
            icon: AlertTriangle,
            title: 'Emergencies reach you, routine calls don\'t',
            description: 'Breakdowns and urgent delays are detected and escalated to your phone immediately. Routine check-ins and inquiries get handled without interrupting you.'
        },
        {
            icon: Shield,
            title: 'Sound like a big operation',
            description: 'Even if it\'s just you and a laptop, callers hear a polished, professional dispatcher. Brokers and shippers trust operations that answer on the first ring.'
        },
        {
            icon: FileText,
            title: 'Every call logged automatically',
            description: 'Name, MC number, equipment, lanes, callback details, captured and texted to you in a clean summary. No more scribbled notes or forgotten callbacks.'
        }
    ];

    const steps = [
        {
            number: '1',
            title: 'Connect your business number',
            description: 'Forward your existing dispatch line to Dooza in under 5 minutes. Works with any phone provider: cell, landline, or VoIP. No new number needed.'
        },
        {
            number: '2',
            title: 'Set your lanes, services & escalation rules',
            description: 'Tell the AI what freight you cover, your service area, your rates, and what counts as urgent. It learns your dispatch operation inside and out.'
        },
        {
            number: '3',
            title: 'Go live and every call gets answered',
            description: 'From the moment you flip the switch, every driver, broker, and customer call is answered professionally. You get text summaries so you stay in control.'
        }
    ];

    const segments = [
        { name: 'Freight & Logistics', icon: Package, color: 'bg-blue-100 text-blue-700 border-blue-200' },
        { name: 'Owner-Operators', icon: Truck, color: 'bg-amber-100 text-amber-700 border-amber-200' },
        { name: 'Towing & Roadside', icon: Car, color: 'bg-red-100 text-red-700 border-red-200' },
        { name: 'Field Service', icon: Wrench, color: 'bg-green-100 text-green-700 border-green-200' },
        { name: 'Courier & Last-Mile', icon: MapPin, color: 'bg-purple-100 text-purple-700 border-purple-200' },
        { name: 'Medical Transport', icon: HeartPulse, color: 'bg-slate-100 text-slate-700 border-slate-200' }
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
                        { label: 'Dispatchers' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                            <Radio size={16} />
                            <span>AI for Dispatchers</span>
                        </div>

                        <p className="text-lg md:text-xl text-blue-700 font-medium mb-4">
                            You&apos;re closing a load. Three lines are ringing. Each one is worth money.
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            AI Answering Service for <span className="text-primary-600">Dispatchers</span>: Every Driver, Broker &amp; Customer Call Answered 24/7
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
                            The Problem Every Dispatcher Knows
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            You didn&apos;t start a dispatch business to be chained to a phone. But every missed call is lost freight, a lost carrier, or a lost client.
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
                            Why Dispatchers Choose Dooza
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Stop losing carriers and clients to missed calls. Run a bigger operation without hiring.
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
                            Built for Every Kind of Dispatch
                        </h2>
                        <p className="text-lg text-slate-600">
                            Dooza AI works for dispatch operations across freight, field service, and transport.
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
                        Stop Losing Business to a Busy Line
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        Every missed call is freight your competitor books. Dooza AI answers every call and handles every check-in, so you never miss an opportunity.
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
