import React from "react";
import { Story, Meta } from "@storybook/react";

import { Link, Typography, LinkProps, Stack, TypographyProps } from "../src";
import { BackgroundStack } from "./utils";

const typographyVariants: { [key in TypographyProps["variant"]]: boolean } = {
  h1: true,
  h2: true,
  h3: true,
  h4: true,
  default: true,
  displayHeading: true,
  subtitle: true,
  body: true,
  legalNote: true,
  caption: true,
  inherit: false,
};

const linkTypographyVariants = Object.keys(typographyVariants).filter(
  (variant) => typographyVariants[variant]
);

const linkVariantsInUse: { [key in LinkProps["variant"]]: boolean } = {
  default: true,
  active: true,
  secondary: true,
};

const linkVariants = Object.keys(linkVariantsInUse).filter(
  (variant) => linkVariantsInUse[variant]
);

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
        type: "select",
        options: linkTypographyVariants,
      },
    },
    variant: {
      control: {
        type: "radio",
        options: linkVariants,
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    children: "link",
    typographyVariant: "body",
    variant: "default",
    disabled: false,
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
          <Link href="#" {...rest}>
            Link
          </Link>
        </Typography>
        <Typography variant={typographyVariant}>
          This is an inline <Link href="#" {...rest} />.
        </Typography>
      </Stack>
    </BackgroundStack>
  );
};

LinkStory.storyName = "Link";
