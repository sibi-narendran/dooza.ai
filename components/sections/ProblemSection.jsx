import { Mail, MessageSquare, Calendar } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { problemCards } from '@/lib/homeData';

const iconMap = { Mail, MessageSquare, Calendar };

export default function ProblemSection() {
    return (
        <section className="py-16 md:py-24 bg-warm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="section-label block mb-4 text-red-500">THE PROBLEM</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">You want to scale, but you&apos;re drowning in busywork</h2>
                        <p className="text-xl text-slate-600">Sound familiar?</p>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
                    {problemCards.map((item, idx) => {
                        const Icon = iconMap[item.iconName];
                        return (
                            <StaggerItem key={idx}>
                                <div className="card-interactive group relative bg-white p-6 md:p-8 rounded-3xl border border-slate-100 hover:border-red-100/60 card-shadow hover:card-shadow-hover transition-all">
                                    <div className={`w-12 h-12 md:w-14 md:h-14 ${item.iconBg} ${item.iconColor} rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-6 h-6 md:w-7 md:h-7" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 font-serif">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
}
