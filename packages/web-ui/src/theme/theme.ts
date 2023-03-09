import { createTheme, Theme as MuiTheme } from '@mui/material/styles';
import {
  breakpoints,
  colors,
  spacingBase,
  fonts,
  fontWeights,
} from '@utilitywarehouse/customer-ui-design-tokens';
import { buttonThemeOverrides } from '../Button';
import { textFieldThemeOverrides } from '../TextField';
import { textLinkThemeOverrides } from '../TextLink';
import { menuThemeOverrides } from '../Menu';
import { textThemeOverrides } from '../Text';
import { headingThemeOverrides } from '../Heading';
import { cssBaselineThemeOverrides } from './CssBaseline.theme';

const theme: MuiTheme = createTheme({
  breakpoints: { values: breakpoints },
  spacing: (multiplier: number) => multiplier * spacingBase,
});

theme.components = {
  ...theme.components,
  ...cssBaselineThemeOverrides,
  ...buttonThemeOverrides(),
  ...textLinkThemeOverrides(),
  ...textFieldThemeOverrides(theme),
  ...menuThemeOverrides(theme),
};

const textConfiguration = textThemeOverrides(theme);
const headingConfiguration = headingThemeOverrides(theme);
const { pxToRem } = theme.typography;
const customTypography = {
  pxToRem,
  fontSize: 16,
  htmlFontSize: 16,
  fontFamily: fonts,
  fontWeights,
  ...textConfiguration,
  ...headingConfiguration,
};
export const customPalette = {
  ...colors,
  text: {
    primary: colors.midnight, // TODO: remove when refactor Button
    heading: {
      primary: colors.purple,
      secondary: colors.midnight,
      inverse: colors.white,
    },
    body: {
      primary: colors.midnight,
      inverse: colors.white,
      success: { default: colors.jewel, inverse: colors.apple },
      error: { default: colors.maroonFlush, inverse: colors.rose },
    },
  },
  background: {
    default: colors.white,
    white: colors.white,
    whiteOwl: colors.whiteOwl,
    lightTint: colors.lightTint,
    purple: colors.purple,
    midnight: colors.midnight,
  },
  common: { white: colors.white, black: colors.black, disabled: colors.codGray20 },
  brand: { primary: colors.purple, action: colors.cyan40, line: colors.pink },
  messaging: {
    alert: colors.rose,
    info: colors.midnight,
    success: colors.apple,
    warning: colors.gold,
  },
  services: {
    gas: colors.cyan40,
    electricity: colors.apple,
    insurance: colors.rose,
    mobile: colors.gold,
    landline: colors.grape,
  },
};

theme.typography = customTypography;
theme.palette = {
  // TODO: we have to do this because the mui/material Button component relies on certain palette properties.
  // I'm guessing we can remove this when we refactor to use the unstyled mui/base Button
  ...theme.palette,
  ...customPalette,
};

export { theme };
export type Theme = typeof theme;
