'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { CAL_BOOKING_URL } from '@/lib/links';
import { trackAdsConversion, trackFBSchedule } from '@/lib/analytics';

const BookingModal = ({ isOpen, onClose }) => {
    const [iframeReady, setIframeReady] = useState(false);

    // Start loading iframe 2s after mount — always stays in DOM
    useEffect(() => {
        const timer = setTimeout(() => setIframeReady(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        const handleCalEvent = (e) => {
            if (e.data.type === 'cal:bookingSuccessful' || e.data.type === 'bookingSuccessful') {
                trackAdsConversion();
                trackFBSchedule();
            }
        };

        window.addEventListener('message', handleCalEvent);
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('message', handleCalEvent);
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    return (
        <>
            {/* Persistent iframe — loads once, shown/hidden via CSS */}
            {iframeReady && (
                <div
                    className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-200 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Talk to Founder"
                    aria-hidden={!isOpen}
                >
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
                    <div className="relative w-full max-w-4xl h-[80dvh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                        <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-white z-10">
                            <h3 className="text-lg font-semibold text-slate-900">Talk to Founder</h3>
                            <button onClick={onClose} aria-label="Close booking modal" className="p-2 text-slate-400 hover:text-slate-600 rounded-full">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="flex-1 w-full bg-slate-50">
                            <iframe src={CAL_BOOKING_URL} className="w-full h-full border-0" title="Booking"></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookingModal;
