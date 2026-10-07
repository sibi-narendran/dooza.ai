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
        answer: "A 20X company is a startup that automates all of its internal functions with AI, not just one or two. The phrase was coined by the founders of GigaML (their team of four to five engineers won DoorDash against incumbents about 20 times their size) and popularised by Y Combinator president Garry Tan in the February 2026 video “The New Way To Build A Startup”. 20X companies automate code, support, marketing, sales, hiring and QA so they can delay hiring and stay lean."
    },
    {
        question: "How can a small business compete with larger companies using AI?",
        answer: "By deploying AI employees across every operational function — email, social media, phone calls, lead generation, SEO, and legal compliance. Platforms like Dooza give small businesses the same AI superpowers that elite YC startups build with engineering teams, but without needing any technical skills. Dooza is an AI-native company that builds AI products and services for small businesses, and every Dooza product starts with a refundable pilot: 100% refund within 14 days."
    },
    {
        question: "How does Dooza relate to OpenClaw?",
        answer: "OpenClaw is an open-source AI agent framework you can self-host. Dooza is a managed alternative to self-hosting OpenClaw: instead of running servers, scheduling, security, and a dashboard yourself, you get ready-made AI employees in Dooza Workforce, the AI workforce app, or custom agents on Dooza Agents, the AI agentic platform. Nothing to build or maintain yourself."
    },
    {
        question: "Do I need technical skills to use AI employees?",
        answer: "Not at all. Dooza is designed for non-technical business owners. You book a free 30-minute call to scope your pilot, and a Dooza engineer configures your AI employees to match your business, brand voice, and workflows. Workforce employees can start working the same day."
    },
    {
        question: "How is this different from hiring a virtual assistant?",
        answer: "A human virtual assistant works set hours and usually covers one role at a time. Dooza's AI employees run around the clock across several job functions (email, social media, SEO, sales and more), and every Dooza product starts with a refundable pilot (100% refund within 14 days). They take the repetitive work so people can focus on the parts that need judgment and creativity."
    }
];

