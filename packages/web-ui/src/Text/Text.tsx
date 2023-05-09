import { forwardRef } from 'react';
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { pxToRem } from '../utils';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import type { SystemProps } from '../types';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { fonts, fontWeights } from '@utilitywarehouse/design-tokens';

export type DefaultTextComponent = 'span';

export const textVariantMapping: Record<string, string> = {
  subtitle: 'p',
  body: 'p',
  legalNote: 'p',
  caption: 'span',
};

export interface CustomTextProps {
  /**
   * Applies the theme typography styles.
   * @default body
   */
  variant: 'subtitle' | 'body' | 'legalNote' | 'caption';
  /**
   * The component used for the root node. Either a string to use a HTML element or a component.
   */
  component: React.ElementType;
  /**
   * Set the text color. It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   * @default colorsCommon.brandMidnight
   */
  color?: string | 'primary' | 'success' | 'error';
  /**
   * Set the font-weight to semibold.
   * @default false
   */
  /**
   * Set the font-weight to semibold.
   * @default false
   */
  bold?: boolean;
  /**
   * Set the text-transform property on the component.
   */
  textTransform?: MuiTypographyProps['textTransform'];
}

export interface TextTypeMap<D extends React.ElementType = DefaultTextComponent, P = {}> {
  props: CustomTextProps & Omit<MuiTypographyProps<D, P>, 'variant' | SystemProps>;
  defaultComponent: D;
}

export type TextProps<D extends React.ElementType = DefaultTextComponent, P = {}> = OverrideProps<
  TextTypeMap<D, P>,
  D
>;

/**
 * Text renders the secondary UW font, Work Sans, to be used for body copy.
 */
export const Text = forwardRef(function Text(
  { color = colorsCommon.brandMidnight, variant = 'body', bold = false, ...props },
  ref
) {
  const lineHeightMapping = { body: 1.5, subtitle: 1.5, legalNote: 1.5, caption: 2 };
  const fontSizeMapping = {
    body: pxToRem(16),
    subtitle: { mobile: pxToRem(18), desktop: pxToRem(20) },
    legalNote: pxToRem(14),
    caption: pxToRem(12),
  };
  return (
    <MuiTypography
      ref={ref}
      variantMapping={textVariantMapping}
      variant={variant}
      color={color}
      fontFamily={fonts.secondary}
      fontSize={fontSizeMapping[variant]}
      fontWeight={fontWeights.secondary[bold ? 'semibold' : 'regular']}
      lineHeight={lineHeightMapping[variant]}
      {...props}
    />
  );
}) as OverridableComponent<TextTypeMap>;
