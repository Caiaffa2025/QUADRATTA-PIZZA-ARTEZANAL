import React from 'react';
import { MapPin, Phone, ChevronDown, Bike } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NEIGHBORHOODS } from '../data/menuData';

export const LocationSection: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const faqs = [
    {
      q: 'O que significa pizza individual alongada de 9 x 25 cm?',
      a: 'É um formato retangular exclusivo (225 cm²) criado para saciar com perfeição uma pessoa. Diferente da pizza redonda comum, a Quadratta é assada de ponta a ponta uniformemente e cabe na mão com total conforto sem desmoronar.'
    },
    {
      q: 'A pizza chega crocante no delivery ou fica úmida na caixa?',
      a: 'Nossa caixa kraft térmica exclusiva foi projetada com respiradores micrométricos que deixam o excesso de vapor escapar sem deixar a pizza esfriar. A massa permanece fininha e crocante como se tivesse saído do forno agora!'
    },
    {
      q: 'Como faço para pedir direto pelo WhatsApp?',
      a: 'Basta clicar no botão "Peça já a sua via WhatsApp" ou adicionar os itens à sacola aqui no site e clicar em "Enviar pelo WhatsApp". Seu pedido já chega pronto, formatado e detalhado para a nossa cozinha!'
    },
    {
      q: 'Quais as formas de pagamento aceitas?',
      a: 'Aceitamos Pix (chave instantânea), cartões de crédito e débito de todas as bandeiras na maquininha do entregador, além de dinheiro em espécie (com troco informado).'
    }
  ];

  return (
    <section id="localizacao" className="py-12 sm:py-20 bg-[#16120F] border-b border-[#2B231D] relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-2 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#22C55E]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Vila Andrade & Morumbi</span>
            <span>·</span>
            <span>São Paulo / SP</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F5F2EB] tracking-tight text-balance">
            Delivery rápido onde você estiver
          </h2>
          <p className="text-[#A89886] text-xs sm:text-sm lg:text-base leading-relaxed">
            Nossa base gastronômica está instalada na Vila Andrade para garantir que seu pedido chegue em no máximo 40 minutos fumegante à sua porta.
          </p>
        </motion.div>

        {/* 2-Column Info & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Direct Call & Coverage Card (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4 sm:space-y-6"
          >
            {/* Direct WhatsApp Big Card directly from the flyer */}
            <div className="p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1C1612] via-[#241C16] to-[#1C1612] border border-[#B07D4F]/50 shadow-2xl relative overflow-hidden">
              
              {/* Italian flag top strip */}
              <div className="absolute top-0 left-0 right-0 h-1.5 flex">
                <div className="w-1/3 bg-[#008C45]"></div>
                <div className="w-1/3 bg-white"></div>
                <div className="w-1/3 bg-[#CD212A]"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C49A6C]">
                  <Bike className="w-4 h-4 text-[#F59E0B]" />
                  <span>Central de Pedidos & WhatsApp</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F5F2EB] tracking-tight">
                      11 98493-7529
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#22C55E] flex items-center gap-1.5 mt-1">
                      <span className="w-2 h-2 rounded-full bg-[#22C55E] inline-block animate-pulse"></span>
                      Atendimento rápido via WhatsApp
                    </p>
                  </div>

                  <a
                    href="https://wa.me/5511984937529?text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20uma%20Quadratta%20Pizza%20Artesanal!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 bg-[#22C55E] hover:bg-[#16A34A] text-[#14110E] hover:text-white font-extrabold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 text-xs sm:text-sm shrink-0 active:scale-95 min-h-[44px]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Peça já a sua!</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-[#2E241E] grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs">
                  <div>
                    <span className="text-[#8A7B6E] block text-[10px] sm:text-[11px] uppercase">Região Principal</span>
                    <span className="text-[#E6D5C3] font-bold">Vila Andrade & Morumbi</span>
                  </div>
                  <div>
                    <span className="text-[#8A7B6E] block text-[10px] sm:text-[11px] uppercase">Horário de Funcionamento</span>
                    <span className="text-[#E6D5C3] font-bold">Ter a Dom: 18h às 23h30</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Coverage Neighborhoods List */}
            <div className="p-4 sm:p-6 rounded-2xl bg-[#1C1612] border border-[#2E241E] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6D5C3] flex items-center justify-between">
                <span>Bairros com Entrega Rápida</span>
                <span className="text-[10px] sm:text-[11px] text-[#C49A6C] font-normal">São Paulo / SP</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {NEIGHBORHOODS.filter(n => n.fee > 0).map((n) => (
                  <div key={n.name} className="flex items-center justify-between p-2 rounded-lg bg-[#16120F] border border-[#241C17]">
                    <span className="text-[#E6D5C3] font-medium">{n.name}</span>
                    <span className="text-[#A89886] font-mono text-[11px]">R$ {n.fee.toFixed(2).replace('.', ',')}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive FAQ with AnimatePresence */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-3"
          >
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A89886] mb-3 sm:mb-4">
              Perguntas Frequentes
            </h4>

            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl bg-[#1C1612] border border-[#2E241E] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-[#F5F2EB] hover:text-[#C49A6C] transition-colors cursor-pointer min-h-[44px]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#A89886] transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-[#C49A6C]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-3.5 sm:px-4 pb-3.5 sm:pb-4 text-xs text-[#A89886] leading-relaxed border-t border-[#261E18] pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
