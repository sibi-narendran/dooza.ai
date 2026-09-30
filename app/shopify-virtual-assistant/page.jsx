import SupportGuidePage from '@/components/supportGuides/SupportGuidePage';
import { buildGuideMetadata } from '@/lib/supportGuides/shared';
import page from '@/lib/supportGuides/shopifyVirtualAssistant';

export const metadata = buildGuideMetadata(page);

export default function ShopifyVirtualAssistantPage() {
    return <SupportGuidePage page={page} />;
}
