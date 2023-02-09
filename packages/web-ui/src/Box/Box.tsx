import { forwardRef } from 'react';
import type { ElementType } from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { NeutralBackgroundColor, InverseBackgroundColor } from '../types';
import { dataAttributes, isInverseBackgroundColor } from '../utils';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';

type DefaultComponent = 'div';

type CustomProps<D extends ElementType = DefaultComponent, P = {}> = {
  /**
   * Changes the background colour, and provides context to child elements
   * that need to change colour accordingly
   */
  background?: NeutralBackgroundColor | InverseBackgroundColor;
} & Omit<MuiBoxProps<D, P>, 'background'>;

interface TypeMap<D extends ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type BoxProps<D extends ElementType = DefaultComponent, P = {}> = OverrideProps<
  TypeMap<D, P>,
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
}) as OverridableComponent<TypeMap>;

// const Box = (props: BoxProps) => {
//   const { background, sx, ...rest } = props;
//   const inverse = background ? isInverseBackgroundColor(background) : false;
//   const dataAttributeProps = {
//     [`data-${dataAttributes.inverse}`]: inverse,
//   };
//   const backgroundColor = background ? colors[background] : 'transparent';
//
//   return (
//     <MuiBox
//       {...rest}
//       {...dataAttributeProps}
//       sx={{
//         backgroundColor,
//         ...sx,
//       }}
//     />
//   );
// };

export default Box;
