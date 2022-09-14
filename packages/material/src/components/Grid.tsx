import * as React from "react";
import MuiGrid, { GridTypeMap } from "@mui/material/Grid";
import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";
import { SystemProps } from "../types";

const DEFAULT_COLUMNS = { mobile: 4, tablet: 8, desktop: 12 };
const DEFAULT_SPACING = { mobile: 2, tablet: 3, desktop: 3 };

interface CustomGridTypeMap<
  D extends React.ElementType = GridTypeMap["defaultComponent"],
  P = {}
> {
  props: Omit<GridTypeMap<P, D>["props"], SystemProps>;
  defaultComponent: D;
}

export type GridProps<
  D extends React.ElementType = CustomGridTypeMap["defaultComponent"],
  P = {}
> = OverrideProps<CustomGridTypeMap<D, P>, D>;

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
}) as OverridableComponent<CustomGridTypeMap>;

export default Grid;
