import React, { useState } from 'react';
import { Search, Plus, Check, X, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem, CategoryType, CartItem } from '../types';
import { MENU_ITEMS, CRUST_OPTIONS } from '../data/menuData';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (cartItem: CartItem) => void;
}

const CATEGORIES: { id: CategoryType; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'salgadas', label: 'Pizzas Salgadas' },
  { id: 'especiais', label: 'Especiais Gourmet' },
  { id: 'doces', label: 'Pizzas Doces' },
  { id: 'combos', label: 'Combos' },
  { id: 'bebidas', label: 'Bebidas' },
];

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItem,
  onQuickAdd,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickAddedId, setQuickAddedId] = useState<string | null>(null);

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'todos' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (catId: CategoryType) => {
    if (catId === 'todos') return MENU_ITEMS.length;
    return MENU_ITEMS.filter(item => item.category === catId).length;
  };

  const handleQuickAdd = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    const cartItem: CartItem = {
      cartItemId: `${item.id}-quick-${Date.now()}`,
      item,
      quantity: 1,
      crust: CRUST_OPTIONS[0],
      selectedExtras: [],
      unitPrice: item.price,
      totalPrice: item.price,
    };
    onQuickAdd(cartItem);
    setQuickAddedId(item.id);
    setTimeout(() => {
      setQuickAddedId(null);
    }, 1200);
  };

  return (
    <section id="cardapio" className="py-12 sm:py-20 bg-[#14110E] relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Optimized for Mobile, Tablet and Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-[#2B231D]"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#C49A6C] mb-1.5 sm:mb-2">
              <span className="flex h-1.5 w-3 rounded-xs overflow-hidden">
                <span className="w-1/3 bg-[#008C45]"></span>
                <span className="w-1/3 bg-white"></span>
                <span className="w-1/3 bg-[#CD212A]"></span>
              </span>
              <span>Nosso Cardápio Oficial</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#F5F2EB] tracking-tight text-balance">
              Escolha sua <span className="text-[#C49A6C]">Quadratta</span> artesanal
            </h2>
            <p className="text-xs sm:text-sm text-[#A89886] mt-1 max-w-xl">
              Todas as pizzas são individuais no tamanho exclusivo de 9 x 25 cm, com massa fininha assada na hora e ingredientes de alta qualidade.
            </p>
          </div>

          {/* Search Input: Touch-friendly with Clear button */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 text-[#A89886] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar sabor ou ingrediente..."
              className="w-full bg-[#1C1612] border border-[#2E241E] focus:border-[#B07D4F] rounded-xl pl-10 pr-9 py-2.5 sm:py-3 text-xs sm:text-sm text-[#F5F2EB] placeholder-[#6B5A4E] outline-none transition-colors min-h-[44px]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8A7B6E] hover:text-white rounded-full hover:bg-[#271E18] transition-colors"
                aria-label="Limpar busca"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Category Tabs: Smooth scroll on Mobile & Tablet, neat layout on Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-3 no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 active:scale-95 shrink-0 min-h-[42px] sm:min-h-[44px] ${
                    isActive
                      ? 'bg-[#B07D4F] text-white shadow-md'
                      : 'bg-[#1C1612] text-[#A89886] hover:text-white border border-[#2B231D] hover:border-[#3E3026]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-black/30 text-white'
                        : 'bg-[#271E18] text-[#8A7B6E]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Products Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        {filteredItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-16 bg-[#1A1512] rounded-2xl border border-[#2E241E] max-w-md mx-auto p-4"
          >
            <Filter className="w-8 h-8 text-[#8A7B6E] mx-auto mb-2 opacity-50" />
            <p className="text-sm font-semibold text-[#E6D5C3]">Nenhum item encontrado para esta busca.</p>
            <p className="text-xs text-[#8A7B6E] mt-1">Tente pesquisar por mussarela, calabresa, frango ou chocolate.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('todos');
              }}
              className="mt-4 px-4 py-2.5 bg-[#271E18] text-[#C49A6C] rounded-lg text-xs font-bold border border-[#B07D4F]/40 hover:bg-[#342820] min-h-[44px] cursor-pointer"
            >
              Limpar busca
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <AnimatePresence>
              {filteredItems.map((item, index) => {
                const isJustAdded = quickAddedId === item.id;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min(index * 0.05, 0.3),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    onClick={() => onSelectItem(item)}
                    className="group relative rounded-2xl bg-[#1C1612] border border-[#2E241E] hover:border-[#B07D4F]/60 transition-colors duration-300 shadow-lg hover:shadow-2xl overflow-hidden flex flex-col justify-between cursor-pointer"
                  >
                    {/* Visual Card Image: Responsive aspect ratio */}
                    <div>
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#17120F]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1612] via-transparent to-black/30" />
                        
                        <div className="absolute top-3 left-3 bg-[#14110E]/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold text-[#F59E0B] border border-[#B07D4F]/40 shadow-sm">
                          {item.dimensions}
                        </div>

                        {item.isPopular && (
                          <div className="absolute top-3 right-3 bg-[#CD212A] text-white px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                            Destaque
                          </div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-4 sm:p-5 space-y-2">
                        <div>
                          <div className="flex items-baseline justify-between gap-2">
                            <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F2EB] group-hover:text-[#C49A6C] transition-colors">
                              {item.name}
                            </h3>
                          </div>
                          <p className="text-xs font-semibold text-[#C49A6C] italic">
                            "{item.tagline}"
                          </p>
                        </div>

                        <p className="text-xs text-[#A89886] line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Ingredients chips */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {item.ingredients.slice(0, 3).map((ing, i) => (
                            <span
                              key={i}
                              className="text-[10px] text-[#A89886] bg-[#221A15] px-1.5 py-0.5 rounded border border-[#2B231D]"
                            >
                              {ing}
                            </span>
                          ))}
                          {item.ingredients.length > 3 && (
                            <span className="text-[10px] text-[#C49A6C] px-1 py-0.5">
                              +{item.ingredients.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Bottom: Price and Actions with Responsive Touch Targets (>= 44px) */}
                    <div className="p-4 sm:p-5 pt-0 mt-2 flex items-center justify-between border-t border-[#261E18] pt-3">
                      <div>
                        <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#8A7B6E] block">
                          Individual
                        </span>
                        <span className="font-display font-extrabold text-lg sm:text-xl text-[#F5F2EB] tabular-nums">
                          R$ {item.price.toFixed(2).replace('.', ',')}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectItem(item);
                          }}
                          className="px-3 py-2 bg-[#271E18] hover:bg-[#342820] text-[#E6D5C3] hover:text-white rounded-xl text-xs font-semibold border border-[#B07D4F]/40 transition-colors cursor-pointer min-h-[44px] flex items-center justify-center"
                        >
                          Personalizar
                        </button>

                        <button
                          type="button"
                          onClick={(e) => handleQuickAdd(e, item)}
                          title="Adicionar direto"
                          className={`p-2.5 rounded-xl transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center ${
                            isJustAdded
                              ? 'bg-[#22C55E] text-white scale-105'
                              : 'bg-[#B07D4F] hover:bg-[#8A5832] text-white active:scale-95'
                          }`}
                          aria-label={`Adicionar ${item.name}`}
                        >
                          {isJustAdded ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
};
