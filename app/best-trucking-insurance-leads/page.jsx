import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';

const PATH = '/best-trucking-insurance-leads';
const TITLE = 'Best Trucking Insurance Leads (2026): 9 Sources Compared';
const DESCRIPTION = 'Trucking insurance lead sources for agencies, compared on lead type and price from each vendor’s own site (checked October 13, 2026): quote requests, exclusive leads, live transfers, appointments and FMCSA data subscriptions.';
const CHECKED = 'October 13, 2026';
const LEADS_PAGE = '/trucking-insurance-leads?utm_source=website&utm_medium=internal&utm_campaign=best-trucking-insurance-leads';

// Every price below was read on the vendor's own page on 2026-10-13
// (notes: /home/achilles/content/research/trucking-lead-vendors-2026-10-13.md). Re-check monthly.
const VENDORS = [
    {
        name: 'Trucking Leads',
        url: 'https://www.truckingleads.com/',
        type: 'Quote requests in real time',
        price: 'Growth $399/mo + $18 a lead; Pro $699/mo + $15 a lead; Partner $999/mo + $12 a lead',
        trial: 'None stated',
        suits: 'Agencies that want truckers who are shopping right now and can pay a monthly fee on top of each lead.',
    },
    {
        name: 'Commercial Truck Quotes',
        url: 'https://www.commercialtruckquotes.com/',
        type: 'Quote requests from truckers, matched to your appetite',
        price: 'Not published',
        trial: 'None stated',
        suits: 'Agencies that want inbound requests by truck class (box, dump, towing and more). Ask for terms.',
    },
    {
        name: 'TruckInsureLeads',
        url: 'https://truckinsureleads.com/',
        type: 'Exclusive leads, usually 60 to 90 days before renewal',
        price: 'Not published',
        trial: '3 free leads',
        suits: 'Agencies that want exclusive, renewal-timed leads handed over, with optional follow-up done for them.',
    },
    {
        name: 'Get Insure Leads',
        url: 'https://getinsureleads.com/commercial-truck-insurance-leads',
        type: 'Aged, exclusive web leads, live transfers, appointments',
        price: 'Aged from $12; exclusive web $110; live transfer $225; confirmed appointment $325 (the page also lists other ranges)',
        trial: 'None; suggests a 2-week pilot',
        suits: 'Agencies that want to pay per lead or per live call with no subscription.',
    },
    {
        name: 'Carrier IQ',
        url: 'https://carrieriq.io/pricing',
        type: 'FMCSA data feed + CRM (renewals, new ventures, cancellations)',
        price: '1 state $149/mo; up to 5 states $199/mo; up to 10 states $249/mo',
        trial: 'None stated',
        suits: 'Agencies that want data and a CRM in one tool, updated daily, across several states.',
    },
    {
        name: 'TruckLeads.io',
        url: 'https://truckleads.io/',
        type: 'FMCSA data + CRM (new ventures, renewals at 30/60/90 days)',
        price: '$85/mo (1 state); $120/mo (up to 12 states); $300/mo (all states)',
        trial: 'Demo only',
        suits: 'The cheapest way to cover many states with data and software.',
    },
    {
        name: 'PollyAI',
        url: 'https://getpollyai.com/pricing',
        type: 'FMCSA data subscription (prospects, not quote requests)',
        price: '$39/mo platform fee plus from $40 per state per month',
        trial: 'None stated',
        suits: 'Solo producers on a tight budget who will do their own outreach.',
    },
    {
        name: 'Truckr',
        url: 'https://truckr.cloud/',
        type: 'Feeds: new registrations, mid-term cancellations, renewals',
        price: 'Solo $49/mo; Team $149/mo; Pro $349/mo',
        trial: '3-day free trial',
        suits: 'Agencies that want a cancellation feed and owner phone numbers with a confidence rating.',
    },
    {
        name: 'Dooza (us)',
        url: LEADS_PAGE,
        internal: true,
        type: 'Weekly spreadsheet: renewals in 30-60 days (3+ power units, insurer named), new authorities, cancellations with nothing new on file',
        price: 'First week free, then $129 per 4 weeks. One agency per state',
        trial: 'First week free, or 5 free rows by email',
        suits: 'Agencies that want one state to themselves and a short weekly call list, not software. No CRM; it is a spreadsheet.',
    },
];

