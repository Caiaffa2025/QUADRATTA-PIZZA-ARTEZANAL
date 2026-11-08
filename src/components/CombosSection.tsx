import React from 'react';
import { Sparkles, Check, ArrowRight, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { MenuItem, CartItem } from '../types';
import { MENU_ITEMS, CRUST_OPTIONS } from '../data/menuData';

interface CombosSectionProps {
  onSelectCombo: (item: MenuItem) => void;
  onQuickAdd: (cartItem: CartItem) => void;
}

export const CombosSection: React.FC<CombosSectionProps> = ({ onSelectCombo, onQuickAdd }) => {
  const combos = MENU_ITEMS.filter((item) => item.category === 'combos');

  const handleAddCombo = (item: MenuItem) => {
    const cartItem: CartItem = {
      cartItemId: `combo-${item.id}-${Date.now()}`,
      item,
      quantity: 1,
      crust: CRUST_OPTIONS[0],
      selectedExtras: [],
      unitPrice: item.price,
      totalPrice: item.price,
    };
    onQuickAdd(cartItem);
  };

  return (
    <section id="combos" className="py-12 sm:py-20 bg-[#191410] border-b border-[#2B231D] relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#F59E0B]">
            <Gift className="w-3.5 h-3.5" />
            <span>Mais Sabor por Menos</span>
            <span>·</span>
            <span>Economize até R$ 25</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F5F2EB] tracking-tight text-balance">
            Combos Especiais <span className="text-[#C49A6C]">Quadratta</span>
          </h2>
          <p className="text-[#A89886] text-xs sm:text-sm lg:text-base leading-relaxed">
            Perfeitos para seu momento individual, para dividir a dois ou para reunir a galera com entrega rápida.
          </p>
        </motion.div>

        {/* 3 Combos Grid with Responsive Tablet & Mobile Scaling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {combos.map((combo, idx) => {
            const isFeatured = idx === 1; // Duo is the most popular
            return (
              <motion.div
                key={combo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`relative rounded-2xl bg-[#1C1612] border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isFeatured
                    ? 'border-[#B07D4F] shadow-2xl lg:scale-102 bg-gradient-to-b from-[#221B16] to-[#1C1612]'
                    : 'border-[#2E241E] hover:border-[#3E3026]'
                } ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Popular Ribbon for Duo */}
                {isFeatured && (
                  <div className="bg-[#B07D4F] text-white text-center py-1 sm:py-1.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Mais Pedido para Casais & Amigos</span>
                  </div>
                )}

                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  {/* Image banner */}
                  <div className="h-40 sm:h-44 rounded-xl overflow-hidden bg-[#14110E] relative">
                    <img
                      src={combo.image}
                      alt={combo.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1612] via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 bg-[#14110E]/90 text-[#F59E0B] text-xs font-bold px-2.5 py-1 rounded-lg border border-[#B07D4F]/40">
                      {combo.dimensions}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F2EB]">
                      {combo.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#C49A6C] mt-0.5">
                      {combo.tagline}
                    </p>
                    <p className="text-xs text-[#A89886] mt-2 leading-relaxed">
                      {combo.description}
                    </p>
                  </div>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-2 border-t border-[#2B231D]">
                    {combo.ingredients.map((itemStr, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#E6D5C3]">
                        <Check className="w-3.5 h-3.5 text-[#22C55E] shrink-0" />
                        <span>{itemStr}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="p-4 sm:p-6 pt-0 mt-3 border-t border-[#261E18] pt-3 sm:pt-4 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#8A7B6E] block">
                      Preço do Combo
                    </span>
                    <span className="font-display font-black text-xl sm:text-2xl text-[#F5F2EB] tabular-nums">
                      R$ {combo.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddCombo(combo)}
                    className="px-3.5 sm:px-4 py-2.5 bg-[#B07D4F] hover:bg-[#8A5832] text-white font-bold rounded-xl text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer active:scale-95 min-h-[40px]"
                  >
                    <span>Pedir Combo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
