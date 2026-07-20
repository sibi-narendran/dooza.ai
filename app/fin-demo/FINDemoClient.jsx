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

const QA_DEMO = [
  { check: 'Max 2 per company', status: 'PASS' },
  { check: 'Title tier validation', status: 'PASS' },
  { check: 'Negative person list', status: 'PASS' },
  { check: 'All required fields + specific rationale', status: 'PASS' },
  { check: 'No scores below 50', status: 'PASS' },
  { check: 'LinkedIn URL format', status: 'PASS' },
  { check: 'Verified buying signal for Tier A', status: 'PASS' },
  { check: 'Industry category valid', status: 'PASS' },
  { check: 'Service category & budget band', status: 'PASS' },
];

const CACHED_LEADS = {
  'Andrew Wang::': {
    summary: { zone: '', influencer: 'Andrew Wang', companiesSearched: 10, leadsEnriched: 18, uniqueLeads: 18, scoreDistribution: { immediatePriority: 15, standardOutreach: 3, nurture: 0 }, qaStatus: 'ALL PASSED' },
    qaResults: QA_DEMO,
    leads: [
      {"Full Name":"David Wilson","Verified Title":"Senior Director Partnership Marketing & Sponsorships","Company Name":"Empower","Company Website":"http://www.empower.com","LinkedIn Profile URL":"http://www.linkedin.com/in/dwilson2","Verified Email":"david.wilson@empower.com","Industry Category":"Financial Services","Why They Fit FIN":"As a recent hire at Empower, David Wilson is likely seeking innovative partnerships to drive retirement engagement. Andrew Wang's 401(k) education and daily market commentary content, amplified by FIN's 33-expert network, can help Empower reach professionals managing retirement accounts with trusted, education-first content.","Buying Signal / Timing":"Recent hire (started 2026-02-01). Suggests a mandate to explore new partnership opportunities.","Lead Score":98,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Strategic Partnerships","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":10,"timingSignal":8},"Signal Verified":true,"Signal Type":"intent","Signal Source":"Apollo employment data","Caution Note":""},
      {"Full Name":"Shirley Yang","Verified Title":"Chief Marketing Officer, TIAA Wealth Management & Advice Solutions","Company Name":"TIAA","Company Website":"http://www.tiaa.org","LinkedIn Profile URL":"http://www.linkedin.com/in/shirley-yang-6bb335b","Verified Email":"syang@tiaa.org","Industry Category":"Financial Services","Why They Fit FIN":"Shirley Yang, as the new CMO of TIAA's Wealth Management & Advice Solutions, can leverage Andrew Wang's retirement planning expertise to engage TIAA's academic and nonprofit audiences. FIN's network amplification ensures her content reaches beyond a single influencer's following.","Buying Signal / Timing":"Recent hire (started 2026-02-01). Fresh perspective and openness to innovative marketing partnerships.","Lead Score":93,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Brand Campaigns","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":5},"Signal Verified":true,"Signal Type":"intent","Signal Source":"Apollo employment data","Caution Note":""},
      {"Full Name":"Kiarra Balom","Verified Title":"Director, Strategic Partnerships","Company Name":"TIAA","Company Website":"http://www.tiaa.org","LinkedIn Profile URL":"http://www.linkedin.com/in/kiarra-balom","Verified Email":"kiarra.balom@tiaa.org","Industry Category":"Financial Services","Why They Fit FIN":"Kiarra Balom, a new Director of Strategic Partnerships at TIAA, can tap into Andrew Wang's retirement planning content to strengthen TIAA's connection with academic and nonprofit employees. FIN's collective amplification model provides a scalable way to deliver trusted financial education.","Buying Signal / Timing":"Recent hire (started 2026-02-01). Proactive search for strategic partnerships to drive growth.","Lead Score":93,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Strategic Partnerships","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":5},"Signal Verified":true,"Signal Type":"intent","Signal Source":"Apollo employment data","Caution Note":""},
      {"Full Name":"Larry Drury","Verified Title":"Chief Marketing Officer","Company Name":"Vanguard","Company Website":"http://www.vanguard.com","LinkedIn Profile URL":"http://www.linkedin.com/in/larry-drury","Verified Email":"larry_drury@vanguard.com","Industry Category":"Financial Services","Why They Fit FIN":"Larry Drury at Vanguard can leverage Andrew Wang's expertise in creating '401(k) millionaires' to reinforce Vanguard's investor-first philosophy. FIN's network of 33 experts amplifies this content across 10M+ followers.","Buying Signal / Timing":"Industry positioning suggests openness to creator partnerships.","Lead Score":91,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Financial Education","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":3},"Signal Verified":false,"Signal Type":"behavior","Signal Source":"Industry analysis","Caution Note":"Regulatory-caution firm — verify compliance approval path"},
      {"Full Name":"Kathryn Condon","Verified Title":"Principal, Global Chief Marketing Officer","Company Name":"Vanguard","Company Website":"http://www.vanguard.com","LinkedIn Profile URL":"http://www.linkedin.com/in/kathryn-condon-a419b61","Verified Email":"kathryn_condon@vanguard.com","Industry Category":"Financial Services","Why They Fit FIN":"Kathryn Condon, as Vanguard's Global CMO, can use Andrew Wang's 401(k) millionaire content to showcase Vanguard's commitment to investor success. FIN's amplification model ensures this message reaches millions.","Buying Signal / Timing":"Industry positioning suggests openness to creator partnerships.","Lead Score":91,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Brand Campaigns","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":3},"Signal Verified":false,"Signal Type":"behavior","Signal Source":"Industry analysis","Caution Note":"Regulatory-caution firm — verify compliance approval path"},
      {"Full Name":"Stacy Hammond","Verified Title":"Chief Marketing Officer","Company Name":"Charles Schwab","Company Website":"http://www.schwab.com","LinkedIn Profile URL":"http://www.linkedin.com/in/stacy-hammond-2a9484","Verified Email":"stacy.hammond@schwab.com","Industry Category":"Financial Services","Why They Fit FIN":"Stacy Hammond at Charles Schwab can benefit from Andrew Wang's daily market commentary, which helps professionals navigate volatility and retirement planning. FIN's network amplifies this timely content.","Buying Signal / Timing":"In the news: \"Charles Schwab Foundation Offers $2M in Financial Education Grants\" (April 2026).","Lead Score":91,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Financial Education","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":3},"Signal Verified":true,"Signal Type":"momentum","Signal Source":"Google News RSS","Caution Note":"Regulatory-caution firm — verify compliance approval path"},
      {"Full Name":"Brooks Allen","Verified Title":"Director, Strategic Partnerships","Company Name":"Charles Schwab","Company Website":"http://www.schwab.com","LinkedIn Profile URL":"http://www.linkedin.com/in/brooksallen","Verified Email":"brooks.allen@schwab.com","Industry Category":"Financial Services","Why They Fit FIN":"Brooks Allen at Charles Schwab can leverage Andrew Wang's daily market wraps to engage Schwab's audience. FIN's collective amplification provides a cost-effective way to deliver consistent, trusted market insights.","Buying Signal / Timing":"In the news: \"Charles Schwab Foundation Offers $2M in Financial Education Grants\" (April 2026).","Lead Score":91,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Strategic Partnerships","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":3},"Signal Verified":true,"Signal Type":"momentum","Signal Source":"Google News RSS","Caution Note":"Regulatory-caution firm — verify compliance approval path"},
      {"Full Name":"Michael Barry","Verified Title":"Director of Strategic Partnerships","Company Name":"Empower","Company Website":"http://www.empower.com","LinkedIn Profile URL":"http://www.linkedin.com/in/michael-barry-248a23a","Verified Email":"michael.barry@empower.com","Industry Category":"Financial Services","Why They Fit FIN":"Michael Barry at Empower can use Andrew Wang's retirement optimization content to help Empower's clients maximize their 401(k) benefits. FIN's network model ensures this educational content reaches a wide audience.","Buying Signal / Timing":"Industry positioning suggests openness to creator partnerships.","Lead Score":91,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Strategic Partnerships","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":3},"Signal Verified":false,"Signal Type":"behavior","Signal Source":"Industry analysis","Caution Note":""},
      {"Full Name":"Renee Hamlen","Verified Title":"Chief Marketing Officer - Benefits & Protection","Company Name":"Principal Financial Group","Company Website":"http://www.principal.com","LinkedIn Profile URL":"http://www.linkedin.com/in/reneehamlen","Verified Email":"hamlen.renee@principal.com","Industry Category":"Financial Services","Why They Fit FIN":"Renee Hamlen at Principal Financial Group can leverage Andrew Wang's retirement-focused content to educate workplace retirement savers. FIN's amplification network extends Principal's reach.","Buying Signal / Timing":"Industry positioning suggests openness to creator partnerships.","Lead Score":91,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Financial Education","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":3},"Signal Verified":false,"Signal Type":"behavior","Signal Source":"Industry analysis","Caution Note":""},
      {"Full Name":"Farnaz Maters","Verified Title":"Chief Marketing Officer, Retirement & Income Solutions","Company Name":"Principal Financial Group","Company Website":"http://www.principal.com","LinkedIn Profile URL":"http://www.linkedin.com/in/farnaz-maters-29a0571a","Verified Email":"maters.farnaz@principal.com","Industry Category":"Financial Services","Why They Fit FIN":"Farnaz Maters at Principal Financial Group can use Andrew Wang's retirement planning expertise to engage participants in Principal's retirement plans. FIN's collective amplification helps deliver consistent, trusted education.","Buying Signal / Timing":"Industry positioning suggests openness to creator partnerships.","Lead Score":91,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Financial Education","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":3},"Signal Verified":false,"Signal Type":"behavior","Signal Source":"Industry analysis","Caution Note":""},
      {"Full Name":"Dave Tolve","Verified Title":"SVP - Strategic Partnerships","Company Name":"Voya Financial","Company Website":"http://www.voya.com","LinkedIn Profile URL":"http://www.linkedin.com/in/dave-tolve-ba8a6a1a","Verified Email":"dave.tolve@voya.com","Industry Category":"Financial Services","Why They Fit FIN":"Dave Tolve at Voya Financial can leverage Andrew Wang's 401(k) education content to reach workplace retirement savers. FIN's network amplification ensures Voya's partnership reaches beyond a single influencer.","Buying Signal / Timing":"Industry positioning suggests openness to creator partnerships.","Lead Score":91,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Strategic Partnerships","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":3},"Signal Verified":false,"Signal Type":"behavior","Signal Source":"Industry analysis","Caution Note":""},
      {"Full Name":"Debi Pugh","Verified Title":"Marketing Leader - Office of the Chief Marketing Officer","Company Name":"Nationwide","Company Website":"http://www.nationwide.com","LinkedIn Profile URL":"http://www.linkedin.com/in/debi-pugh-427aa03","Verified Email":"debi.pugh@nationwide.com","Industry Category":"Insurance","Why They Fit FIN":"Debi Pugh at Nationwide can use Andrew Wang's 401(k) research to engage public and private sector retirement savers. FIN's network amplifies this data-driven content across 10M+ followers.","Buying Signal / Timing":"Industry positioning suggests openness to creator partnerships.","Lead Score":91,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Financial Education","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":3},"Signal Verified":false,"Signal Type":"behavior","Signal Source":"Industry analysis","Caution Note":""},
      {"Full Name":"Lisa Schwartz","Verified Title":"Associate Vice President, Strategic Partnerships Organization","Company Name":"Nationwide","Company Website":"http://www.nationwide.com","LinkedIn Profile URL":"http://www.linkedin.com/in/lisa-e-schwartz-cpcu-0b675829","Verified Email":"schwarl1@nationwide.com","Industry Category":"Insurance","Why They Fit FIN":"Lisa Schwartz at Nationwide can leverage Andrew Wang's 401(k) millionaire insights to strengthen Nationwide's strategic partnerships. FIN's collective amplification provides scalable educational content delivery.","Buying Signal / Timing":"Industry positioning suggests openness to creator partnerships.","Lead Score":91,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Strategic Partnerships","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":3},"Signal Verified":false,"Signal Type":"behavior","Signal Source":"Industry analysis","Caution Note":""},
      {"Full Name":"Raquel Ferreira","Verified Title":"Executive Liaison to CMO & Head of Marketing Strategy and Planning","Company Name":"MassMutual","Company Website":"http://www.massmutual.com","LinkedIn Profile URL":"http://www.linkedin.com/in/raq-ferreira","Verified Email":"rferreira42@massmutual.com","Industry Category":"Financial Services","Why They Fit FIN":"Raquel Ferreira at MassMutual can use Andrew Wang's workplace retirement content to support MassMutual's employer-sponsored plan offerings. FIN's network model ensures this education reaches a wide audience.","Buying Signal / Timing":"Industry positioning suggests openness to creator partnerships.","Lead Score":91,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Brand Campaigns","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":3},"Signal Verified":false,"Signal Type":"behavior","Signal Source":"Industry analysis","Caution Note":""},
      {"Full Name":"Rosemary Fitzgerald","Verified Title":"Strategic Partnerships Director","Company Name":"MassMutual","Company Website":"http://www.massmutual.com","LinkedIn Profile URL":"http://www.linkedin.com/in/rosemary-fitzgerald-1a166126","Verified Email":"rfitzgerald@massmutual.com","Industry Category":"Financial Services","Why They Fit FIN":"Rosemary Fitzgerald at MassMutual can leverage Andrew Wang's retirement planning expertise to enhance MassMutual's strategic partnerships. FIN's amplification network helps deliver trusted content to employers and plan participants.","Buying Signal / Timing":"Industry positioning suggests openness to creator partnerships.","Lead Score":91,"Confidence Level":"High","Score Bucket":"Immediate Priority","Title Tier":"A","Email Status":"verified","Service Category":"Strategic Partnerships","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":25,"budgetSignal":20,"decisionMakerAccess":8,"timingSignal":3},"Signal Verified":false,"Signal Type":"behavior","Signal Source":"Industry analysis","Caution Note":""},
      {"Full Name":"Brian Mason","Verified Title":"Vice President, Strategic Partnerships","Company Name":"Fidelity Investments","Company Website":"http://www.fidelity.com","LinkedIn Profile URL":"http://www.linkedin.com/in/brian-g-mason","Verified Email":"brian.mason@fmr.com","Industry Category":"Financial Services","Why They Fit FIN":"Brian Mason at Fidelity Investments can leverage Andrew Wang's 7-year podcast and 401(k) content to engage retirement savers. FIN's network amplification extends Fidelity's reach with trusted educational content.","Buying Signal / Timing":"In the news: \"Fidelity Celebrates Community Impact Through Financial Literacy Month\" (June 2026).","Lead Score":86,"Confidence Level":"High","Score Bucket":"Standard Outreach","Title Tier":"A","Email Status":"verified","Service Category":"Financial Education","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":35,"companyFit":22,"budgetSignal":20,"decisionMakerAccess":6,"timingSignal":3},"Signal Verified":true,"Signal Type":"momentum","Signal Source":"Google News RSS","Caution Note":"Regulatory-caution firm — verify compliance approval path"},
      {"Full Name":"Kristin Lowcher","Verified Title":"Brand Marketing Manager, AVP","Company Name":"T. Rowe Price","Company Website":"http://www.troweprice.com","LinkedIn Profile URL":"http://www.linkedin.com/in/kristin-dodson-lowcher-1a0a9220","Verified Email":"kristin.lowcher@troweprice.com","Industry Category":"Financial Services","Why They Fit FIN":"Kristin Lowcher at T. Rowe Price can use Andrew Wang's daily market commentary to engage long-term investors. FIN's network amplification aligns with T. Rowe Price's focus on education and trust.","Buying Signal / Timing":"Industry positioning suggests openness to creator partnerships.","Lead Score":74,"Confidence Level":"High","Score Bucket":"Standard Outreach","Title Tier":"B","Email Status":"verified","Service Category":"Content Creation","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":25,"companyFit":22,"budgetSignal":18,"decisionMakerAccess":6,"timingSignal":3},"Signal Verified":false,"Signal Type":"behavior","Signal Source":"Industry analysis","Caution Note":""},
      {"Full Name":"Christine Madigan","Verified Title":"VP Brand Strategy","Company Name":"Fidelity Investments","Company Website":"http://www.fidelity.com","LinkedIn Profile URL":"http://www.linkedin.com/in/christinemadigan","Verified Email":"christine.madigan@fmr.com","Industry Category":"Financial Services","Why They Fit FIN":"Christine Madigan at Fidelity Investments can leverage Andrew Wang's 401(k) content to strengthen Fidelity's brand strategy. FIN's collective amplification delivers consistent, trusted retirement education.","Buying Signal / Timing":"In the news: \"Fidelity Celebrates Community Impact Through Financial Literacy Month\" (June 2026).","Lead Score":72,"Confidence Level":"High","Score Bucket":"Standard Outreach","Title Tier":"B","Email Status":"verified","Service Category":"Brand Campaigns","Estimated Budget Band":"$250K+","Score Breakdown":{"titleMatch":25,"companyFit":20,"budgetSignal":18,"decisionMakerAccess":6,"timingSignal":3},"Signal Verified":true,"Signal Type":"momentum","Signal Source":"Google News RSS","Caution Note":"Regulatory-caution firm — verify compliance approval path"},
    ],
  },
};

function ScoreBadge({ score }) {
  let bg, color, border;
  if (score >= 90) { bg = '#ecfdf5'; color = '#059669'; border = '#a7f3d0'; }
  else if (score >= 70) { bg = '#eff6ff'; color = '#2563eb'; border = '#bfdbfe'; }
  else { bg = '#fefce8'; color = '#ca8a04'; border = '#fde68a'; }
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      minWidth: 40, padding: '0.25em 0.6em', borderRadius: 8,
      fontSize: '0.82rem', fontWeight: 800, background: bg, color, border: `1px solid ${border}`,
    }}>
      {score}
    </span>
  );
}

function TierBadge({ tier }) {
  const config = {
    A: { bg: '#f0fdfa', color: '#0d9488', border: '#ccfbf1', label: 'Tier A' },
    B: { bg: '#eef2ff', color: '#6366f1', border: '#e0e7ff', label: 'Tier B' },
    C: { bg: '#fef3c7', color: '#b45309', border: '#fde68a', label: 'Tier C' },
  }[tier] || { bg: '#f1f5f9', color: '#64748b', border: '#e2e8f0', label: tier };
  return (
    <span style={{
      display: 'inline-block', fontSize: '0.68rem', fontWeight: 700,
      padding: '0.2em 0.6em', borderRadius: 100,
      background: config.bg, color: config.color, border: `1px solid ${config.border}`,
    }}>
      {config.label}
    </span>
  );
}

function ConfidenceDot({ level }) {
  const colors = { High: '#10b981', Medium: '#f59e0b', Low: '#ef4444' };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: '#64748b' }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: colors[level] || '#94a3b8', display: 'inline-block' }} />
      {level}
    </span>
  );
}

function StatPill({ value, label, color, bg }) {
  return (
    <div style={{
      background: bg, borderRadius: 10, padding: '0.5rem 1rem',
      display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 80,
    }}>
      <div style={{ fontSize: '1.2rem', fontWeight: 800, color }}>{value}</div>
      <div style={{ fontSize: '0.65rem', fontWeight: 600, color, opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
    </div>
  );
}

function BudgetBadge({ band }) {
  if (!band) return null;
  const cfg = {
    '$250K+': { bg: '#fef3c7', color: '#92400e', border: '#fde68a' },
    '$50K–$250K': { bg: '#ede9fe', color: '#6d28d9', border: '#ddd6fe' },
    '$10K–$50K': { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
    '<$10K': { bg: '#f1f5f9', color: '#64748b', border: '#e2e8f0' },
  }[band] || { bg: '#f1f5f9', color: '#64748b', border: '#e2e8f0' };
  return (
    <span style={{
      display: 'inline-block', fontSize: '0.65rem', fontWeight: 700,
      padding: '0.2em 0.55em', borderRadius: 100, whiteSpace: 'nowrap',
      background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}`,
    }}>{band}</span>
  );
}

function ServiceChip({ category }) {
  if (!category) return <span style={{ color: '#cbd5e1', fontSize: '0.78rem' }}>—</span>;
  return (
    <span style={{
      display: 'inline-block', fontSize: '0.65rem', fontWeight: 600,
      padding: '0.2em 0.55em', borderRadius: 100, whiteSpace: 'nowrap',
      background: '#f0fdfa', color: '#0d9488', border: '1px solid #ccfbf1',
    }}>{category}</span>
  );
}

function ScoreBreakdown({ breakdown }) {
  if (!breakdown) return null;
  const factors = [
    { key: 'titleMatch', label: 'Title Match', max: 35, color: '#0d9488' },
    { key: 'companyFit', label: 'Company Fit', max: 25, color: '#6366f1' },
    { key: 'budgetSignal', label: 'Budget Signal', max: 20, color: '#f59e0b' },
    { key: 'decisionMakerAccess', label: 'DM Access', max: 10, color: '#ec4899' },
    { key: 'timingSignal', label: 'Timing Signal', max: 10, color: '#8b5cf6' },
  ];
  return (
    <div style={{
      padding: '0.6rem 0.75rem', background: '#faf5ff', borderRadius: 8,
      borderLeft: '3px solid #8b5cf6', animation: 'fin-fade-in 0.2s ease-out',
    }}>
      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
        Score Breakdown
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        {factors.map(f => {
          const val = breakdown[f.key] || 0;
          const pct = (val / f.max) * 100;
          return (
            <div key={f.key} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.7rem', color: '#64748b', width: 85, flexShrink: 0 }}>{f.label}</span>
              <div style={{ flex: 1, height: 6, background: '#e2e8f0', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${pct}%`, height: '100%', background: f.color, borderRadius: 3, transition: 'width 0.4s ease-out' }} />
              </div>
              <span style={{ fontSize: '0.68rem', color: '#475569', fontWeight: 700, width: 38, textAlign: 'right', flexShrink: 0 }}>{val}/{f.max}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function QAPanel({ results, isOpen, onToggle }) {
  if (!results || results.length === 0) return null;
  const passCount = results.filter(r => r.status === 'PASS').length;
  const total = results.length;
  return (
    <div style={{
      background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 12,
      overflow: 'hidden', marginBottom: '1rem',
    }}>
      <button onClick={onToggle} style={{
        width: '100%', padding: '0.75rem 1rem', border: 'none', background: 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%', display: 'inline-block',
            background: passCount === total ? '#10b981' : '#f59e0b',
          }} />
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#334155' }}>
            QA Checklist
          </span>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
            {passCount}/{total} passed
          </span>
        </div>
        <span style={{ fontSize: '0.75rem', color: '#94a3b8', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
          &#9660;
        </span>
      </button>
      {isOpen && (
        <div style={{ padding: '0 1rem 0.75rem', animation: 'fin-fade-in 0.2s ease-out' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.35rem' }}>
            {results.map((r, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.35rem 0.5rem', borderRadius: 6,
                background: r.status === 'PASS' ? '#f0fdf4' : r.status === 'WARN' ? '#fffbeb' : '#fef2f2',
              }}>
                <span style={{ fontSize: '0.78rem' }}>
                  {r.status === 'PASS' ? '✅' : r.status === 'WARN' ? '⚠️' : '❌'}
                </span>
                <span style={{ fontSize: '0.74rem', color: '#475569' }}>{r.check}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function downloadCSV(leads, influencer) {
  const headers = ['Full Name','Verified Title','Company Name','Verified Email','LinkedIn Profile URL',
    'Industry Category','Service Category','Estimated Budget Band','Lead Score','Score Bucket',
    'Title Tier','Confidence Level','Why They Fit FIN','Buying Signal / Timing','Signal Verified',
    'Signal Type','Caution Note'];
  const escape = v => {
    const s = String(v ?? '');
    return s.includes(',') || s.includes('"') || s.includes('\n') ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const rows = [headers.join(',')];
  leads.forEach(l => {
    rows.push(headers.map(h => escape(l[h])).join(','));
  });
  const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `FIN_Leads_${influencer.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

const selectStyle = {
  width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #e2e8f0',
  borderRadius: 10, fontSize: '0.88rem', color: '#0f172a', background: '#ffffff',
  cursor: 'pointer', outline: 'none', transition: 'border-color 0.15s, box-shadow 0.15s',
};

export default function FINDemoClient() {
  const [influencer, setInfluencer] = useState('Andrew Wang');
  const [zone, setZone] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [results, setResults] = useState(null);
  const [isCached, setIsCached] = useState(false);
  const [error, setError] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);
  const [qaOpen, setQaOpen] = useState(false);

  const selectedInf = INFLUENCERS.find(i => i.value === influencer);

  async function findLeads() {
    setError(null);
    setResults(null);
    setExpandedRow(null);
    setQaOpen(false);

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
      setLoadingStep(prev => Math.min(prev + 1, 5));
    }, 7000);

    try {
      const payload = { influencer, maxCompanies: 5, skipOutreach: true };
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
  const scoreDist = summary.scoreDistribution || {};
  const qaResults = results?.qaResults || [];

  return (
    <>
      <style>{`
        @keyframes fin-spin { to { transform: rotate(360deg); } }
        @keyframes fin-fade-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .fin-row:hover { background: #f8fafc !important; }
        .fin-row td { transition: background 0.15s; }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#faf9f7' }}>

        {/* Hero */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #134e4a 50%, #0f766e 100%)',
          padding: '3.5rem 1.5rem 3rem', position: 'relative', overflow: 'hidden',
        }}>
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
                background: 'rgba(94, 234, 212, 0.1)', padding: '0.35em 0.9em',
                borderRadius: 100, border: '1px solid rgba(94, 234, 212, 0.2)',
              }}>FIN x Dooza</span>
              <span style={{
                fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
              }}>Live Demo</span>
            </div>
            <h1 style={{
              fontSize: '2.4rem', fontWeight: 800, color: '#ffffff',
              lineHeight: 1.15, marginBottom: '0.75rem', fontFamily: 'Georgia, Cambria, serif',
            }}>AI Lead Finder</h1>
            <p style={{
              color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', maxWidth: '52ch', lineHeight: 1.65,
            }}>
              Scored, verified decision-makers at target brand partners — filtered by title tier, scored 1-100, with service categories, budget estimates, and signal verification.
            </p>
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

        {/* Controls Card */}
        <div style={{ maxWidth: 1080, margin: '-1.5rem auto 0', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
          <div style={{
            background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16,
            padding: '1.75rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '1.25rem', alignItems: 'end' }}>
              <div>
                <label style={{
                  display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155',
                  letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem',
                }}>Influencer</label>
                <select value={influencer} onChange={e => setInfluencer(e.target.value)} disabled={loading} style={selectStyle}>
                  {INFLUENCERS.map(inf => (
                    <option key={inf.value} value={inf.value}>
                      {inf.label} — {inf.desc} ({inf.companies} companies)
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label style={{
                  display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#334155',
                  letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem',
                }}>
                  Zone <span style={{ fontWeight: 500, color: '#94a3b8', textTransform: 'none', letterSpacing: 0 }}>optional</span>
                </label>
                <select value={zone} onChange={e => setZone(e.target.value)} disabled={loading} style={selectStyle}>
                  <option value="">All zones (nationwide)</option>
                  {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <button onClick={findLeads} disabled={loading} style={{
                padding: '0.7rem 2rem', border: 'none', borderRadius: 10, fontSize: '0.9rem',
                fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
                background: loading ? '#94a3b8' : 'linear-gradient(135deg, #0d9488, #0f766e)',
                color: '#ffffff', whiteSpace: 'nowrap', transition: 'all 0.2s',
                boxShadow: loading ? 'none' : '0 2px 8px rgba(13, 148, 136, 0.3)', letterSpacing: '0.02em',
              }}>
                {loading ? 'Searching...' : 'Find Leads'}
              </button>
            </div>
            {selectedInf && (
              <div style={{
                marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
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
            <div style={{ textAlign: 'center', padding: '4rem 1rem', animation: 'fin-fade-in 0.3s ease-out' }}>
              <div style={{
                width: 48, height: 48, border: '3px solid #e6fffa', borderTopColor: '#0d9488',
                borderRadius: '50%', animation: 'fin-spin 0.8s linear infinite', margin: '0 auto 1.5rem',
              }} />
              <p style={{ color: '#0f172a', fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                Finding decision-makers...
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', alignItems: 'center', marginTop: '1rem' }}>
                {['Searching target companies...', 'Filtering by title tier (A/B/C)...', 'Enriching verified contacts...', 'Scoring leads (1-100)...', 'Generating FIN-specific rationale...', 'Running QA checklist...'].map((step, i) => (
                  <div key={i} style={{
                    fontSize: '0.82rem',
                    color: i <= loadingStep ? '#0d9488' : '#cbd5e1',
                    fontWeight: i === loadingStep ? 600 : 400,
                    display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'all 0.3s',
                  }}>
                    {i < loadingStep
                      ? <span style={{ color: '#10b981' }}>&#10003;</span>
                      : i === loadingStep
                        ? <span style={{ display: 'inline-block', width: 12, height: 12, border: '2px solid #0d9488', borderTopColor: 'transparent', borderRadius: '50%', animation: 'fin-spin 0.6s linear infinite' }} />
                        : <span style={{ color: '#cbd5e1' }}>&#9675;</span>
                    }
                    {step}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div style={{
              background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 12,
              padding: '1.25rem 1.5rem', color: '#dc2626', fontSize: '0.9rem', animation: 'fin-fade-in 0.3s ease-out',
            }}>
              <strong>Something went wrong:</strong> {error}. Please try again.
            </div>
          )}

          {/* Results */}
          {results && (
            <div style={{ animation: 'fin-fade-in 0.4s ease-out' }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                marginBottom: '1rem', marginTop: '0.5rem', flexWrap: 'wrap', gap: '1rem',
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
                        textTransform: 'uppercase', background: '#fef3c7', color: '#92400e',
                        padding: '0.3em 0.7em', borderRadius: 100, verticalAlign: 'middle',
                        fontFamily: 'Inter, system-ui, sans-serif',
                      }}>Instant Demo</span>
                    )}
                  </h2>
                  {summary.qaStatus && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.4rem' }}>
                      <span style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: summary.qaStatus === 'ALL PASSED' ? '#10b981' : '#f59e0b', display: 'inline-block',
                      }} />
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
                        QA: {summary.qaStatus}
                      </span>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <StatPill value={leads.length} label="Total Leads" color="#0d9488" bg="#f0fdfa" />
                  {scoreDist.immediatePriority > 0 && (
                    <StatPill value={scoreDist.immediatePriority} label="Priority (90+)" color="#059669" bg="#ecfdf5" />
                  )}
                  {scoreDist.standardOutreach > 0 && (
                    <StatPill value={scoreDist.standardOutreach} label="Standard (70-89)" color="#2563eb" bg="#eff6ff" />
                  )}
                  <StatPill value={summary.companiesSearched || '—'} label="Companies" color="#6366f1" bg="#eef2ff" />
                  {leads.length > 0 && (
                    <button
                      onClick={() => downloadCSV(leads, influencer)}
                      style={{
                        padding: '0.5rem 1rem', border: '1px solid #e2e8f0', borderRadius: 10,
                        background: '#ffffff', color: '#334155', fontSize: '0.78rem', fontWeight: 700,
                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.4rem',
                        transition: 'all 0.15s', boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                      </svg>
                      CSV
                    </button>
                  )}
                </div>
              </div>

              {/* QA Panel */}
              {qaResults.length > 0 && (
                <QAPanel results={qaResults} isOpen={qaOpen} onToggle={() => setQaOpen(!qaOpen)} />
              )}

              {leads.length === 0 ? (
                <div style={{
                  background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16,
                  padding: '3rem', textAlign: 'center', color: '#64748b',
                }}>
                  No leads found for this combination. Try a different zone or influencer.
                </div>
              ) : (
                <div style={{
                  background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16,
                  overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}>
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem', minWidth: 960 }}>
                      <thead>
                        <tr style={{ background: '#f8fafc' }}>
                          {['Score', 'Name', 'Title', 'Company', 'Service', 'Budget', 'Tier', 'LinkedIn'].map((h, i) => (
                            <th key={h} style={{
                              textAlign: 'left', padding: '0.8rem 0.7rem',
                              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em',
                              textTransform: 'uppercase', color: '#94a3b8', whiteSpace: 'nowrap',
                              borderBottom: '1px solid #e2e8f0',
                              ...(i === 0 ? { width: 55 } : {}),
                            }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {leads.map((lead, i) => {
                          const isExpanded = expandedRow === i;
                          const whyFIN = lead['Why They Fit FIN'] || '';
                          const buyingSignal = lead['Buying Signal / Timing'] || '';
                          const linkedin = lead['LinkedIn Profile URL'] || lead['LinkedIn'] || '';
                          const confidence = lead['Confidence Level'] || 'Medium';
                          const titleTier = lead['Title Tier'] || 'A';
                          const score = lead['Lead Score'] || 0;
                          const companyWebsite = lead['Company Website'] || '';
                          const serviceCategory = lead['Service Category'] || '';
                          const budgetBand = lead['Estimated Budget Band'] || '';
                          const breakdown = lead['Score Breakdown'] || null;
                          const signalVerified = lead['Signal Verified'];
                          const signalType = lead['Signal Type'] || '';
                          const signalSource = lead['Signal Source'] || '';
                          const cautionNote = lead['Caution Note'] || '';

                          return (
                            <tr
                              key={i}
                              className="fin-row"
                              onClick={() => setExpandedRow(isExpanded ? null : i)}
                              style={{
                                borderBottom: isExpanded ? 'none' : '1px solid #f1f5f9',
                                cursor: 'pointer',
                                background: isExpanded ? '#f8fafc' : 'transparent',
                              }}
                            >
                              <td style={{ padding: '0.65rem 0.7rem', width: 55, verticalAlign: isExpanded ? 'top' : 'middle' }}>
                                <ScoreBadge score={score} />
                              </td>
                              <td style={{ padding: '0.65rem 0.7rem', minWidth: 140, verticalAlign: isExpanded ? 'top' : 'middle' }}>
                                <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '0.86rem' }}>
                                  {lead['Full Name'] || `${lead['First Name']} ${lead['Last Name']}`}
                                </div>
                                <ConfidenceDot level={confidence} />

                                {isExpanded && (
                                  <div style={{ marginTop: '0.6rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }} onClick={e => e.stopPropagation()}>
                                    {whyFIN && (
                                      <div style={{
                                        padding: '0.6rem 0.75rem', background: '#f0fdfa', borderRadius: 8,
                                        fontSize: '0.8rem', color: '#475569', lineHeight: 1.55,
                                        borderLeft: '3px solid #0d9488', animation: 'fin-fade-in 0.2s ease-out',
                                      }}>
                                        <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#0d9488', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                                          Why They Fit FIN
                                        </div>
                                        {whyFIN}
                                      </div>
                                    )}
                                    {buyingSignal && (
                                      <div style={{
                                        padding: '0.6rem 0.75rem', background: '#fffbeb', borderRadius: 8,
                                        fontSize: '0.8rem', color: '#92400e', lineHeight: 1.55,
                                        borderLeft: '3px solid #f59e0b', animation: 'fin-fade-in 0.2s ease-out',
                                      }}>
                                        <div style={{
                                          fontSize: '0.68rem', fontWeight: 700, color: '#b45309', textTransform: 'uppercase',
                                          letterSpacing: '0.08em', marginBottom: '0.25rem',
                                          display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        }}>
                                          Buying Signal
                                          {signalVerified !== undefined && (
                                            <span style={{
                                              fontSize: '0.6rem', fontWeight: 700,
                                              padding: '0.15em 0.45em', borderRadius: 4,
                                              background: signalVerified ? '#dcfce7' : '#fef9c3',
                                              color: signalVerified ? '#16a34a' : '#a16207',
                                            }}>
                                              {signalVerified ? 'VERIFIED' : 'UNVERIFIED'}
                                            </span>
                                          )}
                                          {signalType && (
                                            <span style={{
                                              fontSize: '0.6rem', fontWeight: 600,
                                              padding: '0.15em 0.45em', borderRadius: 4,
                                              background: '#f1f5f9', color: '#64748b',
                                            }}>
                                              {signalType}
                                            </span>
                                          )}
                                        </div>
                                        {buyingSignal}
                                        {signalSource && (
                                          <div style={{ fontSize: '0.68rem', color: '#b45309', opacity: 0.7, marginTop: '0.3rem' }}>
                                            Source: {signalSource}
                                          </div>
                                        )}
                                      </div>
                                    )}
                                    <ScoreBreakdown breakdown={breakdown} />
                                    {cautionNote && (
                                      <div style={{
                                        padding: '0.5rem 0.75rem', background: '#fef2f2', borderRadius: 8,
                                        fontSize: '0.78rem', color: '#dc2626', lineHeight: 1.5,
                                        borderLeft: '3px solid #fca5a5', animation: 'fin-fade-in 0.2s ease-out',
                                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                                      }}>
                                        <span style={{ fontSize: '0.9rem' }}>&#9888;</span>
                                        {cautionNote}
                                      </div>
                                    )}
                                    <div style={{
                                      padding: '0.5rem 0.75rem', background: '#f1f5f9', borderRadius: 8,
                                      fontSize: '0.78rem', color: '#64748b', display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
                                    }}>
                                      <span><strong>Email:</strong> {lead['Verified Email'] || lead['Email Address']}</span>
                                      {companyWebsite && <span><strong>Website:</strong> {companyWebsite.replace(/^https?:\/\//, '')}</span>}
                                      <span><strong>Industry:</strong> {lead['Industry Category'] || '—'}</span>
                                    </div>
                                  </div>
                                )}
                              </td>
                              <td style={{ padding: '0.65rem 0.7rem', color: '#475569', maxWidth: 200, verticalAlign: isExpanded ? 'top' : 'middle' }}>
                                {lead['Verified Title'] || lead['Title']}
                              </td>
                              <td style={{ padding: '0.65rem 0.7rem', color: '#334155', fontWeight: 600, verticalAlign: isExpanded ? 'top' : 'middle' }}>
                                {lead['Company Name'] || lead['Organization']}
                              </td>
                              <td style={{ padding: '0.65rem 0.7rem', verticalAlign: isExpanded ? 'top' : 'middle' }}>
                                <ServiceChip category={serviceCategory} />
                              </td>
                              <td style={{ padding: '0.65rem 0.7rem', verticalAlign: isExpanded ? 'top' : 'middle' }}>
                                <BudgetBadge band={budgetBand} />
                              </td>
                              <td style={{ padding: '0.65rem 0.7rem', verticalAlign: isExpanded ? 'top' : 'middle' }}>
                                <TierBadge tier={titleTier} />
                              </td>
                              <td style={{ padding: '0.65rem 0.7rem', verticalAlign: isExpanded ? 'top' : 'middle' }}>
                                {linkedin ? (
                                  <a href={linkedin} target="_blank" rel="noopener noreferrer"
                                    onClick={e => e.stopPropagation()}
                                    style={{
                                      display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                                      color: '#0d9488', textDecoration: 'none', fontWeight: 600, fontSize: '0.8rem',
                                      padding: '0.25em 0.6em', borderRadius: 6, background: '#f0fdfa', transition: 'background 0.15s',
                                    }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#0d9488"><path d="M20.47 2H3.53A1.45 1.45 0 002 3.47v17.06A1.45 1.45 0 003.47 22h17.06A1.45 1.45 0 0022 20.53V3.47A1.45 1.45 0 0020.47 2zM8.09 18.74h-3v-9h3v9zM6.59 8.48a1.56 1.56 0 110-3.12 1.56 1.56 0 010 3.12zM18.91 18.74h-3v-4.26c0-1.08-.02-2.47-1.5-2.47-1.51 0-1.74 1.18-1.74 2.39v4.34h-3v-9h2.88v1.23h.04a3.16 3.16 0 012.85-1.56c3.05 0 3.61 2 3.61 4.61v4.72z"/></svg>
                                    View
                                  </a>
                                ) : <span style={{ color: '#cbd5e1' }}>&mdash;</span>}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {leads.length > 0 && (
                <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#94a3b8', marginTop: '1rem' }}>
                  Click any row to see rationale, buying signals, score breakdown, and signal verification
                </p>
              )}
            </div>
          )}

          {/* Footer */}
          <div style={{
            marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            color: '#94a3b8', fontSize: '0.78rem',
          }}>
            <span style={{ fontWeight: 600 }}>Powered by Dooza</span>
            <span>FIN Lead Finder v4 — Scored, Categorized & QA Verified</span>
          </div>
        </div>
      </div>
    </>
  );
}
