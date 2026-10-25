// /insurance-agents: Dooza Crew for independent insurance agencies (Sibi 2026-10-25 08:05: "one good landing page ... only
// industry called independent insurance agents ... one agent per pain point ... Dooza for insurance agents, we understand
// your pain and work"). Pains from content/research/independent-insurance-agents-pains-2026-10-25.md (Big I 2026 study via
// Insurance Journal, r/InsuranceProfessional and r/InsuranceAgent threads). Product facts: Edison 10-25 08:08 (portals and
// webmail in its own browser after the user signs in once, hourly wake-ups, Files, approval before sending; NO phone calls,
// SMS or PDF form filling; no AMS named as tested) and 08:04 (per-organization price, $20 AI usage included, hard cap).
// Design: home v3 tokens (teal = AI, amber = your staff). The bold element is the hero chat; the roster is rows, not cards.
import Link from 'next/link';
import CrewNav from '@/components/crew/CrewNav';
import Image from 'next/image';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import FAQAccordion from '@/components/FAQAccordion';
import CrewPrompt from '@/components/crew/CrewPrompt';
import { crewSignupUrl } from '@/lib/crewUrl';
import InsuranceRoom from '@/components/insurance/InsuranceRoom';
import NightShift from '@/components/insurance/NightShift';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '700', '800'], display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });
const D = display.className;

const INK = 'text-[#14213D]';
const MUTED = 'text-[#4B5567]';
const H2 = `${D} text-[34px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[52px]`;
const LINK = 'font-semibold text-[#0F766E] underline decoration-2 underline-offset-4 hover:text-[#14213D]';

const EXAMPLES = [
    'Every morning, list what renews in the next 60 days',
    'Sort my inbox and draft replies to certificate requests',
    'Pull dec pages for these 10 clients from the carrier portals',
    'Answer every new quote request within the hour',
    'Find commercial clients with no umbrella policy',
];

// One agent per pain. Pain lines paraphrase what agents and CSRs wrote (research file above); no invented numbers.
export const insuranceAgents = [
    {
        name: 'Portal agent',
        pain: 'The same client, typed into fifteen carrier portals.',
        job: 'Logs in to your carrier portals in its own browser, keys in the submission once from your notes, and brings the quotes, dec pages and renewal notices back to Files. You sign in once and type the 2FA code yourself; then it keeps working.',
        task: 'Log in to my carrier portals and pull the dec pages for these clients into Files.',
    },
    {
        name: 'Inbox agent',
        pain: 'Requests sit in the inbox while the phones ring.',
        job: 'Reads your agency webmail, sorts certificate requests, policy changes, claims and billing questions, and drafts each reply from your files. Nothing goes out until you tap Approve.',
        task: 'Read my agency inbox every hour, sort certificate requests, policy changes and billing questions, and draft replies for my approval.',
    },
    {
        name: 'Service agent',
        pain: 'Certificates and endorsements back up the service team.',
        job: 'Works certificate and policy-change requests in the carrier or agency web portals, saves the documents to Files and drafts the note to the client. It works in any web portal you can log in to.',
        task: 'When a certificate request comes in, prepare it in the portal, save the PDF to Files and draft the reply to the client.',
    },
    {
        name: 'Renewals agent',
        pain: 'A renewal came up that nobody caught.',
        job: 'Wakes up every morning on its own, checks what renews in the next 60 days, flags the big increases, builds your remarket list and drafts the heads-up email to each client.',
        task: 'Every morning, check which policies renew in the next 60 days, flag increases over 15% and draft a heads-up email to each client.',
    },
    {
        name: 'Follow-up agent',
        pain: 'Fifty leads called, six answered.',
        job: 'Drafts a reply to each new quote request within the hour, looks up the business, and follows up on a schedule until they reply or book a call with you.',
        task: 'Check for new quote requests every hour, draft a reply to each and follow up every 2 days until they reply.',
    },
];

