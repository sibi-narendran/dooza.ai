'use client';

import { createContext, useContext } from 'react';
import { CAL_BOOKING_URL } from '@/lib/links';

const BookingModalContext = createContext(null);

// Open Cal.com in a new tab. We used to render an in-page iframe modal here,
// but it ate megabytes of Cal.com JS on every page load and froze mobile
// browsers. New-tab is lighter, simpler, and lets Cal own its own UX.
const openCalInNewTab = () => {
    if (typeof window === 'undefined') return;
    window.open(CAL_BOOKING_URL, '_blank', 'noopener,noreferrer');
};

export function useBookingModal() {
    const ctx = useContext(BookingModalContext);
    if (!ctx) {
        return { openModal: openCalInNewTab };
    }
    return ctx;
}

export default function BookingModalProvider({ children }) {
    const value = { openModal: openCalInNewTab };

    return (
        <BookingModalContext.Provider value={value}>
            {children}
        </BookingModalContext.Provider>
    );
}
