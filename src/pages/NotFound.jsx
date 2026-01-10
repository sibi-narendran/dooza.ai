import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <SEO 
                title="Page Not Found"
                description="The page you're looking for doesn't exist or has been moved."
                noindex={true}
            />
            <Navbar />
            
            <main className="flex-1 flex items-center justify-center px-4 py-24">
                <div className="text-center max-w-md">
                    <div className="text-8xl font-bold text-primary-600 mb-4">404</div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-4">Page Not Found</h1>
                    <p className="text-slate-600 mb-8">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/"
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-all"
                        >
                            <Home className="w-4 h-4" />
                            Go Home
                        </Link>
                        <button 
                            onClick={() => window.history.back()}
                            className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Go Back
                        </button>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default NotFound;
