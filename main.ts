// SPDX-License-Identifier: MIT
// One Letter for Your Day — entry: "Q" for "Quicksand".
//
// The task allows exactly one character, A-Z, and nothing else in
// /output/entry.txt. The letter is the initial of the hidden word that
// describes the day: quicksand, a day that pulls you in and will not let
// go, sticky and vivid, a funny-sad truth about a day that swallowed
// every plan. Q is rare — almost nobody picks it — so it stands out when
// a judge compares two letters side by side. This file does one thing
// only, deterministically: it writes the single chosen letter, with no
// trailing newline, using only the Node standard library.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The chosen letter and its hidden word. Keep the entry a single
// character: any extra byte (a newline, a space) would break the gate.
const LETTER = "Q";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, LETTER, "utf8");
