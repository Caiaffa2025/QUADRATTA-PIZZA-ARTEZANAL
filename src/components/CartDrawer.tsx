import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Phone, CreditCard, Banknote, QrCode, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { CartItem, DeliveryDetails } from '../types';
import { NEIGHBORHOODS } from '../data/menuData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onOrderConfirmed: (orderDetails: { cart: CartItem[]; delivery: DeliveryDetails; total: number }) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderConfirmed,
}) => {
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'retirada'>('delivery');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(NEIGHBORHOODS[0]);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'cartao_entrega' | 'dinheiro'>('pix');
  const [changeFor, setChangeFor] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryFee = deliveryType === 'retirada' ? 0 : selectedNeighborhood.fee;
  const grandTotal = subtotal + deliveryFee;

  const handleProceedToCheckout = () => {
    if (cart.length === 0) return;
    setStep('checkout');
  };

  const handleFinishOrder = (sendWhatsApp: boolean) => {
    if (!name.trim()) {
      setErrorMsg('Por favor, informe seu nome.');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Por favor, informe seu telefone com WhatsApp.');
      return;
    }
    if (deliveryType === 'delivery') {
      if (!street.trim() || !number.trim()) {
        setErrorMsg('Por favor, informe a rua e o número para entrega.');
        return;
      }
    }

    setErrorMsg('');

    const deliveryDetails: DeliveryDetails = {
      name: name.trim(),
      phone: phone.trim(),
      deliveryType,
      neighborhood: deliveryType === 'retirada' ? 'Retirada no Balcão (Vila Andrade)' : selectedNeighborhood.name,
      street: street.trim(),
      number: number.trim(),
      complement: complement.trim() || undefined,
      paymentMethod,
      changeFor: paymentMethod === 'dinheiro' && changeFor ? changeFor.trim() : undefined,
    };

    if (sendWhatsApp) {
      // Build WhatsApp message
      const itemsList = cart
        .map(
          (c) =>
            `• *${c.quantity}x ${c.item.name} (${c.item.dimensions})* - R$ ${c.totalPrice.toFixed(2).replace('.', ',')}\n` +
            (c.crust.id !== 'tradicional' ? `  - Borda: ${c.crust.name}\n` : '') +
            (c.selectedExtras.length > 0
              ? `  - Extras: ${c.selectedExtras.map(e => e.name).join(', ')}\n`
              : '') +
            (c.observations ? `  - Obs: ${c.observations}\n` : '')
        )
        .join('\n');

      const paymentLabel =
        paymentMethod === 'pix'
          ? 'Pix (Chave WhatsApp / QR Code)'
          : paymentMethod === 'cartao_entrega'
          ? 'Cartão na Entrega (Maquininha Débito/Crédito)'
          : `Dinheiro${changeFor ? ` (Troco para R$ ${changeFor})` : ' (Sem troco)'}`;

      const destinationText =
        deliveryType === 'retirada'
          ? '📦 *Retirada no Balcão da Vila Andrade*'
          : `🛵 *Delivery em Casa:*\n${street}, ${number}${complement ? ` - ${complement}` : ''}\nBairro: ${selectedNeighborhood.name} - São Paulo/SP`;

      const msg =
        `🍕 *NOVO PEDIDO - QUADRATTA PIZZA ARTESANAL* 🍕\n` +
        `----------------------------------------\n` +
        `👤 *Cliente:* ${name}\n` +
        `📱 *WhatsApp:* ${phone}\n` +
        `📍 ${destinationText}\n` +
        `💳 *Forma de Pagamento:* ${paymentLabel}\n` +
        `----------------------------------------\n` +
        `📋 *ITENS ESCOLHIDOS:*\n\n${itemsList}\n` +
        `----------------------------------------\n` +
        `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n` +
        (deliveryType === 'delivery'
          ? `Taxa de Entrega (${selectedNeighborhood.name}): R$ ${deliveryFee.toFixed(2).replace('.', ',')}\n`
          : `Retirada no Balcão: Grátis\n`) +
        `*TOTAL A PAGAR: R$ ${grandTotal.toFixed(2).replace('.', ',')}*\n` +
        `----------------------------------------\n` +
        `Obrigado! Por favor confirmem o pedido e o tempo estimado de saída do forno!`;

      const encodedMsg = encodeURIComponent(msg);
      const whatsappUrl = `https://wa.me/5511984937529?text=${encodedMsg}`;
      window.open(whatsappUrl, '_blank');
    }

    onOrderConfirmed({ cart, delivery: deliveryDetails, total: grandTotal });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
      />

      {/* Slide-in Drawer with 100% width on mobile, max-w-md on tablet/desktop */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="relative z-10 w-full sm:max-w-md lg:max-w-lg bg-[#191411] border-l border-[#3E3026] h-full shadow-2xl flex flex-col justify-between"
      >
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-[#2B231D] flex items-center justify-between bg-[#1C1612]">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#C49A6C] shrink-0" />
            <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F2EB]">
              {step === 'cart' ? 'Sua Sacola de Pizzas' : 'Finalizar Pedido'}
            </h3>
            <span className="text-[11px] sm:text-xs bg-[#271E18] text-[#C49A6C] px-2 py-0.5 rounded-full border border-[#B07D4F]/30 font-semibold">
              {cart.reduce((sum, item) => sum + item.quantity, 0)} {cart.reduce((sum, item) => sum + item.quantity, 0) === 1 ? 'item' : 'itens'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#A89886] hover:text-white rounded-lg hover:bg-[#271E18] transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Fechar sacola"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body with smooth scrolling */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 sm:space-y-6">
          {cart.length === 0 ? (
            <div className="py-16 sm:py-20 text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-[#221A15] border border-[#2E241E] flex items-center justify-center text-[#8A7B6E]">
                <ShoppingBag className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h4 className="font-display font-bold text-base sm:text-lg text-[#E6D5C3]">Sua sacola está vazia</h4>
              <p className="text-xs text-[#8A7B6E] max-w-xs mx-auto">
                Explore nosso cardápio e adicione sua pizza individual alongada 9x25cm feita na hora!
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#B07D4F] hover:bg-[#8A5832] text-white text-xs font-bold rounded-xl transition-colors cursor-pointer min-h-[42px]"
              >
                Ver Cardápio
              </button>
            </div>
          ) : step === 'cart' ? (
            /* STEP 1: CART ITEMS LIST */
            <div className="space-y-3 sm:space-y-4">
              {cart.map((cartItem) => (
                <div
                  key={cartItem.cartItemId}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#1D1713] border border-[#2E241E] space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <img
                        src={cartItem.item.image}
                        alt={cartItem.item.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover bg-[#120F0D] border border-[#2E241E] shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="font-display font-bold text-xs sm:text-sm text-[#F5F2EB] truncate">
                          {cartItem.item.name}
                        </h4>
                        <span className="text-[10px] sm:text-[11px] text-[#F59E0B] font-semibold">
                          {cartItem.item.dimensions}
                        </span>
                        {cartItem.crust.id !== 'tradicional' && (
                          <p className="text-[10px] sm:text-[11px] text-[#C49A6C] truncate">
                            + {cartItem.crust.name}
                          </p>
                        )}
                        {cartItem.selectedExtras.length > 0 && (
                          <p className="text-[9px] sm:text-[10px] text-[#A89886] line-clamp-1">
                            Extras: {cartItem.selectedExtras.map(e => e.name).join(', ')}
                          </p>
                        )}
                        {cartItem.observations && (
                          <p className="text-[9px] sm:text-[10px] text-[#8A7B6E] italic truncate">
                            Obs: {cartItem.observations}
                          </p>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(cartItem.cartItemId)}
                      className="text-[#8A7B6E] hover:text-[#EF4444] p-1.5 transition-colors cursor-pointer shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
                      title="Remover item"
                      aria-label="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity and Price with Thumb-friendly targets */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#261E18]">
                    <div className="flex items-center bg-[#14110E] border border-[#2E241E] rounded-lg p-0.5">
                      <button
                        onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity - 1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center text-[#A89886] hover:text-white cursor-pointer active:bg-[#271E18]"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-7 sm:w-8 text-center text-xs font-bold text-[#F5F2EB] tabular-nums">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(cartItem.cartItemId, cartItem.quantity + 1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded flex items-center justify-center text-[#A89886] hover:text-white cursor-pointer active:bg-[#271E18]"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="font-display font-bold text-xs sm:text-sm text-[#F5F2EB] tabular-nums">
                        R$ {cartItem.totalPrice.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-end pt-1">
                <button
                  onClick={onClearCart}
                  className="text-[11px] text-[#8A7B6E] hover:text-[#EF4444] transition-colors cursor-pointer py-1"
                >
                  Esvaziar toda a sacola
                </button>
              </div>
            </div>
          ) : (
            /* STEP 2: CHECKOUT DETAILS */
            <div className="space-y-4 sm:space-y-5">
              
              {/* Delivery vs Retirada Selector */}
              <div className="flex p-1 bg-[#14110E] rounded-xl border border-[#2E241E]">
                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  className={`flex-1 py-2 sm:py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer min-h-[40px] ${
                    deliveryType === 'delivery'
                      ? 'bg-[#B07D4F] text-white shadow-sm'
                      : 'text-[#A89886] hover:text-white'
                  }`}
                >
                  Delivery em Casa
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('retirada')}
                  className={`flex-1 py-2 sm:py-2.5 text-xs font-bold rounded-lg transition-colors cursor-pointer min-h-[40px] ${
                    deliveryType === 'retirada'
                      ? 'bg-[#B07D4F] text-white shadow-sm'
                      : 'text-[#A89886] hover:text-white'
                  }`}
                >
                  Retirada no Balcão
                </button>
              </div>

              {/* Customer Info Form - 16px font on mobile prevents iOS zoom */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#1D1713] border border-[#2E241E] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C49A6C]">
                  Seus Dados para Contato
                </h4>

                <div>
                  <label className="text-[11px] text-[#A89886] block mb-1">Seu Nome Completo *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Maria Silva"
                    className="w-full bg-[#14110E] border border-[#2E241E] focus:border-[#B07D4F] rounded-lg p-2.5 text-[16px] sm:text-xs text-[#F5F2EB] outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-[#A89886] block mb-1">WhatsApp para Atualizações *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full bg-[#14110E] border border-[#2E241E] focus:border-[#B07D4F] rounded-lg p-2.5 text-[16px] sm:text-xs text-[#F5F2EB] outline-none"
                  />
                </div>
              </div>

              {/* Address Form (if Delivery) */}
              {deliveryType === 'delivery' && (
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#1D1713] border border-[#2E241E] space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#C49A6C] flex items-center justify-between">
                    <span>Endereço de Entrega</span>
                    <span className="text-[10px] text-[#22C55E] font-normal">Vila Andrade & Região</span>
                  </h4>

                  <div>
                    <label className="text-[11px] text-[#A89886] block mb-1">Bairro de Entrega</label>
                    <select
                      value={selectedNeighborhood.name}
                      onChange={(e) => {
                        const found = NEIGHBORHOODS.find(n => n.name === e.target.value);
                        if (found) setSelectedNeighborhood(found);
                      }}
                      className="w-full bg-[#14110E] border border-[#2E241E] focus:border-[#B07D4F] rounded-lg p-2.5 text-[16px] sm:text-xs text-[#F5F2EB] outline-none"
                    >
                      {NEIGHBORHOODS.filter(n => n.fee > 0).map((n) => (
                        <option key={n.name} value={n.name}>
                          {n.name} — Taxa: R$ {n.fee.toFixed(2).replace('.', ',')} ({n.time})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2">
                      <label className="text-[11px] text-[#A89886] block mb-1">Rua / Avenida *</label>
                      <input
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        placeholder="Ex: Av. Giovanni Gronchi"
                        className="w-full bg-[#14110E] border border-[#2E241E] focus:border-[#B07D4F] rounded-lg p-2.5 text-[16px] sm:text-xs text-[#F5F2EB] outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-[#A89886] block mb-1">Número *</label>
                      <input
                        type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="123"
                        className="w-full bg-[#14110E] border border-[#2E241E] focus:border-[#B07D4F] rounded-lg p-2.5 text-[16px] sm:text-xs text-[#F5F2EB] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-[#A89886] block mb-1">Complemento / Bloco / Apto</label>
                    <input
                      type="text"
                      value={complement}
                      onChange={(e) => setComplement(e.target.value)}
                      placeholder="Ex: Apto 42 Bloco B"
                      className="w-full bg-[#14110E] border border-[#2E241E] focus:border-[#B07D4F] rounded-lg p-2.5 text-[16px] sm:text-xs text-[#F5F2EB] outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Payment Method */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-[#1D1713] border border-[#2E241E] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#C49A6C]">
                  Forma de Pagamento
                </h4>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-2 sm:p-2.5 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center gap-1 min-h-[50px] justify-center ${
                      paymentMethod === 'pix'
                        ? 'bg-[#271E18] border-[#B07D4F] text-[#F5F2EB]'
                        : 'bg-[#14110E] border-[#2E241E] text-[#8A7B6E]'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-[#22C55E]" />
                    <span className="text-[11px] font-bold">Pix</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cartao_entrega')}
                    className={`p-2 sm:p-2.5 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center gap-1 min-h-[50px] justify-center ${
                      paymentMethod === 'cartao_entrega'
                        ? 'bg-[#271E18] border-[#B07D4F] text-[#F5F2EB]'
                        : 'bg-[#14110E] border-[#2E241E] text-[#8A7B6E]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#38BDF8]" />
                    <span className="text-[11px] font-bold">Cartão</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('dinheiro')}
                    className={`p-2 sm:p-2.5 rounded-lg border text-center transition-all cursor-pointer flex flex-col items-center gap-1 min-h-[50px] justify-center ${
                      paymentMethod === 'dinheiro'
                        ? 'bg-[#271E18] border-[#B07D4F] text-[#F5F2EB]'
                        : 'bg-[#14110E] border-[#2E241E] text-[#8A7B6E]'
                    }`}
                  >
                    <Banknote className="w-4 h-4 text-[#F59E0B]" />
                    <span className="text-[11px] font-bold">Dinheiro</span>
                  </button>
                </div>

                {paymentMethod === 'dinheiro' && (
                  <div className="pt-2">
                    <label className="text-[11px] text-[#A89886] block mb-1">Precisa de troco para quanto?</label>
                    <input
                      type="text"
                      value={changeFor}
                      onChange={(e) => setChangeFor(e.target.value)}
                      placeholder="Ex: R$ 50,00 ou Não preciso"
                      className="w-full bg-[#14110E] border border-[#2E241E] rounded-lg p-2 text-[16px] sm:text-xs text-[#F5F2EB] outline-none"
                    />
                  </div>
                )}

                {paymentMethod === 'pix' && (
                  <div className="p-2.5 sm:p-3 rounded-lg bg-[#14110E] border border-[#2E241E] text-xs text-[#A89886] space-y-1">
                    <p className="text-[#22C55E] font-semibold flex items-center gap-1 text-[11px] sm:text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      Chave Pix: (11) 98493-7529
                    </p>
                    <p className="text-[10px] sm:text-[11px]">Você poderá enviar o comprovante diretamente pelo WhatsApp oficial!</p>
                  </div>
                )}
              </div>

              {errorMsg && (
                <div className="p-3 rounded-lg bg-[#7F1D1D]/30 border border-[#EF4444] text-[#FCA5A5] text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="button"
                onClick={() => setStep('cart')}
                className="text-xs text-[#C49A6C] hover:underline cursor-pointer py-1.5"
              >
                ← Voltar e alterar itens da sacola
              </button>

            </div>
          )}
        </div>

        {/* Drawer Footer with Calculations & Trigger */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-[#2B231D] bg-[#1C1612] space-y-3 pb-safe">
            
            {/* Calculation rows */}
            <div className="space-y-1.5 text-xs text-[#A89886]">
              <div className="flex justify-between">
                <span>Subtotal dos Itens</span>
                <span className="text-[#F5F2EB] font-bold tabular-nums">
                  R$ {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Taxa de Entrega</span>
                <span className="text-[#F5F2EB] font-bold tabular-nums">
                  {deliveryFee === 0 ? 'Grátis' : `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`}
                </span>
              </div>
              <div className="flex justify-between text-sm sm:text-base font-extrabold text-[#F5F2EB] pt-1.5 border-t border-[#261E18]">
                <span>Total a Pagar</span>
                <span className="text-[#C49A6C] tabular-nums">
                  R$ {grandTotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* Step Action Buttons */}
            {step === 'cart' ? (
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3.5 bg-[#B07D4F] hover:bg-[#8A5832] text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm active:scale-98 min-h-[46px]"
              >
                <span>Avançar para Entrega & Pagamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="space-y-2">
                <button
                  onClick={() => handleFinishOrder(true)}
                  className="w-full py-3.5 bg-[#22C55E] hover:bg-[#16A34A] text-[#14110E] hover:text-white font-extrabold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm active:scale-98 min-h-[46px]"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>Enviar Pedido pelo WhatsApp (Oficial)</span>
                </button>

                <button
                  onClick={() => handleFinishOrder(false)}
                  className="w-full py-2.5 bg-[#271E18] hover:bg-[#342820] text-[#E6D5C3] font-semibold rounded-xl border border-[#3E3026] text-xs transition-colors cursor-pointer min-h-[40px]"
                >
                  Confirmar no App & Acompanhar Pedido
                </button>
              </div>
            )}

          </div>
        )}

      </motion.div>
    </div>
  );
};
