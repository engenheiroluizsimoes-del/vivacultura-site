import { readFileSync, writeFileSync } from 'node:fs';

const encoding = 'utf8';
const root = new URL('../site/', import.meta.url);
// Append new publications to projetos.json. The list runs from oldest to newest.
const projects = JSON.parse(readFileSync(new URL('projetos.json', root), encoding));
const ids = new Set();

for (const { id, nome, resumo, categoria, descricao } of projects) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id) || ids.has(id)) {
    throw new Error(`Invalid or duplicate project id: ${id}`);
  }
  if (![nome, resumo, categoria, descricao].every(value => typeof value === 'string' && value.trim())) {
    throw new Error(`Missing project content: ${id}`);
  }
  ids.add(id);
}

const escapeHtml = value => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const newestFirst = [...projects].reverse();

const recentRows = newestFirst.slice(0, 3).map(({ id, nome, resumo }) =>
  `          <li>
            <h3><a href="./projetos.html#${id}">${escapeHtml(nome)}</a></h3>
            <p>${escapeHtml(resumo)}</p>
          </li>`).join('\n');

const catalogRows = newestFirst.map(({ id, nome, categoria, descricao, situacao, arte }) =>
  `        <article class="project-entry" id="${id}" aria-labelledby="${id}-titulo">${arte ? `
          <div class="project-art"><img src="./marca/projetos/${id}.webp" alt="" loading="lazy"/></div>` : ''}
          <div class="project-details">
          <p class="eyebrow">${escapeHtml(categoria)}</p>
          <h2 id="${id}-titulo">${escapeHtml(nome)}</h2>
          <p>${escapeHtml(descricao)}</p>${situacao ? `
          <p class="project-entry-status">${escapeHtml(situacao)}</p>` : ''}
          <a class="project-inquiry" href="mailto:administracao@vivacultura.org.br?subject=${encodeURIComponent('Parceria | ' + nome)}">Conversar sobre este projeto</a>
          </div>
        </article>`).join('\n');

const files = [
  ['index.html', recentRows],
  ['projetos.html', catalogRows],
];

const outputs = files.map(([name, rows]) => {
  const file = new URL(name, root);
  const html = readFileSync(file, encoding);
  const start = '<!-- projetos:inicio -->';
  const end = '<!-- projetos:fim -->';
  const from = html.indexOf(start);
  const to = html.indexOf(end);
  if (from < 0 || to < from) throw new Error(`Missing project markers: ${name}`);
  return [file, `${html.slice(0, from + start.length)}\n${rows}\n        ${html.slice(to)}`];
});

for (const [file, html] of outputs) writeFileSync(file, html, encoding);
