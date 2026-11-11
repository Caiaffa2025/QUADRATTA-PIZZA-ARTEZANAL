import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, ZoomIn, ZoomOut, RotateCcw, X, ChevronLeft, ChevronRight, Phone, Download, Eye, Sparkles } from 'lucide-react';

interface FlyerItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  description: string;
  highlights: string[];
}

const FLYERS: FlyerItem[] = [
  {
    id: 'pizza-aberta',
    title: 'Encarte 1: Pizza Aberta na Caixa',
    subtitle: 'Massa Fininha, Recheio Generoso & Cardápio',
    image: '/assets/aistudio/IMG_1457_43f83bca.png',
    badge: 'Pizza Pronta & Forno na Pedra',
    description: 'Visualização completa da pizza individual alongada 10 x 25 cm recém-saída do forno, com cardápio oficial, ingredientes e contatos.',
    highlights: [
      'Foto real da pizza assada e gratinada',
      'Cardápio dos 6 sabores tradicionais',
      'Destaque para o formato 10 x 25 cm',
      'WhatsApp direto: (11) 98493-7529',
    ],
  },
  {
    id: 'caixa-kraft',
    title: 'Encarte 2: Caixa Kraft Quadratta',
    subtitle: 'Embalagem Exclusiva 10x25cm & Identidade',
    image: '/assets/aistudio/IMG_1458_04ba9bba.jpeg',
    badge: 'Design da Caixa Exclusiva',
    description: 'Apresentação da caixa kraft térmica alongada desenvolvida para conservar o calor e a crocância durante o trajeto do delivery.',
    highlights: [
      'Caixa kraft reforçada e sustentável',
      'Encaixe perfeito da pizza de 10 x 25 cm',
      'Marca Quadratta Pizza Artesanal',
      'Atendimento Vila Andrade e Morumbi',
    ],
  },
];

