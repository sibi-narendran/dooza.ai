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
    DollarSign,
    Bot,
    Sparkles,
    Search,
    Mail,
    FileText,
    Star,
    TrendingUp,
    Users,
    AlertTriangle,
    MessageSquare,
    Phone,
    Globe,
    BarChart3,
    Target,
    Megaphone,
    PieChart,
    Briefcase,
    Timer
} from 'lucide-react';

const faqData = [
    {
        question: "What marketing tools do small businesses actually need?",
        answer: "At minimum, small businesses need: email marketing, social media management, SEO/website optimization, and analytics. Many businesses also benefit from CRM, paid ads management, and content creation tools. The challenge is these often require 5-10 separate subscriptions costing $200-500/month combined. Dooza consolidates these into AI employees for $29/month."
    },
    {
        question: "How much should a small business spend on marketing tools?",
        answer: "According to research, 52% of small businesses have monthly marketing budgets under $1,000. The sweet spot is typically 5-10% of revenue for established businesses, less for startups. The key is maximizing ROI—spending less on tools that deliver more. AI-powered tools often provide better ROI because they automate work that would otherwise require hiring."
    },
    {
        question: "What's the best free marketing tool for small businesses?",
        answer: "Google Business Profile is arguably the most impactful free tool—it directly affects local search visibility and Google Maps rankings. Other valuable free tools include Canva (basic), Google Analytics, Google Search Console, and social media scheduling tools with free tiers. However, free tools often require significant time investment that AI tools can eliminate."
    },
    {
        question: "How do I choose between so many marketing tools?",
        answer: "Focus on your biggest bottleneck first. If you're struggling with content, prioritize content tools. If leads are the problem, focus on lead generation. Avoid tool sprawl—multiple disconnected tools waste time and money. Look for integrated solutions that handle multiple functions, like Dooza's AI employees that cover email, social, SEO, leads, and phone in one platform."
    },
    {
        question: "Are AI marketing tools worth it for small businesses?",
        answer: "According to LocaliQ, 67% of small businesses now use AI for content marketing, and they report 25% higher marketing ROI. AI tools are particularly valuable for small businesses because they provide enterprise-level capabilities at SMB prices—handling work that would otherwise require hiring multiple people or agencies."
    },
    {
        question: "What's the ROI of marketing tools for small businesses?",
        answer: "Email marketing delivers approximately $40 ROI for every dollar spent. Small businesses using marketing automation see 25% higher ROI and 451% more qualified leads. The key is consistent execution—which is where many small businesses fail. AI tools ensure consistency without requiring constant manual effort."
    }
];

const toolCategories = [
    {
        icon: Mail,
        title: "Email Marketing",
        description: "Newsletters, drip campaigns, and automated follow-ups",
        tools: ["Mailchimp ($13-350/mo)", "Constant Contact ($12-80/mo)", "ActiveCampaign ($29-149/mo)"],
        dooza: "Eva handles email automatically"
    },
    {
        icon: Megaphone,
        title: "Social Media Management",
        description: "Scheduling, posting, and engagement across platforms",
        tools: ["Hootsuite ($99-739/mo)", "Buffer ($6-120/mo)", "Sprout Social ($249-499/mo)"],
        dooza: "Somi posts daily content"
    },
    {
        icon: Search,
        title: "SEO & Content",
        description: "Blog posts, keyword research, and search optimization",
        tools: ["Semrush ($139-499/mo)", "Ahrefs ($29-449/mo)", "Surfer SEO ($89-219/mo)"],
        dooza: "Seomi writes and optimizes content"
    },
    {
        icon: Target,
        title: "Lead Generation",
        description: "Finding and qualifying potential customers",
        tools: ["ZoomInfo ($15K+/year)", "Apollo ($49-99/mo)", "Hunter ($49-399/mo)"],
        dooza: "Stan generates and qualifies leads"
    },
    {
        icon: Phone,
        title: "Phone & Receptionist",
        description: "Answering calls and booking appointments",
        tools: ["Ruby ($230-1,640/mo)", "Smith.ai ($255-1,500/mo)", "Grasshopper ($31-80/mo)"],
        dooza: "Rachel answers calls 24/7"
    },
    {
        icon: BarChart3,
        title: "Analytics & Reporting",
        description: "Tracking performance and ROI",
        tools: ["Google Analytics (Free)", "Mixpanel ($28-1,000/mo)", "Databox ($72-231/mo)"],
        dooza: "Built-in analytics"
    }
];

