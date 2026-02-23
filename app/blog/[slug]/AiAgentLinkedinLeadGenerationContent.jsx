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
    Target,
    Users,
    TrendingUp,
    AlertTriangle,
    MessageSquare,
    Shield,
    UserCheck,
    Repeat,
    Sparkles,
    Eye,
    Send,
    Search,
    FileText
} from 'lucide-react';

const faqData = [
    {
        question: "Will using an AI agent get my LinkedIn account banned?",
        answer: "Not if done correctly. AI agents that operate through official APIs, respect rate limits, and mimic human behavior patterns stay compliant. The key is personalization over volume — quality outreach, not spam. Agents that use browser automation, send identical messages, or blast 100+ requests per day are the ones that get flagged."
    },
    {
        question: "How is an AI agent different from LinkedIn automation tools?",
        answer: "Traditional automation tools send templated messages at scale using browser automation, which LinkedIn detects and bans. AI agents use intelligent personalization, respect platform limits, and can operate through API-compliant channels like email follow-ups after initial LinkedIn connections. They read profiles, craft unique messages, and adapt timing."
    },
    {
        question: "What response rates can I expect from AI-powered LinkedIn outreach?",
        answer: "AI-personalized outreach typically sees 15-25% response rates compared to 5-10% for templated automation. The key is that AI reads each prospect's profile, recent posts, and company news to craft genuinely relevant messages — not just swapping a first name into a template."
    },
    {
        question: "How many connection requests can I safely send per day?",
        answer: "LinkedIn's safe zone is 20-25 connection requests per day for established accounts. New or low-SSI accounts should start at 10-15 per day and ramp up over 2-3 weeks. AI agents work within these limits while maximizing quality — making each request count rather than blasting volume."
    },
    {
        question: "Can AI agents handle the entire LinkedIn sales process?",
        answer: "AI agents handle prospecting, initial outreach, and follow-up conversations. When a prospect shows buying intent, the AI hands off to your human sales team for relationship building and closing. Think of the AI as your tireless SDR — it fills the top of the funnel so your closers stay busy."
    },
    {
        question: "How does Dooza handle LinkedIn lead generation?",
        answer: "Dooza's Stan (AI Lead Generator) identifies ideal prospects based on your ICP, crafts personalized outreach messages, manages follow-up sequences across channels, and qualifies leads before handing them to your sales team — all while staying within LinkedIn's guidelines and rate limits."
    },
    {
        question: "How long does it take to see results from AI LinkedIn outreach?",
        answer: "Most businesses see their first qualified leads within 1-2 weeks. Pipeline impact becomes significant within 30-60 days as the AI optimizes messaging based on response patterns. By month two, most users report a steady stream of qualified conversations entering their pipeline."
    }
];

