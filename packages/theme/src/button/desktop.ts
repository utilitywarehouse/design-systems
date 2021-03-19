import {
  spacingBase,
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { ButtonStyles } from "./types";

export const desktopPrimaryLargeIdle: ButtonStyles = {
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

export const desktopPrimaryLargeActive: ButtonStyles = {
  ...desktopPrimaryLargeIdle,
};

export const desktopPrimaryLargeDisabled: ButtonStyles = {
  ...desktopPrimaryLargeIdle,
  opacity: 0.3,
};

export const desktopPrimaryRegularIdle: ButtonStyles = {
  ...desktopPrimaryLargeIdle,
  height: spacingBase * 5,
  paddingLeft: spacingBase * 3,
  paddingRight: spacingBase * 3,
  borderTopLeftRadius: spacingBase * (5 / 2),
  borderTopRightRadius: spacingBase * (5 / 2),
  borderBottomLeftRadius: spacingBase * (5 / 2),
  borderBottomRightRadius: spacingBase * (5 / 2),
};

export const desktopPrimaryRegularActive: ButtonStyles = {
  ...desktopPrimaryRegularIdle,
};

export const desktopPrimaryRegularDisabled: ButtonStyles = {
  ...desktopPrimaryRegularIdle,
  opacity: 0.3,
};

export const desktopSecondaryLargeIdle: ButtonStyles = {
  ...desktopPrimaryLargeIdle,
  borderTopWidth: 2,
  borderBottomWidth: 2,
  borderLeftWidth: 2,
  borderRightWidth: 2,
};

export const desktopSecondaryLargeActive: ButtonStyles = {
  ...desktopSecondaryLargeIdle,
};

export const desktopSecondaryLargeDisabled: ButtonStyles = {
  ...desktopSecondaryLargeIdle,
  opacity: 0.3,
};

export const desktopSecondaryRegularIdle: ButtonStyles = {
  ...desktopSecondaryLargeIdle,
  height: spacingBase * 5,
  paddingLeft: spacingBase * 3,
  paddingRight: spacingBase * 3,
  borderTopLeftRadius: spacingBase * (5 / 2),
  borderTopRightRadius: spacingBase * (5 / 2),
  borderBottomLeftRadius: spacingBase * (5 / 2),
  borderBottomRightRadius: spacingBase * (5 / 2),
};

export const desktopSecondaryRegularActive: ButtonStyles = {
  ...desktopSecondaryRegularIdle,
};

export const desktopSecondaryRegularDisabled: ButtonStyles = {
  ...desktopSecondaryRegularIdle,
  opacity: 0.3,
};

export const desktopTertiaryLargeIdle: ButtonStyles = {
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

export const desktopTertiaryLargeActive: ButtonStyles = {
  ...desktopTertiaryLargeIdle,
  opacity: 0.5,
};

export const desktopTertiaryLargeDisabled: ButtonStyles = {
  ...desktopTertiaryLargeIdle,
  opacity: 0.3,
};

export const desktopTertiaryRegularIdle: ButtonStyles = {
  ...desktopTertiaryLargeIdle,
};

export const desktopTertiaryRegularActive: ButtonStyles = {
  ...desktopTertiaryRegularIdle,
  opacity: 0.5,
};

export const desktopTertiaryRegularDisabled: ButtonStyles = {
  ...desktopTertiaryRegularIdle,
  opacity: 0.3,
};
