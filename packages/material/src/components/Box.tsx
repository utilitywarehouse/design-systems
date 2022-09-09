/* eslint-disable @typescript-eslint/ban-types */
import * as React from "react";
import MuiBox, { BoxTypeMap } from "@mui/material/Box";
import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";

type TypeMap<
  P = {},
  D extends React.ElementType = BoxTypeMap["defaultComponent"]
> = {
  props: BoxTypeMap<P, D>["props"];
  defaultComponent: D;
};

export type BoxProps<
  D extends React.ElementType = TypeMap["defaultComponent"],
  P = {}
> = OverrideProps<TypeMap<P, D>, D>;

const Box = React.forwardRef<HTMLElement, BoxProps>(function Box(
  { sx, component, children, className, ...systemProps },
  ref
) {
  const props = { sx, component, children, className };
  if (Object.keys(systemProps).length > 0) {
    console.warn(
      `The Box system properties, used for styling, are deprecated in v2, and will be removed in v3. Please migrate to using the sx and styled utilities instead.`
    );
  }
  return <MuiBox ref={ref} {...systemProps} {...props} />;
}) as OverridableComponent<TypeMap>;

export default Box;
