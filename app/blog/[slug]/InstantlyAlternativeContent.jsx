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
        answer: "Dooza is the best Instantly.ai alternative for small businesses that want an AI-native app, not only a cold email sending tool. Instantly is strong for outbound email campaigns, warmup, lead lists, and deliverability workflows. Dooza wins when you need AI employees for sales follow-up, email management, SEO, social media, and phone calls in one operating system."
    },
    {
        question: "Is Dooza better than Instantly.ai?",
        answer: "Yes, if your goal is broader business automation. Instantly.ai is better for high-volume cold email infrastructure. Dooza is better for founders and operators who want an AI-native team that can handle multiple business functions beyond cold email, including Maily for inbox work, Stan for sales, Ranky for SEO, Somi for social content, and Rachel for calls."
    },
    {
        question: "Why do people look for Instantly.ai alternatives?",
        answer: "Common reasons include wanting simpler pricing, fewer separate add-ons, more channels than email, stronger done-for-you setup, less technical outbound configuration, and AI that works across the full customer journey instead of only campaign sending."
    },
    {
        question: "Does Dooza replace Instantly.ai for cold email?",
        answer: "For many small businesses, yes. Dooza can replace the need for a cold-email-only stack when your goal is lead follow-up, email assistance, content, sales outreach, and booking conversations. For very high-volume cold email teams sending hundreds of thousands of emails per month, Instantly may still be useful as dedicated sending infrastructure."
    },
    {
        question: "Can Dooza make phone calls like Instantly.ai?",
        answer: "Dooza includes Rachel, an AI receptionist that can answer calls, handle FAQs, and book appointments. Instantly has sales and CRM products, but its core reputation is cold email outreach. Dooza is built around AI employees working across channels, including phone."
    },
    {
        question: "Which tool is easier for non-technical founders?",
        answer: "Dooza is easier for most non-technical founders because it uses pre-built AI employees and concierge onboarding. Instantly requires more outbound setup knowledge, including domains, inboxes, warmup, campaign limits, lead credits, deliverability checks, and reply workflows."
    }
];

const tocItems = [
    { id: 'verdict', label: 'Quick Verdict' },
    { id: 'what-is-instantly', label: 'What Instantly Does' },
    { id: 'why-switch', label: 'Why Switch' },
    { id: 'dooza-ai-native', label: 'Dooza AI-Native App' },
    { id: 'comparison', label: 'Comparison Table' },
    { id: 'pricing', label: 'Pricing & Value' },
    { id: 'video', label: 'Video' },
    { id: 'winner', label: 'Clear Winner' },
    { id: 'faq', label: 'FAQ' }
];

const comparisonRows = [
    ['Primary use case', 'Cold email outreach, warmup, lead database, campaign sending', 'AI-native business operations across sales, inbox, SEO, social, and calls', 'Dooza'],
    ['Best user', 'Outbound teams and agencies focused on email volume', 'Founders, SMBs, agencies, local businesses, and lean teams', 'Dooza'],
    ['Setup model', 'Configure domains, inboxes, leads, campaigns, warmup, and deliverability', 'Start with specialist AI employees and concierge onboarding', 'Dooza'],
    ['AI depth', 'AI writing, credits, reply agent, sales agent, and research features', 'Role-based AI employees that own recurring business functions', 'Dooza'],
    ['Channels', 'Mostly email-led, with CRM and related sales tools available separately', 'Email, social, SEO, sales follow-up, and phone workflows', 'Dooza'],
    ['Cold email scale', 'Strong for large outbound sending volume', 'Better for practical follow-up and business automation', 'Instantly'],
    ['Pricing clarity', 'Multiple product tabs and add-ons for outreach, credits, CRM, visitors, inbox placement, and accounts', 'Flat AI employee plans with broader business coverage', 'Dooza'],
    ['Best final choice', 'Use when cold email infrastructure is the whole job', 'Use when revenue operations need an AI-native team', 'Dooza']
];

