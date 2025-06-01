import type { ProductProps } from '../../../types';
import CarouselCard from '../../../components/CarouselCard';
import { ContainerCarousel } from '../style';

interface PromotionsCarouselProps {
  title: string;
  allProducts?: ProductProps[];
  products: ProductProps[];
}

export default function PromotionsCarousel({
  title,
  products,
}: PromotionsCarouselProps) {
  
  const returnCarouselContent = () => {
    const productsOnSale = products.filter(
      product => product.category === `men's clothing`
    );

    return productsOnSale.map(item => (
      <CarouselCard
        key={item.id}
        price={item.price}
        image={item.image}
        discountValue={10}
      />
    ));
  };

  return (
    <ContainerCarousel>
      <h3 className="title"> {title} </h3>
      <div className="wrapper-clothing">
        <div className="box">{returnCarouselContent()}</div>
      </div>
    </ContainerCarousel>
  );
}
