export type CategoryType = 'todos' | 'salgadas' | 'especiais' | 'doces' | 'combos' | 'bebidas';

export interface ExtraTopping {
  id: string;
  name: string;
  price: number;
}

export interface CrustOption {
  id: string;
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: CategoryType;
  dimensions: string; // e.g. "10 x 25 cm"
  image: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isSweet?: boolean;
  ingredients: string[];
}

export interface CartItem {
  cartItemId: string;
  item: MenuItem;
  quantity: number;
  crust: CrustOption;
  selectedExtras: ExtraTopping[];
  observations?: string;
  unitPrice: number;
  totalPrice: number;
}

export interface DeliveryDetails {
  name: string;
  phone: string;
  deliveryType: 'delivery' | 'retirada';
  neighborhood: string;
  street: string;
  number: string;
  complement?: string;
  reference?: string;
  paymentMethod: 'pix' | 'cartao_entrega' | 'dinheiro';
  changeFor?: string;
}

export interface CustomPizzaState {
  crustType: 'fininha_artesanal' | 'integral_graos';
  border: 'tradicional' | 'catupiry' | 'cheddar';
  sauce: 'tomate_rustico' | 'molho_branco' | 'pesto_manjericao';
  cheese: 'mussarela_artesanal' | 'mix_4_queijos' | 'mussarela_lacfree';
  toppings: string[]; // up to 3
  observations: string;
}
