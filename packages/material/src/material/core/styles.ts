export {
  createTheme,
  adaptV4Theme,
  createStyles,
  responsiveFontSizes,
  duration,
  easing,
  useTheme as useMuiTheme,
  styled,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

export {
  ServerStyleSheets,
  StylesProvider as MuiStylesProvider,
  createGenerateClassName,
  jssPreset,
  withStyles,
  withTheme,
} from "@mui/styles";

import { makeStyles as muiMakeStyles } from "@mui/styles";
/**
 * @deprecated in v2. This will be removed in v3, please migrate to the sx & styled utilities.
 */
export const makeStyles: typeof muiMakeStyles = (...args) => {
  console.warn(
    "makeStyles is deprecated in v2, and will be removed in v3. Please migrate to the sx and styled utilities."
  );
  return muiMakeStyles(...args);
};

export type {
  ComponentCreator,
  StyleRules,
  StyleRulesCallback,
  StyledProps,
  Styles,
  ThemeProviderProps as MuiThemeProviderProps,
  WithStyles,
  WithTheme,
} from "@mui/styles";

export type {
  Breakpoint,
  BreakpointOverrides,
  DeprecatedThemeOptions,
  Direction,
  Palette,
  PaletteColor,
  PaletteColorOptions,
  PaletteOptions,
  SimplePaletteColorOptions,
  ComponentsPropsList,
  Duration,
  Easing,
  Theme,
  Transitions,
  TransitionsOptions,
  TypographyStyle,
  TypographyVariant,
  TypographyVariants,
  TypographyVariantsOptions,
  StyledComponentProps,
  CreateMUIStyled,
  ComponentsProps,
  ComponentsVariants,
  ComponentsOverrides,
} from "@mui/material/styles";
