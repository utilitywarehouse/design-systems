import React from 'react';
import { RadioGroup, Radio, RadioIndicator, RadioLabel } from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';

const RadioBasic: StoryFn<{
  disabled: boolean;
  label: string;
}> = ({ disabled, label }) => {
  return (
    <>
      <RadioGroup>
        <Radio
          value="Label 1"
          aria-label="Label 1"
          onChange={(checked: boolean) => {
            console.log(checked, '###');
          }}
          nativeID="Radio-1"
          disabled={disabled}
          label={label}
        />
      </RadioGroup>
    </>
  );
};

RadioBasic.argTypes = {
  disabled: {
    type: 'boolean',
    control: 'boolean',
    description: 'To manually set disable to the Radio.',
  },
  label: {
    type: 'string',
    control: 'text',
    description: 'The label component for the Radio.',
  },
};

RadioBasic.args = {
  disabled: false,
  label: '',
};

export default RadioBasic;
