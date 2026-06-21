const whatsappMessage = 'Olá, Instituto Viva Cultura. Gostaria de mais informações.';

export const instituto = {
  nome: 'Instituto Viva Cultura',
  telefone: '66996563806',
  telefoneVisual: '(66) 99656-3806',
  whatsappNumero: '5566996563806',
  whatsappLinkBase: 'https://wa.me/5566996563806',
  whatsappMensagem: whatsappMessage,
  whatsappLink: `https://wa.me/5566996563806?text=${encodeURIComponent(whatsappMessage)}`,
  email: 'administracao@vivacultura.org.br',
  representanteLegal: 'Luiz Gustavo da Silva Simões',
  cargo: 'Presidente',
  endereco: 'Rua dos Álamos, nº 23, Setor Comercial, Sinop/MT, CEP 78.550-188',
  cidadeUf: 'Sinop/MT',
  finalidadeInstitucional:
    'Promoção da cultura, arte, formação, inclusão social, desenvolvimento comunitário, projetos socioculturais, difusão artística, oficinas, eventos, capacitação, preservação cultural e apoio ao setor cultural.',
  textoQuemSomos:
    'O Instituto Viva Cultura atua na promoção da cultura, da arte, da formação e da inclusão social, desenvolvendo projetos socioculturais, oficinas, eventos, ações de difusão artística, capacitação, preservação cultural e fortalecimento comunitário.',
  rodapeTexto:
    'Promoção da cultura, arte, formação, inclusão social e desenvolvimento comunitário por meio de projetos socioculturais, oficinas, eventos e ações de difusão artística.',
  instagram: '@ivivacultura',
  instagramUrl: 'https://www.instagram.com/ivivacultura/',
} as const;
