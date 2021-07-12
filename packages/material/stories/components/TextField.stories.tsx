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
        type: "inline-radio",
        options: ["level3", "level4", "level5"],
      },
    },
    status: {
      control: {
        type: "inline-radio",
        options: {
          Default: "",
          Success: "success",
          Error: "error",
        },
      },
    },
    disabled: {
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
    labelProps: {
      control: {
        type: "object",
        id: {
          control: {
            type: "text",
          },
        },
      },
    },
    helperText: {
      control: {
        type: "text",
      },
    },
    helperTextProps: {
      control: {
        type: "object",
        id: {
          control: {
            type: "text",
          },
        },
      },
    },
  },
  args: {
    backgroundColor: "level5",
    disabled: false,
    status: "",
    id: "customer-ui-textfield-input",
    label: "Label",
    labelProps: { id: "customer-ui-textfield-label" },
    helperText: "Helper text",
    helperTextProps: { id: "customer-ui-textfield-helpertext" },
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
