import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BookDemoButton from '@/components/buttons/BookDemoButton';

export default function PricingCta() {
    return (
        <section className="bg-white px-4 py-20 md:py-24">
            <div className="mx-auto max-w-4xl rounded-[32px] border border-primary-100 bg-warm p-8 text-center shadow-xl shadow-primary-100/40 md:p-12">
                <span className="section-label mb-4 block">Pricing</span>
                <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                    Choose the plan that works for you
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600">
                    Start free, add agents as they earn their keep, and get concierge onboarding on every plan — no per-resolution meters, no per-seat surprises.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/pricing"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-primary-700/20 transition hover:-translate-y-0.5 hover:bg-primary-800"
                    >
                        See plans <ArrowRight className="h-4 w-4" />
                    </Link>
                    <BookDemoButton source="agents_pricing" variant="secondary" size="lg">
                        Talk to sales
                    </BookDemoButton>
                </div>
            </div>
        </section>
    );
}
