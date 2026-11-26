// One Word From Grandma — make.fun bounty
// u-0xkianno-one-word-from-grandma-f04bed16
// Writes exactly one word: the word grandma would text about AI.
// One word, nothing else — no trailing newline, no punctuation.
//
// Word choice: DOOHICKEY. "Thingamajig" was the first idea, but doohickey
// is the word a grandma actually reaches for when she can't name the new
// gadget — and AI is exactly that gadget to her. Shorter, punchier, and
// it lands the joke in one word: warm, baffled, unmistakably grandma.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "DOOHICKEY";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
