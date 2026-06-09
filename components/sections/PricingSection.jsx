'use client';

import { useState } from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { getProductSignupUrl } from '@/lib/links';
import { trackSignupClick } from '@/lib/analytics';
import BookDemoButton from '@/components/buttons/BookDemoButton';

const visibleFeatureCount = 4;

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
    "84 hours of done-for-you work capacity",
    "Managed sales and support automation setup",
    "Calls, email, leads, and operations setup",
    "Priority workflow review and improvements",
    "1000+ app integrations",
];

const plans = [
    {
        name: 'Starter',
        price: 49,
        desc: 'For businesses getting started',
        cta: 'Get started',
        ctaStyle: 'primary',
        popular: false,
        features: starterFeatures,
    },
    {
        name: 'Growth',
        price: 79,
        desc: 'Scaling with multiple AI employees',
        cta: 'Choose plan',
        ctaStyle: 'default',
        popular: true,
        features: growthFeatures,
    },
    {
        name: 'Managed',
        price: 199,
        desc: 'For teams that want automation set up with us',
        cta: 'Choose plan',
        ctaStyle: 'default',
        popular: false,
        anchorId: 'managed-plan',
        features: proFeatures,
    },
];

export default function PricingSection() {
    const [expandedPlans, setExpandedPlans] = useState({});

    const togglePlanFeatures = (planName) => {
        setExpandedPlans((current) => ({
            ...current,
            [planName]: !current[planName],
        }));
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">Simple, transparent pricing</h2>
                    </div>

                    {/* Money-back guarantee badge */}
                    <div className="flex justify-center mb-12">
                        <div className="inline-flex items-center gap-3 bg-slate-900 rounded-full px-7 py-3.5 shadow-lg shadow-slate-900/20">
                            <span className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                            <span className="text-base font-bold text-white">Starts at $49/mo</span>
                            <span className="text-sm text-slate-400">— 7-day money-back guarantee</span>
                        </div>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-3 gap-6 md:gap-5 items-stretch" staggerDelay={0.15}>
                    {plans.map((plan) => {
                        const isExpanded = Boolean(expandedPlans[plan.name]);
                        const visibleFeatures = isExpanded ? plan.features : plan.features.slice(0, visibleFeatureCount);
                        const hiddenFeatureCount = Math.max(plan.features.length - visibleFeatureCount, 0);
                        const hasMoreFeatures = hiddenFeatureCount > 0;

                        return (
                            <StaggerItem key={plan.name} className="h-full">
                                <div id={plan.anchorId} className={`relative scroll-mt-28 h-full rounded-3xl p-6 md:p-8 border-2 transition-all ${plan.popular
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

                                    <p className="min-h-10 text-sm text-slate-500 mb-6">{plan.desc}</p>

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
                                    <div id={`features-${plan.name.toLowerCase()}`} className="space-y-3">
                                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Includes</p>
                                        {visibleFeatures.map((feature) => (
                                            <div
                                                key={feature}
                                                className={`flex items-center gap-2.5 ${feature.includes('84 hours')
                                                    ? 'rounded-2xl border border-primary-200 bg-primary-50 px-3 py-2.5 shadow-sm'
                                                    : ''
                                                }`}
                                            >
                                                <CheckCircle2 className={`w-4 h-4 shrink-0 ${feature.includes('84 hours') ? 'text-primary-700' : 'text-primary-500'}`} />
                                                <span className={`text-sm ${feature.includes('84 hours')
                                                    ? 'font-extrabold text-primary-900'
                                                    : feature.includes('X usage')
                                                        ? 'font-bold text-slate-900'
                                                        : 'text-slate-600'
                                                }`}>{feature}</span>
                                            </div>
                                        ))}
                                        {hasMoreFeatures && (
                                            <button
                                                type="button"
                                                aria-expanded={isExpanded}
                                                aria-controls={`features-${plan.name.toLowerCase()}`}
                                                onClick={() => togglePlanFeatures(plan.name)}
                                                className="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-primary-700 transition-colors hover:text-primary-900"
                                            >
                                                {isExpanded ? 'View less' : `View more (${hiddenFeatureCount})`}
                                                <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>

                {/* Bottom section */}
                <ScrollReveal delay={0.3}>
                    <div className="flex flex-col items-center mt-10 gap-3">
                        <p className="text-sm text-slate-400">or</p>
                        <BookDemoButton source="pricing">Book Free Setup with Founder</BookDemoButton>
                        <p className="text-sm font-medium text-slate-600">Free setup & walkthrough · 15 min · No commitment</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
