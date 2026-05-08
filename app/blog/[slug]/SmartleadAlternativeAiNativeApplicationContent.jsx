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
    XCircle,
    Zap
} from 'lucide-react';

const faqData = [
    {
        question: 'What is the best Smartlead alternative?',
        answer: 'Dooza is the best Smartlead alternative for small businesses, founders, agencies, and operators that want more than cold email sending. Smartlead is strong for high-volume outbound email, but Dooza wins as an AI-native application because it combines email, SEO, social media, sales follow-up, and phone automation in one AI workforce.'
    },
    {
        question: 'Is Dooza better than Smartlead?',
        answer: 'Dooza is better if you want an AI-native business automation platform, not only a cold email sequencer. Smartlead is useful for mailbox rotation, warmup, deliverability, and campaign sending. Dooza is stronger for teams that need AI employees to manage email work, publish content, respond to leads, create social posts, and answer calls.'
    },
    {
        question: 'How much does Smartlead cost in 2026?',
        answer: 'Smartlead publicly lists plans from $39/month to $379/month, with add-ons for areas such as SmartDelivery, SmartServers, email verification, and client workspaces. Pricing can be a good fit for outbound-heavy teams, but total cost depends on the infrastructure and add-ons you need.'
    },
    {
        question: 'Why is Dooza called an AI-native application?',
        answer: 'Dooza is AI-native because the product is built around specialist AI employees rather than static campaign software. Maily, Somi, Ranky, Stan, and Rachel each own a business function and work together across email, social, SEO, sales, and phone workflows.'
    },
    {
        question: 'Can Dooza replace Smartlead for cold outreach?',
        answer: 'For many small businesses, yes. Dooza can support lead follow-up, sales replies, outbound messaging, email drafts, and cross-channel nurturing. Teams running very large cold email infrastructure may still use Smartlead as a sending engine, but Dooza gives broader automation around the whole sales process.'
    },
    {
        question: 'Who should still choose Smartlead?',
        answer: 'Choose Smartlead if your main requirement is high-volume cold email sending with mailbox rotation, warmup, master inbox, and agency-style outbound infrastructure. Choose Dooza if you want AI employees that handle the work before and after outbound: content, replies, lead handling, social posting, SEO, and calls.'
    }
];

const tocItems = [
    { id: 'introduction', label: 'Quick Verdict' },
    { id: 'what-is-smartlead', label: 'What Smartlead Does' },
    { id: 'why-alternative', label: 'Why Look Elsewhere' },
    { id: 'dooza-ai-native', label: 'Dooza AI Native' },
    { id: 'comparison', label: 'Comparison Table' },
    { id: 'pricing', label: 'Pricing and TCO' },
    { id: 'where-dooza-wins', label: 'Where Dooza Wins' },
    { id: 'use-cases', label: 'Use Cases' },
    { id: 'video', label: 'Video' },
    { id: 'verdict', label: 'Final Verdict' },
    { id: 'faq', label: 'FAQ' }
];

const comparisonRows = [
    ['Core category', 'Cold email outreach and deliverability platform', 'AI-native business automation platform', 'Dooza'],
    ['Best fit', 'Outbound agencies and teams sending large email volume', 'Founders, SMBs, agencies, and operators that need AI employees', 'Dooza'],
    ['Email automation', 'Sequences, warmup, mailbox rotation, master inbox', 'AI email employee for triage, replies, follow-ups, and sales support', 'Depends'],
    ['AI depth', 'AI-led outbound features around email campaigns', 'Specialist AI employees across business functions', 'Dooza'],
    ['Channels covered', 'Primarily email outreach', 'Email, SEO, social media, sales, and phone workflows', 'Dooza'],
    ['Setup model', 'Build outbound infrastructure and campaigns', 'Concierge setup for role-based AI employees', 'Dooza'],
    ['Pricing model', 'Plan plus possible add-ons for deliverability, servers, verification, and workspaces', 'Flat AI workforce value with no cold-email infrastructure sprawl', 'Dooza'],
    ['Revenue workflow', 'Helps send and manage outbound campaigns', 'Helps create demand, respond to leads, nurture, book, and follow up', 'Dooza']
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
        desc: 'A lead does not stop at one cold email. They may read a blog, reply to an email, ask a question, book a call, miss a call, or need a follow-up. Dooza is stronger because it automates work across those moments.'
    },
    {
        icon: DollarSign,
        title: '3. Dooza avoids tool-stack sprawl',
        desc: 'Cold outreach often requires separate tools for leads, verification, domains, inboxes, deliverability, copy, CRM, scheduling, and replies. Dooza consolidates practical business automation into one AI-native application.'
    },
    {
        icon: Zap,
        title: '4. Dooza is easier for non-technical operators',
        desc: 'Smartlead is excellent when you know outbound infrastructure. Dooza is better when you want usable AI employees configured around your business without becoming an email operations specialist.'
    },
    {
        icon: ShieldCheck,
        title: '5. Dooza gives you broader leverage',
        desc: 'Outbound is one growth channel. Dooza also helps with SEO content, social distribution, inbox responses, lead handling, appointment booking, and phone coverage. That is why Dooza wins for most small businesses.'
    }
];

