'use client';

import { useEffect, useState } from 'react';
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
    ArrowRight,
    Bot,
    Calendar,
    CheckCircle2,
    Clock,
    DollarSign,
    Mail,
    MessageSquare,
    Phone,
    Search,
    ShieldCheck,
    Sparkles,
    Target,
    Users,
    Workflow,
    Zap
} from 'lucide-react';

const faqData = [
    {
        question: 'What is the best Smartlead alternative?',
        answer: 'If outbound is the whole job, Smartlead itself is hard to beat, and the closest alternatives are other outbound platforms. Dooza is the alternative for small businesses that want more than outbound: Dooza is an AI-native company, and its engineers set up AI employees for email, SEO, social media, sales follow-up, and inbound calls, with your approval on anything sensitive. Every Dooza product starts with a refundable pilot: 100% refund within 14 days.'
    },
    {
        question: 'Is Dooza better than Smartlead?',
        answer: 'Only if your needs go beyond outbound. Smartlead is better for outbound email and calling at scale: mailbox rotation, warmup, deliverability, done-for-you mailboxes, SmartDialer calls, and AI SmartAgents. Dooza is better for teams that want AI employees set up for them to manage inbox work, publish SEO content, post on social, follow up with leads, and answer inbound calls.'
    },
    {
        question: 'How much does Smartlead cost in 2026?',
        answer: 'Smartlead lists Base at $39/month, Pro at $94/month, Unlimited Smart at $174/month, and Unlimited Prime at $379/month, with annual billing saving 17% (checked October 7, 2026, on smartlead.ai/pricing). Add-ons include SmartSenders, SmartDelivery, SmartDialer, Email Verification, and SmartServers, and white-label client workspaces are $29/month each. All plans include unlimited email accounts.'
    },
    {
        question: 'What does it mean that Dooza is an AI-native company?',
        answer: 'Dooza is an AI-native company that builds AI products and services for small businesses, from custom AI agents built and maintained by Dooza engineers to done-for-you AI receptionist, customer support and AI visibility services. In the Workforce app, Maily, Somi, Ranky, Stan, and Rachel each own a business function across email, social, SEO, sales, and phone, and Dooza engineers set them up with you. Smartlead also now calls itself an AI-native operating system for sales teams; the difference is scope (outbound sales vs several business functions) and that Dooza does the setup with you.'
    },
    {
        question: 'Can Dooza replace Smartlead for cold outreach?',
        answer: 'For some small businesses, yes. Dooza can support lead follow-up, sales replies, outbound messaging, email drafts, and cross-channel nurturing. Teams sending high-volume cold email or making outbound calls at scale are usually better served by Smartlead, and can use Dooza for the work around it.'
    },
    {
        question: 'Who should still choose Smartlead?',
        answer: 'Choose Smartlead if your main requirement is high-volume outbound: cold email with mailbox rotation, warmup, a master inbox, white-label agency workspaces, and calling with SmartDialer. Choose Dooza if you want AI employees set up for you that handle the work before and after outbound: content, replies, lead handling, social posting, SEO, and inbound calls.'
    }
];

const tocItems = [
    { id: 'introduction', label: 'Quick Verdict' },
    { id: 'what-is-smartlead', label: 'What Smartlead Does' },
    { id: 'why-alternative', label: 'Why Look Elsewhere' },
    { id: 'dooza-ai-native', label: 'The Dooza Alternative' },
    { id: 'comparison', label: 'Comparison Table' },
    { id: 'pricing', label: 'Pricing and TCO' },
    { id: 'where-dooza-wins', label: 'Where Dooza Fits' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'video', label: 'Video' },
    { id: 'verdict', label: 'Final Verdict' },
    { id: 'faq', label: 'FAQ' }
];

