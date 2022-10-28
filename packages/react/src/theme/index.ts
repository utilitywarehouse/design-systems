import { createTheme, Theme as MuiTheme } from '@mui/material/styles';
import {
  breakpoints,
  colors,
  spacingBase,
  fonts,
  fontWeights,
} from '@utilitywarehouse/customer-ui-design-tokens';
import { cssBaselineThemeOverrides } from '../components/CssBaseline';
import { getTypographyConfiguration } from '../components/Typography';

export const theme: MuiTheme = createTheme({
  breakpoints: {
    values: breakpoints,
  },
  spacing: (multiplier: number) => multiplier * spacingBase,
  palette: {
    common: { black: colors.black, white: colors.white },
    primary: { main: colors.purple },
    secondary: { main: colors.cyan },
    error: { main: colors.rose },
    warning: { main: colors.gold },
    info: { main: colors.midnight },
    success: { main: colors.apple },
  },
  components: {
    ...cssBaselineThemeOverrides,
  },
});

const typographyConfiguration = getTypographyConfiguration(theme);

const { pxToRem } = theme.typography;

theme.typography = {
  pxToRem,
  fontSize: 16,
  htmlFontSize: 16,
  fontFamily: fonts,
  fontWeights,
  ...typographyConfiguration,
};

export type Theme = typeof theme;
