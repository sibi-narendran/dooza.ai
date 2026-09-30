'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    BookOpen,
    Building2,
    Check,
    CornerUpLeft,
    Gauge,
    Mail,
    MessageCircle,
    Pause,
    Phone,
    Play,
    Plug,
    Plus,
    ShieldCheck,
    Star,
} from 'lucide-react';
import { useBookingModal } from '@/components/BookingModalProvider';
import { trackDemoClick } from '@/lib/analytics';
import { CALLBACK_NUMBER_DISPLAY, CALLBACK_NUMBER_E164 } from '@/lib/aiReceptionistData';

/* Palette lifted from the reference layout */
const PLUM = '#7C1B5A';
const LIME = '#E3F770';
const ORANGE = '#9E4418';

function Reveal({ children, delay = 0, className = '' }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

function Cta({ source, children = 'Get my free sample', tone = 'lime', size = 'md' }) {
    const { openModal } = useBookingModal();
    const tones = {
        lime: 'bg-[#E3F770] text-black hover:bg-[#d4ea55]',
        plum: 'bg-[#7C1B5A] text-white hover:bg-[#65164a]',
    };
    const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-2 text-base', lg: 'px-6 py-2.5 text-lg' };
    return (
        <button
            type="button"
            onClick={() => { openModal(); trackDemoClick(source); }}
            className={`inline-flex items-center justify-center rounded-lg font-normal transition-colors ${tones[tone]} ${sizes[size]}`}
        >
            {children}
        </button>
    );
}

function Eyebrow({ children }) {
    return (
        <div className="inline-block rounded-lg border px-4 py-2 text-xs uppercase tracking-[0.5px]" style={{ color: ORANGE, borderColor: ORANGE }}>
            {children}
        </div>
    );
}

/* ---------------- Hero ---------------- */

const slides = [
    { card: 'reply', label: 'Show an AI draft' },
    { card: 'approve', label: 'Show the approval queue' },
    { card: 'setup', label: 'Show the 48-hour setup' },
];

function TypedText({ text, active }) {
    const [n, setN] = useState(0);
    useEffect(() => {
        if (!active) { setN(0); return undefined; }
        const id = setInterval(() => setN((v) => (v >= text.length ? v : v + 2)), 30);
        return () => clearInterval(id);
    }, [active, text]);
    return <>{text.slice(0, n)}<span className="cs-caret">|</span></>;
}

function HeroCard({ type, active }) {
    if (type === 'reply') {
        return (
            <div className="flex h-full flex-col gap-3 p-5 text-[13px] leading-snug">
                <div className="flex items-center gap-2 text-white/70"><Mail className="h-4 w-4" /> Gmail · support@yourshop.com</div>
                <div className="rounded-lg bg-white p-3 text-slate-800">
                    <div className="mb-1 text-[11px] font-medium text-slate-500">Priya · 9:14 pm</div>
                    Hi! My order #4471 says delivered but it isn&apos;t here. Can you check?
                </div>
                <div className="rounded-lg border border-white/20 bg-black/30 p-3 font-mono text-[11px] text-white/80">
                    DOOZA → ACTION<br />Looked up #4471 in Shopify · carrier scan 2:14 pm · porch drop
                </div>
                <div className="rounded-lg bg-[#E3F770] p-3 text-black">
                    <div className="mb-1 text-[11px] font-medium text-black/60">Dooza AI draft</div>
                    <TypedText active={active} text="Hi Priya, sorry about that. The carrier marked it left at your porch at 2:14 pm. Could you check with neighbours? If it's not there by tomorrow, we'll send a replacement." />
                </div>
            </div>
        );
    }
    if (type === 'approve') {
        return (
            <div className="flex h-full flex-col gap-3 p-5 text-[13px]">
                <div className="flex items-center gap-2 text-white/70"><MessageCircle className="h-4 w-4" /> Owner WhatsApp group</div>
                {[
                    ['Refund request · Order #4502', 'Needs you'],
                    ['Where is my parcel? · #4498', 'Approved'],
                    ['Size exchange · #4490', 'Approved'],
                    ['Wholesale enquiry', 'Sent to you'],
                ].map(([label, state], i) => (
                    <div key={label} className="cs-rise flex items-center justify-between rounded-lg bg-white/95 px-3 py-2.5 text-slate-800" style={{ animationDelay: `${0.2 + i * 0.25}s` }}>
                        <span>{label}</span>
                        <span className={`rounded-md px-2 py-0.5 text-[11px] ${state === 'Approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-orange-100 text-orange-800'}`}>{state}</span>
                    </div>
                ))}
                <div className="mt-auto flex gap-2">
                    <span className="flex-1 rounded-lg bg-[#E3F770] py-2 text-center text-black">Approve &amp; send</span>
                    <span className="flex-1 rounded-lg border border-white/40 py-2 text-center text-white">Edit</span>
                </div>
            </div>
        );
    }
    return (
        <div className="flex h-full flex-col gap-3 p-5 text-[13px]">
            <div className="text-white/70">Your setup · day 1 → day 2</div>
            {['Setup call with a Dooza engineer', 'Connect Gmail, Shopify or Gorgias', 'Answer 20 of your real messages', 'Tune the voice with you', 'Go live, approval on'].map((step, i) => (
                <div key={step} className="cs-rise flex items-center gap-3 rounded-lg bg-white/95 px-3 py-2.5 text-slate-800" style={{ animationDelay: `${0.2 + i * 0.3}s` }}>
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7C1B5A] text-white"><Check className="h-3 w-3" /></span>
                    {step}
                </div>
            ))}
            <div className="mt-auto text-white/80">Live in 48 hours · free for 14 days</div>
        </div>
    );
}

