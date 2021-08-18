import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { TypographyPalette } from "./types";
import { ColorScheme, BackdropLevel } from "../types";

const lightModeLevel0: TypographyPalette = {
  h1: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  h2: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  h3: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  h4: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  h5: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  body: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  bodySmall: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  label: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  headline: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  subheading: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  footnote: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  caption: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
  interactive: {
    default: {
      color: colors.white,
    },
    success: {
      color: colors.apple,
    },
    error: {
      color: colors.rose,
    },
  },
};

const lightModeLevel1 = lightModeLevel0;

const lightModeLevel2: TypographyPalette = {
  h1: {
    default: {
      color: colors.purple,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  h2: {
    default: {
      color: colors.purple,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  h3: {
    default: {
      color: colors.purple,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  h4: {
    default: {
      color: colors.purple,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  h5: {
    default: {
      color: colors.purple,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  body: {
    default: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  bodySmall: {
    default: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  label: {
    default: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  headline: {
    default: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  subheading: {
    default: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  footnote: {
    default: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  caption: {
    default: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
    },
  },
  interactive: {
    default: {
      color: colors.midnight,
    },
    success: {
      color: colors.jewel,
    },
    error: {
      color: colors.maroonFlush,
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

export const getTypographyPalette = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): TypographyPalette => {
  return palettes[colorScheme][backdrop];
};
