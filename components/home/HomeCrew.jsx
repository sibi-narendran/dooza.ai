// Homepage = Dooza Crew landing (Sibi 2026-10-22 15:56: "what we sell is AI employees and that is basically Dooza
// Crew"). Claims from Daedalus's brief (achilles_crew_main.md) + Sibi 15:56 (computer, browser, card, phone number,
// voice calls, groups with human staff). Price per Daedalus 15:56 (Sibi 15:46): free 7-day trial, then $49/month.
// Do not claim: user counts, uptime, SOC2/compliance, model names, "built-in" integrations.
// The other bets keep their own pages and offers (Sibi 15:34); this page only links to them.
// Design: light mist + ink, teal = AI. One bold element (CrewRoom); everything else quiet.
import Link from 'next/link';
import Image from 'next/image';
import { Schibsted_Grotesk } from 'next/font/google';
import FAQAccordion from '@/components/FAQAccordion';
import CrewPrompt from '@/components/crew/CrewPrompt';
import { crewSignupUrl } from '@/lib/crewUrl';
import CrewRoom from '@/components/home/CrewRoom';

const display = Schibsted_Grotesk({ subsets: ['latin'], weight: ['500', '600', '700', '800'], display: 'swap' });

export const PRICE_LINE = 'Free for 7 days, then $49 a month with $20 of AI usage included. Cancel any time in the trial and pay nothing.';

const kit = [
    { name: 'Its own computer', text: 'A private machine with files, spreadsheets and code. Work stays there between jobs.' },
    { name: 'A real browser', text: 'It opens sites, logs in with your accounts, fills in forms and does research the way you would.' },
    { name: 'A card', text: 'It can pay for things you approve, so a purchase does not wait for you to find your wallet.' },
    { name: 'A phone number', text: 'Your crew sets up a business number to call and text customers.' },
    { name: 'Voice calls', text: 'It calls leads back, confirms appointments and leaves notes on every call.' },
];

const departments = [
    { name: 'Sales', jobs: 'Answer new leads in minutes, call them back, book the meeting, follow up until they reply.' },
    { name: 'Customer service', jobs: 'Reply on email, WhatsApp, Telegram and the chat on your website, from your own docs.' },
    { name: 'Operations', jobs: 'Order supplies, chase invoices, update the spreadsheet, check every vendor portal.' },
    { name: 'Marketing', jobs: 'Write the blog post and the newsletter, post to social, watch what competitors charge.' },
    { name: 'Admin', jobs: 'Sort the inbox, keep the calendar, turn call notes into tasks for the right person.' },
];

const steps = [
    { title: 'Tell it the job', text: 'Type what you need in plain words, the way you would brief a new hire.' },
    { title: 'Your master agent hires the crew', text: 'It creates the AI employees the job needs and gives each one its computer, browser and tools.' },
    { title: 'Add your people', text: 'Invite your staff to a group with the AI employees. They ask, report and wait for approval in one chat.' },
];

const otherWays = [
    { name: 'Dooza Managed', text: 'An AI admin assistant whose work a real person checks.', href: '/ai-admin-assistant' },
    { name: 'Custom AI agents', text: 'Our engineers build and run an agent for one job in your tools.', href: '/done-for-you-ai-agents' },
    { name: 'AI answering service', text: 'Every call to your business answered, day and night.', href: '/ai-answering-service-for-small-business' },
];

export const homeFaq = [
    { question: 'What is Dooza?', answer: 'Dooza gives your business AI employees. With Dooza Crew you get a master agent that builds a team of AI employees for you. Each one has its own computer, a real browser, a card for purchases you approve and a phone number, and they work with your staff in one group chat.' },
    { question: 'What can an AI employee do?', answer: 'Whatever you can do on a computer: research, write, fill in forms, update spreadsheets, answer email and chat, call and text customers, and pay for things you approve. You give the job in plain words.' },
    { question: 'Can my staff work with the AI employees?', answer: 'Yes. Create a group, add your people and your AI employees, and work in one chat. Your staff can give jobs, see the work and approve anything before it is sent or paid.' },
    { question: 'How much does it cost?', answer: 'Free for 7 days. Then $49 a month, with $20 of AI usage included. Cancel during the trial and you pay nothing.' },
    { question: 'Which channels can it use?', answer: 'Your crew sets up WhatsApp, Telegram, a web chat on your site, email and a phone number for you, on its own computer with your accounts.' },
    { question: 'Can I start today?', answer: 'Seats are limited. When they are full you can join the waitlist and we email you when a seat opens.' },
    { question: 'Do you still build AI agents for us?', answer: 'Yes. If you would rather we do it for you, see Dooza Managed, custom AI agents and the AI answering service. Each has its own page and price.' },
];

function SectionTitle({ children, sub }) {
    return (
        <div className="max-w-2xl">
            <h2 className={`${display.className} text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] text-[#14213D] md:text-[44px]`}>{children}</h2>
            {sub ? <p className="mt-4 text-lg leading-relaxed text-[#46566E]">{sub}</p> : null}
        </div>
    );
}

