export type ProductProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export interface ListingProps {
  layout: 'listing' | 'grid';
  filteredProducts: ProductProps[];
  carouselProducts?: ProductProps[];
}
