import * as React from "react";
import MuiGrid, { GridProps as MuiGridProps } from "@mui/material/Grid";
import { BoxProps } from "./Box";

const DEFAULT_COLUMNS = { mobile: 4, tablet: 8, desktop: 12 };
const DEFAULT_SPACING = { mobile: 2, tablet: 3, desktop: 3 };

export interface GridProps extends MuiGridProps {
  component?: BoxProps["component"];
}

const Grid: typeof MuiGrid = React.forwardRef<HTMLDivElement, GridProps>(
  function Grid({ columns = DEFAULT_COLUMNS, ...props }, ref) {
    if (props.container) {
      return (
        <MuiGrid
          ref={ref}
          columns={columns}
          spacing={props.spacing || DEFAULT_SPACING}
          {...props}
        />
      );
    }
    return <MuiGrid ref={ref} columns={columns} {...props} />;
  }
);

export default Grid;
