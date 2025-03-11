import { createContext, useContext } from 'react';

export interface ToggleButtonContextProps {
  value?: string | number | boolean;
  disabled?: boolean;
}

export const ToggleButtonContext = createContext<ToggleButtonContextProps | undefined>(undefined);

export function useToggleButtonContext(): ToggleButtonContextProps {
  const context = useContext(ToggleButtonContext);
  if (context === undefined) {
    throw new Error('useToggleButtonContext must be used within a ToggleButtonContext.Provider');
  }
  return context;
}
