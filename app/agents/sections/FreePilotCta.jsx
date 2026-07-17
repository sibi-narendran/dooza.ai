import { ArrowRight, Clock, DollarSign, ShieldCheck } from 'lucide-react';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import { WORKFLOW_SIGNUP_URL } from '@/lib/links';

const badges = [
    { icon: DollarSign, label: 'Free setup' },
    { icon: Clock, label: 'Live in days' },
    { icon: ShieldCheck, label: 'No contracts' },
];

export default function FreePilotCta() {
    return (
        <section className="bg-warm px-4 py-20 md:px-8 md:py-24">
            <div className="scroll-reveal relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-primary-100 bg-white p-8 text-center shadow-xl shadow-primary-100/40 md:p-14">
                <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:32px_32px]"
                    aria-hidden="true"
                />
                <div
                    className="animate-blob pointer-events-none absolute -left-16 top-0 h-72 w-72 rounded-full bg-primary-100/60 blur-3xl"
                    aria-hidden="true"
                />
                <div
                    className="animate-blob animation-delay-2000 pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-primary-50/80 blur-3xl"
                    aria-hidden="true"
                />
                <div className="relative z-10">
                    <span className="section-label mb-4 block">Free pilot</span>
                    <h2 className="mb-5 font-serif text-3xl font-extrabold leading-tight text-slate-950 md:text-5xl">
                        Your first agent is free.
                    </h2>
                    <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600">
                        A Dooza engineer sets it up on your real work — live in days. Use it, see the
                        results, and pay only if you want to keep it. No contracts.
                    </p>
                    <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
                        {badges.map(({ icon: Icon, label }) => (
                            <span
                                key={label}
                                className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-primary-50 px-4 py-2 text-sm font-bold text-primary-800"
                            >
                                <Icon className="h-4 w-4 text-primary-600" />
                                {label}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <BookDemoButton source="agents_free_pilot" variant="primary" size="lg">
                            Get My Free Setup
                        </BookDemoButton>
                        <a
                            href={WORKFLOW_SIGNUP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-200 bg-white px-7 py-4 text-base font-bold text-primary-800 transition hover:border-primary-300 hover:bg-primary-50"
                        >
                            Get started for free <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                    <p className="mt-6 text-sm text-slate-500">
                        Due to high demand, we take on 5 free setups a week.
                    </p>
                </div>
            </div>
        </section>
    );
}
