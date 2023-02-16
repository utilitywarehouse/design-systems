import type { GridProps as MuiGridProps } from '@mui/material/Grid';
import type { OverrideProps } from '@mui/material/OverridableComponent';

type DefaultGridComponent = 'div';

interface GridTypeMap<D extends React.ElementType = DefaultGridComponent, P = {}> {
  props: MuiGridProps<D, P>;
  defaultComponent: D;
}

type GridProps<D extends React.ElementType = DefaultGridComponent, P = {}> = OverrideProps<
  GridTypeMap<D, P>,
  D
>;

export type { DefaultGridComponent, GridTypeMap, GridProps };
