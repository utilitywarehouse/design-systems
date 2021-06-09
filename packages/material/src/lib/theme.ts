import createTheme, {
  Theme as MuiTheme,
} from "@material-ui/core/styles/createTheme";
import { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";
import { getComponentThemeConfiguration } from "../components";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

export type { Theme as MuiTheme } from "@material-ui/core/styles/createTheme";
export type { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";

declare module "@material-ui/core/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false; // removes the `sm` breakpoint
    md: false; // removes the `md` breakpoint
    lg: false; // removes the `lg` breakpoint
    xl: false; // removes the `xl` breakpoint
    tablet: true; // adds the `tablet` breakpoint
    mobile: true; // adds the `mobile` breakpoint
    desktop: true; // adds the `desktop` breakpoint
  }
}

const getBreakpoints = (theme: CustomerUITheme) => ({
  values: theme.breakpoints,
});

const getPalette = (theme: CustomerUITheme): PaletteOptions => ({
  mode: theme.colorScheme,
  common: {
    black: theme.palette.common.black,
    white: theme.palette.common.white,
  },
  primary: {
    main: theme.palette.brand.primary,
  },
  secondary: {
    main: theme.palette.brand.action,
  },
  error: {
    main: theme.palette.messaging.alert,
  },
  warning: {
    main: theme.palette.messaging.warning,
  },
  info: {
    main: theme.palette.messaging.info,
  },
  success: {
    main: theme.palette.messaging.success,
  },
});

export const buildTheme = (theme: CustomerUITheme): MuiTheme => {
  const muiTheme = createTheme({
    breakpoints: getBreakpoints(theme),
    spacing: theme.spacing,
    palette: getPalette(theme),
  });

  muiTheme.components = getComponentThemeConfiguration(theme, muiTheme);
  return muiTheme;
};
