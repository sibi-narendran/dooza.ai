'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CAL_BOOKING_URL } from '../../../lib/links';
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
    Zap,
    AlertTriangle,
    Bot,
    Sparkles,
    DollarSign,
    Monitor,
    Lock,
    Users,
    Layers,
    Brain,
    Settings,
    Database,
    Laptop,
    Workflow,
    Timer,
    ShieldCheck,
    Wrench,
    Package,
    Rocket,
    BarChart3,
    MessageSquare,
    Phone,
    Globe,
    FileText,
    Repeat
} from 'lucide-react';

const faqData = [
    {
        question: "What is Claude Cowork?",
        answer: "Claude Cowork is Anthropic's agent for knowledge work: it brings Claude Code's agentic abilities to tasks beyond coding, such as organizing files, drafting documents and browsing the web. Since September 16, 2026, Cowork and chat have been merging into one Claude, and since October 6, 2026, new Cowork tasks on Pro and Max plans run in the cloud. It is available on paid Claude plans (Pro, Max, Team and Enterprise). Checked October 7, 2026."
    },
    {
        question: "What is a good Claude Cowork alternative for a small business?",
        answer: "Our top pick is Dooza Crew (our product). You tell Dooza, your master agent, the job in plain words from the web or your phone. It plans it, builds the helper agents it needs (a researcher, a writer, an outreach agent) and reports back. Each agent has its own computer and browser in a private, isolated workspace, and you watch every step live in chat. It is free to try (no card needed). If you are a knowledge worker who likes to direct a single agent yourself, Claude Cowork fits that better."
    },
    {
        question: "How is Dooza Crew different from Claude Cowork?",
        answer: "Claude Cowork is a general-purpose agent you direct yourself: you describe tasks, connect your apps and set up any schedules. Dooza Crew is a team of agents: you give Dooza, your master agent, a job in plain words, it builds the helper agents it needs, and each agent works in its own private computer and browser while you watch in chat. Before it clicks Send or Pay, Crew asks you to Approve, Edit or Reject."
    },
    {
        question: "Can Claude Cowork run tasks while I sleep?",
        answer: "Yes. Anthropic says scheduled tasks run in the cloud, so they don't need your computer to be awake or the desktop app open, and you can schedule a task for any cadence (checked October 7, 2026). The difference with Dooza Crew is how the work is set up: with Cowork you write and manage each task; with Crew you describe the job in plain words and Dooza builds the helper agents for it."
    },
    {
        question: "How does pricing compare: Claude Cowork or Dooza Crew?",
        answer: "Per claude.com/pricing (checked October 7, 2026), Claude Pro is $17/month billed annually or $20 billed monthly, and Max starts at $100/month ($100 or $200 tiers, with 5x or 20x Pro's usage). Usage limits apply on every plan, and Anthropic notes Cowork uses limits faster than chat. Dooza Crew is free to try (no card needed). No card needed."
    },
    {
        question: "Does Dooza Crew handle phone calls?",
        answer: "Yes. Crew agents can take phone calls, and it is included in your plan, so there is no separate phone service to buy. Dooza Crew is free to try (no card needed)."
    },
    {
        question: "Can I use both Claude Cowork and Dooza Crew?",
        answer: "Yes. Claude Cowork works well for your own research, documents and recurring knowledge-work tasks. Dooza Crew covers jobs you want a team of agents to take on, such as research, writing and outreach, with your approval before anything is sent or paid. They complement each other, and Crew has a free trial (no card needed), so you can test it next to Cowork."
    },
    {
        question: "Does Dooza Crew require technical skills?",
        answer: "No. You describe the job in plain words from the web or your phone, and Dooza plans it and builds the helper agents. Your staff can join the same chat. Claude Cowork also doesn't require coding; you set up and manage your own tasks and connectors."
    }
];

const CREW_URL = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=claude-cowork-vs-dooza-body';

