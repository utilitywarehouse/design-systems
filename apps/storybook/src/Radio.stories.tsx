import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import RadioButton, { RadioButtonProps } from '../../src/components/Radio';
import Stack from '../../src/components/Stack';
import RadioGroup from '../../src/components/RadioGroup';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta;

export const RadioButtonStory: Story<RadioButtonProps> = () => {
  return (
    <Stack spacing={4} direction="row" sx={{ padding: 4 }}>
      <RadioGroup defaultValue="2" name="default-radio-group">
        <RadioButton label="Default radio button" value="1" id="radio-button-story-1" />
        <RadioButton label="Checked radio button" value="2" id="radio-button-story-2" />
        <RadioButton label="Disabled radio button" disabled id="radio-button-story-3" />
      </RadioGroup>

      <RadioGroup basic defaultValue="2" name="basic-radio-group">
        <RadioButton label="Basic radio button" value="1" id="radio-button-story-4" />
        <RadioButton label="Checked radio button" value="2" id="radio-button-story-5" />
        <RadioButton label="Disabled radio button" disabled id="radio-button-story-6" />
      </RadioGroup>
    </Stack>
  );
};
RadioButtonStory.storyName = 'RadioButton';
