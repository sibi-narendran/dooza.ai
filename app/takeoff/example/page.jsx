import TakeoffPage, { takeoffMetadata } from '@/components/takeoff/TakeoffPage';

export const metadata = takeoffMetadata('example');

export default function Page() {
    return <TakeoffPage pageKey="example" />;
}
