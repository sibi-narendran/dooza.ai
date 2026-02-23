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
    Zap,
    AlertTriangle,
    Bot,
    Sparkles,
    Shield,
    DollarSign,
    Terminal,
    Server,
    Lock,
    Users,
    Layers,
    Brain,
    Settings,
    Database,
    Code,
    Workflow,
    Timer,
    ShieldCheck,
    Wrench,
    Package,
    Rocket,
    HeartHandshake,
    BarChart3,
    TrendingUp
} from 'lucide-react';

const faqData = [
    {
        question: "What is OpenClaw?",
        answer: "OpenClaw (formerly ClawdBot/MoltBot) is a free, open-source AI assistant framework that runs locally on your computer. It connects to AI models like Claude or GPT and can automate tasks through messaging apps. It's powerful but requires significant technical expertise to set up and maintain."
    },
    {
        question: "Is OpenClaw free?",
        answer: "The framework is free and open-source. However, running it requires API costs ($100-300+/day for heavy use), a dedicated server, and significant developer time for setup and maintenance. The 'free' software often costs more than a managed platform."
    },
    {
        question: "Why is Dooza better than building on OpenClaw?",
        answer: "Dooza solves the 7 infrastructure problems that OpenClaw doesn't: multi-tenancy, workstation UIs, real-time chat, cron scheduling, prebuilt skills, memory management, and security. You get all of this for $29/month instead of spending weeks building it yourself."
    },
    {
        question: "Can I use OpenClaw for business?",
        answer: "You can, but OpenClaw is an agent runtime, not a business platform. You'll need to build multi-tenancy, security layers, user management, billing, and a UI from scratch. Most businesses are better served by a managed platform like Dooza."
    },
    {
        question: "How much developer time does OpenClaw require?",
        answer: "Based on real-world builds: 2-4 weeks for basic setup, 2-3 months for production infrastructure (multi-tenancy, security, cron), and ongoing maintenance. At $150/hour developer rates, that's $50,000-100,000+ before your first customer."
    },
    {
        question: "Does Dooza use OpenClaw?",
        answer: "Yes. Dooza is built on OpenClaw's open-source framework and adds all the managed infrastructure businesses need — multi-tenancy, security, cron scheduling, billing, and a dashboard UI. You get the power of OpenClaw without the complexity."
    },
    {
        question: "What if I want to customize my AI employees?",
        answer: "Dooza offers full customization through free concierge onboarding. Our team configures AI employees to match your business, brand voice, and workflows. For builders, Dooza's upcoming marketplace lets you create custom AI employees using SOUL.md and AGENTS.md files."
    }
];

