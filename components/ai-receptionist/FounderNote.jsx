import Image from 'next/image';
import { FOUNDER } from '@/lib/aiReceptionistData';

// The person behind the booking. Visitors book meetings with a person, not a
// brand they have never heard of.
export default function FounderNote({ tone = 'light', lead = null }) {
    const dark = tone === 'dark';
    return (
        <div className={`flex items-center gap-4 rounded-2xl border p-4 text-left ${dark ? 'border-white/15 bg-white/5' : 'border-slate-200 bg-white'}`}>
            <Image
                src={FOUNDER.image}
                alt={FOUNDER.name}
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 rounded-full object-cover"
            />
            <div>
                {lead && <p className={`text-xs font-bold uppercase tracking-wide ${dark ? 'text-primary-300' : 'text-primary-700'}`}>{lead}</p>}
                <p className={`font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
                    {FOUNDER.name}
                    <span className={`font-medium ${dark ? 'text-slate-300' : 'text-slate-500'}`}>, {FOUNDER.role}</span>
                </p>
                <p className={`text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{FOUNDER.line}</p>
            </div>
        </div>
    );
}
