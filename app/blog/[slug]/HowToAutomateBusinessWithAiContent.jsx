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
import BlogHeroImage from '../../../components/BlogHeroImage';
import YouTubeEmbed from '../../../components/YouTubeEmbed';
import {
    Sparkles,
    Clock,
    Calendar,
    ArrowRight,
    CheckCircle2,
    XCircle,
    Bot,
    Zap,
    Mail,
    Phone,
    Users,
    TrendingUp,
    Target,
    Shield,
    Share2,
    Rocket,
    Search,
    MessageCircle,
    DollarSign,
    BarChart3,
    Repeat,
    Trash2,
    HelpCircle
} from 'lucide-react';

const faqData = [
    {
        question: "What is the best AI tool for small business automation in 2026?",
        answer: "Dooza.ai is the best all-in-one AI automation platform for small businesses. Instead of juggling separate tools for email, social media, SEO, lead generation, and phone support, Dooza gives you 6 AI employees — Maily, Somi, Ranky, Stan, Rachel, and Lега — that handle all of it for $49/month flat. Unlike ChatGPT or Jasper, Dooza's AI employees run on daily routines without being prompted."
    },
    {
        question: "How long does it take to set up Dooza?",
        answer: "Most businesses are fully set up in under 30 minutes. You sign up, book a free onboarding call, and our concierge team configures your AI employees to match your brand voice, workflows, and integrations. Your AI employees start working the same day."
    },
    {
        question: "Can AI actually replace a marketing hire?",
        answer: "For the repetitive 80% of marketing work — writing social posts, sending email campaigns, publishing SEO content, following up with leads — yes. Dooza's AI employees handle those tasks 24/7 for $49/month. A junior marketing hire costs $3,500-5,000/month and still needs tools on top. AI handles the volume; you provide the strategy and creative direction."
    },
    {
        question: "What are the first tasks I should automate with AI?",
        answer: "Start with the tasks eating the most time: (1) Email — automate newsletters, follow-ups, and drip campaigns with Maily. (2) Social media — schedule and publish daily content with Somi. (3) SEO — generate optimized blog posts with Ranky. These three alone save most founders 15-20 hours/week."
    },
    {
        question: "How much money can I save by automating with AI?",
        answer: "The average small business spends ~$4,700/month on a mix of virtual assistants ($1,500-2,600), SaaS tools ($300-500), and the hidden cost of founder time on operational tasks. Dooza replaces most of that stack for $49/month — saving $4,000-5,000/month while getting more done, more consistently."
    },
    {
        question: "Is Dooza good for agencies and freelancers?",
        answer: "Absolutely. Agencies use Dooza to white-label AI employees for their clients — managing social media, email, and SEO across multiple accounts from one dashboard. Freelancers use it to scale their output without hiring subcontractors. Many agencies resell Dooza services at a markup and run highly profitable operations."
    }
];

