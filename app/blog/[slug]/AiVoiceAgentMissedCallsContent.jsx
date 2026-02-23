'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedPosts from '../../../components/RelatedPosts';
import InternalLinks from '../../../components/InternalLinks';
import YouTubeEmbed from '../../../components/YouTubeEmbed';
import {
    CheckCircle2,
    XCircle,
    Clock,
    Calendar,
    ArrowRight,
    DollarSign,
    Phone,
    PhoneCall,
    PhoneOff,
    TrendingUp,
    AlertTriangle,
    Target,
    BarChart3,
    Users,
    Zap,
    Building2,
    Shield,
    Database
} from 'lucide-react';

const faqData = [
    {
        question: "How much revenue am I losing from missed calls?",
        answer: "The average small business misses 62% of inbound calls. With 85% of callers refusing to leave voicemail, you're losing over half your potential customers. For a business receiving 20 calls/day at $200 average value, that's $12,000+/month in lost revenue."
    },
    {
        question: "How is an AI voice agent different from an AI receptionist?",
        answer: "An AI receptionist answers and routes calls. An AI voice agent goes further — it qualifies leads with custom questions, captures contact details, pushes data to your CRM, and triggers automated follow-up sequences. It's a revenue capture tool, not just an answering service."
    },
    {
        question: "Can an AI voice agent integrate with my CRM?",
        answer: "Yes. Dooza's voice agent pushes caller data, qualification answers, and call summaries directly to your CRM. Every missed call becomes a lead record with full context — no manual data entry."
    },
    {
        question: "What happens during after-hours calls?",
        answer: "The AI voice agent answers 24/7 with the same quality as business hours. It qualifies the caller, captures their needs, books appointments on your calendar, and sends you a text summary. 40% of inbound calls happen outside business hours — you're capturing all of them."
    },
    {
        question: "Will callers know they're speaking to an AI?",
        answer: "Modern AI voice agents use natural, conversational language that sounds professional and human-like. Most callers can't tell the difference. The agent introduces itself by name and maintains context throughout the call."
    },
    {
        question: "How fast is the setup?",
        answer: "Most businesses are live within 30 minutes. During your free onboarding call, our team configures the voice agent with your business info, qualification questions, FAQs, and CRM integration."
    },
    {
        question: "What's the ROI of an AI voice agent?",
        answer: "If you capture just 5 additional leads per month that would have gone to voicemail, and your average deal value is $500, that's $2,500/month in recovered revenue — an 86x return on a $29/month investment."
    }
];

