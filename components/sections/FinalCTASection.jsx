import { EvaCharacter, SomiCharacter, SeomiCharacter, RachelCharacter, StanCharacter, LindaCharacter } from '@/components/characters/CharacterIllustrations';
import ScrollReveal from '@/components/ScrollReveal';
import SignupButton from '@/components/buttons/SignupButton';
import BookDemoButton from '@/components/buttons/BookDemoButton';

const characters = [EvaCharacter, SomiCharacter, SeomiCharacter, RachelCharacter, StanCharacter, LindaCharacter];

export default function FinalCTASection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-teal-50 to-primary-50 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-[120px]"></div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                {/* Character illustrations waving */}
                <ScrollReveal>
                    <div className="flex justify-center gap-2 md:gap-6 mb-8 md:mb-10">
                        {characters.map((Character, idx) => (
                            <div
                                key={idx}
                                className={`${idx >= 4 ? 'hidden md:block' : ''} animate-float`}
                                style={{ animationDelay: `${idx * 0.3}s` }}
                            >
                                <div className="w-[40px] md:w-[56px]">
                                    <Character size={56} />
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <h2 className="text-3xl md:text-6xl font-extrabold mb-5 md:mb-6 leading-tight text-slate-900 font-serif">
                        Ready to hire your
                        <span className="block bg-gradient-to-r from-primary-600 to-teal-500 bg-clip-text text-transparent">AI workforce?</span>
                    </h2>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                        Join 500+ businesses already saving 10+ hours every week with AI employees.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <SignupButton source="bottom_cta" size="xl" />
                        <BookDemoButton source="bottom_cta" size="xl">Book Free Setup</BookDemoButton>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
