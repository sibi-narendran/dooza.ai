import Link from 'next/link';
import Image from 'next/image';
import { Schibsted_Grotesk } from 'next/font/google';
import { Calendar, Phone, MessageSquare } from 'lucide-react';
import { getBookingUrlWithUtm } from '@/lib/links';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact';
import { testimonials } from '@/lib/homeData';

// Homepage (Sibi 2026-10-10 19:49 + 20:05 "improve it design wise, read Claude design").
// Concept: you are hiring a staff member, so the hero shows that employee's daily report, checked by a Dooza
// engineer. Palette: ink #14213D, paper #FFFFFF, mist #EEF3F7, brand teal #0F766E, approval yellow #FFE27A.
// One display face (Schibsted Grotesk) over the site's Inter body. One bold element (the report); the rest is quiet.
const display = Schibsted_Grotesk({ subsets: ['latin'], weight: ['500', '700', '800'], display: 'swap' });

const book = (placement) => getBookingUrlWithUtm('website', 'cta', `homepage_${placement}`);
const TEL = `tel:${CONTACT_PHONE_E164}`;
const SMS = `sms:${CONTACT_PHONE_E164}`;
const INK = 'text-[#14213D]';
const LINK = 'font-semibold text-[#0F766E] underline decoration-[#0F766E]/30 underline-offset-4 hover:decoration-[#0F766E]';

