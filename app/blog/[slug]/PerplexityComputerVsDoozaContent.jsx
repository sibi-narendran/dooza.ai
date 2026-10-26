'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
    HeartHandshake,
    BarChart3,
    TrendingUp,
    MessageSquare,
    Mail,
    Search,
    Phone,
    Globe,
    FileText,
    Repeat,
    Cpu,
    Network,
    CreditCard
} from 'lucide-react';

const faqData = [
    {
        question: "What is Perplexity Computer?",
        answer: "Perplexity Computer is Perplexity's autonomous AI agent, launched on February 25, 2026. You give it an objective and it breaks the work into subtasks, routes them to different frontier models, and runs them in a secure cloud sandbox. It connects to 400+ apps, keeps persistent memory across sessions, and supports Scheduled Tasks (hourly, daily, weekly or monthly). Checked October 26, 2026."
    },
    {
        question: "How much does Perplexity Computer cost?",
        answer: "Computer is included in paid Perplexity plans. Perplexity's pricing page (checked October 26, 2026) shows Pro at $17/month billed annually with 4,000 bonus credits, and Max at $167/month billed annually (about $2,000 a year) with 10,000 monthly credits and 35,000 bonus credits. Perplexity's help center listed Max at $200/month when we checked it on October 7, 2026. Enterprise Pro was $40/seat/month ($34 billed annually) and Enterprise Max $325/seat/month on October 7. Tasks use credits: Light tasks 100-350, Complex 350-950, Heavy 875-2,275 and Mega 2,400-9,800. For comparison, Dooza Crew is free to try (no card needed)."
    },
    {
        question: "Is Perplexity Computer better than Dooza Crew for a small business?",
        answer: "They solve different problems. Perplexity Computer is a general-purpose agent you direct: you set the objectives, design any scheduled tasks and manage credits. For a small business, our top pick is Dooza Crew (our product): you tell Dooza, your master agent, the job in plain words, it builds the helper agents it needs (a researcher, a writer, an outreach agent) and reports back. Each agent has its own computer and browser in a private, isolated workspace, and you watch every step live in chat. Pick Perplexity if you want multi-model power and 400+ connectors for research and building."
    },
    {
        question: "Does Dooza Crew answer phone calls?",
        answer: "Yes. Dooza Crew agents can take phone calls, and it is included in the plan: free to try (no card needed)."
    },
    {
        question: "Can Perplexity Computer run tasks on a schedule?",
        answer: "Yes. Perplexity's Scheduled Tasks can run hourly, daily, every weekday, weekly or monthly, and Perplexity runs each task autonomously in the cloud (checked October 7, 2026). You design the schedule yourself."
    },
    {
        question: "Can I use both Perplexity Computer and Dooza Crew?",
        answer: "Yes. Perplexity Computer is strong for deep research, building and publishing projects, and recurring tasks you design yourself. Dooza Crew works on jobs you describe in plain words, with helper agents such as a researcher, a writer or an outreach agent. Crew is free to try (no card needed), so you can test it next to Perplexity."
    },
    {
        question: "Does Dooza Crew require technical skills?",
        answer: "No. You describe the job in plain words from the web or your phone, and Dooza plans it and builds the helper agents. Before Crew clicks Send or Pay, it asks you to Approve, Edit or Reject in chat. With Perplexity Computer you write the objectives and manage your own credit usage."
    }
];

const CREW_URL = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=perplexity-computer-vs-dooza-body';

