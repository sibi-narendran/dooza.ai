'use client';

import { useState, useEffect } from 'react';

const WEBHOOK_URL = 'https://workflow.dooza.ai/webhook/fin-lead-finder';

const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
  'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming',
];

const INFLUENCERS = [
  { value: 'Andrew Wang', label: 'Andrew Wang', desc: '401(k) & Retirement', companies: 25 },
  { value: 'Tiffany Aliche', label: 'Tiffany Aliche', desc: 'Financial Empowerment', companies: 13 },
  { value: 'Bernadette Joy', label: 'Bernadette Joy', desc: 'Early Retirement', companies: 3 },
  { value: 'Marc Russell', label: 'Marc Russell', desc: 'Personal Finance & Investing', companies: 14 },
  { value: 'Julien and Kiersten Saunders', label: 'Julien & Kiersten Saunders', desc: 'Wealth Building', companies: 11 },
  { value: 'Reyna Gobel', label: 'Reyna Gobel', desc: 'College Funding & Pet Finance', companies: 13 },
  { value: 'Jason Steele', label: 'Jason Steele', desc: 'Credit Cards & Travel Rewards', companies: 28 },
  { value: 'Cullen Canazares', label: 'Cullen Canazares', desc: 'Credit Education & Workforce', companies: 15 },
  { value: 'Dr. Preston D. Cherry', label: 'Dr. Preston Cherry', desc: 'Financial Wellness & Gen X', companies: 5 },
];

