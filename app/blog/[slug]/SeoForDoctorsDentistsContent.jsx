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
    Stethoscope,
    Heart,
    AlertTriangle,
    MessageSquare,
    Phone,
    Globe,
    BarChart3,
    PenTool
} from 'lucide-react';

const faqData = [
    {
        question: "Do I really need SEO for my medical or dental practice?",
        answer: "Absolutely. According to Pew Research, 77% of patients search online before booking a doctor, and Backlinko data shows 75% never scroll past page one of Google. If you're not visible, you're losing patients to competitors who are. SEO isn't optional anymore—it's how patients find you."
    },
    {
        question: "I don't have time to write blogs. How can Seomi help?",
        answer: "Seomi writes and publishes SEO-optimized blog posts for your practice automatically. You don't need to write anything—Seomi creates patient-focused content about procedures, FAQs, and health tips that Google loves, published on your schedule. This follows Google's E-E-A-T guidelines for healthcare content."
    },
    {
        question: "What's the difference between SEO and Google Ads for my practice?",
        answer: "Google Ads gives you immediate visibility but stops working when you stop paying. SEO builds long-term equity—once you rank, you keep getting patients for free. Smart practices use both: Ads for quick wins, SEO for sustainable growth. Learn more in Google's official SEO Starter Guide."
    },
    {
        question: "How does Google Business Profile affect my patient bookings?",
        answer: "Your Google Business Profile drives more new patients than your website when optimized correctly. According to Google's own data, a complete profile makes you 70% more likely to attract patient visits. Seomi keeps your profile active with weekly posts, photos, and updates—following Google's best practices."
    },
    {
        question: "Can AI really help patients find my practice through ChatGPT?",
        answer: "Yes! Research shows 73% of potential patients now start their search with AI tools like ChatGPT, Perplexity, and Google AI Overviews. AI recommends practices based on online presence, reviews, and structured data. Seomi optimizes your practice for Answer Engine Optimization (AEO) to appear in AI-generated recommendations."
    },
    {
        question: "How much does medical SEO typically cost?",
        answer: "According to PatientGain and industry surveys, traditional medical SEO agencies charge $999-$5,000/month. With Dooza, Seomi handles your SEO for just $29/month—daily blog posts, Google Business Profile updates, and AI optimization included. No hidden fees, no long-term contracts."
    },
    {
        question: "How long until I see results from SEO?",
        answer: "SEO is a long-term strategy. According to Moz and Ahrefs research, most practices start seeing measurable improvements in 3-6 months, with significant results in 6-12 months. Unlike ads, these results compound over time—the longer you invest, the stronger your rankings become."
    }
];

const painPoints = [
    {
        icon: Clock,
        title: "You're Already Working 12-Hour Days",
        description: "Between patient appointments, paperwork, and staff management, marketing is the last thing on your mind. Yet patients are finding your competitors online instead of you."
    },
    {
        icon: FileText,
        title: "Content Creation Feels Impossible",
        description: "You know blogs help SEO, but who has time to write about 'Top 10 Signs You Need a Root Canal' when you're performing actual root canals?"
    },
    {
        icon: MapPin,
        title: "Your Google Listing is Outdated",
        description: "Your Google Business Profile hasn't been updated in months. Maybe your hours are wrong, or you haven't posted since your practice opened. Google notices—and ranks you lower."
    },
    {
        icon: Search,
        title: "SEO Agencies Want $3,000/Month",
        description: "Every marketing agency promises first-page rankings, but they want thousands per month with year-long contracts. That's a lot to gamble on promises."
    },
    {
        icon: Bot,
        title: "AI is Changing How Patients Find Doctors",
        description: "Patients are asking ChatGPT and Google AI for recommendations. If your practice isn't optimized for AI discovery, you're invisible to a growing segment of patients."
    },
    {
        icon: Star,
        title: "Competitors Are Outranking You",
        description: "That new dentist across town is showing up everywhere online. They're not better than you—they just have better marketing. And it's costing you patients."
    }
];

