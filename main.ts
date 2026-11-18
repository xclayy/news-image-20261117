// news-image-20261117 — entry program (Node 22, standard library only).
//
// The entry's image lives next to this file as entry.png. All this program
// does is place an exact copy of those bytes at /output/entry.png, which is
// what the grader reads. Copying bytes keeps every run fully deterministic:
// two runs always write the same file.
//
// For a local check, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (!existsSync(source)) {
  throw new Error(`entry.png not found next to main.ts (${source})`);
}

mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
copyFileSync(source, target);

// A copy is only useful if it is exact: the output must exist and match
// the source byte for byte in size.
if (statSync(target).size !== statSync(source).size) {
  throw new Error(`copied entry.png size mismatch (${target})`);
}
