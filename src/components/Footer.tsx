import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#100D0B] border-t border-[#241C17] text-[#A89886] relative pb-safe">
      {/* Italian Flag Strip along top edge */}
      <div className="h-1.5 w-full flex">
        <div className="w-1/3 bg-[#008C45]"></div>
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-[#CD212A]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-10">
          
          {/* Col 1: Brand (Spans 2 cols on desktop) */}
          <div className="space-y-3 sm:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#271E18] border border-[#B07D4F]/40 flex items-center justify-center text-[#F5F2EB] shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C9.5 2 7.37 3.5 6.47 5.65C5.9 5.24 5.2 5 4.5 5C2.57 5 1 6.57 1 8.5C1 10.15 2.15 11.53 3.7 11.88C3.89 13.9 5.17 15.6 7 16.38V19C7 19.55 7.45 20 8 20H16C16.55 20 17 19.55 17 19V16.38C18.83 15.6 20.11 13.9 20.3 11.88C21.85 11.53 23 10.15 23 8.5C23 6.57 21.43 5 19.5 5C18.8 5 18.1 5.24 17.53 5.65C16.63 3.5 14.5 2 12 2M8 21C7.45 21 7 21.45 7 22H17C17 21.45 16.55 21 16 21H8Z" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-xl sm:text-2xl text-[#F5F2EB]">
                Quadratta
              </span>
            </div>
            <p className="text-xs text-[#C49A6C] font-semibold italic">
              Uma nova maneira de comer pizza!
            </p>
            <p className="text-xs text-[#8A7B6E] max-w-sm leading-relaxed">
              Pizzas artesanais individuais alongadas de 10 x 25 cm. Massa fininha, fermentação 48h, recheio generoso e assada na pedra na hora do pedido.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6D5C3]">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#quem-somos" className="text-[#F59E0B] hover:text-[#FBBF24] transition-colors py-0.5 inline-block font-semibold">Quem Somos (Nossa História)</a></li>
              <li><a href="#cardapio" className="hover:text-white transition-colors py-0.5 inline-block">Cardápio Oficial</a></li>
              <li><a href="#formato-10x25" className="hover:text-white transition-colors py-0.5 inline-block">O Formato 10x25cm</a></li>
              <li><a href="#combos" className="hover:text-white transition-colors py-0.5 inline-block">Combos Promocionais</a></li>
              <li><a href="#encartes" className="hover:text-[#F59E0B] transition-colors py-0.5 inline-block font-semibold">Encartes Oficiais (Ampliado)</a></li>
              <li><a href="#monte-sua-quadratta" className="hover:text-white transition-colors py-0.5 inline-block">Monte a Sua Pizza</a></li>
              <li><a href="#processo" className="hover:text-white transition-colors py-0.5 inline-block">Nossa Arte Artesanal</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#E6D5C3]">Contato & Pedidos</h4>
            <div className="space-y-2 text-xs">
              <a
                href="https://wa.me/5511984937529"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#22C55E] hover:underline font-semibold py-0.5"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>(11) 98493-7529</span>
              </a>
              <p className="flex items-center gap-2 text-[#C5B7A7]">
                <MapPin className="w-3.5 h-3.5 text-[#CD212A] shrink-0" />
                <span>Vila Andrade / Morumbi - SP</span>
              </p>
              <p className="text-[11px] text-[#8A7B6E]">
                Terça a Domingo: 18h00 às 23h30
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-[#1C1612] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-[#6B5A4E]">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} Quadratta Pizza Artesanal. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">10 x 25 cm · Feita com paixão</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1C1612] hover:bg-[#271E18] text-[#A89886] hover:text-white transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
              title="Voltar ao topo"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
