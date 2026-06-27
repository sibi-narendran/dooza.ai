'use client';

import { useEffect, useRef } from 'react';
import { CALENDLY_URL } from '@/lib/links';

const WAIT_TIMEOUT_MS = 2000;
const POLL_INTERVAL_MS = 50;

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

        const openPopup = () => window.Calendly.initPopupWidget({ url: CALENDLY_URL });
        const openFallback = () => window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');

        if (typeof window.Calendly?.initPopupWidget === 'function') {
            openPopup();
            onClose?.();
            return;
        }

        const start = Date.now();
        const interval = setInterval(() => {
            if (typeof window.Calendly?.initPopupWidget === 'function') {
                clearInterval(interval);
                openPopup();
                onClose?.();
            } else if (Date.now() - start > WAIT_TIMEOUT_MS) {
                clearInterval(interval);
                openFallback();
                onClose?.();
            }
        }, POLL_INTERVAL_MS);

        return () => clearInterval(interval);
    }, [isOpen, onClose]);

    return null;
};

export default BookingModal;
