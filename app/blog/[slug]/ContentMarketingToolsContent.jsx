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
    DollarSign,
    Bot,
    PenTool,
    FileText,
    Star,
    TrendingUp,
    Users,
    AlertTriangle,
    MessageSquare,
    Image,
    Video,
    BarChart3,
    Target,
    Lightbulb,
    BookOpen,
    Layers
} from 'lucide-react';

const faqData = [
    {
        question: "What are content marketing tools?",
        answer: "Content marketing tools help you plan, create, distribute, and measure content. This includes writing tools (Jasper, Copy.ai), design tools (Canva), SEO tools (Semrush, Ahrefs), scheduling tools (Buffer, Hootsuite), and analytics tools. Most businesses need several tools working together—or one AI platform that handles everything."
    },
    {
        question: "How much should small businesses spend on content marketing tools?",
        answer: "According to research, 48% of small businesses spend $1,000 or less monthly on content marketing. Many overspend on multiple disconnected tools. A smarter approach: use free basics (Google Analytics, Canva free) plus one comprehensive AI tool that handles creation and distribution."
    },
    {
        question: "What's the ROI of content marketing?",
        answer: "Content marketing generates 3x more leads than outbound marketing at 62% lower cost, according to DemandMetric. Companies with blogs get 67% more leads than those without. The challenge isn't ROI—it's consistency. Most businesses start strong then trail off. AI tools solve this by ensuring consistent output."
    },
    {
        question: "Can AI really create good content?",
        answer: "Yes, with the right approach. AI-generated content reduces production costs by 65% and AI-assisted blogs increase organic traffic by 120% within 6 months. The key is using AI as a foundation and adding your expertise, brand voice, and unique insights. 83% of content marketers now use AI this way."
    },
    {
        question: "How do I create content consistently when I'm too busy?",
        answer: "This is the #1 content marketing challenge. Options: (1) Hire a content team ($3,000-10,000+/month), (2) Use an agency ($2,000-5,000+/month), (3) Batch create content (time-intensive), or (4) Use AI that creates and publishes automatically. For most small businesses, AI is the only affordable path to consistency."
    },
    {
        question: "What type of content should I create first?",
        answer: "Start with content that answers your customers' most common questions. These have immediate value (customers find you) and long-term SEO value (you rank for those queries). Blog posts, FAQ pages, and how-to guides are ideal starting points. Video can come later once you have a text content foundation."
    }
];

const contentTools = [
    {
        category: "Writing & Creation",
        icon: PenTool,
        tools: [
            { name: "Jasper AI", price: "$49-125/mo", desc: "AI writing assistant" },
            { name: "Copy.ai", price: "$49-249/mo", desc: "AI copywriting" },
            { name: "ChatGPT Plus", price: "$20/mo", desc: "General AI writing" },
            { name: "Grammarly", price: "$12-30/mo", desc: "Grammar & style" }
        ]
    },
    {
        category: "Design & Visual",
        icon: Image,
        tools: [
            { name: "Canva", price: "Free-$15/mo", desc: "Graphic design" },
            { name: "Adobe Creative", price: "$55-85/mo", desc: "Professional design" },
            { name: "Figma", price: "Free-$15/mo", desc: "UI/UX design" }
        ]
    },
    {
        category: "Video",
        icon: Video,
        tools: [
            { name: "Descript", price: "$15-30/mo", desc: "Video editing" },
            { name: "Loom", price: "Free-$15/mo", desc: "Screen recording" },
            { name: "Synthesia", price: "$22-67/mo", desc: "AI video" }
        ]
    },
    {
        category: "Distribution",
        icon: MessageSquare,
        tools: [
            { name: "Buffer", price: "$6-120/mo", desc: "Social scheduling" },
            { name: "Hootsuite", price: "$99-739/mo", desc: "Social management" },
            { name: "Later", price: "Free-$40/mo", desc: "Visual planning" }
        ]
    },
    {
        category: "SEO & Research",
        icon: Target,
        tools: [
            { name: "Semrush", price: "$140-500/mo", desc: "All-in-one SEO" },
            { name: "Ahrefs", price: "$29-449/mo", desc: "Backlinks & SEO" },
            { name: "Surfer SEO", price: "$89-219/mo", desc: "Content optimization" }
        ]
    },
    {
        category: "Analytics",
        icon: BarChart3,
        tools: [
            { name: "Google Analytics", price: "Free", desc: "Website analytics" },
            { name: "Hotjar", price: "Free-$99/mo", desc: "User behavior" },
            { name: "Databox", price: "$72-231/mo", desc: "Dashboard reporting" }
        ]
    }
];