export default function SmartleadAlternativeAiNativeApplicationContent() {
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
                            <span>AI Native Application Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Best <span className="text-primary-600">Smartlead Alternative</span>: Why Dooza Is the Clear Winner
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Smartlead is strong for cold email infrastructure. Dooza is the better AI-native application for businesses that need email, SEO, social media, sales, and phone automation working together.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>14 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>May 8, 2026</span></div>
                        </div>
                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/marketing-automation-tools.png"
                                alt="Smartlead alternative comparison showing Dooza as the clear AI native application winner"
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
                                    Try Dooza
                                </a>
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
                                    If you are searching for a <strong>Smartlead alternative</strong>, you are probably not just comparing email tools. You are asking a bigger question: should your business invest in another cold email platform, or move to an <strong>AI-native application</strong> that can run more of the growth workflow?
                                </p>
                                <p>
                                    Smartlead has earned attention because it solves a real outbound problem: sending cold email at scale across many inboxes while protecting deliverability. It includes campaign sequences, mailbox rotation, warmup, a master inbox, analytics, and agency-friendly options.
                                </p>
                                <p>
                                    But cold email is only one slice of growth. Someone still has to research, write, reply, follow up, publish content, post on social media, handle calls, and move leads toward a booked conversation. That is where <strong>Dooza</strong> becomes the clear winner.
                                </p>
                            </div>

                            <div className="mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-6">
                                <div className="flex gap-4 items-start">
                                    <Target className="w-7 h-7 text-primary-600 shrink-0 mt-1" />
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900 mb-2">Quick verdict: Dooza wins</h2>
                                        <p className="text-slate-700">
                                            Smartlead is a strong cold email sending platform. Dooza is the better Smartlead alternative because it is an AI-native application with specialist AI employees for email, SEO, social media, sales, and phone calls. If you want business outcomes instead of only outbound infrastructure, choose Dooza.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="what-is-smartlead" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Smartlead Does Well</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    <strong>Smartlead.ai</strong> is best understood as a cold email outreach and deliverability platform. It helps outbound teams create email sequences, rotate sending accounts, warm up mailboxes, manage replies in a unified inbox, and scale campaigns without paying per connected mailbox.
                                </p>
                                <p>
                                    As of May 8, 2026, Smartlead publicly lists four main plans: Base, Pro, Unlimited Smart, and Unlimited Prime. Its pricing page shows monthly plans ranging from <strong>$39/month to $379/month</strong>, with annual billing discounts and add-ons for areas such as SmartDelivery, email verification, SmartServers, SmartSenders, and white-label client workspaces.
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
                                    Most Smartlead comparison blogs focus on other cold email tools: Instantly, Lemlist, Apollo, Reply.io, Salesloft, Outreach, or Woodpecker. That makes sense if your only buying question is "which sender should I use?"
                                </p>
                                <p>
                                    But many founders are asking a different question. They do not want to become deliverability experts. They want leads answered, content published, follow-ups sent, customers supported, and calls handled without hiring a full team.
                                </p>
                            </div>

                            <div className="space-y-5 mt-8">
                                {[
                                    ['Cold email is not a full growth system', 'It can start conversations, but it does not create SEO demand, answer phone calls, post on social media, or manage every lead response after the first reply.'],
                                    ['Add-ons and infrastructure can complicate costs', 'Domains, mailboxes, verification, deliverability tests, dedicated infrastructure, and agency workspaces can turn a simple plan into a broader email operations budget.'],
                                    ['Outbound requires constant maintenance', 'Campaign copy, sending limits, inbox health, bounces, replies, lead lists, and follow-ups all need attention if you want quality outcomes.'],
                                    ['Small businesses need operators, not just senders', 'The biggest bottleneck is usually not sending one more campaign. It is following through when a lead replies, asks a question, or wants to book.']
                                ].map(([title, desc]) => (
                                    <div key={title} className="bg-red-50 border border-red-100 rounded-xl p-6 flex gap-4">
                                        <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                                            <p className="text-slate-600">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="dooza-ai-native" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Dooza: The AI-Native Application Built for Business Work</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza</Link> is not another cold email sequencer. It is an AI-native application built around specialist AI employees. Instead of giving you one campaign engine, Dooza gives you a workforce that can handle practical work across the business.
                                </p>
                                <p>
                                    That difference matters. Smartlead can help you send outbound email. Dooza can help you create the content that brings leads in, follow up with those leads, post on social channels, answer phone calls, and keep customer communication moving.
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
                                            <th className="text-left p-4 font-semibold">Winner</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {comparisonRows.map(([category, smartlead, dooza, winner], index) => (
                                            <tr key={category} className={index % 2 ? 'bg-slate-50' : 'bg-white'}>
                                                <td className="p-4 font-semibold text-slate-900">{category}</td>
                                                <td className="p-4 text-slate-600">{smartlead}</td>
                                                <td className="p-4 text-slate-600">{dooza}</td>
                                                <td className="p-4">
                                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${winner === 'Dooza' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
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
                                    Smartlead's published pricing starts at <strong>$39/month</strong> for Base and scales to <strong>$379/month</strong> for Unlimited Prime. The list price can be attractive for email-heavy teams because Smartlead includes unlimited connected email accounts across plans.
                                </p>
                                <p>
                                    The practical cost question is broader. Cold email infrastructure often includes domains, inboxes, email verification, deliverability testing, dedicated IPs or servers, copywriting, lead data, CRM cleanup, and someone to monitor replies. Smartlead offers several add-ons for parts of that system, but the total cost depends on how you operate.
                                </p>
                                <p>
                                    Dooza's value is different. You are not buying one sender. You are buying an AI-native workforce that can help with email, SEO, social media, sales follow-up, and phone calls. For small businesses, that is usually the better ROI because the same platform solves multiple bottlenecks.
                                </p>
                            </div>

                            <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex gap-4">
                                <DollarSign className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">The real ROI test</h3>
                                    <p className="text-slate-700">
                                        If you already have outbound infrastructure and only need better sending, Smartlead can make sense. If you need a business system that creates, responds, follows up, books, and supports customers, Dooza delivers more value.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="where-dooza-wins" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Where Dooza Wins as a Smartlead Alternative</h2>
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
                                    'You need SEO, social, sales, email, and calls in one place',
                                    'You are a founder without time to manage cold email operations',
                                    'You want leads followed up after they reply',
                                    'You need content marketing and outbound to work together',
                                    'You want phone calls and appointments covered 24/7',
                                    'You prefer concierge onboarding over DIY setup',
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
                                    A Smartlead alternative should not only explain features. It should show what an AI-native application looks like in practice. This Dooza overview shows how AI employees work across email, social, SEO, sales, and calls.
                                </p>
                            </div>
                            <YouTubeEmbed videoId="NgBAXFK6nk4" title="AI Era with DOOZA.AI" />
                        </section>

                        <section id="verdict" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Final Verdict: Dooza Is the Clear Winner</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Smartlead is a good product when the job is clear: run cold email campaigns at scale, manage many inboxes, and protect deliverability. For outbound agencies and email-heavy sales teams, it can be a practical choice.
                                </p>
                                <p>
                                    But the best <strong>Smartlead alternative</strong> for most businesses is not another email sender. It is an AI-native application that can handle the work around growth: creating content, responding to leads, following up, posting on social media, managing email, and answering calls.
                                </p>
                                <p>
                                    That is why <strong>Dooza is the clear winner</strong>. It gives you AI employees that work across your business, not a single-purpose outbound engine.
                                </p>
                            </div>

                            <div className="mt-8 bg-slate-900 rounded-2xl p-8 text-center">
                                <Phone className="w-10 h-10 text-emerald-300 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-3">Move from cold email software to an AI workforce</h3>
                                <p className="text-white/75 mb-6 max-w-2xl mx-auto">
                                    Use Dooza to automate email, SEO, social media, sales follow-up, and calls from one AI-native application.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <a
                                        href={getProductSignupUrl('workforce')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full transition-colors"
                                    >
                                        Try Dooza <ArrowRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={CAL_BOOKING_URL}
                                        onClick={handleAction}
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-100 transition-colors"
                                    >
                                        <Calendar className="w-5 h-5" /> Book Onboarding
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
