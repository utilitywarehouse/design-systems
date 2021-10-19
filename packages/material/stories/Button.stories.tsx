import React from "react";
import { Story, Meta } from "@storybook/react";

import { Background, Button, Box } from "../src";
import type { ButtonProps } from "../src";
import { backgroundLevels } from "./utils";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
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
    size: "regular",
    variant: "contained",
    children: "Button",
  },
} as Meta;

const bindTemplate = () => {
  const Template: Story<ButtonProps> = (args) => (
    <Box>
      {backgroundLevels.map((level) => (
        <Background
          key={level}
          backgroundColor={level}
          sx={{
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 3,
            paddingRight: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button {...args} />
          </Box>
        </Background>
      ))}
    </Box>
  );

  return Template;
};

export const Main = bindTemplate();

Main.storyName = "Button";
