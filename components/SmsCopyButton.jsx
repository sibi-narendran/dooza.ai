'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

export default function SmsCopyButton({
    number = '+1 (855) 594-6841',
    rawNumber = '+18555946841',
    className = '',
}) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(rawNumber);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // Clipboard blocked; leave silent
        }
    }

    return (
        <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full border border-[#14213D]/25 bg-white px-5 py-3 text-sm font-semibold text-[#14213D] hover:border-[#0F766E] hover:text-[#0F766E] transition-colors ${className}`}
        >
            {copied ? <Check className="h-4 w-4 text-[#0F766E]" /> : <Copy className="h-4 w-4" />}
            {copied ? `Copied ${number}` : `Copy ${number}`}
        </button>
    );
}
