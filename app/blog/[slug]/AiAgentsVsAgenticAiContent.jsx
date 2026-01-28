'use client';

import { useState, useEffect } from 'react';
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
    Clock,
    ArrowRight,
    Calendar,
    Bot,
    Sparkles,
    Zap,
    Brain,
    Layers
} from 'lucide-react';

const faqData = [
    {
        question: "What is the main difference between Generative AI and AI Agents?",
        answer: "Generative AI focuses on creating content. AI Agents go a step further by using tools to perform actions and complete tasks."
    },
    {
        question: "Is ChatGPT an AI Agent?",
        answer: "Standard ChatGPT is a Generative AI. However, when it uses tools like web browsing, it acts as an AI Agent."
    },
    {
        question: "What is Agentic AI?",
        answer: "Agentic AI refers to systems where multiple AI agents work together or a single agent handles complex, multi-step workflows."
    },
    {
        question: "Do I need to know coding to use Agentic AI?",
        answer: "Not necessarily. Modern platforms allow you to build agentic workflows using visual builders."
    }
];

export default function AiAgentsVsAgenticAiContent() {
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
            const sections = ['introduction', 'generative-ai', 'ai-agents', 'agentic-ai', 'comparison', 'conclusion', 'faq'];
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
                        { label: 'AI Agents vs Agentic AI' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Brain size={16} />
                            <span>AI Education</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            AI Agents vs <span className="text-primary-600">Agentic AI</span>: The Simple Explanation
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Generative AI, AI Agents, Agentic AI... what's the difference? We break it down simply.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>10 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 12, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <YouTubeEmbed 
                                videoId="2j26a5dmCnI"
                                title="AI Agents vs Agentic AI Explained"
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
                                    { id: 'generative-ai', label: '1. Generative AI' },
                                    { id: 'ai-agents', label: '2. AI Agents' },
                                    { id: 'agentic-ai', label: '3. Agentic AI' },
                                    { id: 'comparison', label: 'The Comparison' },
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
                                <p className="text-sm text-slate-600 mb-4">Ready to hire your AI team?</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Get Started Free
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="ai-agents-vs-agentic-ai" />
                            </div>
                        </div>
                    </aside>

                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    "Generative AI", "AI Agents", "Agentic AI." You've probably heard these terms thrown around. But what do they actually mean?
                                </p>
                                <p className="text-lg leading-relaxed">
                                    My goal today is to explain the difference between these three terms in the most simple language possible.
                                </p>
                            </div>
                        </section>

                        <section id="generative-ai" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 p-2 rounded-lg"><Sparkles className="w-6 h-6 text-blue-600" /></div>
                                <h2 className="text-3xl font-bold text-slate-900">1. Generative AI: The Creator</h2>
                            </div>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Generative AI is, at its core, an AI that can create new content—text, images, videos, or audio—based on patterns it has learned.
                                </p>
                                <p className="mb-6">
                                    At the heart of it is a <strong>Large Language Model (LLM)</strong>—think <a href="https://openai.com/gpt-4" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">GPT-4</a>, <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Claude</a>, or <a href="https://ai.google.dev" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Gemini</a>.
                                </p>
                                <div className="bg-slate-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-6">
                                    <h4 className="font-bold text-slate-900 mb-2">The Limitation: The Knowledge Cutoff</h4>
                                    <p className="text-slate-600">
                                        If you ask a standard LLM, "What is the price of a flight ticket tomorrow?", it won't be able to answer. It only knows what it was trained on.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="ai-agents" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-purple-100 p-2 rounded-lg"><Bot className="w-6 h-6 text-purple-600" /></div>
                                <h2 className="text-3xl font-bold text-slate-900">2. AI Agents: The Doer</h2>
                            </div>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Now, imagine giving that "brain" (the LLM) a pair of hands. That's essentially what an AI Agent is.
                                </p>
                                <p className="mb-6">
                                    An AI Agent is an LLM that has access to <strong>tools</strong>. These tools can be anything: a web search capability, a calculator, or an API connection.
                                </p>
                                <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl mb-6">
                                    <h4 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                                        <Zap className="w-5 h-5" />
                                        The Hammer & Screwdriver Analogy
                                    </h4>
                                    <p className="text-primary-800">
                                        Think of the LLM as a human brain. If I give you a hammer and a screwdriver, you can do much more than you could with just your bare hands. Similarly, tools give the LLM the ability to <strong>act</strong>, not just think.
                                    </p>
                                </div>
                                <p className="mb-4">With an AI Agent, you can ask: <em>"Book me the cheapest flight tomorrow."</em></p>
                                <ul className="space-y-2 mb-6">
                                    {["The agent searches for flights using an API.", "It compares prices to find the cheapest one.", "It books the flight for you."].map((item, idx) => (
                                        <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section id="agentic-ai" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-green-100 p-2 rounded-lg"><Layers className="w-6 h-6 text-green-600" /></div>
                                <h2 className="text-3xl font-bold text-slate-900">3. Agentic AI: The Orchestra</h2>
                            </div>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    We move from simple tasks to complex workflows with <strong>Agentic AI</strong>. This is where we see multiple agents working together.
                                </p>
                                <h4 className="text-xl font-bold text-slate-900 mb-4">The Complex Travel Scenario</h4>
                                <p className="mb-4">
                                    Imagine a more complex request: <em>"I want a 7-day trip to New Delhi in May. The weather must be sunny, budget under $1,600, and no layovers."</em>
                                </p>
                                <p className="mb-6">An Agentic AI system breaks this down:</p>
                                <div className="space-y-4 mb-8">
                                    {[
                                        { step: "1", title: "Weather Agent", desc: "Checks historical weather data to find 7 consecutive sunny days." },
                                        { step: "2", title: "Flight Booking Agent", desc: "Searches for flights on those specific dates." },
                                        { step: "3", title: "Immigration Agent", desc: "Checks your passport status and visa eligibility." }
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
                            </div>
                        </section>

                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Comparison</h2>
                            <div className="mb-8">
                                <img
                                    src="/blog/ai-agents-vs-agentic-ai.png"
                                    alt="Comparison of Generative AI, AI Agents, and Agentic AI"
                                    className="w-full rounded-xl shadow-lg border border-slate-100"
                                    loading="lazy"
                                />
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="p-4 border-b-2 border-slate-200 bg-slate-50 font-bold text-slate-900">Feature</th>
                                            <th className="p-4 border-b-2 border-slate-200 bg-slate-50 font-bold text-slate-900">Generative AI</th>
                                            <th className="p-4 border-b-2 border-slate-200 bg-slate-50 font-bold text-slate-900">AI Agent</th>
                                            <th className="p-4 border-b-2 border-slate-200 bg-slate-50 font-bold text-slate-900">Agentic AI</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-600">
                                        <tr><td className="p-4 border-b border-slate-100 font-medium text-slate-900">Core Function</td><td className="p-4 border-b border-slate-100">Create Content</td><td className="p-4 border-b border-slate-100">Execute Task</td><td className="p-4 border-b border-slate-100">Complex Goals</td></tr>
                                        <tr><td className="p-4 border-b border-slate-100 font-medium text-slate-900">Tool Usage</td><td className="p-4 border-b border-slate-100">None</td><td className="p-4 border-b border-slate-100">Single/Simple</td><td className="p-4 border-b border-slate-100">Multiple/Complex</td></tr>
                                        <tr><td className="p-4 border-b border-slate-100 font-medium text-slate-900">Autonomy</td><td className="p-4 border-b border-slate-100">Low (Reactive)</td><td className="p-4 border-b border-slate-100">Medium</td><td className="p-4 border-b border-slate-100">High</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion</h2>
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Build Your AI Workforce?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">Start with a free account and hire your first AI employee today.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={getProductSignupUrl('workforce')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Get Started Free <ArrowRight className="w-4 h-4" />
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

                        <RelatedPosts currentSlug="ai-agents-vs-agentic-ai" category="AI Education" tags={['AI Agents', 'Agentic AI', 'Generative AI']} />
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
