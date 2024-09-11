import * as React from 'react';

import { theme } from '../theme';
import { ThemeProvider as MuiThemeProvider } from '@mui/system';

export interface ThemeProviderProps {
  /**
   * Your component tree.
   */
  children?: React.ReactNode;
}

/**
 * Provides the custom Web UI theme.
 */
export const ThemeProvider = (props: ThemeProviderProps) => {
  return <MuiThemeProvider theme={theme} {...props} />;
};
