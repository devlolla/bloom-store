import { useEffect, useState } from 'react';
import type { CartItem } from '../../../../types';
import { brlFormatter } from '../../../../utils/currencyFormat';
import { ContainerProductCard, DiscountTag } from './style';
import { useCart } from '../../../../context/CartContext';

export default function ProductCart({
  id,
  image,
  title,
  quantity,
  priceOriginal,
  price,
  category,
}: CartItem) {
  const { updateQuantity, removeFromCart } = useCart();
  const [inputValue, setInputValue] = useState(quantity.toString());

  const returnSectionPrice = (title: string, value: number) => {
    const isOriginalPrice = title === 'DE';
    
    return (
      <div className="item">
        <strong>{title}:</strong>{' '}
        <span
          style={
            isOriginalPrice ? { textDecoration: 'line-through' } : undefined
          }
        >
          {brlFormatter.format(value)}
        </span>
      </div>
    );
  };

  const handleBlur = () => {
    const parsed = Number(inputValue);

    if (inputValue === '') {
      setInputValue(quantity.toString());
      return;
    }

    if (parsed === 0) {
      removeFromCart(id);
    } else if (!isNaN(parsed) && parsed >= 1) {
      updateQuantity(id, parsed);
    }
  };

  return (
    <ContainerProductCard>
      <div className="box-image">
        {category === `men's clothing` && <DiscountTag> 10% OFF</DiscountTag>}
        <img src={image} alt="" />
      </div>
      <div className="column">
        <div className="box-title">
          <h3>{title}</h3>
        </div>
        <div className="box-price">
          <div className="wrapper">
            {category === `men's clothing` && (
              <>
                {returnSectionPrice('DE', price)}
                {returnSectionPrice('POR', priceOriginal)}
              </>
            )}
            {category !== `men's clothing` && (
              <div className="item">
                <strong>R$</strong> <span> {price} </span>
              </div>
            )}
            <div className="item">
              <strong>QTDE:</strong>{' '}
              <input
                type="number"
                min={0}
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onBlur={handleBlur}
              />
            </div>
            {returnSectionPrice('Total', priceOriginal * quantity)}
          </div>
        </div>
      </div>
    </ContainerProductCard>
  );
}
