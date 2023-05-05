import { forwardRef } from 'react';
import MuiTypography from '@mui/material/Typography';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import type { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import { Heading, HeadingProps, headingVariantMapping } from '../Heading';
import { Text, TextProps, textVariantMapping } from '../Text';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

export type DefaultTypographyComponent = 'p';

export interface CustomTypographyProps {
  color?: string;
  variant: MuiTypographyProps['variant'];
  component?: React.ElementType;
}

export interface TypographyTypeMap<
  D extends React.ElementType = DefaultTypographyComponent,
  P = {}
> {
  props: MuiTypographyProps<D, P> & CustomTypographyProps;
  defaultComponent: D;
}

export type TypographyProps<
  D extends React.ElementType = DefaultTypographyComponent,
  P = {}
> = OverrideProps<TypographyTypeMap<D, P>, D>;

export const Typography = forwardRef(function Typography(
  { color = colorsCommon.brandMidnight, variant, component = 'p', ...props },
  ref
) {
  if (variant && Object.keys(textVariantMapping).includes(variant)) {
    const colorMapping: { [key: string]: string } = {
      primary: colorsCommon.brandMidnight,
      success: 'green', // TODO: use a system colour
      error: colors.red600,
    };
    return (
      <Text
        ref={ref}
        color={colorMapping[color]}
        variant={variant as TextProps['variant']}
        component={component}
        {...props}
      />
    );
  }
  if (variant && Object.keys(headingVariantMapping).includes(variant)) {
    const colorMapping: { [key: string]: string } = {
      primary: colorsCommon.brandPrimaryPurple,
      secondary: colorsCommon.brandMidnight,
    };
    return (
      <Heading
        ref={ref}
        color={colorMapping[color]}
        variant={variant as HeadingProps['variant']}
        component={component}
        {...props}
      />
    );
  }
  return <MuiTypography ref={ref} color={color} component={component} {...props} />;
}) as OverridableComponent<TypographyTypeMap>;
