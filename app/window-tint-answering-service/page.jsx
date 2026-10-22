import Link from 'next/link';
import HearItFirst from '@/components/HearItFirst';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { compareReceptionistCosts } from '@/lib/receptionistPricing';
import { recepPayUrl } from '@/lib/aiReceptionistData';

const PATH = '/window-tint-answering-service';
const PAY_URL = recepPayUrl('window-tint-answering-service');
const TITLE = 'AI Receptionist for Window Tint Shops: Prices (2026)';

// Example window tint shop: 80 calls a month, about 2 minutes each (mostly short price-check calls: vehicle, film type, when).
// Own scenario on purpose: sibling trade pages use 100x3 (garage door) and 120x4 (HVAC, plumbing), so this table differs.
const SCENARIO = { calls: 80, avgMinutes: 2, uniqueShare: 1 };
const rows = compareReceptionistCosts(SCENARIO).filter((r) => r.result);
const ai = rows.filter((r) => r.kind === 'ai');
const human = rows.filter((r) => r.kind === 'human');
const money = (n) => `$${n.toLocaleString('en-US', Number.isInteger(n) ? {} : { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const aiRange = `${money(ai[0].result.cost)} to ${money(ai[ai.length - 1].result.cost)}`;
const humanRange = `${money(human[0].result.cost)} to ${money(human[human.length - 1].result.cost)}`;

const DESCRIPTION = `What an AI receptionist or answering service costs a window tint or window film shop at 80 calls a month: ${ai.length} AI receptionists and ${human.length} human answering services at list prices checked Oct 2026, plus Dooza at $149/month.`;

export const metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website', images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Window tint shop answering service prices compared' }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/logo.png`] },
};

const faqItems = [
    {
        question: 'How much does an answering service cost a window tint shop?',
        answer: `For an example window tint shop taking 80 calls a month at about 2 minutes each (160 minutes), AI answering services cost ${aiRange} a month and human answering services cost ${humanRange} a month at list prices checked October 6–14, 2026. Dooza’s AI answering service is $149 a month for up to 500 minutes.`,
    },
    {
        question: 'AI receptionist or human answering service for a tint shop?',
        answer: 'A human service handles judgment calls and upset customers better and costs several times more per minute. An AI service is cheaper and picks up nights and weekends without per-minute human rates. One setup: AI for overflow and after hours, a person for the office day.',
    },
    {
        question: 'What does the Dooza AI receptionist do for a window tint shop?',
        answer: 'It answers the calls you miss, asks the questions you give it (vehicle year, make and model, which windows, film type, when they want it done), takes the message and emails it to you with the call transcript. It does not book onto your calendar or dispatch software, does not send texts, and takes one call at a time.',
    },
    {
        question: 'What should an answering service ask a window tint caller?',
        answer: 'For a car: year, make and model, which windows (full car, front two, windshield strip), the film they want (dyed, carbon, ceramic) or a price range, and when they can drop the car off. For a home or office: residential or commercial, roughly how many windows or square feet, and what they want fixed (heat, glare, privacy, UV). Plus a callback number. Questions about legal tint darkness in their state go to you on the callback, since the rules differ by state.',
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
        name: 'Dooza AI Receptionist for Window Tint Shops',
        serviceType: 'AI answering service for window tint and window film shops',
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
            { '@type': 'ListItem', position: 3, name: 'Window Tint Answering Service', item: `${SITE_URL}${PATH}` },
        ],
    },
];

const primaryButton = 'inline-flex w-full items-center justify-center rounded-xl bg-primary-700 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-primary-800 sm:w-auto';
const secondaryButton = 'inline-flex w-full items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:border-primary-600 hover:text-primary-800 sm:w-auto';

export default function WindowTintAnsweringServicePage() {
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
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">AI Receptionist for Window Tint Shops: What It Costs, AI vs Human</h1>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">
                                <strong>For a window tint shop taking 80 calls a month at about 2 minutes each, an AI answering service costs {aiRange} a month and a human answering service costs {humanRange}, at public list prices.</strong>{' '}
                                The full table is below. Dooza’s AI answering service is $149 a month for up to 500 minutes: it answers the calls you miss and emails you each message with the transcript.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} className={primaryButton}>Get it: $149/month</a>
                                <a href="/book" className={secondaryButton}>Book a free call first</a>
                            </div>
                            <p className="mt-4 text-sm text-slate-600">Month to month. Cancel within 14 days of your first charge for a full refund.</p>
                            <HearItFirst source="window-tint-answering-service" />
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">The calls a tint shop loses to voicemail</h2>
                            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                                <li><strong>The price shopper.</strong> “How much for ceramic on a 2022 Camry?” goes to the next shop on the map if nobody picks up.</li>
                                <li><strong>The call that comes in while you are installing.</strong> Your hands are on film and a heat gun, and the phone keeps ringing.</li>
                                <li><strong>The home or office window film quote</strong>, a bigger job that often calls after hours or on a Sunday.</li>
                            </ul>
                            <p className="mt-4 text-slate-700">An answering service, AI or human, gets the vehicle or the building, the film and the timing, so you call back with a quote instead of “sorry I missed you.”</p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">Window tint shop answering service prices: 80 calls a month</h2>
                            <p className="mt-3 text-slate-700">
                                80 calls at about 2 minutes each is 160 minutes (our example assumes mostly short price-check calls: vehicle, film, when). At that length Dooza’s 500 included minutes cover about 250 calls a month. Each row is the cheapest published plan that covers that usage plus published overage, from the vendor’s own pricing page (linked), checked October 6–14, 2026. We sell one of these, so check the pricing pages yourself. Change the numbers in the <Link href="/ai-receptionist-cost-calculator" className="text-primary-700 underline">cost calculator</Link>. Other trades: <Link href="/hvac-answering-service" className="text-primary-700 underline">HVAC</Link>, <Link href="/plumbing-answering-service" className="text-primary-700 underline">plumbing</Link> and <Link href="/garage-door-answering-service" className="text-primary-700 underline">garage door</Link> answering service prices.
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
                            <h2 className="text-2xl font-bold text-slate-900">What Dooza’s AI receptionist does for a tint shop, and doesn’t</h2>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl border border-primary-100 bg-primary-50 p-5">
                                    <h3 className="font-bold text-slate-900">Included</h3>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                                        <li>Answers the calls you miss</li>
                                        <li>Asks your questions: vehicle, windows, film type, when they want it done</li>
                                        <li>Emails you each message with the call transcript and a link to the recording (callers hear that the call is recorded)</li>
                                        <li>$149/month for up to 500 minutes; $0.30/min after</li>
                                    </ul>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                                    <h3 className="font-bold text-slate-900">Not included</h3>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                                        <li>Booking onto your calendar or shop software (it takes the request, you confirm the time)</li>
                                        <li>Text messages</li>
                                        <li>Two calls at once (the second caller is asked to call back)</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-4 text-slate-700"><Link href="/ai-receptionist" className="text-primary-700 underline">Hear a demo call (HVAC example; a tint quote call works the same way)</Link>.</p>
                        </section>

                        <section className="mt-14">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>

                        <section className="mt-14 rounded-2xl bg-slate-950 p-8 text-center text-white">
                            <h2 className="text-2xl font-bold">Stop losing tint quotes to voicemail</h2>
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
