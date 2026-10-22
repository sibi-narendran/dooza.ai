import Link from 'next/link';
import HearItFirst from '@/components/HearItFirst';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { compareReceptionistCosts } from '@/lib/receptionistPricing';
import { recepPayUrl } from '@/lib/aiReceptionistData';

const PATH = '/hvac-answering-service';
const PAY_URL = recepPayUrl('hvac-answering-service');
const TITLE = 'HVAC Answering Service: AI vs Human Prices Compared (2026)';

// Example HVAC shop: 120 calls a month, about 4 minutes each (service calls run longer than "what are your hours").
const SCENARIO = { calls: 120, avgMinutes: 4, uniqueShare: 1 };
const rows = compareReceptionistCosts(SCENARIO).filter((r) => r.result);
const ai = rows.filter((r) => r.kind === 'ai');
const human = rows.filter((r) => r.kind === 'human');
const money = (n) => `$${n.toLocaleString('en-US', Number.isInteger(n) ? {} : { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const aiRange = `${money(ai[0].result.cost)} to ${money(ai[ai.length - 1].result.cost)}`;
const humanRange = `${money(human[0].result.cost)} to ${money(human[human.length - 1].result.cost)}`;

const DESCRIPTION = `What an HVAC answering service costs for 120 calls a month: ${ai.length} AI receptionists and ${human.length} human answering services at list prices checked Oct 2026, plus Dooza at $149/month.`;

export const metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website', images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'HVAC answering service prices compared' }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/logo.png`] },
};

const faqItems = [
    {
        question: 'How much does an HVAC answering service cost?',
        answer: `For an example HVAC company taking 120 calls a month at about 4 minutes each (480 minutes), AI answering services cost ${aiRange} a month and human answering services cost ${humanRange} a month at list prices checked October 6–14, 2026. Dooza’s AI answering service is $149 a month for up to 500 minutes.`,
    },
    {
        question: 'AI or human answering service for an HVAC company?',
        answer: 'A human service handles judgment calls and upset customers better and costs several times more per minute. An AI service is cheaper and picks up nights and weekends without per-minute human rates. One setup: AI for overflow and after hours, a person for the office day.',
    },
    {
        question: 'What does the Dooza HVAC answering service do?',
        answer: 'It answers the calls you miss, asks the questions you give it (address, what is wrong, how urgent), takes the message and emails it to you with the call transcript. It does not book onto your calendar or dispatch software, does not send texts, and takes one call at a time.',
    },
    {
        question: 'Is there a contract?',
        answer: 'No. $149 a month for up to 500 minutes, then $0.30 a minute, month to month, paid up front. Cancel within 14 days of your first charge for a full refund.',
    },
    {
        question: 'Does it work with my phone?',
        answer: 'It works with any line that can forward calls: you forward your business line or your cell when you can’t answer. We confirm your go-live date at intake.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza HVAC Answering Service',
        serviceType: 'AI answering service for HVAC companies',
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
            { '@type': 'ListItem', position: 2, name: 'AI Receptionist', item: `${SITE_URL}/ai-receptionist` },
            { '@type': 'ListItem', position: 3, name: 'HVAC Answering Service', item: `${SITE_URL}${PATH}` },
        ],
    },
];

const primaryButton = 'inline-flex w-full items-center justify-center rounded-xl bg-primary-700 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-primary-800 sm:w-auto';
const secondaryButton = 'inline-flex w-full items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:border-primary-600 hover:text-primary-800 sm:w-auto';

export default function HvacAnsweringServicePage() {
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
                            <span className="mb-4 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">Prices checked October 6–14, 2026</span>
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">HVAC Answering Service: What It Costs, AI vs Human</h1>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">
                                <strong>For an HVAC company taking 120 calls a month at about 4 minutes each, an AI answering service costs {aiRange} a month and a human answering service costs {humanRange}, at public list prices.</strong>{' '}
                                The full table is below. Dooza’s AI answering service is $149 a month for up to 500 minutes: it answers the calls you miss and emails you each message with the transcript.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} className={primaryButton}>Get it: $149/month</a>
                                <a href="/book" className={secondaryButton}>Book a free call first</a>
                            </div>
                            <p className="mt-4 text-sm text-slate-600">Month to month. Cancel within 14 days of your first charge for a full refund.</p>
                            <HearItFirst source="hvac-answering-service" />
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">The calls an HVAC company loses to voicemail</h2>
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                                <li><strong>The after-hours no-cool or no-heat call.</strong> The caller wants someone tonight and will try the next company if nobody answers.</li>
                                <li><strong>The replacement estimate.</strong> A homeowner pricing a new system calls several contractors in a row.</li>
                                <li><strong>The tune-up or maintenance call</strong> that comes in while every tech is on a job.</li>
                            </ul>
                            <p className="mt-4 text-slate-700">An answering service, AI or human, gets the address, the problem and how urgent it is, so you call back with what you need.</p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">HVAC answering service prices: 120 calls a month</h2>
                            <p className="mt-3 text-slate-700">
                                120 calls at about 4 minutes each is 480 minutes. Each row is the cheapest published plan that covers that usage plus published overage, from the vendor’s own pricing page (linked), checked October 6–14, 2026. We sell one of these, so check the pricing pages yourself. Change the numbers in the <Link href="/ai-receptionist-cost-calculator" className="text-primary-700 underline">cost calculator</Link>. Other trades: <Link href="/plumbing-answering-service" className="text-primary-700 underline">plumbing</Link>, <Link href="/garage-door-answering-service" className="text-primary-700 underline">garage door</Link> and <Link href="/window-tint-answering-service" className="text-primary-700 underline">window tint</Link> answering service prices.
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
                            <p className="mt-3 text-sm text-slate-600">Services that publish no price at this volume are left out. For a full feature-by-feature list see <Link href="/blog/best-ai-receptionist" className="text-primary-700 underline">the 20 AI answering services compared</Link>. Not trade-specific? See the <Link href="/ai-answering-service-for-small-business" className="text-primary-700 underline">AI answering service for small business</Link> ($149/mo, 500 minutes).</p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">What Dooza’s HVAC answering service does, and doesn’t</h2>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl border border-primary-100 bg-primary-50 p-5">
                                    <h3 className="font-bold text-slate-900">Included</h3>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                                        <li>Answers the calls you miss</li>
                                        <li>Asks your questions: address, what is wrong, how urgent</li>
                                        <li>Emails you each message with the call transcript and a link to the recording (callers hear that the call is recorded)</li>
                                        <li>$149/month for up to 500 minutes; $0.30/min after</li>
                                    </ul>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                                    <h3 className="font-bold text-slate-900">Not included</h3>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                                        <li>Booking onto your calendar or dispatch software</li>
                                        <li>Text messages</li>
                                        <li>Two calls at once (the second caller is asked to call back)</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-4 text-slate-700"><Link href="/ai-receptionist?v=hvac" className="text-primary-700 underline">Hear a demo call to an HVAC company</Link>.</p>
                        </section>

                        <section className="mt-14">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>

                        <section className="mt-14 rounded-2xl bg-slate-950 p-8 text-center text-white">
                            <h2 className="text-2xl font-bold">Stop losing no-cool calls to voicemail</h2>
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
