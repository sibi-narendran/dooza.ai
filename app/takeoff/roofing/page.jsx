import TakeoffPage, { takeoffMetadata } from '@/components/takeoff/TakeoffPage';

export const metadata = takeoffMetadata('roofing');

export default function Page() {
    return <TakeoffPage pageKey="roofing" />;
}
