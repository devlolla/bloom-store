import { useCart } from '../../context/CartContext';
import type { CartItem, ProductProps } from '../../types';
import CardPrice from '../CardPrice';
import RatingReadOnly from '../Rating';
import {
  BottomCard,
  Container,
  GridContainer,
  LargeCard,
  MidCardBottom,
  MidCardTop,
  WrapperGrid,
} from './style';

interface DetailsProps {
  product: CartItem;
}

export default function Details({ product }: DetailsProps) {
  const {
    id,
    image,
    title,
    category,
    description,
    price,
    priceOriginal,
    rating,
  } = product;

  const ProductInfo = () => (
    <>
      <div className="box">
        <div className="sku">
          <strong>SKU</strong> <span>{id}</span>
        </div>
        <RatingReadOnly value={rating.rate} count={rating.count} />
      </div>
      <div className="category">
        <strong>CATEGORIA</strong>
        <span>{category}</span>
      </div>
    </>
  );

  const ProductDescription = () => (
    <div className="description-wrapper">
      <div className="label">Descrição</div>
      <div className="description">{description}</div>
    </div>
  );

  return (
    <Container>
      <GridContainer>
        <LargeCard>
          <div className="box-image">
            <img src={image} alt={title} />
          </div>
        </LargeCard>
        <MidCardTop>
          <ProductInfo />
        </MidCardTop>
        <MidCardBottom>
          <CardPrice
            key={id}
            price={price}
            priceOriginal={priceOriginal}
            product={product}
          />
        </MidCardBottom>
        <BottomCard>
          <ProductDescription />
        </BottomCard>
      </GridContainer>
      <WrapperGrid>
        <div className="information">
          <ProductInfo />
        </div>
        <ProductDescription />
      </WrapperGrid>
    </Container>
  );
}
