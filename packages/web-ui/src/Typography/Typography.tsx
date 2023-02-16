import { forwardRef } from 'react';
import MuiTypography from '@mui/material/Typography';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { dataAttributes } from '../utils';
import {
  HeadingProps,
  HeadingTypeMap,
  TextProps,
  TextTypeMap,
  TypographyTypeMap,
} from './Typography.types';

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

const Heading = forwardRef(function Heading({ color = 'primary', ...props }, ref) {
  const dataAttributeProps = {
    [`data-${dataAttributes[color]}`]: true,
  };
  return (
    <MuiTypography
      ref={ref}
      variantMapping={headingVariantMapping}
      {...props}
      {...dataAttributeProps}
    />
  );
}) as OverridableComponent<HeadingTypeMap>;

const Typography = forwardRef(function Typography(
  { color = 'primary', bold = false, variant, ...props },
  ref
) {
  if (variant && Object.keys(textVariantMapping).includes(variant)) {
    return (
      <Text
        ref={ref}
        color={color as TextProps['color']}
        bold={bold}
        variant={variant as TextProps['variant']}
        {...props}
      />
    );
  }
  return (
    <Heading
      ref={ref}
      color={color as HeadingProps['color']}
      variant={variant as HeadingProps['variant']}
      {...props}
    />
  );
}) as OverridableComponent<TypographyTypeMap>;

export default Typography;
export { Text, Heading };
