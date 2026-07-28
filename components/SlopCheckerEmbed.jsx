'use client';

import { useEffect, useState } from 'react';

const EMBED_ORIGIN = 'https://ai-slop-checker-by-dooza.vercel.app';

// Iframes the standalone AI Slop Checker app (hosted on Vercel) and resizes
// to match its content via the height messages it posts to the parent.
export default function SlopCheckerEmbed() {
    const [height, setHeight] = useState(620);

    useEffect(() => {
        const onMessage = (event) => {
            if (event.origin !== EMBED_ORIGIN) return;
            if (event.data?.type === 'slop-checker-height' && typeof event.data.height === 'number') {
                setHeight(Math.min(Math.max(event.data.height, 400), 5000));
            }
        };
        window.addEventListener('message', onMessage);
        return () => window.removeEventListener('message', onMessage);
    }, []);

    return (
        <iframe
            src={EMBED_ORIGIN}
            title="AI Slop Checker"
            style={{ width: '100%', height: `${height}px`, border: 'none', display: 'block' }}
            loading="lazy"
        />
    );
}
