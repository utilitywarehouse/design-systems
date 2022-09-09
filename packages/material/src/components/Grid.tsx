/* eslint-disable @typescript-eslint/ban-types */
import * as React from "react";
import MuiGrid, { GridTypeMap } from "@mui/material/Grid";
import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";

type TypeMap<
  P = {},
  D extends React.ElementType = GridTypeMap["defaultComponent"]
> = {
  props: GridTypeMap<P, D>["props"];
  defaultComponent: D;
};

export type GridProps<
  D extends React.ElementType = TypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TypeMap<P, D>, D>;

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
}) as OverridableComponent<TypeMap>;

export default Grid;
