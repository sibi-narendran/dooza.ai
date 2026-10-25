import Link from 'next/link';
import {
    ListChecks,
    MessageSquareText,
    PhoneCall,
    ShieldCheck,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { AdsFooter, AdsHeader, isAdsVisit, withSearchParams } from '@/components/ai-receptionist/AdsChrome';
import MissedCallVideo from '@/components/ai-receptionist/MissedCallVideo';
import StickyCtaBar from '@/components/ai-receptionist/StickyCtaBar';
import { crewSignupUrl } from '@/lib/crewUrl';
import { SITE_URL } from '@/lib/site';
import { generateFAQSchema } from '@/lib/industryData';
import {
    PILOT_PROMISE,
    RECEPTIONIST_FAQ,
    RECEPTIONIST_KEYWORDS,
    RECEPTIONIST_VARIANTS,
    TRADES_LIST,
    TRADE_MOMENTS,
    getReceptionistVariant,
} from '@/lib/aiReceptionistData';

const pageUrl = `${SITE_URL}/ai-receptionist`;
const base = RECEPTIONIST_VARIANTS.default;

export const metadata = {
    title: { absolute: base.metaTitle },
    description: base.metaDescription,
    keywords: RECEPTIONIST_KEYWORDS,
    alternates: { canonical: pageUrl },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
    },
    openGraph: {
        title: base.metaTitle,
        description: base.metaDescription,
        url: pageUrl,
        siteName: 'Dooza',
        type: 'website',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza Crew AI receptionist' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: base.metaTitle,
        description: base.metaDescription,
        images: [`${SITE_URL}/logo.png`],
    },
};

const WHAT_IT_DOES = [
    { icon: PhoneCall, text: 'Crew agents take phone calls too. It is included in your Crew plan, so there is no separate phone service to buy.' },
    { icon: MessageSquareText, text: 'You chat with your agents (a lead agent plus helper agents) on web or phone.' },
    { icon: ListChecks, text: 'They browse the web and write files in their own workspace.' },
    { icon: ShieldCheck, text: 'Before an agent sends or pays, it asks you in chat: Approve, Edit or Reject.' },
];

const PILOT_STEPS = [
    'Start the 7-day free trial (card required).',
    'Chat with your lead agent on web or phone.',
    'Crew agents take phone calls too, included in your Crew plan.',
    'Before an agent sends or pays, it asks you in chat: Approve, Edit or Reject.',
];

const primaryButton =
    'inline-flex w-full items-center justify-center rounded-xl bg-primary-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary-900/20 transition hover:bg-primary-800 sm:w-auto';
const secondaryButton =
    'inline-flex w-full items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:border-primary-600 hover:text-primary-800 sm:w-auto';

