// Server component — zero JavaScript, zero hydration cost.
// All animation handled by CSS animation-timeline: view().
// On unsupported browsers or mobile: content is just visible. No blank page possible.

export default function ScrollReveal({ children, delay = 0, className = '' }) {
    return (
        <div className={`scroll-reveal ${className}`}>
            {children}
        </div>
    );
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.15 }) {
    return (
        <div className={`scroll-stagger ${className}`}>
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
