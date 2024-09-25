import * as React from 'react';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import MuiStack from '@mui/material/Stack';
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
 * > This component is deprecated and will be removed in `v2`. Please use `Flex` instead.
 *
 * Stack is a layout primitive, for managing layout of immediate children along the
 * vertical or horizontal axis with optional spacing and/or dividers between each
 * child.
 *
 * This component is directly based on the one from the '@mui/material' package, please
 * [check their site for further documentation](https://mui.com/material-ui/react-stack/).
 *
 * @deprecated Please use `Flex` instead.
 */
export const Stack = React.forwardRef(function Stack(props, ref) {
  return <MuiStack ref={ref} {...props} />;
}) as OverridableComponent<StackTypeMap>;
