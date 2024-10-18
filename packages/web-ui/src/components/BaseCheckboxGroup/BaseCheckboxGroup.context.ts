import { createContext, useContext } from 'react';

export type BaseCheckboxGroupContextValue = {
  name?: string;
  value?: Array<string>;
  onItemCheck(value: string): void;
  onItemUncheck(value: string): void;
};

export const BaseCheckboxGroupContext = createContext<BaseCheckboxGroupContextValue | undefined>(
  undefined
);

export const BaseCheckboxGroupProvider = BaseCheckboxGroupContext.Provider;

export const useBaseCheckboxGroup = () => useContext(BaseCheckboxGroupContext);
