import { CheckCircle2 } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SignupButton from '@/components/buttons/SignupButton';
import { pricingFeatures } from '@/lib/homeData';

export default function PricingSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <ScrollReveal>
                    <span className="section-label block mb-4">SIMPLE PRICING</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">One price. 6 AI employees.</h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">Less than a coffee a day for a full team working around the clock.</p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="card-interactive-scale bg-white rounded-3xl p-6 md:p-12 border-2 border-primary-100 card-shadow hover:ring-2 hover:ring-primary-400 hover:ring-offset-2 transition-all">
                        <div className="flex justify-center items-baseline gap-2 mb-4">
                            <span className="text-6xl md:text-7xl font-bold text-slate-900 font-serif">$29</span>
                            <span className="text-xl text-slate-500">/month</span>
                        </div>
                        <p className="text-slate-500 mb-8">Billed monthly. Cancel anytime.</p>

                        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left">
                            {pricingFeatures.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                                    <span className="text-slate-700">{item}</span>
                                </div>
                            ))}
                        </div>

                        <SignupButton source="pricing" />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
