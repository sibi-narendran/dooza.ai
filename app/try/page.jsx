// /try: landing page for the Facebook ads, in front of crew.dooza.ai (Sibi 2026-10-25 09:48 via Edison: "FB ad -> sign-up
// conversion is yours; your own lead page in front of crew.dooza.ai"). Before it: 54 FB humans, 0 emails on the one-screen
// sign-up page. So this page does the selling the sign-up page can't: the ad's hook (clone yourself), a real Crew recording,
// the price terms up front (no card since Sibi 2026-10-26 21:44), and one action (no nav). Claims only from the homepage (HomeCrew.jsx) and crew.dooza.ai.
// noindex: an ad landing page, the homepage is the indexed Crew page.
import Image from 'next/image';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import TryStart from '@/components/try/TryStart';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['700', '800'], display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });
const D = display.className;
const MUTED = 'text-[#4B5567]';

export const metadata = {
    title: { absolute: 'Clone Yourself With AI Employees | Dooza Crew' },
    description: 'Give an AI employee a job in plain words. It works on its own computer and browser and shows you the proof. Free to try, no card needed.',
    alternates: { canonical: 'https://www.dooza.ai/try' },
    robots: { index: false, follow: true },
};

const clones = [
    { job: 'Finds leads', text: 'Searches the web, checks each business, saves the list to a spreadsheet.' },
    { job: 'Writes', text: 'Drafts the emails, posts and replies, in your words, for you to approve.' },
    { job: 'Does the admin', text: 'Fills in forms, updates spreadsheets, checks the sites you log into.' },
    { job: 'Researches', text: 'Reads competitor sites and prices and reports back with links.' },
];

const steps = [
    { title: 'Type the job', text: 'In plain words, like a text to a new hire.' },
    { title: 'Your crew gets to work', text: 'A master agent hires the AI employees the job needs. Each has its own computer and browser.' },
    { title: 'You approve', text: 'You watch every step in chat. Before it clicks Send or Pay, it asks you first.' },
];

const faq = [
    { q: 'Do I pay today?', a: 'No. Free to try. No card needed.' },
    { q: 'Can it send things without me?', a: 'Before it clicks Send or Pay, it asks you in chat: Approve, Edit or Reject.' },
    { q: 'Can my staff use it too?', a: 'Yes. Unlimited users and agents, no per-seat fee. Add your people to the same chat, on web or phone.' },
    { q: 'Can it take phone calls?', a: 'Yes. Crew agents take phone calls too, included in the plan. The rest of the work happens on a computer: browser, files, spreadsheets, email drafts.' },
];

export default function TryPage() {
    return (
        <div className={`${body.className} min-h-screen bg-white text-[#14213D]`}>
            <header className="mx-auto flex max-w-5xl items-center px-4 pt-5 md:px-6">
                <Image src="/logo.png" alt="Dooza" width={32} height={32} priority />
                <span className={`${D} ml-2 text-xl font-bold tracking-[-0.02em]`}>Dooza Crew</span>
                {/* Existing users sign in here (Sibi 2026-10-25 10:08 "why there is no login option?"). */}
                <a href="https://crew.dooza.ai/login" data-source="try-header-login" className="ml-auto whitespace-nowrap rounded-full border border-[#14213D]/25 px-4 py-2 text-sm font-semibold text-[#14213D] hover:border-[#14213D]">
                    Log in
                </a>
            </header>

            <main>
                <section className="bg-[linear-gradient(180deg,#fff_0,#EEF3F1_100%)] pb-12 pt-8 md:pb-20 md:pt-14">
                    <div className="mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-[1.15fr_0.85fr] md:items-center md:px-6">
                        <div>
                            <h1 className={`${D} text-[42px] font-extrabold leading-[0.98] tracking-[-0.04em] md:text-[68px]`}>
                                Still doing everything yourself?
                            </h1>
                            <p className={`mt-4 text-[19px] leading-relaxed md:text-xl ${MUTED}`}>
                                Clone yourself. Give an AI employee a job in plain words. It does the work on its own computer and browser, and shows you the proof.
                            </p>
                            <div className="mt-7">
                                <TryStart placement="hero" />
                            </div>
                        </div>

                        <figure className="mx-auto w-full max-w-[300px]">
                            <div className="overflow-hidden rounded-[28px] border-[6px] border-[#14213D] bg-[#14213D] shadow-[0_30px_60px_-30px_rgba(20,33,61,0.6)]">
                                <video
                                    className="block aspect-[9/20] w-full bg-white object-cover"
                                    src="/video/crew-demo-try.mp4"
                                    poster="/video/crew-demo-try.jpg"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    aria-label="Screen recording of Dooza Crew on a phone: a user gives a lead-finding job; the crew hands the drafting to a Writer agent and reports back."
                                />
                            </div>
                            <figcaption className={`mt-3 text-center text-[13px] ${MUTED}`}>
                                A real job in Dooza Crew, sped up. Some names blurred.
                            </figcaption>
                        </figure>
                    </div>
                </section>

                <section className="py-14 md:py-20">
                    <div className="mx-auto max-w-5xl px-4 md:px-6">
                        <h2 className={`${D} max-w-[18ch] text-[32px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[46px]`}>
                            One of you for every job.
                        </h2>
                        <ul className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
                            {clones.map((c) => (
                                <li key={c.job} className="border-l-[3px] border-[#0F766E] pl-4">
                                    <h3 className={`${body.className} text-[19px] font-semibold`}>{c.job}</h3>
                                    <p className={`mt-1 text-[16px] leading-relaxed ${MUTED}`}>{c.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="bg-[#14213D] py-14 text-white md:py-20">
                    <div className="mx-auto max-w-5xl px-4 md:px-6">
                        <h2 className={`${D} text-[32px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[46px] text-white`}>
                            Two minutes to your first one.
                        </h2>
                        <ol className="mt-8 grid gap-8 md:grid-cols-3">
                            {steps.map((s, i) => (
                                <li key={s.title}>
                                    <span className={`${D} text-[40px] font-extrabold leading-none text-[#F2B53A]`}>{i + 1}</span>
                                    <h3 className={`${body.className} mt-2 text-[19px] font-semibold text-white`}>{s.title}</h3>
                                    <p className="mt-1 text-[16px] leading-relaxed text-white/75">{s.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                </section>

                <section className="py-14 md:py-20">
                    <div className="mx-auto max-w-2xl px-4 md:px-6">
                        <h2 className={`${D} text-[30px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[40px]`}>Before you start</h2>
                        <dl className="mt-6 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
                            {faq.map((f) => (
                                <div key={f.q} className="py-5">
                                    <dt className="text-[18px] font-semibold">{f.q}</dt>
                                    <dd className={`mt-1.5 text-[16px] leading-relaxed ${MUTED}`}>{f.a}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className="mt-10">
                            <TryStart placement="bottom" examples={false} />
                        </div>
                    </div>
                </section>
            </main>

            <footer className={`border-t border-[#E2E8F0] px-4 py-6 text-center text-[13px] ${MUTED}`}>
                Dooza (Adam Laboratory Inc.) <span aria-hidden="true">/</span> <a href="/privacy" className="underline">Privacy</a> <span aria-hidden="true">/</span> <a href="/terms" className="underline">Terms</a> <span aria-hidden="true">/</span> support@dooza.ai
            </footer>
        </div>
    );
}
