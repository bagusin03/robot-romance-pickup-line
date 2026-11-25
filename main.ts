// Robot Romance: One-Line Pickup Lines for AI — make.fun entry.
// A single pickup line aimed at a robot/AI, written to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness, no
// environment access. The program only emits the line.
import * as fs from "node:fs";

const LINE =
  "Are you a transformer? Because you've got all my attention — every single head, no dropout.";

// Guard the sealed gate ourselves: one line, 1-200 characters, not blank,
// no stray whitespace at either end. Fail loudly instead of ever writing
// an entry the scorer would reject.
const chars = [...LINE].length;
const bytes = Buffer.byteLength(LINE, "utf8");
if (
  chars < 1 ||
  chars > 200 ||
  bytes > 200 ||
  !LINE.trim() ||
  LINE !== LINE.trim() ||
  LINE.includes("\n")
) {
  throw new Error(
    `pickup line violates the 1-200 char single-line gate (${chars} chars, ${bytes} bytes)`,
  );
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips exactly: same bytes, one line.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the pickup line");
}

console.log(`wrote ${chars} chars to /output/entry.txt`);
