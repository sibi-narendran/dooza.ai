// /crew: Dooza Crew, the hosted AI agent team (built by @daedalus, Sibi 2026-10-22). Copy and claim limits from
// Daedalus's spec (/home/daedalus/work/drafts/product_page_spec.md) + work/ORDERS.md. DRAFT on branch crew-draft: ship
// only on Daedalus's "live", then drop the noindex below and add /crew to app/sitemap.js.
// Landing in Grok's style (Sibi 15:53): one prompt box is the hero, monochrome ink, nothing competing with it.
// Crew price and CTA live only here (Sibi 15:34: each page keeps its own offer).
// Do not claim: SOC2/compliance, unlimited usage, model names, uptime, user counts, "built-in" integrations.
import Link from 'next/link';
import Image from 'next/image';
import { Schibsted_Grotesk } from 'next/font/google';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import CrewPrompt from '@/components/crew/CrewPrompt';
import { SITE_URL } from '@/lib/site';

const display = Schibsted_Grotesk({ subsets: ['latin'], weight: ['500', '700', '800'], display: 'swap' });

const PATH = '/crew';
const TITLE = 'Dooza Crew: Your Own AI Team, Each With Its Own Computer';
const DESCRIPTION = 'Whatever you can do on a computer, your AI crew can do. A master agent builds your team of AI agents, each with a real browser and files. Free for 7 days, then $49 a month.';
const signup = (placement) => `https://crew.dooza.ai/?utm_source=dooza&utm_medium=page&utm_content=${placement}`;
const PRICE_LINE = 'Free for 7 days, then $49 a month with $20 of AI usage included.';

const steps = [
    { title: 'Tell it the job', text: 'Type what you want done, in plain words, the way you would brief a new hire.' },
    { title: 'Your master agent builds the crew', text: 'It creates the agents the job needs. Each one gets its own computer, browser and files.' },
    { title: 'Talk to them in one chat', text: 'Your crew reports, asks and hands work back in a private team chat on web and phone.' },
];

const crews = [
    { name: 'Real estate', agents: 'Lead follow-up, listing writer, showing scheduler' },
    { name: 'Trucking and dispatch', agents: 'Load board researcher, broker follow-up, rate confirmations and invoices' },
    { name: 'Insurance agencies', agents: 'Renewal reminders, quote intake, certificate requests' },
    { name: 'Law firms', agents: 'Client intake, document drafts for attorney review, case updates' },
    { name: 'Customer support', agents: 'Inbox replies drafted from your docs, website chat, ticket summaries' },
];

const faqItems = [
    { question: 'What is Dooza Crew?', answer: 'Your own team of AI agents in one chat. You sign up and get a master agent. Tell it what you need and it creates more agents; each one gets a real browser and files on your own isolated computer.' },
    { question: 'What can my crew do?', answer: 'Whatever you can do on a computer: research, write, fill in forms, follow up on email, update spreadsheets, check websites. You give the job in plain words and the agents do it in their own browser.' },
    { question: 'How much does Dooza Crew cost?', answer: 'Free for 7 days. Then $49 a month, with $20 of AI usage included. Cancel during the trial and you pay nothing.' },
    { question: 'Do I pay anything today?', answer: 'No. The first 7 days are free. You add a card at sign-up and pay $49 a month only if you keep your crew after the trial.' },
    { question: 'Are there ready crews for my industry?', answer: 'Yes, for real estate, trucking and dispatch, insurance agencies, law firms and customer support. Your master agent sets up the crew for you on day one.' },
    { question: 'Can anyone sign up?', answer: 'Seats are limited. When they are full, you can join the waitlist.' },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'Dooza Crew',
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        brand: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: { '@type': 'Offer', price: '49', priceCurrency: 'USD', url: signup('crew-schema'), description: 'Free 7-day trial, then $49 a month including $20 of AI usage.' },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
];

export const metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    robots: { index: false, follow: true }, // DRAFT: remove on live
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website' },
    twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

export default function CrewPage() {
    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-[#0B1220] text-white">
                <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-8">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Dooza" width={28} height={28} className="rounded" />
                        <span className={`${display.className} text-lg font-bold`}>Dooza Crew</span>
                    </Link>
                    <a href={signup('crew-header')} data-offer="crew" data-source="crew-header" className="rounded-full border border-white/25 px-4 py-2 text-sm font-semibold hover:border-white/60">Sign in or start</a>
                </header>

                <main>
                    <section className="flex min-h-[78vh] items-center px-4 pb-16 pt-10 md:px-8">
                        <div className="mx-auto w-full max-w-3xl text-center">
                            <h1 className={`${display.className} text-white text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] md:text-6xl`}>
                                Whatever you can do on a computer, your AI crew can do.
                            </h1>
                            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
                                Your own team of AI agents in one chat. Each has a real computer and browser. A master agent builds the rest of the team.
                            </p>
                            <div className="mt-10">
                                <CrewPrompt placement="crew-hero" />
                            </div>
                            <p className="mt-6 text-sm text-white/55">{PRICE_LINE} Seats are limited; waitlist when full.</p>
                        </div>
                    </section>

                    <section className="border-t border-white/10 px-4 py-20 md:px-8">
                        <div className="mx-auto max-w-5xl">
                            <h2 className={`${display.className} text-white text-3xl font-extrabold tracking-[-0.02em] md:text-4xl`}>How it works</h2>
                            <ol className="mt-10 grid gap-10 md:grid-cols-3">
                                {steps.map((s, i) => (
                                    <li key={s.title}>
                                        <span className={`${display.className} text-5xl font-extrabold text-white/20`}>{i + 1}</span>
                                        <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                                        <p className="mt-2 text-white/65">{s.text}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </section>

                    <section className="border-t border-white/10 px-4 py-20 md:px-8">
                        <div className="mx-auto max-w-5xl">
                            <h2 className={`${display.className} text-white text-3xl font-extrabold tracking-[-0.02em] md:text-4xl`}>Ready crews for your industry</h2>
                            <p className="mt-4 max-w-2xl text-lg text-white/65">Your master agent sets up the crew for you on day one.</p>
                            <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
                                {crews.map((c) => (
                                    <div key={c.name} className="grid gap-1 py-5 md:grid-cols-[240px_1fr] md:gap-8">
                                        <dt className="font-semibold">{c.name}</dt>
                                        <dd className="text-white/65">{c.agents}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </section>

                    <section className="border-t border-white/10 px-4 py-20 md:px-8">
                        <div className="mx-auto max-w-3xl">
                            <h2 className={`${display.className} text-white mb-8 text-3xl font-extrabold tracking-[-0.02em] md:text-4xl`}>Questions</h2>
                            <FAQAccordion items={faqItems} />
                        </div>
                    </section>

                    <section className="border-t border-white/10 px-4 py-20 md:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className={`${display.className} text-white text-3xl font-extrabold tracking-[-0.02em] md:text-4xl`}>Give your crew its first job</h2>
                            <div className="mt-8">
                                <CrewPrompt placement="crew-bottom" />
                            </div>
                            <p className="mt-6 text-sm text-white/55">{PRICE_LINE}</p>
                        </div>
                    </section>
                </main>
            </div>
            <Footer variant="dark" />
        </>
    );
}
