import Link from 'next/link';
import { Schibsted_Grotesk } from 'next/font/google';
import { ArrowRight, Phone } from 'lucide-react';
import { CONTACT_CALL_DISPLAY, CONTACT_CALL_E164 } from '@/lib/contact';
import { MANAGED_PAY_URL } from '@/lib/offers';
import { crewUrl, CREW_TRIAL, CREW_PRICE, CREW_INDUSTRIES, CREW_SETUP_LINE } from '@/lib/crew';
import HomeChat from '@/components/home/HomeChat';

// Homepage for Dooza Crew, Dooza's main product (Sibi 2026-10-22 15:29 via @daedalus). Same palette and display face as
// the previous homepage (components/home/HomeLanding.jsx, kept for rollback): ink #14213D, mist #EEF3F7, teal #0F766E.
// One bold element: the chat box in the hero, where anyone types a job and is sent to sign up.
const display = Schibsted_Grotesk({ subsets: ['latin'], weight: ['500', '700', '800'], display: 'swap' });

const INK = 'text-[#14213D]';
const LINK = 'font-semibold text-[#0F766E] underline decoration-[#0F766E]/30 underline-offset-4 hover:decoration-[#0F766E]';
const H2 = `${display.className} text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] ${INK} md:text-[2.75rem]`;

function StartButton({ placement, onDark = false }) {
    return (
        <a
            href={crewUrl(`home-${placement}`)}
            data-offer="crew"
            data-source={`home-${placement}`}
            className={`inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-4 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${onDark
                ? 'bg-white text-[#0F3F3B] hover:bg-[#E6F4F1] focus-visible:outline-white'
                : 'bg-[#0F766E] text-white hover:bg-[#0B5F58] focus-visible:outline-[#0F766E]'}`}
        >
            Start your crew <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </a>
    );
}

const steps = [
    { title: 'Sign up', text: `Start at crew.dooza.ai with a ${CREW_TRIAL}.` },
    { title: 'Meet your master agent', text: 'It works for you in a private team chat from minute one.' },
    { title: 'Ask for the team you need', text: 'Tell it the work. It creates the agents, and you can add as many as you want.' },
    { title: 'Approve what matters', text: 'Nothing is sent before you approve it, if you ask for approvals.' },
];

const kit = [
    { title: 'Its own private computer', text: 'Files, code and spreadsheets on a computer only your crew uses. Nobody else’s agents touch your files.' },
    { title: 'A real Chrome browser', text: 'Your agents drive it the way a person would: research, forms and logins.' },
    { title: 'A master agent that builds the team', text: 'It creates the rest of your agents when you ask, one for each job.' },
    { title: 'People and AI in one chat', text: 'Invite your staff, make groups with people and agents, and approve work before it goes out.' },
];

const channels = ['WhatsApp', 'Telegram', 'A chat box on your website', 'Phone numbers', 'Email'];

export const homeFaq = [
    { question: 'What is Dooza Crew?', answer: 'Your own team of AI agents, each with a real computer and browser, in one chat. You sign up and get a master agent; ask it for the team you need and it creates the agents. Whatever you can do on a computer, your crew can work on.' },
    { question: 'How much does Dooza Crew cost?', answer: `A ${CREW_TRIAL}, ${CREW_PRICE}.` },
    { question: 'How do I get a refund?', answer: 'Email support@dooza.ai within 7 days of paying and you get a full refund, no questions asked.' },
    { question: 'Can my staff use it too?', answer: 'Yes. Invite your staff into the same chat, make groups with people and agents, and approve work before anything is sent.' },
    { question: 'Can my crew answer WhatsApp, Telegram or my website chat?', answer: 'Your crew sets those channels up for you, on its own computer with your accounts: WhatsApp, Telegram, a web chat on your site, phone numbers and email.' },
    { question: 'Are there ready crews for my industry?', answer: `Yes, for real estate, trucking and dispatch, insurance agencies, law firms and customer support. ${CREW_SETUP_LINE}` },
    { question: 'Can anyone sign up?', answer: 'Seats are limited. When they are full, crew.dooza.ai takes your email for the waitlist.' },
    { question: 'How do I reach you?', answer: `Call ${CONTACT_CALL_DISPLAY} any time: our own AI receptionist answers 24/7. Or email support@dooza.ai.` },
];

