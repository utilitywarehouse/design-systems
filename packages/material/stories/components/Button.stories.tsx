import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button } from "../../src";
import type { ButtonProps } from "../../src";
import { BackgroundStack } from "../utils";
import Stack from "@mui/material/Stack";

const sizes = ["small", "medium", "large"] as const;
const variants = ["primary", "secondary", "tertiary"] as const;

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    forwardedRef: { table: { disable: true } },
    children: {
      control: {
        type: "text",
      },
    },
    href: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    size: "medium",
    variant: "primary",
    children: "Button",
    disabled: false,
    fullWidth: false,
  },
} as Meta;

export const ButtonKitchenSinkStory: Story<ButtonProps> = (args) => (
  <BackgroundStack>
    <Stack spacing={4}>
      {variants.map((variant) => (
        <Stack key={variant} direction="row" spacing={2} alignItems="center">
          <>
            {sizes.map((size) => (
              <Button key={size} {...args} size={size} variant={variant} />
            ))}
            {sizes.map((size) => (
              <Button key={size} size={size} variant={variant} disabled={true}>
                {args.children}
              </Button>
            ))}
          </>
        </Stack>
      ))}
    </Stack>
  </BackgroundStack>
);
ButtonKitchenSinkStory.storyName = "Kitchen Sink";
ButtonKitchenSinkStory.argTypes = {
  variant: { table: { disable: true } },
  size: { table: { disable: true } },
  disabled: { table: { disable: true } },
  fullWidth: { table: { disable: true } },
  href: { table: { disable: true } },
};

export const ButtonCustomStory: Story<ButtonProps> = (args) => (
  <BackgroundStack>
    <Button {...args} />
  </BackgroundStack>
);
ButtonCustomStory.storyName = "Custom";
ButtonCustomStory.parameters = {
  chromatic: { disableSnapshot: true },
};
