// /truck-dispatchers: Dooza Crew for truck dispatchers (Sibi 2026-10-25 08:20: "Do the same for truck dispatchers", same
// build as /insurance-agents: one agent per pain, agents work with each other, a meeting link for doubts). Product facts:
// Edison 10-25 08:08 (portals and webmail in its own browser after the user signs in once, hourly wake-ups, Files, approval
// before sending; NO phone calls, SMS or PDF form filling; no load board or TMS named as tested) and 08:04 (per-organization
// price, $20 AI usage included, hard cap). Design: home v3 tokens, same as /insurance-agents.
import Link from 'next/link';
import CrewNav from '@/components/crew/CrewNav';
import Image from 'next/image';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import FAQAccordion from '@/components/FAQAccordion';
import CrewPrompt from '@/components/crew/CrewPrompt';
import { crewSignupUrl } from '@/lib/crewUrl';
import DispatchRoom from '@/components/dispatch/DispatchRoom';
import NightShift from '@/components/insurance/NightShift';
import { DISPATCH_NIGHT } from '@/components/dispatch/dispatchNight';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '700', '800'], display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });
const D = display.className;

const INK = 'text-[#14213D]';
const MUTED = 'text-[#4B5567]';
const H2 = `${D} text-[34px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[52px]`;
const LINK = 'font-semibold text-[#0F766E] underline decoration-2 underline-offset-4 hover:text-[#14213D]';

const EXAMPLES = [
    'Find dry van loads out of Dallas over $2.50 a mile',
    'Sort my inbox and pull every rate con into one sheet',
    'Email the broker an invoice with the POD attached',
    'Every morning, check which carrier insurance expires this month',
    'Find 20 brokers who move reefer freight out of Georgia',
];

// One agent per pain. Pain lines are the everyday dispatch desk; no invented numbers.
export const dispatchAgents = [
    {
        name: 'Load board agent',
        pain: 'Hours a day refreshing load boards.',
        job: 'Logs in to your load boards in its own browser, searches the lanes, equipment and rate floor you set for each truck, and puts the loads that fit in a list in Files. You sign in once; you decide which broker to call.',
        task: 'Every hour, search my load boards for dry van loads out of Dallas paying over $2.50 a mile and list the best ones in Files.',
    },
    {
        name: 'Inbox agent',
        pain: 'Rate cons and broker emails bury the inbox.',
        job: 'Reads your dispatch webmail, sorts rate confirmations, setup packets, detention and payment emails, copies the pickup and delivery details into your load sheet, and drafts each reply. Nothing goes out until you tap Approve.',
        task: 'Read my dispatch inbox every hour, copy every rate confirmation into my load sheet and draft replies for my approval.',
    },
    {
        name: 'Billing agent',
        pain: 'Getting paid waits on paperwork.',
        job: 'When a load delivers, gathers the rate con and the POD from your inbox into Files, drafts the invoice email to the broker or factoring company, and chases invoices that are past due.',
        task: 'When a load delivers, put the rate con and POD in Files, draft the invoice email to the broker, and list invoices older than 30 days.',
    },
    {
        name: 'Broker agent',
        pain: 'New brokers never write back.',
        job: 'Finds brokers who move freight on your lanes, emails them your carriers\' MC numbers, equipment and lanes, and follows up on a schedule until they reply or send a setup packet.',
        task: 'Find 20 brokers who move reefer freight out of Georgia and email them our MC, equipment and lanes, then follow up every 3 days.',
    },
    {
        name: 'Compliance agent',
        pain: 'An expired insurance certificate costs a load.',
        job: 'Wakes up every morning on its own, checks each carrier\'s insurance and authority dates from your sheet and the public FMCSA records, and drafts the reminder before anything lapses.',
        task: 'Every morning, check which of my carriers have insurance or authority expiring in the next 30 days and draft a reminder to each.',
    },
];

const steps = [
    { title: 'Tell it the job', text: 'Type the job in plain words, the way you would brief a new dispatcher on day one.' },
    { title: 'It sets itself up', text: 'Your master agent creates the agent, with its own computer and browser. You sign in to your load boards and webmail once.' },
    { title: 'Add your team', text: 'Invite your dispatchers to the same chat. Anyone can hand out a job and see the work.' },
];

const guardrails = [
    { name: 'Never sends without you', text: 'Before it sends an email or clicks Send, Book or Pay, it asks you: Approve, Edit or Reject in chat.' },
    { name: 'You book the loads', text: 'It finds and lists loads; you call the broker and decide what your trucks haul.' },
    { name: 'Keeps your systems', text: 'No new TMS, no migration. It works in the web tools you already log in to, in its own private browser.' },
    { name: 'No surprise bill', text: 'A hard monthly cap on AI spend. At the cap it pauses and tells you.' },
];