const TYPES = [
    ['Shared quote request', 'A trucker filled in a form; the lead may go to several agencies. Fast to contact, price is per lead.'],
    ['Exclusive lead', 'Same, but sold to one agency only. Costs more per lead.'],
    ['Live transfer', 'The trucker is put through to you on the phone. Priced per call.'],
    ['Appointment', 'A call is booked on your calendar. The highest price per unit; ask what happens when the owner does not show.'],
    ['Data subscription', 'Carriers from public FMCSA filings (renewals, new authorities, cancellations), usually with software. Nobody has asked for a quote: you make the first call.'],
    ['Weekly list', 'Like a data subscription, but a short, filtered list sent to you, without software to learn.'],
];

const faqItems = [
    {
        question: 'What is the best source of trucking insurance leads?',
        answer: 'It depends on how you sell. If you want truckers who are shopping now, quote-request vendors such as Trucking Leads or Get Insure Leads fit, priced per lead. If you will make the first call yourself, an FMCSA data source is cheaper per contact: TruckLeads.io, PollyAI, Truckr, Carrier IQ, or a weekly list like Dooza’s. Prices for each are in the table on this page, checked on the vendors’ own sites on October 13, 2026.',
    },
    {
        question: 'How much do trucking insurance leads cost?',
        answer: 'On vendors’ own pages on October 13, 2026: aged leads from $12, exclusive web leads $110, live transfers $225 and confirmed appointments $325 (Get Insure Leads); $399 to $999 a month plus $12 to $18 per quote request (Trucking Leads); data subscriptions from $39 a month plus $40 per state (PollyAI) to $349 a month (Truckr Pro). Several vendors do not publish prices.',
    },
    {
        question: 'Are new trucking authorities good leads?',
        answer: 'They need a liability filing before FMCSA activates their authority, so they buy quickly, but many new ventures close within their first year. Agencies that write a lot of trucking often prefer renewals of carriers in business 2 or more years with 3 or more power units, and use new authorities as a second list.',
    },
    {
        question: 'Can I get trucking leads for free?',
        answer: 'FMCSA’s carrier data is public on data.transportation.gov and SAFER, so you can build your own list. It does not give policy expiry dates or ready-made call lists; you have to join the files and estimate renewals yourself. TruckInsureLeads offers 3 free leads, Truckr a 3-day trial, and Dooza 5 free rows for your state.',
    },
    {
        question: 'Shared or exclusive trucking leads?',
        answer: 'Shared leads cost less but you race other agents to the same trucker. Exclusive leads cost more per lead but nobody else calls. Most data vendors do not say their lists are exclusive (Carrier IQ says its leads are not); Dooza’s list goes to one agency per state.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: TITLE,
        description: DESCRIPTION,
        datePublished: '2026-10-13',
        dateModified: '2026-10-13',
        author: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        publisher: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        mainEntityOfPage: `${SITE_URL}${PATH}`,
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Trucking insurance lead sources compared',
        itemListElement: VENDORS.map((v, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: v.name,
            url: v.internal ? `${SITE_URL}/trucking-insurance-leads` : v.url,
        })),
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
            { '@type': 'ListItem', position: 2, name: 'Best trucking insurance leads', item: `${SITE_URL}${PATH}` },
        ],
    },
];

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'article' },
    twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

