import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModalProvider from '@/components/BookingModalProvider';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export const metadata = {
    title: 'Pricing — AI Employees from $39/mo | Dooza.ai',
    description: 'Simple, transparent pricing for your AI workforce. All AI employees included in every plan. No hidden fees. Cancel anytime.',
    keywords: ['AI employees pricing', 'AI automation pricing', 'Dooza pricing', 'AI agents cost', 'business automation plans'],
    alternates: {
        canonical: 'https://www.dooza.ai/pricing',
    },
    openGraph: {
        title: 'Pricing — AI Employees from $39/mo | Dooza.ai',
        description: 'Simple, transparent pricing for your AI workforce. All AI employees included in every plan.',
        url: 'https://www.dooza.ai/pricing',
        images: [{ url: 'https://www.dooza.ai/logo.png', width: 512, height: 512, alt: 'Dooza Pricing' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pricing — AI Employees from $39/mo | Dooza.ai',
        description: 'Simple, transparent pricing for your AI workforce. All AI employees included in every plan.',
        images: ['https://www.dooza.ai/logo.png'],
    },
};

export default function PricingPage() {
    return (
        <BookingModalProvider>
            <div className="min-h-screen bg-warm text-slate-900 font-sans">
                <Navbar />
                <main>
                    <PricingSection />
                    <FAQSection />
                    <FinalCTASection />
                </main>
                <Footer />
            </div>
        </BookingModalProvider>
    );
}
