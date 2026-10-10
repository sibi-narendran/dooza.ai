import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowRight, Calendar, Phone, MessageSquare, CheckCircle2, Wrench, Activity, TrendingUp,
    Inbox, UserPlus, Receipt, Star, FileSpreadsheet, PhoneCall, ShieldCheck, Check, Minus,
} from 'lucide-react';
import { getBookingUrlWithUtm } from '@/lib/links';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { testimonials } from '@/lib/homeData';

// Homepage rebuild (Sibi 2026-10-10 19:49): say in plain words what Dooza does (we build, run and keep improving
// AI employees), one main CTA, call + text everywhere, no SaaS signup buttons.
const book = (placement) => getBookingUrlWithUtm('website', 'cta', `homepage_${placement}`);
const TEL = `tel:${CONTACT_PHONE_E164}`;
const SMS = `sms:${CONTACT_PHONE_E164}`;

function BookButton({ placement, dark = false, className = '' }) {
    return (
        <a
            href={book(placement)}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold shadow-lg transition hover:-translate-y-0.5 ${dark
                ? 'bg-primary-400 text-slate-950 shadow-primary-500/20 hover:bg-primary-300'
                : 'bg-primary-700 text-white shadow-primary-700/20 hover:bg-primary-800'} ${className}`}
        >
            <Calendar className="h-5 w-5" />
            Book a free pilot call
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
    );
}

function CallTextLinks({ dark = false }) {
    const base = `inline-flex items-center gap-2 rounded-full border px-5 py-3.5 text-[15px] font-semibold transition ${dark
        ? 'border-white/20 text-white hover:border-white/40 hover:bg-white/5'
        : 'border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-white'}`;
    return (
        <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href={TEL} className={base}><Phone className="h-4 w-4" /> Call {CONTACT_PHONE_DISPLAY}</a>
            <a href={SMS} className={base}><MessageSquare className="h-4 w-4" /> Text us</a>
        </div>
    );
}

const feed = [
    { icon: UserPlus, text: 'Replied to a new website lead and offered two call times', tag: 'Done' },
    { icon: Inbox, text: 'Drafted 6 support replies from your help docs', tag: 'Needs your OK' },
    { icon: Receipt, text: 'Sent a polite reminder on 3 overdue invoices', tag: 'Done' },
    { icon: Wrench, text: 'Dooza engineer review: fixed an answer about delivery times', tag: 'Improved' },
];

function HeroConsole() {
    return (
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary-400/20 blur-3xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-400/15 text-primary-300">
                            <Activity className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-white">Your AI employee</p>
                            <p className="text-xs text-slate-400">Example of a normal day</p>
                        </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" /> Working
                    </span>
                </div>
                <ul className="divide-y divide-white/5">
                    {feed.map(({ icon: Icon, text, tag }) => (
                        <li key={text} className="flex items-start gap-3 px-5 py-4">
                            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                            <p className="flex-1 text-sm leading-snug text-slate-200">{text}</p>
                            <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${tag === 'Needs your OK'
                                ? 'bg-amber-400/15 text-amber-300'
                                : tag === 'Improved' ? 'bg-sky-400/15 text-sky-300' : 'bg-white/5 text-slate-400'}`}>{tag}</span>
                        </li>
                    ))}
                </ul>
                <div className="grid grid-cols-3 border-t border-white/10 text-center text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    <span className="px-2 py-3">Built by us</span>
                    <span className="border-x border-white/10 px-2 py-3">Watched daily</span>
                    <span className="px-2 py-3">Improved monthly</span>
                </div>
            </div>
        </div>
    );
}

const steps = [
    { icon: PhoneCall, title: 'Tell us the job', text: 'On a free 30-minute call, tell us the work that eats your week. A Dooza engineer scopes your AI employee with you.' },
    { icon: Wrench, title: 'We build it into your tools', text: 'We build it on your real work and connect it to what you already use: email, phone, CRM, calendar, spreadsheets. Live in days.' },
    { icon: Activity, title: 'It works, you stay in control', text: 'It does the job every day. Anything sensitive waits for your OK before it goes out.' },
    { icon: TrendingUp, title: 'We watch it and make it better', text: 'We check its work, fix mistakes and add new skills as your business changes. You never maintain anything.' },
];

