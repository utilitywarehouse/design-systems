import { spacingBase } from "@utilitywarehouse/customer-ui-design-tokens";
import { ButtonStylesNonColor } from "./types";
import {
  commonDisabledStyles,
  commonIdleStyles,
  commonActiveStyles,
} from "./common";

export const mobilePrimaryLargeIdle: ButtonStylesNonColor = {
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

  fontSize: 16,
  lineHeight: 1,
};

export const mobilePrimaryLargeActive: ButtonStylesNonColor = {
  ...mobilePrimaryLargeIdle,
  ...commonActiveStyles,
};

export const mobilePrimaryLargeDisabled: ButtonStylesNonColor = {
  ...mobilePrimaryLargeIdle,
  ...commonDisabledStyles,
};

export const mobilePrimaryRegularIdle: ButtonStylesNonColor = {
  ...mobilePrimaryLargeIdle,
  height: spacingBase * 4,
  paddingLeft: spacingBase * 2,
  paddingRight: spacingBase * 2,
  borderTopLeftRadius: spacingBase * (4 / 2),
  borderTopRightRadius: spacingBase * (4 / 2),
  borderBottomLeftRadius: spacingBase * (4 / 2),
  borderBottomRightRadius: spacingBase * (4 / 2),
};

export const mobilePrimaryRegularActive: ButtonStylesNonColor = {
  ...mobilePrimaryRegularIdle,
  ...commonActiveStyles,
};

export const mobilePrimaryRegularDisabled: ButtonStylesNonColor = {
  ...mobilePrimaryRegularIdle,
  ...commonDisabledStyles,
};

export const mobileSecondaryLargeIdle: ButtonStylesNonColor = {
  ...mobilePrimaryLargeIdle,
  borderTopWidth: 2,
  borderBottomWidth: 2,
  borderLeftWidth: 2,
  borderRightWidth: 2,
};

export const mobileSecondaryLargeActive: ButtonStylesNonColor = {
  ...mobileSecondaryLargeIdle,
  ...commonActiveStyles,
};

export const mobileSecondaryLargeDisabled: ButtonStylesNonColor = {
  ...mobileSecondaryLargeIdle,
  ...commonDisabledStyles,
};

export const mobileSecondaryRegularIdle: ButtonStylesNonColor = {
  ...mobileSecondaryLargeIdle,
  height: spacingBase * 4,
  paddingLeft: spacingBase * 2,
  paddingRight: spacingBase * 2,
  borderTopLeftRadius: spacingBase * (4 / 2),
  borderTopRightRadius: spacingBase * (4 / 2),
  borderBottomLeftRadius: spacingBase * (4 / 2),
  borderBottomRightRadius: spacingBase * (4 / 2),
};

export const mobileSecondaryRegularActive: ButtonStylesNonColor = {
  ...mobileSecondaryRegularIdle,
  ...commonActiveStyles,
};

export const mobileSecondaryRegularDisabled: ButtonStylesNonColor = {
  ...mobileSecondaryRegularIdle,
  ...commonDisabledStyles,
};

export const mobileTertiaryLargeIdle: ButtonStylesNonColor = {
  ...mobilePrimaryLargeIdle,
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

export const mobileTertiaryLargeActive: ButtonStylesNonColor = {
  ...mobileTertiaryLargeIdle,
  ...commonActiveStyles,
  opacity: 0.5,
};

export const mobileTertiaryLargeDisabled: ButtonStylesNonColor = {
  ...mobileTertiaryLargeIdle,
  ...commonDisabledStyles,
};

export const mobileTertiaryRegularIdle: ButtonStylesNonColor = {
  ...mobileTertiaryLargeIdle,
};

export const mobileTertiaryRegularActive: ButtonStylesNonColor = {
  ...mobileTertiaryRegularIdle,
  ...commonActiveStyles,
  opacity: 0.5,
};

export const mobileTertiaryRegularDisabled: ButtonStylesNonColor = {
  ...mobileTertiaryRegularIdle,
  ...commonDisabledStyles,
};
