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
    Terminal,
    MessageSquare,
    Server,
    Lock,
    FileWarning,
    Users,
    Monitor,
    Cpu,
    Brain,
    Wrench,
    Globe,
    Settings,
    ChevronRight,
    Cloud
} from 'lucide-react';

const faqData = [
    {
        question: "What is OpenClaw (formerly ClawdBot)?",
        answer: "OpenClaw is a free, open-source AI assistant that runs locally on your computer. Previously known as ClawdBot and briefly as MoltBot, it connects to AI models like Claude or ChatGPT and integrates with messaging apps like Telegram, WhatsApp, and Discord to automate tasks, write code, manage files, and control your computer."
    },
    {
        question: "Is OpenClaw free to use?",
        answer: "OpenClaw itself is completely free and open-source. However, it requires API access to AI models like Claude or GPT, which can cost anywhere from $10 to $500+ per month depending on the model chosen and usage intensity. Heavy users report spending $100-300+ per day in API costs."
    },
    {
        question: "How long does it take to set up OpenClaw?",
        answer: "The basic installation takes about 5-10 minutes with a single terminal command. However, full configuration including API keys, messaging platform setup, and skills installation typically takes 30-60 minutes. Non-technical users may need significantly more time to troubleshoot issues."
    },
    {
        question: "Is OpenClaw safe for business use?",
        answer: "OpenClaw carries significant security risks including exposed control panels, prompt injection vulnerabilities, and plaintext credential storage. Security researchers have found over 1,000 instances publicly accessible without authentication. It's recommended only for experienced developers who can properly secure their installation."
    },
    {
        question: "What are the best alternatives to OpenClaw?",
        answer: "For non-technical users and businesses, managed AI platforms like Dooza offer similar automation capabilities (email, social media, SEO, content creation) without the security risks, technical complexity, or unpredictable costs. Dooza provides pre-built AI employees starting at $29/month with enterprise-grade security."
    },
    {
        question: "Why did ClawdBot change its name to OpenClaw?",
        answer: "The project was originally called ClawdBot, then rebranded to MoltBot in January 2026 after Anthropic issued a trademark request due to the name's similarity to 'Claude.' During that rebrand, crypto scammers hijacked the old accounts causing a $16M scam. The project eventually settled on OpenClaw as its official name."
    },
    {
        question: "Do I need special hardware to run OpenClaw?",
        answer: "No. OpenClaw runs on any modern Mac, Windows, or Linux machine. It doesn't run AI models locally - it connects to cloud-based AI providers. Some users choose to run it on a dedicated device like an old laptop or Mac Mini for 24/7 operation, but this is optional."
    }
];

