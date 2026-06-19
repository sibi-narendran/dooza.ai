import SeoAutomationPage from '@/components/SeoAutomationPage';
import {
    getAutomationSeoMetadata,
    getAutomationSeoPage,
    getAutomationSeoSchemas,
} from '@/lib/seoAutomationPages';

const slug = 'ai-content-automation';

export const metadata = getAutomationSeoMetadata(slug);

export default function AiContentAutomationPage() {
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
