import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke, at most 200 characters (the competition's gate).
// Tightened after the first draft: dropped "now" so the punchline lands on
// "seniority over me" with no cuttable word before it.
const JOKE =
  "Our office fridge has a cleaning schedule, a sign-up sheet, and one lunchbox from 2023 that has seniority over me.";

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0 || JOKE.includes("\n")) {
  throw new Error(`joke must be one line of 1-200 non-whitespace characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
