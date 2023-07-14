import { spacingBase } from '../tokens';

export const px = (value: string | number): string => `${value}px`;
export const spacing = (multiplier: number) => multiplier * spacingBase;
export const uwWebUiPrefix = 'uwwui';
