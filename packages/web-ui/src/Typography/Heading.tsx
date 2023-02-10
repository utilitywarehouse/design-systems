import * as React from 'react';
import type { TypographyProps } from './Typography';
import Typography from './Typography';

export type HeadingProps<C extends React.ElementType = 'h2'> = Omit<
  TypographyProps<C, { component: C }>,
  'variant' | 'fontWeight' | 'color' | 'bold'
> & {
  variant: 'displayHeading' | 'h1' | 'h2' | 'h3' | 'h4';
  color?: 'primary' | 'secondary';
};

function Heading<C extends React.ElementType>({ component, variant, ...props }: HeadingProps<C>) {
  return <Typography component={component} variant={variant} {...props} />;
}

export default Heading;
