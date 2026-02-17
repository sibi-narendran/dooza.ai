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
    Sparkles,
    Clock,
    Calendar,
    ArrowRight,
    CheckCircle2,
    XCircle,
    Bot,
    Zap,
    Mail,
    Phone,
    Users,
    TrendingUp,
    Target,
    Shield,
    Share2,
    Rocket,
    Building2,
    Brain,
    Lightbulb,
    ChevronRight,
    HelpCircle,
    Play
} from 'lucide-react';

const faqData = [
    {
        question: "What is a 20X company?",
        answer: "A 20X company is a term coined by Y Combinator president Gary Tan to describe startups that use AI to automate every internal function — not just one. Instead of hiring large teams, 20X companies use AI agents to handle sales, marketing, support, legal, and operations, allowing tiny teams of 4-12 people to produce the output of companies 20 times their size."
    },
    {
        question: "How can a small business compete with larger companies using AI?",
        answer: "By deploying AI employees across every operational function — email, social media, phone calls, lead generation, SEO, and legal compliance. Platforms like Dooza give small businesses the same AI superpowers that elite YC startups build with engineering teams, but without needing any technical skills. Six AI employees cost $29/month."
    },
    {
        question: "How does Dooza use OpenClaw?",
        answer: "OpenClaw is the open-source AI agent framework that many YC startups build on. Dooza uses OpenClaw as its foundation and adds the managed infrastructure businesses need — multi-tenancy, security, cron scheduling, billing, and a dashboard UI. You get enterprise-grade AI employees powered by the same technology YC companies use, without needing to build or maintain anything yourself."
    },
    {
        question: "Do I need technical skills to use AI employees?",
        answer: "Not at all. Dooza is designed for non-technical business owners. You book a free 30-minute onboarding call, and our concierge team configures your AI employees to match your business, brand voice, and workflows. They start working immediately."
    },
    {
        question: "How is this different from hiring a virtual assistant?",
        answer: "A human virtual assistant costs $1,000-2,600/month and works limited hours. Dooza's AI employees work 24/7, handle six different job functions simultaneously, never take PTO, and cost $29/month total. They handle the repetitive 80% of work so humans can focus on the 20% requiring judgment and creativity."
    }
];

