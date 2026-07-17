import FAQAccordion from '@/components/FAQAccordion';

export default function FaqSection({ items }) {
    return (
        <section className="bg-slate-50 px-4 py-20 text-slate-900 md:py-28">
            <div className="mx-auto max-w-3xl">
                <div className="mb-10 text-center">
                    <span className="section-label mb-4 block">FAQ</span>
                    <h2 className="font-serif text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
                        Frequently asked questions
                    </h2>
                </div>
                <FAQAccordion items={items} />
            </div>
        </section>
    );
}
