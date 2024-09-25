import { createContext, useContext } from 'react';
import type { AlertProps } from './Alert.props';

export const AlertContext = createContext<{
  colorScheme?: AlertProps['colorScheme'];
}>({});

export const useAlertContext = () => useContext(AlertContext);
