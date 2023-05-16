import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { dataAttributes, isInverseBackgroundColor } from '../utils';
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
  background?: NeutralBackgroundColor | InverseBackgroundColor;
}

export type BackgroundProps<
  D extends React.ElementType<any> = DefaultBackgroundComponent,
  P = {}
> = OverrideProps<MuiBoxTypeMap<CustomBackgroundProps & P, D, Theme>, D>;

/**
 * The Background component extends `Box` to support pre-defined background colours
 * that provide visual context to child components. This means that components
 * will change foreground colour depending on the parent background colour.
 * @deprecated
 */
export const Background = forwardRef(function Background({ background, ...props }, ref) {
  console.warn(
    'The Background component is deprecated and will be removed in v1, please use Box instead.'
  );
  const inverse = background ? isInverseBackgroundColor(background) : false;
  const dataAttributeProps = inverse ? { [`data-${dataAttributes.inverse}`]: true } : {};

  return (
    <MuiBox
      ref={ref}
      bgcolor={background && backgroundColorsMapping[background]}
      {...dataAttributeProps}
      {...props}
    />
  );
}) as OverridableComponent<MuiBoxTypeMap<CustomBackgroundProps, DefaultBackgroundComponent, Theme>>;