function Hero() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 7000);
        return () => clearInterval(id);
    }, [index]);

    return (
        <section className="relative overflow-hidden bg-[#2E1B28]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_40%,rgba(124,27,90,0.45),transparent_60%)]" />
            <div className="relative mx-auto max-w-[1344px] border-x border-white/15 px-5 md:px-16">
                <div className="grid items-center gap-12 py-16 md:min-h-[640px] md:grid-cols-[1.1fr_0.9fr] md:py-20">
                    <div>
                        <div className="mb-4 text-sm uppercase tracking-[3px] text-white/85">Customer support for online stores</div>
                        <h1 className="mb-5 max-w-xl text-4xl leading-[1.25] tracking-[-1px] text-white md:text-[48px]">Every customer answered in minutes. You approve before anything sends.</h1>
                        <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/90 md:text-xl">
                            AI drafts the reply, a Dooza specialist checks it, and you tap approve. Right inside your Gmail, Shopify Inbox or Gorgias.
                        </p>
                        <Cta source="support_hero" size="lg" />
                        <div className="mt-4 text-base text-white/85">Free 20-message sample, then 14 days free, then $300/month.</div>
                        <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6">
                            <Image src="/founder-sibi.jpeg" alt="Sibi Narendran, founder of Dooza" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                            <p className="text-sm leading-snug text-white/85">&ldquo;I&apos;ll set this up with you myself.&rdquo;<br /><span className="text-white/70">Sibi Narendran, founder · text {CALLBACK_NUMBER_DISPLAY}</span></p>
                        </div>
                    </div>
                    <div className="hidden flex-col items-center gap-4 md:flex">
                        <div className="relative h-[440px] w-[370px] overflow-hidden rounded-xl border border-white/30 bg-black/40 shadow-2xl backdrop-blur-md">
                            {slides.map((s, i) => (
                                <div key={s.card} aria-hidden={i !== index} className={`absolute inset-0 transition-opacity duration-500 ${i === index ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
                                    <HeroCard type={s.card} active={i === index} />
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            {slides.map((s, i) => (
                                <button key={s.card} type="button" aria-label={s.label} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? 'bg-[#E3F770]' : 'bg-white/50'}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- Channels ---------------- */

const tools = ['Gmail', 'Shopify Inbox', 'Gorgias'];

function Channels() {
    return (
        <section className="border-b border-[#b0b0b0] bg-white">
            <div className="mx-auto max-w-[1344px] border-x border-[#b0b0b0] px-5 py-10 text-center">
                <div className="mb-5 text-xs uppercase tracking-[3px] text-slate-600">We answer inside one of these. Nothing to migrate.</div>
                <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-3">
                    {tools.map((t) => (
                        <span key={t} className="whitespace-nowrap text-2xl tracking-[-0.5px] text-slate-600 md:text-3xl">{t}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- Problem collage ---------------- */

function ChaosCard({ className, children, delay }) {
    return (
        <div className={`cs-float absolute rounded-xl bg-white p-3 text-[13px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] ${className}`} style={{ animationDelay: delay }}>
            {children}
        </div>
    );
}

function RedTag({ children, className }) {
    return (
        <div className={`cs-float absolute flex items-center gap-2 rounded-md bg-[#c0473a] px-4 py-2 text-sm text-white shadow-lg ${className}`}>
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white text-[10px]">!</span>{children}
        </div>
    );
}

function Problem() {
    return (
        <section className="bg-white">
            <div className="mx-auto grid max-w-[1344px] items-center gap-12 border-x border-[#b0b0b0] px-5 py-20 md:grid-cols-2 md:px-16 md:py-28">
                <Reveal>
                    <h2 className="mb-6 text-3xl leading-[1.3] tracking-[-1px] text-[#1a1a1a] md:text-[40px]">Your inbox made the mess. You&apos;re the one answering it.</h2>
                    <p className="max-w-md text-base leading-relaxed text-[#1a1a1a]">
                        Order questions in Gmail, chats piling up in Shopify Inbox, a ticket from last Tuesday. You answer between packing orders, late at night, or not at all. Support agencies want a big store, and a full-time hire costs more than the problem.
                    </p>
                </Reveal>
                <div className="relative h-[620px] md:h-[460px]">
                    <ChaosCard className="left-0 top-0 w-56 md:top-4 md:w-60" delay="0s">
                        <div className="mb-1 flex items-center gap-2 text-xs font-medium text-slate-500"><Mail className="h-3.5 w-3.5" /> Gmail · 47 unread</div>
                        Where is my order?? It&apos;s been 6 days and nobody replied.
                    </ChaosCard>
                    <RedTag className="left-8 top-[92px] md:left-24 md:top-[108px]">No reply for 2 days</RedTag>
                    <ChaosCard className="right-0 top-[150px] w-52 md:top-0 md:w-56" delay="1.2s">
                        <div className="mb-2 text-xs font-medium text-slate-500">Shopify Inbox chat</div>
                        Do you ship to Canada? Want to order 3 today
                        <div className="mt-2 text-xs text-slate-500">Seen 3 days ago</div>
                    </ChaosCard>
                    <ChaosCard className="left-0 top-[290px] w-64 md:left-10 md:top-[190px] md:w-72" delay="0.6s">
                        <div className="mb-2 flex items-center gap-1 text-[#e8a33d]">{[0, 1, 2, 3, 4].map((s) => <Star key={s} className={`h-3.5 w-3.5 ${s === 0 ? 'fill-current' : ''}`} />)}</div>
                        Nice product, but the support is a ghost town. Took a week to hear back.
                    </ChaosCard>
                    <RedTag className="right-0 top-[390px] md:right-4 md:top-[250px]">Low rating</RedTag>
                    <ChaosCard className="bottom-0 right-10 w-64" delay="1.8s">
                        <div className="mb-1 text-xs font-medium text-slate-500">Gorgias · open 3 days</div>
                        Hi, I need to change the address on order #4510 before it ships!
                    </ChaosCard>
                    <RedTag className="bottom-[110px] left-0 md:bottom-24">Refund request waiting</RedTag>
                </div>
            </div>
        </section>
    );
}

/* ---------------- Product window ---------------- */

const queue = [
    ['Higher shipping cost than expected?', 'Jordan M', 'Billing', 'Drafted', 'Waiting on you'],
    ['Order #4471 not delivered', 'Priya S', 'Delivery', 'Sent', 'Resolved'],
    ['Exchange size M for L', 'Sam K', 'Returns', 'Sent', 'Resolved'],
    ['Damaged item, want refund', 'Alex R', 'Refund', 'Escalated', 'Sent to owner'],
    ['Do you ship to Canada?', 'Maya T', 'Pre-sale', 'Sent', 'Resolved'],
];

function ProductWindow() {
    return (
        <section className="bg-[#DFE8EF]">
            <div className="mx-auto max-w-[1344px] border-x border-[#b0b0b0] px-5 pt-20 md:px-16 md:pt-28">
                <Reveal className="mb-12 text-center">
                    <Eyebrow>Dooza support</Eyebrow>
                    <h2 className="mx-auto mb-5 mt-6 max-w-3xl text-3xl leading-[1.3] tracking-[-1px] text-[#1a1a1a] md:text-[40px]">AI answers first. Our team handles the rest.</h2>
                    <p className="mx-auto max-w-2xl text-base text-[#1a1a1a]">Routine questions get answered in minutes, day and night. Anything unusual goes to a Dooza specialist, and anything sensitive goes to you.</p>
                </Reveal>
                <Reveal>
                    <div className="relative mx-auto overflow-hidden rounded-t-xl border border-b-0 border-slate-300 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                        <div className="flex items-center gap-2 bg-[#3a3a3a] px-4 py-3">
                            {[0, 1, 2].map((d) => <span key={d} className="h-3 w-3 rounded-full bg-white/80" />)}
                        </div>
                        <div className="grid md:grid-cols-[220px_1fr]">
                            <aside className="hidden border-r border-slate-200 bg-slate-50 p-3 text-xs md:block">
                                {[['Needs your approval', 1], ['Drafted by AI', 3], ['With Dooza team', 2], ['Resolved today', 38], ['All conversations', 212]].map(([l, c], i) => (
                                    <div key={l} className={`mb-1 flex items-center justify-between rounded-md px-3 py-2.5 ${i === 0 ? 'bg-white font-medium shadow-sm' : 'text-slate-600'}`}>
                                        <span>{l}</span><span className="text-slate-500">{c}</span>
                                    </div>
                                ))}
                            </aside>
                            <div className="overflow-x-auto p-4">
                                <table className="w-full min-w-[640px] text-left text-xs">
                                    <thead className="text-[10px] uppercase tracking-wider text-slate-500">
                                        <tr>{['Conversation', 'Customer', 'Topic', 'AI status', 'Outcome'].map((h) => <th key={h} className="pb-3 font-normal">{h}</th>)}</tr>
                                    </thead>
                                    <tbody>
                                        {queue.map((r, i) => (
                                            <motion.tr
                                                key={r[0]}
                                                className="border-t border-slate-100"
                                                initial={{ opacity: 0, x: -12 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + i * 0.15 }}
                                            >
                                                <td className="py-3 pr-4 text-slate-800">{r[0]}</td>
                                                <td className="py-3 pr-4 text-slate-500">{r[1]}</td>
                                                <td className="py-3 pr-4 text-slate-500">{r[2]}</td>
                                                <td className="py-3 pr-4"><span className="rounded bg-sky-50 px-2 py-0.5 text-sky-700">{r[3]}</span></td>
                                                <td className="py-3 text-slate-600">{r[4]}</td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="h-24" />
                            </div>
                        </div>
                        <div className="absolute left-1/2 top-[45%] -translate-x-1/2">
                            <a href="#how-it-works" className="whitespace-nowrap rounded-lg bg-[#7C1B5A] px-6 py-2.5 text-white shadow-lg transition-colors hover:bg-[#65164a]">See how it works</a>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------- The team (bento) ---------------- */

function Team() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1344px] border-x border-[#b0b0b0] px-5 py-20 md:px-16 md:py-28">
                <Reveal className="mb-14 text-center">
                    <Eyebrow>Who does what</Eyebrow>
                    <h2 className="mb-5 mt-6 text-3xl leading-[1.3] tracking-[-1px] text-[#1a1a1a] md:text-[40px]">AI does the volume. People check the quality.</h2>
                    <p className="mx-auto max-w-3xl text-base text-[#1a1a1a]">You keep the final say on every reply. It&apos;s the setup big brands pay enterprise prices for, sized for a store with one inbox.</p>
                </Reveal>
                <div className="grid gap-4 md:grid-cols-3">
                    <Reveal className="relative min-h-[560px] overflow-hidden rounded-xl p-6 text-white">
                        <Image src="/support/card-sunset.jpg" alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                        <div className="absolute inset-0 bg-black/45" />
                        <div className="relative">
                            <h3 className="mb-2 text-2xl tracking-[-1px]">AI Concierge</h3>
                            <p className="mb-6 text-sm">Answers your inbox around the clock from your policies, your products and your past replies.</p>
                            <div className="space-y-3 text-[13px]">
                                <div className="rounded-lg bg-white/90 p-3 text-[#1a1a1a]"><b className="font-medium">Maya</b><br />Do you ship to Canada? And how long does it take?</div>
                                <div className="rounded-lg bg-black/55 p-3 font-mono text-[11px] text-white">DOOZA → ACTION<br />Checked shipping zones · CA enabled · 5-8 days</div>
                                <div className="rounded-lg bg-white/90 p-3 text-[#1a1a1a]"><b className="font-medium">Dooza AI</b><br />We do! Canada orders arrive in 5-8 business days, and shipping is free over $75.</div>
                            </div>
                        </div>
                    </Reveal>
                    <div className="grid gap-4">
                        <Reveal delay={0.1} className="rounded-xl bg-[#DFE8EF] p-6">
                            <h3 className="mb-2 text-2xl tracking-[-1px] text-[#1a1a1a]">Human specialists</h3>
                            <p className="mb-5 text-sm text-[#1a1a1a]">A Dooza team member reviews anything the AI isn&apos;t sure about, and checks a sample of every day&apos;s replies.</p>
                            <div className="flex items-center gap-3 rounded-lg bg-white p-3 text-[13px]">
                                <span className="rounded-md bg-[#E3F770] px-2 py-1 text-lg">9</span>
                                <span>of 212 messages needed a person this week. Every one had the full thread attached.</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.2} className="rounded-xl bg-[#4a2a3f] p-6 text-white">
                            <h3 className="mb-2 text-2xl tracking-[-1px]">Your approval</h3>
                            <p className="mb-5 text-sm text-white/80">For the first two weeks, nothing goes out until you tap approve. Switch to automatic sending when you trust it.</p>
                            <div className="rounded-lg bg-white/10 p-3 text-[13px]">
                                <div className="mb-2 text-white/80">Refund · Order #4502 · $64.00</div>
                                <div className="mb-3">Draft: &ldquo;So sorry it arrived damaged. We&apos;ve refunded you in full, no need to send it back.&rdquo;</div>
                                <div className="flex gap-2">
                                    <span className="rounded-md bg-[#E3F770] px-3 py-1 text-black">Approve</span>
                                    <span className="rounded-md border border-white/30 px-3 py-1">Edit</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <Reveal delay={0.3} className="relative min-h-[560px] overflow-hidden rounded-xl p-6 text-white">
                        <Image src="/support/hero-green.jpg" alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                        <div className="absolute inset-0 bg-black/45" />
                        <div className="relative">
                            <h3 className="mb-2 text-2xl tracking-[-1px]">Weekly report</h3>
                            <p className="mb-6 text-sm text-white/85">A short note in your WhatsApp group every Monday: what we answered, what went to you, what we learned.</p>
                            <div className="rounded-lg border border-white/25 bg-black/35 p-4 backdrop-blur-md">
                                <div className="text-xs text-white">Messages answered</div>
                                <div className="mb-4 text-4xl">212</div>
                                <div className="flex h-28 items-end gap-2">
                                    {[40, 55, 48, 70, 62, 85, 100].map((h, i) => (
                                        <motion.div key={i} className="flex-1 rounded-t bg-white/80" initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }} />
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4 rounded-lg bg-black/40 p-3 font-mono text-[11px] leading-relaxed text-white/85">
                                WEEK 3 · 212 answered · 9 went to you · avg first reply 3 min · new saved answer: &ldquo;Canada shipping&rdquo;
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

/* ---------------- How it works loop ---------------- */

const loopTiles = [
    { icon: BookOpen, title: 'Brand voice', desc: 'Learns from your past replies so answers sound like you, not a bot' },
    { icon: CornerUpLeft, title: 'Returns & refunds', desc: 'Follows your policy and sends money questions to you first' },
    { icon: Gauge, title: 'Quality checks', desc: 'A person reviews a sample of every day’s replies' },
    { icon: Plug, title: 'Your tools', desc: 'Works inside Gmail, Shopify Inbox or Gorgias. Nothing to migrate' },
];

function HowItWorks() {
    const [playing, setPlaying] = useState(true);
    const nodes = [
        { label: 'Customer message', cls: 'left-[6%] top-[14%]' },
        { label: 'AI drafts reply', cls: 'right-[6%] top-[14%]' },
        { label: 'Dooza team checks', cls: 'right-[6%] top-[62%]' },
        { label: 'You approve', cls: 'left-[6%] top-[62%]' },
    ];
    return (
        <section id="how-it-works" className="scroll-mt-24 bg-white">
            <div className="mx-auto max-w-[1344px] border-x border-t border-[#b0b0b0] px-5 pt-20 md:px-16 md:pt-28">
                <Reveal className="mb-12 text-center">
                    <Eyebrow>How it works</Eyebrow>
                    <h2 className="mb-5 mt-6 text-3xl leading-[1.3] tracking-[-1px] text-[#1a1a1a] md:text-[40px]">Support that gets better every week</h2>
                    <p className="mx-auto max-w-3xl text-base text-[#1a1a1a]">Every reply you approve or edit becomes a saved answer. Week one, you approve most things. By week three, the common questions answer themselves and only the unusual ones reach you.</p>
                </Reveal>
                <Reveal className="relative mx-auto mb-16 aspect-[16/9] max-w-4xl overflow-hidden rounded-2xl">
                    <Image src="/support/loop-bg.jpg" alt="" fill sizes="(min-width: 768px) 900px, 100vw" className="cs-drift object-cover" />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:h-48 md:w-48">
                        <svg viewBox="0 0 100 100" className={`cs-spin absolute inset-0 h-full w-full ${playing ? '' : 'cs-paused'}`} aria-hidden="true">
                            <circle cx="50" cy="50" r="46" fill="none" stroke="white" strokeWidth="0.8" strokeDasharray="60 12" />
                            <path d="M50 4 l4 -3 M50 4 l4 3" stroke="white" strokeWidth="0.8" fill="none" />
                            <path d="M50 96 l-4 -3 M50 96 l-4 3" stroke="white" strokeWidth="0.8" fill="none" />
                        </svg>
                        <span className="px-4 text-center text-[10px] uppercase tracking-[1.5px] text-white md:text-xs">Every reply teaches the next</span>
                    </div>
                    {nodes.map((n) => (
                        <div key={n.label} className={`absolute rounded-md bg-[#4a2a3f]/90 px-3 py-2 text-[11px] text-white md:px-5 md:py-2.5 md:text-sm ${n.cls}`}>{n.label}</div>
                    ))}
                    <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-md bg-white px-4 py-2 text-[11px] text-[#1a1a1a] md:px-8 md:text-sm">Saved answer library</div>
                    <button type="button" onClick={() => setPlaying((p) => !p)} aria-label={playing ? 'Pause animation' : 'Play animation'} className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white">
                        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>
                </Reveal>
            </div>
            <div className="mx-auto grid max-w-[1344px] grid-cols-2 border border-[#b0b0b0] md:grid-cols-4">
                {loopTiles.map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="group relative flex h-44 flex-col items-center justify-center border-[#b0b0b0] p-6 text-center transition-colors duration-300 hover:bg-[#9a8b96] [&:not(:last-child)]:border-r md:h-52">
                        <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-md bg-[#4a2a3f] text-white transition-transform duration-300 group-hover:-translate-y-6"><Icon className="h-4 w-4" /></span>
                        <div className="text-lg text-[#1a1a1a] transition-all duration-300 group-hover:-translate-y-6 group-hover:text-sm group-hover:text-white">{title}</div>
                        <p className="absolute bottom-6 left-6 right-6 translate-y-3 text-sm text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ---------------- Big statement ---------------- */

function Statement() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1344px] border-x border-[#b0b0b0] px-5 py-20 text-center md:py-24">
                <Reveal>
                    <div className="text-3xl leading-[1.4] tracking-[-1px] text-[#1a1a1a] md:text-[40px]">Answer every customer<br />Keep your evenings</div>
                    <p className="mx-auto mt-4 max-w-xl text-base text-slate-700">Start with 20 of your messages answered free. Then 14 days free. Then $300/month.</p>
                    <div className="mt-8"><Cta source="support_statement" tone="plum" /></div>
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------- 20-message test carousel + stats ---------------- */

const examples = [
    {
        img: '/support/shop-candles.jpg',
        tag: 'Home goods · example',
        title: 'A candle shop sends us 20 real messages.',
        q: '“My candle arrived cracked. Can I get a new one before Saturday? It’s a gift.”',
        a: '“So sorry! A replacement ships today by express, free, and should land Friday. No need to return the cracked one.”',
    },
    {
        img: '/support/shop-skincare.jpg',
        tag: 'Skincare · example',
        title: 'A skincare brand checks the voice before signing.',
        q: '“Is the night serum safe to use with retinol? I have sensitive skin.”',
        a: '“Great question. We’d suggest patch-testing first, and I’ve flagged this to our founder so you get a personal answer today.” → sent to owner',
    },
    {
        img: '/support/shop-apparel.jpg',
        tag: 'Apparel · example',
        title: 'A boutique sees exchanges handled in minutes.',
        q: '“Ordered a medium, need a large. How do I swap?”',
        a: '“Easy! Here’s your free exchange label. Drop it off within 30 days and we’ll ship the large as soon as it’s scanned.”',
    },
];

function Examples() {
    const [i, setI] = useState(0);
    useEffect(() => {
        const id = setInterval(() => setI((v) => (v + 1) % examples.length), 6500);
        return () => clearInterval(id);
    }, [i]);
    const ex = examples[i];
    return (
        <section className="bg-[#F6F2EF]">
            <div className="mx-auto max-w-[1344px] border-x border-[#b0b0b0] px-5 py-20 md:px-16">
                <Reveal className="mb-10 text-center">
                    <Eyebrow>The 20-message test</Eyebrow>
                    <h2 className="mb-4 mt-6 text-3xl leading-[1.3] tracking-[-1px] text-[#1a1a1a] md:text-[40px]">See your own customers answered before you pay</h2>
                    <p className="mx-auto max-w-2xl text-base text-[#1a1a1a]">Send us 20 recent customer messages. We write every answer in your voice and show you, free. The examples below are illustrative; your sample uses your own messages.</p>
                </Reveal>
                <div className="rounded-2xl bg-white p-4 md:p-5">
                    <div className="grid items-center gap-8 md:grid-cols-[300px_1fr]">
                        <div className="relative aspect-square overflow-hidden rounded-xl">
                            {examples.map((e, k) => (
                                <Image key={e.img} src={e.img} alt={`Illustrative ${e.tag.split(' · ')[0].toLowerCase()} shop owner`} fill sizes="300px" className={`object-cover transition-opacity duration-700 ${k === i ? 'opacity-100' : 'opacity-0'}`} />
                            ))}
                        </div>
                        <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                            <Eyebrow>{ex.tag}</Eyebrow>
                            <h3 className="mb-4 mt-4 text-2xl tracking-[-0.5px] text-[#1a1a1a]">{ex.title}</h3>
                            <p className="mb-3 text-[17px] leading-relaxed text-slate-600"><span className="text-slate-500">Customer:</span> {ex.q}</p>
                            <p className="mb-6 text-[17px] leading-relaxed text-[#1a1a1a]"><span className="text-slate-500">Our draft:</span> {ex.a}</p>
                            <div className="flex gap-2">
                                {examples.map((e, k) => (
                                    <button key={e.img} type="button" aria-label={`Example ${k + 1}`} onClick={() => setI(k)} className={`h-2.5 w-2.5 rounded-full ${k === i ? 'bg-[#E3F770]' : 'bg-slate-300'}`} />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="mx-auto grid max-w-[1344px] grid-cols-2 border-x border-t border-[#b0b0b0] md:grid-cols-4">
                {[['20', 'Messages answered free'], ['14 days', 'Free trial'], ['48 hours', 'To go live'], ['$300', `Per month, up to ${MONTHLY_LIMIT} messages`]].map(([v, l], k) => (
                    <Reveal key={v} delay={k * 0.08} className="border-b border-[#b0b0b0] p-6 md:border-b-0 md:p-8 [&:not(:last-child)]:border-r">
                        <div className="text-4xl tracking-[-1px] text-[#1a1a1a] md:text-5xl">{v}</div>
                        <div className="mt-2 text-lg text-[#1a1a1a] md:text-xl">{l}</div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

/* ---------------- Pricing: one path, three steps ---------------- */

const MONTHLY_LIMIT = 250;

const steps = [
    {
        step: 'Step 1',
        name: 'Free sample',
        price: '$0',
        per: '20 of your messages',
        points: ['Send us 20 recent customer messages', 'We answer every one in your voice', 'You judge the replies before deciding anything'],
    },
    {
        step: 'Step 2',
        name: 'Free trial',
        price: '$0',
        per: 'for 14 days',
        points: ['Set up with you on a call, live in 48 hours', 'You approve every reply before it sends', 'A WhatsApp group with your Dooza team'],
    },
    {
        step: 'Step 3',
        name: 'Support',
        price: '$300',
        per: `per month, up to ${MONTHLY_LIMIT} messages`,
        points: ['AI answers first, Dooza specialists check the rest', 'One channel: Gmail, Shopify Inbox or Gorgias', 'Weekly report, month-to-month, no setup fee'],
        dark: true,
    },
];

function Pricing() {
    return (
        <section id="pricing" className="scroll-mt-24 bg-white">
            <div className="mx-auto max-w-[1344px] border-x border-t border-[#b0b0b0] px-5 py-20 md:px-16 md:py-24">
                <Reveal className="mb-12 text-center">
                    <Eyebrow>Pricing</Eyebrow>
                    <h2 className="mb-4 mt-6 text-3xl leading-[1.3] tracking-[-1px] text-[#1a1a1a] md:text-[40px]">See it work before you pay anything</h2>
                    <p className="mx-auto max-w-2xl text-base text-[#1a1a1a]">Two free steps, then one monthly price. Busier than {MONTHLY_LIMIT} messages a month? We agree the price with you before you pay any more.</p>
                </Reveal>
                <div className="grid gap-4 md:grid-cols-3">
                    {steps.map((p, k) => (
                        <Reveal key={p.name} delay={k * 0.1} className={`flex flex-col rounded-xl p-8 ${p.dark ? 'bg-[#422839] text-white' : 'border border-[#b0b0b0] bg-[#F6F2EF] text-[#1a1a1a]'}`}>
                            <div className={`mb-1 text-xs uppercase tracking-[3px] ${p.dark ? 'text-[#E3F770]' : 'text-[#7C1B5A]'}`}>{p.step}</div>
                            <div className={`mb-6 text-sm uppercase tracking-[3px] ${p.dark ? 'text-white/85' : 'text-slate-700'}`}>{p.name}</div>
                            <div className="mb-1 text-5xl tracking-[-1px]">{p.price}</div>
                            <div className={`mb-8 ${p.dark ? 'text-white/85' : 'text-slate-700'}`}>{p.per}</div>
                            <ul className="space-y-3 text-[15px]">
                                {p.points.map((pt) => (
                                    <li key={pt} className="flex gap-3"><Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.dark ? 'text-[#E3F770]' : 'text-[#7C1B5A]'}`} />{pt}</li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <Cta source="support_pricing" tone="plum" size="lg" />
                    <div className="mt-3 text-sm text-slate-600">Starts with step 1. No card needed for the sample.</div>
                </div>
            </div>
        </section>
    );
}

/* ---------------- Who is behind this ---------------- */

function Founder() {
    return (
        <section className="bg-[#F6F2EF]">
            <div className="mx-auto grid max-w-[1344px] items-center gap-10 border-x border-t border-[#b0b0b0] px-5 py-20 md:grid-cols-[320px_1fr] md:px-16 md:py-24">
                <Reveal className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-xl">
                    <Image src="/founder-sibi.jpeg" alt="Sibi Narendran, founder of Dooza" fill sizes="320px" className="object-cover" />
                </Reveal>
                <Reveal delay={0.1}>
                    <Eyebrow>Who&apos;s behind this</Eyebrow>
                    <h2 className="mb-5 mt-6 text-3xl leading-[1.3] tracking-[-1px] text-[#1a1a1a] md:text-[40px]">&ldquo;I&apos;ll set this up with you myself.&rdquo;</h2>
                    <p className="mb-6 max-w-2xl text-base leading-relaxed text-[#1a1a1a]">
                        I&apos;m Sibi Narendran, founder of Dooza. I&apos;ll do your setup call, write your first 20 answers, and I&apos;m in the WhatsApp group with you. If a reply is wrong, you tell me, not a ticket queue.
                    </p>
                    <dl className="grid max-w-2xl gap-4 text-sm sm:grid-cols-2">
                        <div className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#7C1B5A]" /><div><dt className="text-slate-600">Text me</dt><dd><a href={`sms:${CALLBACK_NUMBER_E164}`} className="text-[#1a1a1a] underline underline-offset-4">{CALLBACK_NUMBER_DISPLAY}</a></dd></div></div>
                        <div className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#7C1B5A]" /><div><dt className="text-slate-600">Email</dt><dd><a href="mailto:support@dooza.ai" className="text-[#1a1a1a] underline underline-offset-4">support@dooza.ai</a></dd></div></div>
                        <div className="flex gap-3 sm:col-span-2"><Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7C1B5A]" /><div><dt className="text-slate-600">Company</dt><dd className="text-[#1a1a1a]">Adam Laboratory Inc., a Delaware C-Corporation · 131 Continental Dr, Suite 305, Newark, DE 19713</dd></div></div>
                        <div className="flex gap-3 sm:col-span-2"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#7C1B5A]" /><div><dt className="text-slate-600">Your data</dt><dd className="text-[#1a1a1a]">Encrypted connections, and your approval on anything sensitive.</dd></div></div>
                    </dl>
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------- Comparison: what an owner actually weighs ---------------- */

const compareCols = ['Answer it yourself', 'Hire a VA', 'AI built into your inbox', 'Dooza'];
const compareRows = [
    ['Who writes the reply', 'You', 'A person you trained', 'Suggested drafts, you edit', 'AI drafts, a specialist checks'],
    ['When customers hear back', 'When you get to it', 'Their working hours', 'When you open the inbox', 'Minutes, day and night'],
    ['Your time each week', 'Hours', 'Training and checking', 'Still reading every message', 'Tap approve, then nothing'],
    ['Wrong answer risk', 'Low, but slow', 'Depends on the person', 'Sends what AI guessed', 'You approve until you trust it'],
    ['Cost', 'Your evenings', 'Hourly, plus hiring time', 'Included or per reply', '$300/mo after 2 free steps'],
];

function Compare() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1344px] border-x border-t border-[#b0b0b0] px-5 py-20 md:px-16">
                <Reveal className="mb-10 text-center">
                    <Eyebrow>Your options</Eyebrow>
                    <h2 className="mb-4 mt-6 text-3xl leading-[1.3] tracking-[-1px] text-[#1a1a1a] md:text-[40px]">What you&apos;d do otherwise</h2>
                    <p className="mx-auto max-w-2xl text-base text-[#1a1a1a]">Most store owners answer it themselves at 11pm, hire a VA, or try the AI suggestions in Shopify Inbox or Gorgias. Here&apos;s how those compare.</p>
                </Reveal>
                <Reveal className="overflow-x-auto rounded-xl border border-[#b0b0b0]">
                    <table className="w-full min-w-[820px] text-left text-sm">
                        <thead className="bg-[#F6F2EF] text-xs uppercase tracking-wider text-slate-700">
                            <tr>
                                <th className="px-5 py-4 font-normal" />
                                {compareCols.map((h, j) => <th key={h} className={`px-5 py-4 font-normal ${j === 3 ? 'bg-[#E3F770] text-black' : ''}`}>{h}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {compareRows.map((r) => (
                                <tr key={r[0]} className="border-t border-[#e2e2e2]">
                                    {r.map((c, j) => (
                                        <td key={j} className={`px-5 py-4 ${j === 0 ? 'text-slate-700' : j === 4 ? 'bg-[#E3F770]/40 text-[#1a1a1a]' : 'text-slate-700'}`}>{c}</td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Reveal>
            </div>
        </section>
    );
}

/* ---------------- FAQ ---------------- */

function Faq({ items }) {
    const [open, setOpen] = useState(0);
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-[1344px] border-x border-[#b0b0b0] px-5 py-20 md:px-16 md:py-24">
                <Reveal className="mb-10 text-center">
                    <Eyebrow>FAQ</Eyebrow>
                    <h2 className="mt-6 text-3xl tracking-[-1px] text-[#1a1a1a] md:text-[40px]">Questions store owners ask us</h2>
                </Reveal>
                <div className="mx-auto max-w-3xl border-t border-[#b0b0b0]">
                    {items.map((f, k) => (
                        <div key={f.question} className="border-b border-[#b0b0b0]">
                            <button type="button" onClick={() => setOpen(open === k ? -1 : k)} aria-expanded={open === k} className="flex w-full items-center justify-between gap-6 py-5 text-left">
                                <h3 className="text-lg text-[#1a1a1a]">{f.question}</h3>
                                <Plus className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open === k ? 'rotate-45' : ''}`} style={{ color: PLUM }} />
                            </button>
                            <div className={`grid transition-all duration-300 ${open === k ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
                                <p className="overflow-hidden text-base leading-relaxed text-slate-600">{f.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------- Page ---------------- */

export default function SupportLanding({ faqs }) {
    return (
        <>
            <style>{`
                :where(.cs-root) :is(h1, h2, h3) { font-family: inherit; font-weight: 400; color: inherit; }
                @keyframes cs-drift { 0% { transform: scale(1.08) translateX(0); } 50% { transform: scale(1.14) translateX(-2%); } 100% { transform: scale(1.08) translateX(0); } }
                .cs-drift { animation: cs-drift 22s ease-in-out infinite; }
                @keyframes cs-marquee { to { transform: translateX(-50%); } }
                .cs-marquee { animation: cs-marquee 40s linear infinite; }
                @keyframes cs-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                .cs-float { animation: cs-float 6s ease-in-out infinite; }
                @keyframes cs-spin { to { transform: rotate(360deg); } }
                .cs-spin { animation: cs-spin 14s linear infinite; }
                .cs-paused, .cs-paused * { animation-play-state: paused; }
                @keyframes cs-rise { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
                .cs-rise { opacity: 0; animation: cs-rise 0.6s ease forwards; }
                @keyframes cs-blink { 50% { opacity: 0; } }
                .cs-caret { animation: cs-blink 1s steps(1) infinite; }
                @media (prefers-reduced-motion: reduce) { .cs-drift, .cs-marquee, .cs-float, .cs-spin, .cs-caret { animation: none; } .cs-rise { opacity: 1; animation: none; } }
            `}</style>
            <div className="bg-[#1a1a1a] px-4 py-2.5 text-center text-sm text-white md:text-[15px]">
                Free sample: send us 20 customer messages and see them answered in your voice.{' '}
                <SampleLink />
            </div>
            <Hero />
            <Channels />
            <Problem />
            <ProductWindow />
            <Team />
            <Founder />
            <HowItWorks />
            <Examples />
            <Pricing />
            <Compare />
            <Statement />
            <Faq items={faqs} />
        </>
    );
}

function SampleLink() {
    const { openModal } = useBookingModal();
    return (
        <button type="button" onClick={() => { openModal(); trackDemoClick('support_topbar'); }} className="ml-2 underline underline-offset-4" style={{ color: LIME }}>
            Get my free sample →
        </button>
    );
}
