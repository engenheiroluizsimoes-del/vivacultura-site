import React from 'react';
import { Menu, X } from 'lucide-react';
import squareLogo from '../assets/0f91f03b39f7cbb5b458f36bab100422e8d6a94b.png';
import wideLogo from '../assets/c8a1c09d0148895d62a21222e31c4f1947cf7561.png';
import { instituto } from '../data/instituto';
import '../styles/viva.css';

const externalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

const areasAtuacao = [
  { letter: 'C', title: 'Cultura', desc: 'Promocao de acesso cultural, circulacao de experiencias e presenca publica da arte.', color: 'var(--color-redv)', bg: 'var(--color-redv)' },
  { letter: 'A', title: 'Artes', desc: 'Valorizacao de linguagens artisticas diversas e producao de experiencias sensiveis.', color: 'var(--color-yellowv)', bg: 'var(--color-yellowv)' },
  { letter: 'D', title: 'Difusao', desc: 'Acoes de circulacao artistica, comunicacao cultural e aproximacao com a comunidade.', color: 'var(--color-tealv)', bg: 'var(--color-tealv)' },
  { letter: 'F', title: 'Formacao artistica', desc: 'Capacitacoes, oficinas e processos de desenvolvimento criativo.', color: 'var(--color-purplev)', bg: 'var(--color-purplev)' },
  { letter: 'P', title: 'Producao cultural', desc: 'Planejamento, organizacao e execucao de projetos e eventos.', color: 'var(--color-pinkv)', bg: 'var(--color-pinkv)' },
  { letter: 'E', title: 'Eventos', desc: 'Acoes que mobilizam publicos, fortalecem vinculos e ampliam visibilidade.', color: 'var(--color-redv)', bg: 'var(--color-redv)' },
  { letter: 'S', title: 'Acoes socioculturais', desc: 'Projetos com proposito social, participacao e transformacao comunitaria.', color: 'var(--color-yellowv)', bg: 'var(--color-yellowv)' },
  { letter: 'I', title: 'Inclusao social', desc: 'Equidade, diversidade e oportunidades reais de participacao.', color: 'var(--color-tealv)', bg: 'var(--color-tealv)' },
];

