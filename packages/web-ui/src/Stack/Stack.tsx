import { forwardRef } from 'react';
import MuiStack, { StackProps as MuiStackProps } from '@mui/material/Stack';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import { StackTypeMap } from './Stack.types';

export interface StackProps extends MuiStackProps {}

export const Stack = forwardRef(function Stack(props, ref) {
  return <MuiStack ref={ref} {...props} />;
}) as OverridableComponent<StackTypeMap>;

export default Stack;
