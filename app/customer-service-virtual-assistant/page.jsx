import SupportGuidePage from '@/components/supportGuides/SupportGuidePage';
import { buildGuideMetadata } from '@/lib/supportGuides/shared';
import page from '@/lib/supportGuides/customerServiceVirtualAssistant';

export const metadata = buildGuideMetadata(page);

export default function CustomerServiceVirtualAssistantPage() {
    return <SupportGuidePage page={page} />;
}
