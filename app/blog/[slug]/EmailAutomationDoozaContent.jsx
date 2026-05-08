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
    ShieldCheck,
    Sparkles,
    Timer,
    Workflow,
    XCircle,
    Zap
} from 'lucide-react';

const faqData = [
    {
        question: 'What is email automation?',
        answer: 'Email automation uses software or AI to send, sort, draft, follow up, and personalize emails based on triggers, customer behavior, or business rules. The best systems handle both outbound sequences and day-to-day inbox work.'
    },
    {
        question: 'What is the best email automation tool for small businesses?',
        answer: 'For small businesses that want email handled without building complicated workflows, Dooza is the clear winner. Maily, Dooza\'s AI email employee, can triage inboxes, draft replies, send follow-ups, and support sales or customer workflows for a flat monthly price.'
    },
    {
        question: 'How is Dooza different from Mailchimp or ActiveCampaign?',
        answer: 'Mailchimp and ActiveCampaign are primarily campaign and sequence tools. Dooza is an AI employee platform. Instead of only sending preset campaigns, Dooza can understand context, draft replies, follow up with leads, and coordinate email with sales, social, SEO, and phone workflows.'
    },
    {
        question: 'Can Dooza automate email follow-ups?',
        answer: 'Yes. Dooza can help automate follow-ups for leads, prospects, customers, appointments, missed inquiries, and internal reminders. The advantage is that the follow-up can be context-aware instead of a generic fixed template.'
    },
    {
        question: 'Is AI email automation safe for customer communication?',
        answer: 'It can be, when it has clear guardrails. Dooza is built around role-specific AI employees and onboarding support, so businesses can define tone, approval preferences, handoff rules, and workflows before automation goes live.'
    },
    {
        question: 'Does Dooza replace my email marketing platform?',
        answer: 'For many small businesses, yes. If your needs are email follow-up, lead nurturing, inbox triage, appointment reminders, and customer replies, Dooza can cover the practical work. Larger teams with advanced newsletter segmentation may still keep a dedicated email service provider and use Dooza around it.'
    }
];

const tools = [
    {
        name: 'Dooza',
        price: '$49/mo+',
        setup: 'Concierge onboarding',
        bestFor: 'AI email employee plus full business automation',
        weakness: 'Not built as a deep enterprise newsletter platform',
        winner: true
    },
    {
        name: 'Mailchimp',
        price: '$13/mo+',
        setup: 'DIY campaigns and lists',
        bestFor: 'Basic newsletters and simple campaigns',
        weakness: 'Limited if you need inbox replies, lead follow-up, or sales context'
    },
    {
        name: 'ActiveCampaign',
        price: '$29/mo+',
        setup: 'Workflow builder',
        bestFor: 'Email sequences and CRM-style automation',
        weakness: 'Powerful but requires workflow design, copywriting, and maintenance'
    },
    {
        name: 'HubSpot',
        price: '$20/mo to thousands',
        setup: 'CRM and marketing suite setup',
        bestFor: 'Teams already using HubSpot CRM',
        weakness: 'Costs and complexity climb quickly as you scale'
    },
    {
        name: 'Klaviyo',
        price: 'Scales by contacts',
        setup: 'E-commerce events and templates',
        bestFor: 'Shopify and e-commerce lifecycle emails',
        weakness: 'Strong for stores, less useful for general service-business inbox work'
    },
    {
        name: 'Zapier',
        price: '$29.99/mo+',
        setup: 'Build zaps between apps',
        bestFor: 'Connecting email actions across tools',
        weakness: 'Moves data between apps but does not think, write, or manage the inbox'
    }
];

const scoreRows = [
    ['Inbox triage and reply drafting', 'Excellent', 'Weak to limited', 'Dooza'],
    ['Lead follow-up', 'Context-aware AI follow-up', 'Template or workflow based', 'Dooza'],
    ['Setup time', 'One onboarding call', 'Hours to weeks of workflow setup', 'Dooza'],
    ['Campaign newsletters', 'Good for practical business email', 'Strong in dedicated ESPs', 'Tie'],
    ['Pricing predictability', 'Flat monthly pricing', 'Often contact, seat, or feature based', 'Dooza'],
    ['Cross-channel automation', 'Email, sales, social, SEO, calls', 'Usually email first', 'Dooza'],
    ['Technical learning curve', 'Low', 'Medium to high', 'Dooza']
];

