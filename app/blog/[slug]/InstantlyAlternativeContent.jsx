'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getProductSignupUrl } from '../../../lib/links';
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
    ArrowRight,
    Bot,
    Calendar,
    CheckCircle2,
    Clock,
    DollarSign,
    Mail,
    Phone,
    Search,
    Send,
    ShieldCheck,
    Sparkles,
    Users,
    XCircle,
    Zap
} from 'lucide-react';

const faqData = [
    {
        question: "What is the best Instantly.ai alternative for small businesses?",
        answer: "If cold email is the whole job, Instantly itself is hard to beat, and the closest alternatives are other cold email platforms. Dooza is the alternative for small businesses that want more than outbound: Dooza is an AI-native company, and its engineers set up AI employees for sales follow-up, inbox work, SEO, social media, and inbound phone calls, with your approval on anything sensitive. Every Dooza product starts with a refundable pilot: 100% refund within 14 days."
    },
    {
        question: "Is Dooza better than Instantly.ai?",
        answer: "Only if your goal is broader than outbound. Instantly.ai is better for high-volume cold email, lead data, deliverability, and outbound calling and SMS from its CRM. Dooza is better for founders and operators who want AI employees across functions beyond cold email, including Maily for inbox work, Stan for sales, Ranky for SEO, Somi for social content, and Rachel for answering calls."
    },
    {
        question: "Why do people look for Instantly.ai alternatives?",
        answer: "Reasons vary. Some teams want a different sending model or price point, some want AI that also covers inbound work (replies, inbound calls, SEO, social), and some want one team to run the work across functions. Note that Instantly now sells bundles and done-for-you setup itself, so pricing and setup alone are not strong reasons to switch."
    },
    {
        question: "Does Dooza replace Instantly.ai for cold email?",
        answer: "For many small businesses, yes. Dooza can replace the need for a cold-email-only stack when your goal is lead follow-up, email assistance, content, sales outreach, and booking conversations. For very high-volume cold email teams sending hundreds of thousands of emails per month, Instantly may still be useful as dedicated sending infrastructure."
    },
    {
        question: "Can Dooza make phone calls like Instantly.ai?",
        answer: "They do different phone jobs. Instantly's CRM lets you call and SMS people from your browser, which suits outbound dialing. Dooza includes Rachel, an AI receptionist that answers inbound calls, handles FAQs, and books appointments. If you need outbound calling, Instantly covers it; if you need calls answered, that is Rachel's job."
    },
    {
        question: "Which tool is easier for non-technical founders?",
        answer: "Both now offer help. Instantly sells done-for-you email setup (Instantly AirMail) and a VIP option with domain and account setup, campaign setup and launch, and a dedicated GTM engineer. With Dooza, a Dooza engineer scopes your refundable pilot on a free 30-minute call and sets up the AI employees with you, across email, sales, SEO, social, and calls rather than outbound only."
    }
];

const tocItems = [
    { id: 'verdict', label: 'Quick Verdict' },
    { id: 'what-is-instantly', label: 'What Instantly Does' },
    { id: 'why-switch', label: 'Why Switch' },
    { id: 'dooza-ai-native', label: 'The Dooza Alternative' },
    { id: 'comparison', label: 'Comparison Table' },
    { id: 'pricing', label: 'Pricing & Value' },
    { id: 'video', label: 'Video' },
    { id: 'winner', label: 'Verdict' },
    { id: 'faq', label: 'FAQ' }
];

const comparisonRows = [
    ['Primary use case', 'Cold email outreach, warmup, lead database, CRM, campaign sending', 'Done-for-you AI employees across sales, inbox, SEO, social, and calls', 'Depends'],
    ['Best user', 'Outbound teams and agencies focused on email volume', 'Founders, SMBs, and lean teams that want work done across functions', 'Depends'],
    ['Setup model', 'Self-serve, or done-for-you setup (AirMail, VIP with a dedicated GTM engineer)', 'A Dooza engineer scopes your refundable pilot and sets up the AI employees with you', 'Tie'],
    ['AI depth', 'AI Sales Agent, AI Reply Agent, Web Researcher Agent, AI Email Writer Agent', 'Role-based AI employees that own recurring business functions, with your approval', 'Tie'],
    ['Phone', 'Outbound calls and SMS from the browser in Instantly CRM', 'Rachel answers inbound calls, handles FAQs, and books appointments', 'Depends'],
    ['Beyond outreach', 'Outreach, CRM, website visitors, inbox placement', 'SEO (Ranky), social (Somi), inbox (Maily), sales (Stan), calls (Rachel)', 'Dooza'],
    ['Cold email scale', 'Light Speed plan: 500,000 emails a month; 450M+ B2B lead database', 'Practical follow-up rather than high-volume sending', 'Instantly'],
    ['Pricing', 'Published: Outreach from $47/month, bundles from $94/month (checked October 7, 2026)', 'Pricing by product; every product starts with a refundable pilot (100% refund within 14 days)', 'Instantly']
];

