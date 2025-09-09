import * as React from 'react';

import { ThemeProvider as MuiThemeProvider } from '@mui/system';

import { theme } from '../../theme';

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
  /* @ts-expect-error - upgrade issue. TODO: Fix this */
  return <MuiThemeProvider theme={theme} {...props} />;
};
