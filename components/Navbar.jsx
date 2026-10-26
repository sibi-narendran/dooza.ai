'use client';
import { usePathname } from 'next/navigation';
import SiteHeader from '@/components/crew/SiteHeader';

// Old site nav retired (Sibi 2026-10-25 09:06 "change all"): every page now shows the homepage header.
// Pages that import Navbar already pad their own top for a fixed bar, so no spacer here. Old props are ignored
// except ctaSource, kept as the sign-up link's source. Otherwise the source is the page slug, so each trial maps
// to the page it came from (Napoleon 2026-10-26: "site-header" was shared by every page).
export default function Navbar({ ctaSource }) {
    const pathname = usePathname() || '';
    const slug = pathname.split('/').filter(Boolean).pop()?.slice(0, 40);
    return <SiteHeader source={ctaSource ? `nav-${ctaSource}` : slug ? `hdr-${slug}` : 'site-header'} spacer={false} />;
}
