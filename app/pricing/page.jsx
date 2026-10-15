import Navbar from '@/components/Navbar';
import TalkNowStrip from '@/components/TalkNowStrip';
import OfferCards from '@/components/OfferCards';
import Footer from '@/components/Footer';
import BookingModalProvider from '@/components/BookingModalProvider';
import BookDemoButton from '@/components/buttons/BookDemoButton';
import GrowPricingSection from '@/components/sections/GrowPricingSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { faqSchema } from '@/lib/homeData';

export const metadata = {
    title: 'Dooza Pricing: Managed Assistant $200/mo, 7 Days Free',
    description: 'Dooza Managed: an AI admin assistant checked by a real person, $200/month, first 7 days free. Custom AI builds scoped on a free call.',
    keywords: ['AI employees pricing', 'AI automation pricing', 'Dooza pricing', 'AI agents cost', 'business automation plans'],
    alternates: {
        canonical: 'https://www.dooza.ai/pricing',
    },
    openGraph: {
        title: 'Dooza Pricing: Managed Assistant $200/mo, 7 Days Free',
        description: 'Custom pricing, scoped on a free 30-minute call. Every engagement starts as a refundable pilot: 100% refund within 14 days.',
        url: 'https://www.dooza.ai/pricing',
        type: 'website',
        images: [{ url: 'https://www.dooza.ai/logo.png', width: 512, height: 512, alt: 'Dooza Pricing' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza Pricing: Managed Assistant $200/mo, 7 Days Free',
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
                            <div className="mx-auto max-w-4xl px-4 text-center">
                                <span className="section-label mb-4 block text-primary-700">PRICING</span>
                                <h1 className="font-serif text-4xl font-bold text-slate-900 md:text-6xl">Start today, first 7 days free</h1>
                                <p className="mt-5 text-lg text-slate-600">
                                    One plan you can start right now by card, or a custom build scoped on a free call.
                                </p>
                            </div>
                            <div className="mt-10 px-4">
                                <OfferCards source="pricing" only="managed" />
                                <p className="mt-4 text-center text-sm text-slate-600"><a href="/ai-admin-assistant" className="font-semibold text-primary-700 underline">What Dooza Managed does, and how it compares with a virtual assistant</a></p>
                            </div>
                        </section>
                        <section className="pb-12">
                            <div className="mx-auto max-w-4xl px-4 text-center">
                                <h2 className="font-serif text-3xl font-bold text-slate-900">Custom builds, scoped on a free call</h2>
                                <p className="mt-5 text-lg text-slate-600">
                                    Every Dooza engagement is built around your business: custom AI agents, customer support or AI visibility.
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
                        <TalkNowStrip source="pricing" />
                    </main>
                    <Footer />
                </div>
            </BookingModalProvider>
        </>
    );
}
