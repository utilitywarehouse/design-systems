import MuiGrid, { GridProps as MuiGridProps } from '@mui/material/Grid';

const DEFAULT_COLUMNS = { mobile: 4, tablet: 8, desktop: 12 };
const DEFAULT_SPACING = { mobile: 2, tablet: 3, desktop: 3 };

export interface GridProps extends MuiGridProps {}

export const Grid = function Grid({ columns = DEFAULT_COLUMNS, ...props }: GridProps) {
  if (props.container) {
    return <MuiGrid columns={columns} spacing={props.spacing || DEFAULT_SPACING} {...props} />;
  }
  return <MuiGrid columns={columns} {...props} />;
};

export default Grid;
