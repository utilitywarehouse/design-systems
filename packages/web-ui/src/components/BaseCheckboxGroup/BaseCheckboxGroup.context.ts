import { createContext, useContext } from 'react';

export type BaseCheckboxGroupContextValue = {
  name?: string;
  required: boolean;
  disabled: boolean;
  value?: Array<string>;
  onItemCheck(value: string): void;
  onItemUncheck(value: string): void;
  hasGroupHelperText: boolean;
  'aria-describedby'?: string;
};

export const BaseCheckboxGroupContext = createContext<BaseCheckboxGroupContextValue | undefined>(
  undefined
);

export const BaseCheckboxGroupProvider = BaseCheckboxGroupContext.Provider;

export const useBaseCheckboxGroup = () => useContext(BaseCheckboxGroupContext);
