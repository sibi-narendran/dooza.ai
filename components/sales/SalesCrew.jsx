import Link from 'next/link';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import SiteHeader from '@/components/crew/SiteHeader';
import CrewPrompt from '@/components/crew/CrewPrompt';
import SmsCopyButton from '@/components/SmsCopyButton';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '700', '800'], display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const INK = 'text-[#14213D]';
const MUTED = 'text-[#4B5567]';
const D = `${display.className} ${INK}`;
const H2 = `${D} text-3xl font-bold leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-[48px]`;
const LINK = 'font-semibold text-[#14213D] underline decoration-2 underline-offset-4 hover:text-[#0F766E]';

const EXAMPLES = [
    'Find 30 B2B prospects in Texas and draft first emails',
    'Research this LinkedIn profile and draft a 3-line DM',
    'Follow up with leads who have not replied in 3 days',
    'Write a 1-page brief before my 2 PM sales call',
    'Log today’s prospect replies into my pipeline sheet',
];

const ROLES = [
    {
        name: 'LinkedIn Prospector & DM Assistant',
        channel: 'LinkedIn in its own browser',
        job: 'Searches for buyers matching your ICP with human-paced browser actions and daily caps you control (no bulk scraping or API blasts), reads their profile and recent posts, drafts a short personalized connection note or DM, and waits for your Approve, Edit, or Reject before sending.',
    },
    {
        name: 'Email Outreach & Follow-Up Operator',
        channel: 'Gmail & Outlook',
        job: 'Connects to your Gmail, Outlook, or a dedicated outreach inbox, researches each company’s public site, writes plain-text emails tied to real signals, queues day-3 and day-7 follow-ups, and stops the moment a prospect replies.',
    },
    {
        name: 'Lead Researcher & Call-Prep Desk',
        channel: 'Web browser & spreadsheets',
        job: 'Pulls decision-maker names, direct company lines, hiring/expansion signals, and hands you a clean 1-page prospect brief before every call.',
    },
    {
        name: 'Inbound Speed-to-Lead & Phone Setter',
        channel: 'Phone calls, SMS & calendar',
        job: 'Answers inbound calls (included in your plan), replies to warm inquiries in minutes, and books qualified buyers straight onto your calendar.',
    },
];

const SAFEGUARDS = [
    {
        title: 'Approve before every send',
        detail: 'Your sales crew never blasts LinkedIn DMs or emails behind your back. Every outbound message pauses in chat for Approve, Edit, or Reject.',
    },
    {
        title: 'Own computer & browser',
        detail: 'Each AI employee works inside its own isolated desktop and browser—no brittle Chrome extensions or shared rate limits.',
    },
    {
        title: 'Unlimited team & agents',
        detail: 'Free to try with no card required (or text +1 855-594-6841 right now). Upgrade when ready for $49/mo per org—no per-seat tax.',
    },
];

export const salesFaq = [
    {
        question: 'Can Dooza Crew really operate my LinkedIn and email safely?',
        answer: 'Yes. Each AI employee operates inside its own isolated browser and pauses before any outbound action—asking you to Approve, Edit, or Reject in chat before sending a LinkedIn connection note, DM, or email. Nothing goes out without your sign-off.',
    },
    {
        question: 'How do I start using Dooza for Sales right now?',
        answer: 'Text +1 (855) 594-6841 directly with your target customer or sales task—no sign-up required—or install the Dooza Crew app for your team at crew.dooza.ai.',
    },
    {
        question: 'What does Dooza for Sales cost?',
        answer: 'It is free to try with no card required. Paid plans are $49/month per organization for unlimited human users and unlimited AI agents, with $20/month of AI usage and phone calls included.',
    },
    {
        question: 'Can my whole sales team share the same crew?',
        answer: 'Yes. One $49/month organization plan covers your entire team in one shared chat—founders, AEs, and SDRs can all assign research, LinkedIn drafts, and follow-ups.',
    },
];

