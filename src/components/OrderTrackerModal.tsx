import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, Flame, Package, Bike, Phone, X, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { CartItem, DeliveryDetails } from '../types';

interface OrderTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: {
    cart: CartItem[];
    delivery: DeliveryDetails;
    total: number;
  } | null;
  onNewOrder: () => void;
}

const STAGES = [
  { id: 1, title: 'Pedido Recebido', desc: 'Comanda confirmada e enviada para o pizzaiolo', icon: CheckCircle2 },
  { id: 2, title: 'Abrindo Massa & Recheio', desc: 'Massa fininha 48h aberta e recheada fartamente', icon: Sparkles },
  { id: 3, title: 'No Forno na Pedra', desc: 'Assando a alta temperatura na pedra quente', icon: Flame },
  { id: 4, title: 'Embalado na Caixa Kraft', desc: 'Acomodada na caixa térmica 9x25cm exclusiva', icon: Package },
  { id: 5, title: 'Saiu para Entrega', desc: 'Motoboy a caminho da Vila Andrade / Morumbi', icon: Bike },
];

export const OrderTrackerModal: React.FC<OrderTrackerModalProps> = ({
  isOpen,
  onClose,
  orderData,
  onNewOrder,
}) => {
  const [currentStage, setCurrentStage] = useState(2);
  const [estimatedMinutes, setEstimatedMinutes] = useState(28);

  useEffect(() => {
    if (!isOpen) return;

    // Simulate preparation stages progressing
    const timer1 = setTimeout(() => setCurrentStage(3), 6000);
    const timer2 = setTimeout(() => setCurrentStage(4), 14000);
    const timer3 = setTimeout(() => setCurrentStage(5), 22000);

    const countdown = setInterval(() => {
      setEstimatedMinutes((prev) => (prev > 1 ? prev - 1 : 1));
    }, 45000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(countdown);
    };
  }, [isOpen]);

  if (!isOpen || !orderData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg sm:max-w-xl bg-[#1C1612] border border-[#3E3026] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh]"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#2B231D] bg-[#191411] flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 pr-2">
            <div className="w-8 h-8 rounded-lg bg-[#22C55E]/20 text-[#22C55E] flex items-center justify-center border border-[#22C55E]/30 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F2EB] truncate">
                Pedido Confirmado!
              </h3>
              <p className="text-[11px] sm:text-xs text-[#C49A6C] truncate">
                Quadratta Pizza Artesanal · Vila Andrade / Morumbi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A89886] hover:text-white rounded-lg hover:bg-[#271E18] cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center shrink-0"
            aria-label="Fechar rastreador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-6">
          
          {/* Estimated Time Card */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#2B1F17] to-[#221914] border border-[#B07D4F]/40 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] shrink-0" />
              <div>
                <p className="text-[11px] sm:text-xs text-[#A89886]">Previsão de Chegada</p>
                <p className="font-display font-black text-xl sm:text-2xl text-[#F5F2EB]">
                  ~{estimatedMinutes} minutos
                </p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <span className="text-[9px] sm:text-[10px] text-[#A89886] uppercase block">Destino</span>
              <span className="text-xs sm:text-sm font-bold text-[#E6D5C3]">
                {orderData.delivery.neighborhood}
              </span>
            </div>
          </div>

          {/* Interactive Stepper Progress */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A89886]">
              Acompanhamento ao Vivo
            </h4>

            <div className="space-y-2.5 sm:space-y-3">
              {STAGES.map((st) => {
                const IconComponent = st.icon;
                const isCompleted = st.id < currentStage;
                const isCurrent = st.id === currentStage;

                return (
                  <motion.div
                    key={st.id}
                    layout
                    className={`flex items-start gap-2.5 sm:gap-3.5 p-2.5 sm:p-3 rounded-xl border transition-all ${
                      isCurrent
                        ? 'bg-[#271E18] border-[#B07D4F] shadow-md'
                        : isCompleted
                        ? 'bg-[#181310] border-[#2E241E] opacity-90'
                        : 'bg-[#14110E] border-[#241C17] opacity-40'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isCurrent
                          ? 'bg-[#B07D4F] text-white animate-pulse'
                          : isCompleted
                          ? 'bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/30'
                          : 'bg-[#221A15] text-[#8A7B6E]'
                      }`}
                    >
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h5
                          className={`text-xs font-bold truncate ${
                            isCurrent
                              ? 'text-[#F59E0B]'
                              : isCompleted
                              ? 'text-[#F5F2EB]'
                              : 'text-[#8A7B6E]'
                          }`}
                        >
                          {st.title}
                        </h5>
                        {isCurrent && (
                          <span className="text-[9px] sm:text-[10px] font-bold text-[#F59E0B] uppercase shrink-0">
                            Em andamento...
                          </span>
                        )}
                        {isCompleted && (
                          <span className="text-[9px] sm:text-[10px] font-semibold text-[#22C55E] shrink-0">
                            Concluído
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-[#A89886] mt-0.5 leading-snug">{st.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Order Summary Recap */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-[#181310] border border-[#2E241E] space-y-2">
            <h5 className="text-xs font-bold text-[#E6D5C3] uppercase tracking-wider">
              Resumo do Pedido ({orderData.cart.length} itens)
            </h5>
            <div className="divide-y divide-[#241C17] text-xs text-[#A89886]">
              {orderData.cart.map((c, i) => (
                <div key={i} className="py-2 flex justify-between items-center gap-2">
                  <div className="min-w-0">
                    <span className="text-[#F5F2EB] font-medium block truncate">
                      {c.quantity}x {c.item.name}
                    </span>
                    <span className="text-[10px] text-[#C49A6C] block truncate">
                      {c.item.dimensions} {c.crust.id !== 'tradicional' ? `· ${c.crust.name}` : ''}
                    </span>
                  </div>
                  <span className="font-bold text-[#F5F2EB] tabular-nums shrink-0">
                    R$ {c.totalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-[#261E18] flex justify-between text-xs sm:text-sm font-bold text-[#F5F2EB]">
              <span>Total a Pagar</span>
              <span className="text-[#C49A6C] tabular-nums">
                R$ {orderData.total.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>

          {/* WhatsApp Direct Help */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-[#14110E] border border-[#2E241E] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs text-[#A89886]">
              <p className="text-[#E6D5C3] font-semibold">Dúvidas sobre o pedido?</p>
              <p className="text-[10px] sm:text-[11px]">Fale direto com nosso pizzaiolo de plantão</p>
            </div>
            <a
              href="https://wa.me/5511984937529?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20o%20status%20do%20meu%20pedido%20Quadratta!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-[#22C55E] text-[#14110E] font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 hover:bg-[#16A34A] hover:text-white transition-colors cursor-pointer min-h-[40px] shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(11) 98493-7529</span>
            </a>
          </div>

        </div>

        {/* Footer Action */}
        <div className="p-3.5 sm:p-4 bg-[#191411] border-t border-[#2B231D] flex flex-col sm:flex-row justify-between gap-2.5 sm:gap-3 pb-safe">
          <button
            onClick={() => {
              onClose();
              onNewOrder();
            }}
            className="w-full sm:flex-1 py-2.5 bg-[#271E18] hover:bg-[#342820] text-[#E6D5C3] font-semibold rounded-xl text-xs border border-[#3E3026] transition-colors cursor-pointer min-h-[42px]"
          >
            Fazer Novo Pedido
          </button>
          <button
            onClick={onClose}
            className="w-full sm:flex-1 py-2.5 bg-[#B07D4F] hover:bg-[#8A5832] text-white font-bold rounded-xl text-xs transition-colors cursor-pointer min-h-[42px]"
          >
            Continuar Navegando
          </button>
        </div>

      </motion.div>
    </div>
  );
};
