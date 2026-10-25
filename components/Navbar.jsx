import SiteHeader from '@/components/crew/SiteHeader';

// Old site nav retired (Sibi 2026-10-25 09:06 "change all"): every page now shows the homepage header.
// Pages that import Navbar already pad their own top for a fixed bar, so no spacer here. Old props are ignored
// except ctaSource, kept as the sign-up link's source.
export default function Navbar({ ctaSource }) {
    return <SiteHeader source={ctaSource ? `nav-${ctaSource}` : 'site-header'} spacer={false} />;
}
