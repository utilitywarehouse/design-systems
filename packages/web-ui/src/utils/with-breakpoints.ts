import { Breakpoints, Responsive } from '../types';
import { getPrefixedName } from './utils';

export const withBreakpoints = (value: Responsive<string> | undefined, prefix = '') => {
  if (typeof value === 'string') {
    return getPrefixedName(`${prefix}-${value}`);
  }

  const classes: string[] = [];
  if (typeof value === 'object') {
    for (const bp of Object.keys(value) as Breakpoints[]) {
      if (bp in value) {
        const baseClassName = getPrefixedName(`${prefix}-${value[bp]}`);
        const className = bp === 'mobile' ? baseClassName : `${bp}:${baseClassName}`;
        classes.push(className);
      }
    }
    return classes.reverse().join(' ');
  }
};
