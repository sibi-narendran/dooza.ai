import SupportGuidePage from '@/components/supportGuides/SupportGuidePage';
import { buildGuideMetadata } from '@/lib/supportGuides/shared';
import page from '@/lib/supportGuides/smallBusinessOutsourcing';

export const metadata = buildGuideMetadata(page);

export default function SmallBusinessOutsourcingPage() {
    return <SupportGuidePage page={page} />;
}
