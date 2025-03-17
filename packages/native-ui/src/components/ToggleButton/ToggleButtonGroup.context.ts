import { createContext, useContext } from 'react';

export interface ToggleButtonGroupContextValue<T = string | number | boolean> {
  value?: T;
  onChange?: (value: T) => void;
  disabled?: boolean;
  size?: 'small' | 'base';
}

export const ToggleButtonGroupContext = createContext<ToggleButtonGroupContextValue>({});

export const useToggleButtonGroupContext = () => useContext(ToggleButtonGroupContext);
