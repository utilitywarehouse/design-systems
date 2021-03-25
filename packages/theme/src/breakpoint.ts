import * as designTokens from "@utilitywarehouse/customer-ui-design-tokens";

export type Breakpoint = "desktop" | "tablet" | "mobile";

export const breakpoints: { [key in Breakpoint]: number } = {
  desktop: designTokens.breakpoints.desktop,
  tablet: designTokens.breakpoints.tablet,
  mobile: designTokens.breakpoints.mobile,
};
