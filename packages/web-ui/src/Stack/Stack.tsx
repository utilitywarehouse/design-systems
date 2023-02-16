import MuiStack from '@mui/material/Stack';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import { StackTypeMap } from './Stack.types';

const Stack = forwardRef(function Stack(props, ref) {
  return <MuiStack ref={ref} {...props} />;
}) as OverridableComponent<StackTypeMap>;

export default Stack;