const CACHED_LEADS = {
  'Andrew Wang::Texas': {
    summary: { zone: 'Texas', influencer: 'Andrew Wang', companiesSearched: 5, leadsEnriched: 17, uniqueLeads: 17 },
    leads: [
      {"First Name":"Anne","Last Name":"Coleman","Email Address":"anne_coleman@vanguard.com","Email Status":"verified","Organization":"Vanguard","Title":"Market Director","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/annemcoleman26","Rationale":"As Market Director at Vanguard, one of the largest 401(k) providers, Anne directly oversees regional marketing strategy — a natural partner for Andy Wang's retirement planning content."},
      {"First Name":"Jim","Last Name":"Entwisle","Email Address":"james_entwisle@vanguard.com","Email Status":"verified","Organization":"Vanguard","Title":"Market Director","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/jim-entwisle-cfp%c2%ae-48401158","Rationale":"Jim's role as Market Director at Vanguard with CFP credentials means he understands retirement planning deeply — ideal for co-creating authentic 401(k) content with Andy Wang."},
      {"First Name":"Kyle","Last Name":"Santander","Email Address":"kyle_santander@vanguard.com","Email Status":"verified","Organization":"Vanguard","Title":"Market Director","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/kyle-santander-8645a759","Rationale":"Kyle manages Vanguard's regional market presence in Texas, making him a key decision-maker for local influencer partnerships targeting retirement savers."},
      {"First Name":"Kristina","Last Name":"Alfano","Email Address":"kristina.alfano@fmr.com","Email Status":"verified","Organization":"Fidelity Investments","Title":"Director, Marketing","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/kristinaalfano","Rationale":"As Marketing Director at Fidelity, Kristina controls partnership budgets for one of the top 401(k) providers — a high-value match for Andy Wang's retirement-focused audience."},
      {"First Name":"Jarrett","Last Name":"Hollier","Email Address":"jarrett.hollier@fmr.com","Email Status":"verified","Organization":"Fidelity Investments","Title":"Vice President, Marketing Technology","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/jarretthollier","Rationale":"Jarrett leads marketing technology at Fidelity and would understand the measurable ROI of influencer-driven retirement content campaigns."},
      {"First Name":"Cherrel","Last Name":"Adams","Email Address":"cherrel.adams@fmr.com","Email Status":"verified","Organization":"Fidelity Investments","Title":"Director Marketing Enablement","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/cherrel-adams","Rationale":"Cherrel's marketing enablement role at Fidelity positions her to champion new content channels like influencer partnerships for 401(k) education."},
      {"First Name":"John","Last Name":"Scozzari","Email Address":"john.scozzari@fidelity.com","Email Status":"verified","Organization":"Fidelity Investments","Title":"Director, Marketing Automation","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/john-scozzari-08853266","Rationale":"John manages Fidelity's marketing automation — he can integrate influencer content into existing nurture campaigns targeting retirement plan participants."},
      {"First Name":"James","Last Name":"Wyant","Email Address":"james.wyant@fmr.com","Email Status":"verified","Organization":"Fidelity Investments","Title":"Marketing Director","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/jameswyant","Rationale":"As Marketing Director at Fidelity, James has direct authority over campaign partnerships and brand collaborations in the retirement space."},
      {"First Name":"Amy","Last Name":"Heiss","Email Address":"amy.heiss@schwab.com","Email Status":"verified","Organization":"Charles Schwab","Title":"Director, HR Talent; VP Marketing","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/amyheiss","Rationale":"Amy's dual HR and Marketing VP role at Schwab gives her unique insight into both employer-sponsored retirement plans and marketing strategy."},
      {"First Name":"Jenny","Last Name":"Preece","Email Address":"jenny.preece@schwab.com","Email Status":"verified","Organization":"Charles Schwab","Title":"Director, Marketing","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/jenny-preece-4a74454","Rationale":"Jenny directs marketing at Charles Schwab, a major player in workplace retirement solutions — well-positioned to evaluate influencer partnerships."},
      {"First Name":"John","Last Name":"Cassel","Email Address":"john.cassel@schwab.com","Email Status":"verified","Organization":"Charles Schwab","Title":"Director - Marketing Data","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/john-cassel-20878214","Rationale":"John's data-driven marketing role at Schwab means he can measure influencer campaign impact on retirement plan enrollments and engagement."},
      {"First Name":"Suzanne","Last Name":"Lazo","Email Address":"suzanne.lazo@schwab.com","Email Status":"verified","Organization":"Charles Schwab","Title":"Director Marketing Planning & Strategy","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/suzannestull","Rationale":"Suzanne plans Schwab's marketing strategy — she decides where partnership dollars go and would value Andy Wang's established audience in the retirement space."},
      {"First Name":"April","Last Name":"Soechting","Email Address":"april.soechting@schwab.com","Email Status":"verified","Organization":"Charles Schwab","Title":"Marketing Director","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/april-soechting-sek-ting-b654a69","Rationale":"April leads marketing at Schwab with direct influence over brand partnership decisions — a key contact for pitching influencer-led retirement content."},
      {"First Name":"Angel","Last Name":"Liang","Email Address":"angel.liang@tiaa.org","Email Status":"verified","Organization":"TIAA","Title":"Director, Client Lifecycle Marketing","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/angelyingliang","Rationale":"Angel manages TIAA's client lifecycle marketing — influencer content from Andy Wang could drive engagement across TIAA's retirement plan participant journey."},
      {"First Name":"Claire","Last Name":"Barton","Email Address":"claire.barton@tiaa.org","Email Status":"verified","Organization":"TIAA","Title":"Director, Engagement Marketing, Retirement Solutions","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/claire-piantidosi-barton-0929b712","Rationale":"Claire's role specifically focuses on engagement marketing for retirement solutions at TIAA — almost a perfect title match for Andy Wang's 401(k) content niche."},
      {"First Name":"Amy","Last Name":"Mancuso","Email Address":"amy.mancuso@tiaa.org","Email Status":"verified","Organization":"TIAA","Title":"Sr. Director Wealth Lifecycle Marketing","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/amy-kaiser-mancuso","Rationale":"As Sr. Director of Wealth Lifecycle Marketing at TIAA, Amy oversees how retirement products are marketed to end consumers — Andy Wang's audience maps directly to her goals."},
      {"First Name":"Greg","Last Name":"Schultz","Email Address":"gschultz@sofi.org","Email Status":"verified","Organization":"SoFi","Title":"Vice President, Business Lead","Company Group":"Tier 3 — Opportunity Brands","LinkedIn":"http://www.linkedin.com/in/gregkschultz","Rationale":"Greg leads business development at SoFi, which is expanding into retirement products — an emerging opportunity for Andy Wang's 401(k) content as SoFi grows in this space."},
    ],
  },
};

