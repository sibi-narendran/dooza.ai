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
        answer: "OpenClaw (formerly Clawdbot, then Moltbot) is a free, MIT-licensed, open-source AI assistant that runs on your own Mac, Windows or Linux machine. You bring your own models, talk to it on messaging apps like WhatsApp, Telegram, Discord and Slack, and it can browse the web, fill forms, manage files and run commands. It includes a built-in scheduler, a web Control UI, bundled skills and Markdown-file memory."
    },
    {
        question: "Is OpenClaw free?",
        answer: "Yes. OpenClaw is MIT licensed and has no paid version or hosted tier. What you pay for is model usage (which depends on the models you choose and how much the agent does), the machine it runs on, and your own time to set it up and maintain it."
    },
    {
        question: "What is the difference between OpenClaw and Dooza?",
        answer: "OpenClaw is an agent you host and run yourself. Dooza is a managed alternative to self-hosting OpenClaw: Dooza engineers set up and run AI employees for your business, so there is nothing to install, secure or update. Every Dooza product starts with a refundable pilot (100% refund within 14 days)."
    },
    {
        question: "Can I use OpenClaw for business?",
        answer: "Yes. A team can share one OpenClaw gateway, and it can run multiple isolated agents. OpenClaw's own security docs say it is not a hostile multi-tenant security boundary, so if you want to serve separate clients from one setup you need extra isolation work. Self-hosting also means you handle updates, security reviews and support yourself."
    },
    {
        question: "How hard is OpenClaw to set up?",
        answer: "The default install is a one-line installer followed by an onboarding wizard (openclaw onboard); Docker is optional. Most of the effort comes afterwards: choosing models, connecting channels, writing automations, reviewing security settings and keeping it updated."
    },
    {
        question: "Is Dooza an alternative to self-hosting OpenClaw?",
        answer: "Yes. Dooza is an AI-native company that builds AI products and services for small businesses, and its Dooza Workforce app is a managed alternative to self-hosting OpenClaw. Dooza runs and maintains the AI employees for you, with encrypted connections and your approval on anything sensitive."
    },
    {
        question: "What if I want to customize my AI employees?",
        answer: "A Dooza engineer scopes your pilot on a free 30-minute call and configures AI employees to match your business, brand voice, and workflows. If you need something the ready-made employees don't cover, Dooza Agents is the AI agentic platform where Dooza engineers build and maintain custom agents for you."
    }
];

