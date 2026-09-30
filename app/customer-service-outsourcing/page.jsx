import SupportGuidePage from '@/components/supportGuides/SupportGuidePage';
import { buildGuideMetadata } from '@/lib/supportGuides/shared';
import page from '@/lib/supportGuides/customerServiceOutsourcing';

export const metadata = buildGuideMetadata(page);

export default function CustomerServiceOutsourcingPage() {
    return <SupportGuidePage page={page} />;
}
