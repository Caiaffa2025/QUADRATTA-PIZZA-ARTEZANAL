import React from 'react';
import { Flame, Clock, Award, Leaf, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export const ArtisanalProcess: React.FC = () => {
  return (
    <section id="processo" className="py-12 sm:py-20 bg-[#14110E] border-b border-[#2B231D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#C49A6C]">
            <Award className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Nossa Filosofia Artesanal</span>
            <span>·</span>
            <span>Desde a Origem</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F5F2EB] tracking-tight text-balance">
            O segredo da massa fininha e crocante
          </h2>
          <p className="text-[#A89886] text-xs sm:text-sm lg:text-base leading-relaxed">
            Não usamos massas industriais pré-assadas nem ingredientes ultraprocessados. Cada pizza individual Quadratta segue o rigor da legítima tradição italiana.
          </p>
        </motion.div>

        {/* 4 Steps Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 sm:p-6 rounded-2xl bg-[#1C1612] border border-[#2E241E] space-y-3 sm:space-y-4 hover:border-[#B07D4F]/50 transition-colors"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#271E18] border border-[#B07D4F]/40 flex items-center justify-center text-[#C49A6C]">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F2EB]">
              48h de Fermentação Lenta
            </h3>
            <p className="text-xs text-[#A89886] leading-relaxed">
              Descanso controlado da massa que quebra os açúcares complexos. O resultado é uma pizza incrivelmente leve, de facílima digestão e crocância inigualável.
            </p>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 sm:p-6 rounded-2xl bg-[#1C1612] border border-[#2E241E] space-y-3 sm:space-y-4 hover:border-[#B07D4F]/50 transition-colors"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#271E18] border border-[#B07D4F]/40 flex items-center justify-center text-[#CD212A]">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F2EB]">
              Molho Rústico San Marzano
            </h3>
            <p className="text-xs text-[#A89886] leading-relaxed">
              Tomates nobres selecionados, azeite de oliva extravirgem, sal marinho e manjericão fresco. Sem conservantes, sem acidez artificial, sabor puro de tomate.
            </p>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 sm:p-6 rounded-2xl bg-[#1C1612] border border-[#2E241E] space-y-3 sm:space-y-4 hover:border-[#B07D4F]/50 transition-colors"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#271E18] border border-[#B07D4F]/40 flex items-center justify-center text-[#F59E0B]">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F2EB]">
              Assada na Pedra na Hora
            </h3>
            <p className="text-xs text-[#A89886] leading-relaxed">
              A pizza só entra no forno quando o seu pedido é confirmado. Em temperaturas altíssimas, a mussarela atinge o ponto de bolha perfeito em minutos.
            </p>
          </motion.div>

          {/* Pillar 4 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="p-5 sm:p-6 rounded-2xl bg-[#1C1612] border border-[#2E241E] space-y-3 sm:space-y-4 hover:border-[#B07D4F]/50 transition-colors"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#271E18] border border-[#B07D4F]/40 flex items-center justify-center text-[#22C55E]">
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F2EB]">
              Caixa Kraft Eco-Térmica
            </h3>
            <p className="text-xs text-[#A89886] leading-relaxed">
              Desenvolvida sob medida nas dimensões 9 x 25 cm para conservar a temperatura sem condensar umidade. Chega crocante e quentinha na sua porta.
            </p>
          </motion.div>

        </div>

        {/* Local Craftsmanship Banner with Responsive Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#221B16] via-[#2A2019] to-[#221B16] border border-[#3E3026] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1.5 sm:space-y-2 text-center md:text-left">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F2EB]">
              Produzida artesanalmente na Vila Andrade & Morumbi
            </h3>
            <p className="text-xs text-[#C5B7A7] max-w-xl leading-relaxed">
              Atendimento exclusivo via delivery rápido e retirada no balcão. Ingredientes frescos repostos diariamente por fornecedores selecionados.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-center">
            <div className="flex-1 md:flex-initial px-4 py-2 rounded-xl bg-[#14110E] border border-[#B07D4F]/40 text-center min-w-[100px]">
              <span className="block font-display font-black text-lg sm:text-xl text-[#F59E0B]">4.9 ★</span>
              <span className="text-[9px] sm:text-[10px] text-[#A89886] uppercase font-semibold">Avaliação</span>
            </div>
            <div className="flex-1 md:flex-initial px-4 py-2 rounded-xl bg-[#14110E] border border-[#B07D4F]/40 text-center min-w-[100px]">
              <span className="block font-display font-black text-lg sm:text-xl text-[#22C55E]">25-40'</span>
              <span className="text-[9px] sm:text-[10px] text-[#A89886] uppercase font-semibold">Entrega</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
