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
import BlogHeroImage from '../../../components/BlogHeroImage';
import YouTubeEmbed from '../../../components/YouTubeEmbed';
import {
    CheckCircle2,
    XCircle,
    Clock,
    Calendar,
    ArrowRight,
    DollarSign,
    Bot,
    Zap,
    Mail,
    Phone,
    Users,
    TrendingUp,
    AlertTriangle,
    MessageSquare,
    FileText,
    Target,
    BarChart3,
    Shield,
    UserCheck,
    Repeat,
    Building2,
    Home,
    Timer,
    Sparkles,
    PhoneCall
} from 'lucide-react';

const faqData = [
    {
        question: "What is an AI sales agent?",
        answer: "An AI sales agent is software that handles sales tasks autonomously — qualifying inbound leads, following up with prospects, booking calendar appointments, and even conducting outbound outreach. Unlike a chatbot that just answers questions, an AI sales agent takes action to move deals forward 24/7."
    },
    {
        question: "Can an AI sales agent really qualify leads as well as a human?",
        answer: "For initial qualification, yes — often better. AI sales agents ask consistent screening questions every time, never skip steps, and respond instantly. They handle the top-of-funnel qualification (budget, timeline, needs) so your human closers only spend time on pre-qualified prospects."
    },
    {
        question: "How much does an AI sales agent cost compared to hiring an SDR?",
        answer: "A human SDR costs $4,000-$7,000/month in base salary alone, plus commission, benefits, and management overhead. Dooza's AI sales agent (Stan) costs $29/month as part of a 6-employee AI team — that's 99% less than a single junior hire."
    },
    {
        question: "Will prospects know they're talking to an AI?",
        answer: "Modern AI sales agents use natural language that's conversational and professional. Most prospects can't tell the difference during initial qualification. The AI identifies itself transparently when asked, and hands off to a human for complex negotiations."
    },
    {
        question: "What industries benefit most from AI sales agents?",
        answer: "Any business with high lead volume and a qualifying process benefits: real estate, insurance, SaaS, home services, financial services, and professional services. If you're losing deals because of slow follow-up or inconsistent qualification, an AI sales agent will help."
    },
    {
        question: "How does an AI sales agent integrate with my CRM?",
        answer: "Dooza's AI employees integrate with popular CRMs and tools. During your free onboarding call, our concierge team connects everything so qualified leads flow directly into your pipeline with full conversation history and qualification notes."
    }
];

