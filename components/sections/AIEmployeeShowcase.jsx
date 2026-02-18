import { Mail, MessageSquare, Search, Phone, TrendingUp, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { getProductSignupUrl } from '@/lib/links';
import { aiEmployees } from '@/lib/homeData';

const iconMap = { Mail, MessageSquare, Search, Phone, TrendingUp, FileText };

export default function AIEmployeeShowcase() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-primary-50/30 to-warm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="section-label block mb-4">MEET YOUR TEAM</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Meet your new AI employees</h2>
                        <p className="text-xl text-slate-600">6 specialists. 24/7 availability. One subscription.</p>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
                    {aiEmployees.map((emp, idx) => {
                        const Icon = iconMap[emp.iconName];
                        return (
                            <StaggerItem key={idx}>
                                <div className={`card-interactive group bg-white rounded-2xl border border-slate-100 ${emp.borderHover} card-shadow hover:card-shadow-hover transition-all overflow-hidden`}>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${emp.color} flex items-center justify-center text-white shadow-md`}>
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 font-serif text-lg">{emp.name}</h3>
                                                <p className="text-sm text-slate-500">{emp.role}</p>
                                            </div>
                                        </div>

                                        <p className="text-slate-600 italic mb-4 text-sm leading-relaxed">&ldquo;{emp.quote}&rdquo;</p>

                                        <ul className="space-y-2 mb-4">
                                            {emp.tasks.map((task, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                                                    {task}
                                                </li>
                                            ))}
                                        </ul>

                                        <a
                                            href={getProductSignupUrl('workforce')}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`inline-flex items-center gap-1 text-sm font-semibold ${emp.accentColor} hover:opacity-80 transition-opacity`}
                                        >
                                            Hire {emp.name} <ArrowRight className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
}
