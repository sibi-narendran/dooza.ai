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
    Settings
} from 'lucide-react';

const faqData = [
    {
        question: "Is Dooza really better than Sintra AI?",
        answer: "Based on user feedback, setup time, pricing transparency, and feature set—yes. Dooza offers a more complete, easier-to-use solution at a lower price point."
    },
    {
        question: "Can I migrate my data from Sintra to Dooza?",
        answer: "While there's no direct data migration, you don't need to migrate anything. Dooza's AI employees learn your business fresh."
    },
    {
        question: "What if I'm locked into a Sintra contract?",
        answer: "You can still sign up for Dooza's free trial and test it alongside Sintra."
    },
    {
        question: "Does Dooza have all the same AI employees as Sintra?",
        answer: "Dooza offers AI employees for email, social media, sales, customer support, SEO, and more. We also offer call agents, which Sintra doesn't have."
    },
    {
        question: "How is the support at Dooza compared to Sintra?",
        answer: "Our average response time is under 2 hours, compared to the 24-48 hours many Sintra users report."
    }
];

export default function BetterThanSintraAIContent() {
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
            const sections = ['introduction', 'what-is-sintra', 'sintra-limitations', 'why-dooza', 'comparison', 'pricing', 'migration', 'conclusion', 'faq'];
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
                        { label: 'Sintra AI Alternative' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            <span className="text-primary-600">Sintra AI</span> Alternative: Why Businesses Switch to Dooza
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Why businesses are switching from Sintra AI to Dooza for their AI employee needs.
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

                        <div className="mt-10 max-w-3xl mx-auto">
                            <img
                                src="/blog/comparison-general.png"
                                alt="Comparison between Sintra AI and Dooza"
                                className="w-full rounded-2xl shadow-xl"
                                loading="lazy"
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
                                    { id: 'pricing', label: 'Pricing Comparison' },
                                    { id: 'migration', label: 'Easy Migration' },
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
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Dooza Free
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="better-than-sintra-ai" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    If you've been exploring AI employees for your business, you've probably come across <a href="https://sintra.ai" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Sintra AI</a>. While Sintra has made waves in the AI assistant space, many businesses are discovering that it doesn't quite meet their needs.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>The problem?</strong> Complex setup processes, unclear pricing, and AI that often requires extensive hand-holding.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    You can also check out reviews on <a href="https://www.g2.com/categories/ai-agents" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">G2's AI Agents category</a> to see how different platforms compare.
                                </p>
                            </div>
                        </section>

                        <section id="what-is-sintra" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Sintra AI?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Sintra AI is a platform that offers AI-powered assistants designed to help with various business tasks. They provide pre-built AI personas for different roles like marketing, sales, and customer support.
                                </p>
                                <p className="mb-6">
                                    The difference lies in the approach: Sintra is a self-serve software tool, while Dooza is a comprehensive service. With Sintra, you are given a LOGIN and left to figure it out. With Dooza, you get a TEAM.
                                </p>
                                <div className="w-full mb-8">
                                    <YouTubeEmbed 
                                        videoId="y6G-KBz1WYo"
                                        title="Sintra AI Review"
                                    />
                                </div>
                            </div>
                        </section>

                        <section id="sintra-limitations" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Sintra AI Limitations</h2>
                            <div className="space-y-6">
                                {[
                                    { title: "Complex Onboarding", desc: "Setting up Sintra AI often requires hours of configuration." },
                                    { title: "Confusing Pricing", desc: "Multiple tiers, add-ons, and usage limits that aren't always clear." },
                                    { title: "Limited Integrations", desc: "Connecting to your existing tools often requires third-party services like Zapier." },
                                    { title: "No 'Build For You' Service", desc: "If you need a custom workflow, you have to build it yourself." }
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
                                    { icon: Zap, title: "5-Minute Setup", desc: "Get your AI employees working in minutes.", color: "primary" },
                                    { icon: DollarSign, title: "Transparent Pricing", desc: "Starting at $29/month. No hidden fees.", color: "green" },
                                    { icon: Settings, title: "Native Integrations", desc: "Direct connections to your favorite tools.", color: "blue" },
                                    { icon: Bot, title: "Context-Aware AI", desc: "Our AI learns your business and preferences.", color: "purple" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm">
                                        <div className={`w-12 h-12 bg-${item.color}-50 rounded-lg flex items-center justify-center text-${item.color}-600 mb-4`}>
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
                                            <th className="p-4 border-b font-bold">Sintra AI</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr><td className="p-4 border-b font-medium">Setup Time</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">5 minutes</td><td className="p-4 border-b text-red-500">Hours to days</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Starting Price</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">$29/month</td><td className="p-4 border-b">$97+/month</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Free Trial</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">✅ Yes, 14 days</td><td className="p-4 border-b">Limited</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Native Integrations</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">✅ Built-in</td><td className="p-4 border-b text-red-500">Requires Zapier</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Onboarding Support</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Free Concierge</td><td className="p-4 border-b text-red-500">Self-Serve</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing Comparison</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-primary-50 border-2 border-primary-200 p-6 rounded-xl">
                                    <div className="text-primary-600 font-bold text-sm mb-2">DOOZA</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-4">$29<span className="text-lg font-normal text-slate-500">/month</span></div>
                                    <ul className="space-y-3">
                                        {["All AI employees included", "Unlimited conversations", "All integrations included", "Priority support"].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /><span className="text-slate-700">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                    <div className="text-slate-500 font-bold text-sm mb-2">SINTRA AI</div>
                                    <div className="text-4xl font-bold text-slate-900 mb-4">$97+<span className="text-lg font-normal text-slate-500">/month</span></div>
                                    <ul className="space-y-3">
                                        {["Limited AI employees", "Usage caps apply", "Integrations cost extra", "Slow support response"].map((item, idx) => (
                                            <li key={idx} className="flex gap-3"><XCircle className="w-5 h-5 text-red-400 shrink-0" /><span className="text-slate-600">{item}</span></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="migration" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Switching is Easy</h2>
                            <div className="space-y-4">
                                {[
                                    { step: "1", title: "Sign Up for Dooza", desc: "Create your free account in under 2 minutes." },
                                    { step: "2", title: "Connect Your Tools", desc: "Link your email, social accounts with one-click." },
                                    { step: "3", title: "Activate Your AI Employees", desc: "Choose which AI employees you need." },
                                    { step: "4", title: "Cancel Sintra", desc: "Once you're happy with Dooza, cancel Sintra." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">{item.step}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Verdict</h2>
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Experience the Difference?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">Try Dooza free for 14 days.</p>
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

                        <RelatedPosts currentSlug="better-than-sintra-ai" category="Comparison" tags={['Sintra AI', 'AI Employees', 'Comparison']} />
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
