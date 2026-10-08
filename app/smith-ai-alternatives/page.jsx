import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '../../lib/site';

const pageUrl = `${SITE_URL}/smith-ai-alternatives`;
const CHECKED = 'October 8, 2026';
const title = 'Smith.ai Alternatives (2026): 6 Options, Prices Checked Oct 2026';
const description = `Smith.ai live receptionists cost $300/mo for 30 calls, then $11.50 a call (checked ${CHECKED}). We compared 6 alternatives, human and AI, on what 60 calls a month really costs.`;

export const metadata = {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: { title, description, url: pageUrl, siteName: 'Dooza', type: 'article', modifiedTime: '2026-10-08T00:00:00.000Z' },
    twitter: { card: 'summary_large_image', title, description },
};

// Every price below was read on the vendor's own pricing page on CHECKED. Re-verify monthly.
const OPTIONS = [
    {
        name: 'Smith.ai AI Receptionist',
        type: 'AI',
        url: 'https://smith.ai/pricing/ai-receptionist',
        price: 'Free plan (25 calls, then $3.00/call); Pro $150/mo for 75 calls, then $2.50/call; Enterprise $500/mo',
        evaluate: 'Free plan; month-to-month, 30 days notice to cancel',
        bestFor: 'Staying with Smith.ai but paying far less: same company, AI instead of people.',
        cost60: '$150',
    },
    {
        name: 'Ruby',
        type: 'Live humans',
        url: 'https://www.ruby.com/plans-and-pricing/',
        price: '$250/mo for 50 minutes, $395 for 100, $720 for 200, $1,725 for 500; 24/7',
        evaluate: 'No trial or guarantee stated on the pricing page',
        bestFor: 'Live people answering, if your calls are short (Ruby bills by the minute, Smith.ai by the call).',
        cost60: '$720',
    },
    {
        name: 'PATLive',
        type: 'Live humans',
        url: 'https://www.patlive.com/pricing/',
        price: '$49/mo pay as you go at $2.99/min; $99 for 50 min; $189 for 100; $349 for 200; 24/7',
        evaluate: '14-day free trial on any plan; no contracts',
        bestFor: 'The cheapest way to keep live people, and you can try it free for 14 days.',
        cost60: '$349',
    },
    {
        name: 'Goodcall',
        type: 'AI',
        url: 'https://www.goodcall.com/pricing',
        price: '$79/agent/mo for 100 unique customers, then $0.50 each; unlimited minutes',
        evaluate: 'Free trial mentioned; length not stated',
        bestFor: 'Long calls: you pay per unique caller, not per minute.',
        cost60: '$79',
    },
    {
        name: 'My AI Front Desk',
        type: 'AI',
        url: 'https://www.myaifrontdesk.com/pricing',
        price: '$99/mo ($79 billed yearly) for 200 minutes, then $0.25/min',
        evaluate: '7-day free trial',
        bestFor: 'A low flat price if you set it up yourself.',
        cost60: '$99',
    },
    {
        name: 'Dooza AI Receptionist',
        type: 'AI, done for you',
        url: '/ai-receptionist',
        price: 'Pricing depends on the product; see /pricing',
        evaluate: 'Refundable pilot: 100% refund within 14 days',
        bestFor: 'Busy owners who want it set up for them: we configure it on your line within 48 hours and tune it on your real calls.',
        cost60: 'see /pricing',
    },
];

