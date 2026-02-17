'use client';

import { motion } from 'framer-motion';
import { useIsMobile } from '@/lib/useIsMobile';

const directionOffsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
};

// On mobile: visible slide-in with moderate offset
const mobileOffset = { y: 24, x: 0 };

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = '',
    once = true,
}) {
    const isMobile = useIsMobile();
    const offset = isMobile ? mobileOffset : (directionOffsets[direction] || directionOffsets.up);

    return (
        <motion.div
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, margin: isMobile ? '-40px' : '-80px' }}
            transition={{
                duration: isMobile ? 0.45 : duration,
                delay: isMobile ? 0 : delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.15 }) {
    const isMobile = useIsMobile();

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? '-40px' : '-80px' }}
            variants={{
                visible: {
                    transition: { staggerChildren: isMobile ? 0.1 : staggerDelay },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className = '', direction = 'up' }) {
    const isMobile = useIsMobile();
    const offset = isMobile ? mobileOffset : (directionOffsets[direction] || directionOffsets.up);

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, ...offset },
                visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        duration: isMobile ? 0.45 : 0.6,
                        ease: [0.25, 0.1, 0.25, 1],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
