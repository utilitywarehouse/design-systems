import * as React from "react";
import MuiGrid, { GridTypeMap as MuiGridTypeMap } from "@mui/material/Grid";
import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";
import { SystemProps } from "../types";

const DEFAULT_COLUMNS = { mobile: 4, tablet: 8, desktop: 12 };
const DEFAULT_SPACING = { mobile: 2, tablet: 3, desktop: 3 };

interface TypeMap<
  D extends React.ElementType = MuiGridTypeMap["defaultComponent"],
  P = {}
> {
  props: Omit<MuiGridTypeMap<P, D>["props"], SystemProps>;
  defaultComponent: D;
}

export type GridProps<
  D extends React.ElementType = TypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TypeMap<D, P>, D>;

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
