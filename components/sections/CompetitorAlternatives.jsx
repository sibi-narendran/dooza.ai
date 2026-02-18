import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { competitorAlternatives } from '@/lib/homeData';

export default function CompetitorAlternatives() {
    return (
        <section className="py-16 md:py-20 bg-warm">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="section-label block mb-4 text-indigo-500">COMPARISONS</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">Switching from another platform?</h2>
                        <p className="text-lg text-slate-600">See why businesses choose Dooza</p>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.1}>
                    {competitorAlternatives.map((item, idx) => (
                        <StaggerItem key={idx}>
                            <Link
                                href={`/blog/${item.slug}`}
                                className="group bg-white hover:bg-primary-50 border border-slate-100 hover:border-primary-200 rounded-2xl p-6 transition-all card-shadow hover:card-shadow-hover block"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-semibold text-slate-500 uppercase">vs {item.name}</span>
                                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                                </div>
                                <div className="flex items-center gap-4 text-sm">
                                    {item.benefits.map((b, i) => (
                                        <span key={i} className="flex items-center gap-1 text-emerald-600">
                                            <CheckCircle2 className="w-4 h-4" />{b}
                                        </span>
                                    ))}
                                </div>
                            </Link>
                        </StaggerItem>
                    ))}
                    <StaggerItem>
                        <Link
                            href="/alternatives"
                            className="group flex items-center justify-center bg-slate-50 hover:bg-slate-100 rounded-2xl p-6 transition-all border border-slate-100"
                        >
                            <span className="text-slate-600 group-hover:text-slate-900 font-medium">View all comparisons &rarr;</span>
                        </Link>
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    );
}
