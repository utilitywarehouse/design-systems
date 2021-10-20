import React from "react";
import { Story, Meta } from "@storybook/react";

import type { InteractiveCardProps } from "../src";
import { InteractiveCard, Typography } from "../src";
import { BackgroundStack } from "./utils";

export default {
  title: "Layout/InteractiveCard",
  component: InteractiveCard,
} as Meta;

export const InteractiveCardStory: Story<InteractiveCardProps> = (args) => {
  return (
    <BackgroundStack>
      <InteractiveCard
        {...args}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
        }}
      >
        <Typography variant="inherit">An interactive card</Typography>
      </InteractiveCard>
    </BackgroundStack>
  );
};

InteractiveCardStory.storyName = "InteractiveCard";
