import { spacingBase } from '../tokens';

export const GLOBAL_PREFIX = 'uwu';

export function px(value: string | number): string {
  return `${value}px`;
}

export function spacing(multiplier: number) {
  return multiplier * spacingBase;
}

export function withGlobalPrefix(name: string) {
  return `${GLOBAL_PREFIX}-${name}`;
}
