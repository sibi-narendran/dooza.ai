'use client';

import { useEffect, useRef } from 'react';
import { trackReceptionistEvent } from '@/lib/analytics';

// Portrait story clip with burned-in captions. Plays muted while it is on
// screen so mobile browsers allow autoplay, pauses off screen to save data,
// and the native controls let the visitor unmute.
export default function MissedCallVideo({ src, poster }) {
    const videoRef = useRef(null);
    const tracked = useRef({ unmuted: false, played: false });

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return undefined;
        video.muted = true;

        const tryPlay = () => {
            const attempt = video.play();
            if (attempt && typeof attempt.catch === 'function') attempt.catch(() => {});
        };

        if (typeof IntersectionObserver === 'undefined') {
            tryPlay();
            return undefined;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) tryPlay();
                else if (!video.paused) video.pause();
            },
            { threshold: 0.4 },
        );
        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    const onPlay = () => {
        if (!tracked.current.played) {
            tracked.current.played = true;
            trackReceptionistEvent('video_play');
        }
    };

    const onVolumeChange = () => {
        const video = videoRef.current;
        if (video && !video.muted && !tracked.current.unmuted) {
            tracked.current.unmuted = true;
            trackReceptionistEvent('video_unmuted');
        }
    };

    return (
        <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            controls
            preload="metadata"
            onPlay={onPlay}
            onVolumeChange={onVolumeChange}
            aria-label="Short video: a plumber misses a call under a sink, then watches jobs get booked by the AI receptionist"
            className="aspect-[9/16] w-full max-w-[300px] rounded-2xl bg-slate-950 shadow-2xl shadow-slate-900/20"
        />
    );
}
