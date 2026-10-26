import BookingModalProvider from '@/components/BookingModalProvider';
import TalkNowStrip from '@/components/TalkNowStrip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LlmsTxtGenerator from '@/components/LlmsTxtGenerator';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

const CREW_URL = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=tool&utm_content=llms-txt-generator';

export const metadata = {
    title: 'Free llms.txt Generator: Create Your llms.txt File',
    description:
        'Build an llms.txt file for your site: add sections and links or paste your sitemap, then copy or download it. Free, private, runs in your browser.',
    keywords: [
        'llms.txt generator', 'llms txt generator', 'create llms.txt', 'llms.txt file',
        'what is llms.txt', 'llms.txt example', 'llms.txt format', 'llms-full.txt',
        'llms.txt vs robots.txt', 'generative engine optimization tool', 'free geo tool',
    ],
    alternates: {
        canonical: `${SITE_URL}/llms-txt-generator`,
    },
    openGraph: {
        title: 'Free llms.txt Generator | Dooza',
        description:
            'Create an llms.txt file in minutes. Add your key pages or paste your sitemap, then copy or download. Free and private, it runs in your browser.',
        url: `${SITE_URL}/llms-txt-generator`,
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Free llms.txt Generator | Dooza',
        description: 'Create an llms.txt file for your site. Free, private, in-browser.',
    },
};

const faqItems = [
    {
        question: 'What is llms.txt?',
        answer: 'llms.txt is a plain Markdown file at the root of a website (yoursite.com/llms.txt) that gives large language models a short, curated map of the site: a name, a one-line summary, and lists of the most useful pages with a note on each. Jeremy Howard proposed it at llmstxt.org in September 2024. It is a proposed standard, not an official web standard.',
    },
    {
        question: 'Do ChatGPT, Google or Perplexity actually use llms.txt?',
        answer: 'There is no confirmed public commitment from the major AI search engines to read llms.txt when they answer questions. So treat it as a low-cost bet: it takes a few minutes to make, it does no harm, and it gives you a clean summary of your site that you can reuse. It is not a replacement for good pages that answer real questions.',
    },
    {
        question: 'What is the difference between llms.txt, robots.txt and sitemap.xml?',
        answer: 'robots.txt tells crawlers what they may and may not fetch. sitemap.xml lists every URL you want search engines to find. llms.txt is a short, hand-picked guide for language models: it names the pages that matter most and says what each one is for, in Markdown a model can read directly. Most sites should have all three; they do different jobs.',
    },
    {
        question: 'What is llms-full.txt?',
        answer: 'llms-full.txt is a companion file some sites publish alongside llms.txt. Instead of links, it contains the full text of the key pages in one Markdown file, so a tool can load everything at once. It is common on developer documentation sites. This generator makes the standard llms.txt; for llms-full.txt you would paste the page content itself.',
    },
    {
        question: 'Where do I put the llms.txt file?',
        answer: 'At the root of your domain, so it loads at https://yoursite.com/llms.txt as plain text. On most hosts you upload it next to robots.txt. On WordPress you can upload it to the site root by FTP or your host\'s file manager, or use a plugin that serves it. Open the URL in your browser afterwards to check it loads.',
    },
    {
        question: 'Is this llms.txt generator free and private?',
        answer: 'Yes. It is free, needs no signup, and runs entirely in your browser. Nothing you type or paste, including your sitemap, is sent to a server. The sitemap import works by pasting the XML because the tool makes no network requests.',
    },
];

const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Dooza llms.txt Generator',
    url: `${SITE_URL}/llms-txt-generator`,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    description:
        'Free tool that builds an llms.txt file in the llmstxt.org format from your site name, summary, sections and links, or from a pasted sitemap. Runs entirely in the browser.',
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
            name: 'llms.txt Generator',
            item: `${SITE_URL}/llms-txt-generator`,
        },
    ],
};

const exampleFile = `# Acme Plumbing

> Family-run plumbing company serving Austin, TX since 1998.

We handle repairs, water heaters and drain cleaning for homes. We do not do commercial work.

## Services

- [Water heater repair](https://acme.example/water-heaters): same-day repair and replacement
- [Drain cleaning](https://acme.example/drains): clogs, camera inspections

## Optional

- [Blog](https://acme.example/blog): seasonal maintenance tips`;