export default function BuildA20xCompanyContent() {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && /calendly\.com|cal\.com|\/book(\/|\?|$)/.test(url)) {
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
                            Tiny Y Combinator teams are beating incumbents 20 times their size by automating every internal function with AI. Here's how any business can follow the same playbook — no engineers required.
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
                                title="Garry Tan on 20X Companies — Y Combinator"
                            />
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('20x')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Start your pilot
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleAction}
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all"
                            >
                                <Calendar className="w-5 h-5" />
                                Book a free pilot call
                            </a>
                        </div>
                        <p className="mt-3 text-sm text-slate-500">Refundable pilot — 100% refund within 14 days</p>
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
                                    Start your pilot
                                </a>
                                <p className="mt-2 text-xs text-slate-500 text-center">100% refund within 14 days</p>
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
                                    Garry Tan, president of Y Combinator, recently made a bold claim: the best teams aren't automating one or two internal functions — they're <strong>automating all of them</strong>.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    He calls them <strong>"20X companies"</strong>, a phrase coined by GigaML's founders after their team of four to five engineers beat players roughly 20 times their size. Not by working harder. By automating every internal function of the business.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The examples are striking. <strong>GigaML</strong> closed DoorDash with about four to five engineers, helped by an internal agent called Atlas. <strong>Legion Health</strong> grew 4x in a year without a single net new hire. <strong>Phase Shift</strong> competes with 12 people against companies that have hundreds of employees.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    But here's the catch: these are elite YC startups with world-class engineering teams. What about the millions of small businesses that don't have them?
                                </p>

                                <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Sparkles className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">Dooza's Mission</h4>
                                            <p className="text-slate-700">
                                                Dooza is an AI-native company that builds AI products and services for small businesses. Dooza Workforce packages <strong>ready-to-deploy AI employees</strong> for any business, a managed alternative to self-hosting open-source agent frameworks like OpenClaw. No engineering team. No YC backing required. Six AI employees, starting with a refundable pilot.
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
                                    In Garry Tan's words, the best teams <strong>"aren't automating one or two internal functions. They're automating all of them."</strong> Not just customer support. Not just marketing. <em>Everything.</em>
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

                            {/* Garry Tan Quote */}
                            <div className="bg-slate-900 text-white p-8 rounded-2xl mb-8">
                                <blockquote className="text-lg md:text-xl italic leading-relaxed mb-4">
                                    "The best teams aren't automating one or two internal functions. They're automating all of them. Often they're tiny teams able to beat huge incumbents thanks to internal automation. Their leanness is their superpower."
                                </blockquote>
                                <p className="text-slate-400 font-medium">— Garry Tan, President of Y Combinator, in “The New Way To Build A Startup” (YC, February 2026)</p>
                            </div>

                            {/* Stat Grid */}
                            <div className="grid gap-4 sm:grid-cols-3">
                                {[
                                    { stat: "4-5", label: "engineers at GigaML when it won DoorDash" },
                                    { stat: "4x", label: "growth at Legion Health in a year, no net new hires" },
                                    { stat: "12", label: "people at Phase Shift, against rivals with hundreds" }
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
                                    These aren't hypotheticals. These are real companies from Y Combinator's portfolio, referenced in Garry Tan's talk, that are proving the 20X model works.
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
                                            <h3 className="font-bold text-amber-900 text-xl mb-2">GigaML — An Internal AI Agent Called Atlas</h3>
                                            <p className="text-amber-800 mb-4">
                                                GigaML builds voice-based customer service agents for enterprises. With roughly <strong>4-5 engineers</strong> it <strong>closed DoorDash as a customer</strong>, going up against players with far bigger teams. Its internal agent "Atlas" can use browsers, edit policies and write code, which takes boilerplate off each engineer and works alongside the company's single human FTE to serve accounts.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">4-5 engineers</span>
                                                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Internal agent "Atlas"</span>
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
                                                An AI-native psychiatry network that grew <strong>4x</strong> in a year without a single net new hire. Their approach: a custom internal interface that gives the care operations team patient history, scheduling, insurance codes and messages in one place. They now run with <strong>one clinical lead, one patient support person and one billing person</strong> for thousands of patients a month.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">4x growth</span>
                                                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">No net new hires</span>
                                                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">One source of truth</span>
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
                                                Running with just <strong>12 people</strong>, Phase Shift builds custom AI agents for each employee's specific role. Every team member has AI handling their repetitive tasks, letting them focus on high-value work. The result: they <strong>delayed hiring for entire functions</strong>; for example, they have not hired a designer and build front-end designs with an AI tool instead.
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
                                    GigaML has engineers who build AI agents for a living. Legion Health has YC funding and mentorship. Phase Shift has engineers who can build custom AI agents from scratch.
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
                                    Dooza gives any business managed AI employees and agents, a managed alternative to self-hosting an agent framework like OpenClaw. No YC deal required.
                                </p>
                            </div>
                        </section>

                        {/* Section 5: OpenClaw — 20X for Every Business */}
                        <section id="openclaw-solution" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How Dooza Delivers 20X to Every Business</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Dooza Workforce gives you pre-built AI employees that any business can deploy, fully managed, so you never self-host an agent framework like OpenClaw. No custom engineering. No months of R&D. Here's how Dooza's AI employees map to the exact strategies YC companies are using:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {/* Maily */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Maily</h3>
                                            <p className="text-sm text-slate-500">AI Email Manager</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm mb-3">Reads, prioritizes, responds, and follows up on email — autonomously.</p>
                                    <div className="bg-blue-50 p-3 rounded-lg">
                                        <p className="text-xs text-blue-700 font-medium">Legion Health's 1-person departments? Maily is your email department.</p>
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
                                        <p className="text-xs text-green-700 font-medium">Most callers won't leave a voicemail. Rachel answers every call.</p>
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

                                {/* Ranky */}
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-2xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
                                            <TrendingUp size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">Ranky</h3>
                                            <p className="text-sm text-slate-500">AI SEO & Visibility Employee</p>
                                        </div>
                                    </div>
                                    <p className="text-slate-600 text-sm mb-3">Writes optimized content, manages Google Business Profile, monitors rankings.</p>
                                    <div className="bg-teal-50 p-3 rounded-lg">
                                        <p className="text-xs text-teal-700 font-medium">SEO and AI visibility work, done by an AI employee.</p>
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
                                    AI employees. Refundable pilot. No engineers required.
                                </p>
                                <p className="text-green-700">
                                    The same automation YC companies spend months building — working the same day. 100% refund within 14 days.
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
                                        title: "Book a Free Pilot Call",
                                        desc: "On a free 30-minute call, a Dooza engineer scopes your pilot, learns your business, identifies which AI employees you need, and configures them to match your brand voice and workflows."
                                    },
                                    {
                                        step: "2",
                                        title: "Your AI Employees Go Live",
                                        desc: "Maily starts managing email. Somi begins posting to social media. Rachel answers calls. Stan generates leads. Ranky writes SEO content. Linda handles compliance. All working 24/7."
                                    },
                                    {
                                        step: "3",
                                        title: "Monitor, Adjust, and Scale",
                                        desc: "Track performance through your dashboard. Adjust instructions as needed. Add more AI employees as your business grows."
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
                                        <h4 className="font-bold text-blue-800 mb-2">Dooza vs Self-Hosting OpenClaw</h4>
                                        <p className="text-blue-700">
                                            OpenClaw is an open-source AI agent framework you can self-host. Doing that means running your own servers, security, scheduling, and UI. Dooza is a <strong>managed alternative to self-hosting OpenClaw</strong>: ready-made AI employees and agents, maintained by Dooza engineers, with encrypted connections and your approval on anything sensitive.
                                        </p>
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
                                        desc: "Start with your biggest bottleneck. For most businesses, that's email (Maily) or missed calls (Rachel). Book a free pilot call and start your refundable pilot.",
                                        color: "bg-blue-50 border-blue-200",
                                        stepColor: "bg-blue-100 text-blue-700"
                                    },
                                    {
                                        step: "Week 3-4",
                                        title: "Measure",
                                        desc: "Track hours saved, leads captured, and response times. Use the hours you get back on high-value work.",
                                        color: "bg-green-50 border-green-200",
                                        stepColor: "bg-green-100 text-green-700"
                                    },
                                    {
                                        step: "Month 2+",
                                        title: "Scale",
                                        desc: "Activate more AI employees. Add Somi for social media. Deploy Stan for lead generation. Turn on Ranky for SEO. Go from 1 AI employee to a full 20X operation.",
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
                                    Stop competing with one hand tied behind your back. Get the same AI superpowers YC companies use — the same day, with a refundable pilot (100% refund within 14 days).
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('20x')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start your pilot <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book a free pilot call
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
                                <p className="text-slate-600 mb-6">AI employees. 24/7. Refundable pilot — 100% refund within 14 days. The 20X playbook — for everyone.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('20x')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start your pilot <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book a free pilot call
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
                                        <li>• <a href="https://www.youtube.com/watch?v=rWUWfj_PqmM" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Garry Tan — 20X Companies (YouTube)</a></li>
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
