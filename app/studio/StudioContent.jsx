'use client';

import { useState } from 'react';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../lib/links';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { trackSignupClick, trackDemoClick } from '../../lib/analytics';
import {
    ArrowRight,
    Database,
    Shield,
    Globe,
    Users,
    Code2,
    Workflow,
    Bot,
    Calendar,
    Star,
    Check,
    Cpu,
    Upload,
    Settings
} from 'lucide-react';

const FEATURES = {
    workflow: {
        label: "Workflow Builder",
        title: "Visual Workflow Builder",
        description: "Design sophisticated AI workflows with our intuitive drag-and-drop canvas. Connect nodes, add logic, and deploy in minutes.",
        icon: Workflow,
        points: ["Drag & drop interface", "100+ pre-built nodes", "Real-time preview", "Version control"]
    },
    models: {
        label: "Multi-Model",
        title: "Multi-Model Support",
        description: "Connect to any LLM provider — OpenAI, Anthropic, Google, or your own. Switch models without changing code.",
        icon: Cpu,
        points: ["OpenAI, Claude, Gemini", "Local model support", "Model fallbacks", "Cost optimization"]
    },
    rag: {
        label: "RAG Pipeline",
        title: "Built-in RAG Pipeline",
        description: "Upload documents, connect databases, and create knowledge bases. Your agents become experts on your data.",
        icon: Database,
        points: ["Document ingestion", "Vector databases", "Semantic search", "Auto-chunking"]
    },
    deploy: {
        label: "Deploy",
        title: "One-Click Deploy",
        description: "Ship your agents to production instantly. Get APIs, webhooks, and embeddable widgets out of the box.",
        icon: Upload,
        points: ["REST API endpoints", "Webhook triggers", "Chat widget", "SDK libraries"]
    }
};

const STATS = [
    { value: "50K+", label: "Agents Built", icon: Bot },
    { value: "120+", label: "Countries", icon: Globe },
    { value: "10K+", label: "Teams", icon: Users },
    { value: "99.9%", label: "Uptime", icon: Shield }
];

const TESTIMONIALS = [
    {
        quote: "Studio cut our development time from weeks to hours. We shipped our customer support AI in a single afternoon.",
        author: "Sarah Chen",
        role: "CTO, TechFlow",
        avatar: "SC"
    },
    {
        quote: "The visual workflow builder is a game-changer. Our non-technical team members can now build and iterate on AI agents themselves.",
        author: "Marcus Johnson",
        role: "Head of Operations, Nexus AI",
        avatar: "MJ"
    },
    {
        quote: "Finally, an AI platform that's actually production-ready. The observability and debugging tools saved us countless hours.",
        author: "Elena Rodriguez",
        role: "Lead Engineer, DataStack",
        avatar: "ER"
    }
];

const USE_CASES = [
    {
        title: "Customer Support",
        description: "Build AI agents that resolve tickets, answer questions, and escalate when needed.",
        icon: Users
    },
    {
        title: "Data Analysis",
        description: "Create agents that query databases, generate reports, and surface insights.",
        icon: Database
    },
    {
        title: "Content Generation",
        description: "Automate blog posts, social media, and marketing copy at scale.",
        icon: Code2
    },
    {
        title: "Process Automation",
        description: "Connect your tools and automate repetitive workflows end-to-end.",
        icon: Settings
    }
];

const ENTERPRISE_FEATURES = ["SOC 2 Type II", "GDPR Compliant", "99.99% SLA", "24/7 Support"];

const ENTERPRISE_METRICS = [
    { label: "API Requests", value: "2.4M/day" },
    { label: "Uptime", value: "99.99%" },
    { label: "Response Time", value: "45ms avg" }
];

