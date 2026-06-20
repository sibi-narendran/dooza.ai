import CustomerServiceToolPage from '@/components/CustomerServiceToolPage';
import {
    buildCustomerServiceMetadata,
    buildCustomerServiceSchemas,
    getCustomerServiceToolPage,
} from '@/lib/customerServiceAutomation';

const page = getCustomerServiceToolPage('customer-service-automation-software');
const schemas = buildCustomerServiceSchemas(page);

export const metadata = buildCustomerServiceMetadata(page);

export default function CustomerServiceAutomationSoftwarePage() {
    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
            <CustomerServiceToolPage page={page} />
        </>
    );
}
