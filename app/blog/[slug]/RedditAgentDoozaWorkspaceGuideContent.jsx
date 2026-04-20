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
    MessageSquare,
    Search,
    Target,
    BarChart3,
    Users,
    Settings,
    Sparkles,
    AlertTriangle,
    Bot,
    TrendingUp,
    ShoppingCart,
    Palette,
    Layers,
    Play
} from 'lucide-react';

const faqData = [
    {
        question: "What can Dooza's Reddit Agent actually do?",
        answer: "Dooza's Reddit Agent monitors subreddits for relevant conversations, generates smart replies that match your brand voice, engages with posts mentioning your keywords, and manages multi-subreddit activity — all on autopilot, 24/7."
    },
    {
        question: "Is automated Reddit posting against Reddit's rules?",
        answer: "Reddit prohibits spam and low-quality automation. Dooza's Reddit Agent is designed to create genuine, helpful engagement — not spam. It crafts context-aware responses that add value to conversations, staying within Reddit's content policy."
    },
    {
        question: "How much does the Reddit Agent cost?",
        answer: "Dooza's Reddit Agent is included in the $29/month plan, which also gives you access to all other AI employees — social media, SEO, email, and more. No per-agent fees or usage caps."
    },
    {
        question: "Can I control what the Reddit Agent posts?",
        answer: "Absolutely. You define the tone, topics, keywords, and engagement rules. You can set approval workflows, blacklist certain subreddits, and customize the agent's personality to match your brand voice exactly."
    },
    {
        question: "How long does it take to set up the Reddit Agent?",
        answer: "Most users are live in under 10 minutes. As shown in the video tutorial above, it's a simple step-by-step process — sign in, configure your subreddits and keywords, set your tone, and activate. Free onboarding support is included."
    },
    {
        question: "Does the Reddit Agent work for any subreddit or niche?",
        answer: "Yes. Whether you're in SaaS, e-commerce, real estate, health & fitness, or any other niche — the Reddit Agent adapts to your industry. You choose which subreddits to monitor and what topics to engage with."
    }
];

