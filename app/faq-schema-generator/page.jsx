import BookingModalProvider from '@/components/BookingModalProvider';
import TalkNowStrip from '@/components/TalkNowStrip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FaqSchemaGenerator from '@/components/FaqSchemaGenerator';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

const CREW_URL = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=tool&utm_content=faq-schema-generator';

export const metadata = {
    title: 'Free FAQ Schema Generator (FAQPage JSON-LD)',
    description:
        'Turn your FAQs into valid FAQPage JSON-LD in seconds. Bulk paste from a spreadsheet, check for thin or duplicate answers, copy the code. Free and private.',
    keywords: [
        'faq schema generator', 'faq schema', 'faqpage schema', 'faq json-ld generator',
        'faq structured data', 'faq schema markup generator', 'free schema generator',
        'faq rich results', 'json-ld faq', 'schema markup for faq',
    ],
    alternates: {
        canonical: `${SITE_URL}/faq-schema-generator`,
    },
    openGraph: {
        title: 'Free FAQ Schema Generator | Dooza',
        description:
            'Turn your FAQs into valid FAQPage JSON-LD. Bulk paste, built-in checks, one-click copy. Free and private, it runs in your browser.',
        url: `${SITE_URL}/faq-schema-generator`,
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Free FAQ Schema Generator | Dooza',
        description: 'Turn your FAQs into valid FAQPage JSON-LD. Free, private, in-browser.',
    },
};

const faqItems = [
    {
        question: 'What is FAQ schema?',
        answer: 'FAQ schema is structured data, written in the schema.org FAQPage format, that labels the questions and answers on a page so machines can read them. It is usually added as a JSON-LD script. Each question is a Question item with its answer in an acceptedAnswer field.',
    },
    {
        question: 'Does FAQ schema still work in 2026?',
        answer: 'Partly. Since August 2023, Google shows FAQ rich results (the expandable questions under a search result) only for well-known, authoritative government and health websites. Most sites will not get that dropdown in Google. The markup is still valid schema.org, and it can help search engines and AI answer engines read your page as clean question-and-answer pairs. Treat it as a small help for understanding your page, not a guaranteed ranking or display boost.',
    },
    {
        question: 'What is the difference between FAQPage and QAPage?',
        answer: 'Use FAQPage when you (the site owner) wrote both the questions and the single official answer to each, like a help or pricing FAQ. Use QAPage when a page has one question and users can submit several answers, like a forum thread or community Q&A. This tool generates FAQPage.',
    },
    {
        question: 'Where do I put the FAQ schema code?',
        answer: 'Paste the full script tag into the HTML of the page that shows the FAQs, either in the <head> or in the <body>. Google reads JSON-LD in both places. In WordPress you can use a header-and-footer code plugin or a custom HTML block; in Next.js or React, render it in a script tag with type application/ld+json.',
    },
    {
        question: 'Do the questions have to be visible on the page?',
        answer: 'Yes. Google\'s structured data guidelines say the questions and answers in your FAQ markup must also be visible to people on the page. Do not mark up content that users cannot see, and do not use FAQ markup for advertising. Keep the schema text matching what the page shows.',
    },
    {
        question: 'Is this FAQ schema generator free and private?',
        answer: 'Yes. It is free, needs no signup, and runs entirely in your browser. Your questions and answers are never sent to a server or stored. Close the tab and they are gone.',
    },
];

const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Dooza FAQ Schema Generator',
    url: `${SITE_URL}/faq-schema-generator`,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    description:
        'Free tool that turns questions and answers into schema.org FAQPage JSON-LD, with bulk paste and checks for empty, duplicate and thin answers. Runs entirely in the browser; nothing is uploaded.',
    offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
    },
    creator: {
        '@type': 'Organization',
        name: 'Dooza',
        url: SITE_URL,
    },
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'FAQ Schema Generator',
            item: `${SITE_URL}/faq-schema-generator`,
        },
    ],
};

const steps = [
    {
        step: '1',
        title: 'Add your questions',
        body: 'Type each question and answer, or switch to Bulk paste and drop in "Q:" / "A:" lines or two columns from a spreadsheet.',
    },
    {
        step: '2',
        title: 'Fix the flags',
        body: 'Fill empty rows, merge duplicate questions, and expand answers flagged as thin. Keep the text the same as what your page shows.',
    },
    {
        step: '3',
        title: 'Paste and test',
        body: 'Copy the code into the page\'s <head> or <body>, publish, then test the live URL in Google\'s Rich Results Test and the Schema Markup Validator.',
    },
];

const internalLinks = [
    {
        title: 'Answer Engine Optimization',
        description: 'How to write pages that AI answer engines can quote and cite.',
        href: '/blog/answer-engine-optimization',
    },
    {
        title: 'What is Generative Engine Optimization?',
        description: 'How ChatGPT, Perplexity and AI Overviews pick the sources they cite.',
        href: '/blog/what-is-generative-engine-optimization',
    },
    {
        title: 'AI Slop Checker',
        description: 'Free tool that flags the phrases that make writing sound AI-generated.',
        href: '/ai-slop-checker',
    },
    {
        title: 'Dooza Blog',
        description: 'Guides on AI agents, SEO and running a business with AI.',
        href: '/blog',
    },
];

