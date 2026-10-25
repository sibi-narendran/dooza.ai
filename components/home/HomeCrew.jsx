// Homepage = Dooza Crew landing (Sibi 2026-10-22 15:56: "what we sell is AI employees and that is basically Dooza
// Crew"). Claims from Daedalus's brief (achilles_crew_main.md) + Sibi 15:56 (computer, browser, card, phone number,
// voice calls, groups with human staff). 2026-10-22 20:2x: card, phone number, voice calls and WhatsApp/Telegram cut;
// Daedalus checked code 20:13, trial users get none of them today. Price per Daedalus 15:56 (Sibi 15:46): free 7-day trial, then $49/month.
// Do not claim: user counts, uptime, SOC2/compliance, model names, "built-in" integrations.
// The other bets keep their own pages and offers (Sibi 15:34); this page only links to them.
// Design v3 (Sibi 2026-10-22 17:59, frontend-design skill): the subject is staffing, so the page borrows its vernacular.
// Colour carries meaning: teal = AI employee, amber = a person on your staff. Paper white + cool sage wash (no cream),
// ink #14213D. Bricolage Grotesque for display, Instrument Sans for reading. One bold element: the live group chat (CrewRoom) beside a full-width
// headline. The org chart is the one structural device, because it shows the real point: AI and staff on one team.
import Link from 'next/link';
import SiteHeader from '@/components/crew/SiteHeader';
import Image from 'next/image';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import FAQAccordion from '@/components/FAQAccordion';
import CrewPrompt from '@/components/crew/CrewPrompt';
import { crewSignupUrl } from '@/lib/crewUrl';
import CrewRoom from '@/components/home/CrewRoom';
import { testimonials } from '@/lib/homeData';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '700', '800'], display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });
const D = display.className;

export const PRICE_LINE = 'Free for 7 days, then $49 a month for your whole organization (unlimited users and agents, no per-seat fee) with $20 of AI usage included. Cancel any time in the trial and pay nothing.';

const kit = [
    { name: 'Its own computer', text: 'A private machine with files, spreadsheets and code. Work stays there between jobs.' },
    { name: 'A real browser', text: 'It opens sites, logs in with your accounts, fills in forms and does research the way you would.' },
    { name: 'Your staff in one chat', text: 'Add your people to the same group chat, on web or phone. Anyone can hand out a job and see the work.' },
    { name: 'Your approval first', text: 'Before it clicks Send or Pay, it asks you: Approve, Edit or Reject in chat.' },
];

const departments = [
    { name: 'Sales', jobs: 'Answer new leads in minutes, call them back, book the meeting, follow up until they reply.' },
    { name: 'Customer service', jobs: 'Draft replies to customer email and chat from your own docs, sent once you approve.' },
    { name: 'Operations', jobs: 'Order supplies, chase invoices, update the spreadsheet, check every vendor portal.' },
    { name: 'Marketing', jobs: 'Write the blog post and the newsletter, post to social, watch what competitors charge.' },
    { name: 'Admin', jobs: 'Sort the inbox, keep the calendar, turn call notes into tasks for the right person.' },
];

const steps = [
    { title: 'Tell it the job', text: 'Type what you need in plain words, the way you would brief a new hire.' },
    { title: 'Your master agent hires the crew', text: 'It creates the AI employees the job needs and gives each one its computer, browser and tools.' },
    { title: 'Add your people', text: 'Invite your staff to a group with the AI employees. They ask and report in one chat.' },
];

const otherWays = [
    { name: 'Dooza Managed', text: 'An AI admin assistant whose work a real person checks.', href: '/pricing' },
    { name: 'Custom AI agents', text: 'Our engineers build and run an agent for one job in your tools.', href: '/done-for-you-ai-agents' },
    { name: 'AI phone agent', text: 'An AI agent that answers your business calls, day and night.', href: '/ai-receptionist' },
];

