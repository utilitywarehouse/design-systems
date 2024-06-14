import { createContext } from 'react';

export type CheckboxGroupContextValue = {
  name?: string;
  required: boolean;
  disabled: boolean;
  value?: Array<string>;
  // onItemCheck(value: string): void;
  // onItemUncheck(value: string): void;
  hasGroupHelperText: boolean;
  'aria-describedby'?: string;
};

export const CheckboxGroupContext = createContext<CheckboxGroupContextValue>({
  hasGroupHelperText: false,
} as CheckboxGroupContextValue);
