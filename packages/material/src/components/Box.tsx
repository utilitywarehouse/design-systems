import React from "react";
import MuiBox, { BoxProps as MuiBoxProps } from "@material-ui/core/Box";

export type BoxProps = Omit<MuiBoxProps, "ref">;

const Box: React.ForwardRefRenderFunction<HTMLDivElement, BoxProps> = (
  props,
  ref
) => <MuiBox {...props} boxSizing="border-box" ref={ref} />;

export default React.forwardRef(Box);
