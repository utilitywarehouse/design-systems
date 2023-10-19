import { Breakpoints, Responsive } from '../types';
import { getPrefixedName } from './utils';

export const withBreakpoints = (value: Responsive<string> | undefined, prefix = '') => {
  if (typeof value === 'string') {
    return getPrefixedName(`${prefix}-${value}`);
  }

  if (typeof value === 'object') {
    return (Object.keys(value) as Breakpoints[]).map(bp => {
      const baseClassName = getPrefixedName(`${prefix}-${value[bp]}`);
      const className = bp === 'mobile' ? baseClassName : `${bp}:${baseClassName}`;
      return className;
    }).join(' ');
  }
};
