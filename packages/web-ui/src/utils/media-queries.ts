/* eslint-disable @typescript-eslint/ban-types */
import { breakpoints } from '../tokens';

const unit = 'px';
const step = 1;
const mq = (breakpoint: string) => `@media (min-width:${breakpoint})`;
const keys = Object.keys(breakpoints);

type Breakpoint = keyof typeof breakpoints;
type Ass = Breakpoint | number | (string & {});

/**
 * Returns a min-width media query string matching screen widths greater than the screen size given by the breakpoint.
 *
 * Intended for use with the built-in breakpoint keys; "mobile", "tablet", "desktop", "wide",
 * but also accepts numbers, which will be used as px values, and arbitrary strings.
 */
function above(breakpoint: Breakpoint) {
  if (!keys.includes(breakpoint)) return;
  return mq(breakpoints[breakpoint] + unit);
}

/**
 * Returns a max-width media query string matching screen widths less than than the screen size given by the breakpoint.
 *
 * Intended for use with the built-in breakpoint keys; "mobile", "tablet", "desktop", "wide",
 * but also accepts numbers, which will be used as px values, and arbitrary strings.
 */
function below(breakpoint: Breakpoint) {
  if (!keys.includes(breakpoint)) return;
  return `@media (max-width:${breakpoints[breakpoint] + unit})`;
}

/**
 * Returns a media query string matching screen widths greater than the given start screen size and less than the given end screen size.
 *
 * Intended for use with the built-in breakpoint keys; "mobile", "tablet", "desktop", "wide",
 * but also accepts numbers, which will be used as px values, and arbitrary strings.
 */
function between(start: Breakpoint, end: Breakpoint) {
  if (!keys.includes(start) || !keys.includes(end)) return '';
  return (
    `@media (min-width:${breakpoints[start] + unit}) and ` +
    `(max-width:${breakpoints[end] - step + unit})`
  );
}

function only(breakpoint: Breakpoint) {
  if (!keys.includes(breakpoint)) return '';

  if (keys.indexOf(breakpoint) + 1 < keys.length) {
    return between(breakpoint, keys[keys.indexOf(breakpoint) + 1] as Breakpoint);
  }
  return above(breakpoint);
}

function not(breakpoint: Breakpoint) {
  if (!keys.includes(breakpoint)) return '';

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
