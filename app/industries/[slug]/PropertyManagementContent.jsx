'use client';

import { useState } from 'react';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import {
    Building2,
    Home,
    Building,
    Warehouse,
    KeyRound,
    Wrench,
    Droplets,
    Timer,
    Moon,
    Users,
    CheckCircle2,
    PhoneCall,
    AlertTriangle,
    FileText,
    CalendarCheck,
    ArrowRight,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

export default function PropertyManagementContent({ page }) {
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
            icon: Moon,
            title: 'Burst pipes happen at 2 AM',
            description: 'A leak, a dead furnace in January, a sewage backup: tenants call when it happens, not when your office opens. Miss the call and the damage, the tenant\'s patience and the owner\'s bill all grow.'
        },
        {
            icon: Timer,
            title: 'Your on-call person gets every call',
            description: 'Without a filter, the on-call phone rings for lockouts, noisy neighbors and "my dishwasher is slow." The calls that need a person tonight get buried under the ones that can wait until 9 AM.'
        },
        {
            icon: PhoneCall,
            title: 'Leasing calls go to voicemail',
            description: 'Prospects call about a vacancy in the evening or on a weekend. If nobody picks up, they call the next listing. Every vacant day costs the owner rent.'
        }
    ];

    const solutionBullets = [
        'Answers tenant, owner and prospect calls 24/7 in your company\'s name',
        'Takes the property, unit, problem and urgency on every maintenance call',
        'Follows your emergency list: flags true emergencies in the message it takes for your on-call person',
        'Logs routine requests with all the details for the next business day',
        'Answers leasing questions from your information and captures every prospect'
    ];

    const benefitCards = [
        {
            icon: AlertTriangle,
            title: 'Emergencies reach a person, routine calls wait',
            description: 'You write the list of what is urgent and what to do for each case. Water leaks are flagged urgent for your on-call tech; a slow drain becomes a work order for the morning.'
        },
        {
            icon: Wrench,
            title: 'Work orders with everything your tech needs',
            description: 'Property, unit, tenant name and number, what is wrong, when it started, access instructions. Your team gets a clear summary instead of a garbled voicemail.'
        },
        {
            icon: KeyRound,
            title: 'More leasing calls answered',
            description: 'Prospects get answers about available units, application steps and pet policy from your information, and their details land with your leasing team.'
        },
        {
            icon: FileText,
            title: 'A record of every call',
            description: 'Every call is summarized and logged, so you can show an owner exactly when a tenant reported the problem and what happened next.'
        }
    ];

    const steps = [
        {
            number: '1',
            title: 'Forward your after-hours line (or all of it)',
            description: 'Keep your existing number. Forward it to Dooza after hours, on overflow, or all day. Works with any phone provider.'
        },
        {
            number: '2',
            title: 'Write your emergency rules and on-call schedule',
            description: 'Tell us what counts as an emergency, who is on call, and what to say for life-safety calls (for example: leave the unit and call 911 or the gas utility first). We set it up and test it with you.'
        },
        {
            number: '3',
            title: 'Go live, review every call',
            description: 'Every call gets answered and sorted. You read the summaries, adjust the rules, and decide after the pilot. Start with a refundable pilot: 100% refund within 14 days.'
        }
    ];

    const segments = [
        { name: 'Residential Rentals', icon: Home, color: 'bg-blue-100 text-blue-700 border-blue-200' },
        { name: 'Multifamily', icon: Building2, color: 'bg-green-100 text-green-700 border-green-200' },
        { name: 'HOAs & Condos', icon: Users, color: 'bg-amber-100 text-amber-700 border-amber-200' },
        { name: 'Commercial Property', icon: Building, color: 'bg-purple-100 text-purple-700 border-purple-200' },
        { name: 'Self-Storage', icon: Warehouse, color: 'bg-slate-100 text-slate-700 border-slate-200' },
        { name: 'Short-Term Rentals', icon: Droplets, color: 'bg-red-100 text-red-700 border-red-200' }
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
                        { label: 'Property Management' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                            <Building2 size={16} />
                            <span>AI for Property Managers</span>
                        </div>

                        <p className="text-lg md:text-xl text-blue-700 font-medium mb-4">
                            It&apos;s 2 AM. A tenant has water coming through the ceiling. Who answers?
                        </p>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">Property Management Answering Service</span>: Every Tenant Call Answered, Every Emergency Sorted, 24/7
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
                                Get Started
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
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">What does a property management answering service do?</h2>
                    <p className="mt-3 text-lg leading-relaxed text-slate-700">A property management answering service answers tenant, owner and prospect calls when your office can’t, especially nights and weekends. For each maintenance call it takes the property, unit, problem and urgency, takes an urgent message for your on-call person on true emergencies (by the rules you set), and logs routine requests for the next business day. Dooza’s AI answering service does this 24/7 and sends your team a summary of every call. Every Dooza product starts with a refundable pilot: 100% refund within 14 days.</p>
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
                            The After-Hours Problem Every Property Manager Knows
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Tenants expect someone to answer. Your on-call person needs to sleep. Both can be true.
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
                                A receptionist that answers every call, sorts it by your rules, and wakes someone only when it should.
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
                            Why Property Managers Use Dooza
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Fewer 2 AM calls for things that can wait, and no missed calls for things that can’t.
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
            {/* 6. HONEST FIT SECTION           */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight text-center">
                        AI or a Live Answering Service?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="border border-slate-200 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Dooza is a good fit if</h3>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm leading-relaxed">
                                <li>You want every call answered and sorted by your own written rules</li>
                                <li>Most after-hours calls are routine and can wait for the morning</li>
                                <li>You want a summary of every call and the option to change the rules any day</li>
                            </ul>
                        </div>
                        <div className="border border-slate-200 rounded-2xl p-6">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">A live call center is the better pick if</h3>
                            <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm leading-relaxed">
                                <li>Your management agreements or insurers require a human to answer every call</li>
                                <li>Your tenants mostly need long, emotional conversations, not a quick report</li>
                                <li>You need operators to make judgment calls you can&apos;t write down as rules</li>
                            </ul>
                        </div>
                    </div>
                    <p className="mt-6 text-sm text-slate-500 text-center">Related: <a href="/ai-receptionist" className="font-medium text-primary-700 underline">AI receptionist</a> · <a href="/industries/trades" className="font-medium text-primary-700 underline">answering service for the trades</a> · <a href="/ai-receptionist-cost-calculator" className="font-medium text-primary-700 underline">cost calculator</a></p>
                </div>
            </section>

            {/* =============================== */}
            {/* 7. SEGMENTS SERVED SECTION      */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            Built for Every Kind of Portfolio
                        </h2>
                        <p className="text-lg text-slate-600">
                            You set the rules for each portfolio: residential, multifamily, associations or commercial.
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
                        Let Your On-Call Person Sleep Through the Small Stuff
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        Dooza answers every tenant call, sorts emergencies from routine requests by your rules, and gives your team a clean record of every call. Book a free 30-minute call to scope your pilot.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={getProductSignupUrl('workforce')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1"
                        >
                            Get Started
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
