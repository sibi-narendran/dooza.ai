'use client';

import { getProductSignupUrl, getBookingUrlFromPath } from '@/lib/links';
import { usePathname } from 'next/navigation';
import { trackSignupClick, trackDemoClick } from '@/lib/analytics';

const BottomCTA = ({ openModal }) => {
    const pathname = usePathname();
    const handleSignupClick = () => {
        trackSignupClick('bottom_cta_component');
    };

    const handleDemoClick = (e) => {
        trackDemoClick('bottom_cta_component');
        if (openModal) openModal(e);
    };

    return (
        <div className="py-16 md:py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-lg font-bold text-primary-600 mb-3">Got busywork? Dooza it.</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                    Still doing it? The world is Doozaing.
                </h2>
                <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                    Try Dooza Crew, AI agents that do your busyworkfree to try (no card needed).
                    Want a custom agent built for you instead? A Dooza engineer scopes it on a free 30-minute call and it starts as a refundable pilot. See <a href="/pricing" className="font-semibold text-primary-700 underline underline-offset-4">pricing</a>.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href={getProductSignupUrl('workforce', { source: 'bottom_cta' })} 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleSignupClick} 
                        className="w-full sm:w-auto bg-primary-600 text-white px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 hover:shadow-primary-500/30 hover:-translate-y-1"
                    >
                        Join the Dooza Crew waitlist
                    </a>
                    <a 
                        href={getBookingUrlFromPath(pathname)}
                        onClick={handleDemoClick}
                        className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-6 sm:px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                    >
                        Book a free pilot call
                    </a>
                </div>

                <p className="mt-8 text-sm text-slate-500">
                    Crew: free trial · Custom agents: refundable pilot, 100% refund within 14 days
                </p>
            </div>
        </div>
    );
};

export default BottomCTA;
