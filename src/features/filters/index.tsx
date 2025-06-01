import type {
  LayoutFilterProps,
  QuantityFilterProps,
} from '../../types/filters';
import LayoutFilter from './components/LayoutFilter';
import QuantityFilters from './components/QuantityFilters';
import { ContainerFilters } from './styles';

export type FilterProps = LayoutFilterProps & QuantityFilterProps;

export default function Filters({
  layout,
  setLayout,
  setFilteredProducts,
  allProducts,
}: FilterProps) {
  return (
    <ContainerFilters>
      <QuantityFilters
        setFilteredProducts={setFilteredProducts}
        allProducts={allProducts}
      />
      <LayoutFilter layout={layout} setLayout={setLayout} />
    </ContainerFilters>
  );
}
