import MuiBox from '@mui/material/Box';
import { dataAttributes, isInverseBackgroundColor } from '../utils';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import { BoxTypeMap } from './Box.types';

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
const Box = forwardRef(function Box({ background, sx, ...props }, ref) {
  const inverse = background ? isInverseBackgroundColor(background) : false;
  const dataAttributeProps = {
    [`data-${dataAttributes.inverse}`]: inverse,
  };
  const backgroundColor = background ? colors[background] : 'transparent';

  return (
    <MuiBox
      ref={ref}
      {...props}
      {...dataAttributeProps}
      sx={{
        backgroundColor,
        ...sx,
      }}
    />
  );
}) as OverridableComponent<BoxTypeMap>;

export default Box;
