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
    Bot,
    Sparkles,
    Settings,
    RefreshCw,
    Users,
    Share2
} from 'lucide-react';

const faqData = [
    {
        question: "Is Dooza better than Sintra AI for building AI agents?",
        answer: "Yes. While Sintra gives you predefined assistants, Dooza lets you create fully custom AI agents with defined tone, responsibilities, and automated routines — so the AI actually does the work instead of just helping you do it."
    },
    {
        question: "Can I create custom AI agents with Sintra?",
        answer: "Sintra offers predefined AI assistants for tasks like email, content, and branding. However, you cannot build custom agents with specific tones, responsibilities, or automated routines the way you can with Dooza."
    },
    {
        question: "What makes Dooza's AI agents different from Sintra's assistants?",
        answer: "Dooza's agents are execution-focused — they run tasks in the background without constant input. Sintra's assistants are prompt-driven, meaning you still write prompts, review outputs, and decide what happens next."
    },
    {
        question: "Can I monetize AI agents built on Dooza?",
        answer: "Yes. Dooza allows you to share or monetize the custom agents you build. This turns Dooza from a productivity tool into a platform you can actually build a business on."
    },
    {
        question: "Is Sintra AI worth it in 2026?",
        answer: "Sintra is a solid starting point, especially for beginners. But if you want AI that actually takes ownership of tasks and runs without constant input, Dooza is the better long-term choice."
    },
    {
        question: "Do I need technical skills to use Dooza's AI agents?",
        answer: "Not at all. Dooza is designed for non-technical users. You define what you want the agent to do, set its tone and responsibilities, and it handles the rest."
    }
];

