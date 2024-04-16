import * as React from 'react';
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';
import { OverrideProps } from '@mui/types';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { DATA_ATTRIBUTES } from '../utils';
import { PropsWithSx } from '../types';

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

export interface LegacyTypographyOwnProps extends ComponentPropsWithoutRef<'span'> {
  color?: string | 'primary' | 'secondary' | 'success' | 'error';
  /** @deprecated The variant prop is deprecated and will be removed in v1 */
  variant?: MuiTypographyProps['variant'];
  component?: React.ElementType;
}

export type DefaultLegacyTypographyComponent = 'p';

export interface LegacyTypographyTypeMap<
  AdditionalProps = object,
  DefaultComponent extends React.ElementType = 'span'
> {
  props: AdditionalProps & PropsWithChildren<PropsWithSx<LegacyTypographyOwnProps>>;
  defaultComponent: DefaultComponent;
}

export type LegacyTypographyProps<
  RootComponent extends React.ElementType = LegacyTypographyTypeMap['defaultComponent'],
  AdditionalProps = object
> = OverrideProps<LegacyTypographyTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};

export const LegacyTypography = forwardRef(function LegacyTypography(
  { color, variant, component = 'body', ...props },
  ref
) {
  const isLegacyTextVariant = variant && Object.keys(textVariantMapping).includes(variant);
  const isLegacyHeadingVariant = variant && Object.keys(headingVariantMapping).includes(variant);
  const isLegacyColor = [undefined, 'primary', 'secondary', 'success', 'error'].includes(
    color as string
  );
  const getLegacyColor = (textColor: string) => {
    if (textColor === undefined) return 'primary';
    if (isLegacyColor) return textColor;
    return 'primary';
  };
  const dataAttributeProps = isLegacyColor
    ? {
        [DATA_ATTRIBUTES.legacy]: true,
        // @ts-expect-error this code is deprecated and soon to be removed
        [DATA_ATTRIBUTES[getLegacyColor(color)]]: true,
      }
    : {};

  if (isLegacyTextVariant) {
    console.warn(
      'The Typography variant prop is deprecated, please use the Text component instead'
    );
  }
  if (isLegacyHeadingVariant) {
    console.warn(
      'The Typography variant prop is deprecated, please use the Heading component instead'
    );
  }

  return (
    <MuiTypography
      ref={ref}
      color={color || colorsCommon.brandMidnight}
      component={component || 'p'}
      variant={variant}
      {...dataAttributeProps}
      {...props}
    />
  );
}) as OverridableComponent<LegacyTypographyTypeMap>;
