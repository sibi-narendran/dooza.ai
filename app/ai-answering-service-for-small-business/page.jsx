import Link from 'next/link';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { compareReceptionistCosts } from '@/lib/receptionistPricing';

const PATH = '/ai-answering-service-for-small-business';
const PAY_URL = 'https://buy.stripe.com/eVqcN51C31ZX0yEfvv3AY19?client_reference_id=recep-ai-answering-service-for-small-business';
const TITLE = 'AI Answering Service for Small Business: $149/mo, 500 Min';
const DESCRIPTION = 'Dooza answers your calls when you can’t, takes the message and emails it to you with the transcript. $149/month for up to 500 minutes, $0.30/min after, month to month.';

export const metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website', images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza AI answering service' }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/logo.png`] },
};

// 500 minutes a month = about 166 calls of 3 minutes. Server-rendered so the comparison is in the HTML.
const SCENARIO = { calls: 166, avgMinutes: 3, uniqueShare: 1 };
const rows = compareReceptionistCosts(SCENARIO).filter((r) => r.result);
const money = (n) => `$${n.toLocaleString('en-US', Number.isInteger(n) ? {} : { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

const faqItems = [
    {
        question: 'How much does an AI answering service cost for a small business?',
        answer: 'Entry plans run from about $25 to $200 a month; human answering services start at about $49 (pay as you go) to $350 a month (public prices checked October 6–14, 2026). Dooza’s AI answering service is $149 a month for up to 500 minutes, then $0.30 a minute, month to month.',
    },
    {
        question: 'What does the Dooza AI answering service do?',
        answer: 'It answers your calls when you can’t, asks the caller the questions you give it, takes the message, and emails it to you with the call transcript.',
    },
    {
        question: 'Does it book appointments or send text messages?',
        answer: 'No. It does not book onto calendars, send texts, sync to a CRM or record calls. If you need calendar booking, pick a booking-capable vendor from our comparison of 20 services.',
    },
    {
        question: 'What happens if two people call at once?',
        answer: 'It takes one call at a time. A second caller at the same moment is asked to call back.',
    },
    {
        question: 'Is there a contract or a free trial?',
        answer: 'No contract: it is month to month, and you pay the first month up front. There is no free trial, but you can cancel within 14 days of your first charge for a full refund. If you want to ask questions first, book a free call.',
    },
    {
        question: 'How fast can it go live?',
        answer: 'We confirm your go-live date at intake, once we have your business details and the questions you want callers asked.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza AI Answering Service',
        serviceType: 'AI phone answering service for small businesses',
        description: DESCRIPTION,
        url: `${SITE_URL}${PATH}`,
        areaServed: 'US',
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: {
            '@type': 'Offer',
            name: 'AI answering service, monthly',
            price: '149',
            priceCurrency: 'USD',
            description: 'Up to 500 minutes a month, then $0.30 per minute. Month to month, paid up front. Cancel within 14 days of your first charge for a full refund.',
            url: PAY_URL,
            availability: 'https://schema.org/InStock',
        },
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
            { '@type': 'ListItem', position: 2, name: 'AI Answering Service for Small Business', item: `${SITE_URL}${PATH}` },
        ],
    },
];

const primaryButton = 'inline-flex w-full items-center justify-center rounded-xl bg-primary-700 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-primary-800 sm:w-auto';
const secondaryButton = 'inline-flex w-full items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:border-primary-600 hover:text-primary-800 sm:w-auto';

export default function AiAnsweringServicePage() {
    return (
        <BookingModalProvider>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-white">
                <Navbar />
                <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <section className="text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">AI Answering Service for Small Business</h1>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">
                                <strong>Dooza answers your calls when you can’t, takes the caller’s message and emails it to you with the transcript. $149 a month for up to 500 minutes, then $0.30 a minute. Month to month.</strong>
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} className={primaryButton}>Get it: $149/month</a>
                                <a href="/book" className={secondaryButton}>Book a free call first</a>
                            </div>
                            <p className="mt-4 text-sm text-slate-600">Paid up front, no contract. Cancel within 14 days of your first charge for a full refund. We confirm your go-live date at intake.</p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">What you get, and what you don’t</h2>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl border border-primary-100 bg-primary-50 p-5">
                                    <h3 className="font-bold text-slate-900">Included</h3>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                                        <li>Answers when you can’t pick up</li>
                                        <li>Asks the questions you give it</li>
                                        <li>Takes the caller’s message</li>
                                        <li>Emails you each message with the call transcript and a link to the recording (callers hear that the call is recorded)</li>
                                        <li>Up to 500 minutes a month; $0.30/min after</li>
                                    </ul>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                                    <h3 className="font-bold text-slate-900">Not included</h3>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                                        <li>Calendar booking</li>
                                        <li>Text messages</li>
                                        <li>CRM integrations</li>
                                        <li>Two calls at once (the second caller is asked to call back)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">How it works</h2>
                            <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
                                <li><strong>Pay the first month</strong> ($149) with the link above.</li>
                                <li><strong>Intake:</strong> you give us your business details and the questions callers should be asked. We confirm your go-live date.</li>
                                <li><strong>Calls answered:</strong> when you can’t pick up, it answers, and each message lands in your email with the transcript.</li>
                            </ol>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">What 500 minutes a month costs elsewhere</h2>
                            <p className="mt-3 text-slate-700">
                                500 minutes is about 166 calls of 3 minutes. Here is what each service in our <Link href="/blog/best-ai-receptionist" className="text-primary-700 underline">comparison of 20 answering services</Link> would charge for that, at public list prices checked October 6–14, 2026 (cheapest plan that covers the usage, plus published overage). We sell one of these, so check the linked pricing pages yourself.
                            </p>
                            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="px-3 py-3 text-left font-bold text-slate-900">Service</th>
                                            <th className="px-3 py-3 text-left font-bold text-slate-900">Type</th>
                                            <th className="px-3 py-3 text-left font-bold text-slate-900">Plan</th>
                                            <th className="px-3 py-3 text-left font-bold text-slate-900">Monthly cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-slate-200 bg-primary-50">
                                            <td className="px-3 py-3 font-semibold text-slate-900">Dooza <span className="text-xs font-normal text-slate-500">(ours)</span></td>
                                            <td className="px-3 py-3">AI</td>
                                            <td className="px-3 py-3">Monthly</td>
                                            <td className="px-3 py-3 font-semibold">$149</td>
                                        </tr>
                                        {rows.map((r) => (
                                            <tr key={r.name} className="border-t border-slate-200">
                                                <td className="px-3 py-3 font-medium text-slate-900"><a href={r.url} target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">{r.name}</a></td>
                                                <td className="px-3 py-3">{r.kind === 'ai' ? 'AI' : 'Human'}</td>
                                                <td className="px-3 py-3">{r.result.plan}</td>
                                                <td className="px-3 py-3">{money(r.result.cost)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-3 text-sm text-slate-600">
                                Services that publish no price at this volume are left out. Try your own numbers in the <Link href="/ai-receptionist-cost-calculator" className="text-primary-700 underline">AI receptionist cost calculator</Link>. Trade-specific prices: <Link href="/hvac-answering-service" className="text-primary-700 underline">HVAC</Link>, <Link href="/plumbing-answering-service" className="text-primary-700 underline">plumbing</Link> and <Link href="/garage-door-answering-service" className="text-primary-700 underline">garage door</Link> answering services.
                            </p>
                        </section>

                        <section className="mt-14">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>

                        <section className="mt-14 rounded-2xl bg-slate-950 p-8 text-center text-white">
                            <h2 className="text-2xl font-bold">Stop sending callers to voicemail</h2>
                            <p className="mt-3 text-slate-300">$149/month for up to 500 minutes. Month to month. Cancel within 14 days of your first charge for a full refund.</p>
                            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} className={primaryButton}>Get it: $149/month</a>
                                <a href="/book" className="inline-flex w-full items-center justify-center rounded-xl border-2 border-white px-6 py-4 font-bold text-white sm:w-auto">Book a free call</a>
                            </div>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </BookingModalProvider>
    );
}
