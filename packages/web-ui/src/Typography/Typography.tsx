import * as React from 'react';
import { fonts, fontWeights } from '../tokens';
import { LegacyTypography } from './LegacyTypography';
import { TypographyProps } from './Typography.props';
import { PropsWithSx } from '../types';
import { createBox } from '../Box/createBox';

const componentName = 'Typography';
const BaseBox = createBox<'p' | 'span' | 'div' | 'label' | 'strong' | 'em' | 'legend'>({
  componentName,
});

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
 * > When using the variant prop, this component should be wrapped in a ThemeProvider.
 *
 * ## Alternatives
 *
 * - `Heading` for heading-level text
 * - `Text` for body text
 * - `Strong` for strong importance
 * - `Em` for emphasis
 */
export const Typography = React.forwardRef<
  React.ElementRef<'span'>,
  React.PropsWithChildren<PropsWithSx<TypographyProps>>
>(
  (
    {
      component = 'p',
      variant,
      fontFamily = 'secondary',
      weight = 'regular',
      align,
      sx,
      noWrap,
      ...props
    },
    ref
  ) => {
    if (!!variant) {
      return <LegacyTypography ref={ref} component={component} variant={variant} {...props} />;
    }

    return (
      <BaseBox
        ref={ref}
        component={component}
        fontFamily={fontFamily === 'inherit' ? 'inherit' : fonts[fontFamily]}
        fontWeight={weight === 'inherit' ? 'inherit' : fontWeights.secondary[weight]}
        textAlign={align}
        {...props}
        sx={{
          ...(noWrap && { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }),
          ...sx,
        }}
      />
    );
  }
);

Typography.displayName = componentName;
