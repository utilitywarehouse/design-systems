import {
  spacingBase,
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { ButtonStylesNonColor } from "./types";

export const mobilePrimaryLargeIdle: ButtonStylesNonColor = {
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

  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.semibold,
  fontSize: 16,
  lineHeight: 1,

  opacity: 1,
  transition: "",
};

export const mobilePrimaryLargeActive: ButtonStylesNonColor = {
  ...mobilePrimaryLargeIdle,
};

export const mobilePrimaryLargeDisabled: ButtonStylesNonColor = {
  ...mobilePrimaryLargeIdle,
  opacity: 0.3,
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
};

export const mobilePrimaryRegularDisabled: ButtonStylesNonColor = {
  ...mobilePrimaryRegularIdle,
  opacity: 0.3,
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
};

export const mobileSecondaryLargeDisabled: ButtonStylesNonColor = {
  ...mobileSecondaryLargeIdle,
  opacity: 0.3,
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
};

export const mobileSecondaryRegularDisabled: ButtonStylesNonColor = {
  ...mobileSecondaryRegularIdle,
  opacity: 0.3,
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
  opacity: 0.5,
};

export const mobileTertiaryLargeDisabled: ButtonStylesNonColor = {
  ...mobileTertiaryLargeIdle,
  opacity: 0.3,
};

export const mobileTertiaryRegularIdle: ButtonStylesNonColor = {
  ...mobileTertiaryLargeIdle,
};

export const mobileTertiaryRegularActive: ButtonStylesNonColor = {
  ...mobileTertiaryRegularIdle,
  opacity: 0.5,
};

export const mobileTertiaryRegularDisabled: ButtonStylesNonColor = {
  ...mobileTertiaryRegularIdle,
  opacity: 0.3,
};