export default function StudioContent() {
    const [activeTab, setActiveTab] = useState('workflow');
    const activeFeature = FEATURES[activeTab];
    const FeatureIcon = activeFeature.icon;

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-20 md:pt-24 pb-8 md:pb-16 relative overflow-hidden bg-white">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-[120px] animate-blob" />
                        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[120px] animate-blob animation-delay-2000" />
                        <div className="absolute bottom-1/4 left-1/3 w-[550px] h-[550px] bg-primary-50/50 rounded-full blur-[120px] animate-blob animation-delay-4000" />
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10 w-full text-center">
                        <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                            Build Production-Ready <br />
                            <span className="text-primary-600">AI Agents</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Design intelligent AI Agents with a visual canvas.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                            <a
                                href={getProductSignupUrl('studio')}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackSignupClick('studio_hero')}
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                Start Building Free
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a
                                href={CAL_BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackDemoClick('studio_hero')}
                                className="inline-flex items-center gap-2 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-full font-bold text-lg transition-all"
                            >
                                <Calendar className="w-5 h-5" />
                                Book Free Setup
                            </a>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {['A', 'B', 'C', 'D'].map((letter) => (
                                        <div
                                            key={letter}
                                            className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white flex items-center justify-center text-xs font-medium text-white"
                                        >
                                            {letter}
                                        </div>
                                    ))}
                                </div>
                                <span>10K+ builders</span>
                            </div>
                            <span className="w-px h-4 bg-slate-200" />
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                                <span className="ml-1">4.9/5 rating</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 font-bold text-sm mb-6">
                                CAPABILITIES
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                                Everything you need to build
                                <br />
                                <span className="text-primary-600">intelligent agents</span>
                            </h2>
                        </div>

                        <div className="flex flex-wrap justify-center gap-2 mb-12">
                            {Object.entries(FEATURES).map(([key, feature]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === key
                                            ? 'bg-primary-600 text-white shadow-lg'
                                            : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                        }`}
                                >
                                    {feature.label}
                                </button>
                            ))}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                    {activeFeature.title}
                                </h3>
                                <p className="text-lg text-slate-600 mb-8">
                                    {activeFeature.description}
                                </p>
                                <ul className="space-y-4">
                                    {activeFeature.points.map((point) => (
                                        <li key={point} className="flex items-center gap-3 text-slate-700">
                                            <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                                                <Check className="w-4 h-4 text-primary-600" />
                                            </div>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl p-8">
                                    <div className="flex items-center justify-center h-64">
                                        <FeatureIcon className="w-32 h-32 text-primary-200" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-20 px-4 bg-white border-y border-slate-100">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {STATS.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 mb-4">
                                        <stat.icon className="w-7 h-7" />
                                    </div>
                                    <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-slate-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section className="py-24 px-4 bg-gradient-to-br from-teal-50 via-cyan-50 to-green-50 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-100/30 to-transparent skew-x-12 transform origin-top-right" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-1 rounded-full bg-cyan-100 text-cyan-700 font-bold text-sm mb-6">
                                USE CASES
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                                Build agents for
                                <br />
                                <span className="text-primary-600">any workflow</span>
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {USE_CASES.map((useCase) => (
                                <div
                                    key={useCase.title}
                                    className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                                        <useCase.icon className="w-6 h-6 text-primary-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{useCase.title}</h3>
                                    <p className="text-slate-500">{useCase.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-24 px-4 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 font-bold text-sm mb-6">
                                TESTIMONIALS
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                                Loved by builders
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {TESTIMONIALS.map((testimonial) => (
                                <div
                                    key={testimonial.author}
                                    className="bg-slate-50 p-8 rounded-2xl border border-slate-100"
                                >
                                    <div className="flex gap-1 text-yellow-400 mb-6">
                                        {[1, 2, 3, 4, 5].map((j) => (
                                            <Star key={j} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-slate-700 font-medium mb-6 leading-relaxed">
                                        &quot;{testimonial.quote}&quot;
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center font-semibold text-sm text-white">
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-900">{testimonial.author}</div>
                                            <div className="text-sm text-slate-500">{testimonial.role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Enterprise Section */}
                <section className="py-24 px-4 bg-slate-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-block px-4 py-1 rounded-full bg-slate-200 text-slate-700 font-bold text-sm mb-6">
                                    ENTERPRISE
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                                    Built for scale.
                                    <br />
                                    <span className="text-primary-600">Ready for enterprise.</span>
                                </h2>
                                <p className="text-lg text-slate-600 mb-8">
                                    Deploy with confidence. Our enterprise tier includes SSO, audit logs, dedicated support, and SLA guarantees.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {ENTERPRISE_FEATURES.map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-slate-700">
                                            <Shield className="w-5 h-5 text-primary-600" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href={CAL_BOOKING_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackDemoClick('studio_enterprise')}
                                    className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
                                >
                                    Contact Sales
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                            <div>
                                <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8">
                                    <div className="space-y-6">
                                        {ENTERPRISE_METRICS.map((metric) => (
                                            <div key={metric.label} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                                                <span className="text-slate-500">{metric.label}</span>
                                                <span className="font-mono font-bold text-primary-600">{metric.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-primary-600 text-white text-center">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
                            Ready to build?
                            <br />
                            <span className="opacity-90">Let&apos;s go.</span>
                        </h2>
                        <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                            Join thousands of builders creating intelligent AI agents. Start free, scale when ready.
                        </p>
                        <a
                            href={getProductSignupUrl('studio')}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackSignupClick('studio_bottom_cta')}
                            className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-xl hover:-translate-y-1"
                        >
                            Start Building Free
                            <ArrowRight className="w-6 h-6" />
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
