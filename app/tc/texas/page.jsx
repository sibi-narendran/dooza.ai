// /tc/texas: same page as /tc for Apollo's Texas Google ad (his ask 11-13 20:16). Same form, AW tag, tc_form_submit.
import TcPage from '../page';

export const metadata = {
    title: 'Texas Real Estate Transaction Coordinator, $99 a File',
    description: 'Texas real estate transaction coordinator: contract to close, every deadline tracked and every step checked by a person. First file free. No card, no contract.',
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://www.dooza.ai/tc/texas' },
};

export default function TcTexasPage() {
    return <TcPage h1="Texas Real Estate Transaction Coordinator. $99 a File." />;
}
