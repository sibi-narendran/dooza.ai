import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModalProvider from '@/components/BookingModalProvider';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { faqSchema } from '@/lib/homeData';

export const metadata = {
    title: 'Dooza Pricing: Plans from $49/mo, Refundable Pilot',
    description: 'Dooza plans from $49/mo with all AI employees included. Every plan starts as a refundable pilot: 100% refund within 14 days. No credits, no per-seat fees, cancel anytime.',
    keywords: ['AI employees pricing', 'AI automation pricing', 'Dooza pricing', 'AI agents cost', 'business automation plans'],
    alternates: {
        canonical: 'https://www.dooza.ai/pricing',
    },
    openGraph: {
        title: 'Dooza Pricing: Plans from $49/mo, Refundable Pilot',
        description: 'Dooza plans from $49/mo. Every plan starts as a refundable pilot: 100% refund within 14 days. No credits, no per-seat fees.',
        url: 'https://www.dooza.ai/pricing',
        type: 'website',
        images: [{ url: 'https://www.dooza.ai/logo.png', width: 512, height: 512, alt: 'Dooza Pricing' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza Pricing: Plans from $49/mo, Refundable Pilot',
        description: 'Dooza plans from $49/mo. Every plan starts as a refundable pilot: 100% refund within 14 days. No credits, no per-seat fees.',
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
                        <PricingSection headingLevel="h1" />
                        <FAQSection />
                        <FinalCTASection />
                    </main>
                    <Footer />
                </div>
            </BookingModalProvider>
        </>
    );
}
