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
    CreditCard,
    Terminal,
    Puzzle,
    MousePointer
} from 'lucide-react';

const faqData = [
    {
        question: "What is Tasklet AI?",
        answer: "Tasklet AI is a general-purpose AI automation platform built by the team behind Shortwave (founded by Andrew Lee, co-founder of Firebase). It lets you describe workflows in plain English, and an AI agent sets up integrations, triggers, and automations that run 24/7 in the cloud. It connects to thousands of apps and supports scheduled, email-based, and webhook-based triggers."
    },
    {
        question: "How much does Tasklet AI cost?",
        answer: "Tasklet AI offers a free tier for basic usage, with paid plans starting at $35/month. Higher tiers at $100/month and $250/month include more usage, computer use capabilities, and access to smarter models. Dooza starts at $29/month with all 6 AI employees included and no usage caps."
    },
    {
        question: "Is Tasklet AI better than Dooza for business?",
        answer: "They solve different problems. Tasklet is a blank-canvas automation platform where you design each workflow from scratch using plain English prompts. Dooza gives you pre-built AI employees that handle specific business functions — email, social media, SEO, sales, legal, and phone calls — autonomously from day one. For business owners who want operations handled immediately, Dooza is more practical."
    },
    {
        question: "Can Tasklet AI answer phone calls?",
        answer: "No. Tasklet AI is a workflow automation agent — it connects to digital apps and APIs but cannot make or receive phone calls. Dooza includes Rachel, an AI receptionist that answers phone calls, books appointments, and handles customer inquiries 24/7."
    },
    {
        question: "Does Tasklet AI post to social media automatically?",
        answer: "Tasklet can be configured to post to social media via integrations, but you need to design the workflow yourself — write the prompt, configure triggers, and test the automation. Dooza's Somi is a purpose-built social media employee that creates and publishes content daily across all platforms without any setup from you."
    },
    {
        question: "Can I use both Tasklet AI and Dooza?",
        answer: "Yes. Power users use Tasklet for custom, niche automations (like monitoring Hacker News or syncing obscure APIs) and Dooza for core business operations — email, social media, SEO, sales, and phone calls. They complement each other well."
    },
    {
        question: "Does Dooza require technical skills to set up?",
        answer: "Zero technical skills required. Dooza includes free concierge onboarding — our team configures your AI employees for your business in a 30-minute call. Tasklet requires you to write prompts describing your workflows and troubleshoot when the AI misinterprets your instructions."
    }
];

