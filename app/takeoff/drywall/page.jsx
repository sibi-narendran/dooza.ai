import TakeoffPage, { takeoffMetadata } from '@/components/takeoff/TakeoffPage';

export const metadata = takeoffMetadata('drywall');

export default function Page() {
    return <TakeoffPage pageKey="drywall" />;
}
