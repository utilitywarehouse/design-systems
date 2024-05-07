import { spacingBase } from '../tokens';

/* The Web UI global prefix, mostly used with component class names */
export const GLOBAL_PREFIX = 'uwu';

/* returns the given value as a string with px suffix */
export function px(value: string | number): string {
  return `${value}px`;
}

/* returns the given value as a multiplier of the spacing base value, ie. spacing(2) => 2 * spacingBase */
export function spacing(multiplier: number) {
  return multiplier * spacingBase;
}

/* returns the given value prefixed with the Web UI global prefix */
export function withGlobalPrefix(name: string) {
  return `${GLOBAL_PREFIX}-${name}`;
}
