import { ColorScheme, BackdropLevel } from "../types";
import { getButtonPalette } from "./palette";
import { ButtonStyles, ButtonStylesNonColor } from "./types";
import {
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { duration, easingFunction } from "../transitions";

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
  paddingLeft: "32px",
  paddingRight: "32px",
  borderStyle: "solid",
  borderWidth: 0,
  borderRadius: "32px",
  fontSize: 18,
  lineHeight: 1,
};

const disabledButtonStyles: Partial<ButtonStylesNonColor> = { opacity: 0.5 };

const mediumButtonStyles: Partial<ButtonStylesNonColor> = { height: "40px" };

const largeButtonStyles: Partial<ButtonStylesNonColor> = { height: "48px" };

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

const tertiaryMediumDefault: ButtonStylesNonColor = {
  ...(baseButtonStyles as ButtonStylesNonColor),
  height: "auto",
  padding: 0,
  paddingBottom: 2,
  borderWidth: 0,
  borderBottomWidth: 2,
  borderRadius: 0,
  lineHeight: 1.333,
};

const tertiaryMediumHover: ButtonStylesNonColor = {
  ...tertiaryMediumDefault,
  opacity: 0.5,
};

const tertiaryMediumDisabled: ButtonStylesNonColor = {
  ...tertiaryMediumDefault,
  ...disabledButtonStyles,
};

const tertiaryLargeDefault: ButtonStylesNonColor = {
  ...tertiaryMediumDefault,
};

const tertiaryLargeHover: ButtonStylesNonColor = {
  ...tertiaryLargeDefault,
  opacity: 0.5,
};

const tertiaryLargeDisabled: ButtonStylesNonColor = {
  ...tertiaryLargeDefault,
  ...disabledButtonStyles,
};

export { ButtonStyles } from "./types";

export const getButtonStyles = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): ButtonStyles => {
  const buttonPalette = getButtonPalette(colorScheme, backdrop);
  return {
    primary: {
      large: {
        default: {
          ...primaryLargeDefault,
          ...buttonPalette.primary.default,
        },
        hover: {
          ...primaryLargeDefault,
          ...buttonPalette.primary.hover,
        },
        disabled: {
          ...primaryLargeDisabled,
          ...buttonPalette.primary.disabled,
        },
      },
      medium: {
        default: {
          ...primaryMediumDefault,
          ...buttonPalette.primary.default,
        },
        hover: {
          ...primaryMediumDefault,
          ...buttonPalette.primary.hover,
        },
        disabled: {
          ...primaryMediumDisabled,
          ...buttonPalette.primary.disabled,
        },
      },
    },
    secondary: {
      large: {
        default: {
          ...secondaryLargeDefault,
          ...buttonPalette.secondary.default,
        },
        hover: {
          ...secondaryLargeDefault,
          ...buttonPalette.secondary.hover,
        },
        disabled: {
          ...secondaryLargeDisabled,
          ...buttonPalette.secondary.disabled,
        },
      },
      medium: {
        default: {
          ...secondaryMediumDefault,
          ...buttonPalette.secondary.default,
        },
        hover: {
          ...secondaryMediumDefault,
          ...buttonPalette.secondary.hover,
        },
        disabled: {
          ...secondaryMediumDisabled,
          ...buttonPalette.secondary.disabled,
        },
      },
    },
    tertiary: {
      large: {
        default: {
          ...tertiaryLargeDefault,
          ...buttonPalette.tertiary.default,
        },
        hover: {
          ...tertiaryLargeHover,
          ...buttonPalette.tertiary.hover,
        },
        disabled: {
          ...tertiaryLargeDisabled,
          ...buttonPalette.tertiary.disabled,
        },
      },
      medium: {
        default: {
          ...tertiaryMediumDefault,
          ...buttonPalette.tertiary.default,
        },
        hover: {
          ...tertiaryMediumHover,
          ...buttonPalette.tertiary.hover,
        },
        disabled: {
          ...tertiaryMediumDisabled,
          ...buttonPalette.tertiary.disabled,
        },
      },
    },
  };
};
