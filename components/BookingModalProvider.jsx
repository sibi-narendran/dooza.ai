'use client';

import { createContext, useContext } from 'react';
import { CAL_BOOKING_URL } from '@/lib/links';

const CAL_LINK = 'sibinarendran/demo';
const NAMESPACE = 'demo';

const BookingModalContext = createContext(null);

const openCal = () => {
    if (typeof window === 'undefined') return;
    if (typeof window.Cal?.ns?.[NAMESPACE] === 'function') {
        window.Cal.ns[NAMESPACE]('modal', { calLink: CAL_LINK });
        return;
    }
    window.open(CAL_BOOKING_URL, '_blank', 'noopener,noreferrer');
};

export function useBookingModal() {
    const ctx = useContext(BookingModalContext);
    if (!ctx) {
        return { openModal: openCal };
    }
    return ctx;
}

export default function BookingModalProvider({ children }) {
    const value = { openModal: openCal };

    return (
        <BookingModalContext.Provider value={value}>
            {children}
        </BookingModalContext.Provider>
    );
}
