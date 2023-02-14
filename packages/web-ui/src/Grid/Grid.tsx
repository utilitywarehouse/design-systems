import MuiGrid, { GridProps as MuiGridProps } from '@mui/material/Grid';

const DEFAULT_COLUMNS = { mobile: 4, tablet: 8, desktop: 12 };
const DEFAULT_SPACING = { mobile: 2, tablet: 3, desktop: 3 };

export type GridProps<C extends React.ElementType = 'div'> = MuiGridProps<C, { component?: C }>;

function Grid<C extends React.ElementType>({ columns = DEFAULT_COLUMNS, ...props }: GridProps<C>) {
  if (props.container) {
    return <MuiGrid columns={columns} spacing={props.spacing || DEFAULT_SPACING} {...props} />;
  }
  return <MuiGrid columns={columns} {...props} />;
}

export default Grid;
