import Link from 'next/link';
import {
    CalendarCheck,
    ListChecks,
    MessageSquareText,
    PhoneCall,
    ShieldCheck,
    UserRound,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AdsFooter, AdsHeader, isAdsVisit, withSearchParams } from '@/components/ai-receptionist/AdsChrome';
import DemoCallPlayer from '@/components/ai-receptionist/DemoCallPlayer';
import FounderNote from '@/components/ai-receptionist/FounderNote';
import MissedCallVideo from '@/components/ai-receptionist/MissedCallVideo';
import PlayDemoButton from '@/components/ai-receptionist/PlayDemoButton';
import StickyCtaBar from '@/components/ai-receptionist/StickyCtaBar';
import TextPilotLink from '@/components/ai-receptionist/TextPilotLink';
import { SITE_URL } from '@/lib/site';
import { generateFAQSchema } from '@/lib/industryData';
import { RECEPTIONIST_DEMOS } from '@/lib/aiReceptionistDemos';
import {
    DEMO_PHONE_E164,
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
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza AI receptionist' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: base.metaTitle,
        description: base.metaDescription,
        images: [`${SITE_URL}/logo.png`],
    },
};

const WHAT_IT_DOES = [
    { icon: PhoneCall, text: 'Answers every call in your company name, day and night, while you are on the tools.' },
    { icon: ListChecks, text: 'Asks what you would ask: address, what is wrong, how urgent, owner or tenant.' },
    { icon: CalendarCheck, text: 'Books the job straight into your calendar or dispatch software.' },
    { icon: MessageSquareText, text: 'Texts the caller a confirmation.' },
    { icon: UserRound, text: 'Hands off to you or your dispatcher anytime, on the caller\'s request or by your rules.' },
    { icon: ShieldCheck, text: 'Never quotes a price or gives advice you have not approved.' },
];

const PILOT_STEPS = [
    'Book a 15-minute meeting. We collect your questions, hours, and calendar.',
    'We set it up for you within 48 hours. Nothing for you to build.',
    'Two weeks on your real calls, free.',
    'You listen to the recordings. Only pay if you find it useful.',
];

const primaryButton =
    'inline-flex w-full items-center justify-center rounded-xl bg-primary-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-primary-900/20 transition hover:bg-primary-800 sm:w-auto';
const secondaryButton =
    'inline-flex w-full items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:border-primary-600 hover:text-primary-800 sm:w-auto';

export default function AiReceptionistPage({ searchParams }) {
    const variant = getReceptionistVariant(searchParams?.v);
    const adsMode = isAdsVisit(searchParams);
    const demo = RECEPTIONIST_DEMOS[variant.demo] || RECEPTIONIST_DEMOS.hvac;
    const bookHref = withSearchParams('/ai-receptionist/book', searchParams);

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'AI Receptionist for Contractors and Trades',
        serviceType: 'AI phone answering and job booking for HVAC, plumbing, electrical, roofing and other trades',
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
            name: 'Free two-week pilot',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
        },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
                            <PlayDemoButton source="hero" demoPhone={DEMO_PHONE_E164} className={primaryButton}>
                                Hear It Answer A Call
                            </PlayDemoButton>
                            <Link href={bookHref} className={secondaryButton}>
                                Start Free Pilot
                            </Link>
                        </div>
                        <p className="mt-5 text-sm font-medium text-slate-600">
                            Free setup. Free two-week pilot. No contract. Only pay if you find it useful.
                        </p>
                    </div>
                </section>

                {/* Demo */}
                <section id="demo" className="scroll-mt-20 bg-slate-50 px-4 py-12 sm:px-6 sm:py-16">
                    <div className="mx-auto max-w-2xl">
                        <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                            Hear it answer a call
                        </h2>
                        <p className="mt-2 text-center text-slate-600">
                            Forty-eight seconds. One after-hours call, answered, qualified, and booked.
                        </p>
                        <div className="mt-6">
                            <DemoCallPlayer demo={demo} demoKey={variant.demo} label={variant.demoLabel} />
                        </div>
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
                                Every missed call is a $300 service call or a $10,000 replacement.
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
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Built for the trades</h2>
                        <p className="mt-3 text-slate-600">{TRADES_LIST}</p>
                        <div className="mt-8 grid gap-4 md:grid-cols-3">
                            {TRADE_MOMENTS.map((moment, index) => (
                                <div
                                    key={moment.key}
                                    className={`rounded-2xl border p-6 ${index === 0 ? 'border-primary-300 bg-primary-50' : 'border-slate-200 bg-white'}`}
                                >
                                    <h3 className="text-lg font-bold text-slate-950">{moment.name}</h3>
                                    <p className="mt-3 text-slate-600">{moment.pain}</p>
                                    <p className="mt-2 font-semibold text-slate-900">{moment.outcome}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. How the pilot works */}
                <section id="how-it-works" className="bg-primary-50 px-4 py-16 sm:px-6 sm:py-24">
                    <div className="mx-auto max-w-4xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">How the free pilot works</h2>
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

                {/* 7. Objections, placed before the booking section so the ask closes the page */}
                <section id="faq" className="px-4 py-16 sm:px-6 sm:py-24">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">The questions everyone asks</h2>
                        <dl className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
                            {RECEPTIONIST_FAQ.map((item) => (
                                <div key={item.key} className="py-5">
                                    <dt className="text-lg font-bold text-slate-950">{item.question}</dt>
                                    <dd className="mt-1 text-slate-600">
                                        {item.key === 'robot' ? (
                                            <>
                                                <PlayDemoButton source="faq" demoPhone={DEMO_PHONE_E164} className="font-semibold text-primary-700 underline underline-offset-4 hover:text-primary-900">
                                                    Play the demo call
                                                </PlayDemoButton>{' '}
                                                and judge for yourself. It speaks naturally, waits for the caller, and handles interruptions.
                                            </>
                                        ) : (
                                            item.answer
                                        )}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                {/* 6. Book the pilot meeting */}
                <section id="pilot" className="scroll-mt-16 bg-slate-950 px-4 pb-24 pt-16 text-white sm:px-6 sm:pb-28 sm:pt-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-300">Free two-week pilot</p>
                        <h2 className="mt-4 text-3xl font-extrabold tracking-tight !text-white sm:text-4xl">Book a meeting here.</h2>
                        <p className="mt-4 text-lg leading-relaxed text-slate-200 sm:text-xl">
                            {PILOT_PROMISE}
                        </p>
                        <div className="mt-8">
                            <Link href={bookHref} className="inline-flex w-full items-center justify-center rounded-xl bg-primary-500 px-8 py-4 text-lg font-bold text-slate-950 shadow-lg shadow-primary-900/30 transition hover:bg-primary-400 sm:w-auto">
                                Book My Free Pilot Meeting
                            </Link>
                        </div>
                        <p className="mt-4 text-sm text-slate-300">15 minutes. No card needed. Works with any phone.</p>
                        <div className="mt-6">
                            <TextPilotLink source="pilot_section" tone="dark" />
                        </div>
                        <div className="mx-auto mt-8 max-w-md">
                            <FounderNote tone="dark" lead="Who you will meet" />
                        </div>
                    </div>
                </section>
            </main>

            {adsMode ? <AdsFooter /> : <Footer variant="light" />}

            <StickyCtaBar demoPhone={DEMO_PHONE_E164} bookHref={bookHref} />
        </>
    );
}
