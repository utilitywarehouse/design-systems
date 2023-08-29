import { forwardRef } from 'react';
import MuiTypography from '@mui/material/Typography';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { dataAttributes } from '../utils';

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

export type DefaultComponent = 'p';

export interface CustomProps {
  color?: string | 'primary' | 'secondary' | 'success' | 'error';
  /** @deprecated The variant prop is deprecated and will be removed in v1 */
  variant?: MuiTypographyProps['variant'];
  component?: React.ElementType;
}

export interface TypeMap<D extends React.ElementType = DefaultComponent, P = {}> {
  props: MuiTypographyProps<D, P> & CustomProps;
  defaultComponent: D;
}

export type LegacyTypographyProps<
  D extends React.ElementType = DefaultComponent,
  P = {}
> = OverrideProps<TypeMap<D, P>, D>;

/**
 * > This component is only required when building a custom field that isn’t
 * > provided by UW Web UI, or for backwards compatability with the
 * > `customer-ui-material` library.
 *
 * `Typography` is an all purpose component intended for custom typography needs.
 * Most of the time you should be using `Text` or `Heading`. Typography is not
 * affected by any Box context and will not change foreground colour according to
 * the containing Box background prop value.
 *
 * ## Deprecated legacy variants
 *
 * The `variant` prop is currently available for backward compatability with
 * `customer-ui-material`, but is deprecated and will be removed in the next major
 * version (`v1`), in favour of the `Text` & `Heading` components.
 *
 * ## Alternatives
 *
 * - `Heading` for heading-level text
 * - `Text` for body text
 */
export const LegacyTypography = forwardRef(function LegacyTypography(
  { color, variant, component, ...props },
  ref
) {
  console.log({ color });
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
        [`data-${dataAttributes.legacy}`]: true,
        // @ts-ignore
        [`data-${dataAttributes[getLegacyColor(color)]}`]: true,
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
}) as OverridableComponent<TypeMap>;
