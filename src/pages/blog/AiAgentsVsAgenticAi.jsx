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
    Star,
    Zap,
    Clock,
    Mail,
    MessageCircle,
    ArrowRight,
    ArrowLeft,
    Calendar,
    Phone,
    FileText,
    TrendingUp,
    Users,
    Bot,
    Sparkles,
    Target,
    DollarSign,
    BarChart3,
    Cpu,
    Layers,
    Brain
} from 'lucide-react';

// FAQ data for schema markup
const faqData = [
    {
        question: "What is the main difference between Generative AI and AI Agents?",
        answer: "Generative AI focuses on creating content (text, images, video) based on trained data. AI Agents go a step further by using tools to perform actions and complete tasks, like booking a flight or sending an email."
    },
    {
        question: "Is ChatGPT an AI Agent?",
        answer: "Standard ChatGPT is a Generative AI. However, when it uses tools like web browsing or plugins to perform actions (like searching the web for current prices), it acts as an AI Agent."
    },
    {
        question: "What is Agentic AI?",
        answer: "Agentic AI refers to systems where multiple AI agents work together or a single agent handles complex, multi-step workflows with a high degree of autonomy. It's like having a team of specialized workers rather than just one assistant."
    },
    {
        question: "Do I need to know coding to specific Use Agentic AI?",
        answer: "Not necessarily. Modern platforms allow you to build agentic workflows using visual builders. However, understanding the logic of how agents interact with tools and each other is helpful."
    }
];

// Get current post data
const currentPost = blogPosts.find(p => p.slug === 'ai-agents-vs-agentic-ai');

