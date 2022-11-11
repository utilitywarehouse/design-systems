import React from 'react';
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { clsx } from 'clsx';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { globalClassPrefix, isInverseBackgroundColor } from '../utils';
import { BoxProps } from '../Box';
import { useBackground } from '../Background';

const PREFIX = `${globalClassPrefix}-typography`;
export const typographyClasses = {
  primary: `${PREFIX}-primary`,
  secondary: `${PREFIX}-secondary`,
  success: `${PREFIX}-success`,
  error: `${PREFIX}-error`,
  inverse: `${PREFIX}-inverse`,
  bold: `${PREFIX}-bold`,
};

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

  const classNames = clsx(typographyClasses[color], {
    [typographyClasses.inverse]: isInverseBackgroundColor(backgroundColor),
    [typographyClasses.bold]: !!bold,
    className: !!className,
  });

  return (
    <MuiTypography {...props} variantMapping={variantMapping} className={classNames} ref={ref} />
  );
}) as OverridableComponent<TypeMap>;

export default Typography;
