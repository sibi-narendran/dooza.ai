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
    Repeat
} from 'lucide-react';

const faqData = [
    {
        question: "What is Claude Cowork?",
        answer: "Claude Cowork is Anthropic's desktop AI agent that runs on your computer, connects to local files and apps, and completes multi-step tasks like organizing spreadsheets, drafting emails, and browsing the web. It's available on Claude Pro ($20/month) and Max ($100-200/month) plans."
    },
    {
        question: "How is Dooza different from Claude Cowork?",
        answer: "Dooza provides purpose-built AI employees that run autonomously 24/7 — handling email, social media, SEO, sales, and phone calls without your involvement. Claude Cowork is a general-purpose desktop assistant that requires your computer to be on and you to assign each task. Dooza is set-and-forget; Cowork is hands-on."
    },
    {
        question: "Can Claude Cowork run tasks while I sleep?",
        answer: "Not reliably. If your computer goes to sleep or the Claude desktop app closes, all running tasks stop — including scheduled ones. Dooza's AI employees run on cloud infrastructure 24/7, regardless of whether your device is on."
    },
    {
        question: "Which is cheaper — Claude Cowork or Dooza?",
        answer: "Dooza starts at $29/month for all AI employees with no usage caps. Claude Cowork's Pro plan ($20/month) has strict usage limits that run out fast during complex tasks. For meaningful Cowork usage, you need the Max plan at $100-200/month — 3x to 7x the cost of Dooza."
    },
    {
        question: "Does Claude Cowork handle phone calls or customer support?",
        answer: "No. Claude Cowork is a desktop agent — it works with files, browsers, and apps on your computer. Dooza includes Rachel, an AI receptionist that answers phone calls, books appointments, and handles customer inquiries 24/7."
    },
    {
        question: "Can I use both Claude Cowork and Dooza?",
        answer: "Absolutely. Many businesses use Claude Cowork for ad-hoc desktop tasks (organizing files, research, document drafting) and Dooza for always-on business operations (email automation, social media posting, SEO, sales outreach, phone answering). They complement each other well."
    },
    {
        question: "Does Dooza require technical skills?",
        answer: "Zero technical skills required. Dooza includes free concierge onboarding — our team configures your AI employees for your business in a 30-minute call. Claude Cowork also doesn't require coding, but you do need to manage tasks manually and troubleshoot when things break."
    }
];

