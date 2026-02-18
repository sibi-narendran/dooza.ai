'use client';

import { useRef, useEffect } from 'react';

export default function ScrollReveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // If element is already in viewport on mount, show it instantly (no animation)
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 50) {
            el.classList.add('revealed-instant');
            return;
        }

        if (delay > 0) {
            el.style.transitionDelay = `${delay}s`;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed');
                    observer.unobserve(el);
                }
            },
            { rootMargin: '-40px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={`scroll-reveal ${className}`}>
            {children}
        </div>
    );
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.15 }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // If element is already in viewport on mount, show it instantly
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 50) {
            el.classList.add('revealed-instant');
            return;
        }

        // Apply stagger delays to reveal-child children
        const items = el.querySelectorAll('.reveal-child');
        items.forEach((item, idx) => {
            item.style.transitionDelay = `${idx * staggerDelay}s`;
        });

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('revealed');
                    observer.unobserve(el);
                }
            },
            { rootMargin: '-40px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [staggerDelay]);

    return (
        <div ref={ref} className={`scroll-reveal ${className}`}>
            {children}
        </div>
    );
}

export function StaggerItem({ children, className = '' }) {
    return (
        <div className={`reveal-child ${className}`}>
            {children}
        </div>
    );
}
