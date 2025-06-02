import { useNavigate } from 'react-router-dom';
import { brlFormatter } from '../../utils/currencyFormat';
import {
  BuyInformation,
  CatalogBuyButton,
  ContainerCard,
  WrapperContent,
} from './style';

type CardProps = {
  id: number;
  image: string;
  priceOriginal: number;
  price: number;
  discountValue: number;
};

export default function CarouselCard({
  id,
  image,
  priceOriginal,
  price,
  discountValue,
}: CardProps) {
  const navigate = useNavigate();

  const handleBuyItem = (idProduct: number) => {
    navigate(`/produto/${idProduct}`);
  };

  return (
    <ContainerCard>
      <WrapperContent>
        <div className="box-image">
          <img src={image} alt="" />
        </div>
        <BuyInformation>
          <div className="discount-tag">
            <p>{discountValue}% OFF</p>
          </div>
          <div className="price-area">
            <div className="price-item">
              <strong>DE:</strong>{' '}
              <p style={{ textDecoration: 'line-through' }}>
                {brlFormatter.format(price)}
              </p>
            </div>
            <div className="price-item">
              <strong>POR:</strong> <p>{brlFormatter.format(priceOriginal)}</p>
            </div>
          </div>
        </BuyInformation>
      </WrapperContent>
      <CatalogBuyButton onClick={() => handleBuyItem(id)}>
        COMPRAR
      </CatalogBuyButton>
    </ContainerCard>
  );
}
