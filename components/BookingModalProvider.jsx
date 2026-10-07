'use client';

import { createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import { getBookingUrlFromPath } from '@/lib/links';
import { getNavTrail } from '@/components/NavTrail';

const BookingModalContext = createContext(null);

export function useBookingModal() {
    const ctx = useContext(BookingModalContext);
    if (!ctx) {
        return { openModal: () => {} };
    }
    return ctx;
}

export default function BookingModalProvider({ children }) {
    const pathname = usePathname();

    const openBooking = () => {
        if (typeof window === 'undefined') return;
        const trail = getNavTrail();
        const url = getBookingUrlFromPath(pathname);
        window.open(trail ? `${url}&utm_term=${encodeURIComponent(trail)}` : url, '_blank', 'noopener,noreferrer');
    };

    const value = { openModal: openBooking };

    return (
        <BookingModalContext.Provider value={value}>
            {children}
        </BookingModalContext.Provider>
    );
}
