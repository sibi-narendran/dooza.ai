import BookingModalProvider from '@/components/BookingModalProvider';
import TalkNowStrip from '@/components/TalkNowStrip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UtmBuilder from '@/components/UtmBuilder';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

const CREW_URL = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=tool&utm_content=utm-builder';

export const metadata = {
    title: 'Free UTM Builder: Campaign URL Builder for GA4',
    description:
        'Build UTM-tagged campaign links for GA4 in seconds. Presets for Google Ads, Meta, email and LinkedIn, checks for capital letters, spaces and mediums GA4 cannot group. Free and private.',
    keywords: [
        'utm builder', 'utm generator', 'campaign url builder', 'utm link builder', 'ga4 utm builder',
        'utm parameters', 'utm tracking', 'free utm builder', 'google analytics campaign url builder', 'utm code generator',
    ],
    alternates: {
        canonical: `${SITE_URL}/utm-builder`,
    },
    openGraph: {
        title: 'Free UTM Builder | Dooza',
        description:
            'Build clean UTM-tagged campaign links for GA4. Presets, built-in checks, one-click copy. Free and private, it runs in your browser.',
        url: `${SITE_URL}/utm-builder`,
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Free UTM Builder | Dooza',
        description: 'Build clean UTM campaign links for GA4. Free, private, in-browser.',
    },
};

const faqItems = [
    {
        question: 'What are UTM parameters?',
        answer: 'UTM parameters are tags you add to the end of a link, such as ?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale. When someone clicks the link, analytics tools like Google Analytics 4 read the tags and record where the visit came from. The five classic tags are utm_source, utm_medium, utm_campaign, utm_term and utm_content; GA4 also reads utm_id.',
    },
    {
        question: 'Which UTM parameters are required?',
        answer: 'Use source, medium and campaign on every tagged link. Source says where the click came from (google, newsletter), medium says the type of channel (cpc, email, social) and campaign names the promotion. Term and content are optional: term is for paid search keywords and content tells apart two links or ads in the same campaign.',
    },
    {
        question: 'Are UTM parameters case-sensitive?',
        answer: 'Yes. GA4 treats "Email", "email" and "EMAIL" as three different values, which splits one channel into several rows in your reports. Pick lowercase for everything and stick to it. This builder lowercases values by default.',
    },
    {
        question: 'Why does my traffic show up as Unassigned in GA4?',
        answer: 'GA4 sorts visits into default channels (Paid Search, Email, Organic Social and so on) using the source and medium values. If your medium is something it does not recognize, such as "newsletter_link", the visit can land in Unassigned. Use standard medium values like cpc, email, social, paid_social, referral, display or affiliate.',
    },
    {
        question: 'Should I use UTM tags on internal links?',
        answer: 'No. A UTM tag on a link from one page of your site to another tells analytics that a new visit started from that campaign, so the real source (for example Google search) is overwritten. Use UTM tags only on links that point to your site from somewhere else: ads, emails, social posts, partner sites, QR codes.',
    },
    {
        question: 'Is this UTM builder free and private?',
        answer: 'Yes. It is free, needs no signup, and runs entirely in your browser. The URLs and values you type are never sent to a server or stored. Close the tab and they are gone.',
    },
];

const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Dooza UTM Builder',
    url: `${SITE_URL}/utm-builder`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    description:
        'Free tool that builds UTM-tagged campaign URLs for Google Analytics 4, with presets and checks for capital letters, spaces, existing tags and unrecognized mediums. Runs entirely in the browser; nothing is uploaded.',
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
            name: 'UTM Builder',
            item: `${SITE_URL}/utm-builder`,
        },
    ],
};

const steps = [
    {
        step: '1',
        title: 'Paste your landing page',
        body: 'Enter the page people should land on, then pick a preset or type source, medium and campaign yourself.',
    },
    {
        step: '2',
        title: 'Fix the flags',
        body: 'Fill the required fields, keep values lowercase, and change any medium GA4 would file under Unassigned.',
    },
    {
        step: '3',
        title: 'Use it and check it',
        body: 'Copy the link into your ad, email or post. After a test click, check GA4 Realtime or Traffic acquisition for your source and medium.',
    },
];

const internalLinks = [
    {
        title: 'Answer Engine Optimization',
        description: 'How to write pages that AI answer engines can quote and cite.',
        href: '/blog/answer-engine-optimization',
    },
    {
        title: 'FAQ Schema Generator',
        description: 'Free tool that turns your questions and answers into FAQPage JSON-LD.',
        href: '/faq-schema-generator',
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

export default function UtmBuilderPage() {
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
                                Free UTM Builder
                            </h1>
                            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                                Paste a link, fill in source, medium and campaign, and get a clean
                                UTM-tagged URL for Google Analytics 4. Presets for common channels, and
                                checks for the mistakes that split or lose your campaign data.
                            </p>
                        </div>

                        {/* Tool */}
                        <section aria-labelledby="generator-heading">
                            <h2 id="generator-heading" className="sr-only">
                                UTM builder: tag your campaign link
                            </h2>
                            <UtmBuilder />
                        </section>

                        {/* Naming rules */}
                        <section className="mt-20">
                            <h2 className="text-2xl font-bold text-slate-900 text-center">
                                UTM naming rules that keep reports clean
                            </h2>
                            <div className="mt-8 space-y-4">
                                {[
                                    {
                                        title: 'One spelling per value, all lowercase',
                                        body: 'UTM values are case-sensitive, so "Facebook" and "facebook" become two sources. Write a short list of the source and medium values your team uses and reuse it on every link.',
                                    },
                                    {
                                        title: 'Use mediums GA4 recognizes',
                                        body: 'GA4 builds its default channels (Paid Search, Email, Organic Social and others) from source and medium. Standard mediums such as cpc, email, social, paid_social, referral, display and affiliate keep visits out of Unassigned.',
                                    },
                                    {
                                        title: 'Tag links coming in, never links inside your site',
                                        body: 'Put UTM tags on ads, emails, social posts, partner links and QR codes. A tag on an internal link starts a new session and overwrites the real source of the visit.',
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
                                How to build a UTM link
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
                            <p className="mt-4 text-sm text-slate-600 text-center">
                                Want the visits you tag to come from AI answers too? Read our guides on{' '}
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
                                    Want AI agents to do the marketing work for you?
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
                    <TalkNowStrip source="utm-builder" />
                </main>

                <Footer />
            </div>
        </BookingModalProvider>
    );
}
