import * as React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import CssBaseline from '@mui/material/CssBaseline';

export interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
