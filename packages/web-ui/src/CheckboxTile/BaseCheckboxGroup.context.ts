import { createContext } from 'react';

export type BaseCheckboxGroupContextValue = {
  hasGroupHelperText: boolean;
  name?: string;
  required: boolean;
  disabled: boolean;
  value?: Array<string>;
  onItemCheck(value: string): void;
  onItemUncheck(value: string): void;
  'aria-describedby'?: string;
};

export const BaseCheckboxGroupContext = createContext<BaseCheckboxGroupContextValue>({
  hasGroupHelperText: false,
} as BaseCheckboxGroupContextValue);
