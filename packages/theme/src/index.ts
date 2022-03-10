import { Theme, BackdropLevel, ColorScheme } from "./types";
import { getButtonStyles } from "./button";
import { getTypographyStyles } from "./typography";
import gridConfiguration from "./grid";
import { getInteractiveCardStyles } from "./interactiveCard";
import { getMenuStyles } from "./menu";
import { getMenuItemStyles } from "./menuItem";
import spacing from "./spacing";
import { breakpoints } from "./breakpoint";
import { getPalette } from "./palette";
import { getTextFieldStyles } from "./textField";

export * from "./types";
export * from "./button/types";
export * from "./grid/types";
export * from "./interactiveCard/types";
export * from "./menu/types";
export * from "./menuItem/types";
export * from "./textField/types";
export * from "./typography/types";

export { default as gridConfiguration } from "./grid";

export const getTheme = (
  colorScheme: ColorScheme,
  backdropLevel: BackdropLevel
): Theme => {
  const palette = getPalette(colorScheme, backdropLevel);
  return {
    components: {
      button: getButtonStyles(colorScheme, backdropLevel),
      interactiveCard: getInteractiveCardStyles(colorScheme, backdropLevel),
      grid: gridConfiguration,
      menu: getMenuStyles(colorScheme, backdropLevel),
      menuItem: getMenuItemStyles(colorScheme, backdropLevel),
      textField: getTextFieldStyles(colorScheme, backdropLevel),
      typography: getTypographyStyles(colorScheme, backdropLevel),
    },
    spacing,
    colorScheme,
    backdropLevel,
    breakpoints,
    palette,
  };
};
