import { styled, Theme } from "@mui/material/styles";
import Box, { BoxProps } from "./Box";

export interface SpacerProps
  extends Pick<BoxProps, "ref" | "sx" | "component" | "classes"> {
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
  switch (space) {
    case "xxs":
      return 0.5;
    case "base":
      return 1;
    case "small":
      return 2;
    case "regular":
      return 3;
    case "medium":
      return 4;
    case "large":
      return 6;
    case "xl":
      return 8;
    case "xxl":
      return 12;
    default:
      return size;
  }
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

const Spacer: React.FunctionComponent<SpacerProps> = styled(Box)<SpacerProps>(
  (props) => ({
    display: props.inline ? "inline-block" : "block",
    width: getWidth(props),
    minWidth: getWidth(props),
    height: getHeight(props),
    minHeight: getHeight(props),
  })
);

Spacer.defaultProps = {
  axis: "horizontal",
  size: 1,
  component: "span",
};

export default Spacer;
