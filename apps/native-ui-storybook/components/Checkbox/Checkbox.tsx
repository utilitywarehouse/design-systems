import React from 'react';
import { Checkbox, CheckboxIndicator, CheckboxLabel } from '@utilitywarehouse/native-ui';
import { useArgs } from '@storybook/preview-api';

const CheckboxBasic = ({ isDisabled, isFocusVisible, CheckboxLabel: label }: any) => {
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
    >
      <CheckboxIndicator />
      {!!label && <CheckboxLabel>{label}</CheckboxLabel>}
    </Checkbox>
  );
};

CheckboxBasic.description = 'This is a basic Checkbox component example';

CheckboxBasic.argTypes = {
  isChecked: {
    type: 'boolean',
    control: 'boolean',
    description: 'When true, the checkbox will be checked.',
  },
  isDisabled: {
    type: 'boolean',
    control: 'boolean',
    description: 'To manually set disable to the checkbox.',
  },
  isFocusVisible: {
    type: 'boolean',
    control: 'boolean',
    description: 'To manually set focus visible state to the checkbox.',
  },
  CheckboxLabel: {
    type: 'string',
    control: 'text',
    description:
      'The label component for the checkbox.\n _Note: this is not a prop of the `Checkbox` component, just a representation of the `CheckboxLabel` component for the Storybook playground._',
  },
};

CheckboxBasic.args = {
  isChecked: false,
  isDisabled: false,
  isFocusVisible: false,
  CheckboxLabel: '',
};

export default CheckboxBasic;

export { Checkbox };
