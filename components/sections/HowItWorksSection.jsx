import { Users, Zap, BarChart3 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SVGConnectingLine from '@/components/SVGConnectingLine';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import { howItWorksSteps } from '@/lib/homeData';

const iconMap = { Users, Zap, BarChart3 };

export default function HowItWorksSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="section-label block mb-4 text-emerald-600">HOW IT WORKS</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Up and running in 5 minutes</h2>
                        <p className="text-xl text-slate-600">No technical skills required. We handle everything.</p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-6 md:gap-4 relative">
                    <SVGConnectingLine />

                    {howItWorksSteps.map((step, idx) => {
                        const Icon = iconMap[step.iconName];
                        return (
                            <ScrollReveal key={idx} delay={idx * 0.2}>
                                <div className="card-interactive-sm relative bg-white p-6 md:p-8 rounded-2xl border border-emerald-100/50 card-shadow hover:card-shadow-hover hover:border-primary-200 transition-all text-center">
                                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold relative z-10 shadow-lg shadow-primary-200 ring-4 ring-primary-100">{step.num}</div>
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-teal-100 shadow-sm shadow-primary-100 text-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                <ScrollReveal delay={0.4}>
                    <div className="text-center mt-12">
                        <BookDemoButton source="how_it_works">Book Your Free Setup Call</BookDemoButton>
                        <p className="text-sm text-slate-500 mt-4">30-minute call · No commitment · We do the work</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