export default function PerplexityComputerVsDoozaContent() {
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
            const sections = ['introduction', 'what-is-perplexity-computer', 'what-is-dooza', 'core-difference', 'side-by-side', 'pricing-breakdown', 'credit-trap', 'who-should-use-what', 'can-you-use-both', 'verdict', 'faq'];
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
            <div className="bg-gradient-to-br from-primary-50 via-white to-cyan-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Perplexity Computer vs Dooza' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Perplexity Computer vs Dooza: <span className="text-primary-600">Multi-Model Agent</span> or Dooza Crew?
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Perplexity Computer is a multi-model AI agent you direct, included in paid Pro and Max plans (Pro $17/mo billed annually, Max $167/mo billed annually). Dooza Crew, our product and our top pick for small businesses, is a team of agents you brief in plain words: free to try. Checked October 26, 2026.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Updated October 26, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/perplexity-computer-vs-dooza.png"
                                alt="Perplexity Computer vs Dooza Crew comparison: multi-model AI agent versus a team of AI agents for small business"
                                priority={true}
                            />
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
                                videoId="2nwBDq6L_hc"
                                title="Perplexity Computer vs Claude — This AI Agent Blew My Mind!"
                            />
                            <p className="text-sm text-slate-500 text-center mt-3">
                                Watch: Perplexity Computer AI Agent review and comparison
                            </p>
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
                                    { id: 'what-is-perplexity-computer', label: 'What Is Perplexity Computer?' },
                                    { id: 'what-is-dooza', label: 'What Is Dooza?' },
                                    { id: 'core-difference', label: 'The Core Difference' },
                                    { id: 'side-by-side', label: 'Side-by-Side Comparison' },
                                    { id: 'pricing-breakdown', label: 'Pricing Breakdown' },
                                    { id: 'credit-trap', label: 'How Credits Work' },
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
                                <p className="text-sm text-slate-600 mb-4">Want a team of agents for your business?</p>
                                <a
                                    href={CREW_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Dooza Crew
                                </a>
                                <p className="text-xs text-slate-500 mt-2 text-center">Free to try, no card needed</p>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="perplexity-computer-vs-dooza" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Perplexity Computer routes work across several frontier models (Perplexity names Claude, Gemini, Grok and ChatGPT models, among others) to complete entire projects in the background. It's one of the most ambitious multi-model agents available.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Computer is no longer limited to the top plan, and it can run on a schedule. The question that matters: <strong>do you want a powerful agent you direct, or a team of agents you brief in plain words?</strong>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Perplexity Computer is built for people who want raw capability and are happy to set objectives and manage credits. <a href={CREW_URL} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Dooza Crew</a> is built for small business owners: you tell Dooza, your master agent, the job in plain words, and it builds the helper agents it needs. It is free to try (no card needed). Crew is our product and our top pick for a small business; we say below where Perplexity is stronger.</p>
                                <p className="text-lg leading-relaxed">
                                    They solve overlapping but different problems.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Every Perplexity fact below comes from Perplexity's own site and help center. Plan prices were re-checked October 26, 2026; other facts are dated where they appear.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: What Is Perplexity Computer? */}
                        <section id="what-is-perplexity-computer" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Network className="w-8 h-8 text-cyan-600" />
                                What Is Perplexity Computer?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Perplexity Computer launched on February 25, 2026, with a bold vision: <strong>frontier AI models are specializing, not becoming generalists</strong>. Instead of forcing one model to do everything, Computer routes each subtask to the model that's best at it.
                                </p>
                                <p>
                                    You give Computer a high-level goal, and it breaks it into subtasks, routes each to a suitable model, and runs them in a secure cloud sandbox. You can also run dozens of Computers in parallel.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Network, title: "Multi-Model", desc: "Claude, Gemini, Grok, ChatGPT models and more" },
                                    { icon: Cpu, title: "Auto-Routing", desc: "Each subtask sent to the best model" },
                                    { icon: Globe, title: "400+ Integrations", desc: "Slack, Gmail, GitHub, Notion, etc." },
                                    { icon: Brain, title: "Scheduled Tasks", desc: "Hourly to monthly, run in the cloud" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-cyan-50 border border-cyan-200 p-4 rounded-xl text-center">
                                        <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600 mx-auto mb-2">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">What Perplexity Computer Does Well</h3>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Multi-model orchestration — routes tasks to the best AI for each subtask",
                                    "Deep research on real-time web data",
                                    "End-to-end project execution, including publishing a website to a live URL",
                                    "Parallel execution — run dozens of tasks simultaneously",
                                    "Persistent memory across sessions — learns your preferences",
                                    "400+ app connectors and Scheduled Tasks for recurring work"
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
                                    "Usage runs on credits; Perplexity's own ranges go from 100–350 credits for a light task to 2,400–9,800 for a mega task",
                                    "Unused monthly plan credits don't roll over (purchased credits do)",
                                    "You write the objectives and design any scheduled tasks yourself",
                                    "It's a generalist: there are no ready-made business roles to switch on"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* YouTube Review */}
                            <div className="my-8">
                                <YouTubeEmbed
                                    videoId="f0gfoWBQojA"
                                    title="Perplexity Computer Review: Is It Worth It? Honest Review"
                                />
                                <p className="text-sm text-slate-500 text-center mt-3">
                                    Watch: a third-party review of Perplexity Computer
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 border-l-4 p-6 rounded-r-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-amber-900 mb-1">How Credits Work</h4>
                                        <p className="text-amber-800 text-sm">
                                            Perplexity Computer uses credits. Per Perplexity's help center, light tasks use about 100–350 credits and the heaviest tasks 2,400–9,800, and Perplexity notes that actual usage may differ. Max includes 10,000 credits a month, and Pro plans include a weekly amount of Computer usage.
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
                                    { icon: Cpu, title: "Its own computer", desc: "Every agent has its own computer and browser in a private, isolated workspace." },
                                    { icon: MessageSquare, title: "Watch live in chat", desc: "You see every step as it happens, and your staff can join the same chat." },
                                    { icon: Shield, title: "You approve", desc: "Before it clicks Send or Pay, it asks you to Approve, Edit or Reject in chat." },
                                    { icon: Phone, title: "Phone calls", desc: "Agents can take phone calls, included in the plan." },
                                    { icon: DollarSign, title: "Free to try", desc: "no card needed." },
                                    { icon: Clock, title: "Risk-free start", desc: "Free to try. No card needed." }
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
                                        <p className="text-slate-700">
                                            Free to try, approval before Send or Pay, and no workflows for you to design. <strong>Watch for:</strong> Perplexity Computer has 400+ app connectors, multi-model routing and a published credit system. If you want to pick models and build projects yourself, Computer gives you more control.
                                        </p>
                                        <p className="mt-3"><a href={CREW_URL} target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Try Dooza Crew free</a></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Core Difference */}
                        <section id="core-difference" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Layers className="w-8 h-8 text-blue-600" />
                                The Core Difference: Orchestrator vs Team of Agents
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Both can run work in the cloud on a schedule. The difference is who designs that work. One is a <strong>multi-model agent you direct</strong>. The other is <strong>a team of agents Dooza builds from your plain-words brief</strong>.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Perplexity Computer */}
                                <div className="bg-cyan-50 border-2 border-cyan-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-cyan-800 mb-4 flex items-center gap-2 text-lg">
                                        <Network className="w-5 h-5" />
                                        Perplexity Computer = Orchestrator
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "You give it objectives → it routes work across models",
                                            "Strong at research, building and publishing projects",
                                            "Scheduled Tasks for recurring work you design",
                                            "Credit-based usage",
                                            "General-purpose — does many things well",
                                            "Best for: power users who like to direct their agent",
                                            "Model: objective-driven → execute & report"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shrink-0 mt-2"></div>
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
                                            "You brief Dooza in plain words, from the web or your phone",
                                            "Dooza builds the helper agents it needs and reports back",
                                            "Each agent has its own computer and browser, private and isolated",
                                            "Watch every step live in chat",
                                            "free to try, hard spending cap",
                                            "Best for: small business owners who want the work done"
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
                                    Perplexity Computer is like a brilliant consultant who can draw on several expert models for any problem you brief them on. Dooza Crew is like a master agent that builds a small team for each job you describe, then asks before it sends or pays. <strong>One gives you flexibility. The other gives you a simple way to hand off work.</strong>
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Side-by-Side */}
                        <section id="side-by-side" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Perplexity Computer vs Dooza Crew: Side-by-Side</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-cyan-700 bg-cyan-50">Perplexity Computer</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Dooza Crew</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Type", perplexity: "Multi-model AI agent", dooza: "Team of agents built by a master agent" },
                                            { feature: "AI Models Used", perplexity: "Several frontier models; you can choose models for subtasks", dooza: "AI usage included, with a hard spending cap" },
                                            { feature: "Runs On", perplexity: "Perplexity cloud sandbox", dooza: "Each agent has its own computer and browser, private and isolated" },
                                            { feature: "Who Sets Up the Work", perplexity: "You (objectives and scheduled tasks)", dooza: "You say the job in plain words; Dooza plans it" },
                                            { feature: "Phone Calls", perplexity: "General-purpose agent", dooza: "Yes, agents can take phone calls, included" },
                                            { feature: "Research & Writing", perplexity: "Strong: deep research on real-time web data", dooza: "Researcher and writer agents" },
                                            { feature: "Email", perplexity: "Via Gmail, Outlook and other connectors", dooza: "Ask for it in plain words" },
                                            { feature: "Sales Outreach", perplexity: "Tasks you design", dooza: "Outreach agent" },
                                            { feature: "Scheduling", perplexity: "Scheduled Tasks (hourly to monthly)", dooza: "Ask Dooza in plain words" },
                                            { feature: "Watching the work", perplexity: "See Perplexity's help center", dooza: "Every step live in chat; staff join the same chat" },
                                            { feature: "Approval", perplexity: "See Perplexity's help center", dooza: "Approve, Edit or Reject before Send or Pay" },
                                            { feature: "Price", perplexity: "Pro $17/mo, Max $167/mo (both billed annually)", dooza: "Free to try (no card needed)" },
                                            { feature: "Credits/Limits", perplexity: "Max: 10,000 credits/mo; monthly plan credits don't roll over", dooza: "Unlimited users and agents; AI usage included, hard spending cap" },
                                            { feature: "Best For", perplexity: "Researchers, developers, power users", dooza: "Small businesses that want a team of agents" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600 bg-cyan-50/30">{row.perplexity}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50/50">{row.dooza}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 6: Pricing */}
                        <section id="pricing-breakdown" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <DollarSign className="w-8 h-8 text-green-600" />
                                Pricing Compared
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Computer is included in paid Perplexity plans. On Perplexity&apos;s pricing page (checked October 26, 2026), Pro is $17/month billed annually with 4,000 bonus credits, and Max is $167/month billed annually (about $2,000 a year) with 10,000 monthly credits and 35,000 bonus credits. Perplexity&apos;s help center listed Max at $200/month on October 7, 2026. Unused monthly plan credits don&apos;t roll over. Enterprise prices below are from October 7, 2026.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {/* Perplexity Max Individual */}
                                <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-cyan-800 mb-1">Perplexity Max</h3>
                                    <p className="text-3xl font-bold text-cyan-600 mb-3">$167<span className="text-lg text-cyan-400">/mo billed annually</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "10,000 monthly credits plus 35,000 bonus credits", good: true },
                                            { text: "Pro: $17/mo billed annually, 4,000 bonus credits", good: true },
                                            { text: "$200/mo on the October 7 help center listing", good: false },
                                            { text: "Monthly plan credits don't roll over", good: false },
                                            { text: "Spending cap defaults to $200 (adjustable up to $5,000)", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Perplexity Enterprise */}
                                <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-cyan-800 mb-1">Perplexity Enterprise Max</h3>
                                    <p className="text-3xl font-bold text-cyan-600 mb-3">$325<span className="text-lg text-cyan-400">/seat/mo</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "Or $3,250/year per seat (October 7, 2026)", good: true },
                                            { text: "SOC 2 Type II, HIPAA, GDPR; audit logs", good: true },
                                            { text: "Enterprise Pro from $40/seat/mo ($34 annual)", good: true },
                                            { text: "Per-seat pricing", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dooza */}
                                <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl ring-2 ring-green-400 ring-offset-2">
                                    <h3 className="font-bold text-green-800 mb-1">Dooza Crew (our top pick)</h3>
                                    <p className="text-3xl font-bold text-green-600 mb-3">Free to try<span className="text-lg text-green-400">, no card needed</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "Free to try (no card needed)", good: true },
                                            { text: "Unlimited users and agents", good: true },
                                            { text: "AI usage included, hard spending cap", good: true },
                                            { text: "No card needed", good: true }
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
                                    Perplexity gives you a powerful agent at published prices, and you direct the work and manage credits. Dooza Crew is <strong className="text-white">Free to try</strong>, with unlimited users and agents.
                                </p>
                            </div>
                        </section>

                        {/* Section 7: The Credit Trap */}
                        <section id="credit-trap" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <CreditCard className="w-8 h-8 text-red-600" />
                                How Perplexity Computer Credits Work
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Perplexity publishes typical credit ranges per task type in its help center (checked October 7, 2026; not re-read on October 26). Perplexity notes your actual usage may differ.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    { title: "Light", credits: "100–350 credits", note: "e.g. research threads, summarization" },
                                    { title: "Complex", credits: "350–950 credits", note: "Per Perplexity's credit table" },
                                    { title: "Heavy", credits: "875–2,275 credits", note: "Per Perplexity's credit table" },
                                    { title: "Mega", credits: "2,400–9,800 credits", note: "Per Perplexity's credit table" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-slate-50 border border-slate-200 p-4 rounded-xl">
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                                            <p className="text-xs text-slate-500">{item.note}</p>
                                        </div>
                                        <span className="text-lg font-bold text-slate-700 whitespace-nowrap ml-4">{item.credits}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-8">
                                <h4 className="font-bold text-red-900 mb-3">What This Means in Practice</h4>
                                <div className="space-y-2 text-sm text-red-800">
                                    <p>Max includes 10,000 monthly credits (plus 35,000 bonus credits on the October 26 pricing page). By Perplexity&apos;s own ranges, the 10,000 monthly credits are roughly 10 to 28 Complex tasks, or one to four Mega tasks.</p>
                                    <p>Unused monthly plan credits don&apos;t roll over; credits you buy stay in your account until used.</p>
                                    <p>Auto-refill is off by default. The monthly spending cap defaults to $200, and you can set it anywhere up to $5,000.</p>
                                    <p className="font-bold">Dooza Crew has no credits to count: free to try.</p>
                                </div>
                            </div>

                            <div className="my-8">
                                <YouTubeEmbed
                                    videoId="G24yFn0fBck"
                                    title="Perplexity Computer review (third-party video)"
                                />
                                <p className="text-sm text-slate-500 text-center mt-3">
                                    Watch: a third-party review of Perplexity Computer
                                </p>
                            </div>
                        </section>

                        {/* Section 8: Who Should Use What */}
                        <section id="who-should-use-what" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Users className="w-8 h-8 text-blue-600" />
                                Who Should Use What?
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Use Perplexity Computer */}
                                <div className="border border-cyan-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-cyan-700 mb-4 text-lg">Use Perplexity Computer if you...</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Are a developer or researcher who wants multi-model power",
                                            "Need deep research on real-time web data",
                                            "Want to build and publish projects end-to-end",
                                            "Already pay for Perplexity Pro, Max or Enterprise",
                                            "Enjoy designing your own tasks and schedules",
                                            "Want to choose specific models for specific subtasks"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <Network className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
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
                                            "Run a small business and want to brief a team in plain words",
                                            "Want a researcher, a writer or an outreach agent built for the job",
                                            "Want agents that can take phone calls",
                                            "Would rather not design tasks or manage credits",
                                            "Want to approve before anything is sent or paid",
                                            "Want to try it free (no card needed)"
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
                                    If you're a tech-savvy power user who wants a multi-model agent for ambitious projects, Perplexity Computer is genuinely impressive. If you're a business owner who wants specific roles handled for you while you focus on growth, <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Dooza Crew is built for that</Link>.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Can You Use Both? */}
                        <section id="can-you-use-both" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Workflow className="w-8 h-8 text-primary-600" />
                                Can You Use Both? (Yes — Here's the Power Stack)
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    You don't have to choose one. Use Perplexity Computer for research and projects you direct, and Dooza Crew for the jobs you want to hand off in plain words.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        scenario: "Market Research",
                                        perplexity: "Use Computer to run deep competitive analysis with real-time data",
                                        dooza: "Ask Dooza for a writer agent to turn the research into a draft you review in chat"
                                    },
                                    {
                                        scenario: "Product Launch",
                                        perplexity: "Computer builds landing pages, generates marketing copy, creates visual assets",
                                        dooza: "Ask Dooza for an outreach agent to contact your list, and approve each send in chat"
                                    },
                                    {
                                        scenario: "Lead Generation",
                                        perplexity: "Computer researches prospects, analyzes market data, builds targeted lists",
                                        dooza: "Dooza builds a researcher and an outreach agent; agents can also take phone calls"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                                        <div className="bg-slate-100 px-5 py-3">
                                            <h4 className="font-bold text-slate-900">{item.scenario}</h4>
                                        </div>
                                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                            <div className="p-4">
                                                <span className="text-xs font-semibold text-cyan-600 uppercase">Perplexity Computer</span>
                                                <p className="text-sm text-slate-600 mt-1">{item.perplexity}</p>
                                            </div>
                                            <div className="p-4 bg-green-50/30">
                                                <span className="text-xs font-semibold text-green-600 uppercase">Dooza</span>
                                                <p className="text-sm text-slate-700 mt-1">{item.dooza}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 10: Verdict */}
                        <section id="verdict" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <BarChart3 className="w-8 h-8 text-primary-600" />
                                The Verdict
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Perplexity Computer is one of the most technically ambitious AI agents available. Multi-model routing, persistent memory, 400+ connectors and Scheduled Tasks make it a strong tool for researchers, developers, and power users.
                                </p>
                                <p>
                                    If you are a small business owner who wants to <strong>hand off jobs in plain words</strong>, without designing tasks or managing credits, Dooza Crew is our top pick: free to try (no card needed).</p>
                            </div>

                            <div className="bg-gradient-to-br from-primary-50 to-green-50 border-2 border-primary-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 text-xl mb-4">Why Small Businesses Choose Dooza Crew</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: DollarSign, text: "free to try (no card needed)" },
                                        { icon: Users, text: "Unlimited users and agents" },
                                        { icon: Repeat, text: "AI usage included, with a hard spending cap" },
                                        { icon: HeartHandshake, text: "Asks you to Approve, Edit or Reject before Send or Pay" },
                                        { icon: Brain, text: "Agents can take phone calls, included" }
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

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                        </section>

                        {/* YouTube Video - Near bottom */}
                        <section className="scroll-mt-28">
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h3 className="font-bold text-slate-900 mb-4 text-center">Perplexity Computer vs Claude Cowork — Side-by-Side Comparison</h3>
                                <YouTubeEmbed
                                    videoId="_s0ymvl6vNc"
                                    title="Claude Cowork vs. Perplexity Computer — Which One's Actually Better?"
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

            <RelatedPosts category="Comparison" tags={['Perplexity Computer', 'AI Agents', 'AI Employees', 'Comparison']} currentSlug="perplexity-computer-vs-dooza" />
            <BottomCTA />
            <Footer />

            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
