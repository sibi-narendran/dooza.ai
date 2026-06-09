'use client';

import { ArrowRight } from 'lucide-react';
import { getProductSignupUrl } from '@/lib/links';
import { trackSignupClick, trackFBLead } from '@/lib/analytics';

export default function SignupButton({ source = 'unknown', children = 'Get Started', className = '', size = 'lg', variant = 'primary' }) {
    const sizeClasses = size === 'xl'
        ? 'px-6 sm:px-8 md:px-10 py-4 md:py-5 text-base sm:text-lg md:text-xl'
        : 'px-6 sm:px-8 py-4 text-base sm:text-lg';

    const variantClasses = variant === 'inverse'
        ? 'bg-white text-slate-900 hover:bg-slate-100 focus-visible:ring-white'
        : 'bg-primary-700 text-white hover:bg-primary-800 focus-visible:ring-primary-600';

    return (
        <a
            href={getProductSignupUrl('workforce')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { trackSignupClick(source); trackFBLead(`${source}_signup`); }}
            className={`group inline-flex w-full max-w-full items-center justify-center gap-2 text-center sm:w-auto ${variantClasses} ${sizeClasses} rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none ${className}`}
        >
            <span>{children}</span>
            <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
        </a>
    );
}
