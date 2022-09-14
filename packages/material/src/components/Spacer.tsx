import * as React from "react";
import { styled, Theme } from "@mui/material/styles";
import Box, { BoxProps } from "./Box";
import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";

type defaultComponent = "span";

interface CustomProps<D extends React.ElementType = defaultComponent, P = {}>
  extends Pick<BoxProps<D, P>, "sx" | "component" | "classes" | "children"> {
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

interface TypeMap<D extends React.ElementType = defaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type SpacerProps<
  D extends React.ElementType = defaultComponent,
  P = {}
> = OverrideProps<TypeMap<D, P>, D>;

function getSpaceSize(space: CustomProps["space"], size: number): number {
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
}: CustomProps & { theme: Theme }) {
  return axis === "horizontal" ? 1 : theme.spacing(getSpaceSize(space, size));
}

function getWidth({
  axis,
  size = 1,
  space,
  theme,
}: CustomProps & { theme: Theme }) {
  return axis === "vertical" ? 1 : theme.spacing(getSpaceSize(space, size));
}

const StyledRoot = styled(Box)<CustomProps>((props) => ({
  display: props.inline ? "inline-block" : "block",
  width: getWidth(props),
  minWidth: getWidth(props),
  height: getHeight(props),
  minHeight: getHeight(props),
}));

interface SpacerTypeMap<P = {}, D extends React.ElementType = "div"> {
  props: P & CustomProps;
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
