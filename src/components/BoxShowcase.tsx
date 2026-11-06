import React, { useState } from 'react';
import { Package, Sparkles, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BoxShowcaseProps {
  onOrderNow: () => void;
}

export const BoxShowcase: React.FC<BoxShowcaseProps> = ({ onOrderNow }) => {
  const [viewMode, setViewMode] = useState<'open' | 'closed'>('open');

  return (
    <section id="formato-9x25" className="py-12 sm:py-20 bg-[#16120F] border-b border-[#2B231D] relative overflow-hidden">
      {/* Decorative background radial pattern */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#B07D4F]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#CD212A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#C49A6C]">
            <span>Inovação no Formato</span>
            <span>·</span>
            <span>Design da Embalagem</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F5F2EB] tracking-tight text-balance">
            Por que uma pizza alongada de <span className="text-[#F59E0B]">9 x 25 cm</span>?
          </h2>
          <p className="text-[#A89886] text-xs sm:text-sm lg:text-base leading-relaxed">
            Esqueça as caixas redondas gigantescas que amolecem a massa com vapor retido. Criamos a Quadratta para ser a experiência definitiva de pizza individual artesanal.
          </p>
        </motion.div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left: Interactive Box Preview with Real Assets as before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            
            {/* View Mode Segmented Switch */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-1 p-1 bg-[#1F1915] rounded-xl border border-[#3E3026] w-full sm:w-fit mx-auto lg:mx-0">
              <button
                onClick={() => setViewMode('open')}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[40px] ${
                  viewMode === 'open'
                    ? 'bg-[#B07D4F] text-white shadow-md'
                    : 'text-[#A89886] hover:text-white'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Ver Pizza Aberta (Na Caixa)</span>
              </button>
              <button
                onClick={() => setViewMode('closed')}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[40px] ${
                  viewMode === 'closed'
                    ? 'bg-[#B07D4F] text-white shadow-md'
                    : 'text-[#A89886] hover:text-white'
                }`}
              >
                <Package className="w-3.5 h-3.5" />
                <span>Ver Caixa Kraft Fechada</span>
              </button>
            </div>

            {/* Visual Box Frame */}
            <div className="relative rounded-2xl bg-[#1D1713] border border-[#3E3026] p-3 sm:p-4 shadow-2xl overflow-hidden group">
              
              {/* Image Container with smooth transition - as before */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#14110E]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={viewMode}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    src={
                      viewMode === 'open'
                        ? '/assets/aistudio/IMG_1457_43f83bca.png'
                        : '/assets/aistudio/IMG_1458_04ba9bba.jpeg'
                    }
                    alt={
                      viewMode === 'open'
                        ? 'Pizza artesanal Quadratta aberta na caixa 9x25cm'
                        : 'Caixa kraft exclusiva Quadratta 9x25cm'
                    }
                    className="w-full h-full object-cover object-center"
                  />
                </AnimatePresence>

                {/* Dimension Floating Label Overlay */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#14110E]/90 backdrop-blur-md px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-[#B07D4F]/50 shadow-lg">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[#F59E0B] font-display font-black text-sm sm:text-lg">9 × 25 cm</span>
                    <span className="text-[10px] sm:text-xs text-[#E6D5C3]">Formato Alongado</span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-[#A89886]">225 cm² de recheio generoso</p>
                </div>

                {/* Italian Flag Ribbon Detail */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#14110E]/90 backdrop-blur-md border border-[#2E241E]">
                  <div className="flex h-2.5 sm:h-3 w-4 rounded-xs overflow-hidden shrink-0">
                    <div className="w-1/3 bg-[#008C45]"></div>
                    <div className="w-1/3 bg-white"></div>
                    <div className="w-1/3 bg-[#CD212A]"></div>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#E6D5C3]">Massa Fininha na Pedra</span>
                </div>
              </div>

              {/* Box Dimensions Graphic Bar */}
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#2E241E] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[11px] sm:text-xs text-[#A89886]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B07D4F] shrink-0"></span>
                  <span>Papelão Kraft 100% Reciclável</span>
                </div>
                <div className="font-mono text-[#C49A6C]">
                  Largura: 9cm · Comprimento: 25cm
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right: The 4 Strategic Advantages */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            
            <div className="space-y-3 sm:space-y-4">
              
              {/* Advantage 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="p-3.5 sm:p-4 rounded-xl bg-[#1C1612] border border-[#2E241E] hover:border-[#B07D4F]/50 transition-colors"
              >
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#271E18] text-[#C49A6C] border border-[#B07D4F]/40 flex items-center justify-center shrink-0 font-display font-bold text-xs sm:text-sm">
                    01
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#F5F2EB] flex items-center gap-2">
                      <span>Crocância Uniforme da Ponta à Ponta</span>
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#F59E0B]" />
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A89886] mt-1 leading-relaxed">
                      Em pizzas redondas, o calor e vapor condensam no centro, deixando a massa murcha e borrachuda. O formato 9x25cm garante assamento homogêneo e crocância perfeita em 100% da fatia.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Advantage 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-3.5 sm:p-4 rounded-xl bg-[#1C1612] border border-[#2E241E] hover:border-[#B07D4F]/50 transition-colors"
              >
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#271E18] text-[#C49A6C] border border-[#B07D4F]/40 flex items-center justify-center shrink-0 font-display font-bold text-xs sm:text-sm">
                    02
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#F5F2EB]">
                      Sem Briga: Cada Um Pede Seu Sabor Favorito
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A89886] mt-1 leading-relaxed">
                      Acabou a negociação de dividir meio a meio. Com a Quadratta individual, você pede exatamente a combinação de recheios que você ama, sem concessões.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Advantage 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="p-3.5 sm:p-4 rounded-xl bg-[#1C1612] border border-[#2E241E] hover:border-[#B07D4F]/50 transition-colors"
              >
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#271E18] text-[#C49A6C] border border-[#B07D4F]/40 flex items-center justify-center shrink-0 font-display font-bold text-xs sm:text-sm">
                    03
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#F5F2EB]">
                      Embalagem Kraft Térmica Prática
                    </h3>
                    <p className="text-sm sm:text-sm text-[#A89886] mt-1 leading-relaxed">
                      Encaixa perfeitamente na mesa de jantar, na bandeja do sofá ou na escrivaninha. Abre fácil, vira prato se desejar e mantém o calor por muito mais tempo no delivery.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Advantage 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-3.5 sm:p-4 rounded-xl bg-[#1C1612] border border-[#2E241E] hover:border-[#B07D4F]/50 transition-colors"
              >
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#271E18] text-[#C49A6C] border border-[#B07D4F]/40 flex items-center justify-center shrink-0 font-display font-bold text-xs sm:text-sm">
                    04
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#F5F2EB]">
                      Zero Desperdício de Comida
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A89886] mt-1 leading-relaxed">
                      Tamanho pensado sob medida: sacia com fartura uma pessoa sem sobrar borda fria na geladeira para o dia seguinte.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Direct Action */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2"
            >
              <button
                onClick={onOrderNow}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#B07D4F] hover:bg-[#8A5832] text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98 min-h-[48px] text-sm"
              >
                <span>Experimentar uma Quadratta 9x25cm</span>
              </button>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