export default function HomeCrew() {
    return (
        <div className={`${display.className} crew-home bg-[#EEF3F7] text-[#14213D]`}>
            <div className="sticky top-0 z-40 border-b border-[#D5DEE8]/70 bg-[#EEF3F7]/95 backdrop-blur">
            <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Dooza" width={30} height={30} className="rounded" />
                    <span className="text-lg font-extrabold tracking-[-0.02em]">Dooza</span>
                </Link>
                <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] font-medium text-[#46566E] md:flex">
                    <a href="#how" className="hover:text-[#14213D]">How it works</a>
                    <a href="#price" className="hover:text-[#14213D]">Price</a>
                    <a href="#done-for-you" className="hover:text-[#14213D]">Done for you</a>
                    <Link href="/blog" className="hover:text-[#14213D]">Blog</Link>
                </nav>
                <a href={crewSignupUrl('home-header')} data-offer="crew" data-source="home-header" className="rounded-full bg-[#14213D] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0F766E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D]">
                    Try it free
                </a>
            </header>
            </div>

            <main id="main-content">
                <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-8 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-16">
                    <div>
                        <p className="text-base font-semibold text-[#0F766E]">Dooza Crew</p>
                        <h1 className="mt-3 text-[42px] font-extrabold leading-[1.02] tracking-[-0.035em] md:text-[64px]">
                            Hire your first AI employee in 2 minutes.
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#46566E] md:text-xl">
                            Give it a job in plain words and watch it work on its own computer, with a browser, a phone number and a card. Add your staff to the same chat. Free for 7 days.
                        </p>
                        <div className="mt-9 max-w-xl">
                            <CrewPrompt placement="home-hero" tone="light" />
                            <p className="mt-4 text-sm text-[#46566E]">
                                Rather talk first? <Link href="/book" data-source="home-hero-book" className="font-semibold text-[#0F766E] underline underline-offset-4 hover:text-[#14213D]">Book a 30-minute call</Link>.
                            </p>
                        </div>
                    </div>
                    <CrewRoom />
                </section>

                <section className="border-t border-[#D5DEE8] bg-white px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                        <SectionTitle sub="Whatever you can do on a computer, your AI crew can do. These are the tools every AI employee starts with.">
                            It works like a real employee.
                        </SectionTitle>
                        <dl className="divide-y divide-[#E3E9F0] border-y border-[#E3E9F0]">
                            {kit.map((k) => (
                                <div key={k.name} className="grid gap-1 py-5 sm:grid-cols-[180px_1fr] sm:gap-8">
                                    <dt className="text-lg font-bold">{k.name}</dt>
                                    <dd className="text-[17px] leading-relaxed text-[#46566E]">{k.text}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionTitle sub="Your people and your AI employees share one group. Anyone can hand out a job. Nothing is sent or paid until a person you choose approves it.">
                            Hand it whole departments.
                        </SectionTitle>
                        <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                            {departments.map((d) => (
                                <div key={d.name} className="border-l-2 border-[#0F766E] pl-5">
                                    <dt className="text-xl font-bold">{d.name}</dt>
                                    <dd className="mt-2 text-[17px] leading-relaxed text-[#46566E]">{d.jobs}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <section id="how" className="scroll-mt-8 border-t border-[#D5DEE8] bg-white px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <SectionTitle>Start in 2 minutes.</SectionTitle>
                        <ol className="mt-12 grid gap-10 md:grid-cols-3">
                            {steps.map((s, i) => (
                                <li key={s.title}>
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#14213D] text-base font-bold text-white">{i + 1}</span>
                                    <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                                    <p className="mt-2 text-[17px] leading-relaxed text-[#46566E]">{s.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section id="price" className="scroll-mt-8 bg-[#14213D] px-4 py-20 text-white md:px-8 md:py-28">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] md:text-[44px]">Try it free for 7 days.</h2>
                            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">
                                Then $49 a month for your whole crew, with $20 of AI usage included. Cancel any time in the trial and you pay nothing.
                            </p>
                            <p className="mt-4 text-sm text-white/60">Seats are limited. When they are full, join the waitlist.</p>
                        </div>
                        <CrewPrompt placement="home-price" />
                    </div>
                </section>

                <section id="done-for-you" className="scroll-mt-8 px-4 py-20 md:px-8 md:py-24">
                    <div className="mx-auto max-w-7xl">
                        <SectionTitle sub="Prefer that we build and run it for you? Each service has its own page and price.">
                            Or let us do it for you.
                        </SectionTitle>
                        <ul className="mt-10 divide-y divide-[#D5DEE8] border-y border-[#D5DEE8]">
                            {otherWays.map((o) => (
                                <li key={o.href}>
                                    <Link href={o.href} className="group grid gap-1 py-6 sm:grid-cols-[260px_1fr_auto] sm:items-center sm:gap-8">
                                        <span className="text-lg font-bold group-hover:text-[#0F766E]">{o.name}</span>
                                        <span className="text-[17px] text-[#46566E]">{o.text}</span>
                                        <span className="text-sm font-semibold text-[#0F766E] underline-offset-4 group-hover:underline">See the service</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-[17px] text-[#46566E]">
                            Not sure which fits? <Link href="/book" data-source="home-dfy-book" className="font-semibold text-[#0F766E] underline underline-offset-4 hover:text-[#14213D]">Book a 30-minute call</Link> and we will tell you.
                        </p>
                    </div>
                </section>

                <section className="border-t border-[#D5DEE8] bg-white px-4 py-20 md:px-8 md:py-24">
                    <div className="mx-auto max-w-3xl">
                        <h2 className="mb-8 text-3xl font-extrabold tracking-[-0.025em] md:text-4xl">Questions</h2>
                        <FAQAccordion items={homeFaq} />
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] md:text-[44px]">Give your crew its first job.</h2>
                        <div className="mt-9 text-left">
                            <CrewPrompt placement="home-bottom" tone="light" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
