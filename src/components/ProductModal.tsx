import React, { useState } from 'react';
import { X, Plus, Minus, Check, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { MenuItem, CrustOption, ExtraTopping, CartItem } from '../types';
import { CRUST_OPTIONS, EXTRA_TOPPINGS } from '../data/menuData';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (cartItem: CartItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedCrust, setSelectedCrust] = useState<CrustOption>(CRUST_OPTIONS[0]);
  const [selectedExtras, setSelectedExtras] = useState<ExtraTopping[]>([]);
  const [observations, setObservations] = useState('');

  const toggleExtra = (extra: ExtraTopping) => {
    if (selectedExtras.some(e => e.id === extra.id)) {
      setSelectedExtras(selectedExtras.filter(e => e.id !== extra.id));
    } else {
      setSelectedExtras([...selectedExtras, extra]);
    }
  };

  const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0);
  const unitPrice = item.price + selectedCrust.price + extrasTotal;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    const cartItem: CartItem = {
      cartItemId: `${item.id}-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      item,
      quantity,
      crust: selectedCrust,
      selectedExtras,
      observations: observations.trim() || undefined,
      unitPrice,
      totalPrice,
    };
    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Modal Dialog Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg sm:max-w-2xl bg-[#1C1612] border border-[#3E3026] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="relative p-4 sm:p-5 border-b border-[#2B231D] flex items-center justify-between bg-[#191411]">
          <div className="min-w-0 pr-2">
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F2EB] truncate">{item.name}</h3>
              <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-[#271E18] text-[#C49A6C] border border-[#B07D4F]/30 shrink-0">
                {item.dimensions}
              </span>
            </div>
            <p className="text-xs text-[#C49A6C] italic truncate">{item.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A89886] hover:text-white rounded-lg hover:bg-[#271E18] transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center shrink-0"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
          
          {/* Item Image and Description */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center bg-[#17120F] p-3 sm:p-3.5 rounded-xl border border-[#2B231D]">
            <div className="sm:col-span-4 h-24 sm:h-28 rounded-lg overflow-hidden bg-[#120F0D]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="sm:col-span-8 space-y-1 sm:space-y-1.5">
              <p className="text-xs text-[#C5B7A7] leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {item.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] sm:text-[11px] text-[#A89886] bg-[#221B16] px-1.5 sm:px-2 py-0.5 rounded border border-[#2E241E]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Crust / Border Option */}
          {item.category !== 'bebidas' && (
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs sm:text-sm font-bold text-[#F5F2EB] uppercase tracking-wider flex items-center gap-1.5">
                  <span>1. Escolha a Borda da Massa</span>
                  <span className="text-[10px] sm:text-xs font-normal text-[#C49A6C]">(Obrigatório)</span>
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {CRUST_OPTIONS.map((crust) => {
                  const isSelected = selectedCrust.id === crust.id;
                  return (
                    <button
                      key={crust.id}
                      type="button"
                      onClick={() => setSelectedCrust(crust)}
                      className={`p-2.5 sm:p-3 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-between min-h-[48px] ${
                        isSelected
                          ? 'bg-[#2B1F17] border-[#B07D4F] text-white shadow-md'
                          : 'bg-[#181310] border-[#2E241E] text-[#A89886] hover:border-[#3E3026]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-[#F5F2EB]">{crust.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#C49A6C] shrink-0" />}
                      </div>
                      <span className="text-[11px] sm:text-xs font-bold text-[#C49A6C]">
                        {crust.price === 0 ? 'Incluso' : `+ R$ ${crust.price.toFixed(2).replace('.', ',')}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Extra Toppings */}
          {item.category !== 'bebidas' && item.category !== 'doces' && (
            <div className="space-y-2 sm:space-y-3">
              <label className="text-xs sm:text-sm font-bold text-[#F5F2EB] uppercase tracking-wider flex items-center gap-1.5">
                <span>2. Ingredientes Extras (Opcional)</span>
                <span className="text-[10px] sm:text-xs font-normal text-[#A89886]">Turbine seu recheio</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {EXTRA_TOPPINGS.map((extra) => {
                  const isChecked = selectedExtras.some(e => e.id === extra.id);
                  return (
                    <button
                      key={extra.id}
                      type="button"
                      onClick={() => toggleExtra(extra)}
                      className={`p-2 sm:p-2.5 rounded-lg border text-left flex items-center justify-between transition-colors cursor-pointer min-h-[40px] ${
                        isChecked
                          ? 'bg-[#271E18] border-[#B07D4F] text-white'
                          : 'bg-[#181310] border-[#2E241E] text-[#A89886] hover:border-[#3E3026]'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] shrink-0 ${
                            isChecked
                              ? 'bg-[#B07D4F] border-[#B07D4F] text-white'
                              : 'border-[#4A3C32] bg-[#1F1915]'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-medium text-[#E6D5C3] truncate">{extra.name}</span>
                      </div>
                      <span className="text-xs font-bold text-[#C49A6C] tabular-nums shrink-0 ml-1">
                        + R$ {extra.price.toFixed(2).replace('.', ',')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Observations textarea */}
          <div className="space-y-1.5 sm:space-y-2">
            <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#A89886]">
              Observações do Pedido
            </label>
            <textarea
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
              placeholder="Ex: sem cebola, bem tostadinha, cortar em 4 pedaços..."
              rows={2}
              maxLength={140}
              className="w-full bg-[#181310] border border-[#2E241E] focus:border-[#B07D4F] rounded-xl p-2.5 sm:p-3 text-[16px] sm:text-xs text-[#F5F2EB] placeholder-[#6B5A4E] outline-none transition-colors"
            />
          </div>

        </div>

        {/* Modal Footer with Quantity and Total CTA */}
        <div className="p-3.5 sm:p-4 bg-[#191411] border-t border-[#2B231D] flex items-center justify-between gap-3 sm:gap-4 pb-safe">
          
          {/* Quantity Controls with Thumb targets */}
          <div className="flex items-center bg-[#14110E] border border-[#2E241E] rounded-xl p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#A89886] hover:text-white disabled:opacity-40 transition-colors cursor-pointer"
              aria-label="Diminuir quantidade"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold text-sm text-[#F5F2EB] tabular-nums">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-[#A89886] hover:text-white transition-colors cursor-pointer"
              aria-label="Aumentar quantidade"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart CTA */}
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 px-4 sm:px-5 bg-[#B07D4F] hover:bg-[#8A5832] text-white font-bold rounded-xl shadow-md transition-all flex items-center justify-between cursor-pointer active:scale-98 min-h-[46px]"
          >
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span className="text-xs sm:text-sm">Adicionar</span>
            </div>
            <span className="text-sm sm:text-base font-extrabold tabular-nums">
              R$ {totalPrice.toFixed(2).replace('.', ',')}
            </span>
          </button>

        </div>

      </motion.div>
    </div>
  );
};
