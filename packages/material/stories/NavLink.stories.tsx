import React from "react";
import { Story, Meta } from "@storybook/react";

import { NavLink, NavLinkProps } from "../src";
import { BackgroundStack } from "./utils";

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

export default {
  title: "Components/Links",
  components: NavLink,
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
    active: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    children: "Nav link",
    variant: "body",
    disabled: false,
    active: false,
  },
} as Meta;

export const NavLinkStory: Story<NavLinkProps> = (args) => {
  return (
    <BackgroundStack>
      <NavLink href="#" {...args} />
    </BackgroundStack>
  );
};

NavLinkStory.storyName = "NavLink";