export default function OpenclawVsDoozaContent() {
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
            const sections = ['introduction', 'what-is-openclaw', 'diy-trap', 'hidden-costs', 'what-dooza-gives-you', 'side-by-side', 'real-cost-math', 'who-should-use-what', 'getting-started', 'faq'];
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
            <div className="bg-gradient-to-br from-primary-50 via-white to-orange-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'OpenClaw vs Dooza' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            OpenClaw vs Dooza: Why <span className="text-primary-600">Building From Scratch</span> Costs More Than You Think
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            OpenClaw is a powerful open-source framework. But between API costs, infrastructure, and months of development, "free" software can cost you $50,000+ before your first customer. Here's the honest comparison.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>13 min read</span>
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
                                Skip the Build. Try Dooza Free
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <YouTubeEmbed
                                videoId="ssYt09bCgUY"
                                title="OpenClaw vs Dooza — Why Building From Scratch Costs More Than You Think"
                            />
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
                                    { id: 'what-is-openclaw', label: 'What Is OpenClaw?' },
                                    { id: 'diy-trap', label: 'The DIY Trap' },
                                    { id: 'hidden-costs', label: 'Hidden Costs' },
                                    { id: 'what-dooza-gives-you', label: 'What Dooza Gives You' },
                                    { id: 'side-by-side', label: 'Side-by-Side Comparison' },
                                    { id: 'real-cost-math', label: 'The Real Cost Math' },
                                    { id: 'who-should-use-what', label: 'Who Should Use What' },
                                    { id: 'getting-started', label: 'Getting Started' },
                                    { id: 'faq', label: 'FAQ' },
                                ].map((item) => (
                                    <button
                                        type="button"
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
                                <p className="text-sm text-slate-600 mb-4">Skip months of building</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Dooza Free
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="openclaw-vs-dooza" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    We love OpenClaw. We built Dooza on it. But we also spent months solving problems that OpenClaw was never designed to solve.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    If you're a developer or technical founder evaluating whether to build your AI agent business on OpenClaw from scratch, this article will save you months of pain. We've been there. We've solved every problem listed here. The hard way.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>The short version:</strong> OpenClaw is an incredible agent runtime. But an agent runtime is not a business. The gap between "agent that works on my laptop" and "platform that serves paying customers" is wider than most people expect.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    If you want to understand OpenClaw first, read our <Link href="/blog/what-is-openclaw" className="text-primary-600 hover:underline font-medium">complete OpenClaw guide</Link>. If you want to understand the <em>business</em> layer, read our <Link href="/blog/ai-employees-openclaw-business" className="text-primary-600 hover:underline font-medium">guide to building AI employees on OpenClaw</Link>.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This article is the honest comparison. No fluff.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: What Is OpenClaw? */}
                        <section id="what-is-openclaw" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is OpenClaw? (Quick Recap)</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    <Link href="/blog/what-is-openclaw" className="text-primary-600 hover:underline font-medium">OpenClaw</Link> (formerly ClawdBot, then MoltBot) is an open-source AI assistant that runs locally on your machine. It connects to LLMs like Claude or GPT, integrates with messaging apps, and can execute tasks autonomously.
                                </p>
                                <p>
                                    It's powerful. It's free. And it's attracted a massive developer community.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Code, title: "Open Source", desc: "Free framework, MIT licensed" },
                                    { icon: Terminal, title: "Local Runtime", desc: "Runs on your machine or server" },
                                    { icon: Brain, title: "Multi-Model", desc: "Works with Claude, GPT, and more" },
                                    { icon: Zap, title: "Extensible", desc: "Custom skills and tools" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mx-auto mb-2">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-900 mb-2">So What's the Problem?</h4>
                                <p className="text-blue-800">
                                    OpenClaw gives you the engine. But an engine isn't a car. You still need the chassis, the steering wheel, the brakes, the doors, and the road to drive on. <strong>That's the gap this article is about.</strong>
                                </p>
                            </div>
                        </section>

                        {/* Section 3: The DIY Trap */}
                        <section id="diy-trap" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The DIY Trap: What "Free" Actually Costs</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Every developer has the same thought when they first see OpenClaw:
                                </p>
                                <p className="text-xl font-semibold text-slate-800 italic">
                                    "This is incredible. I can build anything with this. Why would I pay for a platform?"
                                </p>
                                <p>
                                    We thought the same thing. Then we actually tried to ship a product. Here's the timeline of what really happens:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        week: "Week 1-2",
                                        title: "The Honeymoon",
                                        desc: "You get a demo working on your laptop. The agent can chat, use tools, and complete tasks. You feel unstoppable. You tweet about it.",
                                        mood: "bg-green-50 border-green-200",
                                        icon: Sparkles,
                                        iconColor: "text-green-600"
                                    },
                                    {
                                        week: "Week 3-4",
                                        title: "The First Wall",
                                        desc: "You try to add a second user. Realize there's no multi-tenancy. Customer A can see Customer B's data. You spend 2 weeks building data isolation from scratch.",
                                        mood: "bg-amber-50 border-amber-200",
                                        icon: AlertTriangle,
                                        iconColor: "text-amber-600"
                                    },
                                    {
                                        week: "Month 2",
                                        title: "The Infrastructure Rabbit Hole",
                                        desc: "Authentication. Real-time chat. WebSocket management. A UI that doesn't look like a terminal. Each problem takes a week to solve properly.",
                                        mood: "bg-orange-50 border-orange-200",
                                        icon: Wrench,
                                        iconColor: "text-orange-600"
                                    },
                                    {
                                        week: "Month 3",
                                        title: "The Cron Problem",
                                        desc: "Your agent only works when someone talks to it. That's ChatGPT, not an employee. You need cron scheduling so the agent works autonomously. Another 2 weeks.",
                                        mood: "bg-red-50 border-red-200",
                                        icon: Timer,
                                        iconColor: "text-red-600"
                                    },
                                    {
                                        week: "Month 4+",
                                        title: "The Security Audit",
                                        desc: "First business customer asks about security. You realize your agent can execute arbitrary commands. Prompt injection could leak data across tenants. You need three security layers. Minimum.",
                                        mood: "bg-red-50 border-red-200",
                                        icon: Shield,
                                        iconColor: "text-red-600"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className={`${item.mood} border p-5 rounded-xl`}>
                                        <div className="flex items-start gap-3">
                                            <item.icon className={`w-5 h-5 ${item.iconColor} shrink-0 mt-1`} />
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-xs font-mono text-slate-500">{item.week}</span>
                                                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                                                </div>
                                                <p className="text-sm text-slate-700">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl">
                                <p className="text-lg font-bold mb-2">The punchline:</p>
                                <p className="text-slate-300">
                                    You started with a free framework. Four months later, you've spent <strong className="text-white">$50,000+ in developer time</strong> and you still don't have a product you'd show to a paying customer. The agent is 10% of the work. The platform is the other 90%.
                                </p>
                            </div>
                        </section>

                        {/* Section 4: Hidden Costs */}
                        <section id="hidden-costs" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The 7 Hidden Costs of Building on OpenClaw</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    We documented every infrastructure problem we solved while <Link href="/blog/ai-employees-openclaw-business" className="text-primary-600 hover:underline font-medium">building our AI employee business on OpenClaw</Link>. Here's the summary:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        num: "1",
                                        title: "Multi-Tenancy",
                                        problem: "OpenClaw runs one agent per directory. Serving multiple customers requires database-level isolation, filesystem sandboxing, and runtime identity tracking.",
                                        time: "2-3 weeks",
                                        cost: "$7,500-11,250"
                                    },
                                    {
                                        num: "2",
                                        title: "Workstation UIs",
                                        problem: "Headless agents feel like ChatGPT. Business buyers need dashboards — content calendars, analytics, ticket queues. Each agent type needs a different workspace.",
                                        time: "3-4 weeks",
                                        cost: "$11,250-15,000"
                                    },
                                    {
                                        num: "3",
                                        title: "Real-Time Chat",
                                        problem: "Business users expect Slack-like messaging. That means Server-Sent Events, WebSocket bridging, auto-reconnect, multi-tab sync, and sub-200ms first token.",
                                        time: "1-2 weeks",
                                        cost: "$3,750-7,500"
                                    },
                                    {
                                        num: "4",
                                        title: "Cron Scheduling",
                                        problem: "Without cron, your agent only works when talked to. With cron, it wakes up autonomously, generates content, monitors metrics, and sends reports. This is what makes it an employee.",
                                        time: "1-2 weeks",
                                        cost: "$3,750-7,500"
                                    },
                                    {
                                        num: "5",
                                        title: "Prebuilt Skills",
                                        problem: "Every new capability (save post, send email, generate image) needs a custom tool definition, error handling, and testing. And non-technical users need a way to add them without code.",
                                        time: "2-3 weeks",
                                        cost: "$7,500-11,250"
                                    },
                                    {
                                        num: "6",
                                        title: "Memory Management",
                                        problem: "Push an update, lose the agent's memory. Customers notice immediately. You need a safe update pipeline that preserves everything the agent has learned.",
                                        time: "1 week",
                                        cost: "$3,750"
                                    },
                                    {
                                        num: "7",
                                        title: "Security Layers",
                                        problem: "One prompt injection could leak data across tenants. You need agent-level whitelists, global blacklists, and filesystem sandboxing. All active by default.",
                                        time: "2-3 weeks",
                                        cost: "$7,500-11,250"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                                        <div className="flex items-center gap-3 bg-slate-100 px-5 py-3">
                                            <div className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">{item.num}</div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        </div>
                                        <div className="p-5">
                                            <p className="text-slate-600 text-sm mb-3">{item.problem}</p>
                                            <div className="flex gap-4">
                                                <div className="bg-red-50 px-3 py-1.5 rounded-lg">
                                                    <span className="text-xs text-red-600 font-medium">Dev Time: {item.time}</span>
                                                </div>
                                                <div className="bg-red-50 px-3 py-1.5 rounded-lg">
                                                    <span className="text-xs text-red-600 font-medium">Cost: {item.cost}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl">
                                <h4 className="font-bold text-red-800 mb-2 text-lg">Total DIY Cost</h4>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div>
                                        <p className="text-sm text-red-700 mb-1">Development Time</p>
                                        <p className="text-2xl font-bold text-red-600">12-18 weeks</p>
                                    </div>
                                    <div className="sm:border-l sm:border-red-200 sm:pl-4">
                                        <p className="text-sm text-red-700 mb-1">At $150/hr developer rate</p>
                                        <p className="text-2xl font-bold text-red-600">$45,000 - $67,500</p>
                                    </div>
                                </div>
                                <p className="text-sm text-red-700 mt-3">Plus ongoing maintenance, bug fixes, and security updates. Every month. Forever.</p>
                            </div>
                        </section>

                        {/* Section 5: What Dooza Gives You */}
                        <section id="what-dooza-gives-you" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Dooza Gives You Out of the Box</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Dooza is built on OpenClaw. Same powerful framework underneath. But we've already solved every problem listed above — and wrapped it in a platform that's ready for paying customers on day one.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                                {[
                                    { icon: Users, title: "6 Pre-Built AI Employees", desc: "Eva (Email), Somi (Social Media), Seomi (SEO), Rachel (Receptionist), Stan (Sales), Linda (Legal). All configured and working from day one." },
                                    { icon: Timer, title: "Autonomous Cron Jobs", desc: "AI employees wake up on schedule, do their work, and report back. Social posts at 9am. Review monitoring at noon. Weekly reports on Monday." },
                                    { icon: ShieldCheck, title: "Enterprise Security", desc: "Three-layer security: agent whitelists, global blacklists, and sandbox isolation. All active by default. Zero configuration." },
                                    { icon: Database, title: "Multi-Tenancy Built In", desc: "Row-level database security, filesystem sandboxing, runtime identity tracking. Each customer's data is completely isolated." },
                                    { icon: Sparkles, title: "Dashboard & Workstations", desc: "Each AI employee gets a purpose-built workspace. Content calendars, analytics, conversation history. Not a blank chat window." },
                                    { icon: HeartHandshake, title: "Free Concierge Onboarding", desc: "Our team configures your AI employees in a 30-minute call. Your brand voice, your workflows, your tools. You don't lift a finger." }
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

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Rocket className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Setup Time: 30 Minutes</h4>
                                        <p className="text-slate-700">
                                            Sign up. Book your free onboarding call. Our team configures everything. Your AI employees start working the same day. Compare that to 3-4 months of building infrastructure from scratch.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Side-by-Side Comparison */}
                        <section id="side-by-side" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">OpenClaw DIY vs Dooza: Side-by-Side</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">OpenClaw DIY</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Dooza</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Setup Time", openclaw: "3-4 months", dooza: "30 minutes" },
                                            { feature: "Upfront Cost", openclaw: "$45,000-67,500 (dev time)", dooza: "$0 (free trial)" },
                                            { feature: "Monthly Cost", openclaw: "$100-300+/day in API + hosting", dooza: "$29/month flat" },
                                            { feature: "Multi-Tenancy", openclaw: "Build from scratch", dooza: "Built in" },
                                            { feature: "Security Layers", openclaw: "Build from scratch", dooza: "3 layers, active by default" },
                                            { feature: "Cron Scheduling", openclaw: "Build from scratch", dooza: "Built in" },
                                            { feature: "Dashboard UI", openclaw: "Build from scratch", dooza: "Per-agent workstations" },
                                            { feature: "Real-Time Chat", openclaw: "Build from scratch", dooza: "Slack-like, built in" },
                                            { feature: "AI Employees", openclaw: "Build each one", dooza: "6 pre-built, ready to go" },
                                            { feature: "Memory Management", openclaw: "Manual, fragile", dooza: "Auto-preserved on updates" },
                                            { feature: "Onboarding Help", openclaw: "GitHub docs + Discord", dooza: "Free concierge team" },
                                            { feature: "Technical Skill Required", openclaw: "Senior developer", dooza: "None" },
                                            { feature: "Ongoing Maintenance", openclaw: "You maintain everything", dooza: "We handle it" },
                                            { feature: "Time to First Customer", openclaw: "3-6 months", dooza: "Same day" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.openclaw}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50">{row.dooza}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 7: The Real Cost Math */}
                        <section id="real-cost-math" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Cost Math</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's be brutally honest about what each path actually costs over the first year.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* OpenClaw DIY */}
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <Terminal className="w-5 h-5" />
                                        OpenClaw DIY (Year 1)
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            { label: "Infrastructure development", value: "$45,000-67,500" },
                                            { label: "API costs (avg $150/day)", value: "$54,750/year" },
                                            { label: "Server hosting", value: "$840/year" },
                                            { label: "Ongoing maintenance (10hrs/wk)", value: "$78,000/year" },
                                            { label: "Security audits", value: "$5,000-15,000" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center py-1.5 text-sm">
                                                <span className="text-slate-700">{item.label}</span>
                                                <span className="font-medium text-red-700">{item.value}</span>
                                            </div>
                                        ))}
                                        <div className="border-t border-red-200 pt-2 mt-2">
                                            <div className="flex justify-between items-center">
                                                <span className="font-bold text-red-800">Total Year 1</span>
                                                <span className="text-xl font-bold text-red-600">$183,590-216,090</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Dooza */}
                                <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl ring-2 ring-green-400 ring-offset-2">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <Sparkles className="w-5 h-5" />
                                        Dooza (Year 1)
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            { label: "Infrastructure development", value: "$0" },
                                            { label: "Subscription ($29/mo)", value: "$348/year" },
                                            { label: "API costs", value: "Included" },
                                            { label: "Server hosting", value: "Included" },
                                            { label: "Maintenance & updates", value: "Included" },
                                            { label: "Security", value: "Included" },
                                            { label: "Concierge onboarding", value: "Free" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center py-1.5 text-sm">
                                                <span className="text-slate-700">{item.label}</span>
                                                <span className="font-medium text-green-700">{item.value}</span>
                                            </div>
                                        ))}
                                        <div className="border-t border-green-200 pt-2 mt-2">
                                            <div className="flex justify-between items-center">
                                                <span className="font-bold text-green-800">Total Year 1</span>
                                                <span className="text-xl font-bold text-green-600">$348</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl text-center">
                                <p className="text-slate-400 text-sm mb-2">The difference</p>
                                <p className="text-4xl font-bold mb-2">527x - 621x more expensive</p>
                                <p className="text-slate-400">to build it yourself. And that's assuming everything goes right on the first try.</p>
                            </div>
                        </section>

                        {/* Section 8: Who Should Use What */}
                        <section id="who-should-use-what" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Should Use What</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    We're not going to pretend Dooza is right for everyone. Here's the honest breakdown:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                                        <Terminal className="w-5 h-5 text-blue-600" />
                                        Choose OpenClaw DIY If...
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "You're a developer building a deeply custom agent product",
                                            "You need full control over every layer of the stack",
                                            "You're building for a niche with unique infrastructure needs",
                                            "You have 3-6 months and $50K+ budget for infrastructure",
                                            "You enjoy solving hard systems problems"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                                <Code className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                                        <Rocket className="w-5 h-5 text-green-600" />
                                        Choose Dooza If...
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "You want AI employees working for your business today",
                                            "You're a business owner, not a developer",
                                            "You need email, social media, SEO, calls, sales, and legal handled",
                                            "You want predictable $29/month pricing, no surprises",
                                            "You'd rather spend time on your business than building infrastructure"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl mb-8">
                                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                                    <Layers className="w-5 h-5 text-primary-600" />
                                    For Builders: The Best of Both Worlds
                                </h4>
                                <p className="text-slate-700">
                                    If you're a developer who wants to <strong>build AI employees</strong> but doesn't want to build the <strong>platform</strong>, Dooza's upcoming marketplace is the answer. Define the agent's personality in SOUL.md, write instructions in AGENTS.md, add YAML tools. We handle tenancy, auth, billing, and deployment. <strong>You build the brain. We run the body.</strong>
                                </p>
                                <p className="text-slate-600 text-sm mt-3">
                                    <Link href="/blog/ai-employees-openclaw-business" className="text-primary-600 hover:underline font-medium">Read our full guide to building AI employees on OpenClaw &rarr;</Link>
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-800 mb-2">The Question That Matters</h4>
                                        <p className="text-amber-700">
                                            Ask yourself: <strong>"Is building AI infrastructure my competitive advantage?"</strong> If no, you're better off using a platform and focusing on what actually differentiates your business. Most businesses compete on their product, their service, their relationships — not on their server architecture.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 9: Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get AI Employees Working in 30 Minutes</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Sign Up for Dooza",
                                        desc: "Start your free trial. No credit card required. No commitment."
                                    },
                                    {
                                        step: "2",
                                        title: "Book Your Free Onboarding Call",
                                        desc: "Our concierge team configures your 6 AI employees — Eva (email), Somi (social), Seomi (SEO), Rachel (receptionist), Stan (sales), and Linda (legal) — to match your business, brand voice, and workflows."
                                    },
                                    {
                                        step: "3",
                                        title: "Your AI Team Starts Working",
                                        desc: "AI employees begin handling email, posting content, answering calls, generating leads, optimizing SEO, and managing compliance. Autonomously. 24/7."
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
                                    Want to see more? <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Learn how to automate your entire business without coding</Link>, or read about <Link href="/blog/build-a-20x-company" className="text-primary-600 hover:underline font-medium">how to build a 20X company with AI employees</Link>.
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Stop Building Infrastructure. Start Building Your Business.</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Every week you spend building platform infrastructure is a week your competitors are serving customers. Dooza gives you the same OpenClaw power — without the months of development.
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

                        {/* Section 10: FAQ */}
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

                        <RelatedPosts currentSlug="openclaw-vs-dooza" category="Comparison" tags={['OpenClaw', 'Dooza', 'AI Employees', 'Comparison']} />
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
