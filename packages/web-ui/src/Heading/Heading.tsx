import { forwardRef } from 'react';
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { pxToRem } from '../utils';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import type { SystemProps } from '../types';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { fonts } from '@utilitywarehouse/design-tokens';

export type DefaultHeadingComponent = 'h2';

export const headingVariantMapping: Record<string, string> = {
  displayHeading: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

export interface CustomHeadingProps {
  /**
   * Applies the theme typography styles.
   * @default h2
   */
  variant: 'displayHeading' | 'h1' | 'h2' | 'h3' | 'h4';
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: React.ElementType;
  /**
   * Set the text color. It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   * @default colorsCommon.brandPrimaryPurple
   */
  color?: string;
  /**
   * Set the text-transform property on the component.
   */
  textTransform?: MuiTypographyProps['textTransform'];
}

export interface HeadingTypeMap<D extends React.ElementType = DefaultHeadingComponent, P = {}> {
  props: CustomHeadingProps & Omit<MuiTypographyProps<D, P>, 'variant' | SystemProps>;
  defaultComponent: D;
}

export type HeadingProps<
  D extends React.ElementType = DefaultHeadingComponent,
  P = {}
> = OverrideProps<HeadingTypeMap<D, P>, D>;

/**
 * Heading renders the primary UW font, to be used for heading-level typography.
 */
export const Heading = forwardRef(function Heading(
  { color = colorsCommon.brandPrimaryPurple, variant = 'h2', ...props },
  ref
) {
  const lineHeightMapping = { displayHeading: 1, h1: 1.2, h2: 1.5, h3: 2, h4: 1.5 };
  const fontSizeMapping = {
    displayHeading: { mobile: pxToRem(42), desktop: pxToRem(64) },
    h1: { mobile: pxToRem(32), desktop: pxToRem(42) },
    h2: { mobile: pxToRem(28), desktop: pxToRem(32) },
    h3: { mobile: pxToRem(22), desktop: pxToRem(24) },
    h4: { mobile: pxToRem(18), desktop: pxToRem(20) },
  };
  return (
    <MuiTypography
      ref={ref}
      variantMapping={headingVariantMapping}
      variant={variant}
      fontFamily={fonts.primary}
      fontSize={fontSizeMapping[variant]}
      lineHeight={lineHeightMapping[variant]}
      color={color}
      {...props}
    />
  );
}) as OverridableComponent<HeadingTypeMap>;
