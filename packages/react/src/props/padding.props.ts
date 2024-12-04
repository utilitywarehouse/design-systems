import { Responsive, Union } from '../types/responsive';

const paddingTokens = [
  '25',
  '50',
  '75',
  '100',
  '150',
  '200',
  '250',
  '300',
  '350',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '1000',
] as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PropsMeta<T = any> = {
  values: ReadonlyArray<T>; // rename tokens?
  className: string;
  responsive: boolean; // ???
  hasTokens: boolean; // ???
};

const paddingPropsMeta = {
  padding: {
    className: 'padding',
    values: paddingTokens,
    responsive: true,
    hasTokens: true,
  },
  paddingTop: {
    className: 'padding-top',
    values: paddingTokens,
    responsive: true,
    hasTokens: true,
  },
} satisfies {
  padding: PropsMeta<(typeof paddingTokens)[number]>;
  paddingTop: PropsMeta<(typeof paddingTokens)[number]>;
};

interface PaddingProps {
  padding?: Responsive<Union<string, (typeof paddingTokens)[number]>>;
  paddingTop?: Responsive<Union<string, (typeof paddingTokens)[number]>>;
  paddingRight?: Responsive<string>;
  paddingBottom?: Responsive<string>;
  paddingLeft?: Responsive<string>;
  paddingInline?: Responsive<string>;
  paddingBlock?: Responsive<string>;
}

export { paddingPropsMeta };
export type { PaddingProps };
