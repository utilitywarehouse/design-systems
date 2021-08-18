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
        default: {
          ...commonTypographyStyles.desktop.displayHeading,
          ...typographyPalette.displayHeading.default,
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
        default: {
          ...commonTypographyStyles.desktop.h1,
          ...typographyPalette.h1.default,
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
        default: {
          ...commonTypographyStyles.desktop.h2,
          ...typographyPalette.h2.default,
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
        default: {
          ...commonTypographyStyles.desktop.h3,
          ...typographyPalette.h3.default,
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
        default: {
          ...commonTypographyStyles.desktop.h4,
          ...typographyPalette.h4.default,
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
        default: {
          ...commonTypographyStyles.desktop.subtitle,
          ...typographyPalette.subtitle.default,
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
        default: {
          ...commonTypographyStyles.desktop.body,
          ...typographyPalette.body.default,
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
        default: {
          ...commonTypographyStyles.desktop.legalNote,
          ...typographyPalette.legalNote.default,
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
        default: {
          ...commonTypographyStyles.desktop.caption,
          ...typographyPalette.caption.default,
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
        default: {
          ...commonTypographyStyles.tablet.displayHeading,
          ...typographyPalette.displayHeading.default,
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
        default: {
          ...commonTypographyStyles.tablet.h1,
          ...typographyPalette.h1.default,
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
        default: {
          ...commonTypographyStyles.tablet.h2,
          ...typographyPalette.h2.default,
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
        default: {
          ...commonTypographyStyles.tablet.h3,
          ...typographyPalette.h3.default,
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
        default: {
          ...commonTypographyStyles.tablet.h4,
          ...typographyPalette.h4.default,
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
        default: {
          ...commonTypographyStyles.tablet.subtitle,
          ...typographyPalette.subtitle.default,
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
        default: {
          ...commonTypographyStyles.tablet.body,
          ...typographyPalette.body.default,
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
        default: {
          ...commonTypographyStyles.tablet.legalNote,
          ...typographyPalette.legalNote.default,
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
        default: {
          ...commonTypographyStyles.tablet.caption,
          ...typographyPalette.caption.default,
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
        default: {
          ...commonTypographyStyles.mobile.displayHeading,
          ...typographyPalette.displayHeading.default,
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
        default: {
          ...commonTypographyStyles.mobile.h1,
          ...typographyPalette.h1.default,
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
        default: {
          ...commonTypographyStyles.mobile.h2,
          ...typographyPalette.h2.default,
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
        default: {
          ...commonTypographyStyles.mobile.h3,
          ...typographyPalette.h3.default,
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
        default: {
          ...commonTypographyStyles.mobile.h4,
          ...typographyPalette.h4.default,
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
        default: {
          ...commonTypographyStyles.mobile.subtitle,
          ...typographyPalette.subtitle.default,
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
        default: {
          ...commonTypographyStyles.mobile.body,
          ...typographyPalette.body.default,
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
        default: {
          ...commonTypographyStyles.mobile.legalNote,
          ...typographyPalette.legalNote.default,
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
        default: {
          ...commonTypographyStyles.mobile.caption,
          ...typographyPalette.caption.default,
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
