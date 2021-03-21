import { BackdropLevel } from "./backdrop";
import { Breakpoint } from "./breakpoint";
import { buttonGroup, BUTTON_KEY } from "./button";
import {
  ButtonSize,
  ButtonState,
  ButtonStylesColor,
  ButtonStylesNonColor,
  ButtonVariant,
} from "./button/types";
import { ColorScheme } from "./colorScheme";
import { paletteGroup } from "./palette";
import {
  TypographyVariant,
  typographyGroup,
  TYPOGRAPHY_KEY,
  TypographyColor,
  TypographyStylesNonColor,
} from "./typography";

export * from "./palette";
export * from "./typography";
export * from "./button";
export * from "./button/types";
export * as spacing from "./spacing";
export * from "./breakpoint";
export * from "./backdrop";
export * from "./colorScheme";

export const getButtonTheme = (
  breakpoint: Breakpoint,
  colorScheme: ColorScheme,
  backdrop: BackdropLevel,
  variant: ButtonVariant,
  state: ButtonState,
  size: ButtonSize
): ButtonStylesColor & ButtonStylesNonColor => {
  return {
    ...buttonGroup[breakpoint][variant][size][state],
    ...paletteGroup[colorScheme][backdrop][BUTTON_KEY][variant][state],
  };
};

export const getTypographyTheme = (
  breakpoint: Breakpoint,
  colorScheme: ColorScheme,
  backdrop: BackdropLevel,
  variant: TypographyVariant,
  color: TypographyColor
): TypographyStylesNonColor & { color: string } => {
  return {
    ...typographyGroup[breakpoint][variant],
    color: paletteGroup[colorScheme][backdrop][TYPOGRAPHY_KEY][variant][color],
  };
};
