'use client';

import { useState } from 'react';

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
    summary: { zone: 'Texas', influencer: 'Andrew Wang', uniqueLeads: 17 },
    leads: [
      {"First Name":"Anne","Last Name":"Coleman","Email Address":"anne_coleman@vanguard.com","Email Status":"verified","Organization":"Vanguard","Title":"Market Director","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/annemcoleman26","Rationale":"As Market Director at Vanguard, one of the largest 401(k) providers, Anne directly oversees regional marketing strategy — a natural partner for Andy Wang's retirement planning content."},
      {"First Name":"Jim","Last Name":"Entwisle","Email Address":"james_entwisle@vanguard.com","Email Status":"verified","Organization":"Vanguard","Title":"Market Director","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/jim-entwisle-cfp%c2%ae-48401158","Rationale":"Jim's role as Market Director at Vanguard with CFP credentials means he understands retirement planning deeply — ideal for co-creating authentic 401(k) content with Andy Wang."},
      {"First Name":"Kyle","Last Name":"Santander","Email Address":"kyle_santander@vanguard.com","Email Status":"verified","Organization":"Vanguard","Title":"Market Director","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/kyle-santander-8645a759","Rationale":"Kyle manages Vanguard's regional market presence in Texas, making him a key decision-maker for local influencer partnerships targeting retirement savers."},
      {"First Name":"Kristina","Last Name":"Alfano","Email Address":"kristina.alfano@fmr.com","Email Status":"verified","Organization":"Fidelity Investments","Title":"Director, Marketing","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/kristinaalfano","Rationale":"As Marketing Director at Fidelity, Kristina controls partnership budgets for one of the top 401(k) providers — a high-value match for Andy Wang's retirement-focused audience."},
      {"First Name":"Jarrett","Last Name":"Hollier","Email Address":"jarrett.hollier@fmr.com","Email Status":"verified","Organization":"Fidelity Investments","Title":"Vice President, Marketing Technology","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/jarretthollier","Rationale":"Jarrett leads marketing technology at Fidelity and would understand the measurable ROI of influencer-driven retirement content campaigns."},
      {"First Name":"Cherrel","Last Name":"Adams","Email Address":"cherrel.adams@fmr.com","Email Status":"verified","Organization":"Fidelity Investments","Title":"Director Marketing Enablement","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/cherrel-adams","Rationale":"Cherrel's marketing enablement role at Fidelity positions her to champion new content channels like influencer partnerships for 401(k) education."},
      {"First Name":"John","Last Name":"Scozzari","Email Address":"john.scozzari@fidelity.com","Email Status":"verified","Organization":"Fidelity Investments","Title":"Director, Marketing Automation","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/john-scozzari-08853266","Rationale":"John manages Fidelity's marketing automation — he can integrate influencer content into existing nurture campaigns targeting retirement plan participants."},
      {"First Name":"James","Last Name":"Wyant","Email Address":"james.wyant@fmr.com","Email Status":"verified","Organization":"Fidelity Investments","Title":"Marketing Director","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/jameswyant","Rationale":"As Marketing Director at Fidelity, James has direct authority over campaign partnerships and brand collaborations in the retirement space."},
      {"First Name":"Amy","Last Name":"Heiss","Email Address":"amy.heiss@schwab.com","Email Status":"verified","Organization":"Charles Schwab","Title":"Director, HR Talent; VP Marketing","Company Group":"Tier 1 — Primary Targets","LinkedIn":"http://www.linkedin.com/in/amyheiss","Rationale":"Amy's dual HR and Marketing VP role at Schwab gives her unique insight into both employer-sponsored retirement plans and marketing strategy — a strong fit for Andy Wang's 401(k) expertise."},
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

const LOADING_STEPS = [
  'Searching target companies in the zone...',
  'Finding decision-makers (VP Marketing, CMO, Partnerships)...',
  'Enriching contacts — getting verified emails...',
  'Deduplicating and formatting results...',
  'Generating rationale for each lead...',
];

export default function FINDemoClient() {
  const [influencer, setInfluencer] = useState('Andrew Wang');
  const [zone, setZone] = useState('Texas');
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [results, setResults] = useState(null);
  const [isCached, setIsCached] = useState(false);
  const [error, setError] = useState(null);

  async function findLeads() {
    setError(null);
    setResults(null);

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
      setLoadingStep(prev => Math.min(prev + 1, LOADING_STEPS.length - 1));
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

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif',
    }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '2.5rem 1.5rem 4rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-block',
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#0d9488',
            background: '#e6fffa',
            padding: '0.3em 0.8em',
            borderRadius: 4,
            marginBottom: '0.7rem',
          }}>
            FIN × Dooza — Demo
          </div>
          <h1 style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '0.35rem',
            lineHeight: 1.2,
          }}>
            Lead Finder
          </h1>
          <p style={{
            color: '#64748b',
            fontSize: '0.95rem',
            maxWidth: '55ch',
            lineHeight: 1.6,
          }}>
            Select an influencer and a geographic zone to find decision-makers at their target companies with verified emails.
          </p>
        </div>

        {/* Info banner */}
        <div style={{
          background: '#f0fdfa',
          border: '1px solid #ccfbf1',
          borderRadius: 8,
          padding: '0.75rem 1rem',
          marginBottom: '1.5rem',
          fontSize: '0.84rem',
          color: '#115e59',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <span style={{ fontSize: '1.1rem' }}>&#9432;</span>
          <span>
            <strong>Demo mode</strong> — Andrew Wang + Texas results are pre-loaded (instant). Other combinations search the top 3 target companies live.
          </span>
        </div>

        {/* Controls */}
        <div style={{
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: 12,
          padding: '1.5rem',
          marginBottom: '1.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr auto',
            gap: '1rem',
            alignItems: 'end',
          }}>
            <div>
              <label style={{
                display: 'block',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#475569',
                letterSpacing: '0.03em',
                marginBottom: '0.4rem',
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
                display: 'block',
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#475569',
                letterSpacing: '0.03em',
                marginBottom: '0.4rem',
              }}>
                Zone (US State) <span style={{ fontWeight: 400, color: '#94a3b8' }}>— optional</span>
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
                padding: '0.6rem 1.5rem',
                border: 'none',
                borderRadius: 8,
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: loading ? 'not-allowed' : 'pointer',
                background: loading ? '#94a3b8' : '#0d9488',
                color: '#ffffff',
                whiteSpace: 'nowrap',
                transition: 'background 0.15s',
              }}
            >
              {loading ? 'Searching...' : 'Find Leads'}
            </button>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
            <div style={{
              width: 36,
              height: 36,
              border: '3px solid #e6fffa',
              borderTopColor: '#0d9488',
              borderRadius: '50%',
              animation: 'fin-spin 0.7s linear infinite',
              margin: '0 auto 1rem',
            }} />
            <p style={{ color: '#334155', fontSize: '0.95rem', fontWeight: 500 }}>
              Finding decision-makers...
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.82rem', marginTop: '0.3rem' }}>
              {LOADING_STEPS[loadingStep]}
            </p>
            <style>{`@keyframes fin-spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}

        {/* Error */}
        {error && (
          <div style={{
            background: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: 8,
            padding: '1rem 1.2rem',
            color: '#dc2626',
            fontSize: '0.88rem',
          }}>
            Something went wrong: {error}. Please try again.
          </div>
        )}

        {/* Results */}
        {results && (
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a' }}>
                {results.summary?.influencer} — {results.summary?.zone || 'Nationwide'}
                {isCached && (
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    background: '#fef3c7',
                    color: '#b45309',
                    padding: '0.2em 0.6em',
                    borderRadius: 4,
                    marginLeft: '0.6rem',
                    verticalAlign: 'middle',
                  }}>
                    Pre-loaded demo
                  </span>
                )}
              </h2>
              <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                <span style={{
                  display: 'inline-block',
                  background: '#e6fffa',
                  color: '#0d9488',
                  padding: '0.2em 0.6em',
                  borderRadius: 4,
                  fontWeight: 600,
                }}>
                  {results.leads?.length || 0} leads
                </span>
                {' '}found
              </div>
            </div>

            <div style={{
              overflowX: 'auto',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 12,
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.82rem',
              }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                    {['#', 'Name', 'Email', 'Status', 'Title', 'Organization', 'Tier', 'Why This Lead', 'LinkedIn'].map(h => (
                      <th key={h} style={{
                        textAlign: 'left',
                        padding: '0.7rem 0.8rem',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: '#64748b',
                        whiteSpace: 'nowrap',
                      }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(results.leads || []).map((lead, i) => {
                    const tier = lead['Company Group'] || '';
                    const tierColor = tier.includes('Tier 1')
                      ? { bg: '#e6fffa', color: '#0d9488' }
                      : tier.includes('Tier 2')
                        ? { bg: '#eef2ff', color: '#4f46e5' }
                        : { bg: '#fef3c7', color: '#b45309' };
                    const tierShort = tier
                      .replace(' — Primary Targets', '')
                      .replace(' — Strategic Growth', '')
                      .replace(' — Opportunity Brands', '');
                    const verified = (lead['Email Status'] || '').toLowerCase() === 'verified';
                    const linkedin = lead['LinkedIn'] || lead['LinkedIn URL'] || '';

                    return (
                      <tr key={i} style={{ borderBottom: '1px solid #f1f5f9' }}>
                        <td style={{ padding: '0.6rem 0.8rem', color: '#94a3b8' }}>{i + 1}</td>
                        <td style={{ padding: '0.6rem 0.8rem', fontWeight: 600, color: '#0f172a' }}>
                          {lead['First Name']} {lead['Last Name']}
                        </td>
                        <td style={{
                          padding: '0.6rem 0.8rem',
                          fontFamily: 'monospace',
                          fontSize: '0.78rem',
                          color: '#334155',
                        }}>
                          {lead['Email Address']}
                        </td>
                        <td style={{ padding: '0.6rem 0.8rem' }}>
                          <span style={{
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            color: verified ? '#0d9488' : '#b45309',
                          }}>
                            {verified ? 'Verified' : (lead['Email Status'] || '—')}
                          </span>
                        </td>
                        <td style={{ padding: '0.6rem 0.8rem', color: '#475569', maxWidth: 220 }}>
                          {lead['Title']}
                        </td>
                        <td style={{ padding: '0.6rem 0.8rem', color: '#475569' }}>
                          {lead['Organization']}
                        </td>
                        <td style={{ padding: '0.6rem 0.8rem' }}>
                          <span style={{
                            display: 'inline-block',
                            fontSize: '0.68rem',
                            fontWeight: 600,
                            padding: '0.15em 0.5em',
                            borderRadius: 4,
                            background: tierColor.bg,
                            color: tierColor.color,
                            whiteSpace: 'nowrap',
                          }}>
                            {tierShort}
                          </span>
                        </td>
                        <td style={{
                          padding: '0.6rem 0.8rem',
                          color: '#475569',
                          fontSize: '0.78rem',
                          maxWidth: 260,
                          lineHeight: 1.45,
                        }}>
                          {lead['Rationale'] || '—'}
                        </td>
                        <td style={{ padding: '0.6rem 0.8rem' }}>
                          {linkedin ? (
                            <a
                              href={linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: '#0d9488',
                                textDecoration: 'none',
                                fontWeight: 600,
                                fontSize: '0.8rem',
                              }}
                            >
                              View
                            </a>
                          ) : '—'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#94a3b8',
          fontSize: '0.78rem',
        }}>
          <span>Powered by Dooza</span>
          <span>FIN Lead Finder v2</span>
        </div>
      </div>
    </div>
  );
}

const selectStyle = {
  width: '100%',
  padding: '0.6rem 0.8rem',
  border: '1px solid #e2e8f0',
  borderRadius: 8,
  fontSize: '0.88rem',
  color: '#0f172a',
  background: '#ffffff',
  cursor: 'pointer',
  outline: 'none',
};
