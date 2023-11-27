import { spacingBase } from '../tokens';
import { Breakpoints } from '../types';

export const GLOBAL_PREFIX = 'uwu';

export const px = (value: string | number): string => `${value}px`;
export const spacing = (multiplier: number) => multiplier * spacingBase;

export const withPrefix = (name: string) => `${GLOBAL_PREFIX}-${name}`;
export const classSelector = (className: string) => `&:where(.${className})`;
export const responsiveClassSelector = (className: string, breakpoint: Breakpoints) =>
  `&:where(.${breakpoint}\\:${className})`;