export const FlyerShowcaseSection: React.FC = () => {
  const [selectedView, setSelectedView] = useState<'both' | 'pizza-aberta' | 'caixa-kraft'>('both');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const activeFlyerForLightbox = lightboxIndex !== null ? FLYERS[lightboxIndex] : null;

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoomLevel(1);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
    setZoomLevel(1);
  };

  const handleNextLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % FLYERS.length);
      setZoomLevel(1);
    }
  };

  const handlePrevLightbox = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + FLYERS.length) % FLYERS.length);
      setZoomLevel(1);
    }
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.35, 2.5));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.35, 0.7));
  };

  const handleResetZoom = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  return (
    <section id="encartes" className="py-14 sm:py-24 bg-[#110D0B] border-y border-[#2B231D] relative overflow-hidden scroll-mt-20 sm:scroll-mt-24">
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B07D4F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#CD212A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#271E18] border border-[#B07D4F]/40 shadow-sm text-[11px] sm:text-xs font-semibold text-[#E6D5C3] mb-3">
            <Eye className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span className="uppercase tracking-widest text-[#C49A6C] font-bold">Galeria dos Encartes Originais</span>
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F5F2EB] tracking-tight text-balance">
            Encartes Oficiais em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#EAB308] to-[#C49A6C]">Tamanho Maior</span>
          </h2>

          <p className="text-xs sm:text-sm lg:text-base text-[#A89886] mt-2 max-w-2xl mx-auto leading-relaxed">
            Consulte o material gráfico oficial da Quadratta em alta definição. Clique em qualquer imagem para abrir o visualizador de tela cheia com zoom detalhado.
          </p>

          {/* Interactive View Switcher Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedView('both')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[40px] flex items-center gap-2 ${
                selectedView === 'both'
                  ? 'bg-[#B07D4F] text-white shadow-lg shadow-[#B07D4F]/20'
                  : 'bg-[#1C1612] text-[#A89886] hover:text-white border border-[#2E241E] hover:border-[#3E3026]'
              }`}
            >
              <span>Ver Ambos (Lado a Lado)</span>
            </button>
            <button
              onClick={() => setSelectedView('pizza-aberta')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[40px] flex items-center gap-2 ${
                selectedView === 'pizza-aberta'
                  ? 'bg-[#B07D4F] text-white shadow-lg shadow-[#B07D4F]/20'
                  : 'bg-[#1C1612] text-[#A89886] hover:text-white border border-[#2E241E] hover:border-[#3E3026]'
              }`}
            >
              <span>Encarte 1: Pizza Aberta</span>
            </button>
            <button
              onClick={() => setSelectedView('caixa-kraft')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[40px] flex items-center gap-2 ${
                selectedView === 'caixa-kraft'
                  ? 'bg-[#B07D4F] text-white shadow-lg shadow-[#B07D4F]/20'
                  : 'bg-[#1C1612] text-[#A89886] hover:text-white border border-[#2E241E] hover:border-[#3E3026]'
              }`}
            >
              <span>Encarte 2: Caixa Fechada</span>
            </button>
          </div>
        </motion.div>

        {/* Gallery Content Area */}
        <div className="space-y-8">
          {/* Side-by-side or Single View */}
          <div
            className={`grid gap-6 sm:gap-8 items-start ${
              selectedView === 'both'
                ? 'grid-cols-1 lg:grid-cols-2'
                : 'grid-cols-1 max-w-3xl mx-auto'
            }`}
          >
            {FLYERS.filter(flyer => selectedView === 'both' || selectedView === flyer.id).map((flyer, idx) => {
              const originalIndex = FLYERS.findIndex(f => f.id === flyer.id);

              return (
                <motion.div
                  key={flyer.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl bg-[#181310] border border-[#2F241D] hover:border-[#B07D4F]/60 transition-all duration-300 shadow-2xl overflow-hidden flex flex-col group"
                >
                  {/* Card Header Top Bar */}
                  <div className="p-3.5 sm:p-4 bg-[#1F1813] border-b border-[#2C221A] flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] sm:text-xs font-bold text-[#F59E0B] uppercase tracking-wider bg-[#2A1E16] px-2 py-0.5 rounded border border-[#B07D4F]/30">
                          {flyer.badge}
                        </span>
                        <span className="hidden sm:inline text-xs text-[#A89886]">· Alta Definição</span>
                      </div>
                      <h3 className="font-display font-bold text-sm sm:text-base text-[#F5F2EB] mt-1 truncate">
                        {flyer.title}
                      </h3>
                    </div>

                    {/* Quick Expand Button */}
                    <button
                      onClick={() => handleOpenLightbox(originalIndex)}
                      className="px-3 py-1.5 bg-[#B07D4F] hover:bg-[#8A5832] text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 shadow-md cursor-pointer active:scale-95 min-h-[36px]"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Ampliar</span>
                    </button>
                  </div>

                  {/* Main Large Image Container: Generous Height with Object-Contain (No Cropping) */}
                  <div
                    onClick={() => handleOpenLightbox(originalIndex)}
                    className="relative w-full h-[450px] sm:h-[580px] md:h-[650px] lg:h-[720px] bg-[#0C0907] p-2 sm:p-4 flex items-center justify-center cursor-zoom-in group/img overflow-hidden"
                  >
                    {/* Background checkerboard subtle hint */}
                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                    <img
                      src={flyer.image}
                      alt={flyer.title}
                      className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-500 group-hover/img:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Floating Zoom Callout Tag on Hover */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#14110E]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#B07D4F]/70 text-white text-xs font-semibold flex items-center gap-2 shadow-xl opacity-90 group-hover/img:opacity-100 transition-opacity">
                      <ZoomIn className="w-4 h-4 text-[#F59E0B]" />
                      <span>Clique para abrir em Tela Cheia e Dar Zoom</span>
                    </div>

                    {/* Top Right Zoom Icon Indicator */}
                    <div className="absolute top-4 right-4 p-2 bg-[#14110E]/80 backdrop-blur-md rounded-lg text-[#F5F2EB] border border-[#2F241D] opacity-75 group-hover/img:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Description & Key Info Highlights */}
                  <div className="p-4 sm:p-5 bg-[#1A1410] border-t border-[#2C221A] space-y-3">
                    <p className="text-xs sm:text-sm text-[#C5B7A7] leading-relaxed">
                      {flyer.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-[#261E18]">
                      {flyer.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-[11px] sm:text-xs text-[#E6D5C3]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#CD212A] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-2 flex items-center justify-between gap-3">
                      <button
                        onClick={() => handleOpenLightbox(originalIndex)}
                        className="text-xs font-bold text-[#C49A6C] hover:text-[#F5F2EB] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>Ver detalhes em tela cheia</span>
                      </button>

                      <a
                        href={flyer.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-medium text-[#A89886] hover:text-white transition-colors flex items-center gap-1"
                      >
                        <Download className="w-3 h-3" />
                        <span>Abrir imagem original</span>
                      </a>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Quick WhatsApp Bar underneath the flyers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-gradient-to-r from-[#1F1813] via-[#2A1E16] to-[#1F1813] border border-[#B07D4F]/40 p-4 sm:p-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
          >
            <div className="text-center sm:text-left">
              <h4 className="font-display font-bold text-base sm:text-lg text-[#F5F2EB]">
                Gostou do cardápio do encarte? Peça pelo WhatsApp!
              </h4>
              <p className="text-xs sm:text-sm text-[#A89886] mt-0.5">
                Entregas rápidas na região de Vila Andrade, Morumbi e Panamby.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="https://wa.me/5511984937529?text=Ol%C3%A1!%20Vi%20o%20encarte%20oficial%20da%20Quadratta%20e%20gostaria%20de%20fazer%20um%20pedido."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 bg-[#22C55E] hover:bg-[#16A34A] text-[#14110E] hover:text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Pedir no WhatsApp (11) 98493-7529</span>
              </a>
            </div>
          </motion.div>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX WITH ZOOM CONTROLS */}
      <AnimatePresence>
        {activeFlyerForLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col select-none"
            onClick={handleCloseLightbox}
          >
            {/* Top Toolbar */}
            <div
              className="px-4 py-3 bg-[#14110E]/90 border-b border-[#2E241E] flex items-center justify-between gap-3 shrink-0 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-xs font-bold text-[#F59E0B] bg-[#271E18] px-2.5 py-1 rounded border border-[#B07D4F]/40 shrink-0">
                  {lightboxIndex !== null ? `${lightboxIndex + 1} de ${FLYERS.length}` : ''}
                </span>
                <div className="truncate">
                  <h3 className="text-xs sm:text-sm font-bold text-[#F5F2EB] truncate">
                    {activeFlyerForLightbox.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#A89886] truncate">
                    {activeFlyerForLightbox.subtitle}
                  </p>
                </div>
              </div>

              {/* Zoom & Action Controls */}
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="p-2 rounded-lg bg-[#271E18] hover:bg-[#342820] text-[#E6D5C3] border border-[#3E3026] transition-colors cursor-pointer"
                  title="Diminuir Zoom"
                  aria-label="Diminuir Zoom"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="px-2.5 py-1.5 rounded-lg bg-[#271E18] hover:bg-[#342820] text-[#E6D5C3] border border-[#3E3026] text-xs font-mono font-bold transition-colors cursor-pointer min-w-[56px] text-center"
                  title="Redefinir Zoom"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>

                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="p-2 rounded-lg bg-[#271E18] hover:bg-[#342820] text-[#E6D5C3] border border-[#3E3026] transition-colors cursor-pointer"
                  title="Aumentar Zoom"
                  aria-label="Aumentar Zoom"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-2 rounded-lg bg-[#271E18] hover:bg-[#342820] text-[#E6D5C3] border border-[#3E3026] transition-colors cursor-pointer hidden sm:flex"
                  title="Ajustar à tela"
                  aria-label="Ajustar à tela"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <div className="w-px h-6 bg-[#2E241E] mx-1" />

                <button
                  type="button"
                  onClick={handleCloseLightbox}
                  className="p-2 rounded-lg bg-[#CD212A] hover:bg-[#DC2626] text-white transition-colors cursor-pointer"
                  title="Fechar (Esc)"
                  aria-label="Fechar tela cheia"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Interactive Zoomable Canvas */}
            <div className="relative flex-1 w-full h-full overflow-auto flex items-center justify-center p-2 sm:p-6 cursor-grab active:cursor-grabbing">
              {/* Previous Image Chevron */}
              <button
                type="button"
                onClick={handlePrevLightbox}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-[#14110E]/80 hover:bg-[#B07D4F] text-white border border-[#3E3026] transition-all cursor-pointer shadow-2xl"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* The Enlarged Image */}
              <motion.div
                key={`${activeFlyerForLightbox.id}-${zoomLevel}`}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-full max-h-full flex items-center justify-center"
              >
                <img
                  src={activeFlyerForLightbox.image}
                  alt={activeFlyerForLightbox.title}
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: 'center center',
                    transition: 'transform 0.2s ease-out',
                  }}
                  className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl select-none"
                  draggable={false}
                />
              </motion.div>

              {/* Next Image Chevron */}
              <button
                type="button"
                onClick={handleNextLightbox}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full bg-[#14110E]/80 hover:bg-[#B07D4F] text-white border border-[#3E3026] transition-all cursor-pointer shadow-2xl"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Bottom Floating Bar in Lightbox */}
            <div
              className="px-4 py-2.5 bg-[#14110E]/95 border-t border-[#2E241E] flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0 z-20 text-xs text-[#A89886]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="text-[#E6D5C3] font-medium">
                  {activeFlyerForLightbox.description}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/5511984937529?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20da%20Quadratta%20Pizza%20Artesanal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-[#22C55E] hover:bg-[#16A34A] text-[#14110E] hover:text-white font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Pedir no WhatsApp</span>
                </a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
