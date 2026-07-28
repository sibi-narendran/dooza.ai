import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SlopCheckerEmbed from '@/components/SlopCheckerEmbed';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata = {
    title: 'Free AI Slop Checker: Find AI-Sounding Phrases in Your Writing',
    description:
        'Paste your text and instantly flag 20+ patterns that make writing sound AI-generated: binary contrasts, throat-clearing openers, fake-profound endings, and more. Free, private, runs in your browser.',
    keywords: [
        'ai slop checker', 'ai writing detector', 'ai slop detector', 'make writing sound human',
        'ai generated text detector', 'remove ai slop', 'humanize ai writing', 'ai phrase checker',
        'ai writing checker', 'free ai detector alternative', 'ai content checker',
        'how to make ai writing sound human', 'chatgpt writing detector',
    ],
    alternates: {
        canonical: `${SITE_URL}/ai-slop-checker`,
    },
    openGraph: {
        title: 'Free AI Slop Checker | Dooza',
        description:
            'Paste your writing and flag 20+ patterns that make it sound AI-generated. Free and private, it runs entirely in your browser.',
        url: `${SITE_URL}/ai-slop-checker`,
        type: 'website',
        images: [
            {
                url: `${SITE_URL}/images/ai-slop-checker-og.png`,
                width: 1200,
                height: 630,
                alt: 'Dooza AI Slop Checker: flag the phrases that make writing sound AI-generated',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free AI Slop Checker | Dooza',
        description: 'Flag the phrases that make your writing sound AI-generated. Free, private, in-browser.',
        images: [`${SITE_URL}/images/ai-slop-checker-og.png`],
    },
};

const faqItems = [
    {
        question: 'What is AI slop?',
        answer: 'AI slop is the low-effort, formulaic phrasing that large language models produce by default: openers like "Here\'s the thing", constructions like "It\'s not X. It\'s Y.", and endings like "The future isn\'t coming. It\'s already here." Readers increasingly recognize these shapes and trust the writing less because of them.',
    },
    {
        question: 'Is this an AI content detector?',
        answer: 'No. AI detectors guess a probability that text was machine-written, and they are often wrong. This tool does something more useful: it names the specific patterns in your text that read as AI-generated, quotes the exact line, and tells you how to fix it. Named evidence beats a guess.',
    },
    {
        question: 'Is my text stored or sent anywhere?',
        answer: 'No. The checker runs entirely in your browser with a rule-based engine. Your text never leaves your device. There is no server call, no logging, and no account required.',
    },
    {
        question: 'What patterns does it check for?',
        answer: 'More than 20, including overused AI words (delve, leverage, tapestry), throat-clearing openers, faux-insight setups, colon reveals, binary contrasts, superficial "-ing" analysis, importance puffery, weasel attribution, fake-strong verbs, negative listing, dramatic fragmentation, rhetorical setups, fake-profound endings, summary recaps, and em-dash overuse.',
    },
    {
        question: 'How do I make AI writing sound more human?',
        answer: 'Write your first draft yourself, use AI (if you like) to edit for grammar and clarity, then paste the result here. Fix the flagged lines in your own words and do one final read-through by hand. Your thinking and your voice stay in the writing. The tool just points at the tells.',
    },
    {
        question: 'Where do the patterns come from?',
        answer: 'The pattern definitions are adapted from Peter Yang\'s open-source /no-ai-slop skill, released under the MIT license.',
    },
];

const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Dooza AI Slop Checker',
    url: `${SITE_URL}/ai-slop-checker`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    description:
        'Free tool that flags 20+ patterns that make writing sound AI-generated. Runs entirely in the browser; text is never uploaded.',
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
            name: 'AI Slop Checker',
            item: `${SITE_URL}/ai-slop-checker`,
        },
    ],
};

const patternList = [
    { name: 'Binary contrasts', example: '"It\'s not X. It\'s Y."' },
    { name: 'Throat-clearing openers', example: '"Here\'s the thing…"' },
    { name: 'Faux-insight setups', example: '"What nobody tells you…"' },
    { name: 'Colon reveals', example: '"The best part: it learns."' },
    { name: 'Superficial analysis', example: '"…highlighting the team\'s commitment"' },
    { name: 'Importance puffery', example: '"marks a pivotal moment"' },
    { name: 'Weasel attribution', example: '"experts agree", "studies show"' },
    { name: 'Fake-strong verbs', example: '"serves as a centralized hub"' },
    { name: 'Negative listing', example: '"Not a X. Not a Y. A Z."' },
    { name: 'Dramatic fragmentation', example: '"That\'s it. That\'s the whole thing."' },
    { name: 'Rhetorical setups', example: '"What if I told you…"' },
    { name: 'Fake-profound endings', example: '"The future isn\'t coming. It\'s already here."' },
];

const beforeAfterExamples = [
    {
        before: 'In today\'s fast-paced digital landscape, leveraging cutting-edge AI is not just an option. It\'s a necessity.',
        after: 'Most teams we work with already use AI every day. The ones falling behind are the ones still debating it.',
        patterns: ['Filler phrase', 'Overused AI words', 'Binary contrast'],
    },
    {
        before: 'Our transformative platform serves as a centralized hub, highlighting our unwavering commitment to innovation.',
        after: 'The platform keeps your docs, tasks, and approvals in one place. We rebuilt it twice to get there.',
        patterns: ['Buzzwords', 'Fake-strong verb', 'Superficial analysis'],
    },
    {
        before: 'The future of content isn\'t coming. It\'s already here. In conclusion, delve into this ever-evolving realm.',
        after: 'Content teams shipped 3x more drafts this year than last. The gap keeps widening.',
        patterns: ['Fake-profound ending', 'Recap ending', 'Overused AI words'],
    },
];