export default function FINDemoClient() {
  const [influencer, setInfluencer] = useState('Andrew Wang');
  const [zone, setZone] = useState('Texas');
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [results, setResults] = useState(null);
  const [isCached, setIsCached] = useState(false);
  const [error, setError] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);

  const selectedInf = INFLUENCERS.find(i => i.value === influencer);

  async function findLeads() {
    setError(null);
    setResults(null);
    setExpandedRow(null);

    const cacheKey = `${influencer}::${zone}`;
    if (CACHED_LEADS[cacheKey]) {
      setResults(CACHED_LEADS[cacheKey]);
      setIsCached(true);
      return;
    }

    setIsCached(false);
    setLoading(true);
    setLoadingStep(0);

    const stepTimer = setInterval(() => {
      setLoadingStep(prev => Math.min(prev + 1, 4));
    }, 8000);

    try {
      const payload = { influencer, maxCompanies: 3, skipOutreach: true };
      if (zone) payload.zone = zone;

      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`Server returned ${res.status}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      clearInterval(stepTimer);
      setLoading(false);
    }
  }

  const leads = results?.leads || [];
  const summary = results?.summary || {};
  const verifiedCount = leads.filter(l => (l['Email Status'] || '').toLowerCase() === 'verified').length;

  return (
    <>
      <style>{`
        @keyframes fin-spin { to { transform: rotate(360deg); } }
        @keyframes fin-fade-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fin-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        @keyframes fin-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .fin-row:hover { background: #f8fafc !important; }
        .fin-row td { transition: background 0.15s; }
        .fin-expand-btn:hover { background: #f0fdfa !important; }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#faf9f7' }}>

        {/* Hero Section */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #0f766e 100%)',
          padding: '3.5rem 1.5rem 3rem',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Background pattern */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.06,
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }} />

          <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <span style={{
                fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: '#5eead4',
                background: 'rgba(94, 234, 212, 0.1)',
                padding: '0.35em 0.9em', borderRadius: 100,
                border: '1px solid rgba(94, 234, 212, 0.2)',
              }}>
                FIN x Dooza
              </span>
              <span style={{
                fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
              }}>
                Live Demo
              </span>
            </div>

            <h1 style={{
              fontSize: '2.4rem', fontWeight: 800, color: '#ffffff',
              lineHeight: 1.15, marginBottom: '0.75rem',
              fontFamily: 'Georgia, Cambria, serif',
            }}>
              AI Lead Finder
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem',
              maxWidth: '52ch', lineHeight: 1.65,
            }}>
              Find verified decision-makers at target brand partners — matched to each influencer's audience and expertise.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'flex', gap: '2.5rem', marginTop: '2rem',
              paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)',
            }}>
              {[
                { n: '9', label: 'Influencers' },
                { n: '127', label: 'Target Companies' },
                { n: '50+', label: 'Zones' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#5eead4' }}>{s.n}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls Card - pulled up over hero */}
        <div style={{ maxWidth: 1080, margin: '-1.5rem auto 0', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
          <div style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: 16,
            padding: '1.75rem',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr auto',
              gap: '1.25rem',
              alignItems: 'end',
            }}>
              <div>
                <label style={{
                  display: 'block', fontSize: '0.75rem', fontWeight: 700,
                  color: '#334155', letterSpacing: '0.05em', textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>
                  Influencer
                </label>
                <select
                  value={influencer}
                  onChange={e => setInfluencer(e.target.value)}
                  disabled={loading}
                  style={selectStyle}
                >
                  {INFLUENCERS.map(inf => (
                    <option key={inf.value} value={inf.value}>
                      {inf.label} — {inf.desc} ({inf.companies} companies)
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{
                  display: 'block', fontSize: '0.75rem', fontWeight: 700,
                  color: '#334155', letterSpacing: '0.05em', textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>
                  Zone <span style={{ fontWeight: 500, color: '#94a3b8', textTransform: 'none', letterSpacing: 0 }}>optional</span>
                </label>
                <select
                  value={zone}
                  onChange={e => setZone(e.target.value)}
                  disabled={loading}
                  style={selectStyle}
                >
                  <option value="">All zones (nationwide)</option>
                  {US_STATES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={findLeads}
                disabled={loading}
                style={{
                  padding: '0.7rem 2rem',
                  border: 'none',
                  borderRadius: 10,
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  background: loading ? '#94a3b8' : 'linear-gradient(135deg, #0d9488, #0f766e)',
                  color: '#ffffff',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                  boxShadow: loading ? 'none' : '0 2px 8px rgba(13, 148, 136, 0.3)',
                  letterSpacing: '0.02em',
                }}
              >
                {loading ? 'Searching...' : 'Find Leads'}
              </button>
            </div>

            {/* Selected influencer pill */}
            {selectedInf && (
              <div style={{
                marginTop: '1rem', paddingTop: '1rem',
                borderTop: '1px solid #f1f5f9',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#10b981', display: 'inline-block',
                }} />
                <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                  <strong style={{ color: '#334155' }}>{selectedInf.label}</strong>
                  {' '}&middot; {selectedInf.desc} &middot; {selectedInf.companies} target companies ready
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Content area */}
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '1.5rem 1.5rem 4rem' }}>

          {/* Loading */}
          {loading && (
            <div style={{
              textAlign: 'center', padding: '4rem 1rem',
              animation: 'fin-fade-in 0.3s ease-out',
            }}>
              <div style={{
                width: 48, height: 48,
                border: '3px solid #e6fffa',
                borderTopColor: '#0d9488',
                borderRadius: '50%',
                animation: 'fin-spin 0.8s linear infinite',
                margin: '0 auto 1.5rem',
              }} />
              <p style={{ color: '#0f172a', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                Finding decision-makers...
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'center', marginTop: '1rem' }}>
                {['Searching target companies...', 'Finding VPs, Directors & CMOs...', 'Getting verified emails...', 'Deduplicating results...', 'Generating rationale...'].map((step, i) => (
                  <div key={i} style={{
                    fontSize: '0.82rem',
                    color: i <= loadingStep ? '#0d9488' : '#cbd5e1',
                    fontWeight: i === loadingStep ? 600 : 400,
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    transition: 'all 0.3s',
                  }}>
                    {i < loadingStep ? (
                      <span style={{ color: '#10b981' }}>&#10003;</span>
                    ) : i === loadingStep ? (
                      <span style={{ display: 'inline-block', width: 12, height: 12, border: '2px solid #0d9488', borderTopColor: 'transparent', borderRadius: '50%', animation: 'fin-spin 0.6s linear infinite' }} />
                    ) : (
                      <span style={{ color: '#cbd5e1' }}>&#9675;</span>
                    )}
                    {step}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div style={{
              background: '#fef2f2', border: '1px solid #fecaca',
              borderRadius: 12, padding: '1.25rem 1.5rem',
              color: '#dc2626', fontSize: '0.9rem',
              animation: 'fin-fade-in 0.3s ease-out',
            }}>
              <strong>Something went wrong:</strong> {error}. Please try again.
            </div>
          )}

          {/* Results */}
          {results && (
            <div style={{ animation: 'fin-fade-in 0.4s ease-out' }}>
              {/* Results header with stats */}
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                marginBottom: '1.25rem', marginTop: '0.5rem', flexWrap: 'wrap', gap: '1rem',
              }}>
                <div>
                  <h2 style={{
                    fontSize: '1.3rem', fontWeight: 700, color: '#0f172a',
                    fontFamily: 'Georgia, Cambria, serif',
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                  }}>
                    {summary.influencer || influencer}
                    <span style={{ color: '#cbd5e1', fontWeight: 400 }}>/</span>
                    <span style={{ color: '#64748b', fontWeight: 500, fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1rem' }}>
                      {summary.zone || 'Nationwide'}
                    </span>
                    {isCached && (
                      <span style={{
                        fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
                        textTransform: 'uppercase', background: '#fef3c7',
                        color: '#92400e', padding: '0.3em 0.7em',
                        borderRadius: 100, verticalAlign: 'middle',
                        fontFamily: 'Inter, system-ui, sans-serif',
                      }}>
                        Instant Demo
                      </span>
                    )}
                  </h2>
                </div>

                {/* Stat pills */}
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <StatPill value={leads.length} label="Leads Found" color="#0d9488" bg="#f0fdfa" />
                  <StatPill value={verifiedCount} label="Verified" color="#059669" bg="#ecfdf5" />
                  <StatPill
                    value={summary.companiesSearched || '—'}
                    label="Companies"
                    color="#6366f1"
                    bg="#eef2ff"
                  />
                </div>
              </div>

              {/* Lead cards */}
              {leads.length === 0 ? (
                <div style={{
                  background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16,
                  padding: '3rem', textAlign: 'center', color: '#64748b',
                }}>
                  No leads found for this combination. Try a different zone or influencer.
                </div>
              ) : (
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 16,
                  overflow: 'hidden',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
                    <thead>
                      <tr style={{ background: '#f8fafc' }}>
                        {['', 'Name', 'Email', 'Title', 'Company', 'Tier', 'LinkedIn'].map((h, i) => (
                          <th key={h || i} style={{
                            textAlign: 'left',
                            padding: i === 0 ? '0.8rem 0.5rem 0.8rem 1rem' : '0.8rem 0.8rem',
                            fontSize: '0.68rem', fontWeight: 700,
                            letterSpacing: '0.08em', textTransform: 'uppercase',
                            color: '#94a3b8', whiteSpace: 'nowrap',
                            borderBottom: '1px solid #e2e8f0',
                            ...(i === 0 ? { width: 36 } : {}),
                          }}>
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead, i) => {
                        const tier = lead['Company Group'] || '';
                        const tierNum = tier.includes('Tier 1') ? 1 : tier.includes('Tier 2') ? 2 : 3;
                        const tierColors = {
                          1: { bg: '#f0fdfa', color: '#0d9488', border: '#ccfbf1' },
                          2: { bg: '#eef2ff', color: '#6366f1', border: '#e0e7ff' },
                          3: { bg: '#fef3c7', color: '#b45309', border: '#fde68a' },
                        }[tierNum];
                        const verified = (lead['Email Status'] || '').toLowerCase() === 'verified';
                        const linkedin = lead['LinkedIn'] || '';
                        const rationale = lead['Rationale'] || lead['Notes'] || '';
                        const isExpanded = expandedRow === i;

                        return (
                          <tr
                            key={i}
                            className="fin-row"
                            onClick={() => setExpandedRow(isExpanded ? null : i)}
                            style={{
                              borderBottom: '1px solid #f1f5f9',
                              cursor: rationale ? 'pointer' : 'default',
                              background: isExpanded ? '#f8fafc' : 'transparent',
                            }}
                          >
                            <td style={{ padding: '0.75rem 0.5rem 0.75rem 1rem', width: 36 }}>
                              <div style={{
                                width: 28, height: 28, borderRadius: '50%',
                                background: `linear-gradient(135deg, ${tierColors.bg}, ${tierColors.border})`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '0.72rem', fontWeight: 700, color: tierColors.color,
                              }}>
                                {i + 1}
                              </div>
                            </td>
                            <td style={{ padding: '0.75rem 0.8rem' }}>
                              <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.88rem' }}>
                                {lead['First Name']} {lead['Last Name']}
                              </div>
                              {verified && (
                                <span style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 600 }}>
                                  &#10003; Verified
                                </span>
                              )}
                              {/* Expanded rationale */}
                              {isExpanded && rationale && (
                                <div style={{
                                  marginTop: '0.6rem', padding: '0.6rem 0.75rem',
                                  background: '#f0fdfa', borderRadius: 8,
                                  fontSize: '0.8rem', color: '#475569', lineHeight: 1.55,
                                  borderLeft: '3px solid #0d9488',
                                  animation: 'fin-fade-in 0.2s ease-out',
                                }}>
                                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                                    Why this lead
                                  </div>
                                  {rationale}
                                </div>
                              )}
                            </td>
                            <td style={{
                              padding: '0.75rem 0.8rem',
                              fontFamily: "'SF Mono', 'Fira Code', monospace",
                              fontSize: '0.78rem', color: '#475569',
                            }}>
                              {lead['Email Address']}
                            </td>
                            <td style={{ padding: '0.75rem 0.8rem', color: '#475569', maxWidth: 200 }}>
                              {lead['Title']}
                            </td>
                            <td style={{ padding: '0.75rem 0.8rem', color: '#334155', fontWeight: 600 }}>
                              {lead['Organization']}
                            </td>
                            <td style={{ padding: '0.75rem 0.8rem' }}>
                              <span style={{
                                display: 'inline-block', fontSize: '0.7rem', fontWeight: 700,
                                padding: '0.25em 0.7em', borderRadius: 100,
                                background: tierColors.bg, color: tierColors.color,
                                border: `1px solid ${tierColors.border}`,
                              }}>
                                Tier {tierNum}
                              </span>
                            </td>
                            <td style={{ padding: '0.75rem 0.8rem' }}>
                              {linkedin ? (
                                <a
                                  href={linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={e => e.stopPropagation()}
                                  style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                                    color: '#0d9488', textDecoration: 'none',
                                    fontWeight: 600, fontSize: '0.8rem',
                                    padding: '0.25em 0.6em', borderRadius: 6,
                                    background: '#f0fdfa',
                                    transition: 'background 0.15s',
                                  }}
                                >
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#0d9488"><path d="M20.47 2H3.53A1.45 1.45 0 002 3.47v17.06A1.45 1.45 0 003.47 22h17.06A1.45 1.45 0 0022 20.53V3.47A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 110-3.12 1.56 1.56 0 010 3.12zM18.91 18.74h-3v-4.26c0-1.08-.02-2.47-1.5-2.47-1.51 0-1.74 1.18-1.74 2.39v4.34h-3v-9h2.88v1.23h.04a3.16 3.16 0 012.85-1.56c3.05 0 3.61 2 3.61 4.61v4.72z"/></svg>
                                  View
                                </a>
                              ) : (
                                <span style={{ color: '#cbd5e1' }}>—</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Tip */}
              {leads.length > 0 && (
                <p style={{
                  textAlign: 'center', fontSize: '0.78rem', color: '#94a3b8',
                  marginTop: '1rem',
                }}>
                  Click any row to see why they were selected
                </p>
              )}
            </div>
          )}

          {/* Footer */}
          <div style={{
            marginTop: '3rem', paddingTop: '1.5rem',
            borderTop: '1px solid #e2e8f0',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            color: '#94a3b8', fontSize: '0.78rem',
          }}>
            <span style={{ fontWeight: 600 }}>Powered by Dooza</span>
            <span>FIN Lead Finder v2</span>
          </div>
        </div>
      </div>
    </>
  );
}

function StatPill({ value, label, color, bg }) {
  return (
    <div style={{
      background: bg, borderRadius: 10,
      padding: '0.5rem 1rem',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      minWidth: 80,
    }}>
      <div style={{ fontSize: '1.2rem', fontWeight: 800, color }}>{value}</div>
      <div style={{ fontSize: '0.65rem', fontWeight: 600, color, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
    </div>
  );
}

const selectStyle = {
  width: '100%',
  padding: '0.65rem 0.85rem',
  border: '1px solid #e2e8f0',
  borderRadius: 10,
  fontSize: '0.88rem',
  color: '#0f172a',
  background: '#ffffff',
  cursor: 'pointer',
  outline: 'none',
  transition: 'border-color 0.15s, box-shadow 0.15s',
};