export const dispatchFaq = [
    { question: 'What is Dooza Crew for truck dispatchers?', answer: 'Dooza Crew gives a dispatch business AI employees: one for load boards, one for the inbox, one for billing, one for finding brokers, one for carrier compliance. Each has its own computer and browser, works around the clock, and works with your dispatchers in one chat. Before it sends anything, it asks you to approve.' },
    { question: 'Does it work with DAT or Truckstop?', answer: 'It works in web-based tools you can log in to with a browser, including load boards, webmail and factoring portals. We have not certified any specific load board or TMS yet, so try it on yours during the 7-day free trial, and check your load board\'s terms for automated searching.' },
    { question: 'Can it make check calls or text drivers?', answer: 'Not yet. Crew agents work in browsers, email and files. For inbound calls, the Dooza AI phone agent picks up and emails you each message with the transcript ($149 a month for 500 minutes).' },
    { question: 'Can it book loads for me?', answer: 'It finds the loads that fit and drafts the email to the broker. You call or approve before anything is booked.' },
    { question: 'Is my carriers\' data safe?', answer: 'Every account runs in its own isolated sandbox with its own browser and files. You type your passwords and 2FA codes yourself, and nothing is sent without your approval.' },
    { question: 'How much does it cost?', answer: 'Free for 7 days. Then $49 a month for your whole organization (unlimited users and agents, no per-seat fee), with $20 of AI usage included and a hard cap. Cancel during the trial and you pay nothing.' },
    { question: 'I still have questions. Can I talk to someone?', answer: 'Yes. Book a 30-minute call at dooza.ai/book and we will walk through your desk with you.' },
];

