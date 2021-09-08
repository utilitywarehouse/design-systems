import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { ColorScheme, BackdropLevel } from "../types";
import { Backdrops, BackdropStyles } from "./types";

const backdrops: Backdrops = {
  light: {
    level0: {
      backgroundColor: colors.midnight,
    },
    level1: {
      backgroundColor: colors.darkTint,
    },
    level2: {
      backgroundColor: colors.midTint,
    },
    level3: {
      backgroundColor: colors.lightTint,
    },
    level4: {
      backgroundColor: colors.whiteOwl,
    },
    level5: {
      backgroundColor: colors.white,
    },
  },
  dark: {
    level0: {
      backgroundColor: colors.codGray,
    },
    level1: {
      backgroundColor: colors.codGray,
    },
    level2: {
      backgroundColor: colors.codGray,
    },
    level3: {
      backgroundColor: colors.codGray,
    },
    level4: {
      backgroundColor: colors.codGray,
    },
    level5: {
      backgroundColor: colors.codGray,
    },
  },
};

export { BackdropStyles } from "./types";

export const getBackdropStyles = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): BackdropStyles => {
  return backdrops[colorScheme][backdrop];
};
