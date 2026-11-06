import { MenuItem, CrustOption, ExtraTopping } from '../types';

export const CRUST_OPTIONS: CrustOption[] = [
  { id: 'tradicional', name: 'Massa Fininha Tradicional (Crocante na pedra)', price: 0 },
  { id: 'catupiry', name: 'Borda Recheada com Catupiry Original', price: 5.00 },
  { id: 'cheddar', name: 'Borda Recheada com Cheddar Cremoso', price: 5.00 },
];

export const EXTRA_TOPPINGS: ExtraTopping[] = [
  { id: 'bacon', name: 'Bacon Crocante Dourado', price: 4.50 },
  { id: 'catupiry_extra', name: 'Catupiry Extra', price: 4.50 },
  { id: 'queijo_dobro', name: 'Mussarela em Dobro', price: 5.00 },
  { id: 'cebola_roxa', name: 'Cebola Roxa Fininha', price: 2.00 },
  { id: 'azeitonas', name: 'Azeitonas Pretas Selecionadas', price: 3.00 },
  { id: 'manjericao', name: 'Folhas de Manjericão Fresco', price: 2.00 },
  { id: 'azeite_trufado', name: 'Sachê Azeite Trufado Artesanal', price: 3.50 },
];

export const NEIGHBORHOODS = [
  { name: 'Vila Andrade', fee: 5.00, time: '25-35 min' },
  { name: 'Morumbi', fee: 6.00, time: '30-40 min' },
  { name: 'Panamby', fee: 6.00, time: '25-35 min' },
  { name: 'Jardim Sul', fee: 5.00, time: '20-30 min' },
  { name: 'Portal do Morumbi', fee: 7.00, time: '30-40 min' },
  { name: 'Real Parque', fee: 8.00, time: '35-45 min' },
  { name: 'Paraíso do Morumbi', fee: 6.00, time: '25-35 min' },
  { name: 'Retirada no Balcão (Vila Andrade)', fee: 0.00, time: '15-20 min' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Flavors directly from the flyer:
  {
    id: 'mussarela',
    name: 'Mussarela',
    tagline: 'Tradicional e irresistível!',
    description: 'Molho rústico artesanal de tomates selecionados, camada generosa de mussarela derretida no ponto perfeito, fatias de tomate fresco, azeitonas pretas e orégano.',
    price: 28.90,
    category: 'salgadas',
    dimensions: '9 x 25 cm',
    image: '/assets/aistudio/IMG_1457_43f83bca.png',
    isPopular: true,
    isVegetarian: true,
    ingredients: ['Molho artesanal', 'Mussarela', 'Tomate fresco', 'Orégano', 'Azeitonas pretas']
  },
  {
    id: 'calabresa',
    name: 'Calabresa Especial',
    tagline: 'Sabor marcante!',
    description: 'Fatias finas e crocantes de linguiça calabresa defumada de primeira linha, base suave de queijo, cebola fininha fatiada e orégano fresco sobre massa artesanal.',
    price: 30.90,
    category: 'salgadas',
    dimensions: '9 x 25 cm',
    image: '/assets/aistudio/IMG_1458_04ba9bba.jpeg',
    isPopular: true,
    ingredients: ['Calabresa defumada', 'Mussarela suave', 'Cebola fininha', 'Molho rústico', 'Orégano']
  },
  {
    id: 'frango-cremoso',
    name: 'Frango Cremoso',
    tagline: 'Com requeijão!',
    description: 'Frango desfiado suculento temperado com ervas da horta, base de queijo derretido e generosos fios de requeijão cremoso tipo Catupiry, assada na hora.',
    price: 32.90,
    category: 'salgadas',
    dimensions: '9 x 25 cm',
    image: '/assets/aistudio/IMG_1457_43f83bca.png',
    isPopular: true,
    ingredients: ['Frango desfiado', 'Requeijão Catupiry', 'Mussarela', 'Molho artesanal', 'Milho']
  },
  {
    id: 'presunto-queijo',
    name: 'Presunto e Queijo',
    tagline: 'Clássica e deliciosa!',
    description: 'A combinação que nunca erra: fatias de presunto cozido magro selecionado com mussarela borbulhante e toque suave de azeite extravirgem e orégano.',
    price: 29.90,
    category: 'salgadas',
    dimensions: '9 x 25 cm',
    image: '/assets/aistudio/IMG_1458_04ba9bba.jpeg',
    ingredients: ['Presunto magro', 'Mussarela derretida', 'Molho de tomate', 'Orégano']
  },
  {
    id: 'bacon-milho',
    name: 'Bacon com Milho',
    tagline: 'Muito mais sabor!',
    description: 'Cubos generosos de bacon defumado crocante, milho verde tenro e mussarela derretida cobrindo toda a extensão da pizza alongada.',
    price: 33.90,
    category: 'salgadas',
    dimensions: '9 x 25 cm',
    image: '/assets/aistudio/IMG_1457_43f83bca.png',
    isPopular: true,
    ingredients: ['Bacon crocante', 'Milho tenro', 'Mussarela', 'Molho rústico', 'Orégano']
  },
  {
    id: 'chocolate',
    name: 'Chocolate Especial',
    tagline: 'Uma tentação à parte!',
    description: 'Ganache nobre de chocolate ao leite aveludado, derretido sobre a massa fininha e crocante, coberto com granulado crocante artesanal. Sobremesa perfeita!',
    price: 31.90,
    category: 'doces',
    dimensions: '9 x 25 cm',
    image: '/assets/aistudio/IMG_1458_04ba9bba.jpeg',
    isPopular: true,
    isSweet: true,
    ingredients: ['Chocolate ao leite nobre', 'Granulado artesanal', 'Massa doce crocante']
  },

  // Especiais Gourmet
  {
    id: 'marguerita-gourmet',
    name: 'Marguerita Di Quadratta',
    tagline: 'Nobreza italiana!',
    description: 'Mussarela de búfala fresca, rodelas selecionadas de tomate caqui, molho de tomate San Marzano da casa, folhas inteiras de manjericão fresco e azeite extravirgem.',
    price: 33.90,
    category: 'especiais',
    dimensions: '9 x 25 cm',
    image: '/assets/aistudio/IMG_1457_43f83bca.png',
    isVegetarian: true,
    ingredients: ['Mussarela de búfala', 'Tomates caqui', 'Manjericão fresco', 'Azeite extravirgem', 'Molho artesanal']
  },
  {
    id: 'quatro-queijos',
    name: 'Quatro Queijos Rústica',
    tagline: 'Intensidade & cremosidade!',
    description: 'Blend harmonioso de queijos finos: mussarela artesanal, provolone defumado, gorgonzola cremoso e parmesão curado gratinado na pedra quente.',
    price: 35.90,
    category: 'especiais',
    dimensions: '9 x 25 cm',
    image: '/assets/aistudio/IMG_1457_43f83bca.png',
    isVegetarian: true,
    ingredients: ['Mussarela', 'Provolone defumado', 'Gorgonzola', 'Parmesão curado']
  },
  {
    id: 'banana-canela',
    name: 'Doce de Leite com Banana',
    tagline: 'Conforto doce inesquecível!',
    description: 'Doce de leite cremoso artesanal, fatias de banana fresca caramelizadas com açúcar cristal e canela perfumada sobre a massa fininha.',
    price: 30.90,
    category: 'doces',
    dimensions: '9 x 25 cm',
    image: '/assets/aistudio/IMG_1458_04ba9bba.jpeg',
    isSweet: true,
    ingredients: ['Doce de leite artesanal', 'Banana fatiada', 'Canela em pó', 'Açúcar cristal']
  },

  // Combos
  {
    id: 'combo-individual',
    name: 'Combo Individual Quadratta',
    tagline: '1 Pizza Alongada 9x25cm + 1 Bebida Gelada',
    description: 'A refeição perfeita para um momento só seu: escolha 1 sabor salgado de 9x25cm + 1 lata de refrigerante ou suco gelado.',
    price: 35.90,
    category: 'combos',
    dimensions: '1 Pizza 9x25cm + Bebida',
    image: '/assets/aistudio/IMG_1457_43f83bca.png',
    isPopular: true,
    ingredients: ['1 Pizza individual 9x25cm', '1 Bebida lata 350ml', 'Embalagem térmica individual']
  },
  {
    id: 'combo-duo',
    name: 'Combo Duo (2 Salgadas + 1 Doce)',
    tagline: 'O mais pedido pelos casais e amigos!',
    description: '2 Pizzas Alongadas Salgadas à sua escolha + 1 Pizza Alongada de Sobremesa (Chocolate ou Doce de Leite). Serve 2 pessoas fartamente.',
    price: 79.90,
    category: 'combos',
    dimensions: '3 Pizzas 9x25cm',
    image: '/assets/aistudio/IMG_1458_04ba9bba.jpeg',
    isPopular: true,
    ingredients: ['2 Pizzas salgadas 9x25cm', '1 Pizza doce 9x25cm', '3 Caixas kraft térmicas']
  },
  {
    id: 'combo-familia',
    name: 'Combo Família & Galera (4 Pizzas)',
    tagline: '4 Pizzas Alongadas + 2 Bebidas + Entrega Grátis!',
    description: 'Cada um pede seu sabor favorito sem briga! 4 Pizzas 9x25cm personalizadas + 2 refrigerantes lata + entrega grátis em toda Vila Andrade e Morumbi.',
    price: 129.90,
    category: 'combos',
    dimensions: '4 Pizzas 9x25cm + 2 Bebidas',
    image: '/assets/aistudio/IMG_1457_43f83bca.png',
    ingredients: ['4 Pizzas individuais 9x25cm', '2 Bebidas', 'Entrega grátis']
  },

  // Bebidas
  {
    id: 'coca-cola-lata',
    name: 'Coca-Cola Original 350ml',
    tagline: 'Lata gelada trincando',
    description: 'Refrigerante Coca-Cola em lata 350ml bem gelada para acompanhar sua Quadratta.',
    price: 6.50,
    category: 'bebidas',
    dimensions: '350 ml',
    image: '/assets/aistudio/IMG_1458_04ba9bba.jpeg',
    ingredients: ['Refrigerante']
  },
  {
    id: 'coca-zero-lata',
    name: 'Coca-Cola Sem Açúcar 350ml',
    tagline: 'Zero açúcar, máximo sabor',
    description: 'Refrigerante Coca-Cola Zero lata 350ml estupidamente gelada.',
    price: 6.50,
    category: 'bebidas',
    dimensions: '350 ml',
    image: '/assets/aistudio/IMG_1458_04ba9bba.jpeg',
    ingredients: ['Refrigerante']
  },
  {
    id: 'guarana-lata',
    name: 'Guaraná Antarctica 350ml',
    tagline: 'O clássico brasileiro',
    description: 'Guaraná Antarctica em lata 350ml trincando de gelada.',
    price: 6.00,
    category: 'bebidas',
    dimensions: '350 ml',
    image: '/assets/aistudio/IMG_1458_04ba9bba.jpeg',
    ingredients: ['Refrigerante']
  },
  {
    id: 'heineken-longneck',
    name: 'Cerveja Heineken Long Neck 330ml',
    tagline: 'Puro malte refrescante',
    description: 'Cerveja premium puro malte holandesa, long neck 330ml bem gelada.',
    price: 11.00,
    category: 'bebidas',
    dimensions: '330 ml',
    image: '/assets/aistudio/IMG_1458_04ba9bba.jpeg',
    ingredients: ['Cerveja']
  }
];
