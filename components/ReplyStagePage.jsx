import Link from 'next/link';
import TalkNowStrip from '@/components/TalkNowStrip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { REPLY_EMAIL } from '@/lib/contact';
import { tagPay } from '@/lib/offers';

// Reply-stage page from one config object (same layout as /certificates-for-agencies, 2026-10-17).
// Orion links these in replies to Odysseus's arms; one config = one page. Truth rules live in each config: never-list,
// prices from Odysseus's card, no past-client claims. Run the checker on the config before shipping.
//
// cfg: { path, slug, offer, title, description, updated, eyebrow, h1, leadStrong, leadRest, startSubject, startBody,
//        startLabel, priceNote, sendHeading, sendIntro, areaServed, send: [[item, what]], never: [..], costs: [string | {text, linkText, href}],
//        faq: [{question, answer}], service: {name, serviceType, audienceType, offers}, crumb, fallbackEmail, whoBehind,
//        sample?: {heading, columns, rows, note} (shown above the buttons), pay?: {href, label} (primary button = checkout, email becomes secondary) }

const DEFAULT_WHO = 'Sibi Narendran, founder of Dooza, a small US company (Adam Laboratory Inc., a Delaware corporation).';

export function replyStageMetadata(cfg) {
    const url = `${SITE_URL}${cfg.path}`;
    return {
        title: cfg.title,
        description: cfg.description,
        alternates: { canonical: url },
        openGraph: { title: `${cfg.title} | Dooza`, description: cfg.description, url, type: 'website' },
        twitter: { card: 'summary', title: `${cfg.title} | Dooza`, description: cfg.description },
    };
}

function schemasFor(cfg) {
    const url = `${SITE_URL}${cfg.path}`;
    return [
        {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: cfg.service.name,
            serviceType: cfg.service.serviceType,
            url,
            description: cfg.description,
            areaServed: cfg.areaServed || { '@type': 'Country', name: 'United States' },
            audience: { '@type': 'BusinessAudience', audienceType: cfg.service.audienceType },
            provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
            offers: cfg.service.offers.map((o) => ({ '@type': 'Offer', priceCurrency: 'USD', ...o })),
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: cfg.faq.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
        },
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
                { '@type': 'ListItem', position: 2, name: cfg.crumb, item: url },
            ],
        },
    ];
}

function Cta({ cfg, start, book }) {
    return (
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            {cfg.pay && (
                <a href={tagPay(cfg.pay.href, cfg.slug)} data-offer={cfg.offer} className="rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
                    {cfg.pay.label}
                </a>
            )}
            <a
                href={start}
                data-offer={cfg.offer}
                className={cfg.pay ? 'rounded-xl border border-primary-300 px-6 py-3 font-semibold text-primary-700 hover:bg-primary-50' : 'rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700'}
            >
                {cfg.startLabel || 'Send my first request'}
            </a>
            <Link href={book} className="rounded-xl border border-primary-300 px-6 py-3 font-semibold text-primary-700 hover:bg-primary-50">
                Ask on a call
            </Link>
            {cfg.priceNote && <span className="text-sm text-slate-600">{cfg.priceNote}</span>}
        </div>
    );
}

export default function ReplyStagePage({ cfg }) {
    const start = `mailto:${REPLY_EMAIL}?subject=${encodeURIComponent(cfg.startSubject)}&body=${encodeURIComponent(cfg.startBody || '')}`;
    const book = `/book?utm_source=website&utm_medium=cta&utm_campaign=booking&utm_content=${cfg.slug}`;
    const fallback = cfg.fallbackEmail || 'odysseus@dooza.org';
    return (
        <>
            {schemasFor(cfg).map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-slate-50">
                <Navbar />
                <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <span className="mb-4 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                            {cfg.eyebrow} · Updated {cfg.updated}
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{cfg.h1}</h1>
                        <p className="mt-5 text-lg text-slate-700">
                            <strong>{cfg.leadStrong}</strong> {cfg.leadRest}
                        </p>
                        {cfg.sample && (
                            <section className="mt-10">
                                <h2 className="text-2xl font-bold text-slate-900">{cfg.sample.heading}</h2>
                                <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                                    <table className="w-full min-w-[640px] text-left text-sm">
                                        <thead>
                                            <tr className="border-b border-slate-200 bg-slate-50">
                                                {cfg.sample.columns.map((c) => (
                                                    <th key={c} className="px-4 py-3 font-semibold text-slate-900">{c}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cfg.sample.rows.map((r) => (
                                                <tr key={r[0]} className="border-b border-slate-100 align-top">
                                                    {r.map((v, i) => (
                                                        <td key={i} className={i === 0 ? 'px-4 py-3 font-semibold text-slate-900' : 'px-4 py-3 text-slate-700'}>{v}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                {cfg.sample.note && <p className="mt-3 text-sm text-slate-600">{cfg.sample.note}</p>}
                            </section>
                        )}
                        <div className="mt-8">
                            <Cta cfg={cfg} start={start} book={book} />
                        </div>

                        <section className="prose prose-slate mt-14 max-w-none">
                            <h2>{cfg.sendHeading || 'What to send'}</h2>
                            {cfg.sendIntro && <p>{cfg.sendIntro}</p>}
                        </section>
                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[560px] text-left text-sm">
                                <tbody>
                                    {cfg.send.map(([item, what]) => (
                                        <tr key={item} className="border-b border-slate-100 align-top">
                                            <td className="px-4 py-3 font-semibold text-slate-900">{item}</td>
                                            <td className="px-4 py-3 text-slate-700">{what}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>What we never do</h2>
                            <ul>
                                {cfg.never.map((n) => (
                                    <li key={n}>{n}</li>
                                ))}
                            </ul>

                            <h2>What it costs</h2>
                            <ul>
                                {cfg.costs.map((c) =>
                                    typeof c === 'string' ? (
                                        <li key={c}>{c}</li>
                                    ) : (
                                        <li key={c.href}>
                                            {c.text}{' '}
                                            <a href={tagPay(c.href, cfg.slug)} data-offer={cfg.offer} className="font-semibold text-primary-700 underline">
                                                {c.linkText}
                                            </a>
                                            .
                                        </li>
                                    )
                                )}
                            </ul>

                            <h2>Who is behind this</h2>
                            <p>{cfg.whoBehind || DEFAULT_WHO}</p>
                        </section>

                        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                            <h2 className="text-2xl font-bold text-slate-900">{cfg.startLabel || 'Send your first request'}</h2>
                            <p className="mt-2 text-slate-700">
                                Reply to the email you got from Sibi, or email <a href={start} className="font-semibold text-primary-700 underline">{REPLY_EMAIL}</a>. You can also reach us at{' '}
                                <a href={`mailto:${fallback}`} className="font-semibold text-primary-700 underline">{fallback}</a>.
                            </p>
                            <div className="mt-5">
                                <Cta cfg={cfg} start={start} book={book} />
                            </div>
                        </div>

                        <section className="mt-12">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={cfg.faq} />
                        </section>
                    </div>
                    <TalkNowStrip source={cfg.slug} offer={cfg.offer} />
                </main>
                <Footer />
            </div>
        </>
    );
}
