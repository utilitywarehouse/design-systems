import { breakpoints } from '../tokens/breakpoints';

/**
 * A lot of this file is directly copied from MUI - https://github.com/mui/material-ui/blob/next/packages/mui-system/src/createTheme/createBreakpoints.js
 */

const unit = 'px';
const step = 100;
const mq = (breakpoint: string) => `@media (min-width: ${breakpoint})`;
const keys = Object.keys(breakpoints);

type Breakpoint = keyof typeof breakpoints;

/**
 * Returns a min-width media query string matching screen widths greater than the screen size given by the breakpoint.
 */
function above(breakpoint: Breakpoint) {
  const bp = breakpoints[breakpoint];
  if (bp === 0) {
    return '@media all';
  }
  return mq(bp + unit);
}

/**
 * Returns a max-width media query string matching screen widths less than than the screen size given by the breakpoint.
 */
function below(breakpoint: Breakpoint) {
  return `@media not all and (min-width:${breakpoints[breakpoint] + unit})`;
}

/**
 * Returns a media query string matching screen widths greater than the given start screen size and less than the given end screen size.
 */
function between(start: Breakpoint, end: Breakpoint) {
  return (
    `@media (min-width:${breakpoints[start] + unit}) and ` +
    `(max-width:${breakpoints[end] - step / 100 + unit})`
  );
}

/**
 * Returns a media query string matching screen widths starting from the given screen size and stopping just before the next breakpoint.
 */
function only(breakpoint: Breakpoint) {
  if (keys.indexOf(breakpoint) + 1 < keys.length) {
    return between(breakpoint, keys[keys.indexOf(breakpoint) + 1] as Breakpoint);
  }
  return above(breakpoint);
}

/**
 * Returns a media query string matching screen widths stopping at the given screen size and starting just before the next breakpoint.
 */
function not(breakpoint: Breakpoint) {
  const keyIndex = keys.indexOf(breakpoint);
  if (keyIndex === 0) {
    return above(keys[1] as Breakpoint);
  }
  if (keyIndex === keys.length - 1) {
    return below(keys[keyIndex] as Breakpoint);
  }
  const end = keys[keys.indexOf(breakpoint as string) + 1] as Breakpoint;
  return between(breakpoint, end).replace('@media', '@media not all and');
}

export const media = {
  above,
  below,
  between,
  only,
  not,
  /* mobile first media queries mirroring the design system breakpoint values */
  mobile: '@media all',
  tablet: mq(breakpoints.tablet + unit),
  desktop: mq(breakpoints.desktop + unit),
  wide: mq(breakpoints.wide + unit),
};
