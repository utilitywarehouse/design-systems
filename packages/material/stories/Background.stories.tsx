import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";
import { BackdropLevel } from "@utilitywarehouse/customer-ui-theme";

import { Background, Box, Typography } from "../src";
import type { BackgroundProps } from "../src";

export default {
  title: `${base}Backgrounds`,
  component: Background,
  argTypes: {
    backgroundColor: {
      control: {
        disable: true,
      },
    },
  },
} as Meta;

interface TemplateParams {
  backgroundColor: BackdropLevel;
  title: string;
}

const bindTemplate = (params: TemplateParams) => {
  const Template: Story<BackgroundProps> = (args) => {
    return (
      <Box padding={3}>
        <Background
          {...args}
          backgroundColor={params.backgroundColor}
          width="100%"
          height="300px"
          borderRadius="16px"
        >
          <Box
            display="flex"
            width="100%"
            height="100%"
            justifyContent="center"
          >
            <Box
              display="flex"
              width="100%"
              justifyContent="center"
              flexDirection="column"
              textAlign="center"
            >
              <Typography variant="h2">{params.title}</Typography>
            </Box>
          </Box>
        </Background>
      </Box>
    );
  };

  return Template;
};

export const Level0 = bindTemplate({
  backgroundColor: "level0",
  title: "Level 0 Background (Mid Night)",
});
Level0.storyName = "level0";

export const Level1 = bindTemplate({
  backgroundColor: "level1",
  title: "Level 1 Background (Dark Tint)",
});
Level1.storyName = "level1";

export const Level2 = bindTemplate({
  backgroundColor: "level2",
  title: "Level 2 Background (Mid Tint)",
});
Level2.storyName = "level2";

export const Level3 = bindTemplate({
  backgroundColor: "level3",
  title: "Level 3 Background (Light Tint)",
});
Level3.storyName = "level3";

export const Level4 = bindTemplate({
  backgroundColor: "level4",
  title: "Level 4 Background (White Owl)",
});
Level4.storyName = "level4";

export const Level5 = bindTemplate({
  backgroundColor: "level5",
  title: "Level 5 Background (White)",
});
Level5.storyName = "level5";
