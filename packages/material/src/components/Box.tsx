import React from "react";
import MuiBox, { BoxProps } from "@material-ui/core/Box";

const Box: React.FunctionComponent<BoxProps> = (props) => (
  <MuiBox {...props} boxSizing="border-box" />
);

export default Box;
