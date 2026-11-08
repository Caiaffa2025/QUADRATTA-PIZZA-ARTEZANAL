import React, { useState } from 'react';
import { Sparkles, Check, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import { CartItem, MenuItem } from '../types';

interface PizzaBuilderProps {
  onAddCustomPizza: (cartItem: CartItem) => void;
}

const CRUST_TYPES = [
  { id: 'fininha', name: 'Massa Fininha Tradicional', desc: 'Fermentação natural de 48h, super leve', price: 0 },
  { id: 'integral', name: 'Massa Multigrãos Integral', desc: 'Rica em fibras com sementes tostadas', price: 3.00 },
];

const BORDER_TYPES = [
  { id: 'crocante', name: 'Borda Tradicional Crocante', price: 0 },
  { id: 'catupiry', name: 'Borda Recheada com Catupiry', price: 5.00 },
  { id: 'cheddar', name: 'Borda Recheada com Cheddar', price: 5.00 },
];

const SAUCE_TYPES = [
  { id: 'tomate', name: 'Molho Rústico de Tomate San Marzano', desc: 'Cozido lentamente com azeite e ervas', price: 0, color: '#991B1B' },
  { id: 'branco', name: 'Molho Branco Cremoso de Queijos', desc: 'Base aveludada e suave', price: 3.00, color: '#FEF3C7' },
  { id: 'pesto', name: 'Molho Pesto Fresco de Manjericão', desc: 'Azeite, manjericão e castanhas', price: 4.00, color: '#166534' },
];

const CHEESE_TYPES = [
  { id: 'mussarela', name: 'Mussarela Artesanal de Primeira', price: 0 },
  { id: '4queijos', name: 'Mix 4 Queijos (Mussarela, Provolone, Gorgonzola, Parmesão)', price: 4.50 },
  { id: 'semlactose', name: 'Mussarela Sem Lactose', price: 4.00 },
];

const TOPPINGS_AVAILABLE = [
  { id: 'calabresa', name: 'Calabresa Defumada', icon: '🥓', category: 'carnes' },
  { id: 'bacon', name: 'Bacon Dourado Crocante', icon: '🥓', category: 'carnes' },
  { id: 'frango', name: 'Frango Desfiado com Ervas', icon: '🍗', category: 'carnes' },
  { id: 'presunto', name: 'Presunto Cozido Magro', icon: '🥩', category: 'carnes' },
  { id: 'catupiry_fios', name: 'Requeijão Catupiry', icon: '🧀', category: 'queijos' },
  { id: 'tomate', name: 'Tomate Italiano em Rodelas', icon: '🍅', category: 'vegetais' },
  { id: 'milho', name: 'Milho Doce Tenro', icon: '🌽', category: 'vegetais' },
  { id: 'cebola', name: 'Cebola Roxa Fininha', icon: '🧅', category: 'vegetais' },
  { id: 'azeitona', name: 'Azeitonas Pretas Chilenas', icon: '🫒', category: 'vegetais' },
  { id: 'manjericao', name: 'Manjericão Fresco da Horta', icon: '🌿', category: 'vegetais' },
];

export const PizzaBuilder: React.FC<PizzaBuilderProps> = ({ onAddCustomPizza }) => {
  const [selectedCrust, setSelectedCrust] = useState(CRUST_TYPES[0]);
  const [selectedBorder, setSelectedBorder] = useState(BORDER_TYPES[0]);
  const [selectedSauce, setSelectedSauce] = useState(SAUCE_TYPES[0]);
  const [selectedCheese, setSelectedCheese] = useState(CHEESE_TYPES[0]);
  const [selectedToppings, setSelectedToppings] = useState<string[]>(['calabresa', 'cebola']);
  const [customName] = useState('Minha Quadratta Especial');

  const basePizzaPrice = 28.00;
  const currentTotal =
    basePizzaPrice +
    selectedCrust.price +
    selectedBorder.price +
    selectedSauce.price +
    selectedCheese.price;

  const toggleTopping = (toppingId: string) => {
    if (selectedToppings.includes(toppingId)) {
      setSelectedToppings(selectedToppings.filter(t => t !== toppingId));
    } else {
      if (selectedToppings.length >= 4) {
        alert('Você pode escolher no máximo 4 recheios para manter a crocância ideal da pizza de 9x25cm!');
        return;
      }
      setSelectedToppings([...selectedToppings, toppingId]);
    }
  };

  const handleAddToCart = () => {
    const toppingNames = selectedToppings.map(
      id => TOPPINGS_AVAILABLE.find(t => t.id === id)?.name || id
    );

    const customMenuItem: MenuItem = {
      id: `custom-${Date.now()}`,
      name: customName || 'Quadratta Personalizada 9x25cm',
      tagline: 'Criada exclusivamente por você!',
      description: `${selectedCrust.name}, ${selectedBorder.name}, ${selectedSauce.name}, ${selectedCheese.name}. Recheios: ${toppingNames.join(', ')}.`,
      price: currentTotal,
      category: 'especiais',
      dimensions: '9 x 25 cm',
      image: '/assets/aistudio/IMG_1457_43f83bca.png',
      ingredients: toppingNames,
    };

    const cartItem: CartItem = {
      cartItemId: `custom-cart-${Date.now()}`,
      item: customMenuItem,
      quantity: 1,
      crust: { id: selectedBorder.id, name: selectedBorder.name, price: 0 },
      selectedExtras: [],
      observations: `Massa: ${selectedCrust.name} | Molho: ${selectedSauce.name} | Queijo: ${selectedCheese.name}`,
      unitPrice: currentTotal,
      totalPrice: currentTotal,
    };

    onAddCustomPizza(cartItem);
  };

  return (
    <section id="monte-sua-quadratta" className="py-12 sm:py-20 bg-[#16120F] border-b border-[#2B231D] relative scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#C49A6C]">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Monte do Seu Jeito</span>
            <span>·</span>
            <span>Formato 9 x 25 cm</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#F5F2EB] tracking-tight text-balance">
            Personalizador de <span className="text-[#F59E0B]">Quadratta</span> Artesanal
          </h2>
          <p className="text-[#A89886] text-xs sm:text-sm lg:text-base leading-relaxed">
            Escolha sua massa, molho, queijo e até 4 recheios nobres para criar sua pizza individual 9x25cm perfeita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Visual 9x25cm Canvas Preview (5 cols) - sticky ONLY on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-24 space-y-4"
          >
            <div className="rounded-2xl bg-[#1C1612] border border-[#3E3026] p-4 sm:p-6 shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F2EB]">
                    Prévia da sua Quadratta
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#C49A6C]">Tamanho real: 9 x 25 cm</p>
                </div>
                <div className="text-right">
                  <span className="text-[9px] sm:text-[10px] text-[#A89886] uppercase block">Valor Total</span>
                  <span className="font-display font-black text-xl sm:text-2xl text-[#F5F2EB] tabular-nums">
                    R$ {currentTotal.toFixed(2).replace('.', ',')}
                  </span>
                </div>
              </div>

              {/* The Elongated Pizza Visualizer Box */}
              <div className="relative py-4 sm:py-6 px-2 sm:px-4 bg-[#120F0D] rounded-xl border border-[#2E241E] flex flex-col items-center justify-center">
                
                {/* 9 x 25 cm Scale Indicator */}
                <div className="w-full flex justify-between text-[10px] sm:text-[11px] font-mono text-[#A89886] pb-2 px-2 sm:px-6">
                  <span>← 9 cm →</span>
                  <span>← 25 cm comprimento →</span>
                </div>

                {/* The Rectangular Elongated Pizza Crust - Responsive scale */}
                <motion.div
                  layout
                  className="relative w-40 sm:w-52 h-64 sm:h-80 rounded-xl transition-all duration-300 shadow-2xl p-2 sm:p-2.5 flex flex-col justify-between overflow-hidden"
                  style={{
                    backgroundColor: selectedCrust.id === 'integral' ? '#78431E' : '#B4783E',
                    border: selectedBorder.id !== 'crocante' ? '4px dashed #F59E0B' : '4px solid #8A4B1A',
                  }}
                >
                  {/* Sauce Layer */}
                  <motion.div
                    animate={{ backgroundColor: selectedSauce.color }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full rounded-lg p-2 relative flex flex-wrap content-start gap-2 overflow-hidden"
                  >
                    {/* Cheese Layer Sheen */}
                    <motion.div
                      animate={{
                        backgroundColor:
                          selectedCheese.id === '4queijos'
                            ? '#FEF08A'
                            : '#FDE047',
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 opacity-90"
                    />

                    {/* Toppings Distributed Across the Elongated Surface */}
                    <div className="relative z-10 w-full h-full flex flex-col justify-around py-1">
                      {selectedToppings.length === 0 ? (
                        <div className="h-full flex items-center justify-center text-center p-2">
                          <p className="text-[11px] font-semibold text-[#854D0E] bg-white/70 rounded px-2 py-1">
                            Selecione seus recheios!
                          </p>
                        </div>
                      ) : (
                        Array.from({ length: 4 }).map((_, rowIndex) => (
                          <div key={rowIndex} className="flex justify-around items-center">
                            {selectedToppings.map((tId, tIdx) => {
                              const tObj = TOPPINGS_AVAILABLE.find(t => t.id === tId);
                              return (
                                <motion.span
                                  key={`${rowIndex}-${tIdx}`}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                                  className="text-lg sm:text-2xl drop-shadow select-none hover:scale-125 transition-transform"
                                  title={tObj?.name}
                                >
                                  {tObj?.icon}
                                </motion.span>
                              );
                            })}
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>

                  {/* Border Tag */}
                  {selectedBorder.id !== 'crocante' && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-[#14110E]/90 text-[#F59E0B] text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                      Borda Recheada!
                    </div>
                  )}
                </motion.div>

                <div className="mt-3 sm:mt-4 text-center">
                  <p className="text-xs font-semibold text-[#E6D5C3]">
                    {selectedBorder.name} · {selectedSauce.name}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-[#A89886]">
                    Queijo: {selectedCheese.name} ({selectedToppings.length}/4 recheios)
                  </p>
                </div>
              </div>

              {/* Add Custom Pizza Button */}
              <button
                onClick={handleAddToCart}
                className="w-full py-3 sm:py-3.5 bg-[#B07D4F] hover:bg-[#8A5832] text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm active:scale-98 min-h-[44px]"
              >
                <ShoppingBag className="w-4 h-4 shrink-0" />
                <span>Adicionar Minha Criação à Sacola</span>
              </button>

            </div>
          </motion.div>

          {/* Right Column: Customization Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Step 1: Base de Massa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#1C1612] border border-[#2E241E] space-y-3"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-xs sm:text-sm font-bold text-[#F5F2EB] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#B07D4F] text-white text-xs flex items-center justify-center font-mono shrink-0">1</span>
                  <span>Tipo da Massa Artesanal</span>
                </h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {CRUST_TYPES.map((crust) => (
                  <button
                    key={crust.id}
                    onClick={() => setSelectedCrust(crust)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-between min-h-[56px] ${
                      selectedCrust.id === crust.id
                        ? 'bg-[#2B1F17] border-[#B07D4F] text-white'
                        : 'bg-[#181310] border-[#2E241E] text-[#A89886] hover:border-[#3E3026]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#F5F2EB]">{crust.name}</span>
                        {selectedCrust.id === crust.id && <Check className="w-4 h-4 text-[#C49A6C] shrink-0" />}
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-[#A89886] mt-0.5">{crust.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-[#C49A6C] mt-2">
                      {crust.price === 0 ? 'Incluso' : `+ R$ ${crust.price.toFixed(2).replace('.', ',')}`}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 2: Borda da Massa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#1C1612] border border-[#2E241E] space-y-3"
            >
              <h4 className="text-xs sm:text-sm font-bold text-[#F5F2EB] uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#B07D4F] text-white text-xs flex items-center justify-center font-mono shrink-0">2</span>
                <span>Borda Recheada</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {BORDER_TYPES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBorder(b)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-between min-h-[56px] ${
                      selectedBorder.id === b.id
                        ? 'bg-[#2B1F17] border-[#B07D4F] text-white'
                        : 'bg-[#181310] border-[#2E241E] text-[#A89886] hover:border-[#3E3026]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#F5F2EB]">{b.name}</span>
                      {selectedBorder.id === b.id && <Check className="w-4 h-4 text-[#C49A6C] shrink-0" />}
                    </div>
                    <span className="text-xs font-bold text-[#C49A6C]">
                      {b.price === 0 ? 'Incluso' : `+ R$ ${b.price.toFixed(2).replace('.', ',')}`}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 3: Molho Artesanal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#1C1612] border border-[#2E241E] space-y-3"
            >
              <h4 className="text-xs sm:text-sm font-bold text-[#F5F2EB] uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#B07D4F] text-white text-xs flex items-center justify-center font-mono shrink-0">3</span>
                <span>Molho Base</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {SAUCE_TYPES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSauce(s)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-between min-h-[56px] ${
                      selectedSauce.id === s.id
                        ? 'bg-[#2B1F17] border-[#B07D4F] text-white'
                        : 'bg-[#181310] border-[#2E241E] text-[#A89886] hover:border-[#3E3026]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#F5F2EB]">{s.name}</span>
                        {selectedSauce.id === s.id && <Check className="w-4 h-4 text-[#C49A6C] shrink-0" />}
                      </div>
                      <p className="text-[10px] text-[#A89886] mt-0.5">{s.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-[#C49A6C] mt-2">
                      {s.price === 0 ? 'Incluso' : `+ R$ ${s.price.toFixed(2).replace('.', ',')}`}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 4: Queijo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#1C1612] border border-[#2E241E] space-y-3"
            >
              <h4 className="text-xs sm:text-sm font-bold text-[#F5F2EB] uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#B07D4F] text-white text-xs flex items-center justify-center font-mono shrink-0">4</span>
                <span>Base de Queijo</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {CHEESE_TYPES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCheese(c)}
                    className={`p-3 text-left rounded-xl border transition-all cursor-pointer flex flex-col justify-between min-h-[56px] ${
                      selectedCheese.id === c.id
                        ? 'bg-[#2B1F17] border-[#B07D4F] text-white'
                        : 'bg-[#181310] border-[#2E241E] text-[#A89886] hover:border-[#3E3026]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#F5F2EB]">{c.name}</span>
                      {selectedCheese.id === c.id && <Check className="w-4 h-4 text-[#C49A6C] shrink-0" />}
                    </div>
                    <span className="text-xs font-bold text-[#C49A6C]">
                      {c.price === 0 ? 'Incluso' : `+ R$ ${c.price.toFixed(2).replace('.', ',')}`}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 5: Escolha até 4 Recheios */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-4 sm:p-5 rounded-2xl bg-[#1C1612] border border-[#2E241E] space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h4 className="text-xs sm:text-sm font-bold text-[#F5F2EB] uppercase tracking-wider flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#B07D4F] text-white text-xs flex items-center justify-center font-mono shrink-0">5</span>
                  <span>Escolha até 4 Recheios Principais</span>
                </h4>
                <span className="text-[10px] sm:text-xs font-bold text-[#F59E0B] bg-[#271E18] px-2.5 py-0.5 rounded-full border border-[#B07D4F]/40 w-fit">
                  {selectedToppings.length} de 4 selecionados
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-2.5">
                {TOPPINGS_AVAILABLE.map((t) => {
                  const isChecked = selectedToppings.includes(t.id);
                  return (
                    <button
                      key={t.id}
                      onClick={() => toggleTopping(t.id)}
                      className={`p-2.5 sm:p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer min-h-[44px] ${
                        isChecked
                          ? 'bg-[#2B1F17] border-[#B07D4F] text-white'
                          : 'bg-[#181310] border-[#2E241E] text-[#A89886] hover:border-[#3E3026]'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-base sm:text-lg shrink-0">{t.icon}</span>
                        <span className="text-xs font-semibold text-[#F5F2EB] truncate">{t.name}</span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] shrink-0 ml-1 ${
                          isChecked
                            ? 'bg-[#B07D4F] border-[#B07D4F] text-white'
                            : 'border-[#4A3C32] bg-[#1F1915]'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
