import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { TextFieldPalette } from "./types";
import { ColorScheme, BackdropLevel } from "../types";

const lightModeLevel0: TextFieldPalette = {
  default: {
    idle: {
      wrapper: {},
      input: {
        color: colors.midnight,
        backgroundColor: colors.white,
        borderColor: `${colors.midnight}1A`,
        borderBottomColor: colors.purple,
      },
      label: {
        color: colors.midnight,
      },
      helperText: {
        color: colors.midnight,
      },
    },
    hover: {
      wrapper: {},
      input: {
        color: colors.midnight,
        backgroundColor: colors.white,
        borderColor: `${colors.midnight}1A`,
        borderBottomColor: colors.blueRibbon,
      },
      label: {
        color: colors.midnight,
      },
      helperText: {
        color: colors.midnight,
      },
    },
    focus: {
      wrapper: {},
      input: {
        color: colors.midnight,
        backgroundColor: colors.white,
        borderColor: colors.blueRibbon,
        borderBottomColor: colors.blueRibbon,
      },
      label: {
        color: colors.midnight,
      },
      helperText: {
        color: colors.midnight,
      },
    },
  },
  success: {
    idle: {
      wrapper: {},
      input: {
        color: colors.midnight,
        backgroundColor: colors.white,
        borderColor: `${colors.midnight}10`,
        borderBottomColor: colors.jewel,
      },
      label: {
        color: colors.midnight,
      },
      helperText: {
        color: colors.midnight,
      },
    },
    hover: {
      wrapper: {},
      input: {
        color: colors.midnight,
        backgroundColor: colors.white,
        borderColor: `${colors.midnight}10`,
        borderBottomColor: colors.jewel,
      },
      label: {
        color: colors.midnight,
      },
      helperText: {
        color: colors.midnight,
      },
    },
    focus: {
      wrapper: {},
      input: {
        color: colors.midnight,
        backgroundColor: colors.white,
        borderColor: colors.jewel,
        borderBottomColor: colors.jewel,
      },
      label: {
        color: colors.midnight,
      },
      helperText: {
        color: colors.midnight,
      },
    },
  },
  error: {
    idle: {
      wrapper: {},
      input: {
        color: colors.midnight,
        backgroundColor: colors.white,
        borderColor: `${colors.midnight}10`,
        borderBottomColor: colors.maroonFlush,
      },
      label: {
        color: colors.midnight,
      },
      helperText: {
        color: colors.maroonFlush,
      },
    },
    hover: {
      wrapper: {},
      input: {
        color: colors.midnight,
        backgroundColor: colors.white,
        borderColor: `${colors.midnight}10`,
        borderBottomColor: colors.maroonFlush,
      },
      label: {
        color: colors.midnight,
      },
      helperText: {
        color: colors.maroonFlush,
      },
    },
    focus: {
      wrapper: {},
      input: {
        color: colors.midnight,
        backgroundColor: colors.white,
        borderColor: colors.maroonFlush,
        borderBottomColor: colors.maroonFlush,
      },
      label: {
        color: colors.midnight,
      },
      helperText: {
        color: colors.maroonFlush,
      },
    },
  },
  disabled: {
    idle: {
      wrapper: {},
      input: {
        color: colors.midnight,
        backgroundColor: `${colors.midnight}05`,
        borderColor: "transparent",
        borderBottomColor: `${colors.purple}05`,
      },
      label: {
        color: `${colors.midnight}40`,
      },
      helperText: {
        color: colors.midnight,
      },
    },
    hover: {
      wrapper: {},
      input: {
        color: colors.midnight,
        backgroundColor: `${colors.midnight}05`,
        borderColor: "transparent",
        borderBottomColor: `${colors.purple}05`,
      },
      label: {
        color: `${colors.midnight}40`,
      },
      helperText: {
        color: colors.midnight,
      },
    },
    focus: {
      wrapper: {},
      input: {
        color: colors.midnight,
        backgroundColor: `${colors.midnight}05`,
        borderColor: "transparent",
        borderBottomColor: `${colors.purple}05`,
      },
      label: {
        color: `${colors.midnight}40`,
      },
      helperText: {
        color: colors.midnight,
      },
    },
  },
};

const lightModeLevel1 = lightModeLevel0;
const lightModeLevel2 = lightModeLevel1;
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

export const getTextFieldPalette = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): TextFieldPalette => {
  return palettes[colorScheme][backdrop];
};