export const homeFaq = [
    { question: 'What is Dooza?', answer: 'Dooza gives your business AI employees. With Dooza Crew you get a master agent that builds a team of AI employees for you. Each one has its own computer and a real browser, and they work with your staff in one group chat. You watch every step live in chat. Before it clicks Send or Pay, it asks you: Approve, Edit or Reject in chat.' },
    { question: 'What can an AI employee do?', answer: 'Whatever you can do on a computer: research, write, fill in forms, update spreadsheets, draft email and chat replies for your approval. You give the job in plain words.' },
    { question: 'Can my staff work with the AI employees?', answer: 'Yes. Create a group, add your people and your AI employees, and work in one chat. Your staff can give jobs, see the work, and watch every step live.' },
    { question: 'How much does it cost?', answer: 'Free for 7 days. Then $49 a month for your whole organization (unlimited users and agents, no per-seat fee), with $20 of AI usage included. Cancel during the trial and you pay nothing.' },
    { question: 'Which channels can it use?', answer: 'You talk to your crew in a private chat app on web or phone, and your staff can join the same chat. You watch every step live in chat. Before it clicks Send or Pay, it asks you: Approve, Edit or Reject in chat.' },
    { question: 'Can I start today?', answer: 'Seats are limited. When they are full you can join the waitlist and we email you when a seat opens.' },
    { question: 'Do you still build AI agents for us?', answer: 'Yes. If you would rather we do it for you, see Dooza Managed, custom AI agents and the AI phone agent. Each has its own page and price.' },
];

// Testimonials are from Dooza customers on the same AI-employee product before it was named Crew (Sibi 2026-10-22 17:18).
const quoteSource = (q) => q.website || q.linkedin;

const INK = 'text-[#14213D]';
const MUTED = 'text-[#4B5567]';
const H2 = `${D} text-[34px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[52px]`;
const LINK = 'font-semibold text-[#0F766E] underline decoration-2 underline-offset-4 hover:text-[#14213D]';

