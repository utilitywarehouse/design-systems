import { ColorScheme, BackdropLevel } from "../types";
import { getLinkPalette } from "./palette";
import {
  desktopDefaultIdle,
  desktopDefaultHover,
  desktopActiveIdle,
  desktopActiveHover,
  desktopSecondaryIdle,
  desktopSecondaryHover,
} from "./desktop";
import {
  mobileDefaultIdle,
  mobileDefaultHover,
  mobileActiveIdle,
  mobileActiveHover,
  mobileSecondaryIdle,
  mobileSecondaryHover,
} from "./mobile";
import {
  tabletDefaultIdle,
  tabletDefaultHover,
  tabletActiveIdle,
  tabletActiveHover,
  tabletSecondaryIdle,
  tabletSecondaryHover,
} from "./tablet";
import { CommonLinkStyles, LinkStyles } from "./types";

const getCommonLinkStyles = (): CommonLinkStyles => ({
  desktop: {
    default: {
      idle: desktopDefaultIdle,
      hover: desktopDefaultHover,
    },
    active: {
      idle: desktopActiveIdle,
      hover: desktopActiveHover,
    },
    secondary: {
      idle: desktopSecondaryIdle,
      hover: desktopSecondaryHover,
    },
  },
  tablet: {
    default: {
      idle: tabletDefaultIdle,
      hover: tabletDefaultHover,
    },
    active: {
      idle: tabletActiveIdle,
      hover: tabletActiveHover,
    },
    secondary: {
      idle: tabletSecondaryIdle,
      hover: tabletSecondaryHover,
    },
  },
  mobile: {
    default: {
      idle: mobileDefaultIdle,
      hover: mobileDefaultHover,
    },
    active: {
      idle: mobileActiveIdle,
      hover: mobileActiveHover,
    },
    secondary: {
      idle: mobileSecondaryIdle,
      hover: mobileSecondaryHover,
    },
  },
});

export { LinkStyles } from "./types";

export const getLinkStyles = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): LinkStyles => {
  const commonLinkStyles = getCommonLinkStyles();
  const linkPalette = getLinkPalette(colorScheme, backdrop);
  return {
    desktop: {
      default: {
        idle: {
          ...commonLinkStyles.desktop.default.idle,
          ...linkPalette.default.idle,
        },
        hover: {
          ...commonLinkStyles.desktop.default.hover,
          ...linkPalette.default.hover,
        },
      },
      active: {
        idle: {
          ...commonLinkStyles.desktop.active.idle,
          ...linkPalette.active.idle,
        },
        hover: {
          ...commonLinkStyles.desktop.active.hover,
          ...linkPalette.active.hover,
        },
      },
      secondary: {
        idle: {
          ...commonLinkStyles.desktop.secondary.idle,
          ...linkPalette.secondary.idle,
        },
        hover: {
          ...commonLinkStyles.desktop.secondary.hover,
          ...linkPalette.secondary.hover,
        },
      },
    },
    tablet: {
      default: {
        idle: {
          ...commonLinkStyles.tablet.default.idle,
          ...linkPalette.default.idle,
        },
        hover: {
          ...commonLinkStyles.tablet.default.hover,
          ...linkPalette.default.hover,
        },
      },
      active: {
        idle: {
          ...commonLinkStyles.tablet.active.idle,
          ...linkPalette.active.idle,
        },
        hover: {
          ...commonLinkStyles.tablet.active.hover,
          ...linkPalette.active.hover,
        },
      },
      secondary: {
        idle: {
          ...commonLinkStyles.tablet.secondary.idle,
          ...linkPalette.secondary.idle,
        },
        hover: {
          ...commonLinkStyles.tablet.secondary.hover,
          ...linkPalette.secondary.hover,
        },
      },
    },
    mobile: {
      default: {
        idle: {
          ...commonLinkStyles.mobile.default.idle,
          ...linkPalette.default.idle,
        },
        hover: {
          ...commonLinkStyles.mobile.default.hover,
          ...linkPalette.default.hover,
        },
      },
      active: {
        idle: {
          ...commonLinkStyles.mobile.active.idle,
          ...linkPalette.active.idle,
        },
        hover: {
          ...commonLinkStyles.mobile.active.hover,
          ...linkPalette.active.hover,
        },
      },
      secondary: {
        idle: {
          ...commonLinkStyles.mobile.secondary.idle,
          ...linkPalette.secondary.idle,
        },
        hover: {
          ...commonLinkStyles.mobile.secondary.hover,
          ...linkPalette.secondary.hover,
        },
      },
    },
  };
};
