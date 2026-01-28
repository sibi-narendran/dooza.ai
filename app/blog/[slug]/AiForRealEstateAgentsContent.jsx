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
    MapPin,
    FileText,
    Star,
    TrendingUp,
    Users,
    Home,
    Heart,
    AlertTriangle,
    MessageSquare,
    Phone,
    Globe,
    BarChart3,
    PenTool,
    Mail,
    Instagram,
    Building2,
    Timer,
    Target,
    Megaphone
} from 'lucide-react';

const faqData = [
    {
        question: "Do I really need AI as a real estate agent?",
        answer: "According to NAR's 2025 Technology Survey, 68% of agents now use AI tools, and 47% of buyers say an agent's technology skills are 'very important' when choosing who to work with. AI isn't optional anymore—it's becoming the standard. Agents who adopt early are capturing more leads while competitors struggle with response times."
    },
    {
        question: "I'm not tech-savvy. Can I still use AI tools?",
        answer: "Absolutely. Dooza's AI employees are designed for busy agents, not tech experts. Our free concierge onboarding sets everything up for you in a 30-minute call. You don't need to configure anything—just tell us about your business and we handle the rest. If you can use email, you can use Dooza."
    },
    {
        question: "How does AI help with lead response time?",
        answer: "MIT research shows responding within 5 minutes makes you 10x more likely to connect with a lead. But most agents take hours to respond. Dooza's AI employees respond instantly—24/7—qualifying leads, answering questions, and booking appointments while you're showing properties or sleeping."
    },
    {
        question: "Can AI really write content that sounds like me?",
        answer: "Yes. Dooza's AI employees learn your brand voice, your market expertise, and your unique selling points. Sonny (social media) and Seomi (SEO/blogs) create content that reflects your personality and local knowledge. You approve everything before it posts, but most agents find the content needs minimal editing."
    },
    {
        question: "What about my existing CRM and tools?",
        answer: "Dooza integrates with popular real estate CRMs and tools. Our AI employees work alongside your existing tech stack, not replace it. During onboarding, we'll connect everything so leads flow seamlessly into your pipeline."
    },
    {
        question: "How much does a traditional real estate VA cost compared to Dooza?",
        answer: "According to industry data, human virtual assistants for real estate cost $1,000-$2,600/month for full-time help, or $20-40/hour in the US. Dooza gives you 6 AI employees working 24/7 for just $29/month—that's roughly 97% less than a single part-time VA, with no contracts or hourly limits."
    },
    {
        question: "How quickly will I see results?",
        answer: "Most agents see immediate improvements in response time and lead engagement within the first week. For SEO and social media, expect measurable growth in 30-90 days as content builds momentum. Unlike human assistants who need training, AI employees start working at full capacity from day one."
    }
];

const painPoints = [
    {
        icon: Timer,
        title: "Leads Go Cold While You're Showing Homes",
        description: "You're in the middle of a showing when a hot lead comes in. By the time you respond 2 hours later, they've already contacted 3 other agents. MIT research shows you're 10x less likely to connect after just 5 minutes."
    },
    {
        icon: Clock,
        title: "You're Working 60+ Hours But Still Behind",
        description: "Between showings, open houses, paperwork, and client calls, there's no time left for marketing. Studies show agents waste 10+ hours weekly on admin tasks—that's an entire workday that could go toward closing deals."
    },
    {
        icon: Instagram,
        title: "Social Media Feels Like a Second Job",
        description: "You know you should post consistently, but creating content takes hours you don't have. Meanwhile, the agent down the street is everywhere online, and clients are noticing."
    },
    {
        icon: Mail,
        title: "Your Inbox is a Disaster",
        description: "Hundreds of emails competing for attention. Important client messages buried under spam. You've definitely missed follow-ups that cost you deals—you just don't know how many."
    },
    {
        icon: Target,
        title: "Lead Follow-Up Falls Through the Cracks",
        description: "You have a list of leads you meant to nurture. Some are 6 months old. You know consistent follow-up is where deals come from, but there's always something more urgent demanding your attention."
    },
    {
        icon: DollarSign,
        title: "Marketing Costs Are Eating Your Commission",
        description: "Zillow leads cost $139-$450 each. Social media managers want $1,500/month. A VA costs $1,000-$2,600/month. After splits, marketing, and expenses, your actual take-home keeps shrinking."
    }
];

