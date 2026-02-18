import { Users, Bot, Clock, Zap, Mail, MessageSquare, TrendingUp, Brain, Rocket, CheckCircle2, X } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SignupButton from '@/components/buttons/SignupButton';
import { comparisonRows } from '@/lib/homeData';

const iconMap = { Clock, Zap, Mail, MessageSquare, TrendingUp, Brain, Rocket };

export default function ComparisonSection() {
    return (
        <section className="py-16 md:py-24 bg-warm">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="section-label block mb-4 text-orange-500">COMPARE</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Doing It Yourself vs AI Employees</h2>
                        <p className="text-xl text-slate-600">Any business not using AI to improve productivity is leaving money on the table.</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    {/* Desktop: Table layout */}
                    <div className="hidden md:block bg-white rounded-3xl overflow-hidden card-shadow border border-slate-100">
                        {/* Table Header */}
                        <div className="grid grid-cols-3 bg-slate-50/80 border-b border-slate-100">
                            <div className="p-6 text-left">
                                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Comparison</span>
                            </div>
                            <div className="p-6 text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <Users className="w-5 h-5 text-slate-500" />
                                    <span className="font-bold text-slate-700">Doing It Yourself</span>
                                </div>
                            </div>
                            <div className="p-6 text-center bg-primary-50/60 border-l border-primary-100">
                                <div className="flex items-center justify-center gap-2">
                                    <Bot className="w-5 h-5 text-primary-600" />
                                    <span className="font-bold text-primary-700">AI Employees</span>
                                </div>
                            </div>
                        </div>

                        {/* Comparison Rows */}
                        {comparisonRows.map((row, idx) => {
                            const Icon = iconMap[row.iconName];
                            return (
                                <div
                                    key={idx}
                                    className={`comparison-row grid grid-cols-3 border-b border-slate-50 last:border-b-0 ${idx % 2 === 1 ? 'bg-slate-50/30' : ''}`}
                                >
                                    <div className="p-5 flex items-center gap-3">
                                        <Icon className="w-5 h-5 text-slate-400 shrink-0" />
                                        <span className="font-medium text-slate-700">{row.label}</span>
                                    </div>
                                    <div className="p-5 text-center flex items-center justify-center">
                                        <span className="text-slate-500">{row.diy}</span>
                                    </div>
                                    <div className="p-5 text-center bg-primary-50/30 border-l border-primary-50 flex items-center justify-center">
                                        <span className="text-primary-700 font-semibold flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            {row.ai}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Mobile: Stacked card layout */}
                    <div className="md:hidden space-y-3">
                        {comparisonRows.map((row, idx) => {
                            const Icon = iconMap[row.iconName];
                            return (
                                <div key={idx} className="bg-white rounded-2xl p-4 border border-slate-100 border-l-2 border-l-primary-200 card-shadow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon className="w-4 h-4 text-slate-400 shrink-0" />
                                        <span className="font-semibold text-slate-900 text-sm">{row.label}</span>
                                    </div>
                                    <div className="flex items-start gap-2 mb-2 text-sm">
                                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-500">{row.diy}</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span className="text-primary-700 font-semibold">{row.ai}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <div className="text-center mt-10">
                        <SignupButton source="comparison">Let AI Handle the Busywork</SignupButton>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
