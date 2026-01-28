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
    DollarSign,
    Users,
    Mail,
    Share2,
    BarChart3,
    FileText,
    Target,
    TrendingUp,
    Calculator,
    Palette,
    MessageSquare,
    Video,
    Briefcase,
    Rocket
} from 'lucide-react';

const faqData = [
    {
        question: "What AI tools do solopreneurs need in 2026?",
        answer: "Solopreneurs in 2026 need AI tools for content creation (ChatGPT, Jasper), visual design (Canva AI, Midjourney), email management (Superhuman), social media scheduling (Buffer, Hootsuite), meeting transcription (Otter.ai), automation (Zapier, Make), and accounting (QuickBooks). However, managing 7+ subscriptions can cost $200-500/month. Platforms like Dooza consolidate these functions into pre-built AI employees for $29/month."
    },
    {
        question: "How much do AI tools cost for a solopreneur?",
        answer: "Individual AI tools typically cost $10-50/month each. A full stack including content creation, design, email, social media, automation, and accounting tools can run $200-500/month. All-in-one platforms like Dooza offer multiple AI employees for $29/month, potentially saving solopreneurs hundreds of dollars monthly while reducing tool fatigue."
    },
    {
        question: "Can AI replace a virtual assistant for solopreneurs?",
        answer: "AI can handle many VA tasks including email management, scheduling, social media posting, content drafting, and lead response. For repetitive, 24/7 tasks, AI is often more cost-effective. However, human VAs still excel at relationship-building, complex judgment calls, and tasks requiring emotional intelligence. Many solopreneurs use both: AI for automation and human VAs for high-touch work."
    },
    {
        question: "What is tool stack fatigue?",
        answer: "Tool stack fatigue occurs when solopreneurs juggle too many separate software subscriptions. Symptoms include: spending more time managing tools than doing actual work, paying for overlapping features, forgetting passwords, dealing with integration issues, and subscription creep. Studies show the average solopreneur uses 7+ different tools. Consolidating to all-in-one platforms reduces cognitive load and costs."
    },
    {
        question: "Is Dooza good for solopreneurs?",
        answer: "Dooza is designed specifically for small businesses and solopreneurs who need AI automation without technical complexity. For $29/month, you get pre-built AI employees for email, social media, SEO, sales, and more. Unlike building your own tool stack or using developer-focused platforms like MoltBot, Dooza requires no coding, no integrations, and no maintenance—making it ideal for one-person businesses."
    },
    {
        question: "How much time can AI tools save solopreneurs?",
        answer: "AI tools can save solopreneurs 10-20+ hours per week depending on usage. Specific savings include: 2-4 hours/day on email (average professional spends 4.1 hours), 1-2 hours/day on content creation, 1 hour/day on social media, and 30+ minutes on meeting notes. Studies suggest AI can save 50+ workdays per year for heavy users—that's nearly 3 months of full-time work."
    }
];

