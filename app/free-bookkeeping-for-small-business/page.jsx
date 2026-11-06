import Link from 'next/link';
import TalkNowStrip from '@/components/TalkNowStrip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { REPLY_EMAIL } from '@/lib/contact';

// Sibi order 2026-11-06 01:14 (chat post 876eyutrtjrid858ectiisxorh): free bookkeeping, accounting and tax-filing help
// for US small businesses and individuals who can't afford a firm; meeting + speak with experts.
// Truth rules: we are not a CPA firm, we prepare, the person (or their preparer) files; no client counts, no testimonials.
const PATH = '/free-bookkeeping-for-small-business';
const TITLE = 'Free Bookkeeping and Tax Prep Help for Small Business';
const DESCRIPTION = 'Free bookkeeping, accounting and tax-filing prep for US small businesses, freelancers and individuals who can’t afford an accounting firm. Book a free call with our team; we get your books in order with you.';
const UPDATED_LABEL = 'November 6, 2026';
const BOOK = '/book?utm_source=website&utm_medium=cta&utm_campaign=booking&utm_content=free-bookkeeping';
const START = `mailto:${REPLY_EMAIL}?subject=${encodeURIComponent('Free bookkeeping help')}&body=${encodeURIComponent('Your name:\nBusiness (or "individual"):\nState:\nWhat you need (catch-up books, monthly books, tax prep, a question):\nWhat you use today (QuickBooks, Wave, a spreadsheet, a shoebox):')}`;

const HELP = [
    ['Catch-up bookkeeping', 'Months (or years) of bank and card statements sorted into income and expense categories, so you finally know where you stand.'],
    ['Monthly books', 'Each month’s transactions categorized and matched to your bank statement, with a simple profit and loss you can read.'],
    ['Tax-filing prep', 'Your numbers organized the way a tax return needs them (for example Schedule C for a sole proprietor), plus a list of what is missing. You or your preparer file.'],
    ['Free filing options', 'If your income qualifies, we point you to the IRS’s own free routes (IRS Free File and the VITA volunteer program) and get your papers ready for them.'],
    ['Plain answers', 'What you can deduct, what quarterly estimated taxes are, which records to keep. We explain; you decide.'],
];

