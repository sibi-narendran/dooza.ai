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
    Star,
    Users,
    Settings,
    Headphones,
    Mail,
    TrendingUp,
    MessageSquare,
    Code,
    Lock,
    Wrench
} from 'lucide-react';

const faqData = [
    {
        question: "What is Moltbot called now?",
        answer: "Moltbot is now OpenClaw. The project was first called Clawdbot, then Moltbot, and is now published as OpenClaw at openclaw.ai. It is a free, MIT-licensed AI assistant that you install and run on your own machine."
    },
    {
        question: "What is a good Moltbot (OpenClaw) alternative for businesses?",
        answer: "It depends on what you want to avoid. If you don't want to host and maintain an agent yourself, Dooza is a managed alternative to self-hosting OpenClaw: Dooza is an AI-native company that builds AI products and services for small businesses, and its Dooza Workforce app gives you ready-made AI employees for email, social media, SEO, sales, legal documents and phone calls, set up by Dooza engineers. ChatGPT or Claude suit people who want a general-purpose assistant they direct; Zapier suits people who want to build app-to-app automations; Reclaim or Motion suit calendar and project planning. Every Dooza product starts with a refundable pilot: 100% refund within 14 days."
    },
    {
        question: "Why consider alternatives to self-hosting OpenClaw?",
        answer: "OpenClaw is capable, but self-hosting means the work is yours: you install it, choose and pay for the models, connect your accounts, review its security settings when you widen access, and apply updates. There is no paid version or vendor support; help comes from the docs, GitHub and the Discord community. If you would rather not do that work, a managed product makes more sense."
    },
    {
        question: "Can ChatGPT or Claude replace Moltbot?",
        answer: "For many tasks, yes. ChatGPT Plus includes projects, scheduled tasks, custom GPTs and memory, and ChatGPT can take action across your apps and files. Claude's paid plans let you hand off and schedule tasks, use connectors, and work in Chrome and Microsoft 365, with memory across conversations. Both are general-purpose assistants you direct yourself (checked October 7, 2026)."
    },
    {
        question: "How much do Moltbot alternatives cost?",
        answer: "As of October 7, 2026, per each vendor's own pricing pages: ChatGPT Plus is $20/month and ChatGPT Pro tiers are $100, $200 or $500/month; Claude Pro is $17/month billed annually or $20 monthly, and Max starts at $100/month; Zapier has a free plan, Professional from $19.99/month and Team from $69/month; Reclaim has a free Lite plan and paid plans from $10/user/month billed annually; Motion's Pro AI plan is $19/seat/month billed annually or $29 monthly. OpenClaw itself is free; you pay for models and hosting. Dooza pricing depends on the product (see dooza.ai/pricing), and every Dooza product starts with a refundable pilot (100% refund within 14 days)."
    },
    {
        question: "Can Dooza build a custom agent like the one I built in OpenClaw?",
        answer: "Yes. Dooza Agents is Dooza's AI agentic platform: Dooza engineers build and maintain custom agents around your workflows and handle hosting and security, with encrypted connections and your approval on anything sensitive. If you need local-only processing or full control of the code, self-hosted OpenClaw may still suit you better."
    }
];

