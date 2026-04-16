'use client';

import { useEffect, useState, useRef } from 'react';
import { Search, FileSearch, BarChart3, CalendarClock, UserPlus, MessageSquare, TrendingUp, CheckCircle2, ChevronDown, Sparkles, CircleCheck, AlertTriangle, XCircle } from 'lucide-react';
import { RankyCharacter } from '@/components/characters/CharacterIllustrations';
import SignupButton from '@/components/buttons/SignupButton';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import BookingModalProvider from '@/components/BookingModalProvider';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { trackFBViewContent } from '@/lib/analytics';

const iconMap = { Search, FileSearch, BarChart3, CalendarClock, UserPlus, MessageSquare, TrendingUp };

/* ── Preview renderers for the sticky capability section ── */

function KeywordTable({ rows }) {
    return (
        <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
            <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-slate-400 text-xs font-mono ml-1">keyword_results.csv</span>
            </div>
            <table className="w-full text-sm">
                <thead>
                    <tr className="border-b border-slate-100 bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                        <th className="px-4 py-2.5 text-left font-semibold">Keyword</th>
                        <th className="px-4 py-2.5 text-left font-semibold">Volume</th>
                        <th className="px-4 py-2.5 text-left font-semibold">Difficulty</th>
                        <th className="px-4 py-2.5 text-left font-semibold hidden sm:table-cell">Intent</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-emerald-50/50 transition-colors">
                            <td className="px-4 py-3 font-medium text-slate-800">{row.keyword}</td>
                            <td className="px-4 py-3 text-slate-600">{row.volume}</td>
                            <td className="px-4 py-3">
                                <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${
                                    row.difficulty === 'Low' ? 'bg-emerald-100 text-emerald-700' :
                                    row.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' :
                                    'bg-red-100 text-red-700'
                                }`}>{row.difficulty}</span>
                            </td>
                            <td className="px-4 py-3 text-slate-500 hidden sm:table-cell">{row.intent}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function AuditChecklist({ items }) {
    const statusIcon = { pass: CircleCheck, warn: AlertTriangle, fail: XCircle };
    const statusColor = { pass: 'text-emerald-500', warn: 'text-amber-500', fail: 'text-red-500' };
    const statusBg = { pass: 'bg-emerald-50', warn: 'bg-amber-50', fail: 'bg-red-50' };

    return (
        <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
            <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-slate-400 text-xs font-mono ml-1">seo_audit.log</span>
            </div>
            <div className="divide-y divide-slate-100">
                {items.map((item, i) => {
                    const Icon = statusIcon[item.status];
                    return (
                        <div key={i} className={`flex items-center gap-3 px-4 py-3 ${statusBg[item.status]} transition-colors`}>
                            <Icon className={`w-5 h-5 shrink-0 ${statusColor[item.status]}`} />
                            <div className="flex-1 min-w-0">
                                <span className="text-sm font-medium text-slate-800">{item.label}</span>
                                {item.note && <span className="text-xs text-slate-500 ml-2">— {item.note}</span>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function CompetitorBars({ items }) {
    return (
        <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
            <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-slate-400 text-xs font-mono ml-1">competitor_gap.chart</span>
            </div>
            <div className="p-5 space-y-4">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Keyword Coverage (%)</p>
                {items.map((item, i) => (
                    <div key={i} className="space-y-1.5">
                        <div className="flex justify-between text-sm">
                            <span className={`font-medium ${item.color === 'emerald' ? 'text-emerald-700' : 'text-slate-600'}`}>{item.label}</span>
                            <span className="text-slate-500 font-mono">{item.value}%</span>
                        </div>
                        <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ease-out ${
                                    item.color === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-green-400' : 'bg-slate-300'
                                }`}
                                style={{ width: `${item.value}%` }}
                            />
                        </div>
                    </div>
                ))}
                <p className="text-xs text-emerald-600 font-medium pt-1">↑ Ranky finds the gaps and closes them</p>
            </div>
        </div>
    );
}

