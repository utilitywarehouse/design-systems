import React from "react";
import MuiGrid, { GridProps as MuiGridProps } from "@mui/material/Grid";
import { BoxProps as MuiBoxProps } from "@mui/material/Box";

const DEFAULT_COLUMNS = { mobile: 4, tablet: 8, desktop: 12 };
const DEFAULT_SPACING = { mobile: 2, tablet: 3, desktop: 3 };

export interface GridProps extends MuiGridProps {
  component?: MuiBoxProps["component"];
}

const Grid: React.FC<GridProps> = ({
  columns = DEFAULT_COLUMNS,
  spacing = DEFAULT_SPACING,
  ...props
}) => {
  return <MuiGrid columns={columns} spacing={spacing} {...props} />;
};

export default Grid;
