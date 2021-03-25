import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import hexToRgba from "hex-to-rgba";
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
};

const lightModeLevel1 = lightModeLevel0;

const lightModeLevel2 = {
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
};

const lightModeLevel3 = lightModeLevel2;

const palettes = {
  light: {
    level0: lightModeLevel0,
    level1: lightModeLevel1,
    level2: lightModeLevel2,
    level3: lightModeLevel3,
  },
  dark: {
    level0: lightModeLevel0,
    level1: lightModeLevel1,
    level2: lightModeLevel2,
    level3: lightModeLevel3,
  },
};

export const getButtonPalette = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): ButtonPalette => {
  return palettes[colorScheme][backdrop];
};
