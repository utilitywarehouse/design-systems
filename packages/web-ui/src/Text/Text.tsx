import { forwardRef } from 'react';
import MuiTypography from '@mui/material/Typography';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { dataAttributes } from '../utils';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import { TypographyProps } from '../Typography';

type DefaultTextComponent = 'span';

export const textVariantMapping: Record<string, string> = {
  subtitle: 'p',
  body: 'p',
  legalNote: 'p',
  caption: 'span',
};

interface CustomTextProps {
  /**
   * Applies the theme typography styles.
   */
  variant: 'subtitle' | 'body' | 'legalNote' | 'caption';
  color?: 'primary' | 'success' | 'error';
  bold?: boolean;
  component: React.ElementType;
}

interface TextTypeMap<D extends React.ElementType = DefaultTextComponent, P = {}> {
  props: Omit<TypographyProps<D, P>, 'variant' | 'fontWeight' | 'color'> & CustomTextProps;
  defaultComponent: D;
}

type TextProps<D extends React.ElementType = DefaultTextComponent, P = {}> = OverrideProps<
  TextTypeMap<D, P>,
  D
>;

const Text = forwardRef(function Text({ color = 'primary', bold = false, ...props }, ref) {
  const dataAttributeProps = {
    [`data-${dataAttributes[color]}`]: true,
    [`data-${dataAttributes.bold}`]: bold,
  };
  return (
    <MuiTypography
      ref={ref}
      variantMapping={textVariantMapping}
      {...props}
      {...dataAttributeProps}
    />
  );
}) as OverridableComponent<TextTypeMap>;

export default Text;
export type { DefaultTextComponent, CustomTextProps, TextTypeMap, TextProps };