const howToSteps = [
    {
        step: '1',
        title: 'Name and summary',
        body: 'Enter your site name and one sentence that says what you do and for whom. This becomes the H1 and the blockquote.',
    },
    {
        step: '2',
        title: 'Add your key pages',
        body: 'Add sections (Services, Docs, Pricing) and the links that matter, or paste your sitemap.xml to fill them in, then trim.',
    },
    {
        step: '3',
        title: 'Upload to your root',
        body: 'Copy or download the file and upload it so it loads at yoursite.com/llms.txt. Open that URL to check it.',
    },
];

const internalLinks = [
    {
        title: 'Answer Engine Optimization',
        description: 'How to get your pages quoted in AI answers from ChatGPT, Perplexity and Google.',
        href: '/blog/answer-engine-optimization',
    },
    {
        title: 'What Is Generative Engine Optimization?',
        description: 'The basics of GEO and how it differs from classic SEO.',
        href: '/blog/what-is-generative-engine-optimization',
    },
    {
        title: 'AI Slop Checker',
        description: 'Free tool that flags the phrases that make writing sound AI-generated.',
        href: '/ai-slop-checker',
    },
    {
        title: 'Dooza Blog',
        description: 'Guides on AI agents, automation and getting found in AI search.',
        href: '/blog',
    },
];

export default function LlmsTxtGeneratorPage() {
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
                                Free tool · No signup · Runs in your browser
                            </span>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                                Free llms.txt Generator
                            </h1>
                            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                                llms.txt is a short Markdown file at the root of your site (yoursite.com/llms.txt)
                                that tells AI models what your site is and which pages matter most. Fill in the
                                form or paste your sitemap, then copy or download the file.
                            </p>
                            <p className="mt-3 text-sm text-slate-500 max-w-2xl mx-auto">
                                It is a proposed standard from{' '}
                                <a
                                    href="https://llmstxt.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-slate-700"
                                >
                                    llmstxt.org
                                </a>
                                , published by Jeremy Howard in September 2024. Support from AI engines is not
                                guaranteed: no major AI search engine has publicly committed to reading it. It is
                                cheap to add, so many sites publish one anyway.
                            </p>
                        </div>

                        {/* Tool */}
                        <section aria-labelledby="generator-heading">
                            <h2 id="generator-heading" className="sr-only">
                                Create your llms.txt file
                            </h2>
                            <LlmsTxtGenerator />
                        </section>

                        {/* How to use */}
                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-slate-900 text-center">
                                How to use the llms.txt generator
                            </h2>
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {howToSteps.map((s) => (
                                    <div key={s.step} className="bg-white border border-slate-200 rounded-xl p-5">
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                                            {s.step}
                                        </span>
                                        <p className="mt-3 font-semibold text-slate-900">{s.title}</p>
                                        <p className="mt-1 text-sm text-slate-600">{s.body}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Format */}
                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-slate-900 text-center">
                                What an llms.txt file looks like
                            </h2>
                            <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
                                The format is plain Markdown in a fixed order: an H1 with the site name, a
                                blockquote summary, optional paragraphs, then H2 sections of links written as
                                &quot;- [Title](url): note&quot;. A section called Optional holds links a tool can
                                skip when it needs a shorter version.
                            </p>
                            <pre className="mt-8 overflow-auto rounded-xl bg-slate-900 p-5 text-xs leading-relaxed text-slate-100 whitespace-pre-wrap">
                                {exampleFile}
                            </pre>
                            <p className="mt-4 text-sm text-slate-600 text-center">
                                Want a real one? See{' '}
                                <a href="/llms.txt" className="text-primary-600 hover:underline">
                                    dooza.ai/llms.txt
                                </a>
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

                        {/* Crew CTA */}
                        <section className="mt-20">
                            <div className="bg-white border border-primary-100 rounded-2xl p-6 sm:p-8 text-center">
                                <h2 className="text-2xl font-bold text-slate-900">
                                    Want AI agents to do the GEO work for you?
                                </h2>
                                <p className="mt-3 text-slate-600 max-w-xl mx-auto">
                                    Try Dooza Crew. You tell Dooza, your master agent, the job in plain words, and it
                                    builds the helper agents it needs. Before it sends or pays for anything it asks
                                    you to Approve, Edit or Reject.
                                </p>
                                <p className="mt-2 text-sm text-slate-500">
                                    $49 a month per organization after a 7-day free trial (card required).
                                </p>
                                <a
                                    href={CREW_URL}
                                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary-600 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-colors"
                                >
                                    Try Dooza Crew →
                                </a>
                            </div>
                        </section>

                        {/* Internal links */}
                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
                                Learn more about getting found in AI search
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
                    <TalkNowStrip source="llms-txt-generator" />
                </main>

                <Footer />
            </div>
        </BookingModalProvider>
    );
}