export default function AiVoiceAgentMissedCallsContent() {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
            if (e) e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['introduction', 'cost-of-missed-calls', 'voice-agent-vs-alternatives', 'how-voice-agents-capture-leads', 'crm-integration', 'availability-247', 'roi-calculator', 'getting-started', 'faq'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar openModal={handleAction} />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-red-50 via-white to-primary-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'AI Voice Agent for Missed Calls' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-6">
                            <Phone size={16} />
                            <span>Lead Generation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Stop Losing Money on Missed Calls: The 24/7 <span className="text-primary-600">AI Voice Agent</span> Strategy
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Every missed call is a missed sale. Learn how AI voice agents capture leads, qualify callers, and push data to your CRM — turning your phone line into a 24/7 revenue engine.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>February 23, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Get Your AI Voice Agent - $29/mo
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between lg:gap-12 items-start">

                    {/* Sidebar */}
                    <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 sticky top-28 max-h-[80vh] overflow-y-auto">
                            <h3 className="font-semibold text-slate-900 mb-4">Table of Contents</h3>
                            <nav className="space-y-1">
                                {[
                                    { id: 'introduction', label: 'The $12,000 Problem' },
                                    { id: 'cost-of-missed-calls', label: 'Cost Per Missed Call' },
                                    { id: 'voice-agent-vs-alternatives', label: 'Voice Agent vs Alternatives' },
                                    { id: 'how-voice-agents-capture-leads', label: 'Lead Capture Process' },
                                    { id: 'crm-integration', label: 'CRM Integration' },
                                    { id: 'availability-247', label: '24/7 Revenue Window' },
                                    { id: 'roi-calculator', label: 'ROI Calculator' },
                                    { id: 'getting-started', label: 'Getting Started' },
                                    { id: 'faq', label: 'FAQ' },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === item.id
                                            ? 'bg-primary-50 text-primary-700 font-medium'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>

                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <p className="text-sm text-slate-600 mb-4">Stop losing revenue to missed calls</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Rachel Free
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="ai-voice-agent-missed-calls" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction — The $12,000 Problem */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Your phone just rang. You were with a client, on the other line, or had your hands full. It went to voicemail. The caller hung up without leaving a message. They called the next business on Google instead. You just lost $200. Maybe $1,500. Maybe $3,500.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    And it's happening every single day.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    According to Forbes, <strong>62% of calls to small businesses go unanswered</strong>. That alone is damaging. But here's the number that makes it a revenue emergency: <strong>85% of callers who reach voicemail will never leave a message</strong>. They simply move on to a competitor who picks up.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This isn't a phone problem. It's a <strong>revenue leak</strong>. If your business receives just 20 calls a day and the average lead value is $200, you're leaving <strong>$12,400 on the table every month</strong> — and that's a conservative estimate.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 my-8">
                                {[
                                    { stat: "62%", label: "of calls to small businesses go unanswered", source: "Forbes" },
                                    { stat: "85%", label: "of callers won't leave a voicemail", source: "Forbes / Nectafy" },
                                    { stat: "$12,400+", label: "monthly revenue lost for an average service business", source: "Industry data" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-5 rounded-xl text-center">
                                        <div className="text-3xl font-bold text-red-600 mb-1">{item.stat}</div>
                                        <p className="text-sm text-slate-700 font-medium mb-1">{item.label}</p>
                                        <p className="text-xs text-red-500">{item.source}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    You've probably thought about this before. Maybe you've tried hiring someone to answer the phones, or looked into virtual receptionist services, or just accepted that voicemail is "good enough." It's not. An AI voice agent is different. It doesn't just answer — it <strong>qualifies, captures, and converts</strong> every caller into a lead record in your CRM, 24 hours a day, 7 days a week.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <Link href="/blog/best-ai-receptionist" className="text-primary-600 hover:underline font-medium">We've covered AI receptionists</Link> for answering and routing calls. <Link href="/blog/virtual-receptionist-for-small-business" className="text-primary-600 hover:underline font-medium">We've compared virtual receptionist services</Link> and their costs. This guide is about something more specific: using an AI voice agent as a <strong>revenue-capture tool</strong> — one that pays for itself hundreds of times over.
                                </p>
                            </div>

                            <div className="bg-red-50 border border-red-200 p-6 rounded-xl my-8">
                                <div className="flex items-start gap-3">
                                    <DollarSign className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Quick Math: Your Missed Call Revenue Leak</h4>
                                        <p className="text-slate-700">
                                            <strong>20 calls/day</strong> x 62% missed = <strong>12.4 missed calls/day</strong>. Of those, 85% won't leave voicemail = <strong>10.5 lost leads/day</strong>. At $200 average value = <strong>$2,100/day</strong> or <strong>$63,000/month</strong> in potential revenue walking to competitors. Even if only 10% would have converted, that's <strong>$6,300/month gone</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: True Cost Per Missed Call by Industry */}
                        <section id="cost-of-missed-calls" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">True Cost Per Missed Call by Industry</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Not all missed calls are created equal. A missed call to a plumber costs a few hundred dollars. A missed call to a personal injury attorney can cost tens of thousands. Understanding your per-call value is the first step in calculating what inaction costs you.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    {
                                        industry: "Legal Services",
                                        icon: Shield,
                                        costPerCall: "$1,500",
                                        detail: "Average personal injury case value is $52,000. Even a general practice consult converts at $1,500+. One missed call per week = $78,000/year in lost revenue.",
                                        color: "red",
                                        monthlyLoss: "$6,000/mo",
                                        missedPerWeek: "4"
                                    },
                                    {
                                        industry: "HVAC / Plumbing",
                                        icon: Building2,
                                        costPerCall: "$400",
                                        detail: "Average service call is $350-$500. Emergency repairs run $800+. After-hours emergency calls are the highest-value leads — and the most often missed.",
                                        color: "orange",
                                        monthlyLoss: "$4,800/mo",
                                        missedPerWeek: "12"
                                    },
                                    {
                                        industry: "Dental Practices",
                                        icon: Users,
                                        costPerCall: "$600",
                                        detail: "New patient lifetime value averages $3,000-$5,000. A single missed new-patient call costs $600+ in first-year treatment alone. Most dental practices miss 30%+ of calls.",
                                        color: "blue",
                                        monthlyLoss: "$4,800/mo",
                                        missedPerWeek: "8"
                                    },
                                    {
                                        industry: "Real Estate",
                                        icon: TrendingUp,
                                        costPerCall: "$3,500",
                                        detail: "Average buyer's agent commission on a $400K home = $12,000. At a 30% conversion rate from qualified call to closing, each missed call costs ~$3,500 in expected commission.",
                                        color: "green",
                                        monthlyLoss: "$14,000/mo",
                                        missedPerWeek: "4"
                                    }
                                ].map((item, idx) => {
                                    const colorMap = {
                                        red: { bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-100 text-red-700', icon: 'bg-red-100 text-red-600', stat: 'text-red-600' },
                                        orange: { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-700', icon: 'bg-orange-100 text-orange-600', stat: 'text-orange-600' },
                                        blue: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700', icon: 'bg-blue-100 text-blue-600', stat: 'text-blue-600' },
                                        green: { bg: 'bg-green-50', border: 'border-green-200', badge: 'bg-green-100 text-green-700', icon: 'bg-green-100 text-green-600', stat: 'text-green-600' }
                                    };
                                    const c = colorMap[item.color];
                                    return (
                                        <div key={idx} className={`${c.bg} border ${c.border} p-6 rounded-xl`}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`w-10 h-10 ${c.icon} rounded-lg flex items-center justify-center shrink-0`}>
                                                    <item.icon size={20} />
                                                </div>
                                                <h3 className="font-bold text-slate-900">{item.industry}</h3>
                                            </div>
                                            <div className={`text-3xl font-bold ${c.stat} mb-2`}>{item.costPerCall} <span className="text-base font-medium text-slate-500">per missed call</span></div>
                                            <p className="text-sm text-slate-600 mb-4">{item.detail}</p>
                                            <div className="flex justify-between items-center pt-3 border-t border-slate-200">
                                                <span className="text-xs text-slate-500">{item.missedPerWeek} missed calls/week</span>
                                                <span className={`text-sm font-bold ${c.stat}`}>{item.monthlyLoss} lost</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl mb-8">
                                <h3 className="text-xl font-bold mb-4">The Compounding Cost of "I'll Call Them Back"</h3>
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div>
                                        <div className="text-sm text-slate-400 mb-1">Response within 5 minutes</div>
                                        <div className="text-3xl font-bold text-green-400">21x</div>
                                        <div className="text-sm text-slate-400">more likely to qualify</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400 mb-1">Response after 30 minutes</div>
                                        <div className="text-3xl font-bold text-amber-400">100x</div>
                                        <div className="text-sm text-slate-400">less likely vs 5-min response</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-slate-400 mb-1">Response next day</div>
                                        <div className="text-3xl font-bold text-red-400">0%</div>
                                        <div className="text-sm text-slate-400">lead is gone</div>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-400 text-center mt-4">Source: Lead Connect / MIT InsideSales</p>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The data is unambiguous. Speed-to-response is the single largest factor in lead conversion. It doesn't matter how good your service is, how competitive your pricing is, or how many 5-star reviews you have. If you don't answer the phone, <strong>78% of leads go to whichever competitor picks up first</strong>.
                                </p>
                                <p>
                                    An AI voice agent answers in under one second. Every time. That alone shifts the math in your favor.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: Voice Agent vs Receptionist vs Voicemail */}
                        <section id="voice-agent-vs-alternatives" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Voice Agent vs Receptionist vs Voicemail</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    You have four options for handling inbound calls. Three of them leave money on the table. Here's the honest comparison — <Link href="/blog/best-ai-receptionist" className="text-primary-600 hover:underline font-medium">our AI receptionist deep-dive</Link> covers the answering role in detail, and <Link href="/blog/virtual-receptionist-for-small-business" className="text-primary-600 hover:underline font-medium">our virtual receptionist comparison</Link> breaks down cost-per-minute pricing. This section focuses on <strong>revenue capture capability</strong>.
                                </p>
                            </div>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Capability</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Voicemail</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Human<br /><span className="font-normal text-xs text-slate-500">Receptionist</span></th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Virtual<br /><span className="font-normal text-xs text-slate-500">Receptionist Service</span></th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">AI Voice<br /><span className="font-normal text-xs text-primary-500">Agent (Dooza)</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Monthly Cost", voicemail: "Free", human: "$3,500-4,200", virtual: "$300-935", ai: "$29" },
                                            { feature: "Availability", voicemail: "24/7 (no one answers)", human: "40-45 hrs/week", virtual: "Business hours mostly", ai: "24/7/365" },
                                            { feature: "Lead Qualification", voicemail: "None", human: "If trained", virtual: "Basic scripting", ai: "Custom AI qualification" },
                                            { feature: "CRM Integration", voicemail: "None", human: "Manual entry", virtual: "Limited / extra cost", ai: "Automatic, real-time" },
                                            { feature: "Follow-Up Trigger", voicemail: "None", human: "Manual", virtual: "None", ai: "Automated sequences" },
                                            { feature: "Data Capture", voicemail: "Maybe a message", human: "Depends on person", virtual: "Name & number", ai: "Full qualification data" },
                                            { feature: "Setup Time", voicemail: "5 minutes", human: "2-4 weeks hire", virtual: "1-2 weeks", ai: "30 minutes" },
                                            { feature: "Scales With Volume", voicemail: "No", human: "Hire more", virtual: "Pay per minute", ai: "Unlimited, same cost" },
                                            { feature: "Cost Per Captured Lead", voicemail: "N/A (no capture)", human: "$15-25+", virtual: "$8-15", ai: "$0.19*" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.voicemail}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.human}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.virtual}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50">{row.ai}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="text-xs text-slate-500 mt-2">*Based on 150 captured leads/month at $29/month</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <PhoneOff className="w-5 h-5 text-red-600" />
                                        The Voicemail Trap
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "85% of callers hang up without leaving a message",
                                            "Zero lead qualification — no data captured",
                                            "No CRM entry — the call never existed in your pipeline",
                                            "No follow-up triggered — the lead vanishes",
                                            "Callers perceive voicemail as 'nobody home'"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                                                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <PhoneCall className="w-5 h-5 text-green-600" />
                                        The AI Voice Agent Advantage
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Answers every call in under 1 second — no rings, no wait",
                                            "Asks custom qualification questions per your criteria",
                                            "Captures name, contact, needs, budget, timeline",
                                            "Pushes data to CRM as a new pipeline record",
                                            "Triggers email/SMS follow-up sequence automatically"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Why Virtual Receptionist Services Still Miss Revenue</h4>
                                        <p className="text-slate-700">
                                            Virtual receptionist services like Ruby and Smith.ai are better than voicemail — but they charge <strong>$1.55-$2.20 per minute</strong>, cap your monthly call volume, and most don't operate after midnight. They take messages. They don't qualify leads, push to CRM, or trigger follow-ups. You still end up with a list of callbacks to make manually the next morning — by which time 78% of those leads have moved on.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: How Voice Agents Capture & Qualify Leads */}
                        <section id="how-voice-agents-capture-leads" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How AI Voice Agents Capture & Qualify Leads</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    An AI voice agent isn't just picking up the phone. It's running a five-step revenue capture process on every single call — the same process your best salesperson would run, but in 90 seconds instead of 10 minutes, and without ever taking a break.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Answer Instantly",
                                        icon: Phone,
                                        desc: "The AI voice agent answers in under 1 second. No rings, no hold music, no 'please leave a message.' The caller immediately hears a professional greeting customized to your business. First impression: this company is responsive.",
                                        detail: "Studies show that answer speed directly correlates with caller trust. A 1-second pickup creates the impression of a well-staffed, professional operation."
                                    },
                                    {
                                        step: "2",
                                        title: "Qualify the Caller",
                                        icon: Target,
                                        desc: "The agent asks your custom screening questions: What service do you need? What's your timeline? What's your budget range? Is this for a residential or commercial property? These questions are configured during your 30-minute onboarding.",
                                        detail: "Unlike a receptionist who might forget a question or go off-script, the AI asks every qualifying question, every time, in the optimal order."
                                    },
                                    {
                                        step: "3",
                                        title: "Capture Full Contact Data",
                                        icon: Database,
                                        desc: "Name, phone number, email address, location, and any relevant details — all captured conversationally. The caller doesn't feel like they're filling out a form. They're having a natural conversation while the AI logs everything.",
                                        detail: "The agent can also capture consent for follow-up communication, meeting your compliance requirements automatically."
                                    },
                                    {
                                        step: "4",
                                        title: "Push to CRM Pipeline",
                                        icon: BarChart3,
                                        desc: "Within seconds of the call ending, a new lead record appears in your CRM with the full conversation transcript, qualification data, and a priority score. No manual data entry. No sticky notes. No lost information.",
                                        detail: "Integration works with popular CRMs. Your onboarding team configures the field mappings so data lands exactly where your sales team expects it."
                                    },
                                    {
                                        step: "5",
                                        title: "Trigger Automated Follow-Up",
                                        icon: Zap,
                                        desc: "Based on the qualification results, the AI triggers the appropriate next action: book a calendar appointment, send a follow-up email with pricing info, add to a nurture sequence, or alert your team for immediate callback.",
                                        detail: "High-priority leads get instant notifications to your phone. Lower-priority leads enter automated nurture sequences. Nothing falls through the cracks."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0 text-lg">{item.step}</div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <item.icon className="w-5 h-5 text-primary-600" />
                                                <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                                            </div>
                                            <p className="text-slate-600 mb-2">{item.desc}</p>
                                            <p className="text-sm text-slate-500 italic">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="my-8">
                                <YouTubeEmbed videoId="zBlvV0W4bDc" title="How AI Voice Agents Capture Missed Call Revenue" />
                                <p className="text-sm text-slate-500 text-center mt-3">Watch: How AI voice agents turn missed calls into revenue</p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary-600" />
                                    The Revenue Difference
                                </h4>
                                <p className="text-slate-700">
                                    With voicemail, a missed call generates zero data and zero follow-up. With an AI voice agent, that same call generates a <strong>fully qualified lead record</strong>, a <strong>CRM pipeline entry</strong>, and an <strong>automated follow-up sequence</strong> — all before you even know the call happened. That's not an answering service. That's a revenue capture system.
                                </p>
                            </div>
                        </section>

                        {/* Section 5: CRM Integration */}
                        <section id="crm-integration" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">CRM Integration: Call to Pipeline in Seconds</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The biggest gap in most businesses' phone handling isn't the answering — it's what happens (or doesn't happen) after the call. Sticky notes get lost. Message pads end up under coffee cups. Your team says "I'll add it to the CRM later" and later never comes. That's revenue disappearing into the void.
                                </p>
                                <p>
                                    An AI voice agent eliminates the gap between call and CRM entry completely. The data flows automatically, in real time, with zero human data entry.
                                </p>
                            </div>

                            {/* Before/After Comparison */}
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-red-600" />
                                        Before: Manual Data Entry
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            { time: "0:00", event: "Call comes in — you're busy, goes to voicemail" },
                                            { time: "0:30", event: "Caller hangs up (no message)" },
                                            { time: "2 hrs", event: "You notice a missed call notification" },
                                            { time: "2:30", event: "You call back — no answer" },
                                            { time: "4 hrs", event: "Try again — still no answer" },
                                            { time: "Never", event: "Lead never enters your CRM" },
                                            { time: "Result", event: "$0 — lead is gone forever" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <span className="text-xs font-mono text-red-500 bg-red-100 px-2 py-0.5 rounded mt-0.5 shrink-0 w-14 text-center">{item.time}</span>
                                                <span className="text-sm text-slate-700">{item.event}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        After: AI Voice Agent + CRM
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            { time: "0:00", event: "Call comes in — AI answers instantly" },
                                            { time: "0:01", event: "AI greets caller, begins qualification" },
                                            { time: "1:30", event: "Qualification complete, appointment booked" },
                                            { time: "1:31", event: "Lead record created in CRM automatically" },
                                            { time: "1:32", event: "Follow-up email sent to caller" },
                                            { time: "1:33", event: "You get a text summary with lead details" },
                                            { time: "Result", event: "Qualified lead in pipeline — ready to close" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <span className="text-xs font-mono text-green-600 bg-green-100 px-2 py-0.5 rounded mt-0.5 shrink-0 w-14 text-center">{item.time}</span>
                                                <span className="text-sm text-slate-700">{item.event}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <h3 className="text-xl font-bold text-slate-900">What Gets Pushed to Your CRM</h3>
                                <p>
                                    Every call creates a structured lead record — not a vague "someone called" note, but actionable sales data your team can work with immediately.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mb-8">
                                {[
                                    {
                                        title: "Contact Details",
                                        items: ["Full name", "Phone number", "Email address", "Location / zip code", "Best time to reach"]
                                    },
                                    {
                                        title: "Qualification Data",
                                        items: ["Service needed", "Budget range", "Timeline / urgency", "Decision-maker status", "Lead score (AI-assigned)"]
                                    },
                                    {
                                        title: "Call Intelligence",
                                        items: ["Full conversation transcript", "Call duration", "Sentiment analysis", "Appointment (if booked)", "Follow-up action triggered"]
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                                        <h4 className="font-bold text-slate-900 mb-3">{item.title}</h4>
                                        <ul className="space-y-2">
                                            {item.items.map((li, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 shrink-0" />
                                                    {li}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-800 mb-3">Zero Data Entry = Zero Data Loss</h4>
                                <p className="text-blue-700">
                                    Studies show that <strong>manual CRM entry has a 20-30% error rate</strong> and that reps skip logging 40% of their interactions entirely. An AI voice agent captures every data point with 100% consistency. Your pipeline finally reflects reality — and your forecasting improves overnight.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: The 24/7 Revenue Window */}
                        <section id="availability-247" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The 24/7 Revenue Window</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Most businesses operate 8-10 hours a day. But your customers don't stop needing help at 5 PM. In fact, a huge percentage of the highest-intent calls happen when you're closed. That's not a problem — it's an <strong>opportunity your competitors are ignoring</strong>.
                                </p>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl mb-8">
                                <h3 className="text-xl font-bold mb-6 text-center">When Your Calls Actually Come In</h3>
                                <div className="grid md:grid-cols-4 gap-4">
                                    {[
                                        { time: "After Hours (5PM-9PM)", pct: "22%", desc: "People call after their own work day ends. This is the highest-intent window — they've been thinking about it all day.", color: "text-red-400", barWidth: "w-[88%]", barColor: "bg-red-500" },
                                        { time: "Lunch Hour (11AM-1PM)", pct: "18%", desc: "Spike during lunch breaks when people finally have a free minute to make that call they've been putting off.", color: "text-amber-400", barWidth: "w-[72%]", barColor: "bg-amber-500" },
                                        { time: "Weekends", pct: "12%", desc: "Saturday and Sunday calls are from buyers with urgency — they're researching, comparing, and ready to act.", color: "text-blue-400", barWidth: "w-[48%]", barColor: "bg-blue-500" },
                                        { time: "Early Morning (6-8AM)", pct: "8%", desc: "Before-work callers planning their day. Homeowners calling about emergency repairs that happened overnight.", color: "text-purple-400", barWidth: "w-[32%]", barColor: "bg-purple-500" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className={`text-3xl font-bold ${item.color} mb-1`}>{item.pct}</div>
                                            <div className="text-sm font-medium text-white mb-2">{item.time}</div>
                                            <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
                                                <div className={`${item.barColor} h-2 rounded-full ${item.barWidth}`}></div>
                                            </div>
                                            <p className="text-xs text-slate-400">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 pt-4 border-t border-slate-700 text-center">
                                    <p className="text-lg font-bold text-red-400">Total: 40% of inbound calls happen outside business hours</p>
                                    <p className="text-sm text-slate-400 mt-1">If you're only answering calls M-F 9-5, you're missing nearly half your revenue opportunities</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-3">What Competitors Do After Hours</h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Send calls to voicemail (85% of callers hang up)",
                                            "Use answering services that close at midnight",
                                            "Forward to personal phones (unreliable, unprofessional)",
                                            "Use ring groups that no one answers on weekends",
                                            "Post 'leave a message and we'll call back Monday'"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-3">What Your AI Voice Agent Does</h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Answers at 2 AM Saturday with the same quality as 10 AM Tuesday",
                                            "Qualifies the caller's needs and urgency level",
                                            "Books an appointment for your next available slot",
                                            "Pushes the lead to CRM so it's waiting Monday morning",
                                            "Sends the caller a confirmation text immediately"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <DollarSign className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The After-Hours Revenue Advantage</h4>
                                        <p className="text-slate-700">
                                            Here's the counterintuitive truth: after-hours callers convert at <strong>higher rates</strong> than business-hours callers. Why? Because they've already done their research. They're calling to take action, not to browse. A Saturday evening call to a plumber means a burst pipe. A 9 PM call to a lawyer means they just got served. These are <strong>high-urgency, high-value leads</strong> — and most businesses let them go straight to voicemail.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 7: ROI Calculator */}
                        <section id="roi-calculator" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">ROI Calculator: Your Missed Call Math</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's stop talking about hypotheticals and run the actual numbers for your business. The formula is simple — and the results are hard to ignore.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">The Missed Call Revenue Formula</h3>

                                <div className="space-y-4 max-w-2xl mx-auto">
                                    <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200">
                                        <span className="text-slate-700 font-medium">Calls per day</span>
                                        <span className="text-xl font-bold text-slate-900">20</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <span className="text-slate-400 text-sm">x 62% missed</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200">
                                        <span className="text-slate-700 font-medium">Missed calls per day</span>
                                        <span className="text-xl font-bold text-red-600">12.4</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <span className="text-slate-400 text-sm">x 85% won't leave voicemail</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200">
                                        <span className="text-slate-700 font-medium">Lost leads per day</span>
                                        <span className="text-xl font-bold text-red-600">10.5</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <span className="text-slate-400 text-sm">x 30 business days</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-slate-200">
                                        <span className="text-slate-700 font-medium">Lost leads per month</span>
                                        <span className="text-xl font-bold text-red-600">315</span>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <span className="text-slate-400 text-sm">x 10% would convert x $500 avg deal</span>
                                    </div>
                                    <div className="flex items-center justify-between bg-red-100 p-4 rounded-lg border-2 border-red-300">
                                        <span className="text-red-800 font-bold">Monthly revenue lost to voicemail</span>
                                        <span className="text-2xl font-bold text-red-700">$15,750</span>
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Now let's see what happens when an AI voice agent captures those calls instead.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        scenario: "Conservative",
                                        captured: "5 extra leads/month",
                                        avgDeal: "$500",
                                        revenue: "$2,500/mo",
                                        roi: "86x",
                                        color: "green"
                                    },
                                    {
                                        scenario: "Moderate",
                                        captured: "15 extra leads/month",
                                        avgDeal: "$500",
                                        revenue: "$7,500/mo",
                                        roi: "259x",
                                        color: "blue"
                                    },
                                    {
                                        scenario: "Realistic (Service Biz)",
                                        captured: "30 extra leads/month",
                                        avgDeal: "$500",
                                        revenue: "$15,000/mo",
                                        roi: "517x",
                                        color: "purple"
                                    }
                                ].map((item, idx) => {
                                    const colorMap = {
                                        green: { bg: 'bg-green-50', border: 'border-green-200', stat: 'text-green-700', badge: 'bg-green-100 text-green-700' },
                                        blue: { bg: 'bg-blue-50', border: 'border-blue-200', stat: 'text-blue-700', badge: 'bg-blue-100 text-blue-700' },
                                        purple: { bg: 'bg-purple-50', border: 'border-purple-200', stat: 'text-purple-700', badge: 'bg-purple-100 text-purple-700' }
                                    };
                                    const c = colorMap[item.color];
                                    return (
                                        <div key={idx} className={`${c.bg} border ${c.border} p-6 rounded-xl text-center`}>
                                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${c.badge} mb-3`}>{item.scenario}</div>
                                            <div className={`text-3xl font-bold ${c.stat} mb-1`}>{item.revenue}</div>
                                            <p className="text-sm text-slate-600 mb-1">recovered revenue</p>
                                            <p className="text-xs text-slate-500 mb-3">{item.captured} x {item.avgDeal}</p>
                                            <div className="pt-3 border-t border-slate-200">
                                                <div className={`text-2xl font-bold ${c.stat}`}>{item.roi} ROI</div>
                                                <p className="text-xs text-slate-500">on $29/month investment</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl mb-8">
                                <h3 className="text-xl font-bold mb-6 text-center">Industry-Specific ROI Examples</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            industry: "HVAC Company",
                                            detail: "Captures 10 after-hours emergency calls/month that previously went to voicemail",
                                            calculation: "10 calls x $400 avg job = $4,000/month recovered",
                                            roi: "138x return on $29/month",
                                            roiColor: "text-green-400"
                                        },
                                        {
                                            industry: "Law Firm",
                                            detail: "Captures 3 potential client calls/month that competitors would have gotten",
                                            calculation: "3 calls x $1,500 avg case = $4,500/month recovered",
                                            roi: "155x return on $29/month",
                                            roiColor: "text-green-400"
                                        },
                                        {
                                            industry: "Dental Practice",
                                            detail: "Captures 8 new patient inquiries/month during lunch and after hours",
                                            calculation: "8 calls x $600 first-year value = $4,800/month recovered",
                                            roi: "166x return on $29/month",
                                            roiColor: "text-green-400"
                                        },
                                        {
                                            industry: "Real Estate Agent",
                                            detail: "Captures 2 buyer leads/month from weekend and evening calls",
                                            calculation: "2 calls x $3,500 expected commission = $7,000/month recovered",
                                            roi: "241x return on $29/month",
                                            roiColor: "text-green-400"
                                        }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-slate-800 p-5 rounded-xl">
                                            <h4 className="font-bold text-white mb-2">{item.industry}</h4>
                                            <p className="text-sm text-slate-400 mb-2">{item.detail}</p>
                                            <p className="text-sm text-slate-300 mb-3">{item.calculation}</p>
                                            <div className={`text-lg font-bold ${item.roiColor}`}>{item.roi}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl ring-2 ring-green-400 ring-offset-2">
                                <div className="text-center">
                                    <h4 className="font-bold text-green-800 mb-2 text-lg">The Bottom Line</h4>
                                    <p className="text-green-700 text-lg">
                                        At <strong>$29/month</strong>, an AI voice agent needs to capture <strong>one single lead</strong> that would have otherwise gone to voicemail to pay for itself <strong>many times over</strong>. For most businesses, that happens on day one.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 8: Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Deploy Your AI Voice Agent in 30 Minutes</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    You don't need an IT department, a phone system overhaul, or weeks of setup. Most businesses are live and capturing leads within a single 30-minute onboarding call. Here's the process.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Sign Up & Book Your Free Onboarding",
                                        desc: "Create your Dooza account ($29/month for your full AI workforce including voice agent, sales agent, email, social media, SEO, and legal). Book a free 30-minute onboarding call with our concierge team.",
                                        detail: "You'll also get Rachel (AI receptionist), Stan (sales agent), Eva (email), Somi (social media), Seomi (SEO), and Linda (legal) — all configured during onboarding."
                                    },
                                    {
                                        step: "2",
                                        title: "Configure Your Voice Agent",
                                        desc: "During the onboarding call, our team sets up your voice agent with your business info, greeting script, qualification questions, FAQs, calendar integration, and CRM connection. You tell us what questions to ask — we handle the technical setup.",
                                        detail: "Your qualification criteria, business hours, appointment types, and escalation rules are all customized to match how your business operates."
                                    },
                                    {
                                        step: "3",
                                        title: "Go Live & Start Capturing Revenue",
                                        desc: "Forward your business phone to your AI voice agent. Every call is answered, every caller is qualified, every lead hits your CRM, and every follow-up is triggered automatically. Check your dashboard the next morning — you'll see leads that would have been voicemails.",
                                        detail: "Most businesses see their first captured lead within 24 hours of going live. The AI works while you sleep."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0 text-lg">{item.step}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1 text-lg">{item.title}</h4>
                                            <p className="text-slate-600 mb-2">{item.desc}</p>
                                            <p className="text-sm text-slate-500 italic">{item.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Want to see how this fits into a broader automation strategy? <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Read our complete guide to automating business processes</Link> — covering email, social media, phone, leads, and more.
                                </p>
                                <p>
                                    Interested in the full AI workforce approach? <Link href="/blog/ai-staffing" className="text-primary-600 hover:underline font-medium">See how AI staffing replaces traditional hiring</Link> — 6 AI employees for less than the cost of one human hire's first day.
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Every Minute Without an AI Voice Agent Is Revenue Lost</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Your phone is ringing right now. Someone is calling your competitors because your line went to voicemail. An AI voice agent would have answered in under a second, qualified the caller, captured their data, and booked the appointment. Start today.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start Free Trial <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book Free Onboarding
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Section 9: FAQ */}
                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqData.map((item, idx) => (
                                    <div key={idx} className="border-b border-slate-200 pb-4 last:border-0">
                                        <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.question}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Sources Section */}
                        <section className="scroll-mt-28 border-t border-slate-200 pt-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Sources & References</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Missed Call & Response Data</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.forbes.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Forbes — 62% of small business calls go unanswered</a></li>
                                        <li>• <a href="https://www.nectafy.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Nectafy — 85% of callers won't leave voicemail</a></li>
                                        <li>• <a href="https://www.leadconnectapp.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Lead Connect — 78% of deals go to the first responder</a></li>
                                        <li>• <a href="https://marketwiz.ai/real-estate-lead-response-time-why-5-minutes-10x-more-conversions/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">MIT / InsideSales — 5-minute response window, 21x qualification</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Cost & Industry Data</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.bls.gov/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Bureau of Labor Statistics — Receptionist & admin salary data</a></li>
                                        <li>• <a href="https://www.ruby.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Ruby — Virtual receptionist pricing ($1.55-2.20/min)</a></li>
                                        <li>• <a href="https://smith.ai/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Smith.ai — Virtual receptionist pricing & capabilities</a></li>
                                        <li>• <a href="https://www.salesforce.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Salesforce — CRM data entry error rates and adoption</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="ai-voice-agent-missed-calls" category="Lead Generation" tags={['AI Voice Agent', 'Missed Calls', 'Lead Capture', 'Revenue Recovery']} />
                    </div>

                    <div className="hidden xl:block w-64 shrink-0" aria-hidden="true"></div>
                </div>
            </div>

            <BottomCTA openModal={handleAction} />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
