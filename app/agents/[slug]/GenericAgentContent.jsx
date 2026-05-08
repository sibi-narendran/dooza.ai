'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    BadgeDollarSign,
    BarChart3,
    CalendarCheck,
    CheckCircle2,
    Clapperboard,
    ClipboardList,
    FileText,
    FileVideo,
    Inbox,
    ListChecks,
    MailCheck,
    MessageCircleReply,
    MessagesSquare,
    PhoneCall,
    PhoneForwarded,
    Plug,
    RefreshCw,
    Search,
    Send,
    ShieldCheck,
    Sparkles,
    Table,
    Target,
    UserCheck,
    Video,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModalProvider from '@/components/BookingModalProvider';
import SignupButton from '@/components/buttons/SignupButton';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import FAQAccordion from '@/components/FAQAccordion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { trackFBViewContent } from '@/lib/analytics';
import { agentPages } from '@/lib/agentData';

const iconMap = {
    BadgeDollarSign,
    BarChart3,
    CalendarCheck,
    CheckCircle2,
    Clapperboard,
    ClipboardList,
    FileText,
    FileVideo,
    Inbox,
    ListChecks,
    MailCheck,
    MessageCircleReply,
    MessagesSquare,
    PhoneCall,
    PhoneForwarded,
    Plug,
    RefreshCw,
    Search,
    Send,
    ShieldCheck,
    Table,
    Target,
    UserCheck,
    Video,
};

function AgentMark({ page, size = 'lg' }) {
    const sizeClasses = size === 'sm' ? 'w-10 h-10 text-lg' : 'w-16 h-16 text-2xl';
    return (
        <div className={`${sizeClasses} rounded-2xl bg-gradient-to-br ${page.accent.from} ${page.accent.to} text-white flex items-center justify-center font-bold shadow-lg shadow-slate-900/10`}>
            {page.emoji}
        </div>
    );
}

