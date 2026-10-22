// /ai-admin-assistant: landing page for Dooza Managed (OFFERS.md L2), the general small-business offer.
// COMMON page (Sibi 10-15): Managed only, no ICP offers. Titles mirror buyer questions in learned/knowledge/ai_questions.txt v4
// (Ahrefs 2026-04: cited titles match the prompt). VA prices from lib/octoberPosts/virtual-assistant-cost-small-business.js (checked 2026-10-14).
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import OfferCards from '@/components/OfferCards';
import TalkNowStrip from '@/components/TalkNowStrip';
import ManagedTaskFlow from '@/components/ManagedTaskFlow';
import { MANAGED_PAY_URL } from '@/lib/offers';
import { SITE_URL } from '@/lib/site';

const PATH = '/ai-admin-assistant';
const TITLE = 'AI Admin Assistant for Small Business Email and Documents';
const DESCRIPTION = 'Dooza Managed: email us your admin tasks (emails, documents, spreadsheets, research). AI does the work, a person checks it, done by the next business day. $200/month, first 7 days free.';
const UPDATED_LABEL = 'October 15, 2026';
const BOOK = '/book?utm_source=website&utm_medium=page&utm_content=ai-admin-assistant';
const VA_COST = '/blog/virtual-assistant-cost-small-business';

const faqItems = [
    {
        question: 'What is an AI admin assistant for a small business?',
        answer: 'A service that does your written admin work with AI: email drafts, documents and forms, spreadsheets and data entry, and research. With Dooza Managed you email the task, AI does the work, a person checks it, and it comes back by the next business day. $200 a month, first 7 days free.',
    },
    {
        question: 'Is there a virtual assistant service with a free trial for small businesses?',
        answer: 'Yes. Dooza Managed has a free first 7 days, then costs $200 a month, cancel anytime. It covers written admin work (emails, documents, spreadsheets, research). It does not answer phones or log in to your accounts.',
    },
    {
        question: 'What is a cheaper alternative to hiring a virtual assistant for admin work?',
        answer: 'For written admin work, an AI-plus-person service like Dooza Managed costs $200 a month. Published US virtual assistant plans start at $390 a month for 10 hours (Time etc) and most run $599 to $2,600 a month (prices checked October 14, 2026). If you also need calls, scheduling or account logins, a human VA is the better fit.',
    },
    {
        question: 'How much does Dooza Managed cost?',
        answer: '$200 a month after a free first 7 days. You start by card, no call needed, and can cancel anytime. We take a limited number of new businesses each month (3 this month) so the work stays on time.',
    },
    {
        question: 'How do I send tasks, and how fast are they done?',
        answer: 'By email. Tasks are done by the next business day, and you get a weekly report of what got done.',
    },
    {
        question: 'What will Dooza Managed not do?',
        answer: 'It is written admin only: no phone calls or texts for you, no logins to your accounts or portals, no payments or money movement, and no legal, tax or insurance advice.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza Managed',
        serviceType: 'AI admin assistant service for small businesses',
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        areaServed: 'US',
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: { '@type': 'Offer', price: '200', priceCurrency: 'USD', description: 'Per month, after a free first 7 days. Cancel anytime.' },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'AI Admin Assistant', item: `${SITE_URL}${PATH}` },
        ],
    },
];

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: `${TITLE} | Dooza`, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website' },
    twitter: { card: 'summary', title: `${TITLE} | Dooza`, description: DESCRIPTION },
};

const ROWS = [
    { who: 'Dooza Managed', price: '$200 a month', unit: 'Written admin tasks by email, done next business day', src: null },
    { who: 'Time etc (US VA service)', price: '$390 a month', unit: '10 hours', src: 'https://timeetc.com/pricing/' },
    { who: 'Zirtual (US VA service)', price: '$599 a month', unit: '12 hours', src: 'https://www.zirtual.com/plans-pricing/' },
    { who: 'Boldly (US VA service)', price: '$2,600 a month', unit: '40 hours', src: 'https://boldly.com/pricing/' },
    { who: 'Upwork freelance VA', price: '$10 to $20 an hour', unit: 'Median rates; you hire and manage', src: 'https://www.upwork.com/hire/virtual-assistants/cost/' },
    { who: 'In-house admin assistant', price: '$23.23 an hour', unit: 'US median wage, before taxes and benefits (BLS, May 2025)', src: 'https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm' },
];

