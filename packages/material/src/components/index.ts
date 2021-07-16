import { Theme as MuiTheme } from "@material-ui/core/styles/createTheme";
import { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";
import { getComponentThemeConfiguration as getButtonComponentThemeConfiguration } from "./Button";
import { getComponentThemeConfiguration as getLinkComponentThemeConfiguration } from "./Link";
import { getComponentThemeConfiguration as getMenuComponentThemeConfiguration } from "./Menu";
import { getComponentThemeConfiguration as getTextFieldComponentThemeConfiguration } from "./TextField";
import { getComponentThemeConfiguration as getTypographyComponentThemeConfiguration } from "./Typography";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = (
  theme: CustomerUITheme,
  muiTheme: MuiTheme
) => ({
  ...getButtonComponentThemeConfiguration(theme, muiTheme),
  ...getLinkComponentThemeConfiguration(theme, muiTheme),
  ...getMenuComponentThemeConfiguration(theme, muiTheme),
  ...getTextFieldComponentThemeConfiguration(theme, muiTheme),
  ...getTypographyComponentThemeConfiguration(theme, muiTheme),
  ...getTextFieldComponentThemeConfiguration(theme, muiTheme),
});
