import React from "react";
import { Story, Meta } from "@storybook/react";

import { Icon } from "../src";
import type { IconProps } from "../src";
import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { BackgroundStack, icons } from "./utils";

const allIcons = [...icons["24x24"], ...icons["48x48"]];

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: "select",
        options: allIcons.map((icon) => icon.name),
      },
    },
    color: {
      control: {
        type: "select",
        options: colors,
      },
    },
  },
  args: {
    icon: allIcons[0].name,
    color: colors.midnight,
  },
} as Meta;

interface IconStoryProps extends Omit<IconProps, "icon"> {
  icon: string;
}

export const IconStory: Story<IconStoryProps> = (args) => {
  const icon = allIcons.find((icon) => icon.name === args.icon);
  return (
    <BackgroundStack>
      <Icon {...args} icon={icon} />
    </BackgroundStack>
  );
};
IconStory.storyName = "Icon";
