import MuiStack from '@mui/material/Stack';
import type { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import type { StackProps as MuiStackProps } from '@mui/material/Stack';

type DefaultStackComponent = 'div';

interface StackTypeMap<D extends React.ElementType = DefaultStackComponent, P = {}> {
  props: MuiStackProps<D, P>;
  defaultComponent: D;
}

type StackProps<D extends React.ElementType = DefaultStackComponent, P = {}> = OverrideProps<
  StackTypeMap<D, P>,
  D
>;

const Stack = forwardRef(function Stack(props, ref) {
  return <MuiStack ref={ref} {...props} />;
}) as OverridableComponent<StackTypeMap>;

export default Stack;
export type { DefaultStackComponent, StackTypeMap, StackProps };
