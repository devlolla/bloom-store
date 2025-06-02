import { brlFormatter } from '../../utils/currencyFormat';
import { BuyButton, ContainerCardPrice, DiscountTag } from './styled';
import { FaCartShopping } from 'react-icons/fa6';

type CardPrice = {
  price: number;
  priceOriginal: number;
};

export default function CardPrice({ price, priceOriginal }: CardPrice) {
  return (
    <ContainerCardPrice>
      <DiscountTag> 10% OFF </DiscountTag>
      <div className="wrapper-from">
        <strong>DE:</strong> <span>{brlFormatter.format(priceOriginal)}</span>
      </div>
      <div className="wrapper-to">
        <strong>POR:</strong> <span>{brlFormatter.format(price)}</span>
      </div>
      <BuyButton>
        <FaCartShopping size={20} />
        COMPRAR
      </BuyButton>
    </ContainerCardPrice>
  );
}
