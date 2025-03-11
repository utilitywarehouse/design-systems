import { createContext, useContext } from 'react';

export interface ToggleButtonGroupContextValue<T = string | number | boolean> {
  value?: T;
  onChange?: (value: T) => void;
  disabled?: boolean;
}

export const ToggleButtonGroupContext = createContext<ToggleButtonGroupContextValue>({});

export const useToggleButtonGroupContext = () => useContext(ToggleButtonGroupContext);
