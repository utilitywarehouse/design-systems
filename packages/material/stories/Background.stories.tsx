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
        options: ["white", "whiteOwl", "lightTint", "purple", "midnight"],
      },
    },
  },
  args: {
    backgroundColor: "white",
  },
} as Meta;

export const BackgroundStory: Story<BackgroundProps> = (args) => {
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
        <Typography variant="h2" textTransform="capitalize">
          {args.backgroundColor}
        </Typography>
      </Background>
    </Box>
  );
};

BackgroundStory.storyName = "Background";
BackgroundStory.parameters = {
  chromatic: { disableSnapshot: true },
};
