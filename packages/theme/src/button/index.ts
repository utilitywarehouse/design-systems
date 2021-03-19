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
import { ButtonGroup } from "./types";

export const BUTTON_KEY = "button";

export const buttonGroup: ButtonGroup = {
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
};
