import { ContainerIcons } from '../styles';
import type { LayoutFilterProps } from '../../../types/filters';
import { optionsLayout } from '../../../utils/filterOptions';

export default function LayoutFilter({ layout, setLayout }: LayoutFilterProps) {
  return (
    <ContainerIcons>
      {optionsLayout.map(({ Icon, value, iconSize }) => {
        const isActive = layout === value;

        return (
          <button
            key={value}
            value={value}
            onClick={() => setLayout(value)}
          >
            <Icon size={iconSize} color={isActive ? '#5062F0' : '#D0D3E2'} />
          </button>
        );
      })}
    </ContainerIcons>
  );
}