export default function AiForRealEstateAgentsContent() {
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
            const sections = ['introduction', 'pain-points', 'why-ai-matters', 'lead-response', 'content-marketing', 'ai-solution', 'what-ai-does', 'pricing', 'getting-started', 'faq'];
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
            <div className="bg-gradient-to-br from-emerald-50 via-white to-blue-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'AI for Real Estate Agents' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                            <Building2 size={16} />
                            <span>Real Estate Industry Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            AI for <span className="text-primary-600">Real Estate Agents</span>: Close More Deals While Working Less
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            You became an agent to help people find their dream homes—not to spend nights writing social posts and chasing cold leads. Discover how AI employees handle your marketing, lead response, and admin work 24/7 so you can focus on what you do best: closing deals.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>15 min read</span>
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
                                Get Your AI Team - $29/month
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
                                    { id: 'pain-points', label: 'The Real Challenges' },
                                    { id: 'why-ai-matters', label: 'Why AI Matters Now' },
                                    { id: 'lead-response', label: 'The Lead Response Crisis' },
                                    { id: 'content-marketing', label: 'Content & Social Media' },
                                    { id: 'ai-solution', label: 'Meet Your AI Team' },
                                    { id: 'what-ai-does', label: 'What AI Does For You' },
                                    { id: 'pricing', label: 'Cost Comparison' },
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
                                <p className="text-sm text-slate-600 mb-4">Ready to work smarter?</p>
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
                                <InternalLinks currentSlug="ai-for-real-estate-agents" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Let's be honest: real estate was supposed to be about helping people find their dream homes. Instead, you're drowning in admin work, chasing leads, and posting on Instagram at midnight.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    According to <a href="https://www.nar.realtor/research-and-statistics/research-reports/realtor-technology-survey" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">NAR's 2025 Technology Survey</a>, 68% of agents now use AI tools—and that number is growing fast. The agents embracing AI aren't just saving time; they're closing more deals while their competitors struggle to keep up.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>Here's the uncomfortable truth:</strong> While you were showing a property, 3 leads went cold because no one responded. While you were at an open house, your competitor posted on social media twice. While you slept, buyers in different time zones searched for agents—and found someone else.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This guide shows you how AI employees can change that equation—working 24/7 so you can focus on what actually makes you money: building relationships and closing deals.
                                </p>

                                {/* YouTube Video Embed */}
                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="0R_3iarc8IA"
                                        title="Content Marketing for Real Estate - How to Attract More Leads"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: Content marketing strategies to grow your real estate business</p>
                                </div>

                                <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Home className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">This Guide is For You If...</h4>
                                            <ul className="text-slate-700 space-y-2">
                                                <li>• You're a real estate agent losing leads to slow response times</li>
                                                <li>• You know you should post more on social media but can't find the time</li>
                                                <li>• You're spending more on marketing than you're making from it</li>
                                                <li>• You want to scale your business without hiring a full team</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="pain-points" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Reality of Being a Real Estate Agent in 2026</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                According to <a href="https://resources.insiderealestate.com/trending-now/10-real-pain-points-agents-are-facing-today-and-how-to-push-through" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">BoldTrail's research</a> and conversations with thousands of agents, here's what you're actually dealing with:
                            </p>
                            <div className="grid gap-6">
                                {painPoints.map((point, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 shrink-0">
                                                <point.icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-2 text-lg">{point.title}</h3>
                                                <p className="text-slate-600">{point.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <p className="text-amber-800 font-medium text-center">
                                    "Most new agents take 6–12 months to ramp up—and 40% quit in year one."
                                    <span className="block text-sm text-amber-600 mt-2">— <a href="https://resources.insiderealestate.com/trending-now/10-real-pain-points-agents-are-facing-today-and-how-to-push-through" target="_blank" rel="noopener noreferrer" className="underline">BoldTrail Industry Research</a></span>
                                </p>
                            </div>
                        </section>

                        <section id="why-ai-matters" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why AI Matters for Real Estate Agents (The Numbers)</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This isn't hype—it's what's actually happening in the industry. Data from <a href="https://www.nar.realtor/research-and-statistics/research-reports/realtor-technology-survey" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">NAR</a>, <a href="https://www.inman.com/2025/12/31/more-ai-a-big-recovery-real-estate-heavyweights-predict-2026/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Inman</a>, and industry research shows a clear picture:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { stat: "68%", label: "of agents now use AI tools", source: "NAR 2025 Technology Survey", link: "https://www.nar.realtor/research-and-statistics/research-reports/realtor-technology-survey" },
                                    { stat: "47%", label: "of buyers say tech skills are 'very important'", source: "NAR Home Buyers Report", link: "https://www.nar.realtor/research-and-statistics/research-reports/home-buyer-and-seller-generational-trends" },
                                    { stat: "79%", label: "of agents say AI discoverability is critical", source: "Inman 2026 Survey", link: "https://www.inman.com/2025/12/31/more-ai-a-big-recovery-real-estate-heavyweights-predict-2026/" },
                                    { stat: "87%", label: "of brokerages report agents using AI", source: "Industry Research", link: "https://avenuehq.com/blog/ai-for-real-estate-2026" },
                                    { stat: "10x", label: "more likely to connect with 5-min response", source: "MIT Research", link: "https://marketwiz.ai/real-estate-lead-response-time-why-5-minutes-10x-more-conversions/" },
                                    { stat: "40%", label: "increase in lead conversion with AI chatbots", source: "Crescendo AI Study", link: "https://www.crescendo.ai/blog/best-real-estate-chatbots-with-ai" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-primary-50 border border-primary-100 p-6 rounded-xl text-center">
                                        <div className="text-4xl font-bold text-primary-600 mb-2">{item.stat}</div>
                                        <p className="text-slate-700 font-medium mb-1">{item.label}</p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-primary-600 hover:underline">{item.source}</a>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    The 2026 Reality Check
                                </h4>
                                <p className="text-blue-700 mb-4">
                                    According to <a href="https://www.inman.com/2025/12/31/more-ai-a-big-recovery-real-estate-heavyweights-predict-2026/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Inman's 2026 predictions</a>: "AI will be the common thread driving the biggest changes in residential real estate. Profitable brokerages will acquire AI-lagging competitors, and top teams will dominate by working smarter."
                                </p>
                                <p className="text-blue-700">
                                    The question isn't whether you should use AI—it's whether you can afford to wait while competitors adopt it first.
                                </p>
                            </div>
                        </section>

                        <section id="lead-response" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Lead Response Crisis: Why Speed Wins Deals</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Here's the brutal math that's costing you money. According to research from <a href="https://marketwiz.ai/real-estate-lead-response-time-why-5-minutes-10x-more-conversions/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">MIT, Harvard, and industry studies</a>:
                                </p>
                            </div>

                            <div className="bg-red-50 border-2 border-red-200 p-8 rounded-xl mb-8">
                                <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">The 5-Minute Window</h3>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-red-600 mb-2">78%</div>
                                        <p className="text-slate-700">of buyers work with the <strong>first agent who responds</strong></p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-red-600 mb-2">10x</div>
                                        <p className="text-slate-700">more likely to connect if you respond in <strong>5 minutes vs 30</strong></p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-5xl font-bold text-red-600 mb-2">100x</div>
                                        <p className="text-slate-700">higher conversion when contacting leads <strong>within 5 minutes</strong></p>
                                    </div>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    But here's the problem: According to <a href="https://agentzap.ai/blog/real-estate-lead-statistics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">AgentZap's research</a>, most agents take <strong>hours</strong> to respond—not minutes. You're at a showing. You're driving. You're sleeping. Life happens.
                                </p>
                                <p>
                                    Meanwhile, that lead just found 3 other agents on <a href="https://www.zillow.com/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Zillow</a> who responded faster.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-6 text-xl">The Economics of Slow Response:</h3>
                                <div className="space-y-4">
                                    {[
                                        { time: "0-5 minutes", conversion: "High conversion (100x baseline)", color: "bg-green-500" },
                                        { time: "5-30 minutes", conversion: "Conversion drops 10x", color: "bg-yellow-500" },
                                        { time: "30-60 minutes", conversion: "Conversion drops 21x", color: "bg-orange-500" },
                                        { time: "1+ hours", conversion: "Lead likely gone to competitor", color: "bg-red-500" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-4">
                                            <div className={`w-4 h-4 rounded-full ${item.color} shrink-0`}></div>
                                            <div className="flex-1">
                                                <span className="font-bold text-slate-900">{item.time}:</span>
                                                <span className="text-slate-600 ml-2">{item.conversion}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                <h4 className="font-bold text-green-800 mb-3">The AI Advantage:</h4>
                                <p className="text-green-700">
                                    AI employees respond <strong>instantly</strong>—24/7/365. While you're showing a property in Seattle, your AI is qualifying a lead in Miami. While you're sleeping, your AI is booking appointments for tomorrow. According to <a href="https://www.crescendo.ai/blog/best-real-estate-chatbots-with-ai" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Crescendo AI</a>, real estate teams using AI chatbots see up to 40% increase in lead conversion.
                                </p>
                            </div>
                        </section>

                        <section id="content-marketing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Content & Social Media Struggle</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    According to <a href="https://www.housingwire.com/articles/real-estate-social-media-marketing/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">HousingWire</a> and <a href="https://resimpli.com/blog/real-estate-social-media-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">industry statistics</a>, social media isn't optional anymore:
                                </p>
                                <blockquote className="border-l-4 border-primary-500 pl-6 my-6 text-xl italic text-slate-700">
                                    "71% of buyers are more likely to work with agents who have a strong social media presence."
                                </blockquote>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <XCircle className="w-5 h-5" />
                                        The Content Reality for Most Agents
                                    </h3>
                                    <ul className="space-y-3 text-slate-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">•</span>
                                            No time to create quality content consistently
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">•</span>
                                            Post sporadically, then disappear for weeks
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">•</span>
                                            Website blog hasn't been updated in months
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">•</span>
                                            Competitors show up everywhere while you're invisible
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        What Consistent Presence Delivers
                                    </h3>
                                    <ul className="space-y-3 text-slate-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            Top-of-mind awareness when clients are ready to buy/sell
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            Organic leads from people who find your content
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            SEO rankings that bring clients to you
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            Authority positioning in your market
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The Time Problem</h4>
                                        <p className="text-slate-700">
                                            According to <a href="https://www.vertuagent.com/blog/why-most-real-estate-agents-waste-10-hours-a-week-on-admin-tasks" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline">Vertu Agent research</a>, most agents waste 10+ hours per week on non-revenue-generating tasks. That's 40+ hours a month that could go toward showings, client calls, and closing deals. Creating content on top of that? It's not sustainable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="ai-solution" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Your AI Team: 6 Employees Who Never Sleep</h2>
                            <div className="bg-gradient-to-br from-primary-50 to-emerald-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Bot size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">What if you had a full team working 24/7?</h3>
                                        <p className="text-lg text-slate-700 mb-4">
                                            Dooza gives you 6 AI employees dedicated to growing your real estate business. While you're with clients, they're:
                                        </p>
                                        <ul className="space-y-2 text-slate-700">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span>Responding to leads instantly—day or night</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span>Posting engaging content on your social media</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span>Writing SEO-optimized blog posts and listings</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span>Managing your inbox and following up with leads</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span>Answering phone calls when you can't</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <p className="text-xl text-slate-700 font-medium text-center mb-8">
                                You focus on showings and closings. Your AI team handles everything else.
                            </p>
                        </section>

                        <section id="what-ai-does" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your AI Employees: What Each One Does</h2>

                            <div className="space-y-6 mb-8">
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-xl mb-2">Rachel - AI Receptionist</h3>
                                            <p className="text-slate-600 mb-4">
                                                Never miss another lead call. Rachel answers your phone 24/7, qualifies buyers and sellers, books showings, and transfers urgent calls to you. She sounds natural and knows your listings inside out.
                                            </p>
                                            <div className="bg-slate-50 p-4 rounded-lg">
                                                <p className="text-sm text-slate-700">
                                                    <strong>Real estate impact:</strong> 78% of buyers work with the first agent who responds. Rachel ensures that's always you—even at 2 AM when a relocating buyer calls from another time zone.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-xl mb-2">Eva - AI Email Manager</h3>
                                            <p className="text-slate-600 mb-4">
                                                Eva manages your inbox, drafts responses, follows up with leads, and ensures nothing falls through the cracks. She learns your communication style and handles routine inquiries automatically.
                                            </p>
                                            <div className="bg-slate-50 p-4 rounded-lg">
                                                <p className="text-sm text-slate-700">
                                                    <strong>Real estate impact:</strong> Those 6-month-old leads in your database? Eva starts nurturing them with personalized follow-ups. Most agents are shocked when "dead" leads suddenly respond.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                            <Megaphone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-xl mb-2">Sonny - AI Social Media Manager</h3>
                                            <p className="text-slate-600 mb-4">
                                                Sonny creates and posts engaging content to your Instagram, Facebook, LinkedIn, and more. Market updates, listing features, neighborhood spotlights, home tips—all tailored to your brand and market.
                                            </p>
                                            <div className="bg-slate-50 p-4 rounded-lg">
                                                <p className="text-sm text-slate-700">
                                                    <strong>Real estate impact:</strong> According to industry research, 71% of buyers prefer agents with strong social presence. Sonny ensures you're always visible and top-of-mind in your market.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                                            <Search size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-xl mb-2">Seomi - AI SEO Specialist</h3>
                                            <p className="text-slate-600 mb-4">
                                                Seomi writes and publishes SEO-optimized blog posts, neighborhood guides, and market reports. She optimizes your Google Business Profile and ensures you rank when buyers search for agents in your area.
                                            </p>
                                            <div className="bg-slate-50 p-4 rounded-lg">
                                                <p className="text-sm text-slate-700">
                                                    <strong>Real estate impact:</strong> Buyers searching "best real estate agent in [your city]" or "homes for sale in [neighborhood]" find YOU instead of your competitors. Organic leads have the highest conversion rates.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                                            <Target size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-xl mb-2">Stan - AI Lead Generator</h3>
                                            <p className="text-slate-600 mb-4">
                                                Stan finds and qualifies leads for your pipeline, researches prospects, and identifies opportunities in your market. He works alongside your existing lead sources to maximize every opportunity.
                                            </p>
                                            <div className="bg-slate-50 p-4 rounded-lg">
                                                <p className="text-sm text-slate-700">
                                                    <strong>Real estate impact:</strong> Stop paying $139-$450 per <a href="https://www.zillow.com/premier-agent/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Zillow lead</a>. Stan helps you build your own lead pipeline through organic methods that compound over time.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                                            <FileText size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-xl mb-2">Linda - AI Legal Assistant</h3>
                                            <p className="text-slate-600 mb-4">
                                                Linda reviews contracts, identifies potential issues, and helps you understand complex legal language. She's an extra set of eyes on every document before you or your clients sign.
                                            </p>
                                            <div className="bg-slate-50 p-4 rounded-lg">
                                                <p className="text-sm text-slate-700">
                                                    <strong>Real estate impact:</strong> Catch issues before they become problems. Linda helps you provide better service to clients while protecting yourself from costly mistakes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Cost Comparison: What You're Really Paying</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Let's look at what real estate agents typically spend on support, according to <a href="https://shoreagents.com/virtual-real-estate-assistant-pricing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">ShoreAgents</a>, <a href="https://www.wishup.co/blog/virtual-real-estate-assistant-pricing/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Wishup</a>, and industry research:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <div className="text-slate-500 font-bold text-sm mb-2">TRADITIONAL OPTIONS</div>
                                    <div className="space-y-4">
                                        <div className="border-b border-slate-200 pb-4">
                                            <div className="font-bold text-slate-900">Human VA (Full-time)</div>
                                            <div className="text-2xl font-bold text-slate-700">$1,500-$2,600<span className="text-sm font-normal">/month</span></div>
                                            <p className="text-sm text-slate-500">Still needs time off, training, management</p>
                                        </div>
                                        <div className="border-b border-slate-200 pb-4">
                                            <div className="font-bold text-slate-900">Social Media Manager</div>
                                            <div className="text-2xl font-bold text-slate-700">$1,000-$3,000<span className="text-sm font-normal">/month</span></div>
                                            <p className="text-sm text-slate-500">Only handles social, nothing else</p>
                                        </div>
                                        <div className="border-b border-slate-200 pb-4">
                                            <div className="font-bold text-slate-900">Zillow Premier Agent</div>
                                            <div className="text-2xl font-bold text-slate-700">$139-$450<span className="text-sm font-normal">/per lead</span></div>
                                            <p className="text-sm text-slate-500">Shared leads, competitive market</p>
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">AI Tools (Individual)</div>
                                            <div className="text-2xl font-bold text-slate-700">$50-$300<span className="text-sm font-normal">/each/month</span></div>
                                            <p className="text-sm text-slate-500">Need multiple tools, doesn't integrate</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <div className="text-primary-600 font-bold text-sm mb-2">DOOZA AI EMPLOYEES</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-2">$29<span className="text-lg font-normal text-slate-500">/month</span></div>
                                    <div className="text-lg text-slate-600 mb-4">$348/year for 6 AI employees</div>
                                    <ul className="space-y-3">
                                        {[
                                            "24/7 phone answering & lead qualification",
                                            "Email management & follow-up automation",
                                            "Daily social media posts",
                                            "SEO blog posts & Google Business optimization",
                                            "Lead generation & nurturing",
                                            "Contract review assistance",
                                            "No contracts, cancel anytime",
                                            "Free concierge onboarding"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /><span className="text-slate-700">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                                <p className="text-2xl font-bold text-green-700">That's 97% less than a part-time VA</p>
                                <p className="text-green-600 mt-2">With 6 AI employees working 24/7—no sick days, no training time, no management needed</p>
                            </div>

                            <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-xl">
                                <h4 className="font-bold text-blue-800 mb-3">The ROI Math:</h4>
                                <p className="text-blue-700">
                                    According to <a href="https://www.nar.realtor/agent-income" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">NAR</a>, the median agent commission on a $367,711 home is about $10,000. If Dooza helps you close just <strong>one extra deal per year</strong> through faster lead response, better follow-up, or improved online presence, that's a <strong>2,774% ROI</strong> on your $348 annual investment.
                                </p>
                            </div>
                        </section>

                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started is Simple</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                We know you're busy showing homes and closing deals. That's why we made this as easy as possible:
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Book a Free Onboarding Call (30 minutes)",
                                        desc: "Tell us about your market, your specialties, and your goals. We'll configure your AI employees to match your brand voice and business needs."
                                    },
                                    {
                                        step: "2",
                                        title: "Connect Your Accounts",
                                        desc: "Link your email, social media, and phone with one-click integrations. We handle all the technical setup during your onboarding call."
                                    },
                                    {
                                        step: "3",
                                        title: "Your AI Team Starts Working",
                                        desc: "Within 24 hours, your AI employees are responding to leads, posting content, and growing your business—while you focus on clients."
                                    },
                                    {
                                        step: "4",
                                        title: "Watch Your Business Transform",
                                        desc: "Most agents see immediate improvements in lead response. Within 90 days, you'll have a consistent social presence and better SEO rankings driving organic leads."
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Work Smarter, Not Harder?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    68% of agents are already using AI. The longer you wait, the more leads you're losing to competitors who respond faster, post more, and show up where buyers are searching.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Get Your AI Team - $29/month <ArrowRight className="w-4 h-4" />
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Industry Research & Statistics</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.nar.realtor/research-and-statistics/research-reports/realtor-technology-survey" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">NAR 2025 Technology Survey</a></li>
                                        <li>• <a href="https://www.nar.realtor/agent-income" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">NAR Agent Income Statistics</a></li>
                                        <li>• <a href="https://www.inman.com/2025/12/31/more-ai-a-big-recovery-real-estate-heavyweights-predict-2026/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Inman - Real Estate AI Predictions 2026</a></li>
                                        <li>• <a href="https://avenuehq.com/blog/ai-for-real-estate-2026" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Avenue - AI for Real Estate Guide</a></li>
                                        <li>• <a href="https://homebuyinginstitute.com/mortgage/future-of-ai-in-real-estate/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Home Buying Institute - Future of AI</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Lead Response & Conversion</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://marketwiz.ai/real-estate-lead-response-time-why-5-minutes-10x-more-conversions/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">MarketWiz - Lead Response Time Research</a></li>
                                        <li>• <a href="https://agentzap.ai/blog/real-estate-lead-statistics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">AgentZap - Lead Statistics 2026</a></li>
                                        <li>• <a href="https://theclose.com/real-estate-lead-generation-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">The Close - Lead Generation Statistics</a></li>
                                        <li>• <a href="https://www.ylopo.com/blog/real-estate-lead-conversion-rate" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Ylopo - Lead Conversion Rates</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Productivity & Time Management</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.vertuagent.com/blog/why-most-real-estate-agents-waste-10-hours-a-week-on-admin-tasks" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Vertu Agent - Admin Time Waste Study</a></li>
                                        <li>• <a href="https://resources.insiderealestate.com/trending-now/10-real-pain-points-agents-are-facing-today-and-how-to-push-through" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">BoldTrail - Agent Pain Points</a></li>
                                        <li>• <a href="https://theclose.com/time-management-for-realtors/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">The Close - Time Management for Realtors</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Social Media & Marketing</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.housingwire.com/articles/real-estate-social-media-marketing/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">HousingWire - Social Media Marketing</a></li>
                                        <li>• <a href="https://resimpli.com/blog/real-estate-social-media-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">REsimpli - Social Media Statistics</a></li>
                                        <li>• <a href="https://blog.hootsuite.com/real-estate-social-media/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Hootsuite - Real Estate Social Media Tips</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">AI & Chatbot Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.crescendo.ai/blog/best-real-estate-chatbots-with-ai" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Crescendo - Real Estate AI Chatbots</a></li>
                                        <li>• <a href="https://rtslabs.com/ai-chatbot-for-real-estate/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">RTS Labs - AI Chatbot Benefits</a></li>
                                        <li>• <a href="https://masterofcode.com/blog/real-estate-chatbot" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Master of Code - Chatbot Case Studies</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">VA & Pricing Research</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://shoreagents.com/virtual-real-estate-assistant-pricing" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">ShoreAgents - VA Pricing</a></li>
                                        <li>• <a href="https://www.wishup.co/blog/virtual-real-estate-assistant-pricing/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Wishup - VA Pricing Guide</a></li>
                                        <li>• <a href="https://theclose.com/best-real-estate-virtual-assistant-companies/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">The Close - Best VA Companies</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="ai-for-real-estate-agents" category="Industry Guide" tags={['AI for Real Estate', 'Real Estate Agent', 'AI Employees']} />
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
