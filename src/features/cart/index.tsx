import { useEffect } from 'react';
import { ContainerCard, ContainerCart, Content, Total } from './style';
import { useCart } from '../../context/CartContext';
import ProductCart from './components/ProductCart';
import type { CartItem } from '../../types';
import { brlFormatter } from '../../utils/currencyFormat';

type CartComponentProps = {
  id?: number;
  title?: string;
  price?: number;
  originalPrice?: number;
  visible: boolean;
  hideSearchInput: boolean;
};

export default function CartComponent({ visible, hideSearchInput }: CartComponentProps) {
  const { cart, total, clearCart, totalItems, setVisibleCart } = useCart();

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [visible]);

  return (
    <ContainerCart visible={visible} ajustHeight={hideSearchInput}>
      <Content>
        <ContainerCard>
          <h3 className="title">Carrinho</h3>
          {cart.map((productCart: CartItem) => (
            <ProductCart {...productCart} quantity={productCart.quantity} />
          ))}
        </ContainerCard>
        <Total alignItems={!!totalItems}>
          {totalItems > 0 && (
            <button
              onClick={() => {
                clearCart();
                setVisibleCart(false);
              }}
            >
              Limpar carrinho
            </button>
          )}
          <div>
            <strong>Total:</strong> <span>{brlFormatter.format(total)}</span>
          </div>
        </Total>
      </Content>
    </ContainerCart>
  );
}
