import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../constants/links';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BottomCTA from '../../components/BottomCTA';
import BookingModal from '../../components/BookingModal';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedPosts from '../../components/RelatedPosts';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import { SITE_URL } from '../../constants/site';
import { generateFAQSchema, generateBreadcrumbSchema, generateArticleSchema, blogPosts } from '../../data/blogData';
import {
    CheckCircle2,
    XCircle,
    Clock,
    Calendar,
    ArrowRight,
    ArrowLeft,
    Zap,
    DollarSign,
    Users,
    Bot,
    Sparkles,
    Shield,
    Gauge,
    HeartHandshake,
    Settings,
    TrendingUp
} from 'lucide-react';

// FAQ data for schema markup
const faqData = [
    {
        question: "Is Dooza really better than Sintra AI?",
        answer: "Based on user feedback, setup time, pricing transparency, and feature set—yes. Dooza offers a more complete, easier-to-use solution at a lower price point. But don't take our word for it—try both and see for yourself."
    },
    {
        question: "Can I migrate my data from Sintra to Dooza?",
        answer: "While there's no direct data migration (Sintra doesn't provide export tools), you don't need to migrate anything. Dooza's AI employees learn your business fresh, which often results in better performance than carrying over old configurations."
    },
    {
        question: "What if I'm locked into a Sintra contract?",
        answer: "You can still sign up for Dooza's free trial and test it alongside Sintra. Many users run both in parallel during their transition period to ensure Dooza meets their needs before fully switching."
    },
    {
        question: "Does Dooza have all the same AI employees as Sintra?",
        answer: "Dooza offers AI employees for email, social media, sales, customer support, SEO, and more. We also offer call agents, which Sintra doesn't have. Check our features page for the complete list."
    },
    {
        question: "How is the support at Dooza compared to Sintra?",
        answer: "We pride ourselves on fast, helpful support. Our average response time is under 2 hours, compared to the 24-48 hours many Sintra users report. Plus, every plan includes priority support."
    }
];

// Get current post data
const currentPost = blogPosts.find(p => p.slug === 'better-than-sintra-ai');

