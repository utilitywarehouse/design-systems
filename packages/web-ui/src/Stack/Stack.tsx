import MuiStack from '@mui/material/Stack';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import type { StackProps as MuiStackProps } from '@mui/material/Stack';

export type DefaultStackComponent = 'div';

export interface StackTypeMap<D extends React.ElementType = DefaultStackComponent, P = {}> {
  props: MuiStackProps<D, P>;
  defaultComponent: D;
}

export type StackProps<D extends React.ElementType = DefaultStackComponent, P = {}> = OverrideProps<
  StackTypeMap<D, P>,
  D
>;

export const Stack = forwardRef(function Stack(props, ref) {
  return <MuiStack ref={ref} {...props} />;
}) as OverridableComponent<StackTypeMap>;
