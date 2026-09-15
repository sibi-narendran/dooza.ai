'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    Bug,
    CalendarCheck,
    Check,
    ChevronDown,
    ChevronUp,
    Clock3,
    Droplets,
    Flame,
    Gauge,
    Hammer,
    Headphones,
    House,
    Layers3,
    Leaf,
    Lightbulb,
    MapPin,
    MessageSquareText,
    PhoneCall,
    Quote,
    Route,
    ShieldCheck,
    Users,
    Warehouse,
    Wrench,
} from 'lucide-react';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BookingModal from '../../../components/BookingModal';

const marketPressures = [
    {
        icon: Gauge,
        title: 'Demand changes faster than headcount',
        description: 'A heat wave, cold snap, storm, or campaign can turn a normal phone queue into an overflow problem overnight.',
    },
    {
        icon: BarChart3,
        title: 'Missed calls disappear from the numbers',
        description: 'Booking rates can look healthy when reporting only counts answered calls and ignores the demand that never reached your team.',
    },
    {
        icon: Clock3,
        title: 'After-hours coverage often stops at a message',
        description: 'The caller needs a next step now. A note waiting for the morning team is not the same as a booked visit or a live escalation.',
    },
    {
        icon: MessageSquareText,
        title: 'New leads wait while the team triages',
        description: 'Web, retail, and referral leads cool off while a busy front office decides which callback should happen first.',
    },
    {
        icon: Layers3,
        title: 'Point tools create fractured handoffs',
        description: 'Calls, chat, scheduling, notes, and follow-up living in different places make it easier to quote, tag, or book the wrong thing.',
    },
    {
        icon: Users,
        title: 'Managers become the permanent safety net',
        description: 'When the system is fragile, leaders spend the day reviewing calls, fixing exceptions, and covering the gaps themselves.',
    },
];

const operatingModel = [
    {
        number: '01',
        label: 'Capture demand',
        title: 'Respond while intent is still high',
        description: 'Dooza can answer inbound calls around the clock, respond to common questions, capture the job, and move qualified customers toward a booking.',
        points: ['First-response coverage', 'Job and service-area qualification', 'Calendar-ready booking'],
    },
    {
        number: '02',
        label: 'Protect accuracy',
        title: 'Follow your rules, not a generic script',
        description: 'Train the agent on your services, markets, hours, pricing guidance, transfer rules, and the details dispatch needs before a technician is assigned.',
        points: ['Market-specific instructions', 'Urgent-call escalation', 'Structured call summaries'],
    },
    {
        number: '03',
        label: 'Scale operations',
        title: 'Give the team one repeatable front-office playbook',
        description: 'Use the same operating foundation across overflow, after-hours, busy seasons, and new locations while keeping each business’s customer experience intact.',
        points: ['Consistent intake process', 'Context-rich handoffs', 'Flexible coverage by team or location'],
    },
];

const trades = [
    { name: 'Heating & cooling', detail: 'Repairs, maintenance, installs', icon: Flame },
    { name: 'Plumbing', detail: 'Leaks, drains, water heaters', icon: Droplets },
    { name: 'Electrical', detail: 'Wiring, panels, urgent faults', icon: Lightbulb },
    { name: 'Roofing', detail: 'Inspections, repairs, replacements', icon: House },
    { name: 'Pest control', detail: 'Treatment and prevention', icon: Bug },
    { name: 'Remodeling', detail: 'Estimates and project intake', icon: Hammer },
    { name: 'Garage doors', detail: 'Service, installs, warranties', icon: Warehouse },
    { name: 'Landscaping', detail: 'Quotes, routes, recurring work', icon: Leaf },
];

const voiceDemos = [
    {
        name: 'Air & Plumbing Today',
        location: 'San Antonio + Austin, TX',
        services: 'AC, heating and plumbing calls in English and Spanish',
        logo: '/voice/air-plumbing-today/logo.jpg',
        href: '/voice/air-plumbing-today/',
    },
    {
        name: 'Grand Canyon Home Services',
        location: 'West Valley, AZ',
        services: 'HVAC, plumbing, electrical and gas fireplace calls',
        logo: '/voice/grand-canyon-home-services/logo.png',
        href: '/voice/grand-canyon-home-services/',
    },
];

