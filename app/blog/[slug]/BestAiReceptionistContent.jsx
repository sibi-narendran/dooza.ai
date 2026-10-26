'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CAL_BOOKING_URL } from '../../../lib/links';
import { RECEPTIONIST_VENDORS, unitLabel } from '../../../lib/receptionistPricing';
import { crewSignupUrl } from '../../../lib/crewUrl';

const CREW_URL = (placement) => crewSignupUrl(`best-ai-receptionist-${placement}`);

// Vendors whose own pricing page shows a $0 plan, checked Oct 21, 2026 (Quo no longer shows a free Sona tier).
const FREE_PLAN_CHECKED = new Set(['Phonely', 'Smith.ai AI Receptionist']);
// Entry plan = cheapest paid tier (free tiers noted separately); AI services first, then human answering services.
const COMPARE_ROWS = RECEPTIONIST_VENDORS.map((v) => {
    const paid = v.tiers.filter((t) => t.price > 0);
    const entry = paid.reduce((a, b) => (b.price < a.price ? b : a), paid[0]);
    return { ...v, entry, hasFree: FREE_PLAN_CHECKED.has(v.name) };
}).sort((a, b) => (a.kind === b.kind ? a.entry.price - b.entry.price : a.kind === 'ai' ? -1 : 1));

const unitShort = { call: 'calls', interaction: 'interactions', min: 'min', min30: 'min', caller: 'callers', flat: '' };
const included = (v) => (v.entry.inc === Infinity ? 'Unlimited calls' : v.entry.inc === 0 ? 'Pay as you go' : `${v.entry.inc} ${unitShort[v.unit]}`);
// "Best for" = what each vendor's own page says it is built for or does, read Oct 21, 2026. No line = page did not support one.
const BEST_FOR = {
    'Quo (OpenPhone) Sona': 'teams already using the Quo phone system (Sona is included in its plans)',
    'OnCrew': 'contractors; Spanish answering included',
    'Marlie': 'booking jobs automatically (Standard plan and up)',
    'Upfirst': 'low call volume; calendar booking, 35+ languages',
    'Trillet': 'solo owner-operators who want calendar booking',
    'Goodcall': 'many repeat callers (billed per unique caller)',
    'Nextiva XBert': 'one AI for calls, texts and chat, with booking',
    'My AI Front Desk': 'phone plus web chat, SMS and CRM in one plan',
    'Dialzara': 'message taking on a small budget; English/Spanish from Business Pro',
    'RingCentral AIR (standalone)': 'RingCentral users; logs callers to Salesforce, HubSpot or Zoho',
    'Rosie': 'appointment booking, English and Spanish on every call',
    'Phonely': 'trying AI answering free (100 minutes a month)',
    'Ringly.io': 'Shopify stores',
    'NextPhone': 'high call volume on one flat bill (unlimited calls)',
    'Smith.ai AI Receptionist': 'starting free, with scheduling via Calendly',
    'AnswerConnect (human answering)': 'real people answering 24/7',
    'PATLive (human answering)': 'live agents for scheduling and intake; 14-day free trial',
    'Smith.ai Virtual Receptionists': 'live lead screening and intake sent to your CRM',
    'Abby Connect (human answering)': 'small offices catching overflow or after-hours calls',
};
const overage = (v) => (v.entry.over === null ? 'Move up a plan' : v.entry.over === 0 ? 'None' : `$${v.entry.over.toFixed(2)}/${v.unit === 'min' || v.unit === 'min30' ? 'min' : v.unit === 'caller' ? 'caller' : v.unit === 'interaction' ? 'interaction' : 'call'}`);
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BookingModal from '../../../components/BookingModal';
import Breadcrumbs from '../../../components/Breadcrumbs';
import RelatedPosts from '../../../components/RelatedPosts';
import InternalLinks from '../../../components/InternalLinks';
import BlogHeroImage from '../../../components/BlogHeroImage';
import YouTubeEmbed from '../../../components/YouTubeEmbed';
import {
    CheckCircle2,
    XCircle,
    Clock,
    Calendar,
    ArrowRight,
    DollarSign,
    Bot,
    Zap,
    Mail,
    Phone,
    Users,
    TrendingUp,
    AlertTriangle,
    MessageSquare,
    FileText,
    Target,
    BarChart3,
    Shield
} from 'lucide-react';

