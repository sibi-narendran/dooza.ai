import Image from 'next/image';
import Link from 'next/link';

// Minimal chrome for ad visitors: a logo with no link and a one-line legal
// footer. Google Ads requires a privacy link on any page that collects data.

export function AdsHeader() {
    return (
        <header className="border-b border-slate-100 bg-white">
            <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-4 sm:px-6">
                <Image src="/logo.png" alt="Dooza" width={32} height={32} className="h-8 w-auto rounded-lg" priority />
                <span className="text-lg font-bold tracking-tight text-slate-900">Dooza</span>
            </div>
        </header>
    );
}

export function AdsFooter() {
    return (
        <footer className="border-t border-slate-100 bg-white px-4 py-6 text-center text-xs text-slate-500">
            <p>
                &copy; {new Date().getFullYear()} Dooza.{' '}
                <Link href="/privacy" className="underline hover:text-slate-700">Privacy</Link>{' '}
                <Link href="/terms" className="underline hover:text-slate-700">Terms</Link>
            </p>
        </footer>
    );
}

// Google Ads auto-tagging adds gclid and gad_source to every ad click. Ad
// visitors get the single-action chrome. Everyone else gets the normal site.
export function isAdsVisit(searchParams) {
    if (!searchParams) return false;
    return Boolean(
        searchParams.gclid ||
        searchParams.gbraid ||
        searchParams.wbraid ||
        searchParams.gad_source ||
        searchParams.ads === '1',
    );
}

// Carries the landing page query string (variant, gclid, campaign params) to
// the booking page so chrome and attribution stay consistent.
export function withSearchParams(path, searchParams) {
    const params = new URLSearchParams();
    Object.entries(searchParams || {}).forEach(([key, value]) => {
        if (typeof value === 'string' && value) params.set(key, value);
        else if (Array.isArray(value) && value[0]) params.set(key, value[0]);
    });
    const query = params.toString();
    return query ? `${path}?${query}` : path;
}
