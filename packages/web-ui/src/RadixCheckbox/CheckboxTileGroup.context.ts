import { createContext } from 'react';

export type CheckboxTileGroupContextValue = {
  hasGroupHelperText: boolean;
  name?: string;
  required: boolean;
  disabled: boolean;
  value?: Array<string>;
  onItemCheck(value: string): void;
  onItemUncheck(value: string): void;
  'aria-describedby'?: string;
};

export const CheckboxTileGroupContext = createContext<CheckboxTileGroupContextValue>({
  hasGroupHelperText: false,
} as CheckboxTileGroupContextValue);
