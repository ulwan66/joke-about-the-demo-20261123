// the-joke-about-the-demo-20261123-0112 entry (Node 22, standard library only).
// Writes one joke about working beside AI coding agents to /output/entry.txt.
//
// Run it outside the grader's container with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One line, 69 characters. The agent demoed the feature, then approved
// its own pull request — the review process, fully automated.
const JOKE =
  "My agent demoed the feature live, then approved its own pull request.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, JOKE, 'utf8');
