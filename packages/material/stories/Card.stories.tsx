import React from "react";
import { Story, Meta } from "@storybook/react";

import { Box, CardProps, Stack } from "../src";
import { Card, Button, Typography } from "../src";
import { BackgroundStack } from "./utils";

export default {
  title: "Layout/Card",
  component: Card,
  argTypes: { variant: { table: { disable: true } } },
} as Meta;

export const CardStory: Story<CardProps> = (args) => {
  return (
    <BackgroundStack>
      <Stack direction="row" spacing={8}>
        {(["opaque", "transparent"] as const).map((variant) => (
          <Card
            {...args}
            key={variant}
            variant={variant}
            sx={{ maxWidth: 500 }}
          >
            <Stack spacing={5}>
              <Stack spacing={3}>
                <Typography
                  variant="h3"
                  style={{ textTransform: "capitalize" }}
                >
                  {variant} card component
                </Typography>
                <Typography>
                  Cards are surfaces that display content and actions on a
                  single topic. They should be easy to scan for relevant and
                  actionable information.
                </Typography>
              </Stack>
              <Box>
                <Button
                  variant="outlined"
                  onClick={(e: React.MouseEvent) => e.preventDefault()}
                >
                  Learn more
                </Button>
              </Box>
            </Stack>
          </Card>
        ))}
      </Stack>
    </BackgroundStack>
  );
};

CardStory.storyName = "Card";
