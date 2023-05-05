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
   */
  variant: 'subtitle' | 'body' | 'legalNote' | 'caption';
  component: React.ElementType;
  color?: string;
  bold?: boolean;
  textTransform?: MuiTypographyProps['textTransform'];
}

export interface TextTypeMap<D extends React.ElementType = DefaultTextComponent, P = {}> {
  props: Omit<MuiTypographyProps<D, P>, 'variant' | SystemProps> & CustomTextProps;
  defaultComponent: D;
}

export type TextProps<D extends React.ElementType = DefaultTextComponent, P = {}> = OverrideProps<
  TextTypeMap<D, P>,
  D
>;

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
