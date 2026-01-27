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
    Terminal,
    MessageSquare,
    Server,
    Lock,
    FileWarning,
    Users
} from 'lucide-react';

const faqData = [
    {
        question: "What is ClawdBot?",
        answer: "ClawdBot is an open-source personal AI assistant created by Peter Steinberger that runs locally on your computer. It integrates with messaging apps like WhatsApp, Telegram, and Slack, and can execute tasks, write code, and automate workflows with full system access."
    },
    {
        question: "Is ClawdBot free to use?",
        answer: "ClawdBot itself is free and open-source, but it requires API access to AI models like Claude or GPT. Users report spending $100-300+ per day in API costs for active use, making it expensive for regular business use."
    },
    {
        question: "Is ClawdBot safe for business use?",
        answer: "Security researchers have identified significant vulnerabilities including exposed control panels, credential leaks, and prompt injection risks. Over 1,000 ClawdBot instances have been found publicly accessible without authentication. It's recommended only for technical users who can properly secure their installation."
    },
    {
        question: "What happened to ClawdBot?",
        answer: "ClawdBot was rebranded to MoltBot on January 27, 2026, after Anthropic issued a trademark request due to the name's similarity to 'Claude'. The software functionality remains the same under the new name."
    },
    {
        question: "Can ClawdBot replace my personal assistant?",
        answer: "While ClawdBot offers powerful automation capabilities, it requires significant technical expertise to set up and maintain securely. For non-technical users, managed AI solutions may be more practical and safer alternatives."
    },
    {
        question: "What are the alternatives to ClawdBot?",
        answer: "Alternatives include managed AI platforms like Dooza (which offers pre-built AI employees without coding), ChatGPT for conversational tasks, and specialized tools like Reclaim for scheduling. The best choice depends on your technical expertise and security requirements."
    }
];