const aiTools = [
    {
        name: "Content Creation AI",
        examples: "ChatGPT, Jasper, Claude, Copy.ai",
        price: "$20-100/mo",
        icon: FileText,
        color: "purple",
        description: "Write blog posts, emails, social captions, ad copy, and more. The backbone of modern content marketing.",
        features: ["Blog writing", "Email drafts", "Social posts", "Ad copy"]
    },
    {
        name: "Visual Design AI",
        examples: "Canva AI, Midjourney, DALL-E, Adobe Firefly",
        price: "$10-50/mo",
        icon: Palette,
        color: "pink",
        description: "Create social graphics, product images, presentations, and brand assets without hiring a designer.",
        features: ["Social graphics", "Product images", "Presentations", "Logo variations"]
    },
    {
        name: "Email Management AI",
        examples: "Superhuman, Lindy, SaneBox, Mailbutler",
        price: "$25-50/mo",
        icon: Mail,
        color: "blue",
        description: "Triage inbox, draft responses, schedule sends, and actually hit inbox zero for once. The average professional spends 4.1 hours/day on email.",
        features: ["Auto-drafts", "Smart sorting", "Follow-ups", "Scheduling"]
    },
    {
        name: "Social Media AI",
        examples: "Buffer, Hootsuite, Later, Sprout Social",
        price: "$15-60/mo",
        icon: Share2,
        color: "green",
        description: "Schedule posts, generate captions, analyze performance, and maintain consistent presence across platforms without living on your phone.",
        features: ["Scheduling", "Caption AI", "Analytics", "Multi-platform"]
    },
    {
        name: "Meeting Notes AI",
        examples: "Otter.ai, Fireflies, Grain, Fathom",
        price: "$10-30/mo",
        icon: Video,
        color: "amber",
        description: "Auto-transcribe meetings, generate summaries, extract action items, and never miss a follow-up again.",
        features: ["Transcription", "Summaries", "Action items", "Search"]
    },
    {
        name: "Automation Platform",
        examples: "Zapier, Make (Integromat), n8n",
        price: "$20-75/mo",
        icon: Zap,
        color: "orange",
        description: "Connect your apps, automate workflows, and eliminate repetitive tasks. The glue that holds your tech stack together.",
        features: ["App connections", "Workflows", "Triggers", "500+ integrations"]
    },
    {
        name: "AI Accounting",
        examples: "QuickBooks AI, FreshBooks, Wave, Xero",
        price: "$15-50/mo",
        icon: Calculator,
        color: "indigo",
        description: "Auto-categorize expenses, generate invoices, track time, and prepare for taxes without spreadsheet nightmares.",
        features: ["Expense tracking", "Invoicing", "Tax prep", "Reports"]
    }
];

const doozaEmployees = [
    { name: "Email Employee", desc: "Manages inbox, drafts responses, schedules follow-ups", icon: Mail },
    { name: "Social Media Employee", desc: "Creates content, schedules posts, engages with audience", icon: Share2 },
    { name: "SEO Employee", desc: "Optimizes content, tracks rankings, suggests keywords", icon: BarChart3 },
    { name: "Sales Employee", desc: "Qualifies leads, sends outreach, books meetings", icon: TrendingUp },
    { name: "Content Employee", desc: "Writes blogs, emails, ads—in your brand voice", icon: FileText },
    { name: "Research Employee", desc: "Analyzes competitors, finds opportunities", icon: Target }
];