export default function AiSalesAgentGuideContent() {
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
            const sections = ['introduction', 'sales-bottleneck', 'what-is-ai-sales-agent', 'what-they-do', 'before-after', 'ai-vs-alternatives', 'industries', 'meet-stan', 'real-cost', 'getting-started', 'faq'];
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
            <div className="bg-gradient-to-br from-orange-50 via-white to-primary-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'AI Sales Agent Guide' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                            <Target size={16} />
                            <span>Sales Automation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            How to Clone Your Best <span className="text-primary-600">Salesperson</span>: A Guide to AI Sales Agents
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Your best rep can only work 8 hours a day. An AI sales agent qualifies leads, books appointments, and follows up instantly — 24/7. Here's how to put one to work for your business.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
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
                                Get Your AI Sales Agent - $29/mo
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
                                    { id: 'introduction', label: 'Introduction' },
                                    { id: 'sales-bottleneck', label: 'The Sales Bottleneck' },
                                    { id: 'what-is-ai-sales-agent', label: 'What Is an AI Sales Agent?' },
                                    { id: 'what-they-do', label: 'What They Actually Do' },
                                    { id: 'before-after', label: 'Before vs After' },
                                    { id: 'ai-vs-alternatives', label: 'AI vs Alternatives' },
                                    { id: 'industries', label: 'Industries Using AI Sales' },
                                    { id: 'meet-stan', label: 'Meet Stan' },
                                    { id: 'real-cost', label: 'The Real Cost' },
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
                                <p className="text-sm text-slate-600 mb-4">Stop losing leads to slow follow-up</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Stan Free
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="ai-sales-agent-guide" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Think about your best salesperson. The one who always follows up. Never forgets a lead. Qualifies prospects perfectly every single time.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Now imagine cloning them. Giving them the ability to work every hour of every day — nights, weekends, holidays. No coffee breaks, no sick days, no commission negotiations. Just relentless, consistent execution on the grunt work that fills your pipeline.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    That's what an AI sales agent does. It doesn't replace your closers — it <strong>feeds them</strong>. It handles the repetitive top-of-funnel work that burns out your best people: qualifying inbound leads, following up with cold prospects, booking calendar appointments, and making sure no opportunity slips through the cracks.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <Link href="/blog/ai-for-real-estate-agents" className="text-primary-600 hover:underline font-medium">We've already shown how AI transforms real estate sales</Link>. This guide goes broader — covering how AI sales agents work for any business that depends on a pipeline.
                                </p>

                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="5hZCTc_mwOg"
                                        title="How AI Sales Agents Work — Qualify Leads, Book Meetings, Close Deals"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: How AI sales agents qualify leads and book appointments automatically</p>
                                </div>

                                <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Target className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">This Guide is For You If...</h4>
                                            <ul className="text-slate-700 space-y-2">
                                                <li>• You're losing deals because leads go cold before you follow up</li>
                                                <li>• Your sales team spends more time qualifying than closing</li>
                                                <li>• You can't afford a full SDR team but need the pipeline</li>
                                                <li>• You want 24/7 lead response without hiring a night shift</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: The Sales Bottleneck */}
                        <section id="sales-bottleneck" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Sales Bottleneck: Why Leads Die</h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { stat: "78%", label: "of deals go to the first company that responds", source: "Lead Connect" },
                                    { stat: "5 min", label: "is the window to reach a lead — after that, conversion drops 10x", source: "MIT / InsideSales" },
                                    { stat: "44%", label: "of salespeople give up after just one follow-up", source: "Brevet Group" },
                                    { stat: "80%", label: "of sales require 5+ follow-ups, but most reps never get there", source: "RAIN Group" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-xl text-center">
                                        <div className="text-4xl font-bold text-red-600 mb-2">{item.stat}</div>
                                        <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                                        <p className="text-xs text-red-500">{item.source}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Here's the problem every sales team faces: <strong>the work that fills the pipeline is the work nobody wants to do</strong>. Qualifying cold leads, sending the fifth follow-up email, responding to a website inquiry at 11 PM on a Saturday — this is where deals are won and lost.
                                </p>
                                <p>
                                    But it's also the work that burns people out. Your best closer shouldn't be screening unqualified leads. Your $80,000/year sales rep shouldn't spend 60% of their day on admin tasks. According to Salesforce, reps spend only <strong>28% of their time actually selling</strong> — the rest is data entry, emails, and scheduling.
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Real Cost of Slow Follow-Up</h4>
                                        <p className="text-slate-700">
                                            If you generate 50 leads/month and your team takes an average of 2 hours to respond, you're losing up to <strong>35 of those leads</strong> to competitors who responded first. At $500/lead value, that's <strong>$17,500/month walking out the door</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: What Is an AI Sales Agent? */}
                        <section id="what-is-ai-sales-agent" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is an AI Sales Agent? (It's Not a Chatbot)</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's clear up the biggest misconception: an AI sales agent is <strong>not a chatbot</strong>. A chatbot sits on your website and answers FAQs. An AI sales agent actively works your pipeline.
                                </p>
                                <p>
                                    <Link href="/blog/ai-agents-vs-agentic-ai" className="text-primary-600 hover:underline font-medium">As we explained in our AI agents guide</Link>, the difference is action. A chatbot waits for questions. An AI sales agent <strong>takes initiative</strong> — it qualifies, follows up, books meetings, and hands off warm prospects to your human closers.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-red-600" />
                                        A Chatbot
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Waits for visitors to start a conversation",
                                            "Answers pre-scripted FAQs",
                                            "Sends leads to a form or inbox",
                                            "Works only on your website",
                                            "No follow-up capability"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        An AI Sales Agent
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Proactively engages and qualifies leads",
                                            "Has natural, multi-turn conversations",
                                            "Books appointments directly on your calendar",
                                            "Works across email, phone, chat, and SMS",
                                            "Follows up automatically until the deal closes or disqualifies"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: What AI Sales Agents Actually Do */}
                        <section id="what-they-do" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What AI Sales Agents Actually Do</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {[
                                    { icon: Zap, title: "Instant Lead Response", desc: "Responds to every inbound inquiry in under 60 seconds — email, form, or chat. No lead waits. Ever." },
                                    { icon: UserCheck, title: "Lead Qualification", desc: "Asks your custom screening questions: budget, timeline, decision-maker status, specific needs. Scores and ranks every prospect." },
                                    { icon: Calendar, title: "Appointment Booking", desc: "Checks your team's real-time availability and books meetings directly. No back-and-forth scheduling emails." },
                                    { icon: Repeat, title: "Automated Follow-Up", desc: "Sends the 2nd, 3rd, 4th, and 5th follow-up on schedule. 80% of deals need 5+ touches — AI never forgets." },
                                    { icon: PhoneCall, title: "Outbound Outreach", desc: "Reaches out to cold lists with personalized messaging. Warms them up and routes interested prospects to your team." },
                                    { icon: BarChart3, title: "Pipeline Intelligence", desc: "Tracks every interaction, scores lead quality, and gives your team a clear picture of what's hot and what's cold." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-sm text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-primary-600" />
                                    The Key Difference
                                </h4>
                                <p className="text-slate-700">
                                    Your human reps handle the <strong>20% that requires judgment</strong> — negotiating, building relationships, closing deals. The AI handles the <strong>80% that requires consistency</strong> — responding fast, following up on time, qualifying accurately, booking meetings. It's not AI <em>vs</em> your team. It's AI <em>multiplying</em> your team.
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Before vs After */}
                        <section id="before-after" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Before vs After: What Changes</h2>

                            <div className="space-y-6 mb-8">
                                {[
                                    {
                                        scenario: "A lead fills out your contact form at 9 PM",
                                        before: "They get an auto-reply: \"We'll get back to you within 24 hours.\" By morning, they've already booked with a competitor who responded at 9:01 PM.",
                                        after: "Your AI sales agent responds in 30 seconds, asks qualifying questions, confirms they're a fit, and books a meeting on your calendar for tomorrow at 10 AM. You wake up to a qualified appointment."
                                    },
                                    {
                                        scenario: "You have 200 cold leads from a trade show",
                                        before: "Your SDR emails the first 50, gets busy, and the other 150 sit in a spreadsheet for 3 months. Eventually, you delete the list.",
                                        after: "Your AI sales agent contacts all 200 within 24 hours with personalized outreach. It follows up 5 times over 3 weeks. You get 15 qualified meetings without your team touching it."
                                    },
                                    {
                                        scenario: "A hot prospect goes quiet after your proposal",
                                        before: "Your rep sends one follow-up, gets no reply, and moves on. The deal dies silently.",
                                        after: "Your AI sales agent sends a value-add follow-up 3 days later, then a case study a week after that, then a gentle check-in at day 14. The prospect replies on the third touch: \"Sorry, was swamped. Let's move forward.\""
                                    },
                                    {
                                        scenario: "It's Saturday afternoon and someone calls asking about your service",
                                        before: "Voicemail. They call your competitor.",
                                        after: "Rachel (your AI receptionist) answers instantly, qualifies the caller, and books a Monday morning call with your sales team. The lead is warm and waiting."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                                        <div className="bg-slate-100 px-6 py-3">
                                            <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                                <MessageSquare className="w-4 h-4 text-slate-500" />
                                                Scenario: {item.scenario}
                                            </h4>
                                        </div>
                                        <div className="grid md:grid-cols-2">
                                            <div className="p-5 bg-red-50 border-r border-slate-200">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <XCircle className="w-4 h-4 text-red-500" />
                                                    <span className="font-bold text-red-800 text-sm">BEFORE (Manual)</span>
                                                </div>
                                                <p className="text-sm text-slate-700">{item.before}</p>
                                            </div>
                                            <div className="p-5 bg-green-50">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                    <span className="font-bold text-green-800 text-sm">AFTER (AI Sales Agent)</span>
                                                </div>
                                                <p className="text-sm text-slate-700">{item.after}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 6: AI vs Alternatives */}
                        <section id="ai-vs-alternatives" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">AI Sales Agent vs The Alternatives</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Junior SDR</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Outsourced Sales<br /><span className="font-normal text-xs text-slate-500">(Agency / VA)</span></th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Chatbot</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">AI Sales Agent<br /><span className="font-normal text-xs text-primary-500">(Dooza)</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Monthly Cost", sdr: "$4,000-7,000", outsourced: "$2,000-5,000", chatbot: "$50-300", ai: "$29" },
                                            { feature: "Availability", sdr: "8 hours/day", outsourced: "Business hours", chatbot: "24/7 (website only)", ai: "24/7 (all channels)" },
                                            { feature: "Response Time", sdr: "Minutes to hours", outsourced: "Hours", chatbot: "Instant (scripted)", ai: "Instant (intelligent)" },
                                            { feature: "Follow-Up Consistency", sdr: "Drops off after 1-2", outsourced: "Inconsistent", chatbot: "None", ai: "5+ touches, never misses" },
                                            { feature: "Lead Qualification", sdr: "Varies by person", outsourced: "Basic scripting", chatbot: "Pre-set forms only", ai: "Custom AI qualification" },
                                            { feature: "Appointment Booking", sdr: "Manual", outsourced: "Manual", chatbot: "Basic form redirect", ai: "Automatic calendar sync" },
                                            { feature: "Ramp-Up Time", sdr: "3-6 months", outsourced: "2-4 weeks", chatbot: "1-2 weeks config", ai: "30 minutes" },
                                            { feature: "Scales With Volume", sdr: "Hire more people", outsourced: "Pay more", chatbot: "Yes", ai: "Yes, no extra cost" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.sdr}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.outsourced}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.chatbot}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50">{row.ai}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 7: Industries */}
                        <section id="industries" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Industries Where AI Sales Agents Dominate</h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        title: "Real Estate",
                                        icon: Home,
                                        desc: "Qualify buyer/seller leads instantly, book showings, and follow up with prospects across time zones. 78% of buyers choose the first agent to respond.",
                                        link: { href: "/blog/ai-for-real-estate-agents", label: "See our real estate AI guide" }
                                    },
                                    {
                                        title: "Insurance",
                                        icon: Shield,
                                        desc: "Screen applicants, gather policy details, compare quotes, and book consultations. Handle open enrollment surges without hiring temp staff.",
                                        link: null
                                    },
                                    {
                                        title: "SaaS & Tech",
                                        icon: Sparkles,
                                        desc: "Qualify demo requests, route enterprise vs SMB leads, and nurture trial users toward paid plans. Never let a free trial expire silently.",
                                        link: null
                                    },
                                    {
                                        title: "Home Services",
                                        icon: Building2,
                                        desc: "Capture emergency leads at midnight, qualify project scope, and book estimates. Plumbers, electricians, and HVAC companies win on response time.",
                                        link: { href: "/blog/best-ai-receptionist", label: "See our AI receptionist guide" }
                                    },
                                    {
                                        title: "Financial Services",
                                        icon: DollarSign,
                                        desc: "Pre-qualify loan applicants, gather documentation requirements, and schedule advisor consultations. Compliance-aware and consistent.",
                                        link: null
                                    },
                                    {
                                        title: "Professional Services",
                                        icon: Users,
                                        desc: "Law firms, consultancies, and agencies — screen potential clients, collect case details, and book discovery calls. Focus your billable hours on actual work.",
                                        link: null
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-sm text-slate-600 mb-3">{item.desc}</p>
                                        {item.link && (
                                            <Link href={item.link.href} className="text-sm text-primary-600 hover:underline font-medium">
                                                {item.link.label} &rarr;
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 8: Meet Stan */}
                        <section id="meet-stan" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Stan: Your AI Sales Agent</h2>

                            <div className="bg-gradient-to-br from-primary-50 to-orange-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Target size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Stan — AI Lead Generator & Sales Agent</h3>
                                        <p className="text-lg text-slate-700">
                                            Stan is your tireless sales team member who qualifies every lead, follows up every time, and books meetings on your calendar — so your human closers only talk to prospects who are ready to buy.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Zap, title: "Instant Response", desc: "Engages every lead within seconds. Email, chat, or form — Stan is there." },
                                    { icon: UserCheck, title: "Smart Qualification", desc: "Custom screening questions tailored to your sales process and ICP." },
                                    { icon: Calendar, title: "Direct Booking", desc: "Books meetings on your team's calendar. No scheduling links. No friction." },
                                    { icon: Repeat, title: "Persistent Follow-Up", desc: "5+ touchpoints over weeks. Personalized, not spammy. Never gives up early." },
                                    { icon: BarChart3, title: "Lead Scoring", desc: "Ranks every prospect by fit and engagement so your team knows who's hot." },
                                    { icon: Mail, title: "Email Outreach", desc: "Personalized cold outreach at scale. Warms lists without burning your domain." },
                                    { icon: Phone, title: "Works With Rachel", desc: "Stan + Rachel = inbound calls qualified and booked automatically." },
                                    { icon: TrendingUp, title: "Pipeline Visibility", desc: "Full activity log. See every conversation, every touchpoint, every outcome." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Stan doesn't work alone. He's part of your <Link href="/blog/ai-staffing" className="text-primary-600 hover:underline font-medium">full AI workforce</Link> — working alongside Rachel (receptionist), Eva (email), Somi (social media), Seomi (SEO), and Linda (legal) to turn your business into a lead-generating machine.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: The Real Cost */}
                        <section id="real-cost" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Cost: AI Sales Agent vs Hiring</h2>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4 text-lg">The Math on Your Current Sales Overhead</h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Junior SDR salary", value: "$55,000/year" },
                                        { label: "Benefits & overhead (30%)", value: "$16,500/year" },
                                        { label: "Sales tools (CRM, dialer, email)", value: "$3,600/year" },
                                        { label: "Training & ramp-up (3-6 months)", value: "$13,750 in lost productivity" },
                                        { label: "Total first-year cost for ONE SDR", value: "$88,850", highlight: true }
                                    ].map((item, idx) => (
                                        <div key={idx} className={`flex justify-between items-center py-2 px-4 rounded-lg ${item.highlight ? 'bg-primary-100 font-bold text-primary-800' : 'bg-white'}`}>
                                            <span className="text-slate-700">{item.label}</span>
                                            <span className={item.highlight ? 'text-primary-800 text-xl' : 'text-slate-900 font-medium'}>{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-red-600 mb-2">$7,400/mo</div>
                                    <p className="text-sm text-slate-700 font-medium">In-House SDR</p>
                                    <p className="text-xs text-slate-500 mt-1">Salary + benefits + tools + management</p>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">$3,500/mo</div>
                                    <p className="text-sm text-slate-700 font-medium">Outsourced Sales Agency</p>
                                    <p className="text-xs text-slate-500 mt-1">Business hours only, shared reps</p>
                                </div>
                                <div className="bg-green-100 border-2 border-green-300 p-6 rounded-xl text-center ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-3xl font-bold text-green-700 mb-2">$29/mo</div>
                                    <p className="text-sm text-green-800 font-medium">Stan + 5 AI Employees (Dooza)</p>
                                    <p className="text-xs text-green-600 mt-1">24/7, unlimited leads, instant response</p>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-800 mb-3">The ROI Math:</h4>
                                <p className="text-blue-700">
                                    If Stan helps you close just <strong>one extra deal per quarter</strong> — whether that's a $5,000 service contract, a $10,000 insurance policy, or a $300,000 home sale — your $348/year Dooza investment pays for itself <strong>14x to 862x over</strong>. Most businesses see ROI within the first week.
                                </p>
                            </div>
                        </section>

                        {/* Section 10: Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Clone Your Best Salesperson in 3 Steps</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Sign Up & Book Your Free Onboarding",
                                        desc: "Tell us about your sales process, your ideal customer, and your qualification criteria. Our concierge team configures Stan to match your exact playbook."
                                    },
                                    {
                                        step: "2",
                                        title: "Connect Your Pipeline",
                                        desc: "Link your calendar, email, and CRM. Stan starts working your existing leads and responding to new inquiries immediately."
                                    },
                                    {
                                        step: "3",
                                        title: "Your Closers Get Pre-Qualified Meetings",
                                        desc: "Stan qualifies, follows up, and books. Your human team walks into meetings with prospects who are ready to buy. Close rate goes up. Stress goes down."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">{item.step}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Learn how to automate your entire business beyond just sales &rarr;</Link>
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Clone Your Best Salesperson?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Every hour without an AI sales agent is leads going cold, follow-ups getting missed, and revenue walking to your competitors. Stan starts working in 30 minutes.
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

                        {/* Section 11: FAQ */}
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Sales Response & Follow-Up Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.leadconnectapp.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Lead Connect — First responder wins 78% of deals</a></li>
                                        <li>• <a href="https://www.salesforce.com/resources/article/sales-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Salesforce — Sales reps spend 28% of time selling</a></li>
                                        <li>• <a href="https://brevetgroup.com/21-mind-blowing-sales-stats/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Brevet Group — 44% give up after one follow-up</a></li>
                                        <li>• <a href="https://www.rainsalestraining.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">RAIN Group — 80% of sales need 5+ follow-ups</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">AI Sales & Lead Conversion</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://marketwiz.ai/real-estate-lead-response-time-why-5-minutes-10x-more-conversions/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">MIT / InsideSales — 5-minute response window</a></li>
                                        <li>• <a href="https://www.crescendo.ai/blog/best-real-estate-chatbots-with-ai" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Crescendo AI — 40% lead conversion increase</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="ai-sales-agent-guide" category="AI Automation" tags={['AI Sales Agent', 'Sales Automation', 'Lead Generation', 'AI Employees']} />
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
