import { createTheme, Theme as MuiTheme } from '@mui/material/styles';
import {
  breakpoints,
  colors,
  spacingBase,
  fonts,
  fontWeights,
} from '@utilitywarehouse/customer-ui-design-tokens';
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
  typography: {
    htmlFontSize: 16,
    body1: undefined,
    body2: undefined,
    button: undefined,
    h5: undefined,
    h6: undefined,
    overline: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
  },
});

const typographyConfiguration = getTypographyConfiguration(theme);

theme.typography = {
  ...theme.typography,
  fontSize: 16,
  htmlFontSize: 16,
  fontFamily: fonts.secondary,
  fontWeightBold: fontWeights.primary,
  fontWeightLight: fontWeights.data,
  fontWeightMedium: fontWeights.secondary.semibold,
  fontWeightRegular: fontWeights.secondary.regular,
  ...typographyConfiguration,
};

const typographyTheme = {
  MuiTypography: { styleOverrides: typographyConfiguration },
};

theme.components = {
  ...theme.components,
  ...typographyTheme,
};

export type Theme = typeof theme;