const faqData = [
    {
        question: "What is an AI receptionist?",
        answer: "An AI receptionist is software that answers your business phone calls using natural language AI. It greets callers, answers common questions, qualifies leads, books appointments, and routes urgent calls — 24/7, without human intervention."
    },
    {
        question: "How much does an AI receptionist cost compared to a human?",
        answer: "A human receptionist costs a salary plus benefits. Virtual receptionist services start at $250/month for 50 minutes (Ruby) or $300/month for 30 calls (Smith.ai), checked Oct 7, 2026. AI answering services start at about $19-$50/month (prices checked Oct 2026 in the table above). Dooza Crew agents take phone calls too, and it is included in your Crew plan: $49 per organization per month after a 7-day free trial (no card needed)."
    },
    {
        question: "Is there a free AI answering service?",
        answer: "Yes, but only a few have a free plan you can keep, and they cap it. Of the 20 services compared here, Phonely's Free plan is $0 a month for 100 minutes, and Smith.ai's AI Receptionist Free plan is $0 for 25 calls a month, then $3.00 per call (checked Oct 21, 2026). Most others offer a 7- or 14-day free trial or a money-back period instead. Dooza Crew has a 7-day free trial (no card needed), then $49 per organization per month, and phone calls are included in the plan."
    },
    {
        question: "What is the difference between an AI and a human answering service?",
        answer: "A human answering service puts a live agent on your calls; an AI answering service answers with software. In the table above, human services start at about $99-$350 a month for 30-200 minutes or calls, while AI entry plans start at about $19-$50 a month (prices checked Oct 2026). Pick a person for sensitive or complex calls; pick AI when you mainly need every call answered and the message passed on."
    },
    {
        question: "Can AI answer my business phone calls?",
        answer: "Yes. You forward your business number to an AI answering service, either all calls or only the ones you miss. It picks up, answers common questions, asks the questions you set and passes the message on; depending on the vendor it can also book appointments, send texts or update your CRM, so check each vendor's page. Dooza Crew agents take phone calls too, included in your Crew plan."
    },
    {
        question: "Will AI replace receptionists?",
        answer: "For routine calls, often yes: after-hours calls, overflow, opening hours and taking messages are what small businesses hand to AI first, because it costs a fraction of a salary. Sensitive or complex calls still go to a person. Many owners use AI for the calls they would otherwise miss and keep a person for the rest."
    },
    {
        question: "Can an AI receptionist handle complex conversations?",
        answer: "Modern AI receptionists handle multi-turn conversations and answer common questions; many can qualify leads and route complex calls to a person. Dooza Crew agents take phone calls too, and before an agent sends or pays it asks you in chat (Approve / Edit / Reject)."
    },
    {
        question: "What's the best AI virtual receptionist for lead qualification?",
        answer: "The best one asks your own screening questions on every call, books qualified callers straight onto your calendar, sends urgent or high-value calls to a person under rules you set, and gives your team a written summary of each call. Test any vendor on those four points with a live trial call before you sign. If you mainly need every missed call answered and the message emailed to you, Dooza Crew agents take phone calls too, included in a $49 per organization per month plan after a 7-day free trial (no card needed)."
    },
    {
        question: "Will callers know they're talking to an AI?",
        answer: "Modern AI voices sound natural, but we recommend telling callers they're speaking with an AI assistant, for example in the greeting."
    },
    {
        question: "How many calls does the average small business miss?",
        answer: "Many calls to small businesses go unanswered, and most callers who reach voicemail hang up without leaving a message. That means many businesses lose inbound leads before ever speaking to them."
    }
];

