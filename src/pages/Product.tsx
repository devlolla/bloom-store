import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { ContainerMain, Title } from '../styles/ProductBase';
import { getSingleProduct } from '../services/productsApi';
import { useParams } from 'react-router-dom';
import type { ProductProps } from '../types';
import Details from '../components/Details';
import { applyDiscountToProduct } from '../utils/discount';

export default function ProductPage() {
  const [product, setProduct] = useState<ProductProps | undefined>();

  const { id } = useParams();

  const fetchProducts = async () => {
    if (!id) {
      console.log('ID do produto não fornecido');
      return;
    }
    try {
      const data = await getSingleProduct(Number(id));
      const appliedDiscountProduct = applyDiscountToProduct(data, "men's clothing", 10)
      setProduct(appliedDiscountProduct);
    } catch (err) {
      console.log('Erro ao buscar produtos');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Header hideSearchInput={true} />
      <Title>
        <h2>{product?.title}</h2>
      </Title>
      <ContainerMain>
        {product && <Details product={{ ...product, quantity: 1 }} />}
      </ContainerMain>
    </div>
  );
}
