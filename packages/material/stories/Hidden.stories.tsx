import React from "react";
import { Story, Meta } from "@storybook/react";

import { Background, Hidden, Box, Typography, Stack } from "../src";
import type { HiddenProps } from "../src";

export default {
  title: "Layout/Hidden",
  component: Hidden,
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
    only: {
      control: {
        type: "multi-select",
        options: ["mobile", "tablet", "desktop"],
      },
    },
  },
} as Meta;

export const HiddenStory: Story<HiddenProps> = (args) => {
  return (
    <Stack spacing={4} sx={{ padding: 4 }}>
      <Typography>
        Try changing the props in the controls panel as well as the responsive
        views in the toolbar above to hide the content below.
      </Typography>

      <Hidden {...args}>
        <Background
          backgroundColor="level1"
          sx={{
            width: "100%",
            height: 200,
          }}
        />
      </Hidden>
    </Stack>
  );
};

HiddenStory.storyName = "Hidden";
