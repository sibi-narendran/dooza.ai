import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import { growPlans } from '@/lib/growData';


export default function GrowPricingSection() {
    return (
        <section id="grow" className="py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <span className="section-label mb-4 block text-primary-700">DOOZA GROW</span>
                    <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-5xl">Growth engine plans</h2>
                    <p className="mt-4 text-slate-600">
                        Done-for-you SEO & GEO, paid ads, website and conversion agents. Priced by plan and ad spend, scoped on a free 30-minute call. Every plan starts with a refundable pilot — 100% refund within 14 days.
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    {growPlans.map((p) => (
                        <div key={p.name} className={`flex flex-col rounded-3xl border bg-white p-8 ${p.featured ? 'border-primary-300 shadow-xl ring-1 ring-primary-100' : 'border-slate-200'}`}>
                            <h3 className="font-serif text-2xl font-bold text-slate-900">{p.name}</h3>
                            <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                            <ul className="mt-5 flex-1 space-y-2">
                                {p.agents.map((a) => (
                                    <li key={a} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-primary-600" /> {a}</li>
                                ))}
                            </ul>
                            <BookDemoButton source={`pricing-grow-${p.name.toLowerCase().replace(/\s+/g, '-')}`} variant={p.featured ? 'primary' : 'secondary'} className="mt-6 !w-full !px-4 !text-base" />
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-center">
                    <Link href="/grow/pricing" className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-900">
                        Full Dooza Grow pricing <ArrowRight className="h-4 w-4" />
                    </Link>
                </p>
            </div>
        </section>
    );
}