export default function ClaudeCoworkVsDoozaContent() {
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
                            Claude Cowork vs Dooza: <span className="text-primary-600">Desktop Assistant</span> vs AI Employees
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Claude Cowork is a powerful desktop agent. Dooza gives you an entire AI workforce. One requires your laptop open. The other works while you sleep. Here's the honest breakdown.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 14, 2026</span>
                            </div>
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
                                    Anthropic's Claude Cowork is making waves. It turns Claude into a desktop agent that can open apps, browse the web, organize files, and complete multi-step tasks on your computer. It's impressive technology.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    But here's the question nobody's asking: <strong>is a desktop assistant the same thing as an AI employee?</strong>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The answer is no. And understanding the difference could save your business thousands of dollars and hundreds of hours.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Claude Cowork is a brilliant tool for individual productivity. <Link href="/blog/ai-employees-transforming-small-business" className="text-primary-600 hover:underline font-medium">Dooza's AI employees</Link> are built for business operations. They're solving different problems — and if you pick the wrong one, you'll feel the pain within a week.
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
                                    Claude Cowork launched in January 2026 as Anthropic's agentic AI for knowledge work. It's essentially <strong>Claude Code for non-technical users</strong> — running on your desktop, working with your local files, and completing tasks through your browser and apps.
                                </p>
                                <p>
                                    Think of it as a very smart intern sitting at your computer. You tell it what to do, and it opens apps, clicks buttons, fills spreadsheets, and browses the web to get it done.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Monitor, title: "Desktop Agent", desc: "Runs on your Mac or Windows computer" },
                                    { icon: FileText, title: "File Access", desc: "Works with your local files and documents" },
                                    { icon: Globe, title: "Web Browsing", desc: "Opens browsers and navigates websites" },
                                    { icon: Timer, title: "Scheduled Tasks", desc: "Can run tasks on a schedule (if PC is on)" }
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
                                    "Automating repetitive desktop workflows",
                                    "Connecting to Google Drive, Gmail, and other apps via MCP connectors"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">Where Claude Cowork Falls Short</h3>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Stops working if your computer sleeps or the app closes",
                                    "No memory between sessions — starts fresh every conversation",
                                    "External connectors (Gmail, Drive) are unreliable according to user reviews",
                                    "Heavy tasks burn through usage limits fast ($20 plan runs out quickly)",
                                    "Cannot make or answer phone calls",
                                    "Cannot post to social media autonomously on a schedule",
                                    "Not designed for multi-tenant business operations",
                                    "Prompt injection risks — malicious files could cause unintended actions"
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
                                        <h4 className="font-bold text-amber-900 mb-1">The Laptop Problem</h4>
                                        <p className="text-amber-800 text-sm">
                                            Claude Cowork is tethered to your device. Close your laptop, and your "AI assistant" goes to sleep too. That's fine for personal productivity. It's a dealbreaker for business operations that need to run 24/7.
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
                                    Dooza is a platform of <strong>purpose-built AI employees</strong> that handle specific business functions autonomously. Not a general-purpose chatbot. Not a desktop assistant. <Link href="/blog/ai-employees-vs-virtual-assistants" className="text-primary-600 hover:underline font-medium">Dedicated AI employees</Link> with defined roles, responsibilities, and workflows.
                                </p>
                                <p>
                                    Each AI employee runs in the cloud 24/7. They don't need your computer. They don't need you to assign tasks. They wake up, do their job, and report back — just like a real employee.
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
                                            Dooza's AI employees don't wait for instructions. They have defined roles, scheduled routines, and autonomous decision-making. Somi posts your social media at 9am whether you're awake or not. Rachel answers calls at 2am. Ranky publishes SEO content every week. <strong>They work like employees, not assistants.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: The Core Difference */}
                        <section id="core-difference" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Layers className="w-8 h-8 text-blue-600" />
                                The Core Difference: Assistant vs Employee
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This is the most important distinction most comparison articles miss. Claude Cowork and Dooza aren't competing — they're solving fundamentally different problems.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Claude Cowork */}
                                <div className="bg-purple-50 border-2 border-purple-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-purple-800 mb-4 flex items-center gap-2 text-lg">
                                        <Laptop className="w-5 h-5" />
                                        Claude Cowork = Assistant
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "You assign every task manually",
                                            "It uses YOUR computer to work",
                                            "Stops when your laptop closes",
                                            "No memory between conversations",
                                            "General-purpose — does everything okay",
                                            "Best for: individual knowledge workers",
                                            "Model: reactive — waits for instructions"
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
                                        Dooza = Employee
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "AI employees have defined roles & routines",
                                            "Runs on cloud infrastructure 24/7",
                                            "Works while you sleep, travel, or vacation",
                                            "Persistent memory — learns your business",
                                            "Purpose-built — each employee excels at one job",
                                            "Best for: businesses needing autonomous operations",
                                            "Model: proactive — executes on schedule"
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
                                    Claude Cowork is like having a brilliant temp who sits at your desk and does whatever you ask — but only while you're watching. Dooza is like hiring six full-time specialists who show up every day, know their job, and don't need supervision. <strong>One saves you time. The other saves you headcount.</strong>
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Side-by-Side Comparison */}
                        <section id="side-by-side" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Claude Cowork vs Dooza: Side-by-Side</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-purple-700 bg-purple-50">Claude Cowork</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Dooza</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Type", cowork: "Desktop AI assistant", dooza: "AI employee platform" },
                                            { feature: "Runs On", cowork: "Your computer (Mac/Windows)", dooza: "Cloud — works 24/7" },
                                            { feature: "Works When PC Off?", cowork: "No — stops completely", dooza: "Yes — always running" },
                                            { feature: "Memory Between Sessions", cowork: "No — starts fresh each time", dooza: "Yes — persistent memory" },
                                            { feature: "Phone Calls", cowork: "Not supported", dooza: "AI receptionist (Rachel)" },
                                            { feature: "Social Media Posting", cowork: "Manual — you guide each post", dooza: "Automated — scheduled posting" },
                                            { feature: "Email Management", cowork: "Can draft (connector unreliable)", dooza: "Full automation (Maily)" },
                                            { feature: "SEO Content", cowork: "Can research & draft", dooza: "Full pipeline (Ranky)" },
                                            { feature: "Sales Outreach", cowork: "Manual assistance", dooza: "Automated pipeline (Stan)" },
                                            { feature: "Cron/Scheduling", cowork: "Limited (requires PC on)", dooza: "Built-in, cloud-based" },
                                            { feature: "Setup Time", cowork: "Download app, connect accounts", dooza: "30 min (free onboarding call)" },
                                            { feature: "Technical Skill", cowork: "Low (but you manage tasks)", dooza: "None (we configure everything)" },
                                            { feature: "Starting Price", cowork: "$20/mo (limited usage)", dooza: "$29/mo (all employees, no caps)" },
                                            { feature: "Full Usage Price", cowork: "$100-200/mo (Max plan)", dooza: "$29/mo" },
                                            { feature: "Best For", cowork: "Individual knowledge workers", dooza: "Businesses needing AI operations" }
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
                                Pricing: The Real Cost Comparison
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Claude Cowork's pricing is deceptively complex. The $20/month Pro plan <em>sounds</em> affordable, but Cowork tasks consume tokens 3-5x faster than regular Claude chat. Most users report hitting limits within hours of heavy use.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {/* Claude Pro */}
                                <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-purple-800 mb-1">Claude Pro</h3>
                                    <p className="text-3xl font-bold text-purple-600 mb-3">$20<span className="text-lg text-purple-400">/mo</span></p>
                                    <div className="space-y-2 text-sm">
                                        {[
                                            { text: "Cowork access included", good: true },
                                            { text: "Strict usage limits", good: false },
                                            { text: "Runs out fast on complex tasks", good: false },
                                            { text: "Resets every 5 hours", good: false }
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
                                            { text: "Still usage-capped", good: false },
                                            { text: "3x-7x the cost of Dooza", good: false }
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
                                            { text: "No usage caps", good: true },
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
                                    For the price of Claude Cowork's Max plan ($200/month), you could run <strong className="text-white">6+ months of Dooza</strong> — with 6 AI employees working around the clock, no usage caps, and zero dependency on your laptop being open. The math doesn't lie.
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
                                            "Are an individual knowledge worker (analyst, researcher, writer)",
                                            "Need help with ad-hoc desktop tasks (file cleanup, data analysis)",
                                            "Want an AI that works with your local files and apps",
                                            "Already pay for Claude Pro or Max",
                                            "Don't need 24/7 autonomous operations",
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
                                    <h3 className="font-bold text-green-700 mb-4 text-lg">Use Dooza if you...</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Run a business that needs AI handling emails, social, SEO, and sales",
                                            "Want AI employees that work 24/7 without supervision",
                                            "Need an AI receptionist that answers phone calls",
                                            "Want set-and-forget automation, not task-by-task assistance",
                                            "Need consistent output without usage caps or token limits",
                                            "Don't want to keep your laptop open for AI to work"
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
                                    If you're a freelancer or solo knowledge worker who needs help with spreadsheets and research, Claude Cowork is excellent. If you're a business owner who needs AI handling your operations while you focus on growth, <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Dooza is the answer</Link>.
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
                                        cowork: "Claude Cowork organizes your inbox, summarizes key documents, and prepares your daily brief",
                                        dooza: "Dooza's Maily has already replied to customer emails at 6am. Somi posted your social content at 8am. Rachel has been answering calls since midnight."
                                    },
                                    {
                                        scenario: "Content Production",
                                        cowork: "Use Cowork to research competitors, analyze data, and draft a strategy document on your desktop",
                                        dooza: "Dooza's Ranky writes and publishes SEO blog posts weekly. Somi turns them into social media content automatically."
                                    },
                                    {
                                        scenario: "Sales & Lead Gen",
                                        cowork: "Use Cowork to build prospect lists and analyze CRM data in your spreadsheets",
                                        dooza: "Dooza's Stan sends automated outreach, qualifies leads, and books meetings on your calendar 24/7."
                                    },
                                    {
                                        scenario: "End of Day",
                                        cowork: "You close your laptop. Claude Cowork stops.",
                                        dooza: "Dooza keeps working — answering calls, monitoring reviews, sending follow-ups, posting content."
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
                                                <span className="text-xs font-semibold text-green-600 uppercase">Dooza</span>
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
                                    Claude Cowork is an impressive piece of technology. Anthropic is pushing the boundaries of what desktop AI agents can do, and for individual productivity, it's genuinely useful.
                                </p>
                                <p>
                                    But for <strong>business operations</strong> — the kind of work that needs to happen 24/7 whether you're at your desk or not — Dooza is in a different league.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-primary-50 to-green-50 border-2 border-primary-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 text-xl mb-4">Why Businesses Choose Dooza</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: Repeat, text: "Always-on operations — no laptop dependency" },
                                        { icon: Users, text: "6 specialized AI employees, not one generalist" },
                                        { icon: Phone, text: "AI phone answering — Cowork can't do this" },
                                        { icon: DollarSign, text: "$29/mo flat — no usage caps or surprises" },
                                        { icon: HeartHandshake, text: "Free concierge onboarding — we set it up for you" },
                                        { icon: Brain, text: "Persistent memory — your AI learns your business" }
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

            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
