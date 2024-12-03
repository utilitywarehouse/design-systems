import type { Breakpoints, Responsive } from '../types/responsive';
import { isResponsiveObject } from './is-responsive-object';

export const withBreakpoints = (value: Responsive<string> | undefined, prefix = '') => {
  if (typeof value === 'string') {
    return `uwp-r-${prefix}-${value}`;
  }

  if (typeof value === 'object') {
    const initialBreakpoint = 'mobile';
    const classes = (Object.keys(value) as Array<Breakpoints>).map(bp => {
      const breakpointValue = value[bp];
      if (breakpointValue !== undefined) {
        const baseClassName = `uwp-r-${prefix}-${breakpointValue}`;
        const className = bp === initialBreakpoint ? baseClassName : `${bp}:${baseClassName}`;
        return className;
      }
    });
    return classes.join(' ');
  }
};

type GetResponsiveClassnamesOptions = {
  value: Responsive<string> | undefined;
  prefix: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tokenValues: ReadonlyArray<any> | undefined;
};

export const getResponsiveClassnames = ({
  value,
  prefix,
  tokenValues,
}: GetResponsiveClassnamesOptions) => {
  if (typeof value === 'string') {
    const isTokenValue = tokenValues?.includes(value);
    if (isTokenValue) {
      return `uwp-r-${prefix}-${value}`;
    }
    return `uwp-r-${prefix}`;
  }

  if (isResponsiveObject(value)) {
    const initialBreakpoint = 'mobile';
    const classes = (Object.keys(value) as Array<Breakpoints>).map(bp => {
      const breakpointValue = value[bp];
      if (breakpointValue !== undefined) {
        const isTokenValue = tokenValues?.includes(breakpointValue);
        console.log({ isTokenValue });
        let baseClassName: string;
        if (isTokenValue) {
          baseClassName = `uwp-r-${prefix}-${breakpointValue}`;
        } else {
          baseClassName = `uwp-r-${prefix}`;
        }
        const className = bp === initialBreakpoint ? baseClassName : `${bp}:${baseClassName}`;
        return className;
      }
    });
    return classes.join(' ');
  }
};
