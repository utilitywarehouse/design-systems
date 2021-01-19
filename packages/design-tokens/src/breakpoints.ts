import { px } from "./helpers";

const bps = [320, 768, 1024, 1440]; // Sketch defaults
const mq = bps.map((bp) => `@media (min-width: ${bp}px)`);

const breakpoints = {
  sm: px(bps[0]),
  md: px(bps[1]),
  lg: px(bps[2]),
  xl: px(bps[3]),
  mobile: px(bps[0]),
  tablet: px(bps[1]),
  desktop: px(bps[2]),
  desktopHd: px(bps[3]),
};

const mediaQueries = {
  sm: mq[0],
  md: mq[1],
  lg: mq[2],
  xl: mq[3],
  mobile: mq[0],
  tablet: mq[1],
  desktop: mq[2],
  desktopHd: mq[3],
};

type Breakpoints = typeof breakpoints;
type MediaQueries = typeof mediaQueries;

export { breakpoints, Breakpoints, mediaQueries, MediaQueries };
