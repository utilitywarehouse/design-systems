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

// do this better
const { body1, body2, button, ...rest } = theme.typography;
console.log({ body1, body2, button });

theme.typography = {
  ...rest,
  fontSize: 16,
  htmlFontSize: 16,
  fontFamily: fonts.secondary,
  fontWeightBold: fontWeights.primary,
  fontWeightLight: fontWeights.data,
  fontWeightMedium: fontWeights.secondary.semibold,
  fontWeightRegular: fontWeights.secondary.regular,
  ...typographyConfiguration,
};

console.log({ theme });

export type Theme = typeof theme;
