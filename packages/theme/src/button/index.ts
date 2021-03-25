import { ColorScheme, BackdropLevel } from "../types";
import { getButtonPalette } from "./palette";
import {
  desktopPrimaryLargeIdle,
  desktopPrimaryLargeActive,
  desktopPrimaryLargeDisabled,
  desktopPrimaryRegularIdle,
  desktopPrimaryRegularActive,
  desktopPrimaryRegularDisabled,
  desktopSecondaryLargeIdle,
  desktopSecondaryLargeActive,
  desktopSecondaryLargeDisabled,
  desktopSecondaryRegularIdle,
  desktopSecondaryRegularActive,
  desktopSecondaryRegularDisabled,
  desktopTertiaryLargeActive,
  desktopTertiaryLargeDisabled,
  desktopTertiaryLargeIdle,
  desktopTertiaryRegularActive,
  desktopTertiaryRegularDisabled,
  desktopTertiaryRegularIdle,
} from "./desktop";
import {
  mobilePrimaryLargeIdle,
  mobilePrimaryLargeActive,
  mobilePrimaryLargeDisabled,
  mobilePrimaryRegularIdle,
  mobilePrimaryRegularActive,
  mobilePrimaryRegularDisabled,
  mobileSecondaryLargeIdle,
  mobileSecondaryLargeActive,
  mobileSecondaryLargeDisabled,
  mobileSecondaryRegularIdle,
  mobileSecondaryRegularActive,
  mobileSecondaryRegularDisabled,
  mobileTertiaryLargeActive,
  mobileTertiaryLargeDisabled,
  mobileTertiaryLargeIdle,
  mobileTertiaryRegularActive,
  mobileTertiaryRegularDisabled,
  mobileTertiaryRegularIdle,
} from "./mobile";
import {
  tabletPrimaryLargeIdle,
  tabletPrimaryLargeActive,
  tabletPrimaryLargeDisabled,
  tabletPrimaryRegularIdle,
  tabletPrimaryRegularActive,
  tabletPrimaryRegularDisabled,
  tabletSecondaryLargeIdle,
  tabletSecondaryLargeActive,
  tabletSecondaryLargeDisabled,
  tabletSecondaryRegularIdle,
  tabletSecondaryRegularActive,
  tabletSecondaryRegularDisabled,
  tabletTertiaryLargeActive,
  tabletTertiaryLargeDisabled,
  tabletTertiaryLargeIdle,
  tabletTertiaryRegularActive,
  tabletTertiaryRegularDisabled,
  tabletTertiaryRegularIdle,
} from "./tablet";
import { CommonButtonStyles, ButtonStyles } from "./types";

const getCommonButtonStyles = (): CommonButtonStyles => ({
  desktop: {
    primary: {
      large: {
        idle: desktopPrimaryLargeIdle,
        active: desktopPrimaryLargeActive,
        disabled: desktopPrimaryLargeDisabled,
      },
      regular: {
        idle: desktopPrimaryRegularIdle,
        active: desktopPrimaryRegularActive,
        disabled: desktopPrimaryRegularDisabled,
      },
    },
    secondary: {
      large: {
        idle: desktopSecondaryLargeIdle,
        active: desktopSecondaryLargeActive,
        disabled: desktopSecondaryLargeDisabled,
      },
      regular: {
        idle: desktopSecondaryRegularIdle,
        active: desktopSecondaryRegularActive,
        disabled: desktopSecondaryRegularDisabled,
      },
    },
    tertiary: {
      large: {
        idle: desktopTertiaryLargeIdle,
        active: desktopTertiaryLargeActive,
        disabled: desktopTertiaryLargeDisabled,
      },
      regular: {
        idle: desktopTertiaryRegularIdle,
        active: desktopTertiaryRegularActive,
        disabled: desktopTertiaryRegularDisabled,
      },
    },
  },
  tablet: {
    primary: {
      large: {
        idle: tabletPrimaryLargeIdle,
        active: tabletPrimaryLargeActive,
        disabled: tabletPrimaryLargeDisabled,
      },
      regular: {
        idle: tabletPrimaryRegularIdle,
        active: tabletPrimaryRegularActive,
        disabled: tabletPrimaryRegularDisabled,
      },
    },
    secondary: {
      large: {
        idle: tabletSecondaryLargeIdle,
        active: tabletSecondaryLargeActive,
        disabled: tabletSecondaryLargeDisabled,
      },
      regular: {
        idle: tabletSecondaryRegularIdle,
        active: tabletSecondaryRegularActive,
        disabled: tabletSecondaryRegularDisabled,
      },
    },
    tertiary: {
      large: {
        idle: tabletTertiaryLargeIdle,
        active: tabletTertiaryLargeActive,
        disabled: tabletTertiaryLargeDisabled,
      },
      regular: {
        idle: tabletTertiaryRegularIdle,
        active: tabletTertiaryRegularActive,
        disabled: tabletTertiaryRegularDisabled,
      },
    },
  },
  mobile: {
    primary: {
      large: {
        idle: mobilePrimaryLargeIdle,
        active: mobilePrimaryLargeActive,
        disabled: mobilePrimaryLargeDisabled,
      },
      regular: {
        idle: mobilePrimaryRegularIdle,
        active: mobilePrimaryRegularActive,
        disabled: mobilePrimaryRegularDisabled,
      },
    },
    secondary: {
      large: {
        idle: mobileSecondaryLargeIdle,
        active: mobileSecondaryLargeActive,
        disabled: mobileSecondaryLargeDisabled,
      },
      regular: {
        idle: mobileSecondaryRegularIdle,
        active: mobileSecondaryRegularActive,
        disabled: mobileSecondaryRegularDisabled,
      },
    },
    tertiary: {
      large: {
        idle: mobileTertiaryLargeIdle,
        active: mobileTertiaryLargeActive,
        disabled: mobileTertiaryLargeDisabled,
      },
      regular: {
        idle: mobileTertiaryRegularIdle,
        active: mobileTertiaryRegularActive,
        disabled: mobileTertiaryRegularDisabled,
      },
    },
  },
});

