import ProductCard from '../../../components/ProductCard';
import type { ListingProps } from '../../../types';
import { ContainerListing } from '../style';

export default function ListingProducts({ layout, filteredProducts }: ListingProps) {
  
  const returnListing = () => {
    const productsOffSale = filteredProducts.filter(
      product => product.category !== `men's clothing`
    );

    return productsOffSale.map(product => (
      <ProductCard 
        key={product.id}
        product={product} 
        layout={layout} 
      />
    ));
  };

  return (
    <ContainerListing 
      layout={layout}
    >
      {returnListing()}
    </ContainerListing>
  );
}
