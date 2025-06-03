import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import CartComponent from './features/cart';
import routes from './routes';
import { BaseContextProvider } from './context/BaseContext';

function App() {
  const [visibleCart, setVisibleCart] = useState<boolean>(false);
  const [hideSearchInput, setHideSearchInput] = useState(false);

  return (
    <CartProvider setVisibleCart={setVisibleCart}>
      <BaseContextProvider
        hideSearchInput={hideSearchInput}
        setHideSearchInput={setHideSearchInput}
      >
        <CartComponent visible={visibleCart} hideSearchInput={hideSearchInput}/>
        {routes()}
      </BaseContextProvider>
    </CartProvider>
  );
}

export default App;
