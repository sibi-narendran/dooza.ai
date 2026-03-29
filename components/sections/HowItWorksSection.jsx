import { UserPlus, Settings, Rocket, Clock, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import { howItWorksSteps } from '@/lib/homeData';

const iconMap = { UserPlus, Settings, Rocket };

const stepStyle = {
    numBg: 'bg-primary-600 shadow-primary-200 ring-primary-100',
    iconBg: 'bg-gradient-to-br from-primary-50 to-teal-100 shadow-primary-100',
    iconColor: 'text-primary-600',
    exampleBg: 'bg-primary-50 border-primary-100 text-primary-700',
};

export default function HowItWorksSection() {
    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <span className="section-label block mb-4 text-emerald-600">HOW IT WORKS</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 font-serif">
                            Hire your AI team in 3 steps
                        </h2>
                        <p className="text-lg md:text-xl text-slate-500">No code. No setup headaches. Just tell them what to do.</p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {howItWorksSteps.map((step, idx) => {
                        const Icon = iconMap[step.iconName];
                        const style = stepStyle;
                        return (
                            <ScrollReveal key={idx} delay={idx * 0.15}>
                                <div className="relative bg-white p-7 md:p-9 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group h-full flex flex-col">
                                    {/* Time anchor - creates urgency */}
                                    <div className="flex items-center justify-center gap-1.5 mb-5">
                                        <Clock className="w-3.5 h-3.5 text-primary-500" />
                                        <span className="text-xs font-bold text-primary-600 uppercase tracking-wider">{step.time}</span>
                                    </div>

                                    {/* Step number */}
                                    <div className={`w-11 h-11 ${style.numBg} text-white rounded-full flex items-center justify-center mx-auto mb-6 text-lg font-bold shadow-lg ring-4`}>
                                        {step.num}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-14 h-14 ${style.iconBg} shadow-sm ${style.iconColor} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 font-serif">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 leading-relaxed mb-5">
                                        {step.desc}
                                    </p>

                                    {/* Example - the "aha" moment */}
                                    <div className={`${style.exampleBg} border rounded-xl px-4 py-3 text-sm italic leading-relaxed mb-5`}>
                                        &ldquo;{step.example}&rdquo;
                                    </div>

                                    {/* Outcome - reward signal */}
                                    <div className="mt-auto flex items-center justify-center gap-2 text-sm font-semibold text-emerald-600">
                                        <ArrowRight className="w-4 h-4" />
                                        {step.outcome}
                                    </div>
                                </div>
                            </ScrollReveal>
                        );
                    })}
                </div>

                {/* Video */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-14 flex justify-center">
                        <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/MObI_Wns25w?si=2nY0ylUXkepZ303_"
                                title="See Dooza AI employees in action"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                    <div className="text-center mt-14">
                        <BookDemoButton source="how_it_works" className="text-lg px-8 py-4">Talk to Founder</BookDemoButton>
                        <p className="text-sm font-medium text-slate-600 mt-3">Free 15-min call · No commitment</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
