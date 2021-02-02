import * as designTokens from "@utilitywarehouse/customer-ui-design-tokens";
import { BreakpointsOptions } from "@material-ui/core/styles/createBreakpoints";
import { Palette } from "@material-ui/core/styles/createPalette";

import { Components } from "@material-ui/core/styles/components";

export type Spacing = (n: number) => string;

interface GetComponentThemeConfigurationParams {
  breakpoints: BreakpointsOptions;
  spacing: Spacing;
  designTokens: typeof designTokens;
  palette: Palette;
}

export type GetComponentThemeConfiguration = (
  params: GetComponentThemeConfigurationParams
) => Components;