const faqData = [
    {
        question: 'What are the best Smith.ai alternatives?',
        answer: `For live human answering: PATLive (from $49/mo pay as you go, 14-day free trial) and Ruby (from $250/mo for 50 minutes). For AI answering: Smith.ai's own AI Receptionist (free plan, Pro $150/mo for 75 calls), Goodcall ($79/mo, unlimited minutes, 100 unique customers), My AI Front Desk ($99/mo for 200 minutes), and Dooza (done for you, live on your line within 48 hours, refundable pilot). Prices checked ${CHECKED} on each vendor's pricing page.`,
    },
    {
        question: 'How much does Smith.ai cost?',
        answer: `Smith.ai virtual receptionists (live people, 24/7) cost $300/mo for 30 calls ($11.50 per extra call), $810/mo for 90 calls ($10.50 extra), or $2,100/mo for 300 calls ($8.50 extra), with a 30-day money-back guarantee. Smith.ai's AI Receptionist has a free plan with 25 calls, Pro from $150/mo for 75 calls and Enterprise from $500/mo (checked ${CHECKED}, smith.ai/pricing).`,
    },
    {
        question: 'Is there a cheaper alternative to Smith.ai?',
        answer: `Yes. At 60 calls a month (about 3 minutes each), Smith.ai's live Starter plan comes to $645 ($300 + 30 extra calls at $11.50). PATLive's 200-minute plan is $349, Smith.ai's own AI Pro plan is $150, My AI Front Desk is $99 and Goodcall is $79 (list prices checked ${CHECKED}, before taxes).`,
    },
    {
        question: 'Should I switch from human answering to an AI receptionist?',
        answer: 'Switch when most of your calls are routine: booking, hours, directions, taking a message, qualifying a job. Keep live people when callers are upset, the call needs judgement, or you need legal or medical intake handled by a person. Many businesses use AI for routine calls and hand the rest to a human.',
    },
    {
        question: 'Is Dooza a good Smith.ai alternative?',
        answer: 'Dooza fits if you want an AI receptionist set up for you: it answers in your company name day and night, asks your intake questions, books into your calendar or dispatch software, texts the caller a confirmation and hands off to you by your rules. It is live on your existing line within 48 hours of the setup call, and starts with a refundable pilot (100% refund within 14 days). It is not the right pick if you need live people, answering in languages other than English, or a HIPAA service: Dooza answers in English only and does not sign a BAA.',
    },
    {
        question: 'Smith.ai vs Ruby: which is cheaper?',
        answer: `It depends on call length. Smith.ai bills per call ($300 for 30 calls), Ruby bills per minute ($250 for 50 minutes). With short calls, Ruby can cost less; with long calls, Smith.ai usually does. At 60 three-minute calls a month: Smith.ai Starter about $645, Ruby's 200-minute plan $720 (checked ${CHECKED}).`,
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        description,
        url: pageUrl,
        dateModified: '2026-10-08',
        publisher: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Alternatives', item: `${SITE_URL}/alternatives` },
            { '@type': 'ListItem', position: 3, name: 'Smith.ai Alternatives', item: pageUrl },
        ],
    },
];

const ext = (url) => url.startsWith('http');

