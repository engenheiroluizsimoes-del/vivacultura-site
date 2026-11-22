import { cp, mkdir, readFile, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = resolve(root, 'site');
const output = resolve(root, 'dist');
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => {
    const path = resolve(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  }))).flat();
}
const files = await walk(source);
for (const file of files) {
  if (extname(file) === '.js') execFileSync(process.execPath, ['--check', file]);
  if (!['.html', '.css'].includes(extname(file))) continue;
  const content = await readFile(file, 'utf8');
  const references = extname(file) === '.html'
    ? [...content.matchAll(/(?:src|href)=["']([^"']+)["']/g)].map(match => match[1])
    : [...content.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g)].map(match => match[1]);
  for (const reference of references) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(reference)) continue;
    const pathname = decodeURIComponent(reference.split(/[?#]/)[0]);
    if (!pathname) continue;
    const target = pathname.startsWith('/') ? resolve(source, '.' + pathname) : resolve(dirname(file), pathname);
    if (!existsSync(target)) throw new Error(`Referência ausente em ${file}: ${reference}`);
  }
}
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
console.log(`Build aprovado: ${files.length} arquivos; referências locais e JavaScript validados.`);
