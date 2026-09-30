import SupportGuidePage from '@/components/supportGuides/SupportGuidePage';
import { buildGuideMetadata } from '@/lib/supportGuides/shared';
import page from '@/lib/supportGuides/gorgiasAlternatives';

export const metadata = buildGuideMetadata(page);

export default function GorgiasAlternativesPage() {
    return <SupportGuidePage page={page} />;
}
