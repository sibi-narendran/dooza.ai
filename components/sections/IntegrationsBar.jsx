import { Calendar } from 'lucide-react';

export default function IntegrationsBar() {
    return (
        <section className="py-12 bg-white border-y border-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm text-slate-500 mb-8 font-medium uppercase tracking-wide">Seamlessly integrates with your favorite tools</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    {/* Gmail */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                        </svg>
                        <span className="font-medium text-sm">Gmail</span>
                    </div>
                    {/* Outlook */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75V5.8l-.5-.3.5.8zM7.88 11.16l2.06 1.38 2.06-1.38h-4.12z" />
                        </svg>
                        <span className="font-medium text-sm">Outlook</span>
                    </div>
                    {/* LinkedIn */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span className="font-medium text-sm">LinkedIn</span>
                    </div>
                    {/* Instagram */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.757-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                        </svg>
                        <span className="font-medium text-sm">Instagram</span>
                    </div>
                    {/* Facebook */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        <span className="font-medium text-sm">Facebook</span>
                    </div>
                    {/* X/Twitter */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        <span className="font-medium text-sm">X</span>
                    </div>
                    {/* Zapier */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M15.633 1.996h-3.267v6.264L6.81 2.705 4.41 5.105l5.555 5.555H3.7v3.268h6.264l-5.555 5.555 2.4 2.4 5.556-5.555v6.266h3.267v-6.266l5.555 5.555 2.4-2.4-5.555-5.555h6.266V10.66h-6.266l5.555-5.555-2.4-2.4-5.555 5.555V1.996z" />
                        </svg>
                        <span className="font-medium text-sm">Zapier</span>
                    </div>
                    {/* Slack */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
                        </svg>
                        <span className="font-medium text-sm">Slack</span>
                    </div>
                    {/* HubSpot */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.984v-.066A2.198 2.198 0 0 0 17.238.84h-.065a2.198 2.198 0 0 0-2.193 2.193v.065c0 .859.493 1.604 1.212 1.962v2.855a5.653 5.653 0 0 0-2.627 1.162l-6.929-5.365a2.06 2.06 0 0 0 .061-.462 2.123 2.123 0 1 0-2.123 2.123 2.104 2.104 0 0 0 1.118-.322l6.827 5.288a5.654 5.654 0 0 0-.479 2.287c0 .857.194 1.67.537 2.4l-2.166 2.166a1.932 1.932 0 0 0-.561-.09 1.986 1.986 0 1 0 1.987 1.987 1.932 1.932 0 0 0-.088-.557l2.143-2.143a5.665 5.665 0 1 0 4.209-9.374zM17.17 16.492a2.882 2.882 0 1 1 0-5.765 2.882 2.882 0 0 1 0 5.765z" />
                        </svg>
                        <span className="font-medium text-sm">HubSpot</span>
                    </div>
                    {/* Google Calendar */}
                    <div className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors">
                        <Calendar className="w-5 h-5" />
                        <span className="font-medium text-sm">Calendar</span>
                    </div>
                </div>
                <p className="text-center text-xs text-slate-400 mt-6">+ 1000s more via Zapier</p>
            </div>
        </section>
    );
}
