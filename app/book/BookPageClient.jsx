'use client';

import { useEffect } from 'react';
import { trackFBContact } from '@/lib/analytics';

export default function BookPageClient() {
    useEffect(() => {
        trackFBContact();
    }, []);

    return null;
}
