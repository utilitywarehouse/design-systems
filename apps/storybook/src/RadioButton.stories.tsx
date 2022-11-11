import * as React from "react";
import { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { BackgroundStack } from "../utils";
import RadioButton from "../../src/components/RadioButton";
import RadioGroup from "../../src/components/RadioGroup";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
} as Meta;

enum RadioValues {
  YES = "Yes",
  NO = "No",
  DISABLED = "Disabled",
}

export const RadioButtonStory: Story = () => {
  const [radioValue, setRadioValue] = useState<RadioValues>(RadioValues.YES);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value as RadioValues);
  };

  return (
    <BackgroundStack>
      <RadioGroup value={radioValue} onChange={handleChange}>
        <RadioButton
          label="Yes"
          value={RadioValues.YES}
          color="secondary"
          selected={radioValue === RadioValues.YES}
        />
        <RadioButton
          label="No"
          value={RadioValues.NO}
          color="secondary"
          selected={radioValue === RadioValues.NO}
        />
        <RadioButton
          label="Disabled"
          value={RadioValues.DISABLED}
          color="secondary"
          selected={true}
          disabled
        />
        <RadioButton
          label="Disabled"
          value={RadioValues.DISABLED}
          color="secondary"
          selected={false}
          disabled
        />
      </RadioGroup>
    </BackgroundStack>
  );
};
RadioButtonStory.storyName = "RadioButton";
