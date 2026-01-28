'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function BlogError({ error, reset }) {
    useEffect(() => {
        console.error('Blog post error:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg
                            className="w-10 h-10 text-amber-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-2">
                        Unable to load this article
                    </h1>
                    <p className="text-slate-600 mb-8">
                        There was a problem loading this blog post. Please try again or browse other articles.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                    >
                        Try Again
                    </button>
                    <Link
                        href="/blog"
                        className="px-6 py-3 bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                    >
                        Browse Articles
                    </Link>
                </div>

                <p className="mt-8 text-sm text-slate-500">
                    If the problem persists, please{' '}
                    <a href="mailto:hello@dooza.ai" className="text-primary-600 hover:underline">
                        contact us
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}
