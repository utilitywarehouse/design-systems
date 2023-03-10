import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { dataAttributes, isInverseBackgroundColor } from '../utils';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import type { NeutralBackgroundColor, InverseBackgroundColor } from '../types';
import type { Theme } from '../theme';
import MuiBox from '@mui/material/Box';

export type DefaultBoxComponent = 'div';

export interface CustomBoxProps {
  /**
   * Set the background colour according to predefined theme
   */
  background?: NeutralBackgroundColor | InverseBackgroundColor;
}

export type BoxProps<
  D extends React.ElementType<any> = DefaultBoxComponent,
  P = {}
> = OverrideProps<MuiBoxTypeMap<CustomBoxProps & P, D, Theme>, D>;

export const Box = forwardRef(function Box({ background, ...props }, ref) {
  const inverse = background ? isInverseBackgroundColor(background) : false;
  const dataAttributeProps = inverse ? { [`data-${dataAttributes.inverse}`]: true } : {};

  return (
    <MuiBox
      ref={ref}
      bgcolor={background && colors[background]}
      {...dataAttributeProps}
      {...props}
    />
  );
}) as OverridableComponent<MuiBoxTypeMap<CustomBoxProps, DefaultBoxComponent, Theme>>;
