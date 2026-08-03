'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import SupportEmailLink from '../../../components/SupportEmailLink';
import { testimonials } from '../../../lib/homeData';
import {
    Radio,
    Truck,
    CheckCircle2,
    PhoneCall,
    CalendarCheck,
    Route,
    Mail,
    FileText,
    AlertTriangle,
    Users,
    ClipboardList,
    Moon,
    ArrowRight,
    Package,
    Pill,
    Car,
    Wrench,
    MapPin,
    Star,
    ShieldCheck,
    BadgeCheck,
    Handshake,
    Building2,
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

    const trustTestimonials = ['Hatrio AI', 'Interio Square', 'ACE Dreamers Motive']
        .map(name => testimonials.find(t => t.author === name))
        .filter(Boolean);

    const capabilityCards = [
        {
            icon: PhoneCall,
            title: 'Calls & texts',
            description: 'Every driver, broker, and customer answered on the first ring.'
        },
        {
            icon: CalendarCheck,
            title: 'Scheduling',
            description: 'Loads booked, appointments set, calendars kept in sync.'
        },
        {
            icon: Route,
            title: 'Tracking & ETAs',
            description: 'Check-ins collected, ETAs updated, shippers kept informed.'
        },
        {
            icon: Mail,
            title: 'Email & follow-up',
            description: 'Quotes, confirmations, and chases sent on time, every time.'
        },
        {
            icon: FileText,
            title: 'Paperwork',
            description: 'BOLs, PODs, and invoices drafted, filed, and followed up.'
        },
        {
            icon: AlertTriangle,
            title: 'Emergencies',
            description: 'Breakdowns and delays flagged to you the moment they happen.'
        },
        {
            icon: Users,
            title: 'New leads',
            description: 'Carriers and owner-operators captured and qualified automatically.'
        },
        {
            icon: ClipboardList,
            title: 'Records',
            description: 'Every call, load, and update logged. Nothing slips through.'
        }
    ];

    const steps = [
        {
            number: '1',
            title: 'Tell it your operation',
            description: 'Your lanes, rates, services, and what counts as urgent.'
        },
        {
            number: '2',
            title: 'Connect your tools',
            description: 'Phone, email, calendar, and the systems you already use.'
        },
        {
            number: '3',
            title: 'It starts working',
            description: 'Like a great new hire on day one — except it never stops.'
        }
    ];

    const benefitCards = [
        {
            icon: Moon,
            title: 'Works while you sleep',
            description: 'Every call, text, and email handled 24/7. You wake up to a summary, not a backlog.'
        },
        {
            icon: CheckCircle2,
            title: 'You stay in control',
            description: 'It follows your rules and escalates what matters. Routine work never interrupts you.'
        },
        {
            icon: Truck,
            title: 'Grow without hiring',
            description: 'Run a bigger book of business with the team you already have.'
        },
        {
            icon: Radio,
            title: 'Sounds like you',
            description: 'Your brand, your tone, your standards — on every single interaction.'
        }
    ];

    const segments = [
        { name: 'Freight & Logistics', icon: Package, color: 'bg-blue-100 text-blue-700 border-blue-200' },
        { name: 'Pharma & Medical', icon: Pill, color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
        { name: 'Owner-Operators', icon: Truck, color: 'bg-amber-100 text-amber-700 border-amber-200' },
        { name: 'Towing & Roadside', icon: Car, color: 'bg-red-100 text-red-700 border-red-200' },
        { name: 'Courier & Last-Mile', icon: MapPin, color: 'bg-purple-100 text-purple-700 border-purple-200' },
        { name: 'Field Service', icon: Wrench, color: 'bg-green-100 text-green-700 border-green-200' }
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
                            <span>AI Employee for Dispatchers</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight text-balance">
                            An AI Employee That Runs Your <span className="text-primary-600">Entire Dispatch Desk</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 text-pretty">
                            {page.metaDescription}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleAction}
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1"
                            >
                                Book a Meeting
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                            >
                                Start Free for 2 Weeks
                            </a>
                        </div>

                        <p className="mt-6 text-sm text-slate-500">
                            Two weeks free · Then decide · Cancel anytime
                        </p>
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 2. CAPABILITIES SECTION         */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight text-balance">
                            One Employee. The Whole Job.
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
                            Not just calls. Everything a dispatcher does, done.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {capabilityCards.map((card, idx) => (
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
            {/* 3. HOW IT WORKS SECTION         */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            How It Works
                        </h2>
                        <p className="text-lg text-slate-600">
                            Live the same day. Cancel anytime. No tech skills needed.
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
            {/* 4. BENEFITS SECTION             */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight text-balance">
                            Why Dispatchers Choose Dooza
                        </h2>
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
            {/* 5. SEGMENTS SERVED SECTION      */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight text-balance">
                            Built for Every Kind of Dispatch
                        </h2>
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
            {/* 6. TRUST SECTION                */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight text-balance">
                            Trusted by 300+ Businesses
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
                            Real businesses. Real AI employees. Real feedback.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 mb-12">
                        {testimonials.filter(t => t.logo).map((item, idx) => (
                            <a
                                key={idx}
                                href={item.website || item.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2.5 opacity-70 hover:opacity-100 transition-opacity"
                            >
                                <img src={item.logo} alt={item.author} width="32" height="32" className="h-8 w-auto object-contain" />
                                <span className="text-sm font-semibold text-slate-600">{item.author}</span>
                            </a>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {trustTestimonials.map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    {item.logo ? (
                                        <div className="w-11 h-11 rounded-full bg-white border border-slate-100 flex items-center justify-center shrink-0 overflow-hidden">
                                            <img src={item.logo} alt={item.author} width="44" height="44" className="object-contain p-1" />
                                        </div>
                                    ) : (
                                        <div className="w-11 h-11 rounded-full bg-gradient-to-r from-primary-500 to-teal-500 flex items-center justify-center font-bold text-white text-sm shrink-0">
                                            {item.initials}
                                        </div>
                                    )}
                                    <div className="min-w-0">
                                        <div className="font-bold text-slate-900 text-sm truncate">{item.author}</div>
                                        <div className="text-xs text-slate-400 truncate">{item.role}</div>
                                    </div>
                                </div>
                                <div className="flex gap-0.5 text-yellow-400 mb-3">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-slate-700 text-sm leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-700">
                            <ShieldCheck size={16} className="text-primary-600" />
                            Two weeks free
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-700">
                            <BadgeCheck size={16} className="text-primary-600" />
                            No credit card required
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-700">
                            <Handshake size={16} className="text-primary-600" />
                            Free concierge onboarding
                        </div>
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 7. PEOPLE & COMPANY SECTION     */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight text-balance">
                            Real People Behind the Product
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
                            When you book a meeting, you talk to us directly — not a sales rep.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-teal-500 flex items-center justify-center font-bold text-white text-lg mb-4">
                                SN
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">Sibi Narendran</h3>
                            <p className="text-sm text-slate-500 mb-4">Founder, Dooza</p>
                            <a
                                href="https://twitter.com/sibinarendran"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                            >
                                Follow on X
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                            <div className="w-14 h-14 mx-auto rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                                <Building2 size={26} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">Adam Laboratory Inc.</h3>
                            <p className="text-sm text-slate-500 mb-4">Delaware C-Corporation · Newark, DE</p>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                            >
                                Company details
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all">
                            <div className="w-14 h-14 mx-auto rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mb-4">
                                <Mail size={26} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900">Talk to a Human</h3>
                            <p className="text-sm text-slate-500 mb-4">Questions before you book?</p>
                            <SupportEmailLink className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors" />
                        </div>
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 8. CTA SECTION                  */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight text-balance">
                        Book a Meeting. Try It Free for Two Weeks. Then Decide.
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 text-pretty">
                        Talk to us about your dispatch desk. If it&apos;s not a fit, you&apos;ll know in 15 minutes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={CAL_BOOKING_URL}
                            onClick={handleAction}
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1"
                        >
                            Book a Meeting
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href={getProductSignupUrl('workforce')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                        >
                            Start Free for 2 Weeks
                        </a>
                    </div>
                    <p className="mt-6 text-sm text-slate-500">
                        Two weeks free · No credit card required · Cancel anytime
                    </p>
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
            {/* FOOTER + MODAL                  */}
            {/* =============================== */}
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
