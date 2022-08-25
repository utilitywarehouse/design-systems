import React from "react";
import MuiBox, { BoxProps as MuiBoxProps } from "@mui/material/Box";

export type BoxProps = MuiBoxProps;

const Box: React.FC<BoxProps> = React.forwardRef(function Box(props, ref) {
  console.warn(
    `[DEPRECATED] In the Box component, all of the @mui system properties used for styling are deprecated in v2, and will be removed in v3. Please migrate to using the sx and styled utilities`
  );
  return <MuiBox ref={ref} {...props} />;
});

export default Box;
