'use client';

import { createContext, useContext, useState } from 'react';
import BookingModal from '@/components/BookingModal';
import { CAL_BOOKING_URL } from '@/lib/links';

const BookingModalContext = createContext(null);

export function useBookingModal() {
    const ctx = useContext(BookingModalContext);
    if (!ctx) {
        // Graceful fallback: open Cal.com in new tab if outside provider
        return {
            openModal: () => window.open(CAL_BOOKING_URL, '_blank'),
        };
    }
    return ctx;
}

export default function BookingModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    const value = {
        openModal: () => setIsOpen(true),
    };

    return (
        <BookingModalContext.Provider value={value}>
            {children}
            <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </BookingModalContext.Provider>
    );
}
