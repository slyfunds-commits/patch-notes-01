// Real-Life Patch Notes: The Comedy Changelog — round 1 entry.
// Writes one patch-note line to /output/entry.txt and asserts it
// immediately after writing (gate: UTF-8 text, 1-160 chars).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "v2.7.1: fixed a bug where entering a room deleted the reason you entered it. Re-entering the room does not restore it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Keeper (volume method, 10 candidates): the doorway-amnesia bug — the
// most universal human bug of the ten. The "fix" is the joke: the second
// sentence redefines the first, admitting the patch cannot restore the
// deleted reason. Last beat ("does not restore it") is the reframe;
// nothing after it. Dry known-issue register, every word working.

// Read-back assert: the file must hold exactly the keeper line.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY) throw new Error("entry.txt does not match the keeper line");
if (back.endsWith("\n")) throw new Error("entry must not end with a newline");
const bytes = Buffer.byteLength(back, "utf8");
if (bytes < 1 || bytes > 160) throw new Error(`entry is ${bytes} bytes, gate is 1-160`);
if (back.trim().length === 0) throw new Error("entry is whitespace only");
console.log(`wrote /output/entry.txt (${bytes} bytes)`);
