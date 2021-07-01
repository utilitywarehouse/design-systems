import React from "react";
import base from "paths.macro";
import { Story, Meta } from "@storybook/react";

import { TextField } from "./TextField";
import type { TextFieldProps } from "./TextField";
import { Background, BackgroundProps } from "../../src";

export default {
  title: `${base}TextField`,
  component: TextField,
  argTypes: {
    backgroundColor: {
      control: {
        type: "radio",
        options: ["level3", "level4", "level5"],
      },
    },
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
    helpertextid: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    backgroundColor: "level5",
    disabled: false,
    error: false,
    success: false,
    id: "customer-ui-textfield-input",
    label: "Label",
    labelId: "customer-ui-textfield-label",
    helperText: "Helper text",
    helperTextId: "customer-ui-textfield-helpertext",
    placeholder: "Placeholder",
  },
} as Meta;

interface StoryProps extends TextFieldProps {
  backgroundColor: BackgroundProps["backgroundColor"];
}

export const TextfieldStory: Story<StoryProps> = (args) => {
  const { backgroundColor, ...rest } = args;
  return (
    <Background
      backgroundColor={backgroundColor}
      sx={{
        padding: 6,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField {...rest} />
    </Background>
  );
};

TextfieldStory.storyName = "TextField";
