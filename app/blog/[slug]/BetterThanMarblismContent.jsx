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
    Globe,
    Settings
} from 'lucide-react';

const faqData = [
    {
        question: "Is Marblism bad?",
        answer: "Not at all—Marblism is excellent for code generation. But for dedicated AI employees, a purpose-built platform like Dooza will serve you better."
    },
    {
        question: "Can I use both Dooza and Marblism?",
        answer: "Absolutely. Many teams use Marblism for development work and Dooza for AI employees."
    },
    {
        question: "Does Dooza require coding knowledge?",
        answer: "Zero coding required. Dooza is designed for business owners, marketers, and operators."
    },
    {
        question: "Which has better AI quality?",
        answer: "Dooza's AI employees are trained specifically for business tasks and continuously improved."
    }
];

export default function BetterThanMarblismContent() {
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
            const sections = ['introduction', 'what-is-marblism', 'marblism-limitations', 'why-dooza', 'comparison', 'pricing', 'conclusion', 'faq'];
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
                        { label: 'Marblism Alternative' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">Marblism</span> Alternative: Why Dooza Wins for AI Employees
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Marblism entered the AI employee space, but does it deliver? Here's why Dooza remains the smarter choice.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 10, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/comparison-structures.png"
                                alt="Comparison between Marblism and Dooza"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between lg:gap-12 items-start">

                    <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 sticky top-28 max-h-[80vh] overflow-y-auto">
                            <h3 className="font-semibold text-slate-900 mb-4">Table of Contents</h3>
                            <nav className="space-y-1">
                                {[
                                    { id: 'introduction', label: 'Introduction' },
                                    { id: 'what-is-marblism', label: 'What is Marblism?' },
                                    { id: 'marblism-limitations', label: 'Marblism Limitations' },
                                    { id: 'why-dooza', label: 'Why Dooza Wins' },
                                    { id: 'comparison', label: 'Feature Comparison' },
                                    { id: 'pricing', label: 'Pricing Breakdown' },
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
                                <p className="text-sm text-slate-600 mb-4">See the difference yourself</p>
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
                                <InternalLinks currentSlug="better-than-marblism" />
                            </div>
                        </div>
                    </aside>

                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    <a href="https://www.marblism.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Marblism</a> has fully pivoted into the AI employee space, joining platforms like <a href="https://sintra.ai" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Sintra AI</a> in the race to automate business operations.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    In this comparison, we'll break down how Marblism stacks up against Dooza—and why businesses serious about AI automation are choosing Dooza.
                                </p>
                            </div>
                        </section>

                        <section id="what-is-marblism" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Marblism?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Marblism is an AI employee platform that offers virtual assistants for roles like marketing, sales, content creation, and customer support.
                                </p>
                                <p className="mb-6">
                                    Dooza takes a fundamentally different approach—one that prioritizes ease of use and human support. Dooza isn't just software; it's a partnership.
                                </p>
                                <div className="w-full mb-8">
                                    <YouTubeEmbed 
                                        videoId="b7vWOfSKy_0"
                                        title="Marblism AI Employees Review"
                                    />
                                </div>
                            </div>
                        </section>

                        <section id="marblism-limitations" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Marblism Limitations</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Complex Setup Process", desc: "Getting Marblism's AI employees to work effectively often requires extensive configuration." },
                                    { title: "Generic AI Responses", desc: "Users frequently report templated, one-size-fits-all responses." },
                                    { title: "Limited Integration Options", desc: "Connecting to your existing tools often requires workarounds." },
                                    { title: "Lack of Human Support", desc: "There's no concierge onboarding or team you can call." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-red-50 border border-red-100 p-6 rounded-xl">
                                        <div className="flex items-start gap-4">
                                            <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                                <p className="text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="why-dooza" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Dooza is the Better Choice</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: Zap, title: "5-Minute Setup", desc: "Get your AI employees working in minutes." },
                                    { icon: Bot, title: "Context-Aware AI", desc: "Our AI learns your business and voice." },
                                    { icon: Globe, title: "Native Integrations", desc: "Direct connections to 50+ tools." },
                                    { icon: DollarSign, title: "Transparent Pricing", desc: "Starting at $29/month. No hidden fees." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                                        <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                                            <item.icon size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Feature Comparison</h2>
                            <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-sm">
                                <table className="w-full border-collapse text-left bg-white">
                                    <thead className="bg-slate-50 text-slate-900">
                                        <tr>
                                            <th className="p-4 border-b font-bold">Feature</th>
                                            <th className="p-4 border-b font-bold text-primary-700 bg-primary-50">Dooza</th>
                                            <th className="p-4 border-b font-bold">Marblism</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr><td className="p-4 border-b font-medium">Onboarding Support</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Free Concierge</td><td className="p-4 border-b text-slate-500">Self-Serve</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Custom Agent Building</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">We Build For You</td><td className="p-4 border-b text-slate-500">Do It Yourself</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Starting Price</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">$29/month</td><td className="p-4 border-b">$49+/month</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Call Agent (Voice AI)</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">✅ Included</td><td className="p-4 border-b text-red-500">❌ Not available</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Support Response</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">&lt; 2 hours</td><td className="p-4 border-b">24-48 hours</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing Breakdown</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <div className="text-primary-600 font-bold text-sm mb-2">DOOZA</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-4">$29<span className="text-lg font-normal text-slate-500">/month</span></div>
                                    <ul className="space-y-3">
                                        {["All 6+ AI employees included", "Unlimited conversations", "All integrations included", "Priority support", "No feature gating"].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /><span className="text-slate-700">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <div className="text-slate-500 font-bold text-sm mb-2">MARBLISM</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-4">$49+<span className="text-lg font-normal text-slate-500">/month</span></div>
                                    <ul className="space-y-3">
                                        {["Limited AI employee types", "Bundled with code gen tools", "Some integrations extra", "Community-first support", "Features vary by plan"].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><XCircle className="w-5 h-5 text-red-400 shrink-0" /><span className="text-slate-600">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Bottom Line</h2>
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready for AI Employees That Actually Deliver?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">Try Dooza free for 14 days. No credit card required.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Start Free Trial <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book a Demo
                                    </a>
                                </div>
                            </div>
                        </section>

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

                        <RelatedPosts currentSlug="better-than-marblism" category="Comparison" tags={['Marblism', 'AI Employees', 'Comparison']} />
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