export default function WhatIsClawdbotContent() {
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
            const sections = ['introduction', 'what-is-clawdbot', 'how-it-works', 'key-features', 'for-business', 'dangers', 'is-it-safe', 'vs-traditional', 'conclusion', 'faq'];
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
                        { label: 'What is ClawdBot?' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI Education</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            What is <span className="text-primary-600">ClawdBot</span>? The Viral AI Assistant Explained
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Everything you need to know about Silicon Valley's hottest open-source AI assistant, including the security risks nobody's talking about.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 27, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <img
                                src="/blog/what-is-clawdbot.png"
                                alt="ClawdBot AI assistant interface"
                                className="w-full rounded-2xl shadow-xl"
                                loading="lazy"
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
                                    { id: 'what-is-clawdbot', label: 'What is ClawdBot?' },
                                    { id: 'how-it-works', label: 'How ClawdBot Works' },
                                    { id: 'key-features', label: 'Key Features' },
                                    { id: 'for-business', label: 'ClawdBot for Business' },
                                    { id: 'dangers', label: 'The Dangers' },
                                    { id: 'is-it-safe', label: 'Is ClawdBot Safe?' },
                                    { id: 'vs-traditional', label: 'vs Traditional AI' },
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
                                <p className="text-sm text-slate-600 mb-4">Want AI without the risk?</p>
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
                                <InternalLinks currentSlug="what-is-clawdbot" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    If you've been anywhere near tech Twitter (now X) in early 2026, you've probably seen <strong>ClawdBot</strong> everywhere. This open-source AI assistant has taken Silicon Valley by storm, gaining over 60,000 GitHub stars in just days and sparking debates about the future of personal AI.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    But what exactly is ClawdBot? Is it the "Siri that should have been" as many claim, or is it a security nightmare waiting to happen? In this comprehensive guide, we'll break down everything you need to know.
                                </p>
                                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mt-6">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                        <p className="text-amber-800 text-sm m-0">
                                            <strong>Note:</strong> ClawdBot has been rebranded to <Link href="/blog/what-is-moltbot" className="text-amber-700 underline">MoltBot</Link> as of January 2026 following a trademark request from Anthropic. The software functionality remains identical.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="what-is-clawdbot" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is ClawdBot?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    ClawdBot is a <strong>free, open-source personal AI assistant</strong> created by <a href="https://twitter.com/steipete" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Peter Steinberger</a>, the Austrian developer who founded PSPDFKit. Unlike cloud-based assistants like Siri or Alexa, ClawdBot runs entirely on your own computer.
                                </p>
                                <p className="mb-6">
                                    The project's tagline says it all: <em>"Your own personal AI assistant. Any OS. Any Platform. The lobster way."</em>
                                </p>
                                <p className="mb-6">
                                    What makes ClawdBot different from ChatGPT or Claude? It's essentially "Claude with hands" - an AI that doesn't just chat but actually <strong>does things</strong>. It can execute code, manage files, send emails, and automate complex workflows across your entire system.
                                </p>
                                <div className="w-full mb-8">
                                    <YouTubeEmbed
                                        videoId="MUDvwqJWWIw"
                                        title="ClawdBot Explained - The Ultimate AI Assistant"
                                    />
                                </div>
                            </div>
                        </section>

                        <section id="how-it-works" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How ClawdBot Works</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    ClawdBot's architecture is what sets it apart from traditional AI assistants. Here's how it operates:
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: Server, title: "Local Installation", desc: "Runs directly on your Mac, Windows, or Linux machine - no cloud dependency for core functions." },
                                    { icon: MessageSquare, title: "Multi-Channel Messaging", desc: "Connects to WhatsApp, Telegram, Slack, Discord, Signal, and iMessage so you can chat from anywhere." },
                                    { icon: Terminal, title: "Full System Access", desc: "Has permission to read/write files, execute shell commands, and control your browser." },
                                    { icon: Bot, title: "AI Model Flexibility", desc: "Connect to Claude, GPT-4, Gemini, or run local models through LM Studio." }
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
                                    The system uses a "Gateway" process that maintains connections to your messaging platforms, while "Skills" extend functionality similar to plugins. Everything flows through Claude Code (or another AI model) which actually processes requests and generates actions.
                                </p>
                            </div>
                        </section>

                        <section id="key-features" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Features of ClawdBot</h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Persistent Memory",
                                        desc: "Unlike ChatGPT that resets every session, ClawdBot remembers your preferences, past conversations, and ongoing tasks in local files (MEMORY.md, SOUL.md)."
                                    },
                                    {
                                        title: "Proactive Assistance",
                                        desc: "Set up cron jobs to check your email, monitor social media, or send daily briefings without being asked."
                                    },
                                    {
                                        title: "50+ Integrations",
                                        desc: "Native connections to Google Workspace, Twitter/X, Spotify, Obsidian, Home Assistant, and dozens more."
                                    },
                                    {
                                        title: "Code Execution",
                                        desc: "Write, test, and run code directly. It's essentially Cursor or Claude Code built into your personal assistant."
                                    },
                                    {
                                        title: "Sub-Agents",
                                        desc: "Kick off parallel tasks that run in the background while you continue chatting about other things."
                                    },
                                    {
                                        title: "Custom Personality",
                                        desc: "Define your assistant's personality through the SOUL.md file - make it more proactive, formal, or casual."
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

                        <section id="for-business" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">ClawdBot for Business</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Many businesses are exploring ClawdBot for automation. Here are the most common use cases:
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-3">Email & Calendar Management</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Automatic email triage and prioritization</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Draft replies for urgent messages</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Calendar conflict resolution</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-3">Developer Workflows</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Code review and debugging</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Automated testing pipelines</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Documentation generation</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-3">Research & Analysis</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Monitor social media trends</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Compile daily briefings</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Track competitor activity</li>
                                    </ul>
                                </div>
                                <div className="bg-slate-50 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-3">File Management</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Organize Google Drive files</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Batch file operations</li>
                                        <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Backup automation</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-amber-800 mb-2">Important Consideration</h4>
                                        <p className="text-amber-700">
                                            While ClawdBot offers powerful capabilities, <strong>it requires significant technical expertise</strong> to set up securely. Most business users report spending hours on configuration, and security researchers have found widespread vulnerabilities in production deployments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="dangers" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Dangers of ClawdBot</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Despite the hype, ClawdBot comes with serious risks that every user should understand. Security researchers and the crypto community have uncovered multiple concerning issues.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Shield,
                                        title: "Exposed Control Panels",
                                        desc: "Over 1,009 ClawdBot gateways are publicly accessible on the internet. Many have no authentication, allowing anyone to view API keys, conversation histories, and OAuth credentials.",
                                        source: "Bitdefender Security Research",
                                        sourceUrl: "https://www.bitdefender.com/en-us/blog/hotforsecurity/moltbot-security-alert-exposed-clawdbot-control-panels-risk-credential-leaks-and-account-takeovers"
                                    },
                                    {
                                        icon: DollarSign,
                                        title: "Extreme API Costs",
                                        desc: "Users report spending $100-300+ per day on API costs. One user burned through $300 in just 2 days doing basic tasks. The AI chooses expensive models (like Claude Opus) by default.",
                                        source: "Hacker News Discussion",
                                        sourceUrl: "https://news.ycombinator.com/item?id=46760237"
                                    },
                                    {
                                        icon: FileWarning,
                                        title: "Prompt Injection Attacks",
                                        desc: "Security researchers demonstrated obtaining private keys 'in five minutes' using prompt injection. Malicious emails or web content can manipulate the AI to exfiltrate data.",
                                        source: "InfoStealers Report",
                                        sourceUrl: "https://www.infostealers.com/article/clawdbot-the-new-primary-target-for-infostealers-in-the-ai-era/"
                                    },
                                    {
                                        icon: Lock,
                                        title: "Plaintext Credential Storage",
                                        desc: "ClawdBot stores sensitive 'memories', user profiles, and authentication tokens in plaintext Markdown and JSON files. If compromised, attackers gain a psychological dossier of the user.",
                                        source: "TrendingTopics EU",
                                        sourceUrl: "https://www.trendingtopics.eu/clawbot-hyped-ai-agent-risks-leaking-personal-data-security-experts-warn/"
                                    },
                                    {
                                        icon: Users,
                                        title: "Crypto Scam Exploitation",
                                        desc: "During the rebrand to MoltBot, scammers hijacked the old accounts in 10 seconds and promoted a fake $CLAWD token that reached $16 million before crashing, leaving victims with losses.",
                                        source: "DEV Community",
                                        sourceUrl: "https://dev.to/sivarampg/from-clawdbot-to-moltbot-how-a-cd-crypto-scammers-and-10-seconds-of-chaos-took-down-the-4eck"
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
                        </section>

                        <section id="is-it-safe" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Is ClawdBot Safe for Non-Technical Users?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's be direct: <strong>ClawdBot is not designed for non-technical users.</strong> The project's own FAQ acknowledges this reality:
                                </p>
                                <blockquote className="border-l-4 border-slate-300 pl-4 italic my-6">
                                    "Running an AI agent with shell access on your machine is... spicy. There is no 'perfectly secure' setup."
                                </blockquote>
                            </div>
                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm mb-8">
                                <table className="w-full border-collapse text-left bg-white">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">User Type</th>
                                            <th className="p-4 border-b font-bold">Recommendation</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr>
                                            <td className="p-4 border-b font-medium">Experienced Developers</td>
                                            <td className="p-4 border-b text-green-600">Proceed with caution - understand the risks</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">DevOps/Security Engineers</td>
                                            <td className="p-4 border-b text-green-600">Can properly isolate and secure</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Small Business Owners</td>
                                            <td className="p-4 border-b text-amber-600">Consider managed alternatives</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Non-Technical Users</td>
                                            <td className="p-4 border-b text-red-600">Not recommended - too many risks</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-3">Security Expert Recommendations</h4>
                                <ul className="space-y-2 text-slate-600">
                                    <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Run in isolated environments (dedicated Mac Mini, VPS, Docker)</li>
                                    <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Use new accounts and temporary phone numbers</li>
                                    <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Apply strict IP whitelisting on exposed ports</li>
                                    <li className="flex gap-2"><ArrowRight className="w-4 h-4 text-primary-600 shrink-0 mt-1" /> Never store sensitive credentials in connected accounts</li>
                                </ul>
                            </div>
                        </section>

                        <section id="vs-traditional" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">ClawdBot vs Traditional AI Assistants</h2>
                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                                <table className="w-full border-collapse text-left bg-white">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Feature</th>
                                            <th className="p-4 border-b font-bold">ClawdBot</th>
                                            <th className="p-4 border-b font-bold">ChatGPT/Claude</th>
                                            <th className="p-4 border-b font-bold text-primary-700 bg-primary-50">Dooza</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr>
                                            <td className="p-4 border-b font-medium">Setup Difficulty</td>
                                            <td className="p-4 border-b text-red-500">Complex (hours)</td>
                                            <td className="p-4 border-b text-green-600">Easy</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">5 minutes</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Take Real Actions</td>
                                            <td className="p-4 border-b text-green-600">Yes</td>
                                            <td className="p-4 border-b text-red-500">No</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Security</td>
                                            <td className="p-4 border-b text-red-500">You manage it</td>
                                            <td className="p-4 border-b text-green-600">Managed</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Managed</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Monthly Cost</td>
                                            <td className="p-4 border-b text-red-500">$100-300+/day</td>
                                            <td className="p-4 border-b">$20-200/mo</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">$29/mo</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Technical Expertise</td>
                                            <td className="p-4 border-b text-red-500">Required</td>
                                            <td className="p-4 border-b text-green-600">None</td>
                                            <td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">None</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion: Should You Use ClawdBot?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    ClawdBot represents a fascinating glimpse into the future of AI assistants - one where AI can actually take action on your behalf. For developers and security-conscious power users, it's an impressive piece of engineering worth experimenting with.
                                </p>
                                <p>
                                    However, for business owners and non-technical users, the risks currently outweigh the benefits. The combination of security vulnerabilities, extreme costs, and required technical expertise makes it unsuitable for most business applications.
                                </p>
                                <p>
                                    If you want AI automation without the complexity, consider managed solutions that offer pre-built, secure AI employees with predictable pricing and no coding required.
                                </p>
                            </div>
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Want AI Employees Without the Risk?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Dooza offers pre-built AI employees for email, social media, SEO, and sales - all secured and maintained for you.
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

                        <RelatedPosts currentSlug="what-is-clawdbot" category="AI Education" tags={['AI Assistant', 'ClawdBot', 'Personal AI']} />
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
