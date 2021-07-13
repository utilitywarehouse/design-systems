import { ColorScheme, BackdropLevel } from "../types";
import { getTextFieldPalette } from "./palette";
import {
  desktopDefaultIdle,
  desktopDefaultHover,
  desktopDefaultFocus,
  desktopSuccessIdle,
  desktopSuccessHover,
  desktopSuccessFocus,
  desktopErrorIdle,
  desktopErrorHover,
  desktopErrorFocus,
  desktopDisabledIdle,
  desktopDisabledHover,
  desktopDisabledFocus,
} from "./desktop";
import {
  tabletDefaultIdle,
  tabletDefaultHover,
  tabletDefaultFocus,
  tabletSuccessIdle,
  tabletSuccessHover,
  tabletSuccessFocus,
  tabletErrorIdle,
  tabletErrorHover,
  tabletErrorFocus,
  tabletDisabledIdle,
  tabletDisabledHover,
  tabletDisabledFocus,
} from "./tablet";
import {
  mobileDefaultIdle,
  mobileDefaultHover,
  mobileDefaultFocus,
  mobileSuccessIdle,
  mobileSuccessHover,
  mobileSuccessFocus,
  mobileErrorIdle,
  mobileErrorHover,
  mobileErrorFocus,
  mobileDisabledIdle,
  mobileDisabledHover,
  mobileDisabledFocus,
} from "./mobile";
import { CommonTextFieldStyles, TextFieldStyles } from "./types";

const getCommonTextFieldStyles = (): CommonTextFieldStyles => ({
  desktop: {
    default: {
      idle: desktopDefaultIdle,
      hover: desktopDefaultHover,
      focus: desktopDefaultFocus,
    },
    success: {
      idle: desktopSuccessIdle,
      hover: desktopSuccessHover,
      focus: desktopSuccessFocus,
    },
    error: {
      idle: desktopErrorIdle,
      hover: desktopErrorHover,
      focus: desktopErrorFocus,
    },
    disabled: {
      idle: desktopDisabledIdle,
      hover: desktopDisabledHover,
      focus: desktopDisabledFocus,
    },
  },
  tablet: {
    default: {
      idle: tabletDefaultIdle,
      hover: tabletDefaultHover,
      focus: tabletDefaultFocus,
    },
    success: {
      idle: tabletSuccessIdle,
      hover: tabletSuccessHover,
      focus: tabletSuccessFocus,
    },
    error: {
      idle: tabletErrorIdle,
      hover: tabletErrorHover,
      focus: tabletErrorFocus,
    },
    disabled: {
      idle: tabletDisabledIdle,
      hover: tabletDisabledHover,
      focus: tabletDisabledFocus,
    },
  },
  mobile: {
    default: {
      idle: mobileDefaultIdle,
      hover: mobileDefaultHover,
      focus: mobileDefaultFocus,
    },
    success: {
      idle: mobileSuccessIdle,
      hover: mobileSuccessHover,
      focus: mobileSuccessFocus,
    },
    error: {
      idle: mobileErrorIdle,
      hover: mobileErrorHover,
      focus: mobileErrorFocus,
    },
    disabled: {
      idle: mobileDisabledIdle,
      hover: mobileDisabledHover,
      focus: mobileDisabledFocus,
    },
  },
});

export { TextFieldStyles as LinkStyles } from "./types";

