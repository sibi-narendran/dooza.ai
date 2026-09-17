'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { trackReceptionistEvent } from '@/lib/analytics';

export const PLAY_DEMO_EVENT = 'dooza:play-demo';

function formatTime(seconds) {
    const total = Math.max(0, Math.floor(seconds || 0));
    const minutes = Math.floor(total / 60);
    const rest = total % 60;
    return `${minutes}:${rest.toString().padStart(2, '0')}`;
}

export default function DemoCallPlayer({ demo, demoKey, label }) {
    const audioRef = useRef(null);
    const lineRefs = useRef([]);
    const milestones = useRef({ started: false, half: false, done: false });
    const [playing, setPlaying] = useState(false);
    const [current, setCurrent] = useState(0);
    const [activeIndex, setActiveIndex] = useState(-1);

    const play = useCallback(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const attempt = audio.play();
        if (attempt && typeof attempt.catch === 'function') {
            attempt.catch(() => setPlaying(false));
        }
    }, []);

    const toggle = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (audio.paused) play();
        else audio.pause();
    };

    useEffect(() => {
        const handler = () => {
            const audio = audioRef.current;
            if (!audio) return;
            audio.currentTime = 0;
            play();
        };
        window.addEventListener(PLAY_DEMO_EVENT, handler);
        return () => window.removeEventListener(PLAY_DEMO_EVENT, handler);
    }, [play]);

    const onTimeUpdate = () => {
        const audio = audioRef.current;
        if (!audio) return;
        const time = audio.currentTime;
        setCurrent(time);
        const index = demo.lines.findIndex((line) => time >= line.start && time < line.end + 0.35);
        if (index !== activeIndex) {
            setActiveIndex(index);
            const node = lineRefs.current[index];
            if (node && typeof node.scrollIntoView === 'function') {
                node.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        }
        if (!milestones.current.half && demo.duration && time >= demo.duration / 2) {
            milestones.current.half = true;
            trackReceptionistEvent('demo_half', { demo: demoKey });
        }
    };

    const onPlay = () => {
        setPlaying(true);
        if (!milestones.current.started) {
            milestones.current.started = true;
            trackReceptionistEvent('demo_play', { demo: demoKey });
        }
    };

    const onEnded = () => {
        setPlaying(false);
        setActiveIndex(-1);
        if (!milestones.current.done) {
            milestones.current.done = true;
            trackReceptionistEvent('demo_complete', { demo: demoKey });
        }
    };

    const seek = (event) => {
        const audio = audioRef.current;
        if (!audio) return;
        const next = Number(event.target.value);
        audio.currentTime = next;
        setCurrent(next);
    };

    return (
        <div className="card-shadow rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
            <audio
                ref={audioRef}
                src={demo.src}
                preload="metadata"
                onPlay={onPlay}
                onPause={() => setPlaying(false)}
                onTimeUpdate={onTimeUpdate}
                onEnded={onEnded}
            />

            <div className="flex items-center gap-4">
                <button
                    type="button"
                    onClick={toggle}
                    aria-label={playing ? 'Pause the sample call' : 'Play the sample call'}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-700 text-white shadow-lg shadow-primary-900/20 transition hover:bg-primary-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-300"
                >
                    {playing ? <Pause className="h-6 w-6" /> : <Play className="ml-1 h-6 w-6" />}
                </button>
                <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-900">{label}</p>
                    <div className="mt-2 flex items-center gap-3">
                        <input
                            type="range"
                            min="0"
                            max={demo.duration}
                            step="0.1"
                            value={Math.min(current, demo.duration)}
                            onChange={seek}
                            aria-label="Call position"
                            className="h-1.5 w-full cursor-pointer accent-primary-700"
                        />
                        <span className="w-20 shrink-0 text-right text-xs tabular-nums text-slate-500">
                            {formatTime(current)} / {formatTime(demo.duration)}
                        </span>
                    </div>
                </div>
            </div>

            <div
                role="list"
                aria-label="Call transcript"
                className="mt-5 flex max-h-72 flex-col gap-2.5 overflow-y-auto rounded-xl bg-slate-50 p-3 text-sm leading-6 sm:p-4"
            >
                {demo.lines.map((line, index) => {
                    const isReceptionist = line.speaker === 'receptionist';
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={`${line.start}-${index}`}
                            role="listitem"
                            ref={(node) => {
                                lineRefs.current[index] = node;
                            }}
                            className={`flex ${isReceptionist ? 'justify-start' : 'justify-end'}`}
                        >
                            <div
                                className={`max-w-[88%] rounded-2xl px-3.5 py-2 transition-colors sm:max-w-[80%] ${isReceptionist
                                    ? `rounded-bl-md ${isActive ? 'bg-primary-700 text-white' : 'bg-primary-100 text-slate-800'}`
                                    : `rounded-br-md ${isActive ? 'bg-slate-800 text-white' : 'bg-white text-slate-700 ring-1 ring-slate-200'}`
                                }`}
                            >
                                <p className={`mb-0.5 text-[11px] font-bold uppercase tracking-wide ${isActive ? 'text-white/70' : isReceptionist ? 'text-primary-700' : 'text-slate-400'}`}>
                                    {isReceptionist ? 'Receptionist' : 'Caller'}
                                </p>
                                <p>{line.text}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <p className="mt-3 text-xs text-slate-500">
                Demo call with the voice and call flow your callers get. Names, addresses and numbers are placeholders.
            </p>
        </div>
    );
}
