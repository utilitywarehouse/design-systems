import { createContext, useContext } from 'react';

export const ButtonGroupContext = createContext<{ disabled?: boolean; loading?: boolean }>({});

export const useButtonGroupContext = () => useContext(ButtonGroupContext);
