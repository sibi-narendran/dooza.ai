'use client';

import { ArrowRight } from 'lucide-react';
import { getProductSignupUrl } from '@/lib/links';
import { trackSignupClick, trackFBLead } from '@/lib/analytics';

export default function SignupButton({ source = 'unknown', children = 'Start Free Trial', className = '', size = 'lg' }) {
    const sizeClasses = size === 'xl'
        ? 'px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl'
        : 'px-8 py-4 text-lg';

    return (
        <a
            href={getProductSignupUrl('workforce')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { trackSignupClick(source); trackFBLead(`${source}_signup`); }}
            className={`group inline-flex items-center justify-center gap-2 bg-primary-600 text-white ${sizeClasses} rounded-full font-bold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 focus-visible:outline-none ${className}`}
        >
            {children}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
    );
}