export default function BuildA20xCompanyContent() {
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
            const sections = ['introduction', 'what-is-20x', 'case-studies', 'the-gap', 'openclaw-solution', 'how-it-works', 'your-roadmap', 'faq'];
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
            <div className="bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Build a 20X Company' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI Education</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            How to Build a <span className="text-primary-600">20X Company</span>: The Playbook Any Business Can Follow
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Y Combinator companies are using AI to do the work of 20 people with teams of 4. Here's how any business can follow the same playbook — no engineers required.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>February 17, 2026</span>
                            </div>
                        </div>

                        {/* YouTube Embed replaces hero image */}
                        <div className="mt-10 max-w-3xl mx-auto">
                            <YouTubeEmbed
                                videoId="rWUWfj_PqmM"
                                title="Gary Tan on 20X Companies — Y Combinator"
                            />
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('20x')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Get Your 20X Advantage
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleAction}
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all"
                            >
                                <Calendar className="w-5 h-5" />
                                Book Free Demo
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
                                    { id: 'what-is-20x', label: 'What Is a 20X Company?' },
                                    { id: 'case-studies', label: 'YC Case Studies' },
                                    { id: 'the-gap', label: 'The Problem' },
                                    { id: 'openclaw-solution', label: 'Dooza\'s Solution' },
                                    { id: 'how-it-works', label: 'How It Works' },
                                    { id: 'your-roadmap', label: 'Your 20X Roadmap' },
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
                                <p className="text-sm text-slate-600 mb-4">Become a 20X business</p>
                                <a
                                    href={getProductSignupUrl('20x')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Dooza Free
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="build-a-20x-company" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction — The Hook */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Gary Tan, president of Y Combinator, recently made a bold claim: the best startups in YC's current batch aren't just using AI — they're <strong>replacing entire departments with it</strong>.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    He calls them <strong>"20X companies"</strong> — startups where a team of 4-5 people produces the output of a company 20 times their size. Not by working harder. By deploying AI agents across every function of the business.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The examples are striking. <strong>GigaML</strong> built an AI sales agent that closed DoorDash — with 4-5 engineers. <strong>Legion Health</strong> grew 4x without hiring a single new person. <strong>Phase Shift</strong> runs with 12 people doing what would normally require hundreds.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    But here's the catch: these are elite YC startups with world-class engineering teams. What about the other 33 million small businesses in America?
                                </p>

                                <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Sparkles className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">Dooza's Mission</h4>
                                            <p className="text-slate-700">
                                                Dooza is built on OpenClaw — the same open-source AI agent framework powering YC startups — and packages it into <strong>ready-to-deploy AI employees</strong> for any business. No engineering team. No YC backing required. Six AI employees. $29/month.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: What Is a 20X Company? */}
                        <section id="what-is-20x" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is a 20X Company?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    In Gary Tan's words, a 20X company is one where <strong>"every single function in the company is being automated with AI."</strong> Not just customer support. Not just marketing. <em>Everything.</em>
                                </p>
                                <p>
                                    The concept is simple: instead of hiring a person for every role, you deploy an AI agent. The result? A team of 5 can compete with — and beat — companies with 100+ employees.
                                </p>
                            </div>

                            {/* Old vs New Playbook */}
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-red-500" />
                                        Old Playbook
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Hire specialists for every function",
                                            "Scale headcount as you grow",
                                            "Months to recruit and onboard",
                                            "Overhead: benefits, PTO, management",
                                            "Speed limited by team size"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-primary-700 mb-4 flex items-center gap-2">
                                        <Rocket className="w-5 h-5 text-primary-600" />
                                        20X Playbook
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Deploy AI agents for every function",
                                            "Scale output without scaling headcount",
                                            "Minutes to deploy, immediate results",
                                            "Fixed cost: no benefits, no overhead",
                                            "Speed limited only by ambition"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-primary-700">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Gary Tan Quote */}
                            <div className="bg-slate-900 text-white p-8 rounded-2xl mb-8">
                                <blockquote className="text-lg md:text-xl italic leading-relaxed mb-4">
                                    "Every single function in the company is being automated with AI. Sales, marketing, support, legal, HR — all of it. These companies are doing the output of 20 companies their size."
                                </blockquote>
                                <p className="text-slate-400 font-medium">— Gary Tan, President of Y Combinator</p>
                            </div>

                            {/* Stat Grid */}
                            <div className="grid grid-cols-3 gap-4">
                                {[
                                    { stat: "4-5", label: "engineers at GigaML closing enterprise deals" },
                                    { stat: "4x", label: "growth at Legion Health — zero new hires" },
                                    { stat: "12", label: "people at Phase Shift doing the work of hundreds" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-primary-50 border border-primary-100 p-5 rounded-xl text-center">
                                        <div className="text-2xl md:text-3xl font-bold text-primary-700 mb-2">{item.stat}</div>
                                        <p className="text-sm text-slate-700">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 3: Real YC Case Studies */}
                        <section id="case-studies" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Real YC Case Studies</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    These aren't hypotheticals. These are real companies from Y Combinator's portfolio, referenced in Gary Tan's talk, that are proving the 20X model works.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* GigaML */}
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 shrink-0">
                                            <Target size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-amber-900 text-xl mb-2">GigaML — AI Sales Agent</h3>
                                            <p className="text-amber-800 mb-4">
                                                A team of <strong>4-5 engineers</strong> built "Atlas," an AI sales agent that autonomously handles outbound sales. The result? They <strong>closed DoorDash as a customer</strong> — the kind of enterprise deal that normally requires a 20+ person sales team.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">4-5 engineers</span>
                                                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">AI sales agent "Atlas"</span>
                                                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Closed DoorDash</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Legion Health */}
                                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 shrink-0">
                                            <Brain size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-blue-900 text-xl mb-2">Legion Health — AI Psychiatry</h3>
                                            <p className="text-blue-800 mb-4">
                                                A mental health company that grew <strong>4x</strong> without hiring a single new person. Their secret: <strong>one person per department</strong>, each augmented by AI agents that handle the operational load. The human provides judgment; the AI handles volume.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">4x growth</span>
                                                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">Zero new hires</span>
                                                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">1 person per department</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Phase Shift */}
                                <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 shrink-0">
                                            <Zap size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-purple-900 text-xl mb-2">Phase Shift — Custom AI Agents Per Employee</h3>
                                            <p className="text-purple-800 mb-4">
                                                Running with just <strong>12 people</strong>, Phase Shift builds custom AI agents for each employee's specific role. Every team member has AI handling their repetitive tasks, letting them focus on high-value work. The result: they <strong>avoided hiring entire teams</strong> that their competitors needed.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">12 people total</span>
                                                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">Custom AI per employee</span>
                                                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">Avoided entire hires</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: The Problem — You're Not a YC Startup */}
                        <section id="the-gap" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Problem: You're Not a YC Startup</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The 20X playbook sounds incredible. But there's a massive gap between hearing about it and actually doing it.
                                </p>
                                <p>
                                    GigaML's team has PhDs in machine learning. Legion Health has YC funding and mentorship. Phase Shift has engineers who can build custom AI agents from scratch.
                                </p>
                                <p>
                                    Most businesses? They have a founder who's already wearing 6 hats and a tech stack that starts and ends with Gmail and Canva.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <Building2 className="w-5 h-5 text-slate-600" />
                                        What YC Companies Have
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Elite engineering teams",
                                            "YC funding & mentorship",
                                            "Custom-built AI infrastructure",
                                            "Months of R&D runway",
                                            "Access to the best AI talent"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                <span className="text-slate-400 mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-red-600" />
                                        What Most Businesses Have
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "No engineering team",
                                            "Bootstrap budget",
                                            "Off-the-shelf SaaS tools",
                                            "No time for experimentation",
                                            "ChatGPT and good intentions"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-red-700">
                                                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl text-center">
                                <p className="text-lg font-bold text-slate-900">
                                    This is the gap Dooza was built to close.
                                </p>
                                <p className="text-slate-600 mt-2">
                                    Dooza takes OpenClaw — the same AI agent framework YC companies use — and wraps it in a managed platform any business can use. No YC deal required.
                                </p>
                            </div>
                        </section>

                        {/* Section 5: OpenClaw — 20X for Every Business */}
                        <section id="openclaw-solution" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How Dooza Delivers 20X to Every Business</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Dooza is built on <Link href="/blog/what-is-openclaw" className="text-primary-600 hover:underline font-medium">OpenClaw</Link> — the open-source AI agent framework — and uses it to power pre-built AI employees that any business can deploy. No custom engineering. No months of R&D. Here's how Dooza's AI employees map to the exact strategies YC companies are using:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {/* Eva */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Eva</h3>
                                            <p className="text-sm text-slate-500">AI Email Manager</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm mb-3">Reads, prioritizes, responds, and follows up on email — autonomously.</p>
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <p className="text-xs text-blue-700 font-medium">Legion Health's 1-person departments? Eva is your email department.</p>
                                    </div>
                                </div>

                                {/* Somi */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                                            <Share2 size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Somi</h3>
                                            <p className="text-sm text-slate-500">AI Social Media Manager</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm mb-3">Creates content, posts on schedule, and monitors engagement across platforms.</p>
                                    <div className="bg-purple-50 p-3 rounded-lg">
                                        <p className="text-xs text-purple-700 font-medium">Phase Shift's custom agents per role? Somi is your social media agent.</p>
                                    </div>
                                </div>

                                {/* Rachel */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Rachel</h3>
                                            <p className="text-sm text-slate-500">AI Receptionist</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm mb-3">Answers every call, qualifies leads, and books appointments — 24/7.</p>
                                    <div className="bg-green-50 p-3 rounded-lg">
                                        <p className="text-xs text-green-700 font-medium">85% of callers won't leave voicemail. Rachel captures them all.</p>
                                    </div>
                                </div>

                                {/* Stan */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                                            <Target size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Stan</h3>
                                            <p className="text-sm text-slate-500">AI Lead Generator</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm mb-3">Finds prospects, sends personalized outreach, and nurtures leads through your pipeline.</p>
                                    <div className="bg-orange-50 p-3 rounded-lg">
                                        <p className="text-xs text-orange-700 font-medium">GigaML built Atlas for sales. Dooza gives you Stan.</p>
                                    </div>
                                </div>

                                {/* Seomi */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
                                            <TrendingUp size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Seomi</h3>
                                            <p className="text-sm text-slate-500">AI SEO Specialist</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm mb-3">Writes optimized content, manages Google Business Profile, monitors rankings.</p>
                                    <div className="bg-teal-50 p-3 rounded-lg">
                                        <p className="text-xs text-teal-700 font-medium">120% increase in organic traffic — without hiring an SEO team.</p>
                                    </div>
                                </div>

                                {/* Linda */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                                            <Shield size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Linda</h3>
                                            <p className="text-sm text-slate-500">AI Legal Assistant</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm mb-3">Handles compliance, reviews contracts, and monitors regulatory changes.</p>
                                    <div className="bg-indigo-50 p-3 rounded-lg">
                                        <p className="text-xs text-indigo-700 font-medium">Every 20X company automates legal. Linda does it for you.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-50 border-2 border-green-200 p-8 rounded-xl text-center">
                                <p className="text-2xl font-bold text-green-800 mb-2">
                                    6 AI employees. $29/month. No engineers required.
                                </p>
                                <p className="text-green-700">
                                    The same automation YC companies spend months building — ready in 30 minutes.
                                </p>
                            </div>
                        </section>

                        {/* Section 6: How It Works */}
                        <section id="how-it-works" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How It Works</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Book a Free Concierge Call",
                                        desc: "In 30 minutes, our team learns your business, identifies which AI employees you need, and configures them to match your brand voice and workflows."
                                    },
                                    {
                                        step: "2",
                                        title: "Your AI Employees Go Live",
                                        desc: "Eva starts managing email. Somi begins posting to social media. Rachel answers calls. Stan generates leads. Seomi writes SEO content. Linda handles compliance. All working 24/7."
                                    },
                                    {
                                        step: "3",
                                        title: "Monitor, Adjust, and Scale",
                                        desc: "Track performance through your dashboard. Adjust instructions as needed. Add more AI employees as your business grows — all at the same flat rate."
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

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Lightbulb className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-blue-800 mb-2">How Dooza Uses OpenClaw</h4>
                                        <p className="text-blue-700">
                                            OpenClaw is the open-source AI agent framework that powers many YC startups. Dooza uses OpenClaw as its foundation and adds the layers businesses actually need: <strong>multi-tenancy, security, cron scheduling, billing, and a managed UI</strong>. Think of OpenClaw as the engine — Dooza is the car you can drive without being a mechanic.
                                        </p>
                                        <div className="mt-3">
                                            <Link href="/blog/what-is-openclaw" className="text-blue-600 hover:underline font-medium inline-flex items-center gap-1">
                                                Learn more about OpenClaw <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 7: Your 20X Roadmap */}
                        <section id="your-roadmap" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your 20X Roadmap</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    You don't need to transform overnight. Here's a practical roadmap to building your 20X business:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "Week 1",
                                        title: "Audit",
                                        desc: "List every task in your business. How many hours does each take? Which ones are repetitive? Which don't require human judgment?",
                                        color: "bg-amber-50 border-amber-200",
                                        stepColor: "bg-amber-100 text-amber-700"
                                    },
                                    {
                                        step: "Week 2",
                                        title: "Deploy",
                                        desc: "Start with your biggest bottleneck. For most businesses, that's email (Eva) or missed calls (Rachel). Book your free onboarding call and go live.",
                                        color: "bg-blue-50 border-blue-200",
                                        stepColor: "bg-blue-100 text-blue-700"
                                    },
                                    {
                                        step: "Week 3-4",
                                        title: "Measure",
                                        desc: "Track hours saved, leads captured, and response times. Most businesses see 15-25 hours/week back immediately. Use those hours on high-value work.",
                                        color: "bg-green-50 border-green-200",
                                        stepColor: "bg-green-100 text-green-700"
                                    },
                                    {
                                        step: "Month 2+",
                                        title: "Scale",
                                        desc: "Activate more AI employees. Add Somi for social media. Deploy Stan for lead generation. Turn on Seomi for SEO. Go from 1 AI employee to a full 20X operation.",
                                        color: "bg-purple-50 border-purple-200",
                                        stepColor: "bg-purple-100 text-purple-700"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className={`flex gap-4 items-start border p-5 rounded-xl ${item.color}`}>
                                        <div className={`px-3 py-1 rounded-full font-bold text-sm shrink-0 ${item.stepColor}`}>{item.step}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Mid-article CTA */}
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Build Your 20X Business?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Stop competing with one hand tied behind your back. Get the same AI superpowers YC companies use — in 30 minutes, for $29/month.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('20x')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Get Your 20X Advantage <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book Free Demo
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
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

                        {/* Conclusion */}
                        <section className="scroll-mt-28">
                            <div className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 p-8 rounded-2xl text-center">
                                <p className="text-2xl font-bold text-slate-900 mb-4">
                                    You don't need YC. You don't need engineers. You need Dooza.
                                </p>
                                <p className="text-slate-600 mb-6">Built on OpenClaw. 6 AI employees. $29/month. 24/7. The 20X playbook — for everyone.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('20x')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Get Started - $29/month <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book Free Demo
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Sources */}
                        <section className="scroll-mt-28 border-t border-slate-200 pt-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Sources & References</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">20X Company Concept</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.youtube.com/watch?v=rWUWfj_PqmM" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Gary Tan — 20X Companies (YouTube)</a></li>
                                        <li>• <a href="https://www.ycombinator.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Y Combinator — Company portfolio & research</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Market Data</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.sba.gov/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">SBA — Small business statistics (33M+ businesses)</a></li>
                                        <li>• <a href="https://www.shrm.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">SHRM — Hiring costs and timelines</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="build-a-20x-company" category="AI Education" tags={['20X Company', 'AI Employees', 'OpenClaw']} />
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