export default function AiToolsForSolopreneursContent() {
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
            const sections = ['introduction', 'solopreneur-dilemma', 'ai-tools', 'tool-stack-problem', 'all-in-one-solution', 'cost-comparison', 'getting-started', 'faq'];
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

    const getColorClasses = (color) => {
        const colors = {
            purple: { bg: 'bg-purple-100', text: 'text-purple-600', tag: 'bg-purple-50 text-purple-700' },
            pink: { bg: 'bg-pink-100', text: 'text-pink-600', tag: 'bg-pink-50 text-pink-700' },
            blue: { bg: 'bg-blue-100', text: 'text-blue-600', tag: 'bg-blue-50 text-blue-700' },
            green: { bg: 'bg-green-100', text: 'text-green-600', tag: 'bg-green-50 text-green-700' },
            amber: { bg: 'bg-amber-100', text: 'text-amber-600', tag: 'bg-amber-50 text-amber-700' },
            orange: { bg: 'bg-orange-100', text: 'text-orange-600', tag: 'bg-orange-50 text-orange-700' },
            indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', tag: 'bg-indigo-50 text-indigo-700' }
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar openModal={handleAction} />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: '7 AI Tools for Solopreneurs' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Rocket size={16} />
                            <span>Small Business</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            7 AI Tools Every Solopreneur Needs in 2026{' '}
                            <span className="text-primary-600">(And One Platform That Replaces Them All)</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Drowning in subscriptions? You're juggling content creation, email, social media,
                            accounting, and more—all by yourself. See the essential AI tools, then discover
                            how one platform can replace your entire tech stack for $29/month.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 28, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/ai-tools-for-solopreneurs.png"
                                alt="AI tools for solopreneurs showing the essential tech stack and all-in-one alternative"
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
                                    { id: 'solopreneur-dilemma', label: 'The Solopreneur Dilemma' },
                                    { id: 'ai-tools', label: '7 Essential AI Tools' },
                                    { id: 'tool-stack-problem', label: 'Tool Stack Overwhelm' },
                                    { id: 'all-in-one-solution', label: 'The All-in-One Solution' },
                                    { id: 'cost-comparison', label: 'Cost Comparison' },
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
                                <p className="text-sm text-slate-600 mb-4">Ditch the tool chaos</p>
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
                                <InternalLinks currentSlug="ai-tools-for-solopreneurs" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    You're running a one-person empire. Content creation, customer service, sales,
                                    accounting, marketing—all you. Sound familiar?
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Every morning you wake up to a list that never ends. Write blog posts.
                                    Design social graphics. Respond to leads. Send invoices. Post on LinkedIn.
                                    Schedule meetings. Update your website. The work never stops—because there's
                                    only one of you.
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-primary-50 to-teal-50 border border-primary-100 rounded-2xl p-6 my-8">
                                <div className="flex items-start gap-4">
                                    <Sparkles className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">The 2026 Solopreneur Reality</h3>
                                        <p className="text-slate-700">
                                            According to <a href="https://blog.google/products/google-cloud/ai-business-trends-report-2026/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Cloud's 2026 AI Business Trends Report</a>,
                                            91% of small businesses believe AI will be vital for achieving their growth goals,
                                            and 71% plan to increase AI investments this year. The solopreneurs who embrace AI
                                            aren't just surviving—they're scaling.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    But here's the problem: the AI landscape is overwhelming. ChatGPT for writing.
                                    Canva for design. Zapier for automation. QuickBooks for accounting. Otter for
                                    meetings. Buffer for social media. Before you know it, you're spending $300/month
                                    on tools and half your day switching between them.
                                </p>
                            </div>

                            <div className="my-8">
                                <h3 className="font-semibold text-slate-900 mb-4">Watch: The Solopreneur's AI Toolkit</h3>
                                <YouTubeEmbed
                                    videoId="Rr1iM0Bz95U"
                                    title="AI Tools for Solopreneurs - Complete Guide"
                                />
                            </div>
                        </section>

                        <section id="solopreneur-dilemma" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <AlertTriangle className="w-7 h-7 text-amber-500" />
                                The Solopreneur's Dilemma: Tool Stack Chaos
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's be honest. You didn't start a business to become a software manager.
                                </p>
                                <p>
                                    Yet here you are, juggling 7+ subscriptions, remembering 15 different passwords,
                                    and spending precious hours each week just trying to make your tools talk to each other.
                                </p>
                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                                <h4 className="font-bold text-red-900 mb-4">Symptoms of Tool Stack Fatigue:</h4>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "Paying for features you don't use",
                                        "Forgetting which tool does what",
                                        "Integration nightmares",
                                        "Subscription creep ($50 → $300/month)",
                                        "Context switching every 10 minutes",
                                        "Data scattered across platforms",
                                        "Can't remember all your passwords",
                                        "Spending more time on tools than work"
                                    ].map((symptom, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                            <span className="text-red-800 text-sm">{symptom}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    According to <a href="https://www.flowlu.com/blog/productivity/best-business-tools-for-solopreneurs/" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Flowlu's research on solopreneur productivity</a>,
                                    the average one-person business uses 7+ different software tools. That's 7 logins,
                                    7 billing cycles, 7 learning curves, and 7 potential points of failure.
                                </p>
                            </div>

                            <blockquote className="border-l-4 border-primary-500 pl-6 my-8 italic text-slate-700">
                                "I realized I was spending 3 hours every morning just getting my tools set up and
                                synced before I could do any real work. That's 15 hours a week—almost half a
                                full-time job—on overhead."
                                <footer className="text-sm text-slate-500 mt-2 not-italic">— Solopreneur on Reddit's r/Entrepreneur</footer>
                            </blockquote>
                        </section>

                        <section id="ai-tools" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Sparkles className="w-7 h-7 text-primary-600" />
                                The 7 AI Tools Every Solopreneur "Needs" in 2026
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Before we show you the better way, let's acknowledge reality. These are the
                                    AI tools that every blog recommends, every influencer uses, and every solopreneur
                                    eventually adopts. Based on recommendations from <a href="https://www.entrepreneur.com/science-technology/7-ai-tools-solopreneurs-need-for-2026-to-hit-7-figures/499925" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Entrepreneur.com</a> and
                                    <a href="https://www.nextiva.com/blog/best-ai-tools-for-small-business.html" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer"> Nextiva's small business research</a>:
                                </p>
                            </div>

                            <div className="space-y-6 mb-8">
                                {aiTools.map((tool, index) => {
                                    const colors = getColorClasses(tool.color);
                                    return (
                                        <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                                                        <tool.icon className={`w-6 h-6 ${colors.text}`} />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-slate-900">{index + 1}. {tool.name}</h3>
                                                        <p className="text-sm text-slate-500">{tool.examples}</p>
                                                    </div>
                                                </div>
                                                <span className="text-sm font-semibold text-slate-900 bg-slate-100 px-3 py-1 rounded-full">{tool.price}</span>
                                            </div>
                                            <p className="text-slate-600 text-sm mb-3">{tool.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {tool.features.map((feature, i) => (
                                                    <span key={i} className={`text-xs ${colors.tag} px-2 py-1 rounded`}>{feature}</span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Cost Tally */}
                            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mt-8">
                                <h4 className="font-bold text-xl text-red-800 mb-6 flex items-center gap-2">
                                    <DollarSign className="w-6 h-6" />
                                    The Real Cost of Your AI Stack
                                </h4>
                                <div className="space-y-3 mb-6">
                                    {[
                                        { tool: "Content Creation (ChatGPT Plus)", cost: "$20/mo" },
                                        { tool: "Design (Canva Pro)", cost: "$15/mo" },
                                        { tool: "Email (Superhuman)", cost: "$30/mo" },
                                        { tool: "Social Media (Buffer)", cost: "$15/mo" },
                                        { tool: "Meetings (Otter.ai)", cost: "$17/mo" },
                                        { tool: "Automation (Zapier)", cost: "$30/mo" },
                                        { tool: "Accounting (QuickBooks)", cost: "$30/mo" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-red-200 pb-2">
                                            <span className="text-slate-700">{item.tool}</span>
                                            <span className="font-bold text-red-700">{item.cost}</span>
                                        </div>
                                    ))}
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="font-bold text-slate-900">Minimum Monthly Total</span>
                                        <span className="font-bold text-red-700 text-xl">$157/mo</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-700">Realistically with upgrades</span>
                                        <span className="font-bold text-red-700">$250-400/mo</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-slate-900">Annual Cost</span>
                                        <span className="font-bold text-red-700 text-xl">$1,884 - $4,800/year</span>
                                    </div>
                                </div>
                                <p className="text-red-700 text-sm">
                                    * And this doesn't include the 10+ hours/week YOU spend managing these disconnected tools
                                </p>
                            </div>
                        </section>

                        <section id="tool-stack-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <AlertTriangle className="w-7 h-7 text-red-500" />
                                The Problem: More Tools ≠ More Productivity
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>Here's what nobody tells you about that 7-tool AI stack:</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        title: "Nothing Actually Integrates",
                                        desc: "Your content AI doesn't talk to your social scheduler. Your email tool doesn't know about your CRM. You need Zapier just to make them work together—that's another subscription and another learning curve."
                                    },
                                    {
                                        title: "Context Switching Kills Productivity",
                                        desc: "Studies show it takes 23 minutes to refocus after switching tasks. With 7 different tools, you're switching contexts constantly. That 'time-saving' AI stack might be costing you hours of deep work daily."
                                    },
                                    {
                                        title: "Feature Overlap = Wasted Money",
                                        desc: "ChatGPT can write social posts. So can Jasper. And Hootsuite has AI now too. You're paying for the same capability three times. Multiply this across your entire stack."
                                    },
                                    {
                                        title: "No Unified Memory",
                                        desc: "Each tool starts fresh. Your email AI doesn't remember what you wrote in your blog post. Your social AI doesn't know your brand voice from your content tool. There's no continuity."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-200 rounded-xl p-5">
                                        <h4 className="font-bold text-red-900 mb-2">{item.title}</h4>
                                        <p className="text-red-800 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    According to <a href="https://siift.ai/blog/ai-tools-for-solopreneurs-comparison" className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">Siift's AI tools comparison</a>,
                                    the average solopreneur spends 5-10 hours per week just managing and coordinating
                                    their tool stack. That's equivalent to losing an entire workday every week.
                                </p>
                            </div>

                            <blockquote className="border-l-4 border-amber-500 pl-6 my-8 italic text-slate-700">
                                "I had 9 AI subscriptions. $380/month. I finally sat down and calculated: I was
                                spending more time learning and managing these tools than they were saving me.
                                The irony of 'productivity' software."
                                <footer className="text-sm text-slate-500 mt-2 not-italic">— Comment on Hacker News</footer>
                            </blockquote>
                        </section>

                        <section id="all-in-one-solution" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Target className="w-7 h-7 text-primary-600" />
                                The Solution: One Platform, Multiple AI Employees
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    What if instead of subscribing to 7 different tools, you had one platform
                                    with pre-built AI employees—each specialized for a specific business function,
                                    but all working together seamlessly?
                                </p>
                                <p>
                                    That's the approach platforms like <strong>Dooza</strong> are taking. Instead of
                                    cobbling together ChatGPT + Canva + Buffer + Superhuman + Zapier, you get:
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-primary-50 to-teal-50 border border-primary-200 rounded-2xl p-8 mb-8">
                                <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2">
                                    <Bot className="w-6 h-6 text-primary-600" />
                                    Dooza's Pre-Built AI Employees
                                </h3>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {doozaEmployees.map((employee, index) => (
                                        <div key={index} className="bg-white/80 rounded-xl p-4 flex items-start gap-3">
                                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                                                <employee.icon className="w-5 h-5 text-primary-600" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-slate-900 text-sm">{employee.name}</h4>
                                                <p className="text-slate-600 text-xs mt-1">{employee.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-primary-200">
                                    <div className="flex items-center justify-between flex-wrap gap-4">
                                        <div>
                                            <span className="text-sm text-slate-600">All of this for</span>
                                            <div className="text-3xl font-bold text-primary-600">$29<span className="text-lg font-normal text-slate-500">/month</span></div>
                                        </div>
                                        <a
                                            href={getProductSignupUrl('workforce')}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors"
                                        >
                                            Start Free Trial
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <h3 className="font-bold text-xl text-slate-900 mb-4">Why This Approach Works Better</h3>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        title: "Unified Memory",
                                        desc: "Your email employee knows what your content employee wrote. Context flows across every function.",
                                        icon: Bot
                                    },
                                    {
                                        title: "Zero Integration Headaches",
                                        desc: "No Zapier. No APIs. No webhooks. Everything just works together out of the box.",
                                        icon: Zap
                                    },
                                    {
                                        title: "One Login, One Bill",
                                        desc: "Forget juggling subscriptions. One platform, one invoice, one set of credentials.",
                                        icon: DollarSign
                                    },
                                    {
                                        title: "Pre-Trained for Business",
                                        desc: "These aren't generic chatbots. Each AI employee is built for specific business functions.",
                                        icon: Briefcase
                                    },
                                    {
                                        title: "Maintained for You",
                                        desc: "Updates, improvements, and new capabilities added without you lifting a finger.",
                                        icon: CheckCircle2
                                    }
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4 bg-slate-50 rounded-xl p-5">
                                        <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                                            <benefit.icon className="w-5 h-5 text-primary-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">{benefit.title}</h4>
                                            <p className="text-slate-600 text-sm mt-1">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="cost-comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <DollarSign className="w-7 h-7 text-green-600" />
                                Cost Comparison: Tool Stack vs All-in-One
                            </h2>

                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm mb-8">
                                <table className="w-full border-collapse text-left bg-white text-sm">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Feature</th>
                                            <th className="p-4 border-b font-bold">7-Tool Stack</th>
                                            <th className="p-4 border-b font-bold text-primary-700 bg-primary-50">Dooza</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Monthly Cost</td>
                                            <td className="p-4">$157-400</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">$29</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Annual Cost</td>
                                            <td className="p-4">$1,884-4,800</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">$348</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Number of Logins</td>
                                            <td className="p-4">7+</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">1</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Integration Setup</td>
                                            <td className="p-4">Hours of Zapier</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">None needed</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Unified Memory</td>
                                            <td className="p-4 text-center">
                                                <XCircle className="w-5 h-5 text-red-500 mx-auto" />
                                            </td>
                                            <td className="p-4 bg-primary-50/30 text-center">
                                                <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                                            </td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Learning Curve</td>
                                            <td className="p-4">7 different UIs</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">1 simple interface</td>
                                        </tr>
                                        <tr className="border-b">
                                            <td className="p-4 font-medium">Technical Skill Required</td>
                                            <td className="p-4">Medium-High</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">None</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium">Support</td>
                                            <td className="p-4">7 different companies</td>
                                            <td className="p-4 bg-primary-50/30 text-green-600 font-semibold">1 dedicated team</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                                <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    Annual Savings with Dooza
                                </h4>
                                <p className="text-green-800 mb-4">
                                    Switching from a 7-tool stack to Dooza saves you:
                                </p>
                                <div className="grid sm:grid-cols-3 gap-4">
                                    <div className="bg-white rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-green-600">$1,500+</div>
                                        <div className="text-sm text-slate-600">Per year minimum</div>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-green-600">5-10 hrs</div>
                                        <div className="text-sm text-slate-600">Per week on tools</div>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 text-center">
                                        <div className="text-2xl font-bold text-green-600">50+ days</div>
                                        <div className="text-sm text-slate-600">Per year for actual work</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                                <Rocket className="w-7 h-7 text-primary-600" />
                                How to Get Started
                            </h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>Ready to ditch the tool stack chaos? Here's how to make the switch:</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Audit Your Current Stack",
                                        desc: "List every AI tool you're paying for. Add up the monthly cost. Be honest about which ones you actually use vs. 'meant to use.'"
                                    },
                                    {
                                        step: "2",
                                        title: "Try Dooza Free for 7 Days",
                                        desc: "No credit card required. See how the AI employees work. Test them on real tasks—an email, a social post, a blog outline."
                                    },
                                    {
                                        step: "3",
                                        title: "Cancel the Overlap",
                                        desc: "Once you see Dooza handling your content, email, and social—cancel the redundant subscriptions. Most solopreneurs eliminate 4-5 tools immediately."
                                    },
                                    {
                                        step: "4",
                                        title: "Reinvest the Savings",
                                        desc: "That $150+/month you're saving? Put it toward advertising, product development, or—radical idea—pay yourself more."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-primary-50 border border-primary-100 rounded-xl p-5">
                                        <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold shrink-0">{item.step}</div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900">{item.title}</h4>
                                            <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Box */}
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    Stop Managing Tools. Start Building Your Business.
                                </h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Join thousands of solopreneurs who've replaced their tool stack chaos with
                                    one platform. AI employees that work 24/7—for less than one coffee per day.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href={getProductSignupUrl('workforce')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all"
                                    >
                                        Start Your Free Trial <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book Free Onboarding
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <MessageSquare className="w-7 h-7 text-primary-600" />
                                Frequently Asked Questions
                            </h2>
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Solopreneur & AI Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://blog.google/products/google-cloud/ai-business-trends-report-2026/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Cloud - AI Business Trends 2026</a></li>
                                        <li>• <a href="https://www.entrepreneur.com/science-technology/7-ai-tools-solopreneurs-need-for-2026-to-hit-7-figures/499925" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Entrepreneur - AI Tools for Solopreneurs</a></li>
                                        <li>• <a href="https://www.flowlu.com/blog/productivity/best-business-tools-for-solopreneurs/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Flowlu - Best Tools for Solopreneurs</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Tool Comparisons</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.nextiva.com/blog/best-ai-tools-for-small-business.html" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Nextiva - Best AI Tools for Small Business</a></li>
                                        <li>• <a href="https://siift.ai/blog/ai-tools-for-solopreneurs-comparison" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Siift - AI Tools Comparison</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="ai-tools-for-solopreneurs" category="Small Business" tags={['AI Tools', 'Solopreneur', 'Small Business']} />
                    </div>

                    <div className="hidden xl:block w-64 shrink-0" aria-hidden="true"></div>
                </div>
            </div>

            <BottomCTA openModal={handleAction} />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqData.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </div>
    );
}
