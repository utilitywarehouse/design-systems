import { Theme as MuiTheme } from "@material-ui/core/styles/createMuiTheme";
import { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";
import { getComponentThemeConfiguration as getButtonComponentThemeConfiguration } from "./Button";
import { getComponentThemeConfiguration as getTypographyComponentThemeConfiguration } from "./Typography";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = (
  theme: CustomerUITheme,
  muiTheme: MuiTheme
) => ({
  ...getButtonComponentThemeConfiguration(theme, muiTheme),
  ...getTypographyComponentThemeConfiguration(theme, muiTheme),
});
