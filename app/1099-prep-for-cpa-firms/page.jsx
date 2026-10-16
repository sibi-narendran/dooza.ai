import Link from 'next/link';
import TalkNowStrip from '@/components/TalkNowStrip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { CONTACT_EMAIL } from '@/lib/contact';

// CPA 1099 offer page (Odysseus card /home/odysseus/learned/knowledge/offers/CPA_WORK_1099_2026-10-15.md).
// Reply-stage page: Orion links it after a yes; not linked in cold email 1. Truth rules: no client counts, no testimonials, we prepare, the firm files.
const PATH = '/1099-prep-for-cpa-firms';
const TITLE = '1099-NEC Prep for CPA Firms: First Client Free';
const DESCRIPTION = 'For CPA and EA firms: send two QuickBooks reports, get back who needs a 1099-NEC under the new $2,000 rule, who is missing a W-9, and ready-to-send W-9 requests. First client free, then $99 per client.';
const UPDATED_LABEL = 'October 16, 2026';
const BOOK = '/book?utm_source=website&utm_medium=cta&utm_campaign=booking&utm_content=1099-prep-for-cpa-firms';
const START = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Free 1099 client')}&body=${encodeURIComponent('Firm name:\nYour name:\nClient (nickname is fine):\n\nAttach: Vendor Contact List + Transaction List by Vendor (2026 year to date), Tax ID column removed.')}`;

const RETURNS = [
    ['Who likely needs a 1099-NEC', 'Each vendor paid $2,000 or more for services in 2026, with the total and the payments behind it.'],
    ['Payments to check by hand', 'Card and PayPal payments (usually reported on a 1099-K by the processor, not by your client) and vendors that look like corporations, flagged for you to confirm.'],
    ['Who is missing a W-9', 'Every likely 1099 vendor with no Tax ID or address on file.'],
    ['W-9 request emails', 'One ready-to-send email per vendor, in your firm’s name. You or your client send them.'],
    ['Judgment calls', 'A short list of payees we could not decide, with the reason, for your review.'],
];

