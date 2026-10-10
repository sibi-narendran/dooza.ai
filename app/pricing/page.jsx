import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModalProvider from '@/components/BookingModalProvider';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import GrowPricingSection from '@/components/sections/GrowPricingSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { faqSchema } from '@/lib/homeData';

export const metadata = {
    title: 'Dooza Pricing: Custom Plans, Scoped on a Free Call',
    description: 'Dooza pricing is custom: an engineer scopes your AI agents or done-for-you service on a free 30-minute call. Every pilot is 100% refundable for 14 days.',
    keywords: ['AI employees pricing', 'AI automation pricing', 'Dooza pricing', 'AI agents cost', 'business automation plans'],
    alternates: {
        canonical: 'https://www.dooza.ai/pricing',
    },
    openGraph: {
        title: 'Dooza Pricing: Custom Plans, Scoped on a Free Call',
        description: 'Custom pricing, scoped on a free 30-minute call. Every engagement starts as a refundable pilot: 100% refund within 14 days.',
        url: 'https://www.dooza.ai/pricing',
        type: 'website',
        images: [{ url: 'https://www.dooza.ai/logo.png', width: 512, height: 512, alt: 'Dooza Pricing' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza Pricing: Custom Plans, Scoped on a Free Call',
        description: 'Custom pricing, scoped on a free 30-minute call. Every engagement starts as a refundable pilot: 100% refund within 14 days.',
        images: ['https://www.dooza.ai/logo.png'],
    },
};

export default function PricingPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <BookingModalProvider>
                <div className="min-h-screen bg-warm text-slate-900 font-sans">
                    <Navbar />
                    <main>
                        <section className="pt-32 pb-12 md:pt-40">
                            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                                <span className="section-label mb-4 block text-primary-700">PRICING</span>
                                <h1 className="font-serif text-4xl font-bold text-slate-900 md:text-6xl">Custom pricing, scoped on a free call</h1>
                                <p className="mt-5 text-lg text-slate-600">
                                    Every Dooza engagement is built around your business: custom AI agents, an AI receptionist, customer support or AI visibility.
                                    On a free 30-minute call a Dooza engineer scopes the work and quotes your price. Every engagement starts as a refundable pilot: 100% refund within 14 days.
                                </p>
                                <div className="mt-8 flex justify-center">
                                    <BookDemoButton source="pricing-hero" variant="primary" className="!px-8 !text-base" />
                                </div>
                            </div>
                        </section>
                        <GrowPricingSection />
                        <FAQSection />
                        <FinalCTASection />
                    </main>
                    <Footer />
                </div>
            </BookingModalProvider>
        </>
    );
}
