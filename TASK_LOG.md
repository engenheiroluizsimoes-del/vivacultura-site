# TASK_LOG.md

Historico e pendencias do site institucional do Instituto Viva Cultura.

## Historico consolidado

- Site institucional do Instituto Viva Cultura criado.
- Repositorio oficial definido: `engenheiroluizsimoes-del/vivacultura-site`.
- Deploy Cloudflare Pages criado: `https://vivaculturasite.pages.dev/`.
- Dominio oficial conectado: `https://www.vivacultura.org.br`.
- Dados institucionais atualizados no projeto.
- Conteudo institucional organizado em pagina unica.
- Secoes de apresentacao, essencia, atuacao, projetos, contato, politica de privacidade e rodape presentes.
- Modernizacao visual aplicada.
- Animacoes e interacoes implementadas.
- Menu mobile implementado.
- Header com estado de rolagem implementado.
- Respeito a `prefers-reduced-motion` presente nas animacoes.
- Documentacao permanente criada em `AGENTS.md`, `PROJECT_SPEC.md`, `TASK_LOG.md` e `SITE_MAP.md`.
- Protecoes adicionais adicionadas ao `.gitignore` para arquivos sensiveis, logs e arquivos locais.
- Auditoria npm executada em 2026-06-27 sem aplicar correcoes automaticas.
- Build local validado com `npm run build` em 2026-06-27.
- Correcao controlada de dependencias executada em 2026-06-27 sem `npm audit fix --force`.
- `react-router` removido apos confirmacao de ausencia de uso direto em `src`.
- `vite` atualizado de `6.3.5` para `6.4.3` na mesma linha major.
- Auditorias finais `npm audit` e `npm audit --omit=dev` passaram sem vulnerabilidades.
- Manual atualizado de imagem e marca incorporado em 2026-06-28 como referencia oficial de identidade verbal, visual, tom de voz, posicionamento, publicos prioritarios e diretrizes institucionais do projeto.
- `docs/brand/BRAND_GUIDE.md` criado em 2026-07-01 como resumo tecnico permanente do manual da marca para orientar futuras tarefas de front-end, textos, fotos, layout e identidade visual.
- Tagline oficial e primeiras diretrizes do manual aplicadas no front-end em 2026-07-01, com atualizacao do hero, da hierarquia visual principal e dos textos institucionais de abertura.
- Build local validado com `npm run build` em 2026-07-01 apos a aplicacao inicial do manual no front-end.

## Auditoria npm - 2026-06-27

- `npm audit` encontrou 2 vulnerabilidades de severidade alta.
- `npm audit --omit=dev` encontrou 1 vulnerabilidade de severidade alta.
- Vulnerabilidade de producao: `react-router@7.13.0`, reportada pelo npm em faixa vulneravel `7.0.0 - 7.15.0`.
- Observacao: `react-router` esta declarado em `package.json`, mas nao foram encontradas importacoes em `src` nesta auditoria.
- Vulnerabilidade de desenvolvimento/build: `vite@6.3.5`, reportada pelo npm em faixa vulneravel `<=6.4.2`.
- O npm recomenda `npm audit fix --force`, mas a correcao automatica nao foi aplicada porque alteraria dependencias fora do escopo desta tarefa.
- O build de producao passou com sucesso apos a auditoria.

## Correcao controlada de dependencias - 2026-06-27

- Busca por `react-router`, `react-router-dom`, `BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`, `useNavigate` e `useParams` nao encontrou uso direto de roteamento em `src`.
- A dependencia `react-router@7.13.0` foi removida de `package.json` e `package-lock.json`.
- `npm install` foi executado para manter `package.json` e `package-lock.json` consistentes.
- Apos a remocao, `npm audit --omit=dev` passou a reportar 0 vulnerabilidades.
- `vite` foi avaliado e atualizado de `6.3.5` para `6.4.3`, sem mudanca major e sem `--force`.
- O override `pnpm.overrides.vite` tambem foi alinhado para `6.4.3`.
- `npm run build` passou com Vite `6.4.3`.
- Resultado final: `npm audit` e `npm audit --omit=dev` reportaram 0 vulnerabilidades.

## Pendencias atuais

- Incorporar o arquivo `docs/brand/manual_instituto-viva-cultura.pdf` ao repositorio para consulta local permanente, pois na data de 2026-07-01 o PDF ainda nao estava presente em `docs/brand/`.
- Auditar o site publicado contra o manual atualizado de imagem e marca, verificando tagline, posicionamento, tom de voz, identidade visual, cores, tipografia, hierarquia de conteudo, acessibilidade e coerencia institucional.
- Validar build local apos instalacao de dependencias quando o ambiente ainda nao tiver `node_modules/`.
- Confirmar que `node_modules/` e `dist/` continuam fora do versionamento.
- Validar futuramente as imagens externas da Unsplash usadas na secao de projetos.
- Avaliar futuramente a renomeacao do pacote em `package.json`, atualmente `@figma/my-make-file`, somente com tarefa explicita.
- Revisar SEO tecnico basico em tarefa propria.
- Revisar acessibilidade em tarefa propria.

## Proximas tarefas recomendadas

1. Fazer auditoria do site publicado contra o manual atualizado de imagem e marca.
2. Rodar `npm install` em ambiente local limpo.
3. Rodar `npm run build` e confirmar geracao de `dist`.
4. Fazer uma revisao de acessibilidade e SEO basico.
5. Planejar uma estrutura futura para projetos reais do Instituto.
6. Planejar uma galeria institucional com imagens proprias do Instituto.
7. Avaliar dependencia de imagens externas e substituir por assets proprios quando disponiveis.
8. Avaliar renomeacao do pacote em `package.json` em tarefa especifica.

## Observacoes de manutencao

Toda alteracao de conteudo institucional deve preservar os dados oficiais definidos em `PROJECT_SPEC.md`.

Toda alteracao visual ou textual deve preservar o manual atualizado de imagem e marca registrado em `PROJECT_SPEC.md`.

Mudancas em dominio, DNS, Cloudflare Pages ou dados institucionais exigem tarefa explicita.

Arquivos gerados, caches, credenciais e arquivos sensiveis nao devem ser versionados.
