import React from "react";
import { Story, Meta } from "@storybook/react";

import { Box, InteractiveCardProps } from "../../src";
import { InteractiveCard, Typography } from "../../src";
import { BackgroundStack } from "../utils";

export default {
  title: "Components/InteractiveCard",
  component: InteractiveCard,
} as Meta;

export const InteractiveCardStory: Story<InteractiveCardProps> = (args) => {
  return (
    <BackgroundStack>
      <InteractiveCard
        {...args}
        onClick={(e: React.MouseEvent) => e.preventDefault()}
        containerProps={{ sx: { width: 500 } }}
      >
        <Box
          sx={{
            height: 200,
            display: "grid",
            placeItems: "center",
          }}
        >
          <Typography component="span">An interactive card</Typography>
        </Box>
      </InteractiveCard>
    </BackgroundStack>
  );
};

InteractiveCardStory.storyName = "InteractiveCard";