export default function HowToAutomateBusinessWithAiContent() {
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
            const sections = ['introduction', 'why-automate', 'five-functions', 'step-by-step', 'tools-to-cancel', 'routines', 'roi-math', 'faq'];
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
                        { label: 'How to Automate Your Business with AI' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Pillar Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            How to Automate Your Entire Business with <span className="text-primary-600">AI in 2026</span> (Step-by-Step)
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            The complete playbook for replacing $4,700/mo in tools and VAs with AI employees that work on autopilot — for $49/mo.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>18 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 28, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/b0ac8033-8e27-448d-9b41-3de48eb699fe.jpg"
                                alt="How to automate your entire business with AI in 2026 — step-by-step guide"
                                priority={true}
                            />
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={getProductSignupUrl('automate-business')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Start Automating Free
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                onClick={handleAction}
                                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all"
                            >
                                <Calendar className="w-5 h-5" />
                                Book Free Setup Call
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
                                    { id: 'why-automate', label: 'Why Automate Now' },
                                    { id: 'five-functions', label: '5 Functions to Automate' },
                                    { id: 'step-by-step', label: 'Setup Guide (5 Steps)' },
                                    { id: 'tools-to-cancel', label: 'Tools You Can Cancel' },
                                    { id: 'routines', label: 'Routines vs Prompts' },
                                    { id: 'roi-math', label: 'The ROI Math' },
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
                                <p className="text-sm text-slate-600 mb-4">Automate your business today</p>
                                <a
                                    href={getProductSignupUrl('automate-business')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Dooza Free
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="how-to-automate-your-business-with-ai" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Section 1: Introduction — The Hook */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    You're the CEO. The marketing department. The customer support team. The bookkeeper. The social media manager. And the person who forgot to eat lunch again because there were 47 unread emails.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Sound familiar? If you're running a small business or startup in 2026, you're probably doing the jobs of 3-5 people — and paying for a pile of SaaS tools that were supposed to help but just added more tabs to manage.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Here's the truth nobody in the "AI tools" space wants to admit: <strong>most AI products still wait for you to show up and type a prompt.</strong> ChatGPT doesn't send your newsletter at 9am. Jasper doesn't publish your blog posts on a schedule. You're still the bottleneck.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    This guide is different. We're going to show you how to set up <strong>AI employees</strong> — not tools, not chatbots — that actually run your business operations on autopilot. They have names. They have jobs. And they show up every morning whether you're at your desk or not.
                                </p>

                                <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <Sparkles className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">What You'll Learn</h4>
                                            <ul className="text-slate-700 space-y-1">
                                                <li>• The 5 business functions to automate first (and which AI employee handles each)</li>
                                                <li>• A step-by-step setup guide — live in under 30 minutes</li>
                                                <li>• Which tools you can cancel today (and how much you'll save)</li>
                                                <li>• Why routines beat prompts — and why that distinction matters</li>
                                                <li>• Real ROI math: $4,700/mo → $49/mo</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: Why Automate Now */}
                        <section id="why-automate" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why 2026 Is the Year to Automate (Or Get Left Behind)</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's be blunt. The businesses that figured out AI automation 12 months ago are already running laps around you. They're publishing more content, responding faster, generating more leads, and spending a fraction of what you spend on tools and people.
                                </p>
                                <p>
                                    McKinsey estimates <strong>60% of all work activities are automatable</strong> with today's AI. Not in 5 years. Right now. And the gap between "automated" businesses and "still doing it manually" businesses is getting wider every quarter.
                                </p>
                            </div>

                            {/* Pain Point Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {[
                                    { stat: "28%", label: "of your day lost to email", icon: Mail },
                                    { stat: "6+ hrs", label: "per week on social media", icon: Share2 },
                                    { stat: "62%", label: "of calls missed by SMBs", icon: Phone },
                                    { stat: "$4,700", label: "avg monthly ops cost", icon: DollarSign }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-center">
                                        <item.icon className="w-6 h-6 text-primary-600 mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-slate-900">{item.stat}</div>
                                        <p className="text-xs text-slate-500 mt-1">{item.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    The question isn't "should I automate?" anymore. It's "how fast can I get there?" That's what this guide answers.
                                </p>
                            </div>
                        </section>

                        {/* YouTube Embed 1 */}
                        <div className="my-8">
                            <YouTubeEmbed
                                videoId="NgBAXFK6nk4"
                                title="AI Era with Dooza.AI — See AI Employees in Action"
                            />
                            <p className="text-sm text-slate-500 mt-3 text-center italic">Watch: How Dooza's AI employees automate real business operations end-to-end.</p>
                        </div>

                        {/* Section 3: The 5 Functions to Automate */}
                        <section id="five-functions" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">The 5 Business Functions to Automate First</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                You don't need to automate everything at once. Start with the 5 functions that eat the most time and leak the most revenue. Each one maps to a specific AI employee inside Dooza.
                            </p>

                            {/* Function 1: Email — Maily */}
                            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-blue-900 text-xl mb-2">1. Email Marketing — Meet Maily</h3>
                                        <p className="text-blue-800 mb-4">
                                            The average founder spends <strong>28% of their workday</strong> managing email. Newsletters, follow-up sequences, abandoned cart emails, welcome flows — it never stops. Maily handles all of it.
                                        </p>
                                        <div className="space-y-2 mb-4">
                                            <p className="text-blue-800"><strong>What Maily does:</strong></p>
                                            <ul className="space-y-1 text-blue-700">
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Writes and sends email campaigns in your brand voice</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Builds automated drip sequences for new leads</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Handles follow-ups so no lead goes cold</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Runs on a routine — sends at optimal times, every day</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">Replaces: Mailchimp</span>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">Saves: 6+ hrs/week</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Function 2: Social Media — Somi */}
                            <div className="bg-purple-50 border border-purple-200 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 shrink-0">
                                        <Share2 size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-purple-900 text-xl mb-2">2. Social Media — Meet Somi</h3>
                                        <p className="text-purple-800 mb-4">
                                            Social media is a time black hole. <strong>6+ hours per week</strong> spent creating posts, scheduling, engaging — and most small businesses still post inconsistently. Somi fixes this permanently.
                                        </p>
                                        <div className="space-y-2 mb-4">
                                            <p className="text-purple-800"><strong>What Somi does:</strong></p>
                                            <ul className="space-y-1 text-purple-700">
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Creates platform-native content (LinkedIn, X, Instagram, Facebook)</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Publishes daily — on a set routine, zero input needed</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Adapts your brand voice across platforms</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Keeps your accounts active even when you're heads-down on work</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">Replaces: Buffer, Hootsuite</span>
                                            <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full">Saves: 6+ hrs/week</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Function 3: SEO — Ranky */}
                            <div className="bg-green-50 border border-green-200 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700 shrink-0">
                                        <Search size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-green-900 text-xl mb-2">3. SEO & Content — Meet Ranky</h3>
                                        <p className="text-green-800 mb-4">
                                            SEO is the highest-ROI marketing channel — but it takes forever when you're writing everything yourself. Ranky is your AI SEO specialist who researches keywords, writes optimized content, and publishes it on schedule.
                                        </p>
                                        <div className="space-y-2 mb-4">
                                            <p className="text-green-800"><strong>What Ranky does:</strong></p>
                                            <ul className="space-y-1 text-green-700">
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Researches high-value keywords in your niche</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Writes 2,000+ word SEO-optimized blog posts</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Handles meta titles, descriptions, internal linking</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Publishes on a recurring routine — consistent content, no effort</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">Replaces: Jasper, Surfer SEO</span>
                                            <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">Saves: 8+ hrs/week</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Function 4: Lead Gen — Stan */}
                            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 shrink-0">
                                        <Target size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-amber-900 text-xl mb-2">4. Lead Generation & Sales — Meet Stan</h3>
                                        <p className="text-amber-800 mb-4">
                                            Most leads go cold because nobody follows up fast enough. <strong>78% of customers buy from the company that responds first.</strong> Stan makes sure that's always you.
                                        </p>
                                        <div className="space-y-2 mb-4">
                                            <p className="text-amber-800"><strong>What Stan does:</strong></p>
                                            <ul className="space-y-1 text-amber-700">
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Qualifies incoming leads automatically</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Sends personalized outreach and follow-ups</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Books meetings on your calendar</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Nurtures cold leads until they're ready to buy</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Replaces: Manual outreach</span>
                                            <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">Saves: 5+ hrs/week</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Function 5: Phone/Support — Rachel */}
                            <div className="bg-rose-50 border border-rose-200 p-6 rounded-xl mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-700 shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-rose-900 text-xl mb-2">5. Customer Calls & Support — Meet Rachel</h3>
                                        <p className="text-rose-800 mb-4">
                                            <strong>62% of calls to small businesses go unanswered.</strong> Every missed call is a missed customer. Rachel is your AI receptionist — she picks up every call, answers questions, and books appointments 24/7.
                                        </p>
                                        <div className="space-y-2 mb-4">
                                            <p className="text-rose-800"><strong>What Rachel does:</strong></p>
                                            <ul className="space-y-1 text-rose-700">
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Answers calls in a natural, human-like voice</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Handles FAQs, schedules appointments, takes messages</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Works 24/7 — nights, weekends, holidays</li>
                                                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" /> Never puts anyone on hold, never sounds frustrated</li>
                                            </ul>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <span className="bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full">Replaces: Answering service</span>
                                            <span className="bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full">Saves: Every missed lead</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Mid-article CTA */}
                        <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">That's 5 Employees. $49/month. Zero Prompting Required.</h3>
                            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                Every AI employee above is included in your Dooza plan. Set them up once, and they work every single day.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href={getProductSignupUrl('automate-business')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                    Start Automating Free <ArrowRight className="w-4 h-4" />
                                </a>
                                <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                    <Calendar className="w-4 h-4" /> Book Free Setup Call
                                </a>
                            </div>
                        </div>

                        {/* Section 4: Step-by-Step Setup */}
                        <section id="step-by-step" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">How to Set Up Dooza in 5 Steps</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                No coding. No complex integrations. Most founders are up and running in a single sitting.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        step: "Step 1",
                                        title: "Sign Up & Pick Your Plan",
                                        desc: "Create your free Dooza account. Start with a $1 trial to test everything. No credit card lock-in, no annual contracts. You get instant access to all 6 AI employees.",
                                        color: "bg-blue-50 border-blue-200",
                                        stepColor: "bg-blue-100 text-blue-700"
                                    },
                                    {
                                        step: "Step 2",
                                        title: "Book Your Free Onboarding Call",
                                        desc: "Our concierge team hops on a 30-minute call with you. They'll learn your business, brand voice, and workflows — then configure each AI employee specifically for your needs. You don't have to figure out prompts or settings.",
                                        color: "bg-green-50 border-green-200",
                                        stepColor: "bg-green-100 text-green-700"
                                    },
                                    {
                                        step: "Step 3",
                                        title: "Connect Your Tools",
                                        desc: "Dooza integrates with 1,000+ tools — Gmail, Shopify, WordPress, HubSpot, Google Calendar, Slack, and more. Connect what you already use, and your AI employees will work within your existing stack.",
                                        color: "bg-amber-50 border-amber-200",
                                        stepColor: "bg-amber-100 text-amber-700"
                                    },
                                    {
                                        step: "Step 4",
                                        title: "Set Your Routines",
                                        desc: "This is the magic. Tell each AI employee when to work — Maily sends newsletters every Tuesday at 9am, Somi publishes social posts daily at 8am, Ranky writes a new SEO blog every Monday. Set it once; it runs forever.",
                                        color: "bg-purple-50 border-purple-200",
                                        stepColor: "bg-purple-100 text-purple-700"
                                    },
                                    {
                                        step: "Step 5",
                                        title: "Review & Refine",
                                        desc: "Your AI employees start working immediately. Check in on their output during the first week, give feedback to fine-tune the voice and strategy, then step back and let them run. Most founders go from daily oversight to weekly check-ins within 2 weeks.",
                                        color: "bg-rose-50 border-rose-200",
                                        stepColor: "bg-rose-100 text-rose-700"
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className={`flex gap-4 items-start border p-5 rounded-xl ${item.color}`}>
                                        <div className={`px-3 py-1 rounded-full font-bold text-sm shrink-0 ${item.stepColor}`}>{item.step}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* YouTube Embed 2 */}
                        <div className="my-8">
                            <YouTubeEmbed
                                videoId="iC5cKVTqCm4"
                                title="How to Save 20+ Hours a Week with AI in 2026 (Step-by-step Tutorial)"
                            />
                            <p className="text-sm text-slate-500 mt-3 text-center italic">Watch: A step-by-step walkthrough of AI automation that saves 20+ hours per week.</p>
                        </div>

                        {/* Section 5: Tools You Can Cancel */}
                        <section id="tools-to-cancel" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Tools You Can Cancel After Switching to Dooza</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                This is the part that makes the decision easy. Here's every tool Dooza replaces — and exactly how much you'll stop paying.
                            </p>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="text-left p-4 rounded-tl-xl font-bold">Tool to Cancel</th>
                                            <th className="text-left p-4 font-bold">What It Does</th>
                                            <th className="text-left p-4 font-bold">Monthly Cost</th>
                                            <th className="text-left p-4 rounded-tr-xl font-bold">Dooza Replacement</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { tool: "Mailchimp", what: "Email campaigns", cost: "$13-350/mo", replacement: "Maily" },
                                            { tool: "Buffer / Hootsuite", what: "Social scheduling", cost: "$15-99/mo", replacement: "Somi" },
                                            { tool: "Jasper AI", what: "Content writing", cost: "$49-125/mo", replacement: "Ranky" },
                                            { tool: "Surfer SEO", what: "SEO optimization", cost: "$89-219/mo", replacement: "Ranky" },
                                            { tool: "Calendly + CRM", what: "Scheduling & lead mgmt", cost: "$12-60/mo", replacement: "Stan" },
                                            { tool: "Ruby / Smith.ai", what: "Answering service", cost: "$200-700/mo", replacement: "Rachel" },
                                            { tool: "Virtual Assistant", what: "General ops", cost: "$1,500-2,600/mo", replacement: "All 6 AI employees" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className={`border-b border-slate-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                                                <td className="p-4 font-semibold text-slate-900">{row.tool}</td>
                                                <td className="p-4 text-slate-600">{row.what}</td>
                                                <td className="p-4 text-red-600 font-medium">{row.cost}</td>
                                                <td className="p-4">
                                                    <span className="bg-primary-100 text-primary-700 text-sm font-bold px-3 py-1 rounded-full">{row.replacement}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-2xl mt-8">
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <div>
                                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">Total Monthly Savings</p>
                                        <p className="text-4xl font-bold mt-1">$1,878 – $4,153<span className="text-lg text-slate-400 font-normal">/month</span></p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">Dooza Cost</p>
                                        <p className="text-4xl font-bold text-primary-400 mt-1">$49<span className="text-lg text-slate-400 font-normal">/month</span></p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Routines vs Prompts */}
                        <section id="routines" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Routines Beat Prompts (And Why This Changes Everything)</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Here's what separates Dooza from every other "AI tool" on the market: <strong>routines.</strong>
                                </p>
                                <p>
                                    Most AI tools — ChatGPT, Jasper, Copy.ai — are reactive. They wait for you to open a tab, type a prompt, and hit enter. If you don't show up, nothing happens. You're still the engine.
                                </p>
                                <p>
                                    Dooza's AI employees run on <strong>cron-scheduled routines</strong>. You set them once, and they execute automatically. Every day. At the exact time you specify. No prompting. No babysitting. No "I forgot to send the newsletter this week."
                                </p>
                            </div>

                            {/* Routines vs Prompts Comparison */}
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-red-500" />
                                        Prompt-Based AI (ChatGPT, Jasper)
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "You open the tool and type a prompt",
                                            "You copy-paste the output somewhere else",
                                            "Nothing happens unless you're there",
                                            "Inconsistent — depends on your schedule",
                                            "You're still the bottleneck"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-primary-700 mb-4 flex items-center gap-2">
                                        <Repeat className="w-5 h-5 text-primary-600" />
                                        Routine-Based AI (Dooza)
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            "AI employee starts working at 9am — automatically",
                                            "Output is published, sent, or filed — no copy-paste",
                                            "Runs whether you're at your desk or on vacation",
                                            "Consistent — same quality, same schedule, every day",
                                            "You're the strategist, not the bottleneck"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-primary-700">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-slate-900 text-white p-8 rounded-2xl">
                                <blockquote className="text-lg md:text-xl italic leading-relaxed mb-4">
                                    "ChatGPT is a genius that waits for you to ask a question. Dooza is an employee that shows up at 9am and gets to work."
                                </blockquote>
                                <p className="text-slate-400 font-medium">— How one founder described the difference</p>
                            </div>
                        </section>

                        {/* Section 7: The ROI Math */}
                        <section id="roi-math" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Math: $4,700/mo → $49/mo</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's do the math that nobody in the SaaS world wants you to see. This is what a typical small business spends on operations every month — compared to what it costs with Dooza.
                                </p>
                            </div>

                            {/* Cost Breakdown */}
                            <div className="space-y-4 mb-8">
                                {[
                                    { label: "Virtual Assistant (part-time)", old: "$1,500-2,600", icon: Users },
                                    { label: "Email Marketing Tool", old: "$50-350", icon: Mail },
                                    { label: "Social Media Scheduler", old: "$30-99", icon: Share2 },
                                    { label: "SEO / Content Tool", old: "$89-219", icon: Search },
                                    { label: "Answering Service", old: "$200-700", icon: Phone },
                                    { label: "Founder's Time (20 hrs/week @ $75/hr)", old: "$6,000", icon: Clock }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <item.icon className="w-5 h-5 text-slate-400" />
                                            <span className="text-slate-700 font-medium">{item.label}</span>
                                        </div>
                                        <span className="text-red-600 font-bold">{item.old}/mo</span>
                                    </div>
                                ))}
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl text-center">
                                    <p className="text-sm text-red-600 font-medium uppercase tracking-wide mb-2">Manual Operations</p>
                                    <p className="text-4xl font-bold text-red-700">~$4,700+</p>
                                    <p className="text-red-500 text-sm mt-1">per month (conservative)</p>
                                </div>
                                <div className="bg-green-50 border-2 border-green-200 p-6 rounded-xl text-center">
                                    <p className="text-sm text-green-600 font-medium uppercase tracking-wide mb-2">With Dooza</p>
                                    <p className="text-4xl font-bold text-green-700">$49</p>
                                    <p className="text-green-500 text-sm mt-1">per month — all 6 AI employees</p>
                                </div>
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mt-8">
                                <p>
                                    Even if you only count the tools (not your time), you're looking at <strong>$300-$1,500/month in SaaS costs alone</strong> that Dooza replaces. Add a part-time VA, and the savings are dramatic.
                                </p>
                                <p>
                                    And we haven't even factored in the revenue you <em>gain</em> from faster lead response, consistent content, and 24/7 phone coverage. For most businesses, Dooza pays for itself within the first week.
                                </p>
                            </div>

                            <p className="text-sm text-slate-500 mt-4">
                                Want a deeper dive on AI employee pricing? Read our full breakdown: <Link href="/blog/how-much-does-an-ai-employee-cost" className="text-primary-600 hover:underline">How Much Does an AI Employee Cost?</Link>
                            </p>
                        </section>

                        {/* Second CTA */}
                        <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Ditch the Tool Stack and Hire AI?</h3>
                            <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                Cancel the subscriptions. Fire the complexity. Get 6 AI employees working for you by end of day.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href={getProductSignupUrl('automate-business')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                    Get Started — $49/month <ArrowRight className="w-4 h-4" />
                                </a>
                                <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                    <Calendar className="w-4 h-4" /> Book Free Setup Call
                                </a>
                            </div>
                        </div>

                        {/* Internal Link callout */}
                        <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                            <p className="text-slate-600">
                                Comparing Dooza to other AI platforms? See how we stack up: <Link href="/blog/better-than-sintra-ai" className="text-primary-600 hover:underline font-medium">Dooza vs Sintra AI — Same AI Employees, Half the Price</Link>
                            </p>
                        </div>

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

                        {/* Conclusion */}
                        <section className="scroll-mt-28">
                            <div className="bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200 p-8 rounded-2xl text-center">
                                <p className="text-2xl font-bold text-slate-900 mb-4">
                                    Stop doing 5 jobs. Start running one business.
                                </p>
                                <p className="text-slate-600 mb-6">6 AI employees. $49/month. Routines that run every morning. Your business on autopilot.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('automate-business')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start Automating Free <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book Free Setup Call
                                    </a>
                                </div>
                                <p className="text-sm text-slate-500 mt-4">No credit card required. 7-day money-back guarantee. Cancel anytime.</p>
                            </div>
                        </section>

                        {/* Sources */}
                        <section className="scroll-mt-28 border-t border-slate-200 pt-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Sources & References</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Industry Data</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/where-machines-could-replace-humans-and-where-they-cant-yet" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">McKinsey — 60% of work activities are automatable</a></li>
                                        <li>• <a href="https://www.forbes.com/advisor/business/software/email-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Forbes — Workers spend 28% of workday on email</a></li>
                                        <li>• <a href="https://sproutsocial.com/insights/social-media-statistics/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Sprout Social — Social media time investment data</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">AI & Business</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.hubspot.com/marketing-statistics" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">HubSpot — Lead response time & conversion data</a></li>
                                        <li>• <a href="https://www.sba.gov/business-guide" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">SBA — Small business operations benchmarks</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="how-to-automate-your-business-with-ai" category="AI Automation" tags={['AI Employees', 'Automation', 'Small Business']} />
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
