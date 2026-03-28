import ScrollReveal from '@/components/ScrollReveal';

export default function VideoSection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-warm to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-8">
                        <span className="section-label block mb-4 text-green-600">SEE IT IN ACTION</span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden card-shadow border border-slate-100 aspect-video">
                        <iframe
                            src="https://www.youtube.com/embed/p4nChWwW7BY?si=5xOTWz09YQXphMRX&rel=0"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                            loading="lazy"
                        />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
