import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs = ({ items }) => {
    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center flex-wrap gap-1 text-sm text-slate-500">
                <li className="flex items-center">
                    <Link 
                        href="/" 
                        className="flex items-center gap-1 hover:text-primary-600 transition-colors"
                    >
                        <Home className="w-4 h-4" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <ChevronRight className="w-4 h-4 mx-1 text-slate-300" />
                        {item.href ? (
                            <Link 
                                href={item.href}
                                className="hover:text-primary-600 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-slate-700 font-medium truncate max-w-[200px] sm:max-w-none">
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
