'use client';

import { Calendar } from 'lucide-react';
import { useBookingModal } from '@/components/BookingModalProvider';
import { trackDemoClick, trackFBSchedule } from '@/lib/analytics';

export default function BookDemoButton({ source = 'unknown', children = 'Book Free Demo', className = '', size = 'lg' }) {
    const { openModal } = useBookingModal();

    const sizeClasses = size === 'xl'
        ? 'px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl'
        : 'px-8 py-4 text-lg';

    return (
        <button
            onClick={() => { openModal(); trackDemoClick(source); trackFBSchedule(); }}
            className={`group inline-flex items-center justify-center gap-2 bg-white border-2 border-primary-200 text-primary-700 hover:border-primary-300 hover:bg-primary-50 ${sizeClasses} rounded-full font-bold transition-all ${className}`}
        >
            <Calendar className="w-5 h-5" />
            {children}
        </button>
    );
}
