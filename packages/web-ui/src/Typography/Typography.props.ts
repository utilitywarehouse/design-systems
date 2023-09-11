import { TypographyProps as MuiTypographyProps } from '@mui/material';
import { BoxProps as MuiBoxProps } from '@mui/system';
import { ComponentPropsWithoutRef } from 'react';

export interface TypographyOwnProps {
  fontFamily?: 'primary' | 'secondary' | 'inherit';
  weight?: 'regular' | 'semibold' | 'inherit';
  align?: MuiBoxProps['textAlign'];
  noWrap?: boolean | undefined;
  color?: string | 'primary' | 'secondary' | 'success' | 'error';
  /** @deprecated The variant prop is deprecated and will be removed in v1 */
  variant?: MuiTypographyProps['variant'];
  /** @deprecated The fontWeight prop is deprecated and will be removed in v1 */
  fontWeight?: 'regular' | 'semibold' | 'inherit';
}

export interface TypographyProps
  extends TypographyOwnProps,
    Pick<
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
    ComponentPropsWithoutRef<'span'> {}
