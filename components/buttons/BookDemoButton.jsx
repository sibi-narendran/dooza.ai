'use client';

import { Calendar } from 'lucide-react';
import { useBookingModal } from '@/components/BookingModalProvider';
import { trackDemoClick } from '@/lib/analytics';

export default function BookDemoButton({
    source = 'unknown',
    children = 'Book Free Setup with Founder',
    className = '',
    size = 'lg',
    variant = 'secondary',
}) {
    const { openModal } = useBookingModal();

    const sizeClasses = size === 'xl'
        ? 'px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl'
        : 'px-8 py-4 text-lg';

    const variantClasses = {
        primary: 'bg-primary-700 text-white hover:bg-primary-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5',
        secondary: 'bg-white border-2 border-primary-200 text-primary-800 hover:border-primary-300 hover:bg-primary-50',
        dark: 'bg-transparent border-2 border-white/35 text-white hover:bg-white/10 hover:border-white/60',
    }[variant] || 'bg-white border-2 border-primary-200 text-primary-800 hover:border-primary-300 hover:bg-primary-50';

    return (
        <button
            onClick={() => { openModal(); trackDemoClick(source); }}
            className={`group inline-flex items-center justify-center gap-2 ${variantClasses} ${sizeClasses} rounded-full font-bold transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 focus-visible:outline-none ${className}`}
        >
            <Calendar className="w-5 h-5" />
            {children}
        </button>
    );
}
