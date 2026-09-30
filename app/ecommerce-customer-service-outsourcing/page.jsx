import SupportGuidePage from '@/components/supportGuides/SupportGuidePage';
import { buildGuideMetadata } from '@/lib/supportGuides/shared';
import page from '@/lib/supportGuides/ecommerceOutsourcing';

export const metadata = buildGuideMetadata(page);

export default function EcommerceOutsourcingPage() {
    return <SupportGuidePage page={page} />;
}
