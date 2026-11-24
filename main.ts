import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke, at most 200 characters (the competition's gate).
const JOKE =
  "Our standup is fifteen minutes, but Dave's update alone is a trilogy with a mid-credits scene about his sourdough starter.";

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-200 non-whitespace characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
