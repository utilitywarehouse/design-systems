import { ColorScheme, BackdropLevel } from "..";
import { InteractiveCardStyles } from "./types";
import { getInteractiveCardPalette } from "./palette";
import {
  desktopPrimarySmallIdle,
  desktopPrimarySmallActive,
  desktopPrimaryRegularIdle,
  desktopPrimaryRegularActive,
  desktopPrimaryLargeIdle,
  desktopPrimaryLargeActive,
  desktopSecondarySmallIdle,
  desktopSecondarySmallActive,
  desktopSecondaryRegularIdle,
  desktopSecondaryRegularActive,
  desktopSecondaryLargeIdle,
  desktopSecondaryLargeActive,
} from "./desktop";
import {
  tabletPrimarySmallIdle,
  tabletPrimarySmallActive,
  tabletPrimaryRegularIdle,
  tabletPrimaryRegularActive,
  tabletPrimaryLargeIdle,
  tabletPrimaryLargeActive,
  tabletSecondarySmallIdle,
  tabletSecondarySmallActive,
  tabletSecondaryRegularIdle,
  tabletSecondaryRegularActive,
  tabletSecondaryLargeIdle,
  tabletSecondaryLargeActive,
} from "./tablet";
import {
  mobilePrimarySmallIdle,
  mobilePrimarySmallActive,
  mobilePrimaryRegularIdle,
  mobilePrimaryRegularActive,
  mobilePrimaryLargeIdle,
  mobilePrimaryLargeActive,
  mobileSecondarySmallIdle,
  mobileSecondarySmallActive,
  mobileSecondaryRegularIdle,
  mobileSecondaryRegularActive,
  mobileSecondaryLargeIdle,
  mobileSecondaryLargeActive,
} from "./mobile";

export { InteractiveCardStyles } from "./types";

export const getInteractiveCardStyles = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): InteractiveCardStyles => {
  const interactiveCardPalette = getInteractiveCardPalette(
    colorScheme,
    backdrop
  );

  return {
    desktop: {
      primary: {
        small: {
          idle: {
            ...desktopPrimarySmallIdle,
            ...interactiveCardPalette.primary.idle,
          },
          active: {
            ...desktopPrimarySmallActive,
            ...interactiveCardPalette.primary.active,
          },
        },
        regular: {
          idle: {
            ...desktopPrimaryRegularIdle,
            ...interactiveCardPalette.primary.idle,
          },
          active: {
            ...desktopPrimaryRegularActive,
            ...interactiveCardPalette.primary.active,
          },
        },
        large: {
          idle: {
            ...desktopPrimaryLargeIdle,
            ...interactiveCardPalette.primary.idle,
          },
          active: {
            ...desktopPrimaryLargeActive,
            ...interactiveCardPalette.primary.active,
          },
        },
      },
      secondary: {
        small: {
          idle: {
            ...desktopSecondarySmallIdle,
            ...interactiveCardPalette.secondary.idle,
          },
          active: {
            ...desktopSecondarySmallActive,
            ...interactiveCardPalette.secondary.active,
          },
        },
        regular: {
          idle: {
            ...desktopSecondaryRegularIdle,
            ...interactiveCardPalette.secondary.idle,
          },
          active: {
            ...desktopSecondaryRegularActive,
            ...interactiveCardPalette.secondary.active,
          },
        },
        large: {
          idle: {
            ...desktopSecondaryLargeIdle,
            ...interactiveCardPalette.secondary.idle,
          },
          active: {
            ...desktopSecondaryLargeActive,
            ...interactiveCardPalette.secondary.active,
          },
        },
      },
    },
    tablet: {
      primary: {
        small: {
          idle: {
            ...tabletPrimarySmallIdle,
            ...interactiveCardPalette.primary.idle,
          },
          active: {
            ...tabletPrimarySmallActive,
            ...interactiveCardPalette.primary.active,
          },
        },
        regular: {
          idle: {
            ...tabletPrimaryRegularIdle,
            ...interactiveCardPalette.primary.idle,
          },
          active: {
            ...tabletPrimaryRegularActive,
            ...interactiveCardPalette.primary.active,
          },
        },
        large: {
          idle: {
            ...tabletPrimaryLargeIdle,
            ...interactiveCardPalette.primary.idle,
          },
          active: {
            ...tabletPrimaryLargeActive,
            ...interactiveCardPalette.primary.active,
          },
        },
      },
      secondary: {
        small: {
          idle: {
            ...tabletSecondarySmallIdle,
            ...interactiveCardPalette.secondary.idle,
          },
          active: {
            ...tabletSecondarySmallActive,
            ...interactiveCardPalette.secondary.active,
          },
        },
        regular: {
          idle: {
            ...tabletSecondaryRegularIdle,
            ...interactiveCardPalette.secondary.idle,
          },
          active: {
            ...tabletSecondaryRegularActive,
            ...interactiveCardPalette.secondary.active,
          },
        },
        large: {
          idle: {
            ...tabletSecondaryLargeIdle,
            ...interactiveCardPalette.secondary.idle,
          },
          active: {
            ...tabletSecondaryLargeActive,
            ...interactiveCardPalette.secondary.active,
          },
        },
      },
    },
    mobile: {
      primary: {
        small: {
          idle: {
            ...mobilePrimarySmallIdle,
            ...interactiveCardPalette.primary.idle,
          },
          active: {
            ...mobilePrimarySmallActive,
            ...interactiveCardPalette.primary.active,
          },
        },
        regular: {
          idle: {
            ...mobilePrimaryRegularIdle,
            ...interactiveCardPalette.primary.idle,
          },
          active: {
            ...mobilePrimaryRegularActive,
            ...interactiveCardPalette.primary.active,
          },
        },
        large: {
          idle: {
            ...mobilePrimaryLargeIdle,
            ...interactiveCardPalette.primary.idle,
          },
          active: {
            ...mobilePrimaryLargeActive,
            ...interactiveCardPalette.primary.active,
          },
        },
      },
      secondary: {
        small: {
          idle: {
            ...mobileSecondarySmallIdle,
            ...interactiveCardPalette.secondary.idle,
          },
          active: {
            ...mobileSecondarySmallActive,
            ...interactiveCardPalette.secondary.active,
          },
        },
        regular: {
          idle: {
            ...mobileSecondaryRegularIdle,
            ...interactiveCardPalette.secondary.idle,
          },
          active: {
            ...mobileSecondaryRegularActive,
            ...interactiveCardPalette.secondary.active,
          },
        },
        large: {
          idle: {
            ...mobileSecondaryLargeIdle,
            ...interactiveCardPalette.secondary.idle,
          },
          active: {
            ...mobileSecondaryLargeActive,
            ...interactiveCardPalette.secondary.active,
          },
        },
      },
    },
  };
};
