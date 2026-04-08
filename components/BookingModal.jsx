'use client';

import { useEffect, useRef } from 'react';
import { CAL_BOOKING_URL } from '@/lib/links';

// Backward-compat shim. The in-page iframe modal was removed because it
// froze mobile browsers (Cal.com pulls in megabytes of JS). When a parent
// component flips `isOpen` to true, we open Cal.com in a new tab and
// immediately call onClose so the parent's state stays consistent.
//
// Many pages still import and render <BookingModal isOpen={...} onClose={...} />,
// so this file intentionally keeps the same signature.
const BookingModal = ({ isOpen, onClose }) => {
    const openedRef = useRef(false);

    useEffect(() => {
        if (!isOpen) {
            openedRef.current = false;
            return;
        }
        if (openedRef.current) return;
        openedRef.current = true;
        if (typeof window !== 'undefined') {
            window.open(CAL_BOOKING_URL, '_blank', 'noopener,noreferrer');
        }
        onClose?.();
    }, [isOpen, onClose]);

    return null;
};

export default BookingModal;
