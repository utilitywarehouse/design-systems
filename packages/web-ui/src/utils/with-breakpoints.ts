import { Breakpoints, Responsive } from '../types';
import { getPrefixedName } from './utils';

export const withBreakpoints = (value: Responsive<string> | undefined, prefix = '') => {
  if (typeof value === 'string') {
    return getPrefixedName(`${prefix}-${value}`);
  }

  if (typeof value === 'object') {
    const classes = (Object.keys(value) as Breakpoints[]).map(bp => {
      const baseClassName = getPrefixedName(`${prefix}-${value[bp]}`);
      const className = bp === 'mobile' ? baseClassName : `${bp}:${baseClassName}`;
      return className;
    });
    return classes.join(' ');

    // const classes: string[] = [];
    // for (const bp of Object.keys(value) as Breakpoints[]) {
    //   if (bp in value) {
    //     const baseClassName = getPrefixedName(`${prefix}-${value[bp]}`);
    //     const className = bp === 'mobile' ? baseClassName : `${bp}:${baseClassName}`;
    //     classes.push(className);
    //   }
    // }
    // return classes.join(' ');
  }

  if (typeof value === 'object') {
    const classes: string[] = [];
    for (const bp of Object.keys(value) as Breakpoints[]) {
      if (bp in value) {
        const baseClassName = getPrefixedName(`${prefix}-${value[bp]}`);
        const className = bp === 'mobile' ? baseClassName : `${bp}:${baseClassName}`;
        classes.push(className);
      }
    }
    return classes.join(' ');
  }
};
