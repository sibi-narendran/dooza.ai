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
import TwitterEmbed from '../../../components/TwitterEmbed';
import BlogHeroImage from '../../../components/BlogHeroImage';
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
    MessageSquare,
    Server,
    Lock,
    Users,
    Layers,
    Brain,
    Settings,
    Database,
    Code,
    Workflow,
    Store,
    TrendingUp,
    Target,
    LayoutDashboard,
    Timer,
    Puzzle,
    RefreshCw,
    ShieldCheck
} from 'lucide-react';

const faqData = [
    {
        question: "What's the difference between an AI tool and an AI employee?",
        answer: "An AI tool waits for you to ask it something. An AI employee shows up, does the work, and moves to the next task - whether you're watching or not. Businesses have budgets for employees ($4,000-6,000/month for a social media manager), making AI employees worth 100x more than AI tools."
    },
    {
        question: "Can I build a business on OpenClaw?",
        answer: "Yes, but OpenClaw is an agent runtime, not a business platform. You'll need to solve multi-tenancy, security, cron scheduling, UI workspaces, and billing yourself. Alternatively, platforms like Dooza solve these 7 infrastructure problems so you can focus on building the AI employee's brain."
    },
    {
        question: "How much does it cost to run an AI employee platform?",
        answer: "With OpenClaw's open-source framework, total infrastructure can run under $15/month (one server ~$7, free-tier database, free-tier frontend) serving hundreds of customers. Compare this to funded AI startups spending $30-50K/month on infrastructure."
    },
    {
        question: "What is multi-tenancy and why does it matter?",
        answer: "Multi-tenancy means one server running AI employees for many customers with total data isolation between them. Without it, you'd need one server per customer, which means costs scale linearly and margins die. It's the difference between a demo and a real business."
    },
    {
        question: "Why do AI employees need cron scheduling?",
        answer: "Without cron, your agent only works when a human talks to it - that's an assistant worth $20/month (the ChatGPT price anchor). With cron, your agent wakes up at 9am, generates posts, monitors reviews, and sends reports autonomously - that's an employee worth $50-200/month."
    },
    {
        question: "How does Dooza's marketplace work?",
        answer: "Dooza is opening a marketplace where anyone can build and publish AI employees. You define the personality in SOUL.md, write instructions in AGENTS.md, and add YAML tools. Dooza handles tenancy, auth, billing, and deployment. You build the brain, Dooza runs the body."
    },
    {
        question: "Is it safe to give AI employees access to business data?",
        answer: "Only with proper security layers. Dooza uses three layers: agent-level whitelists (each agent type can only use approved skills), global blacklists (no agent can ever run system commands), and sandbox isolation (each customer's agents can only access their own directory). All active by default."
    }
];

