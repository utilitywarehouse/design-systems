import React, { Fragment } from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";
import { withBackground } from "../../src";
import withCenterAlignment from "../hocs/withCenterAlignment";

export default {
  title: `${base}Buttons`,
  component: Button,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    size: "regular",
    variant: "contained",
    children: "Button",
  },
} as Meta;

const bindTemplate = (params) => {
  const Template: Story<ButtonProps> = (args) => {
    const Background = withBackground(
      withCenterAlignment(Fragment),
      params.level
    );

    return (
      <Background>
        <Button {...args} />
      </Background>
    );
  };

  return Template;
};

export const Primary = bindTemplate({
  level: "level3",
});

Primary.storyName = "Primary";

export const Secondary = bindTemplate({
  level: "level1",
});

Secondary.storyName = "Secondary";
