'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    CalendarCheck,
    CheckCircle2,
    Globe,
    Megaphone,
    Pause,
    Play,
    Search,
    ShieldCheck,
    Star,
} from 'lucide-react';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { testimonials } from '@/lib/homeData';
import { growPlans as plans } from '@/lib/growData';
import { trackFBViewContent } from '@/lib/analytics';

const agents = [
    {
        key: 'seo',
        num: '01',
        name: 'SEO & GEO',
        icon: Search,
        image: '/grow/seo.jpg',
        summary: 'Publishes helpful content, fixes technical issues and gets your business found on Google and in AI answers from ChatGPT, Perplexity and Gemini.',
        stage: 'Get found',
        tasks: ['Research high-intent keywords', 'Publish helpful articles on your cadence', 'Fix schema, titles and internal links', 'Track mentions in AI answers'],
        href: '/generative-engine-optimization',
        cta: 'See the SEO & GEO Agent',
    },
    {
        key: 'ads',
        num: '02',
        name: 'Paid Ads',
        icon: Megaphone,
        image: '/grow/ads.jpg',
        summary: 'Builds campaigns on Google and Meta, writes fresh ad variations and shifts budget toward what brings in leads, inside a cap you set.',
        stage: 'Get chosen',
        tasks: ['Launch Google and Meta campaigns', 'Write and test new ad creative', 'Pause what wastes budget', 'Report cost per lead weekly'],
        href: '#plans',
        cta: 'See the plans with Paid Ads',
    },
    {
        key: 'website',
        num: '03',
        name: 'Website',
        icon: Globe,
        image: '/grow/website.jpg',
        summary: 'Designs and improves the pages your customers land on, such as service pages, location pages and offers, so more visitors turn into inquiries.',
        stage: 'Get trusted',
        tasks: ['Redesign key landing pages', 'Add service and location pages', 'Speed up slow pages', 'Test headlines and forms'],
        href: '#plans',
        cta: 'See the plans with Website',
    },
    {
        key: 'conversion',
        num: '04',
        name: 'Conversion',
        icon: CalendarCheck,
        image: '/grow/conversion.jpg',
        summary: 'Answers every call, chat and form 24/7, qualifies the lead and books the right ones straight onto your calendar.',
        stage: 'Get booked',
        tasks: ['Answer calls and chats instantly', 'Ask your qualifying questions', 'Book jobs onto your calendar', 'Follow up with leads that went quiet'],
        href: '/ai-receptionist',
        cta: 'See the Conversion Agent',
    },
];

const industries = [
    { name: 'Home Services', line: 'More booked jobs from search, ads and missed calls', href: '/industries/trades' },
    { name: 'Healthcare & Dental', line: 'New patient inquiries answered and scheduled', href: '/ai-receptionist' },
    { name: 'Legal', line: 'Intake calls qualified before they reach an attorney', href: '/industries/law-firms' },
    { name: 'Beauty & Wellness', line: 'Bookings from Google, Instagram and after-hours chats', href: '/industries/salons' },
    { name: 'Real Estate', line: 'Every buyer and seller lead followed up in minutes', href: '/industries/real-estate' },
    { name: 'Insurance & Finance', line: 'Quote requests captured and routed the same day', href: '/industries/insurance-agents' },
    { name: 'Software & Agencies', line: 'Pipeline from AI search, content and paid campaigns', href: '/workforce' },
];

const integrations = ['Google Ads', 'Meta Ads', 'Google Business Profile', 'WordPress', 'Shopify', 'Wix', 'Webflow', 'Google Calendar', 'HubSpot', 'Close CRM', 'Calendly', 'ChatGPT', 'Perplexity', 'Gemini'];



