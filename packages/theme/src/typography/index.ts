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
      h5: {
        default: {
          ...commonTypographyStyles.desktop.h5,
          ...typographyPalette.h5.default,
        },
        success: {
          ...commonTypographyStyles.desktop.h5,
          ...typographyPalette.h5.success,
        },
        error: {
          ...commonTypographyStyles.desktop.h5,
          ...typographyPalette.h5.error,
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
      bodySmall: {
        default: {
          ...commonTypographyStyles.desktop.bodySmall,
          ...typographyPalette.bodySmall.default,
        },
        success: {
          ...commonTypographyStyles.desktop.bodySmall,
          ...typographyPalette.bodySmall.success,
        },
        error: {
          ...commonTypographyStyles.desktop.bodySmall,
          ...typographyPalette.bodySmall.error,
        },
      },
      label: {
        default: {
          ...commonTypographyStyles.desktop.label,
          ...typographyPalette.label.default,
        },
        success: {
          ...commonTypographyStyles.desktop.label,
          ...typographyPalette.label.success,
        },
        error: {
          ...commonTypographyStyles.desktop.label,
          ...typographyPalette.label.error,
        },
      },
    },
    tablet: {
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
      h5: {
        default: {
          ...commonTypographyStyles.tablet.h5,
          ...typographyPalette.h5.default,
        },
        success: {
          ...commonTypographyStyles.tablet.h5,
          ...typographyPalette.h5.success,
        },
        error: {
          ...commonTypographyStyles.tablet.h5,
          ...typographyPalette.h5.error,
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
      bodySmall: {
        default: {
          ...commonTypographyStyles.tablet.bodySmall,
          ...typographyPalette.bodySmall.default,
        },
        success: {
          ...commonTypographyStyles.tablet.bodySmall,
          ...typographyPalette.bodySmall.success,
        },
        error: {
          ...commonTypographyStyles.tablet.bodySmall,
          ...typographyPalette.bodySmall.error,
        },
      },
      label: {
        default: {
          ...commonTypographyStyles.tablet.label,
          ...typographyPalette.label.default,
        },
        success: {
          ...commonTypographyStyles.tablet.label,
          ...typographyPalette.label.success,
        },
        error: {
          ...commonTypographyStyles.tablet.label,
          ...typographyPalette.label.error,
        },
      },
    },
    mobile: {
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
      h5: {
        default: {
          ...commonTypographyStyles.mobile.h5,
          ...typographyPalette.h5.default,
        },
        success: {
          ...commonTypographyStyles.mobile.h5,
          ...typographyPalette.h5.success,
        },
        error: {
          ...commonTypographyStyles.mobile.h5,
          ...typographyPalette.h5.error,
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
      bodySmall: {
        default: {
          ...commonTypographyStyles.mobile.bodySmall,
          ...typographyPalette.bodySmall.default,
        },
        success: {
          ...commonTypographyStyles.mobile.bodySmall,
          ...typographyPalette.bodySmall.success,
        },
        error: {
          ...commonTypographyStyles.mobile.bodySmall,
          ...typographyPalette.bodySmall.error,
        },
      },
      label: {
        default: {
          ...commonTypographyStyles.mobile.label,
          ...typographyPalette.label.default,
        },
        success: {
          ...commonTypographyStyles.mobile.label,
          ...typographyPalette.label.success,
        },
        error: {
          ...commonTypographyStyles.mobile.label,
          ...typographyPalette.label.error,
        },
      },
    },
  };
};
