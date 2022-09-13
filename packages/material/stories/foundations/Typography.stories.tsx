import React from "react";
import { Meta, Story } from "@storybook/react";
import { Typography } from "../../src";
import type { TypographyProps } from "../../src";
import { BackgroundStack } from "../utils";
import Stack from "@mui/material/Stack";

const variants = [
  "displayHeading",
  "h1",
  "h2",
  "h3",
  "h4",
  "subtitle",
  "body",
  "legalNote",
  "caption",
] as const;

const colors = ["primary", "secondary", "success", "error"] as const;

export default {
  title: "Foundations/Typography",
  component: Typography,
  argTypes: {
    forwardedRef: { table: { disable: true } },
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
        options: variants,
      },
    },
    color: {
      control: {
        type: "radio",
        options: colors,
      },
    },
    fontWeight: {
      control: {
        type: "radio",
        options: ["regular", "semibold"],
      },
    },
    letterSpacing: {
      control: {
        type: "text",
      },
    },
    textTransform: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    children: "hamburgefons",
    variant: "displayHeading",
    color: "primary",
    fontWeight: "regular",
    textTransform: "capitalize",
    gutterBottom: false,
    paragraph: false,
    noWrap: false,
  },
} as Meta;

export const TypographyKitchenSinkStory: Story<TypographyProps> = (args) => {
  return (
    <BackgroundStack>
      <Stack spacing={2}>
        {variants.map((v) => (
          <Stack key={v} spacing={4} direction="row">
            <Typography {...args} variant={v} />
          </Stack>
        ))}
      </Stack>
    </BackgroundStack>
  );
};
TypographyKitchenSinkStory.storyName = "Kitchen Sink";
TypographyKitchenSinkStory.argTypes = {
  variant: { table: { disable: true } },
  gutterBottom: { table: { disable: true } },
  paragraph: { table: { disable: true } },
  component: { table: { disable: true } },
  classes: { table: { disable: true } },
  sx: { table: { disable: true } },
  align: { table: { disable: true } },
  noWrap: { table: { disable: true } },
};
TypographyKitchenSinkStory.args = {
  color: "primary",
  fontWeight: "regular",
};

export const TypographyCustomStory: Story<TypographyProps> = (args) => {
  return (
    <BackgroundStack>
      <Typography {...args} />
    </BackgroundStack>
  );
};
TypographyCustomStory.storyName = "Custom";
