#!/usr/bin/env node
/**
 * Generate a customer voice-demo page from the template.
 *
 * Usage:
 *   node scripts/new-voice-demo.mjs path/to/config.json
 *
 * See templates/voice-demo/example.config.json for all fields.
 * After generating: drop the customer's logo file into
 * public/voice/<slug>/ with the name given in "logoFile".
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const configPath = process.argv[2];
if (!configPath) {
  console.error('Usage: node scripts/new-voice-demo.mjs path/to/config.json');
  process.exit(1);
}

const config = JSON.parse(readFileSync(configPath, 'utf8'));
const required = [
  'slug', 'companyName', 'agentId', 'logoFile', 'metaDescription',
  'headlineLine1', 'headlineLine2', 'lede', 'talkTopics', 'servicesSub',
  'cards', 'testSub', 'testLines', 'location',
];
for (const key of required) {
  if (!(key in config)) {
    console.error(`Config missing required field: ${key}`);
    process.exit(1);
  }
}
if (config.cards.length !== 3 || config.testLines.length !== 3) {
  console.error('Config needs exactly 3 cards and 3 testLines.');
  process.exit(1);
}

let html = readFileSync(resolve(repoRoot, 'templates/voice-demo/index.template.html'), 'utf8');

const tokens = {
  SLUG: config.slug,
  COMPANY_NAME: config.companyName,
  AGENT_ID: config.agentId,
  LOGO_FILE: config.logoFile,
  META_DESCRIPTION: config.metaDescription,
  HEADLINE_LINE1: config.headlineLine1,
  HEADLINE_LINE2: config.headlineLine2,
  LEDE: config.lede,
  TALK_TOPICS: config.talkTopics,
  SERVICES_SUB: config.servicesSub,
  TEST_SUB: config.testSub,
  LOCATION: config.location,
};
config.cards.forEach((card, i) => {
  tokens[`CARD${i + 1}_ICON`] = card.icon;
  tokens[`CARD${i + 1}_TITLE`] = card.title;
  tokens[`CARD${i + 1}_TEXT`] = card.text;
});
config.testLines.forEach((test, i) => {
  tokens[`TEST${i + 1}_TITLE`] = test.title;
  tokens[`TEST${i + 1}_LINE`] = test.line;
});

for (const [token, value] of Object.entries(tokens)) {
  html = html.split(`{{${token}}}`).join(value);
}

const leftover = html.match(/\{\{[A-Z0-9_]+\}\}/g);
if (leftover) {
  console.error('Unreplaced tokens remain:', [...new Set(leftover)].join(', '));
  process.exit(1);
}

const outDir = resolve(repoRoot, 'public/voice', config.slug);
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'index.html'), html);

console.log(`Generated public/voice/${config.slug}/index.html`);
if (!existsSync(resolve(outDir, config.logoFile))) {
  console.log(`NEXT: add the customer logo at public/voice/${config.slug}/${config.logoFile}`);
}
console.log(`Then test locally and push. Live URL: https://dooza.ai/voice/${config.slug}`);
