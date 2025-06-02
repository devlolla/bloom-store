
import type { LayoutFilterProps, QuantityFilterProps } from '../../types';
import LayoutFilter from './components/LayoutFilter';
import QuantityFilters from './components/QuantityFilters';
import { ContainerFilters } from './styles';

export type FilterProps = LayoutFilterProps & QuantityFilterProps;

export default function Filters({
  layout,
  setLayout,
  setFilteredProducts,
  allProducts,
  limit,
  setLimit
}: FilterProps) {
  return (
    <ContainerFilters>
      <QuantityFilters
        setFilteredProducts={setFilteredProducts}
        allProducts={allProducts}
        limit={limit}
        setLimit={setLimit}
      />
      <LayoutFilter layout={layout} setLayout={setLayout} />
    </ContainerFilters>
  );
}
