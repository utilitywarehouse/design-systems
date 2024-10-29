import { createContext, useContext } from 'react';
import { HelperBaseProps } from './Helper.props';

export const HelperContext = createContext<HelperBaseProps>({});

export const useHelperContext = () => useContext(HelperContext);
