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
  breakpoints: { values: breakpoints },
  spacing: (multiplier: number) => multiplier * spacingBase,
  components: { ...cssBaselineThemeOverrides },
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

theme.palette = {
  colors,
  text: { primary: colors.midnight, secondary: colors.purple },
  background: { default: colors.white },
  common: { white: colors.white, black: colors.black },
};

console.log({ theme });

export type Theme = typeof theme;
