import type { Breakpoints, Responsive } from '../types/responsive';

export const withBreakpointStyles = (
  value: Responsive<string | number> | undefined,
  prefix = ''
) => {
  if (value === '') {
    return undefined;
  }
  if (typeof value === 'string' || typeof value === 'number') {
    return { className: `uwp-r-${prefix}`, style: { [`--${prefix}`]: value } };
  }

  if (typeof value === 'object') {
    const initialBreakpoint = 'mobile';
    const classes = (Object.keys(value) as Array<Breakpoints>).map(bp => {
      const breakpointValue = value[bp];
      if (breakpointValue !== undefined) {
        const baseClassName = `uwp-r-${prefix}`;
        const className = bp === initialBreakpoint ? baseClassName : `${bp}:${baseClassName}`;
        return className;
      }
    });
    const styles = (Object.keys(value) as Array<Breakpoints>).reduce(
      (acc: { [key: string]: string | number }, bp: Breakpoints) => {
        const breakpointValue = value[bp];
        if (breakpointValue !== undefined) {
          const baseStyleName = `--${prefix}`;
          const styleName = bp === initialBreakpoint ? baseStyleName : `${baseStyleName}-${bp}`;
          acc[styleName] = breakpointValue;
          return acc;
        }
        return acc;
      },
      {}
    );

    return { className: classes.join(' '), style: styles };
  }
};
