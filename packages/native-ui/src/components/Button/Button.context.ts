import { createContext, useContext } from 'react';
import type { ButtonProps } from './Button.props';

export const ButtonContext = createContext<{
  colorScheme?: ButtonProps['colorScheme'];
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  inverted?: ButtonProps['inverted'];
  disabled?: ButtonProps['disabled'];
  active?: boolean;
}>({});

export const useButtonContext = () => useContext(ButtonContext);
