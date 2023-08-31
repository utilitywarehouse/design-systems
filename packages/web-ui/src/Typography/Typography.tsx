import { fonts, fontWeights } from '../tokens';
import { globalPrefix } from '../utils';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { createBox } from '@mui/system';
import { theme, type Theme } from '../theme';
import { LegacyTypography } from './LegacyTypography';
import { TypographyProps } from './Typography.props';
import { PropsWithStyleOverrides } from '../types';

const BaseBox = createBox<Theme>({
  defaultTheme: theme,
  defaultClassName: `${globalPrefix}-Typography`,
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
 * ## Alternatives
 *
 * - `Heading` for heading-level text
 * - `Text` for body text
 */
export const Typography = forwardRef<
  ElementRef<'span'>,
  PropsWithChildren<PropsWithStyleOverrides<TypographyProps>>
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
        fontWeight={fontWeights.secondary[weight]}
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
