import { TrendingUp, MessageSquare, Search, ArrowRight, Send, Video, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import ScrollReveal from '@/components/ScrollReveal';
import { getProductSignupUrl } from '@/lib/links';
import { solutionCards } from '@/lib/homeData';

const iconMap = { TrendingUp, MessageSquare, Search, Send, Video, PhoneCall };

export default function SolutionsSection() {
    return (
        <section className="py-16 md:py-24 bg-warm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="section-label block mb-4 text-teal-600">SOLUTIONS · AI EMPLOYEES</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">AI automation for every part of your business</h2>
                        <p className="text-xl text-slate-600">Purpose-built AI employees that handle your most time-consuming tasks.</p>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                    {solutionCards.map((item, idx) => {
                        const Icon = iconMap[item.iconName];
                        const href = item.href || getProductSignupUrl('workforce');
                        const isInternal = href.startsWith('/');
                        const CardLink = isInternal ? Link : 'a';
                        return (
                            <StaggerItem key={idx}>
                                <CardLink
                                    href={href}
                                    {...(!isInternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                    id={item.id}
                                    className={`card-interactive group bg-white p-6 md:p-8 rounded-3xl border border-slate-100 ${item.borderHover} card-shadow hover:card-shadow-hover transition-all`}
                                >
                                    <div className={`w-14 h-14 ${item.iconBg} ${item.iconColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                                    <span className="inline-flex items-center gap-1 text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                                        Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </CardLink>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
}
