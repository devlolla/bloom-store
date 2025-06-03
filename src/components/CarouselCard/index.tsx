import { useNavigate } from 'react-router-dom';
import { brlFormatter } from '../../utils/currencyFormat';
import {
  BuyInformation,
  CatalogBuyButton,
  ContainerCard,
  WrapperContent,
} from './style';
import type { ProductProps } from '../../types';
import { useCart } from '../../context/CartContext';

type CarouselCardProps = {
  product: ProductProps,
  discountValue: number,
}

export default function CarouselCard({product, discountValue}: CarouselCardProps) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleBuyItem = (idProduct: number) => {
    navigate(`/produto/${idProduct}`);
  };

  return (
    <ContainerCard>
      <WrapperContent onClick={() => handleBuyItem(product.id)}>
        <div className="box-image">
          <img src={product.image} alt="" />
        </div>
        <BuyInformation>
          <div className="discount-tag">
            <p>{discountValue}% OFF</p>
          </div>
          <div className="price-area">
            <div className="price-item">
              <strong>DE:</strong>{' '}
              <p style={{ textDecoration: 'line-through' }}>
                {brlFormatter.format(product.price)}
              </p>
            </div>
            <div className="price-item">
              <strong>POR:</strong> <p>{brlFormatter.format(product.priceOriginal)}</p>
            </div>
          </div>
        </BuyInformation>
      </WrapperContent>
      <CatalogBuyButton onClick={() => addToCart(product)}>
        COMPRAR
      </CatalogBuyButton>
    </ContainerCard>
  );
}
