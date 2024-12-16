/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { UnistylesThemes } from 'react-native-unistyles';
import useTheme from './useTheme';

type UnistylesTokens<T> = T extends keyof UnistylesThemes ? keyof UnistylesThemes[T] : string;

export type GenericKey = string | number | symbol;

export interface Tokens {
  colors?: { [key: GenericKey]: Record<string, any> & object };
  sizes?: { [key: GenericKey]: Record<string, any> & object };
  space?: { [key: GenericKey]: Record<string, any> & object };
  borderWidths?: { [key: GenericKey]: Record<string, any> & object };
  radii?: { [key: GenericKey]: Record<string, any> & object };
  breakpoints?: { [key: GenericKey]: Record<string, any> & object };
  mediaQueries?: { [key: GenericKey]: Record<string, any> & object };
  letterSpacings?: { [key: GenericKey]: Record<string, any> & object };
  opacity?: { [key: GenericKey]: Record<string, any> & object };
  lineHeights?: { [key: GenericKey]: any };
  fontWeights?: { [key: GenericKey]: any };
  fonts?: { [key: GenericKey]: any };
  fontSizes?: { [key: GenericKey]: any };
}

/**
 *
 * @param tokenScale Token scale ex: colors, space, fontSizes, etc
 * @param token Token name ex: primary200, red500, 1, 2, sm, etc
 * @returns
 */
const useToken = <T extends keyof Tokens>(tokenScale: T, token: UnistylesTokens<T>) => {
  const theme = useTheme();

  // @ts-expect-error - This is a valid check
  return theme?.[tokenScale]?.[token] ?? token;
};

export default useToken;
