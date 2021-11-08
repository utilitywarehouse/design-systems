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

const commonButtonStyles: Partial<ButtonStylesNonColor> = {
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

const commonDisabledStyles: Partial<ButtonStylesNonColor> = {
  opacity: 0.5,
};

const primaryRegularDefault: ButtonStylesNonColor = {
  ...(commonButtonStyles as ButtonStylesNonColor),
  height: "40px",
};

const primaryRegularDisabled: ButtonStylesNonColor = {
  ...primaryRegularDefault,
  ...commonDisabledStyles,
};

const primaryLargeDefault: ButtonStylesNonColor = {
  ...(commonButtonStyles as ButtonStylesNonColor),
  height: "48px",
};

const primaryLargeDisabled: ButtonStylesNonColor = {
  ...primaryLargeDefault,
  ...commonDisabledStyles,
};

const secondaryRegularDefault: ButtonStylesNonColor = {
  ...(commonButtonStyles as ButtonStylesNonColor),
  height: "40px",
};

const secondaryRegularDisabled: ButtonStylesNonColor = {
  ...secondaryRegularDefault,
  ...commonDisabledStyles,
};

const secondaryLargeDefault: ButtonStylesNonColor = {
  ...(commonButtonStyles as ButtonStylesNonColor),
  borderWidth: "2px",
};

const secondaryLargeDisabled: ButtonStylesNonColor = {
  ...secondaryLargeDefault,
  ...commonDisabledStyles,
};

const tertiaryRegularDefault: ButtonStylesNonColor = {
  ...(commonButtonStyles as ButtonStylesNonColor),
  height: "auto",
  padding: 0,
  paddingBottom: 2,
  borderWidth: 0,
  borderBottomWidth: 2,
  borderRadius: 0,
  lineHeight: 1.333,
};

const tertiaryRegularHover: ButtonStylesNonColor = {
  ...tertiaryRegularDefault,
  opacity: 0.5,
};

const tertiaryRegularDisabled: ButtonStylesNonColor = {
  ...tertiaryRegularDefault,
  ...commonDisabledStyles,
};

const tertiaryLargeDefault: ButtonStylesNonColor = {
  ...tertiaryRegularDefault,
};

const tertiaryLargeHover: ButtonStylesNonColor = {
  ...tertiaryLargeDefault,
  opacity: 0.5,
};

const tertiaryLargeDisabled: ButtonStylesNonColor = {
  ...tertiaryLargeDefault,
  ...commonDisabledStyles,
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
      regular: {
        default: {
          ...primaryRegularDefault,
          ...buttonPalette.primary.default,
        },
        hover: {
          ...primaryRegularDefault,
          ...buttonPalette.primary.hover,
        },
        disabled: {
          ...primaryRegularDisabled,
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
      regular: {
        default: {
          ...secondaryRegularDefault,
          ...buttonPalette.secondary.default,
        },
        hover: {
          ...secondaryRegularDefault,
          ...buttonPalette.secondary.hover,
        },
        disabled: {
          ...secondaryRegularDisabled,
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
      regular: {
        default: {
          ...tertiaryRegularDefault,
          ...buttonPalette.tertiary.default,
        },
        hover: {
          ...tertiaryRegularHover,
          ...buttonPalette.tertiary.hover,
        },
        disabled: {
          ...tertiaryRegularDisabled,
          ...buttonPalette.tertiary.disabled,
        },
      },
    },
  };
};
