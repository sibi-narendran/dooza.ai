'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SVGConnectingLine() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <div ref={ref} className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-1 z-0">
            <svg className="w-full h-full" viewBox="0 0 800 4" preserveAspectRatio="none">
                <motion.line
                    x1="0"
                    y1="2"
                    x2="800"
                    y2="2"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
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
