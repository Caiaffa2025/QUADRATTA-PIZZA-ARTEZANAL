import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Menu, X, MapPin, Pizza, Sparkles, Package, Flame, FileText, ChevronRight, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onNavigateToBuilder: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cart, onOpenCart, onNavigateToBuilder }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('cardapio');

  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  // Scroll spy to highlight active section in navbar and drawer
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['cardapio', 'formato-9x25', 'combos', 'monte-sua-quadratta', 'encartes', 'processo', 'localizacao'];
      const scrollPos = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Lock background scroll when drawer is open, unlock on unmount
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleScrollTo = (targetId: string) => {
    document.body.style.overflow = '';
    setMobileMenuOpen(false);

    const resolvedId = targetId === 'builder' ? 'monte-sua-quadratta' : targetId;

    setTimeout(() => {
      const element = document.getElementById(resolvedId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.hash = resolvedId;
      }
    }, 60);
  };

  const navLinks = [
    { id: 'cardapio', label: 'Cardápio', shortLabel: 'Cardápio', icon: Pizza, badge: '6 Sabores' },
    { id: 'formato-9x25', label: 'O Formato 9x25cm', shortLabel: 'Formato 9x25', icon: Package },
    { id: 'combos', label: 'Combos', shortLabel: 'Combos', icon: Sparkles, badge: 'Econômico' },
    { id: 'monte-sua-quadratta', label: 'Monte a Sua', shortLabel: 'Monte a Sua', isBuilder: true, icon: Sparkles, badge: 'Novo', highlight: true },
    { id: 'encartes', label: 'Encartes', shortLabel: 'Encartes', icon: FileText, badge: 'Ampliado', highlightGold: true },
    { id: 'processo', label: 'Nossa Arte', shortLabel: 'Nossa Arte', icon: Flame },
    { id: 'localizacao', label: 'Entrega & Contato', shortLabel: 'Contato', icon: MapPin },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#14110E]/95 backdrop-blur-md border-b border-[#2B231D]">
        {/* Top micro-bar: responsive flex wrapping without overlap */}
        <div className="bg-[#1C1612] px-3 sm:px-6 py-1.5 border-b border-[#2E241E] text-[10px] sm:text-xs text-[#A89886] max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="flex items-center gap-1.5 text-[#E6D5C3] whitespace-nowrap shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#16A34A] inline-block animate-pulse"></span>
              <span className="font-semibold text-white">Aberto hoje:</span> 18h às 23h30
            </span>
            <span className="hidden md:inline text-[#6B5A4E]">·</span>
            <span className="hidden md:flex items-center gap-1 text-[#C49A6C] whitespace-nowrap truncate">
              <MapPin className="w-3.5 h-3.5 text-[#CD212A] shrink-0" />
              Vila Andrade / Morumbi - SP
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="https://wa.me/5511984937529?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20na%20Quadratta%20Pizza%20Artesanal!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#4ADE80] hover:text-[#86EFAC] transition-colors font-medium whitespace-nowrap"
            >
              <Phone className="w-3 h-3 shrink-0" />
              <span className="hidden sm:inline font-bold">(11) 98493-7529</span>
              <span className="sm:hidden font-bold">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Main Header Bar: Responsive for Mobile, Tablet, and Desktop */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
          
          {/* Zone 1: Brand Wordmark & Emblem */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 sm:gap-3 group shrink-0"
          >
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
              <span className="font-display font-extrabold text-lg sm:text-2xl tracking-tight text-[#F5F2EB] group-hover:text-[#C49A6C] transition-colors leading-none block">
                Quadratta
              </span>
              <div className="flex items-center gap-1 text-[8px] sm:text-[11px] uppercase tracking-wider text-[#C49A6C] font-semibold mt-0.5">
                <span>Pizza Artesanal</span>
                <span className="text-[#8A5832]">·</span>
                <span className="text-[#A89886] font-normal">9x25 cm</span>
              </div>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop: >=1024px) */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-5 text-xs xl:text-sm font-medium text-[#C5B7A7]">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative py-1.5 px-2 rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#F59E0B] font-bold bg-[#271E18]/60 shadow-xs'
                      : item.highlightGold
                      ? 'text-[#F59E0B] hover:text-[#FBBF24] font-semibold'
                      : item.highlight
                      ? 'text-[#E6D5C3] hover:text-[#C49A6C]'
                      : 'hover:text-white'
                  }`}
                >
                  <span className="hidden xl:inline">{item.label}</span>
                  <span className="xl:hidden">{item.shortLabel}</span>

                  {item.badge && item.highlight && (
                    <span className="text-[9px] text-[#CD212A] font-bold uppercase tracking-wider bg-[#CD212A]/15 px-1 py-0.5 rounded border border-[#CD212A]/30 hidden xl:inline">
                      {item.badge}
                    </span>
                  )}

                  {item.badge && item.highlightGold && (
                    <span className="text-[9px] text-[#F59E0B] font-bold uppercase tracking-wider bg-[#F59E0B]/10 px-1 py-0.5 rounded border border-[#F59E0B]/30 hidden xl:inline">
                      {item.badge}
                    </span>
                  )}

                  {/* Active bottom bar glow */}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#F59E0B] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (WhatsApp, Cart Button, and Mobile/Tablet Menu Hamburger) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Quick WhatsApp Button - Visible on Tablet and Desktop */}
            <a
              href="https://wa.me/5511984937529?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Quadratta%20Pizza%20Artesanal."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#14110E] bg-[#22C55E] hover:bg-[#16A34A] hover:text-white rounded-lg transition-colors shadow-sm whitespace-nowrap min-h-[40px]"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xl:inline">Peça no WhatsApp</span>
              <span className="xl:hidden">WhatsApp</span>
            </a>

            {/* Cart Trigger Button */}
            <button
              onClick={onOpenCart}
              aria-label="Abrir Sacola de Pedidos"
              className="relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 bg-[#B07D4F] hover:bg-[#8A5832] text-white rounded-lg font-medium text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer min-h-[40px] sm:min-h-[44px]"
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

            {/* Mobile and Tablet Menu Toggle (Touch Target >= 44px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 text-[#E6D5C3] hover:text-white focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center gap-1.5 rounded-xl bg-[#1C1612] hover:bg-[#271E18] border border-[#2E241E] cursor-pointer active:scale-95 transition-all shadow-sm"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs font-bold hidden sm:inline text-[#C49A6C]">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* FULL RESPONSIVE SLIDE-OVER DRAWER (MOBILE & TABLET) - OUTSIDE <header> TO PREVENT BACKDROP-FILTER CLIPPING */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => {
                document.body.style.overflow = '';
                setMobileMenuOpen(false);
              }}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
            />

            {/* Slide-in Sheet from Right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm sm:max-w-md bg-[#16120E] border-l border-[#2E241E] flex flex-col shadow-2xl z-10"
            >
              {/* Drawer Top Header */}
              <div className="p-4 sm:p-5 border-b border-[#2B231D] bg-[#1A1410] flex items-center justify-between gap-3 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#271E18] border border-[#B07D4F]/40 flex items-center justify-center text-[#F5F2EB]">
                    <Pizza className="w-5 h-5 text-[#C49A6C]" />
                  </div>
                  <div>
                    <span className="font-display font-extrabold text-lg text-[#F5F2EB] leading-none block">
                      Quadratta
                    </span>
                    <span className="text-[10px] text-[#A89886] font-semibold uppercase tracking-wider">
                      Menu de Navegação
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    document.body.style.overflow = '';
                    setMobileMenuOpen(false);
                  }}
                  className="p-2 rounded-xl text-[#A89886] hover:text-white bg-[#221A15] border border-[#2E241E] cursor-pointer min-w-[42px] min-h-[42px] flex items-center justify-center active:scale-95 transition-all"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Navigation Links with active indicators and grouped layout */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-1.5 overscroll-contain">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#8A7B6E] px-2 mb-1 pt-1">
                  Seções do Aplicativo
                </div>

                {navLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleScrollTo(item.id)}
                      className={`w-full p-3 rounded-xl min-h-[48px] flex items-center justify-between text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#271E18] text-[#F59E0B] border border-[#F59E0B]/50 shadow-md'
                          : item.highlight
                          ? 'bg-[#221A15] text-[#F5F2EB] border border-[#B07D4F]/40 hover:bg-[#271E18]'
                          : item.highlightGold
                          ? 'bg-[#1F1912] text-[#F59E0B] border border-[#F59E0B]/30 hover:bg-[#2A2016]'
                          : 'text-[#E6D5C3] hover:bg-[#221A15] hover:text-white border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`p-2 rounded-lg shrink-0 ${
                          isActive
                            ? 'bg-[#F59E0B] text-[#14110E]'
                            : item.highlight
                            ? 'bg-[#B07D4F] text-white'
                            : item.highlightGold
                            ? 'bg-[#F59E0B]/20 text-[#F59E0B]'
                            : 'bg-[#1C1612] text-[#A89886]'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="truncate">
                          <span className={`text-sm block truncate ${isActive ? 'font-bold text-[#F59E0B]' : 'font-semibold'}`}>
                            {item.label}
                          </span>
                          {item.id === 'encartes' && (
                            <span className="text-[10px] text-[#A89886] block">Visualização em alta resolução</span>
                          )}
                          {item.id === 'cardapio' && (
                            <span className="text-[10px] text-[#A89886] block">Pizzas individuais 9x25 cm</span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {item.badge && (
                          <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded ${
                            isActive
                              ? 'bg-[#F59E0B] text-[#14110E]'
                              : item.highlight
                              ? 'bg-[#CD212A] text-white'
                              : item.highlightGold
                              ? 'bg-[#F59E0B] text-[#14110E]'
                              : 'bg-[#2A2017] text-[#C49A6C] border border-[#3E3026]'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                        <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#F59E0B]' : 'text-[#6B5A4E]'}`} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Drawer Bottom Actions: Hours, Cart & Direct WhatsApp CTA */}
              <div className="p-4 sm:p-5 border-t border-[#2B231D] bg-[#1A1410] space-y-2.5 shrink-0">
                {/* Store Status Pill */}
                <div className="flex items-center justify-between text-xs text-[#A89886] bg-[#14110E] p-2.5 rounded-xl border border-[#2E241E]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#16A34A]" />
                    <span className="text-[#E6D5C3] font-medium">18h00 às 23h30</span>
                  </div>
                  <span className="text-[11px] text-[#22C55E] font-bold">Aberto para Delivery</span>
                </div>

                {/* Sacola Action inside Drawer */}
                {totalItemsCount > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      document.body.style.overflow = '';
                      setMobileMenuOpen(false);
                      onOpenCart();
                    }}
                    className="w-full py-3 px-4 bg-[#B07D4F] hover:bg-[#8A5832] text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-between shadow-md cursor-pointer min-h-[44px]"
                  >
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4" />
                      <span>Ver Sacola ({totalItemsCount})</span>
                    </div>
                    <span className="font-extrabold tabular-nums">
                      R$ {cartTotal.toFixed(2).replace('.', ',')}
                    </span>
                  </button>
                )}

                {/* Direct WhatsApp Callout */}
                <a
                  href="https://wa.me/5511984937529?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Quadratta%20Pizza%20Artesanal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-[#22C55E] hover:bg-[#16A34A] text-[#14110E] hover:text-white font-extrabold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg min-h-[48px] transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Pedir no WhatsApp (11) 98493-7529</span>
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

