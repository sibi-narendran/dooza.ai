import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductSignupUrl, CAL_BOOKING_URL } from '../../constants/links';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BottomCTA from '../../components/BottomCTA';
import BookingModal from '../../components/BookingModal';
import SEO from '../../components/SEO';
import { SITE_URL } from '../../constants/site';
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
    BarChart3
} from 'lucide-react';

const AIEmployeesTransformingBusiness = () => {
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
                'what-are-ai-employees', 
                'key-areas',
                'email-management',
                'social-media',
                'lead-generation',
                'customer-support',
                'content-creation',
                'benefits',
                'getting-started',
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
                title="How AI Employees Are Transforming Small Business Operations" 
                description="Discover how AI-powered employees are helping small businesses automate their daily operations, from email management to social media posting."
                keywords="AI employees, AI agents, small business automation, AI for business, email automation, social media AI"
                canonicalUrl={`${SITE_URL}/blog/ai-employees-transforming-small-business`}
                type="article"
                author="Dooza Team"
                publishedTime="2026-01-08T00:00:00Z"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": "How AI Employees Are Transforming Small Business Operations",
                    "description": "Discover how AI-powered employees are helping small businesses automate their daily operations, from email management to social media posting.",
                    "author": {
                        "@type": "Organization",
                        "name": "Dooza Team"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Dooza",
                        "logo": {
                            "@type": "ImageObject",
                            "url": `${SITE_URL}/logo.png`
                        }
                    },
                    "datePublished": "2026-01-08",
                    "dateModified": "2026-01-08",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `${SITE_URL}/blog/ai-employees-transforming-small-business`
                    }
                }}
            />
            
            <Navbar openModal={handleAction} />

            {/* Hero Section */}
            <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Back to Blog */}
                    <Link 
                        to="/blog" 
                        className="inline-flex items-center gap-2 text-slate-600 hover:text-primary-600 mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Blog</span>
                    </Link>

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI Automation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            How AI Employees Are Transforming <span className="text-primary-600">Small Business</span> Operations
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                            Discover how AI-powered employees are helping small businesses automate their daily operations, from email management to social media posting.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>5 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>January 8, 2026</span>
                            </div>
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
                                    { id: 'what-are-ai-employees', label: 'What Are AI Employees?' },
                                    { id: 'key-areas', label: 'Key Areas of Impact' },
                                    { id: 'email-management', label: '→ Email Management' },
                                    { id: 'social-media', label: '→ Social Media' },
                                    { id: 'lead-generation', label: '→ Lead Generation' },
                                    { id: 'customer-support', label: '→ Customer Support' },
                                    { id: 'content-creation', label: '→ Content Creation' },
                                    { id: 'benefits', label: 'Benefits for Small Business' },
                                    { id: 'getting-started', label: 'Getting Started' },
                                    { id: 'conclusion', label: 'Conclusion' },
                                    { id: 'faq', label: 'FAQ' },
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors ${
                                            activeSection === item.id
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
                                    Running a small business means wearing many hats. One moment you're answering emails, the next you're posting on social media, then you're following up with leads—all before lunch. Sound familiar?
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The truth is, <strong>most small business owners spend over 60% of their time on tasks that could be automated</strong>. That's where AI employees come in—intelligent agents that work 24/7 to handle your repetitive tasks, so you can focus on what actually grows your business.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    In this guide, we'll explore how AI employees are revolutionizing small business operations and how you can start building your own AI team today.
                                </p>
                            </div>
                        </section>

                        {/* What Are AI Employees */}
                        <section id="what-are-ai-employees" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Are AI Employees?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    AI employees are specialized artificial intelligence agents designed to handle specific business tasks autonomously. Unlike traditional software that requires constant input, <strong>AI employees learn, adapt, and work independently</strong>—just like human team members, but without the overhead.
                                </p>
                                
                                <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl mb-6">
                                    <h4 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                                        <Bot className="w-5 h-5" />
                                        Think of AI Employees Like This:
                                    </h4>
                                    <p className="text-primary-800">
                                        Imagine hiring a team member who never sleeps, never takes breaks, never calls in sick, and costs a fraction of a traditional employee. They handle specific tasks perfectly, every single time, and get better with every interaction.
                                    </p>
                                </div>

                                <p>
                                    At Dooza, we've built AI employees for every major business function—from email management to SEO content creation. Each one is pre-trained for their specific role and ready to start working the moment you onboard them.
                                </p>
                            </div>
                        </section>

                        {/* Key Areas */}
                        <section id="key-areas" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Key Areas Where AI Employees Excel</h2>
                            <p className="text-lg text-slate-600 mb-8">
                                Let's dive into the specific areas where AI employees are making the biggest impact for small businesses.
                            </p>
                        </section>

                        {/* Email Management */}
                        <section id="email-management" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Email Management</h3>
                            </div>
                            
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-4">
                                    The average professional spends <strong>28% of their workday</strong> managing email. For small business owners, that percentage is often higher. An AI email agent can:
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Automatically sort and prioritize incoming emails</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Draft contextual responses based on your communication style</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Schedule follow-ups and manage your calendar</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Flag urgent messages that need your personal attention</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Social Media */}
                        <section id="social-media" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-purple-100 p-2 rounded-lg">
                                    <MessageCircle className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Social Media Management</h3>
                            </div>
                            
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-4">
                                    Consistency is everything on social media, but who has time to post every day? An AI social media agent handles:
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Daily content creation and scheduling across platforms</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Engaging with comments and messages automatically</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Monitoring brand mentions and industry trends</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Analyzing performance and optimizing posting times</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Lead Generation */}
                        <section id="lead-generation" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-green-100 p-2 rounded-lg">
                                    <Target className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Lead Generation & Sales</h3>
                            </div>
                            
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-4">
                                    Finding and nurturing leads is time-intensive work. An AI sales agent can:
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Identify and qualify potential leads automatically</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Send personalized cold outreach at scale</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Follow up persistently until you get a response</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Schedule meetings directly into your calendar</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Customer Support */}
                        <section id="customer-support" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-orange-100 p-2 rounded-lg">
                                    <Phone className="w-6 h-6 text-orange-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">Customer Support</h3>
                            </div>
                            
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-4">
                                    Your customers expect instant responses, but you can't be available 24/7. An AI call/support agent:
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Answers calls and messages around the clock</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Resolves common questions without human intervention</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Takes detailed messages for complex issues</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Schedules appointments and callbacks automatically</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Content Creation */}
                        <section id="content-creation" className="scroll-mt-28">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="bg-teal-100 p-2 rounded-lg">
                                    <FileText className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900">SEO & Content Creation</h3>
                            </div>
                            
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-4">
                                    Content marketing drives organic growth, but creating quality content consistently is challenging. An AI SEO agent:
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Writes SEO-optimized blog posts that rank on Google</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Researches keywords and competitive topics</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Creates content calendars aligned with your goals</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1"/>
                                        <span>Optimizes existing content for better performance</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Benefits */}
                        <section id="benefits" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Benefits for Small Businesses</h2>
                            
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
                                        <DollarSign size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Cost Savings</h3>
                                    <p className="text-slate-600">AI employees cost a fraction of human hires. Get enterprise-level capabilities without enterprise-level budgets.</p>
                                </div>
                                
                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                        <Clock size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">24/7 Availability</h3>
                                    <p className="text-slate-600">Your AI team never sleeps. Handle customer inquiries, social media, and lead nurturing around the clock.</p>
                                </div>
                                
                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                        <TrendingUp size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Scalability</h3>
                                    <p className="text-slate-600">Scale your operations without proportionally increasing headcount or overhead costs.</p>
                                </div>
                                
                                <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                                        <BarChart3 size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Consistency</h3>
                                    <p className="text-slate-600">AI employees perform tasks the same way every time. No off days, no mistakes from fatigue.</p>
                                </div>
                            </div>

                            <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl">
                                <blockquote className="italic text-slate-700 mb-4">
                                    "We went from spending 4 hours a day on email to 30 minutes. Our AI email agent handles the routine stuff, and I only step in for complex issues. It's like having a personal assistant that costs less than my coffee budget."
                                </blockquote>
                                <div className="font-bold text-slate-900">— Marcus T., Founder of a Digital Marketing Agency</div>
                            </div>
                        </section>

                        {/* Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started with AI Employees</h2>
                            
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Starting with AI employees doesn't require technical expertise or a massive budget. Here's a simple framework to get started:
                                </p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">1</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Identify Your Biggest Time Sinks</h4>
                                        <p className="text-slate-600">Track how you spend your time for a week. What repetitive tasks consume the most hours?</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">2</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Start with One AI Employee</h4>
                                        <p className="text-slate-600">Don't try to automate everything at once. Pick one area (like email) and master it first.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">3</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Train and Refine</h4>
                                        <p className="text-slate-600">Spend the first week reviewing your AI employee's work. Give feedback so it learns your preferences.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">4</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Expand Your Team</h4>
                                        <p className="text-slate-600">Once one AI employee is running smoothly, add another. Build your AI team gradually.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="border-slate-200" />

                        {/* Conclusion */}
                        <section id="conclusion" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Conclusion</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="mb-6">
                                    AI employees aren't just a trend—they're the future of how small businesses will operate. The businesses that adopt AI early will have a significant competitive advantage: <strong>lower costs, faster response times, and the ability to scale without proportionally increasing headcount</strong>.
                                </p>
                                <p className="mb-6">
                                    The best part? You don't need to be technical to get started. Platforms like Dooza make it easy to hire, train, and manage your AI team with just a few clicks.
                                </p>
                            </div>
                            
                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Build Your AI Team?</h3>
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
                                {[
                                    {
                                        q: "How much do AI employees cost?",
                                        a: "AI employees are significantly cheaper than human hires. At Dooza, plans start at just $29/month, which gives you access to multiple AI agents. Compare that to hiring a full-time employee for any of these roles."
                                    },
                                    {
                                        q: "Do I need technical skills to use AI employees?",
                                        a: "Not at all. Modern AI employee platforms like Dooza are designed for non-technical users. You can set up and train your AI team through simple conversations, just like you would onboard a human employee."
                                    },
                                    {
                                        q: "Will AI employees replace my human team?",
                                        a: "AI employees are best thought of as augmenting your human team, not replacing them. They handle repetitive, time-consuming tasks so your human team can focus on strategic, creative, and relationship-building work."
                                    },
                                    {
                                        q: "How long does it take to see results?",
                                        a: "Most businesses see immediate time savings within the first week. More significant ROI—like increased leads or reduced support costs—typically becomes clear within 30-60 days."
                                    },
                                    {
                                        q: "What if the AI makes mistakes?",
                                        a: "AI employees are designed with guardrails and human oversight in mind. You can review and approve actions before they're taken, especially when you're first getting started. Over time, as you trust the AI more, you can give it more autonomy."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="border-b border-slate-200 pb-4 last:border-0">
                                        <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.q}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

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

export default AIEmployeesTransformingBusiness;
