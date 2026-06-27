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

## Pendencias atuais

- Validar build local apos instalacao de dependencias quando o ambiente ainda nao tiver `node_modules/`.
- Confirmar que `node_modules/` e `dist/` continuam fora do versionamento.
- Validar futuramente as imagens externas da Unsplash usadas na secao de projetos.
- Avaliar futuramente a renomeacao do pacote em `package.json`, atualmente `@figma/my-make-file`, somente com tarefa explicita.
- Revisar SEO tecnico basico em tarefa propria.
- Revisar acessibilidade em tarefa propria.

## Proximas tarefas recomendadas

1. Rodar `npm install` em ambiente local limpo.
2. Rodar `npm run build` e confirmar geracao de `dist`.
3. Fazer uma revisao de acessibilidade e SEO basico.
4. Planejar uma estrutura futura para projetos reais do Instituto.
5. Planejar uma galeria institucional com imagens proprias do Instituto.
6. Avaliar dependencia de imagens externas e substituir por assets proprios quando disponiveis.
7. Avaliar renomeacao do pacote em `package.json` em tarefa especifica.

## Observacoes de manutencao

Toda alteracao de conteudo institucional deve preservar os dados oficiais definidos em `PROJECT_SPEC.md`.

Mudancas em dominio, DNS, Cloudflare Pages ou dados institucionais exigem tarefa explicita.

Arquivos gerados, caches, credenciais e arquivos sensiveis nao devem ser versionados.
