import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { ButtonPalette } from "./types";
import { ColorScheme, BackdropLevel } from "../types";

const lightModeLevel0 = {
  primary: {
    default: {
      color: colors.midnight,
      backgroundColor: colors.cyan,
      borderColor: colors.transparent,
    },
    hover: {
      color: colors.midnight,
      backgroundColor: "#accafd", // this background color replaces using opacity, but is not yet documented by UX
      borderColor: colors.transparent,
    },
    disabled: {
      color: colors.midnight,
      backgroundColor: colors.cyan,
      borderColor: colors.transparent,
    },
  },
  secondary: {
    default: {
      color: colors.white,
      backgroundColor: colors.transparent,
      borderColor: colors.cyan,
    },
    hover: {
      color: colors.white,
      backgroundColor: colors.transparent,
      borderColor: colors.white,
    },
    disabled: {
      color: colors.white,
      backgroundColor: colors.transparent,
      borderColor: colors.cyan,
    },
  },
  tertiary: {
    default: {
      color: colors.white,
      backgroundColor: colors.transparent,
      borderColor: colors.cyan,
    },
    hover: {
      color: colors.white,
      backgroundColor: colors.transparent,
      borderColor: colors.cyan,
    },
    disabled: {
      color: colors.white,
      backgroundColor: colors.transparent,
      borderColor: colors.cyan,
    },
  },
};

const lightModeLevel2 = {
  ...lightModeLevel0,
  secondary: {
    default: {
      ...lightModeLevel0.secondary.default,
      color: colors.midnight,
    },
    hover: {
      ...lightModeLevel0.secondary.hover,
      color: colors.midnight,
      borderColor: colors.midnight,
    },
    disabled: {
      ...lightModeLevel0.secondary.disabled,
      color: colors.midnight,
    },
  },
  tertiary: {
    default: {
      ...lightModeLevel0.tertiary.default,
      color: colors.midnight,
    },
    hover: {
      ...lightModeLevel0.tertiary.hover,
      color: colors.midnight,
    },
    disabled: {
      ...lightModeLevel0.tertiary.disabled,
      color: colors.midnight,
    },
  },
};

const light = {
  level0: lightModeLevel0,
  level1: lightModeLevel0,
  level2: lightModeLevel2,
  level3: lightModeLevel2,
  level4: lightModeLevel2,
  level5: lightModeLevel2,
};

const palettes = { light, dark: light };

export const getButtonPalette = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): ButtonPalette => {
  return palettes[colorScheme][backdrop];
};