export default function FaqSchemaGeneratorPage() {
    return (
        <BookingModalProvider>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div className="min-h-screen bg-slate-50">
                <Navbar />

                <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        {/* Hero */}
                        <div className="text-center mb-10">
                            <span className="inline-block rounded-full bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 mb-4">
                                Free tool · No signup · 100% private
                            </span>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                                Free FAQ Schema Generator
                            </h1>
                            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                                Add your questions and answers below and get valid schema.org FAQPage
                                JSON-LD, ready to paste into your page. Bulk paste from a spreadsheet,
                                catch empty, duplicate and thin answers, and copy the code in one click.
                            </p>
                        </div>

                        {/* Tool */}
                        <section aria-labelledby="generator-heading">
                            <h2 id="generator-heading" className="sr-only">
                                FAQ schema generator: add your questions and answers
                            </h2>
                            <FaqSchemaGenerator />
                        </section>

                        {/* Honest note */}
                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-slate-900 text-center">
                                What FAQ schema does (and does not do) today
                            </h2>
                            <div className="mt-8 space-y-4">
                                {[
                                    {
                                        title: 'Most sites no longer get the FAQ dropdown in Google',
                                        body: 'Since August 2023, Google shows FAQ rich results only for well-known, authoritative government and health websites. If your site is not one of them, adding FAQ schema will most likely not put expandable questions under your search result.',
                                    },
                                    {
                                        title: 'It still gives machines clean question-answer pairs',
                                        body: 'FAQPage markup labels exactly which text is a question and which is its answer. That can help search engines and AI answer engines understand the page, and pages built from clear questions and direct answers are easier to quote. It is a help, not a guarantee.',
                                    },
                                    {
                                        title: 'The visible page matters more than the markup',
                                        body: 'Google requires the marked-up questions and answers to be visible on the page. Write answers that are complete on their own, keep the schema text identical to the page text, and update both together.',
                                    },
                                ].map((item) => (
                                    <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-5">
                                        <p className="font-semibold text-slate-900">{item.title}</p>
                                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* How to */}
                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-slate-900 text-center">
                                How to add FAQ schema to your page
                            </h2>
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {steps.map((s) => (
                                    <div key={s.step} className="bg-white border border-slate-200 rounded-xl p-5">
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                                            {s.step}
                                        </span>
                                        <p className="mt-3 font-semibold text-slate-900">{s.title}</p>
                                        <p className="mt-1 text-sm text-slate-600">{s.body}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-sm text-slate-600 text-center">
                                Test tools:{' '}
                                <a
                                    href="https://search.google.com/test/rich-results"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-600 hover:underline"
                                >
                                    Google Rich Results Test
                                </a>{' '}
                                ·{' '}
                                <a
                                    href="https://validator.schema.org"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-600 hover:underline"
                                >
                                    Schema Markup Validator
                                </a>
                                . The Rich Results Test may report that your page is not eligible for FAQ
                                rich results; the Schema Markup Validator confirms the markup itself is valid.
                            </p>
                            <p className="mt-4 text-sm text-slate-600 text-center">
                                Want your answers picked up by AI engines too? Read our guides on{' '}
                                <Link href="/blog/answer-engine-optimization" className="text-primary-600 hover:underline">
                                    answer engine optimization
                                </Link>{' '}
                                and{' '}
                                <Link href="/blog/what-is-generative-engine-optimization" className="text-primary-600 hover:underline">
                                    generative engine optimization
                                </Link>
                                .
                            </p>
                        </section>

                        {/* FAQ */}
                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
                                Frequently asked questions
                            </h2>
                            <FAQAccordion items={faqItems} />
                        </section>

                        {/* CTA */}
                        <section className="mt-20">
                            <div className="bg-white border border-primary-200 rounded-2xl p-6 sm:p-8 text-center">
                                <h2 className="text-2xl font-bold text-slate-900">
                                    Want AI agents to do the SEO work for you?
                                </h2>
                                <p className="mt-3 text-slate-600 max-w-xl mx-auto">
                                    Try Dooza Crew. You tell Dooza, your master agent, the job in plain words,
                                    and it builds the helper agents it needs. Before it sends or pays for
                                    anything it asks you to Approve, Edit or Reject.
                                </p>
                                <p className="mt-2 text-sm text-slate-500">
                                    $49 a month per organization after a 7-day free trial (card required).
                                </p>
                                <a
                                    href={CREW_URL}
                                    className="mt-5 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                                >
                                    Start your free trial →
                                </a>
                            </div>
                        </section>

                        {/* Internal links */}
                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
                                More from Dooza
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {internalLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="bg-white border border-slate-200 rounded-xl p-5 hover:border-primary-500 hover:shadow-sm transition-all group"
                                    >
                                        <p className="font-semibold text-slate-900 group-hover:text-primary-700">
                                            {link.title} →
                                        </p>
                                        <p className="mt-1 text-sm text-slate-600">{link.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </div>
                    <TalkNowStrip source="faq-schema-generator" />
                </main>

                <Footer />
            </div>
        </BookingModalProvider>
    );
}
