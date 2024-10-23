import React from 'react';
import { Checkbox } from '@utilitywarehouse/native-ui';
import { useArgs } from '@storybook/preview-api';
import { StoryFn } from '@storybook/react';

const CheckboxBasic: StoryFn<{
  checked: boolean;
  disabled: boolean;
  label: string;
  validationStatus: 'initial' | 'valid' | 'invalid';
  showValidationIcon: boolean;
  invalidText: string;
  validText: string;
  helperText: string;
}> = ({ disabled, label: label, checked: _checked, ...props }) => {
  const [args, updateArgs] = useArgs();

  return (
    <Checkbox
      value="Label 1"
      aria-label="Label 1"
      onChange={(checked: boolean) => {
        updateArgs({ checked });
      }}
      nativeID="checkbox-1"
      checked={args.checked as boolean}
      disabled={disabled}
      label={label}
      {...props}
    />
  );
};

CheckboxBasic.argTypes = {
  checked: {
    type: 'boolean',
    control: 'boolean',
    description: 'When true, the checkbox will be checked.',
  },
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

CheckboxBasic.args = {
  checked: false,
  disabled: false,
  label: '',
  helperText: '',
  validationStatus: 'initial',
  showValidationIcon: true,
  invalidText: 'Invalid text',
  validText: 'Valid text',
};

export default CheckboxBasic;

export { Checkbox };
