import type { ElementType } from 'react';
import type { StackProps as MuiStackProps } from '@mui/material/Stack';
import type { OverrideProps } from '@mui/material/OverridableComponent';

type DefaultComponent = 'div';

export interface StackTypeMap<D extends ElementType = DefaultComponent, P = {}> {
  props: MuiStackProps<D, P>;
  defaultComponent: D;
}

export type StackProps<D extends ElementType = DefaultComponent, P = {}> = OverrideProps<
  StackTypeMap<D, P>,
  D
>;
