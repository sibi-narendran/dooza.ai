'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

// Top loading bar on internal link taps (Sibi 2026-10-25 09:06: menu closed with no sign the next page was loading).
export default function NavProgress() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => { setLoading(false); }, [pathname]);

    useEffect(() => {
        const onClick = (e) => {
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            const a = e.target.closest?.('a[href]');
            if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
            const url = new URL(a.href, location.href);
            if (url.origin !== location.origin) return;
            if (url.pathname === location.pathname && url.search === location.search) return;
            setLoading(true);
        };
        const stop = () => setLoading(false);
        document.addEventListener('click', onClick);
        window.addEventListener('pageshow', stop);
        return () => {
            document.removeEventListener('click', onClick);
            window.removeEventListener('pageshow', stop);
        };
    }, []);

    if (!loading) return null;
    return (
        <div role="progressbar" aria-label="Loading page" className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] overflow-hidden bg-[#0F766E]/15">
            <div className="h-full w-1/3 animate-[navprogress_1.1s_ease-in-out_infinite] bg-[#0F766E]" />
        </div>
    );
}
