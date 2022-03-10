import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  TextLink,
  Typography,
  TextLinkProps,
  Stack,
  TypographyProps,
} from "../src";
import { BackgroundStack } from "./utils";

const variants = [
  "inherit",
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

export default {
  title: "Components/Links",
  components: TextLink,
  argTypes: {
    children: {
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
    typographyWrapperVariant: {
      control: {
        type: "radio",
        options: variants.filter((v) => v !== "inherit"),
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    children: "text link",
    variant: "inherit",
    typographyWrapperVariant: "body",
  },
} as Meta;

export const TextLinkStory: Story<
  TextLinkProps & { typographyWrapperVariant: TypographyProps["variant"] }
> = (args) => {
  return (
    <BackgroundStack>
      <Stack spacing={2}>
        <Typography variant="body">
          <TextLink href="#" {...args} />
        </Typography>
        <Typography variant={args.typographyWrapperVariant}>
          This is a <TextLink href="#" {...args} variant="inherit" /> used
          within a sentence, inheriting typography styles from the surrounding{" "}
          {args.typographyWrapperVariant} component.
        </Typography>
      </Stack>
    </BackgroundStack>
  );
};

TextLinkStory.storyName = "TextLink";