// Numbers below are an illustrative example of the dashboard, not customer results.
const consoleFeed = [
    { agent: 'SEO', text: 'Published 4 pages', icon: Search },
    { agent: 'Ads', text: '2 new ad sets live', icon: Megaphone },
    { agent: 'Website', text: 'New landing page live', icon: Globe },
    { agent: 'Conversion', text: '12 leads booked', icon: CalendarCheck },
];

const BRIEF = 'Get more emergency plumbing jobs in Austin this month';

function useInView(ref) {
    const [inView, setInView] = useState(false);
    useEffect(() => {
        if (!ref.current) return;
        const obs = new IntersectionObserver(([entry]) => entry.isIntersecting && setInView(true), { threshold: 0.3 });
        obs.observe(ref.current);
        return () => obs.disconnect();
    }, [ref]);
    return inView;
}

function CountUp({ to, prefix = '', suffix = '', decimals = 0, start }) {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!start) return;
        let raf;
        const t0 = performance.now();
        const tick = (t) => {
            const p = Math.min(1, (t - t0) / 1600);
            setVal(to * (1 - Math.pow(1 - p, 3)));
            if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [to, start]);
    return <>{prefix}{val.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</>;
}

function HeroDashboard() {
    const ref = useRef(null);
    const inView = useInView(ref);
    const [leads, setLeads] = useState(0);
    useEffect(() => {
        if (!inView) return;
        setLeads(128);
        const id = setInterval(() => setLeads((l) => l + 1), 2600);
        return () => clearInterval(id);
    }, [inView]);
    const points = [12, 18, 16, 26, 31, 42, 58];
    const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${(i / (points.length - 1)) * 600} ${200 - p * 3}`).join(' ');
    return (
        <div ref={ref} className="relative mx-auto mt-14 max-w-5xl rounded-3xl border border-slate-200 bg-white/90 p-5 text-left shadow-2xl shadow-primary-900/10 backdrop-blur md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-700">
                        Qualified leads this month
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" /> LIVE
                        </span>
                    </div>
                    <div className="mt-2 text-5xl font-bold tabular-nums text-slate-900 md:text-6xl" aria-live="polite">{leads}</div>
                    <div className="mt-2 inline-flex items-center gap-2 text-sm text-slate-500">
                        <span className="rounded-full bg-primary-50 px-2 py-0.5 font-semibold text-primary-700">↑ trending up</span> vs last month
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 md:text-right">
                    <div>
                        <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Booked jobs</div>
                        <div className="text-2xl font-bold tabular-nums text-slate-900"><CountUp to={47} start={inView} /></div>
                    </div>
                    <div>
                        <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Calls answered</div>
                        <div className="text-2xl font-bold tabular-nums text-slate-900"><CountUp to={100} suffix="%" start={inView} /></div>
                    </div>
                </div>
            </div>
            <svg viewBox="0 0 600 210" className="mt-6 h-40 w-full md:h-52" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                    <linearGradient id="growFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#0d9488" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {[50, 100, 150].map((y) => <line key={y} x1="0" x2="600" y1={y} y2={y} stroke="#e2e8f0" strokeDasharray="4 6" />)}
                <path d={`${path} L 600 210 L 0 210 Z`} fill="url(#growFill)" className={inView ? 'grow-fade-in' : 'opacity-0'} />
                <path d={path} fill="none" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" pathLength="1" className={inView ? 'grow-line-draw' : 'opacity-0'} />
            </svg>
            <div className="mt-2 flex justify-between text-xs text-slate-400">{months.map((m) => <span key={m}>{m}</span>)}</div>
            <p className="mt-4 text-[11px] text-slate-400">Example dashboard for illustration. Your pilot dashboard shows your own numbers.</p>
        </div>
    );
}

function AgentTabs() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    useEffect(() => {
        if (paused) return;
        const id = setTimeout(() => setActive((a) => (a + 1) % agents.length), 6000);
        return () => clearTimeout(id);
    }, [active, paused]);
    const a = agents[active];
    return (
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col gap-3">
                {agents.map((ag, i) => {
                    const Icon = ag.icon;
                    const on = i === active;
                    return (
                        <button
                            key={ag.key}
                            onClick={() => { setActive(i); setPaused(true); }}
                            className={`relative overflow-hidden rounded-2xl border p-5 text-left transition-all ${on ? 'border-primary-300 bg-white shadow-lg' : 'border-slate-200 bg-white/60 hover:bg-white'}`}
                        >
                            <div className="flex items-center gap-4">
                                <span className={`text-xs font-bold ${on ? 'text-primary-700' : 'text-slate-400'}`}>{ag.num}</span>
                                <Icon className={`h-5 w-5 ${on ? 'text-primary-700' : 'text-slate-400'}`} />
                                <span className="text-lg font-bold text-slate-900">{ag.name}</span>
                            </div>
                            {on && <p className="mt-3 text-sm leading-relaxed text-slate-600">{ag.summary}</p>}
                            {on && !paused && <span key={active} className="grow-progress absolute bottom-0 left-0 h-1 bg-primary-600" />}
                        </button>
                    );
                })}
                <button
                    onClick={() => setPaused((p) => !p)}
                    className="inline-flex items-center gap-2 self-start text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                    {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                    {paused ? 'Play motion' : 'Pause motion'}
                </button>
            </div>
            <div key={a.key} className="grow-swap overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="relative aspect-[3/2] bg-warm">
                    <Image src={a.image} alt={`${a.name} agent illustration`} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6 md:p-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary-700">{a.num} · {a.stage}</span>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {a.tasks.map((t, i) => (
                            <li key={t} className="grow-task flex items-start gap-2 text-sm text-slate-700" style={{ animationDelay: `${i * 120}ms` }}>
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-600" /> {t}
                            </li>
                        ))}
                    </ul>
                    <Link href={a.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-900">
                        {a.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

function WatchItWork() {
    const ref = useRef(null);
    const inView = useInView(ref);
    const [typed, setTyped] = useState('');
    const [shown, setShown] = useState(0);
    useEffect(() => {
        if (!inView) return;
        let i = 0;
        let timers = [];
        const type = setInterval(() => {
            i += 1;
            setTyped(BRIEF.slice(0, i));
            if (i >= BRIEF.length) {
                clearInterval(type);
                consoleFeed.forEach((_, k) => timers.push(setTimeout(() => setShown(k + 1), 600 + k * 700)));
            }
        }, 45);
        return () => { clearInterval(type); timers.forEach(clearTimeout); };
    }, [inView]);
    const done = shown === consoleFeed.length;
    return (
        <div ref={ref} className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-slate-900 p-6 text-left shadow-2xl md:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2">Dooza Grow</span>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3 rounded-xl bg-white/5 px-4 py-3 font-mono text-sm text-white">
                <span>{typed}<span className="cursor-blink">|</span></span>
                <span className="hidden shrink-0 rounded-md bg-white/10 px-2 py-1 text-[10px] text-slate-300 sm:inline">ENTER ↵</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {consoleFeed.map((f, i) => {
                    const Icon = f.icon;
                    const on = i < shown;
                    return (
                        <div key={f.agent} className={`rounded-xl border p-4 transition-all duration-500 ${on ? 'translate-y-0 border-primary-400/40 bg-primary-500/10 opacity-100' : 'translate-y-2 border-white/10 opacity-40'}`}>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-300"><Icon className="h-3.5 w-3.5" /> {f.agent}</div>
                            <div className="mt-2 text-sm font-semibold text-white">{on ? f.text : 'Working…'}</div>
                        </div>
                    );
                })}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 md:grid-cols-4">
                {[
                    { label: 'qualified leads', to: 41 },
                    { label: 'booked jobs', to: 23 },
                    { label: 'calls answered', to: 96 },
                    { label: 'pages published', to: 4 },
                ].map((s) => (
                    <div key={s.label}>
                        <div className="text-3xl font-bold tabular-nums text-white"><CountUp to={s.to} start={done} /></div>
                        <div className="text-xs text-slate-400">{s.label}</div>
                    </div>
                ))}
            </div>
            <p className="mt-4 text-[11px] text-slate-500">Illustrative example of one month of work.</p>
        </div>
    );
}

export default function GrowContent({ faqData }) {
    useEffect(() => {
        trackFBViewContent?.('Dooza Grow', 'solution');
    }, []);

    const reviews = testimonials;
    const reviewLoop = [...reviews, ...reviews];

    return (
        <BookingModalProvider>
            <style>{`
                @keyframes grow-line { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
                .grow-line-draw { stroke-dasharray: 1; stroke-dashoffset: 1; animation: grow-line 2.2s ease-out forwards; }
                @keyframes grow-fade { from { opacity: 0; } to { opacity: 1; } }
                .grow-fade-in { animation: grow-fade 1.6s ease-out 0.6s both; }
                @keyframes grow-progress { from { width: 0; } to { width: 100%; } }
                .grow-progress { animation: grow-progress 6s linear forwards; }
                @keyframes grow-swap { from { opacity: 0; transform: translateY(12px) scale(.99); } to { opacity: 1; transform: none; } }
                .grow-swap { animation: grow-swap .5s ease-out both; }
                .grow-task { animation: grow-swap .45s ease-out both; }
                @keyframes grow-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
                .grow-marquee { animation: grow-marquee 45s linear infinite; }
                .grow-marquee-fast { animation-duration: 30s; }
                .grow-marquee-wrap:hover .grow-marquee { animation-play-state: paused; }
                @keyframes grow-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                .grow-float { animation: grow-float 7s ease-in-out infinite; }
                @media (prefers-reduced-motion: reduce) {
                    .grow-line-draw, .grow-fade-in, .grow-progress, .grow-swap, .grow-task, .grow-marquee, .grow-float { animation: none !important; stroke-dashoffset: 0; opacity: 1; }
                }
            `}</style>
            <div className="min-h-screen bg-warm font-sans text-slate-900">
                <Navbar />
                <main>
                    {/* Hero */}
                    <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
                        <div className="pointer-events-none absolute -right-32 top-16 hidden w-[380px] opacity-40 xl:block 2xl:-right-10 2xl:opacity-60">
                            <Image src="/grow/hero.jpg" alt="" width={480} height={720} priority className="grow-float rounded-[40px]" />
                        </div>
                        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                            <Breadcrumbs items={[{ label: 'Solutions', href: '/ai-solutions-for-business' }, { label: 'Dooza Grow' }]} />
                            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-700">
                                New · Dooza Grow
                            </span>
                            <h1 className="mx-auto mt-6 max-w-4xl font-serif text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-6xl">
                                More leads. More booked jobs. <em className="text-primary-700">Less marketing on your plate.</em>
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl">
                                Four AI agents handle your SEO, ads, website and lead follow-up around the clock, so qualified customers keep finding you, even while you sleep.
                            </p>
                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <BookDemoButton source="grow-hero" variant="primary" />
                                <Link href="/grow/pricing" className="inline-flex items-center gap-2 rounded-full border-2 border-primary-200 bg-white px-8 py-4 text-lg font-bold text-primary-800 hover:bg-primary-50">See plans <ArrowRight className="h-5 w-5" /></Link>
                            </div>
                            <p className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">
                                <ShieldCheck className="h-4 w-4 text-primary-600" /> 100% refund within 14 days
                            </p>
                            <HeroDashboard />
                        </div>
                    </section>

                    {/* Integrations marquee */}
                    <section className="border-y border-slate-200 bg-white py-8">
                        <p className="mb-5 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Plugs into the tools you already run · 1,000+ app integrations</p>
                        <div className="grow-marquee-wrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                            <div className="grow-marquee grow-marquee-fast flex w-max gap-12 whitespace-nowrap">
                                {[...integrations, ...integrations].map((n, i) => (
                                    <span key={i} className="text-lg font-semibold text-slate-400">{n}</span>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Statement */}
                    <section className="py-20 md:py-28">
                        <ScrollReveal>
                            <p className="mx-auto max-w-4xl px-4 text-center font-serif text-2xl leading-snug text-slate-800 md:text-4xl">
                                So far, AI has answered your questions. With Dooza Grow, <span className="text-primary-700">AI does the marketing work itself</span>: it writes, launches, tunes and follows up every day, with your approval on anything that matters.
                            </p>
                        </ScrollReveal>
                    </section>

                    {/* Four agents */}
                    <section id="agents" className="pb-20 md:pb-28">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <ScrollReveal>
                                <div className="mx-auto mb-12 max-w-3xl text-center">
                                    <span className="section-label mb-4 block text-primary-700">YOUR GROWTH TEAM</span>
                                    <h2 className="font-serif text-4xl font-bold text-slate-900 md:text-5xl">Four agents, one growth engine</h2>
                                    <p className="mt-4 text-lg text-slate-600">Create demand, catch every opportunity and convert more leads in one connected system, set up and watched over by Dooza engineers.</p>
                                </div>
                            </ScrollReveal>
                            <AgentTabs />
                        </div>
                    </section>

                    {/* Industries */}
                    <section className="bg-white py-20 md:py-28">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <ScrollReveal>
                                <div className="mx-auto mb-12 max-w-3xl text-center">
                                    <span className="section-label mb-4 block text-primary-700">WHO IT&apos;S FOR</span>
                                    <h2 className="font-serif text-4xl font-bold text-slate-900 md:text-5xl">Built for the local and small businesses that keep towns running</h2>
                                </div>
                            </ScrollReveal>
                            <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                                {industries.map((ind) => (
                                    <StaggerItem key={ind.name}>
                                        <Link href={ind.href} className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-warm p-6 transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900">{ind.name}</h3>
                                                <p className="mt-2 text-sm text-slate-600">{ind.line}</p>
                                            </div>
                                            <ArrowRight className="mt-6 h-4 w-4 text-primary-700 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </section>

                    {/* Reviews marquee */}
                    <section className="overflow-hidden py-20 md:py-28">
                        <ScrollReveal>
                            <div className="mx-auto mb-12 max-w-3xl px-4 text-center">
                                <span className="section-label mb-4 block text-amber-500">CUSTOMER REVIEWS</span>
                                <h2 className="font-serif text-4xl font-bold text-slate-900 md:text-5xl">What businesses say about Dooza</h2>
                                <p className="mt-4 text-slate-600">Reviews from Dooza customers and partners across our AI agents and services.</p>
                            </div>
                        </ScrollReveal>
                        <div className="grow-marquee-wrap overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
                            <div className="grow-marquee flex w-max gap-6 px-3">
                                {reviewLoop.map((r, i) => (
                                    <figure key={i} className="flex w-[340px] shrink-0 flex-col justify-between rounded-2xl border border-amber-100 bg-white p-6 shadow-sm md:w-[400px]">
                                        <div>
                                            <div className="flex gap-0.5 text-yellow-400">{[1, 2, 3, 4, 5].map((s) => <Star key={s} className="h-4 w-4 fill-current" />)}</div>
                                            <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">&ldquo;{r.quote}&rdquo;</blockquote>
                                        </div>
                                        <figcaption className="mt-5 flex items-center gap-3">
                                            {r.logo ? (
                                                <Image src={r.logo} alt={r.author} width={40} height={40} className="h-10 w-10 rounded-full border border-slate-100 object-contain p-1" />
                                            ) : (
                                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">{r.initials}</span>
                                            )}
                                            <div>
                                                <div className="text-sm font-bold text-slate-900">{r.author}</div>
                                                <div className="text-xs text-slate-400">{r.role}</div>
                                            </div>
                                        </figcaption>
                                    </figure>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Watch it work */}
                    <section className="bg-slate-950 py-20 md:py-28">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="mx-auto mb-12 max-w-3xl text-center">
                                <span className="section-label mb-4 block text-primary-300">WATCH DOOZA GROW WORK</span>
                                <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">One brief. Four agents. Always shipping.</h2>
                            </div>
                            <WatchItWork />
                        </div>
                    </section>

                    {/* Plans */}
                    <section id="plans" className="py-20 md:py-28">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <ScrollReveal>
                                <div className="mx-auto mb-12 max-w-3xl text-center">
                                    <span className="section-label mb-4 block text-primary-700">PLANS</span>
                                    <h2 className="font-serif text-4xl font-bold text-slate-900 md:text-5xl">How fast do you want to grow?</h2>
                                    <p className="mt-4 text-lg text-slate-600">Pick the growth engine that fits your business. Every plan starts with a refundable pilot — 100% refund within 14 days.</p>
                                </div>
                            </ScrollReveal>
                            <StaggerContainer className="grid gap-6 lg:grid-cols-3">
                                {plans.map((p) => (
                                    <StaggerItem key={p.name}>
                                        <div className={`flex h-full flex-col rounded-3xl border p-8 ${p.featured ? 'border-primary-300 bg-white shadow-xl ring-1 ring-primary-100' : 'border-slate-200 bg-white'}`}>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs font-bold tracking-widest text-slate-400">{p.num}</span>
                                                {p.tag && <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">{p.tag}</span>}
                                                {p.featured && <span className="rounded-full bg-primary-700 px-3 py-1 text-xs font-bold text-white">Recommended</span>}
                                            </div>
                                            <h3 className="mt-4 font-serif text-3xl font-bold text-slate-900">{p.name}</h3>
                                            <p className="mt-3 text-slate-600">{p.desc}</p>
                                            <div className="mt-6 text-xs font-bold uppercase tracking-widest text-slate-400">Your growth team</div>
                                            <ul className="mt-3 flex-1 space-y-2">
                                                {p.agents.map((ag) => (
                                                    <li key={ag} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-primary-600" /> {ag}</li>
                                                ))}
                                            </ul>
                                            <BookDemoButton source={`grow-plan-${p.name.toLowerCase().replace(/\s+/g, '-')}`} variant={p.featured ? 'primary' : 'secondary'} className="mt-8 !w-full !px-4 !text-base" />
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                            <p className="mt-8 text-center text-sm text-slate-500">
                                Pricing depends on the plan and your ad spend. <Link href="/grow/pricing" className="font-semibold text-primary-700 hover:text-primary-900">See Dooza Grow pricing</Link>.
                            </p>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="bg-white py-20 md:py-28">
                        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                            <h2 className="mb-10 text-center font-serif text-4xl font-bold text-slate-900">Dooza Grow FAQ</h2>
                            <FAQAccordion items={faqData} />
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="relative overflow-hidden bg-primary-900 py-20 text-center md:py-28">
                        <div className="relative mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-5xl font-bold leading-tight text-white md:text-6xl">You built it.<br /><em className="text-primary-200">Dooza grows it.</em></h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg text-primary-100">Dooza Grow plugs into the business you already run and gets to work on more leads and more booked jobs, every day.</p>
                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                                <BookDemoButton source="grow-final" variant="white" />
                                <Link href="/grow/pricing" className="inline-flex items-center gap-2 rounded-full border-2 border-white/35 px-8 py-4 text-lg font-bold text-white hover:bg-white/10">See plans <ArrowRight className="h-5 w-5" /></Link>
                            </div>
                            <p className="mt-4 text-sm text-primary-200">Start with a refundable pilot — 100% refund within 14 days.</p>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </BookingModalProvider>
    );
}
