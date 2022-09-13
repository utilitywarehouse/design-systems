import * as React from "react";
import MuiGrid, { GridTypeMap, GridProps } from "@mui/material/Grid";
import { OverridableComponent } from "@mui/material/OverridableComponent";

const DEFAULT_COLUMNS = { mobile: 4, tablet: 8, desktop: 12 };
const DEFAULT_SPACING = { mobile: 2, tablet: 3, desktop: 3 };

export const Grid = React.forwardRef(function Grid(
  { columns = DEFAULT_COLUMNS, ...props },
  ref
) {
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
}) as OverridableComponent<GridTypeMap>;

export type { GridProps };
export default Grid;
