import Image from 'next/image';

/**
 * Optimized hero image component for blog posts
 * Uses Next.js Image for automatic optimization, lazy loading, and responsive images
 */
export default function BlogHeroImage({ src, alt, priority = false }) {
    return (
        <div className="relative w-full aspect-[1200/630] rounded-2xl overflow-hidden shadow-xl">
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                className="object-cover"
                priority={priority}
            />
        </div>
    );
}
