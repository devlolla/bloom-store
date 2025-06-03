import { createContext, useContext, useState, type ReactNode } from 'react';
import type { BaseContextProps } from '../types';

const BaseContextValue = createContext({} as BaseContextProps);

export const useBaseContext = () => useContext(BaseContextValue);

export const BaseContextProvider = ({
  children,
  hideSearchInput,
  setHideSearchInput,
}: {
  children: ReactNode;
  hideSearchInput: boolean;
  setHideSearchInput: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <BaseContextValue.Provider value={{ hideSearchInput, setHideSearchInput }}>
      {children}
    </BaseContextValue.Provider>
  );
};