function Seat({ kind }) {
    // Small legend dot: teal = AI employee, amber = person on your staff.
    return <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full ${kind === 'ai' ? 'bg-[#0F766E]' : 'bg-[#F2B53A]'}`} />;
}

export default function HomeCrew() {
    return (
        <div className={`${body.className} crew-home bg-white ${INK}`}>
            <SiteHeader source="home-header" />

            <main id="main-content">
                <section className="relative overflow-hidden">
                    {/* Faint floor-plan grid: the crew's office. Decoration only. */}
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(#14213D0D_1px,transparent_1px),linear-gradient(90deg,#14213D0D_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
                    <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-10 md:px-8 lg:pb-28 lg:pt-20">
                    <h1 className={`${D} max-w-[15ch] text-[46px] font-extrabold leading-[0.95] tracking-[-0.045em] sm:text-[64px] lg:text-[104px]`}>
                        Hire your first AI employee in 2 minutes.
                    </h1>
                    <div className="mt-10 grid items-start gap-12 lg:mt-14 lg:grid-cols-[5fr_7fr] lg:gap-16">
                        <div className="lg:pt-2">
                            <p className={`max-w-[34rem] text-lg leading-relaxed md:text-xl ${MUTED}`}>
                                With Dooza Crew you give it a job in plain words and watch it work on its own computer, with its own browser. Add your staff to the same chat. Free for 7 days.
                            </p>
                            <div className="mt-8">
                                <CrewPrompt placement="home-hero" tone="light" />
                                <p className={`mt-5 text-[15px] ${MUTED}`}>
                                    Rather talk first? <Link href="/book" data-source="home-hero-book" className={LINK}>Book a 30-minute call</Link>.
                                </p>
                            </div>
                        </div>
                        <CrewRoom />
                    </div>
                    </div>
                </section>

                <section aria-labelledby="team-title" className="bg-[#EEF3F1] px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                            <div className="max-w-2xl">
                                <h2 id="team-title" className={H2}>Hand it whole departments.</h2>
                                <p className={`mt-5 text-lg leading-relaxed ${MUTED}`}>
                                    Your people and your AI employees share one group. Anyone can hand out a job. You watch every step live in chat. Before it clicks Send or Pay, it asks you: Approve, Edit or Reject in chat.
                                </p>
                            </div>
                            <p className={`flex flex-wrap gap-x-6 gap-y-2 text-[15px] ${MUTED}`}>
                                <span className="flex items-center gap-2"><Seat kind="human" /> Your staff</span>
                                <span className="flex items-center gap-2"><Seat kind="ai" /> AI employee</span>
                            </p>
                        </div>

                        {/* Org chart: you and your staff at the top, one line down to each department. */}
                        <div className="mt-14">
                            <div className="flex justify-center">
                                <div className="flex items-center gap-3 rounded-full border-2 border-[#14213D] bg-white px-5 py-2.5 text-[17px] font-semibold">
                                    <Seat kind="human" /> You and your staff watch
                                </div>
                            </div>
                            <ul className="relative mt-8 grid gap-px overflow-hidden rounded-2xl border border-[#14213D]/15 bg-[#14213D]/15 md:grid-cols-2 lg:mt-8 lg:grid-cols-5 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:pt-10">
                                <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-0 hidden h-10 border-x-2 border-t-2 border-[#14213D]/30 lg:block" />
                                <span aria-hidden="true" className="absolute left-1/2 top-[-2rem] hidden h-8 w-0.5 bg-[#14213D]/30 lg:block" />
                                {departments.map((d) => (
                                    <li key={d.name} className="relative bg-white p-6 lg:mx-2 lg:rounded-2xl lg:border lg:border-[#14213D]/15">
                                        <span aria-hidden="true" className="absolute -top-10 left-1/2 hidden h-10 w-0.5 bg-[#14213D]/30 lg:block" />
                                        <h3 className={`${D} text-xl font-bold tracking-[-0.01em]`}>{d.name}</h3>
                                        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#0F766E]"><Seat kind="ai" /> AI employee</p>
                                        <p className={`mt-2 text-[16px] leading-relaxed ${MUTED}`}>{d.jobs}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
                        <div className="max-w-xl">
                            <h2 className={H2}>It works like a real employee.</h2>
                            <p className={`mt-5 text-lg leading-relaxed ${MUTED}`}>
                                Whatever you can do on a computer, your AI crew can do. These are the tools every AI employee starts with.
                            </p>
                        </div>
                        <dl className="border-t-2 border-[#14213D]">
                            {kit.map((k) => (
                                <div key={k.name} className="grid gap-1 border-b border-[#14213D]/15 py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
                                    <dt className="text-xl font-bold tracking-[-0.01em]">{k.name}</dt>
                                    <dd className={`text-[17px] leading-relaxed ${MUTED}`}>{k.text}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                {/* Brand film (Sibi 2026-10-22 17:18). 720p re-encode, 8.7 MB; loads only on play. */}
                <section aria-labelledby="film-title" className="bg-[#14213D] px-4 py-20 text-white md:px-8 md:py-28">
                    <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[4fr_8fr] lg:gap-16">
                        <div>
                            <h2 id="film-title" className={H2}>Meet your new teammate.</h2>
                            <p className="mt-5 max-w-sm text-lg leading-relaxed text-white/70">100 seconds on what it is like to work with an AI employee.</p>
                        </div>
                        <video
                            className="aspect-video w-full rounded-2xl bg-black"
                            controls
                            playsInline
                            preload="none"
                            poster="/video/dooza-crew-new-teammate.jpg"
                        >
                            <source src="/media/dooza-crew-new-teammate.mp4" type="video/mp4" />
                        </video>
                    </div>
                </section>

                <section aria-labelledby="customers-title" className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <h2 id="customers-title" className={`max-w-3xl ${H2}`}>What teams say about their AI employees.</h2>
                        <ul className="mt-14 grid gap-x-16 md:grid-cols-2">
                            {testimonials.map((q) => (
                                <li key={q.author} className="flex flex-col border-t-2 border-[#14213D] py-8">
                                    <blockquote className="flex-1 text-[21px] font-medium leading-[1.4] tracking-[-0.01em]">&ldquo;{q.quote}&rdquo;</blockquote>
                                    <div className="mt-6 flex items-center gap-4">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#14213D]/15 bg-white">
                                            <Image src={q.logo} alt={q.author} width={48} height={48} className="h-full w-full object-contain p-1" />
                                        </span>
                                        <div className="min-w-0">
                                            {quoteSource(q) ? (
                                                <a href={quoteSource(q)} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[#0F766E]">{q.author}</a>
                                            ) : (
                                                <p className="font-bold">{q.author}</p>
                                            )}
                                            <p className={`text-sm ${MUTED}`}>{q.role}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section id="how" className="scroll-mt-20 bg-[#EEF3F1] px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <h2 className={H2}>Start in 2 minutes.</h2>
                        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
                            {steps.map((s, i) => (
                                <li key={s.title} className="border-t-2 border-[#14213D] pt-6">
                                    <span className={`${D} text-[56px] font-extrabold leading-none tracking-[-0.04em] text-[#0F766E]`}>{i + 1}</span>
                                    <h3 className={`${D} mt-4 text-xl font-bold tracking-[-0.01em]`}>{s.title}</h3>
                                    <p className={`mt-2 text-[17px] leading-relaxed ${MUTED}`}>{s.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section id="price" className="scroll-mt-20 bg-[#0F766E] px-4 py-20 text-white md:px-8 md:py-28">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className={H2}><a href={crewSignupUrl('home-price-h2')} data-source="home-price-h2" className="decoration-white/60 underline-offset-8 hover:underline">Try it free for 7 days.</a></h2>
                            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/85">
                                <a href={crewSignupUrl('home-price-copy')} data-source="home-price-copy" className="hover:underline">Then $49 a month for your whole organization (unlimited users and agents, no per-seat fee), with $20 of AI usage included. Cancel any time in the trial and you pay nothing.</a>
                            </p>
                            <p className="mt-4 text-[15px] text-white/75">Seats are limited. When they are full, join the waitlist.</p>
                        </div>
                        {/* One chat box on the page (Sibi 2026-10-22 20:17): price and bottom sections link to sign-up and offer a call or text. */}
                        <div className="rounded-2xl bg-white p-7 text-[#14213D] md:p-9">
                            <a href={crewSignupUrl('home-price')} data-source="home-price" className="block rounded-xl bg-[#0F766E] px-6 py-4 text-center text-lg font-semibold text-white hover:bg-[#115E59]">Start your free trial</a>
                            <p className={`mt-6 text-[17px] ${MUTED}`}>Questions first? Talk to us at Dooza.</p>
                            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-[17px]">
                                <a href="tel:+14243658980" data-source="home-price-call" className={LINK}>Call +1 (424) 365-8980</a>
                                <a href="sms:+12137192533" data-source="home-price-text" className={LINK}>Text +1 (213) 719-2533</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="done-for-you" className="scroll-mt-20 px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-2xl">
                            <h2 className={H2}>Or let us do it for you.</h2>
                            <p className={`mt-5 text-lg leading-relaxed ${MUTED}`}>Prefer that we build and run it for you? Each service has its own page and price.</p>
                        </div>
                        <ul className="mt-12 border-t-2 border-[#14213D]">
                            {otherWays.map((o) => (
                                <li key={o.href} className="border-b border-[#14213D]/15">
                                    <Link href={o.href} className="group grid gap-1 py-6 sm:grid-cols-[260px_1fr_auto] sm:items-center sm:gap-8">
                                        <span className="text-xl font-bold tracking-[-0.01em] group-hover:text-[#0F766E]">{o.name}</span>
                                        <span className={`text-[17px] ${MUTED}`}>{o.text}</span>
                                        <span className="text-[15px] font-semibold text-[#0F766E] underline-offset-4 group-hover:underline">See the service</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <p className={`mt-6 text-[17px] ${MUTED}`}>
                            Not sure which fits? <Link href="/book" data-source="home-dfy-book" className={LINK}>Book a 30-minute call</Link> and we will tell you.
                        </p>
                    </div>
                </section>

                <section className="bg-[#EEF3F1] px-4 py-20 md:px-8 md:py-24">
                    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
                        <h2 className={H2}>Questions</h2>
                        <FAQAccordion items={homeFaq} />
                    </div>
                </section>

                <section className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <h2 className={`${D} max-w-[16ch] text-[40px] font-extrabold leading-[0.98] tracking-[-0.04em] md:text-[72px]`}>Give your crew its first job.</h2>
                        <div className="mt-10 flex max-w-2xl flex-wrap items-center gap-x-8 gap-y-4">
                            <a href={crewSignupUrl('home-bottom')} data-source="home-bottom" className="rounded-xl bg-[#0F766E] px-7 py-4 text-lg font-semibold text-white hover:bg-[#115E59]">Start your free trial</a>
                            <a href="tel:+14243658980" data-source="home-bottom-call" className={`text-[17px] ${LINK}`}>Call us: +1 (424) 365-8980</a>
                            <a href="sms:+12137192533" data-source="home-bottom-text" className={`text-[17px] ${LINK}`}>Text us: +1 (213) 719-2533</a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
