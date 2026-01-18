'use client';

import { useState, useEffect } from 'react';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../../lib/links';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BottomCTA from '../../../components/BottomCTA';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedPosts from '../../../components/RelatedPosts';
import {
    CheckCircle2,
    Clock,
    Mail,
    MessageCircle,
    ArrowRight,
    Calendar,
    Phone,
    FileText,
    TrendingUp,
    Bot,
    Sparkles,
    Target,
    DollarSign,
    BarChart3
} from 'lucide-react';

const faqData = [
    {
        question: "How much do AI employees cost?",
        answer: "AI employees are significantly cheaper than human hires. At Dooza, plans start at just $29/month."
    },
    {
        question: "Do I need technical skills to use AI employees?",
        answer: "Not at all. Modern AI employee platforms like Dooza are designed for non-technical users."
    },
    {
        question: "Will AI employees replace my human team?",
        answer: "AI employees are best thought of as augmenting your human team, not replacing them."
    },
    {
        question: "How long does it take to see results?",
        answer: "Most businesses see immediate time savings within the first week."
    },
    {
        question: "What if the AI makes mistakes?",
        answer: "AI employees are designed with guardrails and human oversight in mind."
    }
];

export default function AIEmployeesTransformingBusinessContent() {
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
            const sections = ['introduction', 'what-are-ai-employees', 'key-areas', 'email-management', 'social-media', 'lead-generation', 'benefits', 'getting-started', 'conclusion', 'faq'];
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
                        { label: 'AI Employees Transforming Small Business' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI Automation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            How AI Employees Transform <span className="text-primary-600">Small Business</span> Operations
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Discover how AI-powered employees are helping small businesses automate their daily operations.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 8, 2026</span>
                            </div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <img
                                src="/blog/ai-employees.png"
                                alt="AI employees automating small business operations"
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

                    <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 sticky top-28 max-h-[80vh] overflow-y-auto">
                            <h3 className="font-semibold text-slate-900 mb-4">Table of Contents</h3>
                            <nav className="space-y-1">
                                {[
                                    { id: 'introduction', label: 'Introduction' },
                                    { id: 'what-are-ai-employees', label: 'What Are AI Employees?' },
                                    { id: 'key-areas', label: 'Key Areas of Impact' },
                                    { id: 'email-management', label: '→ Email Management' },
                                    { id: 'social-media', label: '→ Social Media' },
                                    { id: 'lead-generation', label: '→ Lead Generation' },
                                    { id: 'benefits', label: 'Benefits' },
                                    { id: 'getting-started', label: 'Getting Started' },
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
                        </div>
                    </aside>

                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-lg leading-relaxed">
                                    Running a small business means wearing many hats. One moment you're answering emails, the next you're posting on social media.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <strong>Most small business owners spend over 60% of their time on tasks that could be automated</strong>. According to <a href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">McKinsey's research on AI productivity</a>, that's where AI employees come in.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    For more on small business best practices, the <a href="https://www.sba.gov/business-guide/launch-your-business" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">U.S. Small Business Administration</a> offers excellent resources.
                                </p>
                            </div>
                        </section>

                        <section id="what-are-ai-employees" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Are AI Employees?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    AI employees are specialized artificial intelligence agents designed to handle specific business tasks autonomously. Unlike traditional software that requires constant input, <strong>AI employees learn, adapt, and work independently</strong>.
                                </p>
                                <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl mb-6">
                                    <h4 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                                        <Bot className="w-5 h-5" />
                                        Think of AI Employees Like This:
                                    </h4>
                                    <p className="text-primary-800">
                                        Imagine hiring a team member who never sleeps, never takes breaks, never calls in sick, and costs a fraction of a traditional employee.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="key-areas" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">5 Key Areas Where AI Employees Save Time</h2>
                        </section>

                        <section id="email-management" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 p-2 rounded-lg"><Mail className="w-6 h-6 text-blue-600" /></div>
                                <h3 className="text-2xl font-bold text-slate-900">Email Management</h3>
                            </div>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-4">The average professional spends <strong>28% of their workday</strong> managing email.</p>
                                <ul className="space-y-2 mb-6">
                                    {["Automatically sort and prioritize incoming emails", "Draft contextual responses based on your communication style", "Schedule follow-ups and manage your calendar", "Flag urgent messages that need your personal attention"].map((item, idx) => (
                                        <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section id="social-media" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-purple-100 p-2 rounded-lg"><MessageCircle className="w-6 h-6 text-purple-600" /></div>
                                <h3 className="text-2xl font-bold text-slate-900">Social Media Management</h3>
                            </div>
                            <div className="prose md:prose-lg text-slate-600">
                                <ul className="space-y-2 mb-6">
                                    {["Daily content creation and scheduling across platforms", "Engaging with comments and messages automatically", "Monitoring brand mentions and industry trends", "Analyzing performance and optimizing posting times"].map((item, idx) => (
                                        <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section id="lead-generation" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-green-100 p-2 rounded-lg"><Target className="w-6 h-6 text-green-600" /></div>
                                <h3 className="text-2xl font-bold text-slate-900">Lead Generation & Sales</h3>
                            </div>
                            <div className="prose md:prose-lg text-slate-600">
                                <ul className="space-y-2 mb-6">
                                    {["Identify and qualify potential leads automatically", "Send personalized cold outreach at scale", "Follow up persistently until you get a response", "Schedule meetings directly into your calendar"].map((item, idx) => (
                                        <li key={idx} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" /><span>{item}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                        <section id="benefits" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">ROI of AI Employees</h2>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: DollarSign, title: "Cost Savings", desc: "AI employees cost a fraction of human hires.", color: "green" },
                                    { icon: Clock, title: "24/7 Availability", desc: "Your AI team never sleeps.", color: "blue" },
                                    { icon: TrendingUp, title: "Scalability", desc: "Scale your operations without proportionally increasing headcount.", color: "purple" },
                                    { icon: BarChart3, title: "Consistency", desc: "AI employees perform tasks the same way every time.", color: "orange" }
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

                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started with AI Employees</h2>
                            <div className="space-y-4">
                                {[
                                    { step: "1", title: "Identify Your Biggest Time Sinks", desc: "Track how you spend your time for a week." },
                                    { step: "2", title: "Start with One AI Employee", desc: "Don't try to automate everything at once." },
                                    { step: "3", title: "Train and Refine", desc: "Spend the first week reviewing your AI employee's work." },
                                    { step: "4", title: "Expand Your Team", desc: "Once one AI employee is running smoothly, add another." }
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion</h2>
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Build Your AI Team?</h3>
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

                        <RelatedPosts currentSlug="ai-employees-transforming-small-business" category="AI Automation" tags={['AI', 'Automation', 'Small Business']} />
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
