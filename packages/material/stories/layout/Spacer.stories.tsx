import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  Spacer,
  Box,
  Card,
  SpacerProps,
  Stack,
  Typography,
  Icon,
} from "../../src";
import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { icons } from "../utils";

export default {
  title: "Layout/Spacer",
  argTypes: {
    axis: {
      control: {
        type: "radio",
        options: {
          vertical: "vertical",
          horizontal: "horizontal",
        },
      },
      defaultValue: "vertical",
    },
    space: {
      control: {
        type: "radio",
        options: {
          xxs: "xxs",
          base: "base",
          small: "small",
          regular: "regular",
          medium: "medium",
          large: "large",
          xl: "xl",
          xxl: "xxl",
        },
      },
      if: { arg: "space", truthy: false },
    },
    size: {
      control: {
        type: "number",
      },
      if: { arg: "size", truthy: false },
    },
    inline: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {},
} as Meta;

const spaces: Array<SpacerProps["space"]> = [
  "xxs",
  "base",
  "small",
  "regular",
  "medium",
  "large",
  "xl",
  "xxl",
];

const getColour = (space: SpacerProps["space"]) => {
  switch (space) {
    case "xxs":
      return "#FFFA8B";
    case "base":
      return "#FCD980";
    case "small":
      return "#FCB580";
    case "regular":
      return "#F8BBD0";
    case "medium":
      return "#BD9BE6";
    case "large":
      return "#9DC3FF";
    case "xl":
      return "#A0EBF0";
    case "xxl":
      return "#B0DD8A";
    default:
      return colors.codGray10;
  }
};

export const SpacerStory: Story<SpacerProps> = (args) => {
  const { axis = "vertical", size, space: controlSpace, inline } = args;

  const isVertical = axis === "vertical";

  const inlineExists = typeof inline !== "undefined";

  return (
    <Stack spacing={2}>
      {inlineExists && (
        <Card
          sx={{
            mb: 2,
          }}
        >
          <Icon
            icon={icons["24x24"][0]}
            color={colors.cyan}
            sx={{ display: "inline-block", verticalAlign: "top" }}
          />
          <Spacer
            size={size}
            axis={axis}
            space={controlSpace}
            inline={inline}
          />
          <Typography variant="body" sx={{ display: "inline-block" }}>{`${
            controlSpace ? controlSpace : `${size ?? 1} x`
          } spacer`}</Typography>
        </Card>
      )}
      {!!size && (
        <Box
          sx={{
            display: "flex",
            flexDirection: isVertical ? "column" : "row",
            flexWrap: "wrap",
          }}
        >
          <Card
            sx={{
              mb: isVertical ? 0 : 2,
              ...(!isVertical && { flex: 1 }),
            }}
          >
            <Typography variant="body">{`${size} x spacer`}</Typography>
          </Card>
          <Box
            sx={{
              backgroundColor: colors.codGray10 ?? "white",
              mb: isVertical ? 0 : 2,
            }}
          >
            <Spacer size={size} axis={axis} />
          </Box>
          <Card
            sx={{
              mb: isVertical ? 0 : 2,
              ...(!isVertical && { flex: 1 }),
            }}
          >
            <Typography variant="body">{`${size}x spacer`}</Typography>
          </Card>
          {isVertical && <Spacer size={2} axis={axis} />}
        </Box>
      )}
      {!!controlSpace && (
        <Box
          sx={{
            display: "flex",
            flexDirection: isVertical ? "column" : "row",
            flexWrap: "wrap",
          }}
        >
          <Card
            sx={{
              mb: isVertical ? 0 : 2,
              ...(!isVertical && { flex: 1 }),
            }}
          >
            <Typography variant="body">{`${controlSpace} spacer`}</Typography>
          </Card>
          <Box
            sx={{
              backgroundColor: getColour(controlSpace) ?? "white",
              mb: isVertical ? 0 : 2,
            }}
          >
            <Spacer space={controlSpace} axis={axis} />
          </Box>
          <Card
            sx={{
              mb: isVertical ? 0 : 2,
              ...(!isVertical && { flex: 1 }),
            }}
          >
            <Typography variant="body">{`${controlSpace} spacer`}</Typography>
          </Card>
          {isVertical && <Spacer size={2} axis={axis} />}
        </Box>
      )}
      {!controlSpace &&
        !size &&
        !inlineExists &&
        spaces.map((space) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: isVertical ? "column" : "row",
              flexWrap: "wrap",
            }}
            key={space}
          >
            <Card
              sx={{
                mb: isVertical ? 0 : 2,
                ...(!isVertical && { flex: 1 }),
              }}
            >
              <Typography variant="body">{`${space} spacer`}</Typography>
            </Card>
            <Box
              sx={{
                backgroundColor: size
                  ? colors.codGray10
                  : getColour(space) ?? "white",
                mb: isVertical ? 0 : 2,
              }}
            >
              <Spacer space={space} axis={axis} />
            </Box>
            <Card
              sx={{
                mb: isVertical ? 0 : 2,
                ...(!isVertical && { flex: 1 }),
              }}
            >
              <Typography variant="body">{`${space} spacer`}</Typography>
            </Card>
            {isVertical && <Spacer size={2} axis={axis} />}
          </Box>
        ))}
    </Stack>
  );
};

SpacerStory.storyName = "Spacer";