export default function AiAdminAssistantPage() {
    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-warm text-slate-900 font-sans">
                <Navbar />
                <main>
                    <section className="pt-32 pb-10 md:pt-40">
                        <div className="mx-auto max-w-3xl px-4">
                            <h1 className="font-serif text-4xl font-bold leading-tight text-slate-900 md:text-5xl">An AI admin assistant for your emails, documents and spreadsheets</h1>
                            <p className="mt-6 text-lg leading-relaxed text-slate-700">
                                <strong>Dooza Managed is an admin assistant service for small businesses: you email us a task, AI does the work, a real person checks it, and it is back by the next business day. It costs $200 a month, and the first 7 days are free.</strong>
                            </p>
                            <p className="mt-4 text-slate-600">Updated {UPDATED_LABEL}.</p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a href={MANAGED_PAY_URL} data-offer="managed" data-source="ai-admin-assistant-hero" className="rounded-full bg-primary-700 px-7 py-3 text-center font-bold text-white hover:bg-primary-800">Start 7 days free</a>
                                <a href={BOOK} className="rounded-full border border-slate-300 bg-white px-7 py-3 text-center font-semibold text-slate-800 hover:border-slate-400">Book a free 30-min call first</a>
                            </div>
                            <ManagedTaskFlow className="mt-10" />
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto grid max-w-3xl gap-10 px-4 md:grid-cols-2">
                            <div>
                                <h2 className="font-serif text-2xl font-bold text-slate-900">What it does</h2>
                                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                                    <li>Email drafts and follow-up sequences</li>
                                    <li>Documents and forms</li>
                                    <li>Spreadsheets and data entry</li>
                                    <li>Research</li>
                                    <li>A weekly report of what got done</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-serif text-2xl font-bold text-slate-900">What it does not do</h2>
                                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                                    <li>Phone calls or texts for you</li>
                                    <li>Logins to your accounts or portals</li>
                                    <li>Payments or moving money</li>
                                    <li>Legal, tax or insurance advice</li>
                                </ul>
                                <p className="mt-3 text-sm text-slate-600">Need those? A human virtual assistant is the better fit.</p>
                            </div>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-2xl font-bold text-slate-900">How it works</h2>
                            <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
                                <li>Start by card. The first 7 days are free.</li>
                                <li>Email us a task with what you need and any files.</li>
                                <li>AI does the work, a person checks it, and you get it back by the next business day.</li>
                            </ol>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-2xl font-bold text-slate-900">Cost compared with a virtual assistant</h2>
                            <p className="mt-3 text-slate-700">Prices read on each provider’s own page on October 14, 2026. A VA also covers calls and scheduling, which Dooza Managed does not. Full breakdown: <a href={VA_COST} className="font-semibold text-primary-700 underline">virtual assistant cost for a small business</a>.</p>
                            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 text-slate-700">
                                        <tr><th className="px-4 py-3">Option</th><th className="px-4 py-3">Price</th><th className="px-4 py-3">What you get</th></tr>
                                    </thead>
                                    <tbody>
                                        {ROWS.map((r) => (
                                            <tr key={r.who} className="border-t border-slate-100 align-top">
                                                <td className="px-4 py-3 font-semibold text-slate-900">{r.src ? <a href={r.src} rel="noopener" target="_blank" className="underline">{r.who}</a> : r.who}</td>
                                                <td className="px-4 py-3 text-slate-800">{r.price}</td>
                                                <td className="px-4 py-3 text-slate-600">{r.unit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section className="pb-12 px-4">
                        <OfferCards source="ai-admin-assistant" only="managed" />
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="mb-6 font-serif text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </div>
                    </section>
                    <TalkNowStrip source="ai-admin-assistant" />
                </main>
                <Footer />
            </div>
        </>
    );
}
