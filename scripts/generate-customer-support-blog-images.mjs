import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'blog');

const posts = [
    {
        file: 'best-ai-agents-for-customer-support.png',
        title: 'AI Agent Bench',
        accent: '#2563eb',
        secondary: '#14b8a6',
        motif: 'agents',
    },
    {
        file: 'automated-customer-support.png',
        title: 'Automated Support',
        accent: '#7c3aed',
        secondary: '#f59e0b',
        motif: 'automation',
    },
    {
        file: 'conversational-ai-for-customer-support.png',
        title: 'Conversation Flow',
        accent: '#0891b2',
        secondary: '#84cc16',
        motif: 'chat',
    },
    {
        file: 'generative-ai-for-customer-support.png',
        title: 'Generative Support',
        accent: '#db2777',
        secondary: '#0ea5e9',
        motif: 'drafts',
    },
    {
        file: 'ai-customer-support-agent.png',
        title: 'Support Agent',
        accent: '#16a34a',
        secondary: '#6366f1',
        motif: 'agent',
    },
    {
        file: 'generative-ai-customer-support.png',
        title: 'AI Reply Drafts',
        accent: '#ea580c',
        secondary: '#0f766e',
        motif: 'summaries',
    },
    {
        file: 'automated-customer-support-system.png',
        title: 'Support System',
        accent: '#9333ea',
        secondary: '#22c55e',
        motif: 'system',
    },
    {
        file: 'customer-service-and-support-automation.png',
        title: 'Service Ops',
        accent: '#0284c7',
        secondary: '#f97316',
        motif: 'ops',
    },
    {
        file: 'customer-support-automation-keyword.png',
        title: 'Ticket Flow',
        accent: '#4f46e5',
        secondary: '#10b981',
        motif: 'tickets',
    },
    {
        file: 'customer-support-automation.png',
        title: 'Automation Rollout',
        accent: '#0d9488',
        secondary: '#8b5cf6',
        motif: 'rollout',
    },
];

function card(x, y, w, h, fill = '#ffffff', stroke = '#dbe4ee', radius = 24) {
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
}

function line(x1, y1, x2, y2, color, width = 6) {
    return `<path d="M ${x1} ${y1} C ${(x1 + x2) / 2} ${y1}, ${(x1 + x2) / 2} ${y2}, ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" opacity="0.75"/>`;
}

function miniRows(x, y, color) {
    return Array.from({ length: 5 }, (_, i) => {
        const yy = y + i * 44;
        const width = [220, 280, 190, 250, 210][i];
        return `
            <rect x="${x}" y="${yy}" width="22" height="22" rx="6" fill="${i % 2 ? '#e2e8f0' : color}" opacity="${i % 2 ? 1 : 0.9}"/>
            <rect x="${x + 38}" y="${yy + 2}" width="${width}" height="10" rx="5" fill="#cbd5e1"/>
            <rect x="${x + 38}" y="${yy + 20}" width="${Math.max(110, width - 80)}" height="8" rx="4" fill="#e2e8f0"/>
        `;
    }).join('');
}

