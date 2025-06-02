import { useEffect, useState } from 'react';
import type { ProductProps } from '../../types';
import SearchInput from '../SearchInput';
import { ContainerHeader, Logo } from './style';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

type HeaderProps = {
  allProducts?: ProductProps[];
  setFilteredProducts?: (filteredProducts: ProductProps[]) => void;
  hideSearchInput: boolean;
};

export default function Header({
  allProducts,
  setFilteredProducts,
  hideSearchInput,
}: HeaderProps) {
  const [search, setSearch] = useState<String>('');

  useEffect(() => {
    if (search.trim() === '') {
      setFilteredProducts && setFilteredProducts(allProducts ?? []);
    } else {
      const filtered =
        allProducts?.filter(product =>
          product.title.toLowerCase().includes(search.toLowerCase())
        ) ?? [];
      setFilteredProducts && setFilteredProducts(filtered);
    }
  }, [search, allProducts]);

  return (
    <ContainerHeader>
      <Link to='/'>
      <Logo>Bloom Store</Logo>
      </Link>
      <FaCartShopping size={24} color="#fff" />
      {!hideSearchInput && (
        <SearchInput
          type="text"
          placeholder="Pesquise aqui..."
          onChange={e => setSearch(e)}
        />
      )}
    </ContainerHeader>
  );
}
