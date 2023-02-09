import type { ElementType } from 'react';
import type { GridProps as MuiGridProps } from '@mui/material/Grid';
import type { OverrideProps } from '@mui/material/OverridableComponent';

type DefaultComponent = 'div';

export interface GridTypeMap<D extends ElementType = DefaultComponent, P = {}> {
  props: MuiGridProps<D, P>;
  defaultComponent: D;
}

export type GridProps<D extends ElementType = DefaultComponent, P = {}> = OverrideProps<
  GridTypeMap<D, P>,
  D
>;
