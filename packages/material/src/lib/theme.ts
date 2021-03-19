import createMuiTheme, {
  Theme as MuiTheme,
} from "@material-ui/core/styles/createMuiTheme";
import { Spacing } from "./theme.types";
import * as theme from "@utilitywarehouse/customer-ui-theme";

export type Theme = MuiTheme;

const breakpoints = {
  values: {
    xs: 0,
    sm: theme.breakpoints.mobile,
    md: theme.breakpoints.tablet,
    lg: theme.breakpoints.desktop,
    xl: 1440,
  },
};

const spacing: Spacing = (n: number): string => `${n * theme.spacing.base}px`;

export const getTheme = (): Theme => {
  return createMuiTheme({
    breakpoints,
    spacing,
  });
};
