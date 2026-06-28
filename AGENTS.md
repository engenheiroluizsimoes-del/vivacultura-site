# AGENTS.md

Instrucoes permanentes para tarefas do Codex no site institucional do Instituto Viva Cultura.

## Leitura obrigatoria

Antes de executar qualquer tarefa tecnica neste repositorio, leia:

1. `AGENTS.md`
2. `PROJECT_SPEC.md`

Use estes arquivos como referencia permanente de escopo, limites e dados oficiais do projeto.

## Fonte oficial

Este repositorio deve ser tratado como a fonte oficial do site institucional do Instituto Viva Cultura.

Repositorio: `engenheiroluizsimoes-del/vivacultura-site`

Site oficial: `https://www.vivacultura.org.br`

Deploy Cloudflare Pages: `https://vivaculturasite.pages.dev/`

Branch principal: `main`

## Regras de preservacao

Preserve os dados institucionais oficiais do Instituto Viva Cultura. Nao altere nome, contatos, endereco, representante legal, dominio, identidade institucional ou textos publicos sem tarefa explicita para isso.

Preserve o manual atualizado de imagem e marca registrado em `PROJECT_SPEC.md`. Nao faca alteracoes visuais ou textuais que contrariem identidade institucional, tagline, promessa da marca, tom de voz, cores, tipografia, posicionamento, publicos prioritarios ou diretrizes verbais e visuais sem tarefa explicita e aprovada.

Qualquer futura alteracao de layout, conteudo publico, componentes, estilos, animacoes, imagens ou chamadas institucionais deve manter a marca cultural, acolhedora, plural, simples, humana, criativa, madura, inovadora e profissional, com equilibrio entre dinamismo e credibilidade.

Nao mexa em dominio, DNS, Cloudflare Pages, configuracoes de hospedagem ou redirecionamentos sem uma tarefa explicita e aprovada.

Nao crie login, painel administrativo, banco de dados, area restrita, integrações complexas ou funcionalidades fora do escopo institucional sem aprovacao previa de escopo.

Nao renomeie o pacote do `package.json` sem tarefa explicita.

## Diretrizes de produto

Mantenha o site:

- leve;
- responsivo;
- acessivel;
- em portugues brasileiro;
- adequado para uso institucional;
- claro para parceiros, comunidade, poder publico e visitantes;
- com boa performance mobile.

As animacoes devem respeitar `prefers-reduced-motion`. Ao alterar interacoes, preserve a experiencia de usuarios que reduzem movimento no sistema.

## Diretrizes tecnicas

Stack atual:

- React;
- Vite;
- TypeScript;
- Tailwind/CSS;
- Cloudflare Pages.

Comando de build:

```bash
npm run build
```

Output de producao:

```text
dist
```

Sempre rode `npm run build` antes de concluir uma tarefa tecnica que altere codigo, estilos, configuracao ou conteudo publico.

## Arquivos que nao devem ser versionados

Nao versionar:

- `node_modules/`;
- `dist/`;
- `.env`;
- `.env.*`;
- tokens;
- senhas;
- credenciais;
- arquivos ZIP;
- caches locais.

Confirme antes de finalizar se arquivos sensiveis ou gerados nao foram incluidos indevidamente.

## Relatorio final esperado

Ao concluir tarefas tecnicas, responder com:

- arquivos alterados;
- testes executados;
- resultado do build;
- riscos;
- pendencias;
- proximo passo recomendado.

Se o ambiente nao tiver Git disponivel, nao tente fazer commit. Informe isso no relatorio final.
