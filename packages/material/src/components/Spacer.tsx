import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "./Box";
import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";
import { ResponsiveStyleValue } from "@mui/system/styleFunctionSx";
import { resolveBreakpointValues } from "@mui/system/breakpoints";

type defaultComponent = "span";

interface CustomProps<D extends React.ElementType = defaultComponent, P = {}>
  extends Pick<BoxProps<D, P>, "sx" | "component" | "classes" | "children"> {
  axis?: "horizontal" | "vertical";
  size: ResponsiveStyleValue<string>;
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
  {
    axis = "horizontal",
    size = 1,
    component = "span",
    inline = false,
    sx,
    ...props
  },
  ref
) {
  const theme = useTheme();

  const getWidth = () => {
    if (axis === "vertical") {
      return 1;
    }
    if (Array.isArray(size)) {
      return size.map((s: number) => theme.spacing(s));
    }
    if (typeof size === "object") {
      return Object.keys(theme.breakpoints.values).reduce(
        (acc: { [key: string]: string }, breakpoint: number) => {
          if (size[breakpoint] !== null) {
            acc[breakpoint] = theme.spacing(size[breakpoint]);
            return acc;
          }
        },
        {}
      );
    }
  };

  const width = axis === "vertical" ? 1 : getWidth();
  const height = axis === "horizontal" ? 1 : theme.spacing(size);
  return (
    // <StyledRoot
    //   ref={ref}
    //   axis={axis}
    //   size={size}
    //   component={component}
    //   {...props}
    // />
    <Box
      ref={ref}
      component={component}
      sx={{
        display: inline ? "inline-block" : "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...sx,
      }}
      {...props}
    />
  );
}) as OverridableComponent<TypeMap>;

export default Spacer;
