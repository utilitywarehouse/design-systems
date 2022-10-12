import React from "react";
import { Story, Meta } from "@storybook/react";

import { Spacer, Box, SpacerProps } from "../../src";
import { colors } from "@utilitywarehouse/customer-ui-design-tokens";

export default {
  title: "Layout/Spacer",
  argTypes: {
    forwardedRef: { table: { disable: true } },
    axis: {
      control: {
        type: "radio",
        options: ["vertical", "horizontal"],
      },
    },
    size: {
      control: {
        type: "number",
      },
    },
    inline: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    size: 1,
    axis: "vertical",
    inline: false,
  },
} as Meta;

export const SpacerStory: Story<SpacerProps> = (args) => {
  const sx = {
    paddingY: 4,
    paddingX: 8,
    backgroundColor: colors.purple,
  };
  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box component="span" sx={sx} />
      <Spacer {...args} size={{ mobile: 2, tablet: 4, desktop: 8 }} />
      <Box component="span" sx={sx} />
    </Box>
  );
};

SpacerStory.storyName = "Spacer";