export default function SmallBusinessMarketingToolsContent() {
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
            const sections = ['introduction', 'reality-check', 'essential-tools', 'tool-categories', 'cost-comparison', 'dooza-solution', 'getting-started', 'faq'];
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
            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Small Business Marketing Tools' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                            <Briefcase size={16} />
                            <span>Small Business Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">Small Business Marketing Tools</span>: The Complete Guide for 2026
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            52% of small businesses spend under $1,000/month on marketing—but most waste half of it on disconnected tools. Learn which tools actually matter and how AI is changing the game for SMBs.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>14 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 24, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('workforce')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Get All-in-One AI Marketing - $29/mo
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
                                    { id: 'reality-check', label: 'The Reality Check' },
                                    { id: 'essential-tools', label: 'Essential Tools' },
                                    { id: 'tool-categories', label: 'Tool Categories' },
                                    { id: 'cost-comparison', label: 'Cost Comparison' },
                                    { id: 'dooza-solution', label: 'The AI Solution' },
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
                                <p className="text-sm text-slate-600 mb-4">Skip the tool sprawl</p>
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
                                <InternalLinks currentSlug="small-business-marketing-tools" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Running a small business means wearing every hat: CEO, marketer, salesperson, customer support, and everything in between. Marketing alone could be a full-time job—but you've got a business to run.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    According to <a href="https://localiq.com/blog/small-business-marketing-trends-report-2026/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">LocaliQ's 2026 Small Business Marketing Report</a>, 53% of small businesses spend 1-10 hours per week on marketing, and 50% have no employees dedicated to marketing at all.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>The result?</strong> Most small businesses bounce between too many tools, spend money on subscriptions they barely use, and still struggle to execute consistently. Marketing confidence is at an all-time low—just 18% of SMBs feel "very confident" in their marketing.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This guide cuts through the noise. We'll show you which tools actually matter, what they cost, and how AI is helping small businesses do more with less.
                                </p>

                                {/* YouTube Video Embed */}
                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="0R_3iarc8IA"
                                        title="Content Marketing for Small Business - Complete Guide"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: Essential marketing strategies every small business needs</p>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Briefcase className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">Key Insight</h4>
                                            <p className="text-slate-700">
                                                <strong>14% of businesses fail due to poor marketing</strong>—yet most small businesses spend more time researching tools than actually marketing. The goal isn't to have the most tools; it's to have tools that actually get used and drive results.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="reality-check" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Small Business Marketing Reality Check</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's look at what the data actually tells us about small business marketing in 2026, according to <a href="https://localiq.com/blog/small-business-marketing-trends-report-2026/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">LocaliQ</a>, <a href="https://thrivethemes.com/250-small-business-marketing-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Thrive Themes</a>, and <a href="https://www.marketingprofs.com/charts/2025/52601/small-business-marketing-trends-challenges-goals-ai-use" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">MarketingProfs</a>:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { stat: "52%", label: "of SMBs have marketing budgets under $1,000/month", source: "LocaliQ", link: "https://localiq.com/blog/small-business-marketing-trends-report-2026/" },
                                    { stat: "50%", label: "have no employees dedicated to marketing", source: "LocaliQ Research", link: "https://localiq.com/blog/small-business-marketing-trends-report-2026/" },
                                    { stat: "18%", label: "feel 'very confident' in their marketing", source: "MarketingProfs", link: "https://www.marketingprofs.com/charts/2025/52601/small-business-marketing-trends-challenges-goals-ai-use" },
                                    { stat: "67%", label: "use AI tools for content marketing", source: "LocaliQ 2026", link: "https://localiq.com/blog/small-business-marketing-trends-report-2026/" },
                                    { stat: "43%", label: "struggle with creating engaging content", source: "Industry Research", link: "https://thrivethemes.com/250-small-business-marketing-statistics/" },
                                    { stat: "39%", label: "cite resource constraints as top challenge", source: "MarketingProfs", link: "https://www.marketingprofs.com/charts/2025/52601/small-business-marketing-trends-challenges-goals-ai-use" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl text-center">
                                        <div className="text-4xl font-bold text-slate-900 mb-2">{item.stat}</div>
                                        <p className="text-slate-600 font-medium mb-1">{item.label}</p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary-600 hover:underline">{item.source}</a>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Uncomfortable Truth</h4>
                                        <p className="text-slate-700">
                                            According to <a href="https://entrepreneurshq.com/small-business-statistics/" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">Entrepreneurs HQ</a>, 82% of businesses fail due to cash flow issues, and 14% fail specifically due to poor marketing. If you're spending money on tools you don't use effectively, you're accelerating toward both problems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="essential-tools" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Essential Marketing Stack for Small Businesses</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Not all marketing tools are created equal. Here's what actually moves the needle for small businesses, based on <a href="https://www.constantcontact.com/blog/small-business-now-report/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Constant Contact's research</a> and <a href="https://www.taboola.com/marketing-hub/small-business-marketing-trends/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Taboola's SMB survey</a>:
                                </p>
                            </div>

                            <div className="space-y-6 mb-8">
                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <Star className="w-5 h-5" />
                                        Must-Have (Non-Negotiable)
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {[
                                            { name: "Email Marketing", why: "$40 ROI per $1 spent—highest of any channel" },
                                            { name: "Google Business Profile", why: "Free, directly impacts local search visibility" },
                                            { name: "Social Media Presence", why: "71% of consumers expect brands to be active" },
                                            { name: "Website/SEO Basics", why: "Your 24/7 salesperson and credibility builder" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="bg-white p-4 rounded-lg">
                                                <h4 className="font-bold text-slate-900">{item.name}</h4>
                                                <p className="text-sm text-slate-600">{item.why}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                                        <TrendingUp className="w-5 h-5" />
                                        High-Impact (When Budget Allows)
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {[
                                            { name: "CRM", why: "34% sales productivity boost (Salesforce)" },
                                            { name: "Marketing Automation", why: "451% more qualified leads" },
                                            { name: "Content Creation Tools", why: "2.5 hours saved daily with AI" },
                                            { name: "Analytics/Reporting", why: "Data-driven decisions beat guessing" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="bg-white p-4 rounded-lg">
                                                <h4 className="font-bold text-slate-900">{item.name}</h4>
                                                <p className="text-sm text-slate-600">{item.why}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
                                        <Timer className="w-5 h-5" />
                                        Nice-to-Have (Later Stage)
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {[
                                            { name: "Advanced SEO Tools", why: "Once you have content to optimize" },
                                            { name: "Paid Ads Management", why: "After organic channels are working" },
                                            { name: "Video Production", why: "1,200% more shares, but time-intensive" },
                                            { name: "Influencer Platforms", why: "Niche strategy, not core need" }
                                        ].map((item, idx) => (
                                            <div key={idx} className="bg-white p-4 rounded-lg">
                                                <h4 className="font-bold text-slate-900">{item.name}</h4>
                                                <p className="text-sm text-slate-600">{item.why}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="tool-categories" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Marketing Tool Categories & Costs</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Here's what each category of marketing tool typically costs, and how Dooza's AI employees compare:
                            </p>

                            <div className="space-y-6 mb-8">
                                {toolCategories.map((category, idx) => (
                                    <div key={idx} className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                                                <category.icon size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-slate-900 text-xl mb-2">{category.title}</h3>
                                                <p className="text-slate-600 mb-4">{category.description}</p>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="bg-slate-50 p-3 rounded-lg">
                                                        <div className="text-xs font-bold text-slate-500 mb-2">TRADITIONAL TOOLS</div>
                                                        <ul className="text-sm text-slate-600 space-y-1">
                                                            {category.tools.map((tool, tidx) => (
                                                                <li key={tidx}>• {tool}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="bg-primary-50 p-3 rounded-lg">
                                                        <div className="text-xs font-bold text-primary-600 mb-2">DOOZA ALTERNATIVE</div>
                                                        <p className="text-sm text-primary-700 font-medium">{category.dooza}</p>
                                                        <p className="text-xs text-primary-600 mt-1">Included in $29/mo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="cost-comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The True Cost of Marketing Tools</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Let's add up what a "basic" marketing stack actually costs:
                            </p>

                            <div className="bg-red-50 border border-red-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-red-800 mb-6 text-xl">Typical Small Business Marketing Stack</h3>
                                <div className="space-y-3 mb-6">
                                    {[
                                        { tool: "Email Marketing (Mailchimp)", cost: "$45/mo" },
                                        { tool: "Social Media (Buffer Pro)", cost: "$60/mo" },
                                        { tool: "SEO Tool (Ahrefs Lite)", cost: "$129/mo" },
                                        { tool: "CRM (HubSpot Starter)", cost: "$20/mo" },
                                        { tool: "Phone Service", cost: "$50/mo" },
                                        { tool: "Content Creation (Jasper)", cost: "$49/mo" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-red-200 pb-2">
                                            <span className="text-slate-700">{item.tool}</span>
                                            <span className="font-bold text-red-700">{item.cost}</span>
                                        </div>
                                    ))}
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="font-bold text-slate-900">Monthly Total</span>
                                        <span className="font-bold text-red-700 text-xl">$353/mo</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-slate-900">Annual Total</span>
                                        <span className="font-bold text-red-700 text-xl">$4,236/year</span>
                                    </div>
                                </div>
                                <p className="text-red-700 text-sm">
                                    * And this doesn't include the 10+ hours/week YOU spend managing these disconnected tools
                                </p>
                            </div>

                            <div className="bg-green-50 border-2 border-green-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-green-800 mb-6 text-xl">Dooza: One Platform, 6 AI Employees</h3>
                                <div className="space-y-3 mb-6">
                                    {[
                                        { employee: "Eva - Email Manager", included: true },
                                        { employee: "Somi - Social Media Manager", included: true },
                                        { employee: "Seomi - SEO Specialist", included: true },
                                        { employee: "Stan - Lead Generator", included: true },
                                        { employee: "Rachel - AI Receptionist", included: true },
                                        { employee: "Linda - Legal Assistant", included: true }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-green-200 pb-2">
                                            <span className="text-slate-700">{item.employee}</span>
                                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        </div>
                                    ))}
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="font-bold text-slate-900">Monthly Total</span>
                                        <span className="font-bold text-green-700 text-xl">$29/mo</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-slate-900">Annual Total</span>
                                        <span className="font-bold text-green-700 text-xl">$348/year</span>
                                    </div>
                                </div>
                                <p className="text-green-700 font-bold text-lg text-center">
                                    Save $3,888/year + 10+ hours/week
                                </p>
                            </div>
                        </section>

                        <section id="dooza-solution" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The AI-First Approach to Small Business Marketing</h2>

                            <div className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Bot size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Stop Managing Tools. Start Growing Your Business.</h3>
                                        <p className="text-lg text-slate-700 mb-4">
                                            The problem with traditional tools isn't that they don't work—it's that you have to work them. Dooza's AI employees don't just provide tools; they do the work:
                                        </p>
                                        <ul className="space-y-2 text-slate-700">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span>Content is created AND published automatically</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span>Leads are responded to within seconds—24/7</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span>Phone calls are answered even when you can't</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span>You approve what goes out, but the work is done for you</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    The Small Business AI Advantage
                                </h4>
                                <p className="text-blue-700">
                                    According to <a href="https://localiq.com/blog/small-business-marketing-trends-report-2026/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LocaliQ</a>, small businesses using AI see a <strong>25% increase in marketing ROI</strong>. Unlike enterprise solutions that cost thousands, Dooza brings enterprise-level AI marketing to small businesses at a price that makes sense: <strong>$29/month for 6 AI employees</strong>.
                                </p>
                            </div>
                        </section>

                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Audit Your Current Tool Spend",
                                        desc: "Add up what you're paying for marketing tools. Include the time you spend managing them (your time has value too). You might be surprised."
                                    },
                                    {
                                        step: "2",
                                        title: "Book a Free Onboarding Call",
                                        desc: "In 30 minutes, we'll understand your business, configure your AI employees to match your brand, and connect your accounts."
                                    },
                                    {
                                        step: "3",
                                        title: "Let AI Take Over the Busywork",
                                        desc: "Your AI employees start creating content, responding to leads, and handling calls. You approve what goes out and focus on running your business."
                                    },
                                    {
                                        step: "4",
                                        title: "Cancel the Subscriptions You Don't Need",
                                        desc: "Once Dooza is handling your marketing, you can cancel the individual tools you no longer need. Most customers consolidate 4-6 subscriptions."
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

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Simplify Your Marketing?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Stop juggling 5 different tools and spending hours on tasks AI can handle. Get 6 AI employees for less than most businesses pay for a single tool.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Get Started - $29/month <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book Free Onboarding
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

                        {/* Sources Section */}
                        <section className="scroll-mt-28 border-t border-slate-200 pt-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Sources & References</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Small Business Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://localiq.com/blog/small-business-marketing-trends-report-2026/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">LocaliQ - SMB Marketing Trends 2026</a></li>
                                        <li>• <a href="https://thrivethemes.com/250-small-business-marketing-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Thrive Themes - 250+ SMB Statistics</a></li>
                                        <li>• <a href="https://www.marketingprofs.com/charts/2025/52601/small-business-marketing-trends-challenges-goals-ai-use" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">MarketingProfs - SMB Trends</a></li>
                                        <li>• <a href="https://entrepreneurshq.com/small-business-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Entrepreneurs HQ - Business Statistics</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Marketing Tool Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.constantcontact.com/blog/small-business-now-report/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Constant Contact - Small Business Report</a></li>
                                        <li>• <a href="https://www.taboola.com/marketing-hub/small-business-marketing-trends/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Taboola - SMB Marketing Trends</a></li>
                                        <li>• <a href="https://www.globaltrademag.com/small-business-marketing-predictions-for-2026/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Global Trade - 2026 Predictions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="small-business-marketing-tools" category="Small Business" tags={['Marketing Tools', 'Small Business', 'AI Marketing']} />
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