const internalLinks = [
    {
        title: 'AI Content Automation',
        description: 'How Dooza builds content systems that sound like you, not like a model.',
        href: '/ai-content-automation',
    },
    {
        title: 'AI Blog Automation',
        description: 'Publish SEO blog posts on a schedule without losing your voice.',
        href: '/ai-blog-automation',
    },
    {
        title: 'Workflow Automation',
        description: 'Automate the repeat work in your business with AI workflows.',
        href: '/workflow-automation',
    },
    {
        title: 'Dooza Blog',
        description: 'Guides on AI employees, automation, and running a business with AI.',
        href: '/blog',
    },
];

export default function AiSlopCheckerPage() {
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
                                AI Slop Checker
                            </h1>
                            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                                Paste your writing and instantly flag the 20+ patterns that make text
                                sound AI-generated, so you can cut them and keep your own voice.
                            </p>
                        </div>

                        {/* Tool — embedded from the standalone app hosted on Vercel */}
                        <section aria-labelledby="checker-heading">
                            <h2 id="checker-heading" className="sr-only">
                                Free AI writing checker: paste your text
                            </h2>
                            <SlopCheckerEmbed />
                        </section>

                        {/* Why it matters */}
                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-slate-900 text-center">
                                Why AI-sounding writing costs you readers
                            </h2>
                            <div className="mt-8 space-y-4">
                                {[
                                    {
                                        title: 'Readers pattern-match faster than ever',
                                        body: 'After two years of AI-generated content flooding every feed, people recognize the shapes: the "It\'s not X. It\'s Y." constructions, the dramatic one-line paragraphs, the fake-profound endings. Once a reader spots them, they stop trusting the rest of the piece, including the parts you actually thought about.',
                                    },
                                    {
                                        title: 'AI detectors guess. Patterns are evidence.',
                                        body: 'Detector tools output a probability, and they are wrong often enough to accuse human writers. This checker takes the opposite approach: it shows you the exact line, names the exact pattern, and lets you decide. No score, no false verdicts, just specific edits you can make.',
                                    },
                                    {
                                        title: 'Search engines reward writing people actually read',
                                        body: 'Formulaic AI text tends to read the same across every site that publishes it. Writing with a real voice keeps people on the page longer, earns links, and gives Google a reason to rank you over the thousand near-identical articles on the same topic.',
                                    },
                                ].map((item) => (
                                    <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-5">
                                        <p className="font-semibold text-slate-900">{item.title}</p>
                                        <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Patterns */}
                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-slate-900 text-center">
                                The patterns this tool catches
                            </h2>
                            <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
                                These constructions show up constantly in AI-generated drafts. Once you
                                know their shape, you start seeing them everywhere.
                            </p>
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {patternList.map((p) => (
                                    <div key={p.name} className="bg-white border border-slate-200 rounded-xl p-4">
                                        <p className="font-semibold text-slate-900 text-sm">{p.name}</p>
                                        <p className="text-sm text-slate-500 mt-1 italic">{p.example}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-6 text-xs text-slate-400 text-center">
                                Pattern definitions adapted from Peter Yang&apos;s open-source{' '}
                                <a
                                    href="https://github.com/petergyang/no-ai-slop"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline hover:text-slate-600"
                                >
                                    /no-ai-slop
                                </a>{' '}
                                (MIT license).
                            </p>
                        </section>

                        {/* Before / after */}
                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-slate-900 text-center">
                                AI slop vs human writing: real examples
                            </h2>
                            <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">
                                Same point, two ways. The first version trips the checker. The second
                                sounds like a person with something to say.
                            </p>
                            <div className="mt-8 space-y-6">
                                {beforeAfterExamples.map((ex, i) => (
                                    <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
                                        <div className="flex flex-wrap gap-1.5 mb-3">
                                            {ex.patterns.map((p) => (
                                                <span key={p} className="inline-flex items-center rounded-full bg-red-50 text-red-700 text-xs font-semibold px-2.5 py-0.5">
                                                    {p}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-sm text-slate-500 line-through decoration-red-300 leading-relaxed">
                                            {ex.before}
                                        </p>
                                        <p className="text-sm text-slate-900 font-medium mt-3 leading-relaxed">
                                            {ex.after}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* How to use */}
                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-slate-900 text-center">
                                How to write with AI without sounding like it
                            </h2>
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    {
                                        step: '1',
                                        title: 'Draft it yourself',
                                        body: 'Write or dictate a rough first draft without AI. Your thinking and your voice start in the piece.',
                                    },
                                    {
                                        step: '2',
                                        title: 'Let AI tighten it',
                                        body: 'Use AI for grammar, clarity, and structure: the middle of the process, not the start or the end.',
                                    },
                                    {
                                        step: '3',
                                        title: 'Check and hand-pass',
                                        body: 'Run the text through this checker, fix the flagged lines in your own words, then read it once more by hand.',
                                    },
                                ].map((s) => (
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

                        {/* FAQ */}
                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
                                Frequently asked questions
                            </h2>
                            <FAQAccordion items={faqItems} />
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
                </main>

                <Footer />
            </div>
        </BookingModalProvider>
    );
}
