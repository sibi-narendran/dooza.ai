'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, motion, useMotionValue, useTransform, animate } from 'framer-motion';

export default function AnimatedCounter({
    target,
    prefix = '',
    suffix = '',
    duration = 2,
    className = '',
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.round(v));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, target, {
                duration,
                ease: [0.25, 0.1, 0.25, 1],
            });
            return () => controls.stop();
        }
    }, [isInView, target, duration, count]);

    useEffect(() => {
        const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));
        return () => unsubscribe();
    }, [rounded]);

    return (
        <span ref={ref} className={className}>
            {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
    );
}
