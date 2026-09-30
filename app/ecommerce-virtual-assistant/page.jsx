import SupportGuidePage from '@/components/supportGuides/SupportGuidePage';
import { buildGuideMetadata } from '@/lib/supportGuides/shared';
import page from '@/lib/supportGuides/ecommerceVirtualAssistant';

export const metadata = buildGuideMetadata(page);

export default function EcommerceVirtualAssistantPage() {
    return <SupportGuidePage page={page} />;
}
