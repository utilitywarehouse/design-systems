import React from "react";
import MuiBox, { BoxProps } from "@material-ui/core/Box";

const Box: React.ForwardRefRenderFunction<HTMLDivElement, BoxProps> = (
  props,
  ref
) => <MuiBox {...props} boxSizing="border-box" ref={ref} />;

export default React.forwardRef(Box);
