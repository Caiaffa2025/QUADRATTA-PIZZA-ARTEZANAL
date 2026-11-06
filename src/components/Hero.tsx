import React from 'react';
import { ArrowRight, Flame, Sparkles, Clock, CheckCircle2, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOrderClick: () => void;
  onExploreBox: () => void;
  onNavigateToBuilder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onExploreBox, onNavigateToBuilder }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#14110E] via-[#1A1512] to-[#14110E] pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-16 lg:pb-24 border-b border-[#2B231D]">
      {/* Subtle Warm Amber Glow Behind Hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] sm:h-[350px] bg-[#B07D4F]/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Story & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge with Italian Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#271E18] border border-[#B07D4F]/40 shadow-sm text-[11px] sm:text-xs font-semibold text-[#E6D5C3] max-w-full truncate"
            >
              <span className="flex h-2 w-3 rounded-xs overflow-hidden shrink-0">
                <span className="w-1/3 bg-[#008C45]"></span>
                <span className="w-1/3 bg-white"></span>
                <span className="w-1/3 bg-[#CD212A]"></span>
              </span>
              <span className="tracking-wide truncate">Quadratta Pizza Artesanal</span>
              <span className="text-[#8A5832] shrink-0">·</span>
              <span className="text-[#C49A6C] font-bold shrink-0">Vila Andrade & Morumbi</span>
            </motion.div>

            {/* Handcrafted Italian-Style Script Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display italic text-[#C49A6C] text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight"
            >
              Uma nova maneira de comer pizza!
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F2EB] tracking-tight leading-[1.1] text-balance"
            >
              Pizza individual{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#EAB308] to-[#C49A6C]">
                alongada 9x25cm
              </span>
              , assada na hora para você.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base lg:text-lg text-[#C5B7A7] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Massa fininha e crocante, recheio generoso de ponta a ponta. Embalada na exclusiva caixa kraft retangular para chegar quentinha e crocante à sua mesa.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3"
            >
              <button
                onClick={onOrderClick}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 bg-gradient-to-r from-[#CD212A] to-[#B91C1C] hover:from-[#DC2626] hover:to-[#991B1B] text-white font-bold rounded-xl shadow-lg shadow-[#CD212A]/20 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base min-h-[48px]"
              >
                <span>Fazer Pedido Agora</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateToBuilder}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 bg-[#271E18] hover:bg-[#342820] text-[#E6D5C3] hover:text-white font-semibold rounded-xl border border-[#B07D4F]/50 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base min-h-[48px]"
              >
                <Sparkles className="w-4 h-4 text-[#C49A6C]" />
                <span>Monte a Sua (Personalizar)</span>
              </button>
            </motion.div>

            {/* Print 4 Core Pillars Strip */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 sm:pt-6 border-t border-[#2B231D]/80 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 text-left"
            >
              <div className="flex items-start gap-2 sm:gap-2.5 p-2 rounded-lg bg-[#191411]/50 border border-[#271E18]">
                <div className="p-1.5 sm:p-2 rounded-lg bg-[#271E18] border border-[#B07D4F]/30 text-[#C49A6C] shrink-0">
                  <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#F5F2EB] uppercase tracking-wider truncate">Massa Artesanal</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#A89886] truncate">Fininha e crocante</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-2.5 p-2 rounded-lg bg-[#191411]/50 border border-[#271E18]">
                <div className="p-1.5 sm:p-2 rounded-lg bg-[#271E18] border border-[#B07D4F]/30 text-[#C49A6C] shrink-0">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#F5F2EB] uppercase tracking-wider truncate">Recheio Farto</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#A89886] truncate">Até a borda</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-2.5 p-2 rounded-lg bg-[#191411]/50 border border-[#271E18]">
                <div className="p-1.5 sm:p-2 rounded-lg bg-[#271E18] border border-[#B07D4F]/30 text-[#C49A6C] shrink-0">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#F5F2EB] uppercase tracking-wider truncate">Assada na Hora</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#A89886] truncate">No forno na pedra</p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-2.5 p-2 rounded-lg bg-[#191411]/50 border border-[#271E18]">
                <div className="p-1.5 sm:p-2 rounded-lg bg-[#271E18] border border-[#B07D4F]/30 text-[#C49A6C] shrink-0">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[11px] sm:text-xs font-bold text-[#F5F2EB] uppercase tracking-wider truncate">Delivery Rápido</h4>
                  <p className="text-[10px] sm:text-[11px] text-[#A89886] truncate">25-40 min quente</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Asset com a imagem original como era antes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Kraft Glow Backdrop Frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#B07D4F]/30 via-[#CD212A]/20 to-[#B07D4F]/30 blur-xl opacity-75"></div>

              {/* Main Card */}
              <div className="relative rounded-2xl bg-[#1C1612] border border-[#3E3026] overflow-hidden shadow-2xl">
                
                {/* Italian Flag Edge Line */}
                <div className="h-1.5 w-full flex">
                  <div className="w-1/3 bg-[#008C45]"></div>
                  <div className="w-1/3 bg-white"></div>
                  <div className="w-1/3 bg-[#CD212A]"></div>
                </div>

                {/* Real Flyer Asset Visual */}
                <div className="relative h-64 sm:h-80 md:h-96 w-full bg-[#181310] overflow-hidden group">
                  <img
                    src="/assets/aistudio/IMG_1457_43f83bca.png"
                    alt="Quadratta Pizza Artesanal 9x25cm na caixa exclusiva"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle gradient overlay at bottom for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14110E] via-transparent to-black/20 pointer-events-none" />

                  {/* Dimension pill overlay */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[#14110E]/90 backdrop-blur-md border border-[#B07D4F]/60 text-white px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#F59E0B]">9 × 25 cm</span>
                    <span className="text-[10px] text-[#A89886]">| Individual</span>
                  </div>

                  {/* Hot baked callout */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-[#1C1612]/95 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-[#3E3026] flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-[#F5F2EB] truncate">Caixa Kraft Térmica Quadratta</p>
                      <p className="text-[10px] sm:text-[11px] text-[#C49A6C] truncate">Conserva a crocância sem abafar</p>
                    </div>
                    <button
                      onClick={onExploreBox}
                      className="px-2.5 sm:px-3 py-1.5 text-xs font-semibold bg-[#B07D4F] hover:bg-[#8A5832] text-white rounded-lg transition-colors cursor-pointer shrink-0 min-h-[36px]"
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>

                {/* Footer strip of the card */}
                <div className="p-3 sm:p-4 bg-[#181410] border-t border-[#2E241E] flex items-center justify-between text-xs text-[#A89886]">
                  <span className="flex items-center gap-1.5 text-[#E6D5C3]">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                    <span>Massa fininha e crocante</span>
                  </span>
                  <span className="text-[#C49A6C] font-semibold">
                    100% Artesanal
                  </span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
