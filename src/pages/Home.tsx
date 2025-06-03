import { useEffect, useState } from 'react';
import Header from '../components/Header';
import CatalogComponent from '../features/catalog';
import Filters from '../features/filters';
import type { ProductProps } from '../types';
import { getAllProducts } from '../services/productsApi';
import Pagination from '../components/Pagination/Pagination';
import paginatedProducts from '../utils/sliceProducts';
import { applyDiscount } from '../utils/discount';
import { useBaseContext } from '../context/BaseContext';

export default function HomePage() {
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);

  const [carouselProducts, setCarouselProducts] = useState<ProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);

  const [layout, setLayout] = useState<'grid' | 'listing'>('listing');

  const [limit, setLimit] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState(1);

  const {setHideSearchInput} = useBaseContext()

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      const discountApplied = applyDiscount(data, "men's clothing", 10);
      const discountAppliedFiltered = discountApplied.filter(
        product => product.category !== "men's clothing"
      );
      setAllProducts(discountAppliedFiltered);
      setCarouselProducts(discountApplied);
    } catch (err) {
      console.log('Erro ao buscar produtos');
    }
  };

  useEffect(() => {
    setHideSearchInput(false)
    fetchProducts();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts]);

  return (
    <>
      <Header
        allProducts={allProducts}
        setFilteredProducts={setFilteredProducts}
        hideSearchInput={false}
      />

      <Filters
        layout={layout}
        setLayout={setLayout}
        allProducts={allProducts}
        setFilteredProducts={setFilteredProducts}
        limit={limit}
        setLimit={setLimit}
      />
      <CatalogComponent
        layout={layout}
        filteredProducts={paginatedProducts(
          currentPage,
          limit,
          filteredProducts
        )}
        carouselProducts={carouselProducts}
      />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={filteredProducts.length}
        pageSize={limit}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}
