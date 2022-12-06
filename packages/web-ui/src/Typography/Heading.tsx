import * as React from 'react';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import type { TypographyProps } from './Typography';
import Typography from './Typography';

type DefaultComponent = 'h2';

type CustomProps<D extends React.ElementType = DefaultComponent, P = {}> = Omit<
  TypographyProps<D, P>,
  'variant' | 'fontWeight' | 'color' | 'bold'
> & {
  variant: 'displayHeading' | 'h1' | 'h2' | 'h3' | 'h4';
  color?: 'primary' | 'secondary';
};

interface TypeMap<D extends React.ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type HeadingProps<D extends React.ElementType = DefaultComponent, P = {}> = OverrideProps<
  TypeMap<D, P>,
  D
>;

const Heading = React.forwardRef(function Heading(props, ref) {
  return <Typography ref={ref} {...props} />;
}) as OverridableComponent<TypeMap>;

export default Heading;