export default function BestAiReceptionistContent() {
    const [activeSection, setActiveSection] = useState('compared');
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
            const sections = ['compared', 'how-we-compared', 'free', 'how-to-pick', 'introduction', 'voicemail-problem', 'what-is-ai-receptionist', 'ai-vs-alternatives', 'who-needs', 'real-cost', 'getting-started', 'faq'];
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
            <div className="bg-gradient-to-br from-red-50 via-white to-primary-50 pt-24 pb-12 md:pt-32 md:pb-20 border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs items={[
                        { label: 'Blog', href: '/blog' },
                        { label: 'Best AI Answering Services' }
                    ]} />

                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
                            <Phone size={16} />
                            <span>AI Automation</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                            Best <span className="text-primary-600">AI Answering Services</span> for Small Business (20 Compared, Oct 2026)
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                            20 AI receptionists and human answering services side by side: entry price, what it includes, overage and billing unit, from each vendor's own pricing page. Then how to pick one, and what a missed call costs you.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>12 min read</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>Updated October 21, 2026 · prices checked Oct 6–14, 2026 · free plans and trials checked Oct 21, 2026</span>
                            </div>
                        </div>

                        <p className="mt-4 text-sm text-slate-600">By <strong>Sibi Narendran</strong>, founder of Dooza</p>
                        <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto"><strong>Disclosure:</strong> Dooza sells one of the services compared here, <a href={CREW_URL('disclosure')} data-offer="crew" className="underline">Dooza Crew</a>, whose agents take phone calls too ($49 per organization per month after a 7-day free trial). It is listed first and marked "ours".</p>

                        <div className="mt-10 flex flex-col items-center gap-2">
                            <a
                                href={CREW_URL('hero')}
                                data-offer="crew"
                                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-all shadow-lg"
                            >
                                Try Dooza Crew free for 7 days
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <span className="text-sm text-slate-500">Then $49 per organization per month · no card needed · phone calls included · <a href={CAL_BOOKING_URL} onClick={handleAction} className="underline">or book a call first</a></span>
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
                                    { id: 'compared', label: '20 Services Compared' },
                                    { id: 'how-we-compared', label: 'How We Compared' },
                                    { id: 'free', label: 'Free Options' },
                                    { id: 'how-to-pick', label: 'Which One to Pick' },
                                    { id: 'introduction', label: 'Why It Matters' },
                                    { id: 'voicemail-problem', label: 'The Voicemail Problem' },
                                    { id: 'what-is-ai-receptionist', label: 'What Is an AI Receptionist?' },
                                    { id: 'ai-vs-alternatives', label: 'AI vs Alternatives' },
                                    { id: 'who-needs', label: 'Who Uses One' },
                                    { id: 'real-cost', label: 'The Real Cost' },
                                    { id: 'getting-started', label: 'Getting Started' },
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
                                <p className="text-sm text-slate-600 mb-4">Never miss a call again</p>
                                <a
                                    href={CREW_URL('sidebar')}
                                    data-offer="crew"
                                    className="w-full inline-flex justify-center py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                                >
                                    Try Dooza Crew free
                                </a>
                                <p className="text-xs text-slate-500 mt-2 text-center">7-day free trial · $49 per organization per month</p>
                            </div>

                            <div className="mt-6">
                                <InternalLinks currentSlug="best-ai-receptionist" />
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="w-full max-w-3xl mx-auto space-y-12">

                        {/* Comparison: 20 services, prices from vendor pages */}
                        <section id="compared" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">The 20 AI Answering Services Compared (Prices Checked Oct 2026)</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                <strong>Short answer:</strong> for a small business that misses calls, an AI answering service costs about $19–$200 a month; human answering services start at about $99–$350 a month for 30–200 minutes or calls (PATLive and MAP Communications also sell pay-as-you-go from $49 a month plus $1.37–$2.99 a minute). The cheapest AI entry plans below are Quo Sona ($19 Starter seat, 10 calls included), Upfirst ($24.95 for 30 calls) and Dialzara ($29 for 60 minutes); NextPhone is the only flat price with unlimited calls ($199). Pick by your monthly call minutes, not the headline price.
                            </p>
                            <div className="overflow-x-auto rounded-xl border border-slate-200">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="text-left py-3 px-3 font-bold text-slate-900">Service</th>
                                            <th className="text-left py-3 px-3 font-bold text-slate-900">Type</th>
                                            <th className="text-left py-3 px-3 font-bold text-slate-900">Entry plan</th>
                                            <th className="text-left py-3 px-3 font-bold text-slate-900">Included</th>
                                            <th className="text-left py-3 px-3 font-bold text-slate-900">Overage</th>
                                            <th className="text-left py-3 px-3 font-bold text-slate-900">Billed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-slate-200 bg-primary-50">
                                            <td className="py-3 px-3 font-semibold text-slate-900">Dooza Crew <span className="text-xs font-normal text-slate-500">(ours)</span><span className="block text-xs font-normal text-slate-500 mt-1">Best for: AI agents you chat with on web or phone; phone calls are included in your Crew plan</span></td>
                                            <td className="py-3 px-3">AI</td>
                                            <td className="py-3 px-3 font-semibold">$49/mo after a 7-day free trial</td>
                                            <td className="py-3 px-3">Phone calls included</td>
                                            <td className="py-3 px-3">No separate phone service</td>
                                            <td className="py-3 px-3">per organization</td>
                                        </tr>
                                        {COMPARE_ROWS.map((v) => (
                                            <tr key={v.name} className="border-t border-slate-200">
                                                <td className="py-3 px-3 font-medium text-slate-900"><a href={v.url} target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">{v.name}</a>{BEST_FOR[v.name] && <span className="block text-xs font-normal text-slate-500 mt-1">Best for: {BEST_FOR[v.name]}</span>}</td>
                                                <td className="py-3 px-3">{v.kind === 'ai' ? 'AI' : 'Human'}</td>
                                                <td className="py-3 px-3">${v.entry.price}/mo{v.extra ? ` + $${v.extra} seat` : ''}{v.hasFree ? ' (free plan too)' : ''}</td>
                                                <td className="py-3 px-3">{included(v)}</td>
                                                <td className="py-3 px-3">{overage(v)}</td>
                                                <td className="py-3 px-3">{unitLabel[v.unit]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4 text-sm text-slate-600">"Best for" lines come from each vendor's own page (checked Oct 21, 2026). Prices change: check the vendor's page before you buy. To price your own call volume across all 20, use the <Link href="/ai-receptionist-cost-calculator" className="text-primary-600 underline">AI receptionist cost calculator</Link>.</p>
                        </section>

                        <section id="how-we-compared" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Compared These Services</h2>
                            <p className="text-slate-600 mb-4">We compared published prices and published features. We did not place test calls or rate call quality. What we did:</p>
                            <ul className="list-disc pl-5 text-slate-600 space-y-2">
                                <li>Read each vendor's public pricing page (linked in the table) between October 6 and 14, 2026, and recorded its cheapest paid plan, what that plan includes (minutes or calls), the published overage rate and the billing unit (per minute, per call, per unique caller or flat).</li>
                                <li>On October 21, 2026, read the same pages again for free plans, free trials and money-back periods, and for what each vendor says it does: appointment booking, CRM sync, languages. The "Best for" line under each name comes from that vendor's own page. If a page does not say it, we do not claim it.</li>
                                <li>Listed AI services by entry price, then human answering services.</li>
                                <li>MAP Communications' pricing page did not load for us on October 21, 2026, so its row is from October 7 and has no "Best for" line.</li>
                            </ul>
                            <p className="text-slate-600 mt-4">Dooza sells one of these services. It is listed first and marked "ours", and it is the only row we can describe from the inside.</p>
                        </section>

                        <section id="free" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Is There a Free AI Answering Service?</h2>
                            <p className="text-lg text-slate-600 mb-4">
                                <strong>Yes, but only two of the 20 services here have a free plan you can keep, and both cap it.</strong> Phonely's Free plan is $0 a month for 100 minutes, and Smith.ai's AI Receptionist Free plan is $0 for 25 calls a month, then $3.00 per call (checked Oct 21, 2026). Most of the others offer a free trial or a money-back period instead, which is enough to test a service on real calls before you pay.
                            </p>
                            <ul className="list-disc pl-5 text-slate-600 space-y-2">
                                <li><strong>Free plan:</strong> <a href="https://www.phonely.ai/pricing" target="_blank" rel="noopener noreferrer nofollow" className="text-primary-600 underline">Phonely</a> (100 minutes a month; its page puts that at about 50 calls), <a href="https://smith.ai/pricing/ai-receptionist" target="_blank" rel="noopener noreferrer nofollow" className="text-primary-600 underline">Smith.ai AI Receptionist</a> (25 calls a month).</li>
                                <li><strong>Free trial:</strong> OnCrew 14 days (no credit card required), Upfirst 14 days, Marlie 14 days, RingCentral AI Receptionist 14 days, PATLive 14 days (human answering), Rosie 7 days, Dialzara 7 days, NextPhone 7 days, My AI Front Desk 7 days. Abby Connect (human answering) says every plan has a free trial but does not state the length.</li>
                                <li><strong>Money-back period instead of a trial:</strong> Trillet AI Receptionist 28 days, Nextiva XBert 30 days, Smith.ai Virtual Receptionists (human) 30 days. Dooza Crew has a 7-day free trial (no card needed).</li>
                                <li><strong>Free demo, pay when you go live:</strong> Goodcall lets you build and test a demo agent free and pay when you connect a number.</li>
                            </ul>
                            <p className="text-slate-600 mt-4">Already on Smith.ai and weighing a switch? See our <a href="/smith-ai-alternatives" className="text-primary-600 underline">Smith.ai alternatives</a> comparison. All checked on each vendor's pricing page on October 21, 2026. A free plan suits a business with a handful of calls a month. If you get more than that, compare the paid plans in the table above by your monthly minutes or calls.</p>
                        </section>

                        <section id="how-to-pick" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Which AI Answering Service Should You Pick?</h2>
                            <div className="space-y-3">
                                {[
                                    { need: 'Under 30 calls a month', pick: 'Upfirst Starter ($24.95, 30 calls) or Dialzara Plan 1 ($29, 60 minutes).' },
                                    { need: 'Lots of short calls', pick: 'A per-minute plan (Marlie, Trillet, My AI Front Desk) usually beats a per-call plan.' },
                                    { need: 'Few but long calls', pick: 'A per-call plan (Quo Sona, OnCrew, Upfirst) usually beats a per-minute plan.' },
                                    { need: 'You want one fixed bill', pick: 'NextPhone Pro ($199 flat, unlimited calls) or Rosie (no overage; you move up a plan).' },
                                    { need: 'You want a person to answer', pick: 'PATLive ($99 for 50 minutes) or MAP Communications ($179 for 125 minutes); expect several times the AI price per minute.' },
                                    { need: 'You want phone calls handled by AI agents you also chat with', pick: 'Dooza Crew: agents take phone calls too, included in the plan, $49 per organization per month after a 7-day free trial.' },
                                ].map((r) => (
                                    <div key={r.need} className="bg-white border border-slate-200 p-4 rounded-xl">
                                        <p className="font-bold text-slate-900">{r.need}</p>
                                        <p className="text-slate-600">{r.pick}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-primary-50 border border-primary-100 p-6 rounded-xl mt-6">
                                <h3 className="font-bold text-slate-900 mb-2">Dooza Crew, in plain terms</h3>
                                <ul className="list-disc pl-5 text-slate-700 space-y-1">
                                    <li>AI agents (a lead agent plus helper agents) you chat with on web or phone; they browse the web and write files in their own workspace.</li>
                                    <li>Before an agent sends or pays it asks you in chat (Approve / Edit / Reject).</li>
                                    <li>Crew agents take phone calls too. It is included in your Crew plan, so there is no separate phone service to buy.</li>
                                    <li>$49 per organization per month after a 7-day free trial (no card needed). Unlimited users and agents; AI usage included with a hard spending cap.</li>
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                    <a href={CREW_URL('plain-terms')} data-offer="crew" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">Try Dooza Crew free for 7 days <ArrowRight className="w-4 h-4" /></a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">Book a call first</a>
                                </div>
                            </div>
                        </section>

                        {/* Section 1: Introduction */}
                        <section id="introduction" className="scroll-mt-28">
                            <div className="prose md:prose-lg text-slate-600">
                                <p className="text-xl leading-relaxed font-medium text-slate-700">
                                    Your voicemail is a lead-killing machine.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Many callers who reach voicemail won't leave a message. They hang up and call your competitor. Every unanswered ring is revenue walking out the door — and you don't even know it's happening.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Picture this (an illustrative example): it's 6 PM on a Tuesday. A homeowner discovers a burst pipe flooding their basement. They grab their phone and call three plumbers. Two go straight to voicemail. The third picks up instantly, asks the right questions — "Where's the leak? How bad is the flooding? What's your address?" — and books the emergency appointment on the spot. That third business just won the job while the other two were still recording "Sorry we missed your call." (We built pages for exactly this: <Link href="/plumbing-answering-service" className="text-primary-600 hover:underline font-medium">plumbing answering service</Link>, <Link href="/hvac-answering-service" className="text-primary-600 hover:underline font-medium">HVAC answering service</Link> and <Link href="/garage-door-answering-service" className="text-primary-600 hover:underline font-medium">garage door answering service</Link>.)
                                </p>
                                <p className="text-lg leading-relaxed">
                                    <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">As we covered in our business automation guide</Link>, inbound call handling eats a lot of a small team's day. But unlike email or social media, missed calls have an immediate, measurable cost — because the caller doesn't wait. They move on.
                                </p>

                                <div className="my-8">
                                    <YouTubeEmbed
                                        videoId="Ry1OqRi9dkU"
                                        title="The Best AI Receptionist for Small Business"
                                    />
                                    <p className="text-sm text-slate-500 text-center mt-3">Watch: Why businesses are replacing voicemail with AI receptionists</p>
                                </div>

                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl my-8">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-2">The Cost of Voicemail</h4>
                                            <p className="text-slate-700">
                                                Example (illustrative, not typical): if you miss 6 calls a week and a new customer is worth $200 to you, up to <strong>$1,200/week</strong> of work is at risk if none of those callers leave a message. Plug in your own numbers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2: The Voicemail Problem */}
                        <section id="voicemail-problem" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Voicemail Problem: Why Callers Hang Up</h2>


                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                                        <XCircle className="w-5 h-5 text-red-600" />
                                        What Your Voicemail Says
                                    </h3>
                                    <p className="text-slate-700 italic mb-4">"We're not available. Leave a message."</p>
                                    <h4 className="font-semibold text-slate-800 mb-2">Caller thinks:</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "They're too busy for me",
                                            "Are they even still in business?",
                                            "I'll just call someone else"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                                    <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                        What AI Says
                                    </h3>
                                    <p className="text-slate-700 italic mb-4">"Hi, thanks for calling! How can I help you today?"</p>
                                    <h4 className="font-semibold text-slate-800 mb-2">Caller thinks:</h4>
                                    <ul className="space-y-2">
                                        {[
                                            "They're professional",
                                            "Let me tell them what I need",
                                            "Great, they just booked my appointment"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-600">
                                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: What Is an AI Receptionist? */}
                        <section id="what-is-ai-receptionist" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is an AI Receptionist?</h2>
                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    An AI receptionist is software that answers your business phone calls using advanced natural language processing. It sounds natural, follows your business rules, and handles calls the way you'd want a trained receptionist to — greeting callers warmly, answering questions, qualifying leads, booking appointments, and routing urgent calls to your cell.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                {[
                                    { icon: Phone, title: "Answers Every Call", desc: "Picks up every call, 24/7/365. No voicemail." },
                                    { icon: MessageSquare, title: "Natural Conversation", desc: "Uses NLP to have real, multi-turn conversations with callers." },
                                    { icon: Target, title: "Qualifies Leads", desc: "Asks your custom screening questions to identify hot prospects." },
                                    { icon: Calendar, title: "Books Appointments", desc: "Checks your calendar and books meetings on the spot." },
                                    { icon: FileText, title: "Call Summaries", desc: "Sends you a detailed summary after every call via email or SMS." },
                                    { icon: AlertTriangle, title: "Routes Urgent Calls", desc: "Spots urgent calls and transfers them to your cell under rules you set." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                                        <div className="flex items-start gap-3">
                                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                                <p className="text-sm text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4: AI Receptionist vs Alternatives */}
                        <section id="ai-vs-alternatives" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">AI Receptionist vs The Alternatives</h2>
                            <p className="text-slate-600 mb-6">Comparing AI receptionist prices? We checked 23 services’ pricing pages: see <a href="/blog/ai-receptionist-pricing" className="text-teal-700 underline">AI receptionist pricing (2026)</a> for what 100 calls a month costs on each.</p>

                            <div className="overflow-x-auto mb-8">
                                <table className="w-full text-sm border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-slate-200">
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Feature</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Voicemail</th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">Virtual Receptionist<br /><span className="font-normal text-xs text-slate-500">(Ruby, Smith.ai)</span></th>
                                            <th className="text-left py-3 px-4 font-bold text-slate-900">In-House Receptionist</th>
                                            <th className="text-left py-3 px-4 font-bold text-primary-700 bg-primary-50">Dooza Crew (ours)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { feature: "Monthly Cost", voicemail: "$0", virtual: "$250–$2,100/mo (Ruby, Smith.ai plans, checked Oct 2026)", inhouse: "Salary + benefits", rachel: "$49/mo per organization after a 7-day free trial (Dooza Crew)" },
                                            { feature: "Availability", voicemail: "Always (but useless)", virtual: "24/7, billed per minute or call", inhouse: "Business hours", rachel: "Crew agents take phone calls too" },
                                            { feature: "Call Volume", voicemail: "Unlimited", virtual: "Plan allowance (e.g. 30–300 calls/mo at Smith.ai)", inhouse: "One call at a time", rachel: "Included in your Crew plan, no separate phone service to buy" },
                                            { feature: "Approval", voicemail: "None", virtual: "Varies by plan", inhouse: "Trained judgment", rachel: "Agents ask you in chat before they send or pay" }
                                        ].map((row, idx) => (
                                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                                                <td className="py-3 px-4 font-medium text-slate-900">{row.feature}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.voicemail}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.virtual}</td>
                                                <td className="py-3 px-4 text-slate-600">{row.inhouse}</td>
                                                <td className="py-3 px-4 text-primary-700 font-medium bg-primary-50">{row.rachel}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Section 5: Who uses one (was the Dooza product section + Who Needs; shortened to keep the page a comparison) */}
                        <section id="who-needs" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Who Uses an AI Answering Service?</h2>
                            <p className="text-slate-600">It suits owners who miss calls while they work, such as <Link href="/plumbing-answering-service" className="text-primary-600 hover:underline">plumbers</Link>, <Link href="/hvac-answering-service" className="text-primary-600 hover:underline">HVAC</Link> and <Link href="/garage-door-answering-service" className="text-primary-600 hover:underline">garage door</Link> companies, and offices whose calls go to voicemail after hours.</p>
                            <p className="text-slate-600 mt-2">Ours is <a href={CREW_URL('who-uses')} data-offer="crew" className="text-primary-600 hover:underline font-medium">Dooza Crew</a>: its agents take phone calls too, included in your Crew plan, so there is no separate phone service to buy.</p>
                        </section>

                        {/* Section 7: The Real Cost */}
                        <section id="real-cost" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Real Cost of Missed Calls</h2>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl mb-8">
                                <h3 className="font-bold text-slate-900 mb-4 text-lg">The Math Behind Missed Calls (illustrative example; use your own numbers)</h3>
                                <div className="space-y-3">
                                    {[
                                        { label: "Missed calls/week (example)", value: "6" },
                                        { label: "If none leave a voicemail", value: "up to 6 lost leads" },
                                        { label: "Value of a new customer (example)", value: "$200" },
                                        { label: "Work at risk per month (4 weeks, example)", value: "up to $4,800", highlight: true }
                                    ].map((item, idx) => (
                                        <div key={idx} className={`flex justify-between items-center py-2 px-4 rounded-lg ${item.highlight ? 'bg-primary-100 font-bold text-primary-800' : 'bg-white'}`}>
                                            <span className="text-slate-700">{item.label}</span>
                                            <span className={item.highlight ? 'text-primary-800 text-xl' : 'text-slate-900 font-medium'}>{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="bg-red-50 border border-red-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-red-600 mb-2">Full salary</div>
                                    <p className="text-sm text-slate-700 font-medium">Human Receptionist</p>
                                    <p className="text-xs text-slate-500 mt-1">Salary + benefits + training</p>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl text-center">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">$720/mo</div>
                                    <p className="text-sm text-slate-700 font-medium">Ruby Receptionist</p>
                                    <p className="text-xs text-slate-500 mt-1">200 minutes/month plan (<a href="https://www.ruby.com/pricing/" target="_blank" rel="noopener noreferrer" className="underline">ruby.com/pricing</a>, checked Oct 6, 2026)</p>
                                </div>
                                <div className="bg-green-100 border-2 border-green-300 p-6 rounded-xl text-center ring-2 ring-green-400 ring-offset-2">
                                    <div className="text-3xl font-bold text-green-700 mb-2">$49/mo</div>
                                    <p className="text-sm text-green-800 font-medium">Dooza Crew</p>
                                    <p className="text-xs text-green-600 mt-1">Per organization, after a 7-day free trial (no card needed). Phone calls included.</p>
                                </div>
                            </div>

                            <p className="text-lg font-bold text-slate-900 text-center">
                                Run your own numbers: missed calls a week × what a new customer is worth to you.
                            </p>
                        </section>

                        {/* Section 8: Getting Started */}
                        <section id="getting-started" className="scroll-mt-28">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Start Capturing Leads in 3 Steps</h2>

                            <div className="space-y-4 mb-8">
                                {[
                                    {
                                        step: "1",
                                        title: "Sign Up",
                                        desc: "Start the 7-day free trial (no card needed), then $49 per organization per month. Or book a free call first if you have questions."
                                    },
                                    {
                                        step: "2",
                                        title: "Tell Your Agent",
                                        desc: "Chat with your lead agent on web or phone and tell it what you need."
                                    },
                                    {
                                        step: "3",
                                        title: "Calls Included",
                                        desc: "Crew agents take phone calls too. It is included in your Crew plan, so there is no separate phone service to buy."
                                    }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4 items-start bg-white border border-slate-200 p-5 rounded-xl hover:border-primary-200 transition-colors">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold shrink-0">{item.step}</div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="prose md:prose-lg text-slate-600 mb-8">
                                <p>
                                    <a href={CREW_URL('hear')} data-offer="crew" className="text-primary-600 hover:underline font-medium">Try Dooza Crew free for 7 days &rarr;</a>
                                    <br />
                                    <Link href="/blog/automate-business-processes" className="text-primary-600 hover:underline font-medium">Learn how to automate your entire business &rarr;</Link>
                                </p>
                            </div>

                            <div className="bg-primary-50 border border-primary-100 p-8 rounded-xl text-center">
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Fire Your Voicemail?</h3>
                                <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                                    Stop losing callers to voicemail. Crew agents take phone calls too, included in your Crew plan: $49 per organization per month after a 7-day free trial (no card needed).
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a href={CREW_URL('final')} data-offer="crew" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all">
                                        Try Dooza Crew free <ArrowRight className="w-4 h-4" />
                                    </a>
                                    <a href={CAL_BOOKING_URL} onClick={handleAction} className="inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-bold hover:bg-primary-50 transition-all">
                                        <Calendar className="w-4 h-4" /> Book a free call
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Section 9: FAQ */}
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

                        {/* Sources Section */}
                        <section className="scroll-mt-28 border-t border-slate-200 pt-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Sources & References</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-slate-800 mb-3">Vendor pricing pages (prices checked Oct 6–14, 2026; free plans, trials and "Best for" checked Oct 21, 2026)</h4>
                                    <ul className="space-y-2 text-sm text-slate-600 mb-6">
                                        {RECEPTIONIST_VENDORS.map((v) => (
                                            <li key={v.url}>• <a href={v.url} target="_blank" rel="noopener noreferrer nofollow" className="text-primary-600 hover:underline">{v.name}</a></li>
                                        ))}
                                        <li>• <a href={CREW_URL('sources')} data-offer="crew" className="text-primary-600 hover:underline">Dooza Crew (ours)</a></li>
                                    </ul>
                                    <h4 className="font-semibold text-slate-800 mb-3">Virtual Receptionist Pricing</h4>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• <a href="https://www.ruby.com/plans-and-pricing/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Ruby Receptionist — Virtual receptionist pricing</a></li>
                                        <li>• <a href="https://smith.ai/pricing/receptionists" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Smith.ai — Virtual receptionist comparison</a></li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <RelatedPosts currentSlug="best-ai-receptionist" category="AI Automation" tags={['AI Receptionist', 'Lead Capture', 'Small Business']} />
                    </div>

                    <div className="hidden xl:block w-64 shrink-0" aria-hidden="true"></div>
                </div>
            </div>

            <Footer />
            <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
        </div>
    );
}
