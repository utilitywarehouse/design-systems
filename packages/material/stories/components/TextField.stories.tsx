import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import { TextField } from "./TextField";
import type { TextFieldProps } from "./TextField";
import { Background, Box } from "../../src";

export default {
  title: `${base}TextField`,
  component: TextField,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    error: {
      control: {
        type: "boolean",
      },
    },
    success: {
      control: {
        type: "boolean",
      },
    },
    id: {
      control: {
        type: "text",
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    labelId: {
      control: {
        type: "text",
      },
    },
    helperText: {
      control: {
        type: "text",
      },
    },
    helperTextId: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    disabled: false,
    error: false,
    success: false,
    id: "customer-ui-textfield-input",
    label: "Label",
    labelId: "customer-ui-textfield-label",
    helperText: "Helper text",
    helperTextId: "customer-ui-textfield-helpertext",
  },
} as Meta;

export const Template: Story<TextFieldProps> = (args) => (
  <Box
    sx={{
      display: "grid",
      placeItems: "center",
      padding: 8,
    }}
  >
    <Background backgroundColor="level5">
      <TextField {...args} sx={{ width: 300 }} />
    </Background>
  </Box>
);

Template.storyName = "TextField";