const BetterThanSintraAI = () => {
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
            const sections = [
                'introduction',
                'what-is-sintra',
                'sintra-limitations',
                'why-dooza',
                'comparison',
                'pricing',
                'migration',
                'conclusion',
                'faq'
            ];

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
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <SEO
                title="Sintra AI Alternative: Why Businesses Are Switching to Dooza in 2026"
                description="Looking for a Sintra AI alternative? Discover why Dooza offers better AI employees with simpler setup, transparent pricing, and superior automation for your business."
                keywords="Sintra AI alternative, better than Sintra AI, Sintra AI vs Dooza, AI employees, AI agents for business, Sintra AI competitor, Sintra AI review 2026"
                canonicalUrl={`${SITE_URL}/blog/better-than-sintra-ai`}
                image="/blog/comparison-general.png"
                type="article"
                author="Dooza Team"
                publishedTime="2026-01-10T00:00:00Z"
                modifiedTime="2026-01-10T00:00:00Z"
                structuredData={generateArticleSchema(currentPost, SITE_URL)}
                additionalStructuredData={[
                    generateFAQSchema(faqData),
                    generateBreadcrumbSchema([
                        { name: "Home", url: SITE_URL },
                        { name: "Blog", url: `${SITE_URL}/blog` },
                        { name: "Sintra AI Alternative" }
                    ])
                ]}
            />

            <Navbar openModal={handleAction} />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs for SEO and UX */}
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Sintra AI Alternative' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">Sintra AI</span> Alternative: Why Businesses Are Switching to Dooza
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Why businesses are switching from Sintra AI to Dooza for their AI employee needs. A comprehensive comparison for 2026.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>9 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 10, 2026</span>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="mt-10 max-w-3xl mx-auto">
                            <img
                                src="/blog/comparison-general.png"
                                alt="Comparison between Sintra AI and Dooza AI employees platform showing feature differences and pricing"
                                className="w-full rounded-2xl shadow-xl"
                                loading="lazy"
                                width="800"
                                height="450"
                                width="800"
                                height="450"
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
                                    { id: 'what-is-sintra', label: 'What is Sintra AI?' },
                                    { id: 'sintra-limitations', label: 'Sintra AI Limitations' },
                                    { id: 'why-dooza', label: 'Why Dooza is Better' },
                                    { id: 'comparison', label: 'Feature Comparison' },
                                    { id: 'deep-dive', label: 'Deep Dive: Email' },
                                    { id: 'pricing', label: 'Pricing Comparison' },
                                    { id: 'migration', label: 'Easy Migration' },
                                    { id: 'privacy', label: 'Data Privacy' },
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
                                <p className="text-sm text-slate-600 mb-4">Ready to switch?</p>
                                <a
                                    href={getProductSignupUrl('agent')}
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Dooza Free
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    If you've been exploring AI employees for your business, you've probably come across Sintra AI. While Sintra has made waves in the AI assistant space, many businesses are discovering that it doesn't quite meet their needs.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>The problem?</strong> Complex setup processes, unclear pricing, and AI that often requires extensive hand-holding. That's why more and more businesses are making the switch to Dooza.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    In this comparison, we'll break down exactly why Dooza is the better choice for businesses serious about AI automation.
                                </p>
                            </div>
                        </section>

                        {/* What is Sintra AI */}
                        <section id="what-is-sintra" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Sintra AI?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Sintra AI is a platform that offers AI-powered assistants (they call them "employees") designed to help with various business tasks. They provide pre-built AI personas for different roles like marketing, sales, and customer support.
                                </p>
                                <p className="mb-6">
                                    On the surface, it sounds similar to what Dooza offers. But the difference lies in the approach: Sintra is a self-serve software tool, while Dooza is a comprehensive service.
                                </p>
                                <p className="mb-6">
                                    With Sintra, you are given a LOGIN and left to figure it out. With Dooza, you get a TEAM that helps you build custom AI employees for your unique workflows.
                                </p>

                                <div className="w-full mb-8">
                                    <YouTubeEmbed 
                                        videoId="y6G-KBz1WYo"
                                        title="Sintra AI Review - Honest comparison with Dooza"
                                        className="aspect-video rounded-xl overflow-hidden shadow-lg bg-slate-900"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Social Proof / Tweets */}
                        <section id="social-proof" className="scroll-mt-28 mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What People Are Saying</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">SD</div>
                                        <div>
                                            <div className="font-bold text-slate-900">Sarah Digital</div>
                                            <div className="text-sm text-slate-500">@sarahdigital</div>
                                        </div>
                                        <div className="ml-auto text-blue-400">
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                                        </div>
                                    </div>
                                    <p className="text-slate-700">The Brain AI in Sintra is basically my second brain now. It knows my business better than I do. 🧠✨ #AI #Workflow</p>
                                </div>
                                <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">TM</div>
                                        <div>
                                            <div className="font-bold text-slate-900">Tech Founder Mike</div>
                                            <div className="text-sm text-slate-500">@techfounder_mike</div>
                                        </div>
                                        <div className="ml-auto text-blue-400">
                                            <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current"><g><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                                        </div>
                                    </div>
                                    <p className="text-slate-700">Finally replaced my 3 different AI subscriptions with just Sintra. The 12 helpers concept is genius. 🚀</p>
                                </div>
                            </div>
                        </section>

                        {/* Sintra Limitations */}
                        <section id="sintra-limitations" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Sintra AI Limitations: Where It Falls Short in 2026</h2>

                            <div className="space-y-6">
                                <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                    <div className="flex items-start gap-4">
                                        <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">Complex Onboarding</h4>
                                            <p className="text-slate-600">Setting up Sintra AI often requires hours of configuration, prompt engineering, and trial-and-error. Many users report spending days before seeing results.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                    <div className="flex items-start gap-4">
                                        <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">Confusing Pricing</h4>
                                            <p className="text-slate-600">With multiple tiers, add-ons, and usage limits that aren't always clear upfront, many users are surprised by unexpected costs.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                    <div className="flex items-start gap-4">
                                        <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">Limited Integrations</h4>
                                            <p className="text-slate-600">Connecting Sintra to your existing tools often requires third-party services like Zapier, adding more complexity and cost.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                    <div className="flex items-start gap-4">
                                        <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">No "Build For You" Service</h4>
                                            <p className="text-slate-600">If you need a custom workflow or a specific type of employee, you have to build it yourself. There is no team you can call to get it done for you.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Why Dooza */}
                        <section id="why-dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Dooza is the Better Choice</h2>

                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                                        <Zap size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">5-Minute Setup</h3>
                                    <p className="text-slate-600">Get your AI employees working in minutes, not days. Our pre-trained agents are ready to go out of the box.</p>
                                </div>

                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
                                        <DollarSign size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Transparent Pricing</h3>
                                    <p className="text-slate-600">Simple, predictable pricing starting at $29/month. No hidden fees, no surprise charges.</p>
                                </div>

                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                        <Settings size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Native Integrations</h3>
                                    <p className="text-slate-600">Direct connections to your favorite tools. No middleware, no extra costs, no complexity.</p>
                                </div>

                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                        <Bot size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Context-Aware AI</h3>
                                    <p className="text-slate-600">Our AI learns your business, your voice, and your preferences. Responses that actually sound like you.</p>
                                </div>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                <blockquote className="italic text-slate-700 mb-4">
                                    "We tried Sintra for 3 months and couldn't get it to work properly. Switched to Dooza, hopped on a free onboarding call, and their team built our agents for us that same afternoon."
                                </blockquote>
                                <div className="font-bold text-primary-700">— James R., E-commerce Founder</div>
                            </div>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Feature Comparison */}
                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Feature Comparison: Dooza vs Sintra AI</h2>

                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                                <table className="w-full border-collapse text-left bg-white">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Feature</th>
                                            <th className="p-4 border-b font-bold text-primary-700 bg-primary-50">Dooza</th>
                                            <th className="p-4 border-b font-bold">Sintra AI</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600 text-sm md:text-base">
                                        <tr>
                                            <td className="p-4 border-b font-medium">Setup Time</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">5 minutes</td>
                                            <td className="p-4 border-b text-red-500">Hours to days</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Starting Price</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">$29/month</td>
                                            <td className="p-4 border-b">$97+/month</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Free Trial</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">✅ Yes, 14 days</td>
                                            <td className="p-4 border-b">Limited</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Native Integrations</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">✅ Built-in</td>
                                            <td className="p-4 border-b text-red-500">Requires Zapier</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">AI Learning</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold">Learns your style</td>
                                            <td className="p-4 border-b">Generic templates</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Email Agent</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">✅ Included</td>
                                            <td className="p-4 border-b">✅ Included</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Social Media Agent</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">✅ Included</td>
                                            <td className="p-4 border-b">✅ Included</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Sales Agent</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">✅ Included</td>
                                            <td className="p-4 border-b">Add-on cost</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Onboarding Support</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">Free Concierge & Setup Call</td>
                                            <td className="p-4 border-b text-red-500">Self-Serve / Docs only</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Custom Agent Building</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">We Build It For You (Free)</td>
                                            <td className="p-4 border-b text-red-500">Do It Yourself</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Starting Price</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">$29/month</td>
                                            <td className="p-4 border-b">$97+/month</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b font-medium">Money-Back Guarantee</td>
                                            <td className="p-4 border-b bg-primary-50/30 font-semibold text-green-600">✅ 7 days</td>
                                            <td className="p-4 border-b text-red-500">❌ No</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Deep Dive: Email Management */}
                        <section id="deep-dive" className="scroll-mt-28 mb-12">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Deep Dive: Email Management</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Let's look closer at one of the most critical features: the Email Agent.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                    <h4 className="font-bold text-red-800 text-lg mb-4">Sintra's Email Agent</h4>
                                    <ul className="space-y-3 text-slate-700">
                                        <li className="flex gap-2 text-sm">
                                            <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                                            <span>Often struggles with context from previous threads</span>
                                        </li>
                                        <li className="flex gap-2 text-sm">
                                            <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                                            <span>Replies can sound robotic or overly formal</span>
                                        </li>
                                        <li className="flex gap-2 text-sm">
                                            <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                                            <span>Limited ability to take actions (like booking meetings) directly</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                                    <h4 className="font-bold text-green-800 text-lg mb-4">Dooza's Email Agent</h4>
                                    <ul className="space-y-3 text-slate-700">
                                        <li className="flex gap-2 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                            <span>Reads full thread history for perfect context</span>
                                        </li>
                                        <li className="flex gap-2 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                            <span>Mimics your personal writing style accurately</span>
                                        </li>
                                        <li className="flex gap-2 text-sm">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                                            <span>Can update CRM, book meetings, and draft follow-ups autonomously</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Pricing */}
                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Sintra AI vs Dooza Pricing: Full Cost Comparison 2026</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Let's talk money. One of the biggest complaints about Sintra AI is the confusing pricing structure. Here's how it really breaks down:
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <div className="text-primary-600 font-bold text-sm mb-2">DOOZA</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-4">$29<span className="text-lg font-normal text-slate-500">/month</span></div>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="text-slate-700">All AI employees included</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="text-slate-700">Unlimited conversations</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="text-slate-700">All integrations included</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="text-slate-700">Priority support</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <div className="text-slate-500 font-bold text-sm mb-2">SINTRA AI</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-4">$97+<span className="text-lg font-normal text-slate-500">/month</span></div>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3">
                                            <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                                            <span className="text-slate-600">Limited AI employees</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                                            <span className="text-slate-600">Usage caps apply</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                                            <span className="text-slate-600">Integrations cost extra</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                                            <span className="text-slate-600">Slow support response</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-6 bg-green-50 border border-green-100 p-4 rounded-xl text-center">
                                <p className="text-green-800 font-semibold">
                                    💰 Save over $800/year by choosing Dooza over Sintra AI
                                </p>
                            </div>
                        </section>

                        {/* Migration */}
                        <section id="migration" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Switching is Easy</h2>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Worried about the hassle of switching? Don't be. Moving from Sintra AI to Dooza is straightforward:
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Sign Up for Dooza</h4>
                                        <p className="text-slate-600">Create your free account in under 2 minutes. No credit card required to start.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Connect Your Tools</h4>
                                        <p className="text-slate-600">Link your email, social accounts, and other platforms with one-click integrations.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Activate Your AI Employees</h4>
                                        <p className="text-slate-600">Choose which AI employees you need and let them start working immediately.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Cancel Sintra</h4>
                                        <p className="text-slate-600">Once you're happy with Dooza, cancel your Sintra subscription. No overlap needed.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Data Privacy */}
                        <section id="privacy" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Data Privacy & Security</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    When you hire AI employees, you are giving them access to sensitive data. Dooza takes this responsibility seriously with enterprise-grade security.
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>SOC 2 Type II Compliant Infrastructure:</strong> Your data is stored securely.</li>
                                    <li><strong>Data Isolation:</strong> Your business data is never used to train models for other customers.</li>
                                    <li><strong>Granular Permissions:</strong> You decide exactly what each AI employee can see and do.</li>
                                </ul>
                            </div>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Verdict</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    While Sintra AI was an early player in the AI employee space, the platform hasn't kept up with what modern businesses need. Complex setup, confusing pricing, and generic AI responses leave users frustrated.
                                </p>
                                <p className="mb-6">
                                    <strong>Dooza was built to solve these exact problems.</strong> We've created AI employees that are genuinely easy to use, transparently priced, and intelligent enough to actually help your business grow.
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Experience the Difference?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Join thousands of businesses who've made the switch. Try Dooza free for 14 days.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href={getProductSignupUrl('agent')}
                                        className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all"
                                    >
                                        Start Free Trial
                                        <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={CAL_BOOKING_URL}
                                        onClick={handleAction}
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all"
                                    >
                                        <Calendar className="w-4 h-4" />
                                        Book a Demo
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* FAQ */}
                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Sintra AI Alternative FAQ</h2>
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
                        <RelatedPosts 
                            currentSlug="better-than-sintra-ai"
                            category="Comparison"
                            tags={['Sintra AI', 'Sintra AI Alternative', 'AI Employees', 'Comparison']}
                        />

                    </div>

                    <div className="hidden xl:block w-64 shrink-0" aria-hidden="true"></div>
                </div>
            </div>

            <BottomCTA openModal={handleAction} />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
};

export default BetterThanSintraAI;
