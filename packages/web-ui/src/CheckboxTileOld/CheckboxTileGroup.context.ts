import { createContext } from 'react';

export type CheckboxTileGroupContextValue = {
  hasGroupHelperText: boolean;
  'aria-describedby'?: string;
};

export const CheckboxTileGroupContext = createContext<CheckboxTileGroupContextValue>({
  hasGroupHelperText: false,
} as CheckboxTileGroupContextValue);
