import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';
import { OverrideProps } from '@mui/types';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { dataAttributes } from '../utils';
import { PropsWithSx } from '../types';
import { useBackground } from '../Background/Background';
import { fonts, fontWeights } from '../tokens';
import { TypographyProps } from './Typography.props';

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
  component?: React.ElementType;
  fontWeight?: TypographyProps['fontWeight'];
  /** @deprecated The variant prop is deprecated and will be removed in v1 */
  variant?: MuiTypographyProps['variant'];
}

export type DefaultLegacyTypographyComponent = 'p';

export interface LegacyTypographyTypeMap<
  AdditionalProps = {},
  DefaultComponent extends React.ElementType = 'span'
> {
  props: AdditionalProps & PropsWithChildren<PropsWithSx<LegacyTypographyOwnProps>>;
  defaultComponent: DefaultComponent;
}

export type LegacyTypographyProps<
  RootComponent extends React.ElementType = LegacyTypographyTypeMap['defaultComponent'],
  AdditionalProps = {}
> = OverrideProps<LegacyTypographyTypeMap<AdditionalProps, RootComponent>, RootComponent> & {
  component?: React.ElementType;
};

export const isBrandBackgroundColor = (backgroundColor: string): boolean => {
  if (backgroundColor === 'midnight' || backgroundColor === 'purple') {
    return true;
  }
  return false;
};

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
  { color, variant, component = 'body', fontWeight = 'regular', ...props },
  ref
) {
  const isLegacyTextVariant = variant && Object.keys(textVariantMapping).includes(variant);
  const isLegacyHeadingVariant = variant && Object.keys(headingVariantMapping).includes(variant);
  const isLegacyColor = [undefined, 'primary', 'secondary', 'success', 'error'].includes(
    color as string
  );
  const { backgroundColor } = useBackground();
  const getLegacyColor = () => {
    if (!isLegacyColor) return color;
    if (isLegacyHeadingVariant) {
      console.warn(
        'The Typography variant prop is deprecated, please use the Heading component instead'
      );
      if (isBrandBackgroundColor(backgroundColor)) {
        return colorsCommon.brandWhite;
      }
      if (color === 'secondary') {
        return colorsCommon.brandMidnight;
      } else {
        return colorsCommon.brandPrimaryPurple;
      }
    }
    if (isLegacyTextVariant) {
      console.warn(
        'The Typography variant prop is deprecated, please use the Text component instead'
      );
      if (color === 'error') {
        if (isBrandBackgroundColor(`${backgroundColor}`)) {
          return colors.rose400;
        } else {
          return colors.red600;
        }
      }
      if (color === 'success') {
        if (isBrandBackgroundColor(`${backgroundColor}`)) {
          return colors.apple400;
        } else {
          return colors.green700;
        }
      }
      return isBrandBackgroundColor(`${backgroundColor}`)
        ? colorsCommon.brandWhite
        : colorsCommon.brandMidnight;
    }
  };

  return (
    <MuiTypography
      ref={ref}
      fontFamily={isLegacyHeadingVariant ? fonts.primary : fonts.secondary}
      fontWeight={
        isLegacyHeadingVariant
          ? fontWeights.primary
          : fontWeight === 'regular'
          ? fontWeights.secondary.regular
          : fontWeights.secondary.semibold
      }
      color={getLegacyColor()}
      component={component || 'p'}
      variant={variant}
      {...props}
    />
  );
}) as OverridableComponent<LegacyTypographyTypeMap>;