export default function InstantlyAlternativeContent() {
    const [activeSection, setActiveSection] = useState('verdict');
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleAction = (e) => {
        const url = e?.currentTarget?.href;
        if (url && /calendly\.com|cal\.com|\/book(\/|\?|$)/.test(url)) {
            if (e) e.preventDefault();
            setIsBookingModalOpen(true);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            for (const section of tocItems.map((item) => item.id)) {
                const element = document.getElementById(section);
                if (!element) continue;
                const rect = element.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= 300) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (!element) return;
        const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        setActiveSection(id);
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar openModal={handleAction} />

            <div className="bg-gradient-to-br from-primary-50 via-white to-cyan-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Instantly.ai Alternative' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI App Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Best <span className="text-primary-600">Instantly.ai Alternative</span>: When Dooza Is the Better Fit
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Instantly is a strong cold email and outbound platform. Here is when it is the better pick, and when Dooza, with AI employees set up for you across sales, inbox, SEO, social media, and calls, fits better.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>13 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Updated October 7, 2026</span></div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/ai-sales-agent-guide.png"
                                alt="Instantly.ai alternative comparison of Instantly and Dooza"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="flex flex-col lg:flex-row justify-between lg:gap-12 items-start">
                    <aside className="hidden lg:block w-64 shrink-0 sticky top-28">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 sticky top-28 max-h-[80vh] overflow-y-auto">
                            <h3 className="font-semibold text-slate-900 mb-4">Table of Contents</h3>
                            <nav className="space-y-1">
                                {tocItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-colors ${activeSection === item.id ? 'bg-primary-50 text-primary-700 font-medium' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                            </nav>

                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <p className="text-sm text-slate-600 mb-4">Want AI employees instead of another outreach tool?</p>
                                <a
                                    href={getProductSignupUrl('stan')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Start your pilot
                                </a>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="instantly-ai-alternative" />
                            </div>
                        </div>
                    </aside>

                    <article className="w-full max-w-3xl mx-auto space-y-12">
                        <section id="verdict" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    If you are searching for an <strong>Instantly.ai alternative</strong>, start with the job. If you need a better cold email tool, Instantly is already one of the strongest. If you need help with the work around outreach, the answer is different.
                                </p>
                                <p>
                                    Instantly.ai is popular because it solves outbound well. It helps teams connect email accounts, warm inboxes, find leads in a 450M+ B2B database, send campaigns, manage replies, call and SMS from its CRM, and test deliverability. It also sells done-for-you email setup. For outbound teams, that is valuable.
                                </p>
                                <p>
                                    Many small businesses need more than outbound: answer replies, publish content, post on social, answer the phone, and keep customers moving. That is where <strong>Dooza</strong> fits. Dooza is an AI-native company; its Workforce app gives you specialist AI employees, and Dooza engineers set them up with you.
                                </p>
                            </div>

                            <div className="mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-6">
                                <p className="text-primary-900 font-bold text-lg mb-2">Quick verdict</p>
                                <p className="text-primary-800">
                                    Instantly.ai is the better pick if outbound email (and outbound calling) is the job. Dooza is the better pick if you want AI employees set up for you across sales follow-up, inbox work, SEO, social media, and inbound calls, starting with a refundable pilot: 100% refund within 14 days.
                                </p>
                            </div>
                        </section>

                        <section id="what-is-instantly" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Instantly.ai Does Well</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Instantly.ai is a cold email and sales engagement platform. Its pricing page has several product areas: Outreach, Credits, CRM, Website Visitors, Inbox Placement, and Email Accounts, including done-for-you domains and pre-warmed accounts. It also sells bundles that combine them.
                                </p>
                                <p>
                                    That tells you what Instantly is built for: outbound. It can connect and warm email accounts, find and enrich leads, send campaigns, run AI reply and sales agents, and manage emails, calls, SMS, tasks, and LinkedIn connections in its CRM.
                                </p>
                                <p>
                                    A fair comparison should say it plainly: if you run a cold email agency or send at serious scale, Instantly is likely the better fit. Dooza is built for a different job: covering several business functions, including inbound ones, with AI employees that Dooza engineers set up and maintain.
                                </p>
                            </div>

                            <div className="mt-8 grid sm:grid-cols-2 gap-4">
                                {[
                                    { icon: Send, title: 'Cold email sending', copy: 'Campaigns, sequences, inbox rotation, warmup, and sending limits are central to Instantly.' },
                                    { icon: Users, title: 'Lead database', copy: 'Instantly publicly promotes access to a large B2B lead database and enrichment workflows.' },
                                    { icon: ShieldCheck, title: 'Deliverability tools', copy: 'Inbox placement, warmup, reputation protection, bounce detection, and spam checks matter for cold email teams.' },
                                    { icon: Bot, title: 'AI features', copy: 'Instantly offers AI writing, research, reply, and sales-agent features through its expanding product suite.' }
                                ].map((item) => (
                                    <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                                        <item.icon className="w-6 h-6 text-primary-600 mb-3" />
                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.copy}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="why-switch" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Businesses Look for an Instantly.ai Alternative</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Many Instantly alternatives compare sender limits, warmup, inbox rotation, lead credits, and deliverability. That is useful if you are swapping one outbound tool for another. Some teams are asking a different question: who handles the work around the campaigns?
                                </p>
                                <p>
                                    When a lead replies, someone needs to answer. When a prospect asks for pricing, someone needs to follow up. When a buyer checks your website, someone needs to educate them. When the phone rings, someone needs to pick up. Instantly covers parts of this (an AI Reply Agent, CRM calling); Dooza covers the rest with AI employees.
                                </p>
                            </div>

                            <div className="mt-8 space-y-5">
                                {[
                                    ['You need more than outbound', 'Instantly is built around outreach, CRM, and deliverability. If your bottleneck is inbound replies, SEO, social posting, or answering calls, you need something alongside it or instead of it.'],
                                    ['Email-only growth is fragile', 'Cold email can create pipeline, but it depends on deliverability, list quality, copy quality, sender reputation, and timely follow-up. If one part breaks, results drop.'],
                                    ['You want roles covered, not just campaigns', 'Instantly offers AI agents for writing, research, replies, and sales. Dooza gives you AI employees for whole roles (email, sales, SEO, social, calls), set up by Dooza engineers, with your approval on anything sensitive.'],
                                    ['Small teams need outcomes', 'Most founders want qualified conversations, faster replies, more content, and fewer missed calls. Instantly can set up your sending for you; Dooza sets up the wider workforce for you.']
                                ].map(([title, copy]) => (
                                    <div key={title} className="bg-red-50 border border-red-100 rounded-xl p-6 flex gap-4">
                                        <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                                            <p className="text-slate-600">{copy}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="dooza-ai-native" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Dooza: The Done-for-You Alternative to Instantly.ai</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza</Link> is an AI-native company that builds AI products and services for small businesses, from custom AI agents built and maintained by Dooza engineers to done-for-you AI receptionist, customer support and AI visibility services. Every product starts with a refundable pilot: 100% refund within 14 days. Instead of asking you to assemble a stack of tools, Dooza engineers set up specialist AI employees that own business functions.
                                </p>
                                <p>
                                    That is the key difference. Instantly helps you run outbound. Dooza runs the work around it, with your approval on anything sensitive. Your sales AI employee can follow up. Your email AI employee can manage replies. Your SEO AI employee can publish content that makes prospects trust you. Your social AI employee can distribute ideas. Your receptionist can answer the phone when leads call.
                                </p>
                            </div>

                            <div className="mt-8 bg-slate-900 rounded-2xl p-6 md:p-8 text-white">
                                <h3 className="text-2xl font-bold mb-5">The Dooza AI workforce</h3>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {[
                                        { icon: Mail, title: 'Maily handles inbox work', copy: 'Email triage, drafts, replies, follow-ups, and customer communication support.' },
                                        { icon: Send, title: 'Stan handles sales', copy: 'Lead follow-up, outreach support, personalized sequences, and pipeline movement.' },
                                        { icon: Search, title: 'Ranky handles SEO', copy: 'Keyword-led blog content, internal links, FAQs, and AI search visibility.' },
                                        { icon: Phone, title: 'Rachel handles calls', copy: '24/7 AI receptionist coverage for inquiries, FAQs, and appointment booking.' }
                                    ].map((item) => (
                                        <div key={item.title} className="bg-white/10 border border-white/10 rounded-xl p-5">
                                            <item.icon className="w-6 h-6 text-emerald-300 mb-3" />
                                            <h4 className="font-bold mb-2">{item.title}</h4>
                                            <p className="text-white/75 text-sm">{item.copy}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Instantly.ai vs Dooza: Side-by-Side Comparison</h2>
                            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="text-left p-4 font-semibold">Category</th>
                                            <th className="text-left p-4 font-semibold">Instantly.ai</th>
                                            <th className="text-left p-4 font-semibold">Dooza</th>
                                            <th className="text-left p-4 font-semibold">Edge</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {comparisonRows.map(([category, instantly, dooza, winner], index) => (
                                            <tr key={category} className={index % 2 ? 'bg-slate-50' : 'bg-white'}>
                                                <td className="p-4 font-semibold text-slate-900">{category}</td>
                                                <td className="p-4 text-slate-600">{instantly}</td>
                                                <td className="p-4 text-slate-600">{dooza}</td>
                                                <td className="p-4">
                                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${winner === 'Dooza' || winner === 'Instantly' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                                                        {winner}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="pricing" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing and Value</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Instantly&apos;s pricing page lists Outreach plans at Growth $47/month, Hypergrowth $97/month, and Light Speed $358/month billed monthly (about $37.60, $77.60, and $286.30 a month billed yearly). Credits, CRM, Website Visitors, Inbox Placement, and Email Accounts are separate tabs, and bundles combine them: Starter $94/month, Scale $194/month, and Agency $555/month (all checked October 7, 2026, on instantly.ai/pricing).
                                </p>
                                <p>
                                    That is clear, published pricing, and for outbound teams that know what they need, it is easy to compare. Dooza is priced differently because you are buying work across functions, set up for you, rather than an outbound tool.
                                </p>
                                <p>
                                    Dooza&apos;s value is not &quot;we send more cold emails.&quot; It is an AI workforce set up for you: Maily for email, Stan for sales, Ranky for SEO, Somi for social media, and Rachel for phone calls.
                                </p>
                                <p>
                                    Dooza pricing depends on the product, and every Dooza product starts with a refundable pilot: 100% refund within 14 days. See <Link href="/pricing" className="text-primary-600 hover:underline">Dooza pricing</Link> for current plans.
                                </p>
                            </div>

                            <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex gap-4">
                                <DollarSign className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">The value test</h3>
                                    <p className="text-slate-700">
                                        If outbound is your growth system, Instantly is likely the better value. If outbound is only one part of sales, marketing, support, and booking, test Dooza with a refundable pilot and compare.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="video" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Relevant YouTube Video: See Dooza&apos;s AI Employees in Action</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This comparison is easier to understand when you see the category difference. Instantly is an outbound platform. Dooza is an AI-native company that builds AI products and services for small businesses, from custom AI agents built and maintained by Dooza engineers to done-for-you AI receptionist, customer support and AI visibility services. Every product starts with a refundable pilot: 100% refund within 14 days. Watch how Dooza&apos;s AI employees handle business work beyond outbound campaigns.
                                </p>
                            </div>
                            <YouTubeEmbed videoId="NgBAXFK6nk4" title="AI Era with DOOZA.AI" />
                        </section>

                        <section id="winner" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Final Verdict: Which Should You Choose?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Instantly.ai is a strong choice for outbound: sending, warmup, lead lists, deliverability, campaign management, and outbound calling from its CRM, with done-for-you setup if you want it.
                                </p>
                                <p>
                                    If you need more than outbound, the best <strong>Instantly.ai alternative</strong> is not another cold email platform. It is help with the work before and after the email. That is where Dooza fits.
                                </p>
                                <p>
                                    With Dooza, Dooza engineers set up a team of AI employees: Stan follows up with leads, Maily manages the inbox, Ranky publishes SEO content, Somi posts on social, and Rachel answers calls, with your approval on anything sensitive.
                                </p>
                            </div>

                            <div className="mt-8 bg-slate-900 rounded-2xl p-8 text-center">
                                <Zap className="w-10 h-10 text-emerald-300 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-3">Want the work around outreach done for you?</h3>
                                <p className="text-white/75 mb-6 max-w-2xl mx-auto">
                                    Use Dooza to run the work that turns leads into conversations: sales follow-up, inbox management, SEO content, social distribution, and phone coverage. Start with a refundable pilot: 100% refund within 14 days.
                                </p>
                                <a
                                    href={getProductSignupUrl('stan')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full transition-colors"
                                >
                                    Start your pilot <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </section>

                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Instantly.ai Alternative FAQ</h2>
                            <div className="space-y-4">
                                {faqData.map((faq, index) => (
                                    <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                        <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                            {faq.question}
                                        </h3>
                                        <p className="text-slate-600 pl-8">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <RelatedPosts currentSlug="instantly-ai-alternative" category="Comparison" tags={['Instantly.ai Alternative', 'AI Sales Agent', 'Cold Email', 'AI Employees', 'Sales Automation']} />
                    </article>

                    <aside className="hidden xl:block w-64 shrink-0 sticky top-28">
                        <div className="bg-slate-900 text-white p-6 rounded-2xl">
                            <h3 className="font-bold mb-3">Need more than cold email?</h3>
                            <p className="text-sm text-slate-300 mb-5">
                                Dooza gives you AI employees for sales, email, SEO, social media, and phone calls.
                            </p>
                            <Link href="/blog/ai-sales-agent-guide" className="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 text-sm font-medium">
                                Read the AI sales guide <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>

            <BottomCTA openModal={() => setIsBookingModalOpen(true)} />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
