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
    DollarSign,
    Bot,
    Sparkles,
    PenTool,
    FileText,
    Star,
    TrendingUp,
    Users,
    AlertTriangle,
    MessageSquare,
    Globe,
    BarChart3,
    Mail,
    Target,
    Lightbulb,
    Timer,
    BadgeCheck
} from 'lucide-react';

const faqData = [
    {
        question: "What is AI copywriting?",
        answer: "AI copywriting uses artificial intelligence and natural language processing to generate marketing copy, blog posts, social media content, emails, and other written materials. Modern AI copywriting tools like Dooza's Sonny and Seomi can create human-quality content that matches your brand voice, saving hours of writing time while maintaining quality."
    },
    {
        question: "Is AI-generated content good for SEO?",
        answer: "Yes, when done right. Google's guidelines focus on content quality and helpfulness, not whether it was AI-generated. According to research, AI-assisted blog writing increases organic traffic by 120% within 6 months. The key is using AI as a starting point, then adding your expertise and unique insights to make content truly valuable."
    },
    {
        question: "Will AI replace human copywriters?",
        answer: "AI augments copywriters rather than replacing them. According to industry data, 78% of copywriters now use AI tools to work faster. The best results come from combining AI efficiency with human creativity, strategy, and brand knowledge. AI handles the heavy lifting; humans add the magic."
    },
    {
        question: "How much do AI copywriting tools cost?",
        answer: "Standalone AI copywriting tools like Jasper AI ($49-$125/month) and Copy.ai ($49-$249/month) focus only on writing. Dooza includes AI copywriting through Sonny (social media) and Seomi (SEO/blogs) as part of a complete AI employee suite for just $29/month—along with email management, phone answering, and lead generation."
    },
    {
        question: "Can AI write in my brand voice?",
        answer: "Yes. Modern AI tools learn your brand voice, tone, and style preferences. During Dooza's onboarding, we configure your AI employees to match your brand personality, industry terminology, and communication style. Most users find the content needs minimal editing to sound authentic."
    },
    {
        question: "Is AI copywriting ethical?",
        answer: "AI copywriting is ethical when used transparently. The FTC's 2025 guidelines and EU's AI Transparency Act require disclosure in certain contexts. For marketing content, the focus should be on providing genuine value to readers. AI is a tool—like spell-checkers or grammar tools—that helps create better content faster."
    },
    {
        question: "How do I get started with AI copywriting?",
        answer: "Start by identifying your biggest content bottleneck—social media, blogs, emails, or ads. Then choose a tool that addresses that need. With Dooza, our free concierge onboarding configures everything for you in 30 minutes. Your AI employees start creating content immediately, and you approve before publishing."
    }
];

const useCases = [
    {
        icon: Mail,
        title: "Email Marketing",
        description: "Subject lines, newsletters, drip campaigns, and follow-up sequences that convert.",
        stat: "34% higher open rates with AI personalization"
    },
    {
        icon: MessageSquare,
        title: "Social Media Posts",
        description: "Engaging posts, captions, and content calendars for all platforms.",
        stat: "2.5 hours saved daily on content creation"
    },
    {
        icon: FileText,
        title: "Blog Posts & Articles",
        description: "SEO-optimized long-form content that ranks and drives organic traffic.",
        stat: "120% increase in organic traffic in 6 months"
    },
    {
        icon: Target,
        title: "Ad Copy",
        description: "Headlines, descriptions, and CTAs for Google, Facebook, and other platforms.",
        stat: "38% higher CTR with AI-optimized ads"
    },
    {
        icon: Globe,
        title: "Website Copy",
        description: "Landing pages, product descriptions, and homepage content that converts.",
        stat: "63% higher lead generation reported"
    },
    {
        icon: Users,
        title: "Sales Outreach",
        description: "Cold emails, LinkedIn messages, and personalized sales sequences.",
        stat: "51% more qualified leads generated"
    }
];

