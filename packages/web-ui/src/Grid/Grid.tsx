import { forwardRef } from 'react';
import MuiGrid from '@mui/material/Grid';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import { GridTypeMap } from './Grid.types';

const DEFAULT_COLUMNS = { mobile: 4, tablet: 8, desktop: 12 };
const DEFAULT_SPACING = { mobile: 2, tablet: 3, desktop: 3 };

export const Grid = forwardRef(function Grid({ columns = DEFAULT_COLUMNS, ...props }, ref) {
  if (props.container) {
    return (
      <MuiGrid ref={ref} columns={columns} spacing={props.spacing || DEFAULT_SPACING} {...props} />
    );
  }
  return <MuiGrid ref={ref} columns={columns} {...props} />;
}) as OverridableComponent<GridTypeMap>;

export default Grid;