export const getTextFieldStyles = (
  colorScheme: ColorScheme,
  backdrop: BackdropLevel
): TextFieldStyles => {
  const commonTextFieldStyles = getCommonTextFieldStyles();
  const textFieldPalette = getTextFieldPalette(colorScheme, backdrop);
  return {
    desktop: {
      default: {
        idle: {
          wrapper: {
            ...commonTextFieldStyles.desktop.default.idle.wrapper,
            ...textFieldPalette.default.idle.wrapper,
          },
          input: {
            ...commonTextFieldStyles.desktop.default.idle.input,
            ...textFieldPalette.default.idle.input,
          },
          label: {
            ...commonTextFieldStyles.desktop.default.idle.label,
            ...textFieldPalette.default.idle.label,
          },
          helperText: {
            ...commonTextFieldStyles.desktop.default.idle.helperText,
            ...textFieldPalette.default.idle.helperText,
          },
        },
        hover: {
          wrapper: {
            ...commonTextFieldStyles.desktop.default.hover.wrapper,
            ...textFieldPalette.default.hover.wrapper,
          },
          input: {
            ...commonTextFieldStyles.desktop.default.hover.input,
            ...textFieldPalette.default.hover.input,
          },
          label: {
            ...commonTextFieldStyles.desktop.default.hover.label,
            ...textFieldPalette.default.hover.label,
          },
          helperText: {
            ...commonTextFieldStyles.desktop.default.hover.helperText,
            ...textFieldPalette.default.hover.helperText,
          },
        },
        focus: {
          wrapper: {
            ...commonTextFieldStyles.desktop.default.focus.wrapper,
            ...textFieldPalette.default.focus.wrapper,
          },
          input: {
            ...commonTextFieldStyles.desktop.default.focus.input,
            ...textFieldPalette.default.focus.input,
          },
          label: {
            ...commonTextFieldStyles.desktop.default.focus.label,
            ...textFieldPalette.default.focus.label,
          },
          helperText: {
            ...commonTextFieldStyles.desktop.default.focus.helperText,
            ...textFieldPalette.default.focus.helperText,
          },
        },
      },
      success: {
        idle: {
          wrapper: {
            ...commonTextFieldStyles.desktop.success.idle.wrapper,
            ...textFieldPalette.success.idle.wrapper,
          },
          input: {
            ...commonTextFieldStyles.desktop.success.idle.input,
            ...textFieldPalette.success.idle.input,
          },
          label: {
            ...commonTextFieldStyles.desktop.success.idle.label,
            ...textFieldPalette.success.idle.label,
          },
          helperText: {
            ...commonTextFieldStyles.desktop.success.idle.helperText,
            ...textFieldPalette.success.idle.helperText,
          },
        },
        hover: {
          wrapper: {
            ...commonTextFieldStyles.desktop.success.hover.wrapper,
            ...textFieldPalette.success.hover.wrapper,
          },
          input: {
            ...commonTextFieldStyles.desktop.success.hover.input,
            ...textFieldPalette.success.hover.input,
          },
          label: {
            ...commonTextFieldStyles.desktop.success.hover.label,
            ...textFieldPalette.success.hover.label,
          },
          helperText: {
            ...commonTextFieldStyles.desktop.success.hover.helperText,
            ...textFieldPalette.success.hover.helperText,
          },
        },
        focus: {
          wrapper: {
            ...commonTextFieldStyles.desktop.success.focus.wrapper,
            ...textFieldPalette.success.focus.wrapper,
          },
          input: {
            ...commonTextFieldStyles.desktop.success.focus.input,
            ...textFieldPalette.success.focus.input,
          },
          label: {
            ...commonTextFieldStyles.desktop.success.focus.label,
            ...textFieldPalette.success.focus.label,
          },
          helperText: {
            ...commonTextFieldStyles.desktop.success.focus.helperText,
            ...textFieldPalette.success.focus.helperText,
          },
        },
      },
      error: {
        idle: {
          wrapper: {
            ...commonTextFieldStyles.desktop.error.idle.wrapper,
            ...textFieldPalette.error.idle.wrapper,
          },
          input: {
            ...commonTextFieldStyles.desktop.error.idle.input,
            ...textFieldPalette.error.idle.input,
          },
          label: {
            ...commonTextFieldStyles.desktop.error.idle.label,
            ...textFieldPalette.error.idle.label,
          },
          helperText: {
            ...commonTextFieldStyles.desktop.error.idle.helperText,
            ...textFieldPalette.error.idle.helperText,
          },
        },
        hover: {
          wrapper: {
            ...commonTextFieldStyles.desktop.error.hover.wrapper,
            ...textFieldPalette.error.hover.wrapper,
          },
          input: {
            ...commonTextFieldStyles.desktop.error.hover.input,
            ...textFieldPalette.error.hover.input,
          },
          label: {
            ...commonTextFieldStyles.desktop.error.hover.label,
            ...textFieldPalette.error.hover.label,
          },
          helperText: {
            ...commonTextFieldStyles.desktop.error.hover.helperText,
            ...textFieldPalette.error.hover.helperText,
          },
        },
        focus: {
          wrapper: {
            ...commonTextFieldStyles.desktop.error.focus.wrapper,
            ...textFieldPalette.error.focus.wrapper,
          },
          input: {
            ...commonTextFieldStyles.desktop.error.focus.input,
            ...textFieldPalette.error.focus.input,
          },
          label: {
            ...commonTextFieldStyles.desktop.error.focus.label,
            ...textFieldPalette.error.focus.label,
          },
          helperText: {
            ...commonTextFieldStyles.desktop.error.focus.helperText,
            ...textFieldPalette.error.focus.helperText,
          },
        },
      },
      disabled: {
        idle: {
          wrapper: {
            ...commonTextFieldStyles.desktop.disabled.idle.wrapper,
            ...textFieldPalette.disabled.idle.wrapper,
          },
          input: {
            ...commonTextFieldStyles.desktop.disabled.idle.input,
            ...textFieldPalette.disabled.idle.input,
          },
          label: {
            ...commonTextFieldStyles.desktop.disabled.idle.label,
            ...textFieldPalette.disabled.idle.label,
          },
          helperText: {
            ...commonTextFieldStyles.desktop.disabled.idle.helperText,
            ...textFieldPalette.disabled.idle.helperText,
          },
        },
        hover: {
          wrapper: {
            ...commonTextFieldStyles.desktop.disabled.hover.wrapper,
            ...textFieldPalette.disabled.hover.wrapper,
          },
          input: {
            ...commonTextFieldStyles.desktop.disabled.hover.input,
            ...textFieldPalette.disabled.hover.input,
          },
          label: {
            ...commonTextFieldStyles.desktop.disabled.hover.label,
            ...textFieldPalette.disabled.hover.label,
          },
          helperText: {
            ...commonTextFieldStyles.desktop.disabled.hover.helperText,
            ...textFieldPalette.disabled.hover.helperText,
          },
        },
        focus: {
          wrapper: {
            ...commonTextFieldStyles.desktop.disabled.focus.wrapper,
            ...textFieldPalette.disabled.focus.wrapper,
          },
          input: {
            ...commonTextFieldStyles.desktop.disabled.focus.input,
            ...textFieldPalette.disabled.focus.input,
          },
          label: {
            ...commonTextFieldStyles.desktop.disabled.focus.label,
            ...textFieldPalette.disabled.focus.label,
          },
          helperText: {
            ...commonTextFieldStyles.desktop.disabled.focus.helperText,
            ...textFieldPalette.disabled.focus.helperText,
          },
        },
      },
    },
    tablet: {
      default: {
        idle: {
          wrapper: {
            ...commonTextFieldStyles.tablet.default.idle.wrapper,
            ...textFieldPalette.default.idle.wrapper,
          },
          input: {
            ...commonTextFieldStyles.tablet.default.idle.input,
            ...textFieldPalette.default.idle.input,
          },
          label: {
            ...commonTextFieldStyles.tablet.default.idle.label,
            ...textFieldPalette.default.idle.label,
          },
          helperText: {
            ...commonTextFieldStyles.tablet.default.idle.helperText,
            ...textFieldPalette.default.idle.helperText,
          },
        },
        hover: {
          wrapper: {
            ...commonTextFieldStyles.tablet.default.hover.wrapper,
            ...textFieldPalette.default.hover.wrapper,
          },
          input: {
            ...commonTextFieldStyles.tablet.default.hover.input,
            ...textFieldPalette.default.hover.input,
          },
          label: {
            ...commonTextFieldStyles.tablet.default.hover.label,
            ...textFieldPalette.default.hover.label,
          },
          helperText: {
            ...commonTextFieldStyles.tablet.default.hover.helperText,
            ...textFieldPalette.default.hover.helperText,
          },
        },
        focus: {
          wrapper: {
            ...commonTextFieldStyles.tablet.default.focus.wrapper,
            ...textFieldPalette.default.focus.wrapper,
          },
          input: {
            ...commonTextFieldStyles.tablet.default.focus.input,
            ...textFieldPalette.default.focus.input,
          },
          label: {
            ...commonTextFieldStyles.tablet.default.focus.label,
            ...textFieldPalette.default.focus.label,
          },
          helperText: {
            ...commonTextFieldStyles.tablet.default.focus.helperText,
            ...textFieldPalette.default.focus.helperText,
          },
        },
      },
      success: {
        idle: {
          wrapper: {
            ...commonTextFieldStyles.tablet.success.idle.wrapper,
            ...textFieldPalette.success.idle.wrapper,
          },
          input: {
            ...commonTextFieldStyles.tablet.success.idle.input,
            ...textFieldPalette.success.idle.input,
          },
          label: {
            ...commonTextFieldStyles.tablet.success.idle.label,
            ...textFieldPalette.success.idle.label,
          },
          helperText: {
            ...commonTextFieldStyles.tablet.success.idle.helperText,
            ...textFieldPalette.success.idle.helperText,
          },
        },
        hover: {
          wrapper: {
            ...commonTextFieldStyles.tablet.success.hover.wrapper,
            ...textFieldPalette.success.hover.wrapper,
          },
          input: {
            ...commonTextFieldStyles.tablet.success.hover.input,
            ...textFieldPalette.success.hover.input,
          },
          label: {
            ...commonTextFieldStyles.tablet.success.hover.label,
            ...textFieldPalette.success.hover.label,
          },
          helperText: {
            ...commonTextFieldStyles.tablet.success.hover.helperText,
            ...textFieldPalette.success.hover.helperText,
          },
        },
        focus: {
          wrapper: {
            ...commonTextFieldStyles.tablet.success.focus.wrapper,
            ...textFieldPalette.success.focus.wrapper,
          },
          input: {
            ...commonTextFieldStyles.tablet.success.focus.input,
            ...textFieldPalette.success.focus.input,
          },
          label: {
            ...commonTextFieldStyles.tablet.success.focus.label,
            ...textFieldPalette.success.focus.label,
          },
          helperText: {
            ...commonTextFieldStyles.tablet.success.focus.helperText,
            ...textFieldPalette.success.focus.helperText,
          },
        },
      },
      error: {
        idle: {
          wrapper: {
            ...commonTextFieldStyles.tablet.error.idle.wrapper,
            ...textFieldPalette.error.idle.wrapper,
          },
          input: {
            ...commonTextFieldStyles.tablet.error.idle.input,
            ...textFieldPalette.error.idle.input,
          },
          label: {
            ...commonTextFieldStyles.tablet.error.idle.label,
            ...textFieldPalette.error.idle.label,
          },
          helperText: {
            ...commonTextFieldStyles.tablet.error.idle.helperText,
            ...textFieldPalette.error.idle.helperText,
          },
        },
        hover: {
          wrapper: {
            ...commonTextFieldStyles.tablet.error.hover.wrapper,
            ...textFieldPalette.error.hover.wrapper,
          },
          input: {
            ...commonTextFieldStyles.tablet.error.hover.input,
            ...textFieldPalette.error.hover.input,
          },
          label: {
            ...commonTextFieldStyles.tablet.error.hover.label,
            ...textFieldPalette.error.hover.label,
          },
          helperText: {
            ...commonTextFieldStyles.tablet.error.hover.helperText,
            ...textFieldPalette.error.hover.helperText,
          },
        },
        focus: {
          wrapper: {
            ...commonTextFieldStyles.tablet.error.focus.wrapper,
            ...textFieldPalette.error.focus.wrapper,
          },
          input: {
            ...commonTextFieldStyles.tablet.error.focus.input,
            ...textFieldPalette.error.focus.input,
          },
          label: {
            ...commonTextFieldStyles.tablet.error.focus.label,
            ...textFieldPalette.error.focus.label,
          },
          helperText: {
            ...commonTextFieldStyles.tablet.error.focus.helperText,
            ...textFieldPalette.error.focus.helperText,
          },
        },
      },
      disabled: {
        idle: {
          wrapper: {
            ...commonTextFieldStyles.tablet.disabled.idle.wrapper,
            ...textFieldPalette.disabled.idle.wrapper,
          },
          input: {
            ...commonTextFieldStyles.tablet.disabled.idle.input,
            ...textFieldPalette.disabled.idle.input,
          },
          label: {
            ...commonTextFieldStyles.tablet.disabled.idle.label,
            ...textFieldPalette.disabled.idle.label,
          },
          helperText: {
            ...commonTextFieldStyles.tablet.disabled.idle.helperText,
            ...textFieldPalette.disabled.idle.helperText,
          },
        },
        hover: {
          wrapper: {
            ...commonTextFieldStyles.tablet.disabled.hover.wrapper,
            ...textFieldPalette.disabled.hover.wrapper,
          },
          input: {
            ...commonTextFieldStyles.tablet.disabled.hover.input,
            ...textFieldPalette.disabled.hover.input,
          },
          label: {
            ...commonTextFieldStyles.tablet.disabled.hover.label,
            ...textFieldPalette.disabled.hover.label,
          },
          helperText: {
            ...commonTextFieldStyles.tablet.disabled.hover.helperText,
            ...textFieldPalette.disabled.hover.helperText,
          },
        },
        focus: {
          wrapper: {
            ...commonTextFieldStyles.tablet.disabled.focus.wrapper,
            ...textFieldPalette.disabled.focus.wrapper,
          },
          input: {
            ...commonTextFieldStyles.tablet.disabled.focus.input,
            ...textFieldPalette.disabled.focus.input,
          },
          label: {
            ...commonTextFieldStyles.tablet.disabled.focus.label,
            ...textFieldPalette.disabled.focus.label,
          },
          helperText: {
            ...commonTextFieldStyles.tablet.disabled.focus.helperText,
            ...textFieldPalette.disabled.focus.helperText,
          },
        },
      },
    },
    mobile: {
      default: {
        idle: {
          wrapper: {
            ...commonTextFieldStyles.mobile.default.idle.wrapper,
            ...textFieldPalette.default.idle.wrapper,
          },
          input: {
            ...commonTextFieldStyles.mobile.default.idle.input,
            ...textFieldPalette.default.idle.input,
          },
          label: {
            ...commonTextFieldStyles.mobile.default.idle.label,
            ...textFieldPalette.default.idle.label,
          },
          helperText: {
            ...commonTextFieldStyles.mobile.default.idle.helperText,
            ...textFieldPalette.default.idle.helperText,
          },
        },
        hover: {
          wrapper: {
            ...commonTextFieldStyles.mobile.default.hover.wrapper,
            ...textFieldPalette.default.hover.wrapper,
          },
          input: {
            ...commonTextFieldStyles.mobile.default.hover.input,
            ...textFieldPalette.default.hover.input,
          },
          label: {
            ...commonTextFieldStyles.mobile.default.hover.label,
            ...textFieldPalette.default.hover.label,
          },
          helperText: {
            ...commonTextFieldStyles.mobile.default.hover.helperText,
            ...textFieldPalette.default.hover.helperText,
          },
        },
        focus: {
          wrapper: {
            ...commonTextFieldStyles.mobile.default.focus.wrapper,
            ...textFieldPalette.default.focus.wrapper,
          },
          input: {
            ...commonTextFieldStyles.mobile.default.focus.input,
            ...textFieldPalette.default.focus.input,
          },
          label: {
            ...commonTextFieldStyles.mobile.default.focus.label,
            ...textFieldPalette.default.focus.label,
          },
          helperText: {
            ...commonTextFieldStyles.mobile.default.focus.helperText,
            ...textFieldPalette.default.focus.helperText,
          },
        },
      },
      success: {
        idle: {
          wrapper: {
            ...commonTextFieldStyles.mobile.success.idle.wrapper,
            ...textFieldPalette.success.idle.wrapper,
          },
          input: {
            ...commonTextFieldStyles.mobile.success.idle.input,
            ...textFieldPalette.success.idle.input,
          },
          label: {
            ...commonTextFieldStyles.mobile.success.idle.label,
            ...textFieldPalette.success.idle.label,
          },
          helperText: {
            ...commonTextFieldStyles.mobile.success.idle.helperText,
            ...textFieldPalette.success.idle.helperText,
          },
        },
        hover: {
          wrapper: {
            ...commonTextFieldStyles.mobile.success.hover.wrapper,
            ...textFieldPalette.success.hover.wrapper,
          },
          input: {
            ...commonTextFieldStyles.mobile.success.hover.input,
            ...textFieldPalette.success.hover.input,
          },
          label: {
            ...commonTextFieldStyles.mobile.success.hover.label,
            ...textFieldPalette.success.hover.label,
          },
          helperText: {
            ...commonTextFieldStyles.mobile.success.hover.helperText,
            ...textFieldPalette.success.hover.helperText,
          },
        },
        focus: {
          wrapper: {
            ...commonTextFieldStyles.mobile.success.focus.wrapper,
            ...textFieldPalette.success.focus.wrapper,
          },
          input: {
            ...commonTextFieldStyles.mobile.success.focus.input,
            ...textFieldPalette.success.focus.input,
          },
          label: {
            ...commonTextFieldStyles.mobile.success.focus.label,
            ...textFieldPalette.success.focus.label,
          },
          helperText: {
            ...commonTextFieldStyles.mobile.success.focus.helperText,
            ...textFieldPalette.success.focus.helperText,
          },
        },
      },
      error: {
        idle: {
          wrapper: {
            ...commonTextFieldStyles.mobile.error.idle.wrapper,
            ...textFieldPalette.error.idle.wrapper,
          },
          input: {
            ...commonTextFieldStyles.mobile.error.idle.input,
            ...textFieldPalette.error.idle.input,
          },
          label: {
            ...commonTextFieldStyles.mobile.error.idle.label,
            ...textFieldPalette.error.idle.label,
          },
          helperText: {
            ...commonTextFieldStyles.mobile.error.idle.helperText,
            ...textFieldPalette.error.idle.helperText,
          },
        },
        hover: {
          wrapper: {
            ...commonTextFieldStyles.mobile.error.hover.wrapper,
            ...textFieldPalette.error.hover.wrapper,
          },
          input: {
            ...commonTextFieldStyles.mobile.error.hover.input,
            ...textFieldPalette.error.hover.input,
          },
          label: {
            ...commonTextFieldStyles.mobile.error.hover.label,
            ...textFieldPalette.error.hover.label,
          },
          helperText: {
            ...commonTextFieldStyles.mobile.error.hover.helperText,
            ...textFieldPalette.error.hover.helperText,
          },
        },
        focus: {
          wrapper: {
            ...commonTextFieldStyles.mobile.error.focus.wrapper,
            ...textFieldPalette.error.focus.wrapper,
          },
          input: {
            ...commonTextFieldStyles.mobile.error.focus.input,
            ...textFieldPalette.error.focus.input,
          },
          label: {
            ...commonTextFieldStyles.mobile.error.focus.label,
            ...textFieldPalette.error.focus.label,
          },
          helperText: {
            ...commonTextFieldStyles.mobile.error.focus.helperText,
            ...textFieldPalette.error.focus.helperText,
          },
        },
      },
      disabled: {
        idle: {
          wrapper: {
            ...commonTextFieldStyles.mobile.disabled.idle.wrapper,
            ...textFieldPalette.disabled.idle.wrapper,
          },
          input: {
            ...commonTextFieldStyles.mobile.disabled.idle.input,
            ...textFieldPalette.disabled.idle.input,
          },
          label: {
            ...commonTextFieldStyles.mobile.disabled.idle.label,
            ...textFieldPalette.disabled.idle.label,
          },
          helperText: {
            ...commonTextFieldStyles.mobile.disabled.idle.helperText,
            ...textFieldPalette.disabled.idle.helperText,
          },
        },
        hover: {
          wrapper: {
            ...commonTextFieldStyles.mobile.disabled.hover.wrapper,
            ...textFieldPalette.disabled.hover.wrapper,
          },
          input: {
            ...commonTextFieldStyles.mobile.disabled.hover.input,
            ...textFieldPalette.disabled.hover.input,
          },
          label: {
            ...commonTextFieldStyles.mobile.disabled.hover.label,
            ...textFieldPalette.disabled.hover.label,
          },
          helperText: {
            ...commonTextFieldStyles.mobile.disabled.hover.helperText,
            ...textFieldPalette.disabled.hover.helperText,
          },
        },
        focus: {
          wrapper: {
            ...commonTextFieldStyles.mobile.disabled.focus.wrapper,
            ...textFieldPalette.disabled.focus.wrapper,
          },
          input: {
            ...commonTextFieldStyles.mobile.disabled.focus.input,
            ...textFieldPalette.disabled.focus.input,
          },
          label: {
            ...commonTextFieldStyles.mobile.disabled.focus.label,
            ...textFieldPalette.disabled.focus.label,
          },
          helperText: {
            ...commonTextFieldStyles.mobile.disabled.focus.helperText,
            ...textFieldPalette.disabled.focus.helperText,
          },
        },
      },
    },
  };
};