function SchedulePreview({ items }) {
    return (
        <div className="rounded-xl border border-slate-200 overflow-hidden bg-white">
            <div className="bg-slate-800 px-4 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-slate-400 text-xs font-mono ml-1">content_calendar.log</span>
            </div>
            <div className="p-5 space-y-3">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">This Week</p>
                {items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 px-3 rounded-lg bg-slate-50">
                        <span className="text-xs font-bold text-slate-400 w-8 shrink-0">{item.day}</span>
                        <span className={`w-2 h-2 rounded-full shrink-0 ${item.status === 'published' ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                        <span className="text-sm text-slate-700 font-medium truncate">{item.title}</span>
                        <span className={`ml-auto text-xs font-medium shrink-0 ${item.status === 'published' ? 'text-emerald-600' : 'text-amber-600'}`}>
                            {item.status === 'published' ? 'Published' : 'Scheduled'}
                        </span>
                    </div>
                ))}
                <p className="text-xs text-emerald-600 font-medium pt-1">Autopilot — posts go live on your schedule</p>
            </div>
        </div>
    );
}

function CapabilityPreview({ preview }) {
    if (!preview) return null;
    switch (preview.type) {
        case 'table': return <KeywordTable rows={preview.rows} />;
        case 'checklist': return <AuditChecklist items={preview.items} />;
        case 'bars': return <CompetitorBars items={preview.items} />;
        case 'schedule': return <SchedulePreview items={preview.items} />;
        default: return null;
    }
}

function DemoVideo({ src }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                    video.currentTime = 0;
                }
            },
            { threshold: 0.8 }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30 ring-1 ring-white/10">
                <video
                    ref={videoRef}
                    className="w-full h-auto"
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src={src} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

const floatingPills = [
    { text: '#1', className: 'top-16 right-[12%] float-pill-delay-1' },
    { text: 'SEO', className: 'top-[30%] right-[5%] float-pill-delay-2' },
    { text: 'Keywords', className: 'bottom-[25%] right-[15%] float-pill-delay-3' },
    { text: 'Page One', className: 'top-[20%] left-[5%] float-pill-delay-4' },
    { text: '↑ 340%', className: 'bottom-[35%] left-[8%] float-pill-delay-5' },
];

/* ── Sticky-stacking capabilities section ── */

const capBgs = [
    'bg-gradient-to-b from-white to-emerald-50',
    'bg-gradient-to-b from-emerald-50 to-teal-50',
    'bg-gradient-to-b from-teal-50 to-primary-50',
];

function CapabilitiesSection({ capabilities }) {
    return (
        <>
            {/* Mobile: normal stacked cards */}
            <section className="lg:hidden py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-12">
                        <p className="section-label mb-3">What Ranky Does</p>
                        <h2 className="text-3xl sm:text-4xl mb-4">Your Full-Stack Visibility Employee</h2>
                    </div>
                    <div className="space-y-6">
                        {capabilities.map((cap, i) => {
                            const CapIcon = iconMap[cap.icon];
                            return (
                                <div key={i} className="card-shadow bg-white rounded-2xl border border-slate-100 p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                                            {CapIcon && <CapIcon className="w-5 h-5 text-emerald-600" />}
                                        </div>
                                        <h3 className="text-lg font-bold">{cap.title}</h3>
                                    </div>
                                    <p className="text-slate-600 mb-4 text-sm">{cap.description}</p>
                                    <CapabilityPreview preview={cap.preview} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Desktop: sticky stacking slides */}
            <div className="hidden lg:block relative">
                {capabilities.map((cap, i) => {
                    const CapIcon = iconMap[cap.icon];
                    return (
                        <div
                            key={i}
                            className={`sticky top-0 h-screen flex items-center ${capBgs[i] || 'bg-white'}`}
                            style={{ zIndex: i + 1 }}
                        >
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                                {/* Section label — only on first slide */}
                                {i === 0 && (
                                    <div className="text-center mb-12">
                                        <p className="section-label mb-3">What Ranky Does</p>
                                        <h2 className="text-3xl lg:text-5xl">Your Full-Stack Visibility Employee</h2>
                                    </div>
                                )}

                                {/* Slide counter */}
                                <div className="flex items-center justify-center gap-2 mb-10">
                                    {capabilities.map((_, j) => (
                                        <div
                                            key={j}
                                            className={`rounded-full transition-all ${
                                                j === i
                                                    ? 'w-10 h-3 bg-gradient-to-r from-emerald-500 to-green-600'
                                                    : j < i
                                                        ? 'w-3 h-3 bg-emerald-300'
                                                        : 'w-3 h-3 bg-slate-200'
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Two-column layout */}
                                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                    {/* Left: text */}
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 mb-6">
                                            <span className="text-2xl font-bold text-emerald-600">{cap.stat}</span>
                                            <span className="text-sm text-emerald-600/70">{cap.statLabel}</span>
                                        </div>

                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                                                {CapIcon && <CapIcon className="w-6 h-6 text-emerald-600" />}
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl font-bold">{cap.title}</h3>
                                        </div>

                                        <p className="text-lg text-slate-600 mb-6 max-w-md">{cap.description}</p>

                                        <ul className="space-y-3">
                                            {cap.details.map((detail, j) => (
                                                <li key={j} className="flex items-start gap-3 text-slate-600">
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right: preview */}
                                    <div>
                                        <CapabilityPreview preview={cap.preview} />
                                    </div>
                                </div>

                                {/* Scroll hint — only on non-last slides */}
                                {i < capabilities.length - 1 && (
                                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 animate-bounce">
                                        <span className="text-xs font-medium">Scroll</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default function RankyContent({ page }) {
    const [jsLoaded, setJsLoaded] = useState(false);

    useEffect(() => {
        setJsLoaded(true);
        trackFBViewContent('ranky', 'agent_page');
    }, []);

    return (
        <BookingModalProvider>
            <Navbar />

            {/* Scroll progress bar */}
            <div className="fixed top-0 left-0 right-0 h-0.5 z-50">
                <div className="scroll-progress-bar h-full bg-gradient-to-r from-emerald-500 to-green-600" />
            </div>

            <main className={jsLoaded ? 'js-loaded' : ''}>
                {/* ── Section 1: Hero ── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-primary-50 pt-36 pb-32 lg:pt-52 lg:pb-48 min-h-screen flex items-center">
                    {/* Dot grid background */}
                    <div className="absolute inset-0 hero-grid pointer-events-none" aria-hidden="true" />

                    {/* Background blobs */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
                        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl animate-blob" />
                        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-teal-200/20 blur-3xl animate-blob animation-delay-2000" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-100/20 blur-3xl animate-blob animation-delay-4000" />
                    </div>

                    {/* Floating keyword pills (desktop only) */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block" aria-hidden="true">
                        {floatingPills.map((pill, i) => (
                            <span
                                key={i}
                                className={`absolute float-pill ${pill.className} px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-emerald-200/50 text-emerald-600 text-xs font-semibold shadow-sm`}
                            >
                                {pill.text}
                            </span>
                        ))}
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left */}
                            <div>
                                <div className="hero-entrance hero-delay-1">
                                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6">
                                        <Sparkles className="w-4 h-4" />
                                        {page.role}
                                    </span>
                                </div>

                                <h1 className="hero-entrance hero-delay-2 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                    Meet <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 bg-clip-text text-transparent animate-gradient">{page.name}</span>
                                </h1>

                                <p className="hero-entrance hero-delay-3 text-xl sm:text-2xl text-slate-500 font-serif italic mb-4">
                                    {page.heroPitch}
                                </p>

                                <p className="hero-entrance hero-delay-3 text-lg text-slate-600 mb-8 max-w-xl">
                                    {page.heroDescription}
                                </p>

                                <div className="hero-entrance hero-delay-4 flex flex-col sm:flex-row gap-4">
                                    <SignupButton source="ranky_hero">Hire Ranky</SignupButton>
                                    <BookDemoButton source="ranky_hero" />
                                </div>
                            </div>

                            {/* Right — Character with floating pills */}
                            <div className="hero-entrance-right hidden lg:flex items-center justify-center relative scale-125">
                                <div className="animate-float">
                                    <RankyCharacter size={380} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Section 2: Capabilities — Scroll Hijack (desktop) / Cards (mobile) ── */}
                <CapabilitiesSection capabilities={page.capabilities} />

                {/* ── Section 3: Video Demo ── */}
                <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 overflow-hidden">
                    {/* Background glow blobs */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">See Ranky in Action</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white">Watch Ranky Work</h2>
                            </div>
                        </ScrollReveal>

                        <DemoVideo src="/Ranky/DoozaAd.mp4" />
                    </div>
                </section>

                {/* ── Section 4: How It Works ── */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-16">
                                <p className="section-label mb-3">Get Started</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">Three Steps to Everywhere Visibility</h2>
                            </div>
                        </ScrollReveal>

                        {/* Steps with connecting line */}
                        <div className="relative">
                            {/* SVG connecting line (desktop only) */}
                            <svg className="hidden md:block absolute top-10 left-0 w-full h-4 pointer-events-none" aria-hidden="true" preserveAspectRatio="none">
                                <line
                                    x1="20%" y1="50%" x2="80%" y2="50%"
                                    stroke="#d1fae5" strokeWidth="2" strokeDasharray="8 4"
                                    className="step-connector-line"
                                    style={{ strokeDashoffset: 0 }}
                                />
                            </svg>

                            <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12">
                                {page.howItWorks.map((step, i) => {
                                    const Icon = iconMap[step.icon];
                                    return (
                                        <StaggerItem key={i}>
                                            <div className="card-interactive-sm card-shadow bg-white rounded-2xl border border-slate-100 p-8 text-center h-full">
                                                <div className="step-ring-ripple w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-green-700 flex items-center justify-center mx-auto mb-6" style={{ animationDelay: `${i * 0.5}s` }}>
                                                    <span className="text-white text-xl font-bold">{step.num}</span>
                                                </div>
                                                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                                                    {Icon && <Icon className="w-5 h-5 text-emerald-600" />}
                                                </div>
                                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                                <p className="text-slate-600">{step.description}</p>
                                            </div>
                                        </StaggerItem>
                                    );
                                })}
                            </StaggerContainer>
                        </div>
                    </div>
                </section>

                {/* ── Section 5: SEO Expertise Accordion ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">Deep Expertise</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Built-In Visibility Playbook</h2>
                                <p className="text-lg text-slate-500 max-w-xl mx-auto">
                                    Ranky doesn't guess — he's trained on proven SEO, GEO, and engagement playbooks.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <FAQAccordion items={page.expertise} />
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Section 6: Integrations ── */}
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-10">
                                <p className="section-label mb-3">Connects With Your Tools</p>
                                <h2 className="text-2xl sm:text-3xl">Plugs Into 1,000+ Apps</h2>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="flex flex-wrap justify-center gap-4">
                            {page.integrations.map((integration, i) => (
                                <StaggerItem key={i}>
                                    <div
                                        className="integration-badge inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 font-medium hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 cursor-default"
                                    >
                                        <span className="font-semibold">{integration.name}</span>
                                        <span className="text-sm text-slate-400">{integration.description}</span>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>

                {/* ── Section 7: FAQ ── */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-slate-50">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">Frequently Asked Questions</p>
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl">Got Questions?</h2>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <FAQAccordion items={page.faqData} />
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Section 8: CTA Banner ── */}
                <section className="relative py-20 lg:py-28 bg-gradient-to-br from-emerald-50 via-teal-50 to-primary-50 overflow-hidden">
                    {/* Floating blobs */}
                    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                        <div className="cta-blob-1 absolute -top-20 -right-20 w-72 h-72 rounded-full bg-emerald-200/20 blur-3xl" />
                        <div className="cta-blob-2 absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-teal-200/20 blur-3xl" />
                    </div>

                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <ScrollReveal>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">Ready to Be Everywhere?</h2>
                            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                                Hire Ranky and automate your visibility — from Google and ChatGPT to LinkedIn, YouTube, and Reddit.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <SignupButton source="ranky_cta">Hire Ranky — $49/mo</SignupButton>
                                <BookDemoButton source="ranky_cta" />
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
