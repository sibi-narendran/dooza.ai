import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModalProvider from '@/components/BookingModalProvider';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import { faqSchema } from '@/lib/homeData';

export const metadata = {
    title: 'Dooza Pricing: AI Employees from $29/mo (No Hidden Fees)',
    description: 'Get AI employees for less than one lunch meeting. All agents included in every plan. No credits, no per-seat fees, no surprises. Cancel anytime. See plans.',
    keywords: ['AI employees pricing', 'AI automation pricing', 'Dooza pricing', 'AI agents cost', 'business automation plans'],
    alternates: {
        canonical: 'https://www.dooza.ai/pricing',
    },
    openGraph: {
        title: 'Dooza Pricing: AI Employees from $29/mo (No Hidden Fees)',
        description: 'Get AI employees for less than one lunch meeting. All agents included in every plan. No credits, no per-seat fees.',
        url: 'https://www.dooza.ai/pricing',
        images: [{ url: 'https://www.dooza.ai/logo.png', width: 512, height: 512, alt: 'Dooza Pricing' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dooza Pricing: AI Employees from $29/mo (No Hidden Fees)',
        description: 'Get AI employees for less than one lunch meeting. All agents included in every plan. No credits, no per-seat fees.',
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
                        <PricingSection />
                        <FAQSection />
                        <FinalCTASection />
                    </main>
                    <Footer />
                </div>
            </BookingModalProvider>
        </>
    );
}