const steps = [
    { title: 'Tell it the job', text: 'Type the job in plain words, the way you would brief a new CSR on day one.' },
    { title: 'It sets itself up', text: 'Your master agent creates the agent, with its own computer and browser. You sign in to your portals and webmail once.' },
    { title: 'Add your team', text: 'Invite your CSRs and producers to the same chat. Anyone can hand out a job and see the work.' },
];

const guardrails = [
    { name: 'Never sends without you', text: 'Before it sends an email or clicks Send or Pay, it asks you: Approve, Edit or Reject in chat.' },
    { name: 'No coverage advice', text: 'It does the paperwork and the legwork. Advice, binding and anything that needs a license stays with your licensed staff.' },
    { name: 'Keeps your systems', text: 'No new AMS, no migration. It works in the web tools you already log in to, in its own private browser.' },
    { name: 'No surprise bill', text: 'A hard monthly cap on AI spend. At the cap it pauses and tells you.' },
];

export const insuranceFaq = [
    { question: 'What is Dooza Crew for insurance agents?', answer: 'Dooza Crew gives an independent agency AI employees: one for carrier portals, one for the inbox, one for certificates and changes, one for renewals, one for lead follow-up. Each has its own computer and browser, works around the clock, and works with your staff in one chat. Before it sends anything, it asks you to approve.' },
    { question: 'Does it work with Applied Epic, EZLynx or HawkSoft?', answer: 'It works in web-based systems you can log in to with a browser: carrier portals, webmail and agency tools. We have not certified any specific agency management system yet, so try it on yours during the 7-day free trial.' },
    { question: 'Can it answer our phones?', answer: 'Not yet. Crew agents work in browsers, email and files. For calls, the Dooza AI phone agent picks up and emails you each message with the transcript ($149 a month for 500 minutes).' },
    { question: 'Can it fill ACORD forms?', answer: 'It fills web forms and portal screens, including certificate and change requests in carrier and agency portals. It does not fill PDF forms yet.' },
    { question: 'Is our client data safe?', answer: 'Every account runs in its own isolated sandbox with its own browser and files. You type your passwords and 2FA codes yourself, and nothing is sent without your approval.' },
    { question: 'How much does it cost?', answer: 'Free for 7 days. Then $49 a month for your whole organization (unlimited users and agents, no per-seat fee), with $20 of AI usage included and a hard cap. Cancel during the trial and you pay nothing.' },
    { question: 'Can my CSRs and producers use it?', answer: 'Yes. Users are unlimited. Add your team to the same chat and everyone can hand out jobs and see the work.' },
];

