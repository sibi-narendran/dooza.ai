'use client';

import { useRef, useEffect } from 'react';

// Single shared IntersectionObserver for ALL ScrollReveal elements.
// Much cheaper than 13+ separate observers.
let sharedObserver = null;
const observedElements = new Map(); // el → callback

function getSharedObserver() {
    if (sharedObserver) return sharedObserver;
    sharedObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const cb = observedElements.get(entry.target);
                    if (cb) cb();
                    sharedObserver.unobserve(entry.target);
                    observedElements.delete(entry.target);
                }
            });
        },
        { rootMargin: '-40px' }
    );
    return sharedObserver;
}

function shouldSkipAnimation() {
    // Mobile: skip scroll animations entirely. Content stays visible.
    // Scroll animations are a desktop luxury — on mobile they cause
    // blank pages because JS hydrates late while the user is already scrolling.
    if (typeof window === 'undefined') return true;
    if (window.innerWidth < 768) return true;

    // If user has already scrolled significantly, they were reading
    // server-rendered content. Don't yank it away from them.
    if (window.scrollY > window.innerHeight * 0.5) return true;

    return false;
}

function isBelowFold(el) {
    const rect = el.getBoundingClientRect();
    // 2x viewport buffer on desktop — generous enough that content
    // near the fold never gets hidden during hydration
    return rect.top >= window.innerHeight * 2;
}

export default function ScrollReveal({ children, delay = 0, className = '' }) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // On mobile or if user already scrolled: everything stays visible
        if (shouldSkipAnimation()) return;

        // On desktop: only hide elements well below fold
        if (!isBelowFold(el)) return;

        // Hide instantly (CSS has no transition on scroll-animate)
        el.classList.add('scroll-animate');

        if (delay > 0) {
            el.style.transitionDelay = `${delay}s`;
        }

        const observer = getSharedObserver();
        observedElements.set(el, () => el.classList.add('revealed'));
        observer.observe(el);

        return () => {
            observer.unobserve(el);
            observedElements.delete(el);
        };
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

        if (shouldSkipAnimation()) return;
        if (!isBelowFold(el)) return;

        el.classList.add('scroll-animate');

        const items = el.querySelectorAll('.reveal-child');
        items.forEach((item, idx) => {
            item.style.transitionDelay = `${idx * staggerDelay}s`;
        });

        const observer = getSharedObserver();
        observedElements.set(el, () => el.classList.add('revealed'));
        observer.observe(el);

        return () => {
            observer.unobserve(el);
            observedElements.delete(el);
        };
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
