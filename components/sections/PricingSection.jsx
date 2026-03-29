'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { getProductSignupUrl } from '@/lib/links';
import { trackSignupClick } from '@/lib/analytics';
import BookDemoButton from '@/components/buttons/BookDemoButton';

const starterFeatures = [
    "All AI employees included",
    "Base usage",
    "Free concierge onboarding",
    "24/7 autonomous operation",
    "1000+ app integrations",
];

const growthFeatures = [
    "All AI employees included",
    "2X usage vs Starter",
    "Free concierge onboarding",
    "24/7 autonomous operation",
    "1000+ app integrations",
];

const proFeatures = [
    "All AI employees included",
    "10X usage vs Starter",
    "Free concierge onboarding",
    "24/7 autonomous operation",
    "1000+ app integrations",
];

const plans = {
    monthly: [
        {
            name: 'Starter',
            price: 49,
            desc: 'For businesses getting started',
            cta: 'Try for $1',
            ctaStyle: 'primary',
            popular: false,
            features: starterFeatures,
        },
        {
            name: 'Growth',
            price: 69,
            desc: 'Scaling with multiple AI employees',
            cta: 'Choose plan',
            ctaStyle: 'default',
            popular: true,
            features: growthFeatures,
        },
        {
            name: 'Pro',
            price: 119,
            desc: 'For growing teams and power users',
            cta: 'Choose plan',
            ctaStyle: 'default',
            popular: false,
            features: proFeatures,
        },
    ],
    yearly: [
        {
            name: 'Starter',
            price: 39,
            desc: 'For businesses getting started',
            cta: 'Try for $1',
            ctaStyle: 'primary',
            popular: false,
            features: starterFeatures,
        },
        {
            name: 'Growth',
            price: 55,
            desc: 'Scaling with multiple AI employees',
            cta: 'Choose plan',
            ctaStyle: 'default',
            popular: true,
            features: growthFeatures,
        },
        {
            name: 'Pro',
            price: 95,
            desc: 'For growing teams and power users',
            cta: 'Choose plan',
            ctaStyle: 'default',
            popular: false,
            features: proFeatures,
        },
    ],
};

export default function PricingSection() {
    const [billing, setBilling] = useState('monthly');
    const currentPlans = plans[billing];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">Simple, transparent pricing</h2>
                    </div>

                    {/* Billing toggle */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center bg-slate-100 rounded-full p-1">
                            <button
                                onClick={() => setBilling('monthly')}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${billing === 'monthly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBilling('yearly')}
                                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${billing === 'yearly' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                            >
                                Yearly
                                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">-20%</span>
                            </button>
                        </div>
                    </div>

                    {/* $1 trial badge */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex items-center gap-3 bg-slate-900 rounded-full px-7 py-3.5 shadow-lg shadow-slate-900/20">
                            <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <span className="text-base font-bold text-white">Try today for $1</span>
                            <span className="text-sm text-slate-400">— 7-day full access</span>
                        </div>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-3 gap-6 md:gap-5 items-start" staggerDelay={0.15}>
                    {currentPlans.map((plan) => (
                        <StaggerItem key={plan.name}>
                            <div className={`relative rounded-3xl p-6 md:p-8 border-2 transition-all ${plan.popular
                                ? 'border-primary-400 bg-white shadow-xl shadow-primary-100/50 ring-1 ring-primary-100'
                                : 'border-slate-100 bg-white card-shadow hover:border-primary-200'
                            }`}>
                                {/* Popular badge */}
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="bg-gradient-to-r from-primary-600 to-teal-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                {/* Plan name */}
                                <h3 className="text-lg font-bold text-slate-900 font-serif mb-1 mt-1">{plan.name}</h3>

                                {/* Price */}
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl md:text-5xl font-extrabold text-slate-900 font-serif">${plan.price}</span>
                                    <span className="text-slate-400 text-sm">USD/ month</span>
                                </div>

                                <p className="text-sm text-slate-500 mb-6">{plan.desc}</p>

                                {/* CTA */}
                                <a
                                    href={getProductSignupUrl('workforce')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackSignupClick(`pricing_${plan.name}`)}
                                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all mb-6 ${plan.ctaStyle === 'primary'
                                        ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    {plan.cta}
                                </a>

                                {/* Features */}
                                <div className="space-y-3">
                                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Includes</p>
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2.5">
                                            <CheckCircle2 className="w-4 h-4 text-primary-500 shrink-0" />
                                            <span className={`text-sm ${feature.includes('X usage') ? 'font-bold text-slate-900' : 'text-slate-600'}`}>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Bottom section */}
                <ScrollReveal delay={0.3}>
                    <div className="flex flex-col items-center mt-10 gap-3">
                        <p className="text-sm text-slate-400">or</p>
                        <BookDemoButton source="pricing">Talk to Founder</BookDemoButton>
                        <p className="text-sm font-medium text-slate-600">Free setup & walkthrough · 15 min · No commitment</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
