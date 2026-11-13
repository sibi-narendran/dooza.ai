import TakeoffPage, { takeoffMetadata } from '@/components/takeoff/TakeoffPage';

export const metadata = takeoffMetadata('hub');

export default function Page() {
    return <TakeoffPage pageKey="hub" />;
}
