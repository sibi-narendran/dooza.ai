'use client';

import { getProductSignupUrl } from '@/lib/links';
import { trackSignupClick, trackFBLead } from '@/lib/analytics';

export default function SignupTextLink({ source = 'unknown', children = 'Or try Dooza yourself →', className = '' }) {
    return (
        <a
            href={getProductSignupUrl('workforce')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { trackSignupClick(source); trackFBLead(`${source}_signup`); }}
            className={`inline-block text-sm text-slate-500 hover:text-primary-700 font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-primary-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded ${className}`}
        >
            {children}
        </a>
    );
}
