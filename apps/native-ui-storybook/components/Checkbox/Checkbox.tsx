import React from 'react';
import { Checkbox } from '@utilitywarehouse/native-ui';
import { useArgs } from '@storybook/preview-api';

const CheckboxBasic = ({ isDisabled, isFocusVisible, label }) => {
  const [args, updateArgs] = useArgs();

  return (
    <Checkbox
      value="Label 1"
      aria-label="Label 1"
      onChange={(isSelected: boolean) => {
        updateArgs({ isChecked: isSelected });
      }}
      nativeID="checkbox-1"
      isChecked={args.isChecked}
      isDisabled={isDisabled}
      isFocusVisible={isFocusVisible}
      label={label}
    />
  );
};

CheckboxBasic.description = 'This is a basic Checkbox component example';

CheckboxBasic.argTypes = {
  isChecked: {
    type: 'boolean',
    control: 'boolean',
  },
  isDisabled: {
    type: 'boolean',
    control: 'boolean',
  },
  isFocusVisible: {
    type: 'boolean',
    control: 'boolean',
  },
  label: {
    type: 'string',
    control: 'text',
  },
};

CheckboxBasic.args = {
  label: '',
  isDisabled: false,
  isChecked: false,
  isFocusVisible: false,
};

export default CheckboxBasic;

export { Checkbox };
