// "Your <industry> AI crew" block for ICP pages (Sibi 2026-10-22 15:59). The page keeps its own offer and CTA
// (Sibi 15:34); this block is the Crew entry: a chat box with the industry's jobs, sent to crew.dooza.ai as ?task=.
import { Schibsted_Grotesk } from 'next/font/google';
import CrewPrompt from '@/components/crew/CrewPrompt';
import { icpCrews } from '@/lib/icpCrews';

const display = Schibsted_Grotesk({ subsets: ['latin'], weight: ['500', '700', '800'], display: 'swap' });

export default function IcpCrew({ slug }) {
    const crew = icpCrews[slug];
    if (!crew) return null;
    return (
        <section className={`${display.className} crew-home border-y border-[#E2E8F0] bg-[#FAF9F7] px-4 py-16 text-[#0F172A] md:px-8 md:py-24`}>
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
                <div>
                    <p className="text-base font-semibold text-[#0F766E]">Dooza Crew</p>
                    <h2 className="mt-2 text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] md:text-[40px]">Your {crew.industry} AI crew</h2>
                    <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#475569]">
                        Three AI employees your master agent sets up on day one. Each has its own computer and browser, and works with your team in one group chat.
                    </p>
                    <ul className="mt-8 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
                        {crew.employees.map((e) => (
                            <li key={e.role} className="py-5">
                                <h3 className="text-lg font-bold">{e.role}</h3>
                                <p className="mt-1 text-[16px] leading-relaxed text-[#475569]">{e.job}</p>
                                <dl className="mt-3 grid gap-1 text-sm sm:grid-cols-[110px_1fr]">
                                    <dt className="font-semibold text-[#0F172A]">Tools, access</dt>
                                    <dd className="text-[#475569]">{e.tools}</dd>
                                    <dt className="font-semibold text-[#0F172A]">Knows</dt>
                                    <dd className="text-[#475569]">{e.knows}</dd>
                                </dl>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:pt-24">
                    <p className="mb-4 text-lg font-bold">Give your crew its first job</p>
                    <CrewPrompt placement={`icp-${slug}`} tone="light" examples={crew.examples} />
                    <p className="mt-5 text-sm text-[#64748B]">Nothing leaves the company until a person you choose approves it.</p>
                </div>
            </div>
        </section>
    );
}
