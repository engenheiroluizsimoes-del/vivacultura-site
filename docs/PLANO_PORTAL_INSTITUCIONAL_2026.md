# Portal Institucional Inteligente - Instituto Viva Cultura

Status: planejamento tecnico inicial. Nao publicar nem alterar DNS nesta etapa.

## Origem verificada
- Repositorio: engenheiroluizsimoes-del/vivacultura-site
- Aplicacao: React 18 + Vite 6 + Tailwind CSS 4.
- Entrada: src/main.tsx -> src/app/App.tsx.
- Conteudo institucional e lista de projetos definidos diretamente no componente App.tsx.
- Projeto institucional de referencia: Canta Bairro Gospel, Canta Bairro Sertanejo e Dancando a Vida.

## Objetivo
Transformar o site em portal institucional com painel editorial responsivo, noticias, projetos, galerias, agenda, na midia e transparencia. Manter identidade visual e dominio vivacultura.org.br.

## Requisitos essenciais
1. Autenticacao e papeis: administrador, editor, revisor; principio do menor privilegio.
2. Conteudo estruturado: titulo, slug, resumo, corpo, fotos, creditos, data, categoria, status, autor e revisao.
3. Fluxo editorial: rascunho -> revisao -> aprovado -> publicado, com trilha de auditoria.
4. Fotos: formatos otimizados, texto alternativo, consentimentos e creditos quando aplicaveis.
5. Projetos: descricao, periodo, status, parceiros, imagens e resultados, sem inventar dados.
6. Documentos: separar publicos de internos; impedir exposicao acidental de dados pessoais.
7. SEO, acessibilidade, desempenho mobile, URLs estaveis e redirecionamentos.
8. Backup independente de conteudos e midias; exportacao em formato portavel.
9. IA opcional para redacao, sempre com aprovacao humana antes de publicar.

## Portoes de validacao
- Confirmar compatibilidade de importacao React/Vite no ChatGPT Sites, dominios, autenticacao, dados, midias, exportacao e custo real.
- Comparar alternativa Sites com manter Vercel + CMS, usando custo total e manutencao.
- Criar prototipo isolado sem alterar main, dominio ou producao.
- Testar fluxos editoriais, permissao, imagens, SEO, responsividade, backup e restauracao.
- So migrar dominio apos homologacao e plano de retorno documentado.

## Restricoes
Nao publicar, nao mudar DNS, nao mover dados privados, nao criar custos recorrentes sem avaliacao. Nao assumir que a migracao de hospedagem oferece CMS pronto.