export default async function AiReceptionistPage(props) {
    const searchParams = await props.searchParams;
    const variant = getReceptionistVariant(searchParams?.v);
    const adsMode = isAdsVisit(searchParams);
    const bookHref = withSearchParams('/book', searchParams);
    const payHref = crewSignupUrl(variant.key === 'default' ? 'ai-receptionist-cta' : `ai-receptionist-${variant.key}-cta`);

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza Crew',
        serviceType: 'AI agents that take phone calls and do web work for HVAC, plumbing, electrical, roofing and other trades',
        description: base.metaDescription,
        url: pageUrl,
        areaServed: 'US',
        provider: {
            '@type': 'Organization',
            name: 'Dooza',
            url: SITE_URL,
            logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
        },
        offers: {
            '@type': 'Offer',
            name: 'Dooza Crew, monthly per organization',
            price: '49',
            priceCurrency: 'USD',
            url: 'https://crew.dooza.ai',
            description: '$49 per organization per month after a 7-day free trial (card required). Phone calls are included in your Crew plan.',
            availability: 'https://schema.org/InStock',
        },
    };

    const videoSchema = {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: 'What Is an AI Receptionist? How It Works in 5 Steps (+ What It Costs)',
        description: "How an AI receptionist answers, qualifies, books and hands off a call in five steps, and what 100 calls a month costs on published plans. Made by Dooza.",
        thumbnailUrl: ['https://i.ytimg.com/vi/g7nts4pBo4U/maxresdefault.jpg'],
        uploadDate: '2026-10-08',
        duration: 'PT4M8S',
        embedUrl: 'https://www.youtube.com/embed/g7nts4pBo4U',
        contentUrl: 'https://www.youtube.com/watch?v=g7nts4pBo4U',
        author: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(RECEPTIONIST_FAQ)) }} />

            {adsMode ? <AdsHeader /> : <Navbar variant="light" />}

            <main id="main-content" className="bg-white text-slate-900">
                {/* 1. Above the fold */}
                <section className={`relative overflow-hidden px-4 pb-14 sm:px-6 ${adsMode ? 'pt-10 sm:pt-16' : 'pt-28 sm:pt-36'}`}>
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(13,148,136,0.12),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(13,148,136,0.08),transparent_35%)]" />
                    <div className="relative mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                            {variant.headline}
                        </h1>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                            {variant.subhead}
                        </p>
                        <div id="hero-actions" className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                            <a href={payHref} data-offer="crew" className={primaryButton}>
                                Try Dooza Crew free for 7 days
                            </a>
                        </div>
                        <p className="mt-5 text-sm font-medium text-slate-600">
                            {PILOT_PROMISE} <Link href={bookHref} className="underline">Questions? Book a free call.</Link>
                        </p>
                    </div>
                </section>

                {/* 2. The problem */}
                <section id="problem" className="px-4 py-16 sm:px-6 sm:py-24">
                    <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_auto]">
                        <div>
                            <div className="space-y-4 text-2xl font-bold leading-snug tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
                                <p>You are under a house and the phone rings.</p>
                                <p className="text-slate-400">It goes to voicemail.</p>
                                <p>The caller phones the next company in the search results.</p>
                            </div>
                            <p className="mt-8 border-l-4 border-primary-600 pl-4 text-lg font-semibold text-slate-800 sm:text-xl">
                                A missed call can be a service call, or a whole replacement job, that goes to the next company.
                            </p>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <MissedCallVideo src="/ai-receptionist/missed-call.mp4" poster="/ai-receptionist/missed-call-poster.jpg" />
                        </div>
                    </div>
                </section>

                {/* 3. What it does */}
                <section id="what-it-does" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-24">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">What it does</h2>
                        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                            {WHAT_IT_DOES.map(({ icon: Icon, text }) => (
                                <li key={text} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <p className="text-base font-medium leading-relaxed text-slate-800">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* 4. Built for the trades */}
                <section id="who-its-for" className="px-4 py-16 sm:px-6 sm:py-24">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Calls missed on the job</h2>
                        <p className="mt-3 text-slate-600">{TRADES_LIST}</p>
                        {!adsMode && <p className="mt-2 text-slate-600">Prices by trade: <Link href="/hvac-answering-service" className="font-semibold text-primary-700 underline underline-offset-4 hover:text-primary-900">HVAC</Link>, <Link href="/plumbing-answering-service" className="font-semibold text-primary-700 underline underline-offset-4 hover:text-primary-900">plumbing</Link>, <Link href="/garage-door-answering-service" className="font-semibold text-primary-700 underline underline-offset-4 hover:text-primary-900">garage door</Link> and <Link href="/window-tint-answering-service" className="font-semibold text-primary-700 underline underline-offset-4 hover:text-primary-900">window tint</Link>. Any other small business: <Link href="/ai-receptionist" className="font-semibold text-primary-700 underline underline-offset-4 hover:text-primary-900">AI answering service for small business</Link> (Dooza Crew: $49/mo per organization).</p>}
                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {TRADE_MOMENTS.map((moment, index) => (
                                <div
                                    key={moment.key}
                                    className={`rounded-2xl border p-6 ${index === 0 ? 'border-primary-300 bg-primary-50' : 'border-slate-200 bg-white'}`}
                                >
                                    <h3 className="text-lg font-bold text-slate-950">{moment.name}</h3>
                                    <p className="mt-3 text-slate-600">{moment.pain}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 font-semibold text-slate-900">Crew agents take phone calls too. It is included in your Crew plan, so there is no separate phone service to buy.</p>
                    </div>
                </section>

                {/* 5. How it works */}
                <section id="how-it-works" className="bg-primary-50 px-4 py-16 sm:px-6 sm:py-24">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">How it works</h2>
                        <ol className="mt-8 grid gap-4 sm:grid-cols-2">
                            {PILOT_STEPS.map((step, index) => (
                                <li key={step} className="flex gap-4 rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-extrabold text-white">
                                        {index + 1}
                                    </span>
                                    <p className="text-base font-medium leading-relaxed text-slate-800">{step}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                {/* 6. Explainer video */}
                <section id="video" className="px-4 py-16 sm:px-6 sm:py-24">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">What is an AI receptionist? The 4-minute version</h2>
                        <p className="mt-4 text-base leading-relaxed text-slate-700">How AI receptionists in general answer, qualify, book and hand off a call, and what 100 calls a month costs on published plans.</p>
                        <div className="mt-8">
                            <YouTubeEmbed videoId="g7nts4pBo4U" title="What Is an AI Receptionist? How It Works in 5 Steps (+ What It Costs)" />
                        </div>
                    </div>
                </section>

                {/* 7. Objections, placed before the booking section so the ask closes the page */}
                <section id="faq" className="px-4 py-16 sm:px-6 sm:py-24">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">The questions everyone asks</h2>
                        <dl className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                            {RECEPTIONIST_FAQ.map((item) => (
                                <div key={item.key} className="py-5">
                                    <dt className="text-lg font-bold text-slate-950">{item.question}</dt>
                                    <dd className="mt-1 text-slate-600">
                                        {item.answer}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        {!adsMode && (
                            <p className="mt-6 text-slate-600">
                                Comparing options? Our free{' '}
                                <Link href="/ai-receptionist-cost-calculator" className="font-semibold text-primary-700 underline underline-offset-4 hover:text-primary-900">AI receptionist cost calculator</Link>{' '}
                                shows what your call volume would cost on 13 AI receptionists and 5 human answering services, from prices checked on each vendor’s site.{' '}
                                Switching from a live-receptionist service? See{' '}
                                <Link href="/smith-ai-alternatives" className="font-semibold text-primary-700 underline underline-offset-4 hover:text-primary-900">Smith.ai alternatives</Link>{' '}and{' '}
                                <Link href="/ruby-alternatives" className="font-semibold text-primary-700 underline underline-offset-4 hover:text-primary-900">Ruby alternatives</Link>.
                            </p>
                        )}
                    </div>
                </section>

                {/* 6. Book the pilot meeting */}
                <section id="pilot" className="scroll-mt-16 bg-slate-950 px-4 pb-24 pt-16 text-white sm:px-6 sm:pb-28 sm:pt-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-300">$49/month per organization · 7-day free trial</p>
                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight !text-white sm:text-4xl">Stop sending callers to voicemail.</h2>
                        <p className="mt-4 text-lg leading-relaxed text-slate-200 sm:text-xl">
                            {PILOT_PROMISE}
                        </p>
                        <div className="mt-8">
                            <a href={payHref} data-offer="crew" className="inline-flex w-full items-center justify-center rounded-xl bg-primary-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-lg shadow-primary-900/30 transition hover:bg-primary-400 sm:w-auto">
                                Try Dooza Crew free for 7 days
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-slate-300"><Link href={bookHref} className="underline">Questions first? Book a free call.</Link></p>
                    </div>
                </section>
            </main>

            {adsMode ? <AdsFooter /> : <Footer variant="light" />}

            <StickyCtaBar bookHref={payHref} label="Try Dooza Crew free" />
        </>
    );
}