export default function InsuranceCrew() {
    return (
        <div className={`${body.className} bg-white ${INK}`}>
            <div className="fixed inset-x-0 top-0 z-40 border-b border-[#14213D]/10 bg-white/95 backdrop-blur">
                <header className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" alt="Dooza" width={30} height={30} className="rounded" />
                        <span className={`${D} text-lg font-bold tracking-[-0.02em]`}>Dooza</span>
                        <span className={`hidden text-sm sm:inline ${MUTED}`}>for insurance agents</span>
                    </Link>
                    <div className="flex items-center gap-4 md:gap-8">
                    <CrewNav />
                    <Link href="/book" data-source="ins-header-book" className="hidden text-sm font-semibold text-[#14213D] underline decoration-2 underline-offset-4 hover:text-[#0F766E] sm:inline">Questions? Book a call</Link>
                    <a href={crewSignupUrl('ins-header')} data-offer="crew" data-source="ins-header" className="rounded-full bg-[#0F766E] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#14213D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D]">
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
                                We know the agency grind. Our AI employees do it.
                            </h1>
                            <p className={`mt-7 max-w-[36rem] text-lg leading-relaxed md:text-xl ${MUTED}`}>
                                Dooza for independent insurance agents: one AI employee for each job that buries your service team. Carrier portals, the inbox, certificates, renewals, lead follow-up. Each one sets itself up like a new hire, works around the clock, and passes work to the others like a real team.
                            </p>
                            <div className="mt-8 max-w-[38rem]">
                                <CrewPrompt placement="ins-hero" tone="light" examples={EXAMPLES} />
                                <p className={`mt-5 text-[15px] ${MUTED}`}>
                                    Rather talk first? <Link href="/book" data-source="ins-hero-book" className={LINK}>Book a 30-minute call</Link>.
                                </p>
                            </div>
                        </div>
                        <InsuranceRoom />
                    </div>
                </section>

                <section id="agents" aria-labelledby="agents-title" className="scroll-mt-24 bg-[#EEF3F1] px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-3xl">
                            <h2 id="agents-title" className={H2}>One agent for each thing that eats your day.</h2>
                            <p className={`mt-5 text-lg leading-relaxed ${MUTED}`}>
                                Hire one or all five. Each has its own computer, its own browser and its own job. And they work with each other: the Inbox agent hands a certificate request to the Service agent, the Renewals agent hands its remarket list to the Portal agent for new quotes, and you see every handoff in your chat.
                            </p>
                        </div>
                        <ol className="mt-14 divide-y divide-[#14213D]/15 border-y border-[#14213D]/15">
                            {insuranceAgents.map((a) => (
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
                                        <a href={crewSignupUrl(`ins-agent-${a.name.split(' ')[0].toLowerCase()}`, a.task)} data-offer="crew" data-source={`ins-agent-${a.name.split(' ')[0].toLowerCase()}`} className={`mt-4 inline-block text-[15px] ${LINK}`}>
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
                                    <h3 className={`${D} mt-3 text-[26px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[32px]`}>Calls after five go to voicemail.</h3>
                                </div>
                                <div className="md:pt-9">
                                    <p className={`text-[17px] leading-relaxed ${MUTED}`}>
                                        Crew agents do not take calls yet. For the phones, the <Link href="/ai-receptionist" className={LINK}>Dooza AI phone agent</Link> picks up and emails you each message with the transcript, and your Inbox agent can sort those emails like any other.
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>

                <NightShift displayClass={D} />

                <section id="how" aria-labelledby="how-title" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <h2 id="how-title" className={`${H2} max-w-3xl`}>Hire it like a new CSR. Minus the six months of training.</h2>
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
                            <h2 id="guard-title" className={H2}>Your license, your clients, your call.</h2>
                            <p className={`mt-5 text-lg leading-relaxed ${MUTED}`}>
                                An agency runs on trust. So the agents do the legwork and you keep every decision.
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
                            <h2 id="price-title" className={`${H2} text-white`}>Less than a day of a CSR&apos;s pay. For the month.</h2>
                            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
                                Free for 7 days. Then $49 a month for your whole organization (unlimited users and agents, no per-seat fee), with $20 of AI usage included and a hard cap. Cancel during the trial and you pay nothing.
                            </p>
                        </div>
                        <div className="lg:text-right">
                            <a href={crewSignupUrl('ins-price')} data-offer="crew" data-source="ins-price" className="inline-block rounded-xl bg-white px-7 py-4 text-lg font-semibold text-[#14213D] hover:bg-[#EEF3F1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Start your free trial
                            </a>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="faq-title" className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-4xl">
                        <h2 id="faq-title" className={H2}>Questions agents ask</h2>
                        <div className="mt-10">
                            <FAQAccordion items={insuranceFaq} />
                        </div>
                        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-[#14213D]/15 bg-[#EEF3F1] p-6 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-lg font-semibold">Still have a doubt? Ask a person.</p>
                            <Link href="/book" data-source="ins-faq-book" className="rounded-full bg-[#14213D] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#0F766E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D]">Book a 30-minute call</Link>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="end-title" className="bg-[#EEF3F1] px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 id="end-title" className={H2}>What should your first AI employee take off your desk?</h2>
                        <div className="mt-10">
                            <CrewPrompt placement="ins-bottom" tone="light" examples={EXAMPLES.slice(0, 3)} centered />
                        </div>
                        <p className={`mt-8 text-[15px] ${MUTED}`}>
                            Want us to set it up for you? <Link href="/book" data-source="ins-bottom-book" className={LINK}>Book a 30-minute call</Link>.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
