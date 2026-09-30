'use client';

import { useBookingModal } from '@/components/BookingModalProvider';
import { trackDemoClick } from '@/lib/analytics';

const TONES = {
    lime: 'bg-[#E3F770] text-black hover:bg-[#d4ea55]',
    plum: 'bg-[#7C1B5A] text-white hover:bg-[#65164a]',
};

export default function GuideCta({ source, children, tone = 'plum', className = '' }) {
    const { openModal } = useBookingModal();
    return (
        <button
            type="button"
            onClick={() => { openModal(); trackDemoClick(source); }}
            className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-colors ${TONES[tone]} ${className}`}
        >
            {children}
        </button>
    );
}