const faqItems = [
    { question: 'Is it really free?', answer: 'Yes. Bookkeeping help, the free call with our team and tax-filing prep cost nothing. There is no card to enter. Dooza earns money elsewhere (businesses pay us for other work), and we built this for people who cannot afford an accounting firm.' },
    { question: 'Who is it for?', answer: 'US small businesses, freelancers, gig workers and individuals who cannot afford a bookkeeper or an accounting firm: a sole proprietor with a shoebox of receipts, a side business that never kept books, a family with a confusing tax year.' },
    { question: 'Do you file my tax return?', answer: 'No. We are not a CPA firm and we do not sign or file returns. We get your numbers and documents ready; you file yourself, through IRS Free File or a VITA volunteer site if you qualify, or through a paid preparer, who will spend less time (and charge less) because the work is done.' },
    { question: 'Who will I speak with?', answer: 'Someone from the Dooza team, on a free video call you book on this page. We look at what you have, tell you what is missing and agree what we will prepare for you. For anything that needs a licensed professional (an IRS notice, a legal question, signing a return) we tell you so and point you to one.' },
    { question: 'What do I need to send?', answer: 'Bank and card statements (PDF or CSV) for the period, and anything you already have: QuickBooks, Wave or a spreadsheet export, receipts, 1099s you received. Never email your SSN or passwords; we do not need them for the books.' },
    { question: 'How do you do it for free?', answer: 'We use software, including AI agents, for the sorting and matching, and a person on our team checks the result with you. That keeps the cost low enough to give it away.' },
    { question: 'Can I keep my books myself afterwards?', answer: 'Yes. On the call we can also set you up with the free Dooza Crew app, where an AI agent can sort each month’s statement for you, drafted for your approval.' },
    { question: 'Who is Dooza?', answer: 'Dooza is a small US company (Adam Laboratory Inc., a Delaware corporation) founded by Sibi Narendran. We are not a CPA firm and do not give legal or tax advice: we do the preparation work and explain it, and you make every call.' },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Free bookkeeping and tax-filing prep help',
        serviceType: 'Bookkeeping, accounting and tax preparation help for small businesses and individuals',
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        areaServed: 'US',
        audience: { '@type': 'Audience', audienceType: 'US small businesses, freelancers and individuals who cannot afford an accounting firm' },
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free.' },
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
            { '@type': 'ListItem', position: 2, name: 'Free Bookkeeping Help', item: `${SITE_URL}${PATH}` },
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

function Cta({ label = 'Book a free call' }) {
    return (
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link href={BOOK} data-offer="free-bookkeeping" className="rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
                {label}
            </Link>
            <a href={START} className="rounded-xl border border-primary-300 px-6 py-3 font-semibold text-primary-700 hover:bg-primary-50">
                Or email us
            </a>
            <span className="text-sm text-slate-600">Free. No card.</span>
        </div>
    );
}

export default function FreeBookkeepingPage() {
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
                            For US small businesses and individuals · Updated {UPDATED_LABEL}
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Free bookkeeping and tax prep help, for people who can’t afford a firm</h1>
                        <p className="mt-5 text-lg text-slate-700">
                            <strong>Book a free call with our team. We look at your statements and receipts, sort your books, and get your numbers ready for your tax return.</strong>{' '}
                            It is free for US small businesses, freelancers and individuals. We prepare; you (or your preparer) file.
                        </p>
                        <div className="mt-8">
                            <Cta />
                        </div>

                        <section className="prose prose-slate mt-14 max-w-none">
                            <h2>What we help with, free</h2>
                        </section>
                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[560px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className="px-4 py-3 font-semibold">Help</th>
                                        <th className="px-4 py-3 font-semibold">What it is</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {HELP.map(([item, what]) => (
                                        <tr key={item} className="border-b border-slate-100 align-top">
                                            <td className="px-4 py-3 font-semibold text-slate-900">{item}</td>
                                            <td className="px-4 py-3 text-slate-700">{what}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>How it works</h2>
                            <ol>
                                <li><strong>Book a free call.</strong> 30 minutes on video. Tell us what you have and what you need.</li>
                                <li><strong>Send your statements.</strong> Bank and card statements, any exports or receipts. No SSN, no passwords.</li>
                                <li><strong>We prepare.</strong> Your transactions sorted, a profit and loss, and a list of what your tax return still needs.</li>
                                <li><strong>You file.</strong> Yourself, through IRS Free File or a VITA volunteer site if you qualify, or with a preparer.</li>
                            </ol>

                            <h2>What we never do</h2>
                            <ul>
                                <li>Sign or file your tax return. We are not a CPA firm.</li>
                                <li>Give legal advice or deal with the IRS for you. If you need that, we tell you and point you to a licensed professional.</li>
                                <li>Ask for your SSN, bank passwords or card numbers.</li>
                                <li>Charge you later for this. There is no paid tier hiding behind it.</li>
                            </ul>

                            <h2>Who it fits</h2>
                            <ul>
                                <li><strong>Fits:</strong> a US sole proprietor, freelancer, gig worker, small shop or family who can’t afford a bookkeeper and wants their books and tax papers in order.</li>
                                <li><strong>Doesn’t fit:</strong> payroll, audits, IRS disputes or a business that needs a CPA’s signature. Ask on the call and we will point you to the right help.</li>
                            </ul>

                            <h2>Who is behind this</h2>
                            <p>
                                Dooza, a small US company (Adam Laboratory Inc., a Delaware corporation) founded by Sibi Narendran. We use software, including AI agents, for the sorting, and a person on our team checks it with you. That is how we can give it away.
                            </p>
                        </section>

                        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                            <h2 className="text-2xl font-bold text-slate-900">Talk to us first</h2>
                            <p className="mt-2 text-slate-700">
                                Book a free 30-minute call, or email <a href={START} className="font-semibold text-primary-700 underline">{REPLY_EMAIL}</a> with “Free bookkeeping help” in the subject.
                            </p>
                            <div className="mt-5">
                                <Cta label="Book your free call" />
                            </div>
                        </div>

                        <section className="mt-12">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>
                    </div>
                    <TalkNowStrip source="free-bookkeeping" offer="free-bookkeeping" />
                </main>
                <Footer />
            </div>
        </>
    );
}
