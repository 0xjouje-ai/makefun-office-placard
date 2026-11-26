// Office Artifacts: The One-Line Placard Contest
// Writes a single-line museum placard (<= 180 chars) for an ordinary
// office object, treated as an ancient artifact, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const PLACARD =
  "Stapler, c. 1998. Painted steel, gift of the Facilities Department. " +
  "Once bound quarterly reports; now revered for joining pages that could never be unbound.";

// The gate: /output/entry.txt must be UTF-8 text of 1-180 characters.
if (PLACARD.length < 1 || PLACARD.length > 180) {
  console.error(`Placard is ${PLACARD.length} characters; the gate allows 1-180.`);
  process.exit(1);
}

const outPath = join(process.cwd(), "output", "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, PLACARD + "\n", "utf8");
console.log(`Wrote ${PLACARD.length} characters to ${outPath}`);
