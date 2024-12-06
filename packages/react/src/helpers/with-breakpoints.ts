import type { Breakpoints, Responsive } from '../types/responsive';

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
