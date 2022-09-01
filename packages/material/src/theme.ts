import { createTheme, Theme as MuiTheme } from "@mui/material/styles";
import { getTextFieldTheme } from "./components/TextField";
import { getButtonTheme } from "./components/Button";
import { getTypographyTheme } from "./components/Typography";
import {
  breakpoints,
  colors,
  spacingBase,
} from "@utilitywarehouse/customer-ui-design-tokens";

export const buildTheme = (): MuiTheme => {
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

  muiTheme.components = {
    ...muiTheme.components,
    ...getTypographyTheme(muiTheme),
    ...getTextFieldTheme(muiTheme),
    ...getButtonTheme(),
  };

  return muiTheme;
};

export const theme = buildTheme();
