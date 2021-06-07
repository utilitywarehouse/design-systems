import { Theme as MuiTheme } from "@material-ui/core/styles/createTheme";
import { Theme as CustomerUITheme } from "@utilitywarehouse/customer-ui-theme";
import { Components } from "@material-ui/core/styles/components";

export type Spacing = (n: number) => string;

export type GetComponentThemeConfiguration = (
  theme: CustomerUITheme,
  muiTheme: MuiTheme
) => Components;
