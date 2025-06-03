import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CartContextType, CartItem } from '../types/cart';
import type { ProductProps } from '../types';

const CartContext = createContext({} as CartContextType);

export const useCart = () => useContext(CartContext);

type CartProviderProps = {
  children: ReactNode,
  setVisibleCart: React.Dispatch<React.SetStateAction<boolean>>,

}

export const CartProvider = ({ setVisibleCart,  children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [hideSearchInput, setHideSearchInput] = useState(false)

  
  const addToCart = (product: ProductProps) => {
    setCart(prev =>
      prev.some(item => item.id === product.id)
        ? prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }]
    );
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    setCart(prev =>
      prev.map(item => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => setCart([]);

  const total = cart.reduce((acc, item) => {
    const priceToUse = item.price ?? 0;
    return acc + priceToUse * item.quantity;
  }, 0);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);


  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        total,
        setVisibleCart,
        totalItems,
        hideSearchInput, 
        setHideSearchInput
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