const jobs = [
    { icon: UserPlus, title: 'Lead follow-up', text: 'Replies to new leads and keeps following up until they book or say no.' },
    { icon: Inbox, title: 'Customer support inbox', text: 'Answers common questions from your own docs and drafts the rest for you.' },
    { icon: PhoneCall, title: 'Calls and missed calls', text: 'Handles voice calls and texts back people you could not pick up.' },
    { icon: Receipt, title: 'Invoice chasing', text: 'Sends friendly reminders on unpaid invoices and tells you who paid.' },
    { icon: Star, title: 'Reviews and social posts', text: 'Replies to reviews and posts on your social accounts on a schedule.' },
    { icon: FileSpreadsheet, title: 'Admin and reports', text: 'Updates your CRM and sheets and sends you a short daily summary.' },
];

const compareRows = [
    { label: 'Who sets it up', diy: 'You', hire: 'You train them', dooza: 'We do' },
    { label: 'When it gets something wrong', diy: 'You figure it out', hire: 'You manage it', dooza: 'We fix it' },
    { label: 'Gets better over time', diy: 'Only if you rebuild it', hire: 'With training', dooza: 'We improve it every month' },
    { label: 'Working hours', diy: 'When you run it', hire: 'Office hours', dooza: 'Every day, around the clock' },
    { label: 'Your time each week', diy: 'Hours', hire: 'Hours', dooza: 'Minutes to approve' },
];

const industries = [
    { title: 'Insurance agencies', text: 'Quote requests, renewals, policy questions.', href: '/industries/insurance-agents' },
    { title: 'Trucking and dispatch', text: 'Load updates, driver check-ins, broker emails.', href: '/industries/dispatchers' },
    { title: 'Real estate', text: 'New leads, showings, follow-ups.', href: '/industries/real-estate' },
    { title: 'Any service business', text: 'If the work repeats, we can talk about it.', href: '/ai-solutions-for-business' },
];

export const homeFaq = [
    { question: 'What does Dooza do?', answer: 'Dooza builds AI employees for small businesses. You tell us a job that eats your week, our engineers build an AI employee that does it inside your tools, and then we watch it, fix it and keep improving it every month. You approve anything sensitive.' },
    { question: 'What is an AI employee?', answer: 'An AI agent that does one real job for your business, such as following up with leads, answering support emails or chasing invoices. It works in the tools you already use, every day.' },
    { question: 'Do I need to be technical?', answer: 'No. You explain the job in plain words on a call. Dooza engineers do the building, the connecting and the upkeep.' },
    { question: 'Who maintains it?', answer: 'We do. Dooza monitors your AI employee, fixes mistakes and adds new skills as your business changes. You never maintain anything.' },
    { question: 'How fast is it live?', answer: 'Custom AI employees are live in days, usually within the first week of your pilot.' },
    { question: 'How does the refundable pilot work?', answer: 'A Dooza engineer scopes it with you on a free 30-minute call, then builds your first AI employee and puts it live on your real work. The pilot is paid, and if you ask within 14 days you get a 100% refund.' },
    { question: 'How much does it cost?', answer: 'Pricing depends on the job. Every build starts with a refundable pilot: 100% refund within 14 days. See dooza.ai/pricing.' },
    { question: 'Can I talk to a person?', answer: `Yes. Call or text ${CONTACT_PHONE_DISPLAY}, or book a free 30-minute call.` },
];

const quotes = testimonials.filter((t) => t.quote.length < 200).slice(0, 3);

