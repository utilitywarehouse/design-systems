import { createContext, useContext } from 'react';
import { InputContextValue } from './Input.props';

export const InputContext = createContext<InputContextValue>({});

export const useInputContext = () => useContext(InputContext);
