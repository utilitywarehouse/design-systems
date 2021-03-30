import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";
import { Background, BackgroundProps, Box, BoxProps } from "../../src";
import HorizontalDisplayContainer from "../utils/HorizontalDisplayContainer";

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
    <HorizontalDisplayContainer>
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
    </HorizontalDisplayContainer>
  );

  return Template;
};

export const Main = bindTemplate();

Main.storyName = "Button";
