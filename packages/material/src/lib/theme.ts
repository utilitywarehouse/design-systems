import "../types/BreakpointOverrides";
import { createTheme, Theme as MuiTheme } from "@mui/material/styles";
import { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";
import { getComponentThemeConfiguration } from "../components";
import { getTextFieldTheme } from "../components/TextField";
import { getTypographyConfiguration } from "../components/Typography";
import {
  breakpoints,
  colors,
  spacingBase,
} from "@utilitywarehouse/customer-ui-design-tokens";

export type { Theme as MuiTheme } from "@mui/material/styles/createTheme";
export type { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";

export const buildTheme = (theme: CustomerUITheme): MuiTheme => {
  const muiTheme = createTheme({
    breakpoints: {
      values: {
        desktop: breakpoints.desktop,
        tablet: breakpoints.tablet,
        mobile: breakpoints.mobile,
      },
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
  muiTheme.components = {
    ...muiTheme.components,
    ...getTextFieldTheme(muiTheme),
  };

  return muiTheme;
};
