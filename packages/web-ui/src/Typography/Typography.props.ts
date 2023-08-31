import { TypographyProps as MuiTypographyProps } from '@mui/material';
import { BoxProps as MuiBoxProps } from '@mui/system';
import { ComponentPropsWithoutRef } from 'react';

export interface TypographyProps
  extends Pick<
      MuiBoxProps,
      | 'component'
      | 'fontSize'
      | 'fontStyle'
      | 'lineHeight'
      | 'letterSpacing'
      | 'textTransform'
      | 'padding'
      | 'margin'
    >,
    ComponentPropsWithoutRef<'span'> {
  fontFamily?: 'primary' | 'secondary' | 'inherit';
  weight?: 'regular' | 'semibold' | 'inherit';
  align?: MuiBoxProps['textAlign'];
  noWrap?: boolean | undefined;
  color?: string | 'primary' | 'secondary' | 'success' | 'error';
  /** @deprecated The variant prop is deprecated and will be removed in v1 */
  variant?: MuiTypographyProps['variant'];
}
