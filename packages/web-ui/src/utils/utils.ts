import { spacingBase } from '../tokens';
import { Breakpoints } from '../types';

export const px = (value: string | number): string => `${value}px`;
export const spacing = (multiplier: number) => multiplier * spacingBase;
export const globalPrefix = 'uwu';
export const getPrefixedName = (name: string) => `${globalPrefix}-${name}`;
export const classSelector = (className: string) => `&:where(.${className})`;
export const responsiveClassSelector = (className: string, breakpoint: Breakpoints) =>
  `&:where(.${breakpoint}\\:${className})`;
