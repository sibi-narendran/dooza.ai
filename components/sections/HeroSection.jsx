import { getProductSignupUrl } from '@/lib/links';
import { CharacterGroup, EvaCharacter, SomiCharacter, RachelCharacter, StanCharacter } from '@/components/characters/CharacterIllustrations';
import SignupButton from '@/components/buttons/SignupButton';
import BookDemoButton from '@/components/buttons/BookDemoButton';

export default function HeroSection() {
    return (
        <section className="relative min-h-[70dvh] md:min-h-[90dvh] flex flex-col items-center justify-center px-4 md:px-8 pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50/80 via-warm to-warm"></div>
                <div className="hidden md:block absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-[120px]"></div>
                <div className="hidden md:block absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-teal-100/40 rounded-full blur-[120px]"></div>
                <div className="hidden md:block absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary-50/30 to-transparent rounded-full blur-[80px]"></div>
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text content */}
                    <div className="text-center lg:text-left">
                        <h1 className="hero-entrance hero-delay-1 text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5 md:mb-6 font-serif">
                            Hire AI Employees to
                            <span className="block bg-gradient-to-r from-primary-600 via-teal-500 to-primary-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                                Automate Your Business 24/7
                            </span>
                        </h1>

                        <p className="hero-entrance hero-delay-2 text-lg md:text-2xl text-slate-600 mb-8 md:mb-10 max-w-xl leading-relaxed">
                            6 AI employees handle your email, social media, SEO, calls, leads, and legal work—24/7, for less than one coffee a day.
                        </p>

                        {/* Mobile character strip */}
                        <div className="hero-entrance hero-delay-3 flex lg:hidden items-end justify-center gap-3 mb-8">
                            {[EvaCharacter, SomiCharacter, RachelCharacter, StanCharacter].map((Character, idx) => (
                                <div
                                    key={idx}
                                    className="animate-float"
                                    style={{ animationDelay: `${idx * 0.5}s` }}
                                >
                                    <Character size={idx === 1 ? 52 : idx === 2 ? 44 : 48} />
                                </div>
                            ))}
                        </div>

                        <div className="hero-entrance hero-delay-4 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
                            <SignupButton source="hero" />
                            <BookDemoButton source="hero" />
                        </div>
                    </div>

                    {/* Right: Character illustrations */}
                    <div className="hero-entrance-right hidden lg:flex justify-center">
                        <CharacterGroup size={100} />
                    </div>
                </div>
            </div>
        </section>
    );
}
