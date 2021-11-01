import "../types/BreakpointOverrides";
import {
  adaptV4Theme,
  createTheme,
  Theme as MuiTheme,
  PaletteOptions,
} from "@mui/material/styles";
import { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";
import { getComponentThemeConfiguration } from "../components";

export type { Theme as MuiTheme } from "@mui/material/styles/createTheme";
export type { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";

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
  const muiTheme = createTheme(
    adaptV4Theme({
      breakpoints: getBreakpoints(theme),
      spacing: theme.spacing,
      palette: getPalette(theme),
    })
  );

  muiTheme.components = getComponentThemeConfiguration(theme, muiTheme);
  return muiTheme;
};
