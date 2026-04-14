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
        answer: "Perplexity Computer is an autonomous AI agent platform launched in February 2026 that coordinates 19 different AI models simultaneously to complete complex, multi-step workflows. It runs in the cloud and can connect to 400+ applications. It requires a Perplexity Max subscription at $200/month."
    },
    {
        question: "How much does Perplexity Computer cost?",
        answer: "Perplexity Computer requires the Max plan at $200/month (or $2,000/year). Tasks consume credits — simple tasks use ~30 credits, but complex coding sessions can burn thousands. Monthly spending caps default to $200. Dooza starts at just $29/month with no usage caps."
    },
    {
        question: "Is Perplexity Computer better than Dooza for business?",
        answer: "They solve different problems. Perplexity Computer is a multi-model research and execution tool for tech-savvy users who want to orchestrate complex workflows. Dooza provides purpose-built AI employees that handle specific business functions (email, social media, SEO, sales, phone calls) autonomously 24/7. For business operations, Dooza is more practical and 7x cheaper."
    },
    {
        question: "Can Perplexity Computer answer phone calls?",
        answer: "No. Perplexity Computer is a cloud-based AI agent that executes digital tasks. It cannot make or receive phone calls. Dooza includes Rachel, an AI receptionist that answers phone calls, books appointments, and handles customer inquiries 24/7."
    },
    {
        question: "Does Perplexity Computer post to social media automatically?",
        answer: "Perplexity Computer can connect to apps via integrations, but it's designed for one-off research and execution tasks — not scheduled, autonomous social media management. Dooza's Somi creates and publishes social content on a daily schedule across all platforms without any input from you."
    },
    {
        question: "Can I use both Perplexity Computer and Dooza?",
        answer: "Yes. Many power users use Perplexity Computer for deep research, competitive analysis, and complex one-off projects — and Dooza for always-on business operations like email automation, social media, SEO content, sales outreach, and phone answering. They complement each other well."
    },
    {
        question: "Does Dooza require technical skills to set up?",
        answer: "Zero technical skills required. Dooza includes free concierge onboarding — our team configures your AI employees for your business in a 30-minute call. Perplexity Computer requires understanding of prompt engineering and credit management for best results."
    }
];

