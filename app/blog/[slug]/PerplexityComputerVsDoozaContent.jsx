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
        answer: "Perplexity Computer is Perplexity's autonomous AI agent, launched on February 25, 2026. You give it an objective and it breaks the work into subtasks, routes them to different frontier models, and runs them in a secure cloud sandbox. It connects to 400+ apps, keeps persistent memory across sessions, and supports Scheduled Tasks (hourly, daily, weekly or monthly). Checked October 7, 2026."
    },
    {
        question: "How much does Perplexity Computer cost?",
        answer: "Per Perplexity's help center and enterprise pricing page (checked October 7, 2026): paid consumer Pro plans include a weekly amount of Computer usage; Max is $200/month or $2,000/year with 10,000 credits a month; Enterprise Pro ($40/seat/month, $34 billed annually) includes access to Computer; Enterprise Max is $325/seat/month or $3,250/year. Tasks use credits: Light tasks 100–350, Complex 350–950, Heavy 875–2,275 and Mega 2,400–9,800. Dooza pricing depends on the product (see /pricing), and every Dooza product starts with a refundable pilot: 100% refund within 14 days."
    },
    {
        question: "Is Perplexity Computer better than Dooza for business?",
        answer: "They solve different problems. Perplexity Computer is a general-purpose agent you direct: you set the objectives and any scheduled tasks. Dooza is an AI-native company that builds AI products and services for small businesses; its Dooza Workforce app gives you role-specific AI employees for email, social media, SEO, sales, legal documents and phone calls, configured for you by Dooza engineers. Pick Perplexity if you want to run your own agent; pick Dooza if you want those roles handled for you."
    },
    {
        question: "Does Dooza answer phone calls?",
        answer: "Yes. Dooza includes Rachel, an AI receptionist that answers phone calls, books appointments, and handles customer inquiries."
    },
    {
        question: "Can Perplexity Computer run tasks on a schedule?",
        answer: "Yes. Perplexity's Scheduled Tasks can run hourly, daily, every weekday, weekly or monthly, and Perplexity runs each task autonomously in the cloud (checked October 7, 2026). With Dooza, the difference is that Dooza engineers set up the routines for you; for example, Somi creates and publishes social content to your connected platforms on a schedule."
    },
    {
        question: "Can I use both Perplexity Computer and Dooza?",
        answer: "Yes. Perplexity Computer is strong for deep research, building and publishing projects, and recurring tasks you design yourself. Dooza covers business roles you want handled for you, such as email, social media, SEO content, sales outreach and phone answering. They complement each other."
    },
    {
        question: "Does Dooza require technical skills to set up?",
        answer: "No. A Dooza engineer scopes your pilot on a free 30-minute call and configures your AI employees for your business. With Perplexity Computer you write the objectives and manage your own credit usage."
    }
];

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
                            Perplexity Computer vs Dooza: <span className="text-primary-600">Multi-Model Agent</span> or 6 AI Employees?
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Perplexity Computer is a multi-model AI agent you direct, now with scheduled tasks and access on paid Pro plans. Dooza gives you 6 role-specific AI employees set up for you, starting with a refundable pilot. Here's the honest breakdown, checked October 7, 2026.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Updated October 7, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/perplexity-computer-vs-dooza.png"
                                alt="Perplexity Computer vs Dooza comparison — multi-model AI agent versus 6 AI employees with a refundable pilot"
                                priority={true}
                            />
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('workforce')}
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
                                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg border-2 border-primary-200 hover:border-primary-400 transition-all"
                            >
                                Book a free pilot call
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
                                <p className="text-sm text-slate-600 mb-4">Want AI employees set up for you?</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Start your pilot
                                </a>
                                <p className="text-xs text-slate-500 mt-2 text-center">100% refund within 14 days</p>
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
                                    An earlier version of this article said Computer needs the $200 Max plan and can't run on a schedule. Both are out of date, so we rewrote it. The question that matters: <strong>do you want a powerful agent you direct, or AI employees someone sets up and runs for you?</strong>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Perplexity Computer is built for people who want raw capability and are happy to set objectives and manage credits. <Link href="/blog/ai-employees-transforming-small-business" className="text-primary-600 hover:underline font-medium">Dooza's AI employees</Link> are built for business owners who want their operations handled — emails, social media, SEO, sales, and phone calls — starting with a refundable pilot.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    They solve overlapping but different problems.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Every Perplexity fact below comes from Perplexity's own site and help center, checked October 7, 2026.
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

                        {/* Section 3: What Is Dooza? */}
                        <section id="what-is-dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Bot className="w-8 h-8 text-primary-600" />
                                What Is Dooza?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Dooza is an AI-native company that builds AI products and services for small businesses, from custom AI agents built and maintained by Dooza engineers to done-for-you AI receptionist, customer support and AI visibility services. Every product starts with a refundable pilot: 100% refund within 14 days. Dooza Workforce gives you <strong>role-specific AI employees</strong> that handle specific business functions. <Link href="/blog/ai-employees-vs-virtual-assistants" className="text-primary-600 hover:underline font-medium">Dedicated AI employees</Link> with defined roles, responsibilities, and daily routines.
                                </p>
                                <p>
                                    Each AI employee runs in the cloud on routines a Dooza engineer sets up with you during the pilot. You don't write prompts or design workflows. They do their job and report back, with your approval on anything sensitive.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                                {[
                                    { icon: Mail, title: "Maily — Email Manager", desc: "Reads, drafts, and sends emails. Handles customer inquiries. Follows up automatically." },
                                    { icon: MessageSquare, title: "Somi — Social Media", desc: "Creates and posts content across platforms. Engages with comments. Runs on autopilot." },
                                    { icon: Search, title: "Ranky — SEO Specialist", desc: "Writes optimized blog posts. Tracks rankings. Builds your organic traffic." },
                                    { icon: Phone, title: "Rachel — AI Receptionist", desc: "Answers phone calls 24/7. Books appointments. Handles customer inquiries live." },
                                    { icon: TrendingUp, title: "Stan — Sales Agent", desc: "Qualifies leads. Sends outreach. Books meetings. Manages your pipeline." },
                                    { icon: Shield, title: "Linda — Legal Assistant", desc: "Reviews contracts. Flags risks. Drafts legal documents." }
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
                                        <h4 className="font-bold text-slate-900 mb-2">The Key Difference</h4>
                                        <p className="text-slate-700">
                                            Dooza's AI employees come with defined roles and routines that Dooza engineers configure for your business. Somi posts your social media on schedule. Rachel answers calls. Ranky publishes SEO content every week. <strong>You don't design the workflows; Dooza does.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Core Difference */}
                        <section id="core-difference" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Layers className="w-8 h-8 text-blue-600" />
                                The Core Difference: Orchestrator vs Workforce
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Both can run work in the cloud on a schedule. The difference is who designs that work. One is a <strong>multi-model agent you direct</strong>. The other is <strong>done-for-you AI employees</strong>.
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
                                        Dooza = AI Workforce
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "AI employees have defined roles & daily routines",
                                            "Built for ongoing business operations",
                                            "Starts with a refundable pilot (100% refund within 14 days)",
                                            "Dooza engineers configure everything",
                                            "Role-specific — each employee does one job",
                                            "Includes Rachel, an AI receptionist for phone calls",
                                            "Best for: owners who want work handled for them"
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
                                    Perplexity Computer is like a brilliant consultant who can draw on several expert models for any problem you brief them on. Dooza is like a team of specialists that someone else trains and manages for you. <strong>One gives you flexibility. The other gives you the work done.</strong>
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Side-by-Side */}
                        <section id="side-by-side" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Perplexity Computer vs Dooza: Side-by-Side</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-cyan-700 bg-cyan-50">Perplexity Computer</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Dooza</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Type", perplexity: "Multi-model AI agent", dooza: "Done-for-you AI employees (Dooza Workforce)" },
                                            { feature: "AI Models Used", perplexity: "Several frontier models; you can choose models for subtasks", dooza: "Chosen and managed by Dooza" },
                                            { feature: "Runs On", perplexity: "Perplexity cloud sandbox", dooza: "Cloud" },
                                            { feature: "Who Sets Up the Work", perplexity: "You (objectives and scheduled tasks)", dooza: "Dooza engineers, with you" },
                                            { feature: "Phone Calls", perplexity: "General-purpose agent", dooza: "AI receptionist (Rachel)" },
                                            { feature: "Social Media", perplexity: "Possible as a task you set up", dooza: "Scheduled posting by Somi" },
                                            { feature: "Email Management", perplexity: "Via Gmail, Outlook and other connectors", dooza: "Handled by Maily" },
                                            { feature: "SEO Content", perplexity: "Can research & draft", dooza: "Full pipeline (Ranky)" },
                                            { feature: "Sales Outreach", perplexity: "Tasks you design", dooza: "Handled by Stan" },
                                            { feature: "Scheduling", perplexity: "Scheduled Tasks (hourly to monthly)", dooza: "Built in, configured for you" },
                                            { feature: "Memory", perplexity: "Persistent across sessions", dooza: "Managed by Dooza" },
                                            { feature: "Setup & Onboarding", perplexity: "Self-serve; dedicated support on Enterprise", dooza: "Dooza engineer scopes your pilot on a free call" },
                                            { feature: "Customer Support", perplexity: "Help center contact; live chat for Pro", dooza: "Dooza engineers" },
                                            { feature: "Price", perplexity: "Included in Pro (weekly usage); Max $200/mo", dooza: "Depends on product — refundable pilot (see /pricing)" },
                                            { feature: "Credits/Limits", perplexity: "Max: 10,000 credits/mo; monthly plan credits don't roll over", dooza: "Pricing by product (see /pricing)" },
                                            { feature: "Best For", perplexity: "Researchers, developers, power users", dooza: "Owners who want business roles handled for them" }
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
                                    Computer is no longer limited to Max. Paid consumer Pro plans include a weekly amount of Computer usage, and Enterprise Pro includes access to Computer. Max costs $200/month and includes 10,000 credits a month; unused monthly plan credits don't roll over. Prices below are from Perplexity's help center and enterprise pricing page, checked October 7, 2026.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {/* Perplexity Max Individual */}
                                <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-cyan-800 mb-1">Perplexity Max</h3>
                                    <p className="text-3xl font-bold text-cyan-600 mb-3">$200<span className="text-lg text-cyan-400">/mo or $2,000/yr</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "10,000 credits/month", good: true },
                                            { text: "Pro plans also include weekly Computer usage", good: true },
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
                                            { text: "Or $3,250/year per seat", good: true },
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
                                    <h3 className="font-bold text-green-800 mb-1">Dooza</h3>
                                    <p className="text-3xl font-bold text-green-600 mb-3">14-day<span className="text-lg text-green-400"> refundable pilot</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "Six ready-made AI employees", good: true },
                                            { text: "Set up by Dooza engineers", good: true },
                                            { text: "Pricing by product — see /pricing", good: true },
                                            { text: "100% refund within 14 days", good: true }
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
                                    Perplexity gives you a powerful agent at published prices, and you direct the work. Dooza starts with a <strong className="text-white">refundable pilot — 100% refund within 14 days</strong> — with 6 AI employees for your email, social media, SEO, sales, legal documents, and phone calls, configured for you by Dooza engineers.
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
                                    Perplexity publishes typical credit ranges per task type in its help center (checked October 7, 2026). Perplexity notes your actual usage may differ.
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
                                    <p>Max includes 10,000 credits a month. By Perplexity&apos;s own ranges, that is roughly 10 to 28 Complex tasks, or one to four Mega tasks.</p>
                                    <p>Unused monthly plan credits don&apos;t roll over; credits you buy stay in your account until used.</p>
                                    <p>Auto-refill is off by default. The monthly spending cap defaults to $200, and you can set it anywhere up to $5,000.</p>
                                    <p className="font-bold">Dooza pricing depends on the product (see /pricing), and every product starts with a refundable pilot.</p>
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
                                    <h3 className="font-bold text-green-700 mb-4 text-lg">Use Dooza if you...</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Run a business that needs AI handling emails, social, SEO, and sales",
                                            "Want those roles set up and run for you by Dooza engineers",
                                            "Need an AI receptionist that answers phone calls",
                                            "Would rather not design tasks or manage credits",
                                            "Want your approval on anything sensitive",
                                            "Want to start with a refundable pilot (100% refund within 14 days)"
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
                                    If you're a tech-savvy power user who wants a multi-model agent for ambitious projects, Perplexity Computer is genuinely impressive. If you're a business owner who wants specific roles handled for you while you focus on growth, <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Dooza is built for that</Link>.
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
                                    You don't have to choose one. Use Perplexity Computer for research and projects you direct, and Dooza for the business roles you want handled for you.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        scenario: "Market Research",
                                        perplexity: "Use Computer to run deep competitive analysis with real-time data",
                                        dooza: "Dooza's Ranky turns research into SEO blog posts and publishes them weekly"
                                    },
                                    {
                                        scenario: "Product Launch",
                                        perplexity: "Computer builds landing pages, generates marketing copy, creates visual assets",
                                        dooza: "Somi posts launch content to your connected social platforms. Maily handles inbound inquiries. Rachel answers calls."
                                    },
                                    {
                                        scenario: "Lead Generation",
                                        perplexity: "Computer researches prospects, analyzes market data, builds targeted lists",
                                        dooza: "Stan sends outreach, qualifies leads, and books meetings on your calendar"
                                    },
                                    {
                                        scenario: "Phone Calls",
                                        perplexity: "Computer prepares call notes, scripts and follow-up drafts",
                                        dooza: "Rachel answers calls, books appointments, and handles customer inquiries"
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
                                    If you want <strong>specific business roles handled for you</strong>, without designing tasks or managing credits yourself, Dooza is the better fit, and every product starts with a refundable pilot — 100% refund within 14 days.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-primary-50 to-green-50 border-2 border-primary-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 text-xl mb-4">Why Businesses Choose Dooza Over Perplexity Computer</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: DollarSign, text: "Refundable pilot — 100% refund within 14 days" },
                                        { icon: Users, text: "6 specialized AI employees, not one general agent" },
                                        { icon: Phone, text: "AI phone answering with Rachel" },
                                        { icon: Repeat, text: "Work designed and run for you" },
                                        { icon: HeartHandshake, text: "A Dooza engineer scopes your pilot and sets it up for you" },
                                        { icon: Brain, text: "Purpose-built for business — not research" }
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
                                    href={getProductSignupUrl('workforce')}
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
                                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg border-2 border-primary-200 hover:border-primary-400 transition-all"
                                >
                                    Book a free pilot call
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
