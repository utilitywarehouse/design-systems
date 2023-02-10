import { NeutralBackgroundColor, InverseBackgroundColor } from '../types';
import { dataAttributes, isInverseBackgroundColor } from '../utils';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';

import * as React from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';

export type BoxProps<C extends React.ElementType = 'div'> = Omit<
  MuiBoxProps<C, { component?: C }>,
  'background'
> & {
  /**
   * Change the brand background colour.
   * @default transparent
   *
   */
  background?: NeutralBackgroundColor | InverseBackgroundColor;
};

/**
 * Box is a low-level primitive, which supports theme-aware styling props, and can
 * be used for building any styled element.
 *
 * By default Box renders a div element, this can be customised using the
 * `component` prop.
 *
 * Additionally to the system properties, Box supports pre-defined backgrounds,
 * via the `background` prop that provide visual context to child components.
 * This means that components will change foreground colour depending on the
 * parent background colour.
 */
function Box<C extends React.ElementType>({ background, sx, ...props }: BoxProps<C>) {
  const inverse = background ? isInverseBackgroundColor(background) : false;
  const dataAttributeProps = {
    [`data-${dataAttributes.inverse}`]: inverse,
  };
  const backgroundColor = background ? colors[background] : 'transparent';
  return (
    <MuiBox
      {...props}
      {...dataAttributeProps}
      sx={{
        backgroundColor,
        ...sx,
      }}
    />
  );
}

export default Box;
