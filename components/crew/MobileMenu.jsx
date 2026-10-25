'use client';

import { useEffect, useRef } from 'react';

// Mobile <details> menu that closes when a link inside is tapped or the user taps outside (Sibi 2026-10-25 08:58).
export default function MobileMenu({ children }) {
    const ref = useRef(null);
    useEffect(() => {
        const close = (e) => {
            const d = ref.current;
            if (d?.open && !d.contains(e.target)) d.open = false;
        };
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, []);
    return (
        <details
            ref={ref}
            className="md:hidden"
            onClick={(e) => { if (e.target.closest('a')) ref.current.open = false; }}
        >
            {children}
        </details>
    );
}
