import * as React from "react";
import { styled, Theme } from "@mui/material/styles";
import Box, { BoxProps } from "./Box";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface SpacerProps
  extends Pick<BoxProps, "sx" | "component" | "classes" | "children"> {
  axis?: "horizontal" | "vertical";
  size?: number;
  space?:
    | "xxs"
    | "base"
    | "small"
    | "regular"
    | "medium"
    | "large"
    | "xl"
    | "xxl";
  inline?: boolean;
}

function getSpaceSize(space: SpacerProps["space"], size: number): number {
  const spaceValues = {
    xxs: 0.5,
    base: 1,
    small: 2,
    regular: 3,
    medium: 4,
    large: 6,
    xl: 8,
    xxl: 12,
  };
  return space ? spaceValues[space] : size;
}

function getHeight({
  axis,
  size = 1,
  space,
  theme,
}: SpacerProps & { theme: Theme }) {
  return axis === "horizontal" ? 1 : theme.spacing(getSpaceSize(space, size));
}

function getWidth({
  axis,
  size = 1,
  space,
  theme,
}: SpacerProps & { theme: Theme }) {
  return axis === "vertical" ? 1 : theme.spacing(getSpaceSize(space, size));
}

const StyledRoot = styled(Box)<SpacerProps>((props) => ({
  display: props.inline ? "inline-block" : "block",
  width: getWidth(props),
  minWidth: getWidth(props),
  height: getHeight(props),
  minHeight: getHeight(props),
}));

interface SpacerTypeMap<P = {}, D extends React.ElementType = "div"> {
  props: P & SpacerProps;
  defaultComponent: D;
}

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
}) as OverridableComponent<SpacerTypeMap>;

export default Spacer;
