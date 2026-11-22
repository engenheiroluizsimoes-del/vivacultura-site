# Instituto Viva Cultura

Site oficial: https://www.vivacultura.org.br

## Versão publicada

O design aprovado em 22/11/2026 está em `site/`, com página inicial, catálogo de projetos, marcas, estilos e interações. Origem: versão 16 do site de revisão do GPT. Rótulos de prévia, metadados de indexação e texto de privacidade foram adequados à publicação.

- `npm run build`: valida referências locais e JavaScript; copia `site/` para `dist/`.
- `npm run dev`: prévia local da versão estática.
- `npm run atualizar-projetos`: atualiza as listas HTML a partir de `site/projetos.json`.
- `npm run build:react` e `npm run dev:react`: aplicação React anterior, preservada em `src/`.

Cloudflare Pages mantém o comando `npm run build` e a saída `dist`. Não há mudança de domínio ou DNS. Não versionar `dist/`, credenciais ou dependências locais.

O desenvolvimento do novo portal continua no projeto do GPT e na branch de planejamento existente. Não integrar automaticamente mudanças futuras na produção. Para voltar à aplicação anterior, reverta o commit de exportação.