const comparisonRows = [
    ['Core category', 'Outbound sales platform: cold email, deliverability, and calling', 'Done-for-you AI employees across business functions', 'Depends'],
    ['Best fit', 'Outbound agencies and teams sending large email volume', 'Founders, SMBs, and operators that want work done across functions', 'Depends'],
    ['Email automation', 'Sequences, warmup, mailbox rotation, master inbox, AI reply manager', 'AI email employee for triage, replies, follow-ups, and sales support', 'Depends'],
    ['AI depth', 'SmartAgents (an AI-powered GTM workforce) and AI reply manager', 'Specialist AI employees across email, SEO, social, sales, and calls', 'Tie'],
    ['Phone', 'Outbound calls and email from one dashboard; SmartDialer for AI multichannel calls', 'Rachel answers inbound calls, handles FAQs, and books appointments', 'Depends'],
    ['Beyond outbound', 'Focused on outbound sales', 'SEO (Ranky), social (Somi), inbox (Maily), sales (Stan), calls (Rachel)', 'Dooza'],
    ['Setup model', 'Self-serve, or Done For You Mailboxes (domains, DNS, SPF, DKIM, DMARC handled)', 'A Dooza engineer scopes your refundable pilot and sets up the AI employees with you', 'Tie'],
    ['Pricing model', '$39 to $379/month plus optional add-ons (checked October 7, 2026)', 'Pricing depends on the product; every product starts with a refundable pilot (100% refund within 14 days)', 'Smartlead']
];

const doozaWins = [
    {
        icon: Bot,
        title: '1. Dooza is built around AI employees, not only campaigns',
        desc: 'Smartlead helps you run outbound email. Dooza gives you specialist AI employees that can own recurring business work: Maily for email, Somi for social, Ranky for SEO, Stan for sales, and Rachel for calls.'
    },
    {
        icon: Workflow,
        title: '2. Dooza connects the whole customer journey',
        desc: 'A lead does not stop at one cold email. They may read a blog, reply to an email, ask a question, book a call, miss a call, or need a follow-up. Dooza covers work across those moments, including the inbound ones.'
    },
    {
        icon: DollarSign,
        title: '3. One team across functions',
        desc: 'Smartlead bundles or sells much of the outbound stack itself. Dooza covers the functions around it (SEO, social, inbox, inbound calls) with one team and 1,000+ app integrations, instead of a separate tool for each.'
    },
    {
        icon: Zap,
        title: '4. Done for you, with your approval',
        desc: 'Smartlead now offers done-for-you mailboxes for the sending side. With Dooza, a Dooza engineer scopes your pilot on a free 30-minute call and sets up AI employees around your business, and you approve anything sensitive.'
    },
    {
        icon: ShieldCheck,
        title: '5. Dooza gives you broader leverage',
        desc: 'Outbound is one growth channel. Dooza also helps with SEO content, social distribution, inbox responses, lead handling, appointment booking, and phone coverage. Every Dooza product starts with a refundable pilot: 100% refund within 14 days.'
    }
];

