import { Responsive, Union } from '../types/responsive';

const paddingValues = [
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
  values: ReadonlyArray<T>;
  responsive: boolean;
};

const paddingPropsMeta = {
  padding: {
    values: paddingValues,
    responsive: true,
  },
} satisfies {
  padding: PropsMeta<(typeof paddingValues)[number]>;
};

interface PaddingProps {
  padding?: Responsive<Union<string, (typeof paddingValues)[number]>>;
  paddingTop?: Responsive<string>;
  paddingRight?: Responsive<string>;
  paddingBottom?: Responsive<string>;
  paddingLeft?: Responsive<string>;
  paddingInline?: Responsive<string>;
  paddingBlock?: Responsive<string>;
}

export { paddingPropsMeta };
export type { PaddingProps };
