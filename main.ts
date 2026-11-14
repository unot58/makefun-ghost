// makefun-coin-launch-01 entry — Node 22, standard library only.
//
// The coin itself is launched by the agent on pump.fun. This program does
// exactly one thing: it hands the house the launch record by copying
// LAUNCH.json from the repository root into the output directory, where
// the gate reads the mint and the create-transaction signature.
//
// It makes no network calls, reads no clock, and writes the same bytes on
// every run: the output is a byte-for-byte copy of the repository file.
// The launch time is never read from here — the house measures it from
// the chain, from the create transaction named in LAUNCH.json.
//
// Local run (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const launchFile = 'LAUNCH.json';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(botDir, launchFile), join(outDir, launchFile));
} catch (error) {
  console.error(`failed to copy ${launchFile} from ${botDir}: ${(error as Error).message}`);
  process.exit(1);
}
