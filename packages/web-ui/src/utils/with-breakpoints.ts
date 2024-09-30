import { withGlobalPrefix } from './utils';

import { Breakpoints, Responsive } from '../types';

/** Translates a responsive object of boolean values to a responsive object of string values. To be used with `withBreakpoints`. */
export const translateBooleanValues = (
  value: Responsive<boolean>,
  translation: { true: string; false: string }
) => {
  if (typeof value === 'boolean') {
    return translation[`${value}`];
  }
  if (typeof value === 'object') {
    const updated = (Object.keys(value) as Array<Breakpoints>).reduce(
      (acc: { [key: string]: string }, bp: Breakpoints) => {
        const breakpointValue = value[bp];
        if (breakpointValue !== undefined) {
          acc[bp] = translation[`${breakpointValue}`];
        }
        return acc;
      },
      {}
    );
    return updated as Responsive<string>;
  }
};

/** Creates a string of responsive classes */
export const withBreakpoints = (value: Responsive<string> | undefined, prefix = '') => {
  if (typeof value === 'string') {
    return withGlobalPrefix(`${prefix}-${value}`);
  }

  if (typeof value === 'object') {
    const initialBreakpoint = 'mobile';
    const classes = (Object.keys(value) as Array<Breakpoints>).map(bp => {
      const breakpointValue = value[bp];
      if (breakpointValue !== undefined) {
        const baseClassName = withGlobalPrefix(`${prefix}-${breakpointValue}`);
        const className = bp === initialBreakpoint ? baseClassName : `${bp}:${baseClassName}`;
        return className;
      }
    });
    return classes.join(' ');
  }
};