export default function AiAgentLinkedinLeadGenerationContent() {
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
            const sections = ['introduction', 'linkedin-rules', 'how-ai-agents-work', 'personalization-at-scale', 'compliance-safety', 'results-metrics', 'dooza-approach', 'getting-started', 'faq'];
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
            <div className="bg-gradient-to-br from-blue-50 via-white to-primary-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'AI Agent LinkedIn Lead Generation' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                            <Target size={16} />
                            <span>Lead Generation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Auto-Pilot Your Inbox: How to Use AI Agents for <span className="text-primary-600">LinkedIn Lead Gen</span> (Without Getting Banned)
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            LinkedIn is the #1 B2B lead generation platform — but manual outreach doesn't scale and automation tools get you banned. Learn how AI agents personalize outreach at scale while staying compliant.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>13 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>February 23, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Get AI Lead Generation - $29/mo
                                <ArrowRight className="w-5 h-5" />
                            </a>
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
                                    { id: 'linkedin-rules', label: 'LinkedIn Rules & Bans' },
                                    { id: 'how-ai-agents-work', label: 'How AI Agents Work' },
                                    { id: 'personalization-at-scale', label: 'Personalization at Scale' },
                                    { id: 'compliance-safety', label: 'Anti-Ban Playbook' },
                                    { id: 'results-metrics', label: 'Results & Metrics' },
                                    { id: 'dooza-approach', label: "Dooza's Approach" },
                                    { id: 'getting-started', label: 'Getting Started' },
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
                                <p className="text-sm text-slate-600 mb-4">Stop sending cold messages into the void</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Stan Free
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="ai-agent-linkedin-lead-generation" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Here's the LinkedIn paradox every B2B seller faces: you can send 100 generic connection requests today and get 5 awkward responses. Or you can spend 2 hours researching 10 perfect prospects and craft personalized messages that actually land — but then you've only talked to 10 people.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Neither scales. The spray-and-pray approach burns your reputation (and your account). The surgical approach burns your time. And somewhere between "Dear First Name" and "I noticed you liked a post about supply chain logistics on Tuesday" is the sweet spot that closes deals.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    That sweet spot is exactly where AI agents operate. Not the clunky browser-extension "automation" tools that got your colleague's account restricted last quarter. Real AI agents that read profiles, understand context, craft messages that sound like a thoughtful human wrote them — and do it hundreds of times a day without triggering LinkedIn's detection algorithms.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    LinkedIn generates <strong>80% of B2B social media leads</strong>, according to the platform's own data. And yet, according to HubSpot, only 13% of salespeople feel confident that their LinkedIn outreach is effective. That gap — between opportunity and execution — is where AI agents deliver the most value.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    If you've already explored how <Link href="/blog/ai-for-real-estate-agents" className="text-primary-600 hover:underline font-medium">AI transforms specific industries like real estate</Link> or how to <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">automate business processes end-to-end</Link>, this guide takes those principles and applies them specifically to LinkedIn — the highest-value B2B channel that most businesses underutilize.
                                </p>

                                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Target className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">This Guide is For You If...</h4>
                                            <ul className="text-slate-700 space-y-2">
                                                <li>You're spending hours on LinkedIn outreach but can't scale past 10-15 quality messages per day</li>
                                                <li>You've tried automation tools and got restricted or banned</li>
                                                <li>Your connection acceptance rate has dropped below 30%</li>
                                                <li>You want to fill your pipeline with qualified B2B leads without hiring an SDR team</li>
                                                <li>You sell high-value services ($5K+) and need to reach decision-makers</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: LinkedIn Rules & What Triggers Bans */}
                        <section id="linkedin-rules" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">LinkedIn's Rules & What Triggers Bans</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Before you automate anything, you need to understand what LinkedIn watches for. The platform has invested heavily in anti-automation since 2021, and their detection systems are sophisticated. Getting this wrong doesn't mean a slap on the wrist — it means a <strong>permanent account restriction</strong> that kills your entire professional network.
                                </p>
                                <p>
                                    LinkedIn's Terms of Service explicitly prohibit automated software that "scrapes, crawls, or otherwise accesses the Services" without permission. But the enforcement is nuanced. Here's what actually triggers their systems:
                                </p>
                            </div>

                            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl mb-8">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-red-800 mb-3">What Gets You Banned on LinkedIn</h4>
                                        <ul className="space-y-3">
                                            {[
                                                { trigger: "Browser automation tools", desc: "Selenium, Puppeteer, or Chrome extensions that simulate clicks. LinkedIn detects browser fingerprints and automated DOM interactions." },
                                                { trigger: "Identical or near-identical messages", desc: "Sending the same connection note to 50 people triggers pattern detection. Even swapping first names isn't enough — LinkedIn compares message bodies." },
                                                { trigger: "Rapid-fire activity", desc: "Sending 50 requests in 10 minutes when your normal pattern is 5/hour. Sudden spikes in any activity type (views, requests, messages) raise flags." },
                                                { trigger: "Exceeding connection limits", desc: "More than 100 connection requests per week (LinkedIn's stated limit) or more than 25-30 per day consistently. New accounts have even lower thresholds." },
                                                { trigger: "Excessive profile viewing", desc: "Visiting 200+ profiles in an hour. LinkedIn monitors viewing velocity and patterns that look non-human." },
                                                { trigger: "Third-party login sharing", desc: "Giving your credentials to automation tools that log in from different IPs, devices, or geolocations. Multiple simultaneous sessions trigger security alerts." }
                                            ].map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                                    <div>
                                                        <span className="font-semibold text-red-800">{item.trigger}:</span>
                                                        <span className="text-slate-700 ml-1">{item.desc}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mb-8">
                                {[
                                    { limit: "20-25", label: "Connection requests per day", note: "Safe zone for established accounts", cardClass: "bg-green-50 border-green-200", textClass: "text-green-600" },
                                    { limit: "100", label: "Requests per week", note: "LinkedIn's stated weekly cap", cardClass: "bg-amber-50 border-amber-200", textClass: "text-amber-600" },
                                    { limit: "150", label: "Messages per day", note: "InMail + regular messages combined", cardClass: "bg-amber-50 border-amber-200", textClass: "text-amber-600" }
                                ].map((item, idx) => (
                                    <div key={idx} className={`${item.cardClass} border p-5 rounded-xl text-center`}>
                                        <div className={`text-3xl font-bold ${item.textClass} mb-1`}>{item.limit}</div>
                                        <p className="text-sm font-medium text-slate-800 mb-1">{item.label}</p>
                                        <p className="text-xs text-slate-500">{item.note}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    LinkedIn's enforcement follows a three-strike pattern: first, you get a warning and temporary restriction (usually 24-72 hours). Second, your connection request ability gets limited for weeks. Third, your account is permanently restricted, and you lose access to your entire network. There's no appeals process that reliably works.
                                </p>
                                <p>
                                    The good news? AI agents are built to work <em>within</em> these constraints, not around them. The goal isn't to hack LinkedIn's limits — it's to make every single interaction within those limits count.
                                </p>
                            </div>
                        </section>

                        {/* Section 3: How AI Agents Automate Outreach */}
                        <section id="how-ai-agents-work" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How AI Agents Automate Outreach (Without Being Dumb About It)</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The term "LinkedIn automation" has become poisoned by tools that are, frankly, stupid. They take a template, swap in a first name and company, fire it off to hundreds of people, and call it "personalization." That's not automation — it's spam with extra steps.
                                </p>
                                <p>
                                    AI agents are fundamentally different. They don't just execute a sequence — they <strong>think about each prospect</strong>. Here's the distinction:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-red-600" />
                                        Old-School Automation
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Uses browser extensions to simulate human clicks",
                                            "Sends templated messages with basic variable swaps (Hi {firstName})",
                                            "Same message to every prospect regardless of role or industry",
                                            "Fires requests on a fixed schedule (10 per hour, every hour)",
                                            "No awareness of what the prospect actually does or cares about",
                                            "Stops after 3 follow-ups or when the sequence ends",
                                            "Gets flagged because identical patterns are easy to detect"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        AI Agent Approach
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Operates through APIs or human-supervised workflows",
                                            "Reads full profiles, posts, and company pages before crafting messages",
                                            "Every message is unique — references specific projects, roles, or content",
                                            "Varies timing to mimic natural human behavior patterns",
                                            "Understands context: a CTO gets a different message than a VP of Sales",
                                            "Adapts follow-up strategy based on response (or non-response) signals",
                                            "Stays under radar because each interaction looks genuinely human"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                <span className="text-sm">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The technical architecture matters here. Old-school tools inject JavaScript into your browser tab and simulate mouse movements and keystrokes. LinkedIn's engineering team has gotten very good at detecting this — they measure scroll velocity, click patterns, and timing distributions that no bot perfectly replicates.
                                </p>
                                <p>
                                    AI agents work differently. The best ones operate at the <strong>strategy layer</strong> rather than the <strong>execution layer</strong>. They decide <em>who</em> to contact, <em>what</em> to say, and <em>when</em> to follow up. The actual sending can happen through the platform's native interface, email, or official integrations — keeping your account safe.
                                </p>
                            </div>

                            <div className="my-8">
                                <YouTubeEmbed videoId="zBlvV0W4bDc" title="How AI Agents Automate LinkedIn Lead Generation" />
                                <p className="text-sm text-slate-500 text-center mt-3">Watch: How AI agents handle LinkedIn outreach without getting banned</p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-primary-600" />
                                    The Key Insight
                                </h4>
                                <p className="text-slate-700">
                                    The goal of an AI agent isn't to send <em>more</em> messages. It's to send <strong>better</strong> messages at the <strong>right frequency</strong>. A human SDR sending 20 perfectly researched messages per day will always outperform a bot sending 200 templates. An AI agent gives you the quality of human research at the consistency of automation — and that's a combination no human or bot alone can match.
                                </p>
                            </div>
                        </section>

                        {/* Section 4: Personalization at Scale */}
                        <section id="personalization-at-scale" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Personalization at Scale: How AI Reads Your Prospects</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    True personalization on LinkedIn isn't mentioning someone's name and company. That's the bare minimum. Real personalization means referencing something <strong>specific enough</strong> that the recipient thinks: "This person actually looked at my profile. This isn't mass outreach."
                                </p>
                                <p>
                                    AI agents achieve this by ingesting multiple data points before crafting a single message. Here's what a good AI agent reads and processes:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                {[
                                    { icon: Eye, title: "Profile Analysis", desc: "Current role, tenure, career trajectory, skills, endorsements, and education background" },
                                    { icon: FileText, title: "Recent Activity", desc: "Posts, comments, shares, and articles published in the last 30 days" },
                                    { icon: Search, title: "Company Intelligence", desc: "Company size, industry, recent news, funding rounds, and hiring signals" },
                                    { icon: Users, title: "Mutual Connections", desc: "Shared connections, groups, and schools that create trust bridges" },
                                    { icon: TrendingUp, title: "Growth Signals", desc: "Job changes, promotions, company expansions, and team growth indicators" },
                                    { icon: MessageSquare, title: "Content Themes", desc: "Topics they engage with, pain points they discuss, and opinions they share" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-sm text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The difference this makes is dramatic. Let's look at a real before-and-after comparison for a SaaS company selling project management software to construction firms:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        <XCircle className="w-5 h-5 text-red-500" />
                                        <span className="font-bold text-red-800">Template Message (5-10% response rate)</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-red-100 text-sm text-slate-700 italic">
                                        "Hi Sarah, I noticed we're both in the construction industry. I'd love to connect and share how our project management tool helps companies like yours save time. Would you be open to a quick chat?"
                                    </div>
                                    <p className="text-xs text-red-600 mt-3 font-medium">Generic. No specific reference. Reads like every other sales pitch in her inbox.</p>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <span className="font-bold text-green-800">AI-Personalized Message (15-25% response rate)</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-green-100 text-sm text-slate-700 italic">
                                        "Hi Sarah — saw your post about the subcontractor scheduling nightmare on that Austin mixed-use project. We actually solved a similar problem for Meridian Builders (4 concurrent sites, 30+ subs) by replacing their spreadsheet tracking with automated crew scheduling. Saved their PMs about 12 hrs/week. Happy to share what worked if you're interested."
                                    </div>
                                    <p className="text-xs text-green-600 mt-3 font-medium">References her specific post, a relevant pain point, a comparable company, and a concrete result.</p>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The AI-generated message took seconds to create — but it reads like someone spent 10 minutes researching Sarah's profile. That's the magic of AI personalization: <strong>10 minutes of research quality, delivered in 10 seconds, repeated 50 times per day</strong>.
                                </p>
                                <p>
                                    Here's another example for a recruiter reaching out to a passive candidate:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        <XCircle className="w-5 h-5 text-red-500" />
                                        <span className="font-bold text-red-800">Template Approach</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-red-100 text-sm text-slate-700 italic">
                                        "Hi Marcus, I have an exciting opportunity at a fast-growing company that I think would be perfect for you. Are you open to new roles?"
                                    </div>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <div className="flex items-center gap-2 mb-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                                        <span className="font-bold text-green-800">AI-Personalized Approach</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-green-100 text-sm text-slate-700 italic">
                                        "Marcus — congrats on the 3 years at Datadog. I saw your talk at DevOpsDays on observability at scale. A Series C infrastructure company (just closed $85M) is building out their platform engineering team and specifically wants someone who's done what you presented. Not sure if you're looking, but the technical scope is unusual. Happy to share details if curious."
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-blue-600" />
                                    The Data on Personalization
                                </h4>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { stat: "3x", desc: "higher response rate with personalized messages vs templates (LinkedIn data)" },
                                        { stat: "40%", desc: "higher connection acceptance when referencing mutual connections or shared groups" },
                                        { stat: "26%", desc: "higher open rate on InMail when the first line references the prospect's content" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="text-2xl font-bold text-blue-700">{item.stat}</div>
                                            <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Section 5: The Anti-Ban Playbook */}
                        <section id="compliance-safety" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Anti-Ban Playbook: 12 Rules for Safe AI Outreach</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Using AI for LinkedIn outreach is only valuable if your account stays alive. These are the specific practices that keep your account safe while maximizing outreach effectiveness. Follow every single one.
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        rule: "Warm up new accounts gradually",
                                        desc: "Start with 5-10 connection requests per day for the first 2 weeks. Increase by 5/day each week until you reach 20-25/day. Sudden volume on a quiet account is the #1 ban trigger."
                                    },
                                    {
                                        rule: "Never send identical messages",
                                        desc: "Every connection note and message should be unique. AI agents generate fresh copy for each prospect. If two messages share more than 40% of their text, LinkedIn's similarity detection can flag them."
                                    },
                                    {
                                        rule: "Vary your activity timing",
                                        desc: "Don't send requests at perfectly regular intervals. A human doesn't send a request every 6 minutes for 3 hours. AI agents should randomize timing with natural gaps — sometimes 2 minutes apart, sometimes 20."
                                    },
                                    {
                                        rule: "Keep connection request notes under 300 characters",
                                        desc: "LinkedIn limits connection notes to 300 characters. AI should craft punchy, relevant notes — not essays. Shorter messages with specific references outperform long pitches."
                                    },
                                    {
                                        rule: "Use API-compliant methods when possible",
                                        desc: "LinkedIn's official API and Sales Navigator integrations are always safer than browser automation. AI agents should route through approved channels wherever available."
                                    },
                                    {
                                        rule: "Move conversations off LinkedIn quickly",
                                        desc: "Once someone responds positively, transition to email or a call within 2-3 messages. This reduces your LinkedIn messaging volume and puts the conversation in a channel with no send limits."
                                    },
                                    {
                                        rule: "Maintain an active organic presence",
                                        desc: "Accounts that only send outreach without posting, commenting, or engaging look suspicious. AI can help you maintain organic activity (posting insights, commenting on industry content) alongside outreach."
                                    },
                                    {
                                        rule: "Respect withdraw-and-resend limits",
                                        desc: "Don't withdraw pending connection requests and resend them. LinkedIn tracks this behavior. If someone doesn't accept within 3 weeks, move on to email outreach instead."
                                    },
                                    {
                                        rule: "Stay under the weekly pending request cap",
                                        desc: "LinkedIn limits total pending (unaccepted) requests. Keep it under 500. If your acceptance rate drops, slow down outreach and improve targeting before resuming."
                                    },
                                    {
                                        rule: "Never use LinkedIn from multiple IPs simultaneously",
                                        desc: "If your AI agent accesses your account, it should use a consistent IP. Simultaneous access from your phone, laptop, and an automation server raises security flags."
                                    },
                                    {
                                        rule: "Monitor your Social Selling Index (SSI)",
                                        desc: "LinkedIn's SSI score (found at linkedin.com/sales/ssi) reflects your account health. A declining SSI often precedes restrictions. AI agents should track this and adjust strategy accordingly."
                                    },
                                    {
                                        rule: "Have a human review queue for edge cases",
                                        desc: "AI shouldn't handle every conversation autonomously. High-value prospects, negative responses, and complex questions should route to a human. This keeps interactions authentic and prevents AI from making costly mistakes."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-white border border-slate-200 p-4 rounded-xl">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-sm">{item.rule}</h4>
                                            <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Multi-Channel Safety Net</h4>
                                        <p className="text-slate-700">
                                            The smartest AI outreach strategies don't rely solely on LinkedIn. Use LinkedIn for the <strong>initial connection and warm-up</strong>, then transition to email for the sales conversation. This keeps your LinkedIn activity light (connections + brief messages) while your email handles the heavier follow-up sequences. If LinkedIn ever restricts your account temporarily, your pipeline doesn't stop — email keeps running.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Results & Metrics */}
                        <section id="results-metrics" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Results You Can Expect: The Numbers</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's talk real numbers. The following benchmarks are based on aggregated data from B2B companies using AI-powered LinkedIn outreach across industries including SaaS, professional services, consulting, and financial services.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                                {[
                                    { stat: "15-25%", label: "Response Rate", subtitle: "AI-personalized outreach", comparison: "vs 5-10% templates", cardClass: "bg-green-50 border-green-200", textClass: "text-green-600" },
                                    { stat: "40-55%", label: "Connection Acceptance", subtitle: "With personalized notes", comparison: "vs 20-30% generic", cardClass: "bg-blue-50 border-blue-200", textClass: "text-blue-600" },
                                    { stat: "3-5x", label: "Pipeline Value", subtitle: "Per message sent", comparison: "vs old-school automation", cardClass: "bg-primary-50 border-primary-200", textClass: "text-primary-600" },
                                    { stat: "8-12%", label: "Meeting Booking Rate", subtitle: "From accepted connections", comparison: "vs 2-4% cold email alone", cardClass: "bg-purple-50 border-purple-200", textClass: "text-purple-600" }
                                ].map((item, idx) => (
                                    <div key={idx} className={`${item.cardClass} border p-5 rounded-xl text-center`}>
                                        <div className={`text-3xl font-bold ${item.textClass} mb-1`}>{item.stat}</div>
                                        <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                                        <p className="text-xs text-slate-600 mt-1">{item.subtitle}</p>
                                        <p className="text-xs text-slate-400 mt-1">{item.comparison}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4">Pipeline Math: What 20 Personalized Requests/Day Gets You</h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Connection requests per day", value: "20", note: "Within LinkedIn's safe zone" },
                                        { label: "Monthly requests sent", value: "~440", note: "22 business days" },
                                        { label: "Connections accepted (45% rate)", value: "~198", note: "New prospects in your network" },
                                        { label: "Positive responses (20% of accepted)", value: "~40", note: "Engaged conversations" },
                                        { label: "Meetings booked (10% of accepted)", value: "~20", note: "Qualified sales calls" },
                                        { label: "Deals closed (25% close rate)", value: "5", note: "New customers per month", highlight: true }
                                    ].map((item, idx) => (
                                        <div key={idx} className={`flex justify-between items-center py-2 px-4 rounded-lg ${item.highlight ? 'bg-primary-100 font-bold' : 'bg-white'}`}>
                                            <div className="flex items-center gap-2">
                                                <span className="text-slate-700">{item.label}</span>
                                                <span className="text-xs text-slate-400">({item.note})</span>
                                            </div>
                                            <span className={`font-semibold ${item.highlight ? 'text-primary-800 text-xl' : 'text-slate-900'}`}>{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Five new customers per month from LinkedIn alone — at a cost of $29/month for the AI agent doing the work. If your average deal size is $5,000, that's <strong>$25,000 in new revenue per month</strong> from a $29 investment. Even at a $1,000 deal size, the ROI is 172x.
                                </p>
                                <p>
                                    Compare that to hiring an SDR at $5,000-7,000/month who might book 15-20 meetings — with 3-6 months of ramp-up time before they hit those numbers. The AI starts producing results in week one.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-red-600 mb-2">$6,000/mo</div>
                                    <p className="text-sm text-slate-700 font-medium">SDR Salary</p>
                                    <p className="text-xs text-slate-500 mt-1">3-6 month ramp, 8 hours/day</p>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">$3,000/mo</div>
                                    <p className="text-sm text-slate-700 font-medium">Lead Gen Agency</p>
                                    <p className="text-xs text-slate-500 mt-1">Shared reps, generic outreach</p>
                                </div>
                                <div className="bg-green-100 border-2 border-green-300 p-6 rounded-xl text-center ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-3xl font-bold text-green-700 mb-2">$29/mo</div>
                                    <p className="text-sm text-green-800 font-medium">Stan + AI Team (Dooza)</p>
                                    <p className="text-xs text-green-600 mt-1">24/7, personalized at scale</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 7: How Dooza Handles LinkedIn Lead Gen */}
                        <section id="dooza-approach" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How Dooza Handles LinkedIn Lead Gen</h2>

                            <div className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Target size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Stan — Your AI Lead Generator</h3>
                                        <p className="text-lg text-slate-700">
                                            Stan is the member of your AI workforce who owns lead generation. He identifies ideal prospects, crafts personalized outreach, manages follow-up sequences across channels, qualifies interested leads, and hands off warm conversations to your human sales team — all while respecting platform limits.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                {[
                                    {
                                        icon: Search,
                                        title: "Prospect Identification",
                                        desc: "Stan finds prospects matching your ICP — filtering by role, industry, company size, location, and engagement signals. No more manual Sales Navigator searches."
                                    },
                                    {
                                        icon: Eye,
                                        title: "Profile Deep Dive",
                                        desc: "Before any outreach, Stan reads the prospect's full profile, recent posts, company news, and mutual connections. Every message is informed."
                                    },
                                    {
                                        icon: Send,
                                        title: "Personalized Outreach",
                                        desc: "Stan crafts unique messages for each prospect — referencing specific content, projects, or achievements. Nothing templated, nothing generic."
                                    },
                                    {
                                        icon: Repeat,
                                        title: "Multi-Channel Follow-Up",
                                        desc: "If a LinkedIn message doesn't get a response, Stan follows up via email with fresh value. 5+ touches across channels without being pushy."
                                    },
                                    {
                                        icon: UserCheck,
                                        title: "Lead Qualification",
                                        desc: "When prospects respond, Stan asks your custom qualification questions — budget, timeline, decision-making authority — before routing to your team."
                                    },
                                    {
                                        icon: Calendar,
                                        title: "Meeting Handoff",
                                        desc: "Qualified prospects get booked directly onto your calendar. Your closers walk into meetings with context, qualification notes, and conversation history."
                                    }
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

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Stan doesn't work alone. He's part of your <Link href="/blog/ai-staffing" className="text-primary-600 hover:underline font-medium">full AI workforce</Link> — working alongside Rachel (AI receptionist for inbound calls), Eva (email management), Somi (social media), Seomi (SEO), and Linda (legal compliance). When Stan generates a lead, the rest of the team supports the relationship — answering calls, sending emails, nurturing on social.
                                </p>
                                <p>
                                    The entire team costs <strong>$29/month</strong>. That's less than a single LinkedIn Premium subscription — and you get 6 AI employees working 24/7.
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-primary-600" />
                                    Built-In Compliance
                                </h4>
                                <p className="text-slate-700">
                                    Stan is designed with LinkedIn's limits baked into his architecture. Rate limiting, warm-up periods, message uniqueness checks, and timing randomization are all automatic. You don't have to configure safety rules — they're non-negotiable defaults. Your account stays safe because Stan <strong>can't</strong> exceed safe thresholds, even if you wanted him to.
                                </p>
                            </div>
                        </section>

                        {/* Section 8: Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started in 30 Minutes</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    You don't need to spend weeks setting up complex workflows. Here's how to go from zero to AI-powered LinkedIn outreach in a single sitting:
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Sign Up & Book Your Free Onboarding Call",
                                        desc: "Create your Dooza account and schedule a 30-minute onboarding session. Our concierge team will configure Stan to match your business, target market, and sales process. Tell us who your ideal customers are, what you sell, and how you qualify leads."
                                    },
                                    {
                                        step: "2",
                                        title: "Define Your Ideal Customer Profile (ICP)",
                                        desc: "During onboarding, we'll configure Stan's targeting: industry, company size, job titles, geographic focus, and qualifying criteria. Stan uses this to find and prioritize the right prospects — not just anyone with a LinkedIn profile."
                                    },
                                    {
                                        step: "3",
                                        title: "Launch & Watch Your Pipeline Fill",
                                        desc: "Stan starts identifying prospects and crafting personalized outreach immediately. Within 1-2 weeks, you'll see your first qualified conversations. Your calendar fills with meetings. Your closers close."
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
                                    Already using LinkedIn for sales but want to automate more of your business? <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Learn how to automate your entire business beyond just lead gen &rarr;</Link>
                                </p>
                                <p>
                                    Want to pair AI outreach with an <Link href="/blog/ai-sales-agent-guide" className="text-primary-600 hover:underline font-medium">AI sales agent that qualifies and books from every channel</Link>? Stan does both.
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Put LinkedIn on Auto-Pilot?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Every day without AI-powered outreach is 20 personalized messages you didn't send, connections you didn't make, and deals your competitors closed instead. Stan starts working in 30 minutes.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start Free Trial <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book Free Onboarding
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Section 9: FAQ */}
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

                        {/* Sources Section */}
                        <section className="scroll-mt-28 border-t border-slate-200 pt-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Sources & References</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">LinkedIn Data & Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li><a href="https://business.linkedin.com/marketing-solutions/blog" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">LinkedIn Marketing Solutions — 80% of B2B leads from social come from LinkedIn</a></li>
                                        <li><a href="https://www.hubspot.com/state-of-sales" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">HubSpot State of Sales — 13% of reps confident in LinkedIn outreach</a></li>
                                        <li><a href="https://www.linkedin.com/help/linkedin/answer/a1342443" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">LinkedIn Help — Connection request limits and enforcement policies</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Outreach & Sales Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li><a href="https://www.salesforce.com/resources/article/sales-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Salesforce — Personalization increases response rates 3x</a></li>
                                        <li><a href="https://www.rainsalestraining.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">RAIN Group — Multi-touch follow-up and buyer engagement data</a></li>
                                        <li><a href="https://brevetgroup.com/21-mind-blowing-sales-stats/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Brevet Group — 80% of sales require 5+ follow-ups</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="ai-agent-linkedin-lead-generation" category="Lead Generation" tags={['AI Agent', 'LinkedIn Lead Generation', 'Lead Generation', 'Sales Automation']} />
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
