import * as React from "react";
import MuiBox, {
  BoxProps,
  BoxTypeMap as MuiBoxTypeMap,
} from "@mui/material/Box";
import { OverridableComponent } from "@mui/material/OverridableComponent";

// NOTE: replace MuiBoxTypeMap with this when the system props have been removed
//
// export interface BoxTypeMap<P = {}, D extends React.ElementType = "div"> {
//   props: P & Pick<BoxProps, "sx" | "children" | "component">;
//   defaultComponent: D;
// }

const Box = React.forwardRef(function Box(
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
}) as OverridableComponent<MuiBoxTypeMap>;

export type { BoxProps };
export default Box;
