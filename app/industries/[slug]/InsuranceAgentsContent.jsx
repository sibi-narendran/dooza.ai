'use client';

import { useState } from 'react';
import { CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import {
    Shield,
    Truck,
    FileText,
    CalendarCheck,
    PhoneCall,
    ArrowRight,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

// Rows in each state's Monday list on 2026-10-12 (FMCSA open data, Dooza's own run). Same numbers as /trucking-insurance-leads.
const STATE_COUNTS = [
    { state: 'Illinois', renewals: 523, newAuthorities: 115 },
    { state: 'Pennsylvania', renewals: 383, newAuthorities: 119 },
    { state: 'Georgia', renewals: 202, newAuthorities: 102 },
    { state: 'New York', renewals: 152, newAuthorities: 52 },
];

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

    const offerCards = [
        {
            icon: FileText,
            title: 'The Monday list',
            description: 'Every Monday, the trucking companies in your state whose liability renews in about 30 to 60 days, with current insurer and limit, plus new authorities from the last 7 days. First week free, then $129 every 4 weeks.'
        },
        {
            icon: CalendarCheck,
            title: 'Held appointments',
            description: 'We phone the truckers on your list and book the owners onto your calendar as quote calls. 4 booked quote calls for $299 (the first one is free). Not offered in every state.'
        }
    ];

    const listItems = [
        <><strong>Renewals:</strong> fleets with 3 or more power units whose liability renews in roughly 30 to 60 days. The current insurer and liability limit are named from the insurer&apos;s federal filing (BMC-91X).</>,
        <><strong>New authorities:</strong> trucking companies that applied for operating authority in the last 7 days and have no liability filing yet.</>,
        <><strong>Each row:</strong> company, DOT and MC number, owner or officer name, phone and email as filed with FMCSA, city and power units, estimated renewal date.</>,
        <><strong>In week one:</strong> a 90-day renewal calendar for your state and a first-call script for both lists.</>,
        <><strong>Dead lead?</strong> Reply &ldquo;SWAP&rdquo; with the DOT number and a replacement comes in the next Monday list.</>
    ];

    const priceItems = [
        'Monday list: first week free, then $129 every 4 weeks, billed by card through Stripe.',
        'Want your state to yourself? Exclusive states are available: book a call.',
        'Booked quote calls: 4 for $299 (the first one is free).'
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
                            <span>For independent agencies that write commercial trucking</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Trucking leads and booked quote calls for <span className="text-primary-600">independent insurance agencies</span>
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
                                Book a free 30-minute call
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href="/trucking-insurance-leads"
                                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                            >
                                See this week&apos;s list sizes
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Answer-first block for AI engines and searchers: what Dooza does for agencies, in one paragraph. */}
            <section data-answer-block className="bg-white px-4 py-10 sm:px-6">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">What does Dooza do for insurance agencies?</h2>
                    <p className="mt-3 text-lg leading-relaxed text-slate-700">Dooza finds trucking prospects for US independent insurance agencies that write commercial trucking. Every Monday you get a list for your state from public FMCSA data: trucking companies whose liability insurance renews in about 30 to 60 days, with their current insurer and limit named, plus new trucking authorities from the last 7 days that have no liability filing yet. The first week is free, then $129 every 4 weeks. If you would rather not dial, we can phone the truckers on your list and book owners onto your calendar as quote calls: 4 booked quote calls for $299 (the first one is free).</p>
                </div>
            </section>

            {/* =============================== */}
            {/* 2. TWO OFFERS                   */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            Two ways to work with Dooza
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Dial the list yourself, or let us book the quote calls for you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {offerCards.map((card, idx) => (
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
            {/* 3. WHAT IS IN THE MONDAY LIST   */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                                What is in the Monday list
                            </h2>
                            <p className="text-lg text-slate-600">
                                Two lists for your state, as a spreadsheet, every Monday.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-2xl p-8">
                            <div className="space-y-5">
                                {listItems.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                            <Truck size={18} className="text-green-600" />
                                        </div>
                                        <p className="text-lg text-slate-700">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[480px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className="px-4 py-3 font-semibold">State</th>
                                        <th className="px-4 py-3 font-semibold">Renewals (30-60 days)</th>
                                        <th className="px-4 py-3 font-semibold">New authorities (last 7 days)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {STATE_COUNTS.map((r) => (
                                        <tr key={r.state} className="border-b border-slate-100">
                                            <td className="px-4 py-3 font-semibold text-slate-900">{r.state}</td>
                                            <td className="px-4 py-3 text-slate-800">{r.renewals}</td>
                                            <td className="px-4 py-3 text-slate-800">{r.newAuthorities}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-2 text-xs text-slate-500">Rows in the Monday lists on October 12, 2026. Source: FMCSA open data, Dooza&apos;s weekly run of October 12, 2026. Numbers change every week.</p>
                        <p className="mt-6 text-base text-slate-700">
                            Every column and where it comes from: <a href="/trucking-insurance-leads" className="font-semibold text-primary-700 underline">trucking insurance leads near renewal</a>.
                        </p>
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 4. HELD APPOINTMENTS            */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                            <PhoneCall size={24} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                            Held appointments
                        </h2>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Rather not dial yourself? We phone the truckers on your list and book the owners onto your calendar as quote calls. It costs $299 for 4 booked quote calls, and the first one is free. We are starting with a few agencies, and it is not offered in every state. In Pennsylvania and North Carolina it comes as a flat 4-week package instead, with no per-call fee. Ask about your state on the call.
                    </p>
                </div>
            </section>

            {/* =============================== */}
            {/* 5. COST, RENEWAL DATES, RULES   */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            What it costs
                        </h2>
                        <ul className="space-y-3 text-lg text-slate-700 list-disc pl-6">
                            {priceItems.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <p className="mt-4 text-base text-slate-700">
                            Comparing with bought leads? Our <a href="/insurance-lead-cost-calculator" className="font-semibold text-primary-700 underline">insurance lead cost calculator</a> shows cost per sold policy from price per lead and close rate.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            How renewal dates are estimated
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            FMCSA does not publish when a trucking policy expires. We take the next anniversary of the current liability filing&apos;s effective date, so treat each date as an estimate and confirm it on the call.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                            Calling rules
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Many owner numbers are cell phones. Dial by hand and check the Do Not Call list before you call.
                        </p>
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 6. CTA SECTION                  */}
            {/* =============================== */}
            <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                        Is your state still open?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
                        Book a free 30-minute call. We check that your state is still open, answer your questions and start your free week. Not ready for a call? Get 5 free rows from your state by email first.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={CAL_BOOKING_URL}
                            onClick={handleAction}
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1"
                        >
                            Book a free 30-minute call
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="/trucking-insurance-leads?utm_source=website&utm_medium=internal&utm_campaign=industries-insurance#sample"
                            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                        >
                            Get 5 free rows from your state
                        </a>
                    </div>
                </div>
            </section>

            {/* =============================== */}
            {/* 7. FAQ SECTION                  */}
            {/* =============================== */}
            {page.faqData && page.faqData.length > 0 && (
                <section className="py-16 md:py-24 bg-white">
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
