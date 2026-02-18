'use client';

import { useRef, useEffect } from 'react';

export default function SVGConnectingLine() {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const line = el.querySelector('line');
        if (!line) return;

        // Calculate total dash length for animation
        const totalLength = 800;
        line.style.strokeDasharray = `${totalLength}`;
        line.style.strokeDashoffset = `${totalLength}`;
        line.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s, opacity 0.3s ease 0.3s';
        line.style.opacity = '0';

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    line.style.strokeDashoffset = '0';
                    line.style.opacity = '1';
                    observer.unobserve(el);
                }
            },
            { rootMargin: '-100px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-1 z-0">
            <svg className="w-full h-full" viewBox="0 0 800 4" preserveAspectRatio="none">
                <line
                    x1="0"
                    y1="2"
                    x2="800"
                    y2="2"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 4"
                />
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#99f6e4" />
                        <stop offset="50%" stopColor="#0d9488" />
                        <stop offset="100%" stopColor="#99f6e4" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}