export default function HomeLanding() {
    return (
        <div className="home-landing">
            {/* HERO */}
            <section className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-32 text-white md:px-8 md:pb-28 md:pt-40">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_75%)]" aria-hidden="true" />
                <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[120px]" aria-hidden="true" />
                <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
                    <div className="text-center lg:text-left">
                        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary-200">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary-400" /> AI employees, done for you
                        </p>
                        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                            We build you an AI employee.{' '}
                            <span className="bg-gradient-to-r from-primary-300 to-emerald-200 bg-clip-text text-transparent">We keep it working.</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300 lg:mx-0">
                            Tell us the work that eats your week: leads, support emails, follow-ups, invoices. Dooza builds an AI employee that does it inside your tools, watches it every day and makes it better every month.
                        </p>
                        <div className="mt-9 flex flex-col items-center gap-4 lg:items-start">
                            <BookButton placement="hero" dark />
                            <CallTextLinks dark />
                        </div>
                        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400 lg:justify-start">
                            {['Live in days', 'You approve anything sensitive', '100% refund within 14 days'].map((t) => (
                                <li key={t} className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary-400" />{t}</li>
                            ))}
                        </ul>
                    </div>
                    <HeroConsole />
                </div>
            </section>

            {/* WHAT DOOZA DOES */}
            <section id="how-it-works" className="bg-white px-4 py-20 md:px-8 md:py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">What Dooza does</p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">You get the result. We do the AI work.</h2>
                        <p className="mt-4 text-lg text-slate-600">No software to learn. No prompts to write. Here is the whole process.</p>
                    </div>
                    <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map(({ icon: Icon, title, text }, i) => (
                            <li key={title} className="relative rounded-3xl border border-slate-200 bg-warm p-6">
                                <span className="absolute right-5 top-5 text-5xl font-black text-slate-200">{i + 1}</span>
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-700 text-white"><Icon className="h-5 w-5" /></div>
                                <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
                                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* JOBS */}
            <section id="what-they-do" className="bg-warm px-4 py-20 md:px-8 md:py-28">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">What they do</p>
                            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">Jobs our AI employees take off your plate</h2>
                        </div>
                        <p className="max-w-sm text-slate-600">Something else? If it repeats every week, tell us on the call.</p>
                    </div>
                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {jobs.map(({ icon: Icon, title, text }) => (
                            <div key={title} className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/5">
                                <Icon className="h-6 w-6 text-primary-700" />
                                <h3 className="mt-4 text-lg font-bold text-slate-950">{title}</h3>
                                <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* COMPARISON */}
            <section className="bg-white px-4 py-20 md:px-8 md:py-28">
                <div className="mx-auto max-w-5xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">Why not just buy an AI tool?</p>
                        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-5xl">Tools need someone to run them. That is us.</h2>
                    </div>
                    <div className="mt-10 space-y-3 md:hidden">
                        {compareRows.map((r) => (
                            <div key={r.label} className="rounded-2xl border border-slate-200 p-4">
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{r.label}</p>
                                <p className="mt-1.5 flex items-center gap-2 font-bold text-primary-800"><Check className="h-4 w-4 shrink-0" />Dooza: {r.dooza}</p>
                                <p className="mt-1 text-sm text-slate-500">DIY tools: {r.diy} · Hiring: {r.hire}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 hidden overflow-hidden rounded-3xl border border-slate-200 md:block">
                        <table className="w-full text-left text-sm md:text-[15px]">
                            <thead>
                                <tr className="bg-slate-50 text-slate-500">
                                    <th className="px-4 py-4 font-semibold md:px-6"><span className="sr-only">Question</span></th>
                                    <th className="px-3 py-4 font-semibold md:px-6">DIY AI tools</th>
                                    <th className="px-3 py-4 font-semibold md:px-6">Hiring someone</th>
                                    <th className="bg-primary-700 px-3 py-4 font-semibold text-white md:px-6">Dooza</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {compareRows.map((r) => (
                                    <tr key={r.label}>
                                        <th scope="row" className="px-4 py-4 font-semibold text-slate-900 md:px-6">{r.label}</th>
                                        <td className="px-3 py-4 text-slate-500 md:px-6"><span className="inline-flex items-start gap-1.5"><Minus className="mt-0.5 hidden h-4 w-4 shrink-0 text-slate-300 md:block" />{r.diy}</span></td>
                                        <td className="px-3 py-4 text-slate-500 md:px-6"><span className="inline-flex items-start gap-1.5"><Minus className="mt-0.5 hidden h-4 w-4 shrink-0 text-slate-300 md:block" />{r.hire}</span></td>
                                        <td className="bg-primary-50 px-3 py-4 font-semibold text-primary-900 md:px-6"><span className="inline-flex items-start gap-1.5"><Check className="mt-0.5 hidden h-4 w-4 shrink-0 text-primary-700 md:block" />{r.dooza}</span></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES */}
            <section className="bg-warm px-4 py-20 md:px-8 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">Built for busy small businesses</h2>
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {industries.map((ind) => (
                            <Link key={ind.href} href={ind.href} className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-primary-300">
                                <h3 className="font-bold text-slate-950">{ind.title}</h3>
                                <p className="mt-1.5 text-sm text-slate-600">{ind.text}</p>
                                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700">See how <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROOF */}
            <section className="bg-white px-4 py-20 md:px-8 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">What people say about Dooza</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {quotes.map((q) => (
                            <figure key={q.author} className="flex flex-col rounded-3xl border border-slate-200 bg-warm p-6">
                                <blockquote className="flex-1 text-[15px] leading-relaxed text-slate-700">&ldquo;{q.quote}&rdquo;</blockquote>
                                <figcaption className="mt-5 flex items-center gap-3">
                                    {q.logo && <Image src={q.logo} alt="" width={40} height={40} className="h-10 w-10 rounded-full border border-slate-200 bg-white object-contain p-1" />}
                                    <div>
                                        {q.website
                                            ? <a href={q.website} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-950 hover:text-primary-700">{q.author}</a>
                                            : <p className="text-sm font-bold text-slate-950">{q.author}</p>}
                                        <p className="text-xs text-slate-500">{q.role}</p>
                                    </div>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT STARTS */}
            <section className="bg-warm px-4 py-20 md:px-8 md:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 md:grid-cols-2 md:p-12">
                    <div>
                        <ShieldCheck className="h-9 w-9 text-primary-700" />
                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">Start small. Get your money back if it is not right.</h2>
                        <p className="mt-4 text-lg text-slate-600">Every build starts with a refundable pilot: 100% refund within 14 days. Pricing depends on the job.</p>
                        <Link href="/pricing" className="mt-5 inline-flex items-center gap-1 font-semibold text-primary-700 hover:text-primary-800">See pricing <ArrowRight className="h-4 w-4" /></Link>
                    </div>
                    <ol className="space-y-4">
                        {['Free 30-minute call to scope the job', 'Refundable pilot: we build your first AI employee on your real work', 'Keep it running: we monitor, fix and improve it every month'].map((t, i) => (
                            <li key={t} className="flex items-start gap-4 rounded-2xl bg-warm p-4">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">{i + 1}</span>
                                <span className="pt-1 font-medium text-slate-800">{t}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="bg-white px-4 py-20 md:px-8 md:py-24">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">Questions</h2>
                    <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
                        {homeFaq.map((f, i) => (
                            <details key={f.question} open={i === 0} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-slate-950">
                                    {f.question}
                                    <span className="text-2xl font-light text-slate-400 transition group-open:rotate-45">+</span>
                                </summary>
                                <p className="mt-3 leading-relaxed text-slate-600">{f.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-center text-white md:px-8 md:py-28">
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-primary-500/25 blur-[120px]" aria-hidden="true" />
                <div className="relative mx-auto max-w-3xl">
                    <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Tell us the job. We will build the employee.</h2>
                    <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">A free 30-minute call with a Dooza engineer. You leave knowing exactly what we would build and what it would do.</p>
                    <div className="mt-9 flex flex-col items-center gap-4">
                        <BookButton placement="final" dark />
                        <CallTextLinks dark />
                    </div>
                </div>
            </section>

            {/* MOBILE CALL / TEXT BAR */}
            <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white/95 p-2 backdrop-blur md:hidden">
                <a href={TEL} className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary-700 font-semibold text-white"><Phone className="h-5 w-5" /> Call us</a>
                <a href={SMS} className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 font-semibold text-slate-900"><MessageSquare className="h-5 w-5" /> Text us</a>
            </div>
            <div className="h-16 md:hidden" aria-hidden="true" />
        </div>
    );
}
