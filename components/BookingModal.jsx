'use client';

import { useEffect, useState, useCallback } from 'react';
import { X, CheckCircle } from 'lucide-react';
import { CAL_BOOKING_URL } from '@/lib/links';
import { trackAdsConversion, trackFBSchedule } from '@/lib/analytics';

const CAL_ORIGIN = 'https://cal.com';

const BookingModal = ({ isOpen, onClose }) => {
    const [iframeReady, setIframeReady] = useState(false);
    const [bookingConfirmed, setBookingConfirmed] = useState(false);

    // Start loading iframe 2s after mount — always stays in DOM
    useEffect(() => {
        const timer = setTimeout(() => setIframeReady(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Reset confirmation state when modal reopens
    useEffect(() => {
        if (isOpen) {
            setBookingConfirmed(false);
        }
    }, [isOpen]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    // Listen for Cal.com booking success via postMessage
    useEffect(() => {
        if (!isOpen) return;

        const handleCalEvent = (e) => {
            if (e.origin !== CAL_ORIGIN) return;
            if (!e.data || typeof e.data !== 'object') return;

            const eventType = e.data.type;
            if (eventType === 'cal:bookingSuccessful' || eventType === 'bookingSuccessful') {
                setBookingConfirmed(true);
                trackAdsConversion();
                trackFBSchedule();
            }
        };

        window.addEventListener('message', handleCalEvent);
        return () => window.removeEventListener('message', handleCalEvent);
    }, [isOpen]);

    // Escape key to close
    const handleClose = useCallback(() => {
        onClose();
    }, [onClose]);

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') handleClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, handleClose]);

    return (
        <>
            {iframeReady && (
                <div
                    className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-200 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Talk to Founder"
                    aria-hidden={!isOpen}
                >
                    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={handleClose}></div>
                    <div className="relative w-full max-w-4xl h-[80dvh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                        <div className="flex justify-between items-center p-4 border-b border-slate-100 bg-white z-10">
                            <h3 className="text-lg font-semibold text-slate-900">Talk to Founder</h3>
                            <button onClick={handleClose} aria-label="Close booking modal" className="p-2 text-slate-400 hover:text-slate-600 rounded-full">
                                <X size={20} />
                            </button>
                        </div>
                        <div className="flex-1 w-full bg-slate-50 relative">
                            {bookingConfirmed ? (
                                <div className="flex flex-col items-center justify-center h-full gap-4 px-6 text-center">
                                    <CheckCircle className="w-16 h-16 text-green-500" />
                                    <h4 className="text-2xl font-bold text-slate-900">Meeting Booked!</h4>
                                    <p className="text-slate-600 max-w-md">
                                        You&apos;ll receive a calendar invite shortly. Looking forward to speaking with you!
                                    </p>
                                    <button
                                        onClick={handleClose}
                                        className="mt-4 px-8 py-3 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-colors"
                                    >
                                        Done
                                    </button>
                                </div>
                            ) : (
                                <iframe
                                    src={CAL_BOOKING_URL}
                                    className="w-full h-full border-0"
                                    title="Book a meeting with the founder"
                                    allow="payment"
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default BookingModal;
