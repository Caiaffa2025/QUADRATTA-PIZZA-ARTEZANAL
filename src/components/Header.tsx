import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onNavigateToBuilder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cart, onOpenCart, onNavigateToBuilder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#14110E]/95 backdrop-blur-md border-b border-[#2B231D]">
      {/* Top micro-bar: responsive flex wrapping without overlap */}
      <div className="bg-[#1C1612] px-3 sm:px-6 py-1.5 border-b border-[#2E241E] text-[11px] sm:text-xs text-[#A89886] max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-4 truncate">
          <span className="flex items-center gap-1.5 text-[#E6D5C3] whitespace-nowrap shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] inline-block animate-pulse"></span>
            Aberto hoje: 18h às 23h30
          </span>
          <span className="hidden md:inline text-[#6B5A4E]">·</span>
          <span className="hidden md:flex items-center gap-1 text-[#C49A6C] whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-[#CD212A] shrink-0" />
            Vila Andrade / Morumbi - SP
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/5511984937529?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20na%20Quadratta%20Pizza%20Artesanal!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#4ADE80] hover:text-[#86EFAC] transition-colors font-medium whitespace-nowrap"
          >
            <Phone className="w-3 h-3 shrink-0" />
            <span className="hidden xs:inline">(11) 98493-7529</span>
            <span className="xs:hidden">Pedir</span>
          </a>
        </div>
      </div>

      {/* Main 3-Zone Header Bar: Optimized for Mobile, Tablet, and Desktop */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-8">
        
        {/* Zone 1: Brand Wordmark & Emblem */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          {/* Italian Chef Hat Logo Emblem */}
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-[#271E18] border border-[#B07D4F]/40 flex items-center justify-center shadow-md overflow-hidden group-hover:border-[#B07D4F] transition-colors shrink-0">
            <div className="absolute bottom-0 left-0 right-0 h-1 flex">
              <div className="w-1/3 bg-[#008C45]"></div>
              <div className="w-1/3 bg-white"></div>
              <div className="w-1/3 bg-[#CD212A]"></div>
            </div>
            <svg
              className="w-5 h-5 sm:w-7 sm:h-7 text-[#F5F2EB]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C9.5 2 7.37 3.5 6.47 5.65C5.9 5.24 5.2 5 4.5 5C2.57 5 1 6.57 1 8.5C1 10.15 2.15 11.53 3.7 11.88C3.89 13.9 5.17 15.6 7 16.38V19C7 19.55 7.45 20 8 20H16C16.55 20 17 19.55 17 19V16.38C18.83 15.6 20.11 13.9 20.3 11.88C21.85 11.53 23 10.15 23 8.5C23 6.57 21.43 5 19.5 5C18.8 5 18.1 5.24 17.53 5.65C16.63 3.5 14.5 2 12 2M8 21C7.45 21 7 21.45 7 22H17C17 21.45 16.55 21 16 21H8Z" />
            </svg>
          </div>
          <div>
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#F5F2EB] group-hover:text-[#C49A6C] transition-colors leading-none block">
              Quadratta
            </span>
            <div className="flex items-center gap-1 text-[9px] sm:text-[11px] uppercase tracking-wider text-[#C49A6C] font-semibold mt-0.5">
              <span>Pizza Artesanal</span>
              <span className="text-[#8A5832]">·</span>
              <span className="text-[#A89886] font-normal">9x25 cm</span>
            </div>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Desktop & Wide Tablet) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium text-[#C5B7A7]">
          <button
            onClick={() => handleScrollTo('cardapio')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            Cardápio
          </button>
          <button
            onClick={() => handleScrollTo('formato-9x25')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            O Formato 9x25cm
          </button>
          <button
            onClick={() => handleScrollTo('combos')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            Combos
          </button>
          <button
            onClick={onNavigateToBuilder}
            className="hover:text-[#C49A6C] transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1 py-1"
          >
            <span>Monte a Sua</span>
            <span className="text-[9px] text-[#CD212A] font-bold uppercase tracking-wider bg-[#CD212A]/10 px-1 rounded">Novo</span>
          </button>
          <button
            onClick={() => handleScrollTo('processo')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            Nossa Arte
          </button>
          <button
            onClick={() => handleScrollTo('localizacao')}
            className="hover:text-white transition-colors whitespace-nowrap cursor-pointer py-1"
          >
            Entrega & Contato
          </button>
        </nav>

        {/* Zone 3: Primary Action & Interactive Cart */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick WhatsApp Button - Visible on Tablet and Desktop */}
          <a
            href="https://wa.me/5511984937529?text=Ol%C3%A1!%20Gostaria%20de%20ver%20o%20card%C3%A1pio%20da%20Quadratta%20Pizza%20Artesanal."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 sm:gap-2 px-3 py-2 text-xs font-semibold text-[#14110E] bg-[#22C55E] hover:bg-[#16A34A] hover:text-white rounded-lg transition-colors shadow-sm whitespace-nowrap min-h-[40px]"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden xl:inline">Peça via WhatsApp</span>
            <span className="xl:hidden">WhatsApp</span>
          </a>

          {/* Cart Trigger Button - Enhanced for Touch Targets */}
          <button
            onClick={onOpenCart}
            aria-label="Abrir Sacola de Pedidos"
            className="relative flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-[#B07D4F] hover:bg-[#8A5832] text-white rounded-lg font-medium text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer min-h-[40px] sm:min-h-[44px]"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline font-semibold">Sacola</span>
            {totalItemsCount > 0 && (
              <span className="flex items-center gap-1 text-[11px] sm:text-xs font-bold bg-[#14110E] text-[#F5F2EB] px-1.5 sm:px-2 py-0.5 rounded-full tabular-nums">
                {totalItemsCount}
                <span className="hidden md:inline font-normal text-[#C49A6C]">
                  · R$ {cartTotal.toFixed(2).replace('.', ',')}
                </span>
              </span>
            )}
          </button>

          {/* Mobile and Tablet Menu Toggle (min 44px touch target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-[#A89886] hover:text-white focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-[#271E18] cursor-pointer"
            aria-label="Alternar menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#1A1512] border-b border-[#2E241E] px-4 pt-3 pb-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-1 text-sm sm:text-base font-medium text-[#E6D5C3]">
              <button
                onClick={() => handleScrollTo('cardapio')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-[#271E18] min-h-[44px] flex items-center transition-colors cursor-pointer"
              >
                Cardápio Completo
              </button>
              <button
                onClick={() => handleScrollTo('formato-9x25')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-[#271E18] min-h-[44px] flex items-center transition-colors cursor-pointer"
              >
                O Formato 9x25cm
              </button>
              <button
                onClick={() => handleScrollTo('combos')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-[#271E18] min-h-[44px] flex items-center transition-colors cursor-pointer"
              >
                Combos Promocionais
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToBuilder();
                }}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-[#271E18] text-[#C49A6C] font-semibold min-h-[44px] flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>Monte a Sua Quadratta (Personalizador)</span>
                <span className="text-[10px] bg-[#CD212A] text-white px-2 py-0.5 rounded uppercase font-bold">Novo</span>
              </button>
              <button
                onClick={() => handleScrollTo('processo')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-[#271E18] min-h-[44px] flex items-center transition-colors cursor-pointer"
              >
                Nossa Arte & Forno na Pedra
              </button>
              <button
                onClick={() => handleScrollTo('localizacao')}
                className="text-left py-2.5 px-3 rounded-lg hover:bg-[#271E18] min-h-[44px] flex items-center transition-colors cursor-pointer"
              >
                Área de Entrega & Horários (Vila Andrade)
              </button>
            </div>

            <div className="pt-4 mt-2 border-t border-[#2E241E] flex flex-col gap-2">
              <a
                href="https://wa.me/5511984937529?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Quadratta%20Pizza%20Artesanal."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#22C55E] hover:bg-[#16A34A] text-[#14110E] hover:text-white font-bold rounded-xl text-sm min-h-[44px] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Chamar no WhatsApp (11) 98493-7529</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
