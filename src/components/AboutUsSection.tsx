import React, { useState } from 'react';
import { ChefHat, Heart, Award, Sparkles, MapPin, Flame, Package, CheckCircle2, ArrowRight, Clock, Leaf, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutUsSectionProps {
  onExploreMenu: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onExploreMenu }) => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);
  const [isManifestoExpanded, setIsManifestoExpanded] = useState<boolean>(false);

  const pillars = [
    {
      id: 0,
      title: 'A Invenção do Formato 10x25cm',
      shortTitle: 'Formato 10x25cm',
      subtitle: 'Geometria italiana que preserva a crocância',
      icon: Package,
      text: 'A pizza redonda tradicional foi inventada para mesas de salão. Quando colocada em uma caixa de delivery fechada, o calor e o vapor sobem e se concentram no centro, deixando a massa úmida e amolecida. Na Quadratta, criamos a proporção 10 x 25 cm (250 cm²): a massa assa de forma uniforme de ponta a ponta na pedra, eliminando o centro murcho e garantindo mordidas crocantes da primeira à última fatia.',
      highlight: '250 cm² de crocância sem desperdício',
    },
    {
      id: 1,
      title: 'Massa com Fermentação Lenta de 48 Horas',
      shortTitle: 'Fermentação 48h',
      subtitle: 'Farinha nobre e maturação a frio prolongada',
      icon: Flame,
      text: 'Nossa massa não leva aceleradores químicos. Usamos um blend especial de farinha de trigo de moagem pura, água mineral, azeite extravirgem e mínima quantidade de fermento. A maturação descansa em ambiente controlado por 48 horas. Durante esse tempo, os açúcares complexos são digeridos naturalmente pelas leveduras, resultando em uma massa levíssima, aromática e que não pesa no estômago.',
      highlight: 'Digestão leve, casca fininha e crocante',
    },
    {
      id: 2,
      title: 'Ingredientes de Verdade até a Borda',
      shortTitle: 'Recheio Generoso',
      subtitle: 'Sem borda oca e com queijo selecionado',
      icon: Utensils,
      text: 'Acreditamos que quem pede uma pizza artesanal merece sabor em cada centímetro quadrado. Aqui não existe a famosa "borda de ar". Nosso molho é feito com tomates maduros processados com pedaços rústicos e manjericão fresco, coberto por queijo mussarela fatiado fino para derretimento equilibrado, linguiça calabresa defumada na medida e Catupiry genuíno.',
      highlight: '100% da extensão aproveitada com recheio',
    },
    {
      id: 3,
      title: 'Feito com Amor em Vila Andrade e Morumbi',
      shortTitle: 'Raízes no Bairro',
      subtitle: 'Pizzaria artesanal de vizinhança com entrega expressa',
      icon: MapPin,
      text: 'Nascemos e operamos exclusivamente para atender os moradores de Vila Andrade, Morumbi, Panamby, Jardim Sul e Portal do Morumbi. Não somos uma franquia impessoal ou uma indústria de massa congelada: cada pizza é aberta à mão no momento do pedido, vai direto para a pedra a mais de 400°C e viaja em caixa térmica kraft ecológica para chegar fumegante na sua porta.',
      highlight: 'Entregas em 25 a 40 minutos quentinhas',
    },
  ];

  const milestones = [
    {
      year: 'O Desafio',
      title: 'O Fim da Briga pelo Meio a Meio',
      description: 'Cansados de pizzas redondas com centro borrachudo e disputas familiares por sabores, os fundadores decidiram criar uma pizza individual que não fosse apenas "um pedaço", mas uma refeição completa, nobre e com identidade própria.',
    },
    {
      year: 'A Criação',
      title: 'O Encontro com a Tradição Romana',
      description: 'Estudando as clássicas "pizza al taglio" e "pinsas" italianas de Roma e Nápoles, nasceu o formato 10x25cm: a largura exata para segurar com uma mão e o comprimento perfeito para acomodar recheio generoso.',
    },
    {
      year: 'A Caixa',
      title: 'A Embalagem Kraft sob Medida',
      description: 'Desenvolvemos a caixa retangular térmica em papelão kraft biodegradável com respiradores superiores calculados milimetricamente para deixar a umidade condensada escapar sem resfriar a pizza.',
    },
    {
      year: 'Hoje',
      title: 'A Preferida da Vila Andrade e Morumbi',
      description: 'Milhares de pizzas entregues com padrão artesanal inegociável, atendimento direto e humanizado via WhatsApp e o orgulho de oferecer uma nova maneira de comer pizza.',
    },
  ];

  return (
    <section
      id="quem-somos"
      className="py-14 sm:py-20 lg:py-24 bg-[#14110E] border-b border-[#2B231D] relative overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background Ambience: Subtle Warm Backlight */}
      <div className="absolute top-1/4 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#B07D4F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 sm:w-80 h-72 sm:h-80 bg-[#CD212A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Unboxed metadata, refined typography */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3"
        >
          {/* Brand Origin Text Kicker - No Pill Badge */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#C49A6C]">
            <span>Nossa História</span>
            <span aria-hidden="true" className="text-[#8A5832]">·</span>
            <span>Tradição & Autenticidade</span>
            <span aria-hidden="true" className="text-[#8A5832]">·</span>
            <span className="text-[#E6D5C3]">Vila Andrade / Morumbi</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-5xl text-[#F5F2EB] tracking-tight text-balance leading-tight">
            Quem Somos: A Paixão por Reinventar a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#EAB308] to-[#C49A6C]">
              Pizza Artesanal
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A89886] max-w-2xl mx-auto leading-relaxed font-normal">
            A Quadratta nasceu de uma convicção simples: a pizza que você come em casa não precisa perder a crocância, o aroma de forno na pedra e a dignidade no trajeto do delivery.
          </p>
        </motion.div>

        {/* 2-Column Split: The Origin Story & Real Imagery Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          
          {/* Left Column (7 cols): Editorial Brand Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-5 text-left"
          >
            {/* Story Lead Paragraph */}
            <div className="space-y-4 text-sm sm:text-base text-[#C5B7A7] leading-relaxed">
              <p className="text-base sm:text-lg text-[#F5F2EB] font-medium leading-snug">
                Fundada na zona sul de São Paulo por apaixonados pela boa gastronomia italiana, a <strong className="text-[#F59E0B] font-semibold">Quadratta Pizza Artesanal</strong> surgiu para resolver o maior problema do delivery moderno: <span className="text-white">a pizza que chega murcha e morna.</span>
              </p>
              
              <p>
                Durante décadas, o mercado aceitou caixas redondas padronizadas que funcionam como estufas de vapor. Nós recusamos essa conformidade. Fomos buscar inspiração nas clássicas receitas romanas de fermentação a frio e na praticidade das fatias alongadas para criar um formato inédito no Brasil: a <span className="text-[#E6D5C3] font-semibold">pizza individual alongada de 10 x 25 cm</span>.
              </p>

              <p>
                Aqui, cada massa é aberta com carinho minutos antes de ir ao forno. O calor da pedra refratária doura a casca em segundos, preservando a umidade do recheio sem encharcar o fundo. O resultado é uma pizza leve, crocante e perfumada, que você come confortavelmente com as mãos, no sofá, na mesa de trabalho ou em um jantar a dois sem complicação.
              </p>
            </div>

            {/* Founder Quote Card with Italian Ribbon Accent */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#1C1612] border border-[#2E241E] relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 flex">
                <div className="w-1/3 bg-[#008C45]"></div>
                <div className="w-1/3 bg-white"></div>
                <div className="w-1/3 bg-[#CD212A]"></div>
              </div>
              
              <div className="flex items-start gap-3.5 pt-1">
                <div className="w-10 h-10 rounded-xl bg-[#271E18] border border-[#B07D4F]/40 flex items-center justify-center text-[#C49A6C] shrink-0">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm italic text-[#E6D5C3] font-serif leading-relaxed">
                    "Não acreditamos em pizza feita para durar horas em estufa. Acreditamos no calor da pedra, na farinha descansada 48 horas e no respeito pelo paladar de quem ama pizza de verdade."
                  </p>
                  <div className="mt-2 text-[11px] text-[#A89886] font-medium flex items-center gap-2">
                    <span className="text-[#F59E0B] font-bold">Mestres Pizzaiolos Quadratta</span>
                    <span aria-hidden="true">·</span>
                    <span>Vila Andrade / Morumbi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#E6D5C3]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="font-semibold">Farinha Especial Pura</span>
              </div>
              <div className="flex items-center gap-2 text-[#E6D5C3]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="font-semibold">Fermentação 48h Natural</span>
              </div>
              <div className="flex items-center gap-2 text-[#E6D5C3]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="font-semibold">Forno de Pedra Quente</span>
              </div>
              <div className="flex items-center gap-2 text-[#E6D5C3]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="font-semibold">Caixa Kraft Térmica</span>
              </div>
              <div className="flex items-center gap-2 text-[#E6D5C3]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="font-semibold">Atendimento Humanizado</span>
              </div>
              <div className="flex items-center gap-2 text-[#E6D5C3]">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                <span className="font-semibold">Entrega Rápida Local</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column (5 cols): Authentic Visual Heritage Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-2xl bg-[#1C1612] border border-[#3E3026] p-3 sm:p-4 shadow-2xl relative overflow-hidden group">
              
              {/* Image Frame with real local flyer asset */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#14110E] border border-[#2B231D]">
                <img
                  src="/assets/aistudio/IMG_1457_43f83bca.png"
                  alt="Pizza artesanal Quadratta aberta na caixa térmica"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Dimension Tag */}
                <div className="absolute top-3 left-3 bg-[#14110E]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#B07D4F]/50 text-white text-xs font-bold shadow-lg flex items-center gap-1.5">
                  <span className="text-[#F59E0B]">10 × 25 cm</span>
                  <span className="text-[10px] text-[#A89886]">| O Formato Original</span>
                </div>

                {/* Subtitle Scrim */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[#14110E] via-[#14110E]/80 to-transparent">
                  <p className="text-xs font-bold text-[#F5F2EB]">
                    Quadratta Pizza Artesanal
                  </p>
                  <p className="text-[11px] text-[#C49A6C]">
                    Uma nova maneira de comer pizza · Feita na hora
                  </p>
                </div>
              </div>

              {/* Secondary Detail Row: The Box packaging link */}
              <div className="mt-3 pt-3 border-t border-[#2E241E] flex items-center justify-between text-xs text-[#A89886]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#16A34A]"></div>
                  <span className="text-[#E6D5C3]">100% Papelão Kraft Reciclável</span>
                </div>
                <span className="text-[#C49A6C] font-semibold font-mono">
                  250 cm² de puro sabor
                </span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Interactive 4 Pillars Showcase: Tabbed Explorer */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F2EB]">
              Os 4 Pilares da Filosofia Quadratta
            </h3>
            <p className="text-xs sm:text-sm text-[#A89886]">
              Clique em cada pilar para entender o que torna nossa pizza diferente de tudo o que você já experimentou no delivery.
            </p>
          </div>

          {/* Pillar Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              const isSelected = selectedPillar === pillar.id;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar.id)}
                  className={`p-3 sm:p-4 rounded-xl text-left transition-all border cursor-pointer min-h-[72px] flex items-center gap-3 ${
                    isSelected
                      ? 'bg-[#271E18] text-[#F59E0B] border-[#F59E0B]/50 shadow-md'
                      : 'bg-[#1C1612] text-[#C5B7A7] border-[#2E241E] hover:border-[#3E3026] hover:text-white'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 ${
                      isSelected
                        ? 'bg-[#F59E0B] text-[#14110E]'
                        : 'bg-[#221A15] text-[#C49A6C]'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs sm:text-sm font-bold truncate">
                      {pillar.shortTitle}
                    </span>
                    <span className="block text-[10px] text-[#8A7B6E] truncate">
                      Pilar 0{pillar.id + 1}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Pillar Content Box */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPillar}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-8 rounded-2xl bg-[#1C1612] border border-[#3E3026] shadow-xl text-left relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 mb-4 border-b border-[#2B231D]">
                <div>
                  <div className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider mb-0.5">
                    Pilar 0{pillars[selectedPillar].id + 1} · {pillars[selectedPillar].shortTitle}
                  </div>
                  <h4 className="font-display font-bold text-lg sm:text-2xl text-[#F5F2EB]">
                    {pillars[selectedPillar].title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#C49A6C] mt-0.5">
                    {pillars[selectedPillar].subtitle}
                  </p>
                </div>

                <div className="shrink-0 px-3.5 py-1.5 rounded-lg bg-[#271E18] border border-[#B07D4F]/40 text-xs font-semibold text-[#E6D5C3]">
                  {pillars[selectedPillar].highlight}
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#C5B7A7] leading-relaxed">
                {pillars[selectedPillar].text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Milestones Timeline: Como a Quadratta evoluiu */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F2EB]">
              Nossa Trajetória
            </h3>
            <p className="text-xs sm:text-sm text-[#A89886]">
              Os passos que transformaram uma inquietação na pizzaria mais amada de Vila Andrade e Morumbi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#191410] border border-[#2B231D] flex flex-col justify-between space-y-3 relative hover:border-[#B07D4F]/40 transition-colors"
              >
                <div>
                  <div className="text-xs font-extrabold text-[#F59E0B] uppercase tracking-wider mb-1">
                    {m.year}
                  </div>
                  <h4 className="font-display font-bold text-base text-[#F5F2EB] leading-snug">
                    {m.title}
                  </h4>
                  <p className="text-xs text-[#A89886] mt-2 leading-relaxed">
                    {m.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#231A14] flex items-center gap-1.5 text-[10px] text-[#6B5A4E]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B07D4F]"></span>
                  <span>Etapa {idx + 1} de 4</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quantifiable Craftsmanship Metrics Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1C1612] via-[#241C16] to-[#1C1612] border border-[#3E3026] mb-12 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#F59E0B] tabular-nums">
                48h
              </div>
              <div className="text-xs font-bold text-[#F5F2EB] uppercase tracking-wider">
                Fermentação Natural
              </div>
              <div className="text-[11px] text-[#A89886]">
                Maturação a frio para digestão leve
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#F59E0B] tabular-nums">
                10x25cm
              </div>
              <div className="text-xs font-bold text-[#F5F2EB] uppercase tracking-wider">
                Dimensão Alongada
              </div>
              <div className="text-[11px] text-[#A89886]">
                250 cm² de recheio generoso
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#F59E0B] tabular-nums">
                450°C
              </div>
              <div className="text-xs font-bold text-[#F5F2EB] uppercase tracking-wider">
                Forno na Pedra
              </div>
              <div className="text-[11px] text-[#A89886]">
                Gratinado e crocância em minutos
              </div>
            </div>

            <div className="space-y-1">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#22C55E] tabular-nums">
                100%
              </div>
              <div className="text-xs font-bold text-[#F5F2EB] uppercase tracking-wider">
                Caixa Kraft Térmica
              </div>
              <div className="text-[11px] text-[#A89886]">
                Sustentável e sem amolecer a massa
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA: Convidar o usuário a experimentar o sabor */}
        <div className="text-center space-y-4">
          <p className="text-sm text-[#C49A6C] font-serif italic text-balance">
            "Agora que você conhece a nossa história, que tal provar uma fatia do nosso propósito?"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onExploreMenu}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#B07D4F] hover:bg-[#8A5832] text-white font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98 min-h-[48px] text-sm"
            >
              <span>Ver Cardápio dos 6 Sabores</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/5511984937529?text=Ol%C3%A1!%20Li%20a%20hist%C3%B3ria%20da%20Quadratta%20e%20gostaria%20de%20fazer%20um%20pedido."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#1C1612] hover:bg-[#271E18] text-[#4ADE80] hover:text-[#86EFAC] font-bold rounded-xl border border-[#2E241E] hover:border-[#4ADE80]/40 transition-all flex items-center justify-center gap-2 min-h-[48px] text-sm"
            >
              <span>Falar no WhatsApp (11) 98493-7529</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
