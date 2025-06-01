import { useEffect, useState } from 'react';
import type { ProductProps } from '../../types';
import SearchInput from '../SearchInput';
import { ContainerHeader, Logo } from './style';
import { FaCartShopping } from 'react-icons/fa6';

type HeaderProps = {
  allProducts: ProductProps[];
  setFilteredProducts: (filteredProducts: ProductProps[]) => void;
};

export default function Header({ allProducts,setFilteredProducts }: HeaderProps) {
  const [search, setSearch] = useState<String>('');

  useEffect(() => {
    if (search.trim() === '') {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [search, allProducts]);

  return (
    <ContainerHeader>
      <Logo>Bloom Store</Logo>
      <FaCartShopping size={24} color="#fff" />
      <SearchInput
        type="text"
        placeholder="Pesquise aqui..."
        onChange={e => setSearch(e)}
      />
    </ContainerHeader>
  );
}
