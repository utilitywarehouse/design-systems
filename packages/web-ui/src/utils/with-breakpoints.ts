import { Breakpoints, Responsive } from '../types';
import { withPrefix } from './utils';

export const withBreakpoints = (value: Responsive<string> | undefined, prefix = '') => {
  if (typeof value === 'string') {
    return withPrefix(`${prefix}-${value}`);
  }

  if (typeof value === 'object') {
    const initialBreakpoint = 'mobile';
    const classes = (Object.keys(value) as Breakpoints[]).map(bp => {
      const baseClassName = withPrefix(`${prefix}-${value[bp]}`);
      const className = bp === initialBreakpoint ? baseClassName : `${bp}:${baseClassName}`;
      return className;
    });
    return classes.join(' ');
  }
};
