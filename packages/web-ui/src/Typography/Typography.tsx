import { fonts, fontWeights } from '../tokens';
import { TypographyProps as MuiTypographyProps } from '@mui/material';
import { globalPrefix } from '../utils';
import { PropsWithStyleOverrides } from '../types';
import { forwardRef, PropsWithChildren } from 'react';
import { BoxProps as MuiBoxProps, createBox } from '@mui/system';
import { theme, type Theme } from '../theme';
import { LegacyTypography } from './LegacyTypography';
import { OverridableComponent, OverrideProps } from '@mui/types';

export type DefaultTypographyComponent = 'p';

const BaseBox = createBox<Theme>({
  defaultTheme: theme,
  defaultClassName: `${globalPrefix}-Typography`,
});

export interface CustomTypographyProps
  extends Pick<
    MuiBoxProps,
    | 'component'
    | 'fontSize'
    | 'lineHeight'
    | 'letterSpacing'
    | 'textTransform'
    | 'textAlign'
    | 'padding'
  > {
  fontFamily?: 'primary' | 'secondary';
  fontWeight?: 'regular' | 'semibold';
  noWrap?: boolean | undefined;
  color?: string | 'primary' | 'secondary' | 'success' | 'error';
  /** @deprecated The variant prop is deprecated and will be removed in v1 */
  variant?: MuiTypographyProps['variant'];
}

export interface TypographyTypeMap<D extends React.ElementType = DefaultTypographyComponent> {
  props: PropsWithChildren<PropsWithStyleOverrides<CustomTypographyProps>>;
  defaultComponent: D;
}

export type TypographyProps<D extends React.ElementType<any> = DefaultTypographyComponent> =
  OverrideProps<TypographyTypeMap, D>;

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
export const Typography = forwardRef(function Typography(
  { variant, fontFamily = 'secondary', fontWeight = 'regular', sx, noWrap, ...props },
  ref
) {
  if (!!variant) {
    return <LegacyTypography variant={variant} {...props} />;
  }
  return (
    <BaseBox
      ref={ref}
      fontFamily={fonts[fontFamily]}
      fontWeight={fontWeights.secondary[fontWeight]}
      {...props}
      sx={{
        ...(noWrap && {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }),
        ...sx,
      }}
    />
  );
}) as OverridableComponent<TypographyTypeMap>;
