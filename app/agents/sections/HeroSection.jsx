import { CheckCircle2 } from 'lucide-react';
import { WORKFLOW_SIGNUP_URL } from '@/lib/links';
import AgentPromptBox from '../AgentPromptBox';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden px-4 pb-16 pt-32 md:px-8 md:pb-20 md:pt-40">
            <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:28px_28px]"
                aria-hidden="true"
            />
            <div
                className="animate-pulse-slow pointer-events-none absolute -top-32 left-1/2 h-96 w-[720px] -translate-x-1/2 rounded-full bg-primary-100/50 blur-3xl"
                aria-hidden="true"
            />
            <div className="hero-entrance relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
                <h1 className="mb-6 font-serif text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-950 md:text-6xl">
                    Hire your first <span className="text-primary-600">AI employee.</span>
                </h1>
                <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-600 md:text-xl">
                    Dooza engineers build it, train it, and keep it running. Live in days. Start with a refundable pilot — 100% refund within 14 days.
                </p>
                <div className="mb-8 mt-3 w-full max-w-3xl">
                    <AgentPromptBox signupUrl={WORKFLOW_SIGNUP_URL} />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-primary-600" />
                        Refundable pilot
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-primary-600" />
                        No contracts
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-primary-600" />
                        100% refund within 14 days
                    </span>
                </div>
                <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-500" />
                    A Dooza engineer scopes your pilot on a free 30-minute call.
                </p>
            </div>
        </section>
    );
}
