import {
  spacingBase,
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { ButtonStylesNonColor } from "./types";

export const desktopPrimaryLargeIdle: ButtonStylesNonColor = {
  height: spacingBase * 7,
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

  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.semibold,
  fontSize: 18,
  lineHeight: 1,

  opacity: 1,
  transition: "",
};

export const desktopPrimaryLargeActive: ButtonStylesNonColor = {
  ...desktopPrimaryLargeIdle,
};

export const desktopPrimaryLargeDisabled: ButtonStylesNonColor = {
  ...desktopPrimaryLargeIdle,
  opacity: 0.3,
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
};

export const desktopPrimaryRegularDisabled: ButtonStylesNonColor = {
  ...desktopPrimaryRegularIdle,
  opacity: 0.3,
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
};

export const desktopSecondaryLargeDisabled: ButtonStylesNonColor = {
  ...desktopSecondaryLargeIdle,
  opacity: 0.3,
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
};

export const desktopSecondaryRegularDisabled: ButtonStylesNonColor = {
  ...desktopSecondaryRegularIdle,
  opacity: 0.3,
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
  opacity: 0.5,
};

export const desktopTertiaryLargeDisabled: ButtonStylesNonColor = {
  ...desktopTertiaryLargeIdle,
  opacity: 0.3,
};

export const desktopTertiaryRegularIdle: ButtonStylesNonColor = {
  ...desktopTertiaryLargeIdle,
};

export const desktopTertiaryRegularActive: ButtonStylesNonColor = {
  ...desktopTertiaryRegularIdle,
  opacity: 0.5,
};

export const desktopTertiaryRegularDisabled: ButtonStylesNonColor = {
  ...desktopTertiaryRegularIdle,
  opacity: 0.3,
};
