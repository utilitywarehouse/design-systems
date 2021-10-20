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
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<BackgroundProps> = (props) => {
  const { title, ...rest } = props;
  return (
    <Box padding={3}>
      <Background
        {...rest}
        sx={{
          width: "100%",
          height: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
        }}
      >
        <Typography variant="h2">{title}</Typography>
      </Background>
    </Box>
  );
};

export const Level0 = Template.bind({});
Level0.storyName = "level0 (Midnight)";
Level0.args = {
  backgroundColor: "level0",
  title: "Level 0 Background (Midnight)",
};

export const Level1 = Template.bind({});
Level1.storyName = "level1 (Dark Tint)";
Level1.args = {
  backgroundColor: "level1",
  title: "Level 1 Background (Dark Tint)",
};

export const Level2 = Template.bind({});
Level2.storyName = "level2 (Mid Tint)";
Level2.args = {
  backgroundColor: "level2",
  title: "Level 2 Background (Mid Tint)",
};

export const Level3 = Template.bind({});
Level3.storyName = "level3 (Light Tint)";
Level3.args = {
  backgroundColor: "level3",
  title: "Level 3 Background (Light Tint)",
};

export const Level4 = Template.bind({});
Level4.storyName = "level4 (White Owl)";
Level4.args = {
  backgroundColor: "level4",
  title: "Level 4 Background (White Owl)",
};

export const Level5 = Template.bind({});
Level5.storyName = "level5 (White)";
Level5.args = {
  backgroundColor: "level5",
  title: "Level 5 Background (White)",
};