export default function ContentMarketingToolsContent() {
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
            const sections = ['introduction', 'challenges', 'tool-landscape', 'cost-reality', 'ai-solution', 'what-dooza-does', 'getting-started', 'faq'];
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
            <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Content Marketing Tools' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-6">
                            <BookOpen size={16} />
                            <span>Content Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">Content Marketing Tools</span>: What You Actually Need in 2026
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            54% of businesses say lack of resources is their biggest content challenge. Learn which tools actually help—and why AI might replace your entire tool stack for a fraction of the cost.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>11 min read</span>
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
                                Get AI Content Creation - $29/mo
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
                                    { id: 'challenges', label: 'Content Challenges' },
                                    { id: 'tool-landscape', label: 'Tool Landscape' },
                                    { id: 'cost-reality', label: 'The Cost Reality' },
                                    { id: 'ai-solution', label: 'The AI Solution' },
                                    { id: 'what-dooza-does', label: 'What Dooza Does' },
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
                                <p className="text-sm text-slate-600 mb-4">Create content effortlessly</p>
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
                                <InternalLinks currentSlug="content-marketing-tools" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    You know content marketing works. You've read the stats. You understand that companies with blogs get 67% more leads. But here's the uncomfortable truth: knowing isn't the same as doing.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    According to <a href="https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Content Marketing Institute</a>, the top two reasons businesses don't develop content strategies are: <strong>small team (67%)</strong> and <strong>lack of time (44%)</strong>. Sound familiar?
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The content tool market has exploded—there are now tools for writing, design, video, distribution, analytics, and optimization. But more tools often means more complexity, more subscriptions, and more time managing tools instead of creating content.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This guide cuts through the noise. We'll show you the content tool landscape, what things actually cost, and why AI-powered content creation is becoming the only viable option for resource-constrained businesses.
                                </p>

                                {/* YouTube Video Embed */}
                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="0R_3iarc8IA"
                                        title="Content Marketing for Beginners - Complete Guide"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: The essential content marketing strategies for 2026</p>
                                </div>

                                <div className="bg-orange-50 border border-orange-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Lightbulb className="w-6 h-6 text-orange-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Consistency Problem</h4>
                                            <p className="text-slate-700">
                                                According to <a href="https://www.demandsage.com/content-marketing-statistics/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">DemandSage research</a>, <strong>45% of B2B marketers lack scalable content creation models</strong>. They know what to do but can't do it consistently. Tools alone don't solve this—you need execution capacity.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="challenges" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Content Marketing Challenges</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Data from <a href="https://penfriend.ai/blog/content-marketing-stats" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Penfriend</a>, <a href="https://www.semrush.com/blog/content-marketing-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Semrush</a>, and <a href="https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">CMI</a>:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { stat: "54%", label: "cite lack of resources as biggest challenge", source: "CMI Research", link: "https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research" },
                                    { stat: "45%", label: "struggle to attract quality leads", source: "Penfriend", link: "https://penfriend.ai/blog/content-marketing-stats" },
                                    { stat: "38%", label: "need to create content faster", source: "Semrush", link: "https://www.semrush.com/blog/content-marketing-statistics/" },
                                    { stat: "35%", label: "struggle with generating ideas", source: "Industry Research", link: "https://www.demandsage.com/content-marketing-statistics/" },
                                    { stat: "64%", label: "adapting to SEO changes is challenging", source: "Content Research", link: "https://www.searchenginejournal.com/content-marketing-statistics-you-should-know/507173/" },
                                    { stat: "18%", label: "feel they have the right technology", source: "CMI Research", link: "https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-xl text-center">
                                        <div className="text-4xl font-bold text-red-600 mb-2">{item.stat}</div>
                                        <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-red-600 hover:underline">{item.source}</a>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Tool Paradox</h4>
                                        <p className="text-slate-700">
                                            Only 18% of content marketers feel they have the right technology, but <strong>45% say they have tools they aren't using to their potential</strong>. The problem isn't finding tools—it's having the time to use them effectively.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="tool-landscape" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Content Marketing Tool Landscape</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Here's what a "complete" content marketing tech stack looks like:
                            </p>

                            <div className="space-y-6 mb-8">
                                {contentTools.map((category, idx) => (
                                    <div key={idx} className="bg-white border-2 border-slate-200 p-6 rounded-xl">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                                                <category.icon size={20} />
                                            </div>
                                            <h3 className="font-bold text-slate-900 text-lg">{category.category}</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {category.tools.map((tool, tidx) => (
                                                <div key={tidx} className="bg-slate-50 p-3 rounded-lg">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <span className="font-medium text-slate-900">{tool.name}</span>
                                                            <p className="text-xs text-slate-500">{tool.desc}</p>
                                                        </div>
                                                        <span className="text-sm font-bold text-slate-700">{tool.price}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="cost-reality" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The True Cost of Content Marketing</h2>

                            <div className="bg-red-50 border border-red-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-red-800 mb-6 text-xl">What a "Basic" Content Stack Actually Costs</h3>
                                <div className="space-y-3 mb-6">
                                    {[
                                        { tool: "AI Writing Tool (Jasper)", cost: "$49/mo" },
                                        { tool: "Design Tool (Canva Pro)", cost: "$15/mo" },
                                        { tool: "SEO Tool (Ahrefs Lite)", cost: "$129/mo" },
                                        { tool: "Social Scheduling (Buffer)", cost: "$60/mo" },
                                        { tool: "Analytics (Premium)", cost: "$50/mo" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-red-200 pb-2">
                                            <span className="text-slate-700">{item.tool}</span>
                                            <span className="font-bold text-red-700">{item.cost}</span>
                                        </div>
                                    ))}
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="font-bold text-slate-900">Monthly Total</span>
                                        <span className="font-bold text-red-700 text-xl">$303/mo</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-slate-900">Annual Total</span>
                                        <span className="font-bold text-red-700 text-xl">$3,636/year</span>
                                    </div>
                                </div>
                                <p className="text-red-700 text-sm">
                                    * Plus the time to learn, manage, and actually USE all these tools (10+ hours/week)
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-8">
                                <h4 className="font-bold text-blue-800 mb-3">The Hidden Cost: Your Time</h4>
                                <p className="text-blue-700">
                                    According to <a href="https://www.hubspot.com/marketing-statistics" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">HubSpot research</a>, marketers using AI save <strong>2.5 hours per day</strong>. Without AI doing the heavy lifting, you're trading your most valuable resource (time) to manage tools that only do part of the job.
                                </p>
                            </div>
                        </section>

                        <section id="ai-solution" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The AI-Powered Alternative</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Here's the shift happening in content marketing: instead of buying tools that help you create content, businesses are adopting AI that <strong>creates content for them</strong>.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { stat: "83%", label: "of content marketers use AI", source: "CMI 2025", link: "https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research" },
                                    { stat: "65%", label: "reduction in production costs", source: "DemandSage", link: "https://www.demandsage.com/content-marketing-statistics/" },
                                    { stat: "84%", label: "faster content delivery", source: "Industry Research", link: "https://www.demandsage.com/content-marketing-statistics/" },
                                    { stat: "68%", label: "increase in content ROI with AI", source: "Marketing Research", link: "https://genesysgrowth.com/blog/content-marketing-roi-stats-for-marketing-leaders" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-green-50 border border-green-100 p-6 rounded-xl text-center">
                                        <div className="text-4xl font-bold text-green-600 mb-2">{item.stat}</div>
                                        <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 hover:underline">{item.source}</a>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-br from-primary-50 to-orange-50 border-2 border-primary-200 p-8 rounded-2xl">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Key Difference</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="text-sm font-bold text-slate-500 mb-2">TRADITIONAL TOOLS</div>
                                        <p className="text-slate-600">Help you create content (you still do the work)</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="text-sm font-bold text-primary-600 mb-2">AI EMPLOYEES</div>
                                        <p className="text-slate-600">Create and publish content (you just approve)</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="what-dooza-does" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How Dooza Handles Content Marketing</h2>

                            <div className="space-y-6 mb-8">
                                {[
                                    {
                                        icon: PenTool,
                                        employee: "Seomi",
                                        title: "AI SEO & Blog Specialist",
                                        description: "Writes and publishes SEO-optimized blog posts daily. Researches keywords, creates content that ranks, handles internal linking, and manages your content calendar—all automatically.",
                                        replaces: "SEO tool + AI writer + content manager"
                                    },
                                    {
                                        icon: MessageSquare,
                                        employee: "Somi",
                                        title: "AI Social Media Manager",
                                        description: "Creates and posts engaging social content across all your platforms. Maintains consistent posting schedule, adapts content for each platform, and keeps your brand voice consistent.",
                                        replaces: "Social scheduling tool + content creator"
                                    },
                                    {
                                        icon: FileText,
                                        employee: "Eva",
                                        title: "AI Email Manager",
                                        description: "Drafts email campaigns, follow-up sequences, and newsletters. Personalizes content for different segments and ensures consistent communication with your audience.",
                                        replaces: "Email marketing tool + copywriter"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h3 className="font-bold text-slate-900 text-lg">{item.employee}</h3>
                                                    <span className="text-sm text-slate-500">— {item.title}</span>
                                                </div>
                                                <p className="text-slate-600 mb-3">{item.description}</p>
                                                <p className="text-sm text-primary-600 bg-primary-50 p-2 rounded">
                                                    <strong>Replaces:</strong> {item.replaces}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-green-50 border-2 border-green-200 p-8 rounded-xl">
                                <h3 className="font-bold text-green-800 mb-6 text-xl">The Cost Comparison</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white p-6 rounded-lg">
                                        <div className="text-sm font-bold text-slate-500 mb-2">TRADITIONAL TOOL STACK</div>
                                        <div className="text-3xl font-bold text-slate-900 mb-1">$303+/mo</div>
                                        <p className="text-sm text-slate-600">5+ tools, you do the work</p>
                                    </div>
                                    <div className="bg-green-100 p-6 rounded-lg">
                                        <div className="text-sm font-bold text-green-600 mb-2">DOOZA AI EMPLOYEES</div>
                                        <div className="text-3xl font-bold text-green-700 mb-1">$29/mo</div>
                                        <p className="text-sm text-green-600">6 AI employees, they do the work</p>
                                    </div>
                                </div>
                                <p className="text-center text-green-700 font-bold mt-6 text-lg">
                                    Save $3,288/year + 10+ hours/week
                                </p>
                            </div>
                        </section>

                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Audit Your Current Content Situation",
                                        desc: "How much content are you creating? How much should you be creating? What's the gap? Be honest—most businesses are creating far less than they need."
                                    },
                                    {
                                        step: "2",
                                        title: "Calculate Your Current Tool Spend",
                                        desc: "Add up every content-related subscription. Include design tools, writing tools, SEO tools, scheduling tools. You might be surprised by the total."
                                    },
                                    {
                                        step: "3",
                                        title: "Book a Free Onboarding Call",
                                        desc: "In 30 minutes, we'll understand your content needs, configure your AI employees to match your brand voice, and get them creating content immediately."
                                    },
                                    {
                                        step: "4",
                                        title: "Approve and Watch Content Flow",
                                        desc: "Your AI employees create content; you review and approve. Most clients find they can cancel multiple subscriptions within the first month."
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Create Content Consistently?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Stop paying for tools you don't have time to use. Get AI employees that create and publish content while you focus on your business.
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Content Marketing Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">CMI - B2B Content Marketing Trends</a></li>
                                        <li>• <a href="https://www.demandsage.com/content-marketing-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">DemandSage - Content Marketing Statistics</a></li>
                                        <li>• <a href="https://www.semrush.com/blog/content-marketing-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Semrush - 96 Content Statistics</a></li>
                                        <li>• <a href="https://penfriend.ai/blog/content-marketing-stats" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Penfriend - Marketing Stats</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">ROI & Industry Data</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://genesysgrowth.com/blog/content-marketing-roi-stats-for-marketing-leaders" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">GenesysGrowth - Content ROI Stats</a></li>
                                        <li>• <a href="https://www.hubspot.com/marketing-statistics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">HubSpot - Marketing Statistics</a></li>
                                        <li>• <a href="https://www.searchenginejournal.com/content-marketing-statistics-you-should-know/507173/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">SEJ - Content Statistics</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="content-marketing-tools" category="Content Marketing" tags={['Content Marketing', 'Content Tools', 'AI Content']} />
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
