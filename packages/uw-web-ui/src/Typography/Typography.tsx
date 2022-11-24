import * as React from 'react';
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { dataAttributes, isInverseBackgroundColor } from '../utils';
import { BoxProps } from '../Box';
import { useBackground } from '../Background';

type DefaultComponent = 'p';

export const variantMapping: { [key: string]: string } = {
  displayHeading: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subtitle: 'p',
  body: 'p',
  legalNote: 'p',
  caption: 'span',
};

interface CustomProps<D extends React.ElementType = DefaultComponent, P = {}>
  extends Pick<
    MuiTypographyProps<D, P>,
    | 'align'
    | 'children'
    | 'className'
    | 'classes'
    | 'gutterBottom'
    | 'letterSpacing'
    | 'noWrap'
    | 'paragraph'
    | 'sx'
    | 'textTransform'
  > {
  color?: 'primary' | 'secondary' | 'success' | 'error';
  component: BoxProps['component'];
  bold?: boolean;
  variant: MuiTypographyProps['variant'];
}

interface TypeMap<D extends React.ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type TypographyProps<D extends React.ElementType = DefaultComponent, P = {}> = OverrideProps<
  TypeMap<D, P>,
  D
>;

const Typography = React.forwardRef(function Typography(
  { color = 'primary', bold = false, className, ...props },
  ref
) {
  const { backgroundColor } = useBackground();
  const inverse = isInverseBackgroundColor(backgroundColor);

  const dataAttributeProps = {
    [`data-${dataAttributes[color]}`]: true,
    [`data-${dataAttributes.inverse}`]: inverse,
    [`data-${dataAttributes.bold}`]: bold,
  };

  return (
    <MuiTypography
      {...props}
      variantMapping={variantMapping}
      className={className}
      ref={ref}
      {...dataAttributeProps}
    />
  );
}) as OverridableComponent<TypeMap>;

export default Typography;