export default function AiEmployeesOpenclawBusinessContent() {
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
            const sections = ['introduction', 'tools-vs-employees', 'platform-play', 'seven-problems', 'problem-1', 'problem-2', 'problem-3', 'problem-4', 'problem-5', 'problem-6', 'problem-7', 'cost-structure', 'dooza-solution', 'what-next', 'faq'];
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
            <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'AI Employees on OpenClaw' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI Business</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            AI Employees Are Coming. Here's How to <span className="text-primary-600">Build It as a Business</span> Before Everyone Else.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-4">
                            Most people building on OpenClaw are making the same mistake. They're building AI tools. They should be building AI employees. The difference is worth 100x in revenue.
                        </p>
                        <p className="text-sm text-slate-500 mb-8">
                            By <a href="https://twitter.com/sibinarendran" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Sibin Arendran</a>, Founder at Dooza
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>15 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>February 11, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/ai-employees-openclaw-business.png"
                                alt="Building AI employees as a business on OpenClaw - platform architecture and revenue model"
                                priority={true}
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
                                    { id: 'tools-vs-employees', label: 'Tools vs Employees' },
                                    { id: 'platform-play', label: 'The Platform Play' },
                                    { id: 'seven-problems', label: '7 Problems' },
                                    { id: 'problem-1', label: '1. Multi-Tenancy' },
                                    { id: 'problem-2', label: '2. Workstations' },
                                    { id: 'problem-3', label: '3. Real-Time Chat' },
                                    { id: 'problem-4', label: '4. Cron Scheduling' },
                                    { id: 'problem-5', label: '5. Prebuilt Skills' },
                                    { id: 'problem-6', label: '6. Memory Updates' },
                                    { id: 'problem-7', label: '7. Security' },
                                    { id: 'cost-structure', label: 'Cost Structure' },
                                    { id: 'dooza-solution', label: 'The Dooza Solution' },
                                    { id: 'what-next', label: 'What To Do Next' },
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
                                <p className="text-sm text-slate-600 mb-4">Build AI employees today</p>
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
                                <InternalLinks currentSlug="ai-employees-openclaw-business" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    Most people building on <Link href="/blog/what-is-openclaw" className="text-primary-600 hover:underline">OpenClaw</Link> are making the same mistake.
                                </p>
                                <p className="text-xl leading-relaxed font-medium text-slate-900">
                                    They're building AI tools. They should be building AI employees.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The difference is worth <strong>100x in revenue</strong>. Let me explain.
                                </p>
                            </div>

                            {/* Tweet Embed */}
                            <div className="mt-8 flex justify-center">
                                <TwitterEmbed
                                    tweetUrl="https://twitter.com/sibinarendran/status/2021535377941819699"
                                    className="max-w-lg w-full"
                                />
                            </div>
                        </section>

                        {/* Tools vs Employees */}
                        <section id="tools-vs-employees" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tools vs Employees</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    An AI tool waits for you to ask it something.
                                </p>
                                <p>
                                    An AI employee shows up at 9am, does the work, and moves to the next task. Whether you're watching or not.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                    <div className="flex items-center gap-3 mb-4">
                                        <XCircle className="w-6 h-6 text-red-500" />
                                        <h3 className="text-lg font-bold text-slate-900">AI Tool</h3>
                                    </div>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>Waits for instructions</li>
                                        <li>Resets every session</li>
                                        <li>Lives in a browser tab</li>
                                        <li>Worth $20/month (ChatGPT anchor)</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                                    <div className="flex items-center gap-3 mb-4">
                                        <CheckCircle2 className="w-6 h-6 text-green-500" />
                                        <h3 className="text-lg font-bold text-slate-900">AI Employee</h3>
                                    </div>
                                    <ul className="space-y-2 text-slate-600">
                                        <li>Shows up and does the work</li>
                                        <li>Remembers everything</li>
                                        <li>Works 24/7 autonomously</li>
                                        <li>Worth $50-200/month (salary replacement)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl">
                                <p className="text-lg mb-4">The math that changes everything:</p>
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <p className="text-slate-400 text-sm mb-1">Human Social Media Manager</p>
                                        <p className="text-3xl font-bold text-red-400">$4,000-6,000<span className="text-base font-normal">/month</span></p>
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm mb-1">AI Employee (80% of the job)</p>
                                        <p className="text-3xl font-bold text-green-400">$50<span className="text-base font-normal">/month</span></p>
                                    </div>
                                </div>
                                <p className="text-slate-300 mt-6 text-sm">
                                    That's not a feature comparison. That's a <strong className="text-white">hiring decision</strong>. The buyer already has the budget. You just need to show up in the right meeting.
                                </p>
                            </div>
                        </section>

                        {/* The Platform Play */}
                        <section id="platform-play" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Platform Play</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    You could build one AI employee on OpenClaw. A social media agent. Sell it for $49/month. Good business. Real money.
                                </p>
                                <p>
                                    <strong>But it has a ceiling.</strong>
                                </p>
                                <p>
                                    The better play? Build the platform that <em>runs</em> AI employees. Then let other people create the employees on top of it.
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-8">
                                <div className="flex items-start gap-3">
                                    <Store className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-2">The Shopify Model</h4>
                                        <p className="text-blue-800 text-sm">
                                            Shopify doesn't sell products. It sells the infrastructure that lets <em>anyone</em> sell products. Result: Shopify makes money from every store, regardless of what they sell. <strong>Same model works for AI employees.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    We tried building individual agents on OpenClaw first. Every new agent type meant rebuilding 80% of the same stuff: auth, data isolation, chat, cron, deployment.
                                </p>
                                <p>
                                    The infrastructure is the same every time. The only thing that changes is the agent's brain.
                                </p>
                                <p className="text-lg font-semibold text-slate-900">
                                    So we flipped the model. Build the infrastructure once on OpenClaw. Let anyone build brains. That's the real business.
                                </p>
                            </div>
                        </section>

                        {/* 7 Problems */}
                        <section id="seven-problems" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The 7 Problems OpenClaw Doesn't Solve</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    <Link href="/blog/what-is-openclaw" className="text-primary-600 hover:underline">OpenClaw</Link> is powerful. But it's an agent runtime. Not a business platform.
                                </p>
                                <p>
                                    Here are the 7 problems standing between your OpenClaw agent and paying customers. We solved all of them. The hard way.
                                </p>
                            </div>
                        </section>

                        {/* Problem 1: Multi-tenancy */}
                        <section id="problem-1" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-primary-600 text-white rounded-xl flex items-center justify-center font-bold">1</div>
                                <h3 className="text-2xl font-bold text-slate-900">Multi-Tenancy</h3>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    OpenClaw runs one agent per directory. Fine for a demo. <strong>Dealbreaker for a business.</strong>
                                </p>
                                <p>
                                    One server per customer = costs scale linearly = no margins = dead.
                                </p>
                                <p>
                                    You need: one server, many customers, total isolation.
                                </p>
                            </div>
                            <div className="space-y-4 mb-6">
                                {[
                                    {
                                        icon: Database,
                                        title: "Wall 1: Database",
                                        desc: "Every record tagged with customer ID. Row-level security at the database level. Even if the code has a bug, Customer A can't see Customer B's data. The database won't allow it."
                                    },
                                    {
                                        icon: Server,
                                        title: "Wall 2: Filesystem",
                                        desc: "Clone OpenClaw templates into per-customer directories. Validate every file path. No customer touches another customer's files. Ever."
                                    },
                                    {
                                        icon: Layers,
                                        title: "Wall 3: Runtime",
                                        desc: "Every request tagged with customer identity using AsyncLocalStorage. That tag follows the request through every function, every query, every operation."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-green-50 border border-green-100 p-4 rounded-xl">
                                <p className="text-green-800 text-sm font-medium">
                                    Cost to add a new customer: <strong>$0</strong>. That's how platforms work.
                                </p>
                            </div>
                        </section>

                        {/* Problem 2: Workstations */}
                        <section id="problem-2" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-primary-600 text-white rounded-xl flex items-center justify-center font-bold">2</div>
                                <h3 className="text-2xl font-bold text-slate-900">AI Employees Need Workstations</h3>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    OpenClaw agents are headless. No UI. If you give every agent the same chat window, the buyer thinks: <em>"This is ChatGPT with extra steps."</em> Game over.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mb-6">
                                {[
                                    { agent: "Social Media Agent", workspace: "Content calendar with scheduled posts" },
                                    { agent: "SEO Agent", workspace: "Keyword dashboards and rankings" },
                                    { agent: "Support Agent", workspace: "Ticket queue and response history" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-primary-50 border border-primary-100 p-4 rounded-xl text-center">
                                        <LayoutDashboard className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.agent}</h4>
                                        <p className="text-slate-600 text-xs">{item.workspace}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Same platform. Totally different experience. <strong>This is what you demo. This is what closes deals.</strong>
                                </p>
                                <p>
                                    When a prospect sees a content calendar with AI-generated posts already scheduled, they stop evaluating technology. They start imagining life without a social media manager.
                                </p>
                            </div>
                        </section>

                        {/* Problem 3: Real-time chat */}
                        <section id="problem-3" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-primary-600 text-white rounded-xl flex items-center justify-center font-bold">3</div>
                                <h3 className="text-2xl font-bold text-slate-900">Make It Feel Like Slack</h3>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    Business buyers live in Slack and Teams. That's their mental model for talking to coworkers. Your AI employee needs to feel like a coworker. Not a prototype.
                                </p>
                            </div>

                            <div className="bg-white border border-slate-200 p-6 rounded-xl mb-6">
                                <h4 className="font-bold text-slate-900 mb-4">Hybrid Streaming Architecture</h4>
                                <div className="space-y-3">
                                    {[
                                        { label: "Browser to Platform", tech: "Server-Sent Events", note: "Simple, auto-reconnects, works through corporate proxies" },
                                        { label: "Platform to OpenClaw", tech: "WebSocket", note: "Persistent, fast, bidirectional" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4 bg-slate-50 p-3 rounded-lg">
                                            <div className="text-sm">
                                                <span className="font-semibold text-slate-900">{item.label}:</span>
                                                <span className="text-primary-600 font-mono ml-2">{item.tech}</span>
                                                <p className="text-slate-500 text-xs mt-0.5">{item.note}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                                {[
                                    "Real-time word streaming",
                                    "Auto-reconnect on drop",
                                    "Multi-tab sync",
                                    "First token <200ms"
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-green-50 border border-green-100 p-3 rounded-lg text-center">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto mb-1" />
                                        <p className="text-xs text-slate-700 font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    These seem like small details. They're not. They're the difference between <em>"cool demo"</em> and <em>"shut up and take my money."</em>
                                </p>
                            </div>
                        </section>

                        {/* Problem 4: Cron */}
                        <section id="problem-4" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-primary-600 text-white rounded-xl flex items-center justify-center font-bold">4</div>
                                <h3 className="text-2xl font-bold text-slate-900">Cron: The Feature That Changes Your Pricing</h3>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    Most people building on OpenClaw skip this. <strong>Massive mistake.</strong>
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                    <h4 className="font-bold text-slate-900 mb-2">Without Cron = Assistant</h4>
                                    <p className="text-slate-600 text-sm mb-3">Only works when a human talks to it</p>
                                    <p className="text-2xl font-bold text-red-500">$20/mo</p>
                                    <p className="text-xs text-slate-500">ChatGPT price anchor. You'll never escape it.</p>
                                </div>
                                <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                                    <h4 className="font-bold text-slate-900 mb-2">With Cron = Employee</h4>
                                    <p className="text-slate-600 text-sm mb-3">Wakes up, does work, reports back autonomously</p>
                                    <p className="text-2xl font-bold text-green-600">$50-200/mo</p>
                                    <p className="text-xs text-slate-500">Salary replacement pricing. That's how businesses think.</p>
                                </div>
                            </div>

                            <div className="bg-white border border-slate-200 p-6 rounded-xl mb-6">
                                <h4 className="font-bold text-slate-900 mb-4">Two Cron Systems We Built</h4>
                                <div className="space-y-3">
                                    <div className="flex gap-3 items-start">
                                        <Timer className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-slate-900">Scheduled Conversations</strong>
                                            <p className="text-slate-600 text-sm">Cron expressions that wake agents and give them tasks at set times. "Generate 5 posts at 9am. Monitor reviews at noon. Weekly report every Monday."</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <Workflow className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-slate-900">Background Automation</strong>
                                            <p className="text-slate-600 text-sm">Platform jobs that execute queued work. Agent scheduled 3 posts for 2pm? They publish at 2pm. No human needed.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-6 rounded-xl">
                                <p className="text-sm text-slate-400 mb-1">The pricing shift:</p>
                                <p className="text-lg">
                                    <span className="text-slate-400">"Chat with an AI"</span> = commodity.
                                </p>
                                <p className="text-lg font-bold">
                                    <span className="text-green-400">"AI that does 30 hours of work per week without being asked"</span> = salary replacement.
                                </p>
                                <p className="text-sm text-slate-400 mt-3">Price accordingly.</p>
                            </div>
                        </section>

                        {/* Problem 5: Prebuilt Skills */}
                        <section id="problem-5" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-primary-600 text-white rounded-xl flex items-center justify-center font-bold">5</div>
                                <h3 className="text-2xl font-bold text-slate-900">Prebuilt Skills: The Distribution Unlock</h3>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    If your platform only has agents <em>you</em> personally built, growth is capped. The best AI employee types will come from people who know specific industries deeply. Agencies. Freelancers. Domain experts.
                                </p>
                                <p>
                                    These people are <strong>not engineers</strong>. They don't want to write code or deploy anything. They want to pick skills from a menu and attach them to an agent.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-6">
                                {[
                                    { skill: "Save Post", icon: "📝" },
                                    { skill: "Analytics", icon: "📊" },
                                    { skill: "Send Email", icon: "📧" },
                                    { skill: "Schedule", icon: "📅" },
                                    { skill: "Research", icon: "🔍" },
                                    { skill: "Generate Image", icon: "🎨" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl text-center hover:border-primary-300 transition-colors">
                                        <span className="text-2xl">{item.icon}</span>
                                        <p className="text-sm font-medium text-slate-900 mt-1">{item.skill}</p>
                                        <p className="text-xs text-primary-600">+ Add skill</p>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Click. Click. Click. Done. A real estate agent who knows nothing about programming can build an AI employee that pulls listings, writes descriptions, and schedules social posts. Just by adding skills.
                                </p>
                                <p>
                                    <strong>The easier it is for non-engineers to build on your platform, the faster supply grows. Supply drives demand.</strong>
                                </p>
                                <p>
                                    Shopify didn't win because of the best storefront. They won because <em>anyone</em> could build a store. Prebuilt skills are your on-ramp for non-technical creators.
                                </p>
                            </div>
                        </section>

                        {/* Problem 6: Memory Updates */}
                        <section id="problem-6" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-primary-600 text-white rounded-xl flex items-center justify-center font-bold">6</div>
                                <h3 className="text-2xl font-bold text-slate-900">Updates Without Killing Memory</h3>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    Nobody warns you about this one.
                                </p>
                                <p>
                                    You push an update to your OpenClaw agent. Better prompts. New tools. Bug fixes. But the agent has been learning for 3 months. It knows the customer's brand voice. What content works. What doesn't.
                                </p>
                                <p>
                                    Overwrite the files? <strong>Memory gone.</strong> Customer notices immediately: <em>"Why did my AI forget everything?"</em>
                                </p>
                                <p>
                                    That's a churn event.
                                </p>
                            </div>

                            <div className="bg-white border border-slate-200 p-6 rounded-xl mb-6">
                                <h4 className="font-bold text-slate-900 mb-4">Our Update Process</h4>
                                <div className="space-y-3">
                                    {[
                                        "Save OpenClaw's memory directory",
                                        "Overwrite everything else with new template",
                                        "Restore memory",
                                        "Auto-fix stale config paths"
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-7 h-7 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{idx + 1}</div>
                                            <p className="text-slate-700">{step}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-slate-500 mt-4">Agents get every improvement AND keep everything they've learned.</p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Brain className="w-6 h-6 text-amber-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-amber-800 mb-2">Memory Is Your Moat</h4>
                                        <p className="text-amber-700 text-sm">
                                            The longer a customer's AI employee has been learning, the harder it is for them to leave. Every week of accumulated context increases switching costs. <strong>Protect that memory at all costs.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Problem 7: Security */}
                        <section id="problem-7" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-primary-600 text-white rounded-xl flex items-center justify-center font-bold">7</div>
                                <h3 className="text-2xl font-bold text-slate-900">Security: The Trust Gate</h3>
                            </div>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    No business buyer gives AI access to their data without trusting your security. One incident. One data leak. One prompt injection that crosses tenant boundaries. Trust is gone. <strong>Permanently.</strong>
                                </p>
                            </div>

                            <div className="space-y-4 mb-6">
                                {[
                                    {
                                        icon: ShieldCheck,
                                        layer: "Agent Policy",
                                        desc: "Whitelist per agent type. Social media agent can save posts and generate images. Nothing else."
                                    },
                                    {
                                        icon: Shield,
                                        layer: "Global Policy",
                                        desc: "Hard blacklist. No agent can ever run system commands, spawn processes, or touch the shell."
                                    },
                                    {
                                        icon: Lock,
                                        layer: "Sandbox Policy",
                                        desc: "Each customer's agents can only access their own directory. Physical filesystem boundary."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.layer}</h4>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-red-50 border border-red-100 p-4 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                                    <p className="text-red-800 text-sm">
                                        All three layers active by default. Zero configuration. If you're shipping OpenClaw agents to customers without this, <strong>you're one prompt injection away from disaster.</strong>
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Cost Structure */}
                        <section id="cost-structure" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Cost Structure That Kills Funded Competitors</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Everything described above runs on:
                                </p>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl mb-8">
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                                        <span className="text-slate-300">One server</span>
                                        <span className="font-bold">~$7/month</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                                        <span className="text-slate-300">Database</span>
                                        <span className="font-bold text-green-400">Free tier</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                                        <span className="text-slate-300">Frontend</span>
                                        <span className="font-bold text-green-400">Free tier</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-lg font-bold">Total</span>
                                        <span className="text-2xl font-bold text-green-400">Under $15/month</span>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm">Serves hundreds of customers.</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                    <h4 className="font-bold text-slate-900 mb-2">Funded AI Startups</h4>
                                    <p className="text-red-600 text-2xl font-bold mb-2">$30-50K/mo</p>
                                    <p className="text-slate-600 text-sm">Infrastructure costs. Need hundreds of customers at premium pricing just to break even on hosting.</p>
                                </div>
                                <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                                    <h4 className="font-bold text-slate-900 mb-2">OpenClaw Builders</h4>
                                    <p className="text-green-600 text-2xl font-bold mb-2">Under $15/mo</p>
                                    <p className="text-slate-600 text-sm">Framework is open source. Hosting near zero. <strong>Profitable from customer one.</strong> Grow on revenue, not fundraising.</p>
                                </div>
                            </div>
                        </section>

                        {/* Dooza Solution */}
                        <section id="dooza-solution" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">We Built This. It's Called Dooza.</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Every problem in this article is one we hit while building on OpenClaw. Solved it. Shipped it. The platform is <strong>Dooza.ai</strong>.
                                </p>
                                <p>
                                    Businesses hire AI employees that work as a team. Social media. Customer support. SEO. Business development. Each agent with its own workspace. Real-time chat. Scheduled tasks. No-code tools.
                                </p>
                                <p>
                                    All running on OpenClaw.
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-4">And We're Opening It Up</h3>
                                <p className="text-slate-600 mb-6">
                                    Soon anyone can build and publish AI employees on our infrastructure. Here's how it works:
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "Define the personality in SOUL.md",
                                        "Write instructions in AGENTS.md",
                                        "Add YAML tools",
                                        "We handle tenancy, auth, billing, deployment"
                                    ].map((step, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0" />
                                            <p className="text-slate-700 font-medium">{step}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-lg font-bold text-slate-900 mt-6">
                                    You build the brain on OpenClaw. We run the body.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold hover:bg-primary-700 transition-all text-lg">
                                    Start Building on Dooza <ArrowRight className="w-5 h-5" />
                                </a>
                                <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-bold hover:bg-primary-50 transition-all text-lg">
                                    <Calendar className="w-5 h-5" /> Book a Demo
                                </a>
                            </div>
                        </section>

                        {/* What To Do Next */}
                        <section id="what-next" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What To Do Next</h2>

                            <div className="space-y-6">
                                <div className="bg-white border-l-4 border-primary-600 p-6 rounded-r-xl shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-2">If you're building a single agent on OpenClaw:</h4>
                                    <p className="text-slate-600">
                                        Add multi-tenancy, cron, and security. Without those three, you have a demo. Not a business.
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-xl shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-2">If you want to skip the infrastructure:</h4>
                                    <p className="text-slate-600">
                                        Build your AI employee on Dooza instead. We solved the 7 problems. You focus on the agent. <strong>Marketplace coming soon.</strong>
                                    </p>
                                </div>

                                <div className="bg-white border-l-4 border-amber-500 p-6 rounded-r-xl shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-2">If you're a founder looking at this space:</h4>
                                    <p className="text-slate-600">
                                        The market is massive. The window is open. Most players are doing it wrong. Building chatbots when they should build employees. Burning cash when they should run lean on OpenClaw. Selling tools when they should sell labor.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 bg-slate-900 text-white p-8 rounded-xl text-center">
                                <p className="text-2xl font-bold mb-2">The opportunity is right here.</p>
                                <p className="text-slate-400 mb-6">It won't wait.</p>
                                <p className="text-sm text-slate-400">
                                    Follow <a href="https://twitter.com/sibinarendran" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">@sibinarendran</a> for launch updates.
                                </p>
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

                        <RelatedPosts currentSlug="ai-employees-openclaw-business" category="AI Business" tags={['OpenClaw', 'AI Employees', 'Business', 'Platform']} />
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