const faqItems = [
    {
        question: 'What changed for 1099-NEC in 2026?',
        answer: 'For payments made after December 31, 2025, the reporting threshold for 1099-NEC and most 1099-MISC boxes rose from $600 to $2,000 (IRS Instructions for Forms 1099-MISC and 1099-NEC). So January 2027 is the first filing season under the new line, and a vendor list built on the old $600 rule will flag payees who no longer need a form.',
    },
    {
        question: 'When are 2026 Forms 1099-NEC due?',
        answer: 'January 31 is the deadline for both the IRS copy and the recipient copy. January 31, 2027 is a Sunday, so the due date moves to Monday, February 1, 2027. W-9 chasing is the slow part, which is why November and December are the time to start.',
    },
    {
        question: 'What do you need from us?',
        answer: 'Two QuickBooks Online reports for one client: the Vendor Contact List and Transaction List by Vendor for 2026 year to date, exported with the Tax ID column removed. No login, no bank details, no SSNs or EINs.',
    },
    {
        question: 'Do you file the 1099s?',
        answer: 'No. We prepare; your firm reviews and files. We never log in to your or your client’s systems, never post entries and never contact your client or their vendors.',
    },
    {
        question: 'How much does it cost?',
        answer: 'The first client is free. After that it is $99 per client for up to 50 payees, plus $5 per payee above 50. No subscription.',
    },
    {
        question: 'Why is the first client free?',
        answer: 'We are new to CPA firms and want to prove the work holds up to your review before you pay for anything.',
    },
    {
        question: 'What about client consent under section 7216?',
        answer: 'Treat Dooza like any outside help that sees client tax information: make sure your client consent or engagement terms cover sharing it with us. We ask for exports with Tax IDs removed so we see as little as possible.',
    },
    {
        question: 'Who is Dooza?',
        answer: 'Dooza is a small US company (Adam Laboratory Inc., a Delaware corporation) founded by Sibi Narendran. We are not a CPA firm and do not give tax advice: we do the preparation work with software, including AI, and your firm makes every call and files.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: '1099-NEC preparation for CPA firms',
        serviceType: '1099-NEC readiness list and W-9 requests for accounting firms',
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        areaServed: 'US',
        audience: { '@type': 'BusinessAudience', audienceType: 'US CPA and EA firms that prepare 1099s for small business clients' },
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: { '@type': 'Offer', price: '99', priceCurrency: 'USD', description: 'Per client, up to 50 payees (+$5 per payee above 50). First client free.' },
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
            { '@type': 'ListItem', position: 2, name: '1099-NEC Prep for CPA Firms', item: `${SITE_URL}${PATH}` },
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

function Cta({ label = 'Ask on a call' }) {
    return (
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a href={START} data-offer="cpa-1099" className="rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
                Send your free client
            </a>
            <Link href={BOOK} className="rounded-xl border border-primary-300 px-6 py-3 font-semibold text-primary-700 hover:bg-primary-50">
                {label}
            </Link>
            <span className="text-sm text-slate-600">First client free, then $99 per client.</span>
        </div>
    );
}

export default function Cpa1099Page() {
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
                            For CPA and EA firms · Updated {UPDATED_LABEL}
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">1099-NEC prep for CPA firms, first client free</h1>
                        <p className="mt-5 text-lg text-slate-700">
                            <strong>Send two QuickBooks reports for one client. The next business day you get who likely needs a 1099-NEC under the new $2,000 rule, who is missing a W-9, and the W-9 request emails, ready to send.</strong>{' '}
                            You review and file. We never log in or contact your client. The first client is free, then $99 per client.
                        </p>
                        <div className="mt-8">
                            <Cta />
                        </div>

                        <section className="prose prose-slate mt-14 max-w-none">
                            <h2>Why this season is different</h2>
                            <p>
                                For payments made after December 31, 2025, the 1099-NEC reporting threshold rose from $600 to $2,000 (IRS Instructions for Forms 1099-MISC and 1099-NEC). January 2027 is the first season under the new line, so vendor lists set up for $600 will flag payees who no longer need a form. The forms for 2026 payments are due Monday, February 1, 2027 (January 31 falls on a Sunday), and chasing missing W-9s takes weeks.
                            </p>

                            <h2>What you send</h2>
                            <ul>
                                <li>The <strong>Vendor Contact List</strong> report from QuickBooks Online.</li>
                                <li>The <strong>Transaction List by Vendor</strong> report for 2026 year to date.</li>
                            </ul>
                            <p>Remove the Tax ID column before you export. We don’t need logins, bank details, SSNs or EINs.</p>

                            <h2>What you get back, the next business day</h2>
                        </section>
                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[560px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className="px-4 py-3 font-semibold">Item</th>
                                        <th className="px-4 py-3 font-semibold">What it is</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {RETURNS.map(([item, what]) => (
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
                                <li>File anything. Your firm reviews and files.</li>
                                <li>Log in to your or your client’s QuickBooks, or post entries.</li>
                                <li>Contact your client or their vendors.</li>
                                <li>Give tax advice. We are not a CPA firm; every judgment call is yours.</li>
                            </ul>

                            <h2>What it costs</h2>
                            <ul>
                                <li>First client free.</li>
                                <li>Then $99 per client for up to 50 payees, plus $5 per payee above 50.</li>
                                <li>No subscription. You send clients when you want them done.</li>
                            </ul>

                            <h2>Who it fits</h2>
                            <ul>
                                <li><strong>Fits:</strong> a US CPA or EA firm that prepares 1099s for small business clients on QuickBooks Online and wants the vendor review done before the January rush.</li>
                                <li><strong>Doesn’t fit:</strong> a firm that wants someone to file the forms, or clients not on QuickBooks Online (ask us on a call first).</li>
                            </ul>

                            <h2>Who is behind this</h2>
                            <p>
                                Dooza, a small US company (Adam Laboratory Inc., a Delaware corporation) founded by Sibi Narendran. We do the preparation work with software, including AI. We are new to CPA firms, which is why the first client is free: judge the work before you pay for anything.
                            </p>
                        </section>

                        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                            <h2 className="text-2xl font-bold text-slate-900">Start with one client</h2>
                            <p className="mt-2 text-slate-700">
                                Email the two reports to <a href={START} className="font-semibold text-primary-700 underline">{CONTACT_EMAIL}</a> with “Free 1099 client” in the subject, or book a free 30-minute call first.
                            </p>
                            <div className="mt-5">
                                <Cta label="Book a call first" />
                            </div>
                        </div>

                        <section className="mt-12">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>
                    </div>
                    <TalkNowStrip source="1099-prep-for-cpa-firms" offer="cpa-1099" />
                </main>
                <Footer />
            </div>
        </>
    );
}
