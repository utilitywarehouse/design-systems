import { createContext, useContext } from 'react';
import type { IconButtonProps } from './IconButton.props';

export const IconButtonContext = createContext<{
  colorScheme?: IconButtonProps['colorScheme'];
  variant?: IconButtonProps['variant'];
  size?: IconButtonProps['size'];
  inverted?: IconButtonProps['inverted'];
  disabled?: IconButtonProps['disabled'];
  active?: boolean;
}>({});

export const useIconButtonContext = () => useContext(IconButtonContext);
