import { Check } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const categories = ['Emails', 'Social Content', 'SEO', 'Lead Generation', 'Sales', 'Support'];

export default function AutopilotSection() {
    return (
        <section className="py-16 md:py-24 bg-warm">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="flex flex-col items-center">
                        {/* Heading first */}
                        <h2 className="text-4xl md:text-5xl text-slate-900 font-bold text-center font-serif mb-12">
                            All done while you slept.
                        </h2>

                        {/* Checklist */}
                        <div className="w-full space-y-0">
                            {categories.map((word, idx) => (
                                <div key={word} className={`flex items-center justify-between py-5 px-6 ${idx !== categories.length - 1 ? 'border-b border-slate-100' : ''}`}>
                                    <div className="flex items-center gap-5">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-sm shadow-emerald-200">
                                            <Check className="w-5 h-5 text-white stroke-[3]" />
                                        </div>
                                        <span className="text-2xl md:text-3xl text-slate-800 font-bold">{word}</span>
                                    </div>
                                    <span className="text-sm md:text-base font-bold text-emerald-500 bg-emerald-50 px-4 py-1.5 rounded-full">Done</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