function HeroPreview({ page }) {
    return (
        <div className="relative">
            <div className={`absolute -inset-4 rounded-[2rem] ${page.accent.bg} blur-2xl opacity-70`} />
            <div className="relative bg-white rounded-3xl border border-slate-100 card-shadow overflow-hidden">
                <div className="bg-slate-900 px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="w-3 h-3 rounded-full bg-yellow-400" />
                        <span className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs font-mono text-slate-300">{page.sourceAgent}.dooza</span>
                </div>
                <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                        <AgentMark page={page} />
                        <div>
                            <p className="text-sm font-semibold text-slate-500 mb-1">{page.heroPreview.title}</p>
                            <h2 className="text-2xl font-bold text-slate-900">{page.name}</h2>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {page.heroPreview.rows.map((row) => (
                            <div key={row.label} className="grid grid-cols-[1fr_auto] gap-3 items-center rounded-2xl bg-slate-50 border border-slate-100 px-4 py-3">
                                <div className="min-w-0">
                                    <p className="text-xs uppercase tracking-wider font-bold text-slate-600">{row.label}</p>
                                    <p className="text-sm md:text-base font-semibold text-slate-800 truncate">{row.value}</p>
                                </div>
                                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${page.accent.bg} ${page.accent.text}`}>
                                    {row.status}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-4">
                        <p className="text-sm text-slate-500 mb-3">Operating rule</p>
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className={`w-5 h-5 mt-0.5 ${page.accent.text}`} />
                            <p className="text-sm leading-relaxed text-slate-700">{page.safety[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function RelatedAgents({ page }) {
    const related = (page.relatedAgents || [])
        .map((slug) => agentPages.find((agent) => agent.slug === slug))
        .filter(Boolean);

    if (!related.length) return null;

    return (
        <section className="py-20 bg-warm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="mb-10">
                        <p className="section-label mb-3">Related AI Employees</p>
                        <h2 className="text-3xl md:text-4xl mb-4">Build the workflow around {page.name}</h2>
                    </div>
                </ScrollReveal>
                <div className="grid md:grid-cols-3 gap-5">
                    {related.map((agent) => (
                        <Link
                            key={agent.slug}
                            href={`/agents/${agent.slug}`}
                            className="group bg-white rounded-2xl border border-slate-100 card-shadow p-6 hover:card-shadow-hover hover:-translate-y-1 transition-all"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                {agent.accent ? <AgentMark page={agent} size="sm" /> : <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">{agent.emoji}</div>}
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">{agent.name}</h3>
                                    <p className="text-sm text-slate-500">{agent.role}</p>
                                </div>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">{agent.heroDescription}</p>
                            <span className="inline-flex items-center gap-1 text-sm font-bold text-primary-700">
                                View page <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function GenericAgentContent({ page }) {
    useEffect(() => {
        trackFBViewContent(`agent_${page.slug}`);
    }, [page.slug]);

    return (
        <BookingModalProvider>
            <Navbar />
            <main id="main-content" className="overflow-hidden bg-warm">
                <section className="relative pt-32 md:pt-40 pb-20 bg-gradient-to-b from-white via-warm to-white">
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary-50/60 to-transparent" />
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-12 lg:gap-16 items-center">
                            <ScrollReveal>
                                <div>
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${page.accent.bg} ${page.accent.text} text-sm font-bold mb-6`}>
                                        <Sparkles className="w-4 h-4" />
                                        {page.eyebrow}
                                    </div>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                                        {page.heroPitch}
                                    </h1>
                                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
                                        {page.heroDescription}
                                    </p>
                                    {page.heroNote && (
                                        <div className="inline-flex items-start gap-3 rounded-2xl bg-white border border-slate-100 px-4 py-3 text-sm md:text-base font-semibold text-slate-800 card-shadow mb-8">
                                            <MessagesSquare className={`w-5 h-5 mt-0.5 shrink-0 ${page.accent.text}`} />
                                            <span>{page.heroNote}</span>
                                        </div>
                                    )}
                                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                        <SignupButton source={`${page.slug}_hero`} size="xl">
                                            {page.primaryCta}
                                        </SignupButton>
                                        <BookDemoButton source={`${page.slug}_hero`} size="xl" variant="secondary">
                                            Book a demo
                                        </BookDemoButton>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3 max-w-2xl">
                                        {page.proof.map((item) => (
                                            <div key={item.label} className="bg-white rounded-2xl border border-slate-100 p-4">
                                                <p className="text-xs uppercase tracking-wider font-bold text-slate-600 mb-1">{item.label}</p>
                                                <p className="text-sm md:text-base font-bold text-slate-900">{item.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.15}>
                                <HeroPreview page={page} />
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center max-w-3xl mx-auto mb-14">
                                <p className="section-label mb-3">What It Handles</p>
                                <h2 className="text-3xl md:text-5xl mb-5">{page.name} is built for a real workflow</h2>
                                <p className="text-lg text-slate-600">Every claim on this page is limited to current repo evidence or existing Dooza marketing evidence.</p>
                            </div>
                        </ScrollReveal>
                        <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.08}>
                            {page.capabilities.map((cap) => {
                                const Icon = iconMap[cap.icon] || CheckCircle2;
                                return (
                                    <StaggerItem key={cap.title}>
                                        <div className="h-full bg-white rounded-3xl border border-slate-100 card-shadow p-6 md:p-8 hover:card-shadow-hover transition-shadow">
                                            <div className={`w-12 h-12 rounded-2xl ${page.accent.bg} ${page.accent.text} flex items-center justify-center mb-5`}>
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3">{cap.title}</h3>
                                            <p className="text-slate-600 leading-relaxed mb-5">{cap.description}</p>
                                            <ul className="space-y-2">
                                                {cap.details.map((detail) => (
                                                    <li key={detail} className="flex items-center gap-2 text-sm text-slate-700">
                                                        <CheckCircle2 className={`w-4 h-4 ${page.accent.text}`} />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </StaggerItem>
                                );
                            })}
                        </StaggerContainer>
                    </div>
                </section>

                <section className={`py-20 ${page.accent.bg}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
                            <ScrollReveal>
                                <div className="lg:sticky lg:top-28">
                                    <p className={`section-label mb-3 ${page.accent.text}`}>How It Works</p>
                                    <h2 className="text-3xl md:text-5xl mb-5">From setup to output in a controlled flow</h2>
                                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                        The page is written to sell the workflow without inventing capabilities that are not present in the product evidence.
                                    </p>
                                    <SignupButton source={`${page.slug}_workflow`}>
                                        Get started
                                    </SignupButton>
                                </div>
                            </ScrollReveal>
                            <div className="space-y-4">
                                {page.workflow.map((step, index) => {
                                    const Icon = iconMap[step.icon] || CheckCircle2;
                                    return (
                                        <ScrollReveal key={step.title} delay={index * 0.05}>
                                            <div className="bg-white rounded-3xl border border-slate-100 p-6 md:p-7 card-shadow flex gap-5">
                                                <div className={`w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br ${page.accent.from} ${page.accent.to} text-white flex items-center justify-center font-bold`}>
                                                    <Icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-slate-600 mb-1">Step {index + 1}</p>
                                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                                                </div>
                                            </div>
                                        </ScrollReveal>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <ScrollReveal>
                                <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-10 h-full">
                                    <p className="text-primary-300 text-sm uppercase tracking-[3px] font-bold mb-4">Best Uses</p>
                                    <h2 className="text-3xl md:text-4xl text-white mb-8">Where {page.name} fits best</h2>
                                    <div className="space-y-4">
                                        {page.useCases.map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-primary-300 mt-0.5 shrink-0" />
                                                <p className="text-slate-200">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <div className="rounded-3xl bg-warm border border-slate-100 p-8 md:p-10 h-full">
                                    <p className="section-label mb-4">Evidence Boundaries</p>
                                    <h2 className="text-3xl md:text-4xl mb-8">What this page will not overclaim</h2>
                                    <div className="space-y-4">
                                        {page.safety.map((item) => (
                                            <div key={item} className="flex items-start gap-3">
                                                <ShieldCheck className={`w-5 h-5 ${page.accent.text} mt-0.5 shrink-0`} />
                                                <p className="text-slate-700">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {page.verificationNote && (
                                        <div className="mt-6 rounded-2xl bg-white border border-slate-100 p-4 text-sm text-slate-600">
                                            {page.verificationNote}
                                        </div>
                                    )}
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </section>

                <RelatedAgents page={page} />

                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <p className="section-label mb-3">FAQ</p>
                                <h2 className="text-3xl md:text-5xl">Questions about {page.name}</h2>
                            </div>
                        </ScrollReveal>
                        <FAQAccordion items={page.faqData} />
                    </div>
                </section>

                <section className="py-20 bg-slate-900">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-5xl text-white mb-6">Put {page.name} to work inside Dooza</h2>
                            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
                                Start with the focused workflow, then connect it to the rest of your AI workforce.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <SignupButton source={`${page.slug}_final`} variant="inverse">
                                    {page.primaryCta}
                                </SignupButton>
                                <BookDemoButton source={`${page.slug}_final`} variant="dark">
                                    Book a demo
                                </BookDemoButton>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
        </BookingModalProvider>
    );
}
