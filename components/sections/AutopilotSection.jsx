import { Mail, Share2, Search, TrendingUp, DollarSign, Headphones, Check } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const tasks = [
    { icon: 'Mail', label: 'Emails', color: 'bg-blue-50 border-blue-100' },
    { icon: 'Share2', label: 'Social', color: 'bg-pink-50 border-pink-100' },
    { icon: 'Search', label: 'SEO', color: 'bg-green-50 border-green-100' },
    { icon: 'TrendingUp', label: 'Leads', color: 'bg-orange-50 border-orange-100' },
    { icon: 'DollarSign', label: 'Sales', color: 'bg-purple-50 border-purple-100' },
    { icon: 'Headphones', label: 'Support', color: 'bg-slate-50 border-slate-200' },
];

const iconMap = { Mail, Share2, Search, TrendingUp, DollarSign, Headphones };

export default function AutopilotSection() {
    return (
        <section className="py-16 md:py-24 bg-warm">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-10" staggerDelay={0.1}>
                    {tasks.map((task) => {
                        const Icon = iconMap[task.icon];
                        return (
                            <StaggerItem key={task.label}>
                                <div className={`relative rounded-2xl border p-5 md:p-6 ${task.color} transition-all hover:scale-[1.02]`}>
                                    {/* Crossed off line */}
                                    <div className="absolute inset-0 flex items-center px-4">
                                        <div className="w-full border-t-2 border-slate-300/60"></div>
                                    </div>
                                    <div className="relative flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Icon className="w-6 h-6 text-slate-400" />
                                            <span className="text-lg md:text-xl font-bold text-slate-400">{task.label}</span>
                                        </div>
                                        <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                                            <Check className="w-4 h-4 text-white stroke-[3]" />
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>

                <ScrollReveal delay={0.3}>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight text-center font-serif">
                        All done
                        <span className="bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent"> by AI.</span>
                    </h2>
                </ScrollReveal>
            </div>
        </section>
    );
}
