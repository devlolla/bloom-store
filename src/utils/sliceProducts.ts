import type { ProductProps } from '../types';

export default function paginatedProducts(
  currentPage: number,
  limit: number,
  filteredProducts: ProductProps[]
) {
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  return filteredProducts.slice(startIndex, endIndex);
}
