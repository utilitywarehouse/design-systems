import { Theme as MuiTheme } from "@mui/material/styles";
import { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";
import { getComponentThemeConfiguration as getButtonComponentThemeConfiguration } from "./Button";
import { GetComponentThemeConfiguration } from "../lib/theme.types";

export const getComponentThemeConfiguration: GetComponentThemeConfiguration = (
  theme: CustomerUITheme,
  muiTheme: MuiTheme
) => ({
  ...getButtonComponentThemeConfiguration(theme, muiTheme),
});
