export type RatingProps = {
  rate: number;
  count: number;
};

export type ProductProps = {
  id: number;
  title: string;
  price: number;
  priceOriginal: number;
  category: string;
  description: string;
  image: string;
  rating: RatingProps;
  discountApplied?: boolean;
};

export interface ListingProps {
  layout: 'listing' | 'grid';
  filteredProducts: ProductProps[];
  carouselProducts?: ProductProps[];
}
