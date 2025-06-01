import { useEffect, useState } from 'react';
import Header from '../components/Header';
import CatalogComponent from '../features/catalog';
import Filters from '../features/filters';
import type { ProductProps } from '../types';
import { getAllProducts } from '../services/productsApi';

export default function HomePage() {
  const [allProducts, setAllProducts] = useState<ProductProps[]>([]);
  
  const [carouselProducts, setCarouselProducts] = useState<ProductProps[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductProps[]>([]);

  const [layout, setLayout] = useState<'grid' | 'listing'>('listing');

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setAllProducts(data);
      setCarouselProducts(data);
    } catch (err) {
      console.log('Erro ao buscar produtos');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // useEffect(() => {
  //   console.log('allProducts:', allProducts);
  // }, [allProducts])

  return (
    <>
      <Header  
        allProducts={allProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <Filters
        layout={layout}
        setLayout={setLayout}
        allProducts={allProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <CatalogComponent
        layout={layout}
        filteredProducts={filteredProducts}
        carouselProducts={carouselProducts}
      />
    </>
  );
}
