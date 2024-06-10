import { createContext } from 'react';

export type CheckboxGroupContextValue = {
  hasGroupHelperText: boolean;
  'aria-describedby'?: string;
};

export const CheckboxGroupContext = createContext<CheckboxGroupContextValue>({
  hasGroupHelperText: false,
} as CheckboxGroupContextValue);
