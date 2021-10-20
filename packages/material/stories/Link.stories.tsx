import React from "react";
import { Story, Meta } from "@storybook/react";

import type { LinkProps, TypographyProps } from "../src";
import { Link, Typography } from "../src";
import type { TypographyVariant } from "@utilitywarehouse/customer-ui-theme";
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
  title: "Components/Link",
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
    typographyVariant: "default",
    variant: "default",
  },
} as Meta;

export const LinkStory: Story<
  LinkProps & { typographyVariant: TypographyVariant }
> = (args) => {
  const { typographyVariant, ...rest } = args;
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <BackgroundStack>
      <Typography variant={typographyVariant}>
        <Link href="#" {...rest} onClick={onClick}>
          Link
        </Link>
      </Typography>
    </BackgroundStack>
  );
};

LinkStory.storyName = "Basic Link";

export const InlineLinkStory: Story<
  LinkProps & { typographyVariant: TypographyVariant }
> = (args) => {
  const { typographyVariant, ...rest } = args;
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <BackgroundStack>
      <Typography variant={typographyVariant}>
        This is an inline <Link href="#" {...rest} onClick={onClick} />.
      </Typography>
    </BackgroundStack>
  );
};

InlineLinkStory.storyName = "Inline Link";
