import React from "react";
import { Story, Meta } from "@storybook/react";

import type { InteractiveCardProps } from "../../src";
import { InteractiveCard, Typography } from "../../src";
import { BackgroundStack } from "../utils";
import Stack from "@mui/material/Stack";

const sizes = ["small", "regular", "large"] as const;

export default {
  title: "Components/InteractiveCard",
  component: InteractiveCard,
  argTypes: {
    forwardedRef: { table: { disable: true } },
    variant: { table: { disable: true } },
    sx: { table: { disable: true } },
    containerProps: { table: { disable: true } },
    Background: { table: { disable: true } },
  },
  args: {
    size: "regular",
  },
} as Meta;

export const InteractiveCardKitchenSinkStory: Story<
  InteractiveCardProps
> = () => {
  return (
    <BackgroundStack>
      <Stack direction="row" spacing={2} alignItems="center">
        {sizes.map((size) => (
          <InteractiveCard
            key={size}
            size={size}
            onClick={(e: React.MouseEvent) => e.preventDefault()}
            containerProps={{ sx: { width: "fit-content" } }}
          >
            <Typography component="span" textTransform="capitalize">
              {size} interactive card
            </Typography>
          </InteractiveCard>
        ))}
      </Stack>
    </BackgroundStack>
  );
};

InteractiveCardKitchenSinkStory.storyName = "Kitchen Sink";
InteractiveCardKitchenSinkStory.argTypes = {
  backgroundColor: { table: { disable: true } },
  size: { table: { disable: true } },
};

export const InteractiveCardCustomStory: Story<InteractiveCardProps> = (
  args
) => {
  return (
    <BackgroundStack>
      <InteractiveCard
        {...args}
        onClick={(e: React.MouseEvent) => e.preventDefault()}
        containerProps={{ sx: { width: "fit-content" } }}
      >
        <Typography component="span" textTransform="capitalize">
          interactive card
        </Typography>
      </InteractiveCard>
    </BackgroundStack>
  );
};

InteractiveCardCustomStory.storyName = "Custom";
InteractiveCardCustomStory.parameters = {
  chromatic: { disableSnapshot: true },
};