export default function SmartleadAlternativeAiNativeApplicationContent() {
    const [activeSection, setActiveSection] = useState('introduction');
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
                        { label: 'Smartlead Alternative' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>Outbound Tool Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Best <span className="text-primary-600">Smartlead Alternative</span>: When Dooza Is the Better Fit
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Smartlead is strong for outbound email and calling. Here is when it is the better pick, and when Dooza, with AI employees set up for you across email, SEO, social media, sales, and calls, fits better.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>Updated October 7, 2026</span></div>
                        </div>
                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/marketing-automation-tools.png"
                                alt="Smartlead alternative comparison of Smartlead and Dooza"
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
                                <p className="text-sm text-slate-600 mb-4">Build your AI workforce</p>
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Start your pilot
                                </a>
                                <p className="text-xs text-slate-500 mt-2 text-center">100% refund within 14 days</p>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="smartlead-alternative-ai-native-application" />
                            </div>
                        </div>
                    </aside>

                    <article className="w-full max-w-3xl mx-auto space-y-12">
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    If you are searching for a <strong>Smartlead alternative</strong>, start with the job. If you need a better outbound tool, Smartlead is already one of the strongest. If you need help with the rest of the growth workflow, the answer is different.
                                </p>
                                <p>
                                    Smartlead has earned attention because it solves outbound well: sending cold email at scale across many inboxes while protecting deliverability. It includes campaign sequences, mailbox rotation, warmup, a master inbox, analytics, agency-friendly options, calling with SmartDialer, and done-for-you mailbox setup.
                                </p>
                                <p>
                                    But outbound is only one slice of growth. Someone still has to publish content, post on social media, answer inbound calls, reply to customers, and move leads toward a booked conversation. That is where <strong>Dooza</strong> fits. Dooza is an AI-native company; its Workforce app gives you AI employees, and Dooza engineers set them up with you.
                                </p>
                            </div>

                            <div className="mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-6">
                                <div className="flex gap-4 items-start">
                                    <Target className="w-7 h-7 text-primary-600 shrink-0 mt-1" />
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900 mb-2">Quick verdict</h2>
                                        <p className="text-slate-700">
                                            Smartlead is the better pick if outbound email and calling are the job. Dooza is the better pick if you want AI employees set up for you across email, SEO, social media, sales follow-up, and inbound calls, starting with a refundable pilot: 100% refund within 14 days.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="what-is-smartlead" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Smartlead Does Well</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    <strong>Smartlead.ai</strong> started as a cold email outreach and deliverability platform and now calls itself an AI-native operating system for sales teams. It helps outbound teams create email sequences, rotate sending accounts, warm up mailboxes, manage replies in a unified inbox, make calls from the same dashboard, and scale campaigns without paying per connected mailbox.
                                </p>
                                <p>
                                    Smartlead lists four plans: Base ($39/month), Pro ($94/month), Unlimited Smart ($174/month), and Unlimited Prime ($379/month), so <strong>$39/month to $379/month</strong>, with annual billing saving 17% (checked October 7, 2026). Add-ons include SmartSenders, SmartDelivery, SmartDialer, Email Verification, and SmartServers, and white-label client workspaces are $29/month each.
                                </p>
                                <p>
                                    That makes Smartlead a serious tool for outbound agencies, SDR teams, recruiters, and companies that already know cold email operations. If you need to manage many mailboxes and send high-volume campaigns, Smartlead belongs in the conversation.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                {[
                                    { icon: Mail, title: 'Cold email sequences', desc: 'Build outbound campaigns, follow-ups, reply handling, and A/B tests around email.' },
                                    { icon: ShieldCheck, title: 'Deliverability focus', desc: 'Mailbox rotation, warmup, and add-on deliverability tools help protect sender reputation.' },
                                    { icon: Users, title: 'Agency infrastructure', desc: 'Client workspaces, white-label options, and master inbox features suit outbound agencies.' },
                                    { icon: MessageSquare, title: 'Unified replies', desc: 'A master inbox helps teams manage responses across connected sending accounts.' }
                                ].map((item) => (
                                    <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                                        <item.icon className="w-6 h-6 text-primary-600 mb-3" />
                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="why-alternative" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Businesses Look for a Smartlead Alternative</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Many Smartlead comparisons focus on other cold email tools: Instantly, Lemlist, Apollo, Reply.io, Salesloft, Outreach, or Woodpecker. That makes sense if your buying question is "which outbound tool should I use?"
                                </p>
                                <p>
                                    Some founders are asking a different question. They want leads answered, content published, follow-ups sent, customers supported, and inbound calls handled without hiring a full team.
                                </p>
                            </div>

                            <div className="space-y-5 mt-8">
                                {[
                                    ['Outbound is not a full growth system', 'It can start conversations, but it does not create SEO demand, post on social media, or answer inbound calls from customers.'],
                                    ['Add-ons depend on how you operate', 'Smartlead publishes its plan and add-on prices. Your total depends on which add-ons (deliverability, servers, verification, dialer, workspaces) you need.'],
                                    ['Outbound still needs attention', 'Campaign copy, lead lists, replies, and follow-ups need someone watching them, even with done-for-you mailboxes and AI agents.'],
                                    ['Small businesses need operators, not just senders', 'The biggest bottleneck is usually not sending one more campaign. It is following through when a lead replies, asks a question, or wants to book.']
                                ].map(([title, desc]) => (
                                    <div key={title} className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                                            <p className="text-slate-600">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="dooza-ai-native" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Dooza: The Done-for-You Alternative to Smartlead</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza</Link> is an AI-native company that builds AI products and services for small businesses, from custom AI agents built and maintained by Dooza engineers to done-for-you AI receptionist, customer support and AI visibility services. Every product starts with a refundable pilot: 100% refund within 14 days. Instead of one campaign engine, Dooza engineers set up a workforce of AI employees that handle practical work across the business.
                                </p>
                                <p>
                                    That difference matters. Smartlead runs outbound email and calling. Dooza helps you create the content that brings leads in, follow up with those leads, post on social channels, answer inbound calls, and keep customer communication moving, with your approval on anything sensitive.
                                </p>
                            </div>

                            <div className="mt-8 bg-slate-900 rounded-2xl p-6 md:p-8 text-white">
                                <h3 className="text-2xl font-bold mb-5">Dooza's AI workforce</h3>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {[
                                        ['Maily', 'Email triage, reply drafting, lead follow-up, and inbox support.'],
                                        ['Somi', 'Daily social content across LinkedIn, Instagram, X, Facebook, and more.'],
                                        ['Ranky', 'SEO blogs, keyword strategy, internal links, FAQs, and AI search visibility.'],
                                        ['Stan and Rachel', 'Sales follow-up, lead handling, phone answering, and appointment support.']
                                    ].map(([title, desc]) => (
                                        <div key={title} className="bg-white/10 border border-white/10 rounded-xl p-5">
                                            <CheckCircle2 className="w-6 h-6 text-emerald-300 mb-3" />
                                            <h4 className="font-bold mb-2">{title}</h4>
                                            <p className="text-sm text-white/75">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Smartlead vs Dooza: Side-by-Side Comparison</h2>
                            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                                <table className="w-full border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="text-left p-4 font-semibold">Category</th>
                                            <th className="text-left p-4 font-semibold">Smartlead</th>
                                            <th className="text-left p-4 font-semibold">Dooza</th>
                                            <th className="text-left p-4 font-semibold">Edge</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {comparisonRows.map(([category, smartlead, dooza, winner], index) => (
                                            <tr key={category} className={index % 2 ? 'bg-slate-50' : 'bg-white'}>
                                                <td className="p-4 font-semibold text-slate-900">{category}</td>
                                                <td className="p-4 text-slate-600">{smartlead}</td>
                                                <td className="p-4 text-slate-600">{dooza}</td>
                                                <td className="p-4">
                                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${winner === 'Dooza' || winner === 'Smartlead' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing and Total Cost: Smartlead vs Dooza</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Smartlead's published pricing starts at <strong>$39/month</strong> for Base and scales to <strong>$379/month</strong> for Unlimited Prime (checked October 7, 2026). The list price is attractive for email-heavy teams because every plan includes unlimited email accounts.
                                </p>
                                <p>
                                    Your total depends on which add-ons you use (SmartSenders, SmartDelivery, SmartDialer, Email Verification, SmartServers, white-label workspaces) and on who runs the campaigns and watches replies.
                                </p>
                                <p>
                                    Dooza's value is different. You are not buying an outbound tool. You are buying AI employees, set up by Dooza engineers, that help with email, SEO, social media, sales follow-up, and inbound calls. Dooza pricing depends on the product (see <Link href="/pricing" className="text-primary-600 hover:underline">pricing</Link>), and every product starts with a refundable pilot.
                                </p>
                            </div>

                            <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex gap-4">
                                <DollarSign className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">The value test</h3>
                                    <p className="text-slate-700">
                                        If outbound is your growth system, Smartlead is likely the better value. If you need help that creates content, responds, follows up, books, and supports customers, test Dooza with a refundable pilot and compare.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="where-dooza-wins" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Where Dooza Fits Better Than Smartlead</h2>
                            <div className="space-y-6">
                                {doozaWins.map((item) => (
                                    <div key={item.title} className="bg-white border border-slate-200 p-6 rounded-xl">
                                        <div className="flex gap-4 items-start">
                                            <div className="w-11 h-11 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                                                <item.icon size={22} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-xl text-slate-900 mb-2">{item.title}</h3>
                                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="use-cases" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Best Use Cases: When to Choose Dooza Instead of Smartlead</h2>
                            <div className="grid md:grid-cols-2 gap-5">
                                {[
                                    'You want an AI email employee, not just outbound sequences',
                                    'You need SEO, social, sales, email, and inbound calls in one place',
                                    'You want Dooza engineers to set up and run the work with you',
                                    'You want leads followed up after they reply',
                                    'You need content marketing and outbound to work together',
                                    'You want phone calls and appointments covered 24/7',
                                    'You want your approval on anything sensitive',
                                    'You care about business automation more than email volume'
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3 bg-slate-50 border border-slate-200 p-4 rounded-xl">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                        <p className="text-slate-700 font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="video" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Relevant YouTube Video: See Dooza's AI Employees in Action</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This Dooza overview shows how Dooza&apos;s AI employees work across email, social, SEO, sales, and calls.
                                </p>
                            </div>
                            <YouTubeEmbed videoId="NgBAXFK6nk4" title="AI Era with DOOZA.AI" />
                        </section>

                        <section id="verdict" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Final Verdict: Which Should You Choose?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Smartlead is a strong product when the job is clear: run cold email campaigns at scale, manage many inboxes, protect deliverability, and add calling. For outbound agencies and email-heavy sales teams, it is likely the better choice.
                                </p>
                                <p>
                                    If you need more than outbound, the best <strong>Smartlead alternative</strong> is not another email sender. It is help with the work around growth: creating content, responding to leads, following up, posting on social media, managing email, and answering inbound calls.
                                </p>
                                <p>
                                    That is where <strong>Dooza</strong> fits: Dooza engineers set up AI employees that work across your business, with your approval on anything sensitive, starting with a refundable pilot (100% refund within 14 days).
                                </p>
                            </div>

                            <div className="mt-8 bg-slate-900 rounded-2xl p-8 text-center">
                                <Phone className="w-10 h-10 text-emerald-300 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-3">Want the work around outbound done for you?</h3>
                                <p className="text-white/75 mb-6 max-w-2xl mx-auto">
                                    Dooza engineers set up AI employees for email, SEO, social media, sales follow-up, and calls. Start with a refundable pilot: 100% refund within 14 days.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <a
                                        href={getProductSignupUrl('workforce')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full transition-colors"
                                    >
                                        Start your pilot <ArrowRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={CAL_BOOKING_URL}
                                        onClick={handleAction}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-colors"
                                    >
                                        <Calendar className="w-5 h-5" /> Book a free pilot call
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Smartlead Alternative FAQ</h2>
                            <div className="space-y-4">
                                {faqData.map((faq) => (
                                    <div key={faq.question} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                                        <h3 className="font-bold text-slate-900 mb-3 flex items-start gap-3">
                                            <Search className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                                            {faq.question}
                                        </h3>
                                        <p className="text-slate-600 pl-8">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <RelatedPosts currentSlug="smartlead-alternative-ai-native-application" category="Comparison" tags={['Smartlead Alternative', 'Smartlead AI', 'AI Native Application', 'Dooza', 'AI Employees']} />
                    </article>

                    <aside className="hidden xl:block w-64 shrink-0 sticky top-28">
                        <div className="bg-slate-900 text-white p-6 rounded-2xl">
                            <h3 className="font-bold mb-3">Need more than outbound?</h3>
                            <p className="text-sm text-slate-300 mb-5">
                                Dooza gives you AI employees for email, SEO, social media, sales, and calls.
                            </p>
                            <Link href="/blog/email-automation-dooza" className="inline-flex items-center gap-2 text-primary-300 hover:text-primary-200 text-sm font-medium">
                                Compare email automation <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>

            <BottomCTA openModal={handleAction} />
            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