export default function AiCopywritingToolsContent() {
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
            const sections = ['introduction', 'what-is-ai-copywriting', 'why-it-matters', 'use-cases', 'how-it-works', 'tools-comparison', 'dooza-solution', 'getting-started', 'faq'];
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
            <div className="bg-gradient-to-br from-violet-50 via-white to-pink-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'AI Copywriting Tools' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-6">
                            <PenTool size={16} />
                            <span>AI Content Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            What is <span className="text-primary-600">AI Copywriting</span>? The Complete Guide for 2026
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            78% of marketers now use AI for content creation. Learn how AI copywriting tools work, why they're transforming marketing, and how to use them to create better content faster—without losing your brand voice.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
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
                                Try AI Copywriting - $29/month
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
                                    { id: 'what-is-ai-copywriting', label: 'What is AI Copywriting?' },
                                    { id: 'why-it-matters', label: 'Why It Matters' },
                                    { id: 'use-cases', label: 'Use Cases' },
                                    { id: 'how-it-works', label: 'How It Works' },
                                    { id: 'tools-comparison', label: 'Tools Comparison' },
                                    { id: 'dooza-solution', label: 'Dooza Solution' },
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
                                <p className="text-sm text-slate-600 mb-4">Ready to try AI copywriting?</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Start Free Trial
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="ai-copywriting-tools" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Creating content is exhausting. You know you need to post on social media, write blog posts, send emails, and create ads—but there are only so many hours in a day.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    That's why <strong>78% of marketers now use AI copywriting tools</strong>, according to <a href="https://www.siegemedia.com/strategy/ai-writing-statistics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Siege Media research</a>. These tools don't replace human creativity—they amplify it, helping you create more content in less time while maintaining quality.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    In this guide, you'll learn exactly what AI copywriting is, how it works, and how businesses are using it to transform their marketing. We'll compare the top tools and show you how to get started—even if you've never used AI before.
                                </p>

                                {/* YouTube Video Embed */}
                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="0R_3iarc8IA"
                                        title="Content Marketing for Beginners - Complete Guide"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: How AI copywriting is changing content creation</p>
                                </div>

                                <div className="bg-violet-50 border border-violet-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Sparkles className="w-6 h-6 text-violet-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Bottom Line</h4>
                                            <p className="text-slate-700">
                                                AI copywriting tools reduce content production costs by <strong>65%</strong> and save marketers <strong>2.5 hours per day</strong>. Brands using AI report <strong>63% higher organic traffic</strong> and <strong>51% more lead generation</strong> compared to traditional methods.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="what-is-ai-copywriting" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is AI Copywriting?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    <strong>AI copywriting</strong> is the use of artificial intelligence—specifically large language models (LLMs) like GPT-4, Claude, and Gemini—to generate written marketing content. This includes:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Blog posts and articles",
                                    "Social media content",
                                    "Email campaigns",
                                    "Ad headlines and copy",
                                    "Product descriptions",
                                    "Website landing pages",
                                    "Sales outreach messages",
                                    "Video scripts"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-8">
                                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                                    <Lightbulb className="w-5 h-5" />
                                    How It Works (Simply Explained)
                                </h4>
                                <p className="text-blue-700 mb-4">
                                    AI copywriting tools are trained on billions of text examples—books, articles, websites, and marketing materials. They learn patterns of effective communication: what makes a headline compelling, how to structure an argument, what tone resonates with different audiences.
                                </p>
                                <p className="text-blue-700">
                                    When you give the AI a prompt ("Write a blog post about email marketing for small businesses"), it generates content based on these learned patterns. The best tools let you customize for your brand voice, industry, and audience.
                                </p>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">AI Copywriting ≠ Fully Automated Content</h4>
                                        <p className="text-slate-700">
                                            The best results come from human + AI collaboration. AI handles the heavy lifting—research, first drafts, variations—while humans add strategy, brand voice, fact-checking, and creative direction. According to <a href="https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">Content Marketing Institute</a>, 83% of content marketers use AI as a starting point, not an endpoint.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="why-it-matters" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why AI Copywriting Matters (The Numbers)</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This isn't hype—it's what's actually happening. Data from <a href="https://www.siegemedia.com/strategy/ai-writing-statistics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Siege Media</a>, <a href="https://www.hubspot.com/marketing-statistics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">HubSpot</a>, and <a href="https://www.demandsage.com/content-marketing-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">DemandSage</a>:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { stat: "78%", label: "of marketers use AI for content", source: "Siege Media", link: "https://www.siegemedia.com/strategy/ai-writing-statistics" },
                                    { stat: "65%", label: "reduction in content production costs", source: "DemandSage", link: "https://www.demandsage.com/content-marketing-statistics/" },
                                    { stat: "2.5hrs", label: "saved daily using AI for content", source: "HubSpot", link: "https://www.hubspot.com/marketing-statistics" },
                                    { stat: "120%", label: "increase in organic traffic (6 months)", source: "Industry Research", link: "https://www.omnifunnelmarketing.com/blog/efficiency-unleashed-5-best-ai-copywriting-tools-beyond-chatgpt-in-2025" },
                                    { stat: "$350→$47", label: "cost per article (human vs AI-assisted)", source: "Content Research", link: "https://contentautomations.com/blog/news/emerging-trends-in-ai-copywriting-what-to-expect-in-2026" },
                                    { stat: "84%", label: "faster content delivery with AI", source: "Marketing Research", link: "https://www.demandsage.com/content-marketing-statistics/" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-primary-50 border border-primary-100 p-6 rounded-xl text-center">
                                        <div className="text-4xl font-bold text-primary-600 mb-2">{item.stat}</div>
                                        <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary-600 hover:underline">{item.source}</a>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    The Competitive Reality
                                </h4>
                                <p className="text-green-700">
                                    According to <a href="https://sintra.ai/blog/how-ai-is-affecting-copywriting-in-2025" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">industry analysis</a>, businesses using AI copywriting publish <strong>113% more content</strong> with the same team size. If you're not using AI, you're competing against businesses that create more content, faster, and cheaper. The question isn't whether to adopt AI—it's how quickly you can get started.
                                </p>
                            </div>
                        </section>

                        <section id="use-cases" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">AI Copywriting Use Cases</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Here's how businesses are actually using AI copywriting to drive results:
                            </p>

                            <div className="grid gap-6 mb-8">
                                {useCases.map((useCase, idx) => (
                                    <div key={idx} className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                                                <useCase.icon size={24} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                                    <h3 className="font-bold text-slate-900 text-lg">{useCase.title}</h3>
                                                    <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">{useCase.stat}</span>
                                                </div>
                                                <p className="text-slate-600">{useCase.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="how-it-works" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How AI Copywriting Tools Work</h2>

                            <div className="space-y-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                        Input Your Requirements
                                    </h3>
                                    <p className="text-slate-600">
                                        You provide the AI with context: what you want to create, who it's for, what tone to use, and any specific points to include. The more context you give, the better the output.
                                    </p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                        AI Generates Content
                                    </h3>
                                    <p className="text-slate-600">
                                        The AI analyzes your input, draws on its training data, and generates content that matches your requirements. Modern tools can create multiple variations for you to choose from.
                                    </p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                        You Review and Refine
                                    </h3>
                                    <p className="text-slate-600">
                                        You review the AI's output, make edits, add your unique insights, and refine until it's perfect. This human touch is what separates good AI content from generic output.
                                    </p>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                                        Publish and Measure
                                    </h3>
                                    <p className="text-slate-600">
                                        Publish your content and track performance. The best tools (like Dooza) handle publishing automatically and let you see what's working so you can optimize over time.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="tools-comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">AI Copywriting Tools Comparison</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Here's how the major AI copywriting tools compare, based on <a href="https://supademo.com/blog/ai-copywriting-tools" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">independent testing</a> and <a href="https://visme.co/blog/ai-tools-for-content-creation/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">industry reviews</a>:
                            </p>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-slate-100">
                                            <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Tool</th>
                                            <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Starting Price</th>
                                            <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Best For</th>
                                            <th className="text-left p-4 font-bold text-slate-900 border-b border-slate-200">Limitations</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-slate-100">
                                            <td className="p-4 font-medium text-slate-900">ChatGPT</td>
                                            <td className="p-4 text-slate-600">$20/mo (Plus)</td>
                                            <td className="p-4 text-slate-600">General writing, brainstorming</td>
                                            <td className="p-4 text-slate-600">No automation, manual publishing</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <td className="p-4 font-medium text-slate-900">Jasper AI</td>
                                            <td className="p-4 text-slate-600">$49/mo</td>
                                            <td className="p-4 text-slate-600">Marketing teams, brand voice</td>
                                            <td className="p-4 text-slate-600">Writing only, no publishing</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <td className="p-4 font-medium text-slate-900">Copy.ai</td>
                                            <td className="p-4 text-slate-600">$49/mo</td>
                                            <td className="p-4 text-slate-600">Short-form copy, ads</td>
                                            <td className="p-4 text-slate-600">Limited long-form, no automation</td>
                                        </tr>
                                        <tr className="border-b border-slate-100">
                                            <td className="p-4 font-medium text-slate-900">Writesonic</td>
                                            <td className="p-4 text-slate-600">$20/mo</td>
                                            <td className="p-4 text-slate-600">Budget-friendly writing</td>
                                            <td className="p-4 text-slate-600">Quality varies, no automation</td>
                                        </tr>
                                        <tr className="bg-primary-50">
                                            <td className="p-4 font-bold text-primary-700">Dooza</td>
                                            <td className="p-4 font-bold text-primary-700">$29/mo</td>
                                            <td className="p-4 text-primary-700">Full automation + publishing</td>
                                            <td className="p-4 text-primary-700">Includes 6 AI employees</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <h4 className="font-bold text-amber-800 mb-3">The Key Difference</h4>
                                <p className="text-amber-700">
                                    Most AI copywriting tools just generate text—you still have to copy/paste, format, and publish manually. Dooza's AI employees (Sonny for social media, Seomi for SEO/blogs) create AND publish content automatically. You approve what goes live, but the heavy lifting is done for you.
                                </p>
                            </div>
                        </section>

                        <section id="dooza-solution" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Dooza Approach to AI Copywriting</h2>

                            <div className="bg-gradient-to-br from-primary-50 to-violet-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Bot size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">AI Employees, Not Just AI Tools</h3>
                                        <p className="text-lg text-slate-700 mb-4">
                                            Dooza doesn't just write content—it handles the entire workflow. Your AI employees:
                                        </p>
                                        <ul className="space-y-2 text-slate-700">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span><strong>Sonny</strong> creates and publishes social media content daily</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span><strong>Seomi</strong> writes and publishes SEO-optimized blog posts</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span><strong>Eva</strong> drafts and sends personalized emails</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span><strong>Stan</strong> writes outreach messages for lead generation</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <div className="text-slate-500 font-bold text-sm mb-2">TYPICAL AI WRITING TOOL</div>
                                    <ul className="space-y-3">
                                        {[
                                            "You write prompts",
                                            "You copy/paste output",
                                            "You format for each platform",
                                            "You schedule and publish",
                                            "You track results manually"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><XCircle className="w-5 h-5 text-red-400 shrink-0" /><span className="text-slate-600">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <div className="text-primary-600 font-bold text-sm mb-2">DOOZA AI EMPLOYEES</div>
                                    <ul className="space-y-3">
                                        {[
                                            "AI creates content autonomously",
                                            "Formatted for each platform automatically",
                                            "Published on schedule",
                                            "You just approve (or not)",
                                            "Results tracked for you"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /><span className="text-slate-700">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started with AI Copywriting</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Identify Your Content Bottleneck",
                                        desc: "Where do you struggle most? Social media? Blog posts? Emails? Start with the area that causes the most pain—you'll see the fastest ROI there."
                                    },
                                    {
                                        step: "2",
                                        title: "Book Your Free Onboarding (30 minutes)",
                                        desc: "Tell us about your business, brand voice, and content goals. We'll configure your AI employees to match your style and start creating immediately."
                                    },
                                    {
                                        step: "3",
                                        title: "Review and Approve",
                                        desc: "Your AI employees create content; you review and approve. Most users find they only need to make minor tweaks—if any—before publishing."
                                    },
                                    {
                                        step: "4",
                                        title: "Watch Content Work for You",
                                        desc: "As your AI employees publish consistently, you'll see organic traffic grow, engagement increase, and leads come in—while you focus on running your business."
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Try AI Copywriting?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Join the 78% of marketers already using AI to create better content faster. Start with Dooza's AI employees and see results within days—not months.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start AI Copywriting - $29/month <ArrowRight className="w-4 h-4" />
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
                                    <h4 className="font-semibold text-slate-800 mb-3">AI Writing Statistics</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.siegemedia.com/strategy/ai-writing-statistics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Siege Media - 50 AI Writing Statistics</a></li>
                                        <li>• <a href="https://www.hubspot.com/marketing-statistics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">HubSpot - 2025 Marketing Statistics</a></li>
                                        <li>• <a href="https://www.demandsage.com/content-marketing-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">DemandSage - Content Marketing Statistics</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">AI Copywriting Tools</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://supademo.com/blog/ai-copywriting-tools" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Supademo - Best AI Copywriting Tools</a></li>
                                        <li>• <a href="https://visme.co/blog/ai-tools-for-content-creation/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Visme - AI Tools for Content Creation</a></li>
                                        <li>• <a href="https://www.leadpages.com/blog/ai-copywriting-tools" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Leadpages - Top AI Copywriting Tools</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Industry Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://contentmarketinginstitute.com/b2b-research/b2b-content-marketing-trends-research" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Content Marketing Institute - B2B Trends</a></li>
                                        <li>• <a href="https://sintra.ai/blog/how-ai-is-affecting-copywriting-in-2025" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Sintra AI - How AI Affects Copywriting</a></li>
                                        <li>• <a href="https://contentautomations.com/blog/news/emerging-trends-in-ai-copywriting-what-to-expect-in-2026" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Content Automations - AI Copywriting Trends 2026</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Regulations & Best Practices</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">FTC - AI Disclosure Guidelines</a></li>
                                        <li>• <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google - Helpful Content Guidelines</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="ai-copywriting-tools" category="AI Education" tags={['AI Copywriting', 'Content Marketing', 'AI Tools']} />
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