const alternatives = [
    {
        name: "Dooza",
        tagline: "Managed AI Employees for Business",
        description: "Dooza is a managed alternative to self-hosting OpenClaw. Its Dooza Workforce app gives you ready-made AI employees for email, social media, SEO, sales, legal documents and phone calls, set up and maintained by Dooza engineers, with encrypted connections and your approval on anything sensitive.",
        price: "Refundable pilot",
        priceNote: "100% refund within 14 days",
        pros: [
            "Free 30-minute call to scope your pilot, no coding required",
            "Six ready-made AI employees: Maily, Somi, Ranky, Stan, Linda and Rachel",
            "Encrypted connections and your approval on anything sensitive",
            "Model costs included; pricing depends on the product",
            "A Dooza engineer sets up and maintains your AI employees",
            "1,000+ app integrations"
        ],
        cons: [
            "Less customizable than self-hosted options",
            "Runs in Dooza's cloud, not on your own machine"
        ],
        bestFor: "Small businesses that want AI employees working without hosting or maintaining anything",
        featured: true,
        url: "workforce"
    },
    {
        name: "ChatGPT / Claude",
        tagline: "General-Purpose AI Assistants",
        description: "Leading AI assistants for writing, research and everyday work. Both now take actions in connected apps, run scheduled tasks and remember context across conversations; you direct the work yourself.",
        price: "From $20/month",
        priceNote: "ChatGPT Plus $20; Claude Pro $17 annual / $20 monthly (checked Oct 7, 2026)",
        pros: [
            "Excellent writing and research abilities",
            "Scheduled tasks and memory on paid plans",
            "Connectors and app actions (ChatGPT Work; Claude in Chrome and Microsoft 365)",
            "Managed by the vendor; nothing to host"
        ],
        cons: [
            "General-purpose: you design and manage each task yourself",
            "No ready-made business roles to switch on",
            "Higher tiers cost more (ChatGPT Pro $100-500/mo; Claude Max from $100/mo)"
        ],
        bestFor: "People who want one capable assistant they direct themselves",
        featured: false
    },
    {
        name: "Zapier + AI",
        tagline: "Workflow Automation Platform",
        description: "Connect apps and automate workflows with AI steps, Zapier Agents, chatbots and Copilot. You design the automations, with Copilot to help.",
        price: "Free; paid from $19.99/month",
        priceNote: "Professional from $19.99, Team from $69 (checked Oct 7, 2026)",
        pros: [
            "9,000+ app connections",
            "Visual workflow builder with Copilot",
            "Zapier Agents, chatbots and MCP",
            "Established platform with a free plan"
        ],
        cons: [
            "You design the automations yourself",
            "Pricing scales with usage (each action counts as a task)"
        ],
        bestFor: "Users who want to build their own automations between specific apps",
        featured: false
    },
    {
        name: "Reclaim / Motion",
        tagline: "AI Calendar, Task & Project Planning",
        description: "AI tools that plan your calendar and tasks. Motion adds an AI project manager, AI docs and AI chat; Reclaim adds AI agents, an AI assistant and meeting follow-up drafts.",
        price: "Free; paid from $10/month",
        priceNote: "Reclaim: free Lite, Starter $10/user annual; Motion Pro AI $19/seat annual, $29 monthly (checked Oct 7, 2026)",
        pros: [
            "Excellent calendar optimization",
            "Smart task scheduling",
            "Meeting time protection",
            "AI chat and assistant features"
        ],
        cons: [
            "Built around calendar, task and project planning",
            "Not designed to run social media, SEO or phone answering"
        ],
        bestFor: "Users whose main need is calendar, task and project planning",
        featured: false
    }
];

