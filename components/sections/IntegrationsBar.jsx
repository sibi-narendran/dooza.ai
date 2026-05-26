'use client';

import { useEffect, useMemo, useState } from 'react';
import {
    ExternalLink,
    Loader2,
    PlugZap,
    Search,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const PAGE_SIZE = 12;
const MIN_SEARCH_LENGTH = 3;

function IntegrationLogo({ item }) {
    const initials = (item.name || 'AI').split(/\s+/).slice(0, 2).map((word) => word[0]).join('').toUpperCase();

    return (
        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-100">
            {item.logo ? (
                <img
                    src={item.logo}
                    alt=""
                    className="h-7 w-7 object-contain"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                />
            ) : (
                <span className="text-xs font-extrabold text-slate-500">{initials}</span>
            )}
        </div>
    );
}

export default function IntegrationsBar({ className = '' }) {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [items, setItems] = useState([]);
    const [totalItems, setTotalItems] = useState(null);
    const [nextCursor, setNextCursor] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [error, setError] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);

    const isSearchTooShort = isExpanded && debouncedQuery.length > 0 && debouncedQuery.length < MIN_SEARCH_LENGTH;
    const visibleItems = isExpanded ? items : items.slice(0, PAGE_SIZE);

    useEffect(() => {
        const timeout = window.setTimeout(() => {
            setDebouncedQuery(query.trim());
        }, 250);

        return () => window.clearTimeout(timeout);
    }, [query]);

    const catalogUrl = useMemo(() => {
        if (isSearchTooShort) return null;

        const params = new URLSearchParams({ limit: String(PAGE_SIZE) });
        if (isExpanded && debouncedQuery) params.set('search', debouncedQuery);
        return `/api/integrations/catalog?${params.toString()}`;
    }, [debouncedQuery, isExpanded, isSearchTooShort]);

    useEffect(() => {
        if (!catalogUrl) {
            setItems([]);
            setTotalItems(null);
            setNextCursor(null);
            setError('');
            setIsLoading(false);
            return undefined;
        }

        const controller = new AbortController();

        async function loadCatalog() {
            setIsLoading(true);
            setError('');

            try {
                const response = await fetch(catalogUrl, {
                    signal: controller.signal,
                    headers: { Accept: 'application/json' },
                });

                if (!response.ok) throw new Error('Failed to fetch integrations');

                const data = await response.json();
                setItems(Array.isArray(data.items) ? data.items : []);
                setTotalItems(Number.isFinite(data.totalItems) ? data.totalItems : null);
                setNextCursor(data.nextCursor || null);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setItems([]);
                    setTotalItems(null);
                    setNextCursor(null);
                    setError('Integration search is temporarily unavailable.');
                }
            } finally {
                if (!controller.signal.aborted) setIsLoading(false);
            }
        }

        loadCatalog();

        return () => controller.abort();
    }, [catalogUrl]);

    async function loadMore() {
        if (!nextCursor || isLoadingMore) return;

        const params = new URLSearchParams({ limit: String(PAGE_SIZE), cursor: nextCursor });
        if (debouncedQuery) params.set('search', debouncedQuery);

        setIsLoadingMore(true);
        setError('');

        try {
            const response = await fetch(`/api/integrations/catalog?${params.toString()}`, {
                headers: { Accept: 'application/json' },
            });

            if (!response.ok) throw new Error('Failed to fetch more integrations');

            const data = await response.json();
            setItems((currentItems) => [...currentItems, ...(Array.isArray(data.items) ? data.items : [])]);
            setNextCursor(data.nextCursor || null);
            setTotalItems(Number.isFinite(data.totalItems) ? data.totalItems : totalItems);
        } catch {
            setError('Could not load more integrations. Please try again.');
        } finally {
            setIsLoadingMore(false);
        }
    }

    function collapseIntegrations() {
        setIsExpanded(false);
        setQuery('');
        setDebouncedQuery('');
        setItems((currentItems) => currentItems.slice(0, PAGE_SIZE));
        setNextCursor(null);
        setError('');
    }

    return (
        <section className={`py-16 md:py-20 bg-white border-y border-slate-100 ${className}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                    <h2 className="text-center text-2xl md:text-3xl font-bold text-slate-900 mb-3 font-serif">Connect your AI to where work happens</h2>
                    <p className="text-center text-slate-500 mb-10 max-w-xl mx-auto">Your AI employees plug into the tools you already use — so they start delivering from day one.</p>
                </ScrollReveal>
                {isExpanded && (
                    <div className="mx-auto mb-10 max-w-xl">
                        <label htmlFor="integration-search" className="sr-only">Search integrations</label>
                        <div className="relative">
                            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                            <input
                                id="integration-search"
                                type="search"
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder="Search Gmail, Shopify, Slack, CRM..."
                                className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm font-medium text-slate-800 shadow-sm outline-none transition focus:border-primary-300 focus:ring-4 focus:ring-primary-100"
                            />
                        </div>
                    </div>
                )}
                <div className="mb-6 flex flex-col items-center justify-center gap-2 text-center text-sm text-slate-500 sm:flex-row">
                    <span>
                        {totalItems ? `${totalItems.toLocaleString()}+ live Composio connectors` : 'Live Composio connector catalog'}
                    </span>
                    <span className="hidden text-slate-300 sm:inline">•</span>
                    <span>Custom MCP and API workflows supported separately</span>
                </div>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                    {isLoading && Array.from({ length: PAGE_SIZE }).map((_, index) => (
                        <div key={index} className="min-h-[132px] animate-pulse rounded-2xl bg-slate-50" />
                    ))}
                    {!isLoading && visibleItems.map((item) => (
                        <div key={item.slug || item.name} className="group flex min-h-[132px] flex-col items-center justify-center gap-2 rounded-2xl border border-transparent p-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-slate-100 hover:bg-slate-50">
                            <IntegrationLogo item={item} />
                            <span className="font-medium text-sm text-slate-700">{item.name}</span>
                            <span className="line-clamp-1 text-xs text-slate-400">{item.categories?.[0] || 'Integration'}</span>
                            {item.toolsCount > 0 && (
                                <span className="text-[11px] font-semibold text-primary-600">{item.toolsCount} tools</span>
                            )}
                        </div>
                    ))}
                </div>
                {!isLoading && isSearchTooShort && (
                    <p className="mt-8 text-center text-sm font-medium text-slate-500">
                        Keep typing to search the live integration catalog.
                    </p>
                )}
                {!isLoading && !error && !isSearchTooShort && items.length === 0 && (
                    <p className="mt-8 text-center text-sm font-medium text-slate-500">
                        No exact match yet. Dooza can still connect custom tools through Zapier or API workflows.
                    </p>
                )}
                {error && (
                    <p className="mt-8 text-center text-sm font-semibold text-red-600">{error}</p>
                )}
                <div className="mt-8 flex flex-col items-center gap-4">
                    {!isExpanded && (
                        <button
                            type="button"
                            onClick={() => setIsExpanded(true)}
                            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-800 shadow-sm transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
                        >
                            <Search className="h-4 w-4" />
                            See more integrations
                        </button>
                    )}
                    {isExpanded && (
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {nextCursor && (
                                <button
                                    type="button"
                                    onClick={loadMore}
                                    disabled={isLoadingMore}
                                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-800 shadow-sm transition hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {isLoadingMore ? <Loader2 className="h-4 w-4 animate-spin" /> : <ExternalLink className="h-4 w-4" />}
                                    {isLoadingMore ? 'Loading integrations' : 'See more integrations'}
                                </button>
                            )}
                            <button
                                type="button"
                                onClick={collapseIntegrations}
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-white"
                            >
                                See less
                            </button>
                        </div>
                    )}
                    <div className="inline-flex max-w-xl items-center justify-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-center text-sm text-slate-500">
                        <PlugZap className="h-4 w-4 text-primary-600" />
                        Need a private tool? Dooza also supports custom MCP connectors and API workflows.
                    </div>
                </div>
            </div>
        </section>
    );
}
