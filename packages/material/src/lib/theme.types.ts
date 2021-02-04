import { Breakpoints } from "@material-ui/core/styles/createBreakpoints";
import { Palette } from "@material-ui/core/styles/createPalette";

import { Components } from "@material-ui/core/styles/components";

export type Spacing = (n: number) => string;

interface GetComponentThemeConfigurationParams {
  breakpoints: Breakpoints;
  spacing: Spacing;
  palette: Palette;
  darkModeEnabled: boolean;
}

export type GetComponentThemeConfiguration = (
  params: GetComponentThemeConfigurationParams
) => Components;
