'use client';

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const VIDEO_ID = '4awjwkvELS8';
const EMBED_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?si=C1GFl1_Q-JW9LwK4&rel=0&autoplay=1`;
const THUMB_URL = `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`;

export default function VideoSection() {
    const [playing, setPlaying] = useState(false);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-warm to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <div className="text-center mb-8">
                        <span className="section-label block mb-4 text-green-600">SEE IT IN ACTION</span>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden card-shadow border border-slate-100 aspect-video bg-slate-900">
                        {playing ? (
                            <iframe
                                src={EMBED_URL}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        ) : (
                            <button
                                type="button"
                                onClick={() => setPlaying(true)}
                                aria-label="Play video"
                                className="absolute inset-0 w-full h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                            >
                                <img
                                    src={THUMB_URL}
                                    alt="See Dooza AI in action"
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                    <span className="flex items-center justify-center w-20 h-20 rounded-full bg-white/95 shadow-2xl group-hover:scale-110 transition-transform">
                                        <svg viewBox="0 0 24 24" className="w-9 h-9 text-primary-700 ml-1" fill="currentColor" aria-hidden="true">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </span>
                                </span>
                            </button>
                        )}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
