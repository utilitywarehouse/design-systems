import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import hexToRgba from "hex-to-rgba";
import { BackdropLevel } from "./backdrop";
import { BUTTON_KEY } from "./button";
import { ButtonVariant, ButtonState, ButtonStylesColor } from "./button/types";
import { ColorScheme } from "./colorScheme";
import {
  TypographyVariant,
  TypographyColor,
  TYPOGRAPHY_KEY,
} from "./typography";

export interface Palette {
  [BUTTON_KEY]: {
    [key in ButtonVariant]: {
      [key in ButtonState]: ButtonStylesColor;
    };
  };
  [TYPOGRAPHY_KEY]: {
    [key in TypographyVariant]: {
      [key in TypographyColor]: string;
    };
  };
}

export type PaletteGroup = {
  [key in ColorScheme]: {
    [key in BackdropLevel]: Palette;
  };
};

export const lightModeLevel0: Palette = {
  [BUTTON_KEY]: {
    primary: {
      idle: {
        color: colors.midnight,
        backgroundColor: colors.cyan,
        borderColor: colors.transparent,
      },
      active: {
        color: colors.midnight,
        backgroundColor: hexToRgba(colors.cyan, 0.5),
        borderColor: colors.transparent,
      },
      disabled: {
        color: colors.midnight,
        backgroundColor: colors.cyan,
        borderColor: colors.transparent,
      },
    },
    secondary: {
      idle: {
        color: colors.midnight,
        backgroundColor: colors.transparent,
        borderColor: colors.cyan,
      },
      active: {
        color: colors.midnight,
        backgroundColor: colors.transparent,
        borderColor: colors.midnight,
      },
      disabled: {
        color: colors.midnight,
        backgroundColor: colors.transparent,
        borderColor: colors.cyan,
      },
    },
    tertiary: {
      idle: {
        color: colors.midnight,
        backgroundColor: colors.transparent,
        borderColor: colors.cyan,
      },
      active: {
        color: colors.midnight,
        backgroundColor: colors.transparent,
        borderColor: colors.cyan,
      },
      disabled: {
        color: colors.midnight,
        backgroundColor: colors.transparent,
        borderColor: colors.cyan,
      },
    },
  },
  [TYPOGRAPHY_KEY]: {
    h1: {
      default: colors.white,
      success: colors.apple,
      error: colors.rose,
    },
    h2: {
      default: colors.white,
      success: colors.apple,
      error: colors.rose,
    },
    h3: {
      default: colors.white,
      success: colors.apple,
      error: colors.rose,
    },
    h4: {
      default: colors.white,
      success: colors.apple,
      error: colors.rose,
    },
    h5: {
      default: colors.white,
      success: colors.apple,
      error: colors.rose,
    },
    body: {
      default: colors.white,
      success: colors.apple,
      error: colors.rose,
    },
    bodySmall: {
      default: colors.white,
      success: colors.apple,
      error: colors.rose,
    },
    label: {
      default: colors.white,
      success: colors.apple,
      error: colors.rose,
    },
  },
};

export const lightModeLevel1 = lightModeLevel0;

export const lightModeLevel2: Palette = {
  [BUTTON_KEY]: {
    primary: {
      idle: {
        color: colors.midnight,
        backgroundColor: colors.cyan,
        borderColor: colors.cyan,
      },
      active: {
        color: colors.midnight,
        backgroundColor: hexToRgba(colors.cyan, 0.5),
        borderColor: colors.transparent,
      },
      disabled: {
        color: colors.midnight,
        backgroundColor: colors.cyan,
        borderColor: colors.transparent,
      },
    },
    secondary: {
      idle: {
        color: colors.midnight,
        backgroundColor: colors.transparent,
        borderColor: colors.cyan,
      },
      active: {
        color: colors.midnight,
        backgroundColor: colors.transparent,
        borderColor: hexToRgba(colors.cyan, 0.5),
      },
      disabled: {
        color: colors.midnight,
        backgroundColor: colors.transparent,
        borderColor: colors.cyan,
      },
    },
    tertiary: {
      idle: {
        color: colors.midnight,
        backgroundColor: colors.transparent,
        borderColor: colors.cyan,
      },
      active: {
        color: colors.midnight,
        backgroundColor: colors.transparent,
        borderColor: colors.cyan,
      },
      disabled: {
        color: colors.midnight,
        backgroundColor: colors.transparent,
        borderColor: colors.cyan,
      },
    },
  },
  [TYPOGRAPHY_KEY]: {
    h1: {
      default: colors.purple,
      success: colors.jewel,
      error: colors.maroonFlush,
    },
    h2: {
      default: colors.purple,
      success: colors.jewel,
      error: colors.maroonFlush,
    },
    h3: {
      default: colors.purple,
      success: colors.jewel,
      error: colors.maroonFlush,
    },
    h4: {
      default: colors.purple,
      success: colors.jewel,
      error: colors.maroonFlush,
    },
    h5: {
      default: colors.purple,
      success: colors.jewel,
      error: colors.maroonFlush,
    },
    body: {
      default: colors.midnight,
      success: colors.jewel,
      error: colors.maroonFlush,
    },
    bodySmall: {
      default: colors.midnight,
      success: colors.jewel,
      error: colors.maroonFlush,
    },
    label: {
      default: colors.midnight,
      success: colors.jewel,
      error: colors.maroonFlush,
    },
  },
};

export const lightModeLevel3 = lightModeLevel2;

export const paletteGroup: PaletteGroup = {
  light: {
    level0: lightModeLevel0,
    level1: lightModeLevel1,
    level2: lightModeLevel2,
    level3: lightModeLevel3,
  },
  // DO NOT USE: this is placeholder for dark mode implemetation.
  dark: {
    level0: lightModeLevel0,
    level1: lightModeLevel1,
    level2: lightModeLevel2,
    level3: lightModeLevel3,
  },
};
