import MuiGrid from '@mui/material/Grid';
import type { OverridableComponent , OverrideProps } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import type { GridProps as MuiGridProps } from '@mui/material/Grid';

const DEFAULT_COLUMNS = { mobile: 4, tablet: 8, desktop: 12 };
const DEFAULT_SPACING = { mobile: 2, tablet: 3, desktop: 3 };

type DefaultGridComponent = 'div';

interface GridTypeMap<D extends React.ElementType = DefaultGridComponent, P = {}> {
  props: MuiGridProps<D, P>;
  defaultComponent: D;
}

type GridProps<D extends React.ElementType = DefaultGridComponent, P = {}> = OverrideProps<
  GridTypeMap<D, P>,
  D
>;

const Grid = forwardRef(function Grid({ columns = DEFAULT_COLUMNS, ...props }, ref) {
  if (props.container) {
    return (
      <MuiGrid ref={ref} columns={columns} spacing={props.spacing || DEFAULT_SPACING} {...props} />
    );
  }
  return <MuiGrid ref={ref} columns={columns} {...props} />;
}) as OverridableComponent<GridTypeMap>;

export default Grid;
export type { DefaultGridComponent, GridTypeMap, GridProps };
