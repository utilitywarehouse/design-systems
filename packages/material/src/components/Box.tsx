import React from "react";
import MuiBox, { BoxProps } from "@mui/material/Box";

const Box: typeof MuiBox = React.forwardRef<HTMLElement, BoxProps>(function Box(
  props,
  ref
) {
  console.warn(
    `The Box system properties, used for styling, are deprecated in v2, and will be removed in v3. Please migrate to using the sx and styled utilities instead.`
  );
  return <MuiBox ref={ref} {...props} />;
}) as typeof MuiBox;

export default Box;
export type { BoxProps };
