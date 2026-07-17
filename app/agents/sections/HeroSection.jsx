import Image from 'next/image';
import { CheckCircle2, Star } from 'lucide-react';
import { WORKFLOW_SIGNUP_URL } from '@/lib/links';
import AgentPromptBox from '../AgentPromptBox';

const ratingBadges = [
    {
        name: 'G2 Crowd',
        logo: '/agents/deepagent/hero-main.webp',
        width: 303,
        height: 160,
    },
    {
        name: 'Capterra',
        logo: '/agents/deepagent/hero-side.webp',
        width: 361,
        height: 160,
    },
    {
        name: 'Trustpilot',
        logo: '/agents/deepagent/logo-white.webp',
        width: 427,
        height: 96,
    },
    {
        name: 'Google',
        logo: '/agents/deepagent/google-logo.webp',
        width: 397,
        height: 131,
    },
];

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
                    AI agent builder that automates your{' '}
                    <span className="text-primary-600">marketing</span>,{' '}
                    <span className="text-primary-600">sales</span> and{' '}
                    <span className="text-primary-600">support</span>.
                </h1>
                <div className="mb-8 mt-3 w-full max-w-3xl">
                    <AgentPromptBox signupUrl={WORKFLOW_SIGNUP_URL} />
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                        <span className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
                            ))}
                        </span>
                        2,000+ 5 star Reviews
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4 text-primary-600" />
                        No credit card required
                    </span>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                    {ratingBadges.map((badge) => (
                        <div
                            key={badge.name}
                            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-md"
                        >
                            <Image
                                src={badge.logo}
                                alt={`${badge.name} logo`}
                                width={badge.width}
                                height={badge.height}
                                className="h-6 w-auto"
                            />
                            <span className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
