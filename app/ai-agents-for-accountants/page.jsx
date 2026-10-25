import BookingModalProvider from '@/components/BookingModalProvider';
import Footer from '@/components/Footer';
import IndustryCrew from '@/components/industry/IndustryCrew';
import { industryCrews, industryMetadata, industrySchemas } from '@/lib/industryCrews';

const c = industryCrews['accountants'];

export const metadata = industryMetadata(c);

export default function Page() {
    return (
        <BookingModalProvider>
            {industrySchemas(c).map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <IndustryCrew c={c} />
            <Footer />
        </BookingModalProvider>
    );
}
