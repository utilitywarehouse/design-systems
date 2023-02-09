import { NeutralBackgroundColor, InverseBackgroundColor } from '../types';
import { dataAttributes, isInverseBackgroundColor } from '../utils';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';

import * as React from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';

type DefaultComponent = 'div';

type CustomProps<D extends React.ElementType = DefaultComponent, P = {}> = {
  background?: NeutralBackgroundColor | InverseBackgroundColor;
} & MuiBoxProps<D, P>;

interface TypeMap<D extends React.ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type BoxProps<D extends React.ElementType = DefaultComponent, P = {}> = OverrideProps<
  TypeMap<D, P>,
  D
>;

/**
 * This is a Box description
 */
const Box = React.forwardRef(function Box({ background, sx, ...props }, ref) {
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

export default Box;