export default function ClaudeCoworkVsDoozaContent() {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && /calendly\.com|cal\.com|\/book(\/|\?|$)/.test(url)) {
            if (e) e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['introduction', 'what-is-claude-cowork', 'what-is-dooza', 'core-difference', 'side-by-side', 'pricing-breakdown', 'who-should-use-what', 'can-you-use-both', 'verdict', 'faq'];
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
            <div className="bg-gradient-to-br from-primary-50 via-white to-purple-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Claude Cowork vs Dooza' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Claude Cowork vs Dooza Crew: <span className="text-primary-600">General-Purpose Agent</span> vs a Team of Agents
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Claude Cowork is a powerful general-purpose agent that now runs in the cloud. Dooza Crew, our product and our top pick for small businesses, is a team of agents you brief in plain words: free to try. Here's the honest breakdown, updated for Anthropic's October 2026 changes.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Updated October 26, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={CREW_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Try Dooza Crew free
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <YouTubeEmbed
                                videoId="DW4a1Cm8nG4"
                                title="How to Use Claude Cowork — By One of the Engineers Who Created It"
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
                                    { id: 'what-is-claude-cowork', label: 'What Is Claude Cowork?' },
                                    { id: 'what-is-dooza', label: 'What Is Dooza?' },
                                    { id: 'core-difference', label: 'The Core Difference' },
                                    { id: 'side-by-side', label: 'Side-by-Side Comparison' },
                                    { id: 'pricing-breakdown', label: 'Pricing Breakdown' },
                                    { id: 'who-should-use-what', label: 'Who Should Use What' },
                                    { id: 'can-you-use-both', label: 'Can You Use Both?' },
                                    { id: 'verdict', label: 'The Verdict' },
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
                                <p className="text-sm text-slate-600 mb-4">Try a team of agents, free</p>
                                <a
                                    href={CREW_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Dooza Crew
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="claude-cowork-vs-dooza" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    <strong>Short answer:</strong> Claude Cowork is excellent if you like to direct a single agent yourself. For a small business that wants a team of agents to take jobs described in plain words, we think <a href={CREW_URL} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Dooza Crew</a> is the better pick: free to try (no card needed). Dooza Crew is our product, so weigh that.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Anthropic's Claude Cowork turns Claude into an agent that can open browsers, organize files, and complete multi-step knowledge-work tasks. Since October 6, 2026, new Cowork tasks on Pro and Max plans run in the cloud, and since September 16, 2026 Cowork and chat have been merging into one Claude. It's impressive technology.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    An earlier version of this article said Cowork stops when your computer sleeps and has no memory. Neither is true any more, so we rewrote it. The real question is different: <strong>do you want a general-purpose agent you direct, or a team of agents that Dooza, your master agent, builds for each job you describe?</strong>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Both are valid. Which one fits depends on how much of the setup and management you want to do yourself.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Claude Cowork is a flexible agent for people who like to direct the work themselves. <Link href="/blog/ai-employees-transforming-small-business" className="text-primary-600 hover:underline font-medium">Dooza Crew</Link> builds helper agents for each job you describe in plain words. They solve overlapping but different problems.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This is the honest comparison. No fluff.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: What Is Claude Cowork? */}
                        <section id="what-is-claude-cowork" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Laptop className="w-8 h-8 text-purple-600" />
                                What Is Claude Cowork?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Claude Cowork launched as a research preview in January 2026 and became generally available in April 2026. It's essentially <strong>Claude Code for non-technical users</strong>: it brings Claude Code's agentic abilities to knowledge work beyond coding. It runs in the desktop app and, in beta, on web and mobile, and since October 6, 2026, new Cowork tasks on Pro and Max plans run in the cloud.
                                </p>
                                <p>
                                    Think of it as a very capable generalist. You describe what you want, and it browses the web, works with your files and connected apps, and can repeat the task on a schedule.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Monitor, title: "Web, Desktop & Mobile", desc: "New tasks on Pro and Max run in the cloud" },
                                    { icon: FileText, title: "Files & Projects", desc: "Projects keep their own files, instructions and memory" },
                                    { icon: Globe, title: "Web Browsing", desc: "Opens browsers and navigates websites" },
                                    { icon: Timer, title: "Scheduled Tasks", desc: "Run in the cloud on any cadence, without your computer awake" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-purple-50 border border-purple-200 p-4 rounded-xl text-center">
                                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mx-auto mb-2">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">What Claude Cowork Does Well</h3>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Organizing messy spreadsheets and documents",
                                    "Researching topics across multiple websites",
                                    "Drafting reports, emails, and presentations",
                                    "Running recurring tasks on a schedule, unattended",
                                    "Connecting to Google Drive, Gmail, and other apps via MCP connectors"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">What to Keep in Mind</h3>
                            <div className="space-y-3 mb-8">
                                {[
                                    "You set up, describe and manage each task yourself",
                                    "Usage limits apply on every plan, and Anthropic says Cowork uses limits faster than chat",
                                    "It's a generalist: you shape each task yourself rather than briefing a team",
                                    "Anthropic warns about prompt injection — malicious content could cause unintended actions"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-50 border border-amber-200 border-l-4 p-6 rounded-r-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-amber-900 mb-1">What Changed in October 2026</h4>
                                        <p className="text-amber-800 text-sm">
                                            Anthropic says scheduled tasks now run in the cloud, so they don&apos;t need your computer to be awake or the desktop app open. Cowork is no longer tied to your laptop. The remaining difference with Dooza Crew is how the work is set up and supervised.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: What Is Dooza Crew? */}
                        <section id="what-is-dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Bot className="w-8 h-8 text-primary-600" />
                                What Is Dooza Crew?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    You tell Dooza, your master agent, the job in plain words from the web or your phone. It plans the job, builds the helper agents it needs (a researcher, a writer, an outreach agent) and reports back. Each agent has its own computer and browser in a private, isolated workspace, and you watch every step live in chat. Agents can take phone calls, included.
                                </p>
                                <p>
                                    Crew is the main product from <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza</Link>. It is <strong>free to try</strong> (unlimited users and agents). It starts free (no card needed). No card needed.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                                {[
                                    { icon: Monitor, title: "Its own computer", desc: "Every agent has its own computer and browser in a private, isolated workspace." },
                                    { icon: MessageSquare, title: "Watch live in chat", desc: "You see every step as it happens, and your staff can join the same chat." },
                                    { icon: ShieldCheck, title: "You approve", desc: "Before it clicks Send or Pay, it asks you to Approve, Edit or Reject in chat." },
                                    { icon: Phone, title: "Phone calls", desc: "Agents can take phone calls, included in the plan." },
                                    { icon: DollarSign, title: "Free to try", desc: "no card needed." },
                                    { icon: Timer, title: "Risk-free start", desc: "Free to try. No card needed." }
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
                                        <h4 className="font-bold text-slate-900 mb-2">Why Crew is our top pick for a small business</h4>
                                        <ul className="text-slate-700 list-disc pl-5 space-y-1">
                                            <li>You brief it in plain words; you do not design the workflow.</li>
                                            <li>Dooza builds the helper agents each job needs and reports back.</li>
                                            <li>You stay in control: it asks you to Approve, Edit or Reject before it clicks Send or Pay.</li>
                                            <li>You can watch every step live, and your staff can join the same chat.</li>
                                            <li>Free to try, no card needed.</li>
                                            <li>Agents can take phone calls, included.</li>
                                        </ul>
                                        <p className="mt-3 text-slate-700"><strong>Watch for:</strong> if you want one flexible agent you direct yourself, inside a Claude plan you may already pay for, Claude Cowork fits that better.</p>
                                        <p className="mt-3"><a href={CREW_URL} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Try Dooza Crew free</a></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: The Core Difference */}
                        <section id="core-difference" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Layers className="w-8 h-8 text-blue-600" />
                                The Core Difference: Generalist You Direct vs Team of Agents
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Both can run work in the cloud on a schedule. The difference is who designs that work and how it is supervised.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Claude Cowork */}
                                <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-purple-800 mb-4 flex items-center gap-2 text-lg">
                                        <Laptop className="w-5 h-5" />
                                        Claude Cowork = Generalist You Direct
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "You describe each task and set any schedule",
                                            "Runs in the cloud on Pro and Max (new tasks since Oct 6, 2026)",
                                            "Scheduled tasks run without your computer awake",
                                            "Memory and projects carry context across sessions",
                                            "General-purpose — one agent for many kinds of work",
                                            "Best for: people who like to direct the work themselves",
                                            "You build and maintain your own workflows"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full shrink-0 mt-2"></div>
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dooza */}
                                <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl ring-2 ring-green-400 ring-offset-2">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2 text-lg">
                                        <Bot className="w-5 h-5" />
                                        Dooza Crew = Team of Agents
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "You give Dooza the job in plain words, from the web or your phone",
                                            "Dooza builds the helper agents it needs and reports back",
                                            "Each agent has its own computer and browser, private and isolated",
                                            "Watch every step live in chat",
                                            "Agents can take phone calls, included",
                                            "free to try (no card needed)",
                                            "Asks you to Approve, Edit or Reject before Send or Pay"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-900 mb-2">Think of It This Way</h4>
                                <p className="text-blue-800">
                                    Claude Cowork is like a brilliant generalist you brief and manage yourself. Dooza Crew is like a master agent that builds a small team for each job you describe, and asks before it sends or pays. <strong>One gives you flexibility. The other works on the jobs you hand it.</strong>
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Side-by-Side Comparison */}
                        <section id="side-by-side" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Claude Cowork vs Dooza Crew: Side-by-Side</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-purple-700 bg-purple-50">Claude Cowork</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Dooza Crew</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Type", cowork: "General-purpose AI agent (part of Claude)", dooza: "Team of agents built by a master agent" },
                                            { feature: "Runs On", cowork: "Desktop app, web and mobile (beta); new Pro/Max tasks run in the cloud", dooza: "Cloud, from the web or your phone" },
                                            { feature: "Works When PC Off?", cowork: "Yes — scheduled tasks run in the cloud", dooza: "Yes" },
                                            { feature: "Who Sets Up the Work", cowork: "You", dooza: "You tell Dooza the job in plain words; it builds the helper agents" },
                                            { feature: "Phone Calls", cowork: "General-purpose agent", dooza: "Yes, agents can take phone calls, included" },
                                            { feature: "Social Media Posting", cowork: "Possible as a task you set up", dooza: "Ask for it in plain words" },
                                            { feature: "Email Management", cowork: "Via Gmail and other connectors", dooza: "Ask for it in plain words" },
                                            { feature: "Research & Writing", cowork: "Can research & draft", dooza: "Researcher and writer agents" },
                                            { feature: "Sales Outreach", cowork: "Tasks you design", dooza: "Outreach agent" },
                                            { feature: "Approval", cowork: "See Anthropic's documentation", dooza: "Approve, Edit or Reject before Send or Pay" },
                                            { feature: "Workspace", cowork: "Your desktop, or the cloud for new Pro/Max tasks", dooza: "Each agent has its own computer and browser, private and isolated" },
                                            { feature: "Technical Skill", cowork: "Low (you manage tasks)", dooza: "None (plain words)" },
                                            { feature: "Starting Price", cowork: "Pro $17/mo annual or $20 monthly (checked Oct 7, 2026)", dooza: "Free to try (no card needed)" },
                                            { feature: "Higher Usage", cowork: "Max $100 or $200/mo (checked Oct 7, 2026)", dooza: "AI usage included with a hard spending cap" },
                                            { feature: "Best For", cowork: "People who want to direct their own agent", dooza: "Small businesses that want a team of agents" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600 bg-purple-50/30">{row.cowork}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50/50">{row.dooza}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 6: Pricing Breakdown */}
                        <section id="pricing-breakdown" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <DollarSign className="w-8 h-8 text-green-600" />
                                Pricing Compared
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Cowork is included in paid Claude plans (Pro, Max, Team and Enterprise). Usage limits run on a rolling five-hour session window, paid plans add weekly limits, and Anthropic notes that Cowork consumes limits faster than chat. Prices below are from claude.com/pricing, checked October 7, 2026.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {/* Claude Pro */}
                                <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-purple-800 mb-1">Claude Pro</h3>
                                    <p className="text-3xl font-bold text-purple-600 mb-3">$17-20<span className="text-lg text-purple-400">/mo</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "Cowork access included", good: true },
                                            { text: "$17/mo annual, $20 billed monthly", good: true },
                                            { text: "Usage limits apply", good: false },
                                            { text: "5-hour session window plus weekly limits", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Claude Max */}
                                <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-purple-800 mb-1">Claude Max</h3>
                                    <p className="text-3xl font-bold text-purple-600 mb-3">$100-200<span className="text-lg text-purple-400">/mo</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "5x or 20x more usage", good: true },
                                            { text: "Full Cowork functionality", good: true },
                                            { text: "Scheduled tasks run in the cloud", good: true },
                                            { text: "Still usage-capped", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dooza Crew */}
                                <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl ring-2 ring-green-400 ring-offset-2">
                                    <h3 className="font-bold text-green-800 mb-1">Dooza Crew</h3>
                                    <p className="text-3xl font-bold text-green-600 mb-3">Free to try<span className="text-lg text-green-400">, no card needed</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "Free to try (no card needed)", good: true },
                                            { text: "No card needed", good: true },
                                            { text: "Unlimited users and agents", good: true },
                                            { text: "AI usage included, with a hard spending cap", good: true }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl">
                                <p className="text-lg font-bold mb-2">The bottom line:</p>
                                <p className="text-slate-300">
                                    Claude gives you a capable general-purpose agent for a published monthly price, and you do the setup. Dooza Crew gives you <strong className="text-white">a master agent that builds the helper agents each job needs</strong>. It is free to try. <a href={CREW_URL} target="_blank" rel="noopener noreferrer" className="text-white underline">Try Dooza Crew free</a>.
                                </p>
                            </div>
                        </section>

                        {/* Section 7: Who Should Use What */}
                        <section id="who-should-use-what" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Users className="w-8 h-8 text-blue-600" />
                                Who Should Use What?
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Use Claude Cowork */}
                                <div className="border border-purple-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-purple-700 mb-4 text-lg">Use Claude Cowork if you...</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Are a knowledge worker (analyst, researcher, writer)",
                                            "Want one flexible agent for many kinds of tasks",
                                            "Want to schedule your own recurring tasks in the cloud",
                                            "Already pay for a Claude plan",
                                            "Enjoy designing and adjusting your own workflows",
                                            "Are comfortable managing tasks yourself"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <Laptop className="w-4 h-4 text-purple-500 shrink-0 mt-1" />
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Use Dooza */}
                                <div className="border-2 border-green-300 p-6 rounded-xl bg-green-50/30">
                                    <h3 className="font-bold text-green-700 mb-4 text-lg">Use Dooza Crew if you...</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Run a small business and want a team of agents, not one generalist",
                                            "Want to describe a job in plain words, not write workflows",
                                            "Want a researcher, a writer or an outreach agent built for the job",
                                            "Want agents that can take phone calls",
                                            "Want to approve before anything is sent or paid",
                                            "Want to try it free (no card needed) and cancel any time before day 8"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-900 mb-2">Real Talk</h4>
                                <p className="text-blue-800">
                                    If you're comfortable directing an agent yourself, Claude Cowork is excellent and can now run scheduled work in the cloud. If you're a business owner who wants a team of agents working on jobs you describe in plain words while you focus on growth, <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Dooza Crew is built for that</Link>.
                                </p>
                            </div>
                        </section>

                        {/* Section 8: Can You Use Both? */}
                        <section id="can-you-use-both" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Workflow className="w-8 h-8 text-primary-600" />
                                Can You Use Both? (Yes — Here's How)
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This isn't an either/or decision. The smartest businesses use both tools for what they're best at.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        scenario: "Morning Routine",
                                        cowork: "A scheduled Claude Cowork task summarizes key documents and prepares your daily brief",
                                        dooza: "Ask Dooza Crew for the customer email replies and social posts in plain words; it builds the helper agents and asks you to approve before anything is sent."
                                    },
                                    {
                                        scenario: "Content Production",
                                        cowork: "Use Cowork to research competitors, analyze data, and draft a strategy document on your desktop",
                                        dooza: "Dooza Crew's researcher and writer agents draft the posts you ask for, and you approve before anything goes out."
                                    },
                                    {
                                        scenario: "Sales & Lead Gen",
                                        cowork: "Use Cowork to build prospect lists and analyze CRM data in your spreadsheets",
                                        dooza: "Dooza Crew's outreach agent drafts and sends outreach once you approve, and agents can take phone calls, included."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                                        <div className="bg-slate-100 px-5 py-3">
                                            <h4 className="font-bold text-slate-900">{item.scenario}</h4>
                                        </div>
                                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                            <div className="p-4">
                                                <span className="text-xs font-semibold text-purple-600 uppercase">Claude Cowork</span>
                                                <p className="text-sm text-slate-600 mt-1">{item.cowork}</p>
                                            </div>
                                            <div className="p-4 bg-green-50/30">
                                                <span className="text-xs font-semibold text-green-600 uppercase">Dooza Crew</span>
                                                <p className="text-sm text-slate-700 mt-1">{item.dooza}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 9: Verdict */}
                        <section id="verdict" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <BarChart3 className="w-8 h-8 text-primary-600" />
                                The Verdict
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Claude Cowork is an impressive piece of technology, and with cloud execution, scheduled tasks and memory it can now run recurring work on its own. For anyone happy to direct their own agent, it's genuinely useful.
                                </p>
                                <p>
                                    If you want <strong>a team of agents working on jobs you describe in plain words</strong>, without designing the workflows yourself, Dooza Crew is our top pick for a small business.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-primary-50 to-green-50 border-2 border-primary-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 text-xl mb-4">Why Dooza Crew is our top pick</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: Repeat, text: "Brief it in plain words; Dooza builds the helper agents" },
                                        { icon: Monitor, text: "Each agent has its own private computer and browser" },
                                        { icon: DollarSign, text: "free to try (no card needed)" },
                                        { icon: Phone, text: "Agents can take phone calls, included" },
                                        { icon: Brain, text: "Approve, Edit or Reject before Send or Pay" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                                                <item.icon size={16} />
                                            </div>
                                            <span className="text-sm text-slate-700 font-medium">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center">
                                <a
                                    href={CREW_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                                >
                                    Try Dooza Crew free
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <p className="text-sm text-slate-500 mt-3">No card needed. Free to try.</p>
                            </div>
                        </section>

                        {/* YouTube Video - Mid Content */}
                        <section className="scroll-mt-28">
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-900 mb-4 text-center">Inside Anthropic: Claude Cowork Tutorial from Claude's Head of Design</h3>
                                <YouTubeEmbed
                                    videoId="rlIy7b-3DC8"
                                    title="Inside Anthropic: Claude Cowork Tutorial from Claude's Head of Design — Jenny Wen"
                                />
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <MessageSquare className="w-8 h-8 text-primary-600" />
                                Frequently Asked Questions
                            </h2>

                            <div className="space-y-4">
                                {faqData.map((faq, idx) => (
                                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                                        <button
                                            type="button"
                                            onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                            className="w-full text-left px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                                        >
                                            <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                                            <span className={`text-primary-600 text-xl font-bold shrink-0 transition-transform ${openFaqIndex === idx ? 'rotate-45' : ''}`}>+</span>
                                        </button>
                                        {openFaqIndex === idx && (
                                            <div className="px-6 pb-4">
                                                <p className="text-slate-600">{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right spacer for layout balance */}
                    <div className="hidden lg:block w-64 shrink-0" />
                </div>
            </div>

            <RelatedPosts category="Comparison" tags={['AI Employees', 'Claude', 'AI Agents', 'Comparison']} currentSlug="claude-cowork-vs-dooza" />
            <BottomCTA />
            <Footer />

            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} calUrl={CAL_BOOKING_URL} />
        </div>
    );
}
