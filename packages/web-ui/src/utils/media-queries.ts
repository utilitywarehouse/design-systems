/* eslint-disable @typescript-eslint/ban-types */
import { breakpoints } from '../tokens';

const unit = 'px';
const step = 1;
const mq = (breakpoint: string) => `@media (min-width:${breakpoint})`;
const keys = Object.keys(breakpoints);

type BreakpointsKey = keyof typeof breakpoints;
type Breakpoint = BreakpointsKey | number | (string & {});

/**
 * Returns a min-width media query string matching screen widths greater than the screen size given by the breakpoint.
 *
 * Intended for use with the built-in breakpoint keys; "mobile", "tablet", "desktop", "wide",
 * but also accepts numbers, which will be used as px values, and arbitrary strings.
 */
function above(breakpoint: Breakpoint) {
  const value =
    typeof breakpoints[breakpoint as BreakpointsKey] === 'number'
      ? breakpoints[breakpoint as BreakpointsKey] + unit
      : typeof breakpoint === 'number'
        ? breakpoint + unit
        : breakpoint;
  return mq(value);
}

/**
 * Returns a max-width media query string matching screen widths less than than the screen size given by the breakpoint.
 *
 * Intended for use with the built-in breakpoint keys; "mobile", "tablet", "desktop", "wide",
 * but also accepts numbers, which will be used as px values, and arbitrary strings.
 */
function below(breakpoint: Breakpoint) {
  const value =
    typeof breakpoints[breakpoint as BreakpointsKey] === 'number'
      ? breakpoints[breakpoint as BreakpointsKey] + unit
      : typeof breakpoint === 'number'
        ? breakpoint + unit
        : breakpoint;
  return `@media (max-width:${value})`;
}

/**
 * Returns a media query string matching screen widths greater than the given start screen size and less than the given end screen size.
 *
 * Intended for use with the built-in breakpoint keys; "mobile", "tablet", "desktop", "wide",
 * but also accepts numbers, which will be used as px values, and arbitrary strings.
 */
function between(start: Breakpoint, end: Breakpoint) {
  const endIndex = keys.indexOf(end as string);
  return (
    `@media (min-width:${
      typeof breakpoints[start as BreakpointsKey] === 'number'
        ? breakpoints[start as BreakpointsKey] + unit
        : typeof start === 'number'
          ? start + unit
          : start
    }) and ` +
    `(max-width:${
      endIndex !== -1 && typeof breakpoints[keys[endIndex] as BreakpointsKey] === 'number'
        ? breakpoints[end as BreakpointsKey] - step + unit
        : typeof end === 'number'
          ? end + unit
          : end
    })`
  );
}

function only(breakpoint: BreakpointsKey) {
  if (!keys.includes(breakpoint)) return;

  if (keys.indexOf(breakpoint as string) + 1 < keys.length) {
    return between(breakpoint, keys[keys.indexOf(breakpoint as string) + 1] as Breakpoint);
  }
  return above(breakpoint);
}

function not(breakpoint: BreakpointsKey) {
  if (!keys.includes(breakpoint)) return;

  // handle first and last key separately, for better readability
  const keyIndex = keys.indexOf(breakpoint as string);
  if (keyIndex === 0) {
    return above(keys[1] as Breakpoint);
  }
  if (keyIndex === keys.length - 1) {
    return below(keys[keyIndex] as Breakpoint);
  }

  return between(breakpoint, keys[keys.indexOf(breakpoint as string) + 1] as Breakpoint).replace(
    '@media',
    '@media not all and'
  );
}

/* mobile first media queries mirroring the Web UI breakpoint values */
export const mediaQueries = {
  mobile: mq(breakpoints.mobile + unit),
  tablet: mq(breakpoints.tablet + unit),
  desktop: mq(breakpoints.desktop + unit),
  wide: mq(breakpoints.wide + unit),
  above,
  below,
  between,
  only,
  not,
};
