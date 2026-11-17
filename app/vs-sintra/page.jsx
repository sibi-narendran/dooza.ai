import VsSintraCta from '@/components/crew/VsSintraCta';

export const metadata = {
    title: 'Dooza Crew: The $49/Mo Sintra & Lindy Alternative | Dooza',
    description:
        'Flat $49/mo per org for unlimited users and AI agents, $20/mo AI usage included, and a dedicated computer and browser for every agent. Free to try, no card required.',
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://www.dooza.ai/vs-sintra' },
};

const HERO_BULLETS = [
    '$49/mo flat per organization — unlimited human users and unlimited AI agents.',
    '$20/mo in real AI usage included every month (no arbitrary 250-credit wall).',
    'Every AI agent gets its own computer and browser to run real workflows end-to-end.',
    'Native iOS, Android, and Mac apps — free to try right now with no card needed.',
];

const COMPARISON_ROWS = [
    ['Price', '$49/mo per org', '$97/mo list (1-mo plan)', '~$29.99–$199.99/user/mo'],
    ['Users & AI agents', 'Unlimited users & AI agents', '12+ preset helpers', 'Per-seat user pricing'],
    ['Usage / credits', '$20/mo AI usage included', '250-credit monthly cap (no rollover)', 'Credit-metered per user (3k–35k/mo)'],
    ['Agent runtime', 'Own computer & browser per agent', 'Shared workspace chat', 'Cloud workflow triggers'],
    ['Platforms', 'iOS, Android & Mac apps', 'Web & mobile apps', 'Web app'],
    ['Trial', 'Free to try, no card required', 'Paid upfront / card required', 'Credit-limited free tier'],
];

const WHY_SWITCH = [
    {
        title: 'No per-seat tax or credit anxiety',
        body: 'Sintra caps every plan at 250 credits a month, and Lindy charges per user while metering every task. Dooza Crew is $49/mo for your entire org with unlimited users, unlimited AI agents, and $20/mo of AI usage included.',
    },
    {
        title: 'Each agent gets its own computer & browser',
        body: 'Instead of a passive chat box, every Dooza Crew agent operates in its own isolated workspace with a real browser and file system — researching, filling forms, drafting deliverables, and asking before sending.',
    },
    {
        title: 'Work from iPhone, Android, or Mac',
        body: 'Manage your lead agent and helper crew from native iOS, Android, and Mac apps. Approve actions, review files, and trigger workflows on the go without waiting to get back to a browser tab.',
    },
];

const FAQ = [
    [
        'How is Dooza Crew priced compared to Sintra and Lindy?',
        'Dooza Crew is $49/mo per organization for unlimited users and unlimited AI agents, with $20/mo of AI usage included. Sintra lists at $97/mo on its 1-month plan with a 250-credit monthly cap, while Lindy bills per user with tiered monthly credits.',
    ],
    [
        'Can I try Dooza Crew before entering a credit card?',
        'Yes. You can install the app, sign in, and start using Dooza Crew for free with no credit card required.',
    ],
    [
        'What does "each agent gets its own computer and browser" mean?',
        'Each agent in your crew runs inside its own isolated environment with a real browser and workspace, so it can navigate websites, inspect documents, write files, and complete multi-step jobs — and asks your approval before sending emails or spending money.',
    ],
    [
        'Are there really no per-seat fees for my team?',
        'Yes. One $49/mo organization plan covers unlimited team members and unlimited AI agents.',
    ],
    [
        'Which devices does Dooza Crew run on?',
        'Dooza Crew has native apps for iOS, Android, and Mac, plus web access at crew.dooza.ai.',
    ],
];

const ck = <span aria-hidden="true" className="mt-[2px] shrink-0 font-bold text-[#0F766E]">✓</span>;

