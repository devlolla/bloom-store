import ProductCard from "../../../components/ProductCard";
import type { ProductProps } from "../../../types";
import { ContainerListing } from "../style";

interface ListingProps {
  layout: 'listing' | 'grid',
  products: ProductProps[]
}

export default function ListingProducts ({ layout, products }: ListingProps) {

  const returnListing = () => {
    const productsOffSale = products.filter(
      product => product.category !== `men's clothing`
    );

    return productsOffSale.map(product => (
      <ProductCard product={product} layout={layout} />
      )
    )
  }

  return (
    <ContainerListing layout={layout}>
      {returnListing()}
    </ContainerListing>
  )
}