export default function HomeCrew() {
    return (
        <div className="home-landing bg-white text-[#14213D]">
            {/* Hero: the promise on the left, the chat box on the right */}
            <section className="bg-[#EEF3F7] px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
                    <div>
                        <p className={`${display.className} mb-5 text-xl font-extrabold tracking-[-0.01em] text-primary-600 md:text-2xl`}>Dooza Crew</p>
                        <h1 className={`${display.className} text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.03em] ${INK} sm:text-6xl lg:text-[4.25rem]`}>
                            Whatever you can do on a computer, your AI crew can&nbsp;do.
                        </h1>
                        <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-slate-600">
                            Your own team of AI agents, each with a real computer and browser, in one chat. Sign up and a master agent builds the rest of your team.
                        </p>
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <StartButton placement="hero" />
                            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-xl border border-[#14213D]/20 px-6 py-4 text-base font-semibold text-[#14213D] hover:border-[#14213D]/50">See how it works</a>
                        </div>
                        <p className="mt-5 text-sm text-slate-500">{CREW_TRIAL}, {CREW_PRICE}.</p>
                        <p className="mt-6 max-w-[34rem] text-[15px] text-slate-700">
                            Only need your phone answered?{' '}
                            <Link href="/ai-answering-service-for-small-business?utm_source=website&utm_medium=internal&utm_campaign=homepage_hero_receptionist" className={LINK} data-offer="receptionist" data-source="homepage_hero_receptionist">Dooza AI answering service</Link>, $149/month. Admin help checked by a person?{' '}
                            <a href={MANAGED_PAY_URL} className={LINK} data-offer="managed" data-source="homepage_hero">Dooza Managed</a>, $200/month.
                        </p>
                    </div>
                    <HomeChat />
                </div>
            </section>

            <section id="how-it-works" className="scroll-mt-20 px-4 py-20 md:px-8 md:py-28">
                <div className="mx-auto max-w-6xl">
                    <h2 className={`${H2} max-w-2xl`}>How it works</h2>
                    <ol className="mt-14 grid gap-x-10 gap-y-10 border-t-2 border-[#14213D] pt-8 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((s, i) => (
                            <li key={s.title}>
                                <span className={`${display.className} text-sm font-bold text-[#0F766E]`}>Step {i + 1}</span>
                                <h3 className={`${display.className} mt-2 text-xl font-bold ${INK}`}>{s.title}</h3>
                                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{s.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section id="its-own-computer" className="px-4 pb-20 md:px-8 md:pb-28">
                <div className="mx-auto max-w-6xl">
                    <h2 className={`${H2} max-w-2xl`}>Your crew gets its own computer.</h2>
                    <dl className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
                        {kit.map((k) => (
                            <div key={k.title} className="border-t-2 border-[#14213D] pt-5">
                                <dt className={`${display.className} text-lg font-bold ${INK}`}>{k.title}</dt>
                                <dd className="mt-1 text-[15px] leading-relaxed text-slate-600">{k.text}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <section id="channels" className="bg-[#EEF3F7] px-4 py-20 md:px-8 md:py-28">
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.6fr]">
                    <div>
                        <h2 className={H2}>Your crew sets up your channels</h2>
                        <p className="mt-4 max-w-sm text-lg text-slate-600">It does the setup on its own computer, with your accounts.</p>
                    </div>
                    <ul className="grid gap-x-10 sm:grid-cols-2">
                        {channels.map((c) => (
                            <li key={c} className={`border-t border-[#14213D]/15 py-5 ${display.className} text-lg font-bold ${INK}`}>{c}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="industry-crews" className="px-4 py-20 md:px-8 md:py-28">
                <div className="mx-auto max-w-6xl">
                    <h2 className={`${H2} max-w-2xl`}>Ready crews for your industry</h2>
                    <p className="mt-4 max-w-2xl text-lg text-slate-600">{CREW_SETUP_LINE}</p>
                    <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                        {Object.values(CREW_INDUSTRIES).map((ind) => (
                            <div key={ind.href} className="border-t-2 border-[#14213D] pt-5">
                                <Link href={ind.href} className={`${display.className} text-lg font-bold ${INK} hover:text-[#0F766E]`}>{ind.name}</Link>
                                <ul className="mt-2 list-disc space-y-1 pl-5 text-[15px] text-slate-600">
                                    {ind.agents.map((a) => <li key={a}>{a}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="faq" className="bg-[#EEF3F7] px-4 py-20 md:px-8 md:py-28">
                <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.8fr]">
                    <div>
                        <h2 className={H2}>Questions people ask</h2>
                        <p className="mt-4 text-lg text-slate-600">{CREW_TRIAL}. <Link href="/crew" className={LINK}>More about Dooza Crew</Link>.</p>
                    </div>
                    <div className="border-t-2 border-[#14213D]">
                        {homeFaq.map((f, i) => (
                            <details key={f.question} open={i === 0} className="group border-b border-[#14213D]/10 py-5">
                                <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold ${INK} focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F766E]`}>
                                    {f.question}
                                    <span className="text-2xl font-light text-slate-400 transition-transform group-open:rotate-45 motion-reduce:transition-none" aria-hidden="true">+</span>
                                </summary>
                                <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">{f.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#0F3F3B] px-4 py-20 text-white md:px-8 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <h2 className={`${display.className} max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] md:text-6xl`}>
                        Start your crew today.
                    </h2>
                    <p className="mt-5 max-w-xl text-lg text-[#CFE7E2]">{CREW_TRIAL}, {CREW_PRICE}. Seats are limited; when they are full, join the waitlist.</p>
                    <div className="mt-9"><StartButton placement="final" onDark /></div>
                </div>
            </section>

            {/* Phones: start and call one tap away */}
            <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-[#14213D]/10 bg-white p-2 md:hidden">
                <a href={crewUrl('home-mobile-bar')} data-offer="crew" data-source="home-mobile-bar" className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#0F766E] font-semibold text-white">Start your crew</a>
                <a href={`tel:${CONTACT_CALL_E164}`} className={`flex h-12 items-center justify-center gap-2 rounded-xl border border-[#14213D]/20 font-semibold ${INK}`}><Phone className="h-5 w-5" aria-hidden="true" /> Call us</a>
            </div>
            <div className="h-16 md:hidden" aria-hidden="true" />
        </div>
    );
}