export default function SeoForDoctorsDentistsContent() {
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
            const sections = ['introduction', 'pain-points', 'why-seo-matters', 'google-business', 'ai-discovery', 'content-challenge', 'seomi-solution', 'what-seomi-does', 'pricing', 'getting-started', 'faq'];
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
            <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'SEO for Doctors & Dentists' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                            <Stethoscope size={16} />
                            <span>Healthcare Marketing Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            SEO for <span className="text-primary-600">Doctors & Dentists</span>: Let AI Handle Marketing While You Heal Patients
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            You spent years learning medicine, not marketing. Discover how Seomi—your AI SEO specialist—publishes daily blogs, optimizes your Google listing, and helps AI recommend your practice. So you can focus on what matters: patient care.
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
                                Meet Seomi - Your AI SEO Specialist
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
                                    { id: 'why-seo-matters', label: 'Why SEO Matters' },
                                    { id: 'google-business', label: 'Google Business Profile' },
                                    { id: 'ai-discovery', label: 'AI Patient Discovery' },
                                    { id: 'content-challenge', label: 'The Content Problem' },
                                    { id: 'seomi-solution', label: 'Meet Seomi' },
                                    { id: 'what-seomi-does', label: 'What Seomi Does' },
                                    { id: 'pricing', label: 'Pricing Comparison' },
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
                                <p className="text-sm text-slate-600 mb-4">Ready to automate your SEO?</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Get Seomi Now
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="seo-for-doctors-dentists" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Let's be honest: you didn't spend 8+ years in medical school to become a marketing expert.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    You became a doctor or dentist to help people. To heal patients. To make a difference in their lives. The last thing you want to think about at 7 PM—after a full day of appointments—is whether your <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Google Business Profile</a> needs updating or if your website has enough "<a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">E-E-A-T signals</a>."
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>But here's the uncomfortable reality:</strong> According to <a href="https://www.sermo.com/resources/seo-for-healthcare/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">healthcare research</a>, 77% of patients search online before booking a doctor. And 75% never scroll past page one of Google.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    If you're not visible online, you're invisible to most potential patients—no matter how skilled you are.
                                </p>

                                {/* YouTube Video Embed */}
                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="btwC4zmewss"
                                        title="SEO for Medical Practices - Complete Beginner's Guide"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: Learn the fundamentals of SEO for your practice</p>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Heart className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">This Guide is For You If...</h4>
                                            <ul className="text-slate-700 space-y-2">
                                                <li>• You're a doctor, dentist, or healthcare provider who's too busy for marketing</li>
                                                <li>• Your practice needs more patients but you don't know where to start</li>
                                                <li>• You've been burned by expensive marketing agencies before</li>
                                                <li>• You want to understand how AI is changing patient discovery</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="pain-points" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">We Understand Your Reality</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Before we talk solutions, let's acknowledge what you're actually dealing with. Based on <a href="https://www.medicaleconomics.com/view/what-physicians-need-to-know-about-marketing-an-example-of-how-one-practice-built-its-brand" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">research from Medical Economics</a> and conversations with hundreds of healthcare providers:
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
                                    "The owner and doctors at a medical practice are entirely too busy to give the proper amount of attention to marketing their healthcare business."
                                    <span className="block text-sm text-amber-600 mt-2">— PatientGain Medical Marketing</span>
                                </p>
                            </div>
                        </section>

                        <section id="why-seo-matters" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Medical SEO Actually Matters (The Numbers Don't Lie)</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    We're not here to scare you with marketing jargon. Here are the facts from <a href="https://www.practicebeat.com/blog/medical-seo-for-doctors-roi" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">PracticeBeat</a> and <a href="https://intrepy.com/seo-for-doctors/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Intrepy Healthcare Marketing</a>:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { stat: "77%", label: "of patients search online before booking", source: "Pew Research Center", link: "https://www.pewresearch.org/internet/fact-sheet/internet-broadband/" },
                                    { stat: "75%", label: "never scroll past page one of Google", source: "Backlinko Study", link: "https://backlinko.com/google-ctr-stats" },
                                    { stat: "42%", label: "of local search clicks go to Google's 3-Pack", source: "Moz Local SEO", link: "https://moz.com/local-search-ranking-factors" },
                                    { stat: "5x+", label: "ROI from well-executed medical SEO", source: "PracticeBeat Research", link: "https://www.practicebeat.com/blog/medical-seo-for-doctors-roi" },
                                    { stat: "70%", label: "more likely to get visits with complete GBP", source: "Google Business", link: "https://support.google.com/business/answer/7091" },
                                    { stat: "71%", label: "of dental searches happen on mobile", source: "Think With Google", link: "https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-search-trends-for-healthcare/" }
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
                                    SEO vs. Google Ads: The Smart Comparison
                                </h4>
                                <p className="text-green-700 mb-4">
                                    <a href="https://ads.google.com/home/how-it-works/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Google Ads</a> stops working the moment you stop paying. SEO builds long-term equity—once you rank, you keep getting patients for free. Learn more about <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Google's SEO Starter Guide</a>.
                                </p>
                                <p className="text-green-700">
                                    According to <a href="https://www.patientgain.com/facebook-vs-google-advertising-for-doctors" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">PatientGain</a>: Google PPC converts 31% of leads to patients, while social media converts less than 5%. But SEO delivers patients without ongoing ad spend—that's the real ROI advantage. The <a href="https://www.searchenginejournal.com/seo-guide/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Search Engine Journal</a> confirms this ROI pattern across industries.
                                </p>
                            </div>
                        </section>

                        <section id="google-business" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Google Business Profile: The Most Underused Asset</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Here's something most doctors don't realize: <strong>Your <a href="https://www.google.com/business/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Business Profile</a> drives more new patients than your website</strong> when optimized correctly. According to <a href="https://www.firegang.com/optimize-google-business-profile-dentists-2025/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Firegang Dental Marketing</a>, it's your most crucial local asset where first impressions happen.
                                </p>
                                <p>
                                    But most medical practices set it up once and forget about it. That's a problem, because <a href="https://wgcontent.com/blog/google-business-profile-healthcare-best-practices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google favors profiles with frequent updates</a>. If your profile sits untouched for months, your visibility slowly declines—even if it was performing well before. The <a href="https://support.google.com/business/answer/7091" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">official Google Business documentation</a> confirms that complete profiles perform significantly better.
                                </p>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-6 text-xl">What Google Business Profile Optimization Actually Requires:</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Weekly posts with health tips and updates",
                                        "Regular photo uploads of your office and team",
                                        "Responding to every patient review",
                                        "Keeping hours and services current",
                                        "NAP consistency across all directories",
                                        "Specific service listings (not generic categories)",
                                        "Seasonal announcements and holiday hours",
                                        "Q&A management and patient engagement"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                            <span className="text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">The NAP Consistency Problem</h4>
                                        <p className="text-slate-700">
                                            "Dr. Smith's Dental" on your website versus "Smith Dental Practice" on <a href="https://www.yelp.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">Yelp</a> confuses Google's algorithms. According to <a href="https://boomcycle.com/blog/seo-for-dentists/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">Boomcycle</a>, many practices lose rankings because their suite number appears differently across platforms like <a href="https://www.healthgrades.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">Healthgrades</a>, <a href="https://www.zocdoc.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">Zocdoc</a>, and <a href="https://www.vitals.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 underline">Vitals</a>. This inconsistency fragments your local authority.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="ai-discovery" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The New Reality: Patients Are Asking AI for Doctor Recommendations</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This is the game-changer most healthcare providers don't see coming. According to <a href="https://blog.modernhumans.ai/how-ai-decides-which-dentist-to-recommend" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Modern Humans AI research</a>, patients are increasingly turning to <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">ChatGPT</a>, <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Perplexity</a>, and <a href="https://blog.google/products/search/generative-ai-google-search-may-2024/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google AI Overviews</a> for healthcare recommendations:
                                </p>
                                <blockquote className="border-l-4 border-primary-500 pl-6 my-6 text-xl italic text-slate-700">
                                    "73% of potential patients start their search with AI tools like ChatGPT, Perplexity, and Google AI Overview. These aren't just search engines anymore—they're digital referral systems."
                                </blockquote>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-6 text-xl flex items-center gap-2">
                                    <Bot className="w-6 h-6 text-blue-600" />
                                    How AI Decides Which Doctor to Recommend
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        {
                                            title: "50% of ChatGPT links come from Google Business Profiles",
                                            desc: "Your GBP optimization directly impacts AI recommendations"
                                        },
                                        {
                                            title: "AI reads structured data and reviews contextually",
                                            desc: "It interprets tone, expertise, and reliability before recommending"
                                        },
                                        {
                                            title: "External mentions = authority signals",
                                            desc: "Local news, directories, and other healthcare providers citing you matters"
                                        },
                                        {
                                            title: "Answer Engine Optimization (AEO) is the new SEO",
                                            desc: "Content must be structured so AI can extract and present your practice as the answer"
                                        }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white p-4 rounded-lg border border-blue-100">
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                <h4 className="font-bold text-green-800 mb-3">Real Case Study Result:</h4>
                                <p className="text-green-700">
                                    According to <a href="https://phantomdigital.co.uk/how-to-rank-in-chatgpt/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">Phantom Digital</a>, a medical practice with optimized NAP consistency, citations, and review management now appears as the <strong>primary recommendation in ChatGPT, Claude, and Gemini</strong>—with increased inquiries from patients saying "I found you through ChatGPT."
                                </p>
                            </div>
                        </section>

                        <section id="content-challenge" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Blog Problem: You Know You Should, But Who Has Time?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Here's what <a href="https://www.dentaleconomics.com/practice/marketing/article/14299407/5-reasons-dentists-dont-write-their-own-blog-posts-and-why-you-shouldnt-either" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Dental Economics</a> says about the reality of content creation for healthcare providers:
                                </p>
                                <blockquote className="border-l-4 border-amber-500 pl-6 my-6 text-xl italic text-slate-700">
                                    "Who has time to write dental blogs? Most of the dentists we know are too busy running their practices to write blog posts. Unfortunately, choosing not to blog is a missed opportunity to connect with patients and generate new patient leads."
                                </blockquote>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <XCircle className="w-5 h-5" />
                                        The Reality Without Blogs
                                    </h3>
                                    <ul className="space-y-3 text-slate-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">•</span>
                                            Google sees your site as "stale"
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">•</span>
                                            Competitors rank for questions YOUR patients are asking
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">•</span>
                                            No content for AI to cite when recommending doctors
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-1">•</span>
                                            Missing opportunities to demonstrate E-E-A-T
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" />
                                        What Consistent Blogging Does
                                    </h3>
                                    <ul className="space-y-3 text-slate-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            Signals to Google your site is active and relevant
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            Ranks for long-tail patient questions
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            Gives AI content to cite when recommending you
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            Builds trust with patients before they visit
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className="text-lg text-slate-600">
                                The problem isn't that you don't understand the value. The problem is you're already working 60+ hours a week. You literally cannot add "write weekly blogs" to your plate.
                            </p>
                        </section>

                        <section id="seomi-solution" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Meet Seomi: Your AI SEO Specialist Who Never Sleeps</h2>
                            <div className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 p-8 rounded-2xl mb-8">
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                                        <Search size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">What if your SEO ran itself?</h3>
                                        <p className="text-lg text-slate-700 mb-4">
                                            Seomi is your AI employee dedicated to one thing: making sure patients find your practice online. While you're seeing patients, Seomi is:
                                        </p>
                                        <ul className="space-y-2 text-slate-700">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span>Writing and publishing SEO-optimized blog posts daily</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span>Updating your Google Business Profile weekly</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span>Optimizing your content for AI recommendations</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                <span>Monitoring your local SEO performance</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <p className="text-xl text-slate-700 font-medium text-center mb-8">
                                You focus on healing patients. Seomi focuses on helping patients find you.
                            </p>
                        </section>

                        <section id="what-seomi-does" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Exactly What Seomi Does for Your Practice</h2>

                            <div className="space-y-6 mb-8">
                                <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                            <PenTool size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-xl mb-2">Daily Blog Publishing</h3>
                                            <p className="text-slate-600 mb-4">
                                                Seomi writes patient-focused content that ranks: "What to Expect During a Root Canal," "5 Signs You Need to See a Dentist," "How to Prepare for Your First Visit." Topics your patients are actually searching for.
                                            </p>
                                            <div className="bg-slate-50 p-4 rounded-lg">
                                                <p className="text-sm text-slate-700">
                                                    <strong>Example:</strong> A dental practice using Seomi published 30 blogs in their first month. Within 90 days, they ranked on page 1 for "emergency dentist [city name]" and "teeth whitening near me."
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-xl mb-2">Google Business Profile Management</h3>
                                            <p className="text-slate-600 mb-4">
                                                Weekly posts, seasonal health tips, photo updates, and ensuring your NAP is consistent across all directories. Seomi keeps your profile active so Google keeps you visible.
                                            </p>
                                            <div className="bg-slate-50 p-4 rounded-lg">
                                                <p className="text-sm text-slate-700">
                                                    <strong>Remember:</strong> Google favors profiles with frequent updates. A complete, active profile makes you 70% more likely to attract patient visits.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                                            <Bot size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-xl mb-2">AI Recommendation Optimization</h3>
                                            <p className="text-slate-600 mb-4">
                                                Seomi structures your content so ChatGPT, Claude, and Google AI can recommend your practice. This includes Answer Engine Optimization (AEO), structured data, and building the authority signals AI looks for.
                                            </p>
                                            <div className="bg-slate-50 p-4 rounded-lg">
                                                <p className="text-sm text-slate-700">
                                                    <strong>The future is now:</strong> 73% of patients start with AI search. If AI doesn't recommend you, you're invisible to a growing segment of patients.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border-2 border-slate-200 p-6 rounded-xl hover:border-primary-200 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                                            <BarChart3 size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-xl mb-2">Local SEO Monitoring</h3>
                                            <p className="text-slate-600 mb-4">
                                                Seomi tracks your rankings, monitors competitors, and adjusts strategy based on what's working. You get visibility into your SEO performance without needing to become an SEO expert.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Cost Comparison: Agency vs. Seomi</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Traditional medical SEO agencies charge premium prices. According to <a href="https://www.patientgain.com/medical-seo-doctors" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">PatientGain</a>, expect to pay $999-$5,000/month for quality medical SEO services. Here's how Dooza compares:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <div className="text-slate-500 font-bold text-sm mb-2">TYPICAL SEO AGENCY</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-2">$999-$3,000<span className="text-lg font-normal text-slate-500">/month</span></div>
                                    <div className="text-lg text-slate-600 mb-4">$12,000-$36,000/year</div>
                                    <ul className="space-y-3">
                                        {[
                                            "4-8 blog posts per month",
                                            "Monthly GBP updates",
                                            "Quarterly strategy calls",
                                            "6-12 month contracts required",
                                            "Results take 6+ months",
                                            "No AI optimization expertise"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><XCircle className="w-5 h-5 text-red-400 shrink-0" /><span className="text-slate-600">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <div className="text-primary-600 font-bold text-sm mb-2">DOOZA + SEOMI</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-2">$29<span className="text-lg font-normal text-slate-500">/month</span></div>
                                    <div className="text-lg text-slate-600 mb-4">$348/year total</div>
                                    <ul className="space-y-3">
                                        {[
                                            "Daily blog posts (30+/month)",
                                            "Weekly GBP updates",
                                            "AI recommendation optimization",
                                            "No contracts, cancel anytime",
                                            "Free concierge onboarding",
                                            "All AI employees included"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /><span className="text-slate-700">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl text-center">
                                <p className="text-2xl font-bold text-green-700">Save $11,652-$35,652/year</p>
                                <p className="text-green-600 mt-2">While getting MORE content, MORE updates, and AI optimization included</p>
                            </div>
                        </section>

                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started is Simple</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                We know you're busy. That's why we made this as easy as possible:
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Book a Free Onboarding Call (30 minutes)",
                                        desc: "Tell us about your practice, your patients, and your goals. We'll set up Seomi to understand your specialty and local market."
                                    },
                                    {
                                        step: "2",
                                        title: "Connect Your Google Business Profile",
                                        desc: "One-click connection. Seomi starts analyzing your current presence and identifying opportunities."
                                    },
                                    {
                                        step: "3",
                                        title: "Seomi Starts Working Immediately",
                                        desc: "Within 24 hours, Seomi is writing blogs, optimizing your GBP, and building your AI visibility. You don't need to do anything else."
                                    },
                                    {
                                        step: "4",
                                        title: "Watch Patients Find You",
                                        desc: "Within 90 days, most practices see measurable improvements in rankings, website traffic, and patient inquiries. SEO compounds over time."
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
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Let AI Handle Your Marketing?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    You've worked too hard building your skills to lose patients to competitors with better marketing. Let Seomi level the playing field.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start With Seomi - $29/month <ArrowRight className="w-4 h-4" />
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
                                    <h4 className="font-semibold text-slate-800 mb-3">Medical SEO Resources</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://intrepy.com/seo-for-doctors/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Intrepy - AI SEO for Doctors in 2025</a></li>
                                        <li>• <a href="https://www.practicebeat.com/blog/seo-for-doctors-2025-guide" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">PracticeBeat - SEO for Doctors Ultimate Guide</a></li>
                                        <li>• <a href="https://www.patientgain.com/medical-seo-doctors" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">PatientGain - Medical SEO Pricing</a></li>
                                        <li>• <a href="https://www.medicaleconomics.com/view/what-physicians-need-to-know-about-marketing-an-example-of-how-one-practice-built-its-brand" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Medical Economics - What Physicians Need to Know</a></li>
                                        <li>• <a href="https://www.ama-assn.org/practice-management/digital" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">American Medical Association - Digital Practice</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Dental Marketing Resources</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.firegang.com/optimize-google-business-profile-dentists-2025/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Firegang - Google Business Profile for Dentists</a></li>
                                        <li>• <a href="https://www.dentaleconomics.com/practice/marketing/article/14299407/5-reasons-dentists-dont-write-their-own-blog-posts-and-why-you-shouldnt-either" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Dental Economics - Why Dentists Don't Write Blogs</a></li>
                                        <li>• <a href="https://www.ada.org/resources/practice/practice-management" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">American Dental Association - Practice Management</a></li>
                                        <li>• <a href="https://blog.modernhumans.ai/how-ai-decides-which-dentist-to-recommend" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Modern Humans AI - How AI Recommends Dentists</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Google Official Resources</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google SEO Starter Guide</a></li>
                                        <li>• <a href="https://support.google.com/business/answer/3038177" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google Business Profile Help Center</a></li>
                                        <li>• <a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Google E-E-A-T Guidelines</a></li>
                                        <li>• <a href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/mobile-search-trends-for-healthcare/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Think With Google - Healthcare Search Trends</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">SEO Industry Resources</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://moz.com/local-search-ranking-factors" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Moz - Local Search Ranking Factors</a></li>
                                        <li>• <a href="https://backlinko.com/google-ctr-stats" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Backlinko - Google CTR Statistics</a></li>
                                        <li>• <a href="https://www.searchenginejournal.com/seo-guide/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Search Engine Journal - Complete SEO Guide</a></li>
                                        <li>• <a href="https://ahrefs.com/blog/healthcare-seo/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Ahrefs - Healthcare SEO Guide</a></li>
                                        <li>• <a href="https://www.semrush.com/blog/medical-seo/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Semrush - Medical SEO Best Practices</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="seo-for-doctors-dentists" category="Industry Guide" tags={['Medical SEO', 'SEO for Doctors', 'Healthcare Marketing']} />
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