function ContactRow({ placement, onDark = false }) {
    const ghost = onDark
        ? 'border-white/30 text-white hover:bg-white/10'
        : 'border-[#14213D]/20 text-[#14213D] hover:border-[#14213D]/50';
    return (
        <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
                href={book(placement)}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${onDark
                    ? 'bg-white text-[#0F3F3B] hover:bg-[#E6F4F1] focus-visible:outline-white'
                    : 'bg-[#0F766E] text-white hover:bg-[#0B5F58] focus-visible:outline-[#0F766E]'}`}
            >
                <Calendar className="h-5 w-5" aria-hidden="true" /> Book a free pilot call
            </a>
            <a href={TEL} className={`inline-flex items-center justify-center gap-2.5 rounded-xl border px-6 py-4 text-base font-semibold transition-colors ${ghost}`}>
                <Phone className="h-5 w-5" aria-hidden="true" /> Call {CONTACT_PHONE_DISPLAY}
            </a>
        </div>
        <p className={`mt-4 text-[15px] ${onDark ? 'text-[#CFE7E2]' : 'text-slate-600'}`}>
            Prefer to text?{' '}
            <a href={SMS} className={`inline-flex items-center gap-1.5 font-semibold underline underline-offset-4 ${onDark ? 'text-white decoration-white/40' : 'text-[#0F766E] decoration-[#0F766E]/30'}`}>
                <MessageSquare className="h-4 w-4" aria-hidden="true" />Text us at {CONTACT_PHONE_DISPLAY}
            </a>
        </p>
        </div>
    );
}

const report = [
    { time: '8:02 am', text: 'Replied to a new quote request from your website and offered two call times.' },
    { time: '9:40 am', text: 'Followed up with 5 leads who went quiet last week.' },
    { time: '11:15 am', text: 'Drafted 6 answers to customer emails from your help docs.', approval: true },
    { time: '2:30 pm', text: 'Sent friendly reminders on 3 overdue invoices.' },
    { time: '5:00 pm', text: 'Updated your CRM and sent you this summary.' },
];

function DailyReport() {
    return (
        <figure className="relative mx-auto w-full max-w-[30rem] lg:mx-0 lg:ml-auto">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-[#14213D]/[0.06]" aria-hidden="true" />
            <div className="relative rounded-2xl border border-[#14213D]/10 bg-white shadow-[0_24px_60px_-28px_rgba(20,33,61,0.35)]">
                <div className="flex items-start justify-between gap-4 border-b border-[#14213D]/10 px-6 pb-4 pt-5">
                    <div>
                        <p className={`${display.className} text-lg font-bold ${INK}`}>Daily report</p>
                        <p className="text-sm text-slate-500">From your AI employee, Riley</p>
                    </div>
                    <p className="rounded-md bg-[#E6F4F1] px-2.5 py-1 text-xs font-semibold text-[#0F766E]">Example</p>
                </div>
                <ol className="px-6 py-2">
                    {report.map((r) => (
                        <li key={r.time} className="grid grid-cols-[4.5rem_1fr] gap-3 border-b border-dashed border-[#14213D]/10 py-3 last:border-0">
                            <span className="pt-px text-sm tabular-nums text-slate-400">{r.time}</span>
                            <span className={`text-[15px] leading-snug ${INK}`}>
                                {r.text}
                                {r.approval && (
                                    <span className="mt-2 flex flex-wrap items-center gap-2">
                                        <span className="rounded bg-[#FFE27A] px-1.5 py-0.5 text-xs font-semibold text-[#14213D]">Waiting for your OK</span>
                                        <span className="text-xs text-slate-500">Nothing sensitive goes out without you</span>
                                    </span>
                                )}
                            </span>
                        </li>
                    ))}
                </ol>
                <figcaption className="flex items-center gap-3 rounded-b-2xl bg-[#EEF3F7] px-6 py-4 text-sm text-slate-600">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-[#0F766E]" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Work checked by your Dooza engineer, who fixes anything Riley gets wrong.
                </figcaption>
            </div>
        </figure>
    );
}

const steps = [
    { title: 'You tell us the job', text: 'On a free 30-minute call, explain the work that eats your week. A Dooza engineer scopes it with you.' },
    { title: 'We build it into your tools', text: 'Your AI employee learns your real work and connects to what you already use: email, phone, CRM, calendar, spreadsheets.' },
    { title: 'It starts work in days', text: 'It does the job every day. Anything sensitive waits for your OK.' },
    { title: 'We keep it sharp', text: 'We read its work, fix mistakes and teach it new tasks as your business changes. You never maintain anything.' },
];

const jobs = [
    { title: 'Lead follow-up', text: 'Replies to new leads and keeps following up until they book or say no.' },
    { title: 'Customer emails', text: 'Answers common questions from your own docs and drafts the rest for you.' },
    { title: 'Calls and missed calls', text: 'Handles voice calls and texts back the people you could not pick up.' },
    { title: 'Invoice chasing', text: 'Sends polite reminders on unpaid invoices and tells you who paid.' },
    { title: 'Reviews and social posts', text: 'Replies to reviews and posts on your social accounts on a schedule.' },
    { title: 'Admin and reports', text: 'Keeps your CRM and sheets up to date and sends you a short daily summary.' },
];

const compareRows = [
    { label: 'Who sets it up', diy: 'You', hire: 'You train them', dooza: 'We do' },
    { label: 'When it gets something wrong', diy: 'You figure it out', hire: 'You manage it', dooza: 'We fix it' },
    { label: 'Gets better over time', diy: 'Only if you rebuild it', hire: 'With training', dooza: 'We improve it every month' },
    { label: 'Working hours', diy: 'When you run it', hire: 'Office hours', dooza: 'Every day, around the clock' },
    { label: 'Your time each week', diy: 'Hours', hire: 'Hours', dooza: 'Minutes to approve' },
];

export const homeFaq = [
    { question: 'What does Dooza do?', answer: 'Dooza builds AI employees for small businesses. You tell us a job that eats your week, our engineers build an AI employee that does it inside your tools, and then we watch it, fix it and keep improving it every month. You approve anything sensitive.' },
    { question: 'What is an AI employee?', answer: 'An AI agent that does one real job for your business, such as following up with leads, answering customer emails or chasing invoices. It works in the tools you already use, every day.' },
    { question: 'Do I need to be technical?', answer: 'No. You explain the job in plain words on a call. Dooza engineers do the building, the connecting and the upkeep.' },
    { question: 'Who maintains it?', answer: 'We do. Dooza monitors your AI employee, fixes mistakes and adds new skills as your business changes. You never maintain anything.' },
    { question: 'How fast is it live?', answer: 'Custom AI employees are live in days, usually within the first week of your pilot.' },
    { question: 'How does the refundable pilot work?', answer: 'A Dooza engineer scopes it with you on a free 30-minute call, then builds your first AI employee and puts it live on your real work. The pilot is paid, and if you ask within 14 days you get a 100% refund.' },
    { question: 'How much does it cost?', answer: 'Pricing depends on the job. Every build starts with a refundable pilot: 100% refund within 14 days. See dooza.ai/pricing.' },
    { question: 'Can I talk to a person?', answer: `Yes. Call or text ${CONTACT_PHONE_DISPLAY}, or book a free 30-minute call.` },
];

// Lead with the quote that describes a result.
const quotes = testimonials.filter((t) => t.quote.length < 200).slice(0, 3).sort((a, b) => (b.author === 'Interio Square') - (a.author === 'Interio Square'));
const H2 = `${display.className} text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] ${INK} md:text-[2.75rem]`;

export default function HomeLanding() {
    const [lead, ...rest] = quotes;
    return (
        <div className="home-landing bg-white text-[#14213D]">
            {/* Hero: the promise on the left, the employee's daily report on the right */}
            <section className="bg-[#EEF3F7] px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
                    <div>
                        <h1 className={`${display.className} text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.03em] ${INK} sm:text-6xl lg:text-[4.25rem]`}>
                            We build you an AI&nbsp;employee. We keep it working.
                        </h1>
                        <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-slate-600">
                            Tell us the work that eats your week. Dooza builds an AI employee that does it inside your tools, checks its work every day and makes it better every month.
                        </p>
                        <div className="mt-9">
                            <ContactRow placement="hero" />
                        </div>
                        <p className="mt-5 text-sm text-slate-500">Free call. Refundable pilot: 100% refund within 14 days.</p>
                    </div>
                    <DailyReport />
                </div>
            </section>

            {/* How it works: a real sequence, so numbered */}
            <section id="how-it-works" className="px-4 py-20 md:px-8 md:py-28">
                <div className="mx-auto max-w-6xl">
                    <h2 className={`${H2} max-w-2xl`}>How it works. You get the result, we do the AI work.</h2>
                    <ol className="mt-14 grid gap-x-10 gap-y-10 border-t-2 border-[#14213D] pt-8 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((s, i) => (
                            <li key={s.title}>
                                <span className={`${display.className} text-sm font-bold text-[#0F766E]`}>Step {i + 1}</span>
                                <h3 className={`${display.className} mt-2 text-xl font-bold ${INK}`}>{s.title}</h3>
                                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{s.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Jobs: a plain job list, like a job description */}
            <section id="what-they-do" className="bg-[#EEF3F7] px-4 py-20 md:px-8 md:py-28">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.6fr]">
                    <div>
                        <h2 className={H2}>Jobs you can hand over</h2>
                        <p className="mt-4 max-w-sm text-lg text-slate-600">Something else? If it repeats every week, tell us on the call.</p>
                    </div>
                    <dl className="grid gap-x-10 sm:grid-cols-2">
                        {jobs.map((j) => (
                            <div key={j.title} className="border-t border-[#14213D]/15 py-5">
                                <dt className={`${display.className} text-lg font-bold ${INK}`}>{j.title}</dt>
                                <dd className="mt-1 text-[15px] leading-relaxed text-slate-600">{j.text}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            {/* Comparison */}
            <section className="px-4 py-20 md:px-8 md:py-28">
                <div className="mx-auto max-w-5xl">
                    <h2 className={`${H2} max-w-2xl`}>Why not just buy an AI tool? Tools need someone to run them.</h2>
                    <div className="mt-10 space-y-6 md:hidden">
                        {compareRows.map((r) => (
                            <div key={r.label} className="border-t border-[#14213D]/15 pt-4">
                                <p className="text-sm text-slate-500">{r.label}</p>
                                <p className={`${display.className} mt-1 text-lg font-bold text-[#0F766E]`}>Dooza: {r.dooza}</p>
                                <p className="mt-1 text-sm text-slate-500">DIY tools: {r.diy}. Hiring: {r.hire}.</p>
                            </div>
                        ))}
                    </div>
                    <table className="mt-12 hidden w-full border-collapse text-left text-[15px] md:table">
                        <thead>
                            <tr className="border-b-2 border-[#14213D]">
                                <th className="py-4 pr-4 font-medium text-slate-500"><span className="sr-only">Question</span></th>
                                <th className="px-4 py-4 font-semibold text-slate-500">DIY AI tools</th>
                                <th className="px-4 py-4 font-semibold text-slate-500">Hiring someone</th>
                                <th className={`${display.className} rounded-t-xl bg-[#0F766E] px-5 py-4 text-lg font-bold text-white`}>Dooza</th>
                            </tr>
                        </thead>
                        <tbody>
                            {compareRows.map((r, i) => (
                                <tr key={r.label} className="border-b border-[#14213D]/10">
                                    <th scope="row" className={`py-4 pr-4 font-semibold ${INK}`}>{r.label}</th>
                                    <td className="px-4 py-4 text-slate-500">{r.diy}</td>
                                    <td className="px-4 py-4 text-slate-500">{r.hire}</td>
                                    <td className={`bg-[#E6F4F1] px-5 py-4 font-semibold text-[#0B4F49] ${i === compareRows.length - 1 ? 'rounded-b-xl' : ''}`}>{r.dooza}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="mt-10 max-w-2xl text-lg leading-relaxed text-slate-600">
                        We work with{' '}
                        <Link href="/industries/insurance-agents" className={LINK}>insurance agencies</Link>,{' '}
                        <Link href="/industries/dispatchers" className={LINK}>trucking and dispatch companies</Link>,{' '}
                        <Link href="/industries/real-estate" className={LINK}>real estate teams</Link> and{' '}
                        <Link href="/ai-solutions-for-business" className={LINK}>other service businesses</Link>.
                    </p>
                </div>
            </section>

            {/* Proof: one lead quote, two supporting */}
            {lead && (
                <section className="bg-[#EEF3F7] px-4 py-20 md:px-8 md:py-24">
                    <div className="mx-auto max-w-6xl">
                        <figure className="max-w-4xl">
                            <blockquote className={`${display.className} text-2xl font-medium leading-snug tracking-[-0.01em] ${INK} md:text-[2rem]`}>
                                &ldquo;{lead.quote}&rdquo;
                            </blockquote>
                            <figcaption className="mt-6 flex items-center gap-3 text-sm text-slate-600">
                                {lead.logo && <Image src={lead.logo} alt="" width={40} height={40} className="h-10 w-10 rounded-full bg-white object-contain p-1" />}
                                <span><span className={`font-semibold ${INK}`}>{lead.author}</span>, {lead.role}</span>
                            </figcaption>
                        </figure>
                        <div className="mt-12 grid gap-10 border-t border-[#14213D]/15 pt-10 md:grid-cols-2">
                            {rest.map((q) => (
                                <figure key={q.author}>
                                    <blockquote className={`text-[17px] leading-relaxed ${INK}`}>&ldquo;{q.quote}&rdquo;</blockquote>
                                    <figcaption className="mt-4 text-sm text-slate-600">
                                        {q.website
                                            ? <a href={q.website} target="_blank" rel="noopener noreferrer" className={`font-semibold ${INK} hover:text-[#0F766E]`}>{q.author}</a>
                                            : <span className={`font-semibold ${INK}`}>{q.author}</span>}, {q.role}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ */}
            <section id="faq" className="px-4 py-20 md:px-8 md:py-28">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.8fr]">
                    <div>
                        <h2 className={H2}>Questions owners ask us</h2>
                        <p className="mt-4 text-lg text-slate-600">
                            Pricing depends on the job. <Link href="/pricing" className={LINK}>See pricing</Link>.
                        </p>
                    </div>
                    <div className="border-t-2 border-[#14213D]">
                        {homeFaq.map((f, i) => (
                            <details key={f.question} open={i === 0} className="group border-b border-[#14213D]/10 py-5">
                                <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold ${INK} focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F766E]`}>
                                    {f.question}
                                    <span className="text-2xl font-light text-slate-400 transition-transform group-open:rotate-45 motion-reduce:transition-none" aria-hidden="true">+</span>
                                </summary>
                                <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">{f.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final call to action */}
            <section className="bg-[#0F3F3B] px-4 py-20 text-white md:px-8 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <h2 className={`${display.className} max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] md:text-6xl`}>
                        Tell us the job. We will build the employee.
                    </h2>
                    <p className="mt-5 max-w-xl text-lg text-[#CFE7E2]">
                        A free 30-minute call with a Dooza engineer. You leave knowing what we would build and what it would do. Every build starts with a refundable pilot: 100% refund within 14 days.
                    </p>
                    <div className="mt-9">
                        <ContactRow placement="final" onDark />
                    </div>
                </div>
            </section>

            {/* Phones: call and text always one tap away */}
            <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-[#14213D]/10 bg-white p-2 md:hidden">
                <a href={TEL} className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0F766E] font-semibold text-white"><Phone className="h-5 w-5" aria-hidden="true" /> Call us</a>
                <a href={SMS} className={`flex h-12 items-center justify-center gap-2 rounded-xl border border-[#14213D]/20 font-semibold ${INK}`}><MessageSquare className="h-5 w-5" aria-hidden="true" /> Text us</a>
            </div>
            <div className="h-16 md:hidden" aria-hidden="true" />
        </div>
    );
}
