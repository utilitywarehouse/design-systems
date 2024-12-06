import type { Breakpoints, Responsive } from '../types/responsive';
import { isResponsiveObject } from './is-responsive-object';

type GetClassNameStylesOptions = {
  value: Responsive<string> | undefined;
  prefix: string | undefined;
  tokens: ReadonlyArray<string> | undefined;
  isResponsive: boolean;
};

export const getClassNameStyles = ({
  value,
  prefix,
  tokens,
  isResponsive,
}: GetClassNameStylesOptions) => {
  const responsivePrefix = isResponsive ? '-r' : '';
  if (typeof value === 'string') {
    const isTokenValue = tokens?.includes(value);
    if (isTokenValue) {
      return { className: `uwp${responsivePrefix}-${prefix}-${value}` };
    }
    return {
      className: `uwp${responsivePrefix}-${prefix}`,
      style: { [`-${responsivePrefix}-${prefix}`]: value },
    };
  }

  if (isResponsiveObject(value)) {
    const initialBreakpoint = 'mobile';
    const classes = (Object.keys(value) as Array<Breakpoints>).map(bp => {
      const breakpointValue = value[bp];
      if (breakpointValue !== undefined) {
        const isTokenValue = tokens?.includes(breakpointValue);
        let baseClassName: string;
        if (isTokenValue) {
          baseClassName = `uwp${responsivePrefix}-${prefix}-${breakpointValue}`;
        } else {
          baseClassName = `uwp${responsivePrefix}-${prefix}`;
        }
        const className = bp === initialBreakpoint ? baseClassName : `${bp}:${baseClassName}`;
        return className;
      }
    });
    const styles = (Object.keys(value) as Array<Breakpoints>).reduce(
      (acc: { [key: string]: string | number }, bp: Breakpoints) => {
        const breakpointValue = value[bp];
        const isTokenValue = tokens?.includes(breakpointValue);
        if (breakpointValue !== undefined && !isTokenValue) {
          const baseStyleName = `-${responsivePrefix}-${prefix}`;
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
  return { className: '', styles: {} };
};
