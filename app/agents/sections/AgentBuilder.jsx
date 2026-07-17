import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { WORKFLOW_SIGNUP_URL } from '@/lib/links';

const bullets = [
    "Haven't found the agent template you need? No problem.",
    'Build custom AI agents for any task in seconds using natural language.',
    'Voice / text-to-agents: interact seamlessly with voice or text in a natural, conversational flow to build agents.',
];

export default function AgentBuilder() {
    return (
        <section className="bg-white px-4 py-20 md:px-8 md:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                <div className="scroll-reveal">
                    <span className="section-label mb-4 block">Build your own</span>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                        AI agent builder
                    </h2>
                    <div className="scroll-stagger mt-8 grid gap-3">
                        {bullets.map((bullet) => (
                            <div
                                key={bullet}
                                className="reveal-child flex items-start gap-3 rounded-2xl border border-slate-100 bg-warm p-4 shadow-sm transition duration-300 hover:border-primary-200"
                            >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
                                <span className="text-sm font-semibold leading-relaxed text-slate-700">
                                    {bullet}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <a
                            href={WORKFLOW_SIGNUP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800"
                        >
                            Build your agent <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
                <div className="scroll-reveal">
                    <div className="animate-float group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl shadow-slate-200/60 transition duration-300 hover:shadow-2xl hover:shadow-primary-100/50">
                        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50/80 px-5 py-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                            <span className="ml-3 text-xs font-semibold text-slate-400">Agent builder</span>
                        </div>
                        <div className="bg-warm p-4">
                            <div className="relative overflow-hidden rounded-2xl">
                                <div
                                    className="workflow-code-scan pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-transparent via-primary-200/40 to-transparent"
                                    aria-hidden="true"
                                />
                                <Image
                                    src="/agents/deepagent/builder.webp"
                                    width={2080}
                                    height={1743}
                                    alt="Voice and text to agent builder"
                                    className="h-auto w-full rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
