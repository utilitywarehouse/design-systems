import React from "react";
import { Story, Meta } from "@storybook/react";

import { Background, Box, Typography } from "../src";
import type { BackgroundProps } from "../src";

export default {
  title: "Layout/Background",
  component: Background,
  argTypes: {
    backgroundColor: {
      control: {
        type: "radio",
        options: ["level5", "level4", "level3", "level1", "level0"],
      },
    },
  },
  args: {
    backgroundColor: "level5",
  },
} as Meta;

export const BackgroundStory: Story<BackgroundProps> = (args) => {
  const colorNames = {
    level5: "Level 5 (White)",
    level4: "Level 4 (White Owl)",
    level3: "Level 3 (Light Tint)",
    level1: "Level 1 (Purple)",
    level0: "Level 0 (Midnight)",
  };
  return (
    <Box padding={3}>
      <Background
        {...args}
        sx={{
          width: "100%",
          height: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
        }}
      >
        <Typography variant="h2">
          Background {colorNames[args.backgroundColor]}
        </Typography>
      </Background>
    </Box>
  );
};

BackgroundStory.storyName = "Background";
