/**
 * Post-build script: Flatten Next.js RSC payload directories for static hosting.
 *
 * Next.js App Router generates RSC payloads in nested subdirectories:
 *   out/legal/__next.legal/__PAGE__.txt
 *   out/pathways/birthright/__next.pathways/birthright/__PAGE__.txt
 * 
 * But the client-side JS requests them with dot-notation:
 *   /legal/__next.legal.__PAGE__.txt  
 *   /pathways/birthright/__next.pathways.birthright.__PAGE__.txt
 * 
 * This script recursively copies nested RSC files into the expected flat format.
 */
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');
let count = 0;

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory() && entry.name.startsWith('__next.')) {
      // Flatten this RSC payload directory recursively
      flattenRscDir(fullPath, dir, entry.name);
    } else if (entry.isDirectory() && !entry.name.startsWith('_next') && !entry.name.startsWith('.')) {
      // Recurse into route directories
      processDir(fullPath);
    }
  }
}

function flattenRscDir(srcDir, targetDir, prefix) {
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);

    if (entry.isFile()) {
      const flatName = `${prefix}.${entry.name}`;
      const destPath = path.join(targetDir, flatName);
      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`  ${path.relative(OUT_DIR, destPath)}`);
        count++;
      }
    } else if (entry.isDirectory()) {
      // Recurse with extended prefix: __next.pathways + birthright => __next.pathways.birthright
      flattenRscDir(srcPath, targetDir, `${prefix}.${entry.name}`);
    }
  }
}

console.log('Flattening RSC payloads for static hosting...');
processDir(OUT_DIR);
console.log(`Done. Created ${count} files.`);