const projetosInstitucionais = [
  {
    label: 'Formacao',
    title: 'Oficinas e capacitacao cultural',
    desc: 'Processos formativos voltados ao desenvolvimento artistico, criativo e profissional no setor cultural.',
    color: 'var(--color-yellowv)',
    image: 'https://images.unsplash.com/photo-1758671914940-ccab366cd5b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdHJlJTIwZGFuY2UlMjBjbGFzcyUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3NDkzNjI2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Participantes em atividade de formacao artistica',
  },
  {
    label: 'Difusao artistica',
    title: 'Eventos e acoes culturais',
    desc: 'Iniciativas de circulacao, encontros, apresentacoes e experiencias culturais abertas a comunidade.',
    color: 'var(--color-pinkv)',
    image: 'https://images.unsplash.com/photo-1766288019850-1cf72681be08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBhcnRzJTIwYW5kJTIwY3VsdHVyZSUyMGV2ZW50fGVufDF8fHx8MTc3NDkzNjI1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Evento cultural comunitario',
  },
  {
    label: 'Comunidade',
    title: 'Projetos socioculturais',
    desc: 'Acoes de inclusao social, fortalecimento comunitario, preservacao cultural e apoio ao setor cultural.',
    color: 'var(--color-tealv)',
    image: 'https://images.unsplash.com/photo-1590099453132-312adcca5d77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMGNvbW11bml0eSUyMHByb2plY3QlMjBwZW9wbGV8ZW58MXx8fHwxNzc0OTM2MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Grupo em projeto artistico comunitario',
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [headerScrolled, setHeaderScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.scrollY > 12);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.documentElement.classList.add('motion-ready');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.14 },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="antialiased font-body">
      <header className={`site-header sticky top-0 z-50 backdrop-blur-md bg-[var(--color-cream)]/90 border-b border-black/5 ${headerScrolled ? 'site-header--scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between py-4 gap-6">
            <a href="#inicio" className="flex items-center gap-3 min-w-0">
              <img src={squareLogo} alt="Simbolo do Instituto Viva Cultura" className="h-10 w-auto" />
              <span className="text-xl font-black tracking-tight text-[var(--color-graphite)] hidden sm:block">Viva Cultura</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-[var(--color-graphite)]/80">
              <a href="#sobre" className="nav-link hover:text-[var(--color-redv)] transition-colors">Quem somos</a>
              <a href="#essencia" className="nav-link hover:text-[var(--color-redv)] transition-colors">Essencia</a>
              <a href="#atuacao" className="nav-link hover:text-[var(--color-tealv)] transition-colors">Atuacao</a>
              <a href="#projetos" className="nav-link hover:text-[var(--color-yellowv)] transition-colors">Projetos</a>
              <a href={instituto.whatsappLink} {...externalLinkProps} className="action-button px-5 py-2.5 rounded-full bg-[var(--color-graphite)] text-white hover:bg-black transition-colors">
                Fale conosco
              </a>
            </nav>

            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              className="icon-button md:hidden p-2 text-[var(--color-graphite)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-menu md:hidden absolute top-full left-0 w-full bg-[var(--color-cream)] border-b border-black/5 py-4 px-5 flex flex-col gap-4 shadow-soft">
            <a href="#sobre" className="nav-link font-bold text-[var(--color-graphite)] py-2" onClick={() => setMobileMenuOpen(false)}>Quem somos</a>
            <a href="#essencia" className="nav-link font-bold text-[var(--color-graphite)] py-2" onClick={() => setMobileMenuOpen(false)}>Essencia</a>
            <a href="#atuacao" className="nav-link font-bold text-[var(--color-graphite)] py-2" onClick={() => setMobileMenuOpen(false)}>Atuacao</a>
            <a href="#projetos" className="nav-link font-bold text-[var(--color-graphite)] py-2" onClick={() => setMobileMenuOpen(false)}>Projetos</a>
            <a href={instituto.whatsappLink} {...externalLinkProps} className="nav-link font-bold text-[var(--color-graphite)] py-2" onClick={() => setMobileMenuOpen(false)}>Fale conosco</a>
          </div>
        )}
      </header>

      <main id="inicio">
        <section className="hero-section relative overflow-hidden pt-10 lg:pt-0">
          <div className="brand-ring absolute inset-0"></div>
          <div className="max-w-7xl mx-auto px-5 lg:px-8 py-20 lg:py-28 relative">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div className="hero-copy order-2 lg:order-1" data-reveal>
                <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white/60 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-graphite)]/75">
                  Instituto Viva Cultura
                </div>
                <p className="mt-5 text-sm sm:text-base font-bold uppercase tracking-[0.18em] text-[var(--color-graphite)]/60">
                  Cultura | Formacao | Inclusao | Transformacao social
                </p>
                <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[var(--color-graphite)] leading-[1.04] lg:leading-[0.94]">
                  Arte que acolhe,
                  <span className="hero-tagline block bg-gradient-to-r from-[var(--color-redv)] via-[var(--color-pinkv)] to-[var(--color-purplev)] bg-clip-text text-transparent">
                    acesso que transforma.
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-[var(--color-graphite)]/78 leading-relaxed">
                  No Instituto Viva Cultura, nos aproximamos pessoas da arte, da formacao e das oportunidades
                  culturais com acoes acolhedoras, estruturadas e relevantes para a comunidade.
                </p>
                <p className="mt-4 max-w-2xl text-sm sm:text-base text-[var(--color-graphite)]/70 leading-relaxed">
                  Nossa atuacao fortalece trajetorias, amplia o acesso e gera transformacao social com escuta,
                  presenca institucional e compromisso com impacto real.
                </p>

                <div className="mt-9 flex flex-col sm:flex-row gap-4">
                  <a href="#projetos" className="action-button px-7 py-4 rounded-2xl bg-[var(--color-graphite)] text-white font-bold shadow-soft hover:-translate-y-0.5 transition text-center">
                    Conheca nossos projetos
                  </a>
                  <a href={instituto.whatsappLink} {...externalLinkProps} className="action-button action-button--light px-7 py-4 rounded-2xl border border-[var(--color-graphite)]/12 bg-white/70 text-[var(--color-graphite)] font-bold hover:bg-white transition text-center">
                    Fale com o Instituto
                  </a>
                </div>

                <div className="reveal-grid mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
                  <div className="metric-card glass-card rounded-2xl p-4 border border-black/5 shadow-soft">
                    <div className="text-2xl font-black text-[var(--color-redv)]">Cultura</div>
                    <div className="mt-1 text-sm text-[var(--color-graphite)]/70">Acesso, pertencimento e participacao cultural</div>
                  </div>
                  <div className="metric-card glass-card rounded-2xl p-4 border border-black/5 shadow-soft">
                    <div className="text-2xl font-black text-[var(--color-tealv)]">Formacao</div>
                    <div className="mt-1 text-sm text-[var(--color-graphite)]/70">Aprendizagem, oficinas e desenvolvimento</div>
                  </div>
                  <div className="metric-card glass-card rounded-2xl p-4 border border-black/5 shadow-soft">
                    <div className="text-2xl font-black text-[var(--color-purplev)]">Inclusao</div>
                    <div className="mt-1 text-sm text-[var(--color-graphite)]/70">Oportunidades reais e transformacao social</div>
                  </div>
                </div>
              </div>

              <div className="relative order-1 lg:order-2" data-reveal>
                <div className="logo-panel rounded-[2rem] bg-white shadow-soft border border-black/5 p-8 lg:p-10 flex items-center justify-center">
                  <img src={squareLogo} alt="Marca do Instituto Viva Cultura" className="w-48 h-48 md:w-full md:max-w-md object-contain drop-shadow-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="section-line w-full"></div>
        </div>

        <section id="sobre" className="section-reveal py-20 lg:py-24" data-reveal>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] font-bold text-[var(--color-graphite)]/55">Quem somos</div>
                <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-[var(--color-graphite)]">
                  Muito alem de eventos, somos transformacao cultural com presenca humana e compromisso social.
                </h2>
                <p className="mt-6 text-lg text-[var(--color-graphite)]/78 leading-relaxed max-w-3xl">
                  Nos atuamos para que a cultura acolha, a formacao gere autonomia e a inclusao crie caminhos reais
                  para artistas, alunos, parceiros e comunidade. {instituto.textoQuemSomos}
                </p>
              </div>
              <div className="motion-card rounded-[2rem] bg-[var(--color-graphite)] text-white p-8 shadow-soft">
                <div className="text-sm uppercase tracking-[0.2em] font-bold text-white/60">Posicionamento</div>
                <p className="mt-4 text-2xl font-bold leading-tight">
                  Arte que acolhe, acesso que transforma e cultura em movimento para todos.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl bg-white/8 p-4">
                    <div className="font-bold text-[var(--color-yellowv)]">Institucional</div>
                    <div className="mt-1 text-white/70">Clareza, credibilidade e boa governanca.</div>
                  </div>
                  <div className="rounded-2xl bg-white/8 p-4">
                    <div className="font-bold text-[var(--color-pinkv)]">Cultural</div>
                    <div className="mt-1 text-white/70">Expressao, sensibilidade e presenca artistica.</div>
                  </div>
                  <div className="rounded-2xl bg-white/8 p-4">
                    <div className="font-bold text-[var(--color-tealv)]">Humano</div>
                    <div className="mt-1 text-white/70">Escuta, inclusao e desenvolvimento comunitario.</div>
                  </div>
                  <div className="rounded-2xl bg-white/8 p-4">
                    <div className="font-bold text-[var(--color-redv)]">Estrategico</div>
                    <div className="mt-1 text-white/70">Projetos com proposito e valor publico.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="essencia" className="section-reveal py-20 lg:py-24 bg-white" data-reveal>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="text-sm uppercase tracking-[0.25em] font-bold text-[var(--color-graphite)]/55">Essencia da marca</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-[var(--color-graphite)]">Missao, visao e valores em linguagem clara e forte.</h2>

            <div className="reveal-grid grid lg:grid-cols-3 gap-6 mt-10">
              <article className="motion-card rounded-[2rem] p-8 bg-[var(--color-cream)] border border-black/5 shadow-soft">
                <div className="w-12 h-1 rounded-full bg-[var(--color-redv)]"></div>
                <h3 className="mt-5 text-2xl font-black text-[var(--color-graphite)]">Missao</h3>
                <p className="mt-4 text-[var(--color-graphite)]/75 leading-relaxed">
                  Promover o acesso a cultura, as artes e as praticas formativas por meio de projetos, eventos,
                  capacitacoes e acoes de inclusao social que valorizem a diversidade, fortalecam o desenvolvimento
                  humano e ampliem as oportunidades de participacao cultural para todas as comunidades.
                </p>
              </article>
              <article className="motion-card rounded-[2rem] p-8 bg-[var(--color-cream)] border border-black/5 shadow-soft">
                <div className="w-12 h-1 rounded-full bg-[var(--color-yellowv)]"></div>
                <h3 className="mt-5 text-2xl font-black text-[var(--color-graphite)]">Visao</h3>
                <p className="mt-4 text-[var(--color-graphite)]/75 leading-relaxed">
                  Ser referencia regional e nacional na promocao cultural, na formacao artistica e na inovacao em projetos
                  socioculturais, consolidando-se como uma instituicao capaz de transformar vidas atraves da arte, fortalecer
                  identidades e contribuir para uma sociedade mais justa, criativa e participativa.
                </p>
              </article>
              <article className="motion-card rounded-[2rem] p-8 bg-[var(--color-graphite)] text-white shadow-soft">
                <div className="w-12 h-1 rounded-full bg-[var(--color-tealv)]"></div>
                <h3 className="mt-5 text-2xl font-black">Valores</h3>
                <ul className="mt-4 space-y-3 text-white/80 leading-relaxed">
                  <li><span className="font-bold text-[var(--color-yellowv)]">Acesso e inclusao:</span> oportunidades reais de participacao cultural.</li>
                  <li><span className="font-bold text-[var(--color-pinkv)]">Cultura e arte:</span> valorizacao das multiplas expressoes artisticas.</li>
                  <li><span className="font-bold text-[var(--color-redv)]">Etica e transparencia:</span> integridade, responsabilidade e confianca publica.</li>
                  <li><span className="font-bold text-[var(--color-tealv)]">Desenvolvimento humano:</span> arte como ferramenta de transformacao social.</li>
                  <li><span className="font-bold text-[var(--color-yellowv)]">Inovacao e criatividade:</span> solucoes culturais significativas e atuais.</li>
                  <li><span className="font-bold text-[var(--color-pinkv)]">Colaboracao:</span> parcerias para ampliar alcance e impacto.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="atuacao" className="section-reveal py-20 lg:py-24 bg-[var(--color-cream)]" data-reveal>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] font-bold text-[var(--color-graphite)]/55">Areas de atuacao</div>
                <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-[var(--color-graphite)]">Frentes que conectam arte, comunidade e desenvolvimento.</h2>
              </div>
              <p className="max-w-xl text-[var(--color-graphite)]/72 leading-relaxed">
                O Instituto organiza sua presenca em diferentes eixos para construir experiencias culturais completas, inclusivas e sustentaveis.
              </p>
            </div>

            <div className="reveal-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              {areasAtuacao.map((item, i) => (
                <article key={i} className="motion-card rounded-[1.8rem] p-6 bg-white border border-black/5 shadow-soft hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center font-black" style={{ color: item.color, backgroundColor: `color-mix(in srgb, ${item.bg} 10%, transparent)` }}>
                    {item.letter}
                  </div>
                  <h3 className="mt-5 text-xl font-black text-[var(--color-graphite)]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-graphite)]/72">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-reveal py-20 lg:py-24 bg-white" data-reveal>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] font-bold text-[var(--color-graphite)]/55">Impacto e proposito</div>
                <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-[var(--color-graphite)]">Mais do que eventos: presenca cultural com significado.</h2>
                <p className="mt-6 text-lg text-[var(--color-graphite)]/78 leading-relaxed">
                  O trabalho do Instituto busca ampliar o acesso a cultura, fortalecer identidades, impulsionar trajetorias criativas e gerar valor social real nos territorios em que atua.
                </p>
              </div>
              <div className="reveal-grid grid sm:grid-cols-2 gap-5">
                <div className="motion-card rounded-[1.8rem] p-7 bg-[var(--color-redv)] text-white shadow-soft">
                  <div className="text-sm uppercase tracking-[0.2em] font-bold text-white/70">Acesso cultural</div>
                  <p className="mt-3 text-2xl font-black leading-tight">Cultura como direito e presenca viva na comunidade.</p>
                </div>
                <div className="motion-card rounded-[1.8rem] p-7 bg-[var(--color-tealv)] text-[var(--color-graphite)] shadow-soft">
                  <div className="text-sm uppercase tracking-[0.2em] font-bold text-[var(--color-graphite)]/60">Formacao</div>
                  <p className="mt-3 text-2xl font-black leading-tight">Aprendizagem artistica conectada a proposito e desenvolvimento humano.</p>
                </div>
                <div className="motion-card rounded-[1.8rem] p-7 bg-[var(--color-purplev)] text-white shadow-soft">
                  <div className="text-sm uppercase tracking-[0.2em] font-bold text-white/70">Identidade</div>
                  <p className="mt-3 text-2xl font-black leading-tight">Fortalecimento de vinculos, repertorios e pertencimento cultural.</p>
                </div>
                <div className="motion-card rounded-[1.8rem] p-7 bg-[var(--color-yellowv)] text-[var(--color-graphite)] shadow-soft">
                  <div className="text-sm uppercase tracking-[0.2em] font-bold text-[var(--color-graphite)]/60">Transformacao</div>
                  <p className="mt-3 text-2xl font-black leading-tight">Projetos que geram impacto social, visibilidade e participacao.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-reveal py-20 lg:py-24 bg-[var(--color-cream)]" data-reveal>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="text-sm uppercase tracking-[0.25em] font-bold text-[var(--color-graphite)]/55">Credibilidade institucional</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-[var(--color-graphite)]">Estrutura, proposito e compromisso publico.</h2>

            <div className="reveal-grid grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
              <article className="motion-card rounded-[1.8rem] p-7 bg-white border border-black/5 shadow-soft hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-black text-[var(--color-graphite)]">Atuacao formal</h3>
                <p className="mt-3 text-[var(--color-graphite)]/72 leading-relaxed">Presenca institucional organizada para desenvolver acoes culturais e socioculturais com consistencia.</p>
              </article>
              <article className="motion-card rounded-[1.8rem] p-7 bg-white border border-black/5 shadow-soft hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-black text-[var(--color-graphite)]">Etica e transparencia</h3>
                <p className="mt-3 text-[var(--color-graphite)]/72 leading-relaxed">Compromisso com integridade, responsabilidade administrativa e confianca publica.</p>
              </article>
              <article className="motion-card rounded-[1.8rem] p-7 bg-white border border-black/5 shadow-soft hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-black text-[var(--color-graphite)]">Capacidade de execucao</h3>
                <p className="mt-3 text-[var(--color-graphite)]/72 leading-relaxed">Projetos, eventos e formacoes planejados com intencao artistica e organizacao operacional.</p>
              </article>
              <article className="motion-card rounded-[1.8rem] p-7 bg-white border border-black/5 shadow-soft hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-black text-[var(--color-graphite)]">Valor comunitario</h3>
                <p className="mt-3 text-[var(--color-graphite)]/72 leading-relaxed">A cultura como ferramenta de participacao, cidadania, pertencimento e transformacao local.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="projetos" className="section-reveal py-20 lg:py-24 bg-[var(--color-graphite)] text-white" data-reveal>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] font-bold text-white/45">Projetos e iniciativas</div>
                <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight">Projetos socioculturais com foco em formacao, difusao artistica e comunidade.</h2>
              </div>
              <p className="max-w-xl text-white/70 leading-relaxed">
                As frentes institucionais do Viva Cultura reunem oficinas, eventos, capacitacoes, preservacao cultural e apoio ao setor cultural.
              </p>
            </div>

            <div className="reveal-grid grid md:grid-cols-3 gap-5 mt-10">
              {projetosInstitucionais.map((item) => (
                <article key={item.title} className="project-card motion-card rounded-[1.8rem] overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-all group flex flex-col">
                  <div className="h-48 w-full overflow-hidden">
                    <img src={item.image} alt={item.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-7 flex-1">
                    <div className="text-sm uppercase tracking-[0.2em] font-bold" style={{ color: item.color }}>{item.label}</div>
                    <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                    <p className="mt-4 text-white/70 leading-relaxed">{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section-reveal py-20 lg:py-24 bg-[var(--color-cream)]" data-reveal>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="motion-card rounded-[2rem] bg-white shadow-soft border border-black/5 p-8 lg:p-12">
              <div className="grid lg:grid-cols-[1fr_0.95fr] gap-10 items-start">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] font-bold text-[var(--color-graphite)]/55">Contato</div>
                  <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-[var(--color-graphite)]">Vamos construir novas oportunidades culturais juntos.</h2>
                  <p className="mt-6 text-lg text-[var(--color-graphite)]/76 leading-relaxed max-w-2xl">
                    Entre em contato pelos canais institucionais do Instituto Viva Cultura para informacoes, parcerias, propostas e relacionamento com a comunidade.
                  </p>
                </div>
                <div className="reveal-grid grid gap-4">
                  <a href={instituto.whatsappLink} {...externalLinkProps} className="contact-card motion-card rounded-2xl border border-black/5 p-5 bg-[var(--color-cream)] hover:border-[var(--color-redv)]/30 transition-colors">
                    <div className="text-sm uppercase tracking-[0.2em] font-bold text-[var(--color-redv)]">WhatsApp</div>
                    <div className="mt-2 text-[var(--color-graphite)]/76">{instituto.telefoneVisual}</div>
                  </a>
                  <a href={`mailto:${instituto.email}`} className="contact-card motion-card rounded-2xl border border-black/5 p-5 bg-[var(--color-cream)] hover:border-[var(--color-purplev)]/30 transition-colors">
                    <div className="text-sm uppercase tracking-[0.2em] font-bold text-[var(--color-purplev)]">E-mail</div>
                    <div className="mt-2 text-[var(--color-graphite)]/76 break-words">{instituto.email}</div>
                  </a>
                  <a href={instituto.instagramUrl} {...externalLinkProps} className="contact-card motion-card rounded-2xl border border-black/5 p-5 bg-[var(--color-cream)] hover:border-[var(--color-pinkv)]/30 transition-colors">
                    <div className="text-sm uppercase tracking-[0.2em] font-bold text-[var(--color-pinkv)]">Instagram</div>
                    <div className="mt-2 text-[var(--color-graphite)]/76">{instituto.instagram}</div>
                  </a>
                  <div className="contact-card motion-card rounded-2xl border border-black/5 p-5 bg-[var(--color-cream)]">
                    <div className="text-sm uppercase tracking-[0.2em] font-bold text-[var(--color-tealv)]">Endereco</div>
                    <div className="mt-2 text-[var(--color-graphite)]/76">{instituto.endereco}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="privacidade" className="section-reveal py-20 lg:py-24 bg-white" data-reveal>
          <div className="max-w-4xl mx-auto px-5 lg:px-8">
            <div className="text-sm uppercase tracking-[0.25em] font-bold text-[var(--color-graphite)]/55">Politica de Privacidade</div>
            <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-[var(--color-graphite)]">Privacidade e canais de atendimento.</h2>
            <div className="mt-6 space-y-4 text-[var(--color-graphite)]/76 leading-relaxed">
              <p>
                O Instituto Viva Cultura utiliza os dados informados voluntariamente em contatos por WhatsApp e e-mail institucional para responder solicitacoes, encaminhar propostas, manter relacionamento institucional e prestar informacoes sobre projetos e acoes culturais.
              </p>
              <p>
                As informacoes recebidas sao tratadas com responsabilidade e nao sao publicadas no site. Para duvidas, solicitacoes ou assuntos relacionados a dados pessoais, entre em contato pelo e-mail <a href={`mailto:${instituto.email}`} className="font-bold text-[var(--color-purplev)] hover:underline">{instituto.email}</a>.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-reveal bg-[var(--color-graphite)] text-white" data-reveal>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr] gap-10 lg:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex flex-col gap-4">
                <img src={wideLogo} alt="Assinatura visual do Instituto Viva Cultura" className="h-16 w-auto object-contain object-left" />
              </div>
              <p className="mt-6 text-white/60 leading-relaxed text-sm max-w-xs">
                {instituto.rodapeTexto}
              </p>
            </div>

            <div>
              <div className="text-sm font-bold tracking-wide mb-4">Navegacao</div>
              <ul className="space-y-3 text-white/60 text-sm">
                <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#sobre" className="hover:text-white transition-colors">Quem somos</a></li>
                <li><a href="#essencia" className="hover:text-white transition-colors">Essencia</a></li>
                <li><a href="#atuacao" className="hover:text-white transition-colors">Areas de atuacao</a></li>
                <li><a href="#projetos" className="hover:text-white transition-colors">Projetos</a></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-bold tracking-wide mb-4">Atuacao</div>
              <ul className="space-y-3 text-white/60 text-sm">
                <li><a href="#atuacao" className="hover:text-white transition-colors">Cultura e arte</a></li>
                <li><a href="#atuacao" className="hover:text-white transition-colors">Formacao e oficinas</a></li>
                <li><a href="#atuacao" className="hover:text-white transition-colors">Eventos e difusao</a></li>
                <li><a href="#atuacao" className="hover:text-white transition-colors">Acoes socioculturais</a></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-bold tracking-wide mb-4">Contato</div>
              <ul className="space-y-3 text-white/60 text-sm">
                <li>Endereco: {instituto.endereco}</li>
                <li><a href={`mailto:${instituto.email}`} className="hover:text-white transition-colors break-words">{instituto.email}</a></li>
                <li><a href={instituto.whatsappLink} {...externalLinkProps} className="hover:text-white transition-colors">WhatsApp: {instituto.telefoneVisual}</a></li>
                <li><a href={instituto.instagramUrl} {...externalLinkProps} className="hover:text-white transition-colors">Instagram: {instituto.instagram}</a></li>
                <li>Representante legal: {instituto.representanteLegal} - {instituto.cargo}</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-white/40">
            <div>&copy; {new Date().getFullYear()} {instituto.nome}. Todos os direitos reservados.</div>
            <div className="flex items-center gap-4">
              <a href="#privacidade" className="hover:text-white transition-colors">Politica de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
