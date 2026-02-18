import ScrollReveal from '@/components/ScrollReveal';
import FAQAccordion from '@/components/FAQAccordion';
import { homeFaqData } from '@/lib/homeData';

export default function FAQSection() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <span className="section-label block mb-4 text-violet-500">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">Frequently Asked Questions</h2>
                    </div>
                </ScrollReveal>
                <FAQAccordion items={homeFaqData} />
            </div>
        </section>
    );
}
