import React from "react";
import { Story, Meta } from "@storybook/react";

import { LinkProps, Stack } from "../src";
import { Link, Typography } from "../src";
import { BackgroundStack, typographyVariants } from "./utils";
import type { TypographyProps } from "../src";

export default {
  title: "Components/Links",
  component: Link,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
    typographyVariant: {
      control: {
        type: "radio",
        options: typographyVariants,
      },
    },
    variant: {
      control: {
        type: "radio",
        options: typographyVariants,
      },
    },
  },
  args: {
    children: "link",
    typographyVariant: "body",
    variant: "body",
    textTransform: "capitalize",
  },
} as Meta;

export const LinkStory: Story<
  LinkProps & { typographyVariant: TypographyProps["variant"] }
> = (args) => {
  const { typographyVariant, ...rest } = args;
  return (
    <BackgroundStack>
      <Stack spacing={2}>
        <Typography variant={typographyVariant}>
          <Link href="#" {...rest} />
        </Typography>
        <Typography variant={typographyVariant}>
          This is an inline{" "}
          <Link href="#" {...rest} variant="inherit">
            link
          </Link>
          .
        </Typography>
      </Stack>
    </BackgroundStack>
  );
};

LinkStory.storyName = "Link";
