import * as React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { theme as defaultTheme } from '../theme';
import CssBaseline from '@mui/material/CssBaseline';
import { buttonThemeOverrides } from '../Button';
import { textFieldThemeOverrides } from '../TextField';
import { textLinkThemeOverrides } from '../TextLink';
import { menuThemeOverrides } from '../Menu';
import { cssBaselineThemeOverrides } from '../theme/CssBaseline.theme';

const componentThemeOverrides = {
  ...cssBaselineThemeOverrides,
  ...buttonThemeOverrides,
  ...textLinkThemeOverrides,
  ...textFieldThemeOverrides,
  ...menuThemeOverrides,
};

export interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = { ...defaultTheme, components: componentThemeOverrides };
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};
