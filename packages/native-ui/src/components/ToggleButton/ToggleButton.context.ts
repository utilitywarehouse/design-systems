import { createContext, useContext } from 'react';

export interface ToggleButtonContextProps {
  value?: string | number | boolean;
  disabled?: boolean;
}

export const ToggleButtonContext = createContext<ToggleButtonContextProps>({});

export const useToggleButtonContext = () => useContext(ToggleButtonContext);