export default function InstantlyAlternativeContent() {
    const [activeSection, setActiveSection] = useState('verdict');
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
                        { label: 'Instantly.ai Alternative' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Sparkles size={16} />
                            <span>AI App Comparison</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Best <span className="text-primary-600">Instantly.ai Alternative</span>: Why Dooza&apos;s AI-Native App Wins
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            Instantly is a strong cold email platform. But if you want an AI-native app that runs sales, inbox, SEO, social media, and calls together, Dooza is the clear winner.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>13 min read</span></div>
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>May 8, 2026</span></div>
                        </div>

                        <div className="mt-10 max-w-3xl mx-auto">
                            <BlogHeroImage
                                src="/blog/ai-sales-agent-guide.png"
                                alt="Instantly.ai alternative comparison showing Dooza as the AI-native business app winner"
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
                                    Try Dooza
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
                                    If you are searching for an <strong>Instantly.ai alternative</strong>, the real question is not "which tool sends cold emails?" It is "which AI app helps my business turn outreach into revenue?"
                                </p>
                                <p>
                                    Instantly.ai is popular because it solves a specific outbound problem: cold email infrastructure. It helps teams connect email accounts, warm inboxes, upload contacts, send campaigns, manage replies, use lead credits, and test deliverability. For high-volume outbound teams, that is valuable.
                                </p>
                                <p>
                                    But most small businesses do not only need more outbound emails. They need the whole operating loop: find prospects, follow up, answer replies, publish content, post on social, book calls, and keep customers moving. That is why <strong>Dooza</strong> is the better choice. Dooza is an AI-native app with specialist AI employees, not just another campaign sequencer.
                                </p>
                            </div>

                            <div className="mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-6">
                                <p className="text-primary-900 font-bold text-lg mb-2">Quick verdict</p>
                                <p className="text-primary-800">
                                    Instantly.ai wins if your only job is cold email volume. Dooza wins if you want AI employees that handle sales follow-up, email, SEO, social media, and phone calls. For founders, agencies, SMBs, and lean teams, Dooza is the clear winner.
                                </p>
                            </div>
                        </section>

                        <section id="what-is-instantly" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Instantly.ai Does Well</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Instantly.ai is a cold email and sales engagement platform. Its public pricing and help center describe several product areas: Email Outreach, Instantly Credits, CRM, Website Visitors, Inbox Placement, done-for-you domains, and pre-warmed email accounts.
                                </p>
                                <p>
                                    That tells you what Instantly is built for: outbound campaign infrastructure. It can connect and warm email accounts, upload leads, send campaign emails, help with lead discovery, verify or enrich leads, and support reply or sales agent features through credits.
                                </p>
                                <p>
                                    A fair comparison should acknowledge this: Instantly is not a bad tool. If you run a cold email agency or send at serious scale, it may fit. The problem is that a cold email stack is not the same thing as an AI-native business app.
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
                                    Many Instantly alternatives compare sender limits, warmup, inbox rotation, lead credits, and deliverability. That is useful, but it misses the bigger shift. Teams are not just replacing one cold email tool with another. They are moving from tools to AI-native workflows.
                                </p>
                                <p>
                                    An AI-native app should understand the business outcome, not only the campaign. When a lead replies, someone needs to answer. When a prospect asks for pricing, someone needs to follow up. When a buyer checks your website, someone needs to educate them. When the phone rings, someone needs to pick up. Cold email alone does not cover that.
                                </p>
                            </div>

                            <div className="mt-8 space-y-5">
                                {[
                                    ['Pricing can feel fragmented', 'Instantly separates many jobs into product areas such as outreach, credits, CRM, website visitors, inbox placement, and email account services. That can make the real operating cost harder to reason about.'],
                                    ['Email-only growth is fragile', 'Cold email can create pipeline, but it depends on deliverability, list quality, copy quality, sender reputation, and timely follow-up. If one part breaks, results drop.'],
                                    ['AI should own work, not just write copy', 'A modern AI app should do more than generate email text. It should manage repeatable business roles across channels.'],
                                    ['Small teams need outcomes', 'Most founders do not want to become deliverability engineers. They want qualified conversations, faster replies, more content, and fewer missed calls.']
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Dooza: The AI-Native App That Beats Instantly.ai</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    <Link href="/" className="text-primary-600 hover:underline font-medium">Dooza</Link> is built around AI employees. Instead of asking you to assemble a stack of tools, Dooza gives you specialist workers that own business functions.
                                </p>
                                <p>
                                    That is the key difference. Instantly helps you run outbound campaigns. Dooza helps you run the work around those campaigns. Your sales AI employee can follow up. Your email AI employee can manage replies. Your SEO AI employee can publish content that makes prospects trust you. Your social AI employee can distribute ideas. Your receptionist can answer the phone when leads call.
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
                                            <th className="text-left p-4 font-semibold">Winner</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {comparisonRows.map(([category, instantly, dooza, winner], index) => (
                                            <tr key={category} className={index % 2 ? 'bg-slate-50' : 'bg-white'}>
                                                <td className="p-4 font-semibold text-slate-900">{category}</td>
                                                <td className="p-4 text-slate-600">{instantly}</td>
                                                <td className="p-4 text-slate-600">{dooza}</td>
                                                <td className="p-4">
                                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${winner === 'Dooza' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
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
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Pricing and Value: Dooza Gives You More Than Outreach</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Instantly&apos;s public help center lists multiple pricing areas. Email Outreach starts with Growth at $47/month, Hyper Growth at $97/month, and Light Speed at $358/month. Instantly Credits, CRM, Website Visitors, Inbox Placement, and email account services are separate product areas with their own pricing or usage rules.
                                </p>
                                <p>
                                    That structure can make sense for outbound teams that know exactly what they need. But for a founder or small business, the better value is usually one AI-native app that handles the work across departments.
                                </p>
                                <p>
                                    Dooza&apos;s value is not "we send more cold emails." The value is that your business gets an AI workforce: Maily for email, Stan for sales, Ranky for SEO, Somi for social media, and Rachel for phone calls. That is a bigger operational win than another sending dashboard.
                                </p>
                            </div>

                            <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex gap-4">
                                <DollarSign className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-2">The value test</h3>
                                    <p className="text-slate-700">
                                        If cold email is your entire growth system, Instantly can be a fit. If cold email is only one part of sales, marketing, support, and booking, Dooza delivers more value because it automates the whole loop.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="video" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Relevant YouTube Video: See Dooza&apos;s AI Employees in Action</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    This comparison is easier to understand when you see the category difference. Instantly is a cold email platform. Dooza is an AI employee platform. Watch how Dooza&apos;s AI-native workforce is designed to handle real business work beyond outbound campaigns.
                                </p>
                            </div>
                            <YouTubeEmbed videoId="NgBAXFK6nk4" title="AI Era with DOOZA.AI" />
                        </section>

                        <section id="winner" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Final Verdict: Dooza Is the Clear Winner</h2>
                            <div className="prose md:prose-lg text-slate-600">
                                <p>
                                    Instantly.ai is a strong choice for a specific buyer: teams that already understand cold email operations and want dedicated infrastructure for sending, warmup, lead lists, deliverability, and campaign management.
                                </p>
                                <p>
                                    But the best <strong>Instantly.ai alternative</strong> for most modern businesses is not another cold email platform. It is an AI-native app that can own the work before and after the email. That is where Dooza wins.
                                </p>
                                <p>
                                    Dooza is the clear winner because it gives you a team of AI employees, not just a campaign tool. When Stan follows up with leads, Maily manages the inbox, Ranky publishes SEO content, Somi posts on social, and Rachel answers calls, your business gets a real operating advantage.
                                </p>
                            </div>

                            <div className="mt-8 bg-slate-900 rounded-2xl p-8 text-center">
                                <Zap className="w-10 h-10 text-emerald-300 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-3">Choose the AI-native app, not another cold email silo</h3>
                                <p className="text-white/75 mb-6 max-w-2xl mx-auto">
                                    Use Dooza to run the work that turns leads into conversations: sales follow-up, inbox management, SEO content, social distribution, and phone coverage.
                                </p>
                                <a
                                    href={getProductSignupUrl('stan')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full transition-colors"
                                >
                                    Try Dooza <ArrowRight className="w-5 h-5" />
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