export default function MoltbotAlternativesContent() {
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
            const sections = ['introduction', 'why-alternatives', 'what-to-look-for', 'alternatives', 'comparison', 'why-dooza', 'for-developers', 'decision-guide', 'conclusion', 'faq'];
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
                        { label: 'Moltbot (OpenClaw) Alternatives' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">Moltbot</span> (Now OpenClaw) Alternatives: 4 Options for Business
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Moltbot, formerly Clawdbot, is now OpenClaw. If you don't want to self-host it, here are 4 alternatives, compared honestly. Vendor facts checked October 7, 2026.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>13 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Updated October 7, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/moltbot-alternatives.png"
                                alt="Moltbot (OpenClaw) alternatives comparison"
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
                                    { id: 'why-alternatives', label: 'Why Look Elsewhere' },
                                    { id: 'what-to-look-for', label: 'What to Look For' },
                                    { id: 'alternatives', label: 'Top Alternatives' },
                                    { id: 'comparison', label: 'Comparison Table' },
                                    { id: 'why-dooza', label: 'Why Choose Dooza' },
                                    { id: 'for-developers', label: 'For Developers' },
                                    { id: 'decision-guide', label: 'Decision Guide' },
                                    { id: 'conclusion', label: 'Conclusion' },
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
                                <p className="text-sm text-slate-600 mb-4">Ready to switch?</p>
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
                                <InternalLinks currentSlug="moltbot-alternatives" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    <Link href="/blog/what-is-moltbot" className="text-primary-600 hover:underline">Moltbot</Link> (first called <Link href="/blog/what-is-clawdbot" className="text-primary-600 hover:underline">Clawdbot</Link>) is now <Link href="/blog/what-is-openclaw" className="text-primary-600 hover:underline">OpenClaw</Link>: a free, MIT-licensed personal AI assistant that runs on your own machine and can actually take action. It is capable, but self-hosting means you run, secure and maintain it yourself.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    If you'd rather not do that work, this guide covers 4 alternatives, from general-purpose assistants to a managed service, with each vendor's current facts.
                                </p>
                            </div>
                        </section>

                        <section id="why-alternatives" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Consider an Alternative to Self-Hosting?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    OpenClaw is impressive technology. Self-hosting it means taking on four jobs:
                                </p>
                            </div>
                            <div className="space-y-4">
                                {[
                                    {
                                        icon: Shield,
                                        title: "Security Is Your Job",
                                        desc: "OpenClaw ships with conservative defaults (the Gateway binds to loopback on a regular install) and an openclaw security audit command. Widening access or exposing it to the internet is your responsibility.",
                                        color: "red"
                                    },
                                    {
                                        icon: DollarSign,
                                        title: "Model Costs Are Yours",
                                        desc: "You bring hosted, subscription-backed, gateway or local models. What you spend depends on the models you pick and how much the agent does.",
                                        color: "red"
                                    },
                                    {
                                        icon: Settings,
                                        title: "Setup and Maintenance",
                                        desc: "The default install is a one-line installer plus an onboarding wizard; Docker is optional. After that, you configure channels, skills and automations and apply updates.",
                                        color: "red"
                                    },
                                    {
                                        icon: Headphones,
                                        title: "Community Support",
                                        desc: "There is no paid version or enterprise edition. Help comes from the docs, GitHub and the Discord community.",
                                        color: "red"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-5 rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-slate-600 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8">
                                <YouTubeEmbed
                                    videoId="NhJxxv3f7lI"
                                    title="Moltbot (OpenClaw) overview"
                                />
                            </div>
                        </section>

                        <section id="what-to-look-for" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What to Look for in an AI Assistant</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { icon: Lock, title: "Security First", desc: "Proper authentication, encrypted connections, and your approval on anything sensitive." },
                                    { icon: DollarSign, title: "Predictable Pricing", desc: "Know what you'll pay each month. No surprise API bills or usage-based cost explosions." },
                                    { icon: Zap, title: "Easy Setup", desc: "Get running in minutes, not hours or days. No coding or technical expertise required." },
                                    { icon: Headphones, title: "Real Support", desc: "Professional support team to help when things go wrong, not just community forums." },
                                    { icon: Bot, title: "Action-Taking AI", desc: "AI that can actually do things - send emails, post content, manage tasks - not just chat." },
                                    { icon: Wrench, title: "Pre-built Solutions", desc: "Ready-to-use workflows for common business needs, not build-it-yourself toolkits." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                                        <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                                            <item.icon size={20} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="alternatives" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">4 Moltbot (OpenClaw) Alternatives</h2>
                            <div className="space-y-8">
                                {alternatives.map((alt, idx) => (
                                    <div key={idx} className={`border-2 rounded-2xl overflow-hidden ${alt.featured ? 'border-primary-300 bg-primary-50/30' : 'border-slate-200 bg-white'}`}>
                                        {alt.featured && (
                                            <div className="bg-primary-600 text-white text-center py-2 text-sm font-medium">
                                                Recommended Alternative
                                            </div>
                                        )}
                                        <div className="p-6 md:p-8">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{alt.name}</h3>
                                                    <p className="text-slate-500">{alt.tagline}</p>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-2xl font-bold text-primary-600">{alt.price}</div>
                                                    <div className="text-sm text-slate-500">{alt.priceNote}</div>
                                                    {alt.rating && (
                                                        <div className="flex items-center gap-1 mt-2 justify-end">
                                                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                                                            <span className="font-medium">{alt.rating}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <p className="text-slate-600 mb-6">{alt.description}</p>

                                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                                <div>
                                                    <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                                                        <CheckCircle2 className="w-4 h-4" />
                                                        Pros
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {alt.pros.map((pro, i) => (
                                                            <li key={i} className="flex gap-2 text-sm text-slate-600">
                                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                                {pro}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                                                        <XCircle className="w-4 h-4" />
                                                        Cons
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {alt.cons.map((con, i) => (
                                                            <li key={i} className="flex gap-2 text-sm text-slate-600">
                                                                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                                                {con}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="bg-slate-100 rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                                <div>
                                                    <span className="text-sm font-medium text-slate-700">Best for: </span>
                                                    <span className="text-sm text-slate-600">{alt.bestFor}</span>
                                                </div>
                                                {alt.featured && (
                                                    <a
                                                        href={getProductSignupUrl(alt.url)}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                                                    >
                                                        Start your pilot <ArrowRight className="w-4 h-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">OpenClaw vs Alternatives: Full Comparison</h2>
                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                                <table className="w-full border-collapse text-left bg-white text-sm">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Feature</th>
                                            <th className="p-4 border-b font-bold">OpenClaw (self-hosted)</th>
                                            <th className="p-4 border-b font-bold text-primary-700 bg-primary-50">Dooza</th>
                                            <th className="p-4 border-b font-bold">ChatGPT</th>
                                            <th className="p-4 border-b font-bold">Zapier+AI</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr>
                                            <td className="p-4 border-b font-medium">Monthly Cost</td>
                                            <td className="p-4 border-b">Free software + your model costs</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold"><a href="/pricing" className="underline">Refundable pilot</a></td>
                                            <td className="p-4 border-b">Plus $20; Pro $100-500</td>
                                            <td className="p-4 border-b">Free; from $19.99</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Setup Time</td>
                                            <td className="p-4 border-b">Installer + onboarding wizard</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Same day</td>
                                            <td className="p-4 border-b text-green-600">Instant</td>
                                            <td className="p-4 border-b">Depends on the automation</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Coding Required</td>
                                            <td className="p-4 border-b">Command line for install</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">No</td>
                                            <td className="p-4 border-b text-green-600">No</td>
                                            <td className="p-4 border-b text-green-600">No (visual builder)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Takes Real Actions</td>
                                            <td className="p-4 border-b text-green-600">Yes</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes</td>
                                            <td className="p-4 border-b text-green-600">Yes (app actions, scheduled tasks)</td>
                                            <td className="p-4 border-b text-green-600">Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Security</td>
                                            <td className="p-4 border-b">Self-managed (conservative defaults)</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Encrypted, your approval on sensitive actions</td>
                                            <td className="p-4 border-b text-green-600">Managed</td>
                                            <td className="p-4 border-b text-green-600">Managed</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Support</td>
                                            <td className="p-4 border-b">Community (docs, GitHub, Discord)</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Dooza engineers</td>
                                            <td className="p-4 border-b">Varies by plan</td>
                                            <td className="p-4 border-b">Tiered</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Ready-Made Capabilities</td>
                                            <td className="p-4 border-b">Bundled + community skills</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">6 ready-made AI employees</td>
                                            <td className="p-4 border-b">Custom GPTs, projects</td>
                                            <td className="p-4 border-b">Agents and templates you configure</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="why-dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Dooza Instead of Self-Hosting</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    {
                                        icon: Shield,
                                        title: "Managed Security",
                                        desc: "Encrypted connections and your approval on anything sensitive. Nothing for you to host or expose."
                                    },
                                    {
                                        icon: DollarSign,
                                        title: "Refundable Pilot",
                                        desc: "Start with a refundable pilot — 100% refund within 14 days. No model API keys to manage yourself."
                                    },
                                    {
                                        icon: Bot,
                                        title: "Ready-Made AI Employees",
                                        desc: "Maily (email), Somi (social media), Ranky (SEO), Stan (sales), Linda (legal) and Rachel (phone receptionist)."
                                    },
                                    {
                                        icon: Zap,
                                        title: "Guided Setup",
                                        desc: "A Dooza engineer connects your accounts and sets up your AI employees. Nothing to install, no coding."
                                    },
                                    {
                                        icon: Headphones,
                                        title: "Done for You",
                                        desc: "A Dooza engineer scopes your pilot on a free 30-minute call and configures your AI employees for your business."
                                    },
                                    {
                                        icon: Wrench,
                                        title: "Maintained for You",
                                        desc: "We handle updates, security patches, and improvements. You focus on your business, not managing AI infrastructure."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-primary-50 border border-primary-100 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-3">
                                            <item.icon size={20} />
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-slate-900 text-white p-8 rounded-2xl">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shrink-0">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">The Dooza Difference</h3>
                                        <p className="text-slate-300">
                                            With OpenClaw, you run the software yourself. With Dooza, Dooza engineers set up your AI employees, customize them for your business, and maintain them for you.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-primary-500 transition-all"
                                >
                                    Start your pilot <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </section>

                        <section id="for-developers" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">For Developers: Custom Agents Without Self-Hosting</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    If you've built custom agents in OpenClaw and would rather not host and maintain them, Dooza Agents is Dooza's AI agentic platform: Dooza engineers build and maintain custom agents for you.
                                </p>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-6">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Code className="w-5 h-5 text-primary-600" />
                                    Developer Benefits
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span><strong>Custom Agents:</strong> Dooza engineers build and maintain custom agents around your workflows</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span><strong>Integrations:</strong> 1,000+ app integrations</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span><strong>Security:</strong> Encrypted connections and your approval on anything sensitive</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <span><strong>Hosting Handled:</strong> Dooza runs and maintains the infrastructure</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                    <p className="text-amber-800 text-sm">
                                        <strong>Note:</strong> Developers with very specific requirements (local-only processing, custom or local models, full control of the code) may still prefer self-hosted OpenClaw. Evaluate your specific needs before choosing.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <YouTubeEmbed
                                    videoId="muMVO4Ud4V8"
                                    title="Building AI Agents - Technical Overview"
                                />
                            </div>
                        </section>

                        <section id="decision-guide" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Which Alternative is Right for You?</h2>
                            <div className="space-y-6">
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-primary-800 mb-3">Choose Dooza if you...</h3>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Want AI automation without technical complexity</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Want to start with a refundable pilot (100% refund within 14 days)</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Value security and don't want to manage it yourself</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Need AI employees for multiple business functions</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Want Dooza engineers to set it up and maintain it</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-800 mb-3">Consider self-hosted OpenClaw if you...</h3>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Are comfortable installing and running software yourself</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Want to choose your own models, including local ones</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Can review and maintain your own security settings</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Want full control and the source code</li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-800 mb-3">Choose ChatGPT/Claude if you...</h3>
                                    <ul className="space-y-2 text-slate-700">
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Want one general-purpose assistant you direct yourself</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Primarily need help with writing and research</li>
                                        <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-slate-600 shrink-0 mt-1" /> Are happy to set up your own scheduled tasks and connectors</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion: Run It Yourself, or Have It Run for You</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    OpenClaw (formerly Moltbot) shows what a personal AI assistant that takes action can do. If you're comfortable running it yourself, it's a strong, free choice.
                                </p>
                                <p>
                                    If you'd rather not host, secure and maintain an agent, the alternatives above cover different needs: ChatGPT or Claude for a general-purpose assistant, Zapier for app automations, Reclaim or Motion for planning, and Dooza for AI employees run for you.
                                </p>
                                <p>
                                    The question isn't whether AI assistants are the future. It's whether you want to spend your time managing infrastructure or growing your business.
                                </p>
                            </div>
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Want AI Employees Run for You?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Put Dooza's AI employees to work. Start with a refundable pilot — 100% refund within 14 days.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start your pilot <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book a free pilot call
                                    </a>
                                </div>
                            </div>
                        </section>

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

                        <RelatedPosts currentSlug="moltbot-alternatives" category="Comparison" tags={['MoltBot Alternatives', 'OpenClaw', 'AI Employees', 'Comparison']} />
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
