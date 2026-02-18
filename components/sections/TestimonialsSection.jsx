import { Star } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { testimonials } from '@/lib/homeData';

export default function TestimonialsSection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50/40 via-warm to-warm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="section-label block mb-4 text-amber-500">TESTIMONIALS</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">Loved by business owners</h2>
                    </div>
                </ScrollReveal>

                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
                    {testimonials.map((item, idx) => (
                        <StaggerItem key={idx}>
                            <div className="bg-white p-6 rounded-2xl border border-amber-100 card-shadow hover:card-shadow-hover transition-all">
                                {/* Social-style header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-r from-primary-500 to-teal-500 flex items-center justify-center font-bold text-white text-sm">
                                        {item.initials}
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 text-sm">{item.author}</div>
                                        <div className="text-xs text-slate-400">{item.role}</div>
                                    </div>
                                    <div className="ml-auto flex gap-0.5 text-yellow-400 star-glow">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                                    </div>
                                </div>
                                <p className="text-slate-700 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