export default function WhatIsOpenClawContent() {
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
            const sections = ['introduction', 'what-is-openclaw', 'name-history', 'how-it-works', 'key-features', 'setup-guide', 'use-cases', 'costs', 'risks', 'benefits', 'who-should-use', 'safer-alternative', 'conclusion', 'faq'];
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
                        { label: 'What is OpenClaw?' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI Education</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            What is <span className="text-primary-600">OpenClaw</span>? The Complete Guide to Setting Up Your Own AI Assistant
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Everything you need to know about OpenClaw (formerly ClawdBot), including setup, costs, security risks, and whether it's right for your business.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>February 11, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/what-is-openclaw.png"
                                alt="OpenClaw AI assistant setup guide showing terminal installation and messaging integration"
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
                                    { id: 'what-is-openclaw', label: 'What is OpenClaw?' },
                                    { id: 'name-history', label: 'The Name Changes' },
                                    { id: 'how-it-works', label: 'How It Works' },
                                    { id: 'key-features', label: 'Key Features' },
                                    { id: 'setup-guide', label: 'Setup Guide' },
                                    { id: 'use-cases', label: 'Use Cases' },
                                    { id: 'costs', label: 'Real Costs' },
                                    { id: 'risks', label: 'Risks & Dangers' },
                                    { id: 'benefits', label: 'Benefits' },
                                    { id: 'who-should-use', label: 'Who Should Use It?' },
                                    { id: 'safer-alternative', label: 'Safer Alternative' },
                                    { id: 'conclusion', label: 'Conclusion' },
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
                                <p className="text-sm text-slate-600 mb-4">Want AI without the complexity?</p>
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
                                <InternalLinks currentSlug="what-is-openclaw" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    The AI community is buzzing about a tool that promises something none of the big players have delivered: a <strong>24/7 AI assistant that runs directly on your computer</strong>, remembers everything, and can do anything a human can do on a machine.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    It's called <strong>OpenClaw</strong>. You might also know it as ClawdBot or MoltBot - same project, same developer, just a new name. And unlike ChatGPT, Claude, or Gemini that live in browser tabs, OpenClaw is a self-hosted AI agent that controls your entire computer through simple text messages on Telegram, WhatsApp, or Discord.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Sounds incredible, right? It is - but there are important things you need to know before diving in. In this guide, we'll cover exactly what OpenClaw is, how to set it up, what it costs, and the risks that most tutorials don't mention.
                                </p>
                            </div>
                        </section>

                        {/* What is OpenClaw */}
                        <section id="what-is-openclaw" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is OpenClaw?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    OpenClaw is a <strong>free, open-source AI assistant</strong> created by <a href="https://twitter.com/steipete" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Peter Steinberger</a>, the Austrian developer behind PSPDFKit. It gained over 60,000 GitHub stars in just days after launch, making it one of the fastest-growing open-source projects of 2026.
                                </p>
                                <p>
                                    Most AI tools today live in a browser. You open a tab, ask a question, get an answer, and once you close that tab, everything disappears. They're useful, but they don't feel like real assistants. They feel more like tools that need to be reopened over and over.
                                </p>
                                <p>
                                    OpenClaw solves this by running <strong>directly on your own computer</strong>. Instead of living inside a web interface, it connects to AI models like Claude or ChatGPT for intelligence while the agent itself lives locally on your PC. It can then be controlled through messaging apps like Telegram, WhatsApp, iMessage, Discord, and over 20 others.
                                </p>
                            </div>

                            {/* YouTube Video Embed */}
                            <div className="w-full mb-8">
                                <YouTubeEmbed
                                    videoId="NA8C8jIQNeM"
                                    title="OpenClaw (ClawdBot) Complete Setup Guide - AI Assistant That Controls Your Computer"
                                />
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Bot className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-2">The Key Difference</h4>
                                        <p className="text-blue-800 text-sm">
                                            Unlike ChatGPT or Claude which can only <em>talk</em> about tasks, OpenClaw can actually <strong>do</strong> them. It can open browsers, write documents, send emails, manage files, execute code, and even purchase products online - all through simple text messages.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Name History */}
                        <section id="name-history" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">ClawdBot to MoltBot to OpenClaw: The Name Changes</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    If you've been following this project, you might be confused by the different names floating around. Here's the quick timeline:
                                </p>
                            </div>
                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        date: "Early January 2026",
                                        title: "ClawdBot Launches",
                                        desc: "Peter Steinberger releases ClawdBot as an open-source project. It goes viral on tech Twitter and GitHub, gaining tens of thousands of stars almost overnight."
                                    },
                                    {
                                        date: "January 27, 2026",
                                        title: "Anthropic Trademark Request",
                                        desc: "Anthropic (makers of Claude) sends a trademark request because 'ClawdBot' is too similar to 'Claude.' Peter agrees to rebrand."
                                    },
                                    {
                                        date: "January 27, 2026",
                                        title: "MoltBot & The Crypto Scam",
                                        desc: "Within 10 seconds of the rebrand, crypto scammers hijacked the old ClawdBot social accounts and promoted a fake $CLAWD token that reached $16 million market cap before crashing."
                                    },
                                    {
                                        date: "February 2026",
                                        title: "OpenClaw Emerges",
                                        desc: "The project settles on 'OpenClaw' as its official, permanent name. Same software, same developer, same capabilities - just a cleaner identity."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <div className="w-3 h-3 bg-primary-500 rounded-full mt-2 shrink-0"></div>
                                        <div className="bg-white border border-slate-200 p-5 rounded-xl flex-1">
                                            <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">{item.date}</span>
                                            <h4 className="font-bold text-slate-900 mt-1 mb-1">{item.title}</h4>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                    <p className="text-amber-800 text-sm">
                                        <strong>Watch out:</strong> If you see anyone promoting a "ClawdBot token" or "$CLAWD cryptocurrency," it's a scam. The project has no official token. Read our full breakdown in <Link href="/blog/what-is-moltbot" className="text-amber-700 underline">What is MoltBot?</Link>
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* How It Works */}
                        <section id="how-it-works" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How OpenClaw Works</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    OpenClaw's architecture has three core components that make it fundamentally different from browser-based AI tools:
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: Server, title: "Local Agent", desc: "The agent runs directly on your Mac, Windows, or Linux machine. It maintains persistent connections and can operate 24/7 if the computer stays on." },
                                    { icon: Brain, title: "AI Brain (API)", desc: "OpenClaw connects to cloud AI models like Claude, ChatGPT, or Gemini for intelligence. It doesn't run models locally - it uses API keys to access them." },
                                    { icon: MessageSquare, title: "Messaging Interface", desc: "Control the bot through Telegram, WhatsApp, iMessage, Discord, Slack, Signal, and 20+ other messaging platforms." },
                                    { icon: Wrench, title: "Skills & Extensions", desc: "A marketplace of plugins that extend functionality - control Apple Notes, Notion, Things 3, Google Docs, PowerPoint, and more." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                                        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                                            <item.icon size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The system uses a "Gateway" process that maintains connections to messaging platforms, while "Skills" extend functionality similar to plugins. Everything flows through the AI model which processes requests and generates actions. Because everything runs locally, conversations, files, and context stay on the machine rather than sitting on third-party servers.
                                </p>
                            </div>
                        </section>

                        {/* Key Features */}
                        <section id="key-features" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Features That Make OpenClaw Stand Out</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>Three features separate OpenClaw from every other AI tool available right now:</p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Full Computer Control",
                                        desc: "OpenClaw can control everything on the computer it's running on. Open browsers, work in Google Docs, access Apple Notes, write Notion documents, read emails, send emails, respond to emails. Anything that can be done on a computer, OpenClaw can do. There are no guardrails."
                                    },
                                    {
                                        title: "Infinite Memory",
                                        desc: "OpenClaw has a complex memory system where everything said and done is constantly saved. After every chat session, it takes what was discussed and saves the important details to memory files (MEMORY.md, SOUL.md). It learns preferences, style, and how things should be done over time."
                                    },
                                    {
                                        title: "Messaging-First Interface",
                                        desc: "The entire experience happens through messaging apps. Give the bot a name, give it a logo. Control it through Telegram, iMessage, WhatsApp, Discord - over 20 messaging apps are supported. From anywhere in the world, open your messaging app and assign tasks."
                                    },
                                    {
                                        title: "Proactive Assistance",
                                        desc: "Set up cron jobs to have OpenClaw check email, monitor social media, or send daily briefings automatically - without being asked."
                                    },
                                    {
                                        title: "50+ Integrations & Skills Marketplace",
                                        desc: "Native connections to Google Workspace, Twitter/X, Spotify, Obsidian, Home Assistant, and dozens more. A full marketplace lets you add any functionality you need."
                                    },
                                    {
                                        title: "Code Execution & Vibe Coding",
                                        desc: "Tell OpenClaw to build an entire application - a to-do list app, a project management board, a website. It uses Claude Code to vibe code working applications with interfaces, buttons, and functionality. No coding knowledge needed."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Setup Guide */}
                        <section id="setup-guide" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Set Up OpenClaw (Step-by-Step)</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Setting up OpenClaw is simpler than most people think. The basic installation is literally one line of code. Here's the complete walkthrough:
                                </p>
                            </div>

                            {/* Step 1 */}
                            <div className="bg-white border border-slate-200 p-6 rounded-xl mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                                    <h3 className="text-xl font-bold text-slate-900">Install OpenClaw</h3>
                                </div>
                                <p className="text-slate-600 mb-4">
                                    Open your terminal (Command + Space, type "Terminal" on Mac; search for PowerShell on Windows) and paste the installation command from the <a href="https://openclaw.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">OpenClaw website</a>. One line, hit enter, done.
                                </p>
                                <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                                    <code>npx open-claw@latest</code>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white border border-slate-200 p-6 rounded-xl mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                                    <h3 className="text-xl font-bold text-slate-900">Choose Your Onboarding Mode</h3>
                                </div>
                                <p className="text-slate-600">
                                    The first screen confirms you understand this is powerful software. Hit yes. Then select <strong>"Quick Start"</strong> for the fastest setup. It gets everything running without needing to configure dozens of settings.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white border border-slate-200 p-6 rounded-xl mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                                    <h3 className="text-xl font-bold text-slate-900">Select Your AI Provider</h3>
                                </div>
                                <p className="text-slate-600 mb-4">
                                    Choose which AI model will power OpenClaw's intelligence. Options include:
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        { name: "Anthropic (Claude)", note: "Best personality, $200/mo for Max plan" },
                                        { name: "OpenAI (ChatGPT)", note: "Very intelligent, $100-200/mo" },
                                        { name: "Minimax", note: "Budget friendly, ~$10/mo" },
                                        { name: "Claude API", note: "Pay per use, $500+/mo for heavy use" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-slate-50 p-3 rounded-lg">
                                            <p className="font-semibold text-slate-900 text-sm">{item.name}</p>
                                            <p className="text-slate-500 text-xs">{item.note}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-white border border-slate-200 p-6 rounded-xl mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                                    <h3 className="text-xl font-bold text-slate-900">Add Your API Key</h3>
                                </div>
                                <p className="text-slate-600">
                                    You'll need an API key from your chosen provider. For OpenAI, go to <strong>platform.openai.com</strong> and create one. For Anthropic, visit <strong>console.anthropic.com</strong>. Copy the key and paste it into OpenClaw when prompted.
                                </p>
                            </div>

                            {/* Step 5 */}
                            <div className="bg-white border border-slate-200 p-6 rounded-xl mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                                    <h3 className="text-xl font-bold text-slate-900">Choose Skills & Integrations</h3>
                                </div>
                                <p className="text-slate-600">
                                    Select which apps OpenClaw should connect to: Apple Notes, Notion, Things 3, PowerPoint, Google Workspace, and more. Start with 3-5 core skills and expand later. More can always be added from the skills marketplace.
                                </p>
                            </div>

                            {/* Step 6 */}
                            <div className="bg-white border border-slate-200 p-6 rounded-xl mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">6</div>
                                    <h3 className="text-xl font-bold text-slate-900">Connect Your Messaging Platform</h3>
                                </div>
                                <p className="text-slate-600 mb-4">
                                    Choose how you'll communicate with the bot. Telegram is the most popular choice - create a bot via <strong>@BotFather</strong> on Telegram, get a token, and paste it in. Options include:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Telegram', 'WhatsApp', 'iMessage', 'Discord', 'Slack', 'Signal'].map((app) => (
                                        <span key={app} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">{app}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Step 7 */}
                            <div className="bg-white border border-slate-200 p-6 rounded-xl mb-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">7</div>
                                    <h3 className="text-xl font-bold text-slate-900">First Day: Train Your Assistant</h3>
                                </div>
                                <p className="text-slate-600 mb-4">
                                    Think of this like a new employee's first day. Once connected:
                                </p>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> <strong>Give it a name</strong> - "Your name is Alex" or whatever feels natural</li>
                                    <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> <strong>Brain dump your context</strong> - Tell it about your work, goals, preferences, and daily tasks</li>
                                    <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> <strong>Start with simple tasks</strong> - Write an email, create a document, do some research</li>
                                    <li className="flex gap-2"><ChevronRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> <strong>Build trust gradually</strong> - Increase complexity over time, just like training a real employee</li>
                                </ul>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-amber-800 mb-2">Setup Reality Check</h4>
                                        <p className="text-amber-700 text-sm">
                                            While the installation is a single command, getting everything configured properly - API keys, messaging tokens, skills, and security settings - typically takes <strong>30-60 minutes</strong> for someone comfortable with terminals. Non-technical users may spend significantly longer troubleshooting. There may be bugs and rough edges, especially around API key and gateway token setup.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Use Cases */}
                        <section id="use-cases" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Can OpenClaw Actually Do?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The core philosophy is simple: <strong>if a human can do it on a computer, OpenClaw can do it.</strong> Here are six practical use cases:
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "Email Management",
                                        desc: "Forward emails to the bot and say 'respond to this,' 'schedule an event,' or 'remind me about this later.' It functions as a full email assistant."
                                    },
                                    {
                                        title: "Document Creation",
                                        desc: "Open browsers, work in Google Docs, write Notion documents, create Apple Notes, build presentations - any document workflow you can think of."
                                    },
                                    {
                                        title: "Project Management",
                                        desc: "Have OpenClaw build a Kanban board, add tasks to a backlog, track progress, and work through items systematically."
                                    },
                                    {
                                        title: "Code & App Building",
                                        desc: "Describe what you want and OpenClaw vibe codes working applications with buttons, interfaces, and functionality. No coding knowledge required."
                                    },
                                    {
                                        title: "Second Brain",
                                        desc: "Text ideas, and OpenClaw organizes them into folders. Tweet ideas, app concepts, research notes - everything gets filed appropriately."
                                    },
                                    {
                                        title: "Shopping & Automation",
                                        desc: "Tell it to go on Amazon and buy a product, or give it any task that can be done on a computer with full system access."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 p-6 rounded-xl">
                                        <h3 className="font-bold text-slate-900 mb-3">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Costs */}
                        <section id="costs" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Cost of Running OpenClaw</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    One of the biggest misconceptions is that OpenClaw is free. The <em>software</em> is free. But it needs an AI brain to power it, and that's where costs add up.
                                </p>
                            </div>

                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm mb-8">
                                <table className="w-full border-collapse text-left bg-white">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">AI Provider</th>
                                            <th className="p-4 border-b font-bold">Monthly Cost</th>
                                            <th className="p-4 border-b font-bold">Best For</th>
                                            <th className="p-4 border-b font-bold">Personality</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr>
                                            <td className="p-4 border-b font-medium">Minimax</td>
                                            <td className="p-4 border-b text-green-600 font-semibold">~$10/mo</td>
                                            <td className="p-4 border-b">Budget users</td>
                                            <td className="p-4 border-b text-amber-600">Less natural</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">ChatGPT Pro</td>
                                            <td className="p-4 border-b">$100-200/mo</td>
                                            <td className="p-4 border-b">Intelligence</td>
                                            <td className="p-4 border-b text-amber-600">Robotic</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Claude Max</td>
                                            <td className="p-4 border-b">$200/mo</td>
                                            <td className="p-4 border-b">Best experience</td>
                                            <td className="p-4 border-b text-green-600">Most human</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Claude API</td>
                                            <td className="p-4 border-b text-red-500 font-semibold">$500-1,000+/mo</td>
                                            <td className="p-4 border-b">Heavy use</td>
                                            <td className="p-4 border-b text-green-600">Most human</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-red-50 border border-red-100 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <DollarSign className="w-6 h-6 text-red-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Hidden Cost Warning</h4>
                                        <p className="text-slate-600">
                                            These are just the AI model costs for a <em>single</em> service. Advanced OpenClaw features rely on additional third-party APIs (search, image generation, etc.), which means extra keys and extra costs. Users on <a href="https://news.ycombinator.com/item?id=46760237" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">Hacker News</a> report spending <strong>$100-300+ per day</strong> for active use with API pricing. One user burned through $300 in just 2 days doing basic tasks.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-3">Hardware Options</h4>
                                <div className="space-y-3 text-slate-600">
                                    <div className="flex gap-3 items-start">
                                        <Monitor className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                        <div>
                                            <strong>Your main computer</strong> - Works fine, but OpenClaw sleeps when the computer is off
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <Cpu className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                        <div>
                                            <strong>Dedicated device</strong> - Old laptop or mini PC for 24/7 operation with low power consumption
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-start">
                                        <Cloud className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                        <div>
                                            <strong>Virtual private server</strong> - Cloud hosting for maximum uptime (requires more technical knowledge)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Risks */}
                        <section id="risks" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Risks Nobody Talks About</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    OpenClaw is powerful. But power without guardrails comes with serious risks. Here's what the hype videos don't mention:
                                </p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Shield,
                                        title: "Exposed Control Panels",
                                        desc: "Security researchers at Bitdefender found over 1,009 OpenClaw gateways publicly accessible on the internet. Many had no authentication, exposing API keys, conversation histories, and OAuth credentials to anyone who found them.",
                                        source: "Bitdefender Security Research",
                                        sourceUrl: "https://www.bitdefender.com/en-us/blog/hotforsecurity/moltbot-security-alert-exposed-clawdbot-control-panels-risk-credential-leaks-and-account-takeovers"
                                    },
                                    {
                                        icon: FileWarning,
                                        title: "Prompt Injection Attacks",
                                        desc: "Security researchers demonstrated obtaining private keys 'in five minutes' using prompt injection. A malicious email or website could manipulate OpenClaw into exfiltrating your data, passwords, or financial information.",
                                        source: "InfoStealers Report",
                                        sourceUrl: "https://www.infostealers.com/article/clawdbot-the-new-primary-target-for-infostealers-in-the-ai-era/"
                                    },
                                    {
                                        icon: Lock,
                                        title: "Plaintext Credential Storage",
                                        desc: "OpenClaw stores sensitive data - your memories, personal preferences, and authentication tokens - in plaintext Markdown and JSON files. If your machine is compromised, attackers gain a complete psychological profile and access to all connected accounts.",
                                        source: "TrendingTopics EU",
                                        sourceUrl: "https://www.trendingtopics.eu/clawbot-hyped-ai-agent-risks-leaking-personal-data-security-experts-warn/"
                                    },
                                    {
                                        icon: DollarSign,
                                        title: "Unpredictable API Costs",
                                        desc: "Without strict spending limits, OpenClaw can burn through hundreds of dollars in API credits per day. The AI tends to default to expensive models like Claude Opus for every request, and there's no built-in cost control.",
                                        source: "Hacker News Discussion",
                                        sourceUrl: "https://news.ycombinator.com/item?id=46760237"
                                    },
                                    {
                                        icon: Terminal,
                                        title: "Full System Access = Full Risk",
                                        desc: "OpenClaw has unrestricted access to your file system, terminal, and browser. While this enables powerful automation, it also means any vulnerability or prompt injection could lead to data deletion, unauthorized purchases, or worse.",
                                        source: "OpenClaw FAQ",
                                        sourceUrl: "https://github.com/nicepkg/openclaw"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-600 mb-2">{item.desc}</p>
                                                <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-red-600 hover:underline">
                                                    Source: {item.source}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-3">What the Project Itself Says</h4>
                                <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
                                    "Running an AI agent with shell access on your machine is... spicy. There is no 'perfectly secure' setup."
                                </blockquote>
                                <p className="text-slate-500 text-sm mt-2">- From the official OpenClaw FAQ</p>
                            </div>
                        </section>

                        {/* Benefits */}
                        <section id="benefits" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Benefits of OpenClaw</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Despite the risks, there are legitimate reasons OpenClaw has generated so much excitement. For the right user, it offers genuinely transformative capabilities:
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Zap,
                                        title: "True Task Automation",
                                        desc: "Unlike chatbots that only give advice, OpenClaw actually executes tasks. It's the difference between an assistant who says 'you should send that email' and one who actually sends it."
                                    },
                                    {
                                        icon: Globe,
                                        title: "Anywhere Access",
                                        desc: "Control your computer from anywhere through your phone's messaging app. On vacation but need something done at the office? Text your bot."
                                    },
                                    {
                                        icon: Settings,
                                        title: "Fully Customizable",
                                        desc: "Open-source means you can modify anything. Developers can build custom skills, change the personality, and integrate with any tool or service."
                                    },
                                    {
                                        icon: Brain,
                                        title: "Persistent Context",
                                        desc: "The memory system means OpenClaw gets better over time. It learns your preferences, communication style, and workflows - unlike browser-based tools that reset every session."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-green-50 border border-green-100 p-6 rounded-xl">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 prose md:prose-lg text-slate-600">
                                <p>
                                    The economics are compelling too. At $10-200/month for a 24/7 AI assistant versus $3,000-5,000/month for a human assistant, the cost savings are undeniable. This technology is genuinely disruptive, and early adopters who learn to use these tools effectively will have a significant advantage.
                                </p>
                            </div>
                        </section>

                        {/* Who Should Use It */}
                        <section id="who-should-use" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Should (and Shouldn't) Use OpenClaw?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    OpenClaw isn't for everyone. Here's an honest assessment:
                                </p>
                            </div>
                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm mb-8">
                                <table className="w-full border-collapse text-left bg-white">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">User Type</th>
                                            <th className="p-4 border-b font-bold">Verdict</th>
                                            <th className="p-4 border-b font-bold">Why</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr>
                                            <td className="p-4 border-b font-medium">Experienced Developers</td>
                                            <td className="p-4 border-b text-green-600 font-semibold">Go for it</td>
                                            <td className="p-4 border-b">Can secure, customize, and troubleshoot</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">DevOps / Security Engineers</td>
                                            <td className="p-4 border-b text-green-600 font-semibold">Go for it</td>
                                            <td className="p-4 border-b">Can properly isolate and harden the setup</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Tech-Savvy Power Users</td>
                                            <td className="p-4 border-b text-amber-600 font-semibold">Proceed carefully</td>
                                            <td className="p-4 border-b">Start simple, understand the risks first</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Small Business Owners</td>
                                            <td className="p-4 border-b text-amber-600 font-semibold">Consider alternatives</td>
                                            <td className="p-4 border-b">Security and cost risks outweigh benefits</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Non-Technical Users</td>
                                            <td className="p-4 border-b text-red-500 font-semibold">Not recommended</td>
                                            <td className="p-4 border-b">Too many risks, too much complexity</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-3">If You're a Developer - Security Checklist</h4>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Run in an isolated environment (Docker, dedicated device, or VPS)</li>
                                    <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Use new/temporary accounts - not your primary credentials</li>
                                    <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Apply strict IP whitelisting on any exposed ports</li>
                                    <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Set API spending limits from day one</li>
                                    <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Never store sensitive financial or personal credentials in connected accounts</li>
                                    <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Start with simple tasks and gradually increase permissions</li>
                                </ul>
                            </div>
                        </section>

                        {/* Safer Alternative */}
                        <section id="safer-alternative" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What If You Want the Benefits Without the Risks?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    OpenClaw's vision is right: AI should <em>do</em> things, not just talk about them. The problem is the execution - self-hosting an AI agent with full system access puts the entire burden of security, maintenance, and cost control on you.
                                </p>
                                <p>
                                    That's exactly the gap that managed AI platforms are filling. Instead of building and securing everything yourself, you get pre-built AI employees that take action on real business tasks - with enterprise-grade security already handled for you.
                                </p>
                            </div>

                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm mb-8">
                                <table className="w-full border-collapse text-left bg-white">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Feature</th>
                                            <th className="p-4 border-b font-bold">OpenClaw</th>
                                            <th className="p-4 border-b font-bold text-primary-700 bg-primary-50">Dooza</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr>
                                            <td className="p-4 border-b font-medium">Setup Time</td>
                                            <td className="p-4 border-b text-amber-600">30-60 minutes</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">5 minutes</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Technical Expertise</td>
                                            <td className="p-4 border-b text-red-500">Required (terminal, APIs, JSON)</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">None needed</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Security</td>
                                            <td className="p-4 border-b text-red-500">You manage everything</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Enterprise-grade, managed</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Monthly Cost</td>
                                            <td className="p-4 border-b text-red-500">$10-1,000+/mo (unpredictable)</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">$29/mo (flat rate)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Takes Real Actions</td>
                                            <td className="p-4 border-b text-green-600">Yes</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Pre-Built AI Employees</td>
                                            <td className="p-4 border-b text-red-500">No - build from scratch</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">6 ready-to-use employees</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Ongoing Maintenance</td>
                                            <td className="p-4 border-b text-red-500">Manual updates, debugging</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Fully managed</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Support</td>
                                            <td className="p-4 border-b text-amber-600">Community only (GitHub, Discord)</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Dedicated support team</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Get AI Employees That Just Work</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Dooza gives you 6 pre-built AI employees for email, social media, SEO, content, sales, and customer support. Enterprise security. Predictable pricing. No terminal required.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start Free Trial <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book a Demo
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion: Is OpenClaw Worth It?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    OpenClaw represents something genuinely exciting - an AI assistant that can actually <em>do</em> things, not just talk about them. It's a real glimpse into the future of how we'll work with AI. The concept of texting your assistant from anywhere and having it execute real tasks on your computer is powerful.
                                </p>
                                <p>
                                    <strong>For developers and technical users</strong>, OpenClaw is worth experimenting with. If you can secure your setup properly, manage the costs, and accept the risks, it's an impressive piece of engineering that can genuinely boost productivity.
                                </p>
                                <p>
                                    <strong>For business owners and non-technical users</strong>, the risks currently outweigh the benefits. The combination of security vulnerabilities, unpredictable costs ($100-300+/day for heavy use), required technical expertise, and zero support makes it a poor fit for most business applications.
                                </p>
                                <p>
                                    The good news? You don't have to choose between "powerful but dangerous" and "safe but useless." Managed AI platforms now offer the same core value - AI that takes action on real tasks - with the security, simplicity, and predictable pricing that businesses need.
                                </p>
                                <p>
                                    One thing is clear: AI assistants that actually <em>do work</em> are here to stay. The only question is whether you build and maintain one yourself, or use a platform that handles the complexity for you.
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

                        <RelatedPosts currentSlug="what-is-openclaw" category="AI Education" tags={['AI Assistant', 'OpenClaw', 'ClawdBot', 'Personal AI']} />
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