export default function BestTruckingInsuranceLeadsPage() {
    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-slate-50">
                <Navbar />
                <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl">
                        <span className="mb-4 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                            For insurance agencies that write trucking · Prices checked {CHECKED}
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Best trucking insurance leads in 2026: 9 sources compared</h1>
                        <p className="mt-5 text-lg text-slate-700">
                            <strong>There are two kinds of trucking insurance lead: truckers who asked for a quote (sold per lead, $12 to $325 depending on type) and carriers from public FMCSA filings that you call first (sold as a subscription, $39 to $349 a month).</strong>{' '}
                            Below are 9 sources with the price each one shows on its own site, and who each one suits. We run one of them (Dooza), so we say where the others are the better pick.
                        </p>

                        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[860px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className="px-4 py-3 font-semibold">Source</th>
                                        <th className="px-4 py-3 font-semibold">What you get</th>
                                        <th className="px-4 py-3 font-semibold">Price (own site, {CHECKED})</th>
                                        <th className="px-4 py-3 font-semibold">Free trial</th>
                                        <th className="px-4 py-3 font-semibold">Best for</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {VENDORS.map((v) => (
                                        <tr key={v.name} className={`border-b border-slate-100 align-top ${v.internal ? 'bg-primary-50/40' : ''}`}>
                                            <td className="px-4 py-3 font-semibold text-slate-900">
                                                {v.internal ? <Link href={v.url} className="underline">{v.name}</Link> : <a href={v.url} rel="nofollow noopener" target="_blank" className="underline">{v.name}</a>}
                                            </td>
                                            <td className="px-4 py-3 text-slate-700">{v.type}</td>
                                            <td className="px-4 py-3 text-slate-700">{v.price}</td>
                                            <td className="px-4 py-3 text-slate-700">{v.trial}</td>
                                            <td className="px-4 py-3 text-slate-700">{v.suits}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-2 text-xs text-slate-500">Prices as shown on each vendor&rsquo;s own page on {CHECKED}; they change, so check before you buy. Where a vendor does not publish a price we say so.</p>

                        <section className="prose prose-slate mt-14 max-w-none">
                            <h2>Which kind of lead fits your agency?</h2>
                            <ul>
                                <li><strong>You want people shopping today:</strong> buy quote requests or live transfers. You pay per lead, and on shared leads you race other agents.</li>
                                <li><strong>You have someone to dial and want volume per dollar:</strong> a data source. The cheapest are PollyAI (from $39 plus $40 per state) and TruckLeads.io ($85 for one state). Carrier IQ and Truckr add daily feeds and software.</li>
                                <li><strong>You want a short weekly call list and one state to yourself:</strong> a weekly list like <Link href={LEADS_PAGE}>Dooza&rsquo;s trucking renewal list</Link>. It is a spreadsheet, not a CRM, so pick a data platform if you want software.</li>
                                <li><strong>You have no time to dial:</strong> pay per appointment or live transfer (Get Insure Leads lists $225 a live transfer and $325 a confirmed appointment), or ask Dooza about booked calls for your state.</li>
                            </ul>

                            <h2>Lead types in one table</h2>
                        </section>
                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[560px] text-left text-sm">
                                <tbody>
                                    {TYPES.map(([t, d]) => (
                                        <tr key={t} className="border-b border-slate-100 align-top">
                                            <td className="px-4 py-3 font-semibold text-slate-900">{t}</td>
                                            <td className="px-4 py-3 text-slate-700">{d}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>What agents who write trucking say</h2>
                            <p>
                                In an <a href="https://www.reddit.com/r/InsuranceAgent/comments/1l914to/trucking_leads/" rel="nofollow noopener" target="_blank">r/InsuranceAgent thread on trucking leads</a>, most replies warned that trucking is hard: small new operators fail fast, retention is low and the service load is heavy. The one agency there that writes mostly trucking said it does not rely on new ventures, because most of the ones it wrote were gone within a year. It goes after renewals of carriers in business 2 or more years with 3 or more trucks. Nobody in the thread named a lead price.
                            </p>

                            <h2>How to test a lead source in 14 days</h2>
                            <ol>
                                <li>Get exclusivity in writing (per lead or per territory), or assume the lead is shared.</li>
                                <li>Ask what you get back for a bad number or a dead lead.</li>
                                <li>Ask how fresh the data is: when was it last refreshed, and how far out are renewal dates?</li>
                                <li>For phone outreach, check the Do Not Call list and how the vendor got consent for any texts or auto-dialled calls.</li>
                                <li>Count quotes and bound policies, not leads. Our <Link href="/insurance-lead-cost-calculator">insurance lead cost calculator</Link> turns price per lead and close rate into cost per sold policy.</li>
                            </ol>

                            <h2>The free route</h2>
                            <p>
                                FMCSA publishes carrier data for free on data.transportation.gov and SAFER: contact details, fleet size, authority history and the insurer&rsquo;s liability filing. It does not publish when a policy expires, so you would join the files and estimate renewal dates yourself. That join is what every data vendor above sells. Our free weekly count of <Link href="/trucking-insurance-market">which insurers gain and lose trucking companies in each state</Link> is built from the same filings. So is our weekly count of <Link href="/trucking-new-authority-leads">new trucking authorities with no insurance filing yet</Link>.
                            </p>
                        </section>

                        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                            <h2 className="text-2xl font-bold text-slate-900">See real rows from your state</h2>
                            <p className="mt-2 text-slate-700">Dooza&rsquo;s weekly list: renewals in 30 to 60 days with the current insurer named, new authorities and cancellations, for one agency per state. First week free, then $129 per 4 weeks.</p>
                            <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                                <Link href={`${LEADS_PAGE}#sample`} className="rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">Get 5 free rows</Link>
                                <Link href={LEADS_PAGE} className="font-semibold text-primary-700 underline">How the list works</Link>
                            </div>
                        </div>

                        <section className="mt-12">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
