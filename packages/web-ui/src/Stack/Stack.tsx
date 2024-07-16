import * as React from 'react';
import MuiStack from '@mui/material/Stack';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import type { StackProps as MuiStackProps } from '@mui/material/Stack';

export type DefaultStackComponent = 'div';

export interface StackTypeMap<D extends React.ElementType = DefaultStackComponent, P = object> {
  props: MuiStackProps<D, P>;
  defaultComponent: D;
}

export type StackProps<
  D extends React.ElementType = DefaultStackComponent,
  P = object,
> = OverrideProps<StackTypeMap<D, P>, D>;

/**
 * Stack is a layout primitive, for managing layout of immediate children along the
 * vertical or horizontal axis with optional spacing and/or dividers between each
 * child.
 *
 * This component is directly based on the one from the '@mui/material' package, please
 * [check their site for further documentation](https://mui.com/material-ui/react-stack/).
 */
export const Stack = React.forwardRef(function Stack(props, ref) {
  return <MuiStack ref={ref} {...props} />;
}) as OverridableComponent<StackTypeMap>;
