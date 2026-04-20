'use client';

import { useEffect, useRef } from 'react';
import { CAL_BOOKING_URL } from '@/lib/links';

const CAL_LINK = 'sibinarendran/demo';
const NAMESPACE = 'demo';

const BookingModal = ({ isOpen, onClose }) => {
    const openedRef = useRef(false);

    useEffect(() => {
        if (!isOpen) {
            openedRef.current = false;
            return;
        }
        if (openedRef.current) return;
        openedRef.current = true;

        if (typeof window === 'undefined') {
            onClose?.();
            return;
        }

        const calNs = window.Cal?.ns?.[NAMESPACE];
        if (typeof calNs === 'function') {
            calNs('modal', { calLink: CAL_LINK });
        } else {
            window.open(CAL_BOOKING_URL, '_blank', 'noopener,noreferrer');
        }
        onClose?.();
    }, [isOpen, onClose]);

    return null;
};

export default BookingModal;