export default function SmithAiAlternativesPage() {
    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <Navbar variant="light" />
            <main className="bg-white px-4 pb-20 pt-28 text-slate-800 sm:px-6 sm:pt-36">
                <article className="mx-auto max-w-4xl">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-700">Alternatives · prices checked {CHECKED}</p>
                    <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Smith.ai Alternatives in 2026: Human and AI Options Compared</h1>

                    <section className="mt-8 rounded-2xl border border-primary-200 bg-primary-50 p-6">
                        <h2 className="text-lg font-bold text-slate-950">Short answer</h2>
                        <p className="mt-2 leading-relaxed">
                            If you want to keep live people, look at <strong>PATLive</strong> (from $49/mo, 14-day free trial) or <strong>Ruby</strong> (from $250/mo for 50 minutes).
                            If most of your calls are routine, an AI receptionist costs a fraction: <strong>Smith.ai&apos;s own AI Receptionist</strong> ($150/mo for 75 calls),
                            <strong> Goodcall</strong> ($79/mo), <strong>My AI Front Desk</strong> ($99/mo) or <strong>Dooza</strong>, which sets it up for you on your line within 48 hours.
                            At 60 calls a month, Smith.ai&apos;s live Starter plan comes to about $645; the AI options above cost $79 to $150 (list prices, checked {CHECKED}).
                        </p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-extrabold text-slate-950">What Smith.ai costs</h2>
                        <p className="mt-3 leading-relaxed">
                            From <a className="text-primary-700 underline" href="https://smith.ai/pricing/receptionists" rel="nofollow noopener" target="_blank">Smith.ai&apos;s pricing page</a> (checked {CHECKED}):
                            live receptionists answer 24/7 for <strong>$300/mo for 30 calls</strong> ($11.50 per extra call), <strong>$810/mo for 90 calls</strong> ($10.50 extra)
                            or <strong>$2,100/mo for 300 calls</strong> ($8.50 extra), month to month, with a 30-day money-back guarantee.
                            Smith.ai also sells an <a className="text-primary-700 underline" href="https://smith.ai/pricing/ai-receptionist" rel="nofollow noopener" target="_blank">AI Receptionist</a>:
                            a free plan with 25 calls, Pro from $150/mo for 75 calls and Enterprise from $500/mo.
                        </p>
                        <p className="mt-3 leading-relaxed">
                            People usually look for alternatives for one reason: per-call pricing adds up. Thirty calls is about one a day, and every call past that costs $11.50 on Starter.
                        </p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-extrabold text-slate-950">6 alternatives compared</h2>
                        <p className="mt-2 text-sm text-slate-600">
                            &quot;60 calls&quot; = what 60 calls a month of about 3 minutes each (180 minutes) costs on the cheapest plan that covers it, at list price before taxes. Your numbers will differ:
                            try the <Link className="text-primary-700 underline" href="/ai-receptionist-cost-calculator">AI receptionist cost calculator</Link>.
                        </p>
                        <div className="mt-6 grid gap-5">
                            {OPTIONS.map((o) => (
                                <div key={o.name} className={`rounded-2xl border p-6 ${o.name.startsWith('Dooza') ? 'border-primary-300 bg-primary-50' : 'border-slate-200'}`}>
                                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                                        <h3 className="text-xl font-bold text-slate-950">
                                            {ext(o.url)
                                                ? <a href={o.url} rel="nofollow noopener" target="_blank" className="hover:underline">{o.name}</a>
                                                : <Link href={o.url} className="hover:underline">{o.name}</Link>}
                                        </h3>
                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{o.type}</span>
                                    </div>
                                    <p className="mt-2"><strong>Best for:</strong> {o.bestFor}</p>
                                    <dl className="mt-3 grid gap-1 text-sm sm:grid-cols-[9rem_1fr]">
                                        <dt className="font-semibold text-slate-600">Price</dt><dd>{o.price}</dd>
                                        <dt className="font-semibold text-slate-600">How to try it</dt><dd>{o.evaluate}</dd>
                                        <dt className="font-semibold text-slate-600">60 calls/month</dt><dd>{o.cost60}</dd>
                                    </dl>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 text-sm text-slate-600">
                            How we got the 60-call figures: Smith.ai Starter $300 + 30 extra calls × $11.50 = $645 (cheaper than Basic at $810). Ruby: no overage rate is published, so the 200-minute plan ($720).
                            PATLive: 200-minute plan $349. Smith.ai AI Pro: 75 calls included, $150. Goodcall: up to 100 unique customers, $79. My AI Front Desk: 200 minutes included, $99.
                        </p>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-extrabold text-slate-950">When to stay with Smith.ai</h2>
                        <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
                            <li>You need <strong>live people</strong> on every call, 24/7, and your calls are long (per-call billing beats per-minute billing on long calls).</li>
                            <li>Your callers are often upset or need judgement a script can&apos;t give.</li>
                            <li>You like Smith.ai but want to pay less: try their <strong>AI Receptionist</strong> free plan before switching vendors.</li>
                        </ul>
                    </section>

                    <section className="mt-12">
                        <h2 className="text-2xl font-extrabold text-slate-950">Where Dooza fits, and where it doesn&apos;t</h2>
                        <p className="mt-3 leading-relaxed">
                            Dooza&apos;s <Link className="text-primary-700 underline" href="/ai-receptionist">AI receptionist</Link> is done for you. It answers every call in your company name,
                            asks your intake questions, books the job into your calendar or dispatch software, texts the caller a confirmation and hands off to you or your dispatcher by your rules.
                            We set it up on your existing line within 48 hours of a free 30-minute call, and you listen to the recordings. It starts with a refundable pilot: 100% refund within 14 days.
                            Pricing is on <Link className="text-primary-700 underline" href="/pricing">/pricing</Link>.
                        </p>
                        <p className="mt-3 leading-relaxed">
                            <strong>Not a fit if:</strong> you need live humans, answering in languages other than English, or a HIPAA service (Dooza answers in English only and does not sign a BAA).
                            If you want the lowest price and are happy to set it up yourself, Goodcall or My AI Front Desk cost less.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Link href="/ai-receptionist" className="inline-flex items-center rounded-xl bg-primary-700 px-6 py-4 font-bold text-white hover:bg-primary-800">Hear a demo call</Link>
                            <Link href="/book" className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-4 font-bold text-slate-900 hover:bg-slate-50">Book a free 30-minute call</Link>
                        </div>
                    </section>

                    <section className="mt-14">
                        <h2 className="text-2xl font-extrabold text-slate-950">FAQ</h2>
                        <div className="mt-6 space-y-3">
                            <FAQAccordion items={faqData} />
                        </div>
                    </section>

                    <p className="mt-10 text-sm text-slate-500">
                        Prices checked {CHECKED} on each vendor&apos;s own pricing page; they change, so check the linked page before you buy. Dooza sells an AI receptionist, so we are one of the options here.
                        See also: <Link className="underline" href="/blog/ai-receptionist-pricing">AI receptionist pricing</Link> · <Link className="underline" href="/alternatives">all alternatives pages</Link>.
                    </p>
                </article>
            </main>
            <Footer />
        </>
    );
}