export { ButtonStyles } from "./types";

export const getButtonStyles = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): ButtonStyles => {
  const commonButtonStyles = getCommonButtonStyles();
  const buttonPalette = getButtonPalette(colorScheme, backdrop);
  return {
    desktop: {
      primary: {
        large: {
          idle: {
            ...commonButtonStyles.desktop.primary.large.idle,
            ...buttonPalette.primary.idle,
          },
          active: {
            ...commonButtonStyles.desktop.primary.large.active,
            ...buttonPalette.primary.active,
          },
          disabled: {
            ...commonButtonStyles.desktop.primary.large.disabled,
            ...buttonPalette.primary.disabled,
          },
        },
        regular: {
          idle: {
            ...commonButtonStyles.desktop.primary.regular.idle,
            ...buttonPalette.primary.idle,
          },
          active: {
            ...commonButtonStyles.desktop.primary.regular.active,
            ...buttonPalette.primary.active,
          },
          disabled: {
            ...commonButtonStyles.desktop.primary.regular.disabled,
            ...buttonPalette.primary.disabled,
          },
        },
      },
      secondary: {
        large: {
          idle: {
            ...commonButtonStyles.desktop.secondary.large.idle,
            ...buttonPalette.secondary.idle,
          },
          active: {
            ...commonButtonStyles.desktop.secondary.large.active,
            ...buttonPalette.secondary.active,
          },
          disabled: {
            ...commonButtonStyles.desktop.secondary.large.disabled,
            ...buttonPalette.secondary.disabled,
          },
        },
        regular: {
          idle: {
            ...commonButtonStyles.desktop.secondary.regular.idle,
            ...buttonPalette.secondary.idle,
          },
          active: {
            ...commonButtonStyles.desktop.secondary.regular.active,
            ...buttonPalette.secondary.active,
          },
          disabled: {
            ...commonButtonStyles.desktop.secondary.regular.disabled,
            ...buttonPalette.secondary.disabled,
          },
        },
      },
      tertiary: {
        large: {
          idle: {
            ...commonButtonStyles.desktop.tertiary.large.idle,
            ...buttonPalette.tertiary.idle,
          },
          active: {
            ...commonButtonStyles.desktop.tertiary.large.active,
            ...buttonPalette.tertiary.active,
          },
          disabled: {
            ...commonButtonStyles.desktop.tertiary.large.disabled,
            ...buttonPalette.tertiary.disabled,
          },
        },
        regular: {
          idle: {
            ...commonButtonStyles.desktop.tertiary.regular.idle,
            ...buttonPalette.tertiary.idle,
          },
          active: {
            ...commonButtonStyles.desktop.tertiary.regular.active,
            ...buttonPalette.tertiary.active,
          },
          disabled: {
            ...commonButtonStyles.desktop.tertiary.regular.disabled,
            ...buttonPalette.tertiary.disabled,
          },
        },
      },
    },
    tablet: {
      primary: {
        large: {
          idle: {
            ...commonButtonStyles.tablet.primary.large.idle,
            ...buttonPalette.primary.idle,
          },
          active: {
            ...commonButtonStyles.tablet.primary.large.active,
            ...buttonPalette.primary.active,
          },
          disabled: {
            ...commonButtonStyles.tablet.primary.large.disabled,
            ...buttonPalette.primary.disabled,
          },
        },
        regular: {
          idle: {
            ...commonButtonStyles.tablet.primary.regular.idle,
            ...buttonPalette.primary.idle,
          },
          active: {
            ...commonButtonStyles.tablet.primary.regular.active,
            ...buttonPalette.primary.active,
          },
          disabled: {
            ...commonButtonStyles.tablet.primary.regular.disabled,
            ...buttonPalette.primary.disabled,
          },
        },
      },
      secondary: {
        large: {
          idle: {
            ...commonButtonStyles.tablet.secondary.large.idle,
            ...buttonPalette.secondary.idle,
          },
          active: {
            ...commonButtonStyles.tablet.secondary.large.active,
            ...buttonPalette.secondary.active,
          },
          disabled: {
            ...commonButtonStyles.tablet.secondary.large.disabled,
            ...buttonPalette.secondary.disabled,
          },
        },
        regular: {
          idle: {
            ...commonButtonStyles.tablet.secondary.regular.idle,
            ...buttonPalette.secondary.idle,
          },
          active: {
            ...commonButtonStyles.tablet.secondary.regular.active,
            ...buttonPalette.secondary.active,
          },
          disabled: {
            ...commonButtonStyles.tablet.secondary.regular.disabled,
            ...buttonPalette.secondary.disabled,
          },
        },
      },
      tertiary: {
        large: {
          idle: {
            ...commonButtonStyles.tablet.tertiary.large.idle,
            ...buttonPalette.tertiary.idle,
          },
          active: {
            ...commonButtonStyles.tablet.tertiary.large.active,
            ...buttonPalette.tertiary.active,
          },
          disabled: {
            ...commonButtonStyles.tablet.tertiary.large.disabled,
            ...buttonPalette.tertiary.disabled,
          },
        },
        regular: {
          idle: {
            ...commonButtonStyles.tablet.tertiary.regular.idle,
            ...buttonPalette.tertiary.idle,
          },
          active: {
            ...commonButtonStyles.tablet.tertiary.regular.active,
            ...buttonPalette.tertiary.active,
          },
          disabled: {
            ...commonButtonStyles.tablet.tertiary.regular.disabled,
            ...buttonPalette.tertiary.disabled,
          },
        },
      },
    },
    mobile: {
      primary: {
        large: {
          idle: {
            ...commonButtonStyles.mobile.primary.large.idle,
            ...buttonPalette.primary.idle,
          },
          active: {
            ...commonButtonStyles.mobile.primary.large.active,
            ...buttonPalette.primary.active,
          },
          disabled: {
            ...commonButtonStyles.mobile.primary.large.disabled,
            ...buttonPalette.primary.disabled,
          },
        },
        regular: {
          idle: {
            ...commonButtonStyles.mobile.primary.regular.idle,
            ...buttonPalette.primary.idle,
          },
          active: {
            ...commonButtonStyles.mobile.primary.regular.active,
            ...buttonPalette.primary.active,
          },
          disabled: {
            ...commonButtonStyles.mobile.primary.regular.disabled,
            ...buttonPalette.primary.disabled,
          },
        },
      },
      secondary: {
        large: {
          idle: {
            ...commonButtonStyles.mobile.secondary.large.idle,
            ...buttonPalette.secondary.idle,
          },
          active: {
            ...commonButtonStyles.mobile.secondary.large.active,
            ...buttonPalette.secondary.active,
          },
          disabled: {
            ...commonButtonStyles.mobile.secondary.large.disabled,
            ...buttonPalette.secondary.disabled,
          },
        },
        regular: {
          idle: {
            ...commonButtonStyles.mobile.secondary.regular.idle,
            ...buttonPalette.secondary.idle,
          },
          active: {
            ...commonButtonStyles.mobile.secondary.regular.active,
            ...buttonPalette.secondary.active,
          },
          disabled: {
            ...commonButtonStyles.mobile.secondary.regular.disabled,
            ...buttonPalette.secondary.disabled,
          },
        },
      },
      tertiary: {
        large: {
          idle: {
            ...commonButtonStyles.mobile.tertiary.large.idle,
            ...buttonPalette.tertiary.idle,
          },
          active: {
            ...commonButtonStyles.mobile.tertiary.large.active,
            ...buttonPalette.tertiary.active,
          },
          disabled: {
            ...commonButtonStyles.mobile.tertiary.large.disabled,
            ...buttonPalette.tertiary.disabled,
          },
        },
        regular: {
          idle: {
            ...commonButtonStyles.mobile.tertiary.regular.idle,
            ...buttonPalette.tertiary.idle,
          },
          active: {
            ...commonButtonStyles.mobile.tertiary.regular.active,
            ...buttonPalette.tertiary.active,
          },
          disabled: {
            ...commonButtonStyles.mobile.tertiary.regular.disabled,
            ...buttonPalette.tertiary.disabled,
          },
        },
      },
    },
  };
};
