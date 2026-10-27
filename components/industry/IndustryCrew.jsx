// Config-driven industry Crew page (/ai-agents-for-*), the /insurance-agents build as a template (Sibi 2026-10-25 19:41:
// "Create a new industries page ... for accountants", "Ai agents for *", "Do again for law"). Copy and agents live in
// lib/industryCrews.js. Product facts per config comment (Edison). Design: home v3 tokens (teal = AI, amber = your staff).
import Link from 'next/link';
import SiteHeader from '@/components/crew/SiteHeader';
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import FAQAccordion from '@/components/FAQAccordion';
import CrewPrompt from '@/components/crew/CrewPrompt';
import { crewSignupUrl } from '@/lib/crewUrl';
import IndustryRoom from '@/components/industry/IndustryRoom';
import NightShift from '@/components/insurance/NightShift';
import { PRICE_LINE } from '@/lib/industryCrews';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '700', '800'], display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });
const D = display.className;

const INK = 'text-[#14213D]';
const MUTED = 'text-[#4B5567]';
const H2 = `${D} text-[34px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[52px]`;
const LINK = 'font-semibold text-[#0F766E] underline decoration-2 underline-offset-4 hover:text-[#14213D]';

const agentSlug = (a) => a.name.split(' ')[0].toLowerCase();

export default function IndustryCrew({ c }) {
    const p = c.prefix;
    return (
        <div className={`${body.className} bg-white ${INK}`}>
            <SiteHeader tagline={c.tagline} bookSource={`${p}-header-book`} source={`${p}-header`} />

            <main id="main-content">
                <section className="relative overflow-hidden">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(#14213D0D_1px,transparent_1px),linear-gradient(90deg,#14213D0D_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
                    <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-4 pb-20 pt-10 md:px-8 lg:grid-cols-[6fr_5fr] lg:gap-16 lg:pb-28 lg:pt-16">
                        <div>
                            <p className="text-[15px] font-semibold text-[#0F766E]">{c.eyebrow}</p>
                            <h1 className={`${D} mt-3 text-[44px] font-extrabold leading-[0.97] tracking-[-0.045em] sm:text-[60px] lg:text-[80px]`}>
                                {c.h1}
                            </h1>
                            <p className={`mt-7 max-w-[36rem] text-lg leading-relaxed md:text-xl ${MUTED}`}>{c.lede}</p>
                            <div className="mt-8 max-w-[38rem]">
                                <CrewPrompt placement={`${p}-hero`} tone="light" examples={c.examples} />
                                <p className={`mt-5 text-[15px] ${MUTED}`}>
                                    Rather talk first? <Link href="/book" data-source={`${p}-hero-book`} className={LINK}>Book a 30-minute call</Link>.
                                </p>
                            </div>
                        </div>
                        <IndustryRoom room={c.room} prefix={p} />
                    </div>
                </section>

                <section id="agents" aria-labelledby="agents-title" className="scroll-mt-24 bg-[#EEF3F1] px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-3xl">
                            <h2 id="agents-title" className={H2}>One agent for each thing that eats your day.</h2>
                            <p className={`mt-5 text-lg leading-relaxed ${MUTED}`}>{c.handoffs}</p>
                        </div>
                        <ol className="mt-14 divide-y divide-[#14213D]/15 border-y border-[#14213D]/15">
                            {c.agents.map((a) => (
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
                                        <a href={crewSignupUrl(`${p}-agent-${agentSlug(a)}`, a.task)} data-offer="crew" data-source={`${p}-agent-${agentSlug(a)}`} className={`mt-4 inline-block text-[15px] ${LINK}`}>
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
                                    <h3 className={`${D} mt-3 text-[26px] font-bold leading-[1.1] tracking-[-0.02em] md:text-[32px]`}>{c.phonesPain}</h3>
                                </div>
                                <div className="md:pt-9">
                                    <p className={`text-[17px] leading-relaxed ${MUTED}`}>
                                        Crew agents take phone calls too. It is included in your Crew plan, so there is no separate phone service to buy.
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>

                <NightShift displayClass={D} items={c.night} />

                <section id="how" aria-labelledby="how-title" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <h2 id="how-title" className={`${H2} max-w-3xl`}>{c.howTitle}</h2>
                        <ol className="mt-14 grid gap-10 md:grid-cols-3">
                            {c.steps.map((s, i) => (
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
                            <h2 id="guard-title" className={H2}>{c.guardTitle}</h2>
                            <p className={`mt-5 text-lg leading-relaxed ${MUTED}`}>{c.guardLede}</p>
                        </div>
                        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                            {c.guardrails.map((g) => (
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
                            <h2 id="price-title" className={`${H2} text-white`}>{c.priceTitle}</h2>
                            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{PRICE_LINE}</p>
                        </div>
                        <div className="lg:text-right">
                            <a href={crewSignupUrl(`${p}-price`)} data-offer="crew" data-source={`${p}-price`} className="inline-block rounded-xl bg-white px-7 py-4 text-lg font-semibold text-[#14213D] hover:bg-[#EEF3F1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Start your free trial
                            </a>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="faq-title" className="px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-4xl">
                        <h2 id="faq-title" className={H2}>{c.faqTitle}</h2>
                        <div className="mt-10">
                            <FAQAccordion items={c.faq} />
                        </div>
                        <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-[#14213D]/15 bg-[#EEF3F1] p-6 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-lg font-semibold">Still have a doubt? Ask a person.</p>
                            <Link href="/book" data-source={`${p}-faq-book`} className="rounded-full bg-[#14213D] px-6 py-3 text-[15px] font-semibold text-white hover:bg-[#0F766E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14213D]">Book a 30-minute call</Link>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="end-title" className="bg-[#EEF3F1] px-4 py-20 md:px-8 md:py-28">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 id="end-title" className={H2}>What should your first AI employee take off your desk?</h2>
                        <div className="mt-10">
                            <CrewPrompt placement={`${p}-bottom`} tone="light" examples={c.examples.slice(0, 3)} centered />
                        </div>
                        <p className={`mt-8 text-[15px] ${MUTED}`}>
                            Want us to set it up for you? <Link href="/book" data-source={`${p}-bottom-book`} className={LINK}>Book a 30-minute call</Link>.
                        </p>
                        <p className={`mt-3 text-[15px] ${MUTED}`}>
                            Comparing tools first? See <Link href={`/blog/best-ai-tools-for-${c.slug}`} data-source={`${p}-bottom-tools`} className={LINK}>the best AI tools for {c.slug.replace(/-/g, ' ')} in 2026, with prices</Link>.
                        </p>
                        {c.extraLink && (
                            <p className={`mt-3 text-[15px] ${MUTED}`}>
                                {c.extraLink.lead} <Link href={c.extraLink.href} data-source={`${p}-bottom-extra`} className={LINK}>{c.extraLink.text}</Link>.
                            </p>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}