export default function OpenclawVsDoozaContent() {
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
                            OpenClaw vs Dooza: <span className="text-primary-600">Self-Hosting</span> or a Managed Alternative?
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            OpenClaw is a capable, free, open-source agent you run yourself. Dooza is a managed alternative where Dooza engineers run AI employees for you. Here's the honest comparison, checked against OpenClaw's own docs.
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
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <YouTubeEmbed
                                videoId="ssYt09bCgUY"
                                title="OpenClaw vs Dooza — self-hosting or a managed alternative"
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
                                    { id: 'diy-trap', label: 'What Self-Hosting Involves' },
                                    { id: 'hidden-costs', label: 'What OpenClaw Includes' },
                                    { id: 'what-dooza-gives-you', label: 'What Dooza Gives You' },
                                    { id: 'side-by-side', label: 'Side-by-Side Comparison' },
                                    { id: 'real-cost-math', label: 'What You Pay For' },
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
                                <p className="text-sm text-slate-600 mb-4">Rather not self-host?</p>
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
                                    OpenClaw is a strong open-source agent. Dooza is a managed alternative to self-hosting OpenClaw. The real choice is not which one is more capable. It is who runs, secures and maintains the agent: you, or Dooza.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    An earlier version of this article said OpenClaw lacks scheduling, a dashboard, chat, skills and persistent memory. OpenClaw&apos;s own documentation shows it has all of these, so we rewrote the comparison. Every OpenClaw fact below comes from openclaw.ai and docs.openclaw.ai, checked October 7, 2026.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>The short version:</strong> if you are comfortable running software on your own machine or server, OpenClaw gives you a capable, free, MIT-licensed agent. If you would rather have AI employees set up and run for you by Dooza engineers, with a refundable pilot, Dooza is the managed path.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    If you want to understand OpenClaw first, read our <Link href="/blog/what-is-openclaw" className="text-primary-600 hover:underline font-medium">complete OpenClaw guide</Link>. For the business side of AI employees, see our <Link href="/blog/ai-employees-openclaw-business" className="text-primary-600 hover:underline font-medium">guide to AI employees and OpenClaw</Link>.
                                </p>
                            </div>
                        </section>

                        {/* Section 2: What Is OpenClaw? */}
                        <section id="what-is-openclaw" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is OpenClaw? (Quick Recap)</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    <Link href="/blog/what-is-openclaw" className="text-primary-600 hover:underline font-medium">OpenClaw</Link> (formerly Clawdbot, then Moltbot) is an open-source AI assistant that runs on your own Mac, Windows or Linux machine. You bring hosted, subscription-backed, gateway or local models, talk to it on messaging apps such as WhatsApp, Telegram, Discord and Slack, and it can browse the web, fill forms, read and write files and run shell commands.
                                </p>
                                <p>
                                    It is MIT licensed, with no paid version and no hosted tier, and it has a very large developer community (over 390,000 GitHub stars as of October 7, 2026).
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { icon: Code, title: "Open Source", desc: "Free, MIT licensed, no paid version" },
                                    { icon: Terminal, title: "Runs on Your Machine", desc: "State lives on your machine, not a vendor cloud" },
                                    { icon: Brain, title: "Any Model", desc: "Hosted, subscription, gateway or local models" },
                                    { icon: Zap, title: "Extensible", desc: "Bundled skills plus community skills on ClawHub" }
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
                                <h4 className="font-bold text-blue-900 mb-2">So What&apos;s the Trade-off?</h4>
                                <p className="text-blue-800">
                                    OpenClaw is a complete agent you host yourself. Self-hosting means you install it, choose and pay for the models, connect your accounts, decide what to automate, review its security settings and keep it updated. <strong>Dooza runs that work for you.</strong> That is the whole difference this article is about.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: What Self-Hosting Involves */}
                        <section id="diy-trap" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Self-Hosting OpenClaw Actually Involves</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Getting started is easier than many guides suggest. The default install is a one-line installer, followed by an onboarding wizard (<code>openclaw onboard</code>). Docker is one option, not a requirement. The ongoing work is what you sign up for:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "Install",
                                        title: "Install and onboard",
                                        desc: "Run the installer and the onboarding wizard on a machine you control. If you want it running around the clock, that machine has to stay on and online.",
                                        mood: "bg-green-50 border-green-200",
                                        icon: Sparkles,
                                        iconColor: "text-green-600"
                                    },
                                    {
                                        step: "Models",
                                        title: "Choose and pay for models",
                                        desc: "You bring the models. Cost depends on which models you pick and how much the agent does, so you watch usage and set limits yourself.",
                                        mood: "bg-amber-50 border-amber-200",
                                        icon: Brain,
                                        iconColor: "text-amber-600"
                                    },
                                    {
                                        step: "Configure",
                                        title: "Connect channels, skills and automations",
                                        desc: "Pick the channels you use, enable bundled or community skills, and write the automations (OpenClaw's built-in scheduler) that make the agent work without being asked.",
                                        mood: "bg-orange-50 border-orange-200",
                                        icon: Wrench,
                                        iconColor: "text-orange-600"
                                    },
                                    {
                                        step: "Secure",
                                        title: "Review security",
                                        desc: "OpenClaw ships with conservative defaults: the Gateway binds to loopback, group access is allowlisted, and you choose full access or a sandbox. It also includes an openclaw security audit command. Exposing it to the internet or giving it more access is your call and your responsibility.",
                                        mood: "bg-red-50 border-red-200",
                                        icon: Shield,
                                        iconColor: "text-red-600"
                                    },
                                    {
                                        step: "Maintain",
                                        title: "Update and support it",
                                        desc: "There is no paid version or vendor support. Help comes from the docs, GitHub and the Discord community, and you apply updates and fix problems yourself.",
                                        mood: "bg-slate-50 border-slate-200",
                                        icon: Timer,
                                        iconColor: "text-slate-600"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className={`${item.mood} border p-5 rounded-xl`}>
                                        <div className="flex items-start gap-3">
                                            <item.icon className={`w-5 h-5 ${item.iconColor} shrink-0 mt-1`} />
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="text-xs font-mono text-slate-500">{item.step}</span>
                                                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                                                </div>
                                                <p className="text-sm text-slate-700">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl">
                                <p className="text-lg font-bold mb-2">The honest summary:</p>
                                <p className="text-slate-300">
                                    For a developer running an agent for themselves, this is very manageable. It gets heavier if you want to run agents for a business team or for clients, because that time comes out of running the business.
                                </p>
                            </div>
                        </section>

                        {/* Section 4: What OpenClaw Includes */}
                        <section id="hidden-costs" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What OpenClaw Includes, and What Stays Your Job</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Here is what OpenClaw&apos;s documentation says it includes, next to the part that remains yours when you self-host:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        num: "1",
                                        title: "Scheduling",
                                        has: "Automations are OpenClaw's built-in scheduler; they wake the agent at the right time.",
                                        yours: "Writing, testing and monitoring each automation."
                                    },
                                    {
                                        num: "2",
                                        title: "Dashboard",
                                        has: "The Control UI is a web app served by the Gateway.",
                                        yours: "Hosting it and keeping access to it safe."
                                    },
                                    {
                                        num: "3",
                                        title: "Chat",
                                        has: "Talk to it on WhatsApp, Telegram, Discord, Slack and more (29 channels), or through the Control UI.",
                                        yours: "Connecting and maintaining each channel account."
                                    },
                                    {
                                        num: "4",
                                        title: "Skills",
                                        has: "Bundled skills plus local overrides; community skills and plugins on ClawHub.",
                                        yours: "Choosing, vetting and configuring skills for your jobs."
                                    },
                                    {
                                        num: "5",
                                        title: "Memory",
                                        has: "Remembers things in plain Markdown files in the agent's workspace, with no hidden state.",
                                        yours: "Backing up the machine those files live on."
                                    },
                                    {
                                        num: "6",
                                        title: "Multiple agents",
                                        has: "Runs multiple isolated agents in one Gateway process, each with its own workspace; a team can share one gateway.",
                                        yours: "OpenClaw's docs say it is not a hostile multi-tenant security boundary, so serving separate clients safely takes extra isolation work."
                                    },
                                    {
                                        num: "7",
                                        title: "Security",
                                        has: "Conservative defaults (loopback binding, allowlisted group access, optional sandbox) and an openclaw security audit command.",
                                        yours: "Reviewing settings whenever you widen access, and keeping up with updates."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                                        <div className="flex items-center gap-3 bg-slate-100 px-5 py-3">
                                            <div className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">{item.num}</div>
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                        </div>
                                        <div className="p-5 space-y-2">
                                            <p className="text-slate-600 text-sm"><strong className="text-slate-800">OpenClaw includes:</strong> {item.has}</p>
                                            <p className="text-slate-600 text-sm"><strong className="text-slate-800">Still your job when self-hosting:</strong> {item.yours}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-xl">
                                <h4 className="font-bold text-amber-800 mb-2 text-lg">What about cost?</h4>
                                <p className="text-sm text-amber-800">
                                    OpenClaw itself is free. What you pay is model usage (which depends entirely on your models and workload), the machine it runs on, and your own time to set it up and maintain it. We don&apos;t publish a dollar estimate here because those numbers vary too much from one setup to the next.
                                </p>
                            </div>
                        </section>

                        {/* Section 5: What Dooza Gives You */}
                        <section id="what-dooza-gives-you" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Dooza Gives You Instead</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Dooza is an AI-native company that builds AI products and services for small businesses, from custom AI agents built and maintained by Dooza engineers to done-for-you AI receptionist, customer support and AI visibility services. Every product starts with a refundable pilot: 100% refund within 14 days. Instead of hosting an agent yourself, you get AI employees that Dooza engineers set up and run for you.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
                                {[
                                    { icon: Users, title: "6 Ready-Made AI Employees", desc: "Maily (Email), Somi (Social Media), Ranky (SEO), Rachel (Receptionist), Stan (Sales), Linda (Legal)." },
                                    { icon: Timer, title: "Scheduled Work", desc: "AI employees work on a schedule, do their job, and report back. Social posts in the morning, weekly reports on Monday." },
                                    { icon: ShieldCheck, title: "Security", desc: "Encrypted connections and your approval on anything sensitive." },
                                    { icon: Server, title: "Nothing to Host", desc: "No machine to keep on, no installs, no updates to apply. Dooza runs and maintains it." },
                                    { icon: Sparkles, title: "Dashboard & Workstations", desc: "Each AI employee has its own workspace: content calendars, analytics, conversation history." },
                                    { icon: HeartHandshake, title: "Refundable Pilot", desc: "A Dooza engineer scopes your pilot on a free 30-minute call and configures your AI employees. Your brand voice, your workflows, your tools. 100% refund within 14 days." }
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
                                        <h4 className="font-bold text-slate-900 mb-2">Setup: Same Day</h4>
                                        <p className="text-slate-700">
                                            Book a free 30-minute call to scope your pilot. A Dooza engineer configures everything, and Workforce AI employees can start working the same day.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Side-by-Side Comparison */}
                        <section id="side-by-side" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Self-Hosted OpenClaw vs Dooza: Side-by-Side</h2>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">OpenClaw (self-hosted)</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Dooza</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Software cost", openclaw: "Free (MIT licensed)", dooza: "Depends on the product (see /pricing)" },
                                            { feature: "Model costs", openclaw: "You pay your model provider directly", dooza: "Included in the product" },
                                            { feature: "How to start", openclaw: "One-line installer + onboarding wizard", dooza: "Free 30-minute call, then a refundable pilot (100% refund within 14 days)" },
                                            { feature: "Who runs it", openclaw: "You, on your machine or server", dooza: "Dooza" },
                                            { feature: "Scheduling", openclaw: "Built-in scheduler (Automations)", dooza: "Built in, set up for you" },
                                            { feature: "Dashboard", openclaw: "Control UI", dooza: "Per-employee workstations" },
                                            { feature: "Chat channels", openclaw: "29 channels incl. WhatsApp, Telegram, Slack", dooza: "Dooza app and your connected tools" },
                                            { feature: "Skills", openclaw: "Bundled + community skills", dooza: "6 ready-made AI employees" },
                                            { feature: "Memory", openclaw: "Markdown files in the agent workspace", dooza: "Managed by Dooza" },
                                            { feature: "Security", openclaw: "Conservative defaults; you review and maintain them", dooza: "Encrypted connections and your approval on anything sensitive" },
                                            { feature: "Serving separate clients", openclaw: "Not a hostile multi-tenant boundary; extra isolation needed", dooza: "Each business has its own account" },
                                            { feature: "Support", openclaw: "Docs, GitHub, Discord community", dooza: "Dooza engineers" },
                                            { feature: "Maintenance", openclaw: "You apply updates and fixes", dooza: "Done for you" },
                                            { feature: "Control and customisation", openclaw: "Full control over every layer", dooza: "Configured to your workflows; custom agents via Dooza Agents" }
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
                            <p className="text-xs text-slate-500">OpenClaw details from openclaw.ai and docs.openclaw.ai, checked October 7, 2026.</p>
                        </section>

                        {/* Section 7: What You Pay For */}
                        <section id="real-cost-math" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What You Pay For in Each Path</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    We used to publish a dollar model for self-hosting. It was our own estimate, not a sourced figure, so we removed it. Here is what each path actually charges you for:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {/* OpenClaw */}
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                        <Terminal className="w-5 h-5" />
                                        Self-hosted OpenClaw
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            { label: "Software", value: "Free" },
                                            { label: "Models", value: "Your provider's rates" },
                                            { label: "Machine / hosting", value: "Yours" },
                                            { label: "Setup and maintenance", value: "Your time" },
                                            { label: "Support", value: "Community" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center py-1.5 text-sm">
                                                <span className="text-slate-700">{item.label}</span>
                                                <span className="font-medium text-slate-800">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Dooza */}
                                <div className="bg-green-50 border-2 border-green-300 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <Sparkles className="w-5 h-5" />
                                        Dooza
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            { label: "Product", value: "Depends on product" },
                                            { label: "Models", value: "Included" },
                                            { label: "Hosting", value: "Included" },
                                            { label: "Setup and maintenance", value: "Done by Dooza engineers" },
                                            { label: "Pilot scoping call", value: "Free" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center py-1.5 text-sm">
                                                <span className="text-slate-700">{item.label}</span>
                                                <span className="font-medium text-green-700">{item.value}</span>
                                            </div>
                                        ))}
                                        <div className="border-t border-green-200 pt-2 mt-2">
                                            <div className="flex justify-between items-center">
                                                <span className="font-bold text-green-800">Start with</span>
                                                <span className="text-xl font-bold text-green-600"><a href="/pricing" className="hover:underline">Refundable pilot</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-xl text-center">
                                <p className="text-slate-400 text-sm mb-2">The difference</p>
                                <p className="text-3xl font-bold mb-2">Your time vs. a managed service</p>
                                <p className="text-slate-400">OpenClaw costs nothing to license and asks for your time. Dooza pricing depends on the product, and every product starts with a refundable pilot — 100% refund within 14 days.</p>
                            </div>
                        </section>

                        {/* Section 8: Who Should Use What */}
                        <section id="who-should-use-what" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Should Use What</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    OpenClaw is the better pick for a lot of people. Here is the honest breakdown:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                                        <Terminal className="w-5 h-5 text-blue-600" />
                                        Choose OpenClaw If...
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "You're comfortable installing and running software yourself",
                                            "You want a personal assistant that runs on your own machine, with your data kept there",
                                            "You want to pick your own models, including local ones",
                                            "You want full control over every layer, and the source code",
                                            "You'd rather spend time than money"
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
                                            "You want AI employees working for your business without hosting anything",
                                            "You're a business owner, not a developer",
                                            "You need email, social media, SEO, calls, sales, and legal handled",
                                            "You want it set up and maintained by Dooza engineers",
                                            "You want to start with a refundable pilot (100% refund within 14 days)"
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
                                    Need a Custom Agent?
                                </h4>
                                <p className="text-slate-700">
                                    If you want <strong>custom AI agents</strong> but don&apos;t want to host and maintain them, Dooza Agents is Dooza&apos;s AI agentic platform: Dooza engineers build and maintain custom agents around your workflows, and handle hosting, security, and deployment. <strong>You define the job. We run the agent.</strong>
                                </p>
                                <p className="text-slate-600 text-sm mt-3">
                                    <Link href="/blog/ai-employees-openclaw-business" className="text-primary-600 hover:underline font-medium">Read our guide to AI employees and OpenClaw &rarr;</Link>
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-amber-800 mb-2">The Question That Matters</h4>
                                        <p className="text-amber-700">
                                            Ask yourself: <strong>&quot;Do I want to run an AI agent, or have the work done?&quot;</strong> If you enjoy running it, OpenClaw is a great choice. If you would rather spend that time on your customers, a managed service fits better.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 9: Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Book a 30-Minute Call; AI Employees Start the Same Day</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Start Your Pilot",
                                        desc: "Every Dooza product starts with a refundable pilot — 100% refund within 14 days. Pricing depends on the product; see /pricing."
                                    },
                                    {
                                        step: "2",
                                        title: "Book a Free Pilot Call",
                                        desc: "A Dooza engineer configures your AI employees — Maily (email), Somi (social), Ranky (SEO), Rachel (receptionist), Stan (sales), and Linda (legal) — to match your business, brand voice, and workflows."
                                    },
                                    {
                                        step: "3",
                                        title: "Your AI Team Starts Working",
                                        desc: "AI employees begin handling email, posting content, answering calls, generating leads, optimizing SEO, and drafting legal documents, with your approval on anything sensitive."
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Rather Not Run It Yourself?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Dooza is a managed alternative to self-hosting OpenClaw: AI employees that take real actions, set up and maintained by Dooza engineers. Start with a refundable pilot — 100% refund within 14 days.
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