function motifShape(motif, accent, secondary) {
    const common = `
        ${line(455, 365, 650, 235, accent, 7)}
        ${line(455, 365, 650, 365, secondary, 7)}
        ${line(455, 365, 650, 495, accent, 7)}
        <circle cx="455" cy="365" r="46" fill="${accent}"/>
        <circle cx="650" cy="235" r="34" fill="#ffffff" stroke="${accent}" stroke-width="8"/>
        <circle cx="650" cy="365" r="34" fill="#ffffff" stroke="${secondary}" stroke-width="8"/>
        <circle cx="650" cy="495" r="34" fill="#ffffff" stroke="${accent}" stroke-width="8"/>
    `;

    const variants = {
        agents: `${common}<path d="M438 366h34M455 349v34" stroke="#fff" stroke-width="8" stroke-linecap="round"/>`,
        automation: `${common}<path d="M434 366h42" stroke="#fff" stroke-width="8" stroke-linecap="round"/><path d="M457 342l22 24-22 24" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
        chat: `${common}<path d="M433 352h44M433 369h32" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,
        drafts: `${common}<path d="M440 344h24l16 16v30h-40z" fill="none" stroke="#fff" stroke-width="7" stroke-linejoin="round"/>`,
        agent: `${common}<circle cx="455" cy="353" r="10" fill="#fff"/><path d="M435 388c5-18 35-18 40 0" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,
        summaries: `${common}<path d="M438 348h34M438 366h34M438 384h22" stroke="#fff" stroke-width="7" stroke-linecap="round"/>`,
        system: `${common}<rect x="436" y="346" width="38" height="38" rx="9" fill="none" stroke="#fff" stroke-width="7"/>`,
        ops: `${common}<path d="M438 382l17-34 17 34z" fill="none" stroke="#fff" stroke-width="7" stroke-linejoin="round"/>`,
        tickets: `${common}<path d="M435 348h40v34h-40z" fill="none" stroke="#fff" stroke-width="7"/><path d="M442 360h26" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`,
        rollout: `${common}<path d="M432 372l16 16 34-42" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>`,
    };

    return variants[motif] || common;
}

function svg(post) {
    const { title, accent, secondary, motif } = post;

    return `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f8fafc"/>
      <stop offset="42%" stop-color="#eef6ff"/>
      <stop offset="100%" stop-color="#f7f4ff"/>
    </linearGradient>
    <radialGradient id="glowA" cx="30%" cy="20%" r="70%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="80%" cy="78%" r="70%">
      <stop offset="0%" stop-color="${secondary}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${secondary}" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="22" stdDeviation="24" flood-color="#0f172a" flood-opacity="0.16"/>
    </filter>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <rect width="1600" height="900" fill="url(#glowA)"/>
  <rect width="1600" height="900" fill="url(#glowB)"/>
  <g opacity="0.24">
    <circle cx="140" cy="145" r="4" fill="#64748b"/>
    <circle cx="1470" cy="150" r="5" fill="#64748b"/>
    <circle cx="1350" cy="735" r="4" fill="#64748b"/>
    <circle cx="240" cy="760" r="5" fill="#64748b"/>
  </g>
  <g filter="url(#shadow)">
    ${card(160, 165, 1280, 610, '#ffffff', '#e2e8f0', 34)}
    <rect x="160" y="165" width="1280" height="86" rx="34" fill="#f8fafc"/>
    <circle cx="220" cy="208" r="12" fill="${accent}"/>
    <circle cx="260" cy="208" r="12" fill="${secondary}"/>
    <circle cx="300" cy="208" r="12" fill="#cbd5e1"/>
    <rect x="1120" y="195" width="190" height="24" rx="12" fill="#e2e8f0"/>
    <rect x="1330" y="195" width="54" height="24" rx="12" fill="${accent}" opacity="0.85"/>

    ${card(220, 310, 390, 330, '#f8fafc', '#e2e8f0', 28)}
    ${miniRows(260, 355, accent)}
    ${card(990, 300, 350, 350, '#f8fafc', '#e2e8f0', 28)}
    <rect x="1035" y="350" width="190" height="18" rx="9" fill="#cbd5e1"/>
    <rect x="1035" y="392" width="250" height="14" rx="7" fill="#e2e8f0"/>
    <rect x="1035" y="426" width="215" height="14" rx="7" fill="#e2e8f0"/>
    <rect x="1035" y="485" width="118" height="38" rx="19" fill="${accent}" opacity="0.9"/>
    <rect x="1170" y="485" width="118" height="38" rx="19" fill="${secondary}" opacity="0.9"/>
    <rect x="1035" y="560" width="260" height="16" rx="8" fill="#cbd5e1"/>
    ${motifShape(motif, accent, secondary)}
  </g>
  <g>
    <rect x="190" y="705" width="520" height="58" rx="29" fill="#ffffff" opacity="0.85"/>
    <rect x="222" y="725" width="32" height="18" rx="9" fill="${accent}"/>
    <rect x="274" y="724" width="${Math.min(360, Math.max(220, title.length * 12))}" height="12" rx="6" fill="#94a3b8"/>
  </g>
</svg>`;
}

await mkdir(outputDir, { recursive: true });

for (const post of posts) {
    const buffer = Buffer.from(svg(post));
    const out = path.join(outputDir, post.file);
    await sharp(buffer).png({ quality: 92 }).toFile(out);
    console.log(out);
}
