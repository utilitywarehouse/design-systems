import { spacingBase } from "@utilitywarehouse/customer-ui-design-tokens";
import { ButtonStylesNonColor } from "./types";
import {
  commonDisabledStyles,
  commonIdleStyles,
  commonActiveStyles,
} from "./common";

export const desktopPrimaryLargeIdle: ButtonStylesNonColor = {
  ...(commonIdleStyles as ButtonStylesNonColor),
  height: "48px",
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: spacingBase * 4,
  paddingRight: spacingBase * 4,

  borderStyle: "solid",
  borderTopWidth: 0,
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopLeftRadius: spacingBase * (7 / 2),
  borderTopRightRadius: spacingBase * (7 / 2),
  borderBottomLeftRadius: spacingBase * (7 / 2),
  borderBottomRightRadius: spacingBase * (7 / 2),

  fontSize: 18,
  lineHeight: 1,
};

export const desktopPrimaryLargeActive: ButtonStylesNonColor = {
  ...desktopPrimaryLargeIdle,
  ...commonActiveStyles,
};

export const desktopPrimaryLargeDisabled: ButtonStylesNonColor = {
  ...desktopPrimaryLargeIdle,
  ...commonDisabledStyles,
};

export const desktopPrimaryRegularIdle: ButtonStylesNonColor = {
  ...desktopPrimaryLargeIdle,
  height: spacingBase * 5,
  paddingLeft: spacingBase * 3,
  paddingRight: spacingBase * 3,
  borderTopLeftRadius: spacingBase * (5 / 2),
  borderTopRightRadius: spacingBase * (5 / 2),
  borderBottomLeftRadius: spacingBase * (5 / 2),
  borderBottomRightRadius: spacingBase * (5 / 2),
};

export const desktopPrimaryRegularActive: ButtonStylesNonColor = {
  ...desktopPrimaryRegularIdle,
  ...commonActiveStyles,
};

export const desktopPrimaryRegularDisabled: ButtonStylesNonColor = {
  ...desktopPrimaryRegularIdle,
  ...commonDisabledStyles,
};

export const desktopSecondaryLargeIdle: ButtonStylesNonColor = {
  ...desktopPrimaryLargeIdle,
  borderTopWidth: 2,
  borderBottomWidth: 2,
  borderLeftWidth: 2,
  borderRightWidth: 2,
};

export const desktopSecondaryLargeActive: ButtonStylesNonColor = {
  ...desktopSecondaryLargeIdle,
  ...commonActiveStyles,
};

export const desktopSecondaryLargeDisabled: ButtonStylesNonColor = {
  ...desktopSecondaryLargeIdle,
  ...commonDisabledStyles,
};

export const desktopSecondaryRegularIdle: ButtonStylesNonColor = {
  ...desktopSecondaryLargeIdle,
  height: spacingBase * 5,
  paddingLeft: spacingBase * 3,
  paddingRight: spacingBase * 3,
  borderTopLeftRadius: spacingBase * (5 / 2),
  borderTopRightRadius: spacingBase * (5 / 2),
  borderBottomLeftRadius: spacingBase * (5 / 2),
  borderBottomRightRadius: spacingBase * (5 / 2),
};

export const desktopSecondaryRegularActive: ButtonStylesNonColor = {
  ...desktopSecondaryRegularIdle,
  ...commonActiveStyles,
};

export const desktopSecondaryRegularDisabled: ButtonStylesNonColor = {
  ...desktopSecondaryRegularIdle,
  ...commonDisabledStyles,
};

export const desktopTertiaryLargeIdle: ButtonStylesNonColor = {
  ...desktopPrimaryLargeIdle,
  height: "auto",
  paddingTop: 0,
  paddingBottom: 2,
  paddingLeft: 0,
  paddingRight: 0,
  borderTopWidth: 0,
  borderBottomWidth: 2,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  lineHeight: 1.333,
};

export const desktopTertiaryLargeActive: ButtonStylesNonColor = {
  ...desktopTertiaryLargeIdle,
  ...commonActiveStyles,
  opacity: 0.5,
};

export const desktopTertiaryLargeDisabled: ButtonStylesNonColor = {
  ...desktopTertiaryLargeIdle,
  ...commonDisabledStyles,
};

export const desktopTertiaryRegularIdle: ButtonStylesNonColor = {
  ...desktopTertiaryLargeIdle,
};

export const desktopTertiaryRegularActive: ButtonStylesNonColor = {
  ...desktopTertiaryRegularIdle,
  ...commonActiveStyles,
  opacity: 0.5,
};

export const desktopTertiaryRegularDisabled: ButtonStylesNonColor = {
  ...desktopTertiaryRegularIdle,
  ...commonDisabledStyles,
};
