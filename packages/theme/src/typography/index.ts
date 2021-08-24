import { ColorScheme, BackdropLevel } from "../types";
import desktop from "./desktop";
import tablet from "./tablet";
import mobile from "./mobile";
import { getTypographyPalette } from "./palette";
import {
  CommonTypographyStylesWithBreakpoint,
  TypographyStyles,
} from "./types";

const getCommonTypographyStyles = (): CommonTypographyStylesWithBreakpoint => ({
  desktop,
  tablet,
  mobile,
});

export { TypographyStyles } from "./types";

export const getTypographyStyles = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): TypographyStyles => {
  const commonTypographyStyles = getCommonTypographyStyles();
  const typographyPalette = getTypographyPalette(colorScheme, backdrop);
  return {
    desktop: {
      displayHeading: {
        primary: {
          ...commonTypographyStyles.desktop.displayHeading,
          ...typographyPalette.displayHeading.primary,
        },
        secondary: {
          ...commonTypographyStyles.desktop.displayHeading,
          ...typographyPalette.displayHeading.secondary,
        },
        success: {
          ...commonTypographyStyles.desktop.displayHeading,
          ...typographyPalette.displayHeading.success,
        },
        error: {
          ...commonTypographyStyles.desktop.displayHeading,
          ...typographyPalette.displayHeading.error,
        },
      },
      h1: {
        primary: {
          ...commonTypographyStyles.desktop.h1,
          ...typographyPalette.h1.primary,
        },
        secondary: {
          ...commonTypographyStyles.desktop.h1,
          ...typographyPalette.h1.secondary,
        },
        success: {
          ...commonTypographyStyles.desktop.h1,
          ...typographyPalette.h1.success,
        },
        error: {
          ...commonTypographyStyles.desktop.h1,
          ...typographyPalette.h1.error,
        },
      },
      h2: {
        primary: {
          ...commonTypographyStyles.desktop.h2,
          ...typographyPalette.h2.primary,
        },
        secondary: {
          ...commonTypographyStyles.desktop.h2,
          ...typographyPalette.h2.secondary,
        },
        success: {
          ...commonTypographyStyles.desktop.h2,
          ...typographyPalette.h2.success,
        },
        error: {
          ...commonTypographyStyles.desktop.h2,
          ...typographyPalette.h2.error,
        },
      },
      h3: {
        primary: {
          ...commonTypographyStyles.desktop.h3,
          ...typographyPalette.h3.primary,
        },
        secondary: {
          ...commonTypographyStyles.desktop.h3,
          ...typographyPalette.h3.secondary,
        },
        success: {
          ...commonTypographyStyles.desktop.h3,
          ...typographyPalette.h3.success,
        },
        error: {
          ...commonTypographyStyles.desktop.h3,
          ...typographyPalette.h3.error,
        },
      },
      h4: {
        primary: {
          ...commonTypographyStyles.desktop.h4,
          ...typographyPalette.h4.primary,
        },
        secondary: {
          ...commonTypographyStyles.desktop.h4,
          ...typographyPalette.h4.secondary,
        },
        success: {
          ...commonTypographyStyles.desktop.h4,
          ...typographyPalette.h4.success,
        },
        error: {
          ...commonTypographyStyles.desktop.h4,
          ...typographyPalette.h4.error,
        },
      },
      subtitle: {
        primary: {
          ...commonTypographyStyles.desktop.subtitle,
          ...typographyPalette.subtitle.primary,
        },
        secondary: {
          ...commonTypographyStyles.desktop.subtitle,
          ...typographyPalette.subtitle.secondary,
        },
        success: {
          ...commonTypographyStyles.desktop.subtitle,
          ...typographyPalette.subtitle.success,
        },
        error: {
          ...commonTypographyStyles.desktop.subtitle,
          ...typographyPalette.subtitle.error,
        },
      },
      body: {
        primary: {
          ...commonTypographyStyles.desktop.body,
          ...typographyPalette.body.primary,
        },
        secondary: {
          ...commonTypographyStyles.desktop.body,
          ...typographyPalette.body.secondary,
        },
        success: {
          ...commonTypographyStyles.desktop.body,
          ...typographyPalette.body.success,
        },
        error: {
          ...commonTypographyStyles.desktop.body,
          ...typographyPalette.body.error,
        },
      },
      legalNote: {
        primary: {
          ...commonTypographyStyles.desktop.legalNote,
          ...typographyPalette.legalNote.primary,
        },
        secondary: {
          ...commonTypographyStyles.desktop.legalNote,
          ...typographyPalette.legalNote.secondary,
        },
        success: {
          ...commonTypographyStyles.desktop.legalNote,
          ...typographyPalette.legalNote.success,
        },
        error: {
          ...commonTypographyStyles.desktop.legalNote,
          ...typographyPalette.legalNote.error,
        },
      },
      caption: {
        primary: {
          ...commonTypographyStyles.desktop.caption,
          ...typographyPalette.caption.primary,
        },
        secondary: {
          ...commonTypographyStyles.desktop.caption,
          ...typographyPalette.caption.secondary,
        },
        success: {
          ...commonTypographyStyles.desktop.caption,
          ...typographyPalette.caption.success,
        },
        error: {
          ...commonTypographyStyles.desktop.caption,
          ...typographyPalette.caption.error,
        },
      },
    },
    tablet: {
      displayHeading: {
        primary: {
          ...commonTypographyStyles.tablet.displayHeading,
          ...typographyPalette.displayHeading.primary,
        },
        secondary: {
          ...commonTypographyStyles.tablet.displayHeading,
          ...typographyPalette.displayHeading.secondary,
        },
        success: {
          ...commonTypographyStyles.tablet.displayHeading,
          ...typographyPalette.displayHeading.success,
        },
        error: {
          ...commonTypographyStyles.tablet.displayHeading,
          ...typographyPalette.displayHeading.error,
        },
      },
      h1: {
        primary: {
          ...commonTypographyStyles.tablet.h1,
          ...typographyPalette.h1.primary,
        },
        secondary: {
          ...commonTypographyStyles.tablet.h1,
          ...typographyPalette.h1.secondary,
        },
        success: {
          ...commonTypographyStyles.tablet.h1,
          ...typographyPalette.h1.success,
        },
        error: {
          ...commonTypographyStyles.tablet.h1,
          ...typographyPalette.h1.error,
        },
      },
      h2: {
        primary: {
          ...commonTypographyStyles.tablet.h2,
          ...typographyPalette.h2.primary,
        },
        secondary: {
          ...commonTypographyStyles.tablet.h2,
          ...typographyPalette.h2.secondary,
        },
        success: {
          ...commonTypographyStyles.tablet.h2,
          ...typographyPalette.h2.success,
        },
        error: {
          ...commonTypographyStyles.tablet.h2,
          ...typographyPalette.h2.error,
        },
      },
      h3: {
        primary: {
          ...commonTypographyStyles.tablet.h3,
          ...typographyPalette.h3.primary,
        },
        secondary: {
          ...commonTypographyStyles.tablet.h3,
          ...typographyPalette.h3.secondary,
        },
        success: {
          ...commonTypographyStyles.tablet.h3,
          ...typographyPalette.h3.success,
        },
        error: {
          ...commonTypographyStyles.tablet.h3,
          ...typographyPalette.h3.error,
        },
      },
      h4: {
        primary: {
          ...commonTypographyStyles.tablet.h4,
          ...typographyPalette.h4.primary,
        },
        secondary: {
          ...commonTypographyStyles.tablet.h4,
          ...typographyPalette.h4.secondary,
        },
        success: {
          ...commonTypographyStyles.tablet.h4,
          ...typographyPalette.h4.success,
        },
        error: {
          ...commonTypographyStyles.tablet.h4,
          ...typographyPalette.h4.error,
        },
      },
      subtitle: {
        primary: {
          ...commonTypographyStyles.tablet.subtitle,
          ...typographyPalette.subtitle.primary,
        },
        secondary: {
          ...commonTypographyStyles.tablet.subtitle,
          ...typographyPalette.subtitle.secondary,
        },
        success: {
          ...commonTypographyStyles.tablet.subtitle,
          ...typographyPalette.subtitle.success,
        },
        error: {
          ...commonTypographyStyles.tablet.subtitle,
          ...typographyPalette.subtitle.error,
        },
      },
      body: {
        primary: {
          ...commonTypographyStyles.tablet.body,
          ...typographyPalette.body.primary,
        },
        secondary: {
          ...commonTypographyStyles.tablet.body,
          ...typographyPalette.body.secondary,
        },
        success: {
          ...commonTypographyStyles.tablet.body,
          ...typographyPalette.body.success,
        },
        error: {
          ...commonTypographyStyles.tablet.body,
          ...typographyPalette.body.error,
        },
      },
      legalNote: {
        primary: {
          ...commonTypographyStyles.tablet.legalNote,
          ...typographyPalette.legalNote.primary,
        },
        secondary: {
          ...commonTypographyStyles.tablet.legalNote,
          ...typographyPalette.legalNote.secondary,
        },
        success: {
          ...commonTypographyStyles.tablet.legalNote,
          ...typographyPalette.legalNote.success,
        },
        error: {
          ...commonTypographyStyles.tablet.legalNote,
          ...typographyPalette.legalNote.error,
        },
      },
      caption: {
        primary: {
          ...commonTypographyStyles.tablet.caption,
          ...typographyPalette.caption.primary,
        },
        secondary: {
          ...commonTypographyStyles.tablet.caption,
          ...typographyPalette.caption.secondary,
        },
        success: {
          ...commonTypographyStyles.tablet.caption,
          ...typographyPalette.caption.success,
        },
        error: {
          ...commonTypographyStyles.tablet.caption,
          ...typographyPalette.caption.error,
        },
      },
    },
    mobile: {
      displayHeading: {
        primary: {
          ...commonTypographyStyles.mobile.displayHeading,
          ...typographyPalette.displayHeading.primary,
        },
        secondary: {
          ...commonTypographyStyles.mobile.displayHeading,
          ...typographyPalette.displayHeading.secondary,
        },
        success: {
          ...commonTypographyStyles.mobile.displayHeading,
          ...typographyPalette.displayHeading.success,
        },
        error: {
          ...commonTypographyStyles.mobile.displayHeading,
          ...typographyPalette.displayHeading.error,
        },
      },
      h1: {
        primary: {
          ...commonTypographyStyles.mobile.h1,
          ...typographyPalette.h1.primary,
        },
        secondary: {
          ...commonTypographyStyles.mobile.h1,
          ...typographyPalette.h1.secondary,
        },
        success: {
          ...commonTypographyStyles.mobile.h1,
          ...typographyPalette.h1.success,
        },
        error: {
          ...commonTypographyStyles.mobile.h1,
          ...typographyPalette.h1.error,
        },
      },
      h2: {
        primary: {
          ...commonTypographyStyles.mobile.h2,
          ...typographyPalette.h2.primary,
        },
        secondary: {
          ...commonTypographyStyles.mobile.h2,
          ...typographyPalette.h2.secondary,
        },
        success: {
          ...commonTypographyStyles.mobile.h2,
          ...typographyPalette.h2.success,
        },
        error: {
          ...commonTypographyStyles.mobile.h2,
          ...typographyPalette.h2.error,
        },
      },
      h3: {
        primary: {
          ...commonTypographyStyles.mobile.h3,
          ...typographyPalette.h3.primary,
        },
        secondary: {
          ...commonTypographyStyles.mobile.h3,
          ...typographyPalette.h3.secondary,
        },
        success: {
          ...commonTypographyStyles.mobile.h3,
          ...typographyPalette.h3.success,
        },
        error: {
          ...commonTypographyStyles.mobile.h3,
          ...typographyPalette.h3.error,
        },
      },
      h4: {
        primary: {
          ...commonTypographyStyles.mobile.h4,
          ...typographyPalette.h4.primary,
        },
        secondary: {
          ...commonTypographyStyles.mobile.h4,
          ...typographyPalette.h4.secondary,
        },
        success: {
          ...commonTypographyStyles.mobile.h4,
          ...typographyPalette.h4.success,
        },
        error: {
          ...commonTypographyStyles.mobile.h4,
          ...typographyPalette.h4.error,
        },
      },
      subtitle: {
        primary: {
          ...commonTypographyStyles.mobile.subtitle,
          ...typographyPalette.subtitle.primary,
        },
        secondary: {
          ...commonTypographyStyles.mobile.subtitle,
          ...typographyPalette.subtitle.secondary,
        },
        success: {
          ...commonTypographyStyles.mobile.subtitle,
          ...typographyPalette.subtitle.success,
        },
        error: {
          ...commonTypographyStyles.mobile.subtitle,
          ...typographyPalette.subtitle.error,
        },
      },
      body: {
        primary: {
          ...commonTypographyStyles.mobile.body,
          ...typographyPalette.body.primary,
        },
        secondary: {
          ...commonTypographyStyles.mobile.body,
          ...typographyPalette.body.secondary,
        },
        success: {
          ...commonTypographyStyles.mobile.body,
          ...typographyPalette.body.success,
        },
        error: {
          ...commonTypographyStyles.mobile.body,
          ...typographyPalette.body.error,
        },
      },
      legalNote: {
        primary: {
          ...commonTypographyStyles.mobile.legalNote,
          ...typographyPalette.legalNote.primary,
        },
        secondary: {
          ...commonTypographyStyles.mobile.legalNote,
          ...typographyPalette.legalNote.secondary,
        },
        success: {
          ...commonTypographyStyles.mobile.legalNote,
          ...typographyPalette.legalNote.success,
        },
        error: {
          ...commonTypographyStyles.mobile.legalNote,
          ...typographyPalette.legalNote.error,
        },
      },
      caption: {
        primary: {
          ...commonTypographyStyles.mobile.caption,
          ...typographyPalette.caption.primary,
        },
        secondary: {
          ...commonTypographyStyles.mobile.caption,
          ...typographyPalette.caption.secondary,
        },
        success: {
          ...commonTypographyStyles.mobile.caption,
          ...typographyPalette.caption.success,
        },
        error: {
          ...commonTypographyStyles.mobile.caption,
          ...typographyPalette.caption.error,
        },
      },
    },
  };
};
