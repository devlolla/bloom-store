import type { ListingProps } from '../../types';
import PromotionsCarousel from './components/PromotionsCarousel';
import { ContainerMain } from './style';
import ListingProducts from './components/Listing';

export default function CatalogComponent({
  layout,
  filteredProducts,
  carouselProducts,
}: ListingProps) {

  const returnCarousel = () => {
    if (layout === 'listing') {
      return (
        <PromotionsCarousel
          title="MEN'S CLOTHING"
          products={carouselProducts ?? []}
        />
      );
    }
  };

  console.log('filteredProducts:', filteredProducts)

  return (
    <ContainerMain>
      {returnCarousel()}
      <ListingProducts 
        layout={layout} 
        filteredProducts={filteredProducts} 
      />
    </ContainerMain>
  );
}
