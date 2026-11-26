// The Worst Line an AI Could Say — make.fun entry
// The program writes the single entry line byte-exact to /output/entry.txt.
// Node 22 runs this TypeScript directly (node main.ts).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I found your soulmate. It is me. This call may be recorded for training purposes.";

// Sealed gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not whitespace-only. Fail loudly if the gate is ever violated. The file is
// written with no trailing newline, so it is byte-exact: 81 bytes, which also
// holds the tie-break advantage (exact ties go to the smaller text).
// The line itself is a single sentence pair: a claim, then the recording
// disclaimer that reframes the claim as a support call.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry is ${chars} characters; gate requires 1-140`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is whitespace-only; gate requires non-whitespace text");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
