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
        disable: true,
      },
    },
  },
  args: {
    children: "The quick brown fox jumped over the lazy dog.",
  },
} as Meta;

const Template: Story<TypographyProps> = (args) => (
  <BackgroundStack>
    <Typography {...args} />
  </BackgroundStack>
);

export const DisplayHeading = Template.bind({});
DisplayHeading.storyName = "Display heading";
DisplayHeading.args = { variant: "displayHeading", component: "h1" };

export const h1 = Template.bind({});
h1.storyName = "h1";
h1.args = { variant: "h1", component: "h1" };

export const h2 = Template.bind({});
h2.storyName = "h2";
h2.args = { variant: "h2", component: "h2" };

export const h3 = Template.bind({});
h3.storyName = "h3";
h3.args = { variant: "h3", component: "h3" };

export const h4 = Template.bind({});
h4.storyName = "h4";
h4.args = { variant: "h4", component: "h4" };

export const Subtitle = Template.bind({});
Subtitle.storyName = "Subtitle";
Subtitle.args = { variant: "subtitle", component: "h2" };

export const Body = Template.bind({});
Body.storyName = "Body";
Body.args = { variant: "body", component: "paragraph" };

export const LegalNote = Template.bind({});
LegalNote.storyName = "Legal Note";
LegalNote.args = { variant: "legalNote", component: "span" };

export const Caption = Template.bind({});
Caption.storyName = "Caption";
Caption.args = { variant: "caption", component: "span" };
