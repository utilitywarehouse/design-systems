import React from 'react';
import { Checkbox } from '@utilitywarehouse/native-ui';
import { useArgs } from '@storybook/preview-api';
import { StoryFn } from '@storybook/react';

const CheckboxBasic: StoryFn<{
  checked: boolean;
  disabled: boolean;
  label: string;
}> = ({ disabled, label: label }) => {
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
};

CheckboxBasic.args = {
  checked: false,
  disabled: false,
  label: '',
};

export default CheckboxBasic;

export { Checkbox };
