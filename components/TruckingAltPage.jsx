import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { TRUCKER_FEED_PAY_URL, tagPay } from '@/lib/offers';

// "<Vendor> alternative" pages for the Monday Trucker Feed (Odysseus ask 2026-10-23 00:59: paying trucking-lead sellers
// grow by SEO on competitor-name pages). ICP page: trucking offer only. Vendor facts only from the vendor's own pages,
// checked on the date in each config (notes: content/research/trucking-alt-vendors-2026-10-23.md). Re-check monthly.
const LEADS_PAGE = '/trucking-insurance-leads';

export function altMetadata(c) {
    const url = `${SITE_URL}/${c.slug}`;
    return {
        title: c.title,
        description: c.description,
        alternates: { canonical: url },
        openGraph: { title: c.title, description: c.description, url, type: 'article' },
        twitter: { card: 'summary', title: c.title, description: c.description },
    };
}

export default function TruckingAltPage({ c }) {
    const pay = `${tagPay(TRUCKER_FEED_PAY_URL, c.slug)}&utm_source=website&utm_medium=seo&utm_campaign=seo-alt-${c.key}`;
    const leads = `${LEADS_PAGE}?utm_source=website&utm_medium=internal&utm_campaign=seo-alt-${c.key}`;
    const schemas = [
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: c.faq.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: 'Trucking insurance leads', item: `${SITE_URL}${LEADS_PAGE}` },
                { '@type': 'ListItem', position: 3, name: c.h1, item: `${SITE_URL}/${c.slug}` },
            ],
        },
    ];
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
                            For insurance agencies that write trucking · {c.vendor} facts checked {c.checked}
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{c.h1}</h1>
                        <p className="mt-5 text-lg text-slate-700">{c.lead}</p>

                        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[640px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className="px-4 py-3 font-semibold"></th>
                                        <th className="px-4 py-3 font-semibold">
                                            <a href={c.vendorUrl} rel="nofollow noopener" target="_blank" className="underline">{c.vendor}</a>
                                        </th>
                                        <th className="px-4 py-3 font-semibold bg-primary-50/40">Dooza Monday Trucker Feed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {c.rows.map(([label, theirs, ours]) => (
                                        <tr key={label} className="border-b border-slate-100 align-top">
                                            <td className="px-4 py-3 font-semibold text-slate-900">{label}</td>
                                            <td className="px-4 py-3 text-slate-700">{theirs}</td>
                                            <td className="px-4 py-3 text-slate-700 bg-primary-50/40">{ours}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-2 text-xs text-slate-500">
                            {c.sourceNote || <>{c.vendor} details from <a href={c.vendorUrl} rel="nofollow noopener" target="_blank" className="underline">its own site</a> on {c.checked}</>}; they change, so check before you buy. We run Dooza.
                        </p>

                        <section className="prose prose-slate mt-14 max-w-none">
                            <h2>When {c.vendor} is the better pick</h2>
                            <ul>{c.theyWin.map((t) => <li key={t}>{t}</li>)}</ul>
                            <h2>When the Monday Trucker Feed fits better</h2>
                            <ul>{c.weWin.map((t) => <li key={t}>{t}</li>)}</ul>
                            <h2>What is in each Monday list</h2>
                            <p>
                                Trucking companies in your state with 3 or more power units whose liability filing (BMC-91X) is estimated to renew in the next 30 to 60 days, with the current insurer and limit named, plus the new trucking authorities from the past week that still need coverage. It comes as a spreadsheet every Monday. FMCSA does not publish policy expiry dates, so the date is the next anniversary of the filing&rsquo;s effective date: confirm it on the call. Wrong number or dead lead? Reply &ldquo;SWAP&rdquo; with the DOT number and a replacement comes the next Monday. <Link href={leads}>See sample rows and how the list works</Link>.
                            </p>
                        </section>

                        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                            <h2 className="text-2xl font-bold text-slate-900">Try the Monday Trucker Feed</h2>
                            <p className="mt-2 text-slate-700">$129 every 4 weeks, paid first, month to month. Not ready to pay? Get 5 free rows from your state by email.</p>
                            <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                                <a href={pay} data-offer="trucker-feed" data-source={c.slug} className="rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">Start for $129</a>
                                <Link href={`${leads}#sample`} className="font-semibold text-primary-700 underline">Get 5 free rows</Link>
                            </div>
                        </div>

                        <section className="mt-12">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={c.faq} />
                        </section>
                        <p className="mt-10 text-sm text-slate-600">
                            Comparing more sources? See <Link href="/best-trucking-insurance-leads" className="underline">the best trucking insurance leads, 9 sources compared</Link>.
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