const aiAdoptionTestimonials = [
    {
        quote: 'I can actually have a weekend now. I can rely on it. It’s a big difference.',
        author: 'Sarah Trumpe',
        role: 'Service Manager · Lodi Garage Door',
        company: 'Lodi Garage Door',
        website: 'https://lodidoor.com/',
        image: '/industries/home-services-testimonials/lodi-garage-door.png',
        imageAlt: 'Lodi Garage Door warehouse and service facility',
        href: 'https://www.avoca.ai/customers/lodi-garage-door-record-months',
    },
    {
        quote: 'It’s a better way to serve our customers, because we’re able to pour more of our energy into the more escalated calls.',
        author: 'Emma Corvan',
        role: 'CSR · Homer Home Service',
        company: 'Homer Home Service',
        website: 'https://www.homerhomeservice.com/',
        image: '/industries/home-services-testimonials/homer-home-service.png',
        imageAlt: 'Homer Home Service technician working on an outdoor HVAC unit',
        href: 'https://www.avoca.ai/customers/homer-STL',
    },
    {
        quote: 'This was a fire I didn’t need burning. Now my customers are happy, my employees are happy, and I’m happy.',
        author: 'Lawrence Castillo',
        role: 'President · Brody Pennell',
        company: 'Brody Pennell',
        website: 'https://brodypennell.com/',
        image: '/industries/home-services-testimonials/brody-pennell.png',
        imageAlt: 'Brody Pennell technician loading equipment beside a service vehicle',
        href: 'https://www.avoca.ai/customers/brody-pennell-platform-consolidation',
    },
];

function CornerMarks() {
    return (
        <>
            <span className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-primary-600" />
            <span className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-primary-600" />
            <span className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-primary-600" />
            <span className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-primary-600" />
        </>
    );
}

