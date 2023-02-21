import { forwardRef } from 'react';
import MuiTypography from '@mui/material/Typography';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { dataAttributes } from '../utils';
import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import Heading, { HeadingProps, headingVariantMapping } from '../Heading';

type DefaultTypographyComponent = 'p';
type DefaultTextComponent = 'span';

export const textVariantMapping: Record<string, string> = {
  subtitle: 'p',
  body: 'p',
  legalNote: 'p',
  caption: 'span',
};

interface CustomTypographyProps {
  color?: 'primary' | 'secondary' | 'success' | 'error';
  bold?: boolean;
  variant: MuiTypographyProps['variant'];
}

interface TypographyTypeMap<D extends React.ElementType = DefaultTypographyComponent, P = {}> {
  props: MuiTypographyProps<D, P> & CustomTypographyProps;
  defaultComponent: D;
}

type TypographyProps<
  D extends React.ElementType = DefaultTypographyComponent,
  P = {}
> = OverrideProps<TypographyTypeMap<D, P>, D>;

interface CustomTextProps {
  /**
   * Applies the theme typography styles.
   */
  variant: 'subtitle' | 'body' | 'legalNote' | 'caption';
  color?: 'primary' | 'success' | 'error';
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

const Typography = forwardRef(function Typography(
  { color = 'primary', bold = false, variant, ...props },
  ref
) {
  if (variant && Object.keys(textVariantMapping).includes(variant)) {
    return (
      <Text
        ref={ref}
        bold={bold}
        color={color as TextProps['color']}
        variant={variant as TextProps['variant']}
        {...props}
      />
    );
  }
  if (variant && Object.keys(headingVariantMapping).includes(variant)) {
    return (
      <Heading
        ref={ref}
        color={color as HeadingProps['color']}
        variant={variant as HeadingProps['variant']}
        {...props}
      />
    );
  }
  return <MuiTypography ref={ref} {...props} />;
}) as OverridableComponent<TypographyTypeMap>;

export default Typography;
export { Text };
export type {
  DefaultTypographyComponent,
  CustomTypographyProps,
  TypographyTypeMap,
  TypographyProps,
  DefaultTextComponent,
  CustomTextProps,
  TextTypeMap,
  TextProps,
};
