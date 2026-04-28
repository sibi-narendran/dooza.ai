import BookDemoButton from '@/components/buttons/BookDemoButton';
import SignupTextLink from '@/components/buttons/SignupTextLink';

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

            <div className="max-w-5xl mx-auto relative z-10 w-full text-left">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6 md:mb-8 font-serif">
                    AI Employees That
                    <br className="hidden sm:block" />
                    Get Work Done{' '}
                    <span className="relative inline-block">
                        <span className="relative z-10 bg-gradient-to-r from-primary-600 to-teal-500 bg-clip-text text-transparent">While You Sleep</span>
                        <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-primary-100/60 rounded-sm -z-0" />
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-500 mb-8 md:mb-10 max-w-2xl">
                    Choose from our library of AI employees, or build your own custom workforce
                </p>

                <div className="flex flex-col items-start gap-3 md:gap-4">
                    <BookDemoButton source="hero" variant="primary" size="xl">
                        Book 15 Min with Founder — Free
                    </BookDemoButton>
                    <SignupTextLink source="hero" />
                </div>
            </div>
        </section>
    );
}
