import "../types/BreakpointOverrides";
import {
  createTheme,
  Theme as MuiTheme,
  PaletteOptions,
} from "@mui/material/styles";
import { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";
import { getComponentThemeConfiguration } from "../components";
import { getTypographyConfiguration } from "../components/Typography";

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
  const muiTheme = createTheme({
    breakpoints: getBreakpoints(theme),
    spacing: theme.spacing,
    palette: getPalette(theme),
    typography: {
      htmlFontSize: 16,
    },
  });

  const typographyConfiguration = getTypographyConfiguration(muiTheme);

  muiTheme.typography.displayHeading = typographyConfiguration.displayHeading;
  muiTheme.typography.h1 = typographyConfiguration.h1;
  muiTheme.typography.h2 = typographyConfiguration.h2;
  muiTheme.typography.h3 = typographyConfiguration.h3;
  muiTheme.typography.h4 = typographyConfiguration.h4;
  muiTheme.typography.subtitle = typographyConfiguration.subtitle;
  muiTheme.typography.body = typographyConfiguration.body;
  muiTheme.typography.legalNote = typographyConfiguration.legalNote;
  muiTheme.typography.caption = typographyConfiguration.caption;

  muiTheme.components = getComponentThemeConfiguration(theme, muiTheme);

  return muiTheme;
};