export default function VsSintraPage() {
    return (
        <main className="min-h-screen bg-white pb-24 text-[#14213D] sm:pb-0">
            <VsSintraCta sticky label="Try Dooza Crew free" />

            <section className="bg-[#EEF3F1]">
                <div className="mx-auto max-w-5xl px-4 py-10 sm:py-16">
                    <p className="inline-block rounded-full bg-white px-3 py-1 text-[13px] font-semibold text-[#0F766E] shadow-xs">
                        Dooza Crew · Built for teams switching from Sintra &amp; Lindy
                    </p>
                    <h1 className="mt-4 text-[32px] font-bold leading-[1.12] tracking-tight sm:text-5xl">
                        Dooza Crew: The $49/Mo Sintra &amp; Lindy Alternative (Unlimited Users &amp; Agents)
                    </h1>
                    <p className="mt-4 max-w-3xl text-[18px] leading-relaxed text-[#4B5567]">
                        Stop paying per seat or hitting a 250-credit wall mid-month. Give every AI agent its own computer and browser for one flat $49/mo org price.
                    </p>

                    <ul className="mt-6 grid gap-2.5 text-[16px] text-[#334155] sm:grid-cols-2">
                        {HERO_BULLETS.map((item) => (
                            <li key={item} className="flex gap-2.5 rounded-xl bg-white/80 p-3">
                                {ck}
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap items-center gap-4">
                        <VsSintraCta label="Try Dooza Crew free" placement="hero" />
                        <span className="text-[14px] font-medium text-[#4B5567]">
                            Free to try · No card required · Or text <a href="sms:+18555946841" className="font-semibold text-[#0F766E] underline">+1 (855) 594-6841</a> (no sign-up needed)
                        </span>
                    </div>
                </div>
            </section>

            <div className="mx-auto max-w-5xl px-4">
                <section id="compare" className="mt-12 scroll-mt-4 sm:mt-16">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                        Dooza Crew vs. Sintra vs. Lindy
                    </h2>
                    <p className="mt-2 text-[15px] text-[#4B5567]">
                        Flat org pricing and real agent computers vs. credit caps and per-user meters.
                    </p>

                    <div className="mt-6 overflow-x-auto rounded-2xl border border-[#E2E8F0] shadow-xs">
                        <table className="w-full min-w-[600px] border-collapse text-left text-[15px]">
                            <thead>
                                <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC] text-[#14213D]">
                                    <th className="px-4 py-3.5 font-semibold">Feature</th>
                                    <th className="bg-[#EEF3F1] px-4 py-3.5 font-bold text-[#0F766E]">Dooza Crew</th>
                                    <th className="px-4 py-3.5 font-semibold">Sintra AI</th>
                                    <th className="px-4 py-3.5 font-semibold">Lindy AI</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E2E8F0]">
                                {COMPARISON_ROWS.map(([feature, crew, sintra, lindy]) => (
                                    <tr key={feature}>
                                        <td className="px-4 py-3.5 font-semibold text-[#14213D]">{feature}</td>
                                        <td className="bg-[#F6FAF8] px-4 py-3.5 font-semibold text-[#0F766E]">{crew}</td>
                                        <td className="px-4 py-3.5 text-[#4B5567]">{sintra}</td>
                                        <td className="px-4 py-3.5 text-[#4B5567]">{lindy}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="mt-14 grid gap-5 sm:grid-cols-3">
                    {WHY_SWITCH.map((card) => (
                        <div key={card.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
                            <h3 className="text-[18px] font-bold text-[#14213D]">{card.title}</h3>
                            <p className="mt-2 text-[15px] leading-relaxed text-[#4B5567]">{card.body}</p>
                        </div>
                    ))}
                </section>

                <section id="faq" className="mt-14 scroll-mt-4">
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Questions before switching</h2>
                    <div className="mt-4 divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
                        {FAQ.map(([q, a], i) => (
                            <details key={q} open={i === 0} className="group">
                                <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-4 py-3 text-[17px] font-semibold">
                                    <span>{q}</span>
                                    <span aria-hidden="true" className="text-xl text-[#0F766E] transition group-open:rotate-45">+</span>
                                </summary>
                                <p className="pb-4 pr-8 text-[15px] leading-relaxed text-[#334155]">{a}</p>
                            </details>
                        ))}
                    </div>
                </section>

                <section className="mt-14 rounded-3xl bg-[#14213D] p-6 text-white sm:p-10">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                        Try Dooza Crew free — no card, no 250-credit cap.
                    </h2>
                    <p className="mt-2 max-w-2xl text-[16px] text-slate-300">
                        Start with unlimited users and AI agents on iOS, Android, and Mac. $49/mo per org when you upgrade, with $20/mo AI usage included.
                    </p>
                    <div className="mt-6">
                        <VsSintraCta label="Try Dooza Crew free" placement="footer_banner" variant="light" />
                    </div>
                </section>

                <p className="mt-10 pb-8 text-[13px] text-[#64748B]">
                    Dooza, brand of Adam Laboratory Inc., 1111b S Governors Ave Ste 34259, Dover, DE 19904.{' '}
                    <a href="mailto:support@dooza.ai" className="inline-block py-2 underline">support@dooza.ai</a> ·{' '}
                    <a href="/privacy" className="inline-block py-2 underline">Privacy</a> ·{' '}
                    <a href="/terms" className="inline-block py-2 underline">Terms</a>
                </p>
            </div>
        </main>
    );
}
