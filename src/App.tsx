import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BoxShowcase } from './components/BoxShowcase';
import { MenuSection } from './components/MenuSection';
import { ProductModal } from './components/ProductModal';
import { PizzaBuilder } from './components/PizzaBuilder';
import { CombosSection } from './components/CombosSection';
import { FlyerShowcaseSection } from './components/FlyerShowcaseSection';
import { ArtisanalProcess } from './components/ArtisanalProcess';
import { CartDrawer } from './components/CartDrawer';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { CartItem, MenuItem, DeliveryDetails } from './types';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('quadratta_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [isOrderTrackerOpen, setIsOrderTrackerOpen] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<{
    cart: CartItem[];
    delivery: DeliveryDetails;
    total: number;
  } | null>(null);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('quadratta_cart', JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (cartItem: CartItem) => {
    setCart((prev) => {
      // If exact same item + crust + extras exists, increment quantity
      const existingIdx = prev.findIndex(
        (ci) =>
          ci.item.id === cartItem.item.id &&
          ci.crust.id === cartItem.crust.id &&
          ci.selectedExtras.map(e => e.id).sort().join(',') ===
            cartItem.selectedExtras.map(e => e.id).sort().join(',') &&
          ci.observations === cartItem.observations
      );

      if (existingIdx >= 0) {
        const updated = [...prev];
        const ex = updated[existingIdx];
        const newQty = ex.quantity + cartItem.quantity;
        updated[existingIdx] = {
          ...ex,
          quantity: newQty,
          totalPrice: ex.unitPrice * newQty,
        };
        return updated;
      }
      return [...prev, cartItem];
    });
    showToast(`Adicionado: ${cartItem.item.name} (${cartItem.quantity}x)`);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: newQty, totalPrice: item.unitPrice * newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOrderConfirmed = (orderData: {
    cart: CartItem[];
    delivery: DeliveryDetails;
    total: number;
  }) => {
    setConfirmedOrder(orderData);
    setIsCartOpen(false);
    setIsOrderTrackerOpen(true);
    setCart([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="min-h-screen bg-[#14110E] text-[#F5F2EB] flex flex-col font-sans selection:bg-[#B07D4F] selection:text-white antialiased overflow-x-hidden">
      
      {/* Toast Notification with AnimatePresence */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#221A15] text-[#F5F2EB] border border-[#B07D4F] px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 max-w-[90vw]"
          >
            <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
            <span className="text-xs font-bold truncate">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Responsive Header */}
      <Header
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onNavigateToBuilder={() => scrollToSection('monte-sua-quadratta')}
      />

      {/* Main Page Flow with Smooth Scroll Entrances and Original Visuals */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero
          onOrderClick={() => scrollToSection('cardapio')}
          onExploreBox={() => scrollToSection('formato-9x25')}
          onNavigateToBuilder={() => scrollToSection('monte-sua-quadratta')}
        />

        {/* The 9x25cm Box Innovation Showcase */}
        <BoxShowcase
          onOrderNow={() => scrollToSection('cardapio')}
        />

        {/* Official Menu with Flavors from the flyer */}
        <MenuSection
          onSelectItem={(item) => setSelectedProduct(item)}
          onQuickAdd={(cartItem) => handleAddToCart(cartItem)}
        />

        {/* Custom Pizza Builder */}
        <PizzaBuilder
          onAddCustomPizza={(cartItem) => {
            handleAddToCart(cartItem);
            setIsCartOpen(true);
          }}
        />

        {/* Combo Deals Section */}
        <CombosSection
          onSelectCombo={(item) => setSelectedProduct(item)}
          onQuickAdd={(cartItem) => handleAddToCart(cartItem)}
        />

        {/* Dedicated Space for Enlarged High-Resolution Flyers */}
        <FlyerShowcaseSection />

        {/* Artisanal Process & Stone Oven */}
        <ArtisanalProcess />

        {/* Location, WhatsApp, Coverage & FAQ */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers with AnimatePresence */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            item={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={handleAddToCart}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCartOpen && (
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            cart={cart}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            onOrderConfirmed={handleOrderConfirmed}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOrderTrackerOpen && (
          <OrderTrackerModal
            isOpen={isOrderTrackerOpen}
            onClose={() => setIsOrderTrackerOpen(false)}
            orderData={confirmedOrder}
            onNewOrder={() => {
              setIsOrderTrackerOpen(false);
              scrollToSection('cardapio');
            }}
          />
        )}
      </AnimatePresence>

      {/* Floating Bottom Cart CTA for Mobile (only if items in cart) with safe-area spacing */}
      <AnimatePresence>
        {totalCartCount > 0 && !isCartOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-4 left-4 right-4 z-40 sm:hidden"
            style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
          >
            <button
              onClick={() => setIsCartOpen(true)}
              className="w-full py-3.5 px-5 bg-gradient-to-r from-[#B07D4F] to-[#8A5832] text-white font-extrabold rounded-xl shadow-2xl flex items-center justify-between border border-[#E6D5C3]/30 active:scale-98 transition-all min-h-[48px]"
            >
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 shrink-0" />
                <span className="text-sm">Ver Sacola ({totalCartCount})</span>
              </div>
              <span className="text-sm font-black tabular-nums">
                R$ {cartSubtotal.toFixed(2).replace('.', ',')}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
