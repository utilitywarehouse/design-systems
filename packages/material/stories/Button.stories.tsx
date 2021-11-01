import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button } from "../src";
import type { ButtonProps } from "../src";
import { BackgroundStack } from "./utils";

export default {
  title: "Components/Button",
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

export const ButtonStory: Story<ButtonProps> = (args) => (
  <BackgroundStack>
    <Button {...args} />
  </BackgroundStack>
);
ButtonStory.storyName = "Button";