export default function RedditAgentDoozaWorkspaceGuideContent() {
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
            const sections = ['introduction', 'what-is-reddit-agent', 'why-reddit-matters', 'how-to-create', 'key-features', 'use-cases', 'getting-started', 'conclusion', 'faq'];
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
                        { label: 'Reddit Agent Guide' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI Automation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            How to Create a <span className="text-primary-600">Reddit Agent</span> in Dooza Workspace
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Automate your Reddit marketing with an AI agent that monitors, engages, and grows your presence — 24/7. Step-by-step video tutorial included.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500 mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 14, 2026</span>
                            </div>
                        </div>

                        <a
                            href={getProductSignupUrl('workforce')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl"
                        >
                            <Bot size={20} />
                            Get Reddit Agent — $29/mo
                        </a>
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
                                    { id: 'what-is-reddit-agent', label: 'What is a Reddit Agent?' },
                                    { id: 'why-reddit-matters', label: 'Why Reddit Matters' },
                                    { id: 'how-to-create', label: 'Step-by-Step Guide' },
                                    { id: 'key-features', label: 'Key Features' },
                                    { id: 'use-cases', label: 'Use Cases' },
                                    { id: 'getting-started', label: 'Getting Started' },
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
                                <p className="text-sm text-slate-600 mb-4">Ready to automate Reddit?</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Get Started Free
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="reddit-agent-dooza-workspace-guide" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    Spending hours manually scrolling through Reddit, hunting for conversations about your product, and crafting replies that don't sound like spam? You're not alone. <strong>Reddit has over 1.5 billion monthly active users</strong> across 100,000+ active communities (<a href="https://www.redditinc.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Reddit Inc</a>) — making it one of the most valuable organic marketing channels in 2026.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The problem? Reddit rewards authenticity and consistency. You can't just drop a link and leave. You need to <strong>show up daily, add real value, and engage in conversations that matter</strong>. For most business owners, that's 2-3 hours a day they don't have.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    That's exactly why we built the <strong>Reddit Agent in Dooza Workspace</strong>. It monitors your target subreddits, engages with relevant posts, and builds your brand presence — all on autopilot. Here's how to set it up in minutes:
                                </p>
                            </div>

                            {/* Video Embed */}
                            <div className="mt-8">
                                <YouTubeEmbed
                                    videoId="B1MoPTwqx0g"
                                    title="Reddit Agent Creation Guide | Dooza Workspace"
                                />
                                <p className="text-sm text-slate-500 mt-3 text-center italic">
                                    Watch: Step-by-step guide to creating your Reddit Agent in Dooza Workspace
                                </p>
                            </div>
                        </section>

                        {/* What is a Reddit Agent? */}
                        <section id="what-is-reddit-agent" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is a Reddit Agent?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed mb-6">
                                    A Reddit Agent is an AI-powered employee that handles your entire Reddit marketing operation. Think of it as <strong>your 24/7 Reddit marketing assistant</strong> — one that never sleeps, never forgets to check a thread, and never writes a lazy reply.
                                </p>
                                <p className="text-lg leading-relaxed mb-6">
                                    Instead of you manually searching for mentions of your brand, product, or industry keywords, the Reddit Agent does it automatically. It monitors conversations, identifies opportunities, and crafts genuine, helpful responses that match your brand voice.
                                </p>
                            </div>

                            {/* Key Benefit Callout */}
                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                                        <Bot className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">How It Works in Simple Terms</h4>
                                        <p className="text-slate-600">
                                            You tell the agent which subreddits to watch and what keywords matter. It reads every new post and comment, decides which ones are relevant to your business, and writes a thoughtful, on-brand reply — <strong>like having an expert community manager who works around the clock</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Why Reddit Matters */}
                        <section id="why-reddit-matters" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Reddit Matters for Your Business</h2>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { stat: '1.5B+', label: 'Monthly Active Users', source: 'Reddit Inc, 2025', color: 'primary' },
                                    { stat: '100K+', label: 'Active Communities', source: 'Reddit Inc, 2025', color: 'blue' },
                                    { stat: '82%', label: 'Trust Product Recs on Reddit', source: 'HubSpot, 2025', color: 'green' },
                                    { stat: '3.4x', label: 'Higher Engagement Than Twitter', source: 'Backlinko, 2025', color: 'orange' },
                                ].map((item, idx) => (
                                    <div key={idx} className={`bg-${item.color === 'primary' ? 'primary' : item.color}-50 border border-${item.color === 'primary' ? 'primary' : item.color}-100 p-5 rounded-xl text-center`}>
                                        <div className={`text-3xl md:text-4xl font-bold text-${item.color === 'primary' ? 'primary' : item.color}-600 mb-1`}>{item.stat}</div>
                                        <div className="text-sm font-medium text-slate-900 mb-1">{item.label}</div>
                                        <div className={`text-xs text-${item.color === 'primary' ? 'primary' : item.color}-500`}>{item.source}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p className="text-lg leading-relaxed">
                                    Reddit isn't just a social platform — it's where people go to make buying decisions. When someone asks "what's the best tool for X?" on Reddit, they're ready to buy. <strong>But you can only capture those leads if you're there when the conversation happens.</strong>
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The manual effort problem is real: monitoring 5-10 subreddits, reading hundreds of posts daily, crafting unique replies, staying consistent for weeks and months. Most businesses try Reddit marketing, get results for a week, then abandon it because the time commitment is unsustainable.
                                </p>
                            </div>

                            {/* Alert Box */}
                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Hidden Cost of Manual Reddit Marketing</h4>
                                        <p className="text-slate-600">
                                            Most businesses miss Reddit leads because they can't monitor conversations 24/7. A potential customer asks for a recommendation at 11 PM — by the time you see it at 9 AM, three competitors have already replied. <strong>On Reddit, the first helpful answer wins.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* How to Create — Step by Step */}
                        <section id="how-to-create" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How to Create Your Reddit Agent — Step by Step</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                As shown in the tutorial video above, setting up your Reddit Agent takes just a few minutes. Here's the full walkthrough:
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        step: '1',
                                        title: 'Log Into Dooza Workspace',
                                        desc: 'Head to your Dooza Workspace dashboard. If you don\'t have an account yet, sign up — it takes under 2 minutes and includes a free onboarding call with our team.'
                                    },
                                    {
                                        step: '2',
                                        title: 'Navigate to Agent Creation',
                                        desc: 'Click on "Create Agent" or navigate to the Agents section in your workspace. You\'ll see a library of pre-built agent templates, including the Reddit Agent.'
                                    },
                                    {
                                        step: '3',
                                        title: 'Configure Your Reddit Agent',
                                        desc: 'Set your target subreddits, define the keywords you want to monitor, choose your brand voice and tone, and specify the types of posts to engage with. The agent learns your preferences as you refine these settings.'
                                    },
                                    {
                                        step: '4',
                                        title: 'Set Engagement Rules & Schedule',
                                        desc: 'Define how often the agent should engage, what types of content to reply to (questions, discussions, product mentions), and any guardrails — like topics to avoid or subreddits to blacklist.'
                                    },
                                    {
                                        step: '5',
                                        title: 'Activate & Monitor Performance',
                                        desc: 'Hit activate and your Reddit Agent goes live. Monitor engagement metrics, reply quality, and conversation impact from your Dooza dashboard. Adjust settings anytime as you learn what works best.'
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl hover:shadow-sm transition-shadow">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Key Features */}
                        <section id="key-features" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Features of Dooza's Reddit Agent</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Search,
                                        title: 'Automated Subreddit Monitoring',
                                        desc: 'Watches your target subreddits 24/7 for relevant conversations, brand mentions, and competitor discussions.',
                                        color: 'blue'
                                    },
                                    {
                                        icon: MessageSquare,
                                        title: 'Smart Comment Generation',
                                        desc: 'Crafts thoughtful, context-aware replies that add genuine value — not generic spam.',
                                        color: 'green'
                                    },
                                    {
                                        icon: Target,
                                        title: 'Keyword-Triggered Engagement',
                                        desc: 'Automatically engages when someone mentions your tracked keywords, products, or industry topics.',
                                        color: 'orange'
                                    },
                                    {
                                        icon: Palette,
                                        title: 'Brand Voice Customization',
                                        desc: 'Define your tone — casual, professional, technical, friendly — and the agent matches it perfectly.',
                                        color: 'purple'
                                    },
                                    {
                                        icon: BarChart3,
                                        title: 'Performance Analytics',
                                        desc: 'Track engagement metrics, reply effectiveness, and conversation impact from your dashboard.',
                                        color: 'primary'
                                    },
                                    {
                                        icon: Layers,
                                        title: 'Multi-Subreddit Management',
                                        desc: 'Monitor and engage across dozens of subreddits simultaneously — no manual switching needed.',
                                        color: 'red'
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                        <div className={`w-12 h-12 bg-${item.color}-50 rounded-lg flex items-center justify-center text-${item.color}-600 mb-4`}>
                                            <item.icon size={24} />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Use Cases */}
                        <section id="use-cases" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Should Use a Reddit Agent?</h2>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: 'SaaS Founders',
                                        before: 'Manually searching Reddit for product mentions, missing 90% of relevant conversations',
                                        after: 'Auto-engagement on every relevant thread — first to respond with helpful, knowledgeable answers',
                                        icon: Zap
                                    },
                                    {
                                        title: 'E-commerce Brands',
                                        before: 'Missing product discussions and recommendation threads where buyers are actively looking',
                                        after: 'Instant, helpful replies in product recommendation threads — with natural brand mentions',
                                        icon: ShoppingCart
                                    },
                                    {
                                        title: 'Marketing Agencies',
                                        before: 'Can\'t scale Reddit marketing for multiple clients — too time-intensive per account',
                                        after: 'Manage Reddit presence for 10+ clients simultaneously from one Dooza workspace',
                                        icon: Users
                                    },
                                    {
                                        title: 'Content Creators & Solopreneurs',
                                        before: 'Spending hours on self-promotion that gets downvoted or ignored',
                                        after: 'Strategic, value-first engagement that builds authority and drives traffic naturally',
                                        icon: TrendingUp
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                                        <div className="p-5 border-b border-slate-100">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600">
                                                    <item.icon size={20} />
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                                            <div className="p-5 bg-red-50/50">
                                                <div className="flex items-start gap-3">
                                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-1">Before</p>
                                                        <p className="text-slate-600 text-sm">{item.before}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-5 bg-green-50/50">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                                    <div>
                                                        <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">After</p>
                                                        <p className="text-slate-600 text-sm">{item.after}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get Started in 3 Steps</h2>
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                {[
                                    {
                                        step: '1',
                                        title: 'Sign Up for Dooza',
                                        desc: 'Create your free account in under 2 minutes. No credit card required to start.'
                                    },
                                    {
                                        step: '2',
                                        title: 'Create Your Reddit Agent',
                                        desc: 'Follow the video tutorial above — configure subreddits, keywords, and brand voice.'
                                    },
                                    {
                                        step: '3',
                                        title: 'Activate & Grow',
                                        desc: 'Your agent starts engaging immediately. Monitor results and refine from your dashboard.'
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl text-center">
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-lg mx-auto mb-4">
                                            {item.step}
                                        </div>
                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl text-center">
                                <p className="text-slate-600 mb-2">
                                    <strong className="text-slate-900">$29/month</strong> — includes Reddit Agent + all AI employees
                                </p>
                                <p className="text-sm text-slate-500">Free onboarding call included. Cancel anytime.</p>
                            </div>
                        </section>

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Stop Missing Reddit Leads</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p className="text-lg leading-relaxed">
                                    Reddit is one of the last platforms where organic, authentic engagement still drives real business results. But doing it manually is a full-time job. <strong>Dooza's Reddit Agent lets you automate the engagement without losing the authenticity</strong> — your brand stays genuine while the AI handles the heavy lifting.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Whether you're a SaaS founder looking for early users, an e-commerce brand chasing recommendation threads, or an agency managing clients — the Reddit Agent gives you a consistent, scalable Reddit presence that works while you sleep.
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Automate Your Reddit Presence?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Set up your Reddit Agent in minutes. Start capturing leads you've been missing.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href={getProductSignupUrl('workforce')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all"
                                    >
                                        Get Started <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={CAL_BOOKING_URL}
                                        onClick={handleAction}
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all"
                                    >
                                        <Calendar className="w-4 h-4" /> Book a Demo
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ</h2>
                            <div className="space-y-6">
                                {faqData.map((item, idx) => (
                                    <div key={idx} className="border-b border-slate-200 pb-4 last:border-0">
                                        <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.question}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Related Posts */}
                        <RelatedPosts currentSlug="reddit-agent-dooza-workspace-guide" category="AI Automation" tags={['Reddit Agent', 'Reddit Marketing', 'AI Automation', 'Dooza Workspace', 'Social Media Automation']} />
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
