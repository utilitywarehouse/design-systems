import * as React from 'react';
import MuiStack, { StackTypeMap as MuiStackTypeMap } from '@mui/material/Stack';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { SystemProps } from '../types';

type DefaultComponent = 'div';

type CustomSystemProps = Omit<SystemProps, 'alignItems'>;

type CustomProps<D extends React.ElementType = DefaultComponent, P = {}> = Omit<
  MuiStackTypeMap<P, D>['props'],
  keyof CustomSystemProps
>;

interface TypeMap<D extends React.ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type StackProps<
  D extends React.ElementType = TypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TypeMap<D, P>, D>;

export const Stack = React.forwardRef(function Stack(props, ref) {
  return <MuiStack ref={ref} {...props} />;
}) as OverridableComponent<TypeMap>;

export default Stack;
