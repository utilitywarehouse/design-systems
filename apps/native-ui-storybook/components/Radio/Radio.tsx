import React from 'react';
import { RadioGroup, Radio, RadioIndicator, RadioLabel } from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';

const RadioBasic: StoryFn<{
  disabled: boolean;
  label: string;
  validationStatus: 'initial' | 'valid' | 'invalid';
  showValidationIcon: boolean;
  invalidText: string;
  validText: string;
  helperText: string;
}> = ({ disabled, label, ...props }) => {
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
          {...props}
        />
      </RadioGroup>
    </>
  );
};

RadioBasic.argTypes = {
  disabled: {
    type: 'boolean',
    control: 'boolean',
    description: 'To manually set disable to the checkbox.',
  },
  label: {
    type: 'string',
    control: 'text',
    description: 'The label component for the checkbox.',
  },
  helperText: {
    type: 'string',
    control: 'text',
    description: 'The helper text of the checkbox component',
    defaultValue: 'Helper text',
  },
  validationStatus: {
    control: 'select',
    options: ['initial', 'valid', 'invalid'],
    description: 'The validation status of the checkbox component',
    defaultValue: 'initial',
  },
  showValidationIcon: {
    control: 'boolean',
    description: 'Show the validation icon.',
    defaultValue: true,
  },
  invalidText: {
    control: 'text',
    description: 'The invalid text of the checkbox component',
    defaultValue: 'Invalid text',
  },
};

RadioBasic.args = {
  disabled: false,
  label: '',
  helperText: '',
  validationStatus: 'initial',
  showValidationIcon: true,
  invalidText: 'Invalid text',
  validText: 'Valid text',
};

export default RadioBasic;
