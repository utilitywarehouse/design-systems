import * as React from "react";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "./Box";
import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";

type defaultComponent = "span";

interface CustomProps<D extends React.ElementType = defaultComponent, P = {}>
  extends Pick<BoxProps<D, P>, "sx" | "component" | "classes" | "children"> {
  axis?: "horizontal" | "vertical";
  size: number;
  inline?: boolean;
}

interface TypeMap<D extends React.ElementType = defaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type SpacerProps<
  D extends React.ElementType = defaultComponent,
  P = {}
> = OverrideProps<TypeMap<D, P>, D>;

const StyledRoot = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "axis" && prop !== "size" && prop !== "inline",
})<CustomProps>(({ theme, axis, size, inline }) => {
  const width = axis === "vertical" ? 1 : theme.spacing(size);
  const height = axis === "horizontal" ? 1 : theme.spacing(size);
  return {
    display: inline ? "inline-block" : "block",
    width,
    minWidth: width,
    height,
    minHeight: height,
  };
});

const Spacer = React.forwardRef(function Spacer(
  { axis = "horizontal", size = 1, component = "span", ...props },
  ref
) {
  return (
    <StyledRoot
      ref={ref}
      axis={axis}
      size={size}
      component={component}
      {...props}
    />
  );
}) as OverridableComponent<TypeMap>;

export default Spacer;
