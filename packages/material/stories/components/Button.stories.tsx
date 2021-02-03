import React, { Fragment } from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";
import { withBackground, BackgroundColor } from "../../src";
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
      params.backgroundColor
    );

    return (
      <Background>
        <Button {...args} />
      </Background>
    );
  };

  return Template;
};

export const Light = bindTemplate({ backgroundColor: BackgroundColor.level3 });

export const Dark = bindTemplate({ backgroundColor: BackgroundColor.level1 });
