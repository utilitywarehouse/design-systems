import React from "react";
import MuiGrid, { GridProps as MuiGridProps } from "@mui/material/Grid";

// Currently the MuiGrid component doesn't work with custom
// breakpoints, so we need to let it know what columns we want for our
// breakpoints, every time.
// https://github.com/mui/material-ui/issues/26369#issuecomment-1106234728
const DEFAULT_COLUMNS = { mobile: 4, tablet: 8, desktop: 12 };
const DEFAULT_SPACING = { mobile: 2, tablet: 3, desktop: 3 };

export interface GridProps extends MuiGridProps {
  desktop?: MuiGridProps["lg"];
  tablet?: MuiGridProps["lg"];
  mobile?: MuiGridProps["lg"];
}

const Grid: React.FC<GridProps> = ({
  desktop,
  tablet,
  mobile,
  columns = DEFAULT_COLUMNS,
  spacing = DEFAULT_SPACING,
  ...props
}) => {
  return (
    <MuiGrid
      columns={columns}
      spacing={spacing}
      {...{ mobile, tablet, desktop }}
      {...props}
    />
  );
};

export default Grid;