export default function PerplexityComputerVsDoozaContent() {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
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
                            Perplexity Computer vs Dooza: <span className="text-primary-600">19 Models</span> or 6 AI Employees?
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Perplexity Computer orchestrates 19 AI models for $200/month. Dooza gives you 6 AI employees that run your business for $29/month. One is a tech power tool. The other is a workforce. Here's the honest breakdown.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 14, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/perplexity-computer-vs-dooza.png"
                                alt="Perplexity Computer vs Dooza comparison — multi-model AI agent platform at $200/month versus 6 AI employees at $29/month"
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
                                Try Dooza Free — No Card Required
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleAction}
                                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg border-2 border-primary-200 hover:border-primary-400 transition-all"
                            >
                                Book Free Demo
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
                                    { id: 'credit-trap', label: 'The Credit Trap' },
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
                                <p className="text-sm text-slate-600 mb-4">Get AI employees that work 24/7</p>
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
                                    Perplexity just dropped a bomb. Their new "Computer" product coordinates 19 AI models simultaneously — Claude, GPT-5, Gemini, Grok, and more — to complete entire projects in the background. It's the most ambitious multi-model orchestration platform we've seen.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    But here's the question that matters: <strong>does orchestrating 19 models actually help your business run better?</strong>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    At $200/month with unpredictable credit consumption, Perplexity Computer is built for AI power users who want raw capability. <Link href="/blog/ai-employees-transforming-small-business" className="text-primary-600 hover:underline font-medium">Dooza's AI employees</Link> are built for business owners who want their operations handled — emails, social media, SEO, sales, and phone calls — at a fraction of the cost.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    They're solving fundamentally different problems. Pick the wrong one, and you'll waste hundreds of dollars finding out.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This is the no-fluff comparison. Let's break it down.
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
                                    CEO Aravind Srinivas summed it up: <em>"A traditional operating system takes instructions; an AI operating system takes objectives."</em> You give Computer a high-level goal, and it breaks it into subtasks, routes each to the right model, and executes them in parallel.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Network, title: "19 AI Models", desc: "Claude, GPT-5, Gemini, Grok, and more" },
                                    { icon: Cpu, title: "Auto-Routing", desc: "Each subtask sent to the best model" },
                                    { icon: Globe, title: "400+ Integrations", desc: "Slack, Gmail, GitHub, Notion, etc." },
                                    { icon: Brain, title: "Persistent Memory", desc: "Remembers past work and preferences" }
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
                                    "Deep research with 92% factual accuracy on real-time queries",
                                    "End-to-end project execution (research, design, code, deploy)",
                                    "Parallel execution — run dozens of tasks simultaneously",
                                    "Persistent memory across sessions — learns your preferences",
                                    "400+ app integrations for workflow automation"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">Where Perplexity Computer Falls Short</h3>
                            <div className="space-y-3 mb-8">
                                {[
                                    "$200/month price barrier — 7x more expensive than Dooza",
                                    "Unpredictable credit consumption — vague prompts waste hundreds of credits",
                                    "Watermark branding on all generated outputs",
                                    "No phone call capability — cannot answer or make calls",
                                    "Not designed for scheduled, autonomous business operations",
                                    "Requires prompt engineering knowledge to get optimal results",
                                    "Credits expire monthly — use it or lose it",
                                    "Perplexity reportedly canceled a product demo due to quality concerns"
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
                                    Watch: Honest review of Perplexity Computer — is the $200/month worth it?
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 border-l-4 p-6 rounded-r-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-amber-900 mb-1">The Credit Consumption Problem</h4>
                                        <p className="text-amber-800 text-sm">
                                            Perplexity Computer uses a credit-based system where costs are unpredictable. A simple task costs ~30 credits, but a large coding session can burn thousands. Users report blowing through monthly credits in days during heavy use. Your 10,000 monthly credits can vanish fast.
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
                                    Dooza is a platform of <strong>purpose-built AI employees</strong> that handle specific business functions autonomously. Not a multi-model playground. Not a research tool. <Link href="/blog/ai-employees-vs-virtual-assistants" className="text-primary-600 hover:underline font-medium">Dedicated AI employees</Link> with defined roles, responsibilities, and daily routines.
                                </p>
                                <p>
                                    Each AI employee runs in the cloud 24/7. They don't need credits. They don't need prompt engineering. They wake up, do their job, and report back — like a real employee who never sleeps.
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
                                            Dooza's AI employees don't wait for objectives. They have defined roles, scheduled routines, and autonomous decision-making. Somi posts your social media at 9am whether you're awake or not. Rachel answers calls at 2am. Ranky publishes SEO content every week. <strong>They work like employees, not research agents.</strong>
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
                                    This is what most comparison articles miss. Perplexity Computer and Dooza aren't competing — they're solving fundamentally different problems. One is a <strong>multi-model orchestration engine</strong>. The other is a <strong>business operations platform</strong>.
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
                                            "You give it objectives → it routes to 19 models",
                                            "Built for complex, one-off research & execution",
                                            "Credit-based usage — unpredictable costs",
                                            "Requires prompt engineering for best results",
                                            "General-purpose — does many things well",
                                            "Best for: AI power users & developers",
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
                                            "Built for ongoing, autonomous business operations",
                                            "Flat $29/month — no usage caps or credits",
                                            "Zero learning curve — we configure everything",
                                            "Purpose-built — each employee excels at one job",
                                            "Best for: businesses needing autonomous operations",
                                            "Model: proactive — executes on schedule, 24/7"
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
                                    Perplexity Computer is like hiring a genius consultant who can tap into 19 expert brains to solve any problem you throw at them — but charges $200/hour and leaves when the project ends. Dooza is like hiring six full-time employees who show up every day, know their job, and don't need supervision. <strong>One solves problems. The other runs your business.</strong>
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
                                            { feature: "Type", perplexity: "Multi-model AI agent", dooza: "AI employee platform" },
                                            { feature: "AI Models Used", perplexity: "19 models (Claude, GPT-5, Gemini, Grok)", dooza: "Purpose-built models per employee" },
                                            { feature: "Runs On", perplexity: "Perplexity cloud sandbox", dooza: "Cloud — works 24/7" },
                                            { feature: "Autonomy Level", perplexity: "Objective-driven (you assign goals)", dooza: "Fully autonomous (scheduled routines)" },
                                            { feature: "Phone Calls", perplexity: "Not supported", dooza: "AI receptionist (Rachel)" },
                                            { feature: "Social Media", perplexity: "Manual — one-off tasks", dooza: "Automated daily posting (Somi)" },
                                            { feature: "Email Management", perplexity: "Via integrations (manual trigger)", dooza: "Full automation (Maily)" },
                                            { feature: "SEO Content", perplexity: "Can research & draft", dooza: "Full pipeline (Ranky)" },
                                            { feature: "Sales Outreach", perplexity: "Research & drafting", dooza: "Automated pipeline (Stan)" },
                                            { feature: "Scheduling", perplexity: "Task-based (no cron)", dooza: "Built-in cron scheduling" },
                                            { feature: "Memory", perplexity: "Persistent across sessions", dooza: "Persistent — learns your business" },
                                            { feature: "Setup Difficulty", perplexity: "Medium — prompt engineering needed", dooza: "None — free concierge onboarding" },
                                            { feature: "Price", perplexity: "$200/mo + credit uncertainty", dooza: "$29/mo — all employees, no caps" },
                                            { feature: "Credits/Limits", perplexity: "10,000 credits/mo (expire monthly)", dooza: "Unlimited — no credit system" },
                                            { feature: "Best For", perplexity: "AI researchers, developers, power users", dooza: "Business owners needing AI operations" }
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
                                Pricing: The Real Cost Comparison
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Perplexity Computer's pricing is straightforward but expensive. The Max plan costs $200/month and includes 10,000 credits. The catch? Credit consumption is unpredictable, and unused credits expire every month.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {/* Perplexity Max Individual */}
                                <div className="bg-cyan-50 border border-cyan-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-cyan-800 mb-1">Perplexity Max</h3>
                                    <p className="text-3xl font-bold text-cyan-600 mb-3">$200<span className="text-lg text-cyan-400">/mo</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "19 AI models included", good: true },
                                            { text: "10,000 credits/month", good: true },
                                            { text: "Credits expire monthly", good: false },
                                            { text: "Vague prompts burn credits fast", good: false }
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
                                    <h3 className="font-bold text-cyan-800 mb-1">Perplexity Enterprise</h3>
                                    <p className="text-3xl font-bold text-cyan-600 mb-3">$325<span className="text-lg text-cyan-400">/seat/mo</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "20 AI models", good: true },
                                            { text: "Compliance & audit logs", good: true },
                                            { text: "Per-seat pricing adds up fast", good: false },
                                            { text: "$3,900/year per user", good: false }
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
                                    <p className="text-3xl font-bold text-green-600 mb-3">$29<span className="text-lg text-green-400">/mo</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "All 6 AI employees included", good: true },
                                            { text: "No usage caps or credits", good: true },
                                            { text: "Runs 24/7 in the cloud", good: true },
                                            { text: "Free concierge onboarding", good: true }
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
                                    One month of Perplexity Computer ($200) buys you <strong className="text-white">nearly 7 months of Dooza</strong> — with 6 AI employees handling your email, social media, SEO, sales, legal, and phone calls around the clock. No credits to manage. No prompts to engineer. No watermarks on your content.
                                </p>
                            </div>
                        </section>

                        {/* Section 7: The Credit Trap */}
                        <section id="credit-trap" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <CreditCard className="w-8 h-8 text-red-600" />
                                The Perplexity Credit Trap (What Nobody Tells You)
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Perplexity Computer's credit system is the biggest hidden cost. Here's how it actually works — and why it matters.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    { title: "Simple research task", credits: "~30 credits", note: "Quick lookup, basic summary" },
                                    { title: "Multi-step research project", credits: "~200-500 credits", note: "Multiple model calls, web searches" },
                                    { title: "Code generation session", credits: "~500-2,000 credits", note: "Complex app building, debugging" },
                                    { title: "Full project (research → build → deploy)", credits: "~2,000-5,000+ credits", note: "Heavy multi-model orchestration" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-slate-50 border border-slate-200 p-4 rounded-xl">
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                                            <p className="text-xs text-slate-500">{item.note}</p>
                                        </div>
                                        <span className="text-lg font-bold text-red-600 whitespace-nowrap ml-4">{item.credits}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-8">
                                <h4 className="font-bold text-red-900 mb-3">The Math Doesn't Lie</h4>
                                <div className="space-y-2 text-sm text-red-800">
                                    <p>You get 10,000 credits/month on the $200 Max plan.</p>
                                    <p>If you run just <strong>3-4 complex projects per month</strong>, you could blow through your entire credit allowance.</p>
                                    <p>Auto-refill is off by default, but if you enable it, monthly spending can spike to $2,000.</p>
                                    <p className="font-bold">Meanwhile, Dooza's $29/month has no credits, no caps, and no surprises.</p>
                                </div>
                            </div>

                            <div className="my-8">
                                <YouTubeEmbed
                                    videoId="G24yFn0fBck"
                                    title="Perplexity Computer Review: Is the $200/Month AI Agent Worth It?"
                                />
                                <p className="text-sm text-slate-500 text-center mt-3">
                                    Watch: Is the $200/month Perplexity Computer AI agent actually worth it?
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
                                            "Are a developer or AI researcher who wants multi-model power",
                                            "Need deep research with real-time factual accuracy",
                                            "Want to build and deploy complex projects end-to-end",
                                            "Have $200/month to spend on AI tools",
                                            "Enjoy tinkering with prompts and optimizing AI workflows",
                                            "Need to use specific models (Claude for code, Gemini for writing)"
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
                                            "Want AI employees that work 24/7 without supervision",
                                            "Need an AI receptionist that answers phone calls",
                                            "Want set-and-forget automation, not research projects",
                                            "Need predictable pricing with no credit surprises",
                                            "Don't want to learn prompt engineering to get results"
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
                                    If you're a tech-savvy power user who wants to harness 19 AI models for ambitious projects, Perplexity Computer is genuinely impressive. If you're a business owner who needs AI running your operations while you focus on growth, <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Dooza is the smarter investment</Link> — at 1/7th the price.
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
                                    The smartest businesses don't choose one. They use Perplexity Computer for research and complex projects, and Dooza for daily operations. The industry calls it the "Triple Stack" approach — and it delivers 40% productivity gains.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        scenario: "Market Research",
                                        perplexity: "Use Computer to orchestrate deep competitive analysis across 19 models with real-time data",
                                        dooza: "Dooza's Ranky turns research into SEO blog posts and publishes them weekly on autopilot"
                                    },
                                    {
                                        scenario: "Product Launch",
                                        perplexity: "Computer builds landing pages, generates marketing copy, creates visual assets",
                                        dooza: "Somi distributes launch content across social platforms daily. Maily handles inbound inquiries. Rachel answers calls."
                                    },
                                    {
                                        scenario: "Lead Generation",
                                        perplexity: "Computer researches prospects, analyzes market data, builds targeted lists",
                                        dooza: "Stan sends automated outreach, qualifies leads, and books meetings on your calendar 24/7"
                                    },
                                    {
                                        scenario: "After Hours",
                                        perplexity: "Computer pauses — credits stop burning when you're not using it",
                                        dooza: "Dooza keeps working — answering calls, replying to emails, posting content, nurturing leads"
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
                                    Perplexity Computer is the most technically ambitious AI agent platform on the market. Coordinating 19 models, persistent memory, 400+ integrations — it's an engineering marvel. For AI researchers, developers, and power users, it's a dream tool.
                                </p>
                                <p>
                                    But for <strong>business operations</strong> — the kind of work that needs to happen every day, on schedule, without human intervention — Dooza delivers more value at a fraction of the cost.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-primary-50 to-green-50 border-2 border-primary-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 text-xl mb-4">Why Businesses Choose Dooza Over Perplexity Computer</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: DollarSign, text: "$29/mo vs $200/mo — 7x cheaper, no credit anxiety" },
                                        { icon: Users, text: "6 specialized AI employees, not one general agent" },
                                        { icon: Phone, text: "AI phone answering — Perplexity can't do this" },
                                        { icon: Repeat, text: "Always-on operations — no prompt required" },
                                        { icon: HeartHandshake, text: "Free concierge onboarding — we set it up for you" },
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
                                    Start Free with Dooza
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a
                                    href={CAL_BOOKING_URL}
                                    onClick={handleAction}
                                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg border-2 border-primary-200 hover:border-primary-400 transition-all"
                                >
                                    Book a Free Demo
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