export default function EmailAutomationDoozaContent() {
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
        const sections = ['introduction', 'what-is-email-automation', 'why-email-breaks', 'tool-comparison', 'why-dooza-wins', 'use-cases', 'playbook', 'verdict', 'faq'];
        const handleScroll = () => {
            for (const section of sections) {
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
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        setActiveSection(id);
    };

    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
            <Navbar openModal={handleAction} />

            <div className="bg-gradient-to-br from-primary-50 via-white to-cyan-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }, { label: 'Email Automation' }]} />
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Mail size={16} />
                            <span>Email Automation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Email Automation in 2026: <span className="text-primary-600">Why Dooza Is the Clear Winner</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Most email automation tools help you send campaigns. Dooza helps you run the email side of your business: inbox triage, smart replies, lead follow-ups, reminders, and cross-channel automation from one AI workforce.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>12 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>May 8, 2026</span></div>
                        </div>
                        <div className="mt-10">
                            <BlogHeroImage src="/blog/marketing-automation-tools.png" alt="Email automation comparison showing Dooza as the best AI email automation tool for small businesses" />
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
                                {[
                                    { id: 'introduction', label: 'Introduction' },
                                    { id: 'what-is-email-automation', label: 'What It Means' },
                                    { id: 'why-email-breaks', label: 'Why Email Breaks' },
                                    { id: 'tool-comparison', label: 'Tool Comparison' },
                                    { id: 'why-dooza-wins', label: 'Why Dooza Wins' },
                                    { id: 'use-cases', label: 'Best Use Cases' },
                                    { id: 'playbook', label: 'Setup Playbook' },
                                    { id: 'verdict', label: 'Final Verdict' },
                                    { id: 'faq', label: 'FAQ' }
                                ].map((item) => (
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
                                <p className="text-sm text-slate-600 mb-4">Automate email with Maily</p>
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
                                <InternalLinks currentSlug="email-automation-dooza" />
                            </div>
                        </div>
                    </aside>

                    <div className="w-full max-w-3xl mx-auto space-y-12">
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Email is still where deals move, customers ask questions, appointments get confirmed, invoices get chased, and leads quietly die when nobody follows up fast enough.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    That is why <strong>email automation</strong> is one of the highest-ROI automation categories for small businesses. But the market is noisy. Mailchimp talks about campaigns. ActiveCampaign talks about journeys. HubSpot talks about CRM workflows. Zapier talks about connecting apps. Lindy and other AI assistants talk about custom agents.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    The real question is simpler: <strong>which tool actually keeps your email work moving without forcing you to become an automation engineer?</strong> For that job, Dooza is the clear winner.
                                </p>
                            </div>

                            <div className="my-8">
                                <YouTubeEmbed videoId="NgBAXFK6nk4" title="AI Era with DOOZA.AI" />
                                <p className="text-sm text-slate-500 text-center mt-3">Watch: how Dooza AI employees handle business automation across email, sales, SEO, social media, and calls.</p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl">
                                <div className="flex items-start gap-3">
                                    <Sparkles className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                                    <div>
                                        <h2 className="font-bold text-slate-900 mb-2 text-xl">Quick Answer: Dooza Wins Email Automation</h2>
                                        <p className="text-slate-700">
                                            Dooza wins because it combines email automation with an actual AI email employee, Maily. Instead of only scheduling campaigns, Dooza can triage incoming messages, draft replies, send follow-ups, support sales conversations, and connect email to the rest of your business operations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="what-is-email-automation" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is Email Automation?</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Email automation is the use of software or AI to perform recurring email tasks without manual effort. In older tools, that usually means pre-written sequences: welcome emails, abandoned cart reminders, drip campaigns, and appointment reminders.
                                </p>
                                <p>
                                    Modern AI email automation goes further. It can understand the message, classify intent, draft a reply, personalize follow-up, escalate urgent emails, and coordinate with other workflows.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5 mt-8">
                                {[
                                    { icon: Mail, title: 'Inbox triage', desc: 'Sort leads, customers, partners, support, spam, and urgent messages.' },
                                    { icon: MessageSquare, title: 'Reply drafting', desc: 'Generate context-aware responses that match your tone and business rules.' },
                                    { icon: Timer, title: 'Follow-up timing', desc: 'Nudge prospects and customers at the right time without manual reminders.' },
                                    { icon: Workflow, title: 'Workflow handoff', desc: 'Connect email with bookings, CRM updates, sales tasks, and customer support.' }
                                ].map((item) => (
                                    <div key={item.title} className="bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="flex gap-3 items-start">
                                            <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                                <p className="text-sm text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="why-email-breaks" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Most Email Automation Breaks for Small Businesses</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Most comparison blogs rank email tools by feature count: templates, segmentation, A/B tests, landing pages, analytics, and integrations. Those matter. But they miss the small business reality.
                                </p>
                                <p>
                                    A founder does not lose money because an email tool lacks one more template. They lose money because a hot lead waits 14 hours for a reply, a quote request sits unread, a customer question gets buried, or a follow-up never happens.
                                </p>
                            </div>

                            <div className="space-y-4 mt-6">
                                {[
                                    ['Campaign tools do not manage your inbox', 'They can send newsletters, but they usually cannot read every incoming email and decide what needs action.'],
                                    ['Workflow builders require maintenance', 'Rules break, edge cases pile up, and someone has to keep updating the system.'],
                                    ['Templates become generic fast', 'Personalization tokens are not the same as understanding what a customer actually asked.'],
                                    ['Email is connected to everything else', 'Sales, bookings, support, invoices, reviews, social proof, and phone calls all create email tasks.']
                                ].map(([title, desc]) => (
                                    <div key={title} className="bg-red-50 border border-red-100 p-5 rounded-xl">
                                        <div className="flex gap-3 items-start">
                                            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                                                <p className="text-slate-600 text-sm">{desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="tool-comparison" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Best Email Automation Tools Compared</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    Here is the practical comparison: not which product has the longest feature page, but which one helps a small business turn email into revenue, speed, and fewer missed opportunities.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {tools.map((tool) => (
                                    <div key={tool.name} className={`border p-5 rounded-xl ${tool.winner ? 'bg-primary-50 border-primary-200' : 'bg-white border-slate-200'}`}>
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                                    {tool.name}
                                                    {tool.winner && <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">Clear Winner</span>}
                                                </h3>
                                                <p className="text-sm text-slate-500">{tool.bestFor}</p>
                                            </div>
                                            <div className="bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-bold text-slate-900">{tool.price}</div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                                            <p className="text-slate-600"><strong>Setup:</strong> {tool.setup}</p>
                                            <p className="text-slate-600"><strong>Limitation:</strong> {tool.weakness}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 overflow-x-auto">
                                <table className="w-full border-collapse rounded-xl overflow-hidden shadow-sm">
                                    <thead>
                                        <tr className="bg-slate-900 text-white">
                                            <th className="text-left py-4 px-5 font-semibold">Category</th>
                                            <th className="text-left py-4 px-5 font-semibold">Dooza</th>
                                            <th className="text-left py-4 px-5 font-semibold">Traditional Email Tools</th>
                                            <th className="text-center py-4 px-5 font-semibold">Winner</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {scoreRows.map(([category, dooza, traditional, winner], idx) => (
                                            <tr key={category} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                                <td className="py-3 px-5 font-medium text-slate-900">{category}</td>
                                                <td className="py-3 px-5 text-sm text-slate-600">{dooza}</td>
                                                <td className="py-3 px-5 text-sm text-slate-600">{traditional}</td>
                                                <td className="py-3 px-5 text-center">
                                                    <span className={winner === 'Dooza' ? 'bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium' : 'bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium'}>{winner}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="why-dooza-wins" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Dooza Is the Clear Winner for Email Automation</h2>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Bot,
                                        title: '1. Dooza gives you Maily, an AI email employee',
                                        desc: 'Traditional tools give you software. Dooza gives you an AI employee assigned to email work. Maily can help triage messages, draft replies, handle follow-ups, and keep communication moving while you focus on higher-value work.'
                                    },
                                    {
                                        icon: Zap,
                                        title: '2. It handles the messy middle, not just campaigns',
                                        desc: 'Email automation is not only newsletters. It is the quote request, the no-show reminder, the lead who asked two questions, the customer waiting for next steps, and the partner who needs a status update. Dooza is built for that practical email work.'
                                    },
                                    {
                                        icon: DollarSign,
                                        title: '3. Pricing is easier to understand',
                                        desc: 'Email platforms often become more expensive as contacts, seats, or advanced features increase. Dooza starts at a simple flat monthly price and includes AI employees beyond email, which makes the total value stronger.'
                                    },
                                    {
                                        icon: ShieldCheck,
                                        title: '4. Guardrails and onboarding reduce risk',
                                        desc: 'The best automation is not reckless. Dooza supports onboarding, tone setup, role-specific employees, and business rules so your email automation starts controlled instead of chaotic.'
                                    },
                                    {
                                        icon: Workflow,
                                        title: '5. Email connects to the rest of your business',
                                        desc: 'A reply can become a sales task. A missed call can become an email follow-up. A blog lead can become a nurture sequence. Dooza wins because it automates across the whole business, not just inside an email editor.'
                                    }
                                ].map((item) => (
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Best Email Automation Use Cases for Dooza</h2>
                            <div className="grid md:grid-cols-2 gap-5">
                                {[
                                    'Lead response within minutes instead of hours',
                                    'Follow-up sequences for quotes, demos, and consultations',
                                    'Inbox triage for founders and small teams',
                                    'Appointment reminders and no-show recovery',
                                    'Customer support first drafts and FAQ replies',
                                    'Reactivation emails for cold leads and past customers',
                                    'Sales handoffs after phone calls or form submissions',
                                    'Internal reminders for tasks buried in email threads'
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3 bg-slate-50 border border-slate-200 p-4 rounded-xl">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                        <p className="text-slate-700 font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="playbook" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Simple Email Automation Playbook</h2>
                            <div className="space-y-4">
                                {[
                                    ['Audit your inbox', 'List the top 10 recurring email types: leads, support, appointments, invoices, vendor requests, spam, reviews, and internal tasks.'],
                                    ['Define response rules', 'Decide which emails can be drafted, which can be sent automatically, and which need approval.'],
                                    ['Train tone and context', 'Give Dooza examples of your best replies, your offers, your FAQs, and your preferred writing style.'],
                                    ['Start with follow-ups', 'Automate low-risk follow-ups first: reminders, check-ins, next steps, and appointment confirmations.'],
                                    ['Expand into sales and support', 'Once Maily is handling simple flows well, connect email to Stan for sales outreach and Rachel for missed-call recovery.']
                                ].map(([title, desc], idx) => (
                                    <div key={title} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">{idx + 1}</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                                            <p className="text-slate-600">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="verdict" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Final Verdict: Dooza Wins Email Automation</h2>
                            <div className="bg-gradient-to-br from-primary-50 to-cyan-50 border-2 border-primary-200 p-8 rounded-2xl">
                                <div className="prose md:prose-lg text-slate-700">
                                    <p>
                                        If your only goal is sending a monthly newsletter, Mailchimp can work. If you want complex CRM campaigns and have the time to build them, ActiveCampaign or HubSpot can work. If you run an e-commerce store with deep purchase-event segmentation, Klaviyo can work.
                                    </p>
                                    <p>
                                        But if you want <strong>email automation that actually runs the daily email workload of a small business</strong>, Dooza is the clear winner. It is easier to start, broader than email-only tools, and more practical for founders who need replies, follow-ups, lead handling, and business communication managed in one place.
                                    </p>
                                    <p>
                                        The best email automation tool is not the one with the longest menu. It is the one that prevents missed leads, reduces founder inbox time, and keeps conversations moving. That is exactly where Dooza wins.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                    <a
                                        href={getProductSignupUrl('workforce')}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all"
                                    >
                                        Automate Email with Dooza <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a
                                        href={CAL_BOOKING_URL}
                                        onClick={handleAction}
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all"
                                    >
                                        <Calendar className="w-4 h-4" /> Book Free Onboarding
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section id="faq" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqData.map((item) => (
                                    <div key={item.question} className="border-b border-slate-200 pb-4 last:border-0">
                                        <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.question}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <RelatedPosts currentSlug="email-automation-dooza" category="AI Automation" tags={['Email Automation', 'AI Email Assistant', 'Marketing Automation', 'Dooza', 'AI Employees']} />
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
