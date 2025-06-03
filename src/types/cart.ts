import type { ProductProps } from './product';

export type CartItem = ProductProps & {
  quantity: number;
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
  totalItems: number;
  setVisibleCart: React.Dispatch<React.SetStateAction<boolean>>;
  hideSearchInput: boolean;
  setHideSearchInput: (hideSearchInput: boolean) => void;
};
