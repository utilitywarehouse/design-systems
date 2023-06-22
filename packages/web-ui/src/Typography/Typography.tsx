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

export type DefaultTypographyComponent = 'p';

export interface CustomTypographyProps {
  color?: string | 'primary' | 'secondary' | 'success' | 'error';
  /** @deprecated The variant prop is deprecated and will be removed in v1 */
  variant?: MuiTypographyProps['variant'];
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
  { color, variant, component, ...props },
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
  if (isLegacyTextVariant) {
    console.warn(
      'The Typography variant prop is deprecated, please use the Text component instead'
    );
  }
  const dataAttributeProps = isLegacyColor
    ? {
        [`data-${dataAttributes.legacy}`]: true,
        // @ts-ignore
        [`data-${dataAttributes[getLegacyColor(color)]}`]: true,
      }
    : {};

  //   const variantSizeMapping: { [key: string]: TextProps['size'] } = {
  //     caption: 'xs',
  //     legalNote: 'sm',
  //     body: 'md',
  //     subtitle: 'lg',
  //   };
  //   return (
  //     <Text
  //       size={variantSizeMapping[variant]}
  //       component={component || 'p'}
  //       {...props}
  //       {...dataAttributeProps}
  //     />
  //   );
  // }
  if (isLegacyHeadingVariant) {
    console.warn(
      'The Typography variant prop is deprecated, please use the Heading component instead'
    );
  }
  //   const dataAttributeProps = isLegacyColor
  //     ? {
  //         [`data-${dataAttributes.legacy}`]: true,
  //         // @ts-ignore
  //         [`data-${dataAttributes[getLegacyColor(color)]}`]: true,
  //       }
  //     : {};
  //   const variantSizeMapping: { [key: string]: HeadingProps['size'] } = {
  //     h4: 'xs',
  //     h3: 'sm',
  //     h2: 'md',
  //     h1: 'lg',
  //     displayHeading: 'xl',
  //   };
  //   return (
  //     <Heading
  //       ref={ref}
  //       size={variantSizeMapping[variant]}
  //       component={component || 'h2'}
  //       {...props}
  //       {...dataAttributeProps}
  //     />
  //   );
  // }

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
}) as OverridableComponent<TypographyTypeMap>;
