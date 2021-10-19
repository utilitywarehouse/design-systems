import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import { Background, Button, Box, BackgroundProps, BoxProps } from "../src";
import type { ButtonProps } from "../src";

export default {
  title: `${base}Buttons`,
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    size: "regular",
    variant: "contained",
    children: "Button",
  },
} as Meta;

const bindTemplate = () => {
  const backgroundProps: Partial<BackgroundProps> = {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 3,
    paddingRight: 3,
    display: "flex",
    flexDirection: "column",
  };

  const boxProps: BoxProps = {
    display: "flex",
    justifyContent: "center",
  };

  const Template: Story<ButtonProps> = (args) => (
    <Box>
      <Background backgroundColor="level0" {...backgroundProps}>
        <Box {...boxProps}>
          <Button {...args} />
        </Box>
      </Background>
      <Background backgroundColor="level1" {...backgroundProps}>
        <Box {...boxProps}>
          <Button {...args} />
        </Box>
      </Background>
      <Background backgroundColor="level2" {...backgroundProps}>
        <Box {...boxProps}>
          <Button {...args} />
        </Box>
      </Background>
      <Background backgroundColor="level3" {...backgroundProps}>
        <Box {...boxProps}>
          <Button {...args} />
        </Box>
      </Background>
      <Background backgroundColor="level4" {...backgroundProps}>
        <Box {...boxProps}>
          <Button {...args} />
        </Box>
      </Background>
      <Background backgroundColor="level5" {...backgroundProps}>
        <Box {...boxProps}>
          <Button {...args} />
        </Box>
      </Background>
    </Box>
  );

  return Template;
};

export const Main = bindTemplate();

Main.storyName = "Button";
