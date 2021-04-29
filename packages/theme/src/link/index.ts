import { ColorScheme, BackdropLevel } from "../types";
import { getLinkPalette } from "./palette";
import {
  desktopDefaultIdle,
  desktopDefaultHover,
  desktopActiveIdle,
  desktopActiveHover,
  desktopSecondaryIdle,
  desktopSecondaryHover,
  desktopDefaultDisabled,
  desktopActiveDisabled,
  desktopSecondaryDisabled,
} from "./desktop";
import {
  mobileDefaultIdle,
  mobileDefaultHover,
  mobileActiveIdle,
  mobileActiveHover,
  mobileSecondaryIdle,
  mobileSecondaryHover,
  mobileDefaultDisabled,
  mobileActiveDisabled,
  mobileSecondaryDisabled,
} from "./mobile";
import {
  tabletDefaultIdle,
  tabletDefaultHover,
  tabletActiveIdle,
  tabletActiveHover,
  tabletSecondaryIdle,
  tabletSecondaryHover,
  tabletDefaultDisabled,
  tabletActiveDisabled,
  tabletSecondaryDisabled,
} from "./tablet";
import { CommonLinkStyles, LinkStyles } from "./types";

const getCommonLinkStyles = (): CommonLinkStyles => ({
  desktop: {
    default: {
      idle: desktopDefaultIdle,
      hover: desktopDefaultHover,
      disabled: desktopDefaultDisabled,
    },
    active: {
      idle: desktopActiveIdle,
      hover: desktopActiveHover,
      disabled: desktopActiveDisabled,
    },
    secondary: {
      idle: desktopSecondaryIdle,
      hover: desktopSecondaryHover,
      disabled: desktopSecondaryDisabled,
    },
  },
  tablet: {
    default: {
      idle: tabletDefaultIdle,
      hover: tabletDefaultHover,
      disabled: tabletDefaultDisabled,
    },
    active: {
      idle: tabletActiveIdle,
      hover: tabletActiveHover,
      disabled: tabletActiveDisabled,
    },
    secondary: {
      idle: tabletSecondaryIdle,
      hover: tabletSecondaryHover,
      disabled: tabletSecondaryDisabled,
    },
  },
  mobile: {
    default: {
      idle: mobileDefaultIdle,
      hover: mobileDefaultHover,
      disabled: mobileDefaultDisabled,
    },
    active: {
      idle: mobileActiveIdle,
      hover: mobileActiveHover,
      disabled: mobileActiveDisabled,
    },
    secondary: {
      idle: mobileSecondaryIdle,
      hover: mobileSecondaryHover,
      disabled: mobileSecondaryDisabled,
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
        disabled: {
          ...commonLinkStyles.desktop.default.disabled,
          ...linkPalette.default.disabled,
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
        disabled: {
          ...commonLinkStyles.desktop.active.disabled,
          ...linkPalette.active.disabled,
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
        disabled: {
          ...commonLinkStyles.desktop.secondary.disabled,
          ...linkPalette.secondary.disabled,
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
        disabled: {
          ...commonLinkStyles.tablet.default.disabled,
          ...linkPalette.default.disabled,
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
        disabled: {
          ...commonLinkStyles.tablet.active.disabled,
          ...linkPalette.active.disabled,
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
        disabled: {
          ...commonLinkStyles.tablet.secondary.disabled,
          ...linkPalette.secondary.disabled,
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
        disabled: {
          ...commonLinkStyles.mobile.default.disabled,
          ...linkPalette.default.disabled,
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
        disabled: {
          ...commonLinkStyles.mobile.active.disabled,
          ...linkPalette.active.disabled,
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
        disabled: {
          ...commonLinkStyles.mobile.secondary.disabled,
          ...linkPalette.secondary.disabled,
        },
      },
    },
  };
};
