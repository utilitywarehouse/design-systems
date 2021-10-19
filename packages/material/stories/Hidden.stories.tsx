import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import { Background, Hidden, Box, Typography } from "../src";
import type { HiddenProps } from "../src";

export default {
  title: `${base}Hidden`,
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

const bindTemplate = () => {
  const Template: Story<HiddenProps> = (args) => {
    return (
      <Background backgroundColor="level4" paddingTop={2} paddingBottom={2}>
        <Box paddingX={2} paddingBottom={4}>
          <Typography>
            Try changing the props in the controls panel as well as the
            responsive views in the toolbar above to hide the content below.
          </Typography>
        </Box>
        <Hidden {...args}>
          <Background
            backgroundColor="level1"
            width="100%"
            height="200px"
            textAlign="center"
          >
            <Box
              flexDirection="column"
              display="flex"
              height="100%"
              justifyContent="center"
            >
              <Typography>Hide me 👀</Typography>
            </Box>
          </Background>
        </Hidden>
      </Background>
    );
  };

  return Template;
};

export const HiddenStory = bindTemplate();
HiddenStory.storyName = "Hidden";
