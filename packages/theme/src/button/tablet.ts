import {
  spacingBase,
  fonts,
  fontWeights,
} from "@utilitywarehouse/customer-ui-design-tokens";
import { ButtonStyles } from "./types";

export const tabletPrimaryLargeIdle: ButtonStyles = {
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
  fontSize: 18,
  lineHeight: 1,

  opacity: 1,
  transition: "",
};

export const tabletPrimaryLargeActive: ButtonStyles = {
  ...tabletPrimaryLargeIdle,
};

export const tabletPrimaryLargeDisabled: ButtonStyles = {
  ...tabletPrimaryLargeIdle,
  opacity: 0.3,
};

export const tabletPrimaryRegularIdle: ButtonStyles = {
  ...tabletPrimaryLargeIdle,
  height: spacingBase * 4,
  paddingLeft: spacingBase * 2,
  paddingRight: spacingBase * 2,
  borderTopLeftRadius: spacingBase * (4 / 2),
  borderTopRightRadius: spacingBase * (4 / 2),
  borderBottomLeftRadius: spacingBase * (4 / 2),
  borderBottomRightRadius: spacingBase * (4 / 2),
};

export const tabletPrimaryRegularActive: ButtonStyles = {
  ...tabletPrimaryRegularIdle,
};

export const tabletPrimaryRegularDisabled: ButtonStyles = {
  ...tabletPrimaryRegularIdle,
  opacity: 0.3,
};

export const tabletSecondaryLargeIdle: ButtonStyles = {
  ...tabletPrimaryLargeIdle,
  borderTopWidth: 2,
  borderBottomWidth: 2,
  borderLeftWidth: 2,
  borderRightWidth: 2,
};

export const tabletSecondaryLargeActive: ButtonStyles = {
  ...tabletSecondaryLargeIdle,
};

export const tabletSecondaryLargeDisabled: ButtonStyles = {
  ...tabletSecondaryLargeIdle,
  opacity: 0.3,
};

export const tabletSecondaryRegularIdle: ButtonStyles = {
  ...tabletSecondaryLargeIdle,
  height: spacingBase * 4,
  paddingLeft: spacingBase * 2,
  paddingRight: spacingBase * 2,
  borderTopLeftRadius: spacingBase * (4 / 2),
  borderTopRightRadius: spacingBase * (4 / 2),
  borderBottomLeftRadius: spacingBase * (4 / 2),
  borderBottomRightRadius: spacingBase * (4 / 2),
};

export const tabletSecondaryRegularActive: ButtonStyles = {
  ...tabletSecondaryRegularIdle,
};

export const tabletSecondaryRegularDisabled: ButtonStyles = {
  ...tabletSecondaryRegularIdle,
  opacity: 0.3,
};

export const tabletTertiaryLargeIdle: ButtonStyles = {
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

export const tabletTertiaryLargeActive: ButtonStyles = {
  ...tabletTertiaryLargeIdle,
  opacity: 0.5,
};

export const tabletTertiaryLargeDisabled: ButtonStyles = {
  ...tabletTertiaryLargeIdle,
  opacity: 0.3,
};

export const tabletTertiaryRegularIdle: ButtonStyles = {
  ...tabletTertiaryLargeIdle,
};

export const tabletTertiaryRegularActive: ButtonStyles = {
  ...tabletTertiaryRegularIdle,
  opacity: 0.5,
};

export const tabletTertiaryRegularDisabled: ButtonStyles = {
  ...tabletTertiaryRegularIdle,
  opacity: 0.3,
};
