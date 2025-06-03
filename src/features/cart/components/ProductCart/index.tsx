import { useEffect } from 'react';
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
                value={quantity}
                onChange={e => {
                  const newQuantity = Number(e.target.value);
                  if (newQuantity === 0) {
                    removeFromCart(id);
                  }
                  if (newQuantity >= 1) {
                    updateQuantity(id, newQuantity);
                  }
                }}
              />
            </div>
            {returnSectionPrice('Total', priceOriginal * quantity)}
          </div>
        </div>
      </div>
    </ContainerProductCard>
  );
}
