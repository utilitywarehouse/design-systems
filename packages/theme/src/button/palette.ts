import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { TinyColor } from "@ctrl/tinycolor";
import { ButtonPalette } from "./types";
import { ColorScheme, BackdropLevel } from "../types";

const lightModeLevel0 = {
  primary: {
    idle: {
      color: colors.midnight,
      backgroundColor: colors.cyan,
      borderColor: colors.transparent,
    },
    active: {
      color: colors.midnight,
      backgroundColor: new TinyColor(colors.cyan).lighten(15).toHexString(),
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
      color: colors.white,
      backgroundColor: colors.transparent,
      borderColor: colors.cyan,
    },
    active: {
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
    idle: {
      color: colors.white,
      backgroundColor: colors.transparent,
      borderColor: colors.cyan,
    },
    active: {
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

const lightModeLevel1 = lightModeLevel0;

const lightModeLevel2 = {
  ...lightModeLevel0,
  secondary: {
    idle: {
      ...lightModeLevel0.secondary.idle,
      color: colors.midnight,
    },
    active: {
      ...lightModeLevel0.secondary.active,
      color: colors.midnight,
      borderColor: colors.midnight,
    },
    disabled: {
      ...lightModeLevel0.secondary.disabled,
      color: colors.midnight,
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
};

const lightModeLevel3 = lightModeLevel2;
const lightModeLevel4 = lightModeLevel3;
const lightModeLevel5 = lightModeLevel4;

const palettes = {
  light: {
    level0: lightModeLevel0,
    level1: lightModeLevel1,
    level2: lightModeLevel2,
    level3: lightModeLevel3,
    level4: lightModeLevel4,
    level5: lightModeLevel5,
  },
  dark: {
    level0: lightModeLevel0,
    level1: lightModeLevel1,
    level2: lightModeLevel2,
    level3: lightModeLevel3,
    level4: lightModeLevel4,
    level5: lightModeLevel5,
  },
};

export const getButtonPalette = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): ButtonPalette => {
  return palettes[colorScheme][backdrop];
};
