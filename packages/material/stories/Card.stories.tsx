import React from "react";
import { Story, Meta } from "@storybook/react";

import { CardProps, Stack } from "../src";
import { Card, Button, Typography } from "../src";
import { BackgroundStack } from "./utils";

export default {
  title: "Layout/Card",
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => {
  return (
    <BackgroundStack>
      <Card {...args} sx={{ maxWidth: 400 }}>
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography variant="h3">Card title</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Stack>
          <Button
            size="large"
            fullWidth
            variant="contained"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
            }}
          >
            Click me
          </Button>
        </Stack>
      </Card>
    </BackgroundStack>
  );
};

export const OpaqueCard = Template.bind({});
OpaqueCard.storyName = "Default (opaque)";

export const TransparentCard = Template.bind({});
TransparentCard.storyName = "Transparent";
TransparentCard.args = { variant: "transparent" };
