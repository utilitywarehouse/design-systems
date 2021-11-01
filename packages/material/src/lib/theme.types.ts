import { Theme as MuiTheme, Components } from "@mui/material/styles";
import { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";

export type Spacing = (n: number) => string;

export type GetComponentThemeConfiguration = (
  theme: CustomerUITheme,
  muiTheme: MuiTheme
) => Components;
