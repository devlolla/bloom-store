import type { ProductProps } from './product';

export interface LayoutFilterProps {
  layout: string;
  setLayout: (layout: 'grid' | 'listing') => void;
}

export interface QuantityFilterProps {
  allProducts: ProductProps[];
  setFilteredProducts: (filteredProducts: ProductProps[]) => void;
  limit: number;
  setLimit: (limit: number) => void;
}
