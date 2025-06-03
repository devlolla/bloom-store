import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import CartComponent from './features/cart';
import routes from './routes';

function App() {
  const [visibleCart, setVisibleCart] = useState<boolean>(false);
  return (
    <CartProvider setVisibleCart={setVisibleCart}>
      <CartComponent visible={visibleCart} />
      {routes()}
    </CartProvider>
  );
}

export default App;
