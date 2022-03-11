import { Theme, BackdropLevel, ColorScheme } from "./types";
import { getButtonStyles } from "./button";
import { getTypographyStyles } from "./typography";
import spacing from "./spacing";
import { breakpoints } from "./breakpoint";
import { getPalette } from "./palette";
import { getTextFieldStyles } from "./textField";

export * from "./types";
export * from "./button/types";
export * from "./textField/types";
export * from "./typography/types";

export const getTheme = (
  colorScheme: ColorScheme,
  backdropLevel: BackdropLevel
): Theme => {
  const palette = getPalette(colorScheme, backdropLevel);
  return {
    components: {
      button: getButtonStyles(colorScheme, backdropLevel),
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