export default function BetterThanSintraAIAgentsContent() {
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
            const sections = ['introduction', 'video-review', 'sintra-overview', 'sintra-limitations', 'dooza-difference', 'custom-agents', 'comparison', 'verdict', 'faq'];
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
                        { label: 'Better Than Sintra? The Truth About AI Agents' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Comparison Guide</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Better Than <span className="text-primary-600">Sintra</span>? The Truth About AI Agents
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            We reviewed Sintra AI and Dooza side by side. Here's what we found about how they handle AI agents — and which one actually does the work for you.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>April 10, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/better-than-sintra-ai-agents.png"
                                alt="Better Than Sintra? The Truth About AI Agents — Dooza vs Sintra comparison"
                                priority={true}
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
                                    { id: 'video-review', label: 'Video Review' },
                                    { id: 'sintra-overview', label: 'What is Sintra AI?' },
                                    { id: 'sintra-limitations', label: 'Where Sintra Falls Short' },
                                    { id: 'dooza-difference', label: 'The Dooza Difference' },
                                    { id: 'custom-agents', label: 'Custom AI Agents' },
                                    { id: 'comparison', label: 'Feature Comparison' },
                                    { id: 'verdict', label: 'The Verdict' },
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
                                <p className="text-sm text-slate-600 mb-4">Ready to build AI agents?</p>
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
                                <InternalLinks currentSlug="better-than-sintra-ai-agents" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    AI tools like <strong>Sintra AI</strong> are getting a lot of attention right now — and for good reason. They promise to give businesses AI-powered assistants that handle content, email, branding, and general tasks. But after spending real time with both Sintra and <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza</Link>, a clear pattern emerges.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>The core question isn't which tool has more features.</strong> It's whether you want to <em>manage</em> AI or have AI <em>actually do the work</em>. That distinction changes everything — and it's exactly what separates these two platforms.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    In this review, we break down both tools honestly: what Sintra does well, where it falls short, and why businesses building for long-term automation are choosing Dooza instead.
                                </p>
                            </div>
                        </section>

                        <section id="video-review" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Watch: Sintra vs Dooza — Full Review</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    Before we dive into the details, watch our side-by-side review of both platforms. We tested real workflows — content creation, email automation, and task delegation — to see how each tool performs in practice.
                                </p>
                            </div>
                            <div className="w-full mb-8">
                                <YouTubeEmbed
                                    videoId="irKKggby-MA"
                                    title="Better Than Sintra? The Truth About AI Agents — Dooza vs Sintra Review"
                                />
                            </div>
                        </section>

                        <section id="sintra-overview" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What is Sintra AI?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    Sintra AI is a platform that offers multiple AI assistants for business tasks — content writing, email marketing, branding, and general task management. The interface is clean and well-designed. It guides you step by step through each process, which makes it approachable, especially if you're new to AI tools.
                                </p>
                                <p className="mb-6">
                                    On the surface, it's a great starting point. You pick an assistant, describe what you need, and the AI generates output. It feels simple and structured.
                                </p>
                                <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
                                    <h4 className="font-bold text-slate-900 mb-2">What Sintra Does Well</h4>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /><span>Clean, easy-to-use interface</span></li>
                                        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /><span>Multiple predefined AI assistants</span></li>
                                        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /><span>Step-by-step guided workflows</span></li>
                                        <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" /><span>Good for beginners exploring AI</span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section id="sintra-limitations" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Where Sintra Falls Short</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-6">
                                <p>
                                    After using Sintra consistently, one thing becomes very clear: <strong>you are still doing most of the work yourself</strong>. You're writing prompts, reviewing outputs, making edits, and deciding what happens next. The AI is helping, but it's not taking ownership of the task.
                                </p>
                                <p>
                                    It feels more like you're managing a set of tools rather than actually delegating work.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { title: "You're Still the Operator", desc: "Every task requires you to write prompts, review outputs, and make final decisions. The AI assists — it doesn't execute independently." },
                                    { title: "No Custom Agent Creation", desc: "You work with predefined assistants. You can't build agents with specific tones, responsibilities, or automated routines tailored to your workflow." },
                                    { title: "Repetitive Prompt Work", desc: "Without automation routines, you end up repeating the same prompts over and over for recurring tasks. There's no way to 'set it and forget it.'" },
                                    { title: "Limited Customization", desc: "The predefined assistants keep things simple, but they also limit how much you can shape the AI around your specific business needs." }
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

                        <section id="dooza-difference" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Dooza Difference: Execution Over Assistance</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This is where the difference shows up. While Sintra gives you assistants, <strong>Dooza takes an execution-focused path</strong>. Instead of just giving you tools to use, Dooza lets you create custom AI agents that actually run tasks in the background — without you needing to step in every time.
                                </p>
                                <p>
                                    Instead of repeating the same prompts again and again, you're building a system that works for you. That's the fundamental shift: from <em>using AI</em> to <em>deploying AI</em>.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: Bot, title: "Custom AI Agents", desc: "Define tone, assign responsibilities, and set automated routines — your agents run without constant input.", color: "primary" },
                                    { icon: RefreshCw, title: "Automated Routines", desc: "Set tasks that keep running in the background. No more repeating the same prompts daily.", color: "green" },
                                    { icon: Settings, title: "Full Customization", desc: "Build agents based on exactly how you want things to run. Shape AI around your workflow.", color: "blue" },
                                    { icon: Share2, title: "Share & Monetize", desc: "Your custom agents can be shared or monetized — turning productivity into a business.", color: "purple" }
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

                        <section id="custom-agents" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Custom AI Agents Matter</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    The biggest shift happening in AI right now isn't about better chatbots or smarter assistants. It's about moving from <strong>using AI as a tool</strong> to <strong>building systems where AI handles work autonomously</strong>.
                                </p>
                                <p>
                                    With Sintra, you're mostly working with predefined assistants. That keeps things simple — but it also limits how much you can customize. With Dooza, you can build your own agents based on exactly how you want things to run.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-primary-50 to-blue-50 border border-primary-100 p-8 rounded-xl mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">What You Can Do With Dooza's Custom Agents</h3>
                                <div className="space-y-4">
                                    {[
                                        { step: "1", title: "Define Agent Personality", desc: "Set the tone, voice, and communication style for each agent — match your brand perfectly." },
                                        { step: "2", title: "Assign Specific Responsibilities", desc: "Give each agent a clear role: customer support, content creation, lead follow-up, social media." },
                                        { step: "3", title: "Set Automated Routines", desc: "Schedule recurring tasks that run without your input. The agent handles execution on autopilot." },
                                        { step: "4", title: "Share or Monetize", desc: "Package your agents and share them with clients or sell them as done-for-you AI solutions." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-start bg-white/70 p-5 rounded-xl">
                                            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">{item.step}</div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <p className="text-slate-700 italic text-lg leading-relaxed">
                                    "You're not just using AI — you're shaping it around your workflow. And it goes a step further because those agents can actually be shared or even monetized. So it's not just about productivity — it starts to feel like something you can build on and grow."
                                </p>
                            </div>
                        </section>

                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Sintra vs Dooza: Feature Comparison</h2>
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
                                        <tr><td className="p-4 border-b font-medium">AI Approach</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Execution-focused agents</td><td className="p-4 border-b">Prompt-driven assistants</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Custom Agents</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes — fully customizable</td><td className="p-4 border-b text-red-500">No — predefined only</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Automated Routines</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes — runs in background</td><td className="p-4 border-b text-red-500">No — manual each time</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Agent Monetization</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Yes — share & sell agents</td><td className="p-4 border-b text-red-500">Not available</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Workflow Customization</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Build to your exact needs</td><td className="p-4 border-b">Limited to templates</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Starting Price</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">$29/month</td><td className="p-4 border-b">$97+/month</td></tr>
                                        <tr><td className="p-4 border-b font-medium">User Input Required</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Minimal — agents run autonomously</td><td className="p-4 border-b text-red-500">High — you drive every task</td></tr>
                                        <tr><td className="p-4 border-b font-medium">Best For</td><td className="p-4 border-b bg-primary-50/30 text-green-600 font-semibold">Businesses wanting AI to do the work</td><td className="p-4 border-b">Beginners exploring AI tools</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="verdict" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Verdict: Do You Want to Manage AI or Have AI Do the Work?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    To be fair, Sintra AI is still a solid tool. It's clean, it's approachable, and it's a good introduction to what AI can do for your business. But the industry is moving toward <strong>more automation</strong> — where things actually run without constant input.
                                </p>
                                <p>
                                    That's the biggest shift happening right now. We're moving from <strong>using AI as a tool</strong> to <strong>building systems where AI can actually handle work for us</strong>.
                                </p>
                                <p>
                                    The real question is simple: <strong>Do you want to manage AI, or do you want AI to actually do the work?</strong>
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Build AI Agents That Actually Work?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">Stop managing prompts. Start deploying agents. Try Dooza free for 14 days — no credit card required.</p>
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

                        <RelatedPosts currentSlug="better-than-sintra-ai-agents" category="Comparison" tags={['Sintra AI', 'AI Agents', 'Comparison', 'AI Automation']} />
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
