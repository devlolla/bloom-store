// import { HiViewList } from 'react-icons/hi';
import { IoGridSharp } from 'react-icons/io5';
import { HiOutlineViewList } from 'react-icons/hi';

export const filterOptions = [
  { value: 5, label: '5' },
  { value: 10, label: '10' },
  { value: 15, label: '15' },
  { value: 20, label: '20' },
];

export const optionsLayout: {
  value: 'listing' | 'grid';
  iconSize: number;
  Icon: React.ComponentType<{ size: number; color: string }>;
}[] = [
  { value: 'listing', Icon: HiOutlineViewList, iconSize: 22 },
  { value: 'grid', Icon: IoGridSharp, iconSize: 18 },
];
