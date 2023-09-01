import { createContext } from 'react';

export type RadioGroupContextValue = { hasGroupHelperText: boolean; 'aria-describedby'?: string };
export const RadioGroupContext = createContext<RadioGroupContextValue>({
  hasGroupHelperText: false,
} as RadioGroupContextValue);
