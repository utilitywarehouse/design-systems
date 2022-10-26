import * as React from "react";
import MuiStack, { StackTypeMap as MuiStackTypeMap } from "@mui/material/Stack";
import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";
import { SystemProps } from "../types";

interface TypeMap<
  D extends React.ElementType = MuiStackTypeMap["defaultComponent"],
  P = {}
> {
  props: Omit<MuiStackTypeMap<P, D>["props"], SystemProps>;
  defaultComponent: D;
}

export type StackProps<
  D extends React.ElementType = TypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TypeMap<D, P>, D>;

export const Stack = React.forwardRef(function Stack(props, ref) {
  return <MuiStack ref={ref} {...props} />;
}) as OverridableComponent<TypeMap>;

export default Stack;
