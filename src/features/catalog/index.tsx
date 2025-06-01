import { useEffect, useState } from 'react';
import { getAllProducts } from '../../services/productsApi';
import type { ProductProps } from '../../types';
import PromotionsCarousel from './components/PromotionsCarousel';
import { ContainerMain } from './style';
import ListingProducts from './components/Listing';
import { toast } from 'react-toastify';

export default function CatalogComponent() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [layout, setLayout] = useState<'grid' | 'listing'>('listing');

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      setProducts(data);
    } catch (err) {
      toast('Erro ao buscar produtos');
    }
  };

  useEffect(() => {
    fetchProducts();
    console.log(layout)
  }, []);

  return (
    <ContainerMain>
      {layout === 'listing' && (
        <PromotionsCarousel title="MEN'S CLOTHING" products={products} />
      )}
      <ListingProducts layout={layout} products={products} />
    </ContainerMain>
  );
}
