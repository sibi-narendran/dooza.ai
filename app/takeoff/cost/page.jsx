import TakeoffPage, { takeoffMetadata } from '@/components/takeoff/TakeoffPage';

export const metadata = takeoffMetadata('cost');

export default function Page() {
    return <TakeoffPage pageKey="cost" />;
}
