import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import ReceptionistCostCalculator from '@/components/ReceptionistCostCalculator';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { compareReceptionistCosts, PRICES_CHECKED, PRICES_CHECKED_LABEL } from '@/lib/receptionistPricing';

const PATH = '/ai-receptionist-cost-calculator';
const TITLE = 'AI Receptionist Cost Calculator: Compare 15 Services by Your Call Volume';
const DESCRIPTION = `Free calculator: enter your calls per month and minutes per call to see what 13 AI receptionists and 2 human answering services would cost, from list prices checked ${PRICES_CHECKED_LABEL}.`;

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: {
        title: 'AI Receptionist Cost Calculator | Dooza',
        description: DESCRIPTION,
        url: `${SITE_URL}${PATH}`,
        type: 'website',
        images: [{ url: `${SITE_URL}/blog/ai-receptionist-pricing.png`, width: 1600, height: 900, alt: 'What 100 calls a month cost on AI receptionists vs human answering services' }],
    },
    twitter: { card: 'summary_large_image', title: 'AI Receptionist Cost Calculator | Dooza', description: DESCRIPTION, images: [`${SITE_URL}/blog/ai-receptionist-pricing.png`] },
};

// Server-side default scenario, so the answer is in the HTML for search engines and AI agents.
const DEFAULT = { calls: 100, avgMinutes: 3, uniqueShare: 1 };
const defaults = compareReceptionistCosts(DEFAULT);
const aiDefaults = defaults.filter((r) => r.kind === 'ai' && r.result);
const humanDefaults = defaults.filter((r) => r.kind === 'human' && r.result);
const money = (n) => `$${n.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
const aiLow = money(aiDefaults[0].result.cost);
const aiHigh = money(aiDefaults[aiDefaults.length - 1].result.cost);
const humanLow = money(humanDefaults[0].result.cost);
const humanHigh = money(humanDefaults[humanDefaults.length - 1].result.cost);

const faqItems = [
    {
        question: 'How much does an AI receptionist cost per month?',
        answer: `For 100 calls a month at about 3 minutes each, the 13 AI receptionists in this calculator cost ${aiLow} to ${aiHigh} a month at list price (checked ${PRICES_CHECKED_LABEL}). Entry plans start at $0 to $199 a month, and most small-business plans cost $49 to $99.`,
    },
    {
        question: 'Is an AI receptionist cheaper than a human answering service?',
        answer: `Usually by a wide margin. For the same 100 calls, the two human answering services here cost ${humanLow} to ${humanHigh} a month. Human services are still the better choice for complex or sensitive calls.`,
    },
    {
        question: 'How does the calculator work?',
        answer: 'For each service it finds the cheapest published plan that covers your usage, adds the published overage rate, and adds any required seat. If a vendor publishes no overage rate and your usage is above its largest plan, it shows "Not published at this volume". Prices come from each vendor’s own pricing page.',
    },
    {
        question: 'Why does the billing unit matter so much?',
        answer: 'Vendors bill per minute, per call, per unique caller, per interaction or a flat fee. Long calls make per-minute plans expensive; many short calls make per-call plans expensive; repeat callers make per-caller plans cheap. Change the inputs to see the ranking flip.',
    },
    {
        question: 'What does the calculator leave out?',
        answer: 'Taxes, phone number fees, setup time, add-ons and annual-billing discounts. It also leaves out services that don’t publish prices (Numa, Dialpad AI Agent) and enterprise-only platforms (Synthflow from $30,000 a year).',
    },
    {
        question: 'Does Dooza offer an AI receptionist?',
        answer: 'Yes. Dooza builds and runs a done-for-you AI receptionist on your existing number, tuned to your services, prices and calendar. Pricing is on dooza.ai/pricing, and every Dooza product starts with a refundable pilot: 100% refund within 14 days.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'AI Receptionist Cost Calculator',
        url: `${SITE_URL}${PATH}`,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
        description: DESCRIPTION,
        dateModified: PRICES_CHECKED,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        creator: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
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
            { '@type': 'ListItem', position: 3, name: 'Cost Calculator', item: `${SITE_URL}${PATH}` },
        ],
    },
];

export default function AiReceptionistCostCalculatorPage() {
    return (
        <BookingModalProvider>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-slate-50">
                <Navbar />
                <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-8 text-center">
                            <span className="mb-4 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                                Free tool · Prices checked {PRICES_CHECKED_LABEL}
                            </span>
                            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">AI Receptionist Cost Calculator</h1>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-700">
                                <strong>For 100 calls a month at about 3 minutes each, AI receptionists cost {aiLow} to {aiHigh} a month; human answering services cost {humanLow} to {humanHigh}.</strong>{' '}
                                Enter your own call volume to compare 13 AI receptionists and 2 human answering services on their published list prices.
                            </p>
                        </div>

                        <ReceptionistCostCalculator />

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>How the estimate works</h2>
                            <p>
                                For each service we take the cheapest published plan that covers your usage, add the published overage rate, and add any required phone seat. Usage is counted the way each vendor bills it: minutes, calls, unique callers, interactions, or a flat fee. RingCentral rounds each call up to 30 seconds. Rosie has no overage rate and moves you to the next plan instead. Where a vendor publishes no price for your volume, the calculator says so instead of guessing.
                            </p>
                            <p>
                                Every price was checked on the vendor’s own pricing page on {PRICES_CHECKED_LABEL}, and we re-check monthly. The full breakdown, including entry plans, billing quirks and hidden costs, is in our{' '}
                                <Link href="/blog/ai-receptionist-pricing">AI receptionist pricing comparison</Link>. Dooza sells a done-for-you AI receptionist, so we are not neutral: that is why every source is linked in the table.
                            </p>
                            <h2>Which kind of plan fits your calls</h2>
                            <ul>
                                <li><strong>Short, simple calls</strong> (hours, directions, booking): per-minute plans usually win.</li>
                                <li><strong>Long or unpredictable calls</strong>: per-call plans keep the bill predictable.</li>
                                <li><strong>The same customers calling often</strong>: per-unique-caller pricing (Goodcall) gets cheaper.</li>
                                <li><strong>Hundreds of calls a month</strong>: flat unlimited plans (NextPhone) catch up.</li>
                            </ul>
                            <h2>Want it done for you?</h2>
                            <p>
                                Self-serve tools are cheap because you write the scripts, FAQs and routing yourself. Dooza’s <Link href="/ai-receptionist">AI receptionist</Link> is set up and tuned by our engineers on your existing number. Pricing depends on the product (see <Link href="/pricing">Dooza pricing</Link>). Every Dooza product starts with a refundable pilot: 100% refund within 14 days.
                            </p>
                        </section>

                        <section className="mt-12">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </BookingModalProvider>
    );
}
