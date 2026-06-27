# PROJECT_SPEC.md

Especificacao permanente do site institucional do Instituto Viva Cultura.

## Objetivo do site

Apresentar oficialmente o Instituto Viva Cultura, sua finalidade institucional, areas de atuacao, projetos, canais de contato e politicas basicas de relacionamento com o publico.

O site deve funcionar como presenca institucional clara, leve e confiavel para a comunidade, parceiros, poder publico, setor cultural e visitantes em geral.

## Publico-alvo

- comunidade atendida pelo Instituto;
- artistas, produtores culturais e educadores;
- parceiros institucionais;
- poder publico;
- patrocinadores e apoiadores;
- visitantes interessados em cultura, arte, formacao e inclusao social.

## Enderecos oficiais

Dominio oficial: `https://www.vivacultura.org.br`

Deploy atual Cloudflare Pages: `https://vivaculturasite.pages.dev/`

Repositorio: `engenheiroluizsimoes-del/vivacultura-site`

Branch principal: `main`

## Stack tecnica

- React;
- Vite;
- TypeScript;
- Tailwind/CSS;
- Cloudflare Pages.

Comando de build:

```bash
npm run build
```

Diretorio de saida:

```text
dist
```

## Escopo ja publicado

O site possui estrutura institucional de pagina unica com:

- inicio/hero;
- quem somos;
- essencia da marca;
- missao;
- visao;
- valores;
- areas de atuacao;
- impacto e proposito;
- credibilidade institucional;
- projetos e iniciativas;
- contato;
- politica de privacidade;
- rodape institucional.

## Modernizacao visual presente

O codigo atual ja inclui modernizacao visual com:

- layout responsivo;
- menu mobile;
- header com comportamento ao rolar;
- animacoes de revelacao por secao;
- interacoes em cards e botoes;
- efeitos visuais na marca;
- imagens institucionais em secoes de projetos;
- respeito a `prefers-reduced-motion`.

## Escopo da Fase 2

A Fase 2 deve priorizar organizacao, manutencao e consolidacao institucional, incluindo:

- documentacao permanente do projeto;
- validacao recorrente de build;
- revisao de acessibilidade;
- melhoria de SEO basico;
- validacao de imagens externas;
- organizacao futura de projetos reais;
- planejamento de galeria institucional;
- eventual revisao do nome do pacote em `package.json`, somente com tarefa explicita.

## Fora do escopo

Nao faz parte do escopo atual:

- login;
- painel administrativo;
- banco de dados;
- area restrita;
- sistema de inscricoes;
- e-commerce;
- blog dinamico;
- automacoes complexas;
- alteracao de dominio;
- alteracao de DNS;
- alteracao de Cloudflare;
- mudanca de dados institucionais sem aprovacao.

## Dados institucionais oficiais

Nome: Instituto Viva Cultura

Dominio oficial: `https://www.vivacultura.org.br`

Cloudflare Pages: `https://vivaculturasite.pages.dev/`

WhatsApp: `(66) 99656-3806`

Link WhatsApp: `https://wa.me/5566996563806`

Instagram: `@ivivacultura`

Instagram URL: `https://www.instagram.com/ivivacultura/`

E-mail: `administracao@vivacultura.org.br`

Endereco: Rua dos Álamos, nº 23, Setor Comercial, Sinop/MT, CEP 78.550-188

Representante legal: Luiz Gustavo da Silva Simões

Cargo: Presidente

Finalidade institucional: Promoção da cultura, arte, formação, inclusão social, desenvolvimento comunitário, projetos socioculturais, difusão artística, oficinas, eventos, capacitação, preservação cultural e apoio ao setor cultural.

## Criterios de aceite

Uma tarefa tecnica so deve ser considerada concluida quando:

- respeitar os limites deste documento;
- preservar dados institucionais oficiais;
- nao alterar dominio, DNS ou Cloudflare sem escopo explicito;
- manter o site em portugues brasileiro;
- preservar responsividade e performance mobile;
- respeitar acessibilidade e `prefers-reduced-motion`;
- executar `npm run build` quando houver alteracao tecnica;
- informar arquivos alterados, testes, riscos, pendencias e proximo passo.

## Riscos conhecidos

- dependencias locais podem nao estar instaladas em ambientes novos;
- `node_modules/` e `dist/` sao gerados localmente e nao devem ser versionados;
- imagens externas da Unsplash podem mudar, falhar ou impactar carregamento;
- o nome atual do pacote no `package.json` parece herdado de template e pode exigir avaliacao futura;
- Git pode nao estar disponivel em alguns ambientes locais do Codex.
