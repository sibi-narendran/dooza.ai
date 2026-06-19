'use client';

import { useEffect, useState } from 'react';

export default function SupportEmailLink({ className = '' }) {
    const [email, setEmail] = useState('');

    useEffect(() => {
        setEmail(['support', 'dooza.ai'].join('@'));
    }, []);

    if (!email) {
        return <span className={className}>support [at] dooza.ai</span>;
    }

    return (
        <a href={`mailto:${email}`} className={className}>
            {email}
        </a>
    );
}
