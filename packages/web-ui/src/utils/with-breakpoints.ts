import { Breakpoints, Responsive } from '../types';
import { withGlobalPrefix } from './utils';

export const withBreakpoints = (
  value: Responsive<string | boolean> | undefined,
  stylePrefix = ''
) => {
  if (typeof value === 'string') {
    return withGlobalPrefix(`${stylePrefix}-${value}`);
  }
  if (typeof value === 'boolean' && value === true) {
    return withGlobalPrefix(`${stylePrefix}`);
  }
  if (typeof value === 'object') {
    const initialBreakpoint = 'mobile';
    const classes = (Object.keys(value) as Array<Breakpoints>)
      // remove any false values
      .filter(bp => value[bp])
      .map(bp => {
        const responsiveValue = value[bp];
        if (typeof responsiveValue === 'string') {
          const baseClassName = withGlobalPrefix(`${stylePrefix}-${responsiveValue}`);
          const className = bp === initialBreakpoint ? baseClassName : `${bp}:${baseClassName}`;
          return className;
        }
        if (typeof responsiveValue === 'boolean' && responsiveValue === true) {
          const baseClassName = withGlobalPrefix(stylePrefix);
          const className = bp === initialBreakpoint ? baseClassName : `${bp}:${baseClassName}`;
          return className;
        }
      });

    return classes.join(' ');
  }
};
