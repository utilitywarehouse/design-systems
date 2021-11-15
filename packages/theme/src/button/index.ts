import { ColorScheme, BackdropLevel } from "../types";
import { getButtonPalette } from "./palette";
import { ButtonStyles, ButtonStylesNonColor } from "./types";
import {
  fonts,
  fontWeights,
  helpers,
  spacingBase,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { duration, easingFunction } from "../transitions";

const { px } = helpers;
const transitionStyles = {
  transition: `all ${duration}ms ${easingFunction}`,
  transitionProperty: "background-color, border-color, color, opacity",
};
const baseButtonStyles: Partial<ButtonStylesNonColor> = {
  ...transitionStyles,
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.semibold,
  textTransform: "none",
  opacity: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: px(spacingBase * 4), // 32px
  paddingRight: px(spacingBase * 4), // 32px
  borderStyle: "solid",
  borderWidth: 0,
  borderRadius: px(spacingBase * 4), // 32px
  fontSize: 18,
  lineHeight: 1,
} as ButtonStylesNonColor;
const disabledButtonStyles: Partial<ButtonStylesNonColor> = { opacity: 0.5 };
const smallButtonStyles: Partial<ButtonStylesNonColor> = {
  height: px(spacingBase * 4), // 32px
};
const mediumButtonStyles: Partial<ButtonStylesNonColor> = {
  height: px(spacingBase * 5), // 40px
};
const largeButtonStyles: Partial<ButtonStylesNonColor> = {
  height: px(spacingBase * 6), // 48px
};

const primarySmallDefault: ButtonStylesNonColor = {
  ...(baseButtonStyles as ButtonStylesNonColor),
  ...smallButtonStyles,
};

const primarySmallDisabled: ButtonStylesNonColor = {
  ...primarySmallDefault,
  ...disabledButtonStyles,
};

const primaryMediumDefault: ButtonStylesNonColor = {
  ...(baseButtonStyles as ButtonStylesNonColor),
  ...mediumButtonStyles,
};

const primaryMediumDisabled: ButtonStylesNonColor = {
  ...primaryMediumDefault,
  ...disabledButtonStyles,
};

const primaryLargeDefault: ButtonStylesNonColor = {
  ...(baseButtonStyles as ButtonStylesNonColor),
  ...largeButtonStyles,
};

const primaryLargeDisabled: ButtonStylesNonColor = {
  ...primaryLargeDefault,
  ...disabledButtonStyles,
};

const secondarySmallDefault: ButtonStylesNonColor = {
  ...(baseButtonStyles as ButtonStylesNonColor),
  ...smallButtonStyles,
};

const secondarySmallDisabled: ButtonStylesNonColor = {
  ...secondarySmallDefault,
  ...disabledButtonStyles,
};

const secondaryMediumDefault: ButtonStylesNonColor = {
  ...(baseButtonStyles as ButtonStylesNonColor),
  ...mediumButtonStyles,
};

const secondaryMediumDisabled: ButtonStylesNonColor = {
  ...secondaryMediumDefault,
  ...disabledButtonStyles,
};

const secondaryLargeDefault: ButtonStylesNonColor = {
  ...(baseButtonStyles as ButtonStylesNonColor),
  ...largeButtonStyles,
  borderWidth: "2px",
};

const secondaryLargeDisabled: ButtonStylesNonColor = {
  ...secondaryLargeDefault,
  ...disabledButtonStyles,
};

const tertiaryDefault: ButtonStylesNonColor = {
  ...(baseButtonStyles as ButtonStylesNonColor),
  height: "auto",
  padding: 0,
  paddingBottom: 2,
  borderWidth: 0,
  borderBottomWidth: 2,
  borderRadius: 0,
  lineHeight: 1.333,
};

const tertiaryHover: ButtonStylesNonColor = {
  ...tertiaryDefault,
  opacity: 0.5,
};

const tertiaryDisabled: ButtonStylesNonColor = {
  ...tertiaryDefault,
  ...disabledButtonStyles,
};

export { ButtonStyles } from "./types";

export const getButtonStyles = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): ButtonStyles => {
  const palette = getButtonPalette(colorScheme, backdrop);
  return {
    primary: {
      large: {
        default: { ...primaryLargeDefault, ...palette.primary.default },
        hover: { ...primaryLargeDefault, ...palette.primary.hover },
        disabled: { ...primaryLargeDisabled, ...palette.primary.disabled },
      },
      medium: {
        default: { ...primaryMediumDefault, ...palette.primary.default },
        hover: { ...primaryMediumDefault, ...palette.primary.hover },
        disabled: { ...primaryMediumDisabled, ...palette.primary.disabled },
      },
      small: {
        default: { ...primarySmallDefault, ...palette.primary.default },
        hover: { ...primarySmallDefault, ...palette.primary.hover },
        disabled: { ...primarySmallDisabled, ...palette.primary.disabled },
      },
    },
    secondary: {
      large: {
        default: { ...secondaryLargeDefault, ...palette.secondary.default },
        hover: { ...secondaryLargeDefault, ...palette.secondary.hover },
        disabled: { ...secondaryLargeDisabled, ...palette.secondary.disabled },
      },
      medium: {
        default: { ...secondaryMediumDefault, ...palette.secondary.default },
        hover: { ...secondaryMediumDefault, ...palette.secondary.hover },
        disabled: { ...secondaryMediumDisabled, ...palette.secondary.disabled },
      },
      small: {
        default: { ...secondarySmallDefault, ...palette.secondary.default },
        hover: { ...secondarySmallDefault, ...palette.secondary.hover },
        disabled: { ...secondarySmallDisabled, ...palette.secondary.disabled },
      },
    },
    tertiary: {
      large: {
        default: { ...tertiaryDefault, ...palette.tertiary.default },
        hover: { ...tertiaryHover, ...palette.tertiary.hover },
        disabled: { ...tertiaryDisabled, ...palette.tertiary.disabled },
      },
      medium: {
        default: { ...tertiaryDefault, ...palette.tertiary.default },
        hover: { ...tertiaryHover, ...palette.tertiary.hover },
        disabled: { ...tertiaryDisabled, ...palette.tertiary.disabled },
      },
      small: {
        default: { ...tertiaryDefault, ...palette.tertiary.default },
        hover: { ...tertiaryHover, ...palette.tertiary.hover },
        disabled: { ...tertiaryDisabled, ...palette.tertiary.disabled },
      },
    },
  };
};