export default function HvacContent({ page }) {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(0);

    const openBooking = (event) => {
        event?.preventDefault();
        setIsBookingModalOpen(true);
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
            <Navbar />

            <main>
                <section className="relative overflow-hidden border-b border-primary-100 bg-primary-50 pb-20 pt-32 md:pb-28 md:pt-40">
                    <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(13,148,136,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,.12)_1px,transparent_1px)] [background-size:36px_36px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,.9),transparent_30%),radial-gradient(circle_at_18%_75%,rgba(255,255,255,.75),transparent_28%)]" />

                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative px-5 py-8 sm:px-10 md:py-12 lg:px-14">
                            <CornerMarks />
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-700">Trades · AI front office</p>
                            <h1 className="mt-6 max-w-5xl text-5xl font-black uppercase leading-[.92] tracking-[-0.065em] text-slate-950 sm:text-6xl md:text-7xl lg:text-[6.6rem]">
                                Busy season doesn’t ask if you’re staffed.
                            </h1>
                            <div className="mt-8 grid gap-8 border-t border-primary-200 pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
                                <p className="max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
                                    Dooza answers demand as it arrives—qualifying callers, booking the right next step, routing urgent work, and giving your team the context to move.
                                </p>
                                <div className="flex flex-col gap-3 sm:flex-row">
                                    <a href={CAL_BOOKING_URL} onClick={openBooking} className="inline-flex min-h-12 items-center justify-center gap-2 bg-primary-700 px-6 py-3 font-bold text-white transition hover:bg-primary-800">
                                        Book a 20-minute demo
                                        <ArrowRight className="h-5 w-5" />
                                    </a>
                                    <a href="#voice-demos" className="inline-flex min-h-12 items-center justify-center gap-2 border border-primary-300 bg-white/60 px-6 py-3 font-bold text-primary-800 transition hover:bg-white">
                                        Hear the AI
                                        <Headphones className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:-mt-14 lg:px-8">
                    <div className="mx-auto grid max-w-7xl overflow-hidden border border-primary-200 bg-white shadow-[0_24px_70px_rgba(13,148,136,.16)] lg:grid-cols-[1.15fr_.85fr]">
                        <div className="relative min-h-[22rem] overflow-hidden bg-primary-50 sm:min-h-[29rem]">
                            <Image src="/industries/home-services-ai-automation.png" alt="Trade professional using Dooza to manage calls, bookings, and routes" fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 flex flex-wrap gap-2 p-5 sm:p-7">
                                {['24/7 coverage', 'Live qualification', 'Booking', 'Call summaries'].map((item) => (
                                    <span key={item} className="border border-white/40 bg-slate-950/70 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">{item}</span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col justify-between bg-slate-950 p-7 text-white sm:p-10 lg:p-12">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary-300">The front-office problem</p>
                                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-[-0.04em] text-white sm:text-4xl">The work is already there. The coverage is not.</h2>
                                <p className="mt-5 text-lg leading-8 text-slate-300">Trade businesses lose opportunity in the gap between the ring and the response: when volume spikes, the office closes, a lead sits untouched, or the handoff breaks.</p>
                            </div>
                            <div className="mt-10 border-t border-white/15 pt-7">
                                <p className="text-sm leading-6 text-slate-400">Dooza is designed to cover that gap without forcing your team into another disconnected system.</p>
                                <a href="#market-pressure" className="mt-5 inline-flex items-center gap-2 font-bold text-primary-200 hover:text-white">See where revenue leaks<ArrowRight className="h-4 w-4" /></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="market-pressure" className="scroll-mt-24 py-24 md:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
                            <div className="lg:sticky lg:top-28 lg:self-start">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-700">Where revenue leaks</p>
                                <h2 className="mt-5 text-4xl font-black uppercase leading-[.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">The pressure points are operational.</h2>
                                <p className="mt-6 text-lg leading-8 text-slate-600">These patterns repeat across growing trade businesses, from single-market operators to multi-brand groups.</p>
                            </div>

                            <div className="grid gap-px overflow-hidden border border-primary-100 bg-primary-100 sm:grid-cols-2">
                                {marketPressures.map((pressure, index) => (
                                    <article key={pressure.title} className="group bg-white p-6 transition hover:bg-primary-50 sm:p-8">
                                        <div className="flex items-start justify-between gap-4">
                                            <span className="grid h-12 w-12 place-items-center border border-primary-200 bg-primary-50 text-primary-700"><pressure.icon className="h-5 w-5" /></span>
                                            <span className="text-sm font-bold text-slate-400">0{index + 1}</span>
                                        </div>
                                        <h3 className="mt-8 text-xl font-bold leading-snug text-slate-900">{pressure.title}</h3>
                                        <p className="mt-3 leading-7 text-slate-600">{pressure.description}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="border-y border-primary-100 bg-primary-50 py-24 md:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-700">A stronger operating model</p>
                            <h2 className="mt-5 text-4xl font-black uppercase leading-[.98] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">Build the front office around the customer journey.</h2>
                        </div>

                        <div className="mt-14 divide-y divide-primary-200 border-y border-primary-200">
                            {operatingModel.map((item) => (
                                <article key={item.number} className="grid gap-5 py-9 md:grid-cols-[6rem_.72fr_1.28fr] md:gap-8 md:py-12">
                                    <p className="text-3xl font-black text-primary-300">{item.number}</p>
                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary-700">{item.label}</p>
                                        <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-900">{item.title}</h3>
                                    </div>
                                    <div>
                                        <p className="text-lg leading-8 text-slate-600">{item.description}</p>
                                        <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                                            {item.points.map((point) => (
                                                <li key={point} className="flex items-start gap-2 text-sm font-semibold leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-primary-600" />{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="voice-demos" className="scroll-mt-24 py-24 md:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 lg:grid-cols-[1fr_.72fr] lg:items-end">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-700">Hear it live</p>
                                <h2 className="mt-5 text-4xl font-black uppercase leading-[.98] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">A real business deserves more than a generic bot demo.</h2>
                            </div>
                            <p className="text-lg leading-8 text-slate-600">These Dooza experiences are tailored around each company’s services, markets, and call rules so you can hear how the receptionist behaves in context.</p>
                        </div>

                        <div className="mt-14 grid gap-6 lg:grid-cols-2">
                            {voiceDemos.map((demo, index) => (
                                <a key={demo.name} href={demo.href} target="_blank" rel="noopener noreferrer" className="group grid min-h-[24rem] overflow-hidden border border-primary-200 bg-slate-950 text-white transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-900/20 sm:grid-cols-[.38fr_.62fr]">
                                    <div className="relative flex items-center justify-center overflow-hidden border-b border-white/15 bg-primary-50 p-8 sm:border-b-0 sm:border-r">
                                        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(13,148,136,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(13,148,136,.16)_1px,transparent_1px)] [background-size:24px_24px]" />
                                        <div className="relative grid h-28 w-28 place-items-center bg-white p-3 shadow-lg"><Image src={demo.logo} alt={`${demo.name} logo`} width={96} height={96} className="max-h-full w-auto object-contain" /></div>
                                    </div>
                                    <div className="flex flex-col justify-between p-7 sm:p-9">
                                        <div>
                                            <div className="flex items-start justify-between gap-4">
                                                <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary-300">Voice demo 0{index + 1}</p>
                                                <ArrowUpRight className="h-6 w-6 text-primary-300 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                            </div>
                                            <h3 className="mt-6 text-3xl font-bold leading-tight text-white">{demo.name}</h3>
                                            <p className="mt-3 flex items-center gap-2 text-sm text-slate-400"><MapPin className="h-4 w-4" />{demo.location}</p>
                                            <p className="mt-6 text-lg leading-8 text-slate-300">{demo.services}</p>
                                        </div>
                                        <div className="mt-8 flex items-center gap-2 border-t border-white/15 pt-5 font-bold text-primary-200"><Headphones className="h-5 w-5" />Open the interactive demo</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-slate-950 py-24 text-white md:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-300">Every trade, its own rules</p>
                                <h2 className="mt-5 text-4xl font-black uppercase leading-[.98] tracking-[-0.055em] text-white sm:text-5xl">One front office. Built around your operation.</h2>
                            </div>
                            <p className="max-w-xl text-lg leading-8 text-slate-300 lg:justify-self-end">Your service catalog, coverage area, booking windows, urgency rules, and customer language should shape the agent—not the other way around.</p>
                        </div>

                        <div className="mt-14 grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
                            {trades.map((trade) => (
                                <article key={trade.name} className="bg-slate-950 p-6 transition hover:bg-slate-900">
                                    <trade.icon className="h-6 w-6 text-primary-300" />
                                    <h3 className="mt-8 text-lg font-bold text-white">{trade.name}</h3>
                                    <p className="mt-2 text-sm leading-6 text-slate-400">{trade.detail}</p>
                                </article>
                            ))}
                        </div>

                        <div className="mt-10 grid gap-4 border-t border-white/15 pt-10 sm:grid-cols-3">
                            {[
                                { icon: PhoneCall, title: 'Answer', text: 'Calls, overflow, after-hours and spikes.' },
                                { icon: CalendarCheck, title: 'Book', text: 'Appointments, estimates and urgent handoffs.' },
                                { icon: Route, title: 'Route', text: 'The right context to the right person.' },
                            ].map((item) => (
                                <div key={item.title} className="flex items-start gap-4 p-4">
                                    <span className="grid h-12 w-12 shrink-0 place-items-center border border-white/15 bg-white/5 text-primary-300"><item.icon className="h-5 w-5" /></span>
                                    <div><h3 className="font-bold text-white">{item.title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{item.text}</p></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 py-24 md:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-700">What trade teams say after adopting AI</p>
                            <h2 className="mt-5 text-4xl font-black uppercase leading-[.98] tracking-[-0.055em] text-slate-950 sm:text-5xl">More coverage for customers. More breathing room for the team.</h2>
                            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">Experiences shared by trade operators in Avoca’s published customer stories.</p>
                        </div>

                        <div className="mt-14 grid gap-px overflow-hidden border border-primary-100 bg-primary-100 lg:grid-cols-3">
                            {aiAdoptionTestimonials.map((testimonial) => (
                                <article key={testimonial.author} className="flex min-h-[35rem] flex-col bg-white">
                                    <a href={testimonial.website} target="_blank" rel="noreferrer" className="group relative block aspect-[16/9] overflow-hidden bg-primary-100">
                                        <Image src={testimonial.image} alt={testimonial.imageAlt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.025]" />
                                        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 bg-slate-950/85 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-white backdrop-blur-sm">
                                            Visit {testimonial.company} <ArrowUpRight className="h-3 w-3" />
                                        </span>
                                    </a>
                                    <div className="flex flex-1 flex-col p-7 sm:p-9">
                                        <Quote className="h-8 w-8 text-primary-600" />
                                        <blockquote className="mt-6 flex-1 text-xl leading-9 text-slate-700">“{testimonial.quote}”</blockquote>
                                        <div className="mt-8 border-t border-slate-200 pt-6">
                                            <div className="flex items-center gap-3">
                                                <div className="grid h-12 w-12 shrink-0 place-items-center border border-slate-200 bg-slate-50 text-sm font-bold text-slate-600">
                                                    {testimonial.author.split(' ').map((name) => name[0]).join('')}
                                                </div>
                                                <div><p className="font-bold text-slate-900">{testimonial.author}</p><p className="mt-1 text-xs leading-5 text-slate-500">{testimonial.role}</p></div>
                                            </div>
                                            <a href={testimonial.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 transition hover:text-primary-700">
                                                by Avoca <ArrowUpRight className="h-3 w-3" />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 md:py-32">
                    <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.72fr_1.28fr] lg:gap-20 lg:px-8">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-700">Questions, answered</p>
                            <h2 className="mt-5 text-4xl font-black uppercase leading-[.98] tracking-[-0.055em] text-slate-950">What your team will want to know.</h2>
                            <p className="mt-6 text-lg leading-8 text-slate-600">Bring your actual services, call flows, and edge cases to a tailored demo.</p>
                            <a href={CAL_BOOKING_URL} onClick={openBooking} className="mt-7 inline-flex items-center gap-2 font-bold text-primary-700 hover:text-primary-800">Talk through your workflow<ArrowRight className="h-4 w-4" /></a>
                        </div>

                        <div className="divide-y divide-slate-200 border-y border-slate-200">
                            {page.faqData?.map((faq, index) => (
                                <div key={faq.question}>
                                    <button type="button" onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index} className="flex w-full items-center justify-between gap-5 py-7 text-left">
                                        <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                                        <span className="grid h-9 w-9 shrink-0 place-items-center border border-primary-200 bg-primary-50 text-primary-700">{openFaq === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}</span>
                                    </button>
                                    {openFaq === index && <p className="max-w-2xl pb-7 pr-12 text-lg leading-8 text-slate-600">{faq.answer}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="border-y border-primary-800 bg-primary-700 px-4 py-20 text-white sm:px-6 md:py-24 lg:px-8">
                    <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-10 lg:px-14">
                        <span className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-white/70" />
                        <span className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-white/70" />
                        <span className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-white/70" />
                        <span className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-white/70" />
                        <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                            <div className="max-w-4xl">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-100">Your next busy day is coming</p>
                                <h2 className="mt-5 text-4xl font-black uppercase leading-[.96] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">Build the coverage before the phones pile up.</h2>
                                <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-100">See how Dooza can answer, qualify, book, and hand off work using your real business rules.</p>
                            </div>
                            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                                <a href={CAL_BOOKING_URL} onClick={openBooking} className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-7 py-3 font-bold text-primary-800 transition hover:bg-primary-50">Book a demo<ArrowRight className="h-5 w-5" /></a>
                                <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-white/50 bg-white/10 px-7 py-3 font-bold text-white transition hover:bg-white/20">Start free</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
