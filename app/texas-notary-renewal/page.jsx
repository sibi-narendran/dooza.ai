import Link from 'next/link';
import TalkNowStrip from '@/components/TalkNowStrip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { REPLY_EMAIL } from '@/lib/contact';
import { NOTARY_RENEWAL_PAY_URL } from '@/lib/offers';

// Texas notary renewal offer page (Odysseus 2026-10-16 02:15; facts: icp_factory/FACTCHECK_2026-10-15 + SOS pages checked 10-16).
// Reply-stage page: Orion links it after a yes. Truth rules: they buy the bond, sign, submit and pay the state; we never file, log in or act as the SOS; no SSN/DL.
const PATH = '/texas-notary-renewal';
const TITLE = 'Texas Notary Renewal Checklist: First One Free';
const DESCRIPTION = 'Texas notary commission expiring? We send a step-by-step renewal checklist with your dates: education course, surety bond, SOSPortal application and oath. First renewal free, then $20.';
const UPDATED_LABEL = 'October 16, 2026';
const BOOK = '/book?utm_source=website&utm_medium=cta&utm_campaign=booking&utm_content=texas-notary-renewal';
const START = `mailto:${REPLY_EMAIL}?subject=${encodeURIComponent('Free notary renewal')}&body=${encodeURIComponent('Name as on your commission:\nCommission expiry date:\nOther notaries in your office renewing soon (optional):')}`;

const STEPS = [
    ['1. Education requirement', 'Complete the notary education requirement through the SOS Notary Portal. We tell you where to find it and when to do it.'],
    ['2. Surety bond', 'Buy a Texas notary surety bond from a licensed bonding company. They complete the proof of bond form. We list what to ask for.'],
    ['3. Application in SOSPortal', 'You submit the renewal application and pay the state fee in SOSPortal yourself. We tell you which answers to have ready.'],
    ['4. Oath', 'Sign your new commission under oath in front of another notary or authorized official. You can’t notarize your own commission.'],
];

const faqItems = [
    {
        question: 'How do I renew my Texas notary commission?',
        answer: 'Through the Secretary of State’s SOSPortal: complete the notary education requirement in the SOS Notary Portal, get proof of a notary surety bond from a licensed bonding company, submit the application and pay the state fee in SOSPortal, then sign your new commission under oath in front of another notary. Texas notary commissions last four years.',
    },
    {
        question: 'What does Dooza do, exactly?',
        answer: 'We send you the renewal steps in order, with your own dates, and answer questions by email until you are done. You buy the bond, sign, submit and pay the state yourself. We never log in to your SOSPortal account and never ask for your SSN or driver’s license number.',
    },
    {
        question: 'How much does it cost?',
        answer: 'Your first renewal is free. After that it is $20 per renewal, and $20 for each other notary in your office. State and bond fees are separate and you pay them directly.',
    },
    {
        question: 'Are you the Secretary of State or a bonding company?',
        answer: 'No. Dooza is a small private company (Adam Laboratory Inc., a Delaware corporation). We are not the Texas Secretary of State, not a bonding or insurance company and not a law firm, and we don’t file anything for you.',
    },
    {
        question: 'Can you renew several notaries in one office?',
        answer: 'Yes. Send the names and expiry dates and each person gets their own checklist and dates. The first renewal is free, then $20 each.',
    },
    {
        question: 'What happens if my commission expires?',
        answer: 'Start before the expiry date. If you decide not to renew, destroy your seal and turn in your record book to your county clerk’s office (Texas SOS notary FAQ).',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Texas notary renewal checklist',
        serviceType: 'Notary commission renewal help',
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        areaServed: { '@type': 'State', name: 'Texas' },
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: { '@type': 'Offer', price: '20', priceCurrency: 'USD', description: 'Per renewal. First renewal free.' },
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
            { '@type': 'ListItem', position: 2, name: 'Texas Notary Renewal', item: `${SITE_URL}${PATH}` },
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

function Cta() {
    return (
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a href={START} data-offer="notary-renewal" className="rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
                Get my free checklist
            </a>
            <Link href={BOOK} className="rounded-xl border border-primary-300 px-6 py-3 font-semibold text-primary-700 hover:bg-primary-50">
                Ask on a call
            </Link>
            <span className="text-sm text-slate-600">First renewal free, then $20.</span>
        </div>
    );
}

export default function TexasNotaryRenewalPage() {
    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-slate-50">
                <Navbar />
                <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <span className="mb-4 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                            For Texas notaries · Updated {UPDATED_LABEL}
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Texas notary renewal, step by step, first one free</h1>
                        <p className="mt-5 text-lg text-slate-700">
                            <strong>Your commission is about to expire? We send you the renewal steps in order, with your own dates: the education requirement, the surety bond, the SOSPortal application and the oath.</strong>{' '}
                            You do the portal steps yourself; we keep you on track. Your first renewal is free, then $20.
                        </p>
                        <div className="mt-8">
                            <Cta />
                        </div>

                        <section className="prose prose-slate mt-14 max-w-none">
                            <h2>The four steps to renew</h2>
                            <p>From the Texas Secretary of State’s notary pages. Your checklist puts your dates on each one.</p>
                        </section>
                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[560px] text-left text-sm">
                                <tbody>
                                    {STEPS.map(([step, what]) => (
                                        <tr key={step} className="border-b border-slate-100 align-top">
                                            <td className="px-4 py-3 font-semibold text-slate-900">{step}</td>
                                            <td className="px-4 py-3 text-slate-700">{what}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>What we never do</h2>
                            <ul>
                                <li>File your application or pay the state for you.</li>
                                <li>Log in to your SOSPortal account.</li>
                                <li>Ask for your SSN or driver’s license number.</li>
                                <li>Sell bonds or act for the Secretary of State.</li>
                            </ul>

                            <h2>What it costs</h2>
                            <ul>
                                <li>First renewal free.</li>
                                <li>Then $20 per renewal, and $20 for each other notary in your office.</li>
                                <li>The state fee and the bond are separate; you pay them directly.</li>
                            </ul>
                            <p>
                                Renewing more than one notary? <a href={NOTARY_RENEWAL_PAY_URL} data-offer="notary-renewal" className="font-semibold text-primary-700 underline">Pay $20 per renewal here</a> after your free one.
                            </p>

                            <h2>Who is behind this</h2>
                            <p>
                                Dooza, a small US company (Adam Laboratory Inc., a Delaware corporation) founded by Sibi Narendran. We help small businesses with dated paperwork, using software including AI. We are not the Secretary of State, a bonding company or a law firm.
                            </p>
                        </section>

                        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                            <h2 className="text-2xl font-bold text-slate-900">Start your free renewal</h2>
                            <p className="mt-2 text-slate-700">
                                Email <a href={START} className="font-semibold text-primary-700 underline">{REPLY_EMAIL}</a> with your name and commission expiry date, or book a free 30-minute call.
                            </p>
                            <div className="mt-5">
                                <Cta />
                            </div>
                        </div>

                        <section className="mt-12">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>
                    </div>
                    <TalkNowStrip source="texas-notary-renewal" offer="notary-renewal" />
                </main>
                <Footer />
            </div>
        </>
    );
}