export default function DispatchCrew() {
    return (
        <div className={`${body.className} bg-white ${INK}`}>
            <div className="fixed inset-x-0 top-0 z-40 border-b border-[#14213D]/10 bg-white/95 backdrop-blur">
                <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Dooza" width={30} height={30} className="rounded" />
                        <span className={`${D} text-lg font-bold tracking-[-0.02em]`}>Dooza</span>
                        <span className={`hidden text-sm sm:inline ${MUTED}`}>for truck dispatchers</span>
                    </Link>
                    <div className="flex items-center gap-4 md:gap-8">
                    <CrewNav />
                    <Link href="/book" data-source="dsp-header-book" className="hidden text-sm font-semibold text-[#14213D] underline decoration-2 underline-offset-4 hover:text-[#0F766E] sm:inline">Questions? Book a call</Link>
                    <a href={crewSignupUrl('dsp-header')} data-offer="crew" data-source="dsp-header" className="rounded-full bg-[#0F766E] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D]">
                        Try it free
                    </a>
                    </div>
                </header>
            </div>
            <div aria-hidden="true" className="h-[65px] md:h-[73px]" />

            <main id="main-content">
                <section className="relative overflow-hidden">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(#14213D0D_1px,transparent_1px),linear-gradient(90deg,#14213D0D_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
                    <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-4 pb-20 pt-10 md:px-8 lg:grid-cols-[6fr_5fr] lg:gap-16 lg:pb-28 lg:pt-16">
                        <div>
                            <h1 className={`${D} text-[44px] font-extrabold leading-[0.97] tracking-[-0.045em] sm:text-[60px] lg:text-[80px]`}>
                                We know the dispatch grind. Our AI employees do it.
                            </h1>
                            <p className={`mt-7 max-w-[36rem] text-lg leading-relaxed md:text-xl ${MUTED}`}>
                                Dooza for truck dispatchers: one AI employee for each job that keeps you at the desk until midnight. Load boards, the inbox, billing, new brokers, carrier compliance. Each one sets itself up like a new hire, works around the clock, and passes work to the others like a real team.
                            </p>
                            <div className="mt-8 max-w-[38rem]">
                                <CrewPrompt placement="dsp-hero" tone="light" examples={EXAMPLES} />
                                <p className={`mt-5 text-[15px] ${MUTED}`}>
                                    Rather talk first? <Link href="/book" data-source="dsp-hero-book" className={LINK}>Book a 30-minute call</Link>.
                                </p>
                            </div>
                        </div>
                        <DispatchRoom />
                    </div>
                </section>

                <section id="agents" aria-labelledby="agents-title" className="scroll-mt-24 bg-[#EEF3F1] px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-3xl">
                            <h2 id="agents-title" className={H2}>One agent for each thing that eats your day.</h2>
                            <p className={`mt-5 text-lg leading-relaxed ${MUTED}`}>
                                Hire one or all five. Each has its own computer, its own browser and its own job. And they work with each other: the Inbox agent hands a delivered load to the Billing agent, the Broker agent passes a new setup packet to the Compliance agent, and you see every handoff in your chat.
                            </p>
                        </div>
                        <ol className="mt-14 divide-y divide-[#14213D]/15 border-y border-[#14213D]/15">
                            {dispatchAgents.map((a) => (
                                <li key={a.name} className="group grid gap-4 py-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:py-10">
                                    <div>
                                        <p className="flex items-center gap-2.5 text-[15px] font-semibold text-[#0F766E]">
                                            <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full bg-[#0F766E] transition-transform duration-300 group-hover:scale-150" />
                                            {a.name}
                                        </p>
                                        <h3 className={`${D} mt-3 text-[26px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[32px]`}>{a.pain}</h3>
                                    </div>
                                    <div className="md:pt-9">
                                        <p className={`text-[17px] leading-relaxed ${MUTED}`}>{a.job}</p>
                                        <a href={crewSignupUrl(`dsp-agent-${a.name.split(' ')[0].toLowerCase()}`, a.task)} data-offer="crew" data-source={`dsp-agent-${a.name.split(' ')[0].toLowerCase()}`} className={`mt-4 inline-block text-[15px] ${LINK}`}>
                                            Hire the {a.name.toLowerCase()} free
                                        </a>
                                    </div>
                                </li>
                            ))}
                            <li className="grid gap-4 py-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:py-10">
                                <div>
                                    <p className={`flex items-center gap-2.5 text-[15px] font-semibold ${MUTED}`}>
                                        <span aria-hidden="true" className="inline-block h-2.5 w-2.5 rounded-full border-2 border-[#4B5567]" />
                                        Phones
                                    </p>
                                    <h3 className={`${D} mt-3 text-[26px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[32px]`}>Check calls and driver texts.</h3>
                                </div>
                                <div className="md:pt-9">
                                    <p className={`text-[17px] leading-relaxed ${MUTED}`}>
                                        Crew agents do not make calls or send texts yet. For inbound calls, the <Link href="/ai-receptionist" className={LINK}>Dooza AI phone agent</Link> picks up and emails you each message with the transcript, and your Inbox agent can sort those emails like any other.
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>

                <NightShift displayClass={D} items={DISPATCH_NIGHT} />

                <section id="how" aria-labelledby="how-title" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <h2 id="how-title" className={`${H2} max-w-3xl`}>Hire it like a new dispatcher. Minus the months of training.</h2>
                        <ol className="mt-14 grid gap-10 md:grid-cols-3">
                            {steps.map((s, i) => (
                                <li key={s.title} className="border-t-2 border-[#14213D] pt-6">
                                    <p className={`${D} text-[22px] font-bold`}>{`${i + 1}. ${s.title}`}</p>
                                    <p className={`mt-3 text-[17px] leading-relaxed ${MUTED}`}>{s.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section aria-labelledby="guard-title" className="bg-[#EEF3F1] px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[5fr_7fr]">
                        <div>
                            <h2 id="guard-title" className={H2}>Your trucks, your brokers, your call.</h2>
                            <p className={`mt-5 text-lg leading-relaxed ${MUTED}`}>
                                Dispatch runs on relationships. So the agents do the legwork and you keep every decision.
                            </p>
                        </div>
                        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                            {guardrails.map((g) => (
                                <div key={g.name}>
                                    <dt className="text-lg font-semibold">{g.name}</dt>
                                    <dd className={`mt-2 text-[16px] leading-relaxed ${MUTED}`}>{g.text}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <section id="price" aria-labelledby="price-title" className="scroll-mt-24 bg-[#14213D] px-4 py-20 text-white md:px-8 md:py-28">
                    <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[7fr_5fr]">
                        <div>
                            <h2 id="price-title" className={`${H2} text-white`}>Less than one load&apos;s dispatch fee. For the month.</h2>
                            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                                Free for 7 days. Then $49 a month for your whole organization (unlimited users and agents, no per-seat fee), with $20 of AI usage included and a hard cap. Cancel during the trial and you pay nothing.
                            </p>
                        </div>
                        <div className="lg:text-right">
                            <a href={crewSignupUrl('dsp-price')} data-offer="crew" data-source="dsp-price" className="inline-block rounded-xl bg-white px-7 py-4 text-lg font-semibold text-[#14213D] hover:bg-[#EEF3F1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Start your free trial
                            </a>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="faq-title" className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-4xl">
                        <h2 id="faq-title" className={H2}>Questions dispatchers ask</h2>
                        <div className="mt-10">
                            <FAQAccordion items={dispatchFaq} />
                        </div>
                        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-[#14213D]/15 bg-[#EEF3F1] p-6 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-lg font-semibold">Still have a doubt? Ask a person.</p>
                            <Link href="/book" data-source="dsp-faq-book" className="rounded-full bg-[#14213D] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#0F766E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D]">Book a 30-minute call</Link>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="end-title" className="bg-[#EEF3F1] px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 id="end-title" className={H2}>What should your first AI employee take off your desk?</h2>
                        <div className="mt-10">
                            <CrewPrompt placement="dsp-bottom" tone="light" examples={EXAMPLES.slice(0, 3)} centered />
                        </div>
                        <p className={`mt-8 text-[15px] ${MUTED}`}>
                            Want us to set it up for you? <Link href="/book" data-source="dsp-bottom-book" className={LINK}>Book a 30-minute call</Link>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
