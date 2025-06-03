import { useEffect, useState } from 'react';
import type { ProductProps } from '../../types';
import SearchInput from '../SearchInput';
import { ButtonCart, ContainerHeader, Logo } from './style';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

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
  const [search, setSearch] = useState<string>('');
  const { setVisibleCart, totalItems } = useCart();

  useEffect(() => {
    console.log(search.trim() === '');

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
      <Link to="/">
        <Logo>Bloom Store</Logo>
      </Link>
      <ButtonCart onClick={() => setVisibleCart(prev => !prev)}>
        {totalItems > 0 && <div className="indication-value">{totalItems}</div>}
        <FaCartShopping size={24} color="#fff" />
      </ButtonCart>
      {!hideSearchInput && (
        <SearchInput
          type="text"
          placeholder="Pesquise aqui..."
          onChange={setSearch}
        />
      )}
    </ContainerHeader>
  );
}
