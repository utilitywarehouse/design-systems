import * as React from 'react';
import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { SystemProps } from '../../types';

type DefaultComponent = 'span';

type CustomProps<D extends React.ElementType = DefaultComponent, P = {}> = Omit<
  MuiBoxProps<D, P>,
  SystemProps
>;

interface TypeMap<D extends React.ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type BoxProps<D extends React.ElementType = DefaultComponent, P = {}> = OverrideProps<
  TypeMap<D, P>,
  D
>;

const Box = React.forwardRef(function Box(props, ref) {
  return <MuiBox ref={ref} {...props} />;
}) as OverridableComponent<TypeMap>;

export default Box;
