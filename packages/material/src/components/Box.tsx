import React from "react";
import MuiBox, { BoxProps } from "@mui/material/Box";

const Box = React.forwardRef<unknown, BoxProps>(function Box(props, ref) {
  console.warn(
    `The Box system properties, used for styling, are deprecated in v2, and will be removed in v3. Please migrate to using the sx and styled utilities instead.`
  );
  return <MuiBox ref={ref} {...props} />;
});

export default Box;
export type { BoxProps };
