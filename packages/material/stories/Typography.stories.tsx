import React from "react";
import { Meta, Story } from "@storybook/react";
import { Typography } from "../src";
import type { TypographyProps } from "../src";
import { BackgroundStack } from "./utils";

export default {
  title: "Foundations/Typography",
  component: Typography,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    component: {
      control: {
        type: "text",
      },
    },
    variant: {
      control: {
        type: "radio",
        options: [
          "displayHeading",
          "h1",
          "h2",
          "h3",
          "h4",
          "subtitle",
          "body",
          "legalNote",
          "caption",
        ],
      },
    },
  },
  args: {
    children: "Hamburgefons",
    variant: "displayHeading",
  },
} as Meta;

export const TypographyStory: Story<TypographyProps> = (args) => (
  <BackgroundStack>
    <Typography {...args} />
  </BackgroundStack>
);
TypographyStory.storyName = "Typography";
