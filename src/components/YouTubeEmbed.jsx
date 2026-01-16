import React, { useState } from 'react';
import { Play } from 'lucide-react';

/**
 * Lite YouTube Embed - Loads video only when user clicks
 * Saves ~1MB+ of initial page load per video
 */
const YouTubeEmbed = ({ 
    videoId, 
    title = "YouTube video",
    className = "aspect-video rounded-2xl overflow-hidden shadow-xl bg-slate-900"
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    
    // Generate thumbnail URL (YouTube provides multiple resolutions)
    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    const fallbackThumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    
    const handleClick = () => {
        setIsLoaded(true);
    };

    if (isLoaded) {
        return (
            <div className={className}>
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
        );
    }

    return (
        <button
            onClick={handleClick}
            className={`${className} relative group cursor-pointer border-0 p-0 w-full`}
            aria-label={`Play video: ${title}`}
        >
            {/* Thumbnail */}
            <img
                src={thumbnailUrl}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                    e.target.src = fallbackThumbnail;
                }}
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-red-500 transition-all">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
                </div>
            </div>
            
            {/* Video title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-sm md:text-base font-medium text-left line-clamp-2">
                    {title}
                </p>
            </div>
        </button>
    );
};

export default YouTubeEmbed;
