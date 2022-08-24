import React from "react";
import { Story, Meta } from "@storybook/react";

import { BackgroundColor, Box, TextFieldProps } from "../src";
import { Background, TextField } from "../src";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    status: {
      control: {
        type: "radio",
        options: {
          default: "",
          success: "success",
          error: "error",
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
    helperText: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    status: "",
    disabled: false,
    multiline: false,
    label: "Label",
    helperText: "Helper text",
    placeholder: "Placeholder",
  },
} as Meta;

export const TextfieldStory: Story<TextFieldProps> = (args) => {
  const { ...rest } = args;
  const backgroundLevels = [5, 4, 3].map(
    (level) => `level${level}` as BackgroundColor
  );
  return (
    <Box>
      {backgroundLevels.map((level) => (
        <Background
          key={level}
          backgroundColor={level}
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingY: 6,
            paddingX: 4,
          }}
        >
          <TextField {...rest} />
        </Background>
      ))}
    </Box>
  );
};

TextfieldStory.storyName = "TextField";