export default function TaskletVsDoozaContent() {
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
            const sections = ['introduction', 'what-is-tasklet', 'what-is-dooza', 'core-difference', 'side-by-side', 'pricing-breakdown', 'prompt-problem', 'who-should-use-what', 'can-you-use-both', 'verdict', 'faq'];
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
            <div className="bg-gradient-to-br from-primary-50 via-white to-violet-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Tasklet vs Dooza' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Tasklet vs Dooza: <span className="text-primary-600">DIY Automation</span> or Ready-Made AI Employees?
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Tasklet lets you build AI automations from scratch with plain English. Dooza gives you 6 AI employees that run your business from day one. One requires assembly. The other is plug-and-play. Here's the honest breakdown.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 21, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/tasklet-vs-dooza.png"
                                alt="Tasklet vs Dooza comparison — DIY AI automation platform versus pre-built AI employees for business operations"
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
                                videoId="ILMVUSJDF40"
                                title="How Tasklet Puts the Agency in Agents — CEO Andrew Lee Interview"
                            />
                            <p className="text-sm text-slate-500 text-center mt-3">
                                Watch: How Tasklet AI works — CEO Andrew Lee explains the vision
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
                                    { id: 'what-is-tasklet', label: 'What Is Tasklet?' },
                                    { id: 'what-is-dooza', label: 'What Is Dooza?' },
                                    { id: 'core-difference', label: 'The Core Difference' },
                                    { id: 'side-by-side', label: 'Side-by-Side Comparison' },
                                    { id: 'pricing-breakdown', label: 'Pricing Breakdown' },
                                    { id: 'prompt-problem', label: 'The Prompt Problem' },
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
                                <InternalLinks currentSlug="tasklet-vs-dooza" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Tasklet AI is making waves. Built by the team behind Shortwave (and Firebase before that), it promises to be "IFTTT for the Agentic Age" — describe what you want automated in plain English, and an AI agent builds the workflow, connects your tools, and runs it 24/7.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    That pitch is compelling. But here's the question that matters: <strong>do you want to build automations from scratch, or do you want AI employees that already know their job?</strong>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Tasklet is a blank canvas. You describe every workflow, configure every trigger, and troubleshoot when the AI misreads your intent. <Link href="/blog/ai-employees-transforming-small-business" className="text-primary-600 hover:underline font-medium">Dooza's AI employees</Link> are purpose-built specialists — email, social media, SEO, sales, legal, and phone calls — that run your business from the moment you sign up.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    One is a tool. The other is a team. Pick the wrong one, and you'll spend weeks building what should have taken minutes.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This is the no-fluff comparison. Let's break it down.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: What Is Tasklet? */}
                        <section id="what-is-tasklet" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Terminal className="w-8 h-8 text-violet-600" />
                                What Is Tasklet AI?
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Tasklet AI launched in late 2025 as a Y Combinator-backed AI automation platform. The founder, <strong>Andrew Lee</strong>, previously co-founded Firebase (acquired by Google) and built the Shortwave email client. The company is backed by Union Square Ventures and Lightspeed, and has crossed $5M ARR.
                                </p>
                                <p>
                                    The core idea: <strong>you describe a workflow in plain English, and Tasklet's AI agent figures out how to connect your tools, set triggers, and run the automation autonomously.</strong> Think of it as a natural-language layer on top of Zapier — except instead of clicking through flowcharts, you just tell the AI what you want.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: MessageSquare, title: "Plain English Setup", desc: "Describe workflows in natural language" },
                                    { icon: Puzzle, title: "1,000+ Integrations", desc: "Gmail, Slack, Notion, HubSpot, etc." },
                                    { icon: MousePointer, title: "Computer Use", desc: "Controls a browser for any web task" },
                                    { icon: Monitor, title: "VM Sandbox", desc: "Linux VM for file processing & code" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-violet-50 border border-violet-200 p-4 rounded-xl text-center">
                                        <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600 mx-auto mb-2">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                                        <p className="text-xs text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">What Tasklet Does Well</h3>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Natural language workflow creation — no coding or flowcharts needed",
                                    "Thousands of pre-built integrations with popular business tools",
                                    "Computer use — can control a browser to interact with any web service",
                                    "VM sandbox — each agent gets a Linux VM for file processing and data analysis",
                                    "Multiple trigger types — scheduled, email-based, webhook-based",
                                    "Autonomous error handling — retries and adapts to edge cases",
                                    "Pre-built templates for common automation patterns"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">Where Tasklet Falls Short</h3>
                            <div className="space-y-3 mb-8">
                                {[
                                    "You must design every workflow from scratch — nothing works out of the box",
                                    "AI misinterpretation — complex prompts often get misread, requiring iteration",
                                    "Prompt crafting learning curve — 'plain English' still needs practice to get right",
                                    "No phone call capability — cannot make or receive phone calls",
                                    "No purpose-built roles — every automation is a custom project",
                                    "Limited enterprise features — unclear SSO, RBAC, and compliance certifications",
                                    "Integration depth varies — some complex platforms have shallow connections",
                                    "Early-stage product — launched late 2025, still evolving rapidly"
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
                                    videoId="S9KpPm-vdmw"
                                    title="Agentic AI Automations & Tips — Tasklet AI Tutorial + Practical Examples"
                                />
                                <p className="text-sm text-slate-500 text-center mt-3">
                                    Watch: Tasklet AI tutorial — agentic automation setup and practical examples
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 border-l-4 p-6 rounded-r-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-amber-900 mb-1">The DIY Problem</h4>
                                        <p className="text-amber-800 text-sm">
                                            Tasklet's promise of "describe it in English and it works" sounds simple. In practice, users report spending hours crafting and refining prompts before automations work reliably. Complex instructions get misinterpreted. Edge cases break flows. You're essentially becoming a prompt engineer — for every single business process you want automated.
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
                                    Dooza is a platform of <strong>purpose-built AI employees</strong> that handle specific business functions autonomously. Not a blank-canvas automation tool. Not a prompt-and-pray workflow builder. <Link href="/blog/ai-employees-vs-virtual-assistants" className="text-primary-600 hover:underline font-medium">Dedicated AI employees</Link> with defined roles, responsibilities, and daily routines.
                                </p>
                                <p>
                                    Each AI employee runs in the cloud 24/7. They don't need prompts. They don't need workflow diagrams. They wake up, do their job, and report back — like a real employee who never calls in sick.
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
                                            Dooza's AI employees don't wait for you to write prompts. They have defined roles, scheduled routines, and autonomous decision-making. Somi posts your social media at 9am whether you're awake or not. Rachel answers calls at 2am. Ranky publishes SEO content every week. <strong>They work like employees, not automations you need to build.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 4: Core Difference */}
                        <section id="core-difference" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Layers className="w-8 h-8 text-blue-600" />
                                The Core Difference: Automation Builder vs AI Workforce
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This is what most comparison articles miss. Tasklet and Dooza aren't competing — they represent two fundamentally different philosophies of AI for business. One gives you a <strong>blank canvas and a paintbrush</strong>. The other gives you a <strong>fully trained team</strong>.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* Tasklet */}
                                <div className="bg-violet-50 border-2 border-violet-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-violet-800 mb-4 flex items-center gap-2 text-lg">
                                        <Terminal className="w-5 h-5" />
                                        Tasklet = DIY Automation Builder
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "You describe every workflow in plain English",
                                            "AI builds the automation from your description",
                                            "General-purpose — can automate anything (in theory)",
                                            "Requires prompt crafting and iteration",
                                            "Best for: developers and automation enthusiasts",
                                            "Model: reactive — you design, AI executes",
                                            "Time to value: hours to days per workflow"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 bg-violet-400 rounded-full shrink-0 mt-2"></div>
                                                <span className="text-sm text-slate-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dooza */}
                                <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl ring-2 ring-green-400 ring-offset-2">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2 text-lg">
                                        <Bot className="w-5 h-5" />
                                        Dooza = Ready-Made AI Workforce
                                    </h3>
                                    <div className="space-y-3">
                                        {[
                                            "AI employees have defined roles & daily routines",
                                            "Purpose-built for core business operations",
                                            "Works for any business — no customization needed",
                                            "Zero learning curve — we configure everything",
                                            "Best for: business owners who want results now",
                                            "Model: proactive — employees execute on schedule, 24/7",
                                            "Time to value: 30 minutes (free onboarding call)"
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
                                    Tasklet is like buying a robotics kit with the promise that "anyone can build a robot." It's powerful — but you're still the one assembling, programming, and debugging. Dooza is like hiring six full-time employees who show up trained, know their job, and start working today. <strong>One gives you potential. The other gives you results.</strong>
                                </p>
                            </div>
                        </section>

                        {/* Section 5: Side-by-Side */}
                        <section id="side-by-side" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Tasklet vs Dooza: Side-by-Side</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-violet-700 bg-violet-50">Tasklet</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Dooza</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Type", tasklet: "AI automation builder", dooza: "AI employee platform" },
                                            { feature: "Setup Approach", tasklet: "Write prompts for each workflow", dooza: "Pre-built employees — ready to work" },
                                            { feature: "Learning Curve", tasklet: "Medium — prompt crafting required", dooza: "None — free concierge onboarding" },
                                            { feature: "Runs On", tasklet: "Cloud (24/7)", dooza: "Cloud (24/7)" },
                                            { feature: "Phone Calls", tasklet: "Not supported", dooza: "AI receptionist (Rachel)" },
                                            { feature: "Social Media", tasklet: "Build your own automation", dooza: "Automated daily posting (Somi)" },
                                            { feature: "Email Management", tasklet: "Build your own automation", dooza: "Full automation (Maily)" },
                                            { feature: "SEO Content", tasklet: "Build your own automation", dooza: "Full pipeline (Ranky)" },
                                            { feature: "Sales Outreach", tasklet: "Build your own automation", dooza: "Automated pipeline (Stan)" },
                                            { feature: "Legal Review", tasklet: "Not built-in", dooza: "Contract review (Linda)" },
                                            { feature: "Computer Use", tasklet: "Browser control (paid tiers)", dooza: "Not needed — purpose-built agents" },
                                            { feature: "VM Sandbox", tasklet: "Linux VM per agent", dooza: "Cloud-native — no VM needed" },
                                            { feature: "Integrations", tasklet: "1,000+ apps", dooza: "1,000+ via Zapier" },
                                            { feature: "Triggers", tasklet: "Scheduled, email, webhook", dooza: "Built-in cron scheduling" },
                                            { feature: "Error Handling", tasklet: "AI-managed (retries + adapts)", dooza: "Handled by purpose-built employees" },
                                            { feature: "Starting Price", tasklet: "Free tier, then $35/mo", dooza: "$29/mo — all employees included" },
                                            { feature: "Best For", tasklet: "Developers & automation tinkerers", dooza: "Business owners needing AI operations" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600 bg-violet-50/30">{row.tasklet}</td>
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
                                    Tasklet offers a free tier to get started, but the real power (computer use, smarter models, higher limits) is locked behind paid plans that scale quickly. Here's how the pricing actually stacks up.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-4 gap-4 mb-8">
                                {/* Tasklet Free */}
                                <div className="bg-violet-50 border border-violet-200 p-5 rounded-xl">
                                    <h3 className="font-bold text-violet-800 mb-1 text-sm">Tasklet Free</h3>
                                    <p className="text-2xl font-bold text-violet-600 mb-3">$0<span className="text-sm text-violet-400">/mo</span></p>
                                    <div className="space-y-2 text-xs">
                                        {[
                                            { text: "Basic automations", good: true },
                                            { text: "Limited runs/month", good: false },
                                            { text: "No computer use", good: false },
                                            { text: "No VM sandbox", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> : <XCircle className="w-3.5 h-3.5 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tasklet Pro */}
                                <div className="bg-violet-50 border border-violet-200 p-5 rounded-xl">
                                    <h3 className="font-bold text-violet-800 mb-1 text-sm">Tasklet Pro</h3>
                                    <p className="text-2xl font-bold text-violet-600 mb-3">$35<span className="text-sm text-violet-400">/mo</span></p>
                                    <div className="space-y-2 text-xs">
                                        {[
                                            { text: "More automation runs", good: true },
                                            { text: "Computer use included", good: true },
                                            { text: "Still requires prompting", good: false },
                                            { text: "No phone calls", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> : <XCircle className="w-3.5 h-3.5 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tasklet Business */}
                                <div className="bg-violet-50 border border-violet-200 p-5 rounded-xl">
                                    <h3 className="font-bold text-violet-800 mb-1 text-sm">Tasklet Business</h3>
                                    <p className="text-2xl font-bold text-violet-600 mb-3">$100-250<span className="text-sm text-violet-400">/mo</span></p>
                                    <div className="space-y-2 text-xs">
                                        {[
                                            { text: "Higher limits", good: true },
                                            { text: "Smarter models", good: true },
                                            { text: "Still DIY setup", good: false },
                                            { text: "Expensive at scale", good: false }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                {item.good ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> : <XCircle className="w-3.5 h-3.5 text-red-400" />}
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dooza */}
                                <div className="bg-green-50 border-2 border-green-300 p-5 rounded-xl ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-xs font-bold text-green-700 bg-green-200 px-2 py-0.5 rounded-full w-fit mb-2">BEST VALUE</div>
                                    <h3 className="font-bold text-green-800 mb-1 text-sm">Dooza</h3>
                                    <p className="text-2xl font-bold text-green-600 mb-3">$29<span className="text-sm text-green-400">/mo</span></p>
                                    <div className="space-y-2 text-xs">
                                        {[
                                            { text: "All 6 AI employees", good: true },
                                            { text: "No usage caps", good: true },
                                            { text: "Free onboarding", good: true },
                                            { text: "Phone calls included", good: true }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                                <span className="text-slate-700">{item.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl">
                                <p className="text-lg font-bold mb-2">The bottom line:</p>
                                <p className="text-slate-300">
                                    Tasklet's free tier is limited. By the time you need real automation power, you're paying $35-$250/month — and you still have to build, test, and maintain every workflow yourself. Dooza gives you <strong className="text-white">6 AI employees handling email, social media, SEO, sales, legal, and phone calls</strong> — all configured for your business in a 30-minute onboarding call — for $29/month. No building. No debugging. No prompt engineering.
                                </p>
                            </div>
                        </section>

                        {/* Section 7: The Prompt Problem */}
                        <section id="prompt-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <AlertTriangle className="w-8 h-8 text-amber-600" />
                                The Prompt Problem (What Nobody Tells You About Tasklet)
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Tasklet's biggest selling point — "describe it in plain English" — is also its biggest hidden cost. Here's what actually happens when you try to automate your business one prompt at a time.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    { title: "Email management automation", time: "2-4 hours to set up", note: "Multiple prompts, trigger configuration, testing edge cases" },
                                    { title: "Social media posting schedule", time: "3-5 hours to set up", note: "Content generation prompts, platform connections, format tuning" },
                                    { title: "SEO content pipeline", time: "4-8 hours to set up", note: "Keyword research, content creation, publishing flow, quality checks" },
                                    { title: "Sales outreach automation", time: "3-6 hours to set up", note: "Lead data sources, message personalization, follow-up sequences" },
                                    { title: "Ongoing maintenance per workflow", time: "1-2 hours/week", note: "Fixing misinterpretations, updating prompts, handling failures" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-slate-50 border border-slate-200 p-4 rounded-xl">
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                                            <p className="text-xs text-slate-500">{item.note}</p>
                                        </div>
                                        <span className="text-lg font-bold text-amber-600 whitespace-nowrap ml-4">{item.time}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-8">
                                <h4 className="font-bold text-red-900 mb-3">The Hidden Time Tax</h4>
                                <div className="space-y-2 text-sm text-red-800">
                                    <p>To replicate what Dooza does out of the box, you'd need to build <strong>at least 5 separate Tasklet automations</strong> — email, social media, SEO, sales, and lead management.</p>
                                    <p>That's <strong>15-30+ hours of setup</strong> just to get started, plus ongoing maintenance every week.</p>
                                    <p>And you still can't replicate Rachel answering your phone calls — because Tasklet can't do that.</p>
                                    <p className="font-bold">With Dooza, all 6 AI employees are configured in a 30-minute onboarding call. Zero prompting. Zero maintenance.</p>
                                </div>
                            </div>

                            <div className="my-8">
                                <YouTubeEmbed
                                    videoId="BN1Bqmgb-IA"
                                    title="The BEST OpenClaw Alternative in 2026? Tasklet AI Full Review"
                                />
                                <p className="text-sm text-slate-500 text-center mt-3">
                                    Watch: Full review of Tasklet AI — is it the best automation platform in 2026?
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
                                {/* Use Tasklet */}
                                <div className="border border-violet-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-violet-700 mb-4 text-lg">Use Tasklet if you...</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Love building automations and tinkering with AI workflows",
                                            "Have unique, niche automation needs that don't fit pre-built solutions",
                                            "Want to connect obscure APIs or monitor specific data sources",
                                            "Are comfortable writing and iterating on prompts",
                                            "Need computer use — browser control for web scraping or form filling",
                                            "Enjoy the process of designing workflows from scratch"
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2">
                                                <Terminal className="w-4 h-4 text-violet-500 shrink-0 mt-1" />
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
                                            "Run a business and need AI handling daily operations now",
                                            "Want email, social media, SEO, and sales running on autopilot",
                                            "Need an AI receptionist that answers phone calls 24/7",
                                            "Don't want to learn prompt engineering to get results",
                                            "Value predictable pricing with no usage surprises",
                                            "Want a team of AI employees, not a toolkit to build with"
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
                                    If you're a developer or automation enthusiast who gets a kick out of designing AI workflows, Tasklet is genuinely fun and powerful. If you're a business owner who needs results — not projects — <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Dooza is the smarter investment</Link>. Your AI employees start working today, not after hours of prompt crafting.
                                </p>
                            </div>
                        </section>

                        {/* Section 9: Can You Use Both? */}
                        <section id="can-you-use-both" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Workflow className="w-8 h-8 text-primary-600" />
                                Can You Use Both? (Yes — Here's the Smart Stack)
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The smartest businesses don't choose one. They use Dooza for core business operations and Tasklet for custom, niche automations that Dooza doesn't cover. Here's how that looks in practice.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        scenario: "Daily Operations",
                                        tasklet: "Custom monitoring: track Hacker News mentions, sync niche APIs",
                                        dooza: "Maily handles email. Somi posts social content. Rachel answers calls."
                                    },
                                    {
                                        scenario: "Marketing & SEO",
                                        tasklet: "Scrape competitor pricing, monitor review sites, aggregate market data",
                                        dooza: "Ranky publishes SEO blog posts weekly. Somi distributes across social platforms."
                                    },
                                    {
                                        scenario: "Sales Pipeline",
                                        tasklet: "Custom lead enrichment from obscure databases, webhook triggers",
                                        dooza: "Stan qualifies leads, sends outreach, and books meetings on your calendar 24/7."
                                    },
                                    {
                                        scenario: "After Hours",
                                        tasklet: "Scheduled reports, data processing in VM sandbox",
                                        dooza: "Rachel answers calls. Maily replies to emails. Somi posts scheduled content. Stan nurtures leads."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                                        <div className="bg-slate-100 px-5 py-3">
                                            <h4 className="font-bold text-slate-900">{item.scenario}</h4>
                                        </div>
                                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                            <div className="p-4">
                                                <span className="text-xs font-semibold text-violet-600 uppercase">Tasklet</span>
                                                <p className="text-sm text-slate-600 mt-1">{item.tasklet}</p>
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
                                    Tasklet is a genuinely innovative automation platform. The Firebase pedigree, YC backing, and "IFTTT for the Agentic Age" vision are compelling. For developers and automation enthusiasts, it's a playground.
                                </p>
                                <p>
                                    But for <strong>business operations</strong> — the kind of work that needs to happen every day, on schedule, without human intervention — Dooza delivers more value, faster, at a lower price point.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-primary-50 to-green-50 border-2 border-primary-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 text-xl mb-4">Why Businesses Choose Dooza Over Tasklet</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: DollarSign, text: "$29/mo for 6 AI employees — cheaper than Tasklet's Pro plan" },
                                        { icon: Users, text: "Purpose-built employees vs DIY automations" },
                                        { icon: Phone, text: "AI phone answering — Tasklet can't do this" },
                                        { icon: Repeat, text: "Works from day one — no prompt crafting required" },
                                        { icon: HeartHandshake, text: "Free concierge onboarding — we set it up for you" },
                                        { icon: Timer, text: "30-minute setup vs 15-30+ hours of DIY building" }
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
                                <h3 className="font-bold text-slate-900 mb-4 text-center">Top AI Automation Tools for Business in 2026</h3>
                                <YouTubeEmbed
                                    videoId="5sPhgU29oyo"
                                    title="I Tried 536+ AI Tools, These 7 Will Explode Your Business in 2026"
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

            <RelatedPosts category="Comparison" tags={['Tasklet', 'AI Agents', 'AI Employees', 'Comparison']} currentSlug="tasklet-vs-dooza" />
            <BottomCTA />
            <Footer />

            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
