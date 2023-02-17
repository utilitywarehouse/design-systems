import MuiBox from '@mui/material/Box';
import type { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { dataAttributes, isInverseBackgroundColor } from '../utils';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import type { NeutralBackgroundColor, InverseBackgroundColor } from '../types';

type DefaultBoxComponent = 'div';

interface CustomBoxProps extends MuiBoxProps {
  /**
   * Set the background colour according to predefined theme
   */
  background?: NeutralBackgroundColor | InverseBackgroundColor;
}

interface BoxTypeMap<D extends React.ElementType = DefaultBoxComponent, P = {}> {
  props: MuiBoxProps<D, P> & CustomBoxProps;
  defaultComponent: D;
}

type BoxProps<D extends React.ElementType = DefaultBoxComponent, P = {}> = OverrideProps<
  BoxTypeMap<D, P>,
  D
>;

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
const Box = forwardRef(function BaseBox({ background, sx, ...props }, ref) {
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
export type { CustomBoxProps, DefaultBoxComponent, BoxTypeMap, BoxProps };
