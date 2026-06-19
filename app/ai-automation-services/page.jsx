import SeoAutomationPage from '@/components/SeoAutomationPage';
import {
    getAutomationSeoMetadata,
    getAutomationSeoPage,
    getAutomationSeoSchemas,
} from '@/lib/seoAutomationPages';

const slug = 'ai-automation-services';

export const metadata = getAutomationSeoMetadata(slug);

export default function AiAutomationServicesPage() {
    const page = getAutomationSeoPage(slug);
    const schemas = getAutomationSeoSchemas(slug);

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <SeoAutomationPage page={page} />
        </>
    );
}
