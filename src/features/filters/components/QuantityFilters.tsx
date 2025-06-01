import { useEffect, useState } from 'react';
import type { QuantityFilterProps } from '../../../types/filters';
import { filterOptions } from '../../../utils/filterOptions';
import { StyledSelect } from '../styles';

type SelectProps = {
  value: number;
  label: string;
};

export default function QuantityFilters({
  allProducts,
  setFilteredProducts,

}: QuantityFilterProps) {
  const [limit, setLimit] = useState(5);

  const handleSliceProducts = (value: number) => {
    setLimit(value);
  };

  useEffect(() => {
    const productsOnSale = allProducts.filter(
      product => product.category !== `men's clothing`
    );
    setFilteredProducts(productsOnSale.slice(0, limit));
  }, [allProducts, limit]);

  useEffect(() => {
    console.log(allProducts);
    
  }, [allProducts])

  const returnSelectFilter = (options: SelectProps[]) => {
    return (
      <StyledSelect
        name="quantity-filter"
        onChange={e => handleSliceProducts(Number(e.target.value))}
        value={String(limit)}
      >
        {options.map(item => (
          <option key={item.value} value={String(item.value)}>
            {item.label}
          </option>
        ))}
      </StyledSelect>
    );
  };

  return (
    <div>
      <span>Exibir {returnSelectFilter(filterOptions)} por vez </span>
    </div>
  );
}
