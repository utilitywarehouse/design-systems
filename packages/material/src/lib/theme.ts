import createMuiTheme, {
  Theme as MuiTheme,
} from "@material-ui/core/styles/createMuiTheme";
import * as designTokens from "@utilitywarehouse/customer-ui-design-tokens";
import { TinyColor, ColorInput } from "@ctrl/tinycolor";
import { getComponentThemeConfiguration } from "../components";
import { Spacing } from "./theme.types";
import createPalette from "@material-ui/core/styles/createPalette";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

export type Theme = MuiTheme;

const lighten = (color: ColorInput, amount: number): string =>
  new TinyColor(color).lighten(amount).toRgbString();
const darken = (color: ColorInput, amount: number): string =>
  new TinyColor(color).darken(amount).toRgbString();
const alpha = (color: ColorInput, amount: number): string =>
  new TinyColor(color).setAlpha(amount).toRgbString();

const breakpoints = {
  values: {
    xs: 0,
    sm: parseInt(designTokens.breakpoints.sm),
    md: parseInt(designTokens.breakpoints.md),
    lg: parseInt(designTokens.breakpoints.lg),
    xl: parseInt(designTokens.breakpoints.xl),
  },
};

const spacing: Spacing = (n: number): string => `${n * 8}px`;

const getPalette = (darkModeEnabled: boolean) => {
  const palette = {
    common: {
      black: designTokens.palette.black,
      white: designTokens.palette.white,
    },
    primary: {
      main: designTokens.colors.action,
      light: lighten(designTokens.colors.action, 10),
      dark: darken(designTokens.colors.action, 10),
      contrastText: designTokens.colors.backdrops.light.level0,
    },
    secondary: {
      main: designTokens.colors.primary,
      light: lighten(designTokens.colors.primary, 10),
      dark: darken(designTokens.colors.primary, 10),
      contrastText: designTokens.palette.white,
    },
    error: {
      main: designTokens.colors.inputs.light.error,
      light: lighten(designTokens.colors.inputs.light.error, 10),
      dark: darken(designTokens.colors.inputs.light.error, 10),
      contrastText: designTokens.palette.white,
    },
    warning: {
      main: designTokens.colors.messaging.warning,
      light: lighten(designTokens.colors.messaging.warning, 10),
      dark: darken(designTokens.colors.messaging.warning, 10),
      contrastText: designTokens.palette.white,
    },
    info: {
      main: designTokens.colors.messaging.info,
      light: lighten(designTokens.colors.messaging.info, 10),
      dark: darken(designTokens.colors.messaging.info, 10),
      contrastText: designTokens.palette.white,
    },
    success: {
      main: designTokens.colors.messaging.success,
      light: lighten(designTokens.colors.messaging.success, 10),
      dark: darken(designTokens.colors.messaging.success, 10),
      contrastText: designTokens.palette.white,
    },
    // text: {
    //   primary: designTokens.palette.black,
    //   secondary: designTokens.palette.black,
    //   disabled: designTokens.palette.black,
    // },
    // background: {
    //   paper: designTokens.palette.white,
    //   default: designTokens.palette.white,
    // },
    action: {
      active: alpha(designTokens.palette.black, 0.54),
      hover: alpha(designTokens.palette.black, 0.04),
      hoverOpacity: 0.04,
      selected: alpha(designTokens.palette.black, 0.08),
      selectedOpacity: 0.08,
      disabled: alpha(designTokens.palette.black, 0.26),
      disabledBackground: alpha(designTokens.palette.black, 0.12),
      disabledOpacity: 0.38,
      focus: alpha(designTokens.palette.black, 0.12),
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };

  if (darkModeEnabled) return palette;
  return palette;
};

export const getTheme = (darkModeEnabled: boolean): Theme => {
  const palette = getPalette(darkModeEnabled);
  const components = getComponentThemeConfiguration({
    breakpoints: createBreakpoints(breakpoints),
    spacing,
    palette: createPalette(palette),
    darkModeEnabled,
  });

  return createMuiTheme({
    breakpoints,
    spacing,
    palette,
    components,
  });
};

export * as designTokens from "@utilitywarehouse/customer-ui-design-tokens";
