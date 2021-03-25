import { spacingBase } from "@utilitywarehouse/customer-ui-design-tokens";
import { ButtonStylesNonColor } from "./types";
import {
  commonDisabledStyles,
  commonIdleStyles,
  commonActiveStyles,
} from "./common";

export const tabletPrimaryLargeIdle: ButtonStylesNonColor = {
  ...(commonIdleStyles as ButtonStylesNonColor),
  height: spacingBase * 6,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: spacingBase * 3,
  paddingRight: spacingBase * 3,

  borderStyle: "solid",
  borderTopWidth: 0,
  borderBottomWidth: 0,
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopLeftRadius: spacingBase * (6 / 2),
  borderTopRightRadius: spacingBase * (6 / 2),
  borderBottomLeftRadius: spacingBase * (6 / 2),
  borderBottomRightRadius: spacingBase * (6 / 2),

  fontSize: 18,
  lineHeight: 1,
};

export const tabletPrimaryLargeActive: ButtonStylesNonColor = {
  ...tabletPrimaryLargeIdle,
  ...commonActiveStyles,
};

export const tabletPrimaryLargeDisabled: ButtonStylesNonColor = {
  ...tabletPrimaryLargeIdle,
  ...commonDisabledStyles,
};

export const tabletPrimaryRegularIdle: ButtonStylesNonColor = {
  ...tabletPrimaryLargeIdle,
  height: spacingBase * 4,
  paddingLeft: spacingBase * 2,
  paddingRight: spacingBase * 2,
  borderTopLeftRadius: spacingBase * (4 / 2),
  borderTopRightRadius: spacingBase * (4 / 2),
  borderBottomLeftRadius: spacingBase * (4 / 2),
  borderBottomRightRadius: spacingBase * (4 / 2),
};

export const tabletPrimaryRegularActive: ButtonStylesNonColor = {
  ...tabletPrimaryRegularIdle,
  ...commonActiveStyles,
};

export const tabletPrimaryRegularDisabled: ButtonStylesNonColor = {
  ...tabletPrimaryRegularIdle,
  ...commonDisabledStyles,
};

export const tabletSecondaryLargeIdle: ButtonStylesNonColor = {
  ...tabletPrimaryLargeIdle,
  borderTopWidth: 2,
  borderBottomWidth: 2,
  borderLeftWidth: 2,
  borderRightWidth: 2,
};

export const tabletSecondaryLargeActive: ButtonStylesNonColor = {
  ...tabletSecondaryLargeIdle,
  ...commonActiveStyles,
};

export const tabletSecondaryLargeDisabled: ButtonStylesNonColor = {
  ...tabletSecondaryLargeIdle,
  ...commonDisabledStyles,
};

export const tabletSecondaryRegularIdle: ButtonStylesNonColor = {
  ...tabletSecondaryLargeIdle,
  height: spacingBase * 4,
  paddingLeft: spacingBase * 2,
  paddingRight: spacingBase * 2,
  borderTopLeftRadius: spacingBase * (4 / 2),
  borderTopRightRadius: spacingBase * (4 / 2),
  borderBottomLeftRadius: spacingBase * (4 / 2),
  borderBottomRightRadius: spacingBase * (4 / 2),
};

export const tabletSecondaryRegularActive: ButtonStylesNonColor = {
  ...tabletSecondaryRegularIdle,
  ...commonActiveStyles,
};

export const tabletSecondaryRegularDisabled: ButtonStylesNonColor = {
  ...tabletSecondaryRegularIdle,
  ...commonDisabledStyles,
};

export const tabletTertiaryLargeIdle: ButtonStylesNonColor = {
  ...tabletPrimaryLargeIdle,
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

export const tabletTertiaryLargeActive: ButtonStylesNonColor = {
  ...tabletTertiaryLargeIdle,
  ...commonActiveStyles,
  opacity: 0.5,
};

export const tabletTertiaryLargeDisabled: ButtonStylesNonColor = {
  ...tabletTertiaryLargeIdle,
  ...commonDisabledStyles,
};

export const tabletTertiaryRegularIdle: ButtonStylesNonColor = {
  ...tabletTertiaryLargeIdle,
};

export const tabletTertiaryRegularActive: ButtonStylesNonColor = {
  ...tabletTertiaryRegularIdle,
  ...commonActiveStyles,
  opacity: 0.5,
};

export const tabletTertiaryRegularDisabled: ButtonStylesNonColor = {
  ...tabletTertiaryRegularIdle,
  ...commonDisabledStyles,
};
