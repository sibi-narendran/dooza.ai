'use client';

import { useEffect, useRef } from 'react';
import { CAL_BOOKING_URL } from '@/lib/links';

const CAL_LINK = 'sibinarendran/demo';
const NAMESPACE = 'demo';
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

        const openModal = () => window.Cal.ns[NAMESPACE]('modal', { calLink: CAL_LINK });
        const openFallback = () => window.open(CAL_BOOKING_URL, '_blank', 'noopener,noreferrer');

        if (typeof window.Cal?.ns?.[NAMESPACE] === 'function') {
            openModal();
            onClose?.();
            return;
        }

        const start = Date.now();
        const interval = setInterval(() => {
            if (typeof window.Cal?.ns?.[NAMESPACE] === 'function') {
                clearInterval(interval);
                openModal();
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