const AiAgentsVsAgenticAi = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && url.includes('cal.com')) {
            if (e) e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    // Handle scroll spy for table of contents
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                'introduction',
                'generative-ai',
                'ai-agents',
                'agentic-ai',
                'comparison',
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
                title="AI Agents vs Agentic AI: The Simple Explanation"
                description="Confused by the jargon? We break down the differences between Generative AI, AI Agents, and Agentic AI in simple terms."
                keywords="AI Agents, Agentic AI, Generative AI, LLM, Artificial Intelligence, AI tools"
                canonicalUrl={`${SITE_URL}/blog/ai-agents-vs-agentic-ai`}
                image="/blog/ai-agents-vs-agentic-ai.png"
                type="article"
                author="Dooza Team"
                publishedTime="2026-01-12T00:00:00Z"
                modifiedTime="2026-01-12T00:00:00Z"
                structuredData={generateArticleSchema(currentPost, SITE_URL)}
                additionalStructuredData={[
                    generateFAQSchema(faqData),
                    generateBreadcrumbSchema([
                        { name: "Home", url: SITE_URL },
                        { name: "Blog", url: `${SITE_URL}/blog` },
                        { name: "AI Agents vs Agentic AI" }
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
                            Generative AI, AI Agents, Agentic AI... what's the difference? We stick to the basics to explain how these technologies are evolving from simple chat to autonomous action.
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

                        {/* Hero Video */}
                        <div className="mt-10 max-w-3xl mx-auto">
                            <YouTubeEmbed 
                                videoId="2j26a5dmCnI"
                                title="AI Agents vs Agentic AI Explained"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between lg:gap-12 items-start">

                    {/* Sidebar (Desktop only) */}
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
                                    href={getProductSignupUrl('agent')}
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Get Started Free
                                </a>
                            </div>
                        </div>
                    </aside>

                    {/* Main Article Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    "Generative AI", "AI Agents", "Agentic AI." You've probably heard these terms thrown around in meetings or on LinkedIn. But what do they actually mean? And more importantly, how are they different?
                                </p>
                                <p className="text-lg leading-relaxed">
                                    My goal today is to explain the difference between these three terms in the most simple language possible. We'll start from the basics of content creation and move all the way to autonomous systems that can plan an entire vacation for you.
                                </p>
                            </div>
                        </section>

                        {/* Generative AI */}
                        <section id="generative-ai" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Sparkles className="w-6 h-6 text-blue-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">1. Generative AI: The Creator</h2>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Generative AI is, at its core, an AI that can create new content. This content can be text, images, videos, or even audio, based on patterns it has learned from existing data.
                                </p>
                                <p className="mb-6">
                                    At the heart of it is a <strong>Large Language Model (LLM)</strong>—think GPT-4, Claude, or Gemini. These models are trained on a huge volume of internet data: Wikipedia, Google Books, and so on.
                                </p>

                                <div className="bg-slate-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-6">
                                    <h4 className="font-bold text-slate-900 mb-2">The Limitation: The Knowledge Cutoff</h4>
                                    <p className="text-slate-600">
                                        If you ask a standard LLM, "What is the price of a flight ticket tomorrow?", it won't be able to answer. Why? Because it has a knowledge cutoff date. It only knows what it was trained on. It doesn't have a live connection to the world by default.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* AI Agents */}
                        <section id="ai-agents" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-purple-100 p-2 rounded-lg">
                                    <Bot className="w-6 h-6 text-purple-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">2. AI Agents: The Doer</h2>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Now, imagine giving that "brain" (the LLM) a pair of hands. That's essentially what an AI Agent is.
                                </p>
                                <p className="mb-6">
                                    An AI Agent is an LLM that has access to <strong>tools</strong>. These tools can be anything: a web search capability, a calculator, or an API connection to Expedia or a travel site.
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

                                <p className="mb-4">
                                    With an AI Agent, you can ask: <em>"Book me the cheapest flight tomorrow from Place A to Place B."</em>
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                        <span>The agent searches for flights using an API.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                        <span>It compares prices to find the cheapest one.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                                        <span>It books the flight for you.</span>
                                    </li>
                                </ul>
                                <p>
                                    It takes input, thinks, and <strong>acts</strong> to complete a narrow task.
                                </p>
                            </div>
                        </section>

                        {/* Agentic AI */}
                        <section id="agentic-ai" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <Layers className="w-6 h-6 text-green-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">3. Agentic AI: The Orchestra</h2>
                            </div>

                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    We move from simple tasks to complex workflows with <strong>Agentic AI</strong>. This is where we see multiple agents working together or a system capable of complex, multi-step planning and reasoning.
                                </p>

                                <h4 className="text-xl font-bold text-slate-900 mb-4">The Complex Travel Scenario</h4>
                                <p className="mb-4">
                                    Imagine a more complex request: <em>"I want a 7-day trip to New Delhi in May. The weather must be sunny, budget under $1,600, and no layovers."</em>
                                </p>
                                <p className="mb-6">
                                    A simple agent might struggle. An Agentic AI system breaks this down:
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Weather Agent</h4>
                                            <p className="text-slate-600">Checks historical weather data to find 7 consecutive sunny days in May.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Flight Booking Agent</h4>
                                            <p className="text-slate-600">Searches for flights on those specific sunny dates that fit the budget.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Immigration Agent</h4>
                                            <p className="text-slate-600">Checks your passport status and visa eligibility for the destination.</p>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    The system coordinates these agents. If the Immigration Agent says "Visa Expired," the system stops the booking agent and alerts you. It's autonomous, handles multi-step reasoning, and works towards a complex goal.
                                </p>
                            </div>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Comparison */}
                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Comparison</h2>

                            <div className="mb-8">
                                <img
                                    src="/blog/ai-agents-vs-agentic-ai.png"
                                    alt="Comparison of Generative AI, AI Agents, and Agentic AI"
                                    className="w-full rounded-xl shadow-lg border border-slate-100"
                                    loading="lazy"
                                    width="800"
                                    height="450"
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
                                        <tr>
                                            <td className="p-4 border-b border-slate-100 font-medium text-slate-900">Core Function</td>
                                            <td className="p-4 border-b border-slate-100">Create Content</td>
                                            <td className="p-4 border-b border-slate-100">Execute Task</td>
                                            <td className="p-4 border-b border-slate-100">Complex Goals</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-slate-100 font-medium text-slate-900">Tool Usage</td>
                                            <td className="p-4 border-b border-slate-100">None</td>
                                            <td className="p-4 border-b border-slate-100">Single/Simple</td>
                                            <td className="p-4 border-b border-slate-100">Multiple/Complex</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 border-b border-slate-100 font-medium text-slate-900">Autonomy</td>
                                            <td className="p-4 border-b border-slate-100">Low (Reactive)</td>
                                            <td className="p-4 border-b border-slate-100">Medium</td>
                                            <td className="p-4 border-b border-slate-100">High</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    As we evolve from simple Generative AI to AI Agents and now to Agentic AI, the complexity of tasks we can automate increases drastically.
                                </p>
                                <p className="mb-6">
                                    Whether you are looking to build a simple chatbot or a fully autonomous employee onboarding system, understanding these distinctions is the first step.
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Build Your AI Workforce?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Start with a free account and hire your first AI employee today. No credit card required.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a
                                        href={getProductSignupUrl('agent')}
                                        className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all"
                                    >
                                        Get Started Free
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

                        {/* Related Posts */}
                        <RelatedPosts
                            currentSlug="ai-agents-vs-agentic-ai"
                            category="AI Education"
                            tags={['AI Agents', 'Agentic AI', 'Generative AI', 'LLM']}
                        />

                    </div>

                    {/* Ghost for centering */}
                    <div className="hidden xl:block w-64 shrink-0" aria-hidden="true"></div>
                </div>
            </div>

            <BottomCTA openModal={handleAction} />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
};

export default AiAgentsVsAgenticAi;
