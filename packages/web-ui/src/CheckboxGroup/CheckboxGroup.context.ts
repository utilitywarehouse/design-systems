import { createContext, useContext } from 'react';

export type CheckboxGroupContextValue = {
  name?: string;
  required: boolean;
  disabled: boolean;
  value?: Array<string>;
  onItemCheck(value: string): void;
  onItemUncheck(value: string): void;
  hasGroupHelperText: boolean;
  'aria-describedby'?: string;
};

export const CheckboxGroupContext = createContext<CheckboxGroupContextValue | undefined>(undefined);

export const CheckboxGroupProvider = CheckboxGroupContext.Provider;

export const useCheckboxGroup = () => useContext(CheckboxGroupContext);
