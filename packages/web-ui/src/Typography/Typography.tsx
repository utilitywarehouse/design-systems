import * as React from 'react';
import { forwardRef, PropsWithChildren } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';
import { OverrideProps } from '@mui/types';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { withGlobalPrefix } from '../utils';
import { PropsWithSx } from '../types';
import { useBackground } from '../Box';
import clsx from 'clsx';

const PREFIX = withGlobalPrefix('Typography');
export const typographyClasses: { [key: string]: string } = {
  primary: `${PREFIX}-primary`,
  secondary: `${PREFIX}-secondary`,
  success: `${PREFIX}-success`,
  error: `${PREFIX}-error`,
  inverse: `${PREFIX}-inverse`,
  semibold: `${PREFIX}-semibold`,
};

export const textVariantMapping: Record<string, string> = {
  subtitle: 'p',
  body: 'p',
  legalNote: 'p',
  caption: 'span',
};
export const headingVariantMapping: Record<string, string> = {
  displayHeading: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

export type DefaultLegacyTypographyComponent = 'p';

export interface LegacyTypographyOwnProps<
  D extends React.ElementType = DefaultLegacyTypographyComponent,
  P = object,
> extends Pick<
    MuiTypographyProps<D, P>,
    | 'sx'
    | 'gutterBottom'
    | 'paragraph'
    | 'align'
    | 'classes'
    | 'className'
    | 'noWrap'
    | 'textTransform'
    | 'letterSpacing'
    | 'children'
    | 'variant'
  > {
  color?: string;
  fontWeight?: 'regular' | 'semibold';
  component?: React.ElementType;
}

export interface LegacyTypographyTypeMap<
  AdditionalProps = object,
  DefaultComponent extends React.ElementType = 'span',
> {
  props: AdditionalProps & PropsWithChildren<PropsWithSx<LegacyTypographyOwnProps>>;
  defaultComponent: DefaultComponent;
}

export type TypographyProps<
  RootComponent extends React.ElementType = LegacyTypographyTypeMap['defaultComponent'],
  AdditionalProps = object,
> = OverrideProps<LegacyTypographyTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};

export const Typography = forwardRef(function LegacyTypography(
  { color = 'primary', variant = 'body', fontWeight = 'regular', className, component, ...props },
  ref
) {
  const { isInvertedBackground } = useBackground();
  const classNames = clsx(
    typographyClasses[color],
    {
      [typographyClasses.inverse as string]: isInvertedBackground,
      [typographyClasses.semibold as string]: fontWeight === 'semibold',
    },
    className
  );

  return (
    <MuiTypography
      ref={ref}
      color={color || colorsCommon.brandMidnight}
      component={component || 'p'}
      variant={variant}
      className={classNames}
      {...props}
    />
  );
}) as OverridableComponent<LegacyTypographyTypeMap>;
