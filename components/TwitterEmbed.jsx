'use client';

import { useEffect, useRef } from 'react';

const TwitterEmbed = ({ tweetUrl, className = "" }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Load Twitter widgets script
        if (!window.twttr) {
            const script = document.createElement('script');
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            script.charset = 'utf-8';
            document.head.appendChild(script);
            script.onload = () => {
                if (window.twttr && containerRef.current) {
                    window.twttr.widgets.load(containerRef.current);
                }
            };
        } else {
            window.twttr.widgets.load(containerRef.current);
        }
    }, [tweetUrl]);

    return (
        <div ref={containerRef} className={className}>
            <blockquote className="twitter-tweet">
                <a href={tweetUrl}></a>
            </blockquote>
        </div>
    );
};

export default TwitterEmbed;
