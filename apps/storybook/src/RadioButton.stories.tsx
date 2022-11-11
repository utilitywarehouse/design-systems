import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { BackgroundStack } from "../utils";
import RadioButton from "../../src/components/RadioButton";
import { RadioGroup } from "@mui/material";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    forwardedRef: { table: { disable: true } },
  },
  args: {},
} as Meta;

enum RadioValues {
  YES = "Yes",
  NO = "No",
  DISABLED = "Disabled",
}

export const RadioButtonStory: Story = () => {
  const radioContainer = { margin: 24 };
  const [radioValue, setRadioValue] = useState<RadioValues>(RadioValues.YES);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value as RadioValues);
  };

  return (
    <BackgroundStack>
      <RadioGroup
        value={radioValue}
        onChange={handleChange}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={radioContainer}>
          <RadioButton
            label="Yes"
            value={RadioValues.YES}
            color="secondary"
            selected={radioValue === RadioValues.YES}
          />
        </div>
        <div style={radioContainer}>
          <RadioButton
            label="No"
            value={RadioValues.NO}
            color="secondary"
            selected={radioValue === RadioValues.NO}
          />
        </div>
        <div style={radioContainer}>
          <RadioButton
            label="Disabled"
            value={RadioValues.DISABLED}
            color="secondary"
            selected={true}
            disabled
          />
        </div>
        <div style={radioContainer}>
          <RadioButton
            label="Disabled"
            value={RadioValues.DISABLED}
            color="secondary"
            selected={false}
            disabled
          />
        </div>
      </RadioGroup>
    </BackgroundStack>
  );
};
RadioButtonStory.storyName = "RadioButton";
