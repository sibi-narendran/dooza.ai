'use client';

import { useEffect, useState } from 'react';

const BASE_URL = 'https://crew.dooza.ai/';

function buildCrewHref(search) {
    const params = new URLSearchParams(search || '');
    if (!params.get('utm_source')) params.set('utm_source', 'dooza');
    if (!params.get('utm_medium')) params.set('utm_medium', 'landing');
    if (!params.get('utm_campaign')) params.set('utm_campaign', 'vs-sintra');
    const qs = params.toString();
    return qs ? `${BASE_URL}?${qs}` : BASE_URL;
}

function fireConversion(placement) {
    try {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'vs_sintra_cta_click', { placement });
            window.gtag('event', 'conversion', { send_to: 'AW-10872232955' });
        }
    } catch (e) {}
}

export default function VsSintraCta({
    label = 'Try Dooza Crew free',
    placement = 'hero',
    variant = 'primary',
    className = '',
    sticky = false,
}) {
    const [href, setHref] = useState(() => buildCrewHref(''));

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setHref(buildCrewHref(window.location.search));
        }
    }, []);

    if (sticky) {
        return (
            <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#CBD5E1] bg-[#F7F5F0] p-3 pb-[max(12px,env(safe-area-inset-bottom))] sm:hidden">
                <a
                    href={href}
                    onClick={() => fireConversion('sticky_mobile')}
                    className="flex min-h-[48px] w-full items-center justify-center rounded-xl bg-[#0F766E] px-4 py-3 text-center text-[16px] font-semibold text-white shadow-sm"
                >
                    {label} →
                </a>
            </div>
        );
    }

    const styles =
        variant === 'light'
            ? 'bg-[#F2B53A] text-[#14213D] hover:bg-[#eab034]'
            : 'bg-[#0F766E] text-white hover:bg-[#0d655e]';

    return (
        <a
            href={href}
            onClick={() => fireConversion(placement)}
            className={`inline-flex min-h-[50px] items-center justify-center rounded-xl px-6 py-3 text-center text-[16px] font-semibold transition ${styles} ${className}`}
        >
            {label} →
        </a>
    );
}
