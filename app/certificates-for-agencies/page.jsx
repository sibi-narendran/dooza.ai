import Link from 'next/link';
import TalkNowStrip from '@/components/TalkNowStrip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { REPLY_EMAIL } from '@/lib/contact';
import { CERT_PACK_PAY_URL } from '@/lib/offers';

// Certificates of insurance for agencies (Odysseus 2026-10-16 21:01, CERT1; Sibi OK'd agencies 19:35).
// Reply-stage page: Orion links it in replies only. Truth rules: we prepare the ACORD 25, the agency checks and issues it under its own license;
// we never bind or change coverage, sign as producer, send to the holder or add wording not in the policy. No past-client claims.
const PATH = '/certificates-for-agencies';
const TITLE = 'Certificates of Insurance for Agencies: 5 Free';
const DESCRIPTION = 'Insurance agencies: email a certificate request with the policy or dec page and get a finished ACORD 25 back the same business day. You check and issue it. First 5 free, then $5 each.';
const UPDATED_LABEL = 'October 16, 2026';
const BOOK = '/book?utm_source=website&utm_medium=cta&utm_campaign=booking&utm_content=certificates-for-agencies';
const FALLBACK_EMAIL = 'odysseus@dooza.org';
const START = `mailto:${REPLY_EMAIL}?subject=${encodeURIComponent('Certificate request')}&body=${encodeURIComponent('Certificate holder name and address:\nWhat they need (limits, project or contract):\nAdditional insured / waiver wording (if any):\n\nPlease attach the policy or dec page.')}`;

const SEND = [
    ['Certificate holder', 'Name and mailing address exactly as they should appear.'],
    ['What they asked for', 'The coverage and limits the holder wants shown, plus any project, job or contract number.'],
    ['Special wording', 'Additional insured, waiver of subrogation or primary and non-contributory wording, if the holder asked for it.'],
    ['The policy', 'The policy or declarations page (and endorsements) the certificate is based on.'],
];

const faqItems = [
    {
        question: 'What do I get back?',
        answer: 'A finished ACORD 25 certificate of liability insurance filled from the policy or dec page you send: insured, insurers, policy numbers, dates, limits, the holder and the description of operations. You check it and issue it under your own license.',
    },
    {
        question: 'How fast?',
        answer: 'The same business day for requests in by 2 pm Central, Monday to Friday.',
    },
    {
        question: 'How much does it cost?',
        answer: 'Your first 5 certificates are free. Then $5 per certificate, or $50 for a pack of 10. No contract; stop any time.',
    },
    {
        question: 'What if the holder asks for wording that is not in the policy?',
        answer: 'We don’t add it. We flag it back to you so you can decide what to do (for example, ask the carrier for an endorsement).',
    },
    {
        question: 'Do you send the certificate to the holder?',
        answer: 'No. We send it back to you only. You review it and issue it to the holder yourself.',
    },
    {
        question: 'Are you an insurance agency?',
        answer: 'No. Dooza is a small private company (Adam Laboratory Inc., a Delaware corporation). We are not licensed to sell insurance, we don’t bind or change coverage and we don’t sign as producer.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Certificate of insurance preparation for agencies',
        serviceType: 'ACORD 25 certificate preparation',
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        areaServed: { '@type': 'Country', name: 'United States' },
        audience: { '@type': 'BusinessAudience', audienceType: 'Insurance agencies' },
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: [
            { '@type': 'Offer', price: '5', priceCurrency: 'USD', description: 'Per certificate. First 5 free.' },
            { '@type': 'Offer', price: '50', priceCurrency: 'USD', description: 'Pack of 10 certificates.', url: CERT_PACK_PAY_URL },
        ],
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
            { '@type': 'ListItem', position: 2, name: 'Certificates for Agencies', item: `${SITE_URL}${PATH}` },
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
            <a href={START} data-offer="cert-agencies" className="rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
                Send my first request
            </a>
            <Link href={BOOK} className="rounded-xl border border-primary-300 px-6 py-3 font-semibold text-primary-700 hover:bg-primary-50">
                Ask on a call
            </Link>
            <span className="text-sm text-slate-600">First 5 free, then $5 each.</span>
        </div>
    );
}

export default function CertificatesForAgenciesPage() {
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
                            For insurance agencies · Updated {UPDATED_LABEL}
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Certificates of insurance back the same day, first 5 free</h1>
                        <p className="mt-5 text-lg text-slate-700">
                            <strong>Email us the certificate request with the policy or dec page. We send back the finished ACORD 25 the same business day (requests in by 2 pm Central, Monday to Friday).</strong>{' '}
                            You check it and issue it under your own license. First 5 certificates free, then $5 each.
                        </p>
                        <div className="mt-8">
                            <Cta />
                        </div>

                        <section className="prose prose-slate mt-14 max-w-none">
                            <h2>What to send</h2>
                            <p>One email per certificate request.</p>
                        </section>
                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[560px] text-left text-sm">
                                <tbody>
                                    {SEND.map(([item, what]) => (
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
                                <li>Bind or change coverage.</li>
                                <li>Sign as producer.</li>
                                <li>Issue the certificate to the holder ourselves.</li>
                                <li>Add wording that isn’t in the policy or its endorsements. We flag it back to you instead.</li>
                            </ul>

                            <h2>What it costs</h2>
                            <ul>
                                <li>First 5 certificates free.</li>
                                <li>Then $5 per certificate. No contract; stop any time.</li>
                                <li>
                                    Or a pack of 10 for $50: <a href={CERT_PACK_PAY_URL} data-offer="cert-agencies" className="font-semibold text-primary-700 underline">buy a 10-certificate pack</a>.
                                </li>
                            </ul>

                            <h2>Who is behind this</h2>
                            <p>
                                Sibi Narendran, founder of Dooza, a small US company (Adam Laboratory Inc., a Delaware corporation). We prepare paperwork for small businesses; we are not an insurance agency or carrier.
                            </p>
                        </section>

                        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                            <h2 className="text-2xl font-bold text-slate-900">Send your first request</h2>
                            <p className="mt-2 text-slate-700">
                                Reply to the email you got from Sibi with your first request, or email <a href={START} className="font-semibold text-primary-700 underline">{REPLY_EMAIL}</a>. You can also reach us at <a href={`mailto:${FALLBACK_EMAIL}`} className="font-semibold text-primary-700 underline">{FALLBACK_EMAIL}</a>.
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
                    <TalkNowStrip source="certificates-for-agencies" offer="cert-agencies" />
                </main>
                <Footer />
            </div>
        </>
    );
}