export default function SalesCrew() {
    return (
        <div className={`${body.className} crew-home bg-white ${INK}`}>
            <SiteHeader source="sales-header" bookSource="sales-header-book" />

            <main id="main-content">
                <section className="relative overflow-hidden">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(#14213D0D_1px,transparent_1px),linear-gradient(90deg,#14213D0D_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
                    <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-8 lg:pb-24 lg:pt-16">
                        <p className="inline-block rounded-full border border-[#0F766E]/25 bg-[#EEF3F1] px-3.5 py-1 text-sm font-semibold text-[#0F766E]">
                            Dooza for Sales · LinkedIn, Email &amp; Follow-Ups
                        </p>
                        <h1 className={`${D} mt-4 max-w-[18ch] text-[42px] font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-[60px] lg:text-[80px]`}>
                            Your AI sales crew that operates LinkedIn, email, and follow-ups.
                        </h1>
                        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[6fr_6fr] lg:gap-14">
                            <div>
                                <p className={`max-w-[36rem] text-lg leading-relaxed md:text-xl ${MUTED}`}>
                                    Text Dooza Crew at <a href="sms:+18555946841" data-offer="crew-sms" data-source="sales-hero-copy" className={LINK}>+1 (855) 594-6841</a>—no sign-up needed—and watch your sales crew research prospects, operate LinkedIn and email in its own browser, and ask your approval before sending anything.
                                </p>
                                <div className="mt-7 flex flex-wrap items-center gap-4">
                                    <a
                                        href="sms:+18555946841"
                                        data-offer="crew-sms"
                                        data-source="sales-hero-btn"
                                        className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#0F766E] px-6 py-3 text-base font-semibold text-white hover:bg-[#14213D]"
                                    >
                                        Text Dooza Crew (+1 855-594-6841)
                                    </a>
                                    <Link href="/book" data-source="sales-hero-book" className={LINK}>
                                        Book a 30-min call
                                    </Link>
                                </div>
                                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                                    {SAFEGUARDS.map((s) => (
                                        <div key={s.title} className="rounded-2xl border border-[#14213D]/10 bg-[#FAF9F7] p-4">
                                            <p className="text-[15px] font-bold text-[#14213D]">{s.title}</p>
                                            <p className={`mt-1 text-sm leading-relaxed ${MUTED}`}>{s.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-3xl border border-[#CBD5E1] bg-[#EEF3F1]/70 p-5 sm:p-7">
                                <p className="mb-3 text-base font-bold text-[#14213D]">Give your sales crew its first job right now</p>
                                <CrewPrompt placement="sales-hero" tone="light" examples={EXAMPLES} />
                            </div>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="sales-roles" className="bg-[#EEF3F1] px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-7xl">
                        <h2 id="sales-roles" className={H2}>What your AI sales crew runs for you</h2>
                        <p className={`mt-4 max-w-2xl text-lg leading-relaxed ${MUTED}`}>
                            Every employee runs on its own computer and browser—so it can log into LinkedIn, Gmail, Outlook, or your CRM, do the prep work, and pause for your green light before pressing Send.
                        </p>
                        <div className="mt-10 grid gap-6 md:grid-cols-2">
                            {ROLES.map((r) => (
                                <div key={r.name} className="rounded-2xl border border-[#14213D]/10 bg-white p-6">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-[#0F766E]">{r.channel}</p>
                                    <h3 className={`${D} mt-1.5 text-2xl font-bold`}>{r.name}</h3>
                                    <p className={`mt-2 text-[16px] leading-relaxed ${MUTED}`}>{r.job}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section aria-labelledby="sales-guides" className="border-t border-[#E2E8F0] bg-[#FAF9F7] px-4 py-14 md:px-8">
                    <div className="mx-auto max-w-5xl">
                        <h2 id="sales-guides" className={H2}>AI sales guides &amp; cost breakdowns</h2>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {[
                                ['/blog/how-to-run-an-ai-sales-team-for-small-business', 'AI Sales Team for Small Business (2026 Guide)'],
                                ['/blog/ai-sdr-vs-human-sdr-cost-comparison', 'AI SDR vs. Human SDR Cost ($80K vs. $49/mo)'],
                                ['/blog/best-ai-sales-tools-for-startups', 'Best AI Sales Tools for Startups'],
                                ['/blog/ai-sdr-tools', 'AI SDR Tools Compared'],
                            ].map(([href, label]) => (
                                <Link key={href} href={href} className="rounded-xl border border-[#CBD5E1] bg-white px-4 py-3 text-sm font-semibold text-[#14213D] hover:border-[#0F766E] hover:text-[#0F766E]">
                                    {label} &rarr;
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <section aria-labelledby="sales-faq" className="px-4 py-16 md:px-8 md:py-24">
                    <div className="mx-auto max-w-4xl">
                        <h2 id="sales-faq" className={H2}>Questions about Dooza for Sales</h2>
                        <div className="mt-8 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
                            {salesFaq.map((f, i) => (
                                <details key={f.question} open={i === 0} className="group">
                                    <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-semibold text-[#14213D]">
                                        <span>{f.question}</span>
                                        <span aria-hidden="true" className="text-xl text-[#0F766E] transition group-open:rotate-45">+</span>
                                    </summary>
                                    <p className={`pb-5 pr-8 text-[16px] leading-relaxed ${MUTED}`}>{f.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-4 pb-20 md:px-8">
                    <div className="mx-auto max-w-5xl rounded-3xl bg-[#14213D] p-8 text-white sm:p-12">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Start your AI sales crew in one text — no sign-up needed.
                        </h2>
                        <p className="mt-3 max-w-2xl text-lg text-slate-300">
                            Text +1 (855) 594-6841 with who you want to reach, or install Dooza Crew free for your team. $49/mo per org when you upgrade.
                        </p>
                        <div className="mt-7 flex flex-wrap items-center gap-4">
                            <a
                                href="sms:+18555946841"
                                data-offer="crew-sms"
                                data-source="sales-bottom"
                                className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-[#F2B53A] px-6 py-3 text-base font-semibold text-[#14213D] hover:bg-[#eab034]"
                            >
                                Text Dooza Crew (+1 855-594-6841)
                            </a>
                            <SmsCopyButton />
                            <a
                                href="https://crew.dooza.ai/?utm_source=dooza&utm_medium=page&utm_content=sales-bottom"
                                data-offer="crew"
                                data-source="sales-bottom-app"
                                className="inline-flex min-h-[50px] items-center justify-center rounded-full border border-white/35 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
                            >
                                Open Dooza Crew app
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
