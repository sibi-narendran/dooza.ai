import Link from 'next/link';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { compareReceptionistCosts } from '@/lib/receptionistPricing';
import { crewSignupUrl } from '@/lib/crewUrl';

const PATH = '/garage-door-answering-service';
const PAY_URL = crewSignupUrl('garage-door-answering-service-cta');
const TITLE = 'Garage Door Answering Service: AI vs Human Prices (2026)';

// Example garage door company: 100 calls a month, about 3 minutes each (stuck door, broken spring, new door quote).
const SCENARIO = { calls: 100, avgMinutes: 3, uniqueShare: 1 };
const rows = compareReceptionistCosts(SCENARIO).filter((r) => r.result);
const ai = rows.filter((r) => r.kind === 'ai');
const human = rows.filter((r) => r.kind === 'human');
const money = (n) => `$${n.toLocaleString('en-US', Number.isInteger(n) ? {} : { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const aiRange = `${money(ai[0].result.cost)} to ${money(ai[ai.length - 1].result.cost)}`;
const humanRange = `${money(human[0].result.cost)} to ${money(human[human.length - 1].result.cost)}`;

const DESCRIPTION = `What a garage door answering service costs for 100 calls a month: ${ai.length} AI receptionists and ${human.length} human answering services at list prices checked Oct 2026, plus Dooza Crew, free to try.`;

export const metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website', images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Garage door answering service prices compared' }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/logo.png`] },
};

const faqItems = [
    {
        question: 'How much does a garage door answering service cost?',
        answer: `For an example garage door company taking 100 calls a month at about 3 minutes each (300 minutes), AI answering services cost ${aiRange} a month and human answering services cost ${humanRange} a month at list prices checked October 6–14, 2026. Dooza Crew is free to try, and Crew agents take phone calls too.`,
    },
    {
        question: 'AI or human answering service for a garage door company?',
        answer: 'A human service handles judgment calls and upset customers better and costs several times more per minute. An AI service is cheaper and picks up nights and weekends without per-minute human rates. One setup: AI for overflow and after hours, a person for the office day.',
    },
    {
        question: 'Can Dooza Crew take calls for a garage door business?',
        answer: 'Yes. Crew agents take phone calls too. It is included in your Crew plan, so there is no separate phone service to buy. Crew agents are AI agents you chat with on web or phone; they browse the web and write files in their own workspace, and before an agent sends or pays it asks you in chat (Approve / Edit / Reject).',
    },
    {
        question: 'What should an answering service ask a garage door caller?',
        answer: 'The address, a callback number, what the door is doing (won’t open, won’t close, off its track, loud bang from a broken spring), whether a car is stuck inside or the house is left open, and whether they want a repair or a quote on a new door or opener. With those answers you know on the callback whether it is tonight’s job or a booked visit.',
    },
    {
        question: 'How much does Dooza Crew cost?',
        answer: 'free to try (no card needed).',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza Crew',
        serviceType: 'AI agents that take phone calls and do web work for garage door businesses',
        description: DESCRIPTION,
        url: `${SITE_URL}${PATH}`,
        areaServed: 'US',
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: {
            '@type': 'Offer',
            name: 'Dooza Crew, free to try',
            price: '0',
            priceCurrency: 'USD',
            description: 'Free to try. No card needed. Phone calls are included.',
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
            { '@type': 'ListItem', position: 3, name: 'Garage Door Answering Service', item: `${SITE_URL}${PATH}` },
        ],
    },
];

const primaryButton = 'inline-flex w-full items-center justify-center rounded-xl bg-primary-700 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-primary-800 sm:w-auto';
const secondaryButton = 'inline-flex w-full items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:border-primary-600 hover:text-primary-800 sm:w-auto';

export default function GarageDoorAnsweringServicePage() {
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
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Garage Door Answering Service: What It Costs, AI vs Human</h1>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">
                                <strong>For a garage door company taking 100 calls a month at about 3 minutes each, an AI answering service costs {aiRange} a month and a human answering service costs {humanRange}, at public list prices.</strong>{' '}
                                The full table is below. Dooza Crew is free to try, and Crew agents take phone calls too.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} data-offer="crew" className={primaryButton}>Join the Dooza Crew waitlist</a>
                                <a href="/book" className={secondaryButton}>Book a free call first</a>
                            </div>
                            <p className="mt-4 text-sm text-slate-600">Free to try (no card needed).</p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">The calls a garage door company loses to voicemail</h2>
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                                <li><strong>The door stuck open at night, or a car stuck inside.</strong> The caller wants someone now and will try the next company if nobody answers.</li>
                                <li><strong>The new door or opener quote.</strong> A homeowner pricing a replacement calls several companies in a row.</li>
                                <li><strong>The broken spring or off-track call</strong> that comes in while you are up a ladder on another job.</li>
                            </ul>
                            <p className="mt-4 text-slate-700">An answering service, AI or human, gets the address, the problem and how urgent it is, so you call back with what you need.</p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">Garage door answering service prices: 100 calls a month</h2>
                            <p className="mt-3 text-slate-700">
                                100 calls at about 3 minutes each is 300 minutes. Each row is the cheapest published plan that covers that usage plus published overage, from the vendor’s own pricing page (linked), checked October 6–14, 2026. We sell one of these, so check the pricing pages yourself. Change the numbers in the <Link href="/ai-receptionist-cost-calculator" className="text-primary-700 underline">cost calculator</Link>. Other trades: <Link href="/hvac-answering-service" className="text-primary-700 underline">HVAC</Link> and <Link href="/plumbing-answering-service" className="text-primary-700 underline">plumbing</Link> answering service prices.
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
                                            <td className="px-3 py-3 font-semibold text-slate-900">Dooza Crew <span className="text-xs font-normal text-slate-500">(ours)</span></td>
                                            <td className="px-3 py-3">AI</td>
                                            <td className="px-3 py-3">Per organization, free trial</td>
                                            <td className="px-3 py-3 font-semibold">$49</td>
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
                            <p className="mt-3 text-sm text-slate-600">Services that publish no price at this volume are left out. For a full feature-by-feature list see <Link href="/blog/best-ai-receptionist" className="text-primary-700 underline">the 20 AI answering services compared</Link>. Not trade-specific? See the <Link href="/ai-receptionist" className="text-primary-700 underline">AI answering service for small business</Link> (Dooza Crew: free to try).</p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">What Dooza Crew does for a garage door business</h2>
                            <div className="mt-6 rounded-xl border border-primary-100 bg-primary-50 p-5">
                                <h3 className="font-bold text-slate-900">Included</h3>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                                    <li>Crew agents take phone calls too, included in your Crew plan</li>
                                    <li>AI agents you chat with on web or phone</li>
                                    <li>They browse the web and write files in their own workspace</li>
                                    <li>Before an agent sends or pays, it asks you in chat (Approve / Edit / Reject)</li>
                                    <li>Free to try</li>
                                </ul>
                            </div>
                        </section>

                        <section className="mt-14">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>

                        <section className="mt-14 rounded-2xl bg-slate-950 p-8 text-center text-white">
                            <h2 className="text-2xl font-bold">Stop losing garage door calls to voicemail</h2>
                            <p className="mt-3 text-slate-300">Free to try (no card needed). Phone calls are included in your Crew plan.</p>
                            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} data-offer="crew" className={primaryButton}>Join the Dooza Crew waitlist</a>
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
