import * as React from 'react';
import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { DATA_ATTRIBUTES, isInverseBackgroundColor } from '../utils';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import type { NeutralBackgroundColor, InverseBackgroundColor } from '../types';
import type { Theme } from '../theme';
import MuiBox from '@mui/material/Box';

export const backgroundColorsMapping: { [key: string]: string } = {
  white: '#ffffff',
  whiteOwl: '#f4f3f6',
  lightTint: '#ebe0f2',
  purple: '#550091',
  midnight: '#1e0a46',
};

export type DefaultBackgroundComponent = 'div';

export interface CustomBackgroundProps {
  /**
   * Set the background colour according to predefined theme
   */
  backgroundColor?: NeutralBackgroundColor | InverseBackgroundColor;
}

export type BackgroundProps<
  D extends React.ElementType<any> = DefaultBackgroundComponent,
  P = {}
> = OverrideProps<MuiBoxTypeMap<CustomBackgroundProps & P, D, Theme>, D>;

/**
 * > This component is deprecated and will be removed in the next major version (`v1`).
 *
 * The Background component extends `Box` to support pre-defined background colours
 * that provide visual context to child components. This means that components
 * will change foreground colour depending on the parent background colour.
 *
 * > This component should be wrapped in a ThemeProvider
 *
 * @deprecated
 */
export const Background = forwardRef(function Background({ backgroundColor, ...props }, ref) {
  console.warn(
    'The Background component is deprecated and will be removed in v1, please use Box instead.'
  );
  const inverse = backgroundColor ? isInverseBackgroundColor(backgroundColor) : false;
  const dataAttributeProps = inverse ? { [DATA_ATTRIBUTES.inverse]: true } : {};

  return (
    <MuiBox
      ref={ref}
      bgcolor={backgroundColor && backgroundColorsMapping[backgroundColor]}
      {...dataAttributeProps}
      {...props}
    />
  );
}) as OverridableComponent<MuiBoxTypeMap<CustomBackgroundProps, DefaultBackgroundComponent, Theme>>;
