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
 * > This component is deprecated and will be removed in the next major version
 * > (`v1`), it exists only for backwards compatability with the
 * > `customer-ui-material` library.
 * >
 * > This component should be wrapped in a ThemeProvider.
 *
 * ## Alternatives
 *
 * - `Heading` for heading-level text
 * - `Text` for body text
 * - `Strong` for strong importance
 * - `Em` for emphasis
 *
 * @deprecated
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
