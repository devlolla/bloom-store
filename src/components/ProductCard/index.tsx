import type { ProductProps } from '../../types';
import { useNavigate } from 'react-router-dom';
import { brlFormatter } from '../../utils/currencyFormat';
import { truncateText } from '../../utils/truncateText';
import { BuyButton, BuyInformation, Card, Information, Wrapper } from './style';
import { FaCartShopping } from 'react-icons/fa6';
import { useCart } from '../../context/CartContext';

type ProductCardProps = {
  layout: 'listing' | 'grid';
  product: ProductProps;
};

export default function ProductCard({ product, layout }: ProductCardProps) {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const handleBuyItem = (id: number) => {
    navigate(`/produto/${id}`);
  };

  return (
    <Card layout={layout}>
      <div onClick={() => handleBuyItem(product.id)}>
        <Wrapper layout={layout}>
          <div className="box-image">
            <img src={product.image} alt="" />
          </div>
          <Information layout={layout}>
            <BuyInformation layout={layout}>
              <h3 className="title" title={product.title}>
                {truncateText(product.title, 50)}
              </h3>
              <span className="category">{product.category}</span>
              <h1 className="price">{brlFormatter.format(product.price)}</h1>
            </BuyInformation>
            {layout === 'listing' && (
              <div className="description">
                {truncateText(product.description, 160)}
              </div>
            )}
          </Information>
        </Wrapper>
        {layout === 'grid' && (
          <div className="description">
            {truncateText(product.description, 160)}
          </div>
        )}
      </div>
      <BuyButton layout={layout} onClick={() => addToCart(product)}>
        <FaCartShopping size={24} color="#fff" />
      </BuyButton>
    </Card>
  );
}
