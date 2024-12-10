import type { Breakpoints, Responsive } from '../types/responsive';
import { isResponsiveObject } from './is-responsive-object';
import { GLOBAL_PREFIX } from './with-global-prefix';

type GetClassNameStylesOptions = {
  value: Responsive<string | number> | undefined;
  prefix: string | undefined;
  tokens: ReadonlyArray<string | number> | undefined;
  isResponsive: boolean;
  defaultValue?: string | number;
};

export const getClassNameStyles = ({
  value,
  prefix,
  tokens,
  isResponsive,
  defaultValue,
}: GetClassNameStylesOptions) => {
  const responsivePrefix = isResponsive ? '-r' : '';

  if (value === undefined && defaultValue) {
    return { className: `${GLOBAL_PREFIX}${responsivePrefix}-${prefix}-${defaultValue}` };
  }

  if (typeof value === 'string' || typeof value === 'number') {
    const isTokenValue = tokens?.includes(value);
    if (isTokenValue) {
      return { className: `${GLOBAL_PREFIX}${responsivePrefix}-${prefix}-${value}` };
    }
    return {
      className: `${GLOBAL_PREFIX}${responsivePrefix}-${prefix}`,
      style: { [`-${responsivePrefix}-${prefix}`]: value || defaultValue },
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
          baseClassName = `${GLOBAL_PREFIX}${responsivePrefix}-${prefix}-${breakpointValue}`;
        } else {
          baseClassName = `${GLOBAL_PREFIX}${responsivePrefix}-${prefix}`;
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
