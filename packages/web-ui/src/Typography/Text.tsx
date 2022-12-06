import * as React from 'react';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import type { TypographyProps } from './Typography';
import Typography from './Typography';

type DefaultComponent = 'p';

type CustomProps<D extends React.ElementType = DefaultComponent, P = {}> = Omit<
  TypographyProps<D, P>,
  'variant' | 'fontWeight' | 'color'
> & {
  variant: 'subtitle' | 'body' | 'legalNote' | 'caption';
  color?: 'primary' | 'success' | 'error';
};

interface TypeMap<D extends React.ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type TextProps<D extends React.ElementType = DefaultComponent, P = {}> = OverrideProps<
  TypeMap<D, P>,
  D
>;

const Text = React.forwardRef(function Text(props, ref) {
  return <Typography ref={ref} {...props} />;
}) as OverridableComponent<TypeMap>;

export default Text;
