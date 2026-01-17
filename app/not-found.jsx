import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-center justify-center px-4 py-24">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h1>
                    <p className="text-slate-600 mb-8">
                        Sorry, we couldn't find the page you're looking for.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-all"
                    >
                        Go Home
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
}
