import { Breakpoints, Responsive } from '../types';
import { withGlobalPrefix } from './utils';

export const withBreakpoints = (value: Responsive<string> | undefined, prefix = '') => {
  if (typeof value === 'string') {
    return withGlobalPrefix(`${prefix}-${value}`);
  }

  if (typeof value === 'object') {
    const initialBreakpoint = 'mobile';
    const classes = (Object.keys(value) as Array<Breakpoints>).map(bp => {
      const baseClassName = withGlobalPrefix(`${prefix}-${value[bp]}`);
      const className = bp === initialBreakpoint ? baseClassName : `${bp}:${baseClassName}`;
      return className;
    });
    return classes.join(' ');
  }
};
