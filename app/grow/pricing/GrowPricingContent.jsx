'use client';

import { Check, ShieldCheck } from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import FAQAccordion from '@/components/FAQAccordion';
import { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { growPlans } from '@/lib/growData';

export default function GrowPricingContent({ faqData }) {
    return (
        <BookingModalProvider>
            <div className="min-h-screen bg-warm font-sans text-slate-900">
                <Navbar />
                <main>
                    <section className="pb-20 pt-28 md:pb-28 md:pt-36">
                        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                            <div className="text-center">
                                <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
                                    <em className="text-primary-700">How fast</em> do you want to grow?
                                </h1>
                                <p className="mt-4 text-lg text-slate-500">Pick the Dooza Grow engine that fits your business.</p>
                            </div>

                            <StaggerContainer className="mt-12 grid gap-6 lg:grid-cols-3">
                                {growPlans.map((p) => {
                                    const on = p.featured;
                                    return (
                                        <StaggerItem key={p.name}>
                                            <div className={`flex h-full flex-col rounded-3xl border bg-white p-7 transition-shadow hover:shadow-xl ${on ? 'border-primary-500 shadow-lg ring-1 ring-primary-200' : 'border-slate-200'}`}>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-400">{p.num}</span>
                                                    {p.tag && <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700">{p.tag}</span>}
                                                </div>
                                                <h2 className="mt-3 font-serif text-3xl font-bold italic text-primary-700">{p.name}</h2>
                                                <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-slate-600">{p.desc}</p>
                                                <div className={`mt-6 flex-1 rounded-2xl p-5 ${on ? 'bg-gradient-to-b from-slate-50 to-primary-50' : 'bg-slate-50'}`}>
                                                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">Your growth team</div>
                                                    <ul className="mt-4 space-y-3">
                                                        {p.agents.map((a) => (
                                                            <li key={a} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                                                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100">
                                                                    <Check className="h-3 w-3 text-primary-700" />
                                                                </span>
                                                                {a}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <BookDemoButton
                                                    source={`grow-pricing-${p.name.toLowerCase().replace(/\s+/g, '-')}`}
                                                    variant={on ? 'primary' : 'secondary'}
                                                    className="mt-6 !w-full !px-4 !text-base"
                                                >
                                                    Schedule a call
                                                </BookDemoButton>
                                            </div>
                                        </StaggerItem>
                                    );
                                })}
                            </StaggerContainer>

                            <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-slate-500">
                                <ShieldCheck className="h-4 w-4 text-primary-600" />
                                Every plan starts with a refundable pilot — 100% refund within 14 days. Pricing is scoped on a free 30-minute call.
                            </p>
                        </div>
                    </section>

                    <section className="bg-white py-20">
                        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                            <h2 className="mb-10 text-center font-serif text-3xl font-bold text-slate-900 md:text-4xl">Pricing questions</h2>
                            <FAQAccordion items={faqData} />
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </BookingModalProvider>
    );
}